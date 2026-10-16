import Foundation
import UserNotifications

/// Brings Oyno forward from the paused-app screen before iOS 26.5, which has no shield action for it.
enum ParentApp {
    /// A notification that opens Oyno when tapped. Silent without notification permission.
    static func notify() async {
        let content = UNMutableNotificationContent()
        content.title = String(interface: "Open Oyno")
        content.body = String(interface: "Tap to pick tonight's game.")
        let request = UNNotificationRequest(identifier: "shield.open", content: content, trigger: nil)
        try? await UNUserNotificationCenter.current().add(request)
    }
}
