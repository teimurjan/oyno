import SwiftUI

/// The argument, made before the app asks for anything: Opal's onboarding, beat for beat,
/// told with our planet and our sums.
///
/// Thirteen screens, each a `FunnelStep`: the planet waking and dimming over four taps, the one
/// question, the news in two halves, Screen Time, notifications, the promise, the offer's
/// cover and the account. This screen keeps the index and the one answer, draws the step and the chrome
/// around it, and reports each arrival once — the question the numbers answer is *which*
/// step loses people. The offer after it is `PaywallScreen`.
struct FunnelScreen: View {
    /// "Sign in" on the first screen — straight to sign-in, past the story.
    let onSignIn: () -> Void
    /// The account step answered with an account.
    let onFinish: () -> Void

    @Environment(AuthStore.self) private var auth
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var index: Int
    @State private var pickups = Pickups.often
    /// Steps already reported.
    @State private var seen: Set<FunnelStep> = []

    /// `startingAt` is for the screenshot harness, which renders one step at a time.
    init(startingAt step: FunnelStep = .hookPlanet, onSignIn: @escaping () -> Void, onFinish: @escaping () -> Void) {
        _index = State(initialValue: FunnelStep.allCases.firstIndex(of: step) ?? 0)
        self.onSignIn = onSignIn
        self.onFinish = onFinish
    }

    private var step: FunnelStep { FunnelStep.allCases[index] }

    var body: some View {
        ZStack {
            content
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            if step.tapsToContinue {
                Color.clear
                    .contentShape(.rect)
                    .onTapGesture {
                        Haptics.tap()
                        advance(from: step)
                    }
            }
            chrome
        }
        .background(FunnelSky(step: step))
        .keyboardDismissBar()
        .signingInOverlay()
        .onAppear { arrive(at: index) }
        .onChange(of: auth.isSignedIn) { _, signedIn in
            if signedIn, step == .account { onFinish() }
        }
    }

    @ViewBuilder
    private var content: some View {
        switch step.kind {
        case .hook:
            FunnelHook(step: step).funnelExit()
        case .question:
            FunnelQuestion { answer in
                pickups = answer
                Analytics.shared.track(.funnelAnswered(question: Pickups.key, answer: answer.rawValue))
                advance(from: .pickups)
            }
            .funnelExit()
        case .interlude:
            FunnelInterlude { advance(from: .interlude) }.funnelExit()
        case .projection:
            FunnelProjection(step: step, pickups: pickups) { advance(from: step) }
                .id(step)
                .funnelExit()
        case .permission where step == .notifications:
            FunnelNotifications { advance(from: .notifications) }.funnelExit()
        case .permission:
            FunnelPermission { advance(from: .screenTime) }.funnelExit()
        case .promise:
            FunnelPromise(pickups: pickups) { advance(from: .promise) }.funnelExit()
        case .teaser:
            FunnelTeaser(pickups: pickups) { advance(from: .teaser) }.funnelExit()
        case .account:
            FunnelAccount().funnelExit()
        }
    }

    /// The way past the story for somebody with an account, on the first screen only, and
    /// the tap hint wherever a tap is the continue.
    private var chrome: some View {
        VStack {
            if step == .hookPlanet {
                HStack {
                    Spacer()
                    Button {
                        Haptics.tap()
                        onSignIn()
                    } label: {
                        Text("Sign in")
                            .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                            .foregroundStyle(Palette.muted)
                            .frame(minWidth: Metric.tapTarget, minHeight: Metric.tapTarget)
                            .contentShape(.rect)
                    }
                    .buttonStyle(.plain)
                }
            }
            Spacer()
            if step.tapsToContinue {
                FunnelTapHint()
                    .frame(height: Metric.tapTarget)
            }
        }
        .padding(.horizontal, Metric.gutter)
        .padding(.vertical, Metric.Space.xs)
        .animation(.easeInOut(duration: 0.3), value: step)
    }

    // MARK: - Flow

    /// Takes the step it was asked from, so a timer that outlives its screen's exit cannot
    /// skip the one after it.
    private func advance(from current: FunnelStep) {
        let next = index + 1
        guard current == step, FunnelStep.allCases.indices.contains(next) else { return }
        withAnimation(.easeInOut(duration: reduceMotion ? 0.2 : 0.5)) { index = next }
        arrive(at: next)
    }

    private func arrive(at next: Int) {
        let target = FunnelStep.allCases[next]
        if seen.insert(target).inserted {
            Analytics.shared.track(.funnelPageViewed(index: next, kind: target.kind.rawValue, step: target.rawValue))
        }
        // Somebody already signed in has nothing to do on the account step.
        if target == .account, auth.isSignedIn { onFinish() }
    }
}

/// The sky, with the news's weather on it: a red haze over the top while the figure is a
/// cost, a green one while it is what comes back. Opal's black with the green glow.
private struct FunnelSky: View {
    let step: FunnelStep

    var body: some View {
        ZStack(alignment: .top) {
            Palette.sky
            RadialGradient(
                colors: [haze.opacity(0.24), haze.opacity(0)],
                center: .top,
                startRadius: 0,
                endRadius: 460
            )
            .opacity(step.kind == .projection ? 1 : 0)
        }
        .ignoresSafeArea()
        .animation(.easeInOut(duration: 0.9), value: step)
    }

    private var haze: Color { step == .goodNews ? Palette.good : Palette.alert }
}
