import DeviceActivity
import FamilyControls
import Foundation

/// What the parent chose, in the App Group both the app and `OynoMonitor` read. The apps are
/// Screen Time's opaque tokens: neither process ever learns their names.
struct KidHoursSettings: Codable {
    /// Apps no schedule pauses, even when their category is paused.
    var alwaysAllowed = FamilyActivitySelection()
    /// Paused by every schedule, on top of its own apps.
    var neverAllowed = FamilyActivitySelection()
    var schedules: [KidHoursSchedule] = []
    /// The apps opened in the middle of Kid hours, after a round or for "Not now".
    var unlock: KidHoursUnlock?
    /// What the last round earned and the parent has not claimed yet.
    var earned: KidHoursEarned?
    /// Today's stretches of open apps inside Kid hours, so the paused time can leave them out.
    var opened: [DateInterval] = []
    /// Minutes Kid hours kept the apps paused on the days already over.
    var bankedMinutes = 0
    /// The first day not yet in `bankedMinutes`. Nil until the first day is counted.
    var bankedThrough: Date?
    /// Set while no one is signed in. Nothing is paused from then until someone signs in.
    var signedOutAt: Date?

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

    /// What the running schedules pause at `date`, together. Nil when nothing is paused.
    func pausedApps(at date: Date, calendar: Calendar = .current) -> FamilyActivitySelection? {
        guard isPaused(at: date, calendar: calendar) else { return nil }
        return schedules
            .filter { $0.isEnabled && $0.contains(date, calendar: calendar) }
            .reduce(into: FamilyActivitySelection()) { $0.formUnion(apps(of: $1)) }
    }

    /// What `schedule` pauses while it runs: its own apps and Never allowed.
    func apps(of schedule: KidHoursSchedule) -> FamilyActivitySelection {
        var apps = schedule.apps
        apps.formUnion(neverAllowed)
        return apps
    }

    func isUnlocked(at date: Date) -> Bool {
        unlock.map { date < $0.endsAt } ?? false
    }

    /// Whether the apps are paused at `date`: someone is signed in, a schedule is running and
    /// no unlock is.
    func isPaused(at date: Date, calendar: Calendar = .current) -> Bool {
        signedOutAt == nil && schedule(at: date, calendar: calendar) != nil && !isUnlocked(at: date)
    }

    /// Opens every app until `signIn`. A pending reward goes with the account.
    mutating func signOut(at date: Date) {
        guard signedOutAt == nil else { return }
        signedOutAt = date
        earned = nil
    }

    /// Logs the signed-out stretch as open, so it never counts as paused time.
    mutating func signIn(at date: Date) {
        guard let since = signedOutAt else { return }
        opened.append(DateInterval(start: since, end: max(since, date)))
        signedOutAt = nil
    }

    /// Minutes from midnight to `now` inside Kid hours, the opened stretches left out.
    func pausedMinutes(until now: Date, calendar: Calendar = .current) -> Int {
        pausedMinutes(from: calendar.startOfDay(for: now), to: now, calendar: calendar)
    }

    /// Adds every day that ended since the last call to `bankedMinutes`, then forgets the
    /// opened stretches of those days. The days are counted against today's schedules.
    mutating func bankPausedMinutes(now: Date, calendar: Calendar = .current) {
        let today = calendar.startOfDay(for: now)
        var day = bankedThrough ?? today
        while day < today, let next = calendar.date(byAdding: .day, value: 1, to: day) {
            bankedMinutes += pausedMinutes(from: day, to: next, calendar: calendar)
            day = next
        }
        bankedThrough = today
        opened = opened.filter { $0.end > today }
    }

    private func pausedMinutes(from start: Date, to end: Date, calendar: Calendar) -> Int {
        let elapsed = Int(end.timeIntervalSince(start) / 60)
        return (0..<max(0, elapsed)).count { minute in
            let moment = start.addingTimeInterval(TimeInterval(minute * 60))
            return schedule(at: moment, calendar: calendar) != nil
                && (signedOutAt.map { moment < $0 } ?? true)
                && !opened.contains { $0.start <= moment && moment < $0.end }
        }
    }

    private enum CodingKeys: String, CodingKey {
        case alwaysAllowed, neverAllowed, schedules, unlock, earned, opened, bankedMinutes, bankedThrough, signedOutAt
    }

    /// Names older builds saved under.
    private enum LegacyKeys: String, CodingKey {
        case selection, alwaysOpen
    }
}

extension KidHoursSettings {
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let legacy = try decoder.container(keyedBy: LegacyKeys.self)
        alwaysAllowed = try container.decodeIfPresent(FamilyActivitySelection.self, forKey: .alwaysAllowed)
            ?? legacy.decodeIfPresent(FamilyActivitySelection.self, forKey: .alwaysOpen)
            ?? FamilyActivitySelection()
        neverAllowed = try container.decodeIfPresent(FamilyActivitySelection.self, forKey: .neverAllowed) ?? FamilyActivitySelection()
        schedules = try container.decodeIfPresent([KidHoursSchedule].self, forKey: .schedules) ?? []
        unlock = try container.decodeIfPresent(KidHoursUnlock.self, forKey: .unlock)
        earned = try container.decodeIfPresent(KidHoursEarned.self, forKey: .earned)
        opened = try container.decodeIfPresent([DateInterval].self, forKey: .opened) ?? []
        bankedMinutes = try container.decodeIfPresent(Int.self, forKey: .bankedMinutes) ?? 0
        bankedThrough = try container.decodeIfPresent(Date.self, forKey: .bankedThrough)
        signedOutAt = try container.decodeIfPresent(Date.self, forKey: .signedOutAt)
        // One list used to pause during every schedule, so each schedule starts with it.
        if let shared = try legacy.decodeIfPresent(FamilyActivitySelection.self, forKey: .selection) {
            schedules = schedules.map { schedule in
                var adopted = schedule
                if adopted.apps.isEmpty { adopted.apps = shared }
                return adopted
            }
        }
    }
}

extension FamilyActivitySelection {
    var isEmpty: Bool { count == 0 }

    /// Apps, categories and sites, each counted once.
    var count: Int { applicationTokens.count + categoryTokens.count + webDomainTokens.count }

    mutating func formUnion(_ other: FamilyActivitySelection) {
        applicationTokens.formUnion(other.applicationTokens)
        categoryTokens.formUnion(other.categoryTokens)
        webDomainTokens.formUnion(other.webDomainTokens)
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

/// An unlock a round earned, claimable for a minute or until its schedule ends, if sooner.
struct KidHoursEarned: Codable, Equatable {
    let scheduleID: UUID
    let minutes: Int
    let expiresAt: Date

    static let claimWindow: TimeInterval = 60

    /// An expiry further out than the window is refused: one banked before the window existed,
    /// or a clock moved back.
    func isClaimable(at date: Date) -> Bool {
        date < expiresAt && expiresAt.timeIntervalSince(date) <= Self.claimWindow
    }
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
