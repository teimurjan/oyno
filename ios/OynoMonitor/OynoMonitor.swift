import DeviceActivity
import Foundation

/// Runs outside the app, at the schedule's boundaries, so Kid hours start and end on time
/// whether or not Oyno is open.
final class OynoMonitor: DeviceActivityMonitor {
    override func intervalDidStart(for activity: DeviceActivityName) {
        super.intervalDidStart(for: activity)
        let settings = KidHoursSettings.load()
        if activity.isKidHours, settings.isEnabled { KidHoursShield.apply(settings.selection) }
        if activity == .kidHoursBreak { KidHoursShield.clear() }
    }

    override func intervalDidEnd(for activity: DeviceActivityName) {
        super.intervalDidEnd(for: activity)
        let settings = KidHoursSettings.load()
        if activity.isKidHours { KidHoursShield.clear() }
        // The break is over: pause again if Kid hours are still running.
        if activity == .kidHoursBreak, settings.isEnabled, settings.schedule.contains(.now) {
            KidHoursShield.apply(settings.selection)
        }
    }
}
