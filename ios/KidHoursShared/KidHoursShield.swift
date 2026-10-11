import FamilyControls
import Foundation
import ManagedSettings

/// Pauses and resumes the chosen apps. The shield is Screen Time's own "app paused" screen.
///
/// Two stores, so an unlock that clears Kid hours never opens a Never allowed app: Screen Time
/// applies the strictest of all stores.
enum KidHoursShield {
    private static let kidHours = ManagedSettingsStore(named: .init("kidHours"))
    private static let neverAllowed = ManagedSettingsStore(named: .init("neverAllowed"))

    /// Makes the phone match `settings` at `date`. Every boundary the monitor hears and every
    /// save goes through here: two schedules that meet at 7:30 fire an end and a start in no
    /// fixed order, and answering from the whole state makes the order moot.
    static func sync(_ settings: KidHoursSettings, at date: Date = .now) {
        let allowed = settings.alwaysAllowed.applicationTokens
        apply(settings.neverAllowed, except: allowed, to: neverAllowed)
        apply(settings.pausedApps(at: date) ?? FamilyActivitySelection(), except: allowed, to: kidHours)
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
