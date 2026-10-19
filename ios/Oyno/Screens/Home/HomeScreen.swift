import DeviceActivity
import SwiftUI

/// The family on its planet, its bloom level and the totals that grow it, and the phone's
/// screen time. Pressing the planet or its name shrinks it into the worlds.
struct HomeScreen: View {
    /// Switches to Play.
    let play: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.adaptive) private var adaptive
    @State private var worldsOpen: Bool
    @State private var profileOpen = false
    /// The world the gallery opens on, when Home appears with it open.
    private let showingWorld: World.ID?
    /// A language switch rebuilt the screens, and Screen Time's report comes back blank from a
    /// rebuild until it is mounted again.
    private let afterLanguageSwitch: Bool
    @State private var reportMount = 0

    init(play: @escaping () -> Void, showingWorld: World.ID? = nil, afterLanguageSwitch: Bool = false) {
        self.play = play
        self.showingWorld = showingWorld
        self.afterLanguageSwitch = afterLanguageSwitch
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
        .sheet(isPresented: $profileOpen) { ProfileScreen().tracksScreen(.profile) }
    }

    /// The phone's: the planet over its totals and the screen time, the start pinned at the foot.
    private var column: some View {
        ScrollView {
            VStack(spacing: Metric.Space.l) {
                header
                // Smaller on the closed Duo, so its short screen still shows the totals.
                planet.frame(maxWidth: adaptive.bars == .side ? 240 : 300)
                score
                if kidHours.isAuthorized { screenTime }
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.bottom, Metric.Space.l)
            .readableWidth()
        }
        .scrollIndicators(.hidden)
        .safeAreaInset(edge: .bottom) {
            startGame.padding(.bottom, Metric.Space.s)
        }
    }

    /// iPad and the Duo open: the planet to look at on the leading side, the totals on the
    /// trailing one. The start sits under the planet on iPad, and on the Duo at the foot of the
    /// trailing side, by the thumb and clear of the fold.
    private var split: some View {
        FoldColumns {
            VStack(spacing: Metric.Space.l) {
                if adaptive.bars != .top { wordmark.frame(maxWidth: .infinity, alignment: .leading) }
                Spacer(minLength: 0)
                planet.frame(maxWidth: 435)
                if adaptive.bars == .top { startGame }
                Spacer(minLength: 0)
            }
            .padding(.vertical, Metric.Space.xl)
        } trailing: {
            ScrollView {
                VStack(spacing: Metric.Space.l) {
                    Card(padding: Metric.Space.xl, raised: true) { score }
                    if kidHours.isAuthorized { screenTime }
                }
                .padding(.vertical, Metric.Space.xl)
            }
            .scrollIndicators(.hidden)
            .defaultScrollAnchor(adaptive.bars == .top ? .center : .top)
            .safeAreaInset(edge: .bottom) {
                if adaptive.bars != .top { startGame.padding(.bottom, Metric.Space.s) }
            }
        }
    }

    private var planet: some View {
        PlanetScene(open: worldsOpen, explorable: true, points: oyno.points, showing: showingWorld) {
            open()
        } onClose: {
            worldsOpen = false
        }
        .screenshotCallout("worlds")
    }

    private var score: some View {
        TimelineView(.everyMinute) { context in
            BloomScore(
                level: oyno.level,
                developmentMinutes: oyno.tally.minutes,
                rounds: oyno.tally.rounds,
                togetherMinutes: oyno.tally.together + kidHours.pausedMinutesToday(now: context.date)
            )
        }
    }

    private func open() {
        Analytics.shared.track(.worldsOpened(bloom: oyno.level))
        worldsOpen = true
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

    private var startGame: some View {
        Button {
            Haptics.tap()
            play()
        } label: {
            HStack(spacing: 10) {
                Glyph(symbol: "play.fill", size: 15, weight: .bold)
                Text("Start a game")
                    .font(Typeface.ui(17, .bold, relativeTo: .headline))
                    .foregroundStyle(Palette.ink)
                Glyph(symbol: "chevron.right", size: 13, weight: .bold)
            }
            .padding(.horizontal, adaptive.roomy ? 28 : 24)
            .frame(height: adaptive.roomy ? Metric.primaryButtonRoomy : Metric.primaryButton)
        }
        .buttonStyle(FloatingGlassStyle())
    }

    private var screenTime: some View {
        Group {
            #if DEBUG
            if let seeded = kidHours.seededUsage {
                AppUsageCard(usage: seeded) { TokenTile(item: .placeholder($0.name)) }
            } else {
                report
            }
            #else
            report
            #endif
        }
        .frame(height: AppUsageCard<EmptyView>.height)
        .glassCard()
    }

    /// Drawn by `OynoReport`: only Screen Time's own process may read what each app took.
    /// It has nothing to tap, and a hosted report would otherwise keep the drag from the scroll view.
    private var report: some View {
        let today = DateInterval(start: Calendar.current.startOfDay(for: .now), duration: 86_400)
        return DeviceActivityReport(.todayApps, filter: DeviceActivityFilter(segment: .daily(during: today), users: .all, devices: .init([.iPhone])))
            .allowsHitTesting(false)
            .id(reportMount)
            .task(id: afterLanguageSwitch) {
                guard afterLanguageSwitch, (try? await Task.sleep(for: .seconds(1))) != nil else { return }
                reportMount += 1
            }
    }
}

/// The glass under the start, pressed in like the system's own glass buttons.
private struct FloatingGlassStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .floatingGlass(interactive: false)
            .scaleEffect(configuration.isPressed ? 0.97 : 1)
            .animation(.easeOut(duration: 0.12), value: configuration.isPressed)
    }
}
