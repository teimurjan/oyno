import Foundation

/// A round's clock, pauses taken out. Pure, so the timer screen only asks it questions on
/// each tick and the arithmetic can be tested without one.
struct Countdown {
    private(set) var total: TimeInterval
    private(set) var startedAt: Date
    private(set) var pausedAt: Date?
    private(set) var pausedFor: TimeInterval = 0

    init(total: TimeInterval, startedAt: Date = .now) {
        self.total = total
        self.startedAt = startedAt
    }

    var isPaused: Bool { pausedAt != nil }

    /// How much of the round has run by `now`, never past `total`.
    func elapsed(at now: Date) -> TimeInterval {
        let until = pausedAt ?? now
        return min(total, max(0, until.timeIntervalSince(startedAt) - pausedFor))
    }

    func secondsLeft(at now: Date) -> Int {
        Int((total - elapsed(at: now)).rounded(.up))
    }

    mutating func pause(at now: Date) {
        guard pausedAt == nil else { return }
        pausedAt = now
    }

    mutating func resume(at now: Date) {
        guard let pausedAt else { return }
        pausedFor += max(0, now.timeIntervalSince(pausedAt))
        self.pausedAt = nil
    }

    /// The round runs longer: "+5 min".
    mutating func extend(by seconds: TimeInterval) {
        total += max(0, seconds)
    }
}
