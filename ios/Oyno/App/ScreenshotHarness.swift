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

    @State private var oyno: OynoStore
    @State private var dealer: Dealer
    @State private var auth = ScreenshotFixtures.auth()
    @State private var purchases = ScreenshotFixtures.purchases()
    @State private var kidHours: KidHoursStore

    /// Only the round's end banks the unlock a round earns: on Kid hours it would add a strip
    /// to the schedule on top.
    init(screen: String) {
        self.screen = screen
        let parts = screen.split(separator: ":").map(String.init)
        _oyno = State(initialValue: ScreenshotFixtures.oyno(playedToday: screen != "home:afternoon"))
        _kidHours = State(initialValue: ScreenshotFixtures.kidHours(
            roundEarned: screen == "done:grown",
            now: ScreenshotFixtures.now(for: screen)
        ))
        // `play:<kind>` and `timer:<kind>` open on that everyday moment, `play:<game id>` on that game.
        let dealer = Dealer(game: parts.lazy.compactMap(Activity.find).first)
        dealer.kind = parts.lazy.compactMap(MomentKind.init(rawValue:)).first ?? .game
        _dealer = State(initialValue: dealer)
    }

    var body: some View {
        framed { tabbed }
        .environment(\.locale, InterfaceLanguage.locale)
            .environment(oyno)
            .environment(auth)
            .environment(purchases)
            .environment(kidHours)
            .environment(dealer)
    }

    /// `--window 951x669` draws the screen in a window of that size, centred, to check another
    /// device's layout from one simulator. `--bars side` reserves the Duo's side bar beside it.
    @ViewBuilder
    private func framed(@ViewBuilder _ content: () -> some View) -> some View {
        if let size = Self.argument("--window")?.split(separator: "x").compactMap({ Double($0) }), size.count == 2 {
            let rail: CGFloat = Self.argument("--bars") == "side" ? 84 : 0
            content()
                .padding(.trailing, rail)
                .overlay(alignment: .trailing) { Palette.ink.opacity(0.08).frame(width: rail) }
                .adaptiveLayout(idiom: Self.idiom)
                .frame(width: size[0], height: size[1])
                .background(Palette.sky)
                .overlay { Rectangle().stroke(Palette.ink.opacity(0.3)) }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .background(Color.black.ignoresSafeArea())
        } else {
            content().adaptiveLayout(idiom: Self.idiom)
        }
    }

    /// In the tabs, as the app draws them, on the tab the screen belongs to.
    @ViewBuilder
    private var tabbed: some View {
        if let tab = Self.tab(for: screen) {
            RootTabs(selection: .constant(tab)) {
                NavigationStack { if tab == .home { seeded } }
            } play: {
                NavigationStack { if tab == .play { seeded } }
            } kidHours: {
                NavigationStack { if tab == .kidHours { seeded } }
            }
        } else {
            NavigationStack { seeded }
        }
    }

    /// Nil for the screens that cover the tabs: the first run, the round and its end.
    private static func tab(for screen: String) -> RootTab? {
        switch screen.split(separator: ":").first.map(String.init) ?? screen {
        case "home", "worlds", "growth", "keepsakes", "week": .home
        case "play", "find": .play
        case "kidhours", "schedule": .kidHours
        default: nil
        }
    }

    /// `--idiom phone` lays an iPad simulator out as the Duo.
    private static var idiom: UIUserInterfaceIdiom? {
        switch argument("--idiom") {
        case "phone": .phone
        case "pad": .pad
        default: nil
        }
    }

    private static func argument(_ name: String) -> String? {
        let args = ProcessInfo.processInfo.arguments
        guard let index = args.firstIndex(of: name), index + 1 < args.count else { return nil }
        return args[index + 1]
    }

    @ViewBuilder private var seeded: some View {
        switch screen {
        case "splash": SplashScreen(isReady: false)
        case "signin": SignInScreen()
        case "paywall": PaywallScreen(context: .onboarding)
        // `play:<energy>[:<age>][:why]` opens Play at that `Energy` (Low by default) and
        // `AgeBand`, and `why` scrolls down to "Why it works". `play:<game id>` opens on that
        // game at its own energy and age, so every language photographs the same one.
        case let name where name.hasPrefix("play"):
            let parts = name.split(separator: ":").map(String.init)
            let game = parts.lazy.compactMap(Activity.find).first
            let energy = game?.energy ?? parts.lazy.compactMap(Energy.init(rawValue:)).first ?? .low
            let age = game?.age ?? parts.lazy.compactMap(AgeBand.init(rawValue:)).first ?? .toddler
            let play = PlayScreen { _ in }
                .defaultAppStorage(ScreenshotFixtures.defaults(energy: energy, age: age))
                .defaultScrollAnchor(parts.contains("why") ? .bottom : .top)
            if #available(iOS 26, *) { play.scrollEdgeEffectStyle(.soft, for: .top) } else { play }
        case let name where name.hasPrefix("timer"):
            TimerScreen(session: dealer.session(age: .toddler)) { _ in }
        // `done:grown` is the planet already tapped, the unlock the round earned in its sheet.
        // `done:keepsake` is the keepsake a bath left, `done:noticed` the question after it.
        case let name where name.hasPrefix("done"):
            let step: DoneScreen.Step = switch name {
            case "done:keepsake": .keepsake
            case "done:noticed": .noticed
            case "done:grown": .unlock
            default: .practiced
            }
            DoneScreen(round: ScreenshotFixtures.bath, grown: name != "done", step: step, onKeepPlaying: {}, onLeave: {})
        case "growth": GrowthScreen { _ in }
        case "keepsakes": KeepsakesScreen()
        case "week": HomeScreen(play: {}, start: { _ in }).sheet(isPresented: .constant(true)) { WeekSheet {} }
        // `letter` is this week's envelope, sealed. `letter:open` is last week's, a full week, written.
        case "letter": LetterScreen(week: .containing(.now))
        case "letter:open": LetterScreen(week: .containing(.now.addingTimeInterval(-7 * 86_400)), opened: true)
        case "find": ActivitySearchScreen(onPick: { _ in }, onStart: { _ in })
        case "kidhours": KidHoursScreen()
        case "schedule":
            KidHoursScreen()
                .sheet(isPresented: .constant(true)) {
                    ScheduleSheet(schedule: ScreenshotFixtures.schedules[0], isNew: false) { _ in }
                }
        // The worlds gallery, open on the next world to unlock.
        case "worlds":
            HomeScreen(play: {}, start: { _ in }, showingWorld: Bloom.nextWorld(after: oyno.points)?.id)
        // `funnel:<step>` opens the first run at that `FunnelStep`, `funnel` at the start.
        case let name where name.hasPrefix("funnel"):
            let step = FunnelStep(rawValue: String(name.dropFirst("funnel:".count))) ?? .hookPlanet
            FunnelScreen(startingAt: step, onSignIn: {}, onFinish: {})
        default: HomeScreen(play: {}, start: { _ in })
        }
    }
}

/// One seeded family, shared by every frame: a few evenings of rounds, enough to have bloomed
/// past the first world.
@MainActor
enum ScreenshotFixtures {
    /// Two moments an evening for two and a half weeks, so Growth reads in hours: games, baths,
    /// books and their lead, the newest keepsakes, and a first or two.
    /// `playedToday` false starts them yesterday, for Home before Kid hours.
    static func oyno(playedToday: Bool = true) -> OynoStore {
        let store = OynoStore(isEntitled: { true }, fileURL: URL.temporaryDirectory.appending(path: "screenshot-rounds.json"))
        let now = Date.now.addingTimeInterval(playedToday ? 0 : -86_400)
        let week: [MomentKind] = [.bath, .game, .reading, .game, .lead, .cooking, .game, .reading, .game]
        let kinds = (0..<36).map { week[$0 % week.count] }
        let keepsakes: [String?] = Array(repeating: nil, count: kinds.count - 8)
            + ["star-sponge", "felt-star", "tiny-book", nil, "acorn", "wooden-spoon", "kite", nil]
        let minutes = [10, 12, 15, 8, 14, 10]
        let rounds = kinds.indices.map { index in
            let kind = kinds[index]
            let game = Activity.all[index % Activity.all.count]
            let moment = OpenMoment.find(kind, age: .toddler)
            return Round(
                kind: kind,
                activityID: kind == .game ? game.id : nil,
                startedAt: now.addingTimeInterval(-Double(kinds.count - 1 - index) * 86_400 / 2),
                minutes: minutes[index % minutes.count],
                skills: (kind == .game ? game.skills : moment?.skills ?? []).map(\.id),
                keepsakeID: keepsakes[index]
            )
        }
        let firsts = [
            First(date: now.addingTimeInterval(-86_400), kind: .cooking, signs: [.waitedForTurn], words: nil),
            First(date: now.addingTimeInterval(-3 * 86_400), kind: .lead, signs: [], words: String(interface: "Played alone for twenty minutes")),
        ]
        store.seedForScreenshot(rounds, firsts: firsts)
        return store
    }

    /// The round Done celebrates in the store screenshots: a bath that left a paper boat.
    static var bath: Round {
        Round(kind: .bath, activityID: nil, startedAt: .now, minutes: 15, skills: ["inhibitory-control", "working-memory"], keepsakeID: "paper-boat")
    }

    /// The clock Kid hours reads for a frame: before them, during, or after.
    static func now(for screen: String) -> Date {
        let calendar = Calendar.current
        switch screen {
        case "home:afternoon": return calendar.date(bySettingHour: 15, minute: 50, second: 0, of: .now) ?? .now
        case "home:night": return calendar.date(bySettingHour: 20, minute: 45, second: 0, of: .now) ?? .now
        default: return evening
        }
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

    /// `roundEarned` banks what a round just played in School nights earns, still claimable.
    static func kidHours(roundEarned: Bool = false, now: Date? = nil) -> KidHoursStore {
        let store = KidHoursStore()
        let now = now ?? evening
        let earned = roundEarned
            ? KidHoursEarned(scheduleID: schedules[0].id, minutes: schedules[0].unlockMinutes, expiresAt: now.addingTimeInterval(KidHoursEarned.claimWindow))
            : nil
        store.seedForScreenshot(
            schedules: schedules,
            apps: socialApps,
            alwaysAllowed: ["Phone", "Slack"],
            neverAllowed: socialApps,
            usage: usage,
            pausedMinutes: 95,
            now: now,
            earned: earned
        )
        return store
    }

    /// The latest Thursday at 5:15 PM, inside School nights, so every frame shows Kid hours on
    /// whatever the time of the capture.
    static var evening: Date {
        let weekAgo = Date.now.addingTimeInterval(-7 * 86_400)
        return Calendar.current.nextDate(after: weekAgo, matching: DateComponents(hour: 17, minute: 15, weekday: 5), matchingPolicy: .nextTime) ?? .now
    }

    /// The apps the evening goes to. Their icons, and the allowed ones', are in `ScreenshotIcons`.
    private static let socialApps = ["Instagram", "Facebook", "YouTube", "X"]

    /// A week a parent would set up: weekday evenings, weekend mornings and bedtime.
    static let schedules = [
        KidHoursSchedule(name: String(interface: "School nights"), start: 16 * 60 + 30, end: 19 * 60 + 30, weekdays: [2, 3, 4, 5, 6], unlockMinutes: 10),
        KidHoursSchedule(name: String(interface: "Weekend mornings"), start: 8 * 60, end: 11 * 60, weekdays: [1, 7]),
        KidHoursSchedule(name: String(interface: "Bath and bed"), start: 19 * 60 + 30, end: 20 * 60 + 30, weekdays: Set(1...7), unlocksAfterRound: false),
    ]

    /// An evening's phone, most of it in the paused apps.
    private static let usage = AppUsage(
        total: 2 * 3_600 + 41 * 60,
        rows: [("Instagram", 46, true), ("YouTube", 31, true), ("Facebook", 24, true), ("X", 18, true)]
            .map { AppUsage.Row(id: $0.0, name: $0.0, duration: TimeInterval($0.1 * 60), isPaused: $0.2) }
    )
}
#endif
