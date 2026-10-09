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
}
