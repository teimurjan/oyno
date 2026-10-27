import SwiftUI

/// D2 on the canvas: Home answers "what now?" and changes with the clock. The family's planet
/// with the keepsakes on it, the bloom and the next world, then the one card for now: before
/// Kid hours it waits, during them it holds the thing to start, after them it sums up the
/// evening and asks what was new. Under it, every number is ours, not the phone's: the week,
/// the practice and the keepsakes, each a doorway to its own screen.
struct HomeScreen: View {
    /// Switches to Play.
    let play: () -> Void
    /// Starts a game or a moment, through the store's gate.
    let start: (Session) -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(Dealer.self) private var dealer
    @Environment(\.adaptive) private var adaptive
    @AppStorage("oyno.age") private var age = AgeBand.toddler
    @AppStorage("oyno.energy") private var energy = Energy.low
    @AppStorage("oyno.weekGoal") private var goal = Week.defaultGoal
    @State private var worldsOpen: Bool
    @State private var profileOpen = false
    @State private var weekOpen = false
    @State private var letterOpen = false
    @State private var noticing = false
    @State private var route: HomeRoute?
    /// The world the gallery opens on, when Home appears with it open.
    private let showingWorld: World.ID?

    init(play: @escaping () -> Void, start: @escaping (Session) -> Void, showingWorld: World.ID? = nil) {
        self.play = play
        self.start = start
        self.showingWorld = showingWorld
        _worldsOpen = State(initialValue: showingWorld != nil)
    }

    var body: some View {
        Group {
            if adaptive.columns == .two { split } else { column }
        }
        .background(Palette.sky.ignoresSafeArea())
        .systemBar(adaptive)
        .toolbar {
            if adaptive.bars == .top {
                ToolbarItem(placement: .topBarLeading) { wordmark }.bare()
            }
            if adaptive.barsAreSystem {
                ToolbarItem(placement: .topBarTrailing) {
                    BarButton(title: "Profile", symbol: "person") { profileOpen = true }
                }
            }
        }
        .onAppear { dealer.dealIfStale(energy: energy, age: age) }
        .navigationDestination(item: $route) { route in
            switch route {
            case .growth:
                GrowthScreen { game in
                    dealer.show(game)
                    play()
                }
                .tracksScreen(.growth)
            case .keepsakes:
                KeepsakesScreen().tracksScreen(.keepsakes)
            }
        }
        .sheet(isPresented: $profileOpen) { ProfileScreen().tracksScreen(.profile) }
        .sheet(isPresented: $weekOpen) {
            WeekSheet { letterOpen = true }.tracksScreen(.week)
        }
        .sheet(isPresented: $noticing) { NoticeSheet(kind: oyno.rounds.on(.now).last?.kind ?? .game) }
        .fullScreenCover(isPresented: $letterOpen) { LetterScreen(week: .containing(.now)).tracksScreen(.letter) }
    }

    /// The phone's: the planet over the bloom, the card for now and the three rows.
    private var column: some View {
        ScrollView {
            VStack(spacing: 0) {
                header
                // Smaller on the closed Duo, so its short screen still shows the card.
                planet.frame(maxWidth: adaptive.bars == .side ? 200 : 250)
                bloom.padding(.top, Metric.Space.xs)
                now.padding(.top, 14)
                rows.padding(.top, Metric.Space.m)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.bottom, Metric.Space.l)
            .readableWidth()
        }
        .scrollIndicators(.hidden)
    }

    /// iPad and the Duo open: the planet and its bloom to look at on the leading side, the card
    /// and the rows to tap on the trailing one.
    private var split: some View {
        FoldColumns {
            VStack(spacing: Metric.Space.l) {
                if adaptive.bars != .top { wordmark.frame(maxWidth: .infinity, alignment: .leading) }
                Spacer(minLength: 0)
                planet.frame(maxWidth: 435)
                bloom
                Spacer(minLength: 0)
            }
            .padding(.vertical, Metric.Space.xl)
        } trailing: {
            ScrollsIfNeeded {
                VStack(spacing: Metric.Space.l) {
                    Spacer(minLength: 0)
                    now
                    rows
                    Spacer(minLength: 0)
                }
                .padding(.vertical, Metric.Space.xl)
            }
        }
    }

    private var planet: some View {
        PlanetScene(open: worldsOpen, explorable: true, points: oyno.points, showing: showingWorld) {
            open()
        } onClose: {
            worldsOpen = false
        }
        .overlay {
            if !worldsOpen { KeepsakeOrbit(keepsakes: oyno.keepsakesInOrder, tonight: tonightsKeepsake) }
        }
        .screenshotCallout("worlds")
    }

    private var tonightsKeepsake: Keepsake? {
        oyno.rounds.on(.now).compactMap(\.keepsakeID).last.flatMap(Keepsake.find)
    }

    private func open() {
        Analytics.shared.track(.worldsOpened(bloom: oyno.level))
        worldsOpen = true
    }

    /// The level and how far the next world is. The world's own name is the caption under the
    /// planet, which also opens the worlds.
    private var bloom: some View {
        VStack(spacing: 6) {
            HStack(spacing: Metric.Space.s) {
                Text("Bloom \(oyno.level)")
                    .font(Typeface.figures(13, .bold, relativeTo: .caption))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
                FillBar(fraction: bloomShare, tint: Palette.good)
                    .frame(width: 120)
            }
            Text(verbatim: bloomNext)
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .accessibilityElement(children: .combine)
    }

    private var bloomShare: Double {
        guard let next = Bloom.nextWorld(after: oyno.points) else { return 1 }
        let from = oyno.world.unlocksAt
        return Double(oyno.points - from) / Double(max(1, next.unlocksAt - from))
    }

    private var bloomNext: String {
        guard let next = Bloom.nextWorld(after: oyno.points),
              let moments = Bloom.momentsToNext(points: oyno.points, perMoment: oyno.pointsPerMoment)
        else { return String(interface: "Every world is yours") }
        return String(interface: "\(moments) moments to \(next.name)")
    }

    /// The one card for now, read again every minute so it turns over with Kid hours.
    private var now: some View {
        TimelineView(.everyMinute) { _ in
            let date = kidHours.now
            NowCard(
                evening: Evening.at(date, schedules: kidHours.settings.schedules, playedToday: !oyno.rounds.on(date).isEmpty),
                session: dealer.session(age: age),
                tonight: oyno.rounds.on(date),
                asked: oyno.notedFirst(on: date),
                start: start,
                play: play,
                swap: {
                    dealer.kind = .game
                    dealer.dealAnother()
                },
                notice: { noticing = true }
            )
        }
    }

    // MARK: The rows

    private var rows: some View {
        HomeRows(
            openWeek: openWeek,
            openGrowth: { route = .growth },
            openKeepsakes: { route = .keepsakes }
        )
    }

    /// On Sunday the row opens the letter, every other day the week and its goal.
    private func openWeek() {
        let week = Week.containing(.now)
        if week.letterIsReady(on: .now), oyno.letter(for: week, goal: goal) != nil {
            letterOpen = true
        } else {
            weekOpen = true
        }
    }

    /// The wordmark, and the profile where the system's bar does not hold it. On iPad both sit in that bar.
    @ViewBuilder
    private var header: some View {
        if adaptive.bars != .top {
            HStack {
                wordmark
                Spacer()
                if !adaptive.barsAreSystem {
                    GlassIconButton(symbol: "person", label: "Profile") { profileOpen = true }
                }
            }
            .frame(minHeight: Metric.tapTarget)
            .padding(.top, Metric.Space.s)
        }
    }

    private var wordmark: some View {
        Image("Wordmark").accessibilityLabel(Text(verbatim: "Oyno"))
    }
}

/// The screens Home pushes.
enum HomeRoute: Hashable, Identifiable {
    case growth, keepsakes

    var id: Self { self }
}
