import SwiftUI

/// The pause between an account appearing and the first run knowing whether it already pays,
/// so somebody who subscribed on the web never sees the paywall flash.
struct RestoringScreen: View {
    var body: some View {
        Screen(scrolls: false) {
            Spacer(minLength: 0)

            VStack(spacing: Metric.Space.m) {
                ProgressView()
                    .tint(Palette.muted)
                Text("Finding your plan")
                    .oynoTitle()
                    .multilineTextAlignment(.center)
                Text("Checking your subscription on this account.")
                    .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
                    .multilineTextAlignment(.center)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .frame(maxWidth: .infinity)

            Spacer(minLength: 0)
        }
    }
}
