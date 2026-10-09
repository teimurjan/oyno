import Foundation
import Testing
@testable import Oyno

/// `Funnel.json` is generated from the web's decks and decoded on the first launch; a file
/// that no longer matches `FunnelContent` is a first run that cannot start.
struct FunnelContentTests {
    @Test func everyShippedLanguageHasADeck() {
        let decks = FunnelContent.bundled.decks
        #expect(InterfaceLanguage.supported.filter { decks[$0] == nil }.isEmpty)
    }

    @Test func everyQuestionIsWordedInEveryDeck() {
        let content = FunnelContent.bundled
        for (language, copy) in content.decks {
            for question in content.spine.steps.compactMap(\.question) {
                let words = copy.questions[question.key]
                #expect(words != nil, "\(language) has no words for \(question.key)")
                #expect(question.options.allSatisfy { words?.options[$0.value] != nil }, "\(language): \(question.key)")
            }
        }
    }

    @Test func theRecapLeadsWithTheProblemAndKeepsItsFollowUp() {
        let content = FunnelContent.bundled
        let answers = [
            "problem": "scroll", "age": "toddler", "hardest": "afterwork", "pickups": "often",
            "partner": "yes", "tried": "limits",
        ]
        let lines = content.copy(for: "en").recapLines(answers: answers, spine: content.spine, limit: 3)
        #expect(lines.map(\.key) == ["problem", "age", "pickups"])
    }
}
