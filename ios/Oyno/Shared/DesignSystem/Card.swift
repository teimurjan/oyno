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
    /// The shadow is cast by the card's shape only: on the whole view it would blur a ghost
    /// under every line of text inside.
    func glassCard(raised: Bool = false, radius: CGFloat = Metric.Radius.card) -> some View {
        let shape = RoundedRectangle(cornerRadius: radius)
        return background(.ultraThinMaterial, in: shape)
            .background(
                shape
                    .fill(Palette.glass)
                    .shadow(color: raised ? Palette.glassShadow : .clear, radius: 15, y: 10)
            )
            .overlay(shape.strokeBorder(Palette.glassEdge, lineWidth: 1))
    }
}

extension View {
    /// A capsule floating over the screen: Liquid Glass from iOS 26, the glass card before it.
    @ViewBuilder
    func floatingGlass() -> some View {
        if #available(iOS 26, *) {
            glassEffect(.regular.interactive(), in: .capsule)
        } else {
            glassCard(raised: true, radius: Metric.Radius.control)
        }
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
