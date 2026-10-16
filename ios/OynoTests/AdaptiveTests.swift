import Testing
import UIKit
@testable import Oyno

/// Every window the canvas draws picks the layout it was drawn with.
struct AdaptiveTests {
    private func layout(_ width: CGFloat, _ height: CGFloat, _ idiom: UIUserInterfaceIdiom = .phone) -> (Adaptive.Columns, Adaptive.Bars) {
        let adaptive = Adaptive(window: CGSize(width: width, height: height), idiom: idiom)
        return (adaptive.columns, adaptive.bars)
    }

    @Test func anUprightPhoneKeepsOneColumnAndItsOwnButtons() {
        #expect(layout(402, 874) == (.one, .inline))
    }

    @Test func theClosedDuoKeepsOneColumnWithTheBarDownItsSide() {
        #expect(layout(466, 678) == (.one, .side))
    }

    @Test func theOpenDuoSplitsAroundItsFold() {
        #expect(layout(951, 669) == (.two, .side))
    }

    @Test func theDuoStandingHalfOpenSplitsIntoRows() {
        #expect(layout(669, 951) == (.rows, .side))
    }

    @Test func anIPadSplitsInLandscapeUnderItsTopBar() {
        #expect(layout(1180, 820, .pad) == (.two, .top))
        #expect(layout(820, 1180, .pad) == (.rows, .top))
    }

    @Test func aNarrowIPadWindowKeepsOneColumn() {
        #expect(layout(507, 820, .pad) == (.one, .top))
    }
}
