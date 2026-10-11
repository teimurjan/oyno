import SwiftUI

extension View {
    /// Fades slowly between dim and full, for a hint that waits to be acted on. Still under
    /// Reduce Motion.
    func breathing() -> some View {
        modifier(Breathing())
    }
}

private struct Breathing: ViewModifier {
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var bright = false

    func body(content: Content) -> some View {
        content
            .opacity(bright ? 1 : 0.4)
            .onAppear {
                guard !reduceMotion else { return bright = true }
                withAnimation(.easeInOut(duration: 1.1).repeatForever(autoreverses: true)) { bright = true }
            }
    }
}
