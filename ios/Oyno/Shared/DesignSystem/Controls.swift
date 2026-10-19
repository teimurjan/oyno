import SwiftUI

/// The screen's committing action, full width at the bottom of it. One per screen, and —
/// with `HeaderButton`, the same action where a screen keeps it in its header instead — the
/// only place the accent is allowed to be a fill.
struct PrimaryButton: View {
    private let label: Text
    /// An SF Symbol before the words: the play on "Start 10 minutes".
    private let symbol: String?
    private let enabled: Bool
    /// Red instead of the accent, for the one commit that deletes something.
    private let destructive: Bool
    private let action: () -> Void
    @Environment(\.adaptive) private var adaptive

    init(
        title: LocalizedStringResource,
        symbol: String? = nil,
        enabled: Bool = true,
        destructive: Bool = false,
        action: @escaping () -> Void
    ) {
        self.init(label: Text(title), symbol: symbol, enabled: enabled, destructive: destructive, action: action)
    }

    /// For words that arrive already in the reader's language — the funnel's, from its deck.
    init(verbatim title: String, enabled: Bool = true, action: @escaping () -> Void) {
        self.init(label: Text(verbatim: title), symbol: nil, enabled: enabled, destructive: false, action: action)
    }

    private init(label: Text, symbol: String?, enabled: Bool, destructive: Bool, action: @escaping () -> Void) {
        self.label = label
        self.symbol = symbol
        self.enabled = enabled
        self.destructive = destructive
        self.action = action
    }

    var body: some View {
        Button(action: {
            Haptics.tap()
            action()
        }) {
            HStack(spacing: 10) {
                if let symbol {
                    Glyph(symbol: symbol, size: 15, weight: .bold, color: Palette.onAccent)
                }
                label
                    .font(Typeface.ui(adaptive.roomy ? 18 : 17, .bold, relativeTo: .headline))
                    .foregroundStyle(Palette.onAccent)
            }
            .frame(maxWidth: .infinity)
            .frame(height: adaptive.roomy ? Metric.primaryButtonRoomy : Metric.primaryButton)
        }
        .buttonStyle(destructive ? FilledAccentStyle(fill: Palette.alert, pressed: Palette.alert.opacity(0.85)) : FilledAccentStyle())
        .disabled(!enabled)
        .opacity(enabled ? 1 : 0.4)
    }
}

private struct FilledAccentStyle: ButtonStyle {
    var fill = Palette.accent
    var pressed = Palette.accentPressed

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .background(configuration.isPressed ? pressed : fill, in: .capsule)
            .shadow(color: fill.opacity(0.22), radius: 12, y: 10)
    }
}

/// The committing action where a screen keeps it in the header: Add on Filament, Orders
/// and Quotes.
///
/// A word rather than a `+`. The header is read from two feet away and a glyph there has
/// to be aimed at before it says anything, where a word is legible at a glance. And a verb
/// rather than an adjective: "New" agrees with a noun this button never names, so every
/// gendered language had to guess one, and "Новая" over a list of orders is the wrong
/// guess. An imperative agrees with nothing. It carries the accent for the reason
/// `PrimaryButton` does — it is the one thing the screen is for — and it sits at
/// `Metric.compactControl` so it lines up with the title beside it instead of towering
/// over it.
struct HeaderButton: View {
    let title: LocalizedStringResource
    let action: () -> Void

    var body: some View {
        Button(action: {
            Haptics.tap()
            action()
        }) {
            Text(title)
                .font(Typeface.ui(15, .medium, relativeTo: .subheadline))
                .foregroundStyle(Palette.onAccent)
                .padding(.horizontal, Metric.cardPadding)
                .frame(height: Metric.compactControl)
        }
        .buttonStyle(FilledAccentStyle())
    }
}

/// Muted text and a disclosure chevron, the same quiet link as Home's "Open the full quote
/// form": Places under the shelf's search. The accent stays the committing action's.
struct LinkButton: View {
    let title: LocalizedStringResource
    let action: () -> Void

    var body: some View {
        Button(action: {
            Haptics.tap()
            action()
        }) {
            HStack(spacing: 6) {
                Text(title)
                    .font(Typeface.ui(13, .medium, relativeTo: .footnote))
                    .foregroundStyle(Palette.muted)
                Glyph.disclosure
            }
            .padding(.horizontal, Metric.Space.xs)
            .frame(minWidth: Metric.tapTarget, minHeight: Metric.compactControl)
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }
}

/// The way out beside a `PrimaryButton`, the same size so the pair reads as one choice:
/// Cancel under a sheet's Confirm.
struct SecondaryButton: View {
    let title: LocalizedStringResource
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(Typeface.ui(16, .medium, relativeTo: .headline))
                .foregroundStyle(Palette.ink)
                .frame(maxWidth: .infinity)
                .frame(height: Metric.primaryButton)
                .background(Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
                .overlay(
                    RoundedRectangle(cornerRadius: Metric.Radius.card)
                        .strokeBorder(Palette.hairline, lineWidth: 1)
                )
                .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }
}

/// The quieter action beside or below the primary one — Cancel, Back, Restore.
struct QuietButton: View {
    let title: LocalizedStringResource
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
                .frame(maxWidth: .infinity)
                .frame(height: Metric.tapTarget)
        }
        .buttonStyle(.plain)
    }
}

/// A bordered square holding one SF Symbol — the scanner, the +, the − and + on a
/// stepper.
struct IconButton: View {
    let symbol: String
    var size: CGFloat = 19
    /// The square the glyph sits in. 44pt everywhere it stands on its own; the −/+ pair
    /// on a stepper is the one exception, and it is smaller because it is not on its own.
    var side: CGFloat = Metric.tapTarget
    var tint: Color = Palette.ink
    let action: () -> Void

    @State private var pressed = false

    var body: some View {
        Button(action: {
            Haptics.tap()
            action()
        }) {
            Glyph(symbol: symbol, size: size, color: tint)
                .glyphButtonFace(side: side, pressed: pressed)
        }
        .buttonStyle(.plain)
        .onLongPressGesture(minimumDuration: 0, pressing: { pressed = $0 }, perform: {})
    }
}

/// A round glass face holding one SF Symbol, as the canvas draws a header's buttons: the
/// back and the bell on the timer, the profile on Home. `IconButton` is Printyard's square.
struct GlassIconButton: View {
    let symbol: String
    let label: LocalizedStringResource
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            Glyph(symbol: symbol, size: 17, weight: .semibold)
                .frame(width: Metric.tapTarget, height: Metric.tapTarget)
                .glassCard(radius: Metric.tapTarget / 2)
        }
        .buttonStyle(.plain)
        .accessibilityLabel(Text(label))
    }
}

/// `GlassIconButton` where the system's bar holds it: the symbol is drawn, and the title is
/// read aloud and shown when the bar folds it into its overflow menu.
struct BarButton: View {
    let title: LocalizedStringResource
    let symbol: String
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            Label { Text(title) } icon: { Image(systemName: symbol) }
        }
        .tint(Palette.ink)
    }
}

/// A glass pill rather than the ink one: Kid hours' "New" and a schedule's "Edit".
struct GlassPill: View {
    let title: LocalizedStringResource
    var symbol: String?
    let action: () -> Void

    @Environment(\.adaptive) private var adaptive

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: 6) {
                if let symbol { Glyph(symbol: symbol, size: 13, weight: .bold) }
                Text(title)
                    .font(Typeface.ui(adaptive.roomy ? 15 : 14, .bold, relativeTo: .subheadline))
                    .foregroundStyle(Palette.ink)
            }
            .padding(.horizontal, adaptive.roomy ? 16 : 14)
            .frame(height: height)
            .glassCard(radius: height / 2)
        }
        .buttonStyle(.plain)
    }

    private var height: CGFloat { adaptive.roomy ? Metric.tapTarget : Metric.compactControl }
}

/// The circle that fills while a finger holds a "Not now". Driven by `holdToConfirm`.
struct HoldRing: View {
    let progress: CGFloat

    var body: some View {
        ZStack {
            Circle().stroke(Palette.ink.opacity(0.14), lineWidth: 2.2)
            Circle()
                .trim(from: 0, to: progress)
                .stroke(Palette.ink, style: StrokeStyle(lineWidth: 2.2, lineCap: .round))
                .rotationEffect(.degrees(-90))
        }
        .frame(width: 20, height: 20)
    }
}

extension View {
    /// Fires `action` once the finger has stayed down for two seconds — a tap is too easy to
    /// make without meaning it — filling `progress` on the way and emptying it on a lift.
    /// The whole `shape` fills too, so the finger never hides how far along it is.
    func holdToConfirm(progress: Binding<CGFloat>, in shape: some Shape, action: @escaping () -> Void) -> some View {
        let seconds = 2.0
        return background {
            GeometryReader { space in
                Palette.ink.opacity(0.08).frame(width: space.size.width * progress.wrappedValue)
            }
            .clipShape(shape)
        }
        .onLongPressGesture(minimumDuration: seconds) {
            Haptics.success()
            progress.wrappedValue = 0
            action()
        } onPressingChanged: { pressing in
            withAnimation(pressing ? .linear(duration: seconds) : .easeOut(duration: 0.2)) {
                progress.wrappedValue = pressing ? 1 : 0
            }
        }
    }
}

/// A one-of-N choice rendered as a segmented row — the material picker on Quick Quote.
///
/// The selected segment is a light fill with an inset border, not the accent. The accent
/// on this screen belongs to "Save quote"; if the material picker also used it, the screen
/// would have two primary things and the eye would have to choose.
struct SegmentedRow<Value: Hashable>: View {
    /// What a segment shows: a word where the choice has a name worth reading, a symbol
    /// where the name would be longer than the control it has to fit inside.
    enum Face {
        case text(String)
        case symbol(String)
    }

    private let options: [(value: Value, face: Face)]
    /// The control's overall height: a 44pt segment inside 6pt of padding. Passed smaller
    /// only where the row it sits in is chrome rather than the choice the screen is about,
    /// and then it has to match whatever it shares the line with — two bordered faces whose
    /// edges do not line up is the kind of thing this design system exists to stop.
    private let height: CGFloat
    @Binding var selection: Value

    init(
        options: [(value: Value, label: String)],
        selection: Binding<Value>,
        height: CGFloat = Metric.tapTarget + inset * 2
    ) {
        self.options = options.map { ($0.value, .text($0.label)) }
        self.height = height
        _selection = selection
    }

    init(
        symbols: [(value: Value, symbol: String)],
        selection: Binding<Value>,
        height: CGFloat = Metric.tapTarget + inset * 2
    ) {
        self.options = symbols.map { ($0.value, .symbol($0.symbol)) }
        self.height = height
        _selection = selection
    }

    /// The padding between the control's border and the selected segment's own. Computed
    /// rather than stored because Swift has no static storage in a generic type.
    private static var inset: CGFloat { 6 }

    var body: some View {
        HStack(spacing: 4) {
            ForEach(options, id: \.value) { option in
                let active = option.value == selection
                Button {
                    Haptics.tap()
                    selection = option.value
                } label: {
                    face(option.face, active: active)
                        .frame(maxWidth: .infinity)
                        .frame(height: height - Self.inset * 2)
                        .background(
                            active ? Color(hex: 0xF5F5F5) : .clear,
                            in: .rect(cornerRadius: Metric.Radius.control)
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: Metric.Radius.control)
                                .strokeBorder(active ? Palette.hairline : .clear, lineWidth: 1)
                        )
                }
                .buttonStyle(.plain)
            }
        }
        .padding(Self.inset)
        .background(Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
        .overlay(
            RoundedRectangle(cornerRadius: Metric.Radius.card)
                .strokeBorder(Palette.hairline, lineWidth: 1)
        )
    }

    @ViewBuilder
    private func face(_ face: Face, active: Bool) -> some View {
        let tint = active ? Palette.ink : Palette.muted
        switch face {
        case .text(let label):
            Text(label)
                .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                .foregroundStyle(tint)
        case .symbol(let symbol):
            Glyph(symbol: symbol, size: 17, color: tint)
        }
    }
}

/// A small binary choice inside a row — the Good / Failed outcome on the log flow.
/// Selecting inverts to ink-on-white rather than tinting, keeping the accent free.
struct Chip: View {
    private let label: Text
    let active: Bool
    let action: () -> Void

    init(title: LocalizedStringResource, active: Bool, action: @escaping () -> Void) {
        label = Text(title)
        self.active = active
        self.action = action
    }

    /// For a value the shop typed rather than one the app ships — a brand, a finish, a
    /// storage location. Deliberately `verbatim`: running user data through the string
    /// catalog would look up a key that can never exist and put the shop's own words in
    /// the translator's queue.
    init(text: String, active: Bool, action: @escaping () -> Void) {
        label = Text(verbatim: text)
        self.active = active
        self.action = action
    }

    var body: some View {
        Button(action: {
            Haptics.tap()
            action()
        }) {
            label
                .font(Typeface.ui(13, .medium, relativeTo: .footnote))
                .foregroundStyle(active ? Palette.onAccent : Palette.muted)
                // A chip in a five-across grid has about 60pt of room, and Russian words
                // are longer than the English they replace — "Отменён" over two lines is
                // where the letter stranded on its own came from. One line that tightens
                // and then shrinks keeps a row of chips a row.
                .lineLimit(1)
                .minimumScaleFactor(0.7)
                .allowsTightening(true)
                .padding(.horizontal, 10)
                .frame(maxWidth: .infinity)
                .frame(height: 38)
                .background(
                    active ? Palette.ink : Palette.surface,
                    in: .rect(cornerRadius: Metric.Radius.control)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: Metric.Radius.control)
                        .strokeBorder(active ? Palette.ink : Palette.hairline, lineWidth: 1)
                )
        }
        .buttonStyle(.plain)
    }
}


/// A thin fill bar — a spool's remaining plastic, a cost's share of the month. On these
/// screens the number is the datum and the bar is only a hint of proportion.
///
/// shadcn's `Progress`, as the web app draws it: 4pt, a muted track, filled in the muted
/// grey rather than the brand blue so the one accent on a screen stays on its button, and
/// not in ink, which shouts beside the number it is only there to hint at; red only where
/// the number is losing money. The web `FillBar` is the same bar.
struct FillBar: View {
    let fraction: Double
    var tint: Color = Palette.muted

    var body: some View {
        GeometryReader { geometry in
            ZStack(alignment: .leading) {
                Capsule().fill(Palette.divider)
                Capsule()
                    .fill(tint)
                    .frame(width: max(0, min(1, fraction)) * geometry.size.width)
            }
        }
        .frame(height: Metric.barHeight)
        .animation(.easeInOut(duration: 0.15), value: fraction)
    }
}

/// A share as a 24×5pt gauge beside its percentage — what is left on a roll, an order's
/// margin: green from 40%, yellow from 15%, red under that.
struct LevelBar: View {
    let fraction: Double

    private var level: Double { max(0, min(1, fraction)) }
    private var tint: Color { level >= 0.4 ? Palette.good : level >= 0.15 ? Palette.caution : Palette.alert }

    var body: some View {
        ZStack(alignment: .leading) {
            Capsule().fill(Palette.track)
            Capsule().fill(tint).frame(width: level * 24)
        }
        .frame(width: 24, height: 5)
        .accessibilityHidden(true)
    }
}

/// The round switch the canvas draws: an ink pill with a white knob, grey when off. Used as
/// `Toggle(...).toggleStyle(.pill)`, so the label, the trait and the value stay the system's.
struct PillToggleStyle: ToggleStyle {
    var track = CGSize(width: 52, height: 32)
    var onFill = Palette.ink

    func makeBody(configuration: Configuration) -> some View {
        Button {
            Haptics.tap()
            configuration.isOn.toggle()
        } label: {
            HStack(spacing: Metric.Space.m) {
                configuration.label
                Spacer(minLength: Metric.Space.s)
                Capsule()
                    .fill(configuration.isOn ? onFill : Palette.hairline)
                    .frame(width: track.width, height: track.height)
                    .overlay(alignment: configuration.isOn ? .trailing : .leading) {
                        Circle()
                            .fill(Palette.surface)
                            .shadow(color: Palette.ink.opacity(0.12), radius: 2, y: 1)
                            .frame(width: track.height - 6, height: track.height - 6)
                            .padding(3)
                    }
                    .animation(.easeInOut(duration: 0.2), value: configuration.isOn)
            }
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityRepresentation {
            Toggle(isOn: configuration.$isOn) { configuration.label }
        }
    }
}

extension ToggleStyle where Self == PillToggleStyle {
    static var pill: PillToggleStyle { PillToggleStyle() }
}
