import StoreKit
import SwiftUI

/// The one place the app asks for money — the web funnel's offer (`PaywallStep.tsx`), sold
/// through StoreKit.
///
/// **The web's page, with the App Store's rules on it.** The same headline, the same three
/// lines of what the money buys, the same two plan cards opening on the yearly, on the same
/// sky, in the web deck's words (`FunnelContent`). Where it differs, a rule decided it:
/// - the billed amount is the big figure on each card and the price per day sits small
///   beside it. The web leads with the per-day figure; App Review rejects a subscription
///   whose calculated price is more prominent than the one it bills (3.1.2).
/// - no money-back guarantee: an App Store purchase is refunded by Apple, so the promise is
///   not ours to make here.
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
///
/// **Dressed after Opal's offer.** The trial told day by day, the picked plan ringed in the
/// sheen with its tag on the edge, and the button pinned under the scroll with its price.
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

    /// A month is 30 days and not 30.44: the figure illustrates scale, and a buyer checking
    /// it will divide by 30.
    private static let days: [Plan: Decimal] = [.monthly: 30, .yearly: 365]

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
        let copy = FunnelContent.bundled.copy()

        ScrollView {
            VStack(spacing: Metric.Space.xl) {
                PaywallHeadline(text: copy.steps["paywall"]?.headline ?? "")
                    .padding(.bottom, Metric.Space.s)
                story(copy.paywall)
                plans(copy.paywall)
                    .padding(.top, Metric.Space.s)
                fineprint
            }
            .frame(maxWidth: Self.column)
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.tapTarget + Metric.Space.xl)
            .padding(.bottom, Metric.Space.l)
            .containerRelativeFrame(.horizontal)
        }
        .scrollIndicators(.hidden)
        .overlay(alignment: .topTrailing) {
            GlassIconButton(symbol: "xmark", label: "Close") { close() }
                .padding(.trailing, Metric.gutter)
                .padding(.top, Metric.Space.s)
        }
        .pinnedBar { commit(copy.paywall) }
        .background(PaywallWash())
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

    /// Above the price, what the reader gets: the trial day by day when there is one, what the
    /// money buys when there is not. Waits for the products, which decide which it is.
    @ViewBuilder
    private func story(_ words: FunnelCopy.Paywall) -> some View {
        if purchases.didLoadProducts {
            if let selection, purchases.isEligibleForIntroOffer {
                TrialTimeline(renewal: renewal(selection, words))
            } else {
                PaywallPros(lines: words.pros)
            }
        }
    }

    @ViewBuilder
    private func plans(_ words: FunnelCopy.Paywall) -> some View {
        if !purchases.didLoadProducts {
            ProgressView().frame(maxWidth: .infinity).padding(.vertical, Metric.Space.xl)
        } else if purchases.products.isEmpty {
            Text("Plans aren't available right now. Check your connection and try again.")
                .oynoCaption()
        } else {
            // Room for the tag that rides each card's top edge.
            VStack(spacing: Metric.Space.xl) {
                ForEach(Plan.allCases, id: \.self) { plan in
                    if let product = purchases.product(billedEvery: plan.unit) {
                        card(plan, product, words)
                    }
                }
            }
        }
    }

    private func card(_ plan: Plan, _ product: Product, _ words: FunnelCopy.Paywall) -> some View {
        PlanCard(
            label: plan == .yearly ? words.yearly : words.monthly,
            price: product.displayPrice,
            note: note(plan, words),
            perDay: Self.days[plan].map { perDay(product, days: $0, words: words) },
            tag: plan == .yearly ? yearlyTag(words) : nil,
            selected: self.plan == plan
        ) { self.plan = plan }
    }

    /// The trial where there is one, the web's line where there is not.
    private func note(_ plan: Plan, _ words: FunnelCopy.Paywall) -> String {
        if purchases.isEligibleForIntroOffer { return String(interface: "3-day free trial") }
        return switch plan {
        case .monthly: words.cancelAnytime
        case .yearly: words.billedYearly
        }
    }

    private func yearlyTag(_ words: FunnelCopy.Paywall) -> String? {
        if purchases.isEligibleForIntroOffer { return String(interface: "3 days free") }
        return yearlySaving.map { FunnelCopy.fill(words.save, ["percent": Format.percent(Decimal($0), decimals: 0)]) }
    }

    /// Keeps the currency's own precision: a per-day figure rounded to whole units would read
    /// as the same number on two cards.
    private func perDay(_ product: Product, days: Decimal, words: FunnelCopy.Paywall) -> AttributedString {
        var figure = AttributedString((product.price / days).formatted(product.priceFormatStyle))
        figure.font = Typeface.figures(13.5, .medium, relativeTo: .footnote)
        figure.foregroundColor = Palette.slate
        var label = AttributedString(" \(words.perDay)")
        label.foregroundColor = Palette.muted
        return figure + label
    }

    /// The yearly's saving against twelve months, in whole percent, nil unless it is
    /// actually cheaper.
    private var yearlySaving: Int? {
        guard let monthly = purchases.product(billedEvery: .month),
              let yearly = purchases.product(billedEvery: .year),
              monthly.price > 0 else { return nil }
        let share = NSDecimalNumber(decimal: yearly.price / (monthly.price * 12)).doubleValue
        let saving = Int(((1 - share) * 100).rounded())
        return saving > 0 ? saving : nil
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

    /// Pinned under the scroll, as Opal keeps it: the reassurance, then the button with the
    /// price it commits to.
    private func commit(_ words: FunnelCopy.Paywall) -> some View {
        let trial = purchases.isEligibleForIntroOffer && selection?.subscription != nil
        let renewal = selection.map { renewal($0, words) }
        return VStack(spacing: Metric.Space.s) {
            Text(verbatim: words.cancelAnytime)
                .oynoCaption()
            OfferButton(
                title: trial ? String(interface: "Start my free trial") : words.continue,
                subtitle: renewal.map { trial ? String(interface: "Nothing today, then \($0)") : $0 },
                enabled: selection != nil && !purchases.isPurchasing
            ) { buy() }
        }
        .frame(maxWidth: Self.column)
        .padding(.horizontal, Metric.gutter)
        .padding(.top, Metric.Space.m)
        .padding(.bottom, Metric.Space.s)
        .frame(maxWidth: .infinity)
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
