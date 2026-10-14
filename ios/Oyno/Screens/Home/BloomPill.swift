import SwiftUI

/// The sun and the bloom level in a glass pill, for a header.
struct BloomPill: View {
    let bloom: Int

    var body: some View {
        HStack(spacing: 6) {
            Image(systemName: "sun.max.fill").foregroundStyle(Palette.caution)
            Text(verbatim: "\(bloom)")
                .oynoValue(14, .extrabold)
                .contentTransition(.numericText())
        }
        .padding(.horizontal, 14)
        .frame(height: Metric.tapTarget)
        .glassCard(radius: Metric.tapTarget / 2)
        .accessibilityElement(children: .combine)
        .accessibilityLabel(Text("Bloom level \(bloom)"))
    }
}
