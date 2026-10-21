import SwiftUI

/// One plan in a list of two: its name and what it bills on one line, ringed in ink when picked.
/// The billed amount is the only price on it (3.1.2).
struct PlanPill: View {
    let label: String
    let price: String
    let selected: Bool
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack {
                Text(verbatim: label)
                Spacer(minLength: Metric.Space.m)
                Text(verbatim: price).monospacedDigit()
            }
            .font(Typeface.ui(17, selected ? .extrabold : .bold, relativeTo: .headline))
            .foregroundStyle(selected ? Palette.ink : Palette.muted)
            .lineLimit(1)
            .minimumScaleFactor(0.8)
            .padding(.horizontal, 24)
            .frame(maxWidth: .infinity, minHeight: 60)
            .background(
                Capsule()
                    .fill(.white.opacity(selected ? 0.94 : 0.5))
                    .shadow(color: selected ? Palette.glassShadow : .clear, radius: 10, y: 8)
            )
            .overlay {
                Capsule().strokeBorder(selected ? Palette.ink : Palette.glassEdge, lineWidth: selected ? 2 : 1)
            }
            .contentShape(.capsule)
        }
        .buttonStyle(.plain)
        .animation(.easeOut(duration: 0.18), value: selected)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }
}

/// A round tile holding one ink glyph: the pale tint when lit, the accent's ring on white when not.
struct SheenNode: View {
    let symbol: String
    var lit = true
    var side: CGFloat = 40

    var body: some View {
        Glyph(symbol: symbol, size: side * 0.42, weight: .semibold)
            .frame(width: side, height: side)
            .background {
                if lit {
                    Circle().fill(Palette.sheenTint)
                } else {
                    Circle().fill(Palette.surface).overlay(Circle().strokeBorder(Palette.sheen, lineWidth: 2))
                }
            }
            .accessibilityHidden(true)
    }
}

/// What the money buys, one line per `paywall.pros`, on the profile's banner.
struct PaywallPros: View {
    let lines: [String]

    /// One per line of `paywall.pros`, in order: a paused phone, a game, the planet.
    private static let symbols = ["iphone.slash", "puzzlepiece.fill", "globe.europe.africa"]

    var body: some View {
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            ForEach(Array(zip(lines, Self.symbols)), id: \.0) { line, symbol in
                HStack(spacing: Metric.Space.m) {
                    SheenNode(symbol: symbol, side: 34)
                    Text(verbatim: line)
                        .font(Typeface.ui(15.5, .medium, relativeTo: .body))
                        .foregroundStyle(Palette.ink)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }
}

/// The page's headline, centred, with its `[bracketed]` span in the accent: the web's
/// `Headline.tsx`.
struct PaywallHeadline: View {
    let text: String

    var body: some View {
        Text(FunnelCopy.accented(text))
            .font(Typeface.ui(32, .extrabold, relativeTo: .largeTitle))
            .tracking(-1.1)
            .foregroundStyle(Palette.ink)
            .multilineTextAlignment(.center)
            .frame(maxWidth: .infinity)
            .fixedSize(horizontal: false, vertical: true)
    }
}
