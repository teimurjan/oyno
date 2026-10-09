import SwiftUI

/// D3 on the canvas: one easy thing, sized to the energy the parent has left. Starting it is
/// a write, so it asks `OynoStore` first and the paywall answers a lapsed subscription.
struct PlayScreen: View {
    @Binding var path: [PlayRoute]

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @AppStorage("oyno.energy") private var energy = Energy.low
    @State private var activity = Activity.pick(for: .low)

    var body: some View {
        ScrollView {
            VStack(spacing: Metric.Space.l) {
                if kidHours.isOnNow {
                    Label("Kid hours · until \(Format.timeOfDay(minutes: kidHours.settings.schedule.end))", systemImage: "circle.fill")
                        .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.ink)
                        .labelStyle(DotLabelStyle())
                        .padding(.horizontal, 12)
                        .frame(height: 32)
                        .glassCard(radius: 16)
                }

                PlanetScene { Analytics.shared.track(.planetTapped(bloom: oyno.bloom)) }
                    .frame(maxWidth: 170)

                VStack(spacing: 4) {
                    Text("One easy thing").oynoEyebrow()
                    Text(verbatim: activity.title)
                        .font(Typeface.ui(34, .extrabold, relativeTo: .largeTitle))
                        .tracking(-1.1)
                        .foregroundStyle(Palette.ink)
                        .multilineTextAlignment(.center)
                    HStack(spacing: 6) {
                        tag(String(interface: "\(activity.minutes) min"))
                        ForEach(activity.tags, id: \.self, content: tag)
                    }
                    .padding(.top, Metric.Space.s)
                }

                energyPicker
                steps

                PrimaryButton(title: "Start \(activity.minutes) minutes") { start() }
                Button {
                    Haptics.tap()
                    activity = Activity.pick(for: energy, after: activity)
                } label: {
                    Label("Different idea", systemImage: "shuffle")
                        .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                        .foregroundStyle(Palette.ink)
                        .frame(height: Metric.tapTarget)
                }
                .buttonStyle(.plain)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.vertical, Metric.Space.l)
        }
        .scrollIndicators(.hidden)
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .onAppear { activity = Activity.pick(for: energy) }
        .onChange(of: energy) { _, value in activity = Activity.pick(for: value) }
    }

    private func start() {
        guard oyno.requireEntitlement() else { return }
        Analytics.shared.track(.roundStarted(activity: activity.id, energy: energy.rawValue))
        path.append(.timer(activity.id))
    }

    private func tag(_ text: String) -> some View {
        Text(verbatim: text)
            .font(Typeface.ui(12, .semibold, relativeTo: .caption))
            .foregroundStyle(Palette.ink)
            .padding(.horizontal, 10)
            .frame(height: 28)
            .glassCard(radius: 14)
    }

    private var energyPicker: some View {
        HStack(spacing: 4) {
            ForEach(Energy.allCases) { level in
                let active = level == energy
                Button {
                    Haptics.tap()
                    energy = level
                } label: {
                    Text(verbatim: level.label)
                        .font(Typeface.ui(14, active ? .bold : .semibold, relativeTo: .subheadline))
                        .foregroundStyle(active ? Palette.ink : Palette.muted)
                        .frame(maxWidth: .infinity)
                        .frame(height: 40)
                        .background(active ? Palette.surface : .clear, in: .capsule)
                        .shadow(color: active ? Palette.glassShadow : .clear, radius: 5, y: 2)
                }
                .buttonStyle(.plain)
                .accessibilityAddTraits(active ? .isSelected : [])
            }
        }
        .padding(4)
        .glassCard(radius: 24)
        .accessibilityElement(children: .contain)
        .accessibilityLabel(Text("Energy"))
    }

    private var steps: some View {
        Card(raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.m) {
                ForEach(Array(activity.steps.enumerated()), id: \.offset) { index, step in
                    HStack(alignment: .top, spacing: Metric.Space.m) {
                        Text(verbatim: "\(index + 1)")
                            .font(Typeface.ui(13, .extrabold, relativeTo: .caption))
                            .foregroundStyle(Palette.ink)
                            .frame(width: 28, height: 28)
                            .background(Self.stepTints[index % Self.stepTints.count], in: .circle)
                        Text(verbatim: step)
                            .font(Typeface.ui(15, .regular, relativeTo: .body))
                            .foregroundStyle(Palette.ink)
                            .padding(.top, 4)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }
            }
        }
    }

    private static let stepTints = [Color(hex: 0xDDEFDF), Color(hex: 0xE9E2F8), Color(hex: 0xFCEACB)]
}

enum PlayRoute: Hashable {
    case timer(String)
    case done(activityID: String, minutes: Int)
}

/// A small green dot before the text, as the canvas draws the Kid hours pill.
private struct DotLabelStyle: LabelStyle {
    func makeBody(configuration: Configuration) -> some View {
        HStack(spacing: 7) {
            Circle().fill(Palette.good).frame(width: 7, height: 7)
            configuration.title
        }
    }
}
