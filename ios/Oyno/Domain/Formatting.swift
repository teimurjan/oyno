import Foundation

/// How numbers and times reach the screen. Everything resolves against
/// `InterfaceLanguage.locale`, not the device's, so separators match the words around them.
enum Format {
    /// `digits` is the fraction shown.
    static func money(_ value: Decimal, currency: String = "USD", digits: Int = 2) -> String {
        let formatter = cached("money|\(currency)|\(digits)") { formatter in
            formatter.numberStyle = .currency
            formatter.currencyCode = currency
            formatter.minimumFractionDigits = digits
            formatter.maximumFractionDigits = digits
        }
        return formatter.string(from: value as NSDecimalNumber) ?? "—"
    }








    /// The percent sign's spacing is the locale's business, not ours: English sets it
    /// tight, Russian sets a non-breaking space before it. Hence a formatter rather than
    /// a `%%` in a format string.
    static func percent(_ value: Decimal, decimals: Int = 1) -> String {
        let formatter = cached("percent|\(decimals)") { formatter in
            formatter.numberStyle = .percent
            // The values arriving here are already percentages — 12.5 means 12.5%, not
            // 1250%. Without this the formatter would multiply them by a hundred again.
            formatter.multiplier = 1
            formatter.minimumFractionDigits = decimals
            formatter.maximumFractionDigits = decimals
        }
        return formatter.string(from: value as NSDecimalNumber) ?? "—"
    }


    /// A bare number in the interface locale, for a unit string to interpolate.
    static func number(_ value: Decimal, digits: Int) -> String {
        let formatter = cached("decimal|\(digits)") { formatter in
            formatter.numberStyle = .decimal
            formatter.minimumFractionDigits = digits
            formatter.maximumFractionDigits = digits
        }
        return formatter.string(from: value as NSDecimalNumber) ?? "—"
    }

    /// "4:30 PM", from minutes after midnight, in the interface locale's clock.
    static func timeOfDay(minutes: Int) -> String {
        let date = Calendar.current.date(
            bySettingHour: minutes / 60, minute: minutes % 60, second: 0, of: .now
        ) ?? .now
        return date.formatted(Date.FormatStyle(date: .omitted, time: .shortened).locale(InterfaceLanguage.locale))
    }

    /// "7:18", a countdown's minutes and seconds.
    static func clock(seconds: Int) -> String {
        let clamped = max(0, seconds)
        return String(format: "%d:%02d", clamped / 60, clamped % 60)
    }

    /// One formatter per (language, shape). The language belongs in the key: a formatter
    /// built while the app was in English keeps English separators forever, and the
    /// interface language can change without the process restarting.
    private static func cached(_ shape: String, _ configure: (NumberFormatter) -> Void) -> NumberFormatter {
        let locale = InterfaceLanguage.locale
        let key = "\(locale.identifier)|\(shape)" as NSString
        if let hit = formatters.object(forKey: key) { return hit }
        let formatter = NumberFormatter()
        formatter.locale = locale
        configure(formatter)
        formatters.setObject(formatter, forKey: key)
        return formatter
    }

    private static let formatters = NSCache<NSString, NumberFormatter>()
}
