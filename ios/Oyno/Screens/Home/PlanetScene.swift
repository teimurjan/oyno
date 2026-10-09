import SwiftUI

/// Where each layer sits, in stage widths, and how it moves. The same numbers as
/// `lib/planet/scene.ts`, so the app, the landing page and the funnel draw one scene.
enum PlanetLayout {
    /// The stage is this many widths tall.
    static let stageRatio: CGFloat = 1.25

    struct Box {
        let x: CGFloat
        let y: CGFloat
        let width: CGFloat
        /// How far the layer travels under the finger, as a share of `maxOffset`.
        let depth: CGFloat
    }

    static let sky = Box(x: 0, y: 0.25, width: 1, depth: 0.15)
    static let planet = Box(x: 0.2, y: 0.486, width: 0.6, depth: 0.5)
    static let family = Box(x: 0.28, y: 0.061, width: 0.44, depth: 1)

    static let maxOffset: CGFloat = 12
    /// The planet's centre, as a fraction of the stage: where the body scales from.
    static let bodyAnchor = UnitPoint(x: 0.5, y: 0.618)

    /// A layer's shift while pressed at `point`, away from the finger, clamped.
    static func offset(_ box: Box, pressedAt point: CGPoint?, in size: CGSize) -> CGSize {
        guard let point, size.width > 0, size.height > 0 else { return .zero }
        let clamp = { (value: CGFloat) in max(-1, min(1, value)) }
        let dx = clamp((point.x - size.width / 2) / (size.width / 2))
        let dy = clamp((point.y - size.height / 2) / (size.height / 2))
        return CGSize(width: -dx * maxOffset * box.depth, height: -dy * maxOffset * box.depth)
    }

    /// The tap target: the planet and the family, not the sky around them.
    static func isOnBody(_ point: CGPoint, in size: CGSize) -> Bool {
        let x = point.x / size.width
        let y = point.y / size.height
        return (0.18...0.82).contains(x) && (0.04...0.86).contains(y)
    }
}

/// The sky, the planet and the family, layered. Press it and the layers lean away from the
/// finger at their own depths; let go on the planet and `onTap` fires. `grown` scales the
/// planet and the family up together and the sky a little, for the gallery's opening.
struct PlanetScene: View {
    var grown = false
    /// Hides the family, for a planet shown without anyone on it.
    var showsFamily = true
    var accessibilityLabel: String = String(interface: "Open your worlds")
    let onTap: () -> Void

    @GestureState private var press: CGPoint?
    @State private var floating = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        GeometryReader { geometry in
            let size = geometry.size
            let width = size.width
            let pressed = reduceMotion ? nil : press
            ZStack(alignment: .topLeading) {
                layer("Sky", PlanetLayout.sky, width: width)
                    .mask(RadialGradient(colors: [.black, .black, .clear], center: .center, startRadius: 0, endRadius: width / 2))
                    .offset(PlanetLayout.offset(PlanetLayout.sky, pressedAt: pressed, in: size))
                    .scaleEffect(grown && !reduceMotion ? 1.06 : 1)

                ZStack(alignment: .topLeading) {
                    layer("Planet", PlanetLayout.planet, width: width)
                        .offset(PlanetLayout.offset(PlanetLayout.planet, pressedAt: pressed, in: size))
                    if showsFamily {
                        layer("Family", PlanetLayout.family, width: width)
                            .offset(PlanetLayout.offset(PlanetLayout.family, pressedAt: pressed, in: size))
                    }
                }
                .frame(width: size.width, height: size.height, alignment: .topLeading)
                .scaleEffect(bodyScale(pressed: pressed != nil), anchor: PlanetLayout.bodyAnchor)
                .offset(y: bodyLift(height: size.height))
            }
            .frame(width: size.width, height: size.height, alignment: .topLeading)
            .contentShape(.rect)
            .gesture(
                DragGesture(minimumDistance: 0)
                    .updating($press) { value, state, _ in state = value.location }
                    .onEnded { value in
                        let moved = hypot(value.translation.width, value.translation.height)
                        guard moved < 24, PlanetLayout.isOnBody(value.startLocation, in: size) else { return }
                        Haptics.tap()
                        onTap()
                    }
            )
            .animation(.snappy(duration: 0.16), value: press)
            .animation(.spring(response: 0.52, dampingFraction: 0.68), value: grown)
        }
        .aspectRatio(1 / PlanetLayout.stageRatio, contentMode: .fit)
        .accessibilityElement()
        .accessibilityAddTraits(.isButton)
        .accessibilityLabel(Text(verbatim: accessibilityLabel))
        .accessibilityAction { onTap() }
        .onAppear {
            guard !reduceMotion else { return }
            withAnimation(.easeInOut(duration: 2.75).repeatForever(autoreverses: true)) { floating = true }
        }
    }

    private func layer(_ name: String, _ box: PlanetLayout.Box, width: CGFloat) -> some View {
        Image(name)
            .resizable()
            .scaledToFit()
            .frame(width: width * box.width)
            .offset(x: width * box.x, y: width * box.y)
            .accessibilityHidden(true)
    }

    private func bodyScale(pressed: Bool) -> CGFloat {
        if reduceMotion { return 1 }
        if grown { return 1.18 }
        return pressed ? 0.98 : 1
    }

    private func bodyLift(height: CGFloat) -> CGFloat {
        if reduceMotion { return 0 }
        if grown { return -0.04 * height }
        return floating ? -0.012 * height : 0
    }
}
