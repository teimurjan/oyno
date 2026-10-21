import StoreKit
import SwiftUI

/// The one place the app asks for money — the web funnel's offer (`PaywallStep.tsx`), sold
/// through StoreKit.
///
/// **The web's page, with the App Store's rules on it.** The same headline, the same picture
/// of a paused phone and the game it offers, the same two plans opening on the yearly, on the
/// same sky, in the web deck's words (`FunnelContent`). Where it differs, a rule decided it:
/// - each plan shows the amount it bills. The web sells the yearly by its month; App Review
///   rejects a subscription whose calculated price is more prominent than the one it bills
///   (3.1.2).
/// - no money-back guarantee and no questions: an App Store purchase is refunded by Apple,
///   and the web's answers name Dodo, so neither is ours to say here.
/// What Apple requires at the point of sale is added instead: the trial's terms, Restore, and
/// the renewal disclosure with the licence and the privacy policy.
///
/// **A page, never a sheet.** A sheet is a detour: it arrives over the screen underneath
/// it, it carries a grabber that says "flick me away", and on a first run it would sit on
/// top of a sign-in screen the operator has just finished with. This is the whole screen
/// instead, in both of the places it appears — the first run, straight after signing in,
/// and any later moment a round or Kid hours is refused. Same screen, same weight,
/// one difference: `context`, which is what tells a plan somebody went looking for from a
/// plan somebody was turned away by.
///
/// **It has a way out, deliberately.** There is no free tier, but the wall stands in
/// front of *playing* rather than in front of opening the app: the planet and past rounds go
/// on opening. So the close button is a real answer.
struct PaywallScreen: View {
    /// Why the reader is looking at this, for the funnel. A refused edit and a lapse are
    /// the same sheet and a different event.
    var context: PaywallContext = .writeBlocked
    /// What the close button does when this screen is a step in the first run rather than
    /// something presented over the app. Absent inside the cover, which closes itself.
    var onSkip: (() -> Void)?

    @Environment(PurchaseStore.self) private var purchases
    @Environment(\.dismiss) private var dismiss

    /// The yearly, the first card, as on the web.
    @State private var plan = Plan.yearly
    @State private var restoreMessage: LocalizedStringResource?

    /// Apple's standard licence. A subscription sold inside an app has to link a EULA at
    /// the point of sale, and an app that does not ship one of its own falls under this
    /// document — App Review checks the link is here and that it works.
    private static let termsURL = URL(string: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/")!
    private static let privacyURL = URL(string: "https://oyno.app/privacy")!

    private enum Plan: CaseIterable {
        case yearly, monthly

        var unit: Product.SubscriptionPeriod.Unit {
            switch self {
            case .monthly: .month
            case .yearly: .year
            }
        }
    }

    var body: some View {
        let words = FunnelContent.bundled.copy()

        GeometryReader { screen in
            ScrollView {
                VStack(spacing: 0) {
                    PaywallHeadline(text: words.steps["paywall"]?.headline ?? "")
                    Text(verbatim: words.paywall.subhead)
                        .font(Typeface.ui(15.5, .regular, relativeTo: .body))
                        .foregroundStyle(Palette.slate)
                        .multilineTextAlignment(.center)
                        .fixedSize(horizontal: false, vertical: true)
                        .padding(.top, 10)
                    PaywallHero(words: words.paywall)
                        .padding(.top, Metric.Space.xl)
                    // Puts the plans and the button at the foot of a tall phone, as the canvas does.
                    Spacer(minLength: Metric.Space.xl)
                    plans(words.paywall)
                    commit(words.paywall)
                    fineprint
                        .padding(.top, Metric.Space.s)
                }
                .frame(maxWidth: Self.column)
                .padding(.horizontal, Metric.gutter)
                .padding(.top, Metric.tapTarget + Metric.Space.s)
                .padding(.bottom, Metric.Space.s)
                .frame(maxWidth: .infinity, minHeight: screen.size.height)
            }
            .scrollIndicators(.hidden)
            .scrollBounceBehavior(.basedOnSize)
        }
        .overlay(alignment: .topTrailing) {
            GlassIconButton(symbol: "xmark", label: "Close") { close() }
                .padding(.trailing, Metric.gutter)
                .padding(.top, Metric.Space.s)
        }
        .background(Palette.sky.ignoresSafeArea())
        .task {
            Analytics.shared.track(.paywallViewed(context: context))
            await purchases.loadProducts()
        }
        .onChange(of: purchases.isPaid) { _, paid in
            if paid { close() }
        }
        .alert(
            "Restore",
            isPresented: .init(get: { restoreMessage != nil }, set: { if !$0 { restoreMessage = nil } })
        ) {
            Button("OK", role: .cancel) { restoreMessage = nil }
        } message: {
            if let restoreMessage { Text(restoreMessage) }
        }
    }

    private static let column: CGFloat = 520

    @ViewBuilder
    private func plans(_ words: FunnelCopy.Paywall) -> some View {
        if !purchases.didLoadProducts {
            ProgressView().frame(maxWidth: .infinity, minHeight: 130)
        } else if purchases.products.isEmpty {
            Text("Plans aren't available right now. Check your connection and try again.")
                .oynoCaption()
        } else {
            VStack(spacing: 10) {
                ForEach(Plan.allCases, id: \.self) { plan in
                    if let product = purchases.product(billedEvery: plan.unit) {
                        PlanPill(
                            label: plan == .yearly ? words.yearly : words.monthly,
                            price: renewal(product, words),
                            selected: self.plan == plan
                        ) { self.plan = plan }
                    }
                }
            }
        }
    }

    /// The picked plan, or the first one there is if the App Store did not return it.
    private var selection: Product? {
        purchases.product(billedEvery: plan.unit) ?? purchases.products.first
    }

    /// "$39.99 / year": what the picked plan bills after any trial.
    private func renewal(_ product: Product, _ words: FunnelCopy.Paywall) -> String {
        let term = product.subscription?.subscriptionPeriod.unit == .month ? words.perMonth : words.perYear
        return "\(product.displayPrice) \(term)"
    }

    /// The trial's terms or the bill over the button, then the button: what it costs is in view
    /// before the tap that agrees to it.
    private func commit(_ words: FunnelCopy.Paywall) -> some View {
        let trial = purchases.isEligibleForIntroOffer && selection?.subscription != nil
        return VStack(spacing: Metric.Space.m) {
            if let selection {
                Text(verbatim: "\(trial ? String(interface: "3-day free trial") : billed(selection, words)) · \(words.cancelAnytime)")
                    .font(Typeface.figures(13.5, .regular, relativeTo: .footnote))
                    .foregroundStyle(Palette.muted)
                    .multilineTextAlignment(.center)
                    .fixedSize(horizontal: false, vertical: true)
            }
            OfferButton(
                title: trial ? String(interface: "Start my free trial") : words.continue,
                subtitle: trial ? selection.map { String(interface: "Nothing today, then \(renewal($0, words))") } : nil,
                enabled: selection != nil && !purchases.isPurchasing
            ) { buy() }
        }
        .padding(.top, 14)
    }

    /// "Billed as $39.99 a year", in the deck's words.
    private func billed(_ product: Product, _ words: FunnelCopy.Paywall) -> String {
        let template = product.subscription?.subscriptionPeriod.unit == .month ? words.billed.monthly : words.billed.yearly
        return FunnelCopy.fill(template, ["price": product.displayPrice])
    }

    /// Restore, the renewal disclosure and the two documents Apple requires at the point of
    /// sale, at the foot of the scroll.
    private var fineprint: some View {
        VStack(spacing: Metric.Space.xs) {
            Button("Restore purchases") { restore() }
                .font(Typeface.ui(13, .medium, relativeTo: .footnote))
                .foregroundStyle(Palette.muted)
                .buttonStyle(.plain)
                .frame(minHeight: Metric.tapTarget)
            Text(agreement)
                .font(Typeface.ui(11, .regular, relativeTo: .caption2))
                .foregroundStyle(Palette.faint)
                .tint(Palette.muted)
                .multilineTextAlignment(.center)
                .fixedSize(horizontal: false, vertical: true)
        }
    }

    private func buy() {
        guard let product = selection else { return }
        Analytics.shared.track(.purchaseStarted(productID: product.id))
        Task { await purchases.purchase(product) }
    }

    private func restore() {
        Analytics.shared.track(.restoreStarted)
        Task {
            let outcome = await purchases.restore()
            Analytics.shared.track(.restoreFinished(outcome: outcome.rawValue))
            // One assignment per branch: a `switch` expression only has its first literal extracted.
            switch outcome {
            case .restored: restoreMessage = "Your subscription is active again."
            case .nothingToRestore: restoreMessage = "No purchase found for this Apple ID."
            case .failed: restoreMessage = "Couldn't reach the server. Try again in a moment."
            case .cancelled: restoreMessage = nil
            }
        }
    }

    /// The renewal disclosure and the two documents Apple requires at the point of sale,
    /// in one sentence. Underlined rather than accented: the accent on this screen belongs
    /// to the button above them.
    ///
    /// The links are carried as Markdown in the catalog and pointed at sentinel URLs,
    /// which are swapped for the real ones here. Matching on the English words instead
    /// fails silently the moment the sentence is translated — no crash, no log, just two
    /// legally required links quietly gone in seventeen languages. Sentinels also mean a
    /// translator can move or reword the link text but can never retarget it.
    ///
    /// Resolved through `String(interface:)` and parsed here, rather than by
    /// `AttributedString(localized:)`: that initializer's `locale:` steers formatting and
    /// not which `.lproj` answers, so on a phone set to English with the app set to
    /// Russian it would print the disclosure in the wrong language. One unbroken literal,
    /// because a `LocalizedStringResource` has to *be* one to carry a catalog key.
    private static let agreementText: LocalizedStringResource = "Subscriptions renew automatically until cancelled. Manage or cancel in your Apple Account settings. By continuing you agree to the [Terms of Use](oyno://terms) and the [Privacy Policy](oyno://privacy)."

    private var agreement: AttributedString {
        let sentence = String(interface: Self.agreementText)
        // Inline only: this is one sentence, and the block-level parse would wrap it in a
        // paragraph intent for no gain.
        let options = AttributedString.MarkdownParsingOptions(interpretedSyntax: .inlineOnlyPreservingWhitespace)
        guard var text = try? AttributedString(markdown: sentence, options: options) else {
            assertionFailure("Paywall agreement is not valid Markdown in \(InterfaceLanguage.current)")
            return AttributedString(sentence)
        }
        // Ranges collected before anything is written: `runs` is a view onto the string
        // being mutated, and setting an attribute re-segments it underneath the loop.
        // Indices survive an attribute change, so applying them afterwards is safe.
        let targets = text.runs.compactMap { run -> (Range<AttributedString.Index>, URL)? in
            switch run.link?.absoluteString {
            case "oyno://terms": (run.range, Self.termsURL)
            case "oyno://privacy": (run.range, Self.privacyURL)
            default: nil
            }
        }
        for (range, destination) in targets {
            text[range].link = destination
            text[range].underlineStyle = .single
        }
        assert(
            text.runs.contains { $0.link == Self.termsURL }
                && text.runs.contains { $0.link == Self.privacyURL },
            "Paywall agreement lost a required disclosure link — check that this locale "
                + "kept both oyno:// Markdown links intact."
        )
        return text
    }

    private func close() {
        if let onSkip { onSkip() } else { dismiss() }
    }
}
