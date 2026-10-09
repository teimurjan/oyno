import DeviceActivity
import Foundation

/// Runs outside the app, at the schedules' boundaries, so Kid hours start and end on time
/// whether or not Oyno is open. Every boundary, a schedule's or the break's, is answered the
/// same way, from the whole saved state.
final class OynoMonitor: DeviceActivityMonitor {
    override func intervalDidStart(for activity: DeviceActivityName) {
        super.intervalDidStart(for: activity)
        sync()
    }

    override func intervalDidEnd(for activity: DeviceActivityName) {
        super.intervalDidEnd(for: activity)
        sync()
    }

    private func sync() {
        guard let settings = KidHoursSettings.load() else { return }
        KidHoursShield.sync(settings)
    }
}
