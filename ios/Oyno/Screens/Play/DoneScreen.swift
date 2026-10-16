import SwiftUI

/// D5 on the canvas: the round is in, the kid taps the planet and it blooms inside a halo of
/// rings and stars. The minutes, the bloom level and the bar land at the bloom's peak. A sheet
/// at the foot hands the parent their apps back when the schedule running now rewards a round.
struct DoneScreen: View {
    let minutes: Int
    /// Back to Play, for another round.
    let onKeepPlaying: () -> Void
    /// Back to Home.
    let onLeave: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(\.adaptive) private var adaptive
    @State private var tapped = false
    @State private var bursts = 0
    @State private var lastBurst = Date.distantPast
    @State private var holding: CGFloat = 0

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
    }

    /// The phone's: the planet over its words and its bar, the choices in a sheet at the foot.
    private var column: some View {
        ScrollView {
            VStack(spacing: 0) {
                header
                // Over the halo and the glow, which reach up past the planet's stage.
                gain.padding(.top, 14).zIndex(1)
                // Smaller on the closed Duo, so its short screen keeps the bar above the sheet.
                planet.frame(maxWidth: adaptive.bars == .side ? 195 : 270).padding(.top, 6)
                words.padding(.top, 10)
                progress.padding(.top, 14)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.l)
            .readableWidth()
        }
        .scrollIndicators(.hidden)
        .safeAreaInset(edge: .bottom, spacing: 0) { sheet }
    }

    /// iPad and the Duo open: the planet for the kid to tap on the leading side, the words, the
    /// bar and the choices on the trailing one. iPad keeps the phone's header across the top;
    /// the Duo splits it, the wordmark over the planet and the bloom over the words.
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
                    progress
                    choices
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
            Text(tapped ? "Your planet just grew" : "Tap the planet!")
                .font(Typeface.ui(wide ? (adaptive.roomy ? 44 : 34) : 22, .extrabold, relativeTo: .title2))
                .tracking(wide ? -1.2 : -0.5)
                .foregroundStyle(Palette.ink)
                .contentTransition(.opacity)
            Text(tapped ? "Every round and every minute grow it." : "Hand the phone to your kid for this part.")
                .font(Typeface.ui(wide ? (adaptive.roomy ? 16 : 14) : 13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
                .contentTransition(.opacity)
        }
        .multilineTextAlignment(wide ? .leading : .center)
        .frame(maxWidth: .infinity, alignment: wide ? .leading : .center)
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
        .padding(.horizontal, Metric.cardPadding)
        .padding(.vertical, Metric.Space.m)
        .glassCard(radius: 20)
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

    // MARK: The sheet

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
        .holdToConfirm(progress: $holding, action: claim)
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(.isButton)
        .accessibilityLabel(Text("Unlock my apps"))
        .accessibilityAction { claim() }
    }

    private func claim() {
        guard kidHours.claimEarned() else { return Haptics.warning() }
        onLeave()
    }

    private var sheet: some View {
        choices
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

    /// What the parent does next: their apps back when the schedule rewards a round, else
    /// another round or the end of the evening.
    private var choices: some View {
        VStack(spacing: 14) {
            if let earned = kidHours.claimable {
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
            } else {
                if let current = kidHours.current {
                    Text("Apps stay paused until \(Format.timeOfDay(minutes: current.end))")
                        .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.muted)
                }
                VStack(spacing: 2) {
                    PrimaryButton(title: "Keep playing", action: onKeepPlaying)
                    QuietButton(title: "Finish for today", action: onLeave)
                }
            }
        }
        .frame(maxWidth: .infinity)
    }
}
