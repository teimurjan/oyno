import SwiftUI

/// The news, bad then good, each landing its one figure on the wheel. The numbers are the
/// reader's, summed from their answer: Opal's "91 days" and "5 years+", with our evening.
struct FunnelProjection: View {
    let step: FunnelStep
    let pickups: Pickups
    let onContinue: () -> Void

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var stage = 0

    private var words: Words { Words(step: step, pickups: pickups) }

    var body: some View {
        VStack(spacing: Metric.Space.l) {
            Spacer(minLength: 0)
            FunnelLine(text: words.opening, tint: words.tint)
                .funnelStage(stage >= 1)
            if let leadIn = words.leadIn {
                FunnelLine(text: leadIn, size: 17, weight: .medium)
                    .funnelStage(stage >= 2)
            }
            TallyWheel(labels: words.labels, target: words.target, tint: words.tint, run: stage >= 3) {
                settled()
            }
            .funnelStage(stage >= 3)
            FunnelLine(text: words.landing, size: 17, weight: .medium)
                .funnelStage(stage >= 4)
            Spacer(minLength: 0)
            Text(verbatim: words.footnote)
                .font(Typeface.ui(12, .regular, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
                .multilineTextAlignment(.center)
                .fixedSize(horizontal: false, vertical: true)
                .funnelStage(stage >= 5)
            PrimaryButton(verbatim: words.action, enabled: stage >= 5) { onContinue() }
                .frame(maxWidth: 420)
                .funnelStage(stage >= 5)
        }
        .funnelColumn()
        .task { await play() }
    }

    /// The reader is walked to the figure one line at a time; the wheel takes it from there.
    private func play() async {
        guard !reduceMotion else { return stage = 5 }
        stage = 1
        guard await funnelPause(words.leadIn == nil ? 1100 : 1500) else { return }
        stage = 2
        guard await funnelPause(words.leadIn == nil ? 100 : 900) else { return }
        stage = 3
    }

    private func settled() {
        stage = max(stage, 4)
        guard stage < 5 else { return }
        Task {
            guard await funnelPause(700) else { return }
            stage = 5
        }
    }

    private struct Words {
        let opening: String
        let leadIn: String?
        let labels: [String]
        let target: Int
        let landing: String
        let footnote: String
        let action: String
        let tint: Color

        /// Six rows lead up to the figure and three follow it, for the roll and the overshoot.
        private static let lead = 6
        private static let trail = 3

        init(step: FunnelStep, pickups: Pickups) {
            let minutes = pickups.phoneMinutes
            target = Self.lead
            if step == .goodNews {
                let hours = pickups.hoursBack
                opening = String(interface: "The good news is that Oyno can give you back")
                leadIn = nil
                labels = (-Self.lead...Self.trail).map { offset in
                    let value = hours + offset * 10
                    return offset == 0 ? String(interface: "\(value)+ hours") : String(interface: "\(value) hours")
                }
                landing = String(interface: "a year with your kid, phone down, ten minutes at a time.")
                footnote = String(interface: "Based on your answer, with Kid hours on every evening.")
                action = String(interface: "Show me how")
                tint = Palette.good
            } else {
                let evenings = pickups.eveningsLost
                opening = String(interface: "The bad news is that your phone takes about [\(minutes) minutes] of every evening with your kid.")
                leadIn = String(interface: "Meaning that this year you're on track to lose")
                labels = (-Self.lead...Self.trail).map { String(interface: "\(evenings + $0) evenings") }
                landing = String(interface: "to a screen, with your kid right there. Yep, you read this right.")
                footnote = String(interface: "Projection from your answer: \(minutes) phone minutes in an evening from 4:30 to 7:30 PM, every day of the year.")
                action = String(interface: "Fix this")
                tint = Palette.alert
            }
        }
    }
}
