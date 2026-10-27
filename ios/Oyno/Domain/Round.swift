import Foundation

/// One moment together, a game or an everyday one, recorded when the timer is done.
struct Round: Codable, Identifiable, Hashable {
    var id = UUID()
    var kind = MomentKind.game
    /// The game played, nil for an everyday moment.
    let activityID: String?
    let startedAt: Date
    let minutes: Int
    /// What it practiced, as the catalogue said when it was played.
    var skills: [String] = []
    /// What it left on the planet.
    var keepsakeID: String?
}

extension Round {
    /// Rounds saved before the other kinds were all games, and carried no skills or keepsake.
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        id = try container.decode(UUID.self, forKey: .id)
        kind = try container.decodeIfPresent(MomentKind.self, forKey: .kind) ?? .game
        activityID = try container.decodeIfPresent(String.self, forKey: .activityID)
        startedAt = try container.decode(Date.self, forKey: .startedAt)
        minutes = try container.decode(Int.self, forKey: .minutes)
        skills = try container.decodeIfPresent([String].self, forKey: .skills) ?? []
        keepsakeID = try container.decodeIfPresent(String.self, forKey: .keepsakeID)
    }
}

extension Array where Element == Round {
    /// Minutes played on the calendar day of `date`.
    func minutes(on date: Date, calendar: Calendar = .current) -> Int {
        filter { calendar.isDate($0.startedAt, inSameDayAs: date) }.reduce(0) { $0 + $1.minutes }
    }

    var totalMinutes: Int { reduce(0) { $0 + $1.minutes } }

    var tally: Tally { Tally(rounds: count, minutes: totalMinutes, keepsakes: keepsakes) }

    /// Every keepsake these rounds left.
    var keepsakes: Set<String> { Set(compactMap(\.keepsakeID)) }

    /// The rounds on the calendar day of `date`.
    func on(_ date: Date, calendar: Calendar = .current) -> [Round] {
        filter { calendar.isDate($0.startedAt, inSameDayAs: date) }
    }

    /// The games played before, the most recently played first: "Play again".
    func replays(limit: Int) -> [Replay] {
        Dictionary(grouping: filter { $0.activityID != nil }, by: { $0.activityID! })
            .map { id, rounds in Replay(activityID: id, count: rounds.count, last: rounds.map(\.startedAt).max()!) }
            .sorted { $0.last > $1.last }
            .prefix(limit)
            .map { $0 }
    }
}

/// One game from the history: how often it was played and when last.
struct Replay: Equatable {
    let activityID: String
    let count: Int
    let last: Date
}

/// How many rounds were played, for how many minutes, how many minutes Kid hours kept the apps
/// paused on the days already over, and the keepsakes found: what the account backs up.
struct Tally: Codable, Equatable, Sendable {
    var rounds = 0
    var minutes = 0
    var together = 0
    var keepsakes: Set<String> = []

    static let zero = Tally()

    var points: Int { Bloom.points(rounds: rounds, minutes: minutes) }

    static func + (lhs: Tally, rhs: Tally) -> Tally {
        Tally(
            rounds: lhs.rounds + rhs.rounds,
            minutes: lhs.minutes + rhs.minutes,
            together: lhs.together + rhs.together,
            keepsakes: lhs.keepsakes.union(rhs.keepsakes)
        )
    }

    /// The larger of each total.
    func union(_ other: Tally) -> Tally {
        Tally(
            rounds: max(rounds, other.rounds),
            minutes: max(minutes, other.minutes),
            together: max(together, other.together),
            keepsakes: keepsakes.union(other.keepsakes)
        )
    }

    /// What this has beyond `other`, never below zero.
    func excess(over other: Tally) -> Tally {
        Tally(
            rounds: max(0, rounds - other.rounds),
            minutes: max(0, minutes - other.minutes),
            together: max(0, together - other.together),
            keepsakes: keepsakes.subtracting(other.keepsakes)
        )
    }
}

extension Tally {
    /// `together` and `keepsakes` are absent in files and replies from before they were counted.
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        rounds = try container.decode(Int.self, forKey: .rounds)
        minutes = try container.decode(Int.self, forKey: .minutes)
        together = try container.decodeIfPresent(Int.self, forKey: .together) ?? 0
        keepsakes = try container.decodeIfPresent(Set<String>.self, forKey: .keepsakes) ?? []
    }
}

/// What the account backs up: the totals, and the rounds and firsts behind them. On the wire the
/// totals sit at the top, as builds from before the history send them, and the rest under `history`.
struct Backup: Codable, Sendable {
    var tally = Tally.zero
    var rounds: [Round] = []
    var firsts: [First] = []

    private enum CodingKeys: String, CodingKey { case history }

    private struct SentHistory: Encodable {
        let rounds: [Round]
        let firsts: [First]
    }

    private struct ReceivedHistory: Decodable {
        let rounds: [Lossy<Round>]
        let firsts: [Lossy<First>]
    }

    init(tally: Tally = .zero, rounds: [Round] = [], firsts: [First] = []) {
        self.tally = tally
        self.rounds = rounds
        self.firsts = firsts
    }

    /// A round or a first this build cannot read, a kind added later say, is skipped and not fatal.
    init(from decoder: Decoder) throws {
        tally = try Tally(from: decoder)
        let container = try decoder.container(keyedBy: CodingKeys.self)
        guard let history = try container.decodeIfPresent(ReceivedHistory.self, forKey: .history) else { return }
        rounds = history.rounds.compactMap(\.value)
        firsts = history.firsts.compactMap(\.value)
    }

    /// The firsts go out without the parent's words, so a kid's name never reaches the server.
    func encode(to encoder: Encoder) throws {
        try tally.encode(to: encoder)
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(SentHistory(rounds: rounds, firsts: firsts.compactMap(\.backedUp)), forKey: .history)
    }
}

/// One element of an array that may fail to decode without failing the array.
private struct Lossy<Value: Decodable>: Decodable {
    let value: Value?

    init(from decoder: Decoder) {
        value = try? Value(from: decoder)
    }
}
