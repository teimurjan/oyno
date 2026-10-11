import SwiftUI

/// D4 on the canvas: the countdown for the whole round, every step of the game at once, a
/// pause, and a way to end early. The screen stays awake while it runs, so the phone can lie
/// on the rug, and the round ends on a chime unless the bell is turned off.
struct TimerScreen: View {
    let activity: Activity
    let onFinish: (_ minutes: Int) -> Void

    @Environment(\.dismiss) private var dismiss
    @AppStorage("oyno.chime") private var chimes = true
    @State private var countdown: Countdown
    @State private var finished = false

    init(activity: Activity, onFinish: @escaping (_ minutes: Int) -> Void) {
        self.activity = activity
        self.onFinish = onFinish
        _countdown = State(initialValue: Countdown(total: TimeInterval(activity.minutes * 60)))
    }

    var body: some View {
        TimelineView(.periodic(from: countdown.startedAt, by: 1)) { context in
            let now = context.date
            let left = countdown.secondsLeft(at: now)

            VStack(spacing: 0) {
                header
                    .padding(.horizontal, Metric.gutter)
                    .padding(.top, Metric.Space.s)
                ScrollView {
                    VStack(spacing: Metric.Space.xl) {
                        dial(left: left, now: now)
                        Card(raised: true) { StepList(steps: activity.steps) }
                    }
                    .padding(.horizontal, Metric.gutter)
                    .padding(.vertical, Metric.Space.l)
                }
                .scrollIndicators(.hidden)
                .scrollBounceBehavior(.basedOnSize)
                footer
            }
            .onChange(of: left) { _, value in
                if value <= 0 { finish(at: now) }
            }
        }
        .background(Palette.goldenSky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .onAppear {
            countdown = Countdown(total: countdown.total)
            UIApplication.shared.isIdleTimerDisabled = true
        }
        .onDisappear { UIApplication.shared.isIdleTimerDisabled = false }
    }

    /// A round counts in whole minutes, at least one: ending early still played.
    private func finish(at now: Date) {
        guard !finished else { return }
        finished = true
        Haptics.success()
        if chimes { Chime.play() }
        onFinish(max(1, Int((countdown.elapsed(at: now) / 60).rounded())))
    }

    private var header: some View {
        HStack {
            GlassIconButton(symbol: "chevron.down", label: "Back") { dismiss() }
            Spacer()
            Text(verbatim: activity.title)
                .font(Typeface.ui(16, .extrabold, relativeTo: .headline))
                .tracking(-0.3)
                .foregroundStyle(Palette.ink)
                .multilineTextAlignment(.center)
                .lineLimit(2)
                .minimumScaleFactor(0.8)
                .accessibilityAddTraits(.isHeader)
            Spacer()
            GlassIconButton(symbol: chimes ? "bell" : "bell.slash", label: bellLabel) { chimes.toggle() }
        }
    }

    private var bellLabel: LocalizedStringResource { chimes ? "Turn the chime off" : "Turn the chime on" }

    /// The amber arc is what is left, draining as the round runs.
    private func dial(left: Int, now: Date) -> some View {
        ZStack {
            Circle().fill(.white.opacity(0.34))
            Circle().stroke(.white.opacity(0.9), lineWidth: 8)
            Circle()
                .trim(from: 0, to: 1 - countdown.elapsed(at: now) / countdown.total)
                .stroke(Palette.amber, style: StrokeStyle(lineWidth: 8, lineCap: .round))
                .rotationEffect(.degrees(-90))
                .animation(.linear(duration: 1), value: left)
            VStack(spacing: 4) {
                Text(verbatim: Format.clock(seconds: left))
                    .font(Typeface.figures(72, .extrabold, relativeTo: .largeTitle))
                    .monospacedDigit()
                    .tracking(-2.8)
                    .foregroundStyle(Palette.ink)
                    .lineLimit(1)
                    .minimumScaleFactor(0.7)
                Text("left of \(Format.clock(seconds: Int(countdown.total)))")
                    .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
            }
            .padding(.horizontal, 24)
        }
        .padding(4)
        .aspectRatio(1, contentMode: .fit)
        .frame(maxWidth: 240)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(Text("\(left / 60) minutes \(left % 60) seconds left"))
    }

    /// Outside the scroll, so the pause and the finish stay in reach however long the steps run.
    private var footer: some View {
        VStack(spacing: Metric.Space.m) {
            hint
            controls
        }
        .padding(.horizontal, Metric.gutter)
        .padding(.top, Metric.Space.s)
        .padding(.bottom, Metric.Space.m)
    }

    private var hint: some View {
        HStack(spacing: Metric.Space.s) {
            Glyph(symbol: "iphone.landscape", size: 17, weight: .regular, color: Palette.muted)
            Text(chimes ? "Face down is fine. We'll chime at the end." : "Face down is fine. We'll buzz at the end.")
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .multilineTextAlignment(.center)
    }

    private var controls: some View {
        HStack(spacing: 10) {
            Button {
                Haptics.tap()
                if countdown.isPaused { countdown.resume(at: .now) } else { countdown.pause(at: .now) }
            } label: {
                HStack(spacing: Metric.Space.s) {
                    Glyph(symbol: countdown.isPaused ? "play.fill" : "pause.fill", size: 14, weight: .bold)
                    Text(countdown.isPaused ? "Resume" : "Pause")
                        .font(Typeface.ui(16, .bold, relativeTo: .headline))
                        .foregroundStyle(Palette.ink)
                }
                .frame(maxWidth: .infinity)
                .frame(height: Metric.primaryButton)
                .glassCard(radius: Metric.primaryButton / 2)
            }
            .buttonStyle(.plain)
            PrimaryButton(title: "We're done") { finish(at: .now) }
        }
    }
}
