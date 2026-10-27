import SwiftUI

/// The newest keepsakes, resting around the planet in five fixed spots. Tonight's glows.
struct KeepsakeOrbit: View {
    /// The newest last, as the store keeps them.
    let keepsakes: [Keepsake]
    let tonight: Keepsake?

    /// Centres, as fractions of the planet's stage: two either side, and one low beside the
    /// world's caption, which holds the middle of the foot.
    private static let spots: [UnitPoint] = [
        UnitPoint(x: 0.08, y: 0.76), UnitPoint(x: 0.9, y: 0.32), UnitPoint(x: 0.1, y: 0.38),
        UnitPoint(x: 0.92, y: 0.7), UnitPoint(x: 0.86, y: 0.9),
    ]

    var body: some View {
        GeometryReader { geometry in
            let side = min(44, geometry.size.width * 0.17)
            ForEach(placed, id: \.keepsake.id) { item in
                KeepsakeArt(keepsake: item.keepsake, side: side, glowing: item.keepsake == tonight)
                    .position(x: item.spot.x * geometry.size.width, y: item.spot.y * geometry.size.height)
            }
        }
        .allowsHitTesting(false)
        .accessibilityElement(children: .combine)
    }

    /// Tonight's takes the low spot by the caption; the newest others fill the rest, newest first.
    private var placed: [(keepsake: Keepsake, spot: UnitPoint)] {
        let others = keepsakes.filter { $0 != tonight }.suffix(Self.spots.count - (tonight == nil ? 0 : 1)).reversed()
        let around = zip(others, Self.spots).map { (keepsake: $0, spot: $1) }
        guard let tonight else { return around }
        return around + [(keepsake: tonight, spot: Self.spots[4])]
    }
}
