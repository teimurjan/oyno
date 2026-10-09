#if DEBUG
import SwiftUI

/// Debug-only harness that renders one screen in a seeded state for
/// `appstore/scripts/capture-simulator-screens.mjs`, selected by `--screenshot <name>`.
/// Compiled out of Release builds entirely.
struct ScreenshotHarness: View {
    let screen: String

    static var requestedScreen: String? {
        let args = ProcessInfo.processInfo.arguments
        guard let index = args.firstIndex(of: "--screenshot"), index + 1 < args.count else { return nil }
        return args[index + 1]
    }

    @State private var oyno = ScreenshotFixtures.oyno()
    @State private var auth = ScreenshotFixtures.auth()
    @State private var purchases = ScreenshotFixtures.purchases()
    @State private var kidHours = KidHoursStore()
    @State private var playPath: [PlayRoute] = []

    var body: some View {
        NavigationStack { seeded }
            .environment(\.locale, InterfaceLanguage.locale)
            .environment(oyno)
            .environment(auth)
            .environment(purchases)
            .environment(kidHours)
    }

    @ViewBuilder private var seeded: some View {
        switch screen {
        case "splash": SplashScreen(isReady: false)
        case "signin": SignInScreen()
        case "paywall": PaywallScreen(context: .onboarding)
        case "play": PlayScreen(path: $playPath)
        case "timer": TimerScreen(activity: Activity.all[0]) { _ in }
        case "done": DoneScreen(minutes: 10) {}
        case "kidhours": KidHoursScreen()
        // `funnel:<step>` opens the first run at that `FunnelStep`, `funnel` at the start.
        case let name where name.hasPrefix("funnel"):
            let step = FunnelStep(rawValue: String(name.dropFirst("funnel:".count))) ?? .hookPlanet
            FunnelScreen(startingAt: step, onSignIn: {}, onFinish: {})
        default: HomeScreen(play: {})
        }
    }
}

/// One seeded family, shared by every frame: a few evenings of rounds, enough to have bloomed
/// past the first world.
@MainActor
enum ScreenshotFixtures {
    static func oyno() -> OynoStore {
        let store = OynoStore(isEntitled: { true }, fileURL: URL.temporaryDirectory.appending(path: "screenshot-rounds.json"))
        let now = Date.now
        let rounds = (0..<8).map { index in
            Round(
                activityID: Activity.all[index % Activity.all.count].id,
                startedAt: now.addingTimeInterval(-Double(index) * 86_400 / 2),
                minutes: index < 2 ? 16 : 10
            )
        }
        store.seedForScreenshot(rounds)
        return store
    }

    static func auth() -> AuthStore {
        let store = AuthStore()
        store.seedUserForScreenshot()
        return store
    }

    static func purchases() -> PurchaseStore {
        let store = PurchaseStore()
        store.seedPaidForScreenshot()
        return store
    }
}
#endif
