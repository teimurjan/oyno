import Foundation

/// `Notifications.json` as the phone reads it: the reminders from `push-notifications/en.md` in
/// the order the file gives them, which is their priority, and their words once per language,
/// written into the bundle by `bun run notifications:build`. Never edited by hand.
struct ReminderCatalogue: Decodable {
    let reminders: [Rule]
    let decks: [String: [String: [Words]]]

    struct Rule: Decodable, Equatable {
        let id: ReminderID
        let group: Group
        let tap: Tap
        /// Minutes after midnight for `at`, else days, minutes or moments as the rule reads them.
        let settings: [String: Int]

        func setting(_ key: String) -> Int { settings[key] ?? 0 }
    }

    /// The tab a tap on the reminder opens.
    enum Tap: String, Codable {
        case play, home
    }

    enum Group: String, Decodable {
        /// At most one a day, the first in the file winning the day.
        case reminders
        /// At every enabled schedule's start and end.
        case kidHours = "kid-hours"
    }

    struct Words: Decodable, Equatable {
        let title: String
        let body: String
    }

    /// A file that does not decode, or names a reminder this build does not know, is a build
    /// that skipped the generator, caught by `ReminderTests` before it ships.
    static let bundled: ReminderCatalogue = {
        guard let url = Bundle.main.url(forResource: "Notifications", withExtension: "json"),
              let data = try? Data(contentsOf: url),
              let catalogue = try? JSONDecoder().decode(ReminderCatalogue.self, from: data),
              catalogue.decks["en"] != nil
        else { preconditionFailure("Notifications.json is missing or stale — run `bun run notifications:build`") }
        return catalogue
    }()

    /// The versions of `id` in `language`, in English where there is no deck for it.
    func versions(of id: ReminderID, in language: String) -> [Words] {
        (decks[language] ?? decks["en"])?[id.rawValue] ?? []
    }

    func rule(_ id: ReminderID) -> Rule? { reminders.first { $0.id == id } }
}

/// Every reminder the planner knows how to time. `lib/notifications.ts` holds the same list.
enum ReminderID: String, CaseIterable, Codable {
    case letterAtRisk = "letter-at-risk"
    case letterReady = "letter-ready"
    case worldClose = "world-close"
    case firstRound = "first-round"
    case comeback
    case practiceMilestone = "practice-milestone"
    case keepsakeFirstMoment = "keepsake-first-moment"
    case keepsakesWaiting = "keepsakes-waiting"
    case lowEnergy = "low-energy"
    case kidHoursStart = "kid-hours-start"
    case kidHoursEnd = "kid-hours-end"
}
