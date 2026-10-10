import SwiftUI

/// D5 on the canvas: the round is in, the kid taps the planet and it blooms inside a halo of
/// rings and stars, and a sheet at the foot hands the parent their apps back when the
/// schedule running now rewards a round.
struct DoneScreen: View {
    let minutes: Int
    /// Back to Play, for another round.
    let onKeepPlaying: () -> Void
    /// Back to Home.
    let onLeave: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @State private var tapped = false
    @State private var bursts = 0

    /// The level before the tap, then the new one: the tap is what grows the planet.
    private var bloom: Int { tapped ? oyno.bloom : max(0, oyno.bloom - 1) }

    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                header
                gain.padding(.top, 14)
                PlanetScene(grown: tapped, bloom: oyno.bloom, accessibilityLabel: String(interface: "Tap the planet")) { tap() }
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
        .toolbar(.hidden, for: .tabBar)
        .animation(.easeOut(duration: 0.3), value: tapped)
    }

    /// Every tap flares the halo; the first one is the bloom.
    private func tap() {
        bursts += 1
        guard !tapped else { return }
        Haptics.success()
        Analytics.shared.track(.planetTapped(bloom: oyno.bloom))
        tapped = true
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
            Text("\(oyno.minutesToday) min together today").foregroundStyle(Palette.onAccent)
        }
        .font(Typeface.figures(13, .bold, relativeTo: .caption))
        .monospacedDigit()
        .padding(.horizontal, 14)
        .frame(height: 32)
        .background(Palette.ink, in: .capsule)
        .shadow(color: Palette.ink.opacity(0.18), radius: 10, y: 8)
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
            }
            GeometryReader { geometry in
                ZStack(alignment: .leading) {
                    Capsule().fill(Palette.ink.opacity(0.08))
                    Capsule().fill(Palette.good).frame(width: geometry.size.width * share)
                }
            }
            .frame(height: 8)
            .animation(.spring(response: 0.6, dampingFraction: 0.8), value: share)
        }
        .padding(.horizontal, Metric.cardPadding)
        .padding(.vertical, Metric.Space.m)
        .glassCard(radius: 20)
        .accessibilityElement(children: .combine)
    }

    /// How far the family is along the way to the next world, 0 just past a new one.
    private var share: Double {
        let here = Bloom.currentWorld(at: bloom)
        guard let next = Bloom.nextWorld(after: bloom) else { return 1 }
        return Double(bloom - here.unlocksAt) / Double(next.unlocksAt - here.unlocksAt)
    }

    private var nextWorld: String {
        guard let left = Bloom.roundsToNextWorld(from: bloom) else { return String(interface: "Every world is yours") }
        return left == 1 ? String(interface: "1 round to a new world") : String(interface: "\(left) rounds to a new world")
    }

    // MARK: The sheet

    private var sheet: some View {
        VStack(spacing: 14) {
            if let earned = kidHours.claimable {
                HStack(spacing: Metric.Space.m) {
                    Glyph(symbol: "lock.open", size: 19, weight: .semibold, color: Palette.pastelAmber.ink)
                        .frame(width: Metric.tapTarget, height: Metric.tapTarget)
                        .background(Palette.pastelAmber.fill, in: .rect(cornerRadius: 14))
                    VStack(alignment: .leading, spacing: 1) {
                        Text("Your apps can open for \(earned.minutes) min").oynoRowTitle()
                        Text("Or later from Kid hours, until \(Format.timeOfDay(date: earned.expiresAt))")
                            .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                            .foregroundStyle(Palette.muted)
                    }
                    Spacer(minLength: 0)
                }
                .accessibilityElement(children: .combine)
                VStack(spacing: 2) {
                    PrimaryButton(title: "Unlock my apps") {
                        guard kidHours.claimEarned() else { return Haptics.warning() }
                        onLeave()
                    }
                    QuietButton(title: "Keep playing", action: onKeepPlaying)
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
