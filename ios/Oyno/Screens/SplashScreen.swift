import SwiftUI

/// The first frame: the mark rising out of the sky, then the word. About a second, and it
/// hands over as soon as it has played, whether or not the disk read was slower.
struct SplashScreen: View {
    var onFinish: (() -> Void)?

    @State private var shown = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        VStack(spacing: Metric.Space.m) {
            Image("AppMark")
                .resizable()
                .frame(width: 96, height: 96)
                .clipShape(.rect(cornerRadius: 24))
                .shadow(color: Palette.glassShadow, radius: 18, y: 12)
                .scaleEffect(shown || reduceMotion ? 1 : 0.86)
            Text(verbatim: "oyno")
                .font(Typeface.wordmark(34))
                .tracking(-1.2)
                .foregroundStyle(Palette.ink)
                .opacity(shown ? 1 : 0)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(Palette.sky.ignoresSafeArea())
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(Text(verbatim: "Oyno"))
        .task {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.7)) { shown = true }
            try? await Task.sleep(for: .milliseconds(reduceMotion ? 300 : 1100))
            onFinish?()
        }
    }
}
