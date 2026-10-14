import SwiftUI

/// Screen Time, asked the way Opal asks: a picture of the sheet about to appear with an
/// arrow on the button to tap, and only then the real one. `KidHoursStore` makes the
/// request; declining is allowed, and the funnel goes on either way.
struct FunnelPermission: View {
    let onContinue: () -> Void

    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var stage = 0
    @State private var asking = false

    var body: some View {
        VStack(spacing: Metric.Space.l) {
            FunnelLine(text: String(interface: "Let's connect Oyno to Screen Time. Securely."))
                .funnelStage(stage >= 1)
            Spacer(minLength: 0)
            SystemAlertPreview(
                title: "“Oyno” Would Like to Access Screen Time",
                message: "Providing “Oyno” access to Screen Time may allow it to see your activity data, restrict content, and limit the usage of apps & websites.",
                leading: "Continue",
                trailing: "Don’t Allow",
                target: .leading,
                arrowDrawn: stage >= 3,
                accessibilityLabel: "A preview of the Screen Time permission sheet, with an arrow on Continue"
            )
                .funnelStage(stage >= 2)
            Spacer(minLength: 0)
            Text("Screen Time asks once. Oyno only sees the apps you pick, as tokens, and never what you do in them.")
                .font(Typeface.ui(13, .regular, relativeTo: .footnote))
                .foregroundStyle(Palette.muted)
                .multilineTextAlignment(.center)
                .fixedSize(horizontal: false, vertical: true)
                .funnelStage(stage >= 3)
            PrimaryButton(title: "Continue", enabled: stage >= 3 && !asking) { ask() }
                .frame(maxWidth: 420)
                .funnelStage(stage >= 3)
        }
        .funnelColumn()
        .task { await play() }
    }

    private func play() async {
        guard !reduceMotion else { return stage = 3 }
        stage = 1
        guard await funnelPause(700) else { return }
        stage = 2
        guard await funnelPause(900) else { return }
        stage = 3
    }

    private func ask() {
        asking = true
        Task {
            await kidHours.requestAuthorization()
            asking = false
            onContinue()
        }
    }
}

/// An iOS permission alert, drawn: Apple's words and Apple's face, so the real one reads as
/// the thing the arrow already pointed at. System font on purpose — this is a picture of iOS.
struct SystemAlertPreview: View {
    enum Side { case leading, trailing }

    let title: LocalizedStringKey
    let message: LocalizedStringKey
    let leading: LocalizedStringKey
    let trailing: LocalizedStringKey
    /// The button the arrow points at, set bold as iOS sets the default one.
    let target: Side
    let arrowDrawn: Bool
    let accessibilityLabel: LocalizedStringKey

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var haloBright = false

    private static let width: CGFloat = 270
    private static let radius: CGFloat = 14
    /// Clears the halo, which sits 10pt outside the sheet.
    private static let arrowGap: CGFloat = 18

    var body: some View {
        VStack(spacing: 0) {
            VStack(spacing: 6) {
                Text(title)
                    .font(.system(size: 17, weight: .semibold))
                Text(message)
                    .font(.system(size: 13))
                    .foregroundStyle(Palette.slate)
            }
            .multilineTextAlignment(.center)
            .padding(.horizontal, 16)
            .padding(.top, 19)
            .padding(.bottom, 16)
            Rectangle().fill(Palette.hairline).frame(height: 0.5)
            HStack(spacing: 0) {
                Text(leading)
                    .font(.system(size: 17, weight: target == .leading ? .semibold : .regular))
                    .frame(maxWidth: .infinity)
                Rectangle().fill(Palette.hairline).frame(width: 0.5)
                Text(trailing)
                    .font(.system(size: 17, weight: target == .trailing ? .semibold : .regular))
                    .frame(maxWidth: .infinity)
            }
            .frame(height: 44)
        }
        .foregroundStyle(Palette.ink)
        .frame(width: Self.width)
        .background(Palette.surface.opacity(0.94), in: .rect(cornerRadius: Self.radius))
        .shadow(color: Palette.glassShadow, radius: 24, y: 12)
        .overlay(
            RoundedRectangle(cornerRadius: Self.radius + 10)
                .strokeBorder(Palette.highlight.opacity(haloBright ? 0.45 : 0.12), lineWidth: 1.5)
                .padding(-10)
        )
        .overlay(alignment: .bottomLeading) { arrow }
        .padding(.bottom, Self.arrowGap + ArrowToButton.size.height)
        .onAppear {
            guard !reduceMotion else { return haloBright = true }
            withAnimation(.easeInOut(duration: 1.4).repeatForever(autoreverses: true)) { haloBright = true }
        }
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(Text(accessibilityLabel))
    }

    /// Drawn from below, curling up to the target button's foot, mirrored for the trailing one.
    private var arrow: some View {
        let mirrored = target == .trailing
        let tipX = mirrored ? ArrowToButton.size.width - ArrowToButton.tipX : ArrowToButton.tipX
        let buttonX = Self.width * (mirrored ? 0.75 : 0.25)
        return ArrowToButton()
            .trim(from: 0, to: arrowDrawn ? 1 : 0)
            .stroke(Palette.highlight, style: StrokeStyle(lineWidth: 2.5, lineCap: .round, lineJoin: .round))
            .frame(width: ArrowToButton.size.width, height: ArrowToButton.size.height)
            .scaleEffect(x: mirrored ? -1 : 1)
            .offset(x: buttonX - tipX, y: Self.arrowGap + ArrowToButton.size.height)
            .animation(.easeInOut(duration: reduceMotion ? 0 : 0.7), value: arrowDrawn)
    }
}

/// A curve from the bottom left that sweeps right, then turns to arrive pointing straight
/// up, with the head drawn last so a trim draws the shaft first.
private struct ArrowToButton: Shape {
    static let size = CGSize(width: 90, height: 84)
    static let tipX: CGFloat = 80
    private static let headLength: CGFloat = 12
    private static let headSpread = 0.5

    func path(in rect: CGRect) -> Path {
        var path = Path()
        let tip = CGPoint(x: rect.minX + Self.tipX, y: rect.minY)
        let start = CGPoint(x: rect.minX + 4, y: rect.maxY - 4)
        // The second control sits straight below the tip, so the shaft arrives vertically.
        path.move(to: start)
        path.addCurve(
            to: tip,
            control1: CGPoint(x: rect.minX + rect.width * 0.6, y: start.y),
            control2: CGPoint(x: tip.x, y: rect.minY + rect.height * 0.5)
        )
        for side in [-1.0, 1.0] {
            let angle = .pi / 2 + side * Self.headSpread
            path.move(to: tip)
            path.addLine(to: CGPoint(x: tip.x + cos(angle) * Self.headLength, y: tip.y + sin(angle) * Self.headLength))
        }
        return path
    }
}
