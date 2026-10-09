import SwiftUI

/// A figure that lands rather than appears: the candidates roll past, overshoot, settle on
/// the one that is the reader's, and the others fade. Opal's years counter.
struct TallyWheel: View {
    /// Ascending, with the final one at `target` and a couple past it for the overshoot.
    let labels: [String]
    let target: Int
    let tint: Color
    /// Rolls once this turns true.
    let run: Bool
    let onSettled: () -> Void

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var position: Double = 0
    @State private var neighbours: Double = 1
    /// Three rows tall while rolling, one once it has landed, so the line under it closes up.
    @State private var compact = false

    static let rowHeight: CGFloat = 58

    var body: some View {
        Color.clear
            .frame(height: Self.rowHeight * (compact ? 1.7 : 3.2))
            .modifier(WheelRows(position: position, neighbours: neighbours, labels: labels, target: target, tint: tint))
            .mask(
                LinearGradient(
                    stops: [
                        .init(color: .clear, location: 0),
                        .init(color: .black, location: 0.2),
                        .init(color: .black, location: 0.8),
                        .init(color: .clear, location: 1),
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )
            )
            .accessibilityElement()
            .accessibilityLabel(Text(verbatim: labels[target]))
            .onChange(of: run, initial: true) { _, go in
                if go { roll() }
            }
    }

    /// Past the target and back, the way a hand-spun wheel lands.
    private func roll() {
        guard !reduceMotion else {
            position = Double(target)
            neighbours = 0
            compact = true
            onSettled()
            return
        }
        withAnimation(.timingCurve(0.35, 0, 0.15, 1, duration: 1.3)) {
            position = Double(target) + 1.6
        } completion: {
            withAnimation(.spring(duration: 0.7, bounce: 0.2)) {
                position = Double(target)
            } completion: {
                Haptics.tap()
                withAnimation(.easeOut(duration: 0.5)) {
                    neighbours = 0
                    compact = true
                }
                onSettled()
            }
        }
    }
}

/// Draws the rows around `position`, a frame at a time while it animates: big and sharp at the
/// centre, smaller, dimmer and softer the further out.
private struct WheelRows: ViewModifier, Animatable {
    var position: Double
    var neighbours: Double
    let labels: [String]
    let target: Int
    let tint: Color

    var animatableData: AnimatablePair<Double, Double> {
        get { AnimatablePair(position, neighbours) }
        set {
            position = newValue.first
            neighbours = newValue.second
        }
    }

    func body(content: Content) -> some View {
        content.overlay {
            ZStack {
                ForEach(labels.indices, id: \.self) { index in
                    let distance = Double(index) - position
                    let near = max(0, 1 - abs(distance) / 2.4)
                    if near > 0 {
                        Text(verbatim: labels[index])
                            .font(Typeface.figures(46, .extrabold, relativeTo: .largeTitle))
                            .monospacedDigit()
                            .tracking(-1.5)
                            .foregroundStyle(tint)
                            .lineLimit(1)
                            .scaleEffect(0.62 + 0.38 * near)
                            .blur(radius: (1 - near) * 5)
                            .opacity(near * (index == target ? 1 : neighbours))
                            .offset(y: distance * TallyWheel.rowHeight)
                    }
                }
            }
        }
    }
}
