import SwiftUI

/// Widget A, `EveningStep.tsx` on the web: an example evening from 4:30 to 7:30, the phone's
/// pickups landing on it one after another, then the totals. Red is the phone's time.
struct EveningDemo: View {
    let words: FunnelCopy.Evening
    let animated: Bool

    @State private var shown = 0

    /// Minutes after 4:30 and how long each pickup lasts. Illustrative, labelled as an example.
    private static let pickups: [(start: Int, length: Int)] = [
        (12, 8), (31, 14), (58, 6), (77, 18), (104, 9), (126, 11), (151, 4),
    ]
    private static let evening = 180
    private static let phoneMinutes = pickups.reduce(0) { $0 + $1.length }

    var body: some View {
        let kid = FunnelCopy.fill(words.minutes, ["n": "\(Self.evening - Self.phoneMinutes)"])
        let phone = FunnelCopy.fill(words.minutes, ["n": "\(Self.phoneMinutes)"])
        Card(raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                Text(verbatim: words.caption).oynoEyebrow()

                GeometryReader { geometry in
                    let width = geometry.size.width
                    ZStack(alignment: .leading) {
                        Palette.good.opacity(0.25)
                        ForEach(Array(Self.pickups.enumerated()), id: \.offset) { index, pickup in
                            Palette.alert
                                .frame(width: width * CGFloat(pickup.length) / CGFloat(Self.evening))
                                .offset(x: width * CGFloat(pickup.start) / CGFloat(Self.evening))
                                .opacity(index < shown ? 1 : 0)
                        }
                    }
                    .clipShape(.rect(cornerRadius: 14))
                }
                .frame(height: 44)
                .accessibilityHidden(true)

                HStack {
                    Text(verbatim: words.start)
                    Spacer()
                    Text(verbatim: words.end)
                }
                .oynoNote()

                HStack(spacing: Metric.Space.l) {
                    legend(Palette.good.opacity(0.6), words.kid)
                    legend(Palette.alert, words.phone)
                }

                Text(verbatim: FunnelCopy.fill(words.summary, ["kid": kid, "phone": phone]))
                    .font(Typeface.ui(15.5, .semibold, relativeTo: .body))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
                    .opacity(shown > Self.pickups.count ? 1 : 0)
                    .padding(.top, Metric.Space.xs)
            }
        }
        .task {
            guard animated else {
                shown = Self.pickups.count + 1
                return
            }
            try? await Task.sleep(for: FunnelReveal.delay)
            for step in 1...(Self.pickups.count + 1) {
                withAnimation(.easeOut(duration: 0.38)) { shown = step }
                try? await Task.sleep(for: .milliseconds(520))
            }
        }
    }

    private func legend(_ color: Color, _ label: String) -> some View {
        HStack(spacing: 6) {
            Circle().fill(color).frame(width: 10, height: 10)
            Text(verbatim: label)
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.ink)
        }
    }
}

/// Widget B, `PlanetStep.tsx` on the web: press the planet and it grows into the worlds. The
/// reader has played no rounds yet, so only the home planet is theirs.
struct FunnelPlanet: View {
    let words: FunnelCopy.Planet

    @State private var open = false

    var body: some View {
        ZStack {
            PlanetScene(grown: open, accessibilityLabel: words.open) {
                Analytics.shared.track(.worldsOpened(bloom: 0))
                open = true
            }
            .opacity(open ? 0 : 1)
            .animation(.easeOut(duration: 0.26).delay(open ? 0.24 : 0), value: open)
            if open {
                WorldsGallery(bloom: 0) { open = false }
            }
        }
        .frame(maxWidth: 260)
        .frame(maxWidth: .infinity)
        .animation(.spring(response: 0.45, dampingFraction: 0.8), value: open)
    }
}
