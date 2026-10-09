import SwiftUI

/// The one container on every screen: glass floating on the sky, as the canvas draws it.
/// `raised` adds the soft drop shadow for the card that leads its screen.
struct Card<Content: View>: View {
    var padding: CGFloat = Metric.cardPadding
    var raised = false
    @ViewBuilder var content: Content

    var body: some View {
        content
            .padding(padding)
            .frame(maxWidth: .infinity, alignment: .leading)
            .glassCard(raised: raised)
    }
}

/// A card whose rows supply their own padding, because a divider has to run edge to edge
/// inside the border while the rows inset from it.
struct RowCard<Content: View>: View {
    var raised = false
    @ViewBuilder var content: Content

    var body: some View {
        VStack(spacing: 0) { content }
            .frame(maxWidth: .infinity, alignment: .leading)
            .glassCard(raised: raised)
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

extension View {
    /// Frosted white over the sky, a bright edge and, when raised, a soft blue shadow.
    func glassCard(raised: Bool = false, radius: CGFloat = Metric.Radius.card) -> some View {
        background(.ultraThinMaterial, in: .rect(cornerRadius: radius))
            .background(Palette.glass, in: .rect(cornerRadius: radius))
            .overlay(RoundedRectangle(cornerRadius: radius).strokeBorder(Palette.glassEdge, lineWidth: 1))
            .shadow(color: raised ? Palette.glassShadow : .clear, radius: 15, y: 10)
    }
}

/// A labelled free-text row inside a `RowCard`: the email and code fields on sign-in.
struct TextFieldRow: View {
    let label: LocalizedStringResource
    @Binding var text: String
    var prompt: LocalizedStringResource?

    var body: some View {
        HStack(spacing: Metric.Space.m) {
            Text(label)
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
            Spacer(minLength: Metric.Space.s)
            TextField(text: $text, prompt: prompt.map { Text($0) }) { EmptyView() }
                .multilineTextAlignment(.trailing)
                .font(Typeface.ui(15, .medium, relativeTo: .subheadline))
                .foregroundStyle(Palette.ink)
        }
        .padding(.horizontal, Metric.cardPadding)
        .padding(.vertical, 14)
    }
}
