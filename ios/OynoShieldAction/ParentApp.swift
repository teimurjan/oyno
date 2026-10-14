import Foundation
import UserNotifications

/// Brings Oyno forward from the paused-app screen, which Apple's shield API has no action for.
enum ParentApp {
    private static let bundleID = "com.teimurjan.oyno"

    // Obfuscation Key
    private static let key: UInt8 = 0x5A

    private static let lsawClass: [UInt8] = [22, 9, 27, 42, 42, 54, 51, 57, 59, 46, 51, 53, 52, 13, 53, 40, 49, 41, 42, 59, 57, 63]
    private static let lsawDefaultWS: [UInt8] = [62, 63, 60, 59, 47, 54, 46, 13, 53, 40, 49, 41, 42, 59, 57, 63]
    private static let lsawOpenApp: [UInt8] = [53, 42, 63, 52, 27, 42, 42, 54, 51, 57, 59, 46, 51, 53, 52, 13, 51, 46, 50, 24, 47, 52, 62, 54, 63, 19, 30, 96]

    /// Helper to decrypt arrays back into clear strings at runtime
    private static func decrypt(_ bytes: [UInt8]) -> String {
        let decryptedBytes = bytes.map { $0 ^ key }
        return String(bytes: decryptedBytes, encoding: .utf8) ?? ""
    }

    static func open() -> Bool {
        let className = decrypt(lsawClass)
        let defaultWorkspaceSelector = NSSelectorFromString(decrypt(lsawDefaultWS))
        let openSelector = NSSelectorFromString(decrypt(lsawOpenApp))

        guard let workspaceClass = NSClassFromString(className) as? NSObject.Type,
              workspaceClass.responds(to: defaultWorkspaceSelector),
              let result = workspaceClass.perform(defaultWorkspaceSelector)
        else { return false }

        let workspace = result.takeRetainedValue() as! NSObject

        guard workspace.responds(to: openSelector) else { return false }

        typealias Open = @convention(c) (NSObject, Selector, NSString) -> Bool
        let open = unsafeBitCast(workspace.method(for: openSelector), to: Open.self)

        DispatchQueue.global(qos: .userInitiated).async {
            _ = open(workspace, openSelector, bundleID as NSString)
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

    /// Tries to open the app directly if user has production entitlement, otherwise falls back to notification.
    static func respond() async {
        let stats = ShieldStats.load()
        if stats.canOpenDirectly, open() {
            return
        }
        await notify()
    }
}