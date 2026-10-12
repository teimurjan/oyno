import FamilyControls
import Foundation
import ManagedSettings

/// Pauses and resumes the chosen apps. The shield is Screen Time's own "app paused" screen.
enum KidHoursShield {
    private static let kidHours = ManagedSettingsStore(named: .init("kidHours"))
    /// Never allowed used to pause around the clock from here. Cleared so no shield is left behind.
    private static let legacyNeverAllowed = ManagedSettingsStore(named: .init("neverAllowed"))

    /// Makes the phone match `settings` at `date`. Every boundary the monitor hears and every
    /// save goes through here: two schedules that meet at 7:30 fire an end and a start in no
    /// fixed order, and answering from the whole state makes the order moot.
    static func sync(_ settings: KidHoursSettings, at date: Date = .now) {
        legacyNeverAllowed.clearAllSettings()
        apply(settings.pausedApps(at: date) ?? FamilyActivitySelection(), except: settings.alwaysAllowed.applicationTokens, to: kidHours)
    }

    /// Always-allowed apps are taken out of the app list and excepted from the categories.
    private static func apply(_ selection: FamilyActivitySelection, except allowed: Set<ApplicationToken>, to store: ManagedSettingsStore) {
        guard !selection.isEmpty else { return store.clearAllSettings() }
        let apps = selection.applicationTokens.subtracting(allowed)
        let categories = selection.categoryTokens
        let domains = selection.webDomainTokens
        store.shield.applications = apps.isEmpty ? nil : apps
        store.shield.applicationCategories = categories.isEmpty ? nil : .specific(categories, except: allowed)
        store.shield.webDomains = domains.isEmpty ? nil : domains
    }
}
