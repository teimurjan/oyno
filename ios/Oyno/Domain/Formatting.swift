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

    /// "4:30 PM", from a date, in the interface locale's clock.
    static func timeOfDay(date: Date) -> String {
        date.formatted(Date.FormatStyle(date: .omitted, time: .shortened).locale(InterfaceLanguage.locale))
    }

    /// "4:30 – 7:30 PM", from minutes after midnight.
    static func timeRange(start: Int, end: Int) -> String {
        let calendar = Calendar.current
        guard let from = calendar.date(bySettingHour: start / 60, minute: start % 60, second: 0, of: .now),
              let to = calendar.date(bySettingHour: end / 60, minute: end % 60, second: 0, of: .now),
              from < to
        else { return "—" }
        return (from..<to).formatted(Date.IntervalFormatStyle(date: .omitted, time: .shortened, locale: InterfaceLanguage.locale))
    }

    /// "at 4:30 PM", "tomorrow at 4:30 PM", "Mon at 4:30 PM": when something next happens.
    static func dayAndTime(_ date: Date, now: Date = .now) -> String {
        let time = timeOfDay(date: date)
        let calendar = Calendar.current
        if calendar.isDate(date, inSameDayAs: now) { return String(interface: "at \(time)") }
        if let tomorrow = calendar.date(byAdding: .day, value: 1, to: now), calendar.isDate(date, inSameDayAs: tomorrow) {
            return String(interface: "tomorrow at \(time)")
        }
        let day = date.formatted(Date.FormatStyle(date: .omitted, time: .omitted).weekday(.abbreviated).locale(InterfaceLanguage.locale))
        return String(interface: "\(day) at \(time)")
    }

    /// "today", "yesterday", "Tuesday" within a week, else "Oct 3": when something last happened.
    static func day(_ date: Date, now: Date = .now) -> String {
        let calendar = Calendar.current
        if calendar.isDate(date, inSameDayAs: now) { return String(interface: "today") }
        if let yesterday = calendar.date(byAdding: .day, value: -1, to: now), calendar.isDate(date, inSameDayAs: yesterday) {
            return String(interface: "yesterday")
        }
        let locale = InterfaceLanguage.locale
        if let weekAgo = calendar.date(byAdding: .day, value: -6, to: calendar.startOfDay(for: now)), date >= weekAgo {
            return date.formatted(Date.FormatStyle(date: .omitted, time: .omitted).weekday(.wide).locale(locale))
        }
        return date.formatted(Date.FormatStyle(date: .omitted, time: .omitted).month(.abbreviated).day().locale(locale))
    }

    /// "1h 48m", what is left until `date`.
    static func remaining(until date: Date, now: Date = .now) -> String {
        duration(date.timeIntervalSince(now))
    }

    /// "4h 38m", "51m": a stretch of time in hours and minutes.
    static func duration(_ seconds: TimeInterval) -> String {
        let style = Duration.UnitsFormatStyle(allowedUnits: [.hours, .minutes], width: .narrow).locale(InterfaceLanguage.locale)
        return Duration.seconds(max(0, seconds)).formatted(style)
    }

    /// Only the largest unit, rounded down: "45m", "7h", "3d".
    static func largestUnit(minutes: Int) -> String {
        let style = Duration.UnitsFormatStyle(
            allowedUnits: [.days, .hours, .minutes],
            width: .narrow,
            maximumUnitCount: 1,
            fractionalPart: .hide(rounded: .down)
        ).locale(InterfaceLanguage.locale)
        return Duration.seconds(max(0, minutes) * 60).formatted(style)
    }

    /// "Daily", "Weekdays", "Weekends", else the days themselves: "Sat, Sun".
    static func weekdays(_ days: Set<Int>) -> String {
        if days.count == 7 { return String(interface: "Daily") }
        if days == [2, 3, 4, 5, 6] { return String(interface: "Weekdays") }
        if days == [1, 7] { return String(interface: "Weekends") }
        var calendar = Calendar.current
        calendar.locale = InterfaceLanguage.locale
        let symbols = calendar.shortWeekdaySymbols
        return [2, 3, 4, 5, 6, 7, 1].filter(days.contains).map { symbols[$0 - 1] }.joined(separator: ", ")
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
