import SwiftUI

/// The wall, as the last step: an account, so the plan on the next screen has somewhere to
/// live. `SignInProviders` is the sign-in screen's; the words are the funnel's own.
struct FunnelAccount: View {
    @State private var showEmail = false

    var body: some View {
        // Centred where it fits, scrolling where it does not: the keyboard and the email form.
        GeometryReader { geometry in
            ScrollView {
                VStack(spacing: Metric.Space.l) {
                    FunnelLine(text: String(interface: "Almost there. [Save your plan] to start."), size: 26)
                        .funnelRise()
                    Text("Your plan and your family's planet are tied to your account.")
                        .font(Typeface.ui(15, .regular, relativeTo: .subheadline))
                        .foregroundStyle(Palette.muted)
                        .multilineTextAlignment(.center)
                        .fixedSize(horizontal: false, vertical: true)
                        .funnelRise(after: 0.12)
                    SignInProviders(showEmail: $showEmail)
                        .padding(.top, Metric.Space.s)
                        .funnelRise(after: 0.24)
                }
                .frame(maxWidth: FunnelColumn.maxWidth)
                .padding(.horizontal, Metric.gutter)
                .padding(.vertical, Metric.Space.xl)
                .frame(minHeight: geometry.size.height)
                .containerRelativeFrame(.horizontal)
            }
            .scrollIndicators(.hidden)
            .scrollDismissesKeyboard(.interactively)
        }
    }
}
