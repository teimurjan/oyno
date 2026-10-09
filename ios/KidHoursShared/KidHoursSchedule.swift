import Foundation

/// When Kid hours run: a start and an end time on chosen weekdays. Pure, so the app and the
/// monitor extension agree on "is it Kid hours right now" and the tests can check it.
struct KidHoursSchedule: Codable, Hashable {
    /// Minutes after midnight.
    var start: Int
    var end: Int
    /// `Calendar` weekdays: 1 is Sunday, 7 is Saturday.
    var weekdays: Set<Int>

    /// Weekdays, 4:30 to 7:30 PM: the hour after work the canvas draws.
    static let afterWork = KidHoursSchedule(start: 16 * 60 + 30, end: 19 * 60 + 30, weekdays: [2, 3, 4, 5, 6])

    func contains(_ date: Date, calendar: Calendar = .current) -> Bool {
        let parts = calendar.dateComponents([.weekday, .hour, .minute], from: date)
        guard let weekday = parts.weekday, weekdays.contains(weekday) else { return false }
        let minute = (parts.hour ?? 0) * 60 + (parts.minute ?? 0)
        return minute >= start && minute < end
    }

    var startComponents: DateComponents { DateComponents(hour: start / 60, minute: start % 60) }
    var endComponents: DateComponents { DateComponents(hour: end / 60, minute: end % 60) }
}
