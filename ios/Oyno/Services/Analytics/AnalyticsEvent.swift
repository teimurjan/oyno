import Foundation

/// Where the paywall was raised from. Some of these are somebody asking to see the plans
/// and some are somebody being turned away, which is the difference that decides what a
/// conversion rate means.
enum PaywallContext: String, Identifiable {
    case onboarding
    case settings
    /// A flush was refused because the subscription lapsed. The work is already recorded
    /// locally — this is the shop being told it cannot leave the device.
    case syncBlocked = "sync_blocked"
    /// A modification, or the sync that would carry one off the phone, was refused for
    /// want of an entitlement. The app's ordinary way of asking: the operator reached for
    /// something and this is what was behind it.
    case writeBlocked = "write_blocked"
    case dashboardBlocked = "dashboard_blocked"

    /// So `AppRoot` can raise the sheet with `.sheet(item:)` — the context is both why
    /// the sheet is up and the only thing that tells one showing from the next.
    var id: String { rawValue }
}

/// The places a shop opens to look at its books. The web app's routes by the same names
/// (`/filament`, `/customers`, …) are what `oyno_web_page_viewed` reports, so the two
/// clients chart alike.
enum AppScreen: String {
    case home, filament, quotes, orders, stats, customers, profile
}

/// Every product event the app emits, as one typed case. SDK-agnostic on purpose —
/// `name`/`properties` map to Amplitude in `Analytics`, so the emit sites stay free of
/// stringly-typed names and the whole funnel is auditable in one place.
///
/// Nothing here records a customer's name, an order's contents, or what the shop sells.
/// Counts, materials and outcomes only — the shop's book of business is its own, and the
/// App Privacy label says so.
enum AnalyticsEvent {
    // The funnel that runs before anything else — the argument, made before the app asks
    // for an account or a card. Whether a shop then gets configured is the setup events'
    // question, not this one's.
    /// `step` is the step's id in `steps.ts`, stable across a reorder where `index` is not.
    case funnelPageViewed(index: Int, kind: String, step: String)
    /// A question answered. The answers are the only segmentation the app has before a shop
    /// exists, and they are the web funnel's keys and values, so the two segment alike.
    case funnelAnswered(question: String, answer: String)
    /// The shelf was operated rather than watched — `drag`, `tap` or `sort`. Somebody who
    /// loaded the roll that finishes saw the point; somebody who did not was only shown it.
    case funnelShelfUsed(method: String)
    /// The recap's button: every answer, keyed by question.
    case funnelCompleted(answers: [String: String])

    // Auth
    case signInSucceeded(provider: String)
    case signedOut
    /// Session cleared without a gesture — the refresh token was definitively rejected.
    /// `reason` carries the trigger, so stale-session churn stays separable from anything
    /// the operator did.
    case autoLoggedOut(reason: String)
    case accountDeleted

    // Setting the shop up. The single largest predictor of whether the app is ever used
    // twice: a shop with no printer and no spools can only produce guesses.
    /// A step on Home's setup card tapped. Finishing it is the event the step already
    /// emits — `printer_added`, `settings_changed`, `quote_saved`.
    case setupStepOpened(step: String)
    case printerAdded(model: String)
    case spoolAdded(material: String)
    case spoolAdjusted(direction: String)
    case settingsChanged(field: String)

    // The core loop
    /// A place opened, or returned to from the background. Most visits change nothing — a
    /// roll's grams, last month's margin — and without this they read as an empty session.
    case screenViewed(screen: AppScreen)
    /// A quote reaching the point of being saved. `channel` is what says whether the shop
    /// is selling on a marketplace, which is the strongest segment this product has.
    case quoteSaved(material: String, channel: String)
    case quoteShared
    /// The action the whole product is built around.
    case printLogged(succeeded: Bool)
    case orderCreated(channel: String, items: Int)
    case orderMarkedPaid(marginPct: Int)

    // Sync
    /// A flush that could not land. `reason` separates offline from a server fault, which
    /// is the difference between "working as intended in a garage" and a bug.
    case syncFailed(reason: String)

    // Monetization
    case paywallViewed(context: PaywallContext)
    case purchaseStarted(productID: String)
    /// `environment` is the transaction's own StoreKit environment, not the install's —
    /// the same value the backend stores on `entitlements`, so a conversion in Amplitude
    /// reconciles against the row that granted it.
    case purchaseCompleted(productID: String, environment: String)
    case restoreStarted
    case restoreFinished(outcome: String)

    /// Namespaces the whole funnel, so this app's events stay separable from anything else
    /// reporting into the same Amplitude account. The web carries `oyno_web_` and the
    /// server `oyno_server_`.
    private static let prefix = "oyno_"

    var name: String { Self.prefix + rawName }

    private var rawName: String {
        switch self {
        case .funnelPageViewed: "funnel_page_viewed"
        case .funnelAnswered: "funnel_answered"
        case .funnelShelfUsed: "funnel_shelf_used"
        case .funnelCompleted: "funnel_completed"
        case .signInSucceeded: "sign_in_succeeded"
        case .signedOut: "signed_out"
        case .autoLoggedOut: "auto_logged_out"
        case .accountDeleted: "account_deleted"
        case .setupStepOpened: "setup_step_opened"
        case .printerAdded: "printer_added"
        case .spoolAdded: "spool_added"
        case .spoolAdjusted: "spool_adjusted"
        case .settingsChanged: "settings_changed"
        case .screenViewed: "screen_viewed"
        case .quoteSaved: "quote_saved"
        case .quoteShared: "quote_shared"
        case .printLogged: "print_logged"
        case .orderCreated: "order_created"
        case .orderMarkedPaid: "order_marked_paid"
        case .syncFailed: "sync_failed"
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
        case let .funnelShelfUsed(method): ["method": method]
        case let .funnelCompleted(answers): answers
        case let .signInSucceeded(provider): ["provider": provider]
        case let .autoLoggedOut(reason): ["reason": reason]
        case let .setupStepOpened(step): ["step": step]
        case let .printerAdded(model): ["model": model]
        case let .spoolAdded(material): ["material": material]
        case let .spoolAdjusted(direction): ["direction": direction]
        case let .settingsChanged(field): ["field": field]
        case let .screenViewed(screen): ["screen": screen.rawValue]
        case let .quoteSaved(material, channel): ["material": material, "channel": channel]
        case let .printLogged(succeeded): ["succeeded": succeeded]
        case let .orderCreated(channel, items): ["channel": channel, "items": items]
        case let .orderMarkedPaid(marginPct): ["margin_pct": marginPct]
        case let .syncFailed(reason): ["reason": reason]
        case let .paywallViewed(context): ["context": context.rawValue]
        case let .purchaseStarted(productID): ["product_id": productID]
        case let .purchaseCompleted(productID, environment):
            ["product_id": productID, "transaction_environment": environment]
        case let .restoreFinished(outcome): ["outcome": outcome]
        case .signedOut, .accountDeleted, .quoteShared,
             .restoreStarted:
            nil
        }
    }
}
