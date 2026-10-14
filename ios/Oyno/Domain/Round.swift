import Foundation

/// One game played together, recorded when the timer is done.
struct Round: Codable, Identifiable, Hashable {
    var id = UUID()
    let activityID: String
    let startedAt: Date
    let minutes: Int
}

extension Array where Element == Round {
    /// Minutes played on the calendar day of `date`.
    func minutes(on date: Date, calendar: Calendar = .current) -> Int {
        filter { calendar.isDate($0.startedAt, inSameDayAs: date) }.reduce(0) { $0 + $1.minutes }
    }

    var totalMinutes: Int { reduce(0) { $0 + $1.minutes } }

    var tally: Tally { Tally(rounds: count, minutes: totalMinutes) }

    /// The games played before, the most recently played first: "Play again".
    func replays(limit: Int) -> [Replay] {
        Dictionary(grouping: self, by: \.activityID)
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

/// How many rounds were played, for how many minutes, and how many minutes Kid hours kept the
/// apps paused on the days already over: what the account backs up.
struct Tally: Codable, Equatable, Sendable {
    var rounds = 0
    var minutes = 0
    var together = 0

    static let zero = Tally()

    var points: Int { Bloom.points(rounds: rounds, minutes: minutes) }

    static func + (lhs: Tally, rhs: Tally) -> Tally {
        Tally(rounds: lhs.rounds + rhs.rounds, minutes: lhs.minutes + rhs.minutes, together: lhs.together + rhs.together)
    }

    /// The larger of each total.
    func union(_ other: Tally) -> Tally {
        Tally(rounds: max(rounds, other.rounds), minutes: max(minutes, other.minutes), together: max(together, other.together))
    }

    /// What this has beyond `other`, never below zero.
    func excess(over other: Tally) -> Tally {
        Tally(
            rounds: max(0, rounds - other.rounds),
            minutes: max(0, minutes - other.minutes),
            together: max(0, together - other.together)
        )
    }
}

extension Tally {
    /// `together` is absent in files and replies from before it was counted.
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        rounds = try container.decode(Int.self, forKey: .rounds)
        minutes = try container.decode(Int.self, forKey: .minutes)
        together = try container.decodeIfPresent(Int.self, forKey: .together) ?? 0
    }
}
