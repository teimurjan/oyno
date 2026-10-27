import Foundation

/// Monday to Sunday, the span the weekly goal and the Sunday letter count. An evening counts when
/// the family had one moment on it, and a rest day costs nothing.
struct Week: Hashable {
    /// Midnight on the Monday.
    let start: Date

    /// The evenings a family can aim for. Three is where everyone starts.
    static let goals = [2, 3, 5]
    static let defaultGoal = 3

    static func containing(_ date: Date, calendar: Calendar = .current) -> Week {
        var monday = calendar
        monday.firstWeekday = 2
        let start = monday.dateInterval(of: .weekOfYear, for: date)?.start ?? calendar.startOfDay(for: date)
        return Week(start: start)
    }

    func days(calendar: Calendar = .current) -> [Date] {
        (0..<7).compactMap { calendar.date(byAdding: .day, value: $0, to: start) }
    }

    /// The Sunday the letter comes on.
    func sunday(calendar: Calendar = .current) -> Date { days(calendar: calendar)[6] }

    func contains(_ date: Date, calendar: Calendar = .current) -> Bool {
        guard let end = calendar.date(byAdding: .day, value: 7, to: start) else { return false }
        return date >= start && date < end
    }

    func rounds(_ all: [Round], calendar: Calendar = .current) -> [Round] {
        all.filter { contains($0.startedAt, calendar: calendar) }
    }

    func evenings(in rounds: [Round], calendar: Calendar = .current) -> Int {
        days(calendar: calendar).filter { !rounds.on($0, calendar: calendar).isEmpty }.count
    }

    /// One dot per day: a moment on it, a rest, today still open, or still to come.
    enum Day: Equatable { case done, rest, today, later }

    func dots(_ rounds: [Round], today: Date, calendar: Calendar = .current) -> [Day] {
        days(calendar: calendar).map { day in
            if !rounds.on(day, calendar: calendar).isEmpty { return .done }
            if calendar.isDate(day, inSameDayAs: today) { return .today }
            return day < today ? .rest : .later
        }
    }

    /// The letter is the week's last day: it comes on the Sunday, and covers the week so far.
    func letterIsReady(on date: Date, calendar: Calendar = .current) -> Bool {
        calendar.isDate(sunday(calendar: calendar), inSameDayAs: date)
    }
}
