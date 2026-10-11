import SwiftUI

/// A schedule at a glance, the small size of its sheet: its hours, days, apps and unlock, and
/// the one switch that pauses or resumes it.
struct ScheduleSummary: View {
    let schedule: KidHoursSchedule

    @Environment(KidHoursStore.self) private var kidHours
    @Environment(OynoStore.self) private var oyno
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        VStack(spacing: Metric.Space.l) {
            VStack(spacing: Metric.Space.s) {
                icon
                Text(verbatim: ScheduleWords.status(schedule, in: kidHours))
                    .font(Typeface.ui(13, .semibold, relativeTo: .footnote))
                    .foregroundStyle(Palette.muted)
                Text(verbatim: schedule.name)
                    .font(Typeface.ui(24, .extrabold, relativeTo: .title2))
                    .tracking(-0.5)
                    .foregroundStyle(Palette.ink)
                    .multilineTextAlignment(.center)
            }

            RowCard {
                DetailRow(label: "During this time") {
                    Text(verbatim: Format.timeRange(start: schedule.start, end: schedule.end))
                }
                RowDivider(inset: 0)
                DetailRow(label: "On these days") {
                    Text(verbatim: Format.weekdays(schedule.weekdays))
                }
                RowDivider(inset: 0)
                DetailRow(label: "Pauses") { AppsPreview(items: kidHours.apps(of: schedule)) }
                RowDivider(inset: 0)
                DetailRow(label: "Unlock after a round") {
                    Text(schedule.unlocksAfterRound ? "\(schedule.unlockMinutes) min" : "Off")
                }
            }

            switchButton
        }
    }

    private var icon: some View {
        let tint = ScheduleTint.forStart(minutes: schedule.start)
        return Glyph(symbol: tint.symbol, size: 24, weight: .semibold, color: tint.ink)
            .frame(width: 56, height: 56)
            .background(tint.fill, in: .rect(cornerRadius: 18))
    }

    /// Turning on is the paid part; pausing never is. Refused, the sheet steps aside so the
    /// paywall can take the screen.
    private var switchButton: some View {
        Button {
            Haptics.tap()
            if !schedule.isEnabled, !oyno.requireEntitlement() { return dismiss() }
            kidHours.setEnabled(!schedule.isEnabled, for: schedule)
        } label: {
            HStack(spacing: 8) {
                Glyph(symbol: schedule.isEnabled ? "pause.fill" : "play.fill", size: 15, weight: .bold)
                Text(schedule.isEnabled ? "Pause schedule" : "Turn on schedule")
                    .font(Typeface.ui(16, .bold, relativeTo: .callout))
                    .foregroundStyle(Palette.ink)
            }
            .frame(maxWidth: .infinity)
            .frame(height: Metric.primaryButton)
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }
}

/// Up to three app icons, then the count, or "None".
struct AppsPreview: View {
    let items: [TokenItem]

    var body: some View {
        HStack(spacing: 6) {
            ForEach(Array(items.prefix(3)), id: \.self) { TokenTile(item: $0, size: 26) }
            Text(items.isEmpty ? "None" : "\(items.count) apps")
                .font(Typeface.figures(15, .medium, relativeTo: .subheadline))
                .monospacedDigit()
                .foregroundStyle(Palette.muted)
                .lineLimit(1)
                .fixedSize()
        }
    }
}

/// A label on the left and its value on the right, in the summary's card.
private struct DetailRow<Value: View>: View {
    let label: LocalizedStringResource
    @ViewBuilder var value: Value

    var body: some View {
        HStack(spacing: Metric.Space.m) {
            Text(label)
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.ink)
            Spacer(minLength: Metric.Space.s)
            value
                .font(Typeface.figures(15, .medium, relativeTo: .subheadline))
                .monospacedDigit()
                .foregroundStyle(Palette.muted)
                .lineLimit(1)
        }
        .padding(.horizontal, Metric.cardPadding)
        .frame(minHeight: 52)
    }
}
