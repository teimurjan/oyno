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

/// One easy thing to play. Three steps, no equipment beyond what is in any living room.
struct Activity: Identifiable, Hashable {
    let id: String
    let energy: Energy
    let minutes: Int
    let title: String
    let tags: [String]
    let steps: [String]

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

    static let all: [Activity] = [
        Activity(
            id: "human-mountain", energy: .low, minutes: 10,
            title: String(interface: "Human Mountain"),
            tags: [String(interface: "Nothing to grab"), String(interface: "Lying down")],
            steps: [
                String(interface: "Lie on your back on the rug. You're a sleeping mountain."),
                String(interface: "Your kid climbs. Narrate the expedition in a whisper."),
                String(interface: "At the summit, the mountain rumbles. Repeat."),
            ]
        ),
        Activity(
            id: "sleepy-lion", energy: .low, minutes: 10,
            title: String(interface: "Sleepy Lion"),
            tags: [String(interface: "Nothing to grab"), String(interface: "Lying down")],
            steps: [
                String(interface: "You're a lion asleep on the sofa. Snore loudly."),
                String(interface: "Your kid sneaks up. If you hear a sound, open one eye."),
                String(interface: "When they touch your paw, wake up roaring. Swap roles."),
            ]
        ),
        Activity(
            id: "story-stones", energy: .low, minutes: 10,
            title: String(interface: "Three-Word Story"),
            tags: [String(interface: "Sitting"), String(interface: "Quiet")],
            steps: [
                String(interface: "Take turns adding three words to a story."),
                String(interface: "Every story starts with \"Once, a tiny dragon…\"."),
                String(interface: "The last turn has to end it. Then start a new one."),
            ]
        ),
        Activity(
            id: "sock-hunt", energy: .okay, minutes: 10,
            title: String(interface: "Sock Hunt"),
            tags: [String(interface: "One room"), String(interface: "Socks")],
            steps: [
                String(interface: "Hide five rolled-up socks while your kid counts to twenty."),
                String(interface: "Say \"warm\" or \"cold\" as they search."),
                String(interface: "Swap: now they hide, you hunt."),
            ]
        ),
        Activity(
            id: "mirror", energy: .okay, minutes: 10,
            title: String(interface: "Mirror, Mirror"),
            tags: [String(interface: "Standing"), String(interface: "Nothing to grab")],
            steps: [
                String(interface: "Face each other. Your kid moves, you copy, slowly."),
                String(interface: "Make it harder: faces, then sounds, then silly walks."),
                String(interface: "Swap who leads every two minutes."),
            ]
        ),
        Activity(
            id: "pillow-island", energy: .okay, minutes: 10,
            title: String(interface: "Pillow Islands"),
            tags: [String(interface: "Cushions"), String(interface: "One room")],
            steps: [
                String(interface: "Scatter cushions on the floor. The floor is the sea."),
                String(interface: "Cross the room without touching the water."),
                String(interface: "Every round, take one island away."),
            ]
        ),
        Activity(
            id: "freeze-dance", energy: .full, minutes: 10,
            title: String(interface: "Freeze Dance"),
            tags: [String(interface: "Music"), String(interface: "Standing")],
            steps: [
                String(interface: "Put on one song. Dance as wildly as you can."),
                String(interface: "Whoever is in charge shouts \"Freeze!\" at any moment."),
                String(interface: "Anyone who wobbles is in charge next."),
            ]
        ),
        Activity(
            id: "animal-race", energy: .full, minutes: 10,
            title: String(interface: "Animal Race"),
            tags: [String(interface: "Hallway"), String(interface: "Nothing to grab")],
            steps: [
                String(interface: "Race down the hallway as a crab."),
                String(interface: "Back as a frog. Then a bear. Then a snake."),
                String(interface: "The winner picks the next animal."),
            ]
        ),
        Activity(
            id: "obstacle", energy: .full, minutes: 10,
            title: String(interface: "Living-Room Obstacle Course"),
            tags: [String(interface: "Cushions"), String(interface: "Chairs")],
            steps: [
                String(interface: "Build a course: under a chair, over a cushion, around the table."),
                String(interface: "Time your kid with a slow count out loud."),
                String(interface: "They change one obstacle, then time you."),
            ]
        ),
    ]
}
