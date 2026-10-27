import Foundation

/// Something new the parent saw, in their words or as one of the signs: the real measure of
/// progress. The signs are backed up, and the words never leave the phone.
struct First: Codable, Identifiable, Hashable {
    var id = UUID()
    let date: Date
    /// The kind of moment it came after.
    let kind: MomentKind
    let signs: [Sign]
    let words: String?

    /// What the parent can tap after a moment.
    enum Sign: String, Codable, CaseIterable, Identifiable {
        case waitedForTurn, playedAlone, triedAgain, newWord, askedForHelp, finished

        var id: String { rawValue }

        var label: String {
            switch self {
            case .waitedForTurn: String(interface: "Waited for a turn")
            case .playedAlone: String(interface: "Played alone a while")
            case .triedAgain: String(interface: "Tried again after a miss")
            case .newWord: String(interface: "Used a new word")
            case .askedForHelp: String(interface: "Asked for help")
            case .finished: String(interface: "Finished what they started")
            }
        }
    }

    /// What the backup keeps: the signs without the words. Nil when the parent only wrote words.
    var backedUp: First? {
        signs.isEmpty ? nil : First(id: id, date: date, kind: kind, signs: signs, words: nil)
    }

    /// The line Growth and the letter show: the parent's words where they wrote some.
    var text: String {
        if let words, !words.isEmpty { return words }
        return signs.map(\.label).formatted(.list(type: .and).locale(InterfaceLanguage.locale))
    }
}
