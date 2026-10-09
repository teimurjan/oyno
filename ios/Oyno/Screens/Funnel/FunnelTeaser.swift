import SwiftUI

/// The offer's cover, before the account and the price: the evening back, in the reader's
/// minutes, over the picture of it. Opal's "Get 2+ hours back every single day".
struct FunnelTeaser: View {
    let pickups: Pickups
    let onContinue: () -> Void

    var body: some View {
        ZStack(alignment: .bottom) {
            Color.clear
                .overlay {
                    Image("FunnelEvening")
                        .resizable()
                        .scaledToFill()
                }
                .clipped()
                .ignoresSafeArea()
                .accessibilityHidden(true)
            LinearGradient(
                stops: [
                    .init(color: Palette.canvas.opacity(0), location: 0.56),
                    .init(color: Palette.canvas, location: 0.76),
                    .init(color: Palette.canvas, location: 1),
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
            VStack(spacing: Metric.Space.m) {
                FunnelLine(
                    text: String(interface: "Get [\(pickups.phoneMinutes) minutes] back every single evening"),
                    size: 28,
                    weight: .extrabold,
                    tint: Palette.good
                )
                .funnelRise()
                Text("Start with 3 days free, and spend them on the floor with your kid.")
                    .font(Typeface.ui(15, .regular, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
                    .multilineTextAlignment(.center)
                    .fixedSize(horizontal: false, vertical: true)
                    .funnelRise(after: 0.12)
                PrimaryButton(title: "Get my evenings back") { onContinue() }
                    .frame(maxWidth: 420)
                    .padding(.top, Metric.Space.s)
                    .funnelRise(after: 0.24)
                Label("No payment due now", systemImage: "checkmark")
                    .font(Typeface.ui(12, .medium, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
                    .funnelRise(after: 0.3)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.bottom, Metric.Space.l)
        }
    }
}
