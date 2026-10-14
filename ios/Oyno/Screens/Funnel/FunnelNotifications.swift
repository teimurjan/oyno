import SwiftUI

/// Notifications, asked on their own screen after Screen Time: first the nudge a paused app
/// sends, then the alert with an arrow on Allow, and only then the real one. Declining is
/// allowed, and the funnel goes on either way.
struct FunnelNotifications: View {
    let onContinue: () -> Void

    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var stage = 0
    @State private var asking = false

    var body: some View {
        VStack(spacing: Metric.Space.l) {
            FunnelLine(text: String(interface: "Open a paused app, and Oyno [nudges you back] to your kid"))
                .funnelStage(stage >= 1)
            VStack(spacing: Metric.Space.s) {
                NotificationBannerPreview()
                    .funnelStage(stage >= 2)
                Text("One tap opens tonight's game. iOS only lets the nudge through if you allow it.")
                    .font(Typeface.ui(13, .regular, relativeTo: .footnote))
                    .foregroundStyle(Palette.muted)
                    .multilineTextAlignment(.center)
                    .fixedSize(horizontal: false, vertical: true)
                    .funnelStage(stage >= 3)
            }
            Spacer(minLength: 0)
            SystemAlertPreview(
                title: "“Oyno” Would Like to Send You Notifications",
                message: "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.",
                leading: "Don’t Allow",
                trailing: "Allow",
                target: .trailing,
                arrowDrawn: stage >= 5,
                accessibilityLabel: "A preview of the notifications permission alert, with an arrow on Allow"
            )
            .funnelStage(stage >= 4)
            Spacer(minLength: 0)
            PrimaryButton(title: "Continue", enabled: stage >= 5 && !asking) { ask() }
                .frame(maxWidth: 420)
                .funnelStage(stage >= 5)
        }
        .funnelColumn()
        .task { await play() }
    }

    private func play() async {
        guard !reduceMotion else { return stage = 5 }
        stage = 1
        guard await funnelPause(700) else { return }
        stage = 2
        guard await funnelPause(1100) else { return }
        stage = 3
        guard await funnelPause(900) else { return }
        stage = 4
        guard await funnelPause(900) else { return }
        stage = 5
    }

    private func ask() {
        asking = true
        Task {
            await kidHours.requestNotifications()
            asking = false
            onContinue()
        }
    }
}

/// The banner a paused app's "Open Oyno" sends, drawn as iOS draws it, in the words
/// `ParentApp.notify` sends.
private struct NotificationBannerPreview: View {
    private static let iconSide: CGFloat = 38

    var body: some View {
        HStack(spacing: 10) {
            Image("SplashMark")
                .resizable()
                .frame(width: Self.iconSide, height: Self.iconSide)
                .background(Palette.sky, in: .rect(cornerRadius: 9))
            VStack(alignment: .leading, spacing: 1) {
                HStack(alignment: .firstTextBaseline) {
                    Text("Open Oyno")
                        .font(.system(size: 15, weight: .semibold))
                    Spacer(minLength: 0)
                    Text("now")
                        .font(.system(size: 13))
                        .foregroundStyle(Palette.muted)
                }
                Text("Tap to pick tonight's game.")
                    .font(.system(size: 15))
            }
            .foregroundStyle(Palette.ink)
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 12)
        .frame(maxWidth: 360)
        .background(Palette.surface.opacity(0.94), in: .rect(cornerRadius: 22))
        .shadow(color: Palette.glassShadow, radius: 24, y: 12)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(Text("A preview of Oyno's notification: Open Oyno. Tap to pick tonight's game."))
    }
}
