import SwiftUI

/// The nozzle prints the name — as a solid, turning in three dimensions.
///
/// It opens on the mark at rest — our nozzle, large and centred, exactly where the
/// storyboard leaves it — held for a beat, then it descends onto the plate, shrinking to a
/// print head while the whole scene turns into its three-quarter view. From there the word
/// "Oyno" is not drawn, it is *built*: a stack of `layers` copies of the wordmark, each
/// stepped back from the one in front, so the set reads as one extruded solid. The head
/// sweeps left-to-right and back — one pass per layer, deepest first — and lays each layer
/// down behind its tip with a wipe. The top face, pure white, caps the block last. Then the
/// nozzle lifts off and the solid settles into its resting attitude, held.
///
/// **The rotation is the source study's, one to one.** The whole word is a real 3D rotation
/// — `rotateX · rotateY · rotateZ · scale`, under perspective — built at a steep, yawed angle
/// (`rx −17°, ry 30°`) and settling to a resting three-quarter view (`rx −4°, ry 18°`): the
/// source's yaw, but the camera lifted to nearer eye level. The nozzle rides inside that so
/// it tracks the face
/// it is printing, but is counter-rotated by the same attitude so the print head keeps facing
/// the viewer. Before the descent the attitude is identity — upright, unturned — which is the
/// still the storyboard hands over.
///
/// **The ground is our brand blue (`Palette.accent`), and the block prints in white**, its
/// faces tinting from near-white just behind the cap to a light blue at the deepest, so the
/// wall reads as shaded depth. A soft, blurred shadow sits behind the solid and grows in as
/// it is built. This is the one screen in the app that is not on the near-white canvas: it is
/// a stage, and the thing on it is the product being made.
///
/// **Frame one is the resting mark on blue, and that is what `LaunchScreen.storyboard`
/// draws** — our nozzle, `Nozzle.restHeight` tall, centred, upright, on `Palette.accent`. At
/// t=0 this view is that same still: same mark, same size, same centre, no word and no
/// rotation yet. Change the background or the resting size here and change it there.
///
/// The choreography is time-addressed, not a chain of `withAnimation`s: a `TimelineView`
/// re-derives every position from one clock each frame. `frame(at:)` is that function, and
/// pure — hand it a time and it returns the whole picture.
///
/// About three and a quarter seconds end to end, eased throughout. Reduce Motion gets the
/// resting mark instead — the storyboard's still, held and handed straight on.
///
/// `onFinish` is what the composition root hands in. Without it there is nowhere to finish
/// *to* — the screenshot harness photographs one screen — so the sequence is skipped and the
/// finished solid is drawn directly.
struct SplashScreen: View {
    /// Absent when nothing comes next: the harness renders the final frame and nothing moves.
    var onFinish: (() -> Void)?

    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    /// The wordmark's own rendered width, measured once — the sweep's length, so nothing
    /// travels until the first layout pass has reported it.
    @State private var wordWidth: CGFloat = 0
    /// The clock's origin. Nil until `run` starts it; a nil clock reads as t=0, the resting
    /// still the storyboard also draws.
    @State private var start: Date?
    @State private var hasRun = false

    private var isStatic: Bool { onFinish == nil }

    var body: some View {
        ZStack {
            background

            if isStatic {
                wordBlock(finishedFrame)
            } else if reduceMotion {
                wordBlock(restingFrame)
            } else {
                TimelineView(.animation) { context in
                    let t = start.map { context.date.timeIntervalSince($0) } ?? 0
                    wordBlock(frame(at: t))
                }
            }

            measurer
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .task { await run() }
    }

    // MARK: - Ground

    private var background: some View {
        ZStack {
            Palette.accent.ignoresSafeArea()
            RadialGradient(
                colors: [Color.white.opacity(0.09), Color.white.opacity(0)],
                center: UnitPoint(x: 0.5, y: 0.38),
                startRadius: 0,
                endRadius: 420
            )
            .ignoresSafeArea()
        }
    }

    // MARK: - The solid

    /// The whole word, composed in one local space centred on the mark and then rotated as a
    /// unit. Because the nozzle lives in that same space, it tracks the faces automatically;
    /// its own counter-rotation is what keeps the print head facing the viewer.
    private func wordBlock(_ f: Frame) -> some View {
        ZStack {
            softShadow(f)

            // Deepest face first (back); the white top face is drawn last and caps the solid.
            ForEach(Array((0..<Layout.layers).reversed()), id: \.self) { j in
                layer(j, f)
            }

            nozzle(f)
            dot(f)
        }
        .scaleEffect(f.scale)
        .rotation3DEffect(.degrees(f.rz), axis: (x: 0, y: 0, z: 1))
        .rotation3DEffect(.degrees(f.ry), axis: (x: 0, y: 1, z: 0), perspective: Attitude.perspective)
        .rotation3DEffect(.degrees(f.rx), axis: (x: 1, y: 0, z: 0), perspective: Attitude.perspective)
    }

    /// One face of the extrusion, tinted by its depth and revealed as the head reaches it. The
    /// same-colour shadow fills the seams between faces so the wall reads as one piece.
    private func layer(_ j: Int, _ f: Frame) -> some View {
        let color = j == 0 ? Palette.onAccent : Layout.tint(j)
        let text = Text(verbatim: "Oyno")
            .font(Typeface.wordmark(Layout.size))
            .tracking(Layout.size * -0.012)
            .lineLimit(1)
            .fixedSize()
            .foregroundStyle(color)

        return Group {
            if j > f.currentLayer {
                text                                  // laid down already
            } else if j < f.currentLayer {
                text.opacity(0)                       // not reached yet
            } else {
                text.mask(alignment: f.sweepFromLeft ? .leading : .trailing) {
                    Rectangle().frame(width: f.sweepProgress * wordWidth)
                }
            }
        }
        .shadow(color: j == 0 ? .clear : color, radius: 0.7)
        .offset(x: CGFloat(j) * Layout.depthX, y: CGFloat(j) * Layout.depthY)
    }

    /// The soft cast shadow behind the solid — a blurred, dark copy set past the deepest face
    /// and down, fading in as the word is built.
    private func softShadow(_ f: Frame) -> some View {
        Text(verbatim: "Oyno")
            .font(Typeface.wordmark(Layout.size))
            .tracking(Layout.size * -0.012)
            .lineLimit(1)
            .fixedSize()
            .foregroundStyle(Layout.shadowColor)
            .blur(radius: 11)
            .opacity(f.shadowOpacity)
            .offset(
                x: CGFloat(Layout.layers) * Layout.depthX + Layout.shadowDropX,
                y: CGFloat(Layout.layers) * Layout.depthY + Layout.shadowDropY
            )
    }

    /// The print head. It is inside the word's rotation (so its position tracks the face it is
    /// laying) but carries the inverse attitude, so it always faces the viewer.
    private func nozzle(_ f: Frame) -> some View {
        Image("AppMark")
            .renderingMode(Layout.whiteNozzle ? .template : .original)
            .resizable()
            .scaledToFit()
            .frame(width: f.nozzleHeight * Nozzle.aspect, height: f.nozzleHeight)
            .foregroundStyle(.white)                  // only bites in template mode
            .shadow(color: .black.opacity(0.32), radius: 8, y: 2)
            // The inverse attitude, about the image's own centre: cancels the group's rotation
            // for the head's facing without moving where the group puts it.
            .rotation3DEffect(.degrees(-f.rx), axis: (x: 1, y: 0, z: 0))
            .rotation3DEffect(.degrees(-f.ry), axis: (x: 0, y: 1, z: 0))
            .rotation3DEffect(.degrees(-f.rz), axis: (x: 0, y: 0, z: 1))
            .opacity(f.nozzleOpacity)
            .offset(x: f.nozzleCenterX, y: f.nozzleCenterY)
    }

    private func dot(_ f: Frame) -> some View {
        Circle()
            .fill(Color.white)
            .frame(width: 5, height: 5)
            .shadow(color: .white.opacity(0.6), radius: 5)
            .opacity(f.dotVisible ? 0.9 : 0)
            .offset(x: f.dotX, y: f.dotY)
    }

    /// The wordmark's width, read off its own layout — a hidden copy, so the sweep ends exactly
    /// where the last glyph does.
    private var measurer: some View {
        Text(verbatim: "Oyno")
            .font(Typeface.wordmark(Layout.size))
            .tracking(Layout.size * -0.012)
            .lineLimit(1)
            .fixedSize()
            .opacity(0)
            .accessibilityHidden(true)
            .background {
                GeometryReader { proxy in
                    Color.clear
                        .onAppear { wordWidth = proxy.size.width }
                        .onChange(of: proxy.size.width) { _, width in wordWidth = width }
                }
            }
    }

    // MARK: - The sequence

    private func run() async {
        guard onFinish != nil, !hasRun else { return }
        hasRun = true

        guard !reduceMotion else {
            try? await Task.sleep(for: .seconds(Timing.reduced))
            onFinish?()
            return
        }

        var waited = Duration.zero
        while wordWidth <= 0, waited < Timing.measureCap {
            try? await Task.sleep(for: .milliseconds(8))
            waited += .milliseconds(8)
        }

        start = Date()
        try? await Task.sleep(for: .seconds(Timing.total))
        onFinish?()
    }

    /// The picture at time `t` (seconds since `start`), scaled by `Timing.speed`. Pure.
    private func frame(at t0: Double) -> Frame {
        let t = t0 * Timing.speed
        let n = Layout.layers
        let approachEnd = Timing.hold + Timing.approach
        let build = Double(n) * Timing.sweep
        func ease(_ x: Double) -> Double { let c = min(1, max(0, x)); return 1 - pow(1 - c, 3) }

        // The layer-wipe clock: negative through the rest and the descent, so every face is
        // still hidden while the head is on its way to the plate.
        let bt = t - approachEnd
        let printing = bt >= 0 && bt < build
        let i = printing ? Int(bt / Timing.sweep) : (bt < 0 ? -1 : n)   // sweeps done
        let u = printing ? (bt / Timing.sweep) - Double(i) : 0          // progress of this one
        let cur = n - 1 - i                                             // layer being printed

        // Attitude: identity while resting, ramping to the build angle across the descent,
        // held through the print, then swinging to the resting three-quarter view.
        var att: Attitude.Angles
        if t < Timing.hold {
            att = .identity
        } else if t < approachEnd {
            att = Attitude.lerp(.identity, .build, CGFloat(ease((t - Timing.hold) / Timing.approach)))
        } else if bt < build {
            att = .build
        } else {
            att = Attitude.settle(sp: CGFloat(ease((bt - build) / Timing.settle)))
        }

        // The descent's target — the pose that lays the first (deepest) face — as the image's
        // centre, so it lerps cleanly against the resting centre.
        let tipDelta = Nozzle.tipDelta(Nozzle.printHeight)
        let startTipX = -wordWidth / 2 + CGFloat(n - 1) * Layout.depthX
        let startTipY = Layout.inkTop + CGFloat(n - 1) * Layout.depthY
        let startCenterX = startTipX - tipDelta.x
        let startCenterY = startTipY - tipDelta.y

        var height: CGFloat
        var centerX: CGFloat
        var centerY: CGFloat
        var op: Double
        var tipX: CGFloat = 0
        var tipY: CGFloat = 0
        if t < Timing.hold {
            height = Nozzle.restHeight; centerX = 0; centerY = 0; op = 1
        } else if t < approachEnd {
            let a = CGFloat(ease((t - Timing.hold) / Timing.approach))
            height = Nozzle.restHeight + (Nozzle.printHeight - Nozzle.restHeight) * a
            centerX = startCenterX * a
            centerY = startCenterY * a
            op = 1
        } else if printing {
            height = Nozzle.printHeight
            let leftToRight = i % 2 == 0
            let frac = CGFloat(leftToRight ? u : 1 - u)
            tipX = -wordWidth / 2 + frac * wordWidth + CGFloat(cur) * Layout.depthX
            tipY = Layout.inkTop + CGFloat(cur) * Layout.depthY
            centerX = tipX - tipDelta.x
            centerY = tipY - tipDelta.y
            op = 1
        } else {
            let s = ease((bt - build) / (Timing.settle * 0.8))
            tipX = -wordWidth / 2 + ((n - 1) % 2 == 0 ? wordWidth : 0)
            tipY = Layout.inkTop - 90 * CGFloat(s)
            height = Nozzle.printHeight
            centerX = tipX - tipDelta.x
            centerY = tipY - tipDelta.y
            op = 1 - s
        }

        let built = bt < 0 ? 0 : (printing ? (Double(i) + u) / Double(n) : 1)
        let shadowOpacity = Layout.shadowMaxOpacity * min(1, max(0, built))

        return Frame(
            currentLayer: cur,
            sweepProgress: CGFloat(u),
            sweepFromLeft: i % 2 == 0,
            rx: att.rx, ry: att.ry, rz: att.rz, scale: att.scale,
            shadowOpacity: shadowOpacity,
            nozzleHeight: height,
            nozzleCenterX: centerX,
            nozzleCenterY: centerY,
            nozzleOpacity: op,
            dotX: tipX,
            dotY: tipY,
            dotVisible: printing
        )
    }

    /// The mark at rest, centred and upright, no word yet — the storyboard's still.
    private var restingFrame: Frame {
        Frame(
            currentLayer: Layout.layers, sweepProgress: 0, sweepFromLeft: true,
            rx: 0, ry: 0, rz: 0, scale: 1, shadowOpacity: 0,
            nozzleHeight: Nozzle.restHeight, nozzleCenterX: 0, nozzleCenterY: 0,
            nozzleOpacity: 1, dotX: 0, dotY: 0, dotVisible: false
        )
    }

    /// The finished solid at its resting attitude, the head gone — the frame the harness draws.
    private var finishedFrame: Frame {
        let rest = Attitude.Angles.rest
        return Frame(
            currentLayer: -1, sweepProgress: 0, sweepFromLeft: true,
            rx: rest.rx, ry: rest.ry, rz: rest.rz, scale: rest.scale,
            shadowOpacity: Layout.shadowMaxOpacity,
            nozzleHeight: Nozzle.printHeight, nozzleCenterX: 0, nozzleCenterY: 0,
            nozzleOpacity: 0, dotX: 0, dotY: 0, dotVisible: false
        )
    }
}

// MARK: - Frame

private struct Frame {
    /// The layer under the head. Faces deeper than it (`j > currentLayer`) are down; shallower
    /// ones are not reached; this one is mid-wipe. `-1` means the whole solid is built.
    var currentLayer: Int
    var sweepProgress: CGFloat
    var sweepFromLeft: Bool
    /// The viewing attitude, in degrees, plus its scale.
    var rx: Double
    var ry: Double
    var rz: Double
    var scale: CGFloat
    /// The cast shadow's opacity, growing in with the print.
    var shadowOpacity: Double
    /// The nozzle image's drawn height, and its centre as an offset in the word's local space.
    var nozzleHeight: CGFloat
    var nozzleCenterX: CGFloat
    var nozzleCenterY: CGFloat
    var nozzleOpacity: Double
    /// The deposit bead's position — the tip point, live only while `dotVisible`.
    var dotX: CGFloat
    var dotY: CGFloat
    var dotVisible: Bool
}

// MARK: - Constants

private extension SplashScreen {
    enum Layout {
        static let size: CGFloat = 56
        /// Faces in the extrusion. Sweeps equal faces, so this is also the length of the print.
        static let layers = 13
        /// Per-face step of the extrusion, in the word's local space, before the rotation turns
        /// the stack into visible depth.
        static let depthX: CGFloat = 0.7
        static let depthY: CGFloat = 1.0
        /// The top of the tallest glyph, relative to the text box centre — where the head
        /// deposits. Plex Sans' box is 1.30 em, baseline at 0.7885, `i` dot 0.746 em above it.
        static let inkTop: CGFloat = -0.371 * size

        /// A face's colour by depth: the top face (`j == 0`) is pure white; the rest tint from
        /// near-white just behind it to a light blue at the deepest. `Palette.accent` (#0F62FE)
        /// stepped toward white, the same formula the source uses.
        static func tint(_ j: Int) -> Color {
            let span = max(1, layers - 2)
            let k = 0.95 - 0.27 * (Double(j - 1) / Double(span))   // 0.95 (front) … 0.68 (deep)
            return Color(.sRGB,
                         red: (15 + (255 - 15) * k) / 255,
                         green: (98 + (255 - 98) * k) / 255,
                         blue: (254 + (255 - 254) * k) / 255)
        }

        /// The cast shadow: a dark near-black blue, dropped past the deepest face and down.
        static let shadowColor = Color(hex: 0x001A24)
        static let shadowMaxOpacity = 0.5
        static let shadowDropX: CGFloat = 6
        static let shadowDropY: CGFloat = 12

        /// Our nozzle in its own colour. Flip to draw it as a white silhouette instead.
        static let whiteNozzle = false
    }

    /// The mark, and the numbers that place it by its tip. Read off the 1234x1274 artwork's
    /// alpha, not eyeballed.
    enum Nozzle {
        static let restHeight: CGFloat = 200
        static let printHeight: CGFloat = 52
        static let aspect: CGFloat = 617 / 637
        static let tipU: CGFloat = 0.5008
        static let tipV: CGFloat = 0.9623
        /// The tip's offset from the image centre at a given drawn height — what turns a tip
        /// target into an image-centre offset.
        static func tipDelta(_ height: CGFloat) -> (x: CGFloat, y: CGFloat) {
            ((tipU - 0.5) * height * aspect, (tipV - 0.5) * height)
        }
    }

    /// The 3D attitude, one to one with the source study. `ry` is yaw, `rx` pitch (negative =
    /// seen from below), `rz` a slight roll that unwinds as it settles.
    enum Attitude {
        static let perspective: CGFloat = 0.25

        struct Angles {
            var rx: Double
            var ry: Double
            var rz: Double
            var scale: CGFloat

            static let identity = Angles(rx: 0, ry: 0, rz: 0, scale: 1)
            static let build = Angles(rx: -17, ry: 30, rz: 1.5, scale: 0.965)
            // A shade below eye level, not the source's steeper `-10`: the camera lifts as
            // the solid settles rather than staying low under it.
            static let rest = Angles(rx: -4, ry: 18, rz: 0, scale: 1)
        }

        static func lerp(_ a: Angles, _ b: Angles, _ t: CGFloat) -> Angles {
            let f = Double(t)
            return Angles(
                rx: a.rx + (b.rx - a.rx) * f,
                ry: a.ry + (b.ry - a.ry) * f,
                rz: a.rz + (b.rz - a.rz) * f,
                scale: a.scale + (b.scale - a.scale) * t
            )
        }

        /// The source's settle: build angle swinging to the resting three-quarter view.
        static func settle(sp: CGFloat) -> Angles { lerp(.build, .rest, sp) }
    }

    enum Timing {
        static let hold = 0.15          // the resting mark, before it moves
        static let approach = 0.45      // the descent onto the plate
        static let sweep = 0.145        // one layer
        static let settle = 0.55        // the attitude swinging to its resting angle
        static let endHold = 0.35       // the finished solid, held
        static let speed = 0.9
        static let reduced = 0.6
        static let measureCap = Duration.milliseconds(300)

        /// Real seconds from `start` to `onFinish`, i.e. the eased length divided by `speed`.
        static var total: Double {
            (hold + approach + Double(Layout.layers) * sweep + settle + endHold) / speed
        }
    }
}
