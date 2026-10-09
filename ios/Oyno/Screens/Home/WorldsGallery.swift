import SwiftUI

/// The worlds the family's planet can become, in a strip that scrolls sideways and snaps.
/// The centred card is full size; its neighbours shrink and fade. The current world carries
/// the family; the next one says how many rounds are left.
struct WorldsGallery: View {
    let bloom: Int
    let onClose: () -> Void

    @State private var position: String?

    var body: some View {
        ZStack(alignment: .topTrailing) {
            GeometryReader { geometry in
                ScrollView(.horizontal) {
                    LazyHStack(spacing: 0) {
                        ForEach(World.all) { world in
                            WorldCard(world: world, bloom: bloom)
                                .frame(width: geometry.size.width * 0.64)
                                .scrollTransition { content, phase in
                                    content
                                        .scaleEffect(phase.isIdentity ? 1 : 0.8)
                                        .opacity(phase.isIdentity ? 1 : 0.5)
                                }
                        }
                    }
                    .scrollTargetLayout()
                    .frame(maxHeight: .infinity)
                }
                .contentMargins(.horizontal, geometry.size.width * 0.18, for: .scrollContent)
                .scrollTargetBehavior(.viewAligned)
                .scrollIndicators(.hidden)
                .scrollPosition(id: $position, anchor: .center)
            }

            Button {
                Haptics.tap()
                onClose()
            } label: {
                Image(systemName: "xmark")
                    .font(.system(size: 15, weight: .bold))
                    .foregroundStyle(Palette.ink)
                    .frame(width: Metric.tapTarget, height: Metric.tapTarget)
                    .glassCard(radius: Metric.tapTarget / 2)
            }
            .buttonStyle(.plain)
            .accessibilityLabel(Text("Close worlds"))
        }
        .transition(.opacity.combined(with: .scale(scale: 0.92)))
        .onAppear { position = Bloom.currentWorld(at: bloom).id }
        // A tick per world snapped to, not for the first placement.
        .onChange(of: position) { previous, id in
            if previous != nil, id != nil { Haptics.tap() }
        }
    }
}

private struct WorldCard: View {
    let world: World
    let bloom: Int

    private var locked: Bool { !world.isUnlocked(at: bloom) }
    private var isHome: Bool { world == Bloom.currentWorld(at: bloom) }

    var body: some View {
        VStack(spacing: 6) {
            GeometryReader { geometry in
                let side = geometry.size.width
                // The same proportions as the stage: the family stands on the planet.
                let unit = 0.56 / PlanetLayout.planet.width
                let top = 0.04 - PlanetLayout.family.y * unit
                ZStack(alignment: .topLeading) {
                    tinted(Image("Planet").resizable().scaledToFit())
                        .frame(width: side * 0.56)
                        .offset(x: side * 0.22, y: side * (top + PlanetLayout.planet.y * unit))
                    if isHome {
                        Image("Family")
                            .resizable()
                            .scaledToFit()
                            .frame(width: side * PlanetLayout.family.width * unit)
                            .offset(
                                x: side * (1 - PlanetLayout.family.width * unit) / 2,
                                y: side * (top + PlanetLayout.family.y * unit)
                            )
                    }
                }
            }
            .aspectRatio(1, contentMode: .fit)
            .accessibilityHidden(true)

            Text(world.name)
                .font(Typeface.ui(16, .extrabold, relativeTo: .headline))
                .foregroundStyle(Palette.ink)
            Text(caption)
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .accessibilityElement(children: .combine)
    }

    private var caption: String {
        if !locked { return isHome ? String(interface: "Yours now") : String(interface: "Unlocked") }
        let left = world.unlocksAt - bloom
        if world == Bloom.nextWorld(after: bloom) {
            return left == 1 ? String(interface: "1 more round") : String(interface: "\(left) more rounds")
        }
        return String(interface: "Unlocks at bloom \(world.unlocksAt)")
    }

    private func tinted(_ image: some View) -> some View {
        let tint = world.tint
        return image
            .hueRotation(.degrees(tint.hue))
            .saturation(tint.saturation * (locked ? 0.55 : 1))
            .brightness((tint.brightness - 1) * 0.6)
            .grayscale(tint.grayscale)
            .opacity(locked ? 0.7 : 1)
    }
}
