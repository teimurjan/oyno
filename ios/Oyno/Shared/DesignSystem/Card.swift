import SwiftUI

/// The one container on every screen: white on the canvas, hairline border, 8pt radius.
///
/// The shadow is nearly invisible on purpose (4% at 1pt) — enough to lift the card off
/// #FAFAFA under a workshop light, not enough to read as a floating panel. `raised` turns
/// it on for the two cards that lead their screen; the rest sit flat.
struct Card<Content: View>: View {
    var padding: CGFloat = Metric.cardPadding
    var raised = false
    @ViewBuilder var content: Content

    var body: some View {
        content
            .padding(padding)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
            .overlay(
                RoundedRectangle(cornerRadius: Metric.Radius.card)
                    .strokeBorder(Palette.hairline, lineWidth: 1)
            )
            .shadow(color: raised ? Color(hex: 0x0A0A0A).opacity(0.04) : .clear, radius: 1, y: 1)
    }
}

/// A card whose rows supply their own padding, because a divider has to run edge to edge
/// inside the border while the rows inset from it. Used by the quote inputs and the log
/// flow's confirmation list.
struct RowCard<Content: View>: View {
    var raised = false
    @ViewBuilder var content: Content

    var body: some View {
        VStack(spacing: 0) { content }
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
            .overlay(
                RoundedRectangle(cornerRadius: Metric.Radius.card)
                    .strokeBorder(Palette.hairline, lineWidth: 1)
            )
            .shadow(color: raised ? Color(hex: 0x0A0A0A).opacity(0.04) : .clear, radius: 1, y: 1)
    }
}

/// The rule between two rows of one card. Inset from the border so the card's corner
/// radius stays intact.
struct RowDivider: View {
    var inset: CGFloat = Metric.cardPadding
    var body: some View {
        Rectangle()
            .fill(Palette.hairline)
            .frame(height: 1)
            .padding(.horizontal, inset)
    }
}
