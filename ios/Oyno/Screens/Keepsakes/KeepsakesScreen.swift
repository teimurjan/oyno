import SwiftUI

/// D17 on the canvas: all twenty-four keepsakes, the found ones painted and the rest dashed.
/// Each kind of moment leaves its own, and a few are rare.
struct KeepsakesScreen: View {
    @Environment(OynoStore.self) private var oyno
    @Environment(\.dismiss) private var dismiss
    @Environment(\.adaptive) private var adaptive

    private var columns: [GridItem] {
        Array(repeating: GridItem(.flexible(), spacing: Metric.Space.m), count: adaptive.columns == .two ? 6 : 4)
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Metric.Space.l) {
                if !adaptive.barsAreSystem {
                    HStack(spacing: Metric.Space.s) {
                        GlassIconButton(symbol: "chevron.left", label: "Back") { dismiss() }
                        Text("Keepsakes")
                            .font(Typeface.ui(17, .extrabold, relativeTo: .headline))
                            .foregroundStyle(Palette.ink)
                            .frame(maxWidth: .infinity)
                            .accessibilityAddTraits(.isHeader)
                        Color.clear.frame(width: Metric.tapTarget, height: Metric.tapTarget)
                    }
                }
                VStack(alignment: .leading, spacing: 6) {
                    Text("\(oyno.keepsakesFound.count) of \(Keepsake.all.count) found")
                        .font(Typeface.figures(28, .extrabold, relativeTo: .title))
                        .monospacedDigit()
                        .tracking(-0.8)
                        .foregroundStyle(Palette.ink)
                    Text("Each kind of moment leaves its own, and a few are rare. They stay on your planet for good.")
                        .font(Typeface.ui(15, .medium, relativeTo: .body))
                        .foregroundStyle(Palette.muted)
                        .fixedSize(horizontal: false, vertical: true)
                }
                ForEach(Self.shelves, id: \.kind) { shelf in
                    VStack(alignment: .leading, spacing: Metric.Space.s) {
                        Text(shelf.title).oynoEyebrow()
                        LazyVGrid(columns: columns, spacing: Metric.Space.m) {
                            ForEach(Keepsake.all.filter { $0.kind == shelf.kind }) { keepsake in
                                slot(keepsake)
                            }
                        }
                    }
                }
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.xl)
            .readableWidth()
        }
        .scrollIndicators(.hidden)
        .background(Palette.sky.ignoresSafeArea())
        .systemBar(adaptive)
        .navigationTitle(Text("Keepsakes"))
        .navigationBarTitleDisplayMode(.inline)
        .swipesBack()
    }

    @ViewBuilder
    private func slot(_ keepsake: Keepsake) -> some View {
        let found = oyno.keepsakesFound.contains(keepsake.id)
        VStack(spacing: 6) {
            Group {
                if found {
                    KeepsakeArt(keepsake: keepsake, side: 52)
                        .frame(maxWidth: .infinity).frame(height: 72)
                        .background(Palette.surface.opacity(0.7), in: .rect(cornerRadius: 18))
                        .overlay {
                            RoundedRectangle(cornerRadius: 18)
                                .strokeBorder(keepsake.isRare ? Palette.amber : Palette.hairline, lineWidth: keepsake.isRare ? 1.5 : 1)
                        }
                } else {
                    MissingSlot().frame(maxWidth: .infinity).frame(height: 72)
                }
            }
            Text(found ? keepsake.name : "Not found yet")
                .font(Typeface.ui(12, .semibold, relativeTo: .caption))
                .foregroundStyle(found ? Palette.ink : Palette.faint)
                .multilineTextAlignment(.center)
                .lineLimit(2)
                .minimumScaleFactor(0.85)
        }
        .accessibilityElement(children: .combine)
    }

    private static let shelves: [(kind: Keepsake.Kind, title: LocalizedStringResource)] = [
        (.game, "From games"),
        (.reading, "From books"),
        (.bath, "From baths"),
        (.cooking, "From the kitchen"),
        (.lead, "From their lead"),
        (.rare, "Rare finds"),
    ]
}
