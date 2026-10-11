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
    @State private var tapped = false
    @State private var bursts = 0
    @State private var lastBurst = Date.distantPast
    @State private var holding: CGFloat = 0

    /// The level before the tap, then the new one: the tap is what grows the planet.
    private var bloom: Int { tapped ? oyno.bloom : max(0, oyno.bloom - 1) }
    private var minutesTogether: Int { tapped ? oyno.minutesToday : max(0, oyno.minutesToday - minutes) }

    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                header
                // Over the halo and the glow, which reach up past the planet's stage.
                gain.padding(.top, 14).zIndex(1)
                PlanetScene(pulse: bursts, bloom: oyno.bloom, accessibilityLabel: String(interface: "Tap the planet")) { tap() }
                    .overlay { PlanetHalo(burst: bursts) }
                    .frame(maxWidth: 270)
                    .padding(.top, 6)
                words.padding(.top, 10)
                progress.padding(.top, 14)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.l)
        }
        .scrollIndicators(.hidden)
        .safeAreaInset(edge: .bottom, spacing: 0) { sheet }
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
    }

    /// Every tap flares the halo once the last bloom has settled; the first one is the bloom.
    private func tap() {
        guard Date.now.timeIntervalSince(lastBurst) >= PlanetLayout.bloomLength else { return }
        lastBurst = .now
        bursts += 1
        guard !tapped else { return }
        Haptics.success()
        Analytics.shared.track(.planetTapped(bloom: oyno.bloom))
        withAnimation(reduceMotion ? .easeOut(duration: 0.3) : .smooth(duration: 0.7).delay(PlanetLayout.bloomPeak)) {
            tapped = true
        }
    }

    private var header: some View {
        HStack {
            Image("Wordmark").accessibilityLabel(Text(verbatim: "Oyno"))
            Spacer()
            BloomPill(bloom: bloom)
        }
        .frame(height: Metric.tapTarget)
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

    private var words: some View {
        VStack(spacing: 3) {
            Text(tapped ? "Your planet just grew" : "Tap the planet!")
                .font(Typeface.ui(22, .extrabold, relativeTo: .title2))
                .tracking(-0.5)
                .foregroundStyle(Palette.ink)
                .contentTransition(.opacity)
            Text(tapped ? "Every round together is one bloom." : "Hand the phone to your kid for this part.")
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
                .contentTransition(.opacity)
        }
        .multilineTextAlignment(.center)
        .frame(maxWidth: .infinity)
    }

    private var progress: some View {
        VStack(spacing: Metric.Space.s) {
            HStack {
                Text("Bloom level \(bloom)")
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
        let before = max(0, oyno.bloom - 1)
        return Bloom.nextWorld(after: before).map { (from: Bloom.currentWorld(at: before).unlocksAt, to: $0) }
    }

    private var reachedWorld: Bool { heading.map { bloom >= $0.to.unlocksAt } ?? false }

    private var share: Double {
        guard let heading else { return 1 }
        return min(1, Double(bloom - heading.from) / Double(heading.to.unlocksAt - heading.from))
    }

    private var nextWorld: String {
        if reachedWorld { return String(interface: "New world unlocked") }
        guard let left = Bloom.roundsToNextWorld(from: bloom) else { return String(interface: "Every world is yours") }
        return left == 1 ? String(interface: "1 round to a new world") : String(interface: "\(left) rounds to a new world")
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
        .padding(.horizontal, Metric.gutter)
        .padding(.top, Metric.Space.xl)
        .padding(.bottom, Metric.Space.s)
        .frame(maxWidth: .infinity)
        .background {
            let shape = UnevenRoundedRectangle(topLeadingRadius: 32, topTrailingRadius: 32)
            ZStack {
                shape.fill(.white.opacity(0.88)).shadow(color: Palette.glassShadow, radius: 15, y: -10)
                shape.fill(.ultraThinMaterial)
            }
            .ignoresSafeArea(edges: .bottom)
        }
    }
}
