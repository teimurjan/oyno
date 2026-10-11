import SwiftUI

/// A game's steps, numbered on pastel grounds, all of them at once: on the play screen before
/// a round and on the timer during it.
struct StepList: View {
    let steps: [String]

    var body: some View {
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            ForEach(Array(steps.enumerated()), id: \.offset) { index, step in
                let tint = Palette.pastels[index % Palette.pastels.count]
                HStack(alignment: .top, spacing: Metric.Space.m) {
                    Text(verbatim: "\(index + 1)")
                        .font(Typeface.figures(13, .extrabold, relativeTo: .caption))
                        .foregroundStyle(tint.ink)
                        .frame(width: 28, height: 28)
                        .background(tint.fill, in: .circle)
                    Text(verbatim: step)
                        .font(Typeface.ui(15, .regular, relativeTo: .body))
                        .foregroundStyle(Palette.ink)
                        .lineSpacing(3)
                        .padding(.top, 4)
                        .fixedSize(horizontal: false, vertical: true)
                }
                .accessibilityElement(children: .combine)
            }
        }
    }
}
