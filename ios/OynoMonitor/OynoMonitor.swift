import DeviceActivity
import Foundation

/// Runs outside the app, at the schedules' boundaries, so Kid hours start and end on time
/// whether or not Oyno is open. Every boundary, a schedule's or an unlock's, is answered the
/// same way, from the whole saved state.
final class OynoMonitor: DeviceActivityMonitor {
    override func intervalDidStart(for activity: DeviceActivityName) {
        super.intervalDidStart(for: activity)
        guard let settings = KidHoursSettings.load() else { return }
        KidHoursShield.sync(settings)
    }

    override func intervalDidEnd(for activity: DeviceActivityName) {
        super.intervalDidEnd(for: activity)
        guard var settings = KidHoursSettings.load() else { return }
        // Screen Time ends on the minute, often seconds before `endsAt`; asking the clock then
        // would keep the apps open until the next schedule starts.
        if activity == .kidHoursUnlock, settings.unlock?.isEnding(at: .now) == true {
            settings.unlock = nil
            settings.save()
        }
        KidHoursShield.sync(settings)
    }
}
