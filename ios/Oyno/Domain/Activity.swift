import Foundation

/// How much a parent has left at the end of the day. Picks which game Oyno offers.
enum Energy: String, CaseIterable, Codable, Identifiable {
    case low, okay, full

    var id: String { rawValue }

    var label: String {
        switch self {
        case .low: String(interface: "Low")
        case .okay: String(interface: "Okay")
        case .full: String(interface: "Full")
        }
    }
}

/// One easy thing to play. A few steps, no equipment beyond what is in any living room.
struct Activity: Identifiable, Hashable {
    let id: String
    let energy: Energy
    let minutes: Int
    let title: String
    /// Who the game suits: the one line under the tags.
    let blurb: String
    let tags: [Tag]
    let steps: [String]

    /// A chip under the title. The id picks its icon; the label is in the interface language.
    struct Tag: Hashable {
        let id: String
        let label: String
    }

    /// The games for `energy`, in a stable order. `pick` rotates through them.
    static func catalogue(for energy: Energy) -> [Activity] {
        all.filter { $0.energy == energy }
    }

    /// The game after `current` for the same energy, wrapping around: "Different idea".
    static func pick(for energy: Energy, after current: Activity? = nil) -> Activity {
        let games = catalogue(for: energy)
        guard let current, let at = games.firstIndex(of: current) else { return games[0] }
        return games[(at + 1) % games.count]
    }

    static func find(_ id: String) -> Activity? { all.first { $0.id == id } }

    /// Every game, worded in the interface language.
    static let all: [Activity] = ActivityCatalogue.bundled.activities(in: InterfaceLanguage.current)
}

/// `Activities.json` as the phone reads it: `activities/en.json` for the games and their
/// English, `activities/<locale>.json` for the other words, written into the bundle by
/// `bun run activities:build`. Never edited by hand.
struct ActivityCatalogue: Decodable {
    let entries: [Entry]
    let decks: [String: Deck]

    /// A bundled file that does not decode, or a deck with a game unworded, is a build that
    /// skipped the generator or its check, caught by `ActivityTests` before it ships.
    static let bundled: ActivityCatalogue = {
        guard let url = Bundle.main.url(forResource: "Activities", withExtension: "json"),
              let data = try? Data(contentsOf: url),
              let catalogue = try? JSONDecoder().decode(ActivityCatalogue.self, from: data),
              catalogue.decks["en"] != nil, catalogue.isComplete
        else { preconditionFailure("Activities.json is missing or stale — run `bun run activities:build`") }
        return catalogue
    }()

    /// The games worded in `language`, in English where there is no deck for it.
    func activities(in language: String) -> [Activity] {
        let deck = decks[language] ?? decks["en"]!
        return entries.compactMap { entry in
            guard let words = deck.activities[entry.id] else { return nil }
            return Activity(
                id: entry.id, energy: entry.energy, minutes: entry.minutes, title: words.title, blurb: words.blurb,
                tags: entry.tags.compactMap { id in deck.tags[id].map { Activity.Tag(id: id, label: $0) } }, steps: words.steps
            )
        }
    }

    /// Every deck words every game and every tag: what `bun run activities:check` promises.
    private var isComplete: Bool {
        decks.values.allSatisfy { deck in
            entries.allSatisfy { entry in
                deck.activities[entry.id] != nil && entry.tags.allSatisfy { deck.tags[$0] != nil }
            }
        }
    }

    /// A game's shape, the same in every language.
    struct Entry: Decodable {
        let id: String
        let energy: Energy
        let minutes: Int
        let tags: [String]
    }

    /// One language's words, keyed by id.
    struct Deck: Decodable {
        let tags: [String: String]
        let activities: [String: Words]
    }

    struct Words: Decodable {
        let title: String
        let blurb: String
        let steps: [String]
    }

    private enum CodingKeys: String, CodingKey {
        case entries = "activities", decks
    }
}
