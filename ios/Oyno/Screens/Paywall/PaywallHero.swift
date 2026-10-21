import SwiftUI

/// What the money buys, drawn rather than listed: a paused phone, Oyno's nudge over it, and the
/// game it offers instead. The web's `paywall/Hero.tsx`, in the same deck's words.
struct PaywallHero: View {
    let words: FunnelCopy.Paywall

    private static let size = CGSize(width: 300, height: 280)
    private static let gameID = "doctor-kid-patient"

    var body: some View {
        ZStack(alignment: .topLeading) {
            phone
            game.offset(x: 54, y: 128)
            // Over the card, as a notification lands over whatever is on screen.
            nudge.offset(y: 44)
        }
        .frame(width: Self.size.width, height: Self.size.height, alignment: .topLeading)
        .clipped()
        .mask(LinearGradient(stops: [.init(color: .black, location: 0.78), .init(color: .clear, location: 1)],
                             startPoint: .top, endPoint: .bottom))
        // A picture with words in it: grown type would break the picture, not help read it.
        .dynamicTypeSize(...DynamicTypeSize.large)
        .accessibilityElement(children: .combine)
    }

    /// Taller than the frame, so its foot is cut off and fades.
    private var phone: some View {
        let shape = UnevenRoundedRectangle(topLeadingRadius: 40, topTrailingRadius: 40)
        return shape
            .fill(.white.opacity(0.34))
            .overlay(shape.strokeBorder(Palette.ink.opacity(0.2), lineWidth: 1.5))
            .frame(width: 220, height: 340)
            .overlay(alignment: .top) {
                Capsule().fill(Palette.ink.opacity(0.1)).frame(width: 64, height: 18).padding(.top, 12)
            }
            .offset(x: 40)
            .accessibilityHidden(true)
    }

    private var nudge: some View {
        HStack(spacing: Metric.Space.m) {
            AppIconTile()
            VStack(alignment: .leading, spacing: 1) {
                Text(verbatim: words.nudge.title)
                    .font(Typeface.ui(14, .extrabold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.ink)
                Text(verbatim: FunnelCopy.fill(words.nudge.body, ["game": words.game.title]))
                    .font(Typeface.ui(12.5, .regular, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
            }
            .lineLimit(1)
            .minimumScaleFactor(0.8)
            .frame(maxWidth: .infinity, alignment: .leading)
            Text(verbatim: words.nudge.time)
                .font(Typeface.ui(11, .regular, relativeTo: .caption2))
                .foregroundStyle(Palette.muted)
                .frame(maxHeight: .infinity, alignment: .top)
        }
        .fixedSize(horizontal: false, vertical: true)
        .padding(.horizontal, 14)
        .padding(.vertical, Metric.Space.m)
        .frame(width: Self.size.width)
        .background(Palette.surface, in: .rect(cornerRadius: 18))
        .shadow(color: Color(hex: 0x305082).opacity(0.14), radius: 8, y: 6)
    }

    private var game: some View {
        VStack(alignment: .leading, spacing: 6) {
            if let painting = Activity.find(Self.gameID).flatMap(ActivityArt.painting(for:)) {
                Image(uiImage: painting)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 168, height: 88)
                    .accessibilityHidden(true)
            }
            HStack(spacing: Metric.Space.xs) {
                ForEach(Array(zip(words.game.skills, Palette.pastels)), id: \.0) { skill, pastel in
                    Text(verbatim: skill)
                        .font(Typeface.ui(11.5, .bold, relativeTo: .caption2))
                        .foregroundStyle(pastel.ink)
                        .padding(.horizontal, Metric.Space.s)
                        .frame(height: 22)
                        .background(pastel.fill, in: .rect(cornerRadius: 7))
                }
            }
            .lineLimit(1)
            .minimumScaleFactor(0.8)
            Text(verbatim: words.game.title)
                .font(Typeface.ui(22, .extrabold, relativeTo: .title2))
                .tracking(-0.66)
                .foregroundStyle(Palette.ink)
                .fixedSize(horizontal: false, vertical: true)
            Text(verbatim: words.game.meta)
                .font(Typeface.ui(12, .regular, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .padding(.horizontal, Metric.Space.m)
        .padding(.top, 10)
        .padding(.bottom, 14)
        .frame(width: 192, alignment: .leading)
        .background(.white.opacity(0.72), in: .rect(cornerRadius: 20))
        .overlay(RoundedRectangle(cornerRadius: 20).strokeBorder(Palette.glassEdge, lineWidth: 1))
        .shadow(color: Palette.glassShadow, radius: 15, y: 10)
    }
}
