import ActivityKit
import Foundation

/// A round as the Lock Screen and the Dynamic Island draw it. The system counts down from the
/// dates, so the app sends a new state only on a pause, a resume or "+5 min".
struct RoundAttributes: ActivityAttributes {
    struct ContentState: Codable, Hashable {
        /// The round's run with the pauses taken out: it ends at the upper bound.
        var interval: ClosedRange<Date>
        var pausedAt: Date?

        init(_ countdown: Countdown) {
            interval = countdown.endsAt.addingTimeInterval(-countdown.total)...countdown.endsAt
            pausedAt = countdown.pausedAt
        }

        /// Rounded up, as the timer screen's dial is, so the two never disagree.
        var pausedSecondsLeft: Int? {
            pausedAt.map { max(0, Int(interval.upperBound.timeIntervalSince($0).rounded(.up))) }
        }

        /// The share of the round still to play, frozen while paused.
        var leftWhenPaused: Double? {
            guard let pausedAt else { return nil }
            let total = interval.upperBound.timeIntervalSince(interval.lowerBound)
            return max(0, interval.upperBound.timeIntervalSince(pausedAt)) / total
        }
    }

    let title: String
}
