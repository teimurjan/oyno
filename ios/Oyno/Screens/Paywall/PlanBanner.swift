import StoreKit
import SwiftUI

/// The plan at the top of Profile: what the money buys, and either a button into the paywall
/// or, once subscribed, the way to manage it.
struct PlanBanner: View {
    let action: () -> Void

    @Environment(PurchaseStore.self) private var purchases

    var body: some View {
        let words = FunnelContent.bundled.copy().paywall

        VStack(alignment: .leading, spacing: Metric.Space.m) {
            header
            VStack(alignment: .leading, spacing: Metric.Space.xl) {
                PaywallPros(lines: words.pros)
                OfferButton(title: title, subtitle: subtitle(words), action: action)
            }
            .padding(Metric.Space.xl)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(alignment: .topTrailing) { seal }
            .clipShape(.rect(cornerRadius: Metric.Radius.card))
            .glassCard(raised: true)
        }
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 2) {
            (purchases.isPaid ? Text("You're subscribed") : Text("You're not subscribed yet"))
                .font(Typeface.ui(18, .bold, relativeTo: .headline))
                .foregroundStyle(Palette.ink)
            ((purchases.isPaid ? Text("Playing together every evening with") : Text("Play together every evening with"))
                + Text(verbatim: " ")
                + Text(Image(systemName: "sparkle")).foregroundStyle(Palette.sheenInk)
                + Text(verbatim: " Oyno").font(Typeface.ui(15, .bold, relativeTo: .subheadline)).foregroundStyle(Palette.sheenInk))
                .font(Typeface.ui(15, .regular, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
        }
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

    private var title: String {
        if purchases.isPaid { return String(interface: "Manage subscription") }
        guard yearly != nil else { return String(interface: "See plans") }
        return purchases.isEligibleForIntroOffer ? String(interface: "Try 3 days free") : String(interface: "Subscribe")
    }

    private func subtitle(_ words: FunnelCopy.Paywall) -> String? {
        guard !purchases.isPaid, let yearly else { return nil }
        let renewal = "\(yearly.displayPrice) \(words.perYear)"
        return purchases.isEligibleForIntroOffer ? String(interface: "then \(renewal)") : renewal
    }
}
