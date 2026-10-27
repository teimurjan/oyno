import Testing
@testable import Oyno

/// The news screens promise figures summed from one answer; these pin the sums to the evening
/// the copy describes, 4:30 to 7:30 PM, every day of the year.
struct FunnelStepsTests {
    @Test func theEveningsLostAreTheYearsPhoneMinutesInWholeEvenings() {
        #expect(Pickups.rare.eveningsLost == 30)
        #expect(Pickups.often.eveningsLost == 142)
        #expect(Pickups.lost.eveningsLost == 203)
    }

    @Test func theHoursBackRoundDownToATen() {
        #expect(Pickups.few.hoursBack == 210)
        #expect(Pickups.often.hoursBack == 420)
    }

    @Test func theAccountIsTheLastStep() {
        #expect(FunnelStep.allCases.last == .account)
    }

    @Test func theHookMovesOnByItselfAndOnlyTheInterludeWaitsForATap() {
        #expect(FunnelStep.allCases.first?.tapsToContinue == false)
        #expect(FunnelStep.allCases.filter(\.tapsToContinue) == [.interlude])
    }
}
