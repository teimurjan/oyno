import Foundation
import UserNotifications

/// The reminder the paywall's timeline promises: one local notification a day before a free
/// trial turns into a bill. Scheduled on the purchase that starts the trial.
enum TrialReminder {
    private static let id = "trial.reminder"

    /// Best effort: a refused permission or a failed add leaves the trial exactly as it was.
    static func schedule(endsAt: Date, price: String) async {
        let delay = endsAt.addingTimeInterval(-24 * 60 * 60).timeIntervalSinceNow
        guard delay > 0 else { return }
        let center = UNUserNotificationCenter.current()
        guard (try? await center.requestAuthorization(options: [.alert, .sound])) == true else { return }

        let content = UNMutableNotificationContent()
        content.title = String(interface: "Your free trial ends tomorrow")
        content.body = String(interface: "If you keep Oyno, \(price) is billed then. You can cancel in Settings.")
        content.sound = .default
        let trigger = UNTimeIntervalNotificationTrigger(timeInterval: delay, repeats: false)
        try? await center.add(UNNotificationRequest(identifier: id, content: content, trigger: trigger))
    }
}
