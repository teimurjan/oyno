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
}

/// How many rounds were played and for how many minutes: what the account backs up.
struct Tally: Codable, Equatable, Sendable {
    var rounds = 0
    var minutes = 0

    static let zero = Tally()

    static func + (lhs: Tally, rhs: Tally) -> Tally {
        Tally(rounds: lhs.rounds + rhs.rounds, minutes: lhs.minutes + rhs.minutes)
    }

    /// The larger of each total.
    func union(_ other: Tally) -> Tally {
        Tally(rounds: max(rounds, other.rounds), minutes: max(minutes, other.minutes))
    }

    /// What this has beyond `other`, never below zero.
    func excess(over other: Tally) -> Tally {
        Tally(rounds: max(0, rounds - other.rounds), minutes: max(0, minutes - other.minutes))
    }
}
