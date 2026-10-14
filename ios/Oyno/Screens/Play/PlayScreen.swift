import SwiftUI

/// D3 on the canvas: one easy thing, sized to the kid's age and the energy the parent has
/// left. Starting it is a write, so it asks `OynoStore` first and the paywall answers a lapsed
/// subscription. A tab, whose back button returns to Home and whose search opens every game.
struct PlayScreen: View {
    let onBack: () -> Void
    let onStart: (Activity) -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.dynamicTypeSize) private var typeSize
    @AppStorage("oyno.age") private var age = AgeBand.toddler
    @AppStorage("oyno.energy") private var energy = Energy.low
    @State private var activity = Activity.pick(for: .low, age: .toddler)
    @State private var holding: CGFloat = 0
    @State private var searching = false

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                topBar.padding(.bottom, Metric.Space.l)
                header
                title
                meta.padding(.top, Metric.Space.s)
                blurb.padding(.top, Metric.Space.m)
                battery.screenshotCallout("battery").padding(.top, Metric.Space.xl)
                steps.padding(.top, Metric.Space.l)
                evidence.screenshotCallout("evidence").padding(.top, Metric.Space.xl)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.xl)
            .containerRelativeFrame(.horizontal)
        }
        .scrollIndicators(.hidden)
        .pinnedBar { actions }
        .animation(.easeInOut(duration: 0.25), value: activity.id)
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .navigationDestination(isPresented: $searching) { ActivitySearchScreen(onPick: choose) }
        .onAppear(perform: dealIfStale)
        .onChange(of: energy) { dealIfStale() }
        .onChange(of: age) { dealIfStale() }
    }

    /// A new random game only when the one showing no longer fits the age and energy, so a tab
    /// switch or a game picked in search stays put.
    private func dealIfStale() {
        guard activity.energy != energy || activity.age != age else { return }
        activity = Activity.pick(for: energy, age: age)
    }

    /// The game set first, so the age and energy that follow find it already fitting.
    private func choose(_ picked: Activity) {
        activity = picked
        age = picked.age
        energy = picked.energy
        searching = false
    }

    private func start() {
        guard oyno.requireEntitlement() else { return }
        Analytics.shared.track(.roundStarted(activity: activity.id, energy: energy.rawValue, age: age.rawValue))
        onStart(activity)
    }

    /// Back, the Kid hours status and search, the status centred between the two buttons.
    private var topBar: some View {
        HStack(spacing: Metric.Space.s) {
            GlassIconButton(symbol: "chevron.left", label: "Back", action: onBack)
            Spacer(minLength: 0)
            if let status = kidHoursStatus { pill(status) }
            Spacer(minLength: 0)
            GlassIconButton(symbol: "magnifyingglass", label: "Find an activity") { searching = true }
        }
    }

    // MARK: Kid hours

    private struct Status {
        let text: String
        /// Whether the apps are paused right now, or open on a break.
        let paused: Bool
    }

    /// "Kid hours · until 7:30 PM" while the apps are paused, "Apps open until 6:12 PM" during
    /// an unlock, nothing when Kid hours are off.
    private var kidHoursStatus: Status? {
        if let current = kidHours.current {
            return Status(text: String(interface: "Kid hours · until \(Format.timeOfDay(minutes: current.end))"), paused: true)
        }
        if let end = kidHours.unlockEnd {
            return Status(text: String(interface: "Apps open until \(Format.timeOfDay(date: end))"), paused: false)
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
        .frame(minHeight: 32)
        .background(Palette.wash, in: .capsule)
        .accessibilityElement(children: .combine)
    }

    // MARK: The game

    /// The eyebrow, and the kid's age as a quiet menu: it is set once and rarely changes.
    private var header: some View {
        HStack(spacing: Metric.Space.s) {
            Text("One easy thing")
                .font(Typeface.ui(13, .bold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
            Spacer(minLength: 0)
            ageMenu
        }
    }

    private var ageMenu: some View {
        Menu {
            Picker("Kid's age", selection: $age) {
                ForEach(AgeBand.allCases) { band in
                    Text("\(band.label) years").tag(band)
                }
            }
        } label: {
            HStack(spacing: 5) {
                Text("Age \(age.label)")
                    .font(Typeface.figures(13, .bold, relativeTo: .caption))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
                Glyph.caret(Palette.muted)
            }
            .padding(.horizontal, 12)
            .frame(minHeight: 32)
            .background(Palette.surface, in: .capsule)
            .frame(minHeight: Metric.tapTarget)
            .contentShape(.rect)
        }
        .accessibilityLabel(Text("Kid's age"))
        .accessibilityValue(Text(verbatim: age.label))
    }

    /// Two lines held open in the title's own font, so a short title does not pull the page up
    /// and the reserve grows with Dynamic Type.
    private var title: some View {
        ZStack(alignment: .topLeading) {
            Text(verbatim: " \n ").hidden().accessibilityHidden(true)
            Text(verbatim: activity.title)
                .lineLimit(typeSize.isAccessibilitySize ? nil : 2)
                .minimumScaleFactor(0.75)
                .fixedSize(horizontal: false, vertical: true)
                .accessibilityAddTraits(.isHeader)
        }
        .font(Typeface.ui(48, .extrabold, relativeTo: .largeTitle))
        .tracking(-1.8)
        .foregroundStyle(Palette.ink)
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    /// How long, then what it needs: plain text for the time, quiet badges for the rest.
    private var meta: some View {
        FlowLayout(spacing: 6) {
            HStack(spacing: 5) {
                Glyph(symbol: "clock", size: 13, weight: .semibold, color: Palette.muted)
                Text("\(activity.minutes) min")
                    .font(Typeface.figures(13, .semibold, relativeTo: .caption))
                    .monospacedDigit()
                    .foregroundStyle(Palette.muted)
            }
            .frame(minHeight: 26)
            .padding(.trailing, Metric.Space.xs)
            .accessibilityElement(children: .ignore)
            .accessibilityLabel(Text("\(activity.minutes) minutes"))
            ForEach(activity.tags, id: \.id) { tag in
                Badge(symbol: Self.symbol(for: tag), label: tag.label)
            }
        }
    }

    /// Three lines held open, like the title's two, and free to grow past them.
    private var blurb: some View {
        ZStack(alignment: .topLeading) {
            Text(verbatim: " \n \n ").hidden().accessibilityHidden(true)
            Text(verbatim: activity.blurb).fixedSize(horizontal: false, vertical: true)
        }
        .font(Typeface.ui(15, .regular, relativeTo: .body))
        .foregroundStyle(Palette.muted)
        .lineSpacing(3)
        .frame(maxWidth: 310, alignment: .leading)
    }

    /// The icon on a tag's badge, by the tag's id. A tag added to the data later wears a plain
    /// sparkle until it is given one here.
    private static func symbol(for tag: Activity.Tag) -> String {
        switch tag.id {
        case "lying-down": "sofa"
        case "sitting": "figure.seated.side"
        case "standing": "figure.stand"
        case "on-your-lap": "figure.2.and.child.holdinghands"
        case "nothing-to-grab": "circle.slash"
        case "quiet": "speaker.slash"
        case "one-room": "door.left.hand.open"
        case "hallway": "arrow.left.and.right"
        case "bedtime": "moon.stars"
        case "mealtime": "fork.knife"
        case "bath": "bathtub"
        case "on-a-walk": "figure.walk"
        case "in-the-car": "car"
        case "stairs": "figure.stairs"
        case "window": "window.casement"
        case "socks": "shoe"
        case "cushions": "rectangle.stack"
        case "chairs": "chair"
        case "a-cup": "cup.and.saucer"
        case "a-cloth": "tshirt"
        case "a-book": "book"
        case "a-mirror": "person.crop.square"
        case "a-ball": "soccerball"
        case "a-toy": "teddybear"
        case "stacking": "square.stack.3d.up"
        case "crayons": "pencil.and.scribble"
        case "lights": "lightbulb"
        case "music": "music.note"
        case "singing": "music.mic"
        default: "sparkles"
        }
    }

    /// The icon on a skill's badge, by the skill's id.
    private static func symbol(for skill: Activity.Skill) -> String {
        switch skill.id {
        case "working-memory": "brain.head.profile"
        case "inhibitory-control": "hand.raised"
        case "cognitive-flexibility": "arrow.triangle.2.circlepath"
        case "attention": "eye"
        default: "sparkles"
        }
    }

    /// One row where it fits, the label above the picker where a language or type size runs long.
    private var battery: some View {
        ViewThatFits(in: .horizontal) {
            HStack(spacing: Metric.Space.m) {
                batteryLabel
                energyPicker
            }
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                batteryLabel
                energyPicker
            }
        }
    }

    private var batteryLabel: some View {
        Text("Your battery").oynoEyebrow()
    }

    private var energyPicker: some View {
        Segments(accessibilityLabel: "Energy", options: Energy.allCases, selection: $energy) { level, active in
            HStack(spacing: 6) {
                Glyph(symbol: level.symbol, size: 15, color: active ? Palette.ink : Palette.muted)
                Text(verbatim: level.label)
                    .font(Typeface.ui(14, active ? .bold : .semibold, relativeTo: .subheadline))
                    .foregroundStyle(active ? Palette.ink : Palette.muted)
            }
        }
    }

    private var steps: some View {
        Card(raised: true) { StepList(steps: activity.steps) }
    }

    /// What the game exercises and who showed it, kept quiet under the steps. A source opens
    /// in the browser.
    private var evidence: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            Text("Why it works").oynoEyebrow()
            FlowLayout(spacing: 6) {
                ForEach(activity.skills, id: \.id) { skill in
                    Badge(symbol: Self.symbol(for: skill), label: skill.label)
                }
            }
            VStack(alignment: .leading, spacing: 0) {
                ForEach(activity.evidence, id: \.url) { reference in
                    Link(destination: reference.url) {
                        HStack(alignment: .firstTextBaseline, spacing: 4) {
                            Text(verbatim: reference.short)
                            Glyph(symbol: "arrow.up.right", size: 10, weight: .bold, color: Palette.muted)
                        }
                        .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.muted)
                        .frame(minHeight: 28)
                        .contentShape(.rect)
                    }
                    .accessibilityLabel(Text(verbatim: reference.title))
                }
            }
        }
    }

    // MARK: Actions

    /// Pinned above the tab bar, so the start is never under it whatever the game's length.
    private var actions: some View {
        VStack(spacing: 2) {
            PrimaryButton(title: "Start \(activity.minutes)-minute round", symbol: "play.fill") { start() }
            HStack {
                Button {
                    Haptics.tap()
                    activity = Activity.next(after: activity)
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
        .padding(.horizontal, Metric.gutter)
        .padding(.top, Metric.Space.m)
        .padding(.bottom, Metric.Space.xs)
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
        .holdToConfirm(progress: $holding) { kidHours.takeNotNow() }
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(.isButton)
        .accessibilityLabel(Text("Not now"))
        .accessibilityHint(Text("Opens your apps for \(KidHoursStore.notNowMinutes) minutes"))
        .accessibilityAction { kidHours.takeNotNow() }
    }
}

/// The screens a round pushes over its timer.
enum PlayRoute: Hashable {
    case done(minutes: Int)
}

/// What a game needs or exercises: a glyph and a word or three on a quiet ground. Not a
/// control, so no capsule and no glass edge.
private struct Badge: View {
    let symbol: String
    let label: String

    var body: some View {
        HStack(spacing: 5) {
            Glyph(symbol: symbol, size: 12, weight: .semibold, color: Palette.slate)
            Text(verbatim: label)
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.slate)
        }
        .padding(.horizontal, 9)
        .padding(.vertical, 4)
        .frame(minHeight: 26)
        .background(Palette.wash, in: .rect(cornerRadius: 8))
    }
}

/// A segmented control: a quiet track, the chosen option lifted onto solid white. Each
/// option's tap area runs the track's full height.
private struct Segments<Option: Hashable, Face: View>: View {
    let accessibilityLabel: LocalizedStringResource
    let options: [Option]
    @Binding var selection: Option
    @ViewBuilder let face: (_ option: Option, _ active: Bool) -> Face

    var body: some View {
        HStack(spacing: 0) {
            ForEach(options, id: \.self) { option in
                let active = option == selection
                Button {
                    Haptics.tap()
                    selection = option
                } label: {
                    face(option, active)
                        .padding(.horizontal, 10)
                        .frame(maxWidth: .infinity, minHeight: 36)
                        .background {
                            Capsule()
                                .fill(active ? Palette.surface : .clear)
                                .shadow(color: active ? Palette.glassShadow : .clear, radius: 4, y: 2)
                        }
                        .padding(.vertical, 4)
                        .contentShape(.rect)
                }
                .buttonStyle(.plain)
                .accessibilityAddTraits(active ? .isSelected : [])
            }
        }
        .padding(.horizontal, 4)
        .background(Palette.wash, in: .capsule)
        .accessibilityElement(children: .contain)
        .accessibilityLabel(Text(accessibilityLabel))
    }
}

private extension Palette {
    /// The ground under metadata and a segmented track: a tint of ink, no glass, no edge.
    static let wash = Palette.ink.opacity(0.06)
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
