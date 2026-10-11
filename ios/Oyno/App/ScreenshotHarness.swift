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
    @State private var kidHours = ScreenshotFixtures.kidHours()

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
        // `play:<energy>[:<age>][:why]` opens Play at that `Energy` (Low by default) and
        // `AgeBand`, and `why` scrolls down to "Why it works".
        case let name where name.hasPrefix("play"):
            let parts = name.split(separator: ":").map(String.init)
            let energy = parts.lazy.compactMap(Energy.init(rawValue:)).first ?? .low
            let age = parts.lazy.compactMap(AgeBand.init(rawValue:)).first ?? .toddler
            let play = PlayScreen { _ in }
                .defaultAppStorage(ScreenshotFixtures.defaults(energy: energy, age: age))
                .defaultScrollAnchor(parts.contains("why") ? .bottom : .top)
            if #available(iOS 26, *) { play.scrollEdgeEffectStyle(.soft, for: .top) } else { play }
        case "timer": TimerScreen(activity: Activity.all[0]) { _ in }
        case "done": DoneScreen(minutes: 10, onKeepPlaying: {}, onLeave: {})
        case "kidhours": KidHoursScreen()
        case "schedule":
            KidHoursScreen()
                .sheet(isPresented: .constant(true)) {
                    ScheduleSheet(schedule: ScreenshotFixtures.schedules[0], isNew: false) { _ in }
                }
        // The worlds gallery, open on the next world to unlock.
        case "worlds":
            HomeScreen(play: {}, showingWorld: Bloom.nextWorld(after: oyno.bloom)?.id)
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

    /// A store of its own, so a frame's energy never leaks into the simulator's real defaults.
    static func defaults(energy: Energy, age: AgeBand) -> UserDefaults {
        let defaults = UserDefaults(suiteName: "screenshot") ?? .standard
        defaults.set(energy.rawValue, forKey: "oyno.energy")
        defaults.set(age.rawValue, forKey: "oyno.age")
        return defaults
    }

    static func kidHours() -> KidHoursStore {
        let store = KidHoursStore()
        store.seedForScreenshot(
            schedules: schedules,
            apps: socialApps,
            alwaysAllowed: ["Phone", "Slack"],
            neverAllowed: socialApps,
            usage: usage,
            pausedMinutes: 95
        )
        return store
    }

    /// The apps the evening goes to. Their icons, and the allowed ones', are in `ScreenshotIcons`.
    private static let socialApps = ["Instagram", "Facebook", "YouTube", "X"]

    /// A week a parent would set up: weekday evenings, weekend mornings and bedtime.
    static let schedules = [
        KidHoursSchedule(name: "School nights", start: 16 * 60 + 30, end: 19 * 60 + 30, weekdays: [2, 3, 4, 5, 6], unlockMinutes: 10),
        KidHoursSchedule(name: "Weekend mornings", start: 8 * 60, end: 11 * 60, weekdays: [1, 7]),
        KidHoursSchedule(name: "Bath and bed", start: 19 * 60 + 30, end: 20 * 60 + 30, weekdays: Set(1...7), unlocksAfterRound: false),
    ]

    /// An evening's phone, most of it in the paused apps.
    private static let usage = AppUsage(
        total: 2 * 3_600 + 41 * 60,
        rows: [("Instagram", 46, true), ("YouTube", 31, true), ("Facebook", 24, true), ("X", 18, true)]
            .map { AppUsage.Row(id: $0.0, name: $0.0, duration: TimeInterval($0.1 * 60), isPaused: $0.2) }
    )
}
#endif
