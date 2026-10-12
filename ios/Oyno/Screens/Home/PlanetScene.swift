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
    /// The body's centre, planet and family together, in stage widths.
    static let bodyCenter = CGPoint(x: 0.5, y: 0.56)
    /// Seconds from a tap to the fullest point of the bloom, where the reward lands.
    static let bloomPeak: Double = 0.3
    /// Seconds from a tap until the bloom has settled. A tap before then starts no new bloom.
    static let bloomLength: Double = 1
    /// The body's resting scale once a tap has bloomed it.
    static let bloomedScale: CGFloat = 1.04
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

/// `world`'s planet and the family standing on it, at their places on a stage
/// `width` wide. The scene draws it at full size and the worlds gallery at the open scale.
struct PlanetBody: View {
    let world: World
    let width: CGFloat
    var locked = false
    var showsFamily = true
    var planetShift: CGSize = .zero
    var familyShift: CGSize = .zero

    var body: some View {
        ZStack(alignment: .topLeading) {
            Image(world.imageName)
                .resizable()
                .scaledToFit()
                .saturation(locked ? 0.55 : 1)
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
/// finger at their own depths; let go on the planet and `onTap` fires. Each bump of `pulse`
/// blooms the planet and the family together: a compress, a lift in a warm glow, a settle a
/// little larger, all about the planet's foot so it stays over its shadow.
///
/// The planet is the current world's slide in a strip of every world, always there. At rest
/// only that slide shows and the strip is still. `open` shrinks the same slide in place and
/// fades its neighbours in at the edges, and the strip scrolls. Tapping the centred world
/// calls `onClose`, and closing scrolls back to the current world as it grows. When
/// `explorable`, `WorldCaption` under the planet opens it, and `WorldsBar` takes its place to
/// step and close it without a swipe.
struct PlanetScene: View {
    let pulse: Int
    let open: Bool
    let explorable: Bool
    /// The bloom level whose worlds the strip holds.
    let bloom: Int
    /// A world to move to once the strip has laid out, instead of the family's own.
    let showing: World.ID?
    let accessibilityLabel: String
    let onTap: () -> Void
    let onClose: () -> Void

    @GestureState private var press: CGPoint?
    @State private var floating = false
    @State private var position: String?
    /// Hides "Swipe to explore" for good once the family has moved through the worlds.
    @AppStorage("oyno.didBrowseWorlds") private var didBrowseWorlds = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private var current: World { Bloom.currentWorld(at: bloom) }
    private var selectedIndex: Int { Self.index(of: position) }
    private var selected: World { World.all[selectedIndex] }

    init(
        pulse: Int = 0,
        open: Bool = false,
        explorable: Bool = false,
        bloom: Int = 0,
        showing: World.ID? = nil,
        accessibilityLabel: String = String(interface: "Open your worlds"),
        onTap: @escaping () -> Void,
        onClose: @escaping () -> Void = {}
    ) {
        self.pulse = pulse
        self.open = open
        self.explorable = explorable
        self.bloom = bloom
        self.showing = showing
        self.accessibilityLabel = accessibilityLabel
        self.onTap = onTap
        self.onClose = onClose
        // Seeded, not set on appear: set before the strip's first layout, it stays on the first world.
        // The first world is left `nil`, the strip's start: seeded, it lands a content margin right.
        let current = Bloom.currentWorld(at: bloom)
        _position = State(initialValue: current == World.all.first ? nil : current.id)
    }

    var body: some View {
        VStack(spacing: Metric.Space.s) {
            stage
            if explorable {
                swipeHint
                    .frame(height: Metric.tapTarget)
                    .opacity(open && !didBrowseWorlds ? 1 : 0)
                    .animation(openAnimation, value: open)
                    .animation(.easeOut(duration: 0.2), value: didBrowseWorlds)
            }
        }
        .onAppear {
            guard !reduceMotion else { return }
            withAnimation(.easeInOut(duration: 2.75).repeatForever(autoreverses: true)) { floating = true }
        }
        .task {
            if let showing { position = showing }
        }
        .onChange(of: open) { _, isOpen in
            guard !isOpen else { return }
            withAnimation(stepAnimation) { position = current.id }
        }
        // Home stays alive under the Play tab, so a round there can move the family to a new world.
        .onChange(of: current) { _, world in position = world.id }
        // A tick per world snapped to while browsing.
        .onChange(of: position) { previous, id in
            guard open, id != nil, Self.index(of: previous) != Self.index(of: id) else { return }
            Haptics.tap()
            didBrowseWorlds = true
        }
    }

    private var stage: some View {
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

                glow(width: size.width)

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
                        }
                    }
                    .scrollTargetLayout()
                }
                // Home lays the stage out at a provisional width first, and a strip resized after
                // scrolling keeps its old offset. Rebuilt, it lands on its world at the real one.
                .id(size.width)
                // No fade: the rebuild can fall inside the float's endless animation.
                .transition(.identity)
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
                // VoiceOver reads the strip as one adjustable element, in the overlay below.
                .accessibilityHidden(true)
                .animation(openAnimation, value: open)
                .animation(.smooth(duration: 0.8), value: pulse)
                .keyframeAnimator(initialValue: Pulse(), trigger: pulse) { content, value in
                    content
                        .scaleEffect(reduceMotion ? 1 : value.scale, anchor: PlanetLayout.bodyAnchor)
                        .offset(y: reduceMotion ? 0 : value.lift * size.height)
                } keyframes: { _ in
                    Self.pulseKeyframes
                }
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
        .overlay(alignment: .bottom) {
            if explorable {
                ZStack(alignment: .bottom) {
                    WorldCaption(world: current, onExplore: onTap).shown(!open)
                    WorldsBar(
                        canStepBack: selectedIndex > 0,
                        canStepForward: selectedIndex < World.all.count - 1,
                        onClose: onClose,
                        step: step
                    )
                    .shown(open)
                }
                .animation(openAnimation, value: open)
            }
        }
        .overlay {
            ZStack {
                Color.clear
                    .accessibilityElement()
                    .accessibilityAddTraits(.isButton)
                    .accessibilityLabel(Text(verbatim: accessibilityLabel))
                    .accessibilityAction { onTap() }
                    .accessibilityHidden(open)
                Color.clear
                    .accessibilityElement()
                    .accessibilityLabel(Text(verbatim: [selected.name, selected.place, selected.status(at: bloom)].joined(separator: ", ")))
                    .accessibilityAdjustableAction { direction in
                        switch direction {
                        case .increment: step(1)
                        case .decrement: step(-1)
                        @unknown default: break
                        }
                    }
                    .accessibilityAction(.escape) { onClose() }
                    .accessibilityHidden(!open)
            }
            .allowsHitTesting(false)
        }
    }

    /// Under `WorldsBar` until the first move through the worlds. Its row stays at rest, so
    /// nothing below the scene moves.
    private var swipeHint: some View {
        HStack(spacing: 6) {
            Image(systemName: "chevron.left")
            Text("Swipe to explore")
            Image(systemName: "chevron.right")
        }
        .font(Typeface.ui(12, .semibold, relativeTo: .caption))
        .tracking(1.6)
        .textCase(.uppercase)
        .foregroundStyle(Palette.muted)
        .breathing()
        .allowsHitTesting(false)
        .accessibilityHidden(true)
    }

    private func tap(_ world: World) {
        guard position == world.id else {
            withAnimation(stepAnimation) { position = world.id }
            return
        }
        Haptics.tap()
        onClose()
    }

    /// Moves the centred world `offset` places along the strip, stopping at its ends.
    private func step(_ offset: Int) {
        let target = selectedIndex + offset
        guard World.all.indices.contains(target) else { return }
        withAnimation(stepAnimation) { position = World.all[target].id }
    }

    private var stepAnimation: Animation? { reduceMotion ? nil : .snappy }

    /// `nil` is the strip's start, the first world.
    private static func index(of id: World.ID?) -> Int {
        World.all.firstIndex { $0.id == id } ?? 0
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
        if pressed { return 0.98 }
        return pulse > 0 ? PlanetLayout.bloomedScale : 1
    }

    private func bodyLift(height: CGFloat) -> CGFloat {
        if reduceMotion { return 0 }
        return floating ? -0.012 * height : 0
    }

    /// Warm light behind the body that swells and fades with each bloom. Under Reduce Motion
    /// it only fades, which is all the bloom shows.
    private func glow(width: CGFloat) -> some View {
        KeyframeAnimator(initialValue: Pulse(), trigger: pulse) { value in
            EllipticalGradient(colors: [Palette.gold, Palette.gold.opacity(0)])
                .frame(width: width * 0.8, height: width * 0.8)
                .scaleEffect(reduceMotion ? 1 : value.glowScale)
                .opacity(value.glow)
        } keyframes: { _ in
            Self.pulseKeyframes
        }
        .position(x: width * PlanetLayout.bodyCenter.x, y: width * PlanetLayout.bodyCenter.y)
        .allowsHitTesting(false)
        .accessibilityHidden(true)
    }

    private struct Pulse {
        var scale: CGFloat = 1
        /// In stage heights, negative is up.
        var lift: CGFloat = 0
        var glow = 0.0
        var glowScale: CGFloat = 0.85
    }

    /// Compress, release into the bloom, settle with no overshoot.
    @KeyframesBuilder<Pulse>
    private static var pulseKeyframes: some Keyframes<Pulse> {
        KeyframeTrack(\.scale) {
            CubicKeyframe(0.95, duration: 0.09)
            CubicKeyframe(1.07, duration: PlanetLayout.bloomPeak - 0.09)
            SpringKeyframe(1, duration: PlanetLayout.bloomLength - PlanetLayout.bloomPeak, spring: .smooth)
        }
        KeyframeTrack(\.lift) {
            LinearKeyframe(0, duration: 0.09)
            CubicKeyframe(-0.025, duration: PlanetLayout.bloomPeak - 0.09)
            SpringKeyframe(0, duration: PlanetLayout.bloomLength - PlanetLayout.bloomPeak, spring: .smooth)
        }
        KeyframeTrack(\.glow) {
            CubicKeyframe(0.35, duration: PlanetLayout.bloomPeak)
            CubicKeyframe(0, duration: PlanetLayout.bloomLength - PlanetLayout.bloomPeak)
        }
        KeyframeTrack(\.glowScale) {
            LinearKeyframe(0.85, duration: 0.01)
            CubicKeyframe(1.15, duration: PlanetLayout.bloomLength)
        }
    }
}
