import Observation

/// What Play offers now: the kind of moment picked, the game dealt for the age and energy, and
/// the minutes an everyday moment runs. One for the app, so Home's card and Play show the same.
@MainActor
@Observable
final class Dealer {
    var kind = MomentKind.game
    private(set) var game: Activity
    var momentMinutes = 15

    /// The lengths an everyday moment can run.
    static let lengths = [10, 15, 20]

    init(game: Activity? = nil) {
        self.game = game ?? Activity.pick(for: .low, age: .toddler)
    }

    /// A new random game only when the one dealt no longer fits, so a tab switch keeps it.
    func dealIfStale(energy: Energy, age: AgeBand) {
        guard game.energy != energy || game.age != age else { return }
        game = Activity.pick(for: energy, age: age)
    }

    /// "Different idea".
    func dealAnother() { game = Activity.next(after: game) }

    /// A game picked in search or found for a skill: it becomes the one dealt.
    func show(_ picked: Activity) {
        kind = .game
        game = picked
    }

    /// The everyday moment of the picked kind for `age`, nil for a game or a band with none.
    func moment(age: AgeBand) -> OpenMoment? {
        kind == .game ? nil : OpenMoment.find(kind, age: age)
    }

    /// What Start runs.
    func session(age: AgeBand) -> Session {
        moment(age: age).map { .moment($0, minutes: momentMinutes) } ?? .game(game)
    }
}
