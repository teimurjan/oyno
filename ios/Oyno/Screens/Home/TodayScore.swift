import SwiftUI

/// The bloom the worlds unlock on, and today's two parts of a good evening under it: minutes
/// of games that grow the kid, and minutes together with the apps paused.
struct TodayScore: View {
    let bloom: Int
    let playedMinutes: Int
    let pausedMinutes: Int

    var body: some View {
        VStack(spacing: Metric.Space.s) {
            VStack(spacing: -6) {
                Text("Bloom").oynoEyebrow()
                Text(verbatim: "\(bloom)")
                    .oynoHeadlineValue()
                    .contentTransition(.numericText())
            }
            .accessibilityElement(children: .combine)

            Branch()
                .stroke(Palette.ink.opacity(0.22), style: StrokeStyle(lineWidth: 1.5, lineCap: .round))
                .frame(height: 22)

            HStack(spacing: 0) {
                part(symbol: "leaf.fill", minutes: playedMinutes, label: "Growing")
                part(symbol: "figure.and.child.holdinghands", minutes: pausedMinutes, label: "Together")
                    .screenshotCallout("together")
            }
        }
    }

    private func part(symbol: String, minutes: Int, label: LocalizedStringResource) -> some View {
        VStack(spacing: 6) {
            HStack(spacing: 6) {
                Glyph(symbol: symbol, size: 15, weight: .semibold)
                Text(verbatim: Format.duration(TimeInterval(minutes * 60))).oynoValue(17, .extrabold)
            }
            .frame(maxWidth: .infinity)
            .frame(height: Metric.tapTarget)
            .glassCard(radius: Metric.tapTarget / 2)
            Text(label).oynoCaption()
        }
        .padding(.horizontal, Metric.Space.l)
        .accessibilityElement(children: .combine)
    }
}

/// A stem from the score splitting into two arms, one over the centre of each half.
private struct Branch: Shape {
    func path(in rect: CGRect) -> Path {
        let left = rect.minX + rect.width / 4
        let right = rect.maxX - rect.width / 4
        let elbow = rect.midY
        let radius = min(10, rect.height / 2)
        var path = Path()
        path.move(to: CGPoint(x: rect.midX, y: rect.minY))
        path.addLine(to: CGPoint(x: rect.midX, y: elbow))
        path.move(to: CGPoint(x: left, y: rect.maxY))
        path.addArc(tangent1End: CGPoint(x: left, y: elbow), tangent2End: CGPoint(x: right, y: elbow), radius: radius)
        path.addArc(tangent1End: CGPoint(x: right, y: elbow), tangent2End: CGPoint(x: right, y: rect.maxY), radius: radius)
        path.addLine(to: CGPoint(x: right, y: rect.maxY))
        return path
    }
}
