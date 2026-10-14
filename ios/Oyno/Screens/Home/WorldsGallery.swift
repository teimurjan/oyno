import SwiftUI

/// One world in `PlanetScene`'s strip: a whole stage, wider than its slide, so the centred
/// planet sits where the scene's planet rests and the neighbours peek in at the edges. At
/// rest only the current world shows, and it carries the family. Open, every world shows its
/// place in the strip and says whether it is the family's, or the bloom level that opens it.
struct WorldSlide: View {
    let world: World
    let points: Int
    let stage: CGSize
    let open: Bool
    let scale: CGFloat
    var pressedAt: CGPoint?

    private var locked: Bool { !world.isUnlocked(at: points) }
    private var isHome: Bool { world == Bloom.currentWorld(at: points) }

    var body: some View {
        PlanetBody(
            world: world,
            width: stage.width,
            locked: locked,
            showsFamily: isHome,
            planetShift: PlanetLayout.offset(PlanetLayout.planet, pressedAt: pressedAt, in: stage),
            familyShift: PlanetLayout.offset(PlanetLayout.family, pressedAt: pressedAt, in: stage)
        )
        .scaleEffect(scale, anchor: PlanetLayout.bodyAnchor)
        .opacity(open || isHome ? 1 : 0)
        .scrollTransition { content, phase in
            content.opacity(phase.isIdentity || !open ? 1 : 0.5)
        }
        .overlay(alignment: .top) {
            VStack(spacing: 2) {
                Text(verbatim: world.place)
                    .oynoEyebrow()
                    .monospacedDigit()
                Text(world.name)
                    .font(Typeface.ui(16, .extrabold, relativeTo: .headline))
                    .foregroundStyle(Palette.ink)
                Text(world.status(at: points))
                    .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
            }
            .padding(.top, stage.height * 0.06)
            .opacity(open ? 1 : 0)
            .scrollTransition { content, phase in
                content.opacity(phase.isIdentity ? 1 : 0)
            }
        }
    }
}

extension World {
    /// "World 2 of 31".
    var place: String { String(interface: "World \(level) of \(World.all.count)") }

    /// Whether it is the family's, or the bloom level that opens it.
    func status(at points: Int) -> String {
        if isUnlocked(at: points) {
            return self == Bloom.currentWorld(at: points) ? String(interface: "Yours now") : String(interface: "Unlocked")
        }
        return String(interface: "Unlocks at bloom \(level)")
    }
}
