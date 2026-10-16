import Foundation

/// Asks Oyno to open on Play after a paused app's "Open Oyno", across the App Group.
enum ShieldRoute {
    private static let key = "shield.openPlay"

    static func requestPlay() {
        UserDefaults(suiteName: KidHoursSettings.appGroup)?.set(true, forKey: key)
    }

    /// True once per request: reading it clears it.
    static func takePlay() -> Bool {
        guard let defaults = UserDefaults(suiteName: KidHoursSettings.appGroup),
              defaults.bool(forKey: key)
        else { return false }
        defaults.removeObject(forKey: key)
        return true
    }
}
