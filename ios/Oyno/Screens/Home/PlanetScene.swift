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
    /// The planet's foot, as a fraction of the stage: where the body scales from, so it stays
    /// over its painted shadow.
    static let bodyAnchor = UnitPoint(x: 0.5, y: 0.848)
    /// The body's scale once it has shrunk into the worlds gallery's centred slide.
    static let openScale: CGFloat = 0.7
    /// How much of each neighbour's planet the gallery shows at the stage's edges.
    static let peek: CGFloat = 0.15
    /// A gallery slide's width in stage widths: the gap between two planets' centres.
    static let slideWidth = 0.5 + planet.width * openScale * (0.5 - peek)

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

extension View {
    /// Sizes and places a layer at `box` on a stage `width` wide.
    func place(_ box: PlanetLayout.Box, width: CGFloat) -> some View {
        frame(width: width * box.width)
            .offset(x: width * box.x, y: width * box.y)
    }
}

/// The planet, tinted to `world`, and the family standing on it, at their places on a stage
/// `width` wide. The scene draws it at full size and the worlds gallery at the open scale.
struct PlanetBody: View {
    let world: World
    let width: CGFloat
    var locked = false
    var showsFamily = true
    var planetShift: CGSize = .zero
    var familyShift: CGSize = .zero

    var body: some View {
        let tint = world.tint
        ZStack(alignment: .topLeading) {
            Image("Planet")
                .resizable()
                .scaledToFit()
                .hueRotation(.degrees(tint.hue))
                .saturation(tint.saturation * (locked ? 0.55 : 1))
                .brightness((tint.brightness - 1) * 0.6)
                .grayscale(tint.grayscale)
                .opacity(locked ? 0.7 : 1)
                .place(PlanetLayout.planet, width: width)
                .offset(planetShift)
            if showsFamily {
                Image("Family")
                    .resizable()
                    .scaledToFit()
                    .place(PlanetLayout.family, width: width)
                    .offset(familyShift)
            }
        }
        .frame(width: width, height: width * PlanetLayout.stageRatio, alignment: .topLeading)
        .accessibilityHidden(true)
    }
}

/// The sky, the planet and the family, layered. Press it and the layers lean away from the
/// finger at their own depths; let go on the planet and `onTap` fires. `grown` scales the
/// planet and the family up together for the bloom, about the planet's foot so it stays over
/// its shadow.
///
/// The planet is the current world's slide in a strip of every world, always there. At rest
/// only that slide shows and the strip is still. `open` shrinks the same slide in place and
/// fades its neighbours in at the edges, and the strip scrolls. Tapping the centred world
/// calls `onClose`, and closing scrolls back to the current world as it grows.
struct PlanetScene: View {
    var grown = false
    var open = false
    /// The bloom level whose worlds the strip holds.
    var bloom = 0
    var accessibilityLabel: String = String(interface: "Open your worlds")
    let onTap: () -> Void
    var onClose: () -> Void = {}

    @GestureState private var press: CGPoint?
    @State private var floating = false
    @State private var position: String?
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private var current: World { Bloom.currentWorld(at: bloom) }

    var body: some View {
        GeometryReader { geometry in
            let size = geometry.size
            let pressed = reduceMotion || open ? nil : press
            ZStack(alignment: .topLeading) {
                Image("Sky")
                    .resizable()
                    .scaledToFit()
                    .mask(Self.skyFade)
                    .place(PlanetLayout.sky, width: size.width)
                    .offset(PlanetLayout.offset(PlanetLayout.sky, pressedAt: pressed, in: size))
                    .accessibilityHidden(true)

                ScrollView(.horizontal) {
                    LazyHStack(spacing: 0) {
                        ForEach(World.all) { world in
                            WorldSlide(
                                world: world,
                                bloom: bloom,
                                stage: size,
                                open: open,
                                scale: bodyScale(pressed: pressed != nil),
                                pressedAt: pressed
                            )
                            .frame(width: size.width * PlanetLayout.slideWidth, height: size.height)
                            .contentShape(.rect)
                            .onTapGesture { tap(world) }
                            .accessibilityAddTraits(.isButton)
                            .accessibilityAction(named: Text("Close worlds")) { onClose() }
                        }
                    }
                    .scrollTargetLayout()
                }
                .contentMargins(.horizontal, size.width * (1 - PlanetLayout.slideWidth) / 2, for: .scrollContent)
                .scrollTargetBehavior(.viewAligned)
                .scrollIndicators(.hidden)
                .scrollPosition(id: $position, anchor: .center)
                .scrollDisabled(!open)
                // At rest the grown body may reach past the stage; open, the strip ends at it.
                .scrollClipDisabled(!open)
                // The neighbours fade in from nothing at the stage's sides. Tall, so the grown
                // body still reaches above the stage.
                .mask { Self.sideFade.padding(.vertical, -size.height) }
                .allowsHitTesting(open)
                .accessibilityHidden(!open)
                .animation(openAnimation, value: open)
                .animation(.spring(response: 0.52, dampingFraction: 0.68), value: grown)
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
                    },
                including: open ? .subviews : .all
            )
            .animation(.snappy(duration: 0.16), value: press)
        }
        .aspectRatio(1 / PlanetLayout.stageRatio, contentMode: .fit)
        .overlay {
            Color.clear
                .accessibilityElement()
                .accessibilityAddTraits(.isButton)
                .accessibilityLabel(Text(verbatim: accessibilityLabel))
                .accessibilityAction { onTap() }
                .accessibilityHidden(open)
                .allowsHitTesting(false)
        }
        .onAppear {
            position = current.id
            guard !reduceMotion else { return }
            withAnimation(.easeInOut(duration: 2.75).repeatForever(autoreverses: true)) { floating = true }
        }
        .onChange(of: open) { _, isOpen in
            guard !isOpen else { return }
            withAnimation(.snappy) { position = current.id }
        }
        // A tick per world snapped to while browsing.
        .onChange(of: position) { previous, id in
            if open, previous != nil, id != nil { Haptics.tap() }
        }
    }

    private func tap(_ world: World) {
        guard position == world.id else {
            withAnimation(.snappy) { position = world.id }
            return
        }
        Haptics.tap()
        onClose()
    }

    /// Fades in from nothing at the sky's top edge, and out at its sides and foot.
    private static var skyFade: some View {
        LinearGradient(
            stops: [.init(color: .clear, location: 0), .init(color: .black, location: 0.45)],
            startPoint: .top,
            endPoint: .bottom
        )
        .mask(
            EllipticalGradient(
                stops: [.init(color: .black, location: 0.62), .init(color: .clear, location: 1)],
                endRadiusFraction: 0.5
            )
        )
    }

    private static var sideFade: some View {
        LinearGradient(
            stops: [
                .init(color: .clear, location: 0),
                .init(color: .black, location: 0.1),
                .init(color: .black, location: 0.9),
                .init(color: .clear, location: 1),
            ],
            startPoint: .leading,
            endPoint: .trailing
        )
    }

    /// Shrinking into the strip settles without overshoot; growing back springs.
    private var openAnimation: Animation {
        if reduceMotion { return .easeOut(duration: 0.2) }
        return open ? .easeOut(duration: 0.46) : .spring(response: 0.52, dampingFraction: 0.68)
    }

    private func bodyScale(pressed: Bool) -> CGFloat {
        if open { return PlanetLayout.openScale }
        if reduceMotion { return 1 }
        if grown { return 1.18 }
        return pressed ? 0.98 : 1
    }

    private func bodyLift(height: CGFloat) -> CGFloat {
        if reduceMotion || grown { return 0 }
        return floating ? -0.012 * height : 0
    }
}
