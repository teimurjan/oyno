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

/// How old the kid is. Picks which games Oyno offers, with the energy.
enum AgeBand: String, CaseIterable, Codable, Identifiable {
    case baby = "0-1"
    case toddler = "1-3"
    case preschooler = "3-5"

    var id: String { rawValue }

    /// The years, as the picker shows them.
    var label: String {
        switch self {
        case .baby: String(interface: "0–1")
        case .toddler: String(interface: "1–3")
        case .preschooler: String(interface: "3–5")
        }
    }
}

/// One easy thing to play. A few steps, no equipment beyond what is in any living room.
struct Activity: Identifiable, Hashable {
    let id: String
    let age: AgeBand
    let energy: Energy
    let minutes: Int
    let title: String
    /// Who the game suits: the one line under the tags.
    let blurb: String
    let tags: [Tag]
    let steps: [String]
    /// The executive functions the game exercises, worded in the interface language.
    let skills: [Skill]
    /// The studies and guides the game leans on.
    let evidence: [Reference]

    /// A chip under the title. The id picks its icon; the label is in the interface language.
    struct Tag: Hashable {
        let id: String
        let label: String
    }

    /// A chip under "Why it works". The id picks its icon; the label is in the interface language.
    struct Skill: Hashable {
        let id: String
        let label: String
    }

    /// A study or a guide, as the bibliography in `activities/en.json` cites it.
    struct Reference: Hashable, Decodable {
        /// "Tominey & McClelland, 2011": what the phone shows.
        let short: String
        let title: String
        /// The journal and issue, or the institution.
        let published: String
        let year: Int
        let url: URL
    }

    /// The games for `energy` and `age`, in a stable order.
    static func catalogue(for energy: Energy, age: AgeBand) -> [Activity] {
        all.filter { $0.energy == energy && $0.age == age }
    }

    /// A random game for `energy` and `age`, so an evening never starts where the last one did.
    static func pick(for energy: Energy, age: AgeBand) -> Activity {
        catalogue(for: energy, age: age).randomElement()!
    }

    /// Another random game for the same energy and age, never `current`: "Different idea".
    static func next(after current: Activity) -> Activity {
        let others = catalogue(for: current.energy, age: current.age).filter { $0 != current }
        return others.randomElement() ?? current
    }

    static func find(_ id: String) -> Activity? { all.first { $0.id == id } }

    /// Every game, worded in the interface language.
    static let all: [Activity] = ActivityCatalogue.bundled.activities(in: InterfaceLanguage.current)
}

/// `Activities.json` as the phone reads it: `activities/en.json` for the games, the
/// bibliography and their English, `activities/<locale>.json` for the other words, written
/// into the bundle by `bun run activities:build`. Never edited by hand.
struct ActivityCatalogue: Decodable {
    let entries: [Entry]
    let sources: [String: Activity.Reference]
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
                id: entry.id, age: entry.age, energy: entry.energy, minutes: entry.minutes, title: words.title,
                blurb: words.blurb,
                tags: entry.tags.compactMap { id in deck.tags[id].map { Activity.Tag(id: id, label: $0) } },
                steps: words.steps,
                skills: entry.skills.compactMap { id in deck.skills[id].map { Activity.Skill(id: id, label: $0) } },
                evidence: entry.evidence.compactMap { sources[$0] }
            )
        }
    }

    /// Every deck words every game, tag and skill, and every citation is in the bibliography:
    /// what `bun run activities:check` promises.
    private var isComplete: Bool {
        entries.allSatisfy { entry in entry.evidence.allSatisfy { sources[$0] != nil } }
            && decks.values.allSatisfy { deck in
                entries.allSatisfy { entry in
                    deck.activities[entry.id] != nil
                        && entry.tags.allSatisfy { deck.tags[$0] != nil }
                        && entry.skills.allSatisfy { deck.skills[$0] != nil }
                }
            }
    }

    /// A game's shape, the same in every language.
    struct Entry: Decodable {
        let id: String
        let age: AgeBand
        let energy: Energy
        let minutes: Int
        let tags: [String]
        let skills: [String]
        let evidence: [String]
    }

    /// One language's words, keyed by id.
    struct Deck: Decodable {
        let tags: [String: String]
        let skills: [String: String]
        let activities: [String: Words]
    }

    struct Words: Decodable {
        let title: String
        let blurb: String
        let steps: [String]
    }

    private enum CodingKeys: String, CodingKey {
        case entries = "activities", sources, decks
    }
}
