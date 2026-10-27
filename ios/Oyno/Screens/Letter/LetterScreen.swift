import SwiftUI

/// D19 on the canvas: the Sunday letter. It comes sealed. Breaking the seal lifts the flap,
/// the envelope drops away, and the letter rises and writes itself in, one line at a time.
/// Then it can go to the rest of the family as a picture, with a line in the parent's words.
struct LetterScreen: View {
    let week: Week

    @Environment(OynoStore.self) private var oyno
    @Environment(\.dismiss) private var dismiss
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(\.displayScale) private var displayScale
    @AppStorage("oyno.kidName") private var kidName = ""
    @AppStorage("oyno.weekGoal") private var goal = Week.defaultGoal
    @State private var stage = Stage.sealed
    @State private var revealed = 0
    @State private var writing = false
    @State private var draft = ""
    @State private var shared: Image?

    private enum Stage: Comparable { case sealed, breaking, open }

    /// `opened` starts on the letter already written, for the store screenshots.
    init(week: Week, opened: Bool = false) {
        self.week = week
        _stage = State(initialValue: opened ? .open : .sealed)
        _revealed = State(initialValue: opened ? 40 : 0)
    }

    private var letter: WeekLetter? { oyno.letter(for: week, goal: goal) }

    var body: some View {
        ZStack {
            desk.ignoresSafeArea()
            if let letter {
                if stage < .open || !reduceMotion { envelope(letter) }
                paper(letter)
            }
            VStack(spacing: 0) {
                topBar
                Spacer()
                if stage == .sealed { opening } else if stage == .open, isWritten { finished }
            }
            .padding(.horizontal, Metric.gutter)
        }
        .alert("Add a line in your words", isPresented: $writing) {
            TextField(text: $draft) { Text("Your line") }
            Button("Save") {
                oyno.setLetterLine(draft, for: week)
                render()
            }
            Button("Cancel", role: .cancel) {}
        }
        .onAppear { draft = oyno.letterLine(for: week) ?? "" }
    }

    private var isWritten: Bool { revealed >= 40 }

    private var topBar: some View {
        HStack {
            Text("Sunday post · \(week.sunday().formatted(Date.FormatStyle().month(.wide).day().locale(InterfaceLanguage.locale)))")
                .font(Typeface.ui(13, .bold, relativeTo: .caption))
                .foregroundStyle(Color(hex: 0x5E5A66))
            Spacer()
            GlassIconButton(symbol: "xmark", label: "Close") { dismiss() }
        }
        .padding(.top, Metric.Space.s)
    }

    private var desk: some View {
        LinearGradient(colors: [Color(hex: 0xB9CDE8), Color(hex: 0xEBD9C8), Color(hex: 0xE8CFB3)], startPoint: .top, endPoint: .bottom)
            .overlay {
                RadialGradient(colors: [Color(hex: 0xFFF6E6), Color(hex: 0xFFF6E6).opacity(0)], center: UnitPoint(x: 0.5, y: 0.42), startRadius: 0, endRadius: 360)
            }
    }

    // MARK: Sealed

    private func envelope(_ letter: WeekLetter) -> some View {
        let gone = stage == .open
        return ZStack(alignment: .top) {
            RoundedRectangle(cornerRadius: 6)
                .fill(Self.kraft.opacity(0.86))
                .frame(width: 346, height: 232)
                .shadow(color: Color(hex: 0x5A3C1E).opacity(0.28), radius: 25, y: 24)
            Envelope()
                .fill(Self.kraft)
                .frame(width: 346, height: 232)
                .overlay(alignment: .bottom) {
                    Text(kidName.isEmpty ? "for the grown-ups" : "for \(kidName)'s grown-ups")
                        .font(Typeface.hand(26))
                        .foregroundStyle(Color(hex: 0x4A3B2A))
                        .padding(.bottom, 16)
                }
            Flap()
                .fill(Self.kraft.opacity(0.97))
                .frame(width: 346, height: 150)
                .rotation3DEffect(.degrees(stage == .sealed ? 0 : 180), axis: (x: 1, y: 0, z: 0), anchor: .top, perspective: 0.5)
                .zIndex(stage == .sealed ? 2 : 0)
            seal
                .offset(y: 104)
                .zIndex(3)
        }
        .frame(width: 346, height: 232)
        .offset(y: gone ? 600 : 40)
        .opacity(gone ? 0 : 1)
        .accessibilityHidden(true)
        .overlay(alignment: .top) {
            if stage == .sealed {
                VStack(spacing: 8) {
                    Text("A letter from \(oyno.world.name)")
                        .font(Typeface.ui(32, .extrabold, relativeTo: .largeTitle))
                        .tracking(-1)
                        .foregroundStyle(Palette.ink)
                    Text("Your planet wrote about your week.")
                        .font(Typeface.ui(16, .medium, relativeTo: .body))
                        .foregroundStyle(Color(hex: 0x5E5A66))
                }
                .multilineTextAlignment(.center)
                .frame(width: 342)
                .offset(y: -150)
            }
        }
    }

    private var seal: some View {
        Button(action: open) {
            ZStack {
                Circle()
                    .fill(RadialGradient(colors: [Color(hex: 0x9DB896), Color(hex: 0x6C8C66), Color(hex: 0x4E6B49)], center: UnitPoint(x: 0.38, y: 0.34), startRadius: 0, endRadius: 46))
                    .shadow(color: Color(hex: 0x283C23).opacity(0.35), radius: 6, y: 6)
                Circle()
                    .strokeBorder(.black.opacity(0.18), lineWidth: 2)
                    .frame(width: 54, height: 54)
                Image(oyno.world.imageName)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 40, height: 40)
                    .blendMode(.luminosity)
                    .opacity(0.6)
            }
            .frame(width: 76, height: 76)
        }
        .buttonStyle(.plain)
        .scaleEffect(stage == .sealed ? 1 : 0.5)
        .rotationEffect(.degrees(stage == .sealed ? 0 : -24))
        .opacity(stage == .sealed ? 1 : 0)
        .accessibilityLabel(Text("Break the seal"))
    }

    private var opening: some View {
        VStack(spacing: 14) {
            Text("Break the seal when you are both on the sofa.")
                .font(Typeface.ui(14, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Color(hex: 0x5E5A66))
                .multilineTextAlignment(.center)
            PrimaryButton(title: "Open the letter", action: open)
        }
        .padding(.bottom, Metric.Space.xl)
        .transition(.opacity.combined(with: .offset(y: 12)))
    }

    private func open() {
        guard stage == .sealed, let letter else { return }
        Haptics.success()
        Analytics.shared.track(.letterOpened(evenings: letter.evenings))
        render()
        guard !reduceMotion else {
            stage = .open
            revealed = 40
            return
        }
        Task { @MainActor in
            withAnimation(.easeInOut(duration: 0.5)) { stage = .breaking }
            try? await Task.sleep(for: .seconds(0.9))
            withAnimation(.timingCurve(0.22, 1, 0.36, 1, duration: 1.4)) { stage = .open }
            try? await Task.sleep(for: .seconds(1.1))
            for line in 1...40 {
                withAnimation(.timingCurve(0.22, 1, 0.36, 1, duration: 0.6)) { revealed = line }
                try? await Task.sleep(for: .seconds(0.1))
            }
        }
    }

    // MARK: Open

    private func paper(_ letter: WeekLetter) -> some View {
        let open = stage == .open
        return ScrollView {
            LetterPaper(letter: letter, world: oyno.world, kidName: kidName, parentLine: oyno.letterLine(for: week), revealed: revealed)
                .shadow(color: Color(hex: 0x5A4628).opacity(0.22), radius: 20, y: 18)
                .rotationEffect(.degrees(open ? -0.8 : 0))
                .padding(.horizontal, 12)
                .padding(.top, 110)
                .padding(.bottom, 160)
                .readableWidth()
        }
        .scrollIndicators(.hidden)
        .scrollDisabled(!open)
        .scaleEffect(open ? 1 : 0.87, anchor: .top)
        .offset(y: open ? 0 : (stage == .breaking ? 200 : 210))
        .mask {
            // Inside the envelope until it rises, the top of the page peeking out once the flap lifts.
            Rectangle().offset(y: open ? 0 : (stage == .breaking ? -140 : 600))
        }
        .zIndex(open ? 1 : -1)
    }

    private var finished: some View {
        VStack(spacing: 2) {
            if let shared {
                ShareLink(item: shared, preview: SharePreview(Text("A letter from \(oyno.world.name)"), image: shared)) {
                    HStack(spacing: 10) {
                        Glyph(symbol: "square.and.arrow.up", size: 16, weight: .bold, color: Palette.onAccent)
                        Text("Send to family")
                            .font(Typeface.ui(17, .bold, relativeTo: .headline))
                            .foregroundStyle(Palette.onAccent)
                    }
                    .frame(maxWidth: .infinity)
                    .frame(height: Metric.primaryButton)
                    .background(Palette.accent, in: .capsule)
                    .shadow(color: Palette.ink.opacity(0.22), radius: 12, y: 10)
                }
                .simultaneousGesture(TapGesture().onEnded { Analytics.shared.track(.letterShared) })
            }
            QuietButton(title: oyno.letterLine(for: week) == nil ? "Add a line in your words" : "Change your line") { writing = true }
        }
        .padding(.top, 40)
        .padding(.bottom, Metric.Space.l)
        .background {
            LinearGradient(colors: [Color(hex: 0xFFFDF6).opacity(0), Color(hex: 0xFFFDF6).opacity(0.92)], startPoint: .top, endPoint: UnitPoint(x: 0.5, y: 0.38))
                .padding(.horizontal, -Metric.gutter)
                .ignoresSafeArea(edges: .bottom)
        }
        .transition(.opacity)
    }

    /// The whole letter as a picture, for the share sheet.
    private func render() {
        guard let letter else { return }
        let page = LetterPaper(letter: letter, world: oyno.world, kidName: kidName, parentLine: oyno.letterLine(for: week))
            .frame(width: 390)
            .environment(\.locale, InterfaceLanguage.locale)
        let renderer = ImageRenderer(content: page)
        renderer.scale = displayScale
        shared = renderer.uiImage.map { Image(uiImage: $0) }
    }

    private static let kraft = Color(hex: 0xEEDFC7)
}

/// The envelope's front: its sides fold in to a point a little below the middle.
private struct Envelope: Shape {
    func path(in rect: CGRect) -> Path {
        Path { path in
            path.move(to: .zero)
            path.addLine(to: CGPoint(x: rect.midX, y: rect.height * 0.55))
            path.addLine(to: CGPoint(x: rect.maxX, y: 0))
            path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY))
            path.addLine(to: CGPoint(x: 0, y: rect.maxY))
            path.closeSubpath()
        }
    }
}

/// The flap, a triangle hinged on the envelope's top edge.
private struct Flap: Shape {
    func path(in rect: CGRect) -> Path {
        Path { path in
            path.move(to: .zero)
            path.addLine(to: CGPoint(x: rect.maxX, y: 0))
            path.addLine(to: CGPoint(x: rect.midX, y: rect.maxY))
            path.closeSubpath()
        }
    }
}
