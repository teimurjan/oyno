import Foundation

/// Where today stands against Kid hours, which decides what Home's card holds: before them it
/// waits, during them it holds the one thing to start, after them it sums up the evening.
enum Evening: Equatable {
    /// No schedule runs today: one easy thing, whenever.
    case free
    case before(start: Date)
    case during(end: Date)
    /// Every schedule today has ended, and the family played.
    case after

    static func at(_ now: Date, schedules: [KidHoursSchedule], playedToday: Bool, calendar: Calendar = .current) -> Evening {
        let today = schedules.filter { $0.isEnabled && $0.weekdays.contains(calendar.component(.weekday, from: now)) }
        if let running = today.first(where: { $0.contains(now, calendar: calendar) }), let end = running.end(on: now, calendar: calendar) {
            return .during(end: end)
        }
        let starts = today.compactMap { $0.nextStart(after: now, calendar: calendar) }.filter { calendar.isDate($0, inSameDayAs: now) }
        if let next = starts.min() { return playedToday ? .free : .before(start: next) }
        return !today.isEmpty && playedToday ? .after : .free
    }
}
