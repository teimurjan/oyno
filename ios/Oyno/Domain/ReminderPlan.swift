import Foundation

/// What the reminders may speak of, read once each time the app plans. The words are already in
/// the interface language, so the planner only picks days and fills in braces.
struct ReminderState {
    var now: Date
    /// The rounds on this phone, for the week, the last moment and today.
    var rounds: [Round]
    /// Every round the account played, the backed-up ones included.
    var roundsEver: Int
    var points: Int
    var pointsPerMoment: Int
    var weekGoal: Int
    var kidName: String
    /// Tonight's game for the parent's energy, and a skill it builds.
    var game: String
    var gameSkill: String
    var lowEnergyGame: String
    /// The month's most practiced skill, nil before any practice.
    var practice: Practice?
    /// The moments, by name, whose first one still leaves a keepsake, for the kid's age.
    var untriedMoments: [String]
    var keepsakesLeft: Int
    var schedules: [KidHoursSchedule]
    var remindersOn: Bool
    var kidHoursOn: Bool

    struct Practice {
        let skill: String
        let label: String
        let minutes: Int
        /// A game that practices it.
        let game: String
    }
}

/// One reminder on a date: a capped one, sent once.
struct PlannedReminder: Codable, Equatable {
    let id: ReminderID
    let date: Date
    let title: String
    let body: String
    let tap: ReminderCatalogue.Tap
    /// Which version went out, so the next one takes another.
    let version: Int
    /// What it announced, so it is not announced twice: a world, a week, a milestone.
    let mark: String?
}

/// A Kid hours notice, repeated every week on one weekday.
struct WeeklyReminder: Equatable {
    let id: ReminderID
    let identifier: String
    /// `Calendar` weekday: 1 is Sunday.
    let weekday: Int
    /// Minutes after midnight.
    let minute: Int
    let title: String
    let body: String
    let tap: ReminderCatalogue.Tap
}

/// What already went out, kept between plans, so cooldowns and "once per world" hold although
/// the app plans again every time it opens.
struct ReminderLedger: Codable, Equatable {
    /// The first plan after the first run: where "first-round" counts from.
    var firstSeen: Date?
    var lastSent: [String: Date] = [:]
    var lastVersion: [String: Int] = [:]
    var marks: Set<String> = []
    /// The last plan. What of it is past has been delivered.
    var pending: [PlannedReminder] = []

    /// The pending reminders whose time has come, counted as sent.
    func settled(at now: Date) -> ReminderLedger {
        var ledger = self
        for reminder in pending where reminder.date <= now {
            ledger.record(reminder)
        }
        ledger.pending = pending.filter { $0.date > now }
        return ledger
    }

    fileprivate mutating func record(_ reminder: PlannedReminder) {
        lastSent[reminder.id.rawValue] = max(lastSent[reminder.id.rawValue] ?? .distantPast, reminder.date)
        lastVersion[reminder.id.rawValue] = reminder.version
        if let mark = reminder.mark { marks.insert(mark) }
    }
}

/// Picks the reminders for the next two weeks: at most one capped reminder a day, the first in
/// `en.md` that has something to say winning the day, and the Kid hours notices on their own.
/// Pure: the dates assume no more rounds, which holds because a round makes the app plan again.
enum ReminderPlan {
    static let horizonDays = 14

    struct Plan: Equatable {
        var dated: [PlannedReminder] = []
        var weekly: [WeeklyReminder] = []
    }

    static func make(
        state: ReminderState,
        ledger: ReminderLedger,
        catalogue: ReminderCatalogue,
        language: String,
        calendar: Calendar = .current
    ) -> Plan {
        var plan = Plan()
        if state.remindersOn {
            plan.dated = dated(state: state, ledger: ledger, catalogue: catalogue, language: language, calendar: calendar)
        }
        if state.kidHoursOn {
            plan.weekly = weekly(state: state, catalogue: catalogue, language: language)
        }
        return plan
    }

    private static func dated(
        state: ReminderState,
        ledger: ReminderLedger,
        catalogue: ReminderCatalogue,
        language: String,
        calendar: Calendar
    ) -> [PlannedReminder] {
        var ledger = ledger
        var planned: [PlannedReminder] = []
        let today = calendar.startOfDay(for: state.now)
        let playedToday = !state.rounds.on(state.now, calendar: calendar).isEmpty
        let rules = catalogue.reminders.filter { $0.group == .reminders }

        for offset in 0..<horizonDays {
            guard let day = calendar.date(byAdding: .day, value: offset, to: today) else { continue }
            for rule in rules {
                let at = rule.setting("at")
                guard let date = calendar.date(bySettingHour: at / 60, minute: at % 60, second: 0, of: day),
                      date > state.now,
                      offset > 0 || !playedToday || rule.id == .letterReady,
                      let occasion = occasion(rule, on: day, state: state, ledger: ledger, calendar: calendar),
                      let words = words(for: rule.id, filling: occasion.fills, state: state, ledger: ledger,
                                        catalogue: catalogue, language: language)
                else { continue }
                let reminder = PlannedReminder(id: rule.id, date: date, title: words.title, body: words.body,
                                               tap: rule.tap, version: words.version, mark: occasion.mark)
                planned.append(reminder)
                ledger.record(reminder)
                break
            }
        }
        return planned
    }

    /// What a reminder would say on `day`, nil when it has nothing to say then.
    private struct Occasion {
        var fills: [String: String] = [:]
        var mark: String?
    }

    private static func occasion(
        _ rule: ReminderCatalogue.Rule,
        on day: Date,
        state: ReminderState,
        ledger: ReminderLedger,
        calendar: Calendar
    ) -> Occasion? {
        let hasPlayed = state.roundsEver > 0
        guard hasPlayed || rule.id == .firstRound || rule.id == .lowEnergy else { return nil }
        let rested = { (every: Int) -> Bool in
            guard let last = ledger.lastSent[rule.id.rawValue] else { return true }
            return days(from: last, to: day, calendar: calendar) >= every
        }

        switch rule.id {
        case .letterAtRisk:
            let week = Week.containing(day, calendar: calendar)
            let needed = state.weekGoal - week.evenings(in: week.rounds(state.rounds, calendar: calendar), calendar: calendar)
            let daysLeft = days(from: day, to: week.sunday(calendar: calendar), calendar: calendar) + 1
            let mark = "letter-at-risk:\(dayKey(week.start, calendar: calendar))"
            guard needed > 0, needed == daysLeft, !ledger.marks.contains(mark) else { return nil }
            return Occasion(fills: ["evenings": evenings(needed), "goal": "\(state.weekGoal)"], mark: mark)

        case .letterReady:
            let week = Week.containing(day, calendar: calendar)
            let played = week.evenings(in: week.rounds(state.rounds, calendar: calendar), calendar: calendar)
            let mark = "letter-ready:\(dayKey(week.start, calendar: calendar))"
            guard week.letterIsReady(on: day, calendar: calendar), played > 0, !ledger.marks.contains(mark) else { return nil }
            return Occasion(fills: ["evenings": evenings(played)], mark: mark)

        case .worldClose:
            guard let next = Bloom.nextWorld(after: state.points),
                  let left = Bloom.momentsToNext(points: state.points, perMoment: state.pointsPerMoment),
                  left <= rule.setting("within"),
                  !ledger.marks.contains("world:\(next.id)")
            else { return nil }
            return Occasion(fills: ["world": next.name, "moments": moments(left)], mark: "world:\(next.id)")

        case .firstRound:
            guard !hasPlayed, let first = ledger.firstSeen,
                  [rule.setting("after"), rule.setting("again")].contains(days(from: first, to: day, calendar: calendar))
            else { return nil }
            return Occasion(fills: ["game": state.game])

        case .comeback:
            guard let last = state.rounds.map(\.startedAt).max(),
                  [rule.setting("after"), rule.setting("again")].contains(days(from: last, to: day, calendar: calendar))
            else { return nil }
            return Occasion(fills: ["game": state.game, "skill": state.gameSkill])

        case .practiceMilestone:
            guard let practice = state.practice,
                  calendar.isDate(day, equalTo: state.now, toGranularity: .month),
                  rule.setting("every") > 0
            else { return nil }
            let milestone = practice.minutes / rule.setting("every") * rule.setting("every")
            let mark = "practice:\(monthKey(state.now, calendar: calendar)):\(practice.skill):\(milestone)"
            guard milestone > 0, !ledger.marks.contains(mark) else { return nil }
            return Occasion(
                fills: ["minutes": minutes(practice.minutes), "skill": practice.label, "game": practice.game],
                mark: mark
            )

        case .keepsakeFirstMoment:
            guard let moment = state.untriedMoments.first, rested(rule.setting("every")) else { return nil }
            return Occasion(fills: ["moment": moment])

        case .keepsakesWaiting:
            guard state.keepsakesLeft > 0, rested(rule.setting("every")) else { return nil }
            return Occasion(fills: ["keepsakes": keepsakes(state.keepsakesLeft)])

        case .lowEnergy:
            guard rested(rule.setting("every")) else { return nil }
            return Occasion(fills: ["game": state.lowEnergyGame])

        case .kidHoursStart, .kidHoursEnd:
            return nil
        }
    }

    /// The versions take turns. One with `{kid}` is skipped when no name is set.
    private static func words(
        for id: ReminderID,
        filling fills: [String: String],
        state: ReminderState,
        ledger: ReminderLedger,
        catalogue: ReminderCatalogue,
        language: String
    ) -> (title: String, body: String, version: Int)? {
        let versions = catalogue.versions(of: id, in: language)
        let named = !state.kidName.isEmpty
        let usable = versions.indices.filter { named || !mentionsKid(versions[$0]) }
        let last = ledger.lastVersion[id.rawValue] ?? -1
        guard let version = usable.first(where: { $0 > last }) ?? usable.first else { return nil }
        var fills = fills
        if named { fills["kid"] = state.kidName }
        return (fill(versions[version].title, fills), fill(versions[version].body, fills), version)
    }

    private static func weekly(state: ReminderState, catalogue: ReminderCatalogue, language: String) -> [WeeklyReminder] {
        let named = !state.kidName.isEmpty
        return state.schedules.filter(\.isEnabled).flatMap { schedule in
            schedule.weekdays.sorted().flatMap { weekday -> [WeeklyReminder] in
                [(ReminderID.kidHoursStart, schedule.start), (.kidHoursEnd, schedule.end)].compactMap { id, minute in
                    guard let rule = catalogue.rule(id) else { return nil }
                    let versions = catalogue.versions(of: id, in: language)
                    let usable = versions.filter { named || !mentionsKid($0) }
                    guard !usable.isEmpty else { return nil }
                    let words = usable[weekday % usable.count]
                    var fills = ["schedule": schedule.name, "end": Format.timeOfDay(minutes: schedule.end)]
                    if named { fills["kid"] = state.kidName }
                    return WeeklyReminder(
                        id: id, identifier: "kidhours.\(schedule.id.uuidString).\(weekday).\(id.rawValue)",
                        weekday: weekday, minute: minute,
                        title: fill(words.title, fills), body: fill(words.body, fills), tap: rule.tap
                    )
                }
            }
        }
    }

    private static func mentionsKid(_ words: ReminderCatalogue.Words) -> Bool {
        words.title.contains("{kid}") || words.body.contains("{kid}")
    }

    private static func fill(_ text: String, _ fills: [String: String]) -> String {
        fills.reduce(text) { $0.replacingOccurrences(of: "{\($1.key)}", with: $1.value) }
    }

    private static func days(from start: Date, to end: Date, calendar: Calendar) -> Int {
        calendar.dateComponents([.day], from: calendar.startOfDay(for: start), to: calendar.startOfDay(for: end)).day ?? 0
    }

    private static func dayKey(_ date: Date, calendar: Calendar) -> String {
        let parts = calendar.dateComponents([.year, .month, .day], from: date)
        return "\(parts.year ?? 0)-\(parts.month ?? 0)-\(parts.day ?? 0)"
    }

    private static func monthKey(_ date: Date, calendar: Calendar) -> String {
        let parts = calendar.dateComponents([.year, .month], from: date)
        return "\(parts.year ?? 0)-\(parts.month ?? 0)"
    }

    private static func evenings(_ count: Int) -> String { String(interface: "\(count) evenings") }
    private static func moments(_ count: Int) -> String { String(interface: "\(count) moments") }
    private static func keepsakes(_ count: Int) -> String { String(interface: "\(count) keepsakes") }
    private static func minutes(_ count: Int) -> String { String(interface: "\(count) minutes") }
}
