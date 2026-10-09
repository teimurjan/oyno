import DeviceActivity
import FamilyControls
import Foundation
import Observation

/// Kid hours on this phone: Screen Time access, the apps to pause, when, and the 20-minute
/// break. The schedule itself runs in `OynoMonitor`, so it holds whether or not Oyno is open.
@MainActor
@Observable
final class KidHoursStore {
    private(set) var settings = KidHoursSettings.load()
    private(set) var isAuthorized = AuthorizationCenter.shared.authorizationStatus == .approved
    /// When the current break ends, nil when there is none.
    private(set) var breakEndsAt: Date?

    static let breakMinutes = 20

    @ObservationIgnored private let center = DeviceActivityCenter()

    var isOnNow: Bool { settings.isEnabled && settings.schedule.contains(.now) && breakEndsAt.map { $0 < .now } ?? true }

    /// Asks Screen Time for access to the parent's own phone. Fails quietly in the simulator,
    /// which has no Screen Time.
    func requestAuthorization() async {
        do {
            try await AuthorizationCenter.shared.requestAuthorization(for: .individual)
        } catch {
            // Declined, or unavailable. The status below says which way it went.
        }
        isAuthorized = AuthorizationCenter.shared.authorizationStatus == .approved
        Analytics.shared.track(.kidHoursAuthorized(granted: isAuthorized))
    }

    func update(selection: FamilyActivitySelection) {
        settings.selection = selection
        commit()
        Analytics.shared.track(.kidHoursSaved(
            apps: selection.applicationTokens.count,
            categories: selection.categoryTokens.count
        ))
    }

    func update(schedule: KidHoursSchedule) {
        guard schedule.start < schedule.end, !schedule.weekdays.isEmpty else { return }
        settings.schedule = schedule
        commit()
    }

    func setEnabled(_ enabled: Bool) {
        settings.isEnabled = enabled
        commit()
    }

    /// Opens the parent's apps for `breakMinutes`, then Kid hours pick back up on their own.
    func takeBreak(now: Date = .now) {
        let ends = now.addingTimeInterval(TimeInterval(Self.breakMinutes * 60))
        KidHoursShield.clear()
        let calendar = Calendar.current
        let schedule = DeviceActivitySchedule(
            intervalStart: calendar.dateComponents([.year, .month, .day, .hour, .minute, .second], from: now),
            intervalEnd: calendar.dateComponents([.year, .month, .day, .hour, .minute, .second], from: ends),
            repeats: false
        )
        center.stopMonitoring([.kidHoursBreak])
        try? center.startMonitoring(.kidHoursBreak, during: schedule)
        breakEndsAt = ends
        Analytics.shared.track(.kidHoursBreak(minutes: Self.breakMinutes))
    }

    /// Saves, then re-arms the monitor so the schedule on the phone matches the one on screen.
    private func commit() {
        settings.save()
        let weekdays = (1...7).map(DeviceActivityName.kidHours(weekday:))
        center.stopMonitoring(weekdays)
        KidHoursShield.clear()
        guard settings.isEnabled, isAuthorized else { return }

        for weekday in settings.schedule.weekdays {
            var start = settings.schedule.startComponents
            var end = settings.schedule.endComponents
            start.weekday = weekday
            end.weekday = weekday
            try? center.startMonitoring(
                .kidHours(weekday: weekday),
                during: DeviceActivitySchedule(intervalStart: start, intervalEnd: end, repeats: true)
            )
        }
        // The monitor only hears boundaries, so a schedule saved mid-interval pauses now.
        if settings.schedule.contains(.now) { KidHoursShield.apply(settings.selection) }
    }
}
