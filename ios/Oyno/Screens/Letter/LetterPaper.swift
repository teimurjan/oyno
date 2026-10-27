import SwiftUI

/// The letter itself: the planet writing to the family about its week, in a hand on ruled
/// paper, with the week's keepsake taped on like a photo. Drawn on screen line by line, and
/// whole into the image "Send to family" shares.
struct LetterPaper: View {
    let letter: WeekLetter
    let world: World
    let kidName: String
    /// The parent's own line, under the planet's.
    let parentLine: String?
    /// How many lines are written so far; all of them by default.
    var revealed = Int.max

    private static let ink = Color(hex: 0x2B3D7C)
    private static let lineHeight: CGFloat = 32

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            ForEach(Array(lines.enumerated()), id: \.offset) { index, line in
                lineView(line)
                    .opacity(index < revealed ? 1 : 0)
                    .offset(y: index < revealed ? 0 : 6)
                    .blur(radius: index < revealed ? 0 : 1.5)
            }
        }
        .font(Typeface.hand(25))
        .foregroundStyle(Self.ink)
        .lineSpacing(Self.lineHeight - 25)
        .padding(.leading, 62)
        .padding(.trailing, 22)
        .padding(.top, 39)
        .padding(.bottom, 48)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background { paper }
        .clipShape(.rect(cornerRadius: 3))
        .accessibilityElement(children: .combine)
    }

    // MARK: The words

    private enum Line: Hashable {
        case date(String)
        case greeting(String)
        case text(String)
        case photo(Keepsake)
        case parent(String)
        case signOff(String)
        case signature(String)
    }

    private var lines: [Line] {
        let sunday = letter.week.sunday()
        var lines: [Line] = [
            .date(sunday.formatted(Date.FormatStyle().weekday(.wide).month(.wide).day().locale(InterfaceLanguage.locale))),
            .greeting(kidName.isEmpty ? String(interface: "Dear grown-ups,") : String(interface: "Dear \(kidName)'s grown-ups,")),
        ]
        if let keepsake = letter.keepsakeID.flatMap(Keepsake.find) { lines.append(.photo(keepsake)) }
        lines.append(.text(String(interface: "It is me, \(world.name). This week you two came to me on \(letter.evenings) evenings.") + " " + goalLine))
        if !letter.counts.isEmpty {
            let parts = letter.counts.map { Self.count($0.kind, $0.count) }
            lines.append(.text(parts.formatted(.list(type: .and).locale(InterfaceLanguage.locale)).capitalizedFirst + "."))
        }
        lines.append(.text(String(interface: "\(Format.duration(TimeInterval(letter.minutes * 60))) together, phones away.")))
        if let first = letter.first {
            let day = first.date.formatted(Date.FormatStyle().weekday(.wide).locale(InterfaceLanguage.locale))
            lines.append(.text(String(interface: "On \(day) you noticed something new: “\(first.text)”. Now it is written down.")))
        }
        if let keepsake = letter.keepsakeID.flatMap(Keepsake.find) {
            lines.append(.text(String(interface: "\(String(interface: keepsake.arrival)). I bloomed a little more.")))
        }
        lines.append(.text(String(interface: "Same time next Sunday?")))
        if let parentLine { lines.append(.parent(parentLine)) }
        lines.append(.signOff(String(interface: "Love,")))
        lines.append(.signature(world.name))
        return lines
    }

    private var goalLine: String {
        if letter.evenings > letter.goal { return String(interface: "You hoped for \(letter.goal).") }
        if letter.evenings == letter.goal { return String(interface: "Just as you hoped.") }
        return String(interface: "You hoped for \(letter.goal), and every one counted.")
    }

    private static func count(_ kind: MomentKind, _ count: Int) -> String {
        switch kind {
        case .game: String(interface: "\(count) games")
        case .reading: String(interface: "\(count) books")
        case .bath: String(interface: "\(count) baths")
        case .cooking: String(interface: "\(count) dinners made together")
        case .lead: String(interface: "\(count) evenings they led the way")
        }
    }

    @ViewBuilder
    private func lineView(_ line: Line) -> some View {
        switch line {
        case let .date(text):
            Text(verbatim: text)
                .foregroundStyle(Color(hex: 0x5A6890))
                .frame(maxWidth: .infinity, alignment: .trailing)
        case let .greeting(text):
            Text(verbatim: text).font(Typeface.hand(30, bold: true))
        case let .text(text):
            Text(verbatim: text).fixedSize(horizontal: false, vertical: true)
        case let .photo(keepsake):
            Polaroid(keepsake: keepsake)
                .frame(maxWidth: .infinity, alignment: .trailing)
                .padding(.vertical, 4)
        case let .parent(text):
            Text(verbatim: text)
                .foregroundStyle(Color(hex: 0xA2453A))
                .fixedSize(horizontal: false, vertical: true)
        case let .signOff(text):
            Text(verbatim: text).padding(.leading, 120)
        case let .signature(name):
            HStack(spacing: 6) {
                Text(verbatim: name).font(Typeface.hand(32, bold: true))
                Image(world.imageName).resizable().scaledToFit().frame(width: 28, height: 28).rotationEffect(.degrees(-10))
            }
            .padding(.leading, 120)
        }
    }

    /// Cream paper, blue rules and a red margin.
    private var paper: some View {
        Canvas { context, size in
            context.fill(Path(CGRect(origin: .zero, size: size)), with: .color(Color(hex: 0xFFFDF6)))
            var y: CGFloat = 31 + 39 - 32
            while y < size.height {
                context.fill(Path(CGRect(x: 0, y: y, width: size.width, height: 1)), with: .color(Color(hex: 0x6892C9).opacity(0.34)))
                y += Self.lineHeight
            }
            context.fill(Path(CGRect(x: 50, y: 0, width: 1.5, height: size.height)), with: .color(Color(hex: 0xE27878).opacity(0.6)))
            for hole in [88.0, 344.0, 600.0] where hole + 16 < size.height {
                context.fill(Path(ellipseIn: CGRect(x: 16, y: hole, width: 16, height: 16)), with: .color(Color(hex: 0xE3D6C3)))
            }
        }
    }
}

/// The week's keepsake, taped on at a tilt like a photo.
private struct Polaroid: View {
    let keepsake: Keepsake

    var body: some View {
        VStack(spacing: 0) {
            ZStack {
                RadialGradient(colors: [Color(hex: 0xEAF3FC), Color(hex: 0xC9DEF4)], center: .center, startRadius: 0, endRadius: 60)
                KeepsakeArt(keepsake: keepsake, side: 76)
            }
            .frame(width: 96, height: 92)
            Text(keepsake.name)
                .font(Typeface.hand(18))
                .lineLimit(1)
                .minimumScaleFactor(0.7)
                .frame(width: 96, height: 24)
        }
        .padding([.horizontal, .top], 8)
        .background(.white)
        .shadow(color: Color(hex: 0x3C321E).opacity(0.18), radius: 7, y: 6)
        .rotationEffect(.degrees(4))
        .overlay(alignment: .top) {
            Rectangle()
                .fill(Color(hex: 0xF7D68C).opacity(0.72))
                .frame(width: 56, height: 20)
                .rotationEffect(.degrees(-6))
                .offset(y: -10)
        }
        .accessibilityHidden(true)
    }
}

private extension String {
    var capitalizedFirst: String { prefix(1).uppercased() + dropFirst() }
}
