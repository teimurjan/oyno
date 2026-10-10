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
    /// The apps opened in the middle of Kid hours, after a round or for "Not now".
    var unlock: KidHoursUnlock?
    /// What the last round earned and the parent has not claimed yet.
    var earned: KidHoursEarned?

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

    func isUnlocked(at date: Date) -> Bool {
        unlock.map { date < $0.endsAt } ?? false
    }

    /// Whether the apps are paused at `date`: a schedule is running and no unlock is.
    func isPaused(at date: Date, calendar: Calendar = .current) -> Bool {
        schedule(at: date, calendar: calendar) != nil && !isUnlocked(at: date)
    }
}

/// A stretch of open apps inside Kid hours, and why the parent took it.
struct KidHoursUnlock: Codable, Equatable {
    enum Reason: String, Codable {
        case round, notNow
    }

    let reason: Reason
    let startedAt: Date
    let endsAt: Date

    /// Screen Time ends an interval on the minute, so its end can arrive this early.
    private static let endTolerance: TimeInterval = 60

    /// `minutes` from `date`, rounded up to the minute Screen Time ends on, so a one-minute
    /// unlock is never cut to seconds.
    static func end(minutes: Int, from date: Date) -> Date {
        let wanted = date.addingTimeInterval(TimeInterval(minutes * 60)).timeIntervalSinceReferenceDate
        return Date(timeIntervalSinceReferenceDate: (wanted / 60).rounded(.up) * 60)
    }

    /// Whether an end Screen Time reports at `date` is this unlock's own, rather than one
    /// left over from an unlock it replaced.
    func isEnding(at date: Date) -> Bool {
        date >= endsAt.addingTimeInterval(-Self.endTolerance)
    }

    /// The window Screen Time is asked to watch. It refuses one under 15 minutes, so a
    /// shorter unlock starts its window in the past; only the end matters.
    var monitoredStart: Date {
        min(startedAt, endsAt.addingTimeInterval(-TimeInterval(KidHoursSchedule.minimumMinutes * 60)))
    }
}

/// An unlock a round earned, claimable until the schedule it was played in ends today.
struct KidHoursEarned: Codable, Equatable {
    let scheduleID: UUID
    let minutes: Int
    let expiresAt: Date

    func isClaimable(at date: Date) -> Bool { date < expiresAt }
}

extension DeviceActivityName {
    /// One per schedule, repeating every day. The monitor checks the weekday itself, so the
    /// count of activities stays the count of schedules, well inside Screen Time's limit.
    static func kidHours(_ schedule: KidHoursSchedule) -> DeviceActivityName {
        DeviceActivityName("kidHours.\(schedule.id.uuidString)")
    }

    /// The one running unlock. The raw value predates unlocks, so one armed by an older build
    /// still ends through here.
    static let kidHoursUnlock = DeviceActivityName("kidHours.break")

    var isKidHours: Bool { rawValue.hasPrefix("kidHours.") && self != .kidHoursUnlock }
}
