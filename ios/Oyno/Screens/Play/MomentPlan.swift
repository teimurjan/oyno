import SwiftUI

/// "Or play Three Splashes · 5 min": the deck's game for the same routine.
struct OrPlayLink: View {
    let game: Activity
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: 6) {
                Glyph(symbol: "star", size: 14, weight: .semibold, color: Palette.highlight)
                Text("Or play \(game.title)")
                    .font(Typeface.ui(14, .bold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.highlight)
                Text(verbatim: "· \(String(interface: "\(game.minutes) min"))")
                    .font(Typeface.figures(14, .semibold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
                Glyph(symbol: "chevron.right", size: 11, weight: .bold, color: Palette.highlight)
            }
            .frame(minHeight: Metric.tapTarget)
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }
}

/// How long an everyday moment runs: ten, fifteen or twenty minutes.
struct LengthPicker: View {
    @Binding var minutes: Int

    var body: some View {
        ViewThatFits(in: .horizontal) {
            HStack(spacing: Metric.Space.m) {
                label
                picker
            }
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                label
                picker
            }
        }
    }

    private var label: some View { Text("How long").oynoEyebrow() }

    private var picker: some View {
        Segments(accessibilityLabel: "Minutes", options: Dealer.lengths, selection: $minutes) { length, active in
            Text("\(length) min")
                .font(Typeface.figures(14, active ? .bold : .semibold, relativeTo: .subheadline))
                .monospacedDigit()
                .lineLimit(1)
                .foregroundStyle(active ? Palette.ink : Palette.muted)
        }
    }
}

/// The three nudges, all at once before the moment starts. Their lead's are what to do; the
/// others' are there if the parent wants one.
struct NudgeCard: View {
    let moment: OpenMoment
    var large = false

    var body: some View {
        Card(padding: large ? 24 : Metric.cardPadding, raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.m) {
                Text(moment.kind == .lead ? "Three things to do" : "If you want a nudge").oynoEyebrow()
                StepList(steps: moment.nudges, large: large)
            }
        }
    }
}
