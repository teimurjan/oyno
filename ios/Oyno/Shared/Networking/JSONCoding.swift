import Foundation

/// The one pair of coders every JSON in the app goes through — the wire and the disk.
///
/// One pair, deliberately. There used to be three: the disk wrote whole seconds, the
/// response decoder read three spellings, and the request encoder was a bare
/// `JSONEncoder()` whose default writes a `Date` as seconds since 2001. Postgres has no
/// idea what `810057254.696` is, so every push failed and the phone retried the same
/// batch forever — and because nothing ever landed, a reinstall found an empty shop.
///
/// Out: ISO-8601 with fractional seconds, always. `updated_at` is the sync cursor and
/// rounding it to the second would re-send every row written in the same second on
/// every sync.
///
/// In: lenient. The backend writes canonical instants, but Postgres hands a bare day back
/// for a `date` column and the stock `.iso8601` strategy refuses fractions, so all three
/// spellings are accepted here, once, rather than by every call site that holds a date.
/// So is the bare number, because an `outbox.json` written before this file existed is
/// full of them — and that outbox holds every print the phone never managed to send.
enum JSONCoding {
    static let encoder: JSONEncoder = {
        let encoder = JSONEncoder()
        encoder.dateEncodingStrategy = .custom { date, encoder in
            var container = encoder.singleValueContainer()
            try container.encode(ISO8601DateFormatter.internet.string(from: date))
        }
        return encoder
    }()

    static let decoder: JSONDecoder = {
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .custom { decoder in
            let container = try decoder.singleValueContainer()
            if let seconds = try? container.decode(Double.self) {
                return Date(timeIntervalSinceReferenceDate: seconds)
            }
            let value = try container.decode(String.self)
            guard let date = ISO8601DateFormatter.internet.date(from: value)
                ?? whole.date(from: value)
                ?? dayOnly.date(from: value)
            else {
                throw DecodingError.dataCorruptedError(
                    in: container, debugDescription: "Not an ISO-8601 instant: \(value)")
            }
            return date
        }
        return decoder
    }()

    private static let whole = ISO8601DateFormatter.with([.withInternetDateTime])
    private static let dayOnly = ISO8601DateFormatter.with([.withFullDate])
}

extension ISO8601DateFormatter {
    /// Internet date-time with fractional seconds — the spelling both directions use.
    static let internet = with([.withInternetDateTime, .withFractionalSeconds])

    fileprivate static func with(_ options: Options) -> ISO8601DateFormatter {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = options
        return formatter
    }
}
