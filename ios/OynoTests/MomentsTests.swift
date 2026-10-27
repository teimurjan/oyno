import Foundation
import Testing
@testable import Oyno

struct KeepsakeTests {
    private func ids(_ kind: Keepsake.Kind) -> Set<String> { Set(Keepsake.all.filter { $0.kind == kind }.map(\.id)) }

    @Test func theFirstMomentOfAKindAlwaysLeavesOneOfItsOwn() {
        let found = Keepsake.award(for: .bath, found: [], roll: { 0.99 })
        #expect(found?.kind == .bath)
    }

    @Test func laterMomentsLeaveOneAboutOneTimeInFour() {
        let found: Set<String> = ["paper-boat"]
        #expect(Keepsake.award(for: .bath, found: found, roll: { 0.3 }) == nil)
        #expect(Keepsake.award(for: .bath, found: found, roll: { 0.2 })?.kind == .bath)
    }

    @Test func neverRepeatsAndFallsThroughToRareOnceAKindIsDone() {
        let found = ids(.bath)
        let next = Keepsake.award(for: .bath, found: found, roll: { 0.2 })
        #expect(next?.kind == .rare)
        #expect(!found.contains(next?.id ?? ""))
    }

    @Test func leavesNothingOnceEveryKeepsakeIsFound() {
        #expect(Keepsake.award(for: .game, found: Set(Keepsake.all.map(\.id)), roll: { 0 }) == nil)
    }

    @Test func everyMomentShowsItsPainting() {
        for moment in Activity.moments {
            #expect(Painting.of(moment) != nil, "\(moment.id)")
        }
    }

    @Test func everyPetalAroundThePlanetIsPainted() {
        for drift in PlanetHalo.petals {
            #expect(Painting.petal(drift.petal) != nil, "\(drift.petal)")
        }
    }

    @Test func everyKeepsakeHasAPaintingInTheBundle() {
        for keepsake in Keepsake.all {
            #expect(Bundle.main.url(forResource: "keepsake-\(keepsake.id)", withExtension: "webp") != nil, "\(keepsake.id)")
        }
    }
}

struct WeekTests {
    private let calendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!
        return calendar
    }()

    /// 2026-10-26 is a Monday.
    private func day(_ offset: Int, hour: Int = 18) -> Date {
        let monday = calendar.date(from: DateComponents(year: 2026, month: 10, day: 26, hour: hour))!
        return calendar.date(byAdding: .day, value: offset, to: monday)!
    }

    private func round(on date: Date, kind: MomentKind = .game, keepsake: String? = nil) -> Round {
        Round(kind: kind, activityID: kind == .game ? "whisper" : nil, startedAt: date, minutes: 15, keepsakeID: keepsake)
    }

    @Test func runsMondayToSundayWhateverTheLocale() {
        let week = Week.containing(day(6), calendar: calendar)
        #expect(week.start == calendar.startOfDay(for: day(0)))
        #expect(week.letterIsReady(on: day(6), calendar: calendar))
        #expect(!week.letterIsReady(on: day(5), calendar: calendar))
    }

    @Test func anEveningCountsOnceAndARestDayCostsNothing() {
        let rounds = [round(on: day(0)), round(on: day(0, hour: 19)), round(on: day(2))]
        let week = Week.containing(day(3), calendar: calendar)
        #expect(week.evenings(in: rounds, calendar: calendar) == 2)
        #expect(week.dots(rounds, today: day(3), calendar: calendar) == [.done, .rest, .done, .today, .later, .later, .later])
    }

    @Test func theLetterSumsTheWeekAndItsNewestKeepsake() {
        let rounds = [
            round(on: day(0), kind: .bath, keepsake: "paper-boat"),
            round(on: day(1)),
            round(on: day(3), kind: .reading, keepsake: "tiny-book"),
            round(on: day(-1)),
        ]
        let first = First(date: day(3), kind: .reading, signs: [.newWord], words: nil)
        let week = Week.containing(day(6), calendar: calendar)
        let letter = WeekLetter.compose(week: week, rounds: rounds, firsts: [first], goal: 3, calendar: calendar)
        #expect(letter?.evenings == 3)
        #expect(letter?.minutes == 45)
        #expect(letter?.counts.map(\.kind) == [.game, .reading, .bath])
        #expect(letter?.keepsakeID == "tiny-book")
        #expect(letter?.first == first)
    }

    @Test func anEmptyWeekHasNoLetter() {
        let week = Week.containing(day(6), calendar: calendar)
        #expect(WeekLetter.compose(week: week, rounds: [round(on: day(-2))], firsts: [], goal: 3, calendar: calendar) == nil)
    }
}

struct PracticeTests {
    @Test func aMomentsMinutesCountToEachOfItsSkills() {
        let rounds = [
            Round(kind: .bath, activityID: nil, startedAt: .now, minutes: 15, skills: ["inhibitory-control", "working-memory"]),
            Round(kind: .reading, activityID: nil, startedAt: .now, minutes: 10, skills: ["attention", "working-memory"]),
            Round(kind: .bath, activityID: nil, startedAt: .now, minutes: 5, skills: ["inhibitory-control"]),
        ]
        let practice = Practice.bySkill(rounds) { $0.skills }
        #expect(practice.map(\.skill) == ["working-memory", "inhibitory-control", "attention", "cognitive-flexibility"])
        #expect(practice.map(\.minutes) == [25, 20, 10, 0])
        #expect(practice[0].mostlyFrom == [.bath, .reading])
    }
}

struct EveningTests {
    private let calendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!
        return calendar
    }()

    /// Tuesday 2026-10-27 at `hour`.
    private func at(_ hour: Int) -> Date { calendar.date(from: DateComponents(year: 2026, month: 10, day: 27, hour: hour))! }

    private let weekdays = [KidHoursSchedule(name: "School nights", start: 17 * 60, end: 19 * 60, weekdays: [2, 3, 4, 5, 6])]

    @Test func followsTheClockAroundKidHours() {
        #expect(Evening.at(at(15), schedules: weekdays, playedToday: false, calendar: calendar) == .before(start: at(17)))
        #expect(Evening.at(at(18), schedules: weekdays, playedToday: false, calendar: calendar) == .during(end: at(19)))
        #expect(Evening.at(at(20), schedules: weekdays, playedToday: true, calendar: calendar) == .after)
        #expect(Evening.at(at(20), schedules: weekdays, playedToday: false, calendar: calendar) == .free)
        #expect(Evening.at(at(18), schedules: [], playedToday: false, calendar: calendar) == .free)
    }
}

struct RoundFileTests {
    @Test func aRoundSavedBeforeMomentsLoadsAsAGame() throws {
        let saved = #"{"id":"6F9619FF-8B86-D011-B42D-00C04FC964FF","activityID":"whisper","startedAt":800000000,"minutes":10}"#
        let round = try JSONDecoder().decode(Round.self, from: Data(saved.utf8))
        #expect(round.kind == .game)
        #expect(round.activityID == "whisper")
        #expect(round.skills.isEmpty)
        #expect(round.keepsakeID == nil)
    }

    @Test func keepsakesAreBackedUpAsAUnionThatNeverShrinks() {
        let phone = Tally(rounds: 2, minutes: 20, keepsakes: ["kite"])
        let backup = Tally(rounds: 1, minutes: 10, keepsakes: ["acorn"])
        #expect(phone.union(backup).keepsakes == ["kite", "acorn"])
        #expect(backup.excess(over: phone).keepsakes == ["acorn"])
    }
}

struct CountedCopyTests {
    private static let languages = ["en", "de", "fr", "es", "es-MX", "pt-BR", "it", "nl", "pl", "ru"]

    private func words(_ resource: LocalizedStringResource, in language: String) -> String {
        var resource = resource
        resource.locale = Locale(identifier: language)
        return String(localized: resource)
    }

    /// The keys whose plural hangs on one of two numbers, in every language and both counts.
    @Test func countedLinesFormatWithNoSpecifierLeft() {
        for language in Self.languages {
            for count in [1, 2, 5] {
                let lines = [
                    words("\(count) of \(3) evenings", in: language),
                    words("\(count) of \(3) evenings · letter on Sunday", in: language),
                    words("\(count) moments, \(count * 10) minutes", in: language),
                    words("\(count) moments to \("Lagoon")", in: language),
                    words("It is me, \("Blossom"). This week you two came to me on \(count) evenings.", in: language),
                ]
                for line in lines {
                    #expect(!line.contains("%"), "\(language): \(line)")
                    #expect(line.contains("\(count)"), "\(language): \(line)")
                }
            }
        }
    }
}
