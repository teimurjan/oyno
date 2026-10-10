import Foundation
import Testing
@testable import Oyno

struct KidHoursScheduleTests {
    private let calendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!
        return calendar
    }()

    private func date(weekday: Int, hour: Int, minute: Int) -> Date {
        // 2026-10-04 is a Sunday (weekday 1).
        let sunday = calendar.date(from: DateComponents(year: 2026, month: 10, day: 4))!
        let day = calendar.date(byAdding: .day, value: weekday - 1, to: sunday)!
        return calendar.date(bySettingHour: hour, minute: minute, second: 0, of: day)!
    }

    @Test func runsInsideTheWindowOnAChosenDay() {
        let schedule = KidHoursSchedule.afterWork(named: "After work")
        #expect(schedule.contains(date(weekday: 3, hour: 17, minute: 0), calendar: calendar))
    }

    @Test func startsOnTheMinuteAndEndsBeforeTheLastOne() {
        let schedule = KidHoursSchedule.afterWork(named: "After work")
        #expect(schedule.contains(date(weekday: 2, hour: 16, minute: 30), calendar: calendar))
        #expect(!schedule.contains(date(weekday: 2, hour: 19, minute: 30), calendar: calendar))
    }

    @Test func aScheduleSavedBeforeUnlocksKeepsUnlockingAfterARound() throws {
        let saved = #"{"id":"6F9619FF-8B86-D011-B42D-00C04FC964FF","name":"After work","start":990,"end":1170,"weekdays":[2,3],"isEnabled":true}"#
        let schedule = try JSONDecoder().decode(KidHoursSchedule.self, from: Data(saved.utf8))
        #expect(schedule.unlocksAfterRound)
        #expect(schedule.unlockMinutes == 20)
    }

    @Test func skipsDaysThatAreNotChosen() {
        #expect(!KidHoursSchedule.afterWork(named: "After work").contains(date(weekday: 1, hour: 17, minute: 0), calendar: calendar))
    }
}

struct KidHoursSettingsTests {
    private let calendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!
        return calendar
    }()

    private let afterWork = KidHoursSchedule.afterWork(named: "After work")
    private let bedtime = KidHoursSchedule(name: "Bedtime", start: 19 * 60 + 30, end: 20 * 60 + 30, weekdays: Set(1...7))

    private func date(weekday: Int, hour: Int, minute: Int) -> Date {
        // 2026-10-04 is a Sunday (weekday 1).
        let sunday = calendar.date(from: DateComponents(year: 2026, month: 10, day: 4))!
        let day = calendar.date(byAdding: .day, value: weekday - 1, to: sunday)!
        return calendar.date(bySettingHour: hour, minute: minute, second: 0, of: day)!
    }

    @Test func twoSchedulesThatMeetHandOverWithoutAGap() {
        let settings = KidHoursSettings(schedules: [afterWork, bedtime])
        let handover = date(weekday: 3, hour: 19, minute: 30)
        #expect(settings.isPaused(at: handover, calendar: calendar))
        #expect(settings.schedule(at: handover, calendar: calendar)?.id == bedtime.id)
        #expect(!settings.isPaused(at: date(weekday: 3, hour: 20, minute: 30), calendar: calendar))
    }

    @Test func anUnlockOpensTheAppsUntilItEnds() {
        var settings = KidHoursSettings(schedules: [afterWork])
        let now = date(weekday: 3, hour: 17, minute: 0)
        settings.unlock = KidHoursUnlock(reason: .round, startedAt: now, endsAt: now.addingTimeInterval(10 * 60))
        #expect(!settings.isPaused(at: now, calendar: calendar))
        #expect(settings.isPaused(at: now.addingTimeInterval(10 * 60), calendar: calendar))
    }

    @Test func aShortUnlockIsWatchedFromThePastSoScreenTimeTakesIt() {
        let now = date(weekday: 3, hour: 17, minute: 0)
        let short = KidHoursUnlock(reason: .round, startedAt: now, endsAt: now.addingTimeInterval(10 * 60))
        let long = KidHoursUnlock(reason: .notNow, startedAt: now, endsAt: now.addingTimeInterval(30 * 60))
        #expect(short.endsAt.timeIntervalSince(short.monitoredStart) == 15 * 60)
        #expect(long.monitoredStart == now)
    }

    @Test func anEndHeardOnTheMinuteStillEndsTheUnlock() {
        let now = date(weekday: 3, hour: 17, minute: 0)
        let unlock = KidHoursUnlock(reason: .round, startedAt: now, endsAt: now.addingTimeInterval(10 * 60 + 40))
        #expect(unlock.isEnding(at: now.addingTimeInterval(10 * 60)))
        #expect(!unlock.isEnding(at: now.addingTimeInterval(5 * 60)))
    }

    @Test func anUnlockEndsOnAWholeMinuteSoTheShortestKeepsItsMinute() {
        let now = date(weekday: 3, hour: 17, minute: 0).addingTimeInterval(40)
        #expect(KidHoursUnlock.end(minutes: 1, from: now) == date(weekday: 3, hour: 17, minute: 2))
        #expect(KidHoursUnlock.end(minutes: 1, from: date(weekday: 3, hour: 17, minute: 0)) == date(weekday: 3, hour: 17, minute: 1))
    }

    @Test func aScheduleTurnedOffNeverPauses() {
        var off = afterWork
        off.isEnabled = false
        #expect(!KidHoursSettings(schedules: [off]).isPaused(at: date(weekday: 3, hour: 17, minute: 0), calendar: calendar))
    }

    @Test func theNextStartSkipsDaysNotChosen() {
        let saturday = date(weekday: 7, hour: 10, minute: 0)
        #expect(afterWork.nextStart(after: saturday, calendar: calendar) == date(weekday: 2, hour: 16, minute: 30).addingTimeInterval(7 * 86_400))
        #expect(bedtime.nextStart(after: saturday, calendar: calendar) == date(weekday: 7, hour: 19, minute: 30))
    }
}

struct BloomTests {
    @Test func everyFamilyStartsOnEarth() {
        #expect(Bloom.currentWorld(at: 0).id == "earth")
        #expect(Bloom.nextWorld(after: 0)?.id == "meadow")
    }

    @Test func countsTheRoundsLeftToTheNextWorld() {
        #expect(Bloom.roundsToNextWorld(from: 2) == 1)
        #expect(Bloom.currentWorld(at: 3).id == "meadow")
        #expect(Bloom.roundsToNextWorld(from: 18) == 4)
    }

    @Test func matchesTheWebThresholds() {
        let at = { (id: String) in World.all.first { $0.id == id }?.unlocksAt }
        #expect(World.all.count == 31)
        #expect([at("frost"), at("lavender"), at("rose"), at("pebble"), at("home")] == [18, 22, 42, 47, 150])
    }

    @Test func runsOutOfWorldsWithoutFailing() {
        #expect(Bloom.nextWorld(after: 500) == nil)
        #expect(Bloom.roundsToNextWorld(from: 500) == nil)
    }
}

struct CountdownTests {
    private let start = Date(timeIntervalSince1970: 1_000_000)

    @Test func aPauseStopsTheClock() {
        var countdown = Countdown(total: 600, startedAt: start)
        countdown.pause(at: start + 100)
        #expect(countdown.elapsed(at: start + 160) == 100)
        countdown.resume(at: start + 160)
        #expect(countdown.elapsed(at: start + 200) == 140)
        #expect(countdown.secondsLeft(at: start + 200) == 460)
    }

    @Test func stepsSplitTheRoundEvenlyAndTheLastOneHolds() {
        let countdown = Countdown(total: 600, startedAt: start)
        #expect(countdown.step(of: 3, at: start) == 0)
        #expect(countdown.step(of: 3, at: start + 200) == 1)
        #expect(countdown.step(of: 3, at: start + 900) == 2)
        #expect(countdown.secondsLeft(at: start + 900) == 0)
    }
}

struct ActivityTests {
    @Test func everyEnergyHasAGame() {
        #expect(Energy.allCases.allSatisfy { !Activity.catalogue(for: $0).isEmpty })
    }

    @Test func aDifferentIdeaWrapsAroundTheSameEnergy() {
        let games = Activity.catalogue(for: .okay)
        let last = games[games.count - 1]
        #expect(Activity.pick(for: .okay, after: last) == games[0])
        #expect(Activity.pick(for: .okay, after: games[0]) == games[1])
    }

    @Test func everyShippedLanguageHasADeck() {
        let decks = ActivityCatalogue.bundled.decks
        #expect(InterfaceLanguage.supported.filter { decks[$0] == nil }.isEmpty)
    }
}
