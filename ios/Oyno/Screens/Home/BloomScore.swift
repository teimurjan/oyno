import SwiftUI

/// The bloom level the worlds unlock on, and the three all-time totals that grow it, each in
/// the colour of one of the stars around a grown planet.
struct BloomScore: View {
    let level: Int
    let developmentMinutes: Int
    let rounds: Int
    let togetherMinutes: Int

    var body: some View {
        VStack(spacing: Metric.Space.s) {
            VStack(spacing: -6) {
                Text("Bloom").oynoEyebrow()
                Text(verbatim: "\(level)")
                    .oynoHeadlineValue()
                    .contentTransition(.numericText())
            }
            .accessibilityElement(children: .combine)

            Branch()
                .stroke(Palette.ink.opacity(0.22), style: StrokeStyle(lineWidth: 1.5, lineCap: .round))
                .frame(height: 22)

            HStack(spacing: 0) {
                part(symbol: "leaf.fill", tint: Palette.good, value: Format.largestUnit(minutes: developmentMinutes), label: "Development")
                part(symbol: "star.fill", tint: Palette.amber, value: "\(rounds)", label: "Rounds")
                part(symbol: "figure.and.child.holdinghands", tint: Palette.lavender, value: Format.largestUnit(minutes: togetherMinutes), label: "Together")
            }
            .screenshotCallout("totals")
        }
    }

    private func part(symbol: String, tint: Color, value: String, label: LocalizedStringResource) -> some View {
        VStack(spacing: 6) {
            HStack(spacing: 6) {
                Glyph(symbol: symbol, size: 15, weight: .semibold, color: tint)
                Text(verbatim: value)
                    .oynoValue(17, .extrabold)
                    .contentTransition(.numericText())
            }
            .frame(maxWidth: .infinity)
            .frame(height: Metric.tapTarget)
            .glassCard(radius: Metric.tapTarget / 2)
            .overlay(Capsule().strokeBorder(tint, lineWidth: 1.5))
            Text(label).oynoCaption()
        }
        .padding(.horizontal, Metric.Space.xs)
        .accessibilityElement(children: .combine)
    }
}

/// A stem from the score splitting into three: one arm over the centre of each third.
private struct Branch: Shape {
    func path(in rect: CGRect) -> Path {
        let left = rect.minX + rect.width / 6
        let right = rect.maxX - rect.width / 6
        let elbow = rect.midY
        let radius = min(10, rect.height / 2)
        var path = Path()
        path.move(to: CGPoint(x: rect.midX, y: rect.minY))
        path.addLine(to: CGPoint(x: rect.midX, y: rect.maxY))
        path.move(to: CGPoint(x: left, y: rect.maxY))
        path.addArc(tangent1End: CGPoint(x: left, y: elbow), tangent2End: CGPoint(x: right, y: elbow), radius: radius)
        path.addArc(tangent1End: CGPoint(x: right, y: elbow), tangent2End: CGPoint(x: right, y: rect.maxY), radius: radius)
        path.addLine(to: CGPoint(x: right, y: rect.maxY))
        return path
    }
}
