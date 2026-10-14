import Foundation

/// A world the family's planet can become, each its own painting (`Planet-<id>`). Mirrors
/// `WORLDS` in `lib/planet/scene.ts`, the same ids and thresholds, so the funnel's gallery and
/// the app's agree.
struct World: Identifiable, Hashable {
    let id: String
    /// The bloom points that unlock it.
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

    /// The bloom level it stands for: its place in the list, from 1.
    var level: Int { (World.all.firstIndex(of: self) ?? 0) + 1 }

    func isUnlocked(at points: Int) -> Bool { points >= unlocksAt }

    /// Points from the world before to the `index`th: 50, then 10 more for each world after,
    /// so Home, the thirtieth, opens at 5,850.
    private static func pointsToReach(_ index: Int) -> Int { 50 + 10 * (index - 1) }

    static let all: [World] = [
        "earth", "meadow", "ember", "blossom", "lagoon", "dune", "frost", "lavender", "moss",
        "honey", "cloud", "coral", "rose", "pebble", "orchard", "aurora", "clay", "mint",
        "twilight", "poppy", "pearl", "canyon", "rain", "cedar", "sunlit", "berry", "glacier",
        "marigold", "dream", "hearth", "home"
    ].enumerated().map { index, id in
        World(id: id, unlocksAt: (0..<index).reduce(0) { $0 + pointsToReach($1 + 1) })
    }
}

/// How far the planet has grown, in points: 10 a round and 1 a minute played. Never shrinks:
/// a skipped day costs nothing. The family sees the level, the number of the world it is on.
enum Bloom {
    static let pointsPerRound = 10

    static func points(rounds: Int, minutes: Int) -> Int { rounds * pointsPerRound + minutes }

    /// The world the family is on now: the last one unlocked.
    static func currentWorld(at points: Int) -> World {
        World.all.last { $0.isUnlocked(at: points) } ?? World.all[0]
    }

    static func level(at points: Int) -> Int { currentWorld(at: points).level }

    /// The next world to unlock, nil once every world is open.
    static func nextWorld(after points: Int) -> World? {
        World.all.first { !$0.isUnlocked(at: points) }
    }
}
