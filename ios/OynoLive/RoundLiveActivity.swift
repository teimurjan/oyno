import ActivityKit
import SwiftUI
import WidgetKit

/// The timer screen's dial, small: the amber is what is left, and the clock counts down on its
/// own from the round's dates. A tap opens Oyno on the timer.
struct RoundLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: RoundAttributes.self) { context in
            LockScreenRound(title: context.attributes.title, state: context.state, isOver: context.isStale)
                .activityBackgroundTint(Palette.canvas)
                .activitySystemActionForegroundColor(Palette.ink)
        } dynamicIsland: { context in
            let state = context.state
            return DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    RoundRing(state: state)
                        .frame(width: 44, height: 44)
                        .padding(.leading, 4)
                }
                DynamicIslandExpandedRegion(.trailing) {
                    RoundClock(state: state, isOver: context.isStale)
                        .font(Typeface.figures(34, .extrabold, relativeTo: .largeTitle))
                        .foregroundStyle(Palette.amber)
                        .padding(.trailing, 4)
                }
                DynamicIslandExpandedRegion(.center) {
                    Text(verbatim: context.attributes.title)
                        .font(Typeface.ui(15, .bold, relativeTo: .headline))
                        .foregroundStyle(.white)
                        .lineLimit(1)
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text(verbatim: RoundStatus.line(state: state, isOver: context.isStale))
                        .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(.white.opacity(0.7))
                }
            } compactLeading: {
                RoundRing(state: state).frame(width: 18, height: 18)
            } compactTrailing: {
                RoundClock(state: state, isOver: context.isStale)
                    .font(Typeface.figures(15, .bold, relativeTo: .body))
                    .foregroundStyle(Palette.amber)
                    .frame(maxWidth: 52)
            } minimal: {
                RoundRing(state: state).frame(width: 18, height: 18)
            }
            .keylineTint(Palette.amber)
        }
    }
}

private struct LockScreenRound: View {
    let title: String
    let state: RoundAttributes.ContentState
    let isOver: Bool

    var body: some View {
        HStack(spacing: 14) {
            RoundRing(state: state)
                .frame(width: 52, height: 52)
            VStack(alignment: .leading, spacing: 2) {
                Text(verbatim: title)
                    .font(Typeface.ui(16, .extrabold, relativeTo: .headline))
                    .foregroundStyle(Palette.ink)
                    .lineLimit(2)
                Text(verbatim: RoundStatus.line(state: state, isOver: isOver))
                    .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
            }
            Spacer(minLength: 8)
            RoundClock(state: state, isOver: isOver)
                .font(Typeface.figures(40, .extrabold, relativeTo: .largeTitle))
                .foregroundStyle(Palette.ink)
        }
        .padding(16)
        .background(Palette.goldenSky)
    }
}

/// Counts itself down while the round runs, and holds what was left while it is paused.
private struct RoundClock: View {
    let state: RoundAttributes.ContentState
    let isOver: Bool

    var body: some View {
        Group {
            if isOver {
                Text(verbatim: Format.clock(seconds: 0))
            } else if let seconds = state.pausedSecondsLeft {
                Text(verbatim: Format.clock(seconds: seconds))
            } else {
                Text(timerInterval: state.interval, countsDown: true)
            }
        }
        .monospacedDigit()
        .multilineTextAlignment(.trailing)
        .lineLimit(1)
        .minimumScaleFactor(0.6)
    }
}

private struct RoundRing: View {
    let state: RoundAttributes.ContentState

    var body: some View {
        Group {
            if let left = state.leftWhenPaused {
                ProgressView(value: left)
            } else {
                ProgressView(timerInterval: state.interval, countsDown: true) {
                    EmptyView()
                } currentValueLabel: {
                    EmptyView()
                }
            }
        }
        .progressViewStyle(.circular)
        .tint(Palette.amber)
        .labelsHidden()
    }
}

private enum RoundStatus {
    /// "left of 10:00", "Paused" or "Time's up", beside the clock.
    static func line(state: RoundAttributes.ContentState, isOver: Bool) -> String {
        if isOver { return String(interface: "Time's up") }
        if state.pausedAt != nil { return String(interface: "Paused") }
        let total = Int(state.interval.upperBound.timeIntervalSince(state.interval.lowerBound))
        return String(interface: "left of \(Format.clock(seconds: total))")
    }
}
