import SwiftUI

/// The Little Planet palette: ink on a warm sky, glass cards, and one accent fill, the ink
/// pill, spent once per screen on the action that screen exists for. `alert` means only
/// "this is costing you". `good` and `caution` live inside a gauge. Mirrors `app/base.css`.
enum Palette {
    static let ink = Color(hex: 0x18202E)
    static let slate = Color(hex: 0x364152)
    static let muted = Color(hex: 0x4E5869)
    static let faint = Color(hex: 0x7D8696)
    static let chevron = Color(hex: 0xC3C9D2)

    static let hairline = Color(hex: 0xDFE3E9)
    static let divider = Color(hex: 0xEEF0F3)
    static let track = Color(hex: 0xE6E9EE)

    static let surface = Color.white
    static let canvas = Color(hex: 0xFFF8EF)

    /// The ink pill. The one accent fill.
    static let accent = Color(hex: 0x18202E)
    static let accentPressed = Color(hex: 0x2B3546)
    static let onAccent = Color.white

    /// The span a headline sets apart.
    static let highlight = Color(hex: 0x2F5E9E)

    static let alert = Color(hex: 0xC2412D)
    static let good = Color(hex: 0x5E9A6B)
    static let caution = Color(hex: 0xE0952B)
    /// The second parent's colour in the mark, and the "phone down" stat.
    static let lavender = Color(hex: 0x9C86D8)
    /// The timer's arc and the stars around a grown planet.
    static let amber = Color(hex: 0xF2A93B)
    /// The gain on an ink pill: "+10 min".
    static let gold = Color(hex: 0xF7C46C)

    /// A pastel tile and the ink that reads on it: a step's number, a schedule's icon, the
    /// "on" pill.
    struct Pastel {
        let fill: Color
        let ink: Color
    }

    static let pastelGreen = Pastel(fill: Color(hex: 0xDDEFDF), ink: Color(hex: 0x2F6B3B))
    static let pastelLavender = Pastel(fill: Color(hex: 0xE9E2F8), ink: Color(hex: 0x5B47A3))
    static let pastelAmber = Pastel(fill: Color(hex: 0xFCEACB), ink: Color(hex: 0x8A5A12))
    /// In the order a numbered list wears them.
    static let pastels = [pastelGreen, pastelLavender, pastelAmber]

    /// A card floating on the sky.
    static let glass = Color.white.opacity(0.62)
    static let glassEdge = Color.white.opacity(0.95)
    static let glassShadow = Color(hex: 0x305082).opacity(0.12)

    /// The day sky behind every screen, top to bottom.
    static let sky = LinearGradient(
        stops: [
            .init(color: Color(hex: 0xA2C8EF), location: 0),
            .init(color: Color(hex: 0xD3E6F8), location: 0.34),
            .init(color: Color(hex: 0xFFF1DB), location: 0.64),
            .init(color: Color(hex: 0xFFF8EF), location: 1),
        ],
        startPoint: .top,
        endPoint: .bottom
    )

    /// The same sky at golden hour, behind the timer.
    static let goldenSky = LinearGradient(
        stops: [
            .init(color: Color(hex: 0xB7CFEE), location: 0),
            .init(color: Color(hex: 0xF2DDC8), location: 0.4),
            .init(color: Color(hex: 0xFFE5C2), location: 0.66),
            .init(color: Color(hex: 0xFFF4E6), location: 1),
        ],
        startPoint: .top,
        endPoint: .bottom
    )
}

extension Color {
    init(hex: UInt32) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255,
            opacity: 1
        )
    }

}
