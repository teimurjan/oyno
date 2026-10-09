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
        let schedule = KidHoursSchedule.afterWork
        #expect(schedule.contains(date(weekday: 3, hour: 17, minute: 0), calendar: calendar))
    }

    @Test func startsOnTheMinuteAndEndsBeforeTheLastOne() {
        let schedule = KidHoursSchedule.afterWork
        #expect(schedule.contains(date(weekday: 2, hour: 16, minute: 30), calendar: calendar))
        #expect(!schedule.contains(date(weekday: 2, hour: 19, minute: 30), calendar: calendar))
    }

    @Test func skipsDaysThatAreNotChosen() {
        #expect(!KidHoursSchedule.afterWork.contains(date(weekday: 1, hour: 17, minute: 0), calendar: calendar))
    }
}

struct BloomTests {
    @Test func everyFamilyStartsOnTheHomePlanet() {
        #expect(Bloom.currentWorld(at: 0).id == "home")
        #expect(Bloom.nextWorld(after: 0)?.id == "meadow")
    }

    @Test func countsTheRoundsLeftToTheNextWorld() {
        #expect(Bloom.roundsToNextWorld(from: 4) == 2)
        #expect(Bloom.currentWorld(at: 6).id == "meadow")
    }

    @Test func runsOutOfWorldsWithoutFailing() {
        #expect(Bloom.nextWorld(after: 500) == nil)
        #expect(Bloom.roundsToNextWorld(from: 500) == nil)
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
}
