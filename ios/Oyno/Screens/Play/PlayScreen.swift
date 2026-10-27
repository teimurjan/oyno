import SwiftUI

/// D3 on the canvas: one easy thing, sized to the kid's age and the energy the parent has
/// left, or one of the everyday moments (D11) the family already has, timed with nudges. The
/// Activity menu picks which. Starting is a write, so `AppRoot` asks `OynoStore` first and the
/// paywall answers a lapsed subscription. The Activity tab, titled like Kid hours, whose search
/// opens every game.
struct PlayScreen: View {
    let onStart: (Session) -> Void

    @Environment(KidHoursStore.self) private var kidHours
    @Environment(Dealer.self) private var dealer
    @Environment(\.dynamicTypeSize) private var typeSize
    @Environment(\.adaptive) private var adaptive
    @AppStorage("oyno.age") private var age = AgeBand.toddler
    @AppStorage("oyno.energy") private var energy = Energy.low
    @State private var searching = false

    private var activity: Activity { dealer.game }
    /// The everyday moment picked, nil while the Activity menu says Game.
    private var moment: OpenMoment? { dealer.moment(age: age) }

    var body: some View {
        Group {
            if adaptive.columns == .two { split } else { column }
        }
        .animation(.easeInOut(duration: 0.25), value: activity.id)
        .animation(.easeInOut(duration: 0.25), value: dealer.kind)
        .background(Palette.sky.ignoresSafeArea())
        .systemBar(adaptive)
        .toolbar {
            if adaptive.barsAreSystem {
                ToolbarItem(placement: .topBarTrailing) {
                    BarButton(title: "Find an activity", symbol: "magnifyingglass") { searching = true }
                }
            }
        }
        .navigationDestination(isPresented: $searching) {
            ActivitySearchScreen(onPick: choose) { picked in
                choose(picked)
                onStart(.game(picked))
            }
        }
        .onAppear(perform: dealIfStale)
        .onChange(of: energy) { dealIfStale() }
        .onChange(of: age) { dealIfStale() }
    }

    /// A new random game only when the one showing no longer fits the age and energy, so a tab
    /// switch or a game picked in search stays put.
    private func dealIfStale() { dealer.dealIfStale(energy: energy, age: age) }

    /// The game set first, so the age and energy that follow find it already fitting.
    private func choose(_ picked: Activity) {
        dealer.show(picked)
        age = picked.age
        energy = picked.energy
        searching = false
    }

    /// The phone's: the game from its title to its sources, the start pinned at the foot.
    private var column: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                topBar
                header
                paintedTitle(paintingWidth: 260)
                if let moment {
                    blurb.padding(.top, Metric.Space.m)
                    orPlay(moment).padding(.top, Metric.Space.xs)
                    LengthPicker(minutes: Bindable(dealer).momentMinutes).padding(.top, Metric.Space.s)
                    NudgeCard(moment: moment).padding(.top, Metric.Space.l)
                    Evidence(skills: moment.skills, references: moment.evidence).padding(.top, Metric.Space.xl)
                } else {
                    meta.padding(.top, Metric.Space.s)
                    blurb.padding(.top, Metric.Space.m)
                    battery.screenshotCallout("battery").padding(.top, Metric.Space.xl)
                    steps.padding(.top, Metric.Space.l)
                    evidence.screenshotCallout("evidence").padding(.top, Metric.Space.xl)
                }
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.xl)
            .readableWidth()
            .containerRelativeFrame(.horizontal)
        }
        .scrollIndicators(.hidden)
        .pinnedBar {
            actions
                .padding(.horizontal, Metric.gutter)
                .padding(.top, Metric.Space.m)
                .padding(.bottom, Metric.Space.xs)
                .readableWidth()
        }
    }

    /// iPad and the Duo open: the game to read on the leading side, its steps and the start on
    /// the trailing one. The battery joins the steps on the Duo, where the thumb is.
    private var split: some View {
        FoldColumns {
            ScrollsIfNeeded {
                VStack(alignment: .leading, spacing: 0) {
                    topBar
                    header
                    paintedTitle(paintingWidth: 320)
                    if let moment {
                        blurb.padding(.top, 14)
                        orPlay(moment).padding(.top, Metric.Space.s)
                        if adaptive.bars == .top {
                            LengthPicker(minutes: Bindable(dealer).momentMinutes).padding(.top, 28)
                        }
                        Spacer(minLength: Metric.Space.xl)
                        Evidence(skills: moment.skills, references: moment.evidence)
                    } else {
                        meta.padding(.top, Metric.Space.m)
                        blurb.padding(.top, 14)
                        if adaptive.bars == .top { battery.padding(.top, 28) }
                        Spacer(minLength: Metric.Space.xl)
                        evidence
                    }
                }
                .padding(.vertical, Metric.Space.xl)
            }
        } trailing: {
            ScrollsIfNeeded {
                VStack(alignment: .leading, spacing: adaptive.roomy ? Metric.Space.xl : 14) {
                    if let moment {
                        if adaptive.bars != .top { LengthPicker(minutes: Bindable(dealer).momentMinutes) }
                        NudgeCard(moment: moment, large: adaptive.roomy)
                    } else {
                        if adaptive.bars != .top { battery }
                        steps
                    }
                    Spacer(minLength: 0)
                    actions
                }
                .padding(.vertical, Metric.Space.xl)
            }
        }
    }

    private func start() { onStart(dealer.session(age: age)) }

    /// "Or play Three Splashes · 5 min": the deck's game for the same routine, where it has one.
    @ViewBuilder
    private func orPlay(_ moment: OpenMoment) -> some View {
        if let game = moment.linkedGame {
            OrPlayLink(game: game) { dealer.show(game) }
        }
    }

    /// The title and search, as Kid hours carries its title and Home its wordmark. Where the
    /// system's bar holds search, there is nothing to draw.
    @ViewBuilder
    private var topBar: some View {
        if !adaptive.barsAreSystem {
            HStack(spacing: Metric.Space.s) {
                Text("Activity")
                    .oynoTitle()
                    .accessibilityAddTraits(.isHeader)
                Spacer(minLength: 0)
                GlassIconButton(symbol: "magnifyingglass", label: "Find an activity") { searching = true }
            }
            .padding(.bottom, Metric.Space.l)
        }
    }

    // MARK: The game

    /// The words and painting showing: the everyday moment picked, else the game dealt.
    private var shownID: String { moment?.id ?? activity.id }
    private var shownTitle: String { moment?.title ?? activity.title }
    private var shownBlurb: String { moment?.blurb ?? activity.blurb }
    private var shownArt: UIImage? { moment.map { Painting.of($0) } ?? Painting.of(activity) }

    /// The painting above the title, fading out at its foot where the title overlaps it on a
    /// glow, for a game and an everyday moment alike. Just the title for a game not painted yet.
    @ViewBuilder
    private func paintedTitle(paintingWidth width: CGFloat) -> some View {
        if let art = shownArt {
            Image(uiImage: art)
                .resizable()
                .scaledToFit()
                .frame(width: width, height: (width * 0.82).rounded())
                .mask(LinearGradient(
                    stops: [.init(color: .black, location: 0.66), .init(color: .clear, location: 0.98)],
                    startPoint: .top, endPoint: .bottom
                ))
                .id(shownID)
                .transition(.opacity)
                .accessibilityHidden(true)
                .padding(.top, Metric.Space.s)
            title
                .shadow(color: Palette.canvas.opacity(0.95), radius: 9)
                .shadow(color: Palette.canvas.opacity(0.9), radius: 1.5)
                .padding(.top, -40)
        } else {
            title
        }
    }

    /// What to do, a game or an everyday moment, and the kid's age, as two quiet menus.
    private var header: some View {
        HStack(spacing: Metric.Space.s) {
            activityMenu
            // Beside the first in a column of its own, at the far edge in the phone's full width.
            if adaptive.columns != .two { Spacer(minLength: 0) }
            ageMenu
        }
    }

    private var activityMenu: some View {
        Menu {
            Picker("Activity", selection: Bindable(dealer).kind) {
                ForEach(MomentKind.allCases) { kind in
                    Label {
                        Text(verbatim: kind.label)
                        Text(verbatim: kind.line)
                    } icon: {
                        Image(systemName: kind.symbol)
                    }
                    .tag(kind)
                }
            }
        } label: {
            HStack(spacing: 5) {
                Text(verbatim: dealer.kind.label)
                    .font(Typeface.ui(13, .bold, relativeTo: .caption))
                    .foregroundStyle(Palette.ink)
                Glyph.caret(Palette.muted)
            }
            .padding(.horizontal, 12)
            .frame(minHeight: 32)
            .background(Palette.surface, in: .capsule)
            .frame(minHeight: Metric.tapTarget)
            .contentShape(.rect)
        }
        .accessibilityLabel(Text("Activity"))
        .accessibilityValue(Text(verbatim: dealer.kind.label))
        .screenshotCallout("activity")
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

    /// As tall as the title runs. A new game's words crossfade while the page eases to its height.
    private var title: some View {
        Text(verbatim: shownTitle)
            .lineLimit(typeSize.isAccessibilitySize ? nil : 2)
            .minimumScaleFactor(0.75)
            .fixedSize(horizontal: false, vertical: true)
            .contentTransition(.opacity)
            .accessibilityAddTraits(.isHeader)
            .font(Typeface.ui(titleSize, .extrabold, relativeTo: .largeTitle))
            .tracking(-titleSize * 0.0375)
            .foregroundStyle(Palette.ink)
            .frame(maxWidth: .infinity, alignment: .leading)
    }

    private var titleSize: CGFloat {
        guard adaptive.columns == .two else { return 48 }
        return adaptive.roomy ? 68 : 54
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
                Badge(symbol: tag.symbol, label: tag.label)
            }
        }
    }

    /// Three lines held open, like the title's two, and free to grow past them.
    private var blurb: some View {
        ZStack(alignment: .topLeading) {
            Text(verbatim: " \n \n ").hidden().accessibilityHidden(true)
            Text(verbatim: shownBlurb).fixedSize(horizontal: false, vertical: true)
        }
        .font(Typeface.ui(15, .regular, relativeTo: .body))
        .foregroundStyle(Palette.muted)
        .lineSpacing(3)
        .frame(maxWidth: adaptive.columns == .two ? 440 : 310, alignment: .leading)
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
                    .lineLimit(1)
                    .minimumScaleFactor(0.8)
                    .foregroundStyle(active ? Palette.ink : Palette.muted)
            }
        }
    }

    private var steps: some View {
        Card(padding: adaptive.roomy ? 24 : Metric.cardPadding, raised: true) {
            StepList(steps: activity.steps, large: adaptive.roomy)
        }
    }

    private var evidence: some View { Evidence(skills: activity.skills, references: activity.evidence) }

    // MARK: Actions

    /// Pinned above the tab bar on the phone, so the start is never under it whatever the
    /// game's length. At the foot of the trailing column on a wide window.
    private var actions: some View {
        VStack(spacing: 2) {
            PrimaryButton(title: startTitle, symbol: "play.fill") { start() }
            HStack {
                if moment == nil { differentIdea }
                Spacer()
                if kidHours.isOnNow { kidHoursOn.transition(.opacity) }
            }
        }
    }

    private var startTitle: LocalizedStringResource {
        switch dealer.kind {
        case .game: "Start \(activity.minutes)-minute round"
        case .reading: "Start \(dealer.momentMinutes) minutes of reading"
        case .bath: "Start \(dealer.momentMinutes) minutes of bath time"
        case .cooking: "Start \(dealer.momentMinutes) minutes of cooking"
        case .lead: "Start \(dealer.momentMinutes) minutes, phone down"
        }
    }

    private var differentIdea: some View {
        Button {
            Haptics.tap()
            dealer.dealAnother()
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
    }

    /// That Kid hours are on now, a green dot and their name. "Not now" lives on the Kid hours tab.
    private var kidHoursOn: some View {
        HStack(spacing: 7) {
            Circle().fill(Palette.good).frame(width: 8, height: 8)
            Text("Kid hours")
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
        }
        .padding(.horizontal, 6)
        .frame(height: Metric.tapTarget)
        .accessibilityElement(children: .combine)
        .accessibilityLabel(Text("Kid hours are on"))
    }
}

/// The screens a round pushes over its timer.
enum PlayRoute: Hashable {
    /// The round as recorded, with what it left on the planet.
    case done(Round)
}

