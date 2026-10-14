import DeviceActivity
import SwiftUI

/// The family on its planet, its bloom level and the totals that grow it, and the phone's
/// screen time. Pressing the planet or its name shrinks it into the worlds.
struct HomeScreen: View {
    /// Switches to Play.
    let play: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @State private var worldsOpen: Bool
    @State private var profileOpen = false
    /// The world the gallery opens on, when Home appears with it open.
    private let showingWorld: World.ID?

    init(play: @escaping () -> Void, showingWorld: World.ID? = nil) {
        self.play = play
        self.showingWorld = showingWorld
        _worldsOpen = State(initialValue: showingWorld != nil)
    }

    var body: some View {
        ScrollView {
            VStack(spacing: Metric.Space.l) {
                header

                PlanetScene(open: worldsOpen, explorable: true, points: oyno.points, showing: showingWorld) {
                    open()
                } onClose: {
                    worldsOpen = false
                }
                .frame(maxWidth: 300)
                .screenshotCallout("worlds")

                TimelineView(.everyMinute) { context in
                    BloomScore(
                        level: oyno.level,
                        developmentMinutes: oyno.tally.minutes,
                        rounds: oyno.tally.rounds,
                        togetherMinutes: oyno.tally.together + kidHours.pausedMinutesToday(now: context.date)
                    )
                }

                if kidHours.isAuthorized { screenTime }
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.bottom, Metric.Space.l)
        }
        .scrollIndicators(.hidden)
        .safeAreaInset(edge: .bottom) {
            startGame.padding(.bottom, Metric.Space.s)
        }
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .sheet(isPresented: $profileOpen) { ProfileScreen().tracksScreen(.profile) }
    }

    private func open() {
        Analytics.shared.track(.worldsOpened(bloom: oyno.level))
        worldsOpen = true
    }

    private var header: some View {
        HStack {
            Image("Wordmark")
                .accessibilityLabel(Text(verbatim: "Oyno"))
            Spacer()
            GlassIconButton(symbol: "person", label: "Profile") { profileOpen = true }
        }
        .padding(.top, Metric.Space.s)
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
            .padding(.horizontal, 24)
            .frame(height: Metric.primaryButton)
            .floatingGlass()
        }
        .buttonStyle(.plain)
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
    private var report: some View {
        let today = DateInterval(start: Calendar.current.startOfDay(for: .now), duration: 86_400)
        return DeviceActivityReport(.todayApps, filter: DeviceActivityFilter(segment: .daily(during: today), users: .all, devices: .init([.iPhone])))
    }
}

private extension View {
    /// Liquid Glass from iOS 26, the glass card before it.
    @ViewBuilder
    func floatingGlass() -> some View {
        if #available(iOS 26, *) {
            glassEffect(.regular.interactive(), in: .capsule)
        } else {
            glassCard(raised: true, radius: Metric.primaryButton / 2)
        }
    }
}
