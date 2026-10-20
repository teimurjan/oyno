import ActivityKit
import Foundation
import UserNotifications

/// The round outside the app: its countdown on the Lock Screen and in the Dynamic Island, and
/// the chime when it runs out while the phone is down. Best effort, like `TrialReminder`: Live
/// Activities or notifications turned off leave the round on screen exactly as it was.
@MainActor
enum RoundLive {
    private static let reminderID = "round.end"
    private static var reminding: Task<Void, Never>?
    /// Held rather than looked up: `Activity.activities` lags a request, and a second request
    /// made in that gap starts a twin the updates never reach.
    private static var current: ActivityKit.Activity<RoundAttributes>?

    /// Starts the activity, or moves it to the countdown's new state.
    static func show(title: String, countdown: Countdown, chimes: Bool) {
        let content = ActivityContent(
            state: RoundAttributes.ContentState(countdown),
            staleDate: countdown.isPaused ? nil : countdown.endsAt
        )
        if let current {
            Task { await current.update(content) }
        } else if ActivityAuthorizationInfo().areActivitiesEnabled {
            current = try? ActivityKit.Activity.request(attributes: RoundAttributes(title: title), content: content)
        }
        remind(title: title, at: countdown.isPaused ? nil : countdown.endsAt, chimes: chimes)
    }

    /// Also run at launch, for a round the system cut short with the app.
    static func end() {
        forgetReminder()
        let ending = [current].compactMap { $0 } + ActivityKit.Activity<RoundAttributes>.activities
        current = nil
        for activity in ending {
            Task { await activity.end(nil, dismissalPolicy: .immediate) }
        }
    }

    /// One pending notification at most, for the end the countdown has now.
    private static func remind(title: String, at end: Date?, chimes: Bool) {
        forgetReminder()
        guard let end, end.timeIntervalSinceNow > 0 else { return }
        reminding = Task {
            let center = UNUserNotificationCenter.current()
            guard (try? await center.requestAuthorization(options: [.alert, .sound])) == true,
                  !Task.isCancelled else { return }
            let content = UNMutableNotificationContent()
            content.title = title
            content.body = String(interface: "Time's up. How did it go?")
            content.sound = chimes ? UNNotificationSound(named: UNNotificationSoundName("Chime.wav")) : .default
            let trigger = UNTimeIntervalNotificationTrigger(timeInterval: max(1, end.timeIntervalSinceNow), repeats: false)
            try? await center.add(UNNotificationRequest(identifier: reminderID, content: content, trigger: trigger))
        }
    }

    private static func forgetReminder() {
        reminding?.cancel()
        UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: [reminderID])
    }
}
