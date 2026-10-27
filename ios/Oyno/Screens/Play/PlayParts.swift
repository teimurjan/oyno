import SwiftUI

/// What a game needs or exercises: a glyph and a word or three on a quiet ground. Not a
/// control, so no capsule and no glass edge.
struct Badge: View {
    let symbol: String
    let label: String

    var body: some View {
        HStack(spacing: 5) {
            Glyph(symbol: symbol, size: 12, weight: .semibold, color: Palette.slate)
            Text(verbatim: label)
                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                .foregroundStyle(Palette.slate)
        }
        .padding(.horizontal, 9)
        .padding(.vertical, 4)
        .frame(minHeight: 26)
        .background(Palette.wash, in: .rect(cornerRadius: 8))
    }
}

/// A segmented control: a quiet track, the chosen option lifted onto solid white that slides
/// to the next choice. Each option's tap area runs the track's full height.
struct Segments<Option: Hashable, Face: View>: View {
    let accessibilityLabel: LocalizedStringResource
    let options: [Option]
    @Binding var selection: Option
    @ViewBuilder let face: (_ option: Option, _ active: Bool) -> Face
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Namespace private var pill

    var body: some View {
        HStack(spacing: 0) {
            ForEach(options, id: \.self) { option in
                let active = option == selection
                Button {
                    Haptics.tap()
                    selection = option
                } label: {
                    face(option, active)
                        .padding(.horizontal, 10)
                        .frame(maxWidth: .infinity, minHeight: 36)
                        .background {
                            if active {
                                Capsule()
                                    .fill(Palette.surface)
                                    .shadow(color: Palette.glassShadow, radius: 4, y: 2)
                                    .matchedGeometryEffect(id: "pill", in: pill)
                            }
                        }
                        .padding(.vertical, 4)
                        .contentShape(.rect)
                }
                .buttonStyle(.plain)
                .accessibilityAddTraits(active ? .isSelected : [])
            }
        }
        .padding(.horizontal, 4)
        .background(Palette.wash, in: .capsule)
        .animation(reduceMotion ? nil : .snappy, value: selection)
        .accessibilityElement(children: .contain)
        .accessibilityLabel(Text(accessibilityLabel))
    }
}

extension Palette {
    /// The ground under metadata and a segmented track: a tint of ink, no glass, no edge.
    static let wash = Palette.ink.opacity(0.06)
}

extension Energy {
    /// How full the battery on the picker is drawn.
    var symbol: String {
        switch self {
        case .low: "battery.25"
        case .okay: "battery.50"
        case .full: "battery.100"
        }
    }
}

extension Activity.Tag {
    /// The icon on a tag's badge. A tag added to the data later wears a plain
    /// sparkle until it is given one here.
    var symbol: String {
        switch id {
        case "lying-down": "sofa"
        case "sitting": "figure.seated.side"
        case "standing": "figure.stand"
        case "on-your-lap": "figure.2.and.child.holdinghands"
        case "nothing-to-grab": "circle.slash"
        case "quiet": "speaker.slash"
        case "one-room": "door.left.hand.open"
        case "hallway": "arrow.left.and.right"
        case "bedtime": "moon.stars"
        case "mealtime": "fork.knife"
        case "bath": "bathtub"
        case "on-a-walk": "figure.walk"
        case "in-the-car": "car"
        case "stairs": "figure.stairs"
        case "window": "window.casement"
        case "socks": "shoe"
        case "cushions": "rectangle.stack"
        case "chairs": "chair"
        case "a-cup": "cup.and.saucer"
        case "a-cloth": "tshirt"
        case "a-book": "book"
        case "a-mirror": "person.crop.square"
        case "a-ball": "soccerball"
        case "a-toy": "teddybear"
        case "stacking": "square.stack.3d.up"
        case "crayons": "pencil.and.scribble"
        case "lights": "lightbulb"
        case "music": "music.note"
        case "singing": "music.mic"
        default: "sparkles"
        }
    }
}

extension Activity.Skill {
    /// The icon on a skill's badge.
    var symbol: String {
        switch id {
        case "working-memory": "brain.head.profile"
        case "inhibitory-control": "hand.raised"
        case "cognitive-flexibility": "arrow.triangle.2.circlepath"
        case "attention": "eye"
        default: "sparkles"
        }
    }
}

/// What a game or a moment exercises and who showed it, kept quiet under the steps. A source
/// opens in the browser.
struct Evidence: View {
    let skills: [Activity.Skill]
    let references: [Activity.Reference]

    var body: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            Text("Why it works").oynoEyebrow()
            FlowLayout(spacing: 6) {
                ForEach(skills, id: \.id) { skill in
                    Badge(symbol: skill.symbol, label: skill.label)
                }
            }
            VStack(alignment: .leading, spacing: 0) {
                ForEach(references, id: \.url) { reference in
                    Link(destination: reference.url) {
                        HStack(alignment: .firstTextBaseline, spacing: 4) {
                            Text(verbatim: reference.short)
                            Glyph(symbol: "arrow.up.right", size: 10, weight: .bold, color: Palette.muted)
                        }
                        .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.muted)
                        .frame(minHeight: 28)
                        .contentShape(.rect)
                    }
                    .accessibilityLabel(Text(verbatim: reference.title))
                }
            }
        }
    }
}
