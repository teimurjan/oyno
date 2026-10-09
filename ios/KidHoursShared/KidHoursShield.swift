import FamilyControls
import ManagedSettings

/// Pauses and resumes the chosen apps. The shield is Screen Time's own "app paused" screen.
enum KidHoursShield {
    private static let store = ManagedSettingsStore(named: .init("kidHours"))

    static func apply(_ selection: FamilyActivitySelection) {
        store.shield.applications = selection.applicationTokens.isEmpty ? nil : selection.applicationTokens
        store.shield.applicationCategories = selection.categoryTokens.isEmpty
            ? nil
            : .specific(selection.categoryTokens)
        store.shield.webDomains = selection.webDomainTokens.isEmpty ? nil : selection.webDomainTokens
    }

    static func clear() {
        store.clearAllSettings()
    }
}
