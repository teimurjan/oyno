import Foundation
import Testing
@testable import Oyno

/// `Funnel.json` is generated from the web's decks and decoded for the paywall; a file that
/// no longer matches `FunnelContent` is an offer that cannot open.
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
}
