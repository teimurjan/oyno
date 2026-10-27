import SwiftUI

/// Under the shrunk planet while the worlds are open, where `WorldCaption` rests: the way back
/// home between a step to each neighbour.
struct WorldsBar: View {
    let canStepBack: Bool
    let canStepForward: Bool
    let onClose: () -> Void
    let step: (_ by: Int) -> Void

    var body: some View {
        HStack(spacing: Metric.Space.xs) {
            BareButton(label: "Previous world", action: { step(-1) }) {
                Image(systemName: "chevron.left").font(.system(size: 17, weight: .semibold))
            }
            .enabled(canStepBack)
            BareButton(label: "Back to my world", action: onClose) {
                Text("Back to my world").padding(.horizontal, Metric.Space.s)
            }
            BareButton(label: "Next world", action: { step(1) }) {
                Image(systemName: "chevron.right").font(.system(size: 17, weight: .semibold))
            }
            .enabled(canStepForward)
        }
        .frame(height: Metric.tapTarget)
    }
}

/// Bare ink on the sky, no glass: the worlds' controls stay quieter than the screen's one fill.
private struct BareButton<Label: View>: View {
    let label: LocalizedStringResource
    let action: () -> Void
    @ViewBuilder let content: Label

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            content
                .font(Typeface.ui(14, .bold, relativeTo: .subheadline))
                .foregroundStyle(Palette.ink)
                .frame(minWidth: Metric.tapTarget, minHeight: Metric.tapTarget)
                .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityLabel(Text(label))
    }
}

/// Under the planet at rest: the family's world by name. Tapping it, like the planet, opens the
/// others, a way in left for the curious rather than offered.
struct WorldCaption: View {
    let world: World
    let onExplore: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            onExplore()
        } label: {
            Text(verbatim: world.name)
                .font(Typeface.ui(17, .extrabold, relativeTo: .headline))
                .foregroundStyle(Palette.ink)
                .frame(minHeight: Metric.tapTarget)
                .padding(.horizontal, Metric.Space.l)
                .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityHint(Text("Shows every world"))
    }
}

extension View {
    /// Fades a view out of sight, touch and VoiceOver while keeping its place in the layout.
    func shown(_ shown: Bool) -> some View {
        opacity(shown ? 1 : 0)
            .allowsHitTesting(shown)
            .accessibilityHidden(!shown)
    }
}

private extension View {
    func enabled(_ enabled: Bool) -> some View {
        disabled(!enabled).opacity(enabled ? 1 : 0.4)
    }
}
