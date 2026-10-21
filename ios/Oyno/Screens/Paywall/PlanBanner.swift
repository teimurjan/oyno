import StoreKit
import SwiftUI

/// The plan at the top of Profile: what the money buys and a button into the paywall, or, once
/// subscribed, the plan itself and the way to manage it.
struct PlanBanner: View {
    let action: () -> Void

    @Environment(PurchaseStore.self) private var purchases
    /// Asked of StoreKit, so a cancelled App Store plan says when it ends rather than renews.
    @State private var willRenew: Bool?

    var body: some View {
        if purchases.isPaid {
            subscribed
                .task(id: purchases.provider) {
                    willRenew = purchases.provider == "app_store" ? await purchases.appStoreWillRenew() : nil
                }
        } else {
            offer
        }
    }

    // MARK: Subscribed

    /// The plan on the sky, the planet in its corner, and the one thing to do with it.
    private var subscribed: some View {
        let words = FunnelContent.bundled.copy().paywall

        return VStack(alignment: .leading, spacing: Metric.Space.l) {
            HStack(spacing: Metric.Space.m) {
                AppIconTile(side: 40)
                VStack(alignment: .leading, spacing: 1) {
                    Text(verbatim: planName)
                        .font(Typeface.ui(15, .extrabold, relativeTo: .subheadline))
                        .foregroundStyle(Palette.ink)
                    if let planTerm {
                        Text(verbatim: planTerm)
                            .font(Typeface.ui(13, .medium, relativeTo: .footnote))
                            .foregroundStyle(Palette.slate)
                    }
                }
            }
            // A lifetime unlock has nothing to manage.
            if purchases.plan != .lifetime {
                PrimaryButton(title: "Manage subscription", action: action)
            }
            if let saving = switchSaving {
                Button { switchToYearly() } label: {
                    HStack(spacing: Metric.Space.s) {
                        Text("Switch to Yearly")
                            .font(Typeface.ui(15, .bold, relativeTo: .subheadline))
                        Text(verbatim: FunnelCopy.fill(words.save, ["percent": Format.percent(Decimal(saving), decimals: 0)]))
                            .font(Typeface.figures(11, .extrabold, relativeTo: .caption2))
                            .tracking(0.9)
                            .textCase(.uppercase)
                            .foregroundStyle(Palette.onAccent)
                            .padding(.horizontal, 9)
                            .frame(height: 22)
                            .background(Palette.accent, in: .capsule)
                    }
                    .foregroundStyle(Palette.ink)
                    .frame(maxWidth: .infinity, minHeight: Metric.tapTarget)
                    .contentShape(.rect)
                }
                .buttonStyle(.plain)
                .disabled(purchases.isPurchasing)
                .padding(.top, -Metric.Space.s)
            }
        }
        .padding(18)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(alignment: .topTrailing) {
            Image(World.all[0].imageName)
                .resizable()
                .scaledToFit()
                .frame(width: 140)
                .offset(x: 56, y: -74)
                .accessibilityHidden(true)
        }
        .background(Self.wash)
        .clipShape(.rect(cornerRadius: 24))
        .overlay(RoundedRectangle(cornerRadius: 24).strokeBorder(Palette.glassEdge, lineWidth: 1))
        .shadow(color: Palette.glassShadow, radius: 15, y: 10)
    }

    /// The sky, a shade deeper at the top so the planet reads against it.
    private static let wash = LinearGradient(
        stops: [
            .init(color: Color(hex: 0xB9D4F1), location: 0),
            .init(color: Color(hex: 0xDCEBF9), location: 0.42),
            .init(color: Color(hex: 0xFFF3E1), location: 1),
        ],
        startPoint: .top,
        endPoint: .bottom
    )

    private var planName: String {
        switch purchases.plan {
        case .yearly: String(interface: "Oyno Yearly")
        case .monthly: String(interface: "Oyno Monthly")
        case .lifetime: String(interface: "Oyno Lifetime")
        case nil: "Oyno"
        }
    }

    /// "Renews Oct 21, 2027", or "Ends" once it will not. Nothing for a grant with no end
    /// date but a plan that has one: App Review's Sandbox purchase.
    private var planTerm: String? {
        if purchases.plan == .lifetime { return String(interface: "Yours for good") }
        guard let expiresAt = purchases.expiresAt else { return nil }
        let date = expiresAt.formatted(Date.FormatStyle(date: .abbreviated, time: .omitted, locale: InterfaceLanguage.locale))
        return willRenew == false ? String(interface: "Ends \(date)") : String(interface: "Renews \(date)")
    }

    /// Offered to a monthly App Store subscriber only: StoreKit can move them in place, a web
    /// plan changes in Dodo's portal.
    private var switchSaving: Int? {
        guard purchases.plan == .monthly, purchases.provider == "app_store",
              purchases.product(billedEvery: .year) != nil else { return nil }
        return purchases.yearlySaving
    }

    /// The yearly is in the monthly's group, so the App Store treats this as a change of plan.
    private func switchToYearly() {
        guard let yearly = purchases.product(billedEvery: .year) else { return }
        Analytics.shared.track(.purchaseStarted(productID: yearly.id))
        Task { await purchases.purchase(yearly) }
    }

    // MARK: Not subscribed

    private var offer: some View {
        let words = FunnelContent.bundled.copy().paywall

        return VStack(alignment: .leading, spacing: Metric.Space.m) {
            VStack(alignment: .leading, spacing: 2) {
                Text("You're not subscribed yet")
                    .font(Typeface.ui(18, .bold, relativeTo: .headline))
                    .foregroundStyle(Palette.ink)
                (Text("Play together every evening with")
                    + Text(verbatim: " ")
                    + Text(wordmark).baselineOffset(-3.5))
                    .font(Typeface.ui(15, .regular, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
            }
            VStack(alignment: .leading, spacing: Metric.Space.xl) {
                PaywallPros(lines: words.pros)
                OfferButton(title: offerTitle, subtitle: offerSubtitle(words), action: action)
            }
            .padding(Metric.Space.xl)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(alignment: .topTrailing) { seal }
            .clipShape(.rect(cornerRadius: Metric.Radius.card))
            .glassCard(raised: true)
        }
    }

    /// The header's wordmark at 3/4 size, so it sits in the line as its last word.
    private var wordmark: Image {
        guard let image = UIImage(named: "Wordmark")?.cgImage else { return Image("Wordmark") }
        return Image(image, scale: 4, label: Text(verbatim: "Oyno"))
    }

    /// The planet cropped into the corner, as Opal sets its seal.
    private var seal: some View {
        Image(World.all[0].imageName)
            .resizable()
            .scaledToFit()
            .frame(width: 150)
            .offset(x: 48, y: -48)
            .opacity(0.4)
            .accessibilityHidden(true)
    }

    private var yearly: Product? { purchases.product(billedEvery: .year) }

    private var offerTitle: String {
        guard yearly != nil else { return String(interface: "See plans") }
        return purchases.isEligibleForIntroOffer ? String(interface: "Try 3 days free") : String(interface: "Subscribe")
    }

    private func offerSubtitle(_ words: FunnelCopy.Paywall) -> String? {
        guard let yearly else { return nil }
        let renewal = "\(yearly.displayPrice) \(words.perYear)"
        return purchases.isEligibleForIntroOffer ? String(interface: "then \(renewal)") : renewal
    }
}
