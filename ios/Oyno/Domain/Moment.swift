import Foundation

/// The kinds of time together that grow the planet: a game from the deck, or an everyday moment
/// the family already has, timed with nudges.
enum MomentKind: String, CaseIterable, Codable, Identifiable {
    case game, reading, bath, cooking, lead

    var id: String { rawValue }

    /// The Activity menu's name for it.
    var label: String {
        switch self {
        case .game: String(interface: "Game")
        case .reading: String(interface: "Reading")
        case .bath: String(interface: "Bath")
        case .cooking: String(interface: "Cooking")
        case .lead: String(interface: "Their lead")
        }
    }

    /// The Activity menu's line under the name.
    var line: String {
        switch self {
        case .game: String(interface: "One easy game, dealt for you")
        case .reading: String(interface: "Any book, read together")
        case .bath: String(interface: "Make bath time count")
        case .cooking: String(interface: "One small job while you cook")
        case .lead: String(interface: "Phone down, they choose")
        }
    }

    var symbol: String {
        switch self {
        case .game: "star"
        case .reading: "book"
        case .bath: "bathtub"
        case .cooking: "frying.pan"
        case .lead: "eye"
        }
    }

    /// The painting in `Resources/Moments/`, shared by every age band.
    var paintingID: String? {
        switch self {
        case .game: nil
        case .reading: "read-together"
        case .bath: "bath-time"
        case .cooking: "cook-together"
        case .lead: "let-them-lead"
        }
    }
}

/// An everyday moment for one age band: an open timer with three nudges, cited like a game.
struct OpenMoment: Identifiable, Hashable {
    let id: String
    let kind: MomentKind
    let age: AgeBand
    let title: String
    let blurb: String
    /// One at a time on the timer, a sentence each.
    let nudges: [String]
    let skills: [Activity.Skill]
    let evidence: [Activity.Reference]
    /// The deck tag of the games "Or play …" offers instead.
    let gameTag: String?

    /// The moment of `kind` for `age`, nil where no source speaks to that band.
    static func find(_ kind: MomentKind, age: AgeBand) -> OpenMoment? {
        Activity.moments.first { $0.kind == kind && $0.age == age }
    }

    /// A game from the deck for the same routine, nil where the deck has none.
    var linkedGame: Activity? {
        guard let gameTag else { return nil }
        return Activity.all.first { $0.age == age && $0.tags.contains { $0.id == gameTag } }
    }
}
