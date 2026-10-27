import FamilyControls
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

struct KidHoursEarnedTests {
    private let now = Date(timeIntervalSince1970: 1_791_000_000)

    private func earned(expiringIn seconds: TimeInterval) -> KidHoursEarned {
        KidHoursEarned(scheduleID: UUID(), minutes: 5, expiresAt: now.addingTimeInterval(seconds))
    }

    @Test func claimableOnlyInsideItsMinute() {
        #expect(earned(expiringIn: 60).isClaimable(at: now))
        #expect(!earned(expiringIn: 0).isClaimable(at: now))
    }

    @Test func oneBankedUntilTheScheduleEndsIsRefused() {
        #expect(!earned(expiringIn: 268 * 60).isClaimable(at: now))
    }
}

struct ShieldStatsTests {
    private let calendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!
        return calendar
    }()
    private let evening = Date(timeIntervalSince1970: 1_791_000_000)

    @Test func countsEachAppOnItsOwn() {
        let stats = ShieldStats()
            .counting("instagram", at: evening, calendar: calendar)
            .counting("instagram", at: evening, calendar: calendar)
            .counting("youtube", at: evening, calendar: calendar)
        #expect(stats.paused == ["instagram": 2, "youtube": 1])
    }

    @Test func startsOverTheNextDayButKeepsTheRounds() {
        var stats = ShieldStats().counting("instagram", at: evening, calendar: calendar)
        stats.rounds = 12
        let tomorrow = stats.counting("youtube", at: evening.addingTimeInterval(24 * 60 * 60), calendar: calendar)
        #expect(tomorrow.paused == ["youtube": 1])
        #expect(tomorrow.rounds == 12)
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

    @Test func settingsSavedBeforeEachScheduleHadItsAppsStillLoad() throws {
        let empty = String(decoding: try JSONEncoder().encode(FamilyActivitySelection()), as: UTF8.self)
        let schedule = String(decoding: try JSONEncoder().encode(afterWork), as: UTF8.self)
        let saved = #"{"selection":\#(empty),"alwaysOpen":\#(empty),"schedules":[\#(schedule)]}"#
        let settings = try JSONDecoder().decode(KidHoursSettings.self, from: Data(saved.utf8))
        #expect(settings.schedules.map(\.id) == [afterWork.id])
        #expect(settings.neverAllowed.isEmpty)
        #expect(settings.opened.isEmpty)
    }

    @Test func aScheduleTurnedOffNeverPauses() {
        var off = afterWork
        off.isEnabled = false
        #expect(!KidHoursSettings(schedules: [off]).isPaused(at: date(weekday: 3, hour: 17, minute: 0), calendar: calendar))
    }

    @Test func countsTheMinutesInsideKidHoursSoFarToday() {
        let settings = KidHoursSettings(schedules: [afterWork, bedtime])
        #expect(settings.pausedMinutes(until: date(weekday: 3, hour: 17, minute: 10), calendar: calendar) == 40)
        #expect(settings.pausedMinutes(until: date(weekday: 3, hour: 23, minute: 0), calendar: calendar) == 240)
    }

    @Test func leavesTheOpenedStretchesOut() {
        var settings = KidHoursSettings(schedules: [afterWork])
        let opened = date(weekday: 3, hour: 17, minute: 0)
        settings.opened = [DateInterval(start: opened, duration: 20 * 60)]
        #expect(settings.pausedMinutes(until: date(weekday: 3, hour: 18, minute: 0), calendar: calendar) == 70)
    }

    @Test func signingOutOpensTheAppsAndPausesNoMinutesUntilSignIn() {
        var settings = KidHoursSettings(schedules: [afterWork])
        settings.signOut(at: date(weekday: 3, hour: 17, minute: 0))
        #expect(!settings.isPaused(at: date(weekday: 3, hour: 17, minute: 30), calendar: calendar))
        #expect(settings.pausedMinutes(until: date(weekday: 3, hour: 18, minute: 0), calendar: calendar) == 30)
        settings.signIn(at: date(weekday: 3, hour: 18, minute: 0))
        #expect(settings.isPaused(at: date(weekday: 3, hour: 18, minute: 10), calendar: calendar))
        #expect(settings.pausedMinutes(until: date(weekday: 3, hour: 18, minute: 30), calendar: calendar) == 60)
    }

    @Test func banksEachDayThatEndedOnce() {
        var settings = KidHoursSettings(schedules: [afterWork, bedtime])
        settings.bankPausedMinutes(now: date(weekday: 3, hour: 10, minute: 0), calendar: calendar)
        settings.opened = [DateInterval(start: date(weekday: 3, hour: 17, minute: 0), duration: 20 * 60)]
        settings.bankPausedMinutes(now: date(weekday: 5, hour: 9, minute: 0), calendar: calendar)
        #expect(settings.bankedMinutes == 220 + 240)
        #expect(settings.opened.isEmpty)
        settings.bankPausedMinutes(now: date(weekday: 5, hour: 23, minute: 0), calendar: calendar)
        #expect(settings.bankedMinutes == 460)
    }

    @Test func aScheduleTurnedOffPausesNoMinutes() {
        var off = afterWork
        off.isEnabled = false
        #expect(KidHoursSettings(schedules: [off]).pausedMinutes(until: date(weekday: 3, hour: 23, minute: 0), calendar: calendar) == 0)
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

    @Test func eachLevelCostsTenMoreThanTheOneBefore() {
        #expect(Bloom.level(at: 49) == 1)
        #expect(Bloom.level(at: 50) == 2)
        #expect(Bloom.level(at: 109) == 2)
        #expect(Bloom.level(at: 110) == 3)
        #expect(Bloom.level(at: Bloom.points(rounds: 34, minutes: 420)) == 9)
    }

    @Test func matchesTheWebThresholds() {
        let at = { (id: String) in World.all.first { $0.id == id }?.unlocksAt }
        #expect(World.all.count == 31)
        #expect([at("frost"), at("lavender"), at("rose"), at("pebble"), at("home")] == [450, 560, 1260, 1430, 5850])
    }

    @Test func runsOutOfWorldsWithoutFailing() {
        #expect(Bloom.nextWorld(after: 10_000) == nil)
        #expect(Bloom.level(at: 10_000) == 31)
    }
}

struct FormatTests {
    @Test func showsOnlyTheLargestUnitRoundedDown() {
        #expect(Format.largestUnit(minutes: 45) == "45m")
        #expect(Format.largestUnit(minutes: 7 * 60 + 40) == "7h")
        #expect(Format.largestUnit(minutes: 3 * 1440 + 23 * 60) == "3d")
    }
}

@MainActor
struct ProgressBackupTests {
    private func store(backup: Backup? = nil, bankedTogether: Int = 0) -> OynoStore {
        OynoStore(isEntitled: { true },
                  bankedTogether: { bankedTogether },
                  backup: { _ in backup },
                  fileURL: URL.temporaryDirectory.appending(path: "rounds-\(UUID()).json"))
    }

    private let round = Round(activityID: "whisper", startedAt: .now, minutes: 10)

    @Test func aReinstallGetsItsPlanetBack() async {
        let oyno = store(backup: Backup(tally: Tally(rounds: 40, minutes: 420)))
        oyno.adopt(userID: "parent")
        await oyno.syncBackup()
        #expect(oyno.tally == Tally(rounds: 40, minutes: 420))
        oyno.record(round)
        #expect(oyno.points == 41 * 10 + 430)
    }

    @Test func togetherCountsThePhoneAndTheBackupOnce() async {
        let oyno = store(backup: Backup(tally: Tally(rounds: 0, minutes: 0, together: 100)), bankedTogether: 30)
        oyno.adopt(userID: "parent")
        await oyno.syncBackup()
        #expect(oyno.tally.together == 100)
    }

    @Test func aTallySavedBeforeTogetherStillLoads() throws {
        let tally = try JSONDecoder().decode(Tally.self, from: Data(#"{"rounds":3,"minutes":30}"#.utf8))
        #expect(tally == Tally(rounds: 3, minutes: 30))
    }

    @Test func aBackupBehindThePhoneNeverShrinksThePlanet() {
        let oyno = store()
        oyno.adopt(userID: "parent")
        oyno.record(round)
        oyno.restore(Backup(tally: Tally(rounds: 5, minutes: 50)))
        oyno.restore(Backup())
        #expect(oyno.tally.rounds == 5)
        #expect(oyno.tally.minutes == 50)
    }

    @Test func anotherAccountStartsWithAnEmptyPlanet() {
        let oyno = store()
        oyno.adopt(userID: "parent")
        oyno.restore(Backup(tally: Tally(rounds: 40, minutes: 420)))
        oyno.adopt(userID: "neighbour")
        #expect(oyno.tally == .zero)
    }

    @Test func aReinstallGetsItsRoundsAndFirstsBack() async {
        let played = [round, Round(activityID: "freeze", startedAt: .now, minutes: 15)]
        let first = First(date: .now, kind: .game, signs: [.triedAgain], words: nil)
        let oyno = store(backup: Backup(tally: played.tally, rounds: played, firsts: [first]))
        oyno.adopt(userID: "parent")
        await oyno.syncBackup()
        #expect(oyno.rounds.count == 2)
        #expect(oyno.firsts == [first])
        #expect(oyno.tally == played.tally)
    }

    @Test func roundsCountedByAnOldBuildAreNotCountedTwiceWhenTheyArrive() {
        let played = [round, Round(activityID: "freeze", startedAt: .now, minutes: 15)]
        let oyno = store()
        oyno.adopt(userID: "parent")
        oyno.restore(Backup(tally: played.tally))
        oyno.restore(Backup(tally: played.tally, rounds: played))
        #expect(oyno.tally == played.tally)
    }

    @Test func theParentsWordsNeverLeaveThePhone() throws {
        let signed = First(date: .now, kind: .bath, signs: [.newWord], words: "Mia said duck")
        let wordsOnly = First(date: .now, kind: .bath, signs: [], words: "Mia splashed")
        let body = try JSONCoding.encoder.encode(Backup(firsts: [signed, wordsOnly]))
        let sent = try JSONCoding.decoder.decode(Backup.self, from: body)
        #expect(!String(decoding: body, as: UTF8.self).contains("Mia"))
        #expect(sent.firsts.map(\.id) == [signed.id])
    }

    @Test func aRoundOfAKindAddedLaterIsSkipped() throws {
        let reply = #"{"rounds":1,"minutes":10,"history":{"rounds":[{"id":"6F9619FF-8B86-D011-B42D-00C04FC964FF","kind":"nap","startedAt":"2026-10-27T18:00:00.000Z","minutes":10}],"firsts":[]}}"#
        let backup = try JSONCoding.decoder.decode(Backup.self, from: Data(reply.utf8))
        #expect(backup.tally.rounds == 1)
        #expect(backup.rounds.isEmpty)
    }
}

struct ReplayTests {
    private let start = Date(timeIntervalSince1970: 1_000_000)

    @Test func playAgainListsTheMostRecentGamesOnce() {
        let rounds = [
            Round(activityID: "mountain", startedAt: start, minutes: 10),
            Round(activityID: "freeze", startedAt: start + 60, minutes: 10),
            Round(activityID: "mountain", startedAt: start + 120, minutes: 10),
            Round(activityID: "parade", startedAt: start + 30, minutes: 15),
        ]
        let replays = rounds.replays(limit: 2)
        #expect(replays == [
            Replay(activityID: "mountain", count: 2, last: start + 120),
            Replay(activityID: "freeze", count: 1, last: start + 60),
        ])
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

    @Test func theClockStopsAtZero() {
        let countdown = Countdown(total: 600, startedAt: start)
        #expect(countdown.secondsLeft(at: start + 900) == 0)
    }

    @Test func fiveMoreMinutesKeepThePauses() {
        var countdown = Countdown(total: 600, startedAt: start)
        countdown.pause(at: start + 100)
        countdown.resume(at: start + 160)
        countdown.extend(by: 300)
        #expect(countdown.secondsLeft(at: start + 200) == 760)
    }

    @Test func theEndMovesWithPausesAndFiveMoreMinutes() {
        var countdown = Countdown(total: 600, startedAt: start)
        countdown.pause(at: start + 100)
        countdown.resume(at: start + 160)
        countdown.extend(by: 300)
        #expect(countdown.endsAt == start + 960)
    }

    @Test func thePausedIslandHoldsWhatWasLeft() {
        var countdown = Countdown(total: 600, startedAt: start)
        countdown.pause(at: start + 150)
        let state = RoundAttributes.ContentState(countdown)
        #expect(state.interval == start...(start + 600))
        #expect(state.leftWhenPaused == 0.75)
        #expect(state.pausedSecondsLeft == countdown.secondsLeft(at: start + 400))
    }
}

struct ActivityTests {
    @Test func everyAgeAndEnergyHasAGame() {
        for age in AgeBand.allCases {
            #expect(Energy.allCases.allSatisfy { !Activity.catalogue(for: $0, age: age).isEmpty })
        }
    }

    /// The listing promises five hundred games, every one three sentences or fewer.
    @Test func theDeckKeepsItsPromises() {
        #expect(Activity.all.count >= 500)
        #expect(Activity.all.allSatisfy { !$0.skills.isEmpty && !$0.evidence.isEmpty })
        #expect(Activity.all.allSatisfy { (1...3).contains($0.steps.count) && (5...15).contains($0.minutes) })
    }

    @Test func theDeckDealsForTheAgeAndEnergy() {
        let games = (0..<50).map { _ in Activity.pick(for: .okay, age: .preschooler) }
        #expect(games.allSatisfy { $0.energy == .okay && $0.age == .preschooler })
        #expect(Set(games).count > 1)
    }

    @Test func aDifferentIdeaIsNeverTheSameGame() {
        let current = Activity.catalogue(for: .okay, age: .toddler)[0]
        let next = (0..<50).map { _ in Activity.next(after: current) }
        #expect(next.allSatisfy { $0 != current && $0.energy == .okay && $0.age == .toddler })
    }

    @Test func everyShippedLanguageHasADeck() {
        let decks = ActivityCatalogue.bundled.decks
        #expect(InterfaceLanguage.supported.filter { decks[$0] == nil }.isEmpty)
    }
}
