import SwiftUI

/// The reader's own answers, a card apiece. **The first card is red and only the first** —
/// it is the problem they named on the first screen, the one thing here that is measurably
/// costing them money. Five red cards is an accusation. `RecapStep.tsx`.
struct FunnelRecap: View {
    let headline: String
    let lines: [(key: String, line: String)]
    let recap: FunnelCopy.Recap

    var body: some View {
        FunnelHeadline(text: headline).funnelEntrance(0)

        ForEach(Array(lines.enumerated()), id: \.element.key) { index, entry in
            let problem = index == 0
            HStack(spacing: Metric.Space.m) {
                Glyph(symbol: Self.symbol(for: entry.key), size: 18, weight: .regular, color: problem ? Palette.alert : Palette.faint)
                    .frame(width: 20)
                    .accessibilityHidden(true)
                Text(verbatim: entry.line)
                    .font(Typeface.ui(15.5, problem ? .medium : .regular, relativeTo: .body))
                    .foregroundStyle(Palette.ink)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .padding(.horizontal, 14)
            .padding(.vertical, Metric.Space.m)
            .background(problem ? Palette.alert.opacity(0.06) : Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
            .overlay(
                RoundedRectangle(cornerRadius: Metric.Radius.card)
                    .strokeBorder(problem ? Palette.alert.opacity(0.35) : Palette.hairline, lineWidth: 1)
            )
            .funnelEntrance(index + 1)
        }

        // Tinted and ticked rather than filled, so the footer's button is still the only
        // accent fill on the screen.
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            Text(FunnelCopy.accented(recap.closing))
                .font(Typeface.ui(16.5, .semibold, relativeTo: .body))
                .foregroundStyle(Palette.ink)
                .fixedSize(horizontal: false, vertical: true)
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                ForEach(recap.answers, id: \.self) { line in
                    HStack(alignment: .firstTextBaseline, spacing: 10) {
                        Glyph(symbol: "checkmark.circle.fill", size: 16, color: Palette.accent)
                            .accessibilityHidden(true)
                        Text(verbatim: line)
                            .font(Typeface.ui(14.5, .regular, relativeTo: .subheadline))
                            .foregroundStyle(Palette.ink)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }
            }
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Palette.accent.opacity(0.06), in: .rect(cornerRadius: Metric.Radius.card))
        .overlay(
            RoundedRectangle(cornerRadius: Metric.Radius.card)
                .strokeBorder(Palette.accent.opacity(0.3), lineWidth: 1)
        )
        .funnelEntrance(lines.count + 1)
    }

    /// One outline mark per question — drawn rather than emoji, because the options used
    /// emoji for warmth and the recap reads as a diagnosis.
    private static func symbol(for key: String) -> String {
        switch key {
        case "problem": "exclamationmark.circle"
        case "brought": "arrow.clockwise"
        case "earned": "eye.slash"
        case "volume": "text.alignleft"
        case "tracking": "smallcircle.filled.circle"
        case "orderbook": "list.bullet.rectangle.portrait"
        case "tools": "square.grid.2x2"
        case "searching": "hourglass"
        default: "minus.circle"
        }
    }
}
