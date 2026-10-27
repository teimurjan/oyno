import Foundation

/// An object a moment leaves on the planet, for good. Each kind of moment leaves its own, and a
/// few are rare. The list is `Keepsakes.generated.swift`, written from `art/keepsakes.json`.
struct Keepsake: Identifiable, Hashable {
    let id: String
    let kind: Kind
    let name: LocalizedStringResource
    /// "A kite washed up": the line that announces it.
    let arrival: LocalizedStringResource

    enum Kind: String, Hashable {
        case game, reading, bath, cooking, lead, rare

        init(_ moment: MomentKind) {
            switch moment {
            case .game: self = .game
            case .reading: self = .reading
            case .bath: self = .bath
            case .cooking: self = .cooking
            case .lead: self = .lead
            }
        }
    }

    static func == (lhs: Keepsake, rhs: Keepsake) -> Bool { lhs.id == rhs.id }
    func hash(into hasher: inout Hasher) { hasher.combine(id) }

    var isRare: Bool { kind == .rare }

    static func find(_ id: String) -> Keepsake? { all.first { $0.id == id } }

    /// About one moment in four leaves one.
    static let dropChance = 0.25
    /// Of those, one in eight is rare.
    static let rareChance = 0.125

    /// What a moment of `kind` leaves, given what the family has `found`: the first moment of
    /// each kind always leaves one, the rest by chance. Never a repeat, and a kind that has left
    /// all of its own falls through to the rare ones. `roll` returns a number in 0..<1.
    static func award(for kind: MomentKind, found: Set<String>, roll: () -> Double) -> Keepsake? {
        let own = Kind(kind)
        let missing = all.filter { !found.contains($0.id) }
        let ownMissing = missing.filter { $0.kind == own }
        let rareMissing = missing.filter(\.isRare)
        let isFirstOfKind = !all.contains { $0.kind == own && found.contains($0.id) }
        guard isFirstOfKind || roll() < dropChance else { return nil }
        let pool = (!isFirstOfKind && roll() < rareChance) || ownMissing.isEmpty ? rareMissing : ownMissing
        guard !pool.isEmpty else { return nil }
        return pool[min(pool.count - 1, Int(roll() * Double(pool.count)))]
    }
}
