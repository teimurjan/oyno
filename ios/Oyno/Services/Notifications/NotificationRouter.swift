import Observation
import UserNotifications

/// Hears a tap on a reminder and holds the tab it asks for until `AppRoot` takes it, on a cold
/// launch or a return to the foreground. Every other notification only opens the app, as before.
@MainActor
@Observable
final class NotificationRouter: NSObject, UNUserNotificationCenterDelegate {
    static let shared = NotificationRouter()
    nonisolated static let reminderKey = "reminder"
    nonisolated static let tapKey = "tap"

    private(set) var requested: ReminderCatalogue.Tap?

    /// The tab a tap asked for, once.
    func take() -> ReminderCatalogue.Tap? {
        defer { requested = nil }
        return requested
    }

    /// Nothing shows over the open app, as before there was a delegate.
    nonisolated func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        willPresent notification: UNNotification
    ) async -> UNNotificationPresentationOptions {
        []
    }

    nonisolated func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse) async {
        let info = response.notification.request.content.userInfo
        guard let id = info[Self.reminderKey] as? String,
              let tap = (info[Self.tapKey] as? String).flatMap(ReminderCatalogue.Tap.init)
        else { return }
        await MainActor.run {
            requested = tap
            Analytics.shared.track(.reminderOpened(id: id))
        }
    }
}
