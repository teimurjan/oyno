import Foundation

/// The first run's screens, in order. The raw value is what analytics reports as `step`, so
/// it stays put when the words on the screen change.
enum FunnelStep: String, CaseIterable {
    case hookPlanet = "hook_planet"
    case hookCloser = "hook_closer"
    case hookEvenings = "hook_evenings"
    case hookDimmed = "hook_dimmed"
    case pickups
    case interlude
    case badNews = "bad_news"
    case goodNews = "good_news"
    case screenTime = "screen_time"
    case promise
    case teaser
    case account

    enum Kind: String {
        case hook, question, interlude, projection, permission, promise, teaser, account
    }

    var kind: Kind {
        switch self {
        case .hookPlanet, .hookCloser, .hookEvenings, .hookDimmed: .hook
        case .pickups: .question
        case .interlude: .interlude
        case .badNews, .goodNews: .projection
        case .screenTime: .permission
        case .promise: .promise
        case .teaser: .teaser
        case .account: .account
        }
    }

    /// Advances on a tap anywhere, with the hint at the foot of the screen saying so.
    var tapsToContinue: Bool { kind == .hook || kind == .interlude }
}

/// The one question the funnel asks, and the sums it draws from the answer. The evening is
/// the example one, 4:30 to 7:30 PM; the phone minutes in it are the answer's.
enum Pickups: String, CaseIterable {
    case rare, few, often, lost

    /// Reported as the question's key.
    static let key = "pickups"
    static let eveningMinutes = 180

    var phoneMinutes: Int {
        switch self {
        case .rare: 15
        case .few: 35
        case .often: 70
        case .lost: 100
        }
    }

    /// A year of those evenings, counted in whole evenings gone.
    var eveningsLost: Int {
        Int((Double(phoneMinutes) * 365 / Double(Self.eveningMinutes)).rounded())
    }

    /// The hours Kid hours hand back in a year, rounded down to a round figure.
    var hoursBack: Int { phoneMinutes * 365 / 60 / 10 * 10 }
}
