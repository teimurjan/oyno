import SwiftUI

/// The opening, told over one planet: grey and asleep, then colour spreading from its heart,
/// the family stepping onto it, then the whole thing dimming — an evening the phone takes.
/// Opal's rock cracking open to the stone inside, with our planet.
struct FunnelHook: View {
    let step: FunnelStep

    var body: some View {
        VStack(spacing: 0) {
            Spacer(minLength: 0)
            ZStack {
                FunnelLine(text: line)
                    .id(step)
                    .transition(.blurReplace)
            }
            // Room for two lines, and more only if the type size needs it: the planet under
            // it must not move between one line and two.
            .frame(minHeight: 92)
            .padding(.horizontal, Metric.gutter + 8)
            HookPlanet(phase: HookPhase(step))
                .padding(.top, Metric.Space.s)
            Spacer(minLength: 0)
            Spacer(minLength: 0)
        }
    }

    private var line: String {
        switch step {
        case .hookCloser: String(interface: "Closer…")
        case .hookEvenings: String(interface: "Your evenings are like this too.")
        case .hookDimmed: String(interface: "Dimmed by a feed, a ping, and everything else pulling at you.")
        default: String(interface: "A planet this small only grows when its family shows up.")
        }
    }
}

/// What the planet is doing on each of the hook's screens.
enum HookPhase {
    case dormant, waking, bloom, dimmed

    init(_ step: FunnelStep) {
        switch step {
        case .hookCloser: self = .waking
        case .hookEvenings: self = .bloom
        case .hookDimmed: self = .dimmed
        default: self = .dormant
        }
    }
}

/// The home planet on its stage, morphing between phases: a grey copy underneath, the painted
/// one over it behind a mask that grows from the centre, the family rising on top. One
/// animation drives every change, so the phases read as one planet changing rather than four
/// pictures.
private struct HookPlanet: View {
    let phase: HookPhase

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var floating = false

    private static let width: CGFloat = 290
    private static let diameter = width * PlanetLayout.planet.width
    private static let centre = CGPoint(
        x: width * 0.5,
        y: width * (PlanetLayout.planet.y + PlanetLayout.planet.width / 2)
    )

    var body: some View {
        let home = World.all[0]
        ZStack(alignment: .topLeading) {
            glow
            PlanetBody(world: home, width: Self.width, showsFamily: false)
                .grayscale(1)
                .brightness(-0.08)
            PlanetBody(world: home, width: Self.width, showsFamily: false)
                .mask { spread }
            Image("Family")
                .resizable()
                .scaledToFit()
                .place(PlanetLayout.family, width: Self.width)
                .opacity(familyShown ? 1 : 0)
                .offset(y: familyShown ? 0 : 18)
        }
        .frame(width: Self.width, height: Self.width * PlanetLayout.stageRatio, alignment: .topLeading)
        .scaleEffect(scale, anchor: PlanetLayout.bodyAnchor)
        .saturation(phase == .dimmed ? 0.45 : 1)
        .brightness(phase == .dimmed ? -0.16 : 0)
        .animation(.easeInOut(duration: reduceMotion ? 0.25 : 1.4), value: phase)
        .offset(y: floating ? -5 : 0)
        .onAppear {
            guard !reduceMotion else { return }
            withAnimation(.easeInOut(duration: 2.75).repeatForever(autoreverses: true)) { floating = true }
        }
        .accessibilityHidden(true)
    }

    private var familyShown: Bool { phase == .bloom || phase == .dimmed }

    private var scale: CGFloat {
        switch phase {
        case .dormant: 1
        case .waking, .bloom: 1.1
        case .dimmed: 1.04
        }
    }

    /// How far the colour has reached: nothing, the heart, or past the rim.
    private var reach: CGFloat {
        switch phase {
        case .dormant: 0.001
        case .waking: 0.8
        case .bloom, .dimmed: 2
        }
    }

    private var glowOpacity: Double {
        switch phase {
        case .dormant: 0
        case .waking: 0.5
        case .bloom: 1
        case .dimmed: 0.15
        }
    }

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

    /// Warm light behind the planet once it is awake. Faint on purpose: the sky is already
    /// bright, and a glow here is a change of weather, not a spotlight.
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
            .opacity(glowOpacity)
    }
}
