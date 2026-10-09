import DeviceActivity
import FamilyControls
import Foundation

/// What the parent chose, in the App Group both the app and `OynoMonitor` read. The apps are
/// Screen Time's opaque tokens: neither process ever learns their names.
struct KidHoursSettings: Codable {
    var selection = FamilyActivitySelection()
    var schedule = KidHoursSchedule.afterWork
    var isEnabled = false

    static let appGroup = "group.com.teimurjan.oyno"
    private static let key = "kidHours.settings"

    static func load() -> KidHoursSettings {
        guard let data = UserDefaults(suiteName: appGroup)?.data(forKey: key),
              let settings = try? JSONDecoder().decode(KidHoursSettings.self, from: data)
        else { return KidHoursSettings() }
        return settings
    }

    func save() {
        guard let data = try? JSONEncoder().encode(self) else { return }
        UserDefaults(suiteName: Self.appGroup)?.set(data, forKey: Self.key)
    }

    var pausedCount: Int {
        selection.applicationTokens.count + selection.categoryTokens.count + selection.webDomainTokens.count
    }
}

extension DeviceActivityName {
    /// One per weekday, because a schedule repeats on one set of components.
    static func kidHours(weekday: Int) -> DeviceActivityName { DeviceActivityName("kidHours.\(weekday)") }
    /// The 20 minutes the parent's apps are open in the middle of Kid hours.
    static let kidHoursBreak = DeviceActivityName("kidHours.break")

    var isKidHours: Bool { rawValue.hasPrefix("kidHours.") && self != .kidHoursBreak }
}
