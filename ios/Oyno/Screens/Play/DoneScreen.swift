import SwiftUI

/// D5 on the canvas: the round is recorded, the kid taps the planet, and it blooms. When Kid
/// hours are on, the parent can open their apps for 20 minutes from here.
struct DoneScreen: View {
    let minutes: Int
    let onClose: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @State private var tapped = false

    var body: some View {
        VStack(spacing: Metric.Space.l) {
            VStack(spacing: 4) {
                Text("+\(minutes) minutes together")
                    .font(Typeface.ui(15, .bold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.good)
                Text(tapped ? "Your planet just grew" : "Tap the planet together")
                    .font(Typeface.ui(30, .extrabold, relativeTo: .largeTitle))
                    .tracking(-0.9)
                    .foregroundStyle(Palette.ink)
                    .multilineTextAlignment(.center)
                    .contentTransition(.opacity)
                Text(tapped ? "Every round together is one bloom." : "Hand the phone to your kid for this part.")
                    .oynoCaption()
            }
            .padding(.top, Metric.Space.xl)

            PlanetScene(grown: tapped, accessibilityLabel: String(interface: "Tap the planet")) {
                guard !tapped else { return }
                Haptics.success()
                Analytics.shared.track(.planetTapped(bloom: oyno.bloom))
                withAnimation { tapped = true }
            }
            .frame(maxWidth: 280)

            VStack(spacing: 2) {
                Text("Bloom level \(oyno.bloom)").oynoValue(17, .extrabold)
                if let left = Bloom.roundsToNextWorld(from: oyno.bloom) {
                    Text(left == 1 ? "1 round to a new world" : "\(left) rounds to a new world").oynoCaption()
                }
            }
            .opacity(tapped ? 1 : 0)

            Spacer(minLength: 0)

            if kidHours.isOnNow {
                Card {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Your apps can open for \(KidHoursStore.breakMinutes) min").oynoRowTitle()
                        Text("Kid hours pick back up on their own.").oynoCaption()
                    }
                }
                SecondaryButton(title: "Unlock my apps") {
                    kidHours.takeBreak()
                    onClose()
                }
            }
            PrimaryButton(title: "Keep playing") { onClose() }
                .padding(.bottom, Metric.Space.l)
        }
        .padding(.horizontal, Metric.gutter)
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
        .animation(.easeOut(duration: 0.3), value: tapped)
    }
}
