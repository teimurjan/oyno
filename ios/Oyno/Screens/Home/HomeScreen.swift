import SwiftUI

/// D2 on the canvas: the family on its planet, today's minutes together, and the one easy
/// thing to do next. Pressing the planet shrinks it into the worlds.
struct HomeScreen: View {
    /// Switches to Play with the suggested game.
    let play: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @AppStorage("oyno.energy") private var energy = Energy.low
    @State private var worldsOpen = false

    private var suggestion: Activity { Activity.pick(for: energy) }

    var body: some View {
        ScrollView {
            VStack(spacing: Metric.Space.l) {
                header

                PlanetScene(open: worldsOpen, bloom: oyno.bloom) {
                    open()
                } onClose: {
                    worldsOpen = false
                }
                .frame(maxWidth: 300)

                today
                stats
                nextCard
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.bottom, Metric.Space.xl)
        }
        .scrollIndicators(.hidden)
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
    }

    private func open() {
        Analytics.shared.track(.worldsOpened(bloom: oyno.bloom))
        worldsOpen = true
    }

    private var header: some View {
        HStack {
            Image("Wordmark")
                .accessibilityLabel(Text(verbatim: "Oyno"))
            Spacer()
            HStack(spacing: 6) {
                Image(systemName: "sun.max.fill").foregroundStyle(Palette.caution)
                Text(verbatim: "\(oyno.bloom)").oynoValue(14, .extrabold)
            }
            .padding(.horizontal, 12)
            .frame(height: 36)
            .glassCard(radius: 18)
            .accessibilityElement(children: .combine)
            .accessibilityLabel(Text("Bloom level \(oyno.bloom)"))
            NavigationLink(value: HomeRoute.profile) {
                Image(systemName: "person")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(Palette.ink)
                    .frame(width: Metric.tapTarget, height: Metric.tapTarget)
                    .glassCard(radius: Metric.tapTarget / 2)
            }
            .accessibilityLabel(Text("Profile"))
        }
        .padding(.top, Metric.Space.s)
    }

    private var today: some View {
        VStack(spacing: 2) {
            Text("Together today").oynoEyebrow()
            Text("\(oyno.minutesToday) min").oynoHeadlineValue()
        }
        .accessibilityElement(children: .combine)
    }

    private var stats: some View {
        HStack(spacing: Metric.Space.s) {
            stat(value: "\(oyno.rounds.count)", label: String(interface: "Rounds"))
            stat(value: "\(oyno.rounds.totalMinutes)", label: String(interface: "Minutes"))
            stat(value: oyno.world.name, label: String(interface: "World"))
        }
    }

    private func stat(value: String, label: String) -> some View {
        VStack(spacing: 2) {
            Text(verbatim: value).oynoValue(17, .extrabold).lineLimit(1).minimumScaleFactor(0.7)
            Text(verbatim: label).oynoCaption()
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Metric.Space.m)
        .glassCard(radius: 20)
        .accessibilityElement(children: .combine)
    }

    private var nextCard: some View {
        Card(raised: true) {
            VStack(alignment: .leading, spacing: 6) {
                HStack {
                    Label {
                        Text(kidHoursLine)
                    } icon: {
                        Image(systemName: "clock")
                    }
                    .font(Typeface.ui(12, .semibold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
                    Spacer()
                    if kidHours.isOnNow {
                        Text("On now")
                            .font(Typeface.ui(11, .extrabold, relativeTo: .caption2))
                            .foregroundStyle(Color(hex: 0x2F6B3B))
                            .padding(.horizontal, 9)
                            .frame(height: 22)
                            .background(Color(hex: 0xDDEFDF), in: .capsule)
                    }
                }
                Text("\(energy.label) battery? Try \(suggestion.title)")
                    .font(Typeface.ui(19, .extrabold, relativeTo: .title3))
                    .tracking(-0.4)
                    .foregroundStyle(Palette.ink)
                Text(verbatim: suggestion.tags.joined(separator: " · "))
                    .oynoCaption()
                Button {
                    Haptics.tap()
                    play()
                } label: {
                    Label("Start \(suggestion.minutes) min", systemImage: "play.fill")
                        .font(Typeface.ui(15, .bold, relativeTo: .subheadline))
                        .foregroundStyle(Palette.onAccent)
                        .padding(.horizontal, 18)
                        .frame(height: Metric.tapTarget)
                        .background(Palette.accent, in: .capsule)
                }
                .buttonStyle(.plain)
                .padding(.top, Metric.Space.s)
            }
        }
    }

    private var kidHoursLine: String {
        let schedule = kidHours.settings.schedule
        let end = Format.timeOfDay(minutes: schedule.end)
        return kidHours.settings.isEnabled
            ? String(interface: "Kid hours · until \(end)")
            : String(interface: "Kid hours are off")
    }
}

enum HomeRoute: Hashable {
    case profile
}
