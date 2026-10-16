import SwiftUI

/// A game's steps, numbered on pastel grounds, all of them at once: on the play screen before
/// a round and on the timer during it.
struct StepList: View {
    let steps: [String]
    /// A size up, for an iPad's width.
    var large = false

    var body: some View {
        VStack(alignment: .leading, spacing: large ? Metric.Space.xl : Metric.Space.m) {
            ForEach(Array(steps.enumerated()), id: \.offset) { index, step in
                let tint = Palette.pastels[index % Palette.pastels.count]
                HStack(alignment: .top, spacing: large ? 14 : Metric.Space.m) {
                    Text(verbatim: "\(index + 1)")
                        .font(Typeface.figures(large ? 15 : 13, .extrabold, relativeTo: .caption))
                        .foregroundStyle(tint.ink)
                        .frame(width: large ? 34 : 28, height: large ? 34 : 28)
                        .background(tint.fill, in: .circle)
                    Text(verbatim: step)
                        .font(Typeface.ui(large ? 18 : 15, .regular, relativeTo: .body))
                        .foregroundStyle(Palette.ink)
                        .lineSpacing(large ? 4 : 3)
                        .padding(.top, large ? 5 : 4)
                        .fixedSize(horizontal: false, vertical: true)
                }
                .accessibilityElement(children: .combine)
            }
        }
    }
}
