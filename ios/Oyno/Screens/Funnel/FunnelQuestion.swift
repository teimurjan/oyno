import SwiftUI

/// The one question: how often the phone comes out in an hour with the kid. The answer is
/// what the news that follows is summed from. Picking is the continue — a second tap per
/// question is another chance to leave.
struct FunnelQuestion: View {
    let onPick: (Pickups) -> Void

    @State private var picked: Pickups?

    var body: some View {
        VStack(spacing: Metric.Space.s) {
            FunnelLine(text: String(interface: "How often do you pick it up [in an hour] with them?"), size: 25)
                .padding(.bottom, Metric.Space.xl)
                .funnelRise()
            ForEach(Array(Pickups.allCases.enumerated()), id: \.element) { index, option in
                FunnelChoice(emoji: option.emoji, title: option.title, selected: picked == option) {
                    pick(option)
                }
                .funnelRise(after: 0.2 + 0.09 * Double(index))
            }
        }
        .funnelColumn()
    }

    /// The target is taken on the first tap, so a second one in the pause lands nowhere.
    private func pick(_ option: Pickups) {
        guard picked == nil else { return }
        picked = option
        Task {
            guard await funnelPause(220) else { return }
            onPick(option)
        }
    }
}

private extension Pickups {
    var emoji: String {
        switch self {
        case .rare: "🙂"
        case .few: "🤏"
        case .often: "🔁"
        case .lost: "🌀"
        }
    }

    var title: String {
        switch self {
        case .rare: String(interface: "Hardly ever")
        case .few: String(interface: "Once or twice")
        case .often: String(interface: "Every few minutes")
        case .lost: String(interface: "I lose count")
        }
    }
}

/// One option. An accent border when picked and nothing else moves, so the rows below stay
/// where the thumb expects them.
private struct FunnelChoice: View {
    let emoji: String
    let title: String
    let selected: Bool
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: Metric.Space.m) {
                Text(verbatim: emoji)
                    .font(.system(size: 19))
                    .accessibilityHidden(true)
                Text(verbatim: title)
                    .font(Typeface.ui(17, .medium, relativeTo: .body))
                    .foregroundStyle(Palette.ink)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .fixedSize(horizontal: false, vertical: true)
                ZStack {
                    Circle().strokeBorder(selected ? Palette.accent : Palette.chevron, lineWidth: 1.5)
                    if selected {
                        Circle().fill(Palette.accent)
                        Image(systemName: "checkmark")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(Palette.onAccent)
                    }
                }
                .frame(width: 20, height: 20)
                .accessibilityHidden(true)
            }
            .padding(.horizontal, Metric.cardPadding)
            .padding(.vertical, 14)
            .background(Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
            .overlay(
                RoundedRectangle(cornerRadius: Metric.Radius.card)
                    .strokeBorder(selected ? Palette.accent : Palette.hairline, lineWidth: selected ? 2 : 1)
            )
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }
}
