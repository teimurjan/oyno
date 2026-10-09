import Foundation

/// A world the family's planet can become, each its own painting (`Planet-<id>`). Mirrors
/// `WORLDS` in `lib/planet/scene.ts`, the same ids and thresholds, so the funnel's gallery and
/// the app's agree.
struct World: Identifiable, Hashable {
    let id: String
    /// The bloom level that unlocks it. One round together is one bloom.
    let unlocksAt: Int

    var imageName: String { "Planet-\(id)" }

    var name: String {
        switch id {
        case "meadow": String(interface: "Meadow")
        case "ember": String(interface: "Ember")
        case "blossom": String(interface: "Blossom")
        case "lagoon": String(interface: "Lagoon")
        case "dune": String(interface: "Dune")
        case "frost": String(interface: "Frost")
        case "lavender": String(interface: "Lavender")
        case "moss": String(interface: "Moss")
        case "honey": String(interface: "Honey")
        case "cloud": String(interface: "Cloud")
        case "coral": String(interface: "Coral")
        case "rose": String(interface: "Rose")
        case "pebble": String(interface: "Pebble")
        case "orchard": String(interface: "Orchard")
        case "aurora": String(interface: "Aurora")
        case "clay": String(interface: "Clay")
        case "mint": String(interface: "Mint")
        case "twilight": String(interface: "Twilight")
        case "poppy": String(interface: "Poppy")
        case "pearl": String(interface: "Pearl")
        case "canyon": String(interface: "Canyon")
        case "rain": String(interface: "Rain")
        case "cedar": String(interface: "Cedar")
        case "sunlit": String(interface: "Sunlit")
        case "berry": String(interface: "Berry")
        case "glacier": String(interface: "Glacier")
        case "marigold": String(interface: "Marigold")
        case "dream": String(interface: "Dream")
        case "hearth": String(interface: "Hearth")
        case "home": String(interface: "Home")
        default: String(interface: "Earth")
        }
    }

    func isUnlocked(at bloom: Int) -> Bool { bloom >= unlocksAt }

    /// Rounds from the world before to the `index`th: 3 for the first six, then one more per
    /// block of six, so Home, the thirtieth, opens at bloom 150.
    private static func roundsToReach(_ index: Int) -> Int { 3 + (index - 1) / 6 }

    static let all: [World] = [
        "earth", "meadow", "ember", "blossom", "lagoon", "dune", "frost", "lavender", "moss",
        "honey", "cloud", "coral", "rose", "pebble", "orchard", "aurora", "clay", "mint",
        "twilight", "poppy", "pearl", "canyon", "rain", "cedar", "sunlit", "berry", "glacier",
        "marigold", "dream", "hearth", "home"
    ].enumerated().map { index, id in
        World(id: id, unlocksAt: (0..<index).reduce(0) { $0 + roundsToReach($1 + 1) })
    }
}

/// How far the planet has grown. Never shrinks: a skipped day costs nothing.
enum Bloom {
    /// The world the family is on now: the last one unlocked.
    static func currentWorld(at bloom: Int) -> World {
        World.all.last { $0.isUnlocked(at: bloom) } ?? World.all[0]
    }

    /// The next world to unlock, nil once every world is open.
    static func nextWorld(after bloom: Int) -> World? {
        World.all.first { !$0.isUnlocked(at: bloom) }
    }

    static func roundsToNextWorld(from bloom: Int) -> Int? {
        nextWorld(after: bloom).map { $0.unlocksAt - bloom }
    }
}
