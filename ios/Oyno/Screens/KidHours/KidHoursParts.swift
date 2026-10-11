import FamilyControls
import ManagedSettings
import SwiftUI

// The pieces `KidHoursScreen` is built from, in the order they appear on it.

struct SectionHeader<Trailing: View>: View {
    let title: LocalizedStringResource
    @ViewBuilder var trailing: Trailing

    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            Text(title)
                .font(Typeface.ui(17, .extrabold, relativeTo: .headline))
                .tracking(-0.3)
                .foregroundStyle(Palette.ink)
            Spacer()
            trailing
        }
    }
}

struct EditLink: View {
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            Text("Edit")
                .font(Typeface.ui(13, .bold, relativeTo: .footnote))
                .foregroundStyle(Palette.ink)
                .frame(minWidth: Metric.tapTarget, minHeight: 32)
                .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }
}

/// "On now · ends in 1h 48m": green while the apps are paused, glass otherwise.
struct StatusPill: View {
    let text: String
    let on: Bool

    var body: some View {
        Text(verbatim: text)
            .font(Typeface.ui(11, .extrabold, relativeTo: .caption2))
            .foregroundStyle(on ? ScheduleTint.on.ink : Palette.muted)
            .padding(.horizontal, 9)
            .frame(height: 22)
            .background(on ? ScheduleTint.on.fill : Palette.glass, in: .capsule)
    }
}

/// One of the other schedules, in the row under the featured one. The card opens the schedule.
struct ScheduleCard: View {
    let schedule: KidHoursSchedule
    let summary: String
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            VStack(alignment: .leading, spacing: 8) {
                Glyph(symbol: tint.symbol, size: 16, weight: .semibold, color: tint.ink)
                    .frame(width: 34, height: 34)
                    .background(tint.fill, in: .rect(cornerRadius: 12))
                Text(verbatim: schedule.name)
                    .font(Typeface.ui(15, .extrabold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.ink)
                    .lineLimit(1)
                Text(verbatim: schedule.isEnabled ? summary : String(interface: "Off"))
                    .font(Typeface.ui(12, .semibold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
                    .lineLimit(1)
            }
            .padding(14)
            .frame(width: 150, alignment: .leading)
            .glassCard()
            .opacity(schedule.isEnabled ? 1 : 0.6)
        }
        .buttonStyle(.plain)
    }

    private var tint: ScheduleTint { ScheduleTint.forStart(minutes: schedule.start) }
}

/// How a schedule reads on its card and in its sheet.
@MainActor
enum ScheduleWords {
    static func summary(_ schedule: KidHoursSchedule) -> String {
        "\(Format.weekdays(schedule.weekdays)) · \(Format.timeRange(start: schedule.start, end: schedule.end))"
    }

    /// "On now · ends in 1h 48m", "Apps open until 6:10 PM", "Starts Mon 4:30 PM" or "Off".
    static func status(_ schedule: KidHoursSchedule, in kidHours: KidHoursStore) -> String {
        if schedule.id == kidHours.current?.id, let ends = schedule.end(on: .now) {
            return String(interface: "On now · ends in \(Format.remaining(until: ends))")
        }
        if let end = kidHours.unlockEnd, schedule.contains(.now) {
            return String(interface: "Apps open until \(Format.timeOfDay(date: end))")
        }
        guard schedule.isEnabled, let next = schedule.nextStart(after: .now) else { return String(interface: "Off") }
        return String(interface: "Starts \(Format.dayAndTime(next))")
    }
}

/// The dashed "Add" at the end of the schedules row.
struct AddCard: View {
    let width: CGFloat
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            VStack(spacing: 6) {
                Glyph(symbol: "plus", size: 16, weight: .bold, color: Palette.muted)
                Text("Add")
                    .font(Typeface.ui(13, .bold, relativeTo: .footnote))
                    .foregroundStyle(Palette.muted)
            }
            .frame(width: width)
            .frame(maxHeight: .infinity)
            .padding(.vertical, 14)
            .overlay(RoundedRectangle(cornerRadius: Metric.Radius.card).strokeBorder(style: StrokeStyle(lineWidth: 2, dash: [6, 5])).foregroundStyle(Palette.ink.opacity(0.18)))
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }
}

/// Five icons across: what is picked, a "+N" for what the two rows have no room for, and a
/// plus when nothing is picked yet.
struct TokenGrid: View {
    let items: [TokenItem]
    let edit: () -> Void

    /// Two rows of five: enough to recognise the list, with the rest behind "+N".
    private static let limit = 10

    var body: some View {
        let shown = items.prefix(items.count > Self.limit ? Self.limit - 1 : Self.limit)
        LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 8), count: 5), spacing: 10) {
            ForEach(Array(shown), id: \.self) { item in TokenTile(item: item).frame(maxWidth: .infinity) }
            if items.count > shown.count {
                DashedTile(text: "+\(items.count - shown.count)", caption: String(interface: "More"), action: edit)
            }
            if items.isEmpty {
                DashedTile(symbol: "plus", caption: String(interface: "Choose apps"), action: edit)
            }
        }
    }
}

/// An app, a category or a site the parent picked, as its icon alone, drawn by Screen Time so
/// the app never learns which one it is.
struct TokenTile: View {
    let item: TokenItem
    var size: CGFloat = 54

    var body: some View {
        Group {
            if case .placeholder(let name) = item {
                placeholder(name)
            } else {
                Fitted(height: size * 0.74, width: size * 0.74) { icon }
            }
        }
        .frame(width: size, height: size)
        .glassCard(radius: size * 0.3)
    }

    @ViewBuilder
    private var icon: some View {
        switch item {
        case .app(let token): Label(token).labelStyle(.iconOnly)
        case .category(let token): Label(token).labelStyle(.iconOnly)
        case .domain(let token): Label(token).labelStyle(.iconOnly)
        case .placeholder: EmptyView()
        }
    }

    /// The screenshot harness's stand-in for a token: the app's icon from the Debug-only
    /// `ScreenshotIcons` catalog, else its first letter.
    @ViewBuilder
    private func placeholder(_ name: String) -> some View {
        if let image = UIImage(named: name) {
            let side = size * 0.74
            Image(uiImage: image)
                .resizable()
                .frame(width: side, height: side)
                .clipShape(.rect(cornerRadius: side * 0.225, style: .continuous))
                .accessibilityLabel(Text(verbatim: name))
        } else {
            Text(verbatim: String(name.prefix(1)))
                .font(Typeface.ui(size * 0.37, .extrabold, relativeTo: .title3))
                .foregroundStyle(Palette.muted)
                .accessibilityLabel(Text(verbatim: name))
        }
    }
}

/// The dashed tile: "+2" for what the grid has no room for, or a plus when it is empty. The
/// caption is read out, not drawn, so the tile lines up with the icons beside it.
struct DashedTile: View {
    var text: String?
    var symbol: String?
    let caption: String
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            Group {
                if let text {
                    Text(verbatim: text).font(Typeface.ui(15, .extrabold, relativeTo: .subheadline))
                } else {
                    Glyph(symbol: symbol ?? "plus", size: 18, weight: .bold, color: Palette.muted)
                }
            }
            .foregroundStyle(Palette.muted)
            .frame(width: 54, height: 54)
            .overlay(RoundedRectangle(cornerRadius: 16).strokeBorder(style: StrokeStyle(lineWidth: 2, dash: [6, 5])).foregroundStyle(Palette.ink.opacity(0.18)))
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityLabel(Text(verbatim: caption))
    }
}

/// The running unlock, folded into the featured schedule: a countdown, the amber draining as it
/// runs, and "Lock" to end it early.
struct UnlockStrip: View {
    let unlock: KidHoursUnlock
    let end: Date
    /// The countdown reached zero.
    let onEnd: () -> Void
    let onLock: () -> Void

    var body: some View {
        TimelineView(.periodic(from: .now, by: 1)) { context in
            let left = max(0, Int(end.timeIntervalSince(context.date).rounded(.up)))
            HStack(spacing: 10) {
                Glyph(symbol: "lock.open.fill", size: 13, weight: .bold, color: Palette.pastelAmber.ink)
                Text(verbatim: Format.clock(seconds: left))
                    .font(Typeface.figures(16, .extrabold, relativeTo: .callout))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
                    .contentTransition(.numericText(countsDown: true))
                    .animation(.default, value: left)
                    .accessibilityLabel(Text("Apps open, \(left / 60) minutes \(left % 60) seconds left"))
                bar(left: left)
                StripButton(title: "Lock", action: onLock)
            }
            .strip(Palette.pastelAmber)
            .onChange(of: left == 0) { _, done in if done { onEnd() } }
        }
    }

    private func bar(left: Int) -> some View {
        let total = max(1, end.timeIntervalSince(unlock.startedAt))
        return GeometryReader { geometry in
            ZStack(alignment: .leading) {
                Capsule().fill(Palette.pastelAmber.ink.opacity(0.14))
                Capsule().fill(Palette.amber).frame(width: geometry.size.width * min(1, Double(left) / total))
            }
        }
        .frame(height: 5)
        .animation(.linear(duration: 1), value: left)
        .accessibilityHidden(true)
    }
}

/// What the last round earned, folded into the featured schedule for the minute it lasts.
struct EarnedStrip: View {
    let earned: KidHoursEarned
    let onClaim: () -> Void

    var body: some View {
        TimelineView(.periodic(from: .now, by: 1)) { context in
            let left = max(0, Int(earned.expiresAt.timeIntervalSince(context.date).rounded(.up)))
            HStack(spacing: 10) {
                Glyph(symbol: "gift.fill", size: 13, weight: .bold, color: Palette.pastelGreen.ink)
                HStack(spacing: 5) {
                    Text("\(earned.minutes) min earned").foregroundStyle(Palette.ink)
                    Text("\(Format.clock(seconds: left)) left")
                        .foregroundStyle(Palette.muted)
                        .contentTransition(.numericText(countsDown: true))
                        .animation(.default, value: left)
                }
                .font(Typeface.figures(14, .bold, relativeTo: .subheadline))
                .monospacedDigit()
                .lineLimit(1)
                .minimumScaleFactor(0.8)
                .accessibilityElement(children: .combine)
                Spacer(minLength: 0)
                StripButton(title: "Unlock", action: onClaim)
            }
            .strip(Palette.pastelGreen)
        }
    }
}

/// The small white pill at a strip's end. Drawn at 32pt, it still takes a 44pt tap.
private struct StripButton: View {
    let title: LocalizedStringResource
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            Text(title)
                .font(Typeface.ui(13, .bold, relativeTo: .footnote))
                .foregroundStyle(Palette.ink)
                .padding(.horizontal, 12)
                .frame(height: 32)
                .background(Palette.surface, in: .capsule)
                .frame(minWidth: Metric.tapTarget, minHeight: Metric.tapTarget)
                .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }
}

private extension View {
    /// A strip's tinted capsule, its button inset as far from the end as from the edges.
    func strip(_ pastel: Palette.Pastel) -> some View {
        padding(.leading, 14)
            .padding(.trailing, 6)
            .frame(height: Metric.tapTarget)
            .background(pastel.fill, in: .capsule)
            .accessibilityElement(children: .contain)
    }
}

/// How long a round unlocks for, drawn like the sheet's weekday row: the picked one in ink.
struct MinuteChips: View {
    @Binding var selection: Int

    var body: some View {
        HStack(spacing: 6) {
            ForEach(KidHoursSchedule.unlockChoices, id: \.self) { minutes in
                let on = minutes == selection
                Button {
                    Haptics.tap()
                    selection = minutes
                } label: {
                    Text("\(minutes) min")
                        .font(Typeface.figures(13, .bold, relativeTo: .caption))
                        .monospacedDigit()
                        .lineLimit(1)
                        .minimumScaleFactor(0.8)
                        .foregroundStyle(on ? Palette.onAccent : Palette.ink)
                        .frame(maxWidth: .infinity)
                        .frame(height: Metric.tapTarget)
                        .background(on ? Palette.accent : Palette.track, in: .capsule)
                }
                .buttonStyle(.plain)
                .accessibilityAddTraits(on ? .isSelected : [])
            }
        }
    }
}

/// "Not now", held for two seconds.
struct HoldRow: View {
    let title: LocalizedStringResource
    let hint: String
    let enabled: Bool
    let action: () -> Void

    @State private var progress: CGFloat = 0

    var body: some View {
        HStack(spacing: Metric.Space.s) {
            Text(title)
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(enabled ? Palette.ink : Palette.muted)
            Spacer()
            Text(verbatim: hint)
                .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
            if enabled { HoldRing(progress: progress) }
        }
        .padding(.horizontal, Metric.cardPadding)
        .frame(height: 52)
        .contentShape(.rect)
        .holdToConfirm(progress: $progress, action: action)
        .disabled(!enabled)
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(.isButton)
        .accessibilityAction { if enabled { action() } }
    }
}

/// The pastel tiles the canvas gives a schedule's icon and the "on" pill.
struct ScheduleTint {
    let fill: Color
    let ink: Color
    var symbol = ""

    static let on = ScheduleTint(Palette.pastelGreen)
    static let morning = ScheduleTint(Palette.pastelAmber, symbol: "sunrise.fill")
    static let afternoon = ScheduleTint(Palette.pastelGreen, symbol: "sun.max.fill")
    static let night = ScheduleTint(Palette.pastelLavender, symbol: "moon.fill")

    private init(_ pastel: Palette.Pastel, symbol: String = "") {
        fill = pastel.fill
        ink = pastel.ink
        self.symbol = symbol
    }

    static func forStart(minutes: Int) -> ScheduleTint {
        if minutes < 12 * 60 { return morning }
        if minutes < 18 * 60 { return afternoon }
        return night
    }
}
