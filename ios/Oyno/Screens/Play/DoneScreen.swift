import SwiftUI

/// D5 on the canvas: the round is in, the kid taps the planet and it blooms inside a halo of
/// rings and petals. Then a gift, a step at a time in the sheet at the foot: what the moment
/// practiced (D5), the keepsake it left when it left one (D14), and what was new (D15). Last,
/// when the schedule running now rewards a round, the parent's apps.
struct DoneScreen: View {
    /// The round as recorded, with the keepsake it left.
    let round: Round
    /// Back to Play, for another round.
    let onKeepPlaying: () -> Void
    /// Back to Home.
    let onLeave: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(\.adaptive) private var adaptive
    @State private var tapped: Bool
    @State private var bursts = 0
    @State private var lastBurst = Date.distantPast
    @State private var holding: CGFloat = 0
    /// The offer being claimed, kept on screen until it leaves: claiming clears it in the store.
    @State private var claimed: KidHoursEarned?
    @State private var step: Step
    @State private var signs: Set<First.Sign> = []
    @State private var note = ""

    /// The gift, in order. A step with nothing to give is skipped.
    enum Step: CaseIterable { case practiced, keepsake, noticed, unlock }

    /// `grown` opens on the planet already tapped and `step` on a later step, for the screenshot harness.
    init(round: Round, grown: Bool = false, step: Step = .practiced, onKeepPlaying: @escaping () -> Void, onLeave: @escaping () -> Void) {
        self.round = round
        self.onKeepPlaying = onKeepPlaying
        self.onLeave = onLeave
        _tapped = State(initialValue: grown)
        _step = State(initialValue: step)
    }

    private var minutes: Int { round.minutes }
    private var keepsake: Keepsake? { round.keepsakeID.flatMap(Keepsake.find) }
    /// The points before this round, which the planet shows until the tap grows it.
    private var pointsBefore: Int { max(0, oyno.points - Bloom.points(rounds: 1, minutes: minutes)) }
    private var points: Int { tapped ? oyno.points : pointsBefore }
    private var level: Int { Bloom.level(at: points) }
    private var minutesTogether: Int { tapped ? oyno.minutesToday : max(0, oyno.minutesToday - minutes) }

    var body: some View {
        Group {
            if adaptive.columns == .two { split } else { column }
        }
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .animation(reduceMotion ? nil : .smooth(duration: 0.35), value: step)
    }

    /// The phone's: the planet over its words, the gift in a sheet at the foot.
    private var column: some View {
        ScrollView {
            VStack(spacing: 0) {
                header
                // Over the halo and the glow, which reach up past the planet's stage.
                gain.padding(.top, 14).zIndex(1)
                // Smaller on the closed Duo, so its short screen keeps the words above the sheet.
                planet.frame(maxWidth: adaptive.bars == .side ? 195 : 250).padding(.top, 6)
                words.padding(.top, 10)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.l)
            .readableWidth()
        }
        .scrollIndicators(.hidden)
        .safeAreaInset(edge: .bottom, spacing: 0) { sheet }
    }

    /// iPad and the Duo open: the planet for the kid to tap on the leading side, the words and
    /// the gift on the trailing one. iPad keeps the phone's header across the top; the Duo
    /// splits it, the wordmark over the planet and the bloom over the words.
    private var split: some View {
        FoldColumns {
            VStack(spacing: Metric.Space.s) {
                gain.zIndex(1)
                planet.frame(maxWidth: adaptive.roomy ? 405 : 337)
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .overlay(alignment: .topLeading) {
                if adaptive.bars != .top { wordmark.padding(.top, Metric.Space.xl) }
            }
        } trailing: {
            ScrollsIfNeeded {
                VStack(alignment: .leading, spacing: adaptive.roomy ? Metric.Space.xl : Metric.Space.l) {
                    Spacer(minLength: 0)
                    if adaptive.bars != .top { BloomPill(bloom: level) }
                    words
                    gift
                        .padding(adaptive.roomy ? 22 : 18)
                        .background {
                            RoundedRectangle(cornerRadius: adaptive.roomy ? 28 : 26)
                                .fill(.white.opacity(0.88))
                                .shadow(color: Palette.glassShadow, radius: 15, y: 10)
                        }
                    Spacer(minLength: 0)
                }
                .padding(.vertical, Metric.Space.xl)
            }
        }
        .safeAreaInset(edge: .top, spacing: 0) {
            if adaptive.bars == .top {
                header.padding(.horizontal, Metric.gutter).padding(.top, Metric.Space.s)
            }
        }
    }

    private var planet: some View {
        PlanetScene(pulse: bursts, points: oyno.points, floats: false, accessibilityLabel: String(interface: "Tap the planet")) { tap() }
            .overlay { PlanetHalo(burst: bursts) }
            .overlay(alignment: .bottomTrailing) {
                if step == .keepsake, let keepsake {
                    KeepsakeArt(keepsake: keepsake, side: 76, glowing: true)
                        .transition(.scale(scale: 0.4).combined(with: .opacity))
                }
            }
    }

    /// Every tap flares the halo once the last bloom has settled; the first one is the bloom.
    private func tap() {
        guard Date.now.timeIntervalSince(lastBurst) >= PlanetLayout.bloomLength else { return }
        lastBurst = .now
        bursts += 1
        guard !tapped else { return }
        Haptics.success()
        Analytics.shared.track(.planetTapped(bloom: oyno.level))
        withAnimation(reduceMotion ? .easeOut(duration: 0.3) : .smooth(duration: 0.7).delay(PlanetLayout.bloomPeak)) {
            tapped = true
        }
    }

    private var header: some View {
        HStack {
            wordmark
            Spacer()
            BloomPill(bloom: level)
        }
        .frame(height: Metric.tapTarget)
    }

    private var wordmark: some View {
        Image("Wordmark").accessibilityLabel(Text(verbatim: "Oyno"))
    }

    private var gain: some View {
        HStack(spacing: Metric.Space.s) {
            Text("+\(minutes) min").foregroundStyle(Palette.gold)
            Circle().fill(.white.opacity(0.5)).frame(width: 3, height: 3)
            Text("\(minutesTogether) min together today")
                .foregroundStyle(Palette.onAccent)
                .contentTransition(.numericText())
        }
        .font(Typeface.figures(13, .bold, relativeTo: .caption))
        .monospacedDigit()
        .padding(.horizontal, 14)
        .frame(height: 32)
        .background(Palette.ink, in: .capsule)
        .shadow(color: Palette.ink.opacity(0.18), radius: 10, y: 8)
        .keyframeAnimator(initialValue: 0.0, trigger: tapped) { content, rise in
            content
                .scaleEffect(reduceMotion ? 1 : 1 + 0.08 * rise)
                .offset(y: reduceMotion ? 0 : -3 * rise)
        } keyframes: { _ in
            LinearKeyframe(0, duration: PlanetLayout.bloomPeak)
            CubicKeyframe(1, duration: 0.2)
            SpringKeyframe(0, duration: 0.5, spring: .smooth)
        }
        .accessibilityElement(children: .combine)
    }

    /// Centred under the planet on the phone, a heading of its own beside it in a wide window.
    private var words: some View {
        let wide = adaptive.columns == .two
        return VStack(alignment: wide ? .leading : .center, spacing: wide ? 6 : 3) {
            Text(headline)
                .font(Typeface.ui(wide ? (adaptive.roomy ? 44 : 34) : 22, .extrabold, relativeTo: .title2))
                .tracking(wide ? -1.2 : -0.5)
                .foregroundStyle(Palette.ink)
                .contentTransition(.opacity)
            Text(subline)
                .font(Typeface.ui(wide ? (adaptive.roomy ? 16 : 14) : 13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
                .contentTransition(.opacity)
        }
        .multilineTextAlignment(wide ? .leading : .center)
        .frame(maxWidth: .infinity, alignment: wide ? .leading : .center)
    }

    private var headline: LocalizedStringResource {
        guard tapped else { return "Tap the planet!" }
        switch step {
        case .keepsake: return keepsake?.arrival ?? "Your planet just grew"
        case .noticed: return "Anything new tonight?"
        case .practiced, .unlock:
            switch round.kind {
            case .game: return "Your planet just grew"
            case .reading: return "Reading grew your planet"
            case .bath: return "Bath time grew your planet"
            case .cooking: return "Cooking grew your planet"
            case .lead: return "Their lead grew your planet"
            }
        }
    }

    private var subline: LocalizedStringResource {
        guard tapped else { return "Hand the phone to your kid for this part." }
        switch step {
        case .practiced: return "Here is what those \(minutes) minutes practiced."
        case .keepsake: return keepsake?.isRare == true ? "A rare find. It stays on your planet for good." : "It stays on your planet for good."
        case .noticed: return "Small firsts are the real progress."
        case .unlock: return "Every round and every minute grow it."
        }
    }

    private var progress: some View {
        VStack(spacing: Metric.Space.s) {
            HStack {
                Text("Bloom level \(level)")
                    .font(Typeface.figures(13, .bold, relativeTo: .caption))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
                    .contentTransition(.numericText())
                Spacer()
                Text(verbatim: nextWorld)
                    .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
                    .contentTransition(.numericText())
            }
            GeometryReader { geometry in
                ZStack(alignment: .leading) {
                    Capsule().fill(Palette.ink.opacity(0.08))
                    Capsule().fill(Palette.good).frame(width: geometry.size.width * share)
                }
            }
            .frame(height: 8)
        }
        .padding(.top, Metric.Space.xs)
        .accessibilityElement(children: .combine)
    }

    /// The world the family was heading to before the tap. A tap that reaches it fills the bar
    /// rather than emptying it for the next one.
    private var heading: (from: Int, to: World)? {
        Bloom.nextWorld(after: pointsBefore).map { (from: Bloom.currentWorld(at: pointsBefore).unlocksAt, to: $0) }
    }

    private var reachedWorld: Bool { heading.map { points >= $0.to.unlocksAt } ?? false }

    private var share: Double {
        guard let heading else { return 1 }
        return min(1, Double(points - heading.from) / Double(heading.to.unlocksAt - heading.from))
    }

    private var nextWorld: String {
        if reachedWorld { return String(interface: "New world unlocked") }
        guard let next = Bloom.nextWorld(after: points) else { return String(interface: "Every world is yours") }
        return String(interface: "Next: \(next.name)")
    }

    // MARK: The gift

    private func advance() {
        tapped = true
        let order = Step.allCases
        var next = order.firstIndex(of: step)! + 1
        while next < order.count, !offers(order[next]) { next += 1 }
        guard next < order.count else { return onLeave() }
        step = order[next]
    }

    /// Whether a step has anything to give: a keepsake that dropped, a question not asked today,
    /// apps the schedule hands back.
    private func offers(_ step: Step) -> Bool {
        switch step {
        case .practiced: true
        case .keepsake: keepsake != nil
        case .noticed: !oyno.notedFirst(on: .now)
        case .unlock: (claimed ?? kidHours.claimable) != nil
        }
    }

    private var sheet: some View {
        gift
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.xl)
            .padding(.bottom, Metric.Space.s)
            .readableWidth()
            .background {
                let shape = UnevenRoundedRectangle(topLeadingRadius: 32, topTrailingRadius: 32)
                ZStack {
                    shape.fill(.white.opacity(0.88)).shadow(color: Palette.glassShadow, radius: 15, y: -10)
                    shape.fill(.ultraThinMaterial)
                }
                .ignoresSafeArea(edges: .bottom)
            }
    }

    @ViewBuilder
    private var gift: some View {
        VStack(spacing: 14) {
            switch step {
            case .practiced: practiced
            case .keepsake: found
            case .noticed: noticed
            case .unlock: unlockOffer
            }
        }
        .frame(maxWidth: .infinity)
        .transition(.opacity)
        .id(step)
        .screenshotCallout("gift")
    }

    /// What the minutes exercised, revealed with the bloom once the kid has tapped.
    private var practiced: some View {
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            Text("What it practiced").oynoEyebrow()
            ForEach(Array(skills.enumerated()), id: \.element.id) { index, skill in
                let tint = Palette.pastels[index % Palette.pastels.count]
                HStack(spacing: Metric.Space.m) {
                    Glyph(symbol: skill.symbol, size: 19, weight: .semibold, color: tint.ink)
                        .frame(width: 40, height: 40)
                        .background(tint.fill, in: .rect(cornerRadius: 13))
                    Text(verbatim: skill.label).oynoRowTitle()
                    Spacer(minLength: 0)
                    Text("+\(minutes) min")
                        .font(Typeface.figures(14, .extrabold, relativeTo: .subheadline))
                        .monospacedDigit()
                        .foregroundStyle(tint.ink)
                }
                .opacity(tapped ? 1 : 0)
                .offset(y: tapped || reduceMotion ? 0 : 6)
                .background { SkillSkeleton().opacity(tapped ? 0 : 1) }
                .animation(reduceMotion ? nil : .smooth(duration: 0.4).delay(PlanetLayout.bloomPeak + 0.15 * Double(index)), value: tapped)
                .accessibilityElement(children: .combine)
                .accessibilityHidden(!tapped)
            }
            progress
            PrimaryButton(title: "Continue", action: advance)
        }
    }

    private var skills: [Activity.Skill] { round.skills.compactMap(Activity.skill) }

    private var found: some View {
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            HStack {
                Text("Keepsakes").oynoEyebrow()
                Spacer()
                Text("\(oyno.keepsakesFound.count) of \(Keepsake.all.count)")
                    .font(Typeface.figures(13, .bold, relativeTo: .caption))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
            }
            KeepsakeStrip(found: oyno.keepsakesInOrder, new: keepsake)
            Text("Each kind of moment leaves its own, and a few are rare.")
                .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
                .fixedSize(horizontal: false, vertical: true)
            PrimaryButton(title: "Keep it", action: advance)
        }
    }

    private var noticed: some View {
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            NoticeForm(signs: $signs, words: $note)
            VStack(spacing: 2) {
                PrimaryButton(title: "Save") {
                    if let first = NoticeForm.first(kind: round.kind, signs: signs, words: note) {
                        guard oyno.note(first) else { return }
                    } else {
                        oyno.answerNothingNew()
                    }
                    advance()
                }
                QuietButton(title: "Nothing new today") {
                    oyno.answerNothingNew()
                    advance()
                }
            }
        }
    }

    // MARK: The apps

    /// Held for two seconds, as "Not now" on Play: another round stays the easy choice.
    private var unlock: some View {
        HStack(spacing: 9) {
            HoldRing(progress: holding)
            Text("Hold to unlock my apps")
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
        }
        .frame(maxWidth: .infinity)
        .frame(height: Metric.tapTarget)
        .contentShape(.rect)
        .holdToConfirm(progress: $holding, in: .capsule, enabled: claimed == nil, action: claim)
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(.isButton)
        .accessibilityLabel(Text("Unlock my apps"))
        .accessibilityAction { claim() }
    }

    private func claim() {
        claimed = kidHours.claimable
        guard kidHours.claimEarned() else {
            claimed = nil
            return Haptics.warning()
        }
        onLeave()
    }

    /// The schedule running now rewards a round: the apps, or another round.
    @ViewBuilder
    private var unlockOffer: some View {
        if let earned = claimed ?? kidHours.claimable {
            HStack(spacing: Metric.Space.m) {
                Glyph(symbol: "lock.open", size: 19, weight: .semibold, color: Palette.pastelAmber.ink)
                    .frame(width: Metric.tapTarget, height: Metric.tapTarget)
                    .background(Palette.pastelAmber.fill, in: .rect(cornerRadius: 14))
                VStack(alignment: .leading, spacing: 1) {
                    Text("Your apps can open for \(earned.minutes) min").oynoRowTitle()
                    Text("Or from Kid hours within a minute")
                        .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.muted)
                }
                Spacer(minLength: 0)
            }
            .accessibilityElement(children: .combine)
            VStack(spacing: 2) {
                PrimaryButton(title: "Keep playing", action: onKeepPlaying)
                unlock
            }
        }
    }
}

/// A skill row's shape, held open until the kid taps the planet and the gains arrive.
private struct SkillSkeleton: View {
    var body: some View {
        HStack(spacing: Metric.Space.m) {
            RoundedRectangle(cornerRadius: 13).frame(width: 40, height: 40)
            Capsule().frame(width: 112, height: 12)
            Spacer(minLength: 0)
            Capsule().frame(width: 52, height: 12)
        }
        .foregroundStyle(Palette.ink.opacity(0.07))
        .breathing()
        .accessibilityHidden(true)
    }
}
