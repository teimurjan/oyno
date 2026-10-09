import Foundation

/// Where the paywall was raised from. Some of these are somebody asking to see the plans
/// and some are somebody being turned away, which is what decides what a conversion means.
enum PaywallContext: String, Identifiable {
    case onboarding
    case settings
    /// A round or Kid hours was refused for want of an entitlement.
    case writeBlocked = "write_blocked"

    var id: String { rawValue }
}

/// The places a parent opens. Reported as `screen_viewed`.
enum AppScreen: String {
    case home, play, kidHours = "kid_hours", profile
}

/// Every product event the app emits, as one typed case. `name`/`properties` map to
/// Amplitude in `Analytics`.
///
/// Nothing here names a child, an app the parent uses, or how long they used it. Screen Time
/// tokens never leave the phone, and the App Privacy label says so.
enum AnalyticsEvent {
    // The funnel that runs before anything else.
    case funnelPageViewed(index: Int, kind: String, step: String)
    case funnelAnswered(question: String, answer: String)
    case funnelCompleted(answers: [String: String])

    case signInSucceeded(provider: String)
    case signedOut
    /// The session was dropped without the user asking: a refresh the server refused.
    case autoLoggedOut(reason: String)
    case accountDeleted
    case settingsChanged(field: String)

    case screenViewed(screen: AppScreen)

    // The core loop: one easy thing, the timer, the planet.
    case roundStarted(activity: String, energy: String)
    case roundCompleted(activity: String, minutes: Int)
    case planetTapped(bloom: Int)
    case worldsOpened(bloom: Int)

    // Kid hours.
    case kidHoursAuthorized(granted: Bool)
    case kidHoursSaved(apps: Int, categories: Int)
    case kidHoursBreak(minutes: Int)

    case paywallViewed(context: PaywallContext)
    case purchaseStarted(productID: String)
    case purchaseCompleted(productID: String, environment: String)
    case restoreStarted
    case restoreFinished(outcome: String)

    var name: String {
        switch self {
        case .funnelPageViewed: "funnel_page_viewed"
        case .funnelAnswered: "funnel_answered"
        case .funnelCompleted: "funnel_completed"
        case .signInSucceeded: "sign_in_succeeded"
        case .signedOut: "signed_out"
        case .autoLoggedOut: "auto_logged_out"
        case .accountDeleted: "account_deleted"
        case .settingsChanged: "settings_changed"
        case .screenViewed: "screen_viewed"
        case .roundStarted: "round_started"
        case .roundCompleted: "round_completed"
        case .planetTapped: "planet_tapped"
        case .worldsOpened: "worlds_opened"
        case .kidHoursAuthorized: "kid_hours_authorized"
        case .kidHoursSaved: "kid_hours_saved"
        case .kidHoursBreak: "kid_hours_break"
        case .paywallViewed: "paywall_viewed"
        case .purchaseStarted: "purchase_started"
        case .purchaseCompleted: "purchase_completed"
        case .restoreStarted: "restore_started"
        case .restoreFinished: "restore_finished"
        }
    }

    var properties: [String: Any]? {
        switch self {
        case let .funnelPageViewed(index, kind, step): ["index": index, "kind": kind, "step": step]
        case let .funnelAnswered(question, answer): ["question": question, "answer": answer]
        case let .funnelCompleted(answers): answers
        case let .signInSucceeded(provider): ["provider": provider]
        case let .autoLoggedOut(reason): ["reason": reason]
        case let .settingsChanged(field): ["field": field]
        case let .screenViewed(screen): ["screen": screen.rawValue]
        case let .roundStarted(activity, energy): ["activity": activity, "energy": energy]
        case let .roundCompleted(activity, minutes): ["activity": activity, "minutes": minutes]
        case let .planetTapped(bloom), let .worldsOpened(bloom): ["bloom": bloom]
        case let .kidHoursAuthorized(granted): ["granted": granted]
        case let .kidHoursSaved(apps, categories): ["apps": apps, "categories": categories]
        case let .kidHoursBreak(minutes): ["minutes": minutes]
        case let .paywallViewed(context): ["context": context.rawValue]
        case let .purchaseStarted(productID): ["product_id": productID]
        case let .purchaseCompleted(productID, environment):
            ["product_id": productID, "transaction_environment": environment]
        case let .restoreFinished(outcome): ["outcome": outcome]
        case .signedOut, .accountDeleted, .restoreStarted: nil
        }
    }
}
