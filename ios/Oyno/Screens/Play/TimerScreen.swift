import SwiftUI

/// D4 on the canvas: the countdown for the whole round, every step of the game at once, five
/// more minutes, a pause, and a way to end early. An everyday moment (D12) shows one nudge at a
/// time instead, and Their lead (D13) asks for the phone to go down and does almost nothing. Leaving asks first: a left round is lost. The screen stays awake while it runs, so the phone can lie
/// on the rug, and the round ends on a chime unless the bell is turned off. Away from the app,
/// the Lock Screen and the Dynamic Island count it down, and a notification rings the end.
struct TimerScreen: View {
    let session: Session
    let onFinish: (_ minutes: Int) -> Void

    @Environment(\.dismiss) private var dismiss
    @Environment(\.adaptive) private var adaptive
    @AppStorage("oyno.chime") private var chimes = true
    @State private var countdown: Countdown
    @State private var finished = false
    @State private var confirmingLeave = false
    @State var nudge = 0
    /// Their lead's phone, put down: the screen goes dark and may lock.
    @State var asleep = false

    init(session: Session, onFinish: @escaping (_ minutes: Int) -> Void) {
        self.session = session
        self.onFinish = onFinish
        _countdown = State(initialValue: Countdown(total: TimeInterval(session.minutes * 60)))
    }

    private var isLead: Bool { session.kind == .lead }

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
            .overlay {
                if asleep { sleeping(left: left) }
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
        .onChange(of: asleep) { _, dark in UIApplication.shared.isIdleTimerDisabled = !dark }
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
                    if isLead {
                        leadHeading(left: left)
                    } else {
                        dial(left: left, now: now, side: barsShown ? 224 : 280)
                    }
                    panel(large: false)
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
                if isLead { leadWords(centred: true) }
            }
            .padding(.vertical, Metric.Space.xl)
            .frame(maxHeight: .infinity)
        } trailing: {
            ScrollsIfNeeded {
                VStack(alignment: .leading, spacing: adaptive.roomy ? Metric.Space.xl : 14) {
                    Spacer(minLength: 0)
                    panel(large: adaptive.roomy)
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
                    panel(large: false)
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
        RoundLive.show(title: session.title, countdown: countdown, chimes: chimes)
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
        Text(verbatim: session.title)
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
            Glyph(symbol: session.kind == .game ? "iphone.landscape" : "bell", size: 17, weight: .regular, color: Palette.muted)
            Text(hintText)
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .multilineTextAlignment(.center)
    }

    private var hintText: LocalizedStringResource {
        switch session.kind {
        case .game: chimes ? "Face down is fine. We'll chime at the end." : "Face down is fine. We'll buzz at the end."
        case .lead: chimes ? "The bell rings at the end, even when it is locked." : "We'll buzz at the end, even when it is locked."
        default: chimes ? "Put the phone on the shelf. The bell rings at the end." : "Put the phone on the shelf. We'll buzz at the end."
        }
    }

    @ViewBuilder
    private var controls: some View {
        if isLead { leadControls } else { roundControls }
    }

    /// Their lead's: the phone goes down, and the round ends from the dark screen or here.
    private var leadControls: some View {
        VStack(spacing: 2) {
            PrimaryButton(title: "Put the phone down", symbol: "moon") { asleep = true }
            QuietButton(title: "We're done") { finish(at: .now) }
        }
    }

    private var roundControls: some View {
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

// MARK: What the round shows

extension TimerScreen {
    /// The game's steps all at once, an everyday moment's nudges one at a time, or what Their
    /// lead asks of the parent.
    @ViewBuilder
    func panel(large: Bool) -> some View {
        switch session.kind {
        case .game:
            Card(padding: large ? 24 : Metric.cardPadding, raised: true) { StepList(steps: session.steps, large: large) }
        case .lead:
            LeadSteps(nudges: session.steps)
        default:
            NudgeTicker(nudges: session.steps, index: $nudge, large: large)
        }
    }

    /// The phone's Their lead: the time left as a pill over the ask, in big words.
    func leadHeading(left: Int) -> some View {
        VStack(spacing: 28) {
            HStack(spacing: Metric.Space.s) {
                Text(verbatim: Format.clock(seconds: left)).foregroundStyle(Palette.gold)
                Circle().fill(.white.opacity(0.5)).frame(width: 3, height: 3)
                Text("left of \(Format.clock(seconds: session.minutes * 60))").foregroundStyle(Palette.onAccent)
            }
            .font(Typeface.figures(15, .bold, relativeTo: .subheadline))
            .monospacedDigit()
            .padding(.horizontal, 16)
            .frame(height: 36)
            .background(Palette.ink, in: .capsule)
            .accessibilityElement(children: .ignore)
            .accessibilityLabel(Text("\(left / 60) minutes \(left % 60) seconds left"))
            leadWords(centred: true)
        }
        .padding(.top, Metric.Space.l)
    }

    func leadWords(centred: Bool) -> some View {
        VStack(spacing: 12) {
            Text("Phone down.\nWatch them lead.")
                .font(Typeface.ui(44, .extrabold, relativeTo: .largeTitle))
                .tracking(-1.8)
                .foregroundStyle(Palette.ink)
                .accessibilityAddTraits(.isHeader)
            Text("They pick. You follow.")
                .font(Typeface.ui(17, .semibold, relativeTo: .headline))
                .foregroundStyle(Palette.muted)
        }
        .multilineTextAlignment(centred ? .center : .leading)
        .fixedSize(horizontal: false, vertical: true)
    }

    /// The phone put down: nearly black, so it lights nothing in the room, and a tap away.
    func sleeping(left: Int) -> some View {
        Button {
            asleep = false
        } label: {
            VStack(spacing: Metric.Space.s) {
                Text(verbatim: Format.clock(seconds: left))
                    .font(Typeface.figures(56, .extrabold, relativeTo: .largeTitle))
                    .monospacedDigit()
                    .foregroundStyle(.white.opacity(0.55))
                Text("Their lead · tap to wake")
                    .font(Typeface.ui(14, .semibold, relativeTo: .subheadline))
                    .foregroundStyle(.white.opacity(0.4))
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Color(hex: 0x0E131C))
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .ignoresSafeArea()
        .accessibilityLabel(Text("Wake the screen"))
    }
}

/// "Try this": one nudge at a time, so the parent glances rather than reads, and "Next idea".
private struct NudgeTicker: View {
    let nudges: [String]
    @Binding var index: Int
    var large = false

    var body: some View {
        Card(padding: large ? 24 : 18, raised: true) {
            VStack(alignment: .leading, spacing: 10) {
                HStack {
                    Text("Try this").oynoEyebrow()
                    Spacer()
                    Text("\(index + 1) of \(nudges.count)")
                        .font(Typeface.figures(13, .semibold, relativeTo: .caption))
                        .monospacedDigit()
                        .foregroundStyle(Palette.muted)
                }
                Text(verbatim: nudges[index])
                    .font(Typeface.ui(large ? 22 : 19, .bold, relativeTo: .title3))
                    .tracking(-0.2)
                    .foregroundStyle(Palette.ink)
                    .lineSpacing(3)
                    .frame(maxWidth: .infinity, minHeight: 52, alignment: .topLeading)
                    .fixedSize(horizontal: false, vertical: true)
                    .id(index)
                    .transition(.opacity)
                Button {
                    Haptics.tap()
                    withAnimation(.easeInOut(duration: 0.2)) { index = (index + 1) % nudges.count }
                } label: {
                    HStack(spacing: 6) {
                        Text("Next idea").font(Typeface.ui(15, .bold, relativeTo: .subheadline))
                        Glyph(symbol: "chevron.right", size: 12, weight: .bold, color: Palette.highlight)
                    }
                    .foregroundStyle(Palette.highlight)
                    .frame(minHeight: Metric.tapTarget)
                    .contentShape(.rect)
                }
                .buttonStyle(.plain)
            }
        }
        .accessibilityElement(children: .contain)
    }
}

/// Their lead's three asks, each a word over a line: Notice, Name it, Wait.
private struct LeadSteps: View {
    let nudges: [String]

    var body: some View {
        Card(raised: true) {
            VStack(alignment: .leading, spacing: 14) {
                ForEach(Array(zip(Self.asks, nudges).enumerated()), id: \.offset) { index, pair in
                    let tint = Palette.pastels[index % Palette.pastels.count]
                    HStack(spacing: Metric.Space.m) {
                        Glyph(symbol: pair.0.symbol, size: 18, weight: .semibold, color: tint.ink)
                            .frame(width: 36, height: 36)
                            .background(tint.fill, in: .rect(cornerRadius: 12))
                        VStack(alignment: .leading, spacing: 1) {
                            Text(pair.0.word).oynoRowTitle()
                            Text(verbatim: pair.1)
                                .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                                .foregroundStyle(Palette.muted)
                                .fixedSize(horizontal: false, vertical: true)
                        }
                    }
                    .accessibilityElement(children: .combine)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
        }
    }

    private static let asks: [(word: LocalizedStringResource, symbol: String)] = [
        ("Notice", "eye"),
        ("Name it", "text.bubble"),
        ("Wait", "clock"),
    ]
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
