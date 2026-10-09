import Foundation

/// How numbers reach the screen.
///
/// Centralised because the same value appears in three places at three precisions — a
/// spool is `640 g` in the list, `0.64 kg` in the header total, and `$0.0141/g` in a cost
/// breakdown — and a shop reading two different roundings of one number stops trusting
/// both.
///
/// Everything here resolves against `InterfaceLanguage.locale`, not the device's. The two
/// can differ, and a column that reads "640 г" on one row and "1,250 kg" on the next is
/// not a translation, it is a bug the operator has to squint at. That covers the
/// separators as well as the units: a Russian shop expects `1 250,50`, and `String(format:)`
/// would hand it `1250.50` however good the words around it were.
enum Format {
    /// `digits` is the fraction shown, and the default is the two every currency the app
    /// bills in carries. Zero is for a figure the size of a year, where the cents are noise
    /// the eye has to step over to reach the number.
    static func money(_ value: Decimal, currency: String = "USD", digits: Int = 2) -> String {
        let formatter = cached("money|\(currency)|\(digits)") { formatter in
            formatter.numberStyle = .currency
            formatter.currencyCode = currency
            formatter.minimumFractionDigits = digits
            formatter.maximumFractionDigits = digits
        }
        return formatter.string(from: value as NSDecimalNumber) ?? "—"
    }

    /// Grams, whole. Nobody weighs filament to a tenth of a gram, and the extra digit only
    /// costs column width.
    static func grams(_ value: Decimal) -> String {
        String(interface: "\(number(value, digits: 0)) g")
    }

    /// "Black PLA and Red TPU", in the reader's own conjunction.
    static func list(_ items: [String]) -> String {
        items.formatted(.list(type: .and).locale(InterfaceLanguage.locale))
    }

    /// Kilograms with two decimals, for the "6.42 kg on hand" summary where a shop is
    /// judging a shelf rather than a roll.
    static func kilograms(_ grams: Decimal) -> String {
        String(interface: "\(number(grams / 1000, digits: 2)) kg")
    }

    /// Hours to one decimal. Slicers report to the minute, but a quote priced on 6.5 h
    /// versus 6.52 h differs by less than a cent, and the shorter string keeps the stepper
    /// from jogging.
    static func hours(_ minutes: Decimal) -> String {
        String(interface: "\(number(minutes / 60, digits: 1)) h")
    }

    /// A count — orders at a stage, prints in a week.
    static func whole(_ value: Decimal) -> String {
        number(value, digits: 0)
    }

    /// Millilitres, whole — what a slicer reports a resin print at.
    static func millilitres(_ value: Decimal) -> String {
        String(interface: "\(number(value, digits: 0)) ml")
    }

    /// Whole watts — the nameplate figure an operator reads off the back of a machine.
    static func watts(_ value: Decimal) -> String {
        String(interface: "\(number(value, digits: 0)) W")
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

    /// A signed delta — "+2.4 pts" — where the sign carries the meaning and must not be
    /// dropped for a positive. Russian counts these in процентные пункты, so the unit is
    /// translated along with everything else.
    static func signedPoints(_ value: Decimal) -> String {
        let magnitude = number(abs(value), digits: 1)
        return value < 0
            ? String(interface: "−\(magnitude) pts")
            : String(interface: "+\(magnitude) pts")
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
