import SwiftUI

/// D3 on the canvas: one easy thing, sized to the energy the parent has left. Starting it is
/// a write, so it asks `OynoStore` first and the paywall answers a lapsed subscription. A tab
/// rather than a pushed screen, so the menu stays under it where the canvas has a back button.
struct PlayScreen: View {
    @Binding var path: [PlayRoute]

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @AppStorage("oyno.energy") private var energy = Energy.low
    @State private var activity = Activity.pick(for: .low)
    @State private var holding: CGFloat = 0

    var body: some View {
        GeometryReader { viewport in
            ScrollView {
                VStack(alignment: .leading, spacing: 0) {
                    if let status = kidHoursStatus {
                        pill(status).frame(maxWidth: .infinity)
                    }
                    heading.padding(.top, kidHoursStatus == nil ? Metric.Space.m : 34)
                    tags.padding(.top, 14)
                    Text(verbatim: activity.blurb)
                        .font(Typeface.ui(15, .regular, relativeTo: .body))
                        .foregroundStyle(Palette.muted)
                        .lineSpacing(3)
                        .fixedSize(horizontal: false, vertical: true)
                        .frame(maxWidth: 310, alignment: .leading)
                        .padding(.top, 12)
                    battery.padding(.top, 22)
                    steps.padding(.top, 14)
                    Spacer(minLength: Metric.Space.xl)
                    actions
                }
                .padding(.horizontal, Metric.gutter)
                .padding(.top, Metric.Space.s)
                .padding(.bottom, Metric.Space.m)
                .frame(minHeight: viewport.size.height)
            }
            .scrollIndicators(.hidden)
        }
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

    // MARK: Kid hours

    private struct Status {
        let text: String
        /// Whether the apps are paused right now, or open on a break.
        let paused: Bool
    }

    /// "Kid hours · until 7:30 PM" while the apps are paused, "Apps open until 6:12 PM" on a
    /// break, nothing when Kid hours are off.
    private var kidHoursStatus: Status? {
        if let current = kidHours.current {
            return Status(text: String(interface: "Kid hours · until \(Format.timeOfDay(minutes: current.end))"), paused: true)
        }
        if let ends = kidHours.breakEndsAt {
            return Status(text: String(interface: "Apps open until \(Format.timeOfDay(date: ends))"), paused: false)
        }
        return nil
    }

    private func pill(_ status: Status) -> some View {
        HStack(spacing: 7) {
            Circle().fill(status.paused ? Palette.good : Palette.caution).frame(width: 7, height: 7)
            Text(verbatim: status.text)
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.ink)
        }
        .padding(.horizontal, 12)
        .frame(height: 32)
        .glassCard(radius: 16)
        .accessibilityElement(children: .combine)
    }

    // MARK: The game

    private var heading: some View {
        HStack(alignment: .top, spacing: Metric.Space.m) {
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                Text("One easy thing")
                    .font(Typeface.ui(13, .bold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
                Text(verbatim: activity.title)
                    .font(Typeface.ui(48, .extrabold, relativeTo: .largeTitle))
                    .tracking(-1.8)
                    .foregroundStyle(Palette.ink)
                    .lineLimit(3)
                    .minimumScaleFactor(0.7)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Spacer(minLength: 0)
            VStack(spacing: 0) {
                Text(verbatim: "\(activity.minutes)")
                    .font(Typeface.figures(32, .extrabold, relativeTo: .title))
                    .tracking(-1)
                    .foregroundStyle(Palette.ink)
                Text("min")
                    .font(Typeface.ui(12, .bold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
            }
            .frame(width: 88, height: 88)
            .glassCard(raised: true, radius: 44)
            .padding(.top, 18)
            .accessibilityElement(children: .combine)
            .accessibilityLabel(Text("\(activity.minutes) minutes"))
        }
    }

    private var tags: some View {
        HStack(spacing: 6) {
            ForEach(activity.tags, id: \.id) { tag in
                HStack(spacing: 6) {
                    Glyph(symbol: Self.symbol(for: tag), size: 13, weight: .semibold)
                    Text(verbatim: tag.label)
                        .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.ink)
                }
                .padding(.horizontal, 11)
                .frame(height: 30)
                .glassCard(radius: 15)
            }
        }
    }

    /// The icon on a tag's chip, by the tag's id. A tag added to the data later wears a plain
    /// sparkle until it is given one here.
    private static func symbol(for tag: Activity.Tag) -> String {
        switch tag.id {
        case "lying-down": "sofa"
        case "sitting": "figure.seated.side"
        case "standing": "figure.stand"
        case "nothing-to-grab": "circle.slash"
        case "quiet": "speaker.slash"
        case "one-room": "door.left.hand.open"
        case "hallway": "arrow.left.and.right"
        case "socks": "shoe"
        case "cushions": "rectangle.stack"
        case "chairs": "chair"
        case "music": "music.note"
        default: "sparkles"
        }
    }

    private var battery: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            Text("Your battery right now").oynoEyebrow()
            HStack(spacing: 4) {
                ForEach(Energy.allCases) { level in
                    let active = level == energy
                    Button {
                        Haptics.tap()
                        energy = level
                    } label: {
                        HStack(spacing: 6) {
                            Glyph(symbol: level.symbol, size: 16, color: active ? Palette.ink : Palette.muted)
                            Text(verbatim: level.label)
                                .font(Typeface.ui(14, active ? .bold : .semibold, relativeTo: .subheadline))
                                .foregroundStyle(active ? Palette.ink : Palette.muted)
                        }
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
    }

    private var steps: some View {
        Card(raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.m) {
                ForEach(Array(activity.steps.enumerated()), id: \.offset) { index, step in
                    let tint = Palette.pastels[index % Palette.pastels.count]
                    HStack(alignment: .top, spacing: Metric.Space.m) {
                        Text(verbatim: "\(index + 1)")
                            .font(Typeface.figures(13, .extrabold, relativeTo: .caption))
                            .foregroundStyle(tint.ink)
                            .frame(width: 28, height: 28)
                            .background(tint.fill, in: .circle)
                        Text(verbatim: step)
                            .font(Typeface.ui(15, .regular, relativeTo: .body))
                            .foregroundStyle(Palette.ink)
                            .lineSpacing(3)
                            .padding(.top, 4)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }
            }
        }
    }

    // MARK: Actions

    private var actions: some View {
        VStack(spacing: 6) {
            PrimaryButton(title: "Start \(activity.minutes) minutes", symbol: "play.fill") { start() }
            HStack {
                Button {
                    Haptics.tap()
                    activity = Activity.pick(for: energy, after: activity)
                } label: {
                    HStack(spacing: Metric.Space.s) {
                        Glyph(symbol: "shuffle", size: 15, weight: .semibold)
                        Text("Different idea")
                            .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                            .foregroundStyle(Palette.ink)
                    }
                    .padding(.horizontal, 6)
                    .frame(height: Metric.tapTarget)
                    .contentShape(.rect)
                }
                .buttonStyle(.plain)
                Spacer()
                if kidHours.isOnNow { notNow }
            }
        }
    }

    /// Held for two seconds, as on Kid hours: the apps open for a break instead of a round.
    private var notNow: some View {
        HStack(spacing: 9) {
            HoldRing(progress: holding)
            Text("Hold for not now")
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
        }
        .padding(.horizontal, 6)
        .frame(height: Metric.tapTarget)
        .contentShape(.rect)
        .holdToConfirm(progress: $holding) { kidHours.takeBreak() }
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(.isButton)
        .accessibilityLabel(Text("Not now"))
        .accessibilityHint(Text("Opens your apps for \(KidHoursStore.breakMinutes) minutes"))
        .accessibilityAction { kidHours.takeBreak() }
    }
}

enum PlayRoute: Hashable {
    case timer(String)
    case done(activityID: String, minutes: Int)
}

private extension Energy {
    /// How full the battery on the picker is drawn.
    var symbol: String {
        switch self {
        case .low: "battery.25"
        case .okay: "battery.50"
        case .full: "battery.100"
        }
    }
}
