import SwiftUI

/// One keepsake's painting, lifted off the ground by a soft shadow. A new one glows.
struct KeepsakeArt: View {
    let keepsake: Keepsake
    var side: CGFloat = 44
    var glowing = false

    var body: some View {
        ZStack {
            if glowing {
                Circle()
                    .fill(RadialGradient(colors: [Color(hex: 0xFFECBE).opacity(0.95), Color(hex: 0xFFECBE).opacity(0)], center: .center, startRadius: 0, endRadius: side * 0.75))
                    .frame(width: side * 1.5, height: side * 1.5)
            }
            if let art = Painting.of(keepsake) {
                Image(uiImage: art)
                    .resizable()
                    .scaledToFit()
                    .frame(width: side, height: side)
                    .shadow(color: Palette.glassShadow.opacity(1.8), radius: side * 0.14, y: side * 0.12)
            }
        }
        .frame(width: side, height: side)
        .accessibilityElement()
        .accessibilityLabel(Text(keepsake.name))
    }
}

/// A row of slots: the newest first and outlined in amber, then the ones before it, then a
/// dashed slot for what is still to find.
struct KeepsakeStrip: View {
    /// The newest last, as the store keeps them.
    let found: [Keepsake]
    /// Outlined as just found.
    let new: Keepsake?
    var slots = 6

    var body: some View {
        let shown = Array(found.reversed().prefix(found.count < Keepsake.all.count ? slots - 1 : slots))
        HStack(spacing: Metric.Space.s) {
            ForEach(shown) { keepsake in
                KeepsakeArt(keepsake: keepsake, side: 40)
                    .frame(maxWidth: .infinity).frame(height: 52)
                    .background(keepsake == new ? Palette.surface : Palette.surface.opacity(0.7), in: .rect(cornerRadius: 16))
                    .overlay {
                        RoundedRectangle(cornerRadius: 16)
                            .strokeBorder(keepsake == new ? Palette.amber : Palette.hairline, lineWidth: keepsake == new ? 2 : 1)
                    }
            }
            if found.count < Keepsake.all.count {
                MissingSlot().frame(maxWidth: .infinity).frame(height: 52)
            }
            ForEach(0..<max(0, slots - shown.count - (found.count < Keepsake.all.count ? 1 : 0)), id: \.self) { _ in
                Color.clear.frame(maxWidth: .infinity).frame(height: 52)
            }
        }
    }
}

/// A keepsake not found yet: a dashed slot with a question mark.
struct MissingSlot: View {
    var body: some View {
        RoundedRectangle(cornerRadius: 16)
            .strokeBorder(Palette.chevron, style: StrokeStyle(lineWidth: 1.5, dash: [4, 3]))
            .overlay { Glyph(symbol: "questionmark", size: 16, weight: .bold, color: Palette.faint) }
            .accessibilityLabel(Text("Not found yet"))
    }
}
