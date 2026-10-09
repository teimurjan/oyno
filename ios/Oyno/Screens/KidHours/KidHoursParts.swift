import FamilyControls
import ManagedSettings
import SwiftUI

// The pieces `KidHoursScreen` is built from, in the order they appear on it.

/// The header's "New": a glass pill rather than the ink one, so the switch stays the one
/// ink fill on this screen.
struct NewButton: View {
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: 6) {
                Glyph(symbol: "plus", size: 13, weight: .bold)
                Text("New")
                    .font(Typeface.ui(14, .bold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.ink)
            }
            .padding(.horizontal, 14)
            .frame(height: Metric.compactControl)
            .glassCard(radius: Metric.compactControl / 2)
        }
        .buttonStyle(.plain)
    }
}

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

/// One of the other schedules, in the row under the featured one.
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
            ForEach(Array(shown), id: \.self) { item in TokenTile(item: item) }
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

    var body: some View {
        Group {
            if case .placeholder(let name) = item {
                Text(verbatim: String(name.prefix(1)))
                    .font(Typeface.ui(20, .extrabold, relativeTo: .title3))
                    .foregroundStyle(Palette.muted)
                    .accessibilityLabel(Text(verbatim: name))
            } else {
                Fitted(height: 40, width: 40) { icon }
            }
        }
        .frame(width: 54, height: 54)
        .glassCard(radius: 16)
        .frame(maxWidth: .infinity)
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
}

/// A Screen Time label at the size a tile wants. Those labels set their own font and size and
/// ignore ours, so the one lever left is a transform: measure what the system drew, then scale
/// it. The icon arrives small, so a scaled one is a little soft; there is no API for a bigger one.
struct Fitted<Content: View>: View {
    let height: CGFloat
    /// The box to fit into, or the content's own width at that height.
    var width: CGFloat?
    @ViewBuilder var content: Content

    @State private var natural = CGSize.zero

    private var scale: CGFloat {
        guard natural.width > 0, natural.height > 0 else { return 1 }
        let byHeight = height / natural.height
        return width.map { min(byHeight, $0 / natural.width) } ?? byHeight
    }

    var body: some View {
        content
            .fixedSize()
            .onGeometryChange(for: CGSize.self) { $0.size } action: { natural = $0 }
            .scaleEffect(scale)
            .frame(width: width ?? natural.width * scale, height: height)
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
