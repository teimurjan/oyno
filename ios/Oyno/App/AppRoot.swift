import StoreKit
import SwiftUI

/// The composition root: every store is built here and handed down through the
/// environment, and every gate the app has — splash, funnel, sign-in, paywall — is decided
/// here rather than by a screen.
///
/// **The funnel runs before everything.** Onboarding used to be first, and it opened by
/// asking which printer the shop runs — a question with no visible reason behind it,
/// asked of somebody who has not yet been shown what the app does with the answer. So the
/// argument comes first now, in `FunnelScreen`: the web funnel's survey and demos, ending
/// on its account step. Somebody who already has an account can walk past it to sign-in.
///
/// **Then the account, then the price, then the shop.** Sign-in before the paywall
/// because a purchase wants an identity to attach to. Nothing comes after them: a setup
/// flow used to, and it read as the funnel starting over. The shop opens on Home instead,
/// and `SetupChecklist` asks for the printer, the rates and a first quote from inside the
/// app — the first two free of the entitlement (`ShopStore.setUp`), because they are the
/// numbers the case for paying is made of.
///
/// The argument and the ask belong to the first run and nothing else: both are keyed on
/// `didFinishFirstRun`, so an install that already has a shop opens straight onto it after
/// an update, and a subscription that lapses later never puts a wall on the launch screen.
/// Sign-in is the exception — a shop that signs out lands back on it whenever that happens.
///
/// **A reinstall starts the first run again, and the account is waited for.** Deleting the
/// app takes `UserDefaults` with it, so a shop with three years of orders on the server
/// reads as new until it signs in. `restore()` pulls the shop and holds the first run on
/// `RestoringScreen` until it lands, so a paying shop is not shown the paywall while its
/// entitlement is in the air, nor an empty setup card while its records are.
///
/// **The sign-in wall has no door.** The entitlement, the sync and the web app are all
/// keyed on the account, so a shop without one is a shop whose paid state belongs to
/// nobody — a skip left a signed-out phone writing on a previous account's answer. The
/// funnel ends on its account step, so a first run that signs in there walks straight on
/// to the price without meeting this screen again.
///
/// **The paywall stands in front of changing the shop, not in front of opening it.**
/// There is no free tier, but a wall on the launch screen is a wall in front of the
/// operator's own books — and a shop that has stopped paying still has to be able to look
/// up what a customer was quoted last March. So the app opens straight onto the records
/// already on the device, reads cost nothing, and the wall goes up the moment somebody
/// tries to *add* to them or to sync. `ShopStore` is where that is decided, because it is
/// the only thing in the app that changes a shop; this raises the paywall on its count of
/// refusals and nothing else in the app has to know the rule.
///
/// It is a page in both places — a step in the first run, and a full-screen cover over
/// whatever was refused. A sheet would say "detour" about the one screen in the app that
/// is asking for a decision.
///
/// Five tabs, and every one of them is a place. That is the rule the first and the middle
/// one were both breaking: a tab whose screen holds nothing has no reason to be opened
/// twice. Log went first — a list of recent jobs read as a second Orders screen — and
/// Quote followed it, because a form that is empty again the moment it is saved is a task
/// and not somewhere to come back to. Both are now raised from where their nouns live:
/// a quote from the plus on Quotes, a print from the button on Home.
struct AppRoot: View {
    @Environment(\.scenePhase) private var scenePhase
    @Environment(\.requestReview) private var requestReview
    @State private var auth = AuthStore()
    @State private var shop: ShopStore
    @State private var purchases: PurchaseStore

    @State private var tab = RootTab.home
    /// A quote begun on Home and handed to the full form on Quotes. Held here because the
    /// two screens are siblings under the tab bar and neither can present the other.
    @State private var quoteDraft: Job?
    @State private var didLoad = false
    /// Set when the splash has finished printing the wordmark. Separate from `didLoad`
    /// because the two answer different questions and either can be the slow one: the disk
    /// read is usually done within a frame or two, and cutting the sequence off the moment
    /// it lands would leave a nozzle stranded mid-word.
    @State private var splashDone = false
    /// True while this account's shop is on the wire and the first run is waiting on it.
    /// Not persisted — it is a fact about this launch, and the launch after a reinstall is
    /// the one that has to wait again.
    @State private var isRestoring = false
    /// The account the sign-in handler has taken in. `onChange` runs after the frame that
    /// first draws a new account, so without this that frame reads `isRestoring` as false and
    /// flashes the paywall at somebody who may have paid on the web.
    @State private var adoptedUserID: String?
    @State private var paywall: PaywallContext?
    /// Set when the shop is first shown. The key predates the name: it was set when a setup
    /// flow finished, and an install that finished it has finished the first run.
    @AppStorage("oyno.didOnboard") private var didFinishFirstRun = false
    /// Set when the argument has been read. Persisted rather than shown once per launch —
    /// a funnel is read once, and a second showing is a sales pitch to somebody who has
    /// already bought the premise.
    @AppStorage("oyno.didFunnel") private var didFunnel = false
    /// The language the app is drawn in. Watched, not read once: picking a language in
    /// Settings rewrites this key, and this is what makes the whole tree redraw against
    /// the new locale instead of waiting for a relaunch.
    @AppStorage(InterfaceLanguage.overrideKey) private var language = "en"
    /// Set the moment the rating is asked for, and never cleared. iOS shows the prompt at
    /// most three times a year and says nothing about whether it did, so this spends one of
    /// the three and leaves the other two for later asks.
    @AppStorage("oyno.didAskForReview") private var didAskForReview = false

    init() {
        // Configured before any store exists, so an event emitted during the first frame
        // has somewhere to land. A blank key keeps `Analytics` a no-op, which is what
        // Debug and Local builds ship.
        Analytics.shared.configure(
            apiKey: AppConfig.amplitudeAPIKey,
            environment: AppConfig.analyticsEnvironment
        )

        let auth = AuthStore()
        _auth = State(initialValue: auth)
        // Purchases before the shop, because the shop asks it whether it may be changed.
        let purchases = PurchaseStore(
            accessToken: { [weak auth] in await auth?.accessToken() },
            userID: { [weak auth] in await auth?.currentUser?.id }
        )
        _purchases = State(initialValue: purchases)
        _shop = State(initialValue: ShopStore(
            token: { [weak auth] in await auth?.accessToken() },
            isEntitled: { [weak purchases] in purchases?.isPaid ?? false }
        ))
    }

    var body: some View {
        content
            // The app's ground, under every gate and under the handoff between them.
            // Without it the window's own white is what shows through any frame where the
            // view on top is not yet opaque — which is exactly what the splash's dissolve
            // is, and a flash of pure white under a canvas that is a half-step off it is
            // visible even at a quarter of a second.
            .background(Palette.canvas.ignoresSafeArea())
            .task {
                // Disk first, network second: the screens paint real data on a cold
                // launch and the pull only fills in what changed elsewhere.
                await shop.load()
                // Claimed at launch as well as on sign-in, because `onChange` says nothing
                // about a session that was already there when the app started.
                if let id = auth.currentUser?.id {
                    adoptedUserID = id
                    shop.adopt(userID: id)
                }
                // Before the first frame, and only what this device can answer without a
                // network: StoreKit's own record, and the last server answer cached for
                // this account. `ShopStore` reads it on the first modification, so a
                // paying operator who logs a print two seconds after launch — in a garage
                // with no signal, which is the whole point — must not be told to
                // subscribe because the answer had not arrived yet.
                await purchases.resolveCachedEntitlement()
                // Claimed before the first frame rather than inside `restore`, so the gap
                // between the splash ending and the pull answering is never a flash of an
                // empty shop at one whose records are on their way.
                isRestoring = needsRestore
                didLoad = true
                // Ahead of the products, because this is what decides which screen the app
                // opens on and that catalog read is its own round trip.
                await restore()
                await purchases.loadProducts()
                // StoreKit is the only thing that separates a TestFlight install from a
                // real one — both run the same Release build — so the environment tag is
                // corrected once it can answer.
                if let resolved = await AppConfig.resolveAnalyticsEnvironment() {
                    Analytics.shared.setEnvironment(resolved)
                }
            }
            .onChange(of: auth.currentUser?.id) { _, id in
                guard let id else {
                    adoptedUserID = nil
                    purchases.forgetAccount()
                    return
                }
                Analytics.shared.identify(userID: id)
                // Before anything is pulled: a shop already on this phone is either this
                // account's, or nobody's yet, or somebody else's — and only the third is
                // wiped.
                adoptedUserID = id
                shop.adopt(userID: id)
                // Claimed synchronously, before the reconcile below spends a round trip on
                // the entitlement: a shop that has just signed in must not be shown the
                // paywall for the length of that call, because it may well be paying.
                isRestoring = !didFinishFirstRun
                Task {
                    // The entitlement first, and the shop second. A subscription bought
                    // before signing in belongs to this account now, and sync is refused
                    // in both directions until the server has been told so.
                    await purchases.reconcileLocalEntitlement()
                    // The pull, then the push of everything written while there was
                    // nowhere to send it.
                    await restore()
                }
            }
            // The entitlement is what the pull is gated on, so an answer arriving late —
            // a web subscription the server knows about and StoreKit does not, or a lapsed
            // shop resubscribing at the first run's paywall — is a pull that was refused a
            // moment ago and has to be asked again. Suppressed while one is already in
            // flight: signing in flips this in the middle of the restore it started.
            .onChange(of: purchases.isPaid) { _, _ in
                guard needsRestore, !isRestoring else { return }
                Task { await restore() }
            }
            // The disk is a cache, so every return to the app revalidates it. Without this
            // the shop is only ever as current as the moment the app was last launched — a
            // job quoted on the laptop at lunch is invisible on the phone all afternoon,
            // which for an ERP is the whole point of having an account. `revalidate` is
            // silent and drops a return that lands inside the freshness window, so the
            // common case — glancing at the app between plates — costs nothing.
            .onChange(of: scenePhase) { _, phase in
                switch phase {
                case .active: Task { await restore() }
                // The print logged on the way out of the door goes now, not on whichever
                // launch comes next.
                case .background: Task { await shop.flushBeforeSuspending() }
                default: break
                }
            }
            // Every refusal, not just the first: the operator who tapped Save, closed
            // the paywall and tapped Save again is asking the same question twice and has
            // to get the same answer. The count is what makes that observable at all.
            .onChange(of: shop.refusedActions) { _, count in
                guard count > 0 else { return }
                paywall = .writeBlocked
                // The client's belief may be the stale half: a cached answer, or a local
                // StoreKit mirror from before the subscription lapsed. Ask the authority
                // while the page is up, so a subscriber who is wrongly behind it is let
                // back through without touching anything.
                Task { await purchases.refreshServerEntitlement() }
            }
            // The first time the shop has a roll, a quote and an order, and only then. Marked
            // before asking: a prompt iOS declines to show is not retried.
            .onChange(of: shop.completedLoops) { _, _ in
                guard !didAskForReview else { return }
                didAskForReview = true
                Task {
                    // Past the editor's dismissal, so the prompt lands on the list it saved to.
                    try? await Task.sleep(for: .seconds(1))
                    requestReview()
                }
            }
            .fullScreenCover(item: $paywall) { PaywallScreen(context: $0) }
            // Below the cover, and that order is the whole point. A presented view
            // inherits the environment of the view its modifier is attached to, not the
            // one that view installs for its own subtree — so a store handed down above
            // `.fullScreenCover` reaches the tabs and nothing else, and the paywall traps
            // on the first frame with "No Observable object of type PurchaseStore found".
            //
            // This is also the one place the interface language becomes real. `Text`
            // literals and `LocalizedStringResource`s resolve against the environment's
            // locale, and `String(interface:)` carries the same one to the copy that is
            // built outside a view.
            .environment(\.locale, InterfaceLanguage.locale)
            .environment(auth)
            .environment(shop)
            .environment(purchases)
    }

    /// Whether there is an account here whose shop this device has not seen.
    private var needsRestore: Bool { !didFinishFirstRun && auth.isSignedIn && purchases.isPaid }

    /// The web app's `entitlement.userID !== uid`: an account the handler has not seen yet
    /// has no entitlement answer yet either.
    private var isAwaitingAccount: Bool {
        !didFinishFirstRun && auth.isSignedIn && auth.currentUser?.id != adoptedUserID
    }

    /// Bring this account's shop up to date.
    ///
    /// Every trigger the app has is this one call — the launch, signing in, an entitlement
    /// arriving late, and coming back to the foreground. They are all the same request, and
    /// after the first run they are all the same thing: the disk is a cache, so the screens
    /// paint from it and this corrects them behind. `ShopStore.revalidate` is what keeps
    /// that cheap — a return inside the freshness window costs nothing.
    ///
    /// Silent by design. Only a gesture raises the wall, which is why this asks
    /// `PurchaseStore` itself rather than letting `ShopStore` refuse it.
    ///
    /// `isRestoring` is cleared on every path out, including the one where there was nothing
    /// to ask for: the first run must never be left waiting on an answer that has arrived.
    private func restore() async {
        guard auth.isSignedIn, purchases.isPaid else {
            isRestoring = false
            return
        }
        isRestoring = needsRestore
        defer { isRestoring = false }
        await shop.revalidate()
    }

    @ViewBuilder
    private var content: some View {
        if !didLoad || !splashDone {
            // A branch rather than an overlay, deliberately. An overlay would build the
            // screen underneath while the splash played — firing the funnel's analytics and
            // resolving its economy a second and a half before anybody saw it.
            SplashScreen { withAnimation(.easeOut(duration: 0.35)) { splashDone = true } }
                .transition(.opacity)
                // Above the screen it is handing over to, so the splash lifts off a next
                // screen that is already fully painted.
                .zIndex(1)
        } else {
            // `.identity`, and that is the other half of the lift. SwiftUI inserts a branch
            // with an opacity transition unless told otherwise, so the screen underneath
            // used to fade *in* while the splash faded out — two half-transparent layers,
            // and the window showing through both of them. Arriving opaque on the first
            // frame is what makes the dissolve one gesture instead of a dip.
            launched.transition(.identity)
        }
    }

    /// Everything after the splash: the first run's three gates, then the app.
    @ViewBuilder
    private var launched: some View {
        if !didFinishFirstRun && !didFunnel {
            // Rebuilt when the language changes: this screen carries the language picker,
            // and its deck was resolved in the language the operator has just left.
            FunnelScreen(
                spine: FunnelContent.bundled.spine,
                copy: FunnelContent.bundled.copy(for: language),
                onSignIn: { didFunnel = true },
                onFinish: { didFunnel = true }
            )
            .id(language)
        } else if !auth.isSignedIn {
            SignInScreen()
        } else if isRestoring || isAwaitingAccount {
            // Above the paywall, which would ask somebody who may already be paying.
            RestoringScreen()
        } else if !didFinishFirstRun && !purchases.isPaid {
            // The first run's one ask. A purchase drops through it on the next frame,
            // because `isPaid` is what the condition reads.
            PaywallScreen(context: .onboarding) { didFinishFirstRun = true }
        } else {
            // Ends the first run for a shop that paid rather than declined.
            tabs.onAppear { didFinishFirstRun = true }
        }
    }

    private var tabs: some View {
        TabView(selection: $tab) {
            // Home is the only screen that steers the tab bar: its alert rows name a
            // problem and the tab that fixes it, and a row reading "2 below reorder point"
            // that does nothing when tapped is worse than no row at all. Its quick quote
            // card steers it too, and carries a draft with it — the full form opens on the
            // tab that keeps quotes, holding whatever was typed on the first screen.
            NavigationStack {
                HomeScreen(open: { tab = $0 }, openFullQuote: { quoteDraft = $0; tab = .quotes })
                    .tracksScreen(.home)
            }
                .tabItem { Label("Home", systemImage: "house.fill") }
                .tag(RootTab.home)

            NavigationStack { InventoryScreen().tracksScreen(.filament) }
                .tabItem { Label("Filament", systemImage: "circle.circle.fill") }
                .tag(RootTab.filament)

            NavigationStack { QuotesScreen(handoff: $quoteDraft).tracksScreen(.quotes) }
                // `doc.plaintext.fill` is the same symbol SF Symbols now lists as
                // `text.page.fill` — the new name is an iOS 18 API and this app
                // deploys to 17, so the alias is the one that resolves everywhere.
                .tabItem { Label("Quotes", systemImage: "doc.plaintext.fill") }
                .tag(RootTab.quotes)

            NavigationStack { OrdersScreen().tracksScreen(.orders) }
                .tabItem { Label("Orders", systemImage: "shippingbox.fill") }
                .tag(RootTab.orders)

            NavigationStack { StatsScreen().tracksScreen(.stats) }
                .tabItem { Label("Stats", systemImage: "chart.bar.fill") }
                .tag(RootTab.stats)
        }
        .tint(Palette.accent)
    }
}

/// Which tab is showing. At file scope rather than nested in `AppRoot` because `HomeScreen`
/// names one when it hands a problem to the screen that solves it.
enum RootTab: Hashable {
    case home, filament, quotes, orders, stats
}
