import Foundation

/// The facts of the Sunday letter: the planet writing to the family about its week. The screen
/// turns them into sentences. Nil for a week with no moment in it, because there is nothing to
/// write about and nothing to feel bad about.
struct WeekLetter: Equatable {
    let week: Week
    let evenings: Int
    let goal: Int
    /// Moments of each kind, in the menu's order, the empty ones left out.
    let counts: [(kind: MomentKind, count: Int)]
    let minutes: Int
    /// The newest first noticed this week.
    let first: First?
    /// The newest keepsake found this week.
    let keepsakeID: String?

    static func compose(week: Week, rounds: [Round], firsts: [First], goal: Int, calendar: Calendar = .current) -> WeekLetter? {
        let mine = week.rounds(rounds, calendar: calendar)
        guard !mine.isEmpty else { return nil }
        return WeekLetter(
            week: week,
            evenings: week.evenings(in: mine, calendar: calendar),
            goal: goal,
            counts: MomentKind.allCases.compactMap { kind in
                let count = mine.filter { $0.kind == kind }.count
                return count > 0 ? (kind, count) : nil
            },
            minutes: mine.totalMinutes,
            first: firsts.filter { week.contains($0.date, calendar: calendar) }.max { $0.date < $1.date },
            keepsakeID: mine.filter { $0.keepsakeID != nil }.max { $0.startedAt < $1.startedAt }?.keepsakeID
        )
    }

    static func == (lhs: WeekLetter, rhs: WeekLetter) -> Bool {
        lhs.week == rhs.week && lhs.evenings == rhs.evenings && lhs.goal == rhs.goal
            && lhs.counts.map(\.kind) == rhs.counts.map(\.kind) && lhs.counts.map(\.count) == rhs.counts.map(\.count)
            && lhs.minutes == rhs.minutes && lhs.first == rhs.first && lhs.keepsakeID == rhs.keepsakeID
    }
}
