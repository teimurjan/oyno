import SwiftUI

/// One plan, the way the offer sells it: "Yearly · $39.99" over its terms, the per-day figure
/// on the right, and a tag riding the top edge. The billed amount stays the biggest price on
/// the card (3.1.2).
struct PlanCard: View {
    let label: String
    let price: String
    let note: String
    let perDay: AttributedString?
    let tag: String?
    let selected: Bool
    let action: () -> Void

    var body: some View {
        let shape = RoundedRectangle(cornerRadius: Metric.Radius.card)

        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: Metric.Space.m) {
                VStack(alignment: .leading, spacing: Metric.Space.xs) {
                    (Text(verbatim: "\(label) · ") + Text(verbatim: price).font(Typeface.figures(19, .bold, relativeTo: .headline)))
                        .font(Typeface.ui(19, .bold, relativeTo: .headline))
                        .tracking(-0.3)
                        .foregroundStyle(Palette.ink)
                        .lineLimit(1)
                        .minimumScaleFactor(0.7)
                    Text(verbatim: note)
                        .font(Typeface.ui(14.5, .regular, relativeTo: .subheadline))
                        .foregroundStyle(Palette.muted)
                        .fixedSize(horizontal: false, vertical: true)
                }
                Spacer(minLength: 0)
                if let perDay {
                    Text(perDay)
                        .font(Typeface.ui(13.5, .regular, relativeTo: .footnote))
                        .lineLimit(1)
                }
            }
            .padding(.horizontal, Metric.Space.xl)
            .padding(.vertical, 18)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(
                shape
                    .fill(selected ? Palette.surface : Palette.glass)
                    .shadow(color: selected ? Palette.sheenGlow : .clear, radius: 18, y: 8)
            )
            .overlay {
                if selected {
                    shape.strokeBorder(Palette.sheen, lineWidth: 2)
                } else {
                    shape.strokeBorder(Palette.glassEdge, lineWidth: 1)
                }
            }
            .overlay(alignment: .topTrailing) {
                if let tag {
                    PlanTag(text: tag, lit: selected)
                        .alignmentGuide(.top) { $0[VerticalAlignment.center] }
                        .padding(.trailing, Metric.Space.xl)
                }
            }
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .animation(.easeOut(duration: 0.18), value: selected)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }
}

/// The capsule on a plan's top edge: filled with the sheen on the picked plan, outlined on
/// the other.
private struct PlanTag: View {
    let text: String
    let lit: Bool

    var body: some View {
        Text(verbatim: text)
            .font(Typeface.figures(11, .bold, relativeTo: .caption2))
            .tracking(1)
            .textCase(.uppercase)
            .lineLimit(1)
            .foregroundStyle(Palette.ink)
            .padding(.horizontal, Metric.Space.m)
            .padding(.vertical, 5)
            .background {
                if lit {
                    Capsule().fill(Palette.sheen)
                } else {
                    Capsule().fill(Palette.surface).overlay(Capsule().strokeBorder(Palette.ink, lineWidth: 1))
                }
            }
    }
}

/// What the trial does, day by day: unlocked today, a reminder before it ends, the plan after.
struct TrialTimeline: View {
    /// The picked plan's price and term, "$39.99 / year".
    let renewal: String

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            TimelineStep(
                symbol: "lock.open.fill",
                title: "Today",
                detail: String(interface: "Everything unlocks. Nothing to pay today."),
                lit: true
            )
            TimelineStep(
                symbol: "bell.fill",
                title: "In 2 days",
                detail: String(interface: "We remind you that your trial ends tomorrow."),
                lit: true
            )
            TimelineStep(
                symbol: "sparkles",
                title: "In 3 days",
                detail: String(interface: "Your plan starts at \(renewal). Cancel anytime before."),
                lit: false,
                last: true
            )
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }
}

private struct TimelineStep: View {
    let symbol: String
    let title: LocalizedStringResource
    let detail: String
    let lit: Bool
    var last = false

    var body: some View {
        HStack(alignment: .top, spacing: Metric.Space.l) {
            VStack(spacing: 0) {
                SheenNode(symbol: symbol, lit: lit)
                if !last {
                    Rectangle()
                        .fill(Palette.sheen)
                        .frame(width: 2)
                        .frame(maxHeight: .infinity)
                }
            }
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(Typeface.ui(17, .semibold, relativeTo: .headline))
                    .foregroundStyle(Palette.ink)
                Text(verbatim: detail)
                    .font(Typeface.ui(15, .regular, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .padding(.top, Metric.Space.s)
            .padding(.bottom, last ? 0 : 22)
        }
        // Lets the connector stretch to the height of the words beside it.
        .fixedSize(horizontal: false, vertical: true)
    }
}

/// A round sheen tile holding one ink glyph. Unlit, it is the sheen's ring on white.
struct SheenNode: View {
    let symbol: String
    var lit = true
    var side: CGFloat = 40

    var body: some View {
        Glyph(symbol: symbol, size: side * 0.42, weight: .semibold)
            .frame(width: side, height: side)
            .background {
                if lit {
                    Circle().fill(Palette.sheen)
                } else {
                    Circle().fill(Palette.surface).overlay(Circle().strokeBorder(Palette.sheen, lineWidth: 2))
                }
            }
            .accessibilityHidden(true)
    }
}

/// What the money buys, one line per `paywall.pros`, on the paywall and the profile's banner.
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

/// The offer's ground: the sky, with light falling from above onto the headline.
struct PaywallWash: View {
    var body: some View {
        ZStack(alignment: .top) {
            Palette.sky
            RadialGradient(
                colors: [.white.opacity(0.85), .white.opacity(0)],
                center: .top,
                startRadius: 0,
                endRadius: 380
            )
            .frame(height: 440)
        }
        .ignoresSafeArea()
    }
}

/// The page's headline, centred, with its `[bracketed]` span in the accent: the web's
/// `Headline.tsx`.
struct PaywallHeadline: View {
    let text: String

    var body: some View {
        Text(FunnelCopy.accented(text))
            .font(Typeface.ui(28, .bold, relativeTo: .largeTitle))
            .tracking(-0.56)
            .foregroundStyle(Palette.ink)
            .multilineTextAlignment(.center)
            .frame(maxWidth: .infinity)
            .fixedSize(horizontal: false, vertical: true)
    }
}
