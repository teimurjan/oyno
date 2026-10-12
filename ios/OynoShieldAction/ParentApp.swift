import Foundation
import UserNotifications

/// Brings Oyno forward from the paused-app screen, which Apple's shield API has no action for.
enum ParentApp {
    private static let bundleID = "com.teimurjan.oyno"

    /// Undocumented: `LSApplicationWorkspace` is private API, the review risk of this feature.
    /// The launch waits for the shield's answer, so it is sent without waiting for its reply.
    /// False when the class or the call is missing, so the caller falls back to `notify()`.
    static func open() -> Bool {
        guard let workspaceClass = NSClassFromString("LSApplicationWorkspace") as? NSObject.Type,
              let workspace = workspaceClass.perform(NSSelectorFromString("defaultWorkspace"))?
                .takeUnretainedValue() as? NSObject
        else { return false }
        let selector = NSSelectorFromString("openApplicationWithBundleID:")
        guard workspace.responds(to: selector) else { return false }
        typealias Open = @convention(c) (NSObject, Selector, NSString) -> Bool
        let open = unsafeBitCast(workspace.method(for: selector), to: Open.self)
        DispatchQueue.global(qos: .userInitiated).async {
            _ = open(workspace, selector, bundleID as NSString)
        }
        return true
    }

    /// A notification that opens Oyno when tapped. Silent without notification permission.
    static func notify() async {
        let content = UNMutableNotificationContent()
        content.title = String(interface: "Open Oyno")
        content.body = String(interface: "Tap to pick tonight's game.")
        let request = UNNotificationRequest(identifier: "shield.open", content: content, trigger: nil)
        try? await UNUserNotificationCenter.current().add(request)
    }
}
