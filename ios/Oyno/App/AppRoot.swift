import StoreKit
import SwiftUI

/// The composition root: every store is built here and handed down through the environment,
/// and every gate (splash, funnel, sign-in, paywall) is decided here rather than by a screen.
///
/// The first run is one sequence keyed on `didFinishFirstRun`: the funnel argues, sign-in is a
/// wall with no door, the paywall asks once, then Home. A subscription that lapses later never
/// walls the launch screen: reads are free, and `OynoStore` refuses writes, which raises the
/// paywall here as a full-screen cover on its count of refusals.
struct AppRoot: View {
    @Environment(\.scenePhase) private var scenePhase
    @Environment(\.requestReview) private var requestReview
    @State private var auth: AuthStore
    @State private var oyno: OynoStore
    @State private var purchases: PurchaseStore
    @State private var kidHours: KidHoursStore
    @State private var dealer = Dealer()

    @State private var tab = RootTab.home
    /// The game or moment being played, over the tabs from its timer to its Done screen.
    @State private var round: Session?
    @State private var roundPath: [PlayRoute] = []
    @State private var didLoad = false
    @State private var splashDone = false
    /// True while a signed-in account's entitlement is on the wire during the first run, so a
    /// payer never sees the paywall flash.
    @State private var isRestoring = false
    @State private var adoptedUserID: String?
    @State private var paywall: PaywallContext?
    @AppStorage("oyno.didOnboard") private var didFinishFirstRun = false
    @AppStorage("oyno.didFunnel") private var didFunnel = false
    @AppStorage("oyno.didAskForReview") private var didAskForReview = false
    @AppStorage("oyno.age") private var age = AgeBand.toddler
    @AppStorage("oyno.energy") private var energy = Energy.low
    @AppStorage(InterfaceLanguage.overrideKey, store: InterfaceLanguage.store) private var language = "en"

    init() {
        Analytics.shared.configure(apiKey: AppConfig.amplitudeAPIKey, environment: AppConfig.analyticsEnvironment)
        let auth = AuthStore()
        _auth = State(initialValue: auth)
        // Purchases before the store, because the store asks it whether it may write.
        let purchases = PurchaseStore(
            accessToken: { [weak auth] in await auth?.accessToken() },
            userID: { [weak auth] in await auth?.currentUser?.id }
        )
        _purchases = State(initialValue: purchases)
        let kidHours = KidHoursStore()
        _kidHours = State(initialValue: kidHours)
        let progress = ProgressService(accessToken: { [weak auth] in await auth?.accessToken() })
        _oyno = State(initialValue: OynoStore(
            isEntitled: { [weak purchases] in purchases?.isPaid ?? false },
            bankedTogether: { [weak kidHours] in kidHours?.settings.bankedMinutes ?? 0 },
            backup: progress.merge
        ))
    }

    var body: some View {
        content
            // A new language redraws every screen: fonts and game copy are read once per body,
            // not from the environment, so nothing short of a rebuild switches them all.
            .id(language)
            .background(Palette.canvas.ignoresSafeArea())
            .task {
                // The 3 MB game catalogue decodes under the splash, not when the tabs first draw.
                Task.detached(priority: .userInitiated) { _ = ActivityCatalogue.bundled }
                RoundLive.end()
                oyno.load()
                if let id = auth.currentUser?.id {
                    adoptedUserID = id
                    oyno.adopt(userID: id)
                }
                // Past the first run the entitlement gates writes, not what opens, so the
                // splash does not wait on StoreKit.
                if didFinishFirstRun {
                    Task { await purchases.resolveCachedEntitlement() }
                } else {
                    await purchases.resolveCachedEntitlement()
                }
                isRestoring = needsEntitlement
                didLoad = true
                openPlayIfShieldAsked()
                openTabIfReminderAsked()
                await refreshEntitlement()
                await oyno.syncBackup()
                replanReminders()
                await purchases.loadProducts()
                if let resolved = await AppConfig.resolveAnalyticsEnvironment() {
                    Analytics.shared.setEnvironment(resolved)
                }
            }
            .onChange(of: auth.currentUser?.id) { _, id in
                guard let id else {
                    adoptedUserID = nil
                    purchases.forgetAccount()
                    kidHours.release()
                    Reminders.clear()
                    return
                }
                Analytics.shared.identify(userID: id)
                adoptedUserID = id
                oyno.adopt(userID: id)
                kidHours.resume()
                isRestoring = !didFinishFirstRun
                Task {
                    // A subscription bought before signing in belongs to this account now.
                    await purchases.reconcileLocalEntitlement()
                    await refreshEntitlement()
                    // A reinstall signs in here: this is where the planet comes back.
                    await oyno.syncBackup()
                    replanReminders()
                }
            }
            .onChange(of: scenePhase) { _, phase in
                // Leaving catches every setting changed while the app was open.
                if phase == .background { replanReminders() }
                guard phase == .active else { return }
                replanReminders()
                openPlayIfShieldAsked()
                kidHours.refresh()
                Task { await purchases.refreshServerEntitlement() }
            }
            // Every refusal, not just the first: the count is what makes a second one observable.
            .onChange(of: oyno.refusedActions) { _, count in
                guard count > 0 else { return }
                paywall = .writeBlocked
                // The client's belief may be stale; ask the authority while the page is up.
                Task { await purchases.refreshServerEntitlement() }
            }
            // The third round together, once: the family has felt the loop by then.
            .onChange(of: NotificationRouter.shared.requested) { openTabIfReminderAsked() }
            .onChange(of: kidHours.settings.schedules) { replanReminders() }
            .onChange(of: oyno.rounds.count) { _, count in
                replanReminders()
                guard count == 3, !didAskForReview else { return }
                didAskForReview = true
                Task {
                    try? await Task.sleep(for: .seconds(1))
                    requestReview()
                }
            }
            .fullScreenCover(item: paywall(inRound: false)) { PaywallScreen(context: $0) }
            // Below the cover on purpose: a presented view inherits the environment of the
            // view its modifier is attached to, so stores installed above it would not reach it.
            .environment(\.locale, Locale(identifier: language))
            .environment(auth)
            .environment(oyno)
            .environment(purchases)
            .environment(kidHours)
            .environment(dealer)
            .adaptiveLayout()
    }

    /// Whether the first run is still waiting on this account's answer.
    private var needsEntitlement: Bool { !didFinishFirstRun && auth.isSignedIn }

    private var isAwaitingAccount: Bool {
        !didFinishFirstRun && auth.isSignedIn && auth.currentUser?.id != adoptedUserID
    }

    /// Cleared on every path out: the first run must never wait on an answer that has arrived.
    private func refreshEntitlement() async {
        defer { isRestoring = false }
        guard auth.isSignedIn else { return }
        await purchases.refreshServerEntitlement()
    }

    /// A tap on a reminder lands on the tab it names.
    private func openTabIfReminderAsked() {
        guard didLoad, let tap = NotificationRouter.shared.take() else { return }
        tab = tap == .play ? .play : .home
    }

    /// Reminders start once the first run is over, and speak only of a signed-in family.
    private func replanReminders() {
        guard didFinishFirstRun, auth.isSignedIn else { return }
        Reminders.replan(oyno: oyno, kidHours: kidHours, dealer: dealer)
    }

    /// A paused app's "Open Oyno" lands on Play, on a cold launch or a return to the foreground.
    private func openPlayIfShieldAsked() {
        guard ShieldRoute.takePlay() else { return }
        tab = .play
    }

    @ViewBuilder
    private var content: some View {
        if !didLoad || !splashDone {
            // A branch rather than an overlay, so nothing underneath fires analytics early.
            SplashScreen(isReady: didLoad) { withAnimation(.easeOut(duration: 0.35)) { splashDone = true } }
                .transition(.opacity)
                .zIndex(1)
        } else {
            launched.transition(.identity)
        }
    }

    @ViewBuilder
    private var launched: some View {
        if !didFinishFirstRun && !didFunnel {
            FunnelScreen(onSignIn: { didFunnel = true }, onFinish: { didFunnel = true })
        } else if !auth.isSignedIn {
            SignInScreen()
        } else if isRestoring || isAwaitingAccount {
            RestoringScreen()
        } else if !didFinishFirstRun && !purchases.isPaid {
            PaywallScreen(context: .onboarding) { didFinishFirstRun = true }
        } else {
            tabs.onAppear { didFinishFirstRun = true }
        }
    }

    private var tabs: some View {
        RootTabs(selection: $tab) {
            NavigationStack {
                HomeScreen(play: { tab = .play }, start: begin)
                    .tracksScreen(.home)
            }
        } play: {
            NavigationStack {
                PlayScreen(onStart: begin)
                    .tracksScreen(.play)
            }
        } kidHours: {
            NavigationStack {
                KidHoursScreen().tracksScreen(.kidHours)
            }
        }
        // A cover, not a push: the tab bar stays put under it instead of popping back in late.
        .fullScreenCover(item: $round, onDismiss: { roundPath = [] }) { session in
            NavigationStack(path: $roundPath) {
                TimerScreen(session: session) { minutes in
                    let started = Date.now.addingTimeInterval(-TimeInterval(minutes * 60))
                    guard let recorded = oyno.record(session.round(startedAt: started, minutes: minutes)) else { return }
                    kidHours.earn()
                    roundPath.append(.done(recorded))
                }
                .navigationDestination(for: PlayRoute.self, destination: afterRound)
            }
            .fullScreenCover(item: paywall(inRound: true)) { PaywallScreen(context: $0) }
        }
    }

    /// The paywall rises from the topmost cover: a round's while one is up, else the root's.
    private func paywall(inRound: Bool) -> Binding<PaywallContext?> {
        inRound == (round != nil) ? $paywall : .constant(nil)
    }

    /// Starting is a write: the store asks for the entitlement, and the paywall answers a refusal.
    private func begin(_ session: Session) {
        guard oyno.requireEntitlement() else { return }
        Analytics.shared.track(.roundStarted(kind: session.kind, activity: session.activityID, energy: energy.rawValue, age: age.rawValue))
        round = session
    }

    private func afterRound(_ route: PlayRoute) -> some View {
        switch route {
        case let .done(recorded):
            DoneScreen(round: recorded, onKeepPlaying: {
                round = nil
                tab = .play
            }) {
                round = nil
                tab = .home
            }
        }
    }
}
