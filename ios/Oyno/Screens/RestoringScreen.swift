import SwiftUI

/// The pause between an account appearing and the first run knowing what is left to ask.
///
/// A shop that deletes the app and installs it again has everything on the server and
/// nothing on the phone, and whether it already owns a printer is one request away. Without
/// a screen to hold that moment the first run has to guess — and guessing wrong means
/// showing the setup flow to a shop with three years of orders in it, which is how a second
/// printer and a fresh set of region defaults get written over the real ones.
///
/// Deliberately not the splash. The splash says "starting"; this says "your records are on
/// the way", which is the sentence somebody who has just signed in on a new phone is
/// waiting to read.
struct RestoringScreen: View {
    var body: some View {
        Screen(scrolls: false) {
            Spacer(minLength: 0)

            VStack(spacing: Metric.Space.m) {
                ProgressView()
                    .tint(Palette.muted)
                Text("Getting your shop")
                    .oynoTitle()
                    .multilineTextAlignment(.center)
                Text("Your printers, spools and orders are coming down from your account.")
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
