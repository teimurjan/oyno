import Foundation

/// When Kid hours run: a named start and end time on chosen weekdays. Pure, so the app and
/// the monitor extension agree on "is it Kid hours right now" and the tests can check it.
struct KidHoursSchedule: Codable, Hashable, Identifiable {
    var id = UUID()
    var name: String
    /// Minutes after midnight.
    var start: Int
    var end: Int
    /// `Calendar` weekdays: 1 is Sunday, 7 is Saturday.
    var weekdays: Set<Int>
    var isEnabled = true
    /// Whether a round played during this schedule earns the parent `unlockMinutes` of open apps.
    var unlocksAfterRound = true
    var unlockMinutes = 20

    /// Screen Time refuses an interval shorter than this.
    static let minimumMinutes = 15
    static let unlockChoices = [1, 3, 5, 10, 20]

    /// Weekdays, 4:30 to 7:30 PM: the hour after work the canvas draws. The name is the
    /// parent's to change, so it arrives already in their language.
    static func afterWork(named name: String) -> KidHoursSchedule {
        KidHoursSchedule(name: name, start: 16 * 60 + 30, end: 19 * 60 + 30, weekdays: [2, 3, 4, 5, 6])
    }

    var hasName: Bool { !name.trimmingCharacters(in: .whitespaces).isEmpty }
    var hasRoom: Bool { end - start >= Self.minimumMinutes }
    var isValid: Bool { hasName && hasRoom && !weekdays.isEmpty }

    func contains(_ date: Date, calendar: Calendar = .current) -> Bool {
        let parts = calendar.dateComponents([.weekday, .hour, .minute], from: date)
        guard let weekday = parts.weekday, weekdays.contains(weekday) else { return false }
        let minute = (parts.hour ?? 0) * 60 + (parts.minute ?? 0)
        return minute >= start && minute < end
    }

    /// The next moment this schedule starts after `date`, nil when it runs on no day.
    func nextStart(after date: Date, calendar: Calendar = .current) -> Date? {
        let today = calendar.startOfDay(for: date)
        return (0..<8).lazy.compactMap { offset -> Date? in
            guard let day = calendar.date(byAdding: .day, value: offset, to: today),
                  weekdays.contains(calendar.component(.weekday, from: day)),
                  let starts = calendar.date(bySettingHour: start / 60, minute: start % 60, second: 0, of: day),
                  starts > date
            else { return nil }
            return starts
        }.first
    }

    /// When today's run ends, for "ends in 1h 48m".
    func end(on date: Date, calendar: Calendar = .current) -> Date? {
        calendar.date(bySettingHour: end / 60, minute: end % 60, second: 0, of: date)
    }

    var startComponents: DateComponents { DateComponents(hour: start / 60, minute: start % 60) }
    var endComponents: DateComponents { DateComponents(hour: end / 60, minute: end % 60) }
}

extension KidHoursSchedule {
    private enum CodingKeys: String, CodingKey {
        case id, name, start, end, weekdays, isEnabled, unlocksAfterRound, unlockMinutes
    }

    /// Schedules saved before the unlock settings existed decode with today's defaults.
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.init(
            id: try container.decode(UUID.self, forKey: .id),
            name: try container.decode(String.self, forKey: .name),
            start: try container.decode(Int.self, forKey: .start),
            end: try container.decode(Int.self, forKey: .end),
            weekdays: try container.decode(Set<Int>.self, forKey: .weekdays),
            isEnabled: try container.decodeIfPresent(Bool.self, forKey: .isEnabled) ?? true,
            unlocksAfterRound: try container.decodeIfPresent(Bool.self, forKey: .unlocksAfterRound) ?? true,
            unlockMinutes: try container.decodeIfPresent(Int.self, forKey: .unlockMinutes) ?? 20
        )
    }
}
