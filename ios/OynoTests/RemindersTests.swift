import Foundation
import Testing
@testable import Oyno

struct RemindersTests {
    private static let calendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!
        return calendar
    }()

    /// Monday 2 November 2026, noon.
    private static let monday = calendar.date(from: DateComponents(year: 2026, month: 11, day: 2, hour: 12))!

    private func at(days: Int, hour: Int = 12) -> Date {
        Self.calendar.date(byAdding: .hour, value: days * 24 + hour - 12, to: Self.monday)!
    }

    private func round(on date: Date) -> Round { Round(activityID: "whisper", startedAt: date, minutes: 10) }

    private func catalogue(_ rules: [(id: String, settings: String, versions: [String])]) -> ReminderCatalogue {
        let reminders = rules.map { #"{"id":"\#($0.id)","group":"\#($0.id.hasPrefix("kid-hours") ? "kid-hours" : "reminders")","tap":"play","settings":{\#($0.settings)}}"# }
        let deck = rules.map { rule in
            #""\#(rule.id)":[\#(rule.versions.map { #"{"title":"\#($0)","body":"Body"}"# }.joined(separator: ","))]"#
        }
        let json = #"{"reminders":[\#(reminders.joined(separator: ","))],"decks":{"en":{\#(deck.joined(separator: ","))}}}"#
        return try! JSONDecoder().decode(ReminderCatalogue.self, from: Data(json.utf8))
    }

    private func state(now: Date = monday, rounds: [Round] = [], points: Int = 0) -> ReminderState {
        ReminderState(
            now: now, rounds: rounds, roundsEver: rounds.count, points: points, pointsPerMoment: 25, weekGoal: 3,
            kidName: "", game: "Whisper", gameSkill: "Focus", lowEnergyGame: "Sofa", practice: nil,
            untriedMoments: [], keepsakesLeft: 10, schedules: [], remindersOn: true, kidHoursOn: true
        )
    }

    private func plan(_ state: ReminderState, _ catalogue: ReminderCatalogue, ledger: ReminderLedger = ReminderLedger()) -> ReminderPlan.Plan {
        ReminderPlan.make(state: state, ledger: ledger, catalogue: catalogue, language: "en", calendar: Self.calendar)
    }

    private func day(_ date: Date) -> Int {
        Self.calendar.dateComponents([.day], from: Self.calendar.startOfDay(for: Self.monday), to: Self.calendar.startOfDay(for: date)).day!
    }

    @Test func atMostOneADayAndTheHigherSectionWins() {
        let rules = catalogue([
            ("keepsakes-waiting", #""every":1,"at":1110"#, ["Hidden"]),
            ("low-energy", #""every":1,"at":1140"#, ["Tired"]),
        ])
        let dated = plan(state(rounds: [round(on: at(days: -10))]), rules).dated
        #expect(dated.count == ReminderPlan.horizonDays)
        #expect(Set(dated.map { day($0.date) }).count == dated.count)
        #expect(dated.allSatisfy { $0.id == .keepsakesWaiting })
    }

    @Test func nothingGoesOutOnADayWithARound() {
        let rules = catalogue([("low-energy", #""every":1,"at":1140"#, ["Tired"])])
        let dated = plan(state(rounds: [round(on: at(days: 0, hour: 9))]), rules).dated
        #expect(dated.first.map { day($0.date) } == 1)
    }

    @Test func theLetterIsDefendedOnTheLastDayItCanStillBeWon() {
        let rules = catalogue([("letter-at-risk", #""at":1080"#, ["Your letter needs {evenings}"])])
        let dated = plan(state(rounds: [round(on: at(days: -3))]), rules).dated
        // Three evenings still needed: Friday, Saturday and Sunday are the last three.
        #expect(dated.map { day($0.date) } == [4, 11])
        #expect(dated.first?.title == "Your letter needs 3 evenings")
    }

    @Test func comebackGoesOutTwiceAfterTheLastRoundThenStops() {
        let rules = catalogue([("comeback", #""after":3,"again":7,"at":1110"#, ["Back to {game}"])])
        let dated = plan(state(now: at(days: 1), rounds: [round(on: at(days: 0, hour: 9))]), rules).dated
        #expect(dated.map { day($0.date) } == [3, 7])
        #expect(dated.first?.title == "Back to Whisper")
    }

    @Test func aWorldIsAnnouncedOnce() {
        let rules = catalogue([("world-close", #""within":2,"at":1110"#, ["{world} is {moments} away"])])
        let meadow = World.all[1]
        let close = state(rounds: [round(on: at(days: -1))], points: meadow.unlocksAt - 30)
        let dated = plan(close, rules).dated
        #expect(dated.count == 1)
        #expect(dated.first?.title == "\(meadow.name) is 2 moments away")
        let announced = ReminderLedger(pending: dated).settled(at: at(days: 30))
        #expect(plan(close, rules, ledger: announced).dated.isEmpty)
    }

    @Test func versionsTakeTurnsAndSkipTheKidWithoutAName() {
        let rules = catalogue([("low-energy", #""every":1,"at":1140"#, ["One", "For {kid}", "Two"])])
        let unnamed = plan(state(rounds: [round(on: at(days: -10))]), rules).dated.prefix(4).map(\.title)
        #expect(unnamed == ["One", "Two", "One", "Two"])
        var named = state(rounds: [round(on: at(days: -10))])
        named.kidName = "Mia"
        #expect(plan(named, rules).dated.prefix(3).map(\.title) == ["One", "For Mia", "Two"])
    }

    @Test func aFamilyThatNeverPlayedHearsOnlyTheFirstRoundAndTheEasyGame() {
        let rules = catalogue([
            ("keepsakes-waiting", #""every":1,"at":1110"#, ["Hidden"]),
            ("first-round", #""after":1,"again":3,"at":1110"#, ["First"]),
            ("low-energy", #""every":5,"at":1140"#, ["Tired"]),
        ])
        let dated = plan(state(), rules, ledger: ReminderLedger(firstSeen: Self.monday)).dated
        #expect(dated.allSatisfy { $0.id != .keepsakesWaiting })
        #expect(dated.filter { $0.id == .firstRound }.map { day($0.date) } == [1, 3])
    }

    @Test func kidHoursNoticesFollowTheEnabledSchedulesOnly() {
        let rules = catalogue([
            ("kid-hours-start", "", ["{schedule} starts"]),
            ("kid-hours-end", "", ["{schedule} is over"]),
        ])
        var after = KidHoursSchedule.afterWork(named: "After work")
        var off = KidHoursSchedule.afterWork(named: "Weekend")
        off.isEnabled = false
        after.weekdays = [2, 4]
        var withSchedules = state()
        withSchedules.schedules = [after, off]
        let weekly = plan(withSchedules, rules).weekly
        #expect(weekly.count == 4)
        #expect(weekly.first == WeeklyReminder(
            id: .kidHoursStart, identifier: "kidhours.\(after.id.uuidString).2.kid-hours-start",
            weekday: 2, minute: after.start, title: "After work starts", body: "Body", tap: .play
        ))
    }

    @Test func turnedOffMeansNothing() {
        let rules = catalogue([("low-energy", #""every":1,"at":1140"#, ["Tired"])])
        var off = state(rounds: [round(on: at(days: -10))])
        off.remindersOn = false
        #expect(plan(off, rules).dated.isEmpty)
    }

    @Test func theBundleKnowsEveryReminderInEveryLanguage() {
        let bundled = ReminderCatalogue.bundled
        #expect(Set(bundled.reminders.map(\.id)) == Set(ReminderID.allCases))
        for language in InterfaceLanguage.supported {
            for id in ReminderID.allCases {
                #expect(!bundled.versions(of: id, in: language).isEmpty, "\(language) has no \(id.rawValue)")
            }
        }
    }
}
