import SwiftUI

/// What every funnel screen is built from, and how it moves: a line of the story, a part that
/// rises in through a blur, a step that leaves the same way, and the hint on a screen that
/// advances on a tap.

/// A line of the story: centred, short, with its `[bracketed]` span in `tint`.
struct FunnelLine: View {
    let text: String
    var size: CGFloat = 20
    var weight: Typeface.Weight = .semibold
    var tint: Color = Palette.highlight
    var color: Color = Palette.ink

    var body: some View {
        Text(FunnelCopy.accented(text, tint: tint))
            .font(Typeface.ui(size, weight, relativeTo: .title3))
            .tracking(size >= 24 ? -0.5 : -0.2)
            .foregroundStyle(color)
            .multilineTextAlignment(.center)
            .frame(maxWidth: .infinity)
            .fixedSize(horizontal: false, vertical: true)
    }
}

/// The hint breathing at the foot of a screen: "Tap to continue" where a tap anywhere
/// advances, "Hold the planet" on the hook.
struct FunnelHint: View {
    let text: String

    var body: some View {
        Text(verbatim: text)
            .font(Typeface.ui(12, .semibold, relativeTo: .caption))
            .tracking(1.6)
            .textCase(.uppercase)
            .foregroundStyle(Palette.muted)
            .breathing()
            .accessibilityHidden(true)
    }
}

/// Where a step's words sit: a column inset from the sides, and far enough off the top that a
/// headline starts where the eye expects it rather than against the clock.
enum FunnelColumn {
    static let topInset: CGFloat = 56
    static let maxWidth: CGFloat = 520
}

extension View {
    func funnelColumn() -> some View {
        frame(maxWidth: FunnelColumn.maxWidth)
            .padding(.horizontal, Metric.gutter)
            .padding(.top, FunnelColumn.topInset)
            .padding(.bottom, Metric.Space.l)
    }

    /// Rises into place out of a blur, `delay` seconds after it appears.
    func funnelRise(after delay: Double = 0) -> some View {
        modifier(FunnelRise(delay: delay))
    }

    /// A part of a screen told in time: hidden in a blur until its stage, then risen.
    func funnelStage(_ shown: Bool) -> some View {
        modifier(FunnelStaged(shown: shown))
    }

    /// The step's exit: it blurs away while the next one's parts rise.
    func funnelExit() -> some View {
        transition(AsymmetricTransition(insertion: IdentityTransition(), removal: .blurReplace))
    }
}

/// Sleeps, and says whether the screen is still there to go on. A `.task` is cancelled when
/// its view leaves, and a sleep that swallows that would carry a dead screen's timeline on.
func funnelPause(_ milliseconds: Int) async -> Bool {
    (try? await Task.sleep(for: .milliseconds(milliseconds))) != nil
}

private struct FunnelRise: ViewModifier {
    let delay: Double
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var shown = false

    func body(content: Content) -> some View {
        content
            .opacity(shown ? 1 : 0)
            .blur(radius: shown || reduceMotion ? 0 : 12)
            .offset(y: shown || reduceMotion ? 0 : 10)
            .onAppear {
                guard !reduceMotion else { return shown = true }
                withAnimation(.easeOut(duration: 0.65).delay(delay)) { shown = true }
            }
    }
}

private struct FunnelStaged: ViewModifier {
    let shown: Bool
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    func body(content: Content) -> some View {
        content
            .opacity(shown ? 1 : 0)
            .blur(radius: shown || reduceMotion ? 0 : 12)
            .offset(y: shown || reduceMotion ? 0 : 10)
            .animation(.easeOut(duration: reduceMotion ? 0.2 : 0.65), value: shown)
    }
}
