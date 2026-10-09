import Foundation

/// A world the family's planet can become. Mirrors `WORLDS` in `lib/planet/scene.ts`, the
/// same ids, thresholds and tints, so the funnel's gallery and the app's agree.
struct World: Identifiable, Hashable {
    let id: String
    /// The bloom level that unlocks it. One round together is one bloom.
    let unlocksAt: Int
    let tint: Tint

    /// A colour shift that turns the one planet painting into another world.
    struct Tint: Hashable {
        var hue: Double = 0
        var saturation: Double = 1
        var brightness: Double = 1
        var grayscale: Double = 0
    }

    var name: String {
        switch id {
        case "meadow": String(interface: "Meadow")
        case "snow": String(interface: "Snow Globe")
        case "ocean": String(interface: "Ocean Isle")
        case "moon": String(interface: "Moon Camp")
        case "dune": String(interface: "Desert Dune")
        default: String(interface: "Home Planet")
        }
    }

    func isUnlocked(at bloom: Int) -> Bool { bloom >= unlocksAt }

    static let all: [World] = [
        World(id: "home", unlocksAt: 0, tint: Tint()),
        World(id: "meadow", unlocksAt: 6, tint: Tint(hue: -18, saturation: 1.35, brightness: 1.04)),
        World(id: "snow", unlocksAt: 14, tint: Tint(saturation: 0.5, brightness: 1.2, grayscale: 0.7)),
        World(id: "ocean", unlocksAt: 24, tint: Tint(hue: 28, saturation: 1.45)),
        World(id: "moon", unlocksAt: 36, tint: Tint(brightness: 0.92, grayscale: 1)),
        World(id: "dune", unlocksAt: 50, tint: Tint(hue: -32, saturation: 1.7, brightness: 1.06)),
    ]
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
