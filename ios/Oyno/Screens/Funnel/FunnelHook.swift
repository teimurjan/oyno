import SwiftUI

/// The opening, told over one planet and one thumb: dark while the phone has the evening,
/// colour spreading from its heart while the thumb stays, the family stepping onto it once it
/// has bloomed. Opal's rock cracking open to the stone inside, with a hold instead of taps:
/// the thumb staying is the evening together. The screen moves on by itself once its last
/// line has been read and the thumb has left.
struct FunnelHook: View {
    /// The planet bloomed, its line was read, and the thumb is off it.
    let onDone: () -> Void

    @State private var hold = HookHold.asleep
    /// How far the colour has reached, 0 to 1, driven by the thumb.
    @State private var bloom: CGFloat = 0
    @State private var thumbDown = false
    /// The bloomed line has been up long enough to read.
    @State private var lineRead = false

    /// How long the thumb stays before the planet has bloomed.
    private static let holdMilliseconds = 1600
    /// Time to read the bloomed line before the screen moves on.
    private static let readMilliseconds = 2600

    var body: some View {
        VStack(spacing: 0) {
            Spacer(minLength: 0)
            ZStack {
                FunnelLine(text: line)
                    .id(line)
                    .transition(.blurReplace)
            }
            // Room for two lines, and more only if the type size needs it: the planet under
            // it must not move between one line and two.
            .frame(minHeight: 92)
            .padding(.horizontal, Metric.gutter + 8)
            HookPlanet(
                bloom: bloom,
                bloomed: hold == .bloomed,
                held: hold == .holding,
                onPress: press,
                onRelease: release
            )
            .padding(.top, Metric.Space.s)
            .accessibilityRepresentation {
                Button(String(interface: "Wake the planet"), action: begin)
            }
            Spacer(minLength: 0)
            Spacer(minLength: 0)
        }
        // Where the chrome draws "Tap to continue" on the screens that take a tap.
        .overlay(alignment: .bottom) {
            FunnelHint(text: String(interface: "Hold the planet"))
                .frame(height: Metric.tapTarget)
                .padding(.vertical, Metric.Space.xs)
                .opacity(hold == .asleep ? 1 : 0)
                .animation(.easeOut(duration: 0.25), value: hold == .asleep)
        }
        .task(id: hold) { await advanceHold() }
    }

    private var line: String {
        switch hold {
        case .bloomed: String(interface: "And this is what it's like with you.")
        case .asleep, .holding: String(interface: "This is your kid's planet while you're on your phone.")
        }
    }

    // MARK: - The hold

    private func press() {
        guard !thumbDown else { return }
        thumbDown = true
        begin()
    }

    private func begin() {
        guard hold == .asleep else { return }
        Haptics.tap()
        hold = .holding
        withAnimation(.easeInOut(duration: Double(Self.holdMilliseconds) / 1000)) { bloom = 1 }
    }

    /// Letting go early puts the planet back to sleep. Letting go of a bloomed one, with its
    /// line read, ends the screen.
    private func release() {
        thumbDown = false
        switch hold {
        case .asleep:
            return
        case .holding:
            hold = .asleep
            withAnimation(.easeOut(duration: 0.45)) { bloom = 0 }
        case .bloomed:
            if lineRead { onDone() }
        }
    }

    /// The hold's clock: the bloom lands when the thumb has stayed long enough, and the screen
    /// ends once its line has been read, or as soon as the thumb leaves after that. Letting go
    /// early cancels it with the hold.
    private func advanceHold() async {
        switch hold {
        case .asleep:
            return
        case .holding:
            guard await funnelPause(Self.holdMilliseconds) else { return }
            Haptics.success()
            withAnimation(.easeInOut(duration: 0.5)) { hold = .bloomed }
        case .bloomed:
            guard await funnelPause(Self.readMilliseconds) else { return }
            lineRead = true
            if !thumbDown { onDone() }
        }
    }
}

/// Where the thumb is in the hold.
private enum HookHold {
    case asleep, holding, bloomed
}

/// The home planet on its stage, drawn from the hold: a dark copy underneath, the painted one
/// over it behind a mask that spreads from the centre as far as `bloom` has reached, the
/// family rising on top once it has bloomed. A ring just off the rim says where to hold,
/// breathing until the thumb lands and filling while it stays. Every change animates in
/// place, so the phases read as one planet coming to life rather than three pictures.
private struct HookPlanet: View {
    /// How far the colour has reached, 0 asleep to 1 bloomed.
    let bloom: CGFloat
    let bloomed: Bool
    /// The thumb is down and the planet has not bloomed yet.
    let held: Bool
    let onPress: () -> Void
    let onRelease: () -> Void

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var floating = false

    private static let width: CGFloat = 290
    private static let diameter = width * PlanetLayout.planet.width
    private static let centre = CGPoint(
        x: width * 0.5,
        y: width * (PlanetLayout.planet.y + PlanetLayout.planet.width / 2)
    )
    /// The ring sits just off the rim, and the thumb can land anywhere inside it.
    private static let ringDiameter = diameter * 1.16

    var body: some View {
        let home = World.all[0]
        ZStack(alignment: .topLeading) {
            glow
            PlanetBody(world: home, width: Self.width, showsFamily: false)
                .grayscale(1)
                .brightness(-0.22)
            PlanetBody(world: home, width: Self.width, showsFamily: false)
                .mask { spread }
            Image("Family")
                .resizable()
                .scaledToFit()
                .place(PlanetLayout.family, width: Self.width)
                .opacity(bloomed ? 1 : 0)
                .offset(y: bloomed ? 0 : 18)
                .animation(.easeOut(duration: reduceMotion ? 0.25 : 0.7), value: bloomed)
            halo
            progress
            Circle()
                .fill(.clear)
                .contentShape(.circle)
                .frame(width: Self.ringDiameter, height: Self.ringDiameter)
                .position(Self.centre)
                .gesture(touch)
        }
        .frame(width: Self.width, height: Self.width * PlanetLayout.stageRatio, alignment: .topLeading)
        .scaleEffect(1 + 0.1 * bloom, anchor: PlanetLayout.bodyAnchor)
        .offset(y: floating ? -5 : 0)
        .onAppear {
            guard !reduceMotion else { return }
            withAnimation(.easeInOut(duration: 2.75).repeatForever(autoreverses: true)) { floating = true }
        }
    }

    /// Down and up, nothing in between: the thumb can wander off the ring without letting go.
    private var touch: some Gesture {
        DragGesture(minimumDistance: 0)
            .onChanged { _ in onPress() }
            .onEnded { _ in onRelease() }
    }

    /// From nothing to past the rim: at 1 the soft edge is clear of the disc.
    private var reach: CGFloat { 0.001 + bloom * 2 }

    private var spread: some View {
        Circle()
            .fill(RadialGradient(
                stops: [.init(color: .black, location: 0.6), .init(color: .clear, location: 1)],
                center: .center,
                startRadius: 0,
                endRadius: Self.diameter / 2
            ))
            .frame(width: Self.diameter, height: Self.diameter)
            .scaleEffect(reach)
            .position(Self.centre)
    }

    /// Warm light behind the planet, growing with the colour. Faint on purpose: the sky is
    /// already bright, and a glow here is a change of weather, not a spotlight.
    private var glow: some View {
        Circle()
            .fill(RadialGradient(
                colors: [Palette.caution.opacity(0.5), Palette.caution.opacity(0)],
                center: .center,
                startRadius: 0,
                endRadius: Self.diameter * 0.95
            ))
            .frame(width: Self.diameter * 1.9, height: Self.diameter * 1.9)
            .position(Self.centre)
            .opacity(bloom)
    }

    /// Where to hold: a soft ring breathing just off the rim while the planet waits. It gives
    /// way to the filling ring the moment the thumb lands, and comes back if it leaves early.
    private var halo: some View {
        ZStack {
            Circle()
                .stroke(Palette.sheen.opacity(0.3), lineWidth: 12)
                .blur(radius: 9)
            Circle()
                .strokeBorder(Palette.sheen.opacity(0.5), lineWidth: 1.5)
        }
        .frame(width: Self.ringDiameter, height: Self.ringDiameter)
        .breathing()
        .opacity(held || bloomed ? 0 : 1)
        .position(Self.centre)
        .animation(.easeOut(duration: 0.25), value: held)
    }

    /// The hold's clock, drawn: a track and an arc that closes as the colour spreads, gone with
    /// the bloom.
    private var progress: some View {
        ZStack {
            Circle()
                .stroke(Palette.sheen.opacity(0.2), lineWidth: 3)
            Circle()
                .trim(from: 0, to: bloom)
                .stroke(Palette.sheen, style: StrokeStyle(lineWidth: 3, lineCap: .round))
                .rotationEffect(.degrees(-90))
        }
        .frame(width: Self.ringDiameter, height: Self.ringDiameter)
        .opacity(held ? 1 : 0)
        .position(Self.centre)
        .animation(.easeOut(duration: held ? 0.2 : 0.5), value: held)
    }
}
