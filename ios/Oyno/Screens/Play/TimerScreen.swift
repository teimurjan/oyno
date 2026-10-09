import SwiftUI

/// D4 on the canvas: the countdown, the step the family is on, and a way to end early.
/// The screen stays awake while it runs, so the phone can lie face up on the rug.
struct TimerScreen: View {
    let activity: Activity
    let onFinish: (_ minutes: Int) -> Void

    @State private var startedAt = Date.now
    @State private var finished = false

    private var total: TimeInterval { TimeInterval(activity.minutes * 60) }

    var body: some View {
        TimelineView(.periodic(from: startedAt, by: 1)) { context in
            let elapsed = min(total, context.date.timeIntervalSince(startedAt))
            let left = Int((total - elapsed).rounded(.up))
            let stepIndex = min(activity.steps.count - 1, Int(elapsed / (total / Double(activity.steps.count))))

            VStack(spacing: Metric.Space.l) {
                VStack(spacing: 2) {
                    Text(verbatim: activity.title)
                        .font(Typeface.ui(20, .extrabold, relativeTo: .title3))
                        .foregroundStyle(Palette.ink)
                    Text("Step \(stepIndex + 1) of \(activity.steps.count)").oynoCaption()
                }
                .padding(.top, Metric.Space.xl)

                Spacer(minLength: 0)

                ZStack {
                    Circle().stroke(Palette.ink.opacity(0.08), lineWidth: 14)
                    Circle()
                        .trim(from: 0, to: elapsed / total)
                        .stroke(Palette.good, style: StrokeStyle(lineWidth: 14, lineCap: .round))
                        .rotationEffect(.degrees(-90))
                        .animation(.linear(duration: 1), value: elapsed)
                    VStack(spacing: 2) {
                        Text(verbatim: Format.clock(seconds: left)).oynoHeadlineValue(64)
                        Text("left of \(Format.clock(seconds: Int(total)))").oynoCaption()
                    }
                }
                .frame(width: 260, height: 260)
                .accessibilityElement(children: .ignore)
                .accessibilityLabel(Text("\(left / 60) minutes \(left % 60) seconds left"))

                Spacer(minLength: 0)

                Card(raised: true) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Now").oynoEyebrow()
                        Text(verbatim: activity.steps[stepIndex])
                            .font(Typeface.ui(17, .semibold, relativeTo: .body))
                            .foregroundStyle(Palette.ink)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }

                PrimaryButton(title: "We're done") { finish(elapsed: elapsed) }
                    .padding(.bottom, Metric.Space.l)
            }
            .padding(.horizontal, Metric.gutter)
            .onChange(of: left) { _, value in
                if value <= 0 { finish(elapsed: total) }
            }
        }
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .onAppear {
            startedAt = .now
            UIApplication.shared.isIdleTimerDisabled = true
        }
        .onDisappear { UIApplication.shared.isIdleTimerDisabled = false }
    }

    /// A round counts in whole minutes, at least one: ending early still played.
    private func finish(elapsed: TimeInterval) {
        guard !finished else { return }
        finished = true
        Haptics.success()
        onFinish(max(1, Int((elapsed / 60).rounded())))
    }
}
