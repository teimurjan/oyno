import SwiftUI

/// The web funnel's decks, as the phone reads them: `components/funnel/steps.ts` for the shape
/// and `components/funnel/copy/<tag>.ts` for the words, written into `Funnel.json` by
/// `bun run funnel:export-ios`. Never edited by hand. `PaywallScreen` reads its words from
/// here, so the offer says on the phone what it says on the web; the first run itself is
/// `FunnelScreen`, native and its own.
struct FunnelContent: Decodable {
    let spine: Spine
    let decks: [String: FunnelCopy]

    /// A bundled file that does not decode is a build that skipped the generator, caught by
    /// `FunnelContentTests` before it ships rather than handled here.
    static let bundled: FunnelContent = {
        guard let url = Bundle.main.url(forResource: "Funnel", withExtension: "json"),
              let data = try? Data(contentsOf: url),
              let content = try? JSONDecoder().decode(FunnelContent.self, from: data),
              content.decks["en"] != nil
        else { preconditionFailure("Funnel.json is missing or stale — run `bun run funnel:export-ios`") }
        return content
    }()

    /// The deck in the interface language, English where there is none.
    func copy(for language: String = InterfaceLanguage.current) -> FunnelCopy {
        decks[language] ?? decks["en"]!
    }

    struct Spine: Decodable {
        /// Up to and including the account step. The offer is `PaywallScreen`.
        let steps: [Step]
        /// What the progress counter counts: everything up to the plan.
        let surveyLength: Int
        /// Joins the answers of a question that takes several.
        let separator: String
    }

    struct Step: Decodable {
        let id: String
        let kind: Kind
        let question: Question?
        /// Reads differently by an earlier answer — the variant under that answer overlays the
        /// step's own copy line by line.
        let branch: Branch?

        enum Kind: String, Decodable {
            case question, statement, evening, apps, influence, alternative, compare, plan, account
        }

        struct Question: Decodable {
            /// Never translated: it names the answer in analytics.
            let key: String
            let multi: Bool?
            let options: [Option]
        }

        struct Option: Decodable {
            let value: String
            let emoji: String?
        }

        struct Branch: Decodable {
            let on: String
        }
    }
}

/// Every word the funnel says, in one language — the web deck's shape, cut to what the phone
/// draws.
struct FunnelCopy: Decodable {
    let chrome: Chrome
    let questions: [String: QuestionWords]
    let steps: [String: StatementWords]
    let paywall: Paywall
    let account: Account

    struct Chrome: Decodable {
        let `continue`: String
        let letsGo: String
        let intro: String
        let back: String
        let progress: String
    }

    struct QuestionWords: Decodable {
        let headline: String
        let description: String?
        let options: [String: String]
    }

    struct StatementWords: Decodable {
        let headline: String?
        let body: String?
        let note: String?
        let variants: [String: StatementWords]?
    }

    struct Paywall: Decodable {
        let pros: [String]
        let monthly: String
        let yearly: String
        let perMonth: String
        let perYear: String
        let perDay: String
        let cancelAnytime: String
        let billedYearly: String
        let save: String
        let guarantee: String
        let `continue`: String
    }

    struct Account: Decodable {
        let signIn: String
        let haveAccount: String
    }
}

// MARK: - Reading a deck

extension FunnelCopy {
    /// `{name}` filled in. A name with no value is left showing, so a typo in a deck is
    /// visible rather than silently blank.
    static func fill(_ template: String, _ values: [String: String]) -> String {
        values.reduce(template) { $0.replacingOccurrences(of: "{\($1.key)}", with: $1.value) }
    }

    /// `[bracketed]` spans in `tint`.
    static func accented(_ text: String, tint: Color = Palette.highlight) -> AttributedString {
        text.components(separatedBy: "[").enumerated().reduce(into: AttributedString()) { out, entry in
            guard entry.offset > 0, let close = entry.element.firstIndex(of: "]") else {
                out += AttributedString(entry.element)
                return
            }
            var span = AttributedString(String(entry.element[..<close]))
            span.foregroundColor = tint
            out += span
            out += AttributedString(String(entry.element[entry.element.index(after: close)...]))
        }
    }
}
