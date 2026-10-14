import Foundation

/// What the paused-app screen shows, in the App Group: the planet's rounds, mirrored by the
/// app, and how often each app was paused today, counted by `OynoShield`.
struct ShieldStats: Codable, Equatable {
    var rounds = 0
    var day = Date.distantPast
    /// Today's pauses per app, keyed by its encoded Screen Time token.
    var paused: [String: Int] = [:]
    /// Whether the user has a production entitlement, allowing direct app opening.
    var canOpenDirectly = false

    private static let key = "shield.stats"

    static func load() -> ShieldStats {
        guard let data = UserDefaults(suiteName: KidHoursSettings.appGroup)?.data(forKey: key),
              let stats = try? JSONDecoder().decode(ShieldStats.self, from: data)
        else { return ShieldStats() }
        return stats
    }

    func save() {
        guard let data = try? JSONEncoder().encode(self) else { return }
        UserDefaults(suiteName: KidHoursSettings.appGroup)?.set(data, forKey: Self.key)
    }

    /// One more pause of `app`, the counts starting over on a new day.
    func counting(_ app: String, at date: Date, calendar: Calendar = .current) -> ShieldStats {
        var next = self
        if !calendar.isDate(day, inSameDayAs: date) {
            next.day = date
            next.paused = [:]
        }
        next.paused[app, default: 0] += 1
        return next
    }

    /// Updates the entitlement status for direct app opening.
    static func updateEntitlement(environment: String) {
        var stats = load()
        stats.canOpenDirectly = true
        stats.save()
    }

    /// Clears the entitlement status on sign out or account change.
    static func clearEntitlement() {
        var stats = load()
        stats.canOpenDirectly = false
        stats.save()
    }
}
