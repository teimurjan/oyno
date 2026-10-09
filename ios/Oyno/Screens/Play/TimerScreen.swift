import SwiftUI

/// D4 on the canvas: the countdown, the step the family is on, a pause, and a way to end
/// early. The screen stays awake while it runs, so the phone can lie on the rug, and the
/// round ends on a chime unless the bell is turned off.
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
            let step = countdown.step(of: activity.steps.count, at: now)

            VStack(spacing: 0) {
                header(step: step)
                dial(left: left, now: now).padding(.top, 40)
                nowCard(step: step).padding(.top, 36)
                Spacer(minLength: Metric.Space.l)
                hint
                controls.padding(.top, Metric.Space.m)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.m)
            .onChange(of: left) { _, value in
                if value <= 0 { finish(at: now) }
            }
        }
        .background(Palette.goldenSky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .toolbar(.hidden, for: .tabBar)
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

    private func header(step: Int) -> some View {
        HStack {
            GlassIconButton(symbol: "chevron.down", label: "Back") { dismiss() }
            Spacer()
            VStack(spacing: 1) {
                Text(verbatim: activity.title)
                    .font(Typeface.ui(16, .extrabold, relativeTo: .headline))
                    .tracking(-0.3)
                    .foregroundStyle(Palette.ink)
                    .lineLimit(1)
                    .minimumScaleFactor(0.8)
                Text("Step \(step + 1) of \(activity.steps.count)")
                    .font(Typeface.ui(12, .semibold, relativeTo: .caption))
                    .monospacedDigit()
                    .foregroundStyle(Palette.muted)
            }
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
                    .font(Typeface.figures(88, .extrabold, relativeTo: .largeTitle))
                    .monospacedDigit()
                    .tracking(-3.5)
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
        .frame(maxWidth: 300)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(Text("\(left / 60) minutes \(left % 60) seconds left"))
    }

    private func nowCard(step: Int) -> some View {
        Card(raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                Text("Now")
                    .font(Typeface.ui(12, .bold, relativeTo: .caption))
                    .tracking(0.4)
                    .foregroundStyle(Palette.pastelAmber.ink)
                Text(verbatim: activity.steps[step])
                    .font(Typeface.ui(22, .bold, relativeTo: .title2))
                    .tracking(-0.5)
                    .lineSpacing(3)
                    .foregroundStyle(Palette.ink)
                    .fixedSize(horizontal: false, vertical: true)
                HStack(spacing: 6) {
                    ForEach(0..<activity.steps.count, id: \.self) { index in
                        Capsule()
                            .fill(index < step ? Palette.ink.opacity(0.35) : index == step ? Palette.amber : Palette.ink.opacity(0.1))
                            .frame(height: 4)
                    }
                }
                .padding(.top, 6)
                .accessibilityHidden(true)
            }
        }
        .animation(.easeInOut(duration: 0.3), value: step)
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
