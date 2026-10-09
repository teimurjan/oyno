import FamilyControls
import Foundation
import ManagedSettings

/// Pauses and resumes the chosen apps. The shield is Screen Time's own "app paused" screen.
enum KidHoursShield {
    private static let store = ManagedSettingsStore(named: .init("kidHours"))

    /// Makes the phone match `settings` at `date`. Every boundary the monitor hears and every
    /// save goes through here: two schedules that meet at 7:30 fire an end and a start in no
    /// fixed order, and answering from the whole state makes the order moot.
    static func sync(_ settings: KidHoursSettings, at date: Date = .now) {
        if settings.isPaused(at: date) { apply(settings) } else { clear() }
    }

    static func clear() {
        store.clearAllSettings()
    }

    /// Always-open apps are taken out of the app list and excepted from the categories.
    private static func apply(_ settings: KidHoursSettings) {
        let open = settings.alwaysOpen.applicationTokens
        let apps = settings.selection.applicationTokens.subtracting(open)
        let categories = settings.selection.categoryTokens
        let domains = settings.selection.webDomainTokens
        store.shield.applications = apps.isEmpty ? nil : apps
        store.shield.applicationCategories = categories.isEmpty ? nil : .specific(categories, except: open)
        store.shield.webDomains = domains.isEmpty ? nil : domains
    }
}
