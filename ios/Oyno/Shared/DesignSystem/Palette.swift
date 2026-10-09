import SwiftUI

/// The whole palette, and it is deliberately small.
///
/// One accent, spent once per screen on the single action that screen exists for — save
/// the quote, log the print, reorder the spool. Everything else is greyscale, so the eye
/// goes to the number that costs money rather than to decoration. `alert` is the only
/// other colour and it means one thing: this number is losing you money (a spool under
/// its reorder point, a month's failed prints).
///
/// Filament swatches are the exception. They are not from this palette — they are the
/// actual colour of the plastic, which is what a maker recognises a roll by at a glance.
enum Palette {
    /// Headings, values, anything the reader is meant to act on.
    static let ink = Color(hex: 0x0A0A0A)
    /// Body copy inside a breakdown row.
    static let slate = Color(hex: 0x525252)
    /// Labels, captions, secondary metadata.
    static let muted = Color(hex: 0x737373)
    /// Mono annotations that sit beside a value — "180 g @ $22.00/kg".
    static let faint = Color(hex: 0xA3A3A3)
    /// Disclosure chevrons.
    static let chevron = Color(hex: 0xD4D4D4)

    /// Card and control borders.
    static let hairline = Color(hex: 0xE5E5E5)
    /// The lighter rule between rows inside one card.
    static let divider = Color(hex: 0xF0F0F0)
    /// The unfilled part of a progress bar.
    static let track = Color(hex: 0xEDEDED)

    static let surface = Color.white
    /// Every screen's background. A half-step off white so white cards read as raised.
    static let canvas = Color(hex: 0xFAFAFA)

    static let accent = Color(hex: 0x0F62FE)
    static let accentPressed = Color(hex: 0x0043CE)

    static let alert = Color(hex: 0xDA1E28)
    /// Carbon's support green and yellow, for `LevelBar` and nowhere else: a full roll or a
    /// healthy margin, and one getting thin, where `alert` is the empty one.
    static let good = Color(hex: 0x24A148)
    static let caution = Color(hex: 0xF1C21B)

    static let onAccent = Color.white
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

    /// Filament colours arrive from the database as `#RRGGBB` typed by the user, so this
    /// takes a string and tolerates a missing hash and a bad value — a mistyped swatch
    /// should show grey, not crash a spool list at the machine.
    init(filamentHex: String?) {
        guard let raw = filamentHex?.trimmingCharacters(in: .whitespaces).replacingOccurrences(of: "#", with: ""),
              raw.count == 6,
              let value = UInt32(raw, radix: 16)
        else {
            self.init(hex: 0x9E9E9E)
            return
        }
        self.init(hex: value)
    }
}
