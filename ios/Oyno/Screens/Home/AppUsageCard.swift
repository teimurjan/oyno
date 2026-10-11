import DeviceActivity
import SwiftUI

extension DeviceActivityReport.Context {
    /// Home's screen time card, drawn by `OynoReport`.
    static let todayApps = Self("todayApps")
}

/// Today's screen time on this phone and the apps that took most of it. Only `OynoReport` can
/// read it, so the app draws one only for the screenshot harness.
struct AppUsage {
    struct Row: Identifiable {
        let id: String
        let name: String
        let duration: TimeInterval
        /// Kid hours pause it, so its bar is drawn as a cost.
        let isPaused: Bool
    }

    let total: TimeInterval
    /// The longest first, at most `AppUsageCard.rowLimit`.
    let rows: [Row]
}

/// The card's contents, without the glass: Screen Time draws a report in its own process, where
/// a material has nothing behind it to blur, so the host draws the card around it.
struct AppUsageCard<Icon: View>: View {
    let usage: AppUsage
    @ViewBuilder let icon: (AppUsage.Row) -> Icon

    static var rowLimit: Int { 5 }
    private static var rowHeight: CGFloat { 56 }
    private static var iconSize: CGFloat { 36 }
    /// Room after the longest bar for its figure.
    private static var figureWidth: CGFloat { 64 }

    /// A hosted report does not size itself, so the host frames it at the height of a full list.
    static var height: CGFloat { 104 + CGFloat(rowLimit) * rowHeight }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            VStack(alignment: .leading, spacing: 2) {
                Text("Screen time").oynoEyebrow()
                Text(verbatim: Format.duration(usage.total)).oynoHeadlineValue(34)
                Text("Today").oynoCaption()
            }
            .padding(.bottom, Metric.Space.m)
            .accessibilityElement(children: .combine)

            Rectangle().fill(Palette.hairline).frame(height: 1)

            if usage.rows.isEmpty {
                Text("No screen time yet today.")
                    .oynoCaption()
                    .padding(.top, Metric.Space.l)
            }
            ForEach(usage.rows) { row in
                rowView(row)
            }
        }
        .padding(Metric.cardPadding)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
    }

    private var longest: TimeInterval { usage.rows.map(\.duration).max() ?? 0 }

    private func rowView(_ row: AppUsage.Row) -> some View {
        HStack(spacing: Metric.Space.m) {
            Fitted(height: Self.iconSize, width: Self.iconSize) { icon(row) }
            VStack(alignment: .leading, spacing: 6) {
                Text(verbatim: row.name).oynoRowTitle().lineLimit(1)
                bar(row)
            }
        }
        .frame(height: Self.rowHeight)
        .accessibilityElement(children: .combine)
    }

    private func bar(_ row: AppUsage.Row) -> some View {
        let color = row.isPaused ? Palette.alert : Palette.accent
        let share = longest > 0 ? row.duration / longest : 0
        return GeometryReader { space in
            HStack(spacing: Metric.Space.s) {
                Capsule()
                    .fill(color)
                    .frame(width: max(Metric.barHeight, (space.size.width - Self.figureWidth) * share), height: Metric.barHeight)
                Text(verbatim: Format.duration(row.duration)).oynoValue(14, .semibold, color: color)
            }
        }
        .frame(height: 18)
    }
}
