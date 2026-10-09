import DeviceActivity
import FamilyControls
import Foundation

/// What the parent chose, in the App Group both the app and `OynoMonitor` read. The apps are
/// Screen Time's opaque tokens: neither process ever learns their names.
struct KidHoursSettings: Codable {
    /// What pauses.
    var selection = FamilyActivitySelection()
    /// Apps that stay open even when their category is paused.
    var alwaysOpen = FamilyActivitySelection()
    var schedules: [KidHoursSchedule] = []
    /// When the current "Not now" break ends. The apps are open until then.
    var breakEndsAt: Date?

    static let appGroup = "group.com.teimurjan.oyno"
    private static let key = "kidHours.settings"

    /// Nil until the app has saved once.
    static func load() -> KidHoursSettings? {
        guard let data = UserDefaults(suiteName: appGroup)?.data(forKey: key) else { return nil }
        return try? JSONDecoder().decode(KidHoursSettings.self, from: data)
    }

    func save() {
        guard let data = try? JSONEncoder().encode(self) else { return }
        UserDefaults(suiteName: Self.appGroup)?.set(data, forKey: Self.key)
    }

    /// The enabled schedule running at `date`, nil outside Kid hours.
    func schedule(at date: Date, calendar: Calendar = .current) -> KidHoursSchedule? {
        schedules.first { $0.isEnabled && $0.contains(date, calendar: calendar) }
    }

    func isOnBreak(at date: Date) -> Bool {
        breakEndsAt.map { date < $0 } ?? false
    }

    /// Whether the apps are paused at `date`: a schedule is running and no break is.
    func isPaused(at date: Date, calendar: Calendar = .current) -> Bool {
        schedule(at: date, calendar: calendar) != nil && !isOnBreak(at: date)
    }
}

extension DeviceActivityName {
    /// One per schedule, repeating every day. The monitor checks the weekday itself, so the
    /// count of activities stays the count of schedules, well inside Screen Time's limit.
    static func kidHours(_ schedule: KidHoursSchedule) -> DeviceActivityName {
        DeviceActivityName("kidHours.\(schedule.id.uuidString)")
    }

    /// The 20 minutes the parent's apps are open in the middle of Kid hours.
    static let kidHoursBreak = DeviceActivityName("kidHours.break")

    var isKidHours: Bool { rawValue.hasPrefix("kidHours.") && self != .kidHoursBreak }
}
