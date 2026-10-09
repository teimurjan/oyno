import Foundation
import Testing
@testable import Oyno

/// The one thing the wire and the disk have to agree on: what a `Date` looks like.
struct JSONCodingTests {
    private struct Stamp: Codable, Equatable {
        var at: Date
    }

    @Test func encodesInstantsAsISO8601WithFractionalSeconds() throws {
        let at = Date(timeIntervalSince1970: 1_788_000_000.123)
        let json = String(decoding: try JSONCoding.encoder.encode(Stamp(at: at)), as: UTF8.self)
        #expect(json == #"{"at":"2026-08-29T10:40:00.123Z"}"#)
    }

    @Test func roundTripsToTheMillisecond() throws {
        let original = Stamp(at: Date(timeIntervalSince1970: 1_788_000_000.456))
        let data = try JSONCoding.encoder.encode(original)
        let decoded = try JSONCoding.decoder.decode(Stamp.self, from: data)
        #expect(abs(decoded.at.timeIntervalSince(original.at)) < 0.001)
    }

    @Test(arguments: [
        ("2026-01-02T03:04:05.678Z", 1_767_323_045.678),
        ("2026-01-02T03:04:05Z", 1_767_323_045),
        ("2026-01-02", 1_767_312_000),
    ])
    func decodesEverySpellingTheServerUses(spelling: String, expected: TimeInterval) throws {
        let data = Data(#"{"at":"\#(spelling)"}"#.utf8)
        let decoded = try JSONCoding.decoder.decode(Stamp.self, from: data)
        #expect(abs(decoded.at.timeIntervalSince1970 - expected) < 0.001)
    }

    /// What a bare `JSONEncoder()` wrote to disk before `JSONCoding` existed: seconds
    /// since 2001. An outbox in that form is still readable.
    @Test func readsTheLegacyNumberOffDisk() throws {
        let data = Data(#"{"at":810057254.696056}"#.utf8)
        let decoded = try JSONCoding.decoder.decode(Stamp.self, from: data)
        #expect(abs(decoded.at.timeIntervalSinceReferenceDate - 810_057_254.696056) < 0.001)
    }

    @Test func refusesWhatIsNeitherAnInstantNorANumber() {
        let data = Data(#"{"at":"yesterday"}"#.utf8)
        #expect(throws: DecodingError.self) {
            try JSONCoding.decoder.decode(Stamp.self, from: data)
        }
    }
}

/// Records written by an older build still open. A `shop.json` the decoder cannot read
/// is set aside with the outbox in it, so every field added since has to read as
/// something when its key is missing.
struct RecordCompatibilityTests {
    @Test func anOrderStillMarkedPaidReadsAsCompleted() throws {
        var order = Order()
        order.status = .completed
        var json = String(decoding: try JSONCoding.encoder.encode(order), as: UTF8.self)
        json = json.replacingOccurrences(of: #""status":"completed""#, with: #""status":"paid""#)
        let decoded = try JSONCoding.decoder.decode(Order.self, from: Data(json.utf8))
        #expect(decoded.status == .completed)
    }

    @Test func anOrderWithoutTheDepositFieldsDecodes() throws {
        let order = Order()
        var object = try #require(JSONSerialization.jsonObject(with: JSONCoding.encoder.encode(order)) as? [String: Any])
        object["advance"] = nil
        object["completedAt"] = nil
        let data = try JSONSerialization.data(withJSONObject: object)
        let decoded = try JSONCoding.decoder.decode(Order.self, from: data)
        #expect(decoded.advanceTaken == 0)
        #expect(decoded.completedAt == nil)
    }

    @Test func anUnknownStageStillRefusesToDecode() {
        let json = #"{"status":"teleported"}"#
        #expect(throws: DecodingError.self) {
            try JSONCoding.decoder.decode([String: OrderStatus].self, from: Data(json.utf8))
        }
    }
}
