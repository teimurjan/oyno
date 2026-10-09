import SwiftUI

/// The two white rings and the four stars around the planet after a round, laid over
/// `PlanetScene`. They settle in when the screen appears and flare again on every bump of
/// `burst`: the kid's taps.
struct PlanetHalo: View {
    let burst: Int

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var settled = false
    @State private var twinkling = false
    @State private var ripples = 0

    /// The body's centre, planet and family together, in stage widths.
    private static let center = CGPoint(x: 0.5, y: 0.56)
    private static let rings: [(diameter: CGFloat, opacity: Double, delay: Double)] = [
        (1.1, 0.95, 0),
        (1.26, 0.5, 0.15),
    ]

    private struct Star {
        /// From the body's centre, in stage widths.
        let offset: CGPoint
        let size: CGFloat
        let color: Color
    }

    private static let stars = [
        Star(offset: CGPoint(x: -0.47, y: -0.38), size: 0.089, color: Palette.amber),
        Star(offset: CGPoint(x: 0.47, y: -0.22), size: 0.056, color: Palette.lavender),
        Star(offset: CGPoint(x: -0.53, y: 0.3), size: 0.073, color: Palette.good),
        Star(offset: CGPoint(x: 0.49, y: 0.39), size: 0.097, color: Palette.amber),
    ]

    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            let center = CGPoint(x: width * Self.center.x, y: width * Self.center.y)
            ZStack {
                ForEach(Array(Self.rings.enumerated()), id: \.offset) { index, ring in
                    Circle()
                        .strokeBorder(.white.opacity(ring.opacity), lineWidth: 1.5)
                        .frame(width: width * ring.diameter, height: width * ring.diameter)
                        .scaleEffect(settled ? 1 : 0.7)
                        .opacity(settled ? 1 : 0)
                        .animation(intro?.delay(ring.delay), value: settled)
                        .scaleEffect(twinkling ? 1.015 : 1)
                        .animation(breath(2.4 + Double(index) * 0.5), value: twinkling)
                        .position(center)
                }
                ripple(width: width).position(center)
                ForEach(Array(Self.stars.enumerated()), id: \.offset) { index, star in
                    Sparkle()
                        .fill(star.color)
                        .frame(width: width * star.size, height: width * star.size)
                        .scaleEffect(settled ? 1 : 0.2)
                        .opacity(settled ? 1 : 0)
                        .animation(pop?.delay(0.3 + Double(index) * 0.08), value: settled)
                        .scaleEffect(twinkling ? 0.8 : 1)
                        .opacity(twinkling ? 0.6 : 1)
                        .animation(breath(0.9 + Double(index) * 0.3), value: twinkling)
                        .rotationEffect(.degrees(Double(ripples) * 90))
                        .animation(pop, value: ripples)
                        .position(x: center.x + width * star.offset.x, y: center.y + width * star.offset.y)
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
        .task {
            try? await Task.sleep(for: .seconds(1.1))
            guard !reduceMotion else { return }
            twinkling = true
        }
        .onChange(of: burst) { _, _ in
            guard !reduceMotion else { return }
            ripples += 1
        }
    }

    private var intro: Animation? { reduceMotion ? nil : .spring(response: 0.7, dampingFraction: 0.75) }
    private var pop: Animation? { reduceMotion ? nil : .spring(response: 0.5, dampingFraction: 0.6) }

    private func breath(_ seconds: Double) -> Animation? {
        reduceMotion ? nil : .easeInOut(duration: seconds).repeatForever(autoreverses: true)
    }

    private struct Ripple {
        var scale = 0.85
        var opacity = 0.0
    }

    /// One more ring, sent out from the inner one and gone by the time it passes the outer.
    private func ripple(width: CGFloat) -> some View {
        KeyframeAnimator(initialValue: Ripple(), trigger: ripples) { value in
            Circle()
                .strokeBorder(.white.opacity(0.9), lineWidth: 2)
                .frame(width: width * 1.1, height: width * 1.1)
                .scaleEffect(value.scale)
                .opacity(value.opacity)
        } keyframes: { _ in
            KeyframeTrack(\.scale) {
                LinearKeyframe(0.85, duration: 0.01)
                CubicKeyframe(1.4, duration: 1.1)
            }
            KeyframeTrack(\.opacity) {
                LinearKeyframe(0.9, duration: 0.06)
                LinearKeyframe(0, duration: 1.05)
            }
        }
    }
}

/// A four-point star, as the canvas draws them.
private struct Sparkle: Shape {
    func path(in rect: CGRect) -> Path {
        let center = CGPoint(x: rect.midX, y: rect.midY)
        let outer = min(rect.width, rect.height) / 2
        let inner = outer * 0.35
        var path = Path()
        for index in 0..<8 {
            let angle = Double(index) * .pi / 4 - .pi / 2
            let radius = index.isMultiple(of: 2) ? outer : inner
            let point = CGPoint(x: center.x + cos(angle) * radius, y: center.y + sin(angle) * radius)
            if index == 0 { path.move(to: point) } else { path.addLine(to: point) }
        }
        path.closeSubpath()
        return path
    }
}
