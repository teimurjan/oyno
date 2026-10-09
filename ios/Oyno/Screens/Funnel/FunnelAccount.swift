import SwiftUI

/// The account step, the one readers leave most: the head count under the headline, their own
/// problem carried forward from the recap with the line of the plan that answers it, and the
/// app's sign-in. `AccountStep.tsx`.
struct FunnelAccount: View {
    let words: FunnelCopy.StatementWords
    let plan: (problem: String, fix: String)?

    @State private var showEmail = false

    var body: some View {
        if let headline = words.headline { FunnelHeadline(text: headline).funnelEntrance(0) }
        if let note = words.note { FunnelNote(text: note).padding(.bottom, Metric.Space.s).funnelEntrance(0) }
        if let plan { card(plan).funnelEntrance(1) }

        SignInProviders(showEmail: $showEmail).funnelEntrance(2)
    }

    /// The recap's red card, with the plan's answer ticked under it.
    private func card(_ plan: (problem: String, fix: String)) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: Metric.Space.m) {
                Glyph(symbol: "exclamationmark.circle", size: 18, weight: .regular, color: Palette.alert)
                    .frame(width: 20)
                    .accessibilityHidden(true)
                Text(verbatim: plan.problem)
                    .font(Typeface.ui(15.5, .medium, relativeTo: .body))
                    .foregroundStyle(Palette.ink)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Rectangle()
                .fill(Palette.alert.opacity(0.2))
                .frame(height: 1)
            HStack(spacing: Metric.Space.m) {
                Glyph(symbol: "checkmark.circle.fill", size: 16, color: Palette.good)
                    .frame(width: 20)
                    .accessibilityHidden(true)
                Text(verbatim: plan.fix)
                    .font(Typeface.ui(15, .regular, relativeTo: .body))
                    .foregroundStyle(Palette.ink)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, Metric.Space.m)
        .background(Palette.alert.opacity(0.06), in: .rect(cornerRadius: Metric.Radius.card))
        .overlay(
            RoundedRectangle(cornerRadius: Metric.Radius.card)
                .strokeBorder(Palette.alert.opacity(0.35), lineWidth: 1)
        )
    }
}
