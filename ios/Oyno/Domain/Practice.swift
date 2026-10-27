import Foundation

/// What the family practiced, skill by skill. Not a score: minutes together, counted to every
/// skill the moment exercises.
struct Practice: Equatable {
    let skill: String
    let minutes: Int
    /// The kinds of moment that fed it most, at most two.
    let mostlyFrom: [MomentKind]

    /// The four skills, the most practiced first. `skills` resolves a round to the skills it
    /// exercised, so rounds saved before they carried skills still count.
    static func bySkill(_ rounds: [Round], skills: (Round) -> [String]) -> [Practice] {
        var minutes: [String: Int] = [:]
        var byKind: [String: [MomentKind: Int]] = [:]
        for round in rounds {
            for skill in skills(round) {
                minutes[skill, default: 0] += round.minutes
                byKind[skill, default: [:]][round.kind, default: 0] += round.minutes
            }
        }
        return order.map { skill in
            let kinds = (byKind[skill] ?? [:]).sorted { $0.value == $1.value ? $0.key.rawValue < $1.key.rawValue : $0.value > $1.value }
            return Practice(skill: skill, minutes: minutes[skill] ?? 0, mostlyFrom: kinds.prefix(2).map(\.key))
        }
        .sorted { $0.minutes == $1.minutes ? order.firstIndex(of: $0.skill)! < order.firstIndex(of: $1.skill)! : $0.minutes > $1.minutes }
    }

    /// The order the catalogue lists them in, which breaks ties.
    static let order = ["inhibitory-control", "attention", "working-memory", "cognitive-flexibility"]
}
