import Foundation

/// What a timer runs: a game from the deck, or an everyday moment for the minutes picked.
enum Session: Identifiable, Hashable {
    case game(Activity)
    case moment(OpenMoment, minutes: Int)

    var id: String {
        switch self {
        case let .game(activity): activity.id
        case let .moment(moment, minutes): "\(moment.id)@\(minutes)"
        }
    }

    var kind: MomentKind {
        switch self {
        case .game: .game
        case let .moment(moment, _): moment.kind
        }
    }

    var title: String {
        switch self {
        case let .game(activity): activity.title
        case let .moment(moment, _): moment.kind.label
        }
    }

    var minutes: Int {
        switch self {
        case let .game(activity): activity.minutes
        case let .moment(_, minutes): minutes
        }
    }

    var skills: [Activity.Skill] {
        switch self {
        case let .game(activity): activity.skills
        case let .moment(moment, _): moment.skills
        }
    }

    /// The game's steps, or the moment's nudges.
    var steps: [String] {
        switch self {
        case let .game(activity): activity.steps
        case let .moment(moment, _): moment.nudges
        }
    }

    var activityID: String? {
        if case let .game(activity) = self { return activity.id }
        return nil
    }

    /// What the store records once the timer is done.
    func round(startedAt: Date, minutes: Int) -> Round {
        Round(kind: kind, activityID: activityID, startedAt: startedAt, minutes: minutes, skills: skills.map(\.id))
    }
}
