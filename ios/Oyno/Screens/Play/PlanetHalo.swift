import SwiftUI

/// The two white rings and the four painted petals around the planet after a round, laid over
/// `PlanetScene`. They settle in when the screen appears and answer every bump of `burst`, the
/// kid's taps: a ripple leaves the inner ring as it lights up, the rings swell as it passes,
/// and the petals flare and glide on along the orbit.
struct PlanetHalo: View {
    let burst: Int

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var settled = false
    @State private var ripples = 0

    /// `delay` is how far behind the inner ring each one settles in and swells.
    private static let rings: [(diameter: CGFloat, opacity: Double, delay: Double)] = [
        (1.1, 0.95, 0),
        (1.26, 0.5, 0.15),
    ]
    /// How far along the orbit the petals travel per tap.
    private static let orbitStep = 20.0

    struct Drift {
        /// The painting, `art/source/petals/<id>.png`.
        let petal: String
        /// From the body's centre, in stage widths.
        let offset: CGPoint
        /// The painting's side, in stage widths.
        let size: CGFloat
        /// Each one floats at its own tilt.
        let tilt: Double
    }

    /// One of each painted petal, from `art/petals.json`.
    static let petals = [
        Drift(petal: "blush-petal", offset: CGPoint(x: -0.47, y: -0.38), size: 0.09, tilt: -35),
        Drift(petal: "pollen-puff", offset: CGPoint(x: 0.47, y: -0.22), size: 0.065, tilt: 0),
        Drift(petal: "sage-bud", offset: CGPoint(x: -0.53, y: 0.3), size: 0.075, tilt: 20),
        Drift(petal: "cream-petal", offset: CGPoint(x: 0.49, y: 0.39), size: 0.095, tilt: -70),
    ]

    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            let center = CGPoint(x: width * PlanetLayout.bodyCenter.x, y: width * PlanetLayout.bodyCenter.y)
            ZStack {
                ForEach(Array(Self.rings.enumerated()), id: \.offset) { _, ring in
                    Circle()
                        .strokeBorder(.white.opacity(ring.opacity), lineWidth: 1.5)
                        .frame(width: width * ring.diameter, height: width * ring.diameter)
                        .scaleEffect(settled ? 1 : 0.7)
                        .opacity(settled ? 1 : 0)
                        .animation(intro?.delay(ring.delay), value: settled)
                        .keyframeAnimator(initialValue: 1.0, trigger: ripples) { content, scale in
                            content.scaleEffect(scale)
                        } keyframes: { _ in
                            LinearKeyframe(1, duration: 0.1 + ring.delay)
                            CubicKeyframe(1.06, duration: 0.25)
                            SpringKeyframe(1, duration: 0.6, spring: .smooth)
                        }
                        .position(center)
                }
                ripple(width: width).position(center)
                ForEach(Array(Self.petals.enumerated()), id: \.offset) { index, petal in
                    Image(uiImage: Painting.petal(petal.petal) ?? UIImage())
                        .resizable()
                        .scaledToFit()
                        .frame(width: width * petal.size, height: width * petal.size)
                        .rotationEffect(.degrees(petal.tilt))
                        .scaleEffect(settled ? 1 : 0.2)
                        .opacity(settled ? 1 : 0)
                        .animation(pop?.delay(0.3 + Double(index) * 0.08), value: settled)
                        .keyframeAnimator(initialValue: 1.0, trigger: ripples) { content, scale in
                            content.scaleEffect(scale)
                        } keyframes: { _ in
                            CubicKeyframe(1.35, duration: PlanetLayout.bloomPeak)
                            CubicKeyframe(1, duration: 0.5)
                        }
                        .modifier(Orbit(offset: CGPoint(x: width * petal.offset.x, y: width * petal.offset.y), degrees: orbit))
                        .animation(.smooth(duration: 0.9).delay(0.06 * Double(index)), value: orbit)
                        .position(center)
                }
            }
        }
        .allowsHitTesting(false)
        .accessibilityHidden(true)
        .onAppear {
            settled = true
            guard !reduceMotion else { return }
            ripples += 1
        }
        .onChange(of: burst) { _, _ in
            guard !reduceMotion else { return }
            ripples += 1
        }
    }

    private var orbit: Double { reduceMotion ? 0 : Double(burst) * Self.orbitStep }
    private var intro: Animation? { reduceMotion ? nil : .spring(response: 0.7, dampingFraction: 0.75) }
    private var pop: Animation? { reduceMotion ? nil : .spring(response: 0.5, dampingFraction: 0.6) }

    private struct Ripple {
        var scale = 0.85
        var opacity = 0.0
        var orbitGlow = 0.0
    }

    /// One more ring, sent out from the inner one on the release and gone by the time it passes
    /// the outer, while the inner one glows warm.
    private func ripple(width: CGFloat) -> some View {
        KeyframeAnimator(initialValue: Ripple(), trigger: ripples) { value in
            ZStack {
                Circle()
                    .strokeBorder(Palette.gold.opacity(value.orbitGlow), lineWidth: 2.5)
                    .frame(width: width * 1.1, height: width * 1.1)
                Circle()
                    .strokeBorder(.white.opacity(0.9), lineWidth: 2)
                    .frame(width: width * 1.1, height: width * 1.1)
                    .scaleEffect(value.scale)
                    .opacity(value.opacity)
            }
        } keyframes: { _ in
            KeyframeTrack(\.scale) {
                LinearKeyframe(0.85, duration: 0.09)
                CubicKeyframe(1.4, duration: 1.1)
            }
            KeyframeTrack(\.opacity) {
                LinearKeyframe(0, duration: 0.09)
                LinearKeyframe(0.9, duration: 0.06)
                LinearKeyframe(0, duration: 1.05)
            }
            KeyframeTrack(\.orbitGlow) {
                CubicKeyframe(0.5, duration: PlanetLayout.bloomPeak)
                CubicKeyframe(0, duration: PlanetLayout.bloomLength - PlanetLayout.bloomPeak)
            }
        }
    }
}

/// Moves a view placed at the body's centre out to `offset`, turned `degrees` about the
/// centre, so an animated turn travels the arc of the orbit rather than its chord.
private struct Orbit: GeometryEffect {
    let offset: CGPoint
    var degrees: Double

    var animatableData: Double {
        get { degrees }
        set { degrees = newValue }
    }

    func effectValue(size: CGSize) -> ProjectionTransform {
        let angle = degrees * .pi / 180
        let x = offset.x * cos(angle) - offset.y * sin(angle)
        let y = offset.x * sin(angle) + offset.y * cos(angle)
        return ProjectionTransform(CGAffineTransform(translationX: x, y: y))
    }
}
