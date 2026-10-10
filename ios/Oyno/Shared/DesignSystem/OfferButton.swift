import SwiftUI

/// The offer's committing action, on the paywall and the profile's banner: the ink pill, lit
/// from above and ringed in the sheen, with the price under the words when there is one.
struct OfferButton: View {
    /// Already in the reader's language: some titles arrive from the funnel deck.
    let title: String
    var subtitle: String?
    var enabled = true
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            VStack(spacing: 2) {
                Text(verbatim: title)
                    .font(Typeface.ui(17, .bold, relativeTo: .headline))
                if let subtitle {
                    Text(verbatim: subtitle)
                        .font(Typeface.figures(12.5, .medium, relativeTo: .caption))
                        .opacity(0.72)
                }
            }
            .foregroundStyle(Palette.onAccent)
            .multilineTextAlignment(.center)
            .padding(.vertical, Metric.Space.s)
            .frame(maxWidth: .infinity, minHeight: Metric.primaryButton)
        }
        .buttonStyle(OfferButtonStyle())
        .disabled(!enabled)
        .opacity(enabled ? 1 : 0.4)
    }
}

private struct OfferButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .background {
                Capsule().fill(configuration.isPressed ? Palette.accentPressed : Palette.accent)
                Capsule().fill(LinearGradient(colors: [.white.opacity(0.2), .clear], startPoint: .top, endPoint: .center))
            }
            .overlay(Capsule().strokeBorder(Palette.sheen, lineWidth: 1.5))
            .shadow(color: Palette.sheenGlow, radius: 16, y: 8)
            .scaleEffect(configuration.isPressed ? 0.98 : 1)
            .animation(.easeOut(duration: 0.12), value: configuration.isPressed)
    }
}
