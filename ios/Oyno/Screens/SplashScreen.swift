import SwiftUI

/// The launch storyboard's still, then the child's circle grows until it fills the screen and
/// hands over. It waits for `isReady`, so the bloom never plays over a disk read still running.
struct SplashScreen: View {
    var isReady: Bool
    var onFinish: (() -> Void)?

    @State private var bloomed = false
    /// Set once the child covers the screen, so the handoff fades plain white, never the mark.
    @State private var covered = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    /// The same 256pt as `LaunchScreen.storyboard`, so the handoff is the mark not moving.
    private static let markSide: CGFloat = 256
    /// The child within `SplashMark`: `MARK.child` less `MARK.lift`, over `MARK.size`, in
    /// `lib/mark.ts`.
    private static let childY = (192.97 - 12.5 - 240) / 480 * markSide
    private static let childRadius = 30.72 / 480 * markSide

    var body: some View {
        ZStack {
            if covered {
                Color(hex: 0xFEFEFE)
            } else {
                bloom
            }
        }
        .ignoresSafeArea()
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(Text(verbatim: "Oyno"))
        .task(id: isReady) {
            guard isReady else { return }
            try? await Task.sleep(for: .milliseconds(250))
            guard !reduceMotion else {
                onFinish?()
                return
            }
            withAnimation(.easeIn(duration: 0.5)) { bloomed = true } completion: {
                withTransaction(Transaction(animation: nil)) { covered = true }
                onFinish?()
            }
        }
    }

    private var bloom: some View {
        GeometryReader { proxy in
            ZStack {
                Image("SplashMark")
                    .resizable()
                    .frame(width: Self.markSide, height: Self.markSide)
                Circle()
                    .fill(Color(hex: 0xFEFEFE))
                    .frame(width: childDiameter(in: proxy.size), height: childDiameter(in: proxy.size))
                    .offset(y: Self.childY)
            }
            .frame(width: proxy.size.width, height: proxy.size.height)
        }
        .background { Image("SplashSky").resizable() }
    }

    /// Bloomed, it reaches the farthest corners, the bottom ones, since the child sits above centre.
    private func childDiameter(in size: CGSize) -> CGFloat {
        guard bloomed else { return Self.childRadius * 2 }
        return hypot(size.width / 2, size.height / 2 - Self.childY) * 2
    }
}
