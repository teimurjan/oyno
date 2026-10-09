import SwiftUI

/// The promise, in the reader's own figure, sealed with a high five: the hand comes up, a
/// burst of sprouts and stars, and the offer follows. Opal's fist bump.
struct FunnelPromise: View {
    let pickups: Pickups
    let onContinue: () -> Void

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var stage = 0
    @State private var sealed = false

    private var lines: [(title: String, body: String, symbol: String)] {
        [
            (
                String(interface: "Your apps, paused"),
                String(interface: "Kid hours pause the apps you pick, every evening, on the schedule you set."),
                "pause.circle"
            ),
            (
                String(interface: "One easy game"),
                String(interface: "Ten minutes, sized to the energy you have left, picked for you."),
                "sparkles"
            ),
            (
                String(interface: "A planet that grows"),
                String(interface: "Every round together blooms your family's little planet."),
                "globe.europe.africa.fill"
            ),
        ]
    }

    var body: some View {
        ZStack {
            VStack(spacing: 0) {
                FunnelLine(
                    text: String(interface: "Oyno will give you back [\(pickups.hoursBack)+ hours] a year with your kid"),
                    size: 25,
                    tint: Palette.good
                )
                .funnelStage(stage >= 1)
                VStack(alignment: .leading, spacing: Metric.Space.xl) {
                    ForEach(lines.indices, id: \.self) { index in
                        row(lines[index]).funnelStage(stage >= 2 + index)
                    }
                }
                .frame(maxWidth: 420)
                .padding(.top, 32)
                Spacer(minLength: Metric.Space.xl)
                Text("Let's seal it with a high five")
                    .font(Typeface.ui(13, .regular, relativeTo: .footnote))
                    .foregroundStyle(Palette.muted)
                    .padding(.bottom, Metric.Space.m)
                    .funnelStage(stage >= 5)
                PrimaryButton(verbatim: "✋ " + String(interface: "High five"), enabled: stage >= 5) { seal() }
                    .frame(maxWidth: 420)
                    .funnelStage(stage >= 5)
            }
            .funnelColumn()
            .opacity(sealed ? 0 : 1)
            .blur(radius: sealed && !reduceMotion ? 10 : 0)
            .animation(.easeIn(duration: 0.35), value: sealed)
            .allowsHitTesting(!sealed)

            if sealed { HighFive() }
        }
        .task { await play() }
    }

    private func row(_ line: (title: String, body: String, symbol: String)) -> some View {
        HStack(alignment: .top, spacing: Metric.Space.m) {
            Glyph(symbol: line.symbol, size: 18, color: Palette.good)
                .frame(width: 24, height: 24)
                .accessibilityHidden(true)
            VStack(alignment: .leading, spacing: 3) {
                Text(verbatim: line.title)
                    .font(Typeface.ui(15.5, .bold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.ink)
                Text(verbatim: line.body)
                    .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    private func play() async {
        guard !reduceMotion else { return stage = 5 }
        stage = 1
        for next in 2...5 {
            guard await funnelPause(next == 5 ? 500 : 350) else { return }
            stage = next
        }
    }

    /// The funnel's end as far as the argument goes: what follows is the account and the price.
    private func seal() {
        Analytics.shared.track(.funnelCompleted(answers: [Pickups.key: pickups.rawValue]))
        Haptics.success()
        sealed = true
        Task {
            guard await funnelPause(reduceMotion ? 700 : 2100) else { return }
            onContinue()
        }
    }
}

/// The hand rises to the middle, waits a beat, then lands big with the burst.
private struct HighFive: View {
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var up = false
    @State private var landed = false

    private static let pieces = (0..<28).map { _ in Piece() }

    var body: some View {
        ZStack {
            ForEach(Self.pieces) { piece in
                Text(verbatim: piece.glyph)
                    .font(.system(size: piece.size))
                    .rotationEffect(.degrees(landed ? piece.spin : 0))
                    .offset(x: landed ? piece.dx : 0, y: landed ? piece.dy : 0)
                    .animation(.easeOut(duration: 1.5).delay(piece.delay), value: landed)
                    .opacity(landed ? 0 : 1)
                    .animation(.easeIn(duration: 0.45).delay(piece.delay + 1.0), value: landed)
                    .opacity(up ? 1 : 0)
            }
            Text(verbatim: "✋")
                .font(.system(size: 96))
                .scaleEffect(landed ? 1 : up ? 0.55 : 0.3)
                .offset(y: up ? 0 : 180)
                .animation(.spring(duration: 0.55, bounce: 0.45), value: up)
                .animation(.spring(duration: 0.4, bounce: 0.5), value: landed)
        }
        .onAppear {
            guard !reduceMotion else {
                up = true
                return
            }
            up = true
            Task {
                guard await funnelPause(650) else { return }
                Haptics.tap()
                landed = true
            }
        }
        .accessibilityHidden(true)
    }

    /// One sprout or star, flung from the hand: where it ends up, how it turns, and when.
    private struct Piece: Identifiable {
        let id = UUID()
        let glyph = ["🌱", "⭐️", "🪐", "🌱", "✨"].randomElement()!
        let size = CGFloat.random(in: 16...30)
        let spin = Double.random(in: -200...200)
        let delay = Double.random(in: 0...0.12)
        let dx: CGFloat
        let dy: CGFloat

        init() {
            let angle = Double.random(in: 0..<(2 * .pi))
            let reach = CGFloat.random(in: 130...330)
            dx = cos(angle) * reach
            // Thrown up and out more than down: a burst, not a spill.
            dy = sin(angle) * reach * 0.8 - 40
        }
    }
}
