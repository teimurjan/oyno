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

    @State private var tab = RootTab.home
    /// The game being played, over the tabs from its timer to its Done screen.
    @State private var round: Activity?
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
    @AppStorage(InterfaceLanguage.overrideKey, store: InterfaceLanguage.store) private var language = "en"
    @State private var didSwitchLanguage = false

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
            .onChange(of: language) { didSwitchLanguage = true }
            .background(Palette.canvas.ignoresSafeArea())
            .task {
                oyno.load()
                if let id = auth.currentUser?.id {
                    adoptedUserID = id
                    oyno.adopt(userID: id)
                }
                await purchases.resolveCachedEntitlement()
                isRestoring = needsEntitlement
                didLoad = true
                openPlayIfShieldAsked()
                await refreshEntitlement()
                await oyno.syncBackup()
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
                }
            }
            .onChange(of: scenePhase) { _, phase in
                guard phase == .active else { return }
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
            .onChange(of: oyno.rounds.count) { _, count in
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
                HomeScreen(play: { tab = .play }, afterLanguageSwitch: didSwitchLanguage)
                    .tracksScreen(.home)
            }
        } play: {
            NavigationStack {
                PlayScreen(onBack: { tab = .home }) { round = $0 }
                    .tracksScreen(.play)
            }
        } kidHours: {
            NavigationStack {
                KidHoursScreen().tracksScreen(.kidHours)
            }
        }
        // A cover, not a push: the tab bar stays put under it instead of popping back in late.
        .fullScreenCover(item: $round, onDismiss: { roundPath = [] }) { activity in
            NavigationStack(path: $roundPath) {
                TimerScreen(activity: activity) { minutes in
                    guard oyno.record(Round(activityID: activity.id, startedAt: .now, minutes: minutes)) else { return }
                    kidHours.earn()
                    roundPath.append(.done(minutes: minutes))
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

    private func afterRound(_ route: PlayRoute) -> some View {
        switch route {
        case let .done(minutes):
            DoneScreen(minutes: minutes, onKeepPlaying: { round = nil }) {
                round = nil
                tab = .home
            }
        }
    }
}
