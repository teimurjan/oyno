import SwiftUI

/// D4 on the canvas: the countdown for the whole round, every step of the game at once, five
/// more minutes, a pause, and a way to end early. Leaving asks first: a left round is lost. The screen stays awake while it runs, so the phone can lie
/// on the rug, and the round ends on a chime unless the bell is turned off. Away from the app,
/// the Lock Screen and the Dynamic Island count it down, and a notification rings the end.
struct TimerScreen: View {
    let activity: Activity
    let onFinish: (_ minutes: Int) -> Void

    @Environment(\.dismiss) private var dismiss
    @Environment(\.adaptive) private var adaptive
    @AppStorage("oyno.chime") private var chimes = true
    @State private var countdown: Countdown
    @State private var finished = false
    @State private var confirmingLeave = false

    init(activity: Activity, onFinish: @escaping (_ minutes: Int) -> Void) {
        self.activity = activity
        self.onFinish = onFinish
        _countdown = State(initialValue: Countdown(total: TimeInterval(activity.minutes * 60)))
    }

    var body: some View {
        TimelineView(.periodic(from: countdown.startedAt, by: 1)) { context in
            let now = context.date
            let left = countdown.secondsLeft(at: now)

            Group {
                switch adaptive.columns {
                case .one: column(left: left, now: now)
                case .two: split(left: left, now: now)
                case .rows: rows(left: left, now: now)
                }
            }
            .onChange(of: left) { _, value in
                if value <= 0 { finish(at: now) }
            }
        }
        .background(Palette.goldenSky.ignoresSafeArea())
        .toolbar(barsShown ? .visible : .hidden, for: .navigationBar)
        .toolbarBackground(.hidden, for: .navigationBar)
        .toolbar {
            if barsShown {
                ToolbarItem(placement: .topBarLeading) {
                    BarButton(title: "Back", symbol: "chevron.down") { confirmingLeave = true }
                }
                if adaptive.bars == .top, adaptive.columns == .two {
                    ToolbarItem(placement: .principal) { title }
                }
                ToolbarItem(placement: .topBarTrailing) {
                    BarButton(title: bellLabel, symbol: chimes ? "bell" : "bell.slash") { chimes.toggle() }
                }
            }
        }
        .onAppear {
            countdown = Countdown(total: countdown.total)
            UIApplication.shared.isIdleTimerDisabled = true
            showLive()
        }
        .onChange(of: countdown) { showLive() }
        .onChange(of: chimes) { showLive() }
        .onDisappear {
            UIApplication.shared.isIdleTimerDisabled = false
            RoundLive.end()
        }
        .modifier(LeaveConfirmation(isPresented: $confirmingLeave, asAlert: adaptive.barsAreSystem) { dismiss() })
    }

    /// Back and the bell move into the system's bar, except on the rows: standing half open on
    /// a table, the Duo keeps its bar along the top, out of reach of the hand on the flat half.
    private var barsShown: Bool { adaptive.barsAreSystem && adaptive.columns != .rows }

    /// The phone's: the dial over the steps, the pause and the finish pinned at the foot.
    private func column(left: Int, now: Date) -> some View {
        VStack(spacing: 0) {
            header
                .padding(.horizontal, Metric.gutter)
                .padding(.top, Metric.Space.s)
            ScrollView {
                VStack(spacing: Metric.Space.xl) {
                    dial(left: left, now: now, side: barsShown ? 224 : 280)
                    Card(raised: true) { StepList(steps: activity.steps) }
                }
                .padding(.horizontal, Metric.gutter)
                .padding(.vertical, Metric.Space.l)
                .readableWidth()
            }
            .scrollIndicators(.hidden)
            .scrollBounceBehavior(.basedOnSize)
            footer(alignment: .center)
                .padding(.horizontal, Metric.gutter)
                .padding(.top, Metric.Space.s)
                .padding(.bottom, Metric.Space.m)
                .readableWidth()
        }
    }

    /// iPad and the Duo open: the dial to watch on the leading side, the steps and the controls
    /// on the trailing one.
    private func split(left: Int, now: Date) -> some View {
        FoldColumns {
            VStack(spacing: 18) {
                if adaptive.bars != .top { title }
                dial(left: left, now: now, side: adaptive.roomy ? 420 : 360)
            }
            .padding(.vertical, Metric.Space.xl)
            .frame(maxHeight: .infinity)
        } trailing: {
            ScrollsIfNeeded {
                VStack(alignment: .leading, spacing: adaptive.roomy ? Metric.Space.xl : 14) {
                    Spacer(minLength: 0)
                    Card(padding: adaptive.roomy ? 24 : Metric.cardPadding, raised: true) {
                        StepList(steps: activity.steps, large: adaptive.roomy)
                    }
                    footer(alignment: .leading)
                    Spacer(minLength: 0)
                }
                .padding(.vertical, Metric.Space.xl)
            }
        }
    }

    /// The Duo standing half open on a table: the dial up on the raised half, big enough for a
    /// kid to read across the rug, and every control on the flat half.
    private func rows(left: Int, now: Date) -> some View {
        FoldRows {
            VStack(spacing: 6) {
                title
                dial(left: left, now: now, side: 384, addsFive: false)
            }
            .padding(.top, Metric.Space.s)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        } bottom: {
            ScrollsIfNeeded {
                VStack(spacing: 14) {
                    HStack {
                        GlassIconButton(symbol: "chevron.down", label: "Back") { confirmingLeave = true }
                        Spacer()
                        addFive
                        Spacer()
                        bell
                    }
                    Card(raised: true) { StepList(steps: activity.steps) }
                    Spacer(minLength: 0)
                    footer(alignment: .center)
                }
                .padding(.horizontal, 24)
                .padding(.top, 18)
                .padding(.bottom, Metric.Space.xl)
                .readableWidth()
            }
        }
    }

    private func showLive() {
        RoundLive.show(title: activity.title, countdown: countdown, chimes: chimes)
    }

    /// A round counts in whole minutes, at least one: ending early still played. One that ran
    /// out while the app was away already rang, from the notification.
    private func finish(at now: Date) {
        guard !finished else { return }
        finished = true
        RoundLive.end()
        Haptics.success()
        let rang = !countdown.isPaused && now.timeIntervalSince(countdown.endsAt) > 2
        if chimes, !rang { Chime.play() }
        onFinish(max(1, Int((countdown.elapsed(at: now) / 60).rounded())))
    }

    /// Back, the game's name and the bell, or the name alone where the system's bar holds the two.
    private var header: some View {
        HStack {
            if !barsShown {
                GlassIconButton(symbol: "chevron.down", label: "Back") { confirmingLeave = true }
            }
            Spacer()
            title
            Spacer()
            if !barsShown { bell }
        }
    }

    private var title: some View {
        Text(verbatim: activity.title)
            .font(Typeface.ui(adaptive.columns == .one ? 16 : 17, .extrabold, relativeTo: .headline))
            .tracking(-0.3)
            .foregroundStyle(Palette.ink)
            .multilineTextAlignment(.center)
            .lineLimit(2)
            .minimumScaleFactor(0.8)
            .accessibilityAddTraits(.isHeader)
    }

    private var bell: some View {
        GlassIconButton(symbol: chimes ? "bell" : "bell.slash", label: bellLabel) { chimes.toggle() }
    }

    private var bellLabel: LocalizedStringResource { chimes ? "Turn the chime off" : "Turn the chime on" }

    /// The amber arc is what is left, draining as the round runs. The figures scale with the
    /// dial, and run larger where "+5 min" moves out of it.
    private func dial(left: Int, now: Date, side: CGFloat, addsFive: Bool = true) -> some View {
        ZStack {
            Circle().fill(.white.opacity(0.34))
            Circle().stroke(.white.opacity(0.9), lineWidth: 8)
            Circle()
                .trim(from: 0, to: 1 - countdown.elapsed(at: now) / countdown.total)
                .stroke(Palette.amber, style: StrokeStyle(lineWidth: 8, lineCap: .round))
                .rotationEffect(.degrees(-90))
                .animation(.linear(duration: 1), value: left)
            VStack(spacing: 4) {
                VStack(spacing: addsFive ? 4 : 6) {
                    Text(verbatim: Format.clock(seconds: left))
                        .font(Typeface.figures(side * (addsFive ? 0.257 : 0.31), .extrabold, relativeTo: .largeTitle))
                        .monospacedDigit()
                        .tracking(-side * 0.01)
                        .foregroundStyle(Palette.ink)
                        .lineLimit(1)
                        .minimumScaleFactor(0.5)
                    Text("left of \(Format.clock(seconds: Int(countdown.total)))")
                        .font(Typeface.ui(side >= 360 ? 17 : 15, .semibold, relativeTo: .subheadline))
                        .foregroundStyle(Palette.muted)
                }
                .accessibilityElement(children: .ignore)
                .accessibilityLabel(Text("\(left / 60) minutes \(left % 60) seconds left"))
                if addsFive { addFive.padding(.top, 10) }
            }
            .padding(.horizontal, 24)
        }
        .padding(4)
        .aspectRatio(1, contentMode: .fit)
        .frame(maxWidth: side)
    }

    private var addFive: some View {
        Button {
            Haptics.tap()
            countdown.extend(by: 5 * 60)
        } label: {
            HStack(spacing: 6) {
                Glyph(symbol: "plus", size: 14, weight: .bold)
                Text("5 min")
                    .font(Typeface.figures(15, .bold, relativeTo: .subheadline))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
            }
            .padding(.leading, 12)
            .padding(.trailing, 16)
            .frame(height: Metric.compactControl)
            .glassCard(radius: Metric.compactControl / 2)
            .frame(minHeight: Metric.tapTarget)
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityLabel(Text("Add 5 minutes"))
    }

    /// Outside the scroll, so the pause and the finish stay in reach however long the steps run.
    private func footer(alignment: HorizontalAlignment) -> some View {
        VStack(alignment: alignment, spacing: Metric.Space.m) {
            hint
            controls
        }
    }

    private var hint: some View {
        HStack(spacing: Metric.Space.s) {
            Glyph(symbol: "iphone.landscape", size: 17, weight: .regular, color: Palette.muted)
            Text(chimes ? "Face down is fine. We'll chime at the end." : "Face down is fine. We'll buzz at the end.")
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .multilineTextAlignment(.center)
    }

    private var controls: some View {
        HStack(spacing: 10) {
            Button {
                Haptics.tap()
                if countdown.isPaused { countdown.resume(at: .now) } else { countdown.pause(at: .now) }
            } label: {
                HStack(spacing: Metric.Space.s) {
                    Glyph(symbol: countdown.isPaused ? "play.fill" : "pause.fill", size: 14, weight: .bold)
                    Text(countdown.isPaused ? "Resume" : "Pause")
                        .font(Typeface.ui(16, .bold, relativeTo: .headline))
                        .foregroundStyle(Palette.ink)
                }
                .frame(maxWidth: .infinity)
                .frame(height: Metric.primaryButton)
                .glassCard(radius: Metric.primaryButton / 2)
            }
            .buttonStyle(.plain)
            PrimaryButton(title: "We're done") { finish(at: .now) }
        }
    }
}

/// "Leave this round?": choices rising from the foot on the phone, an alert in a wide window,
/// which the Duo keeps clear of its fold.
private struct LeaveConfirmation: ViewModifier {
    @Binding var isPresented: Bool
    let asAlert: Bool
    let leave: () -> Void

    func body(content: Content) -> some View {
        content
            .confirmationDialog("Leave this round?", isPresented: shown(!asAlert), titleVisibility: .visible) {
                buttons
            } message: {
                message
            }
            .alert("Leave this round?", isPresented: shown(asAlert)) {
                buttons
            } message: {
                message
            }
    }

    private func shown(_ here: Bool) -> Binding<Bool> {
        Binding(get: { here && isPresented }, set: { isPresented = $0 })
    }

    @ViewBuilder
    private var buttons: some View {
        Button("Leave round", role: .destructive, action: leave)
        Button("Keep playing", role: .cancel) {}
    }

    private var message: some View {
        Text("The time so far won't count, and your planet won't grow.")
    }
}
