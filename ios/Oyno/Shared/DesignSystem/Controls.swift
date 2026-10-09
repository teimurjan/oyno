import SwiftUI

/// The screen's committing action, full width at the bottom of it. One per screen, and —
/// with `HeaderButton`, the same action where a screen keeps it in its header instead — the
/// only place the accent is allowed to be a fill.
struct PrimaryButton: View {
    private let label: Text
    private let enabled: Bool
    /// Red instead of the accent, for the one commit that loses the shop a record.
    private let destructive: Bool
    private let action: () -> Void

    init(title: LocalizedStringResource, enabled: Bool = true, destructive: Bool = false, action: @escaping () -> Void) {
        self.init(label: Text(title), enabled: enabled, destructive: destructive, action: action)
    }

    /// For words that arrive already in the reader's language — the funnel's, from its deck.
    init(verbatim title: String, enabled: Bool = true, action: @escaping () -> Void) {
        self.init(label: Text(verbatim: title), enabled: enabled, destructive: false, action: action)
    }

    private init(label: Text, enabled: Bool, destructive: Bool, action: @escaping () -> Void) {
        self.label = label
        self.enabled = enabled
        self.destructive = destructive
        self.action = action
    }

    var body: some View {
        Button(action: {
            Haptics.tap()
            action()
        }) {
            label
                .font(Typeface.ui(16, .medium, relativeTo: .headline))
                .foregroundStyle(Palette.onAccent)
                .frame(maxWidth: .infinity)
                .frame(height: Metric.primaryButton)
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
            .background(
                configuration.isPressed ? pressed : fill,
                in: .rect(cornerRadius: Metric.Radius.card)
            )
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

/// A −/value/+ row whose value can also be typed.
///
/// Two taps beat a keyboard for the common nudge, which is why the buttons lead. But a
/// slicer reports 187 g and 6 h 43 m, and reaching those by tapping a 10-gram step
/// nineteen times is not a shortcut — so the number itself is a field. Tap it and the
/// keypad comes up on the figure that is already there.
///
/// The number is as wide as the number, with a gutter either side, and the −/+ group takes
/// its own width rather than whatever is left over beside the title. The slot used to be
/// pinned at three digits so the buttons never moved; it is not any more, because a fixed
/// slot is dead space on a stepper counting 1, 2, 3 and a cramped one on a stepper counting
/// print minutes — and the padding is what keeps the digits off the buttons either way.
///
/// The −/+ squares are 38pt rather than the 44 every other control in the app gets. They
/// are the one place a smaller target is the right call: they sit either side of the number
/// they change, so the three of them read as one control, and a 44pt pair around a
/// four-digit figure asked for more width than a card on a 4.7" phone has.
///
/// **The words yield, never the control.** The −/value/+ group is about 150 points wide
/// and a card on a 4.7"/5.8" phone has barely 300 to give, so a full-size label beside a
/// long subtitle asked for more room than the row had — and an `HStack` short of room
/// takes it out of whatever will give, which was the trailing 44pt button. Its border came
/// back as a broken line beside the number, which is what the shop floor reported. So the
/// label shrinks and the control is fixed: a title rendered a fifth smaller is still
/// readable, and a stepper you cannot aim at is not a stepper.
struct StepperRow: View {
    let title: LocalizedStringResource
    var subtitle: LocalizedStringResource?
    @Binding var value: Decimal
    var suffix: FieldSuffix?
    var step: Decimal = 10
    var minimum: Decimal = 0
    /// Digits the typed figure is kept to. Grams are whole; hours are not.
    var decimals: Int = 0

    @FocusState private var focused: Bool
    @State private var draft = ""

    /// One font for the field and for the hidden digits that size it. Two declarations
    /// would let the slot and the number it holds drift apart.
    private static let numberFont = Typeface.mono(19, .medium, relativeTo: .title3)
    private static let stepSide: CGFloat = 38

    var body: some View {
        HStack(spacing: Metric.Space.m) {
            VStack(alignment: .leading, spacing: 2) {
                Text(title).oynoRowTitle()
                if let subtitle { Text(subtitle).oynoCaption() }
            }
            .lineLimit(1)
            .minimumScaleFactor(0.7)
            .allowsTightening(true)
            Spacer(minLength: Metric.Space.s)
            HStack(spacing: 2) {
                IconButton(symbol: "minus", side: Self.stepSide) { value = max(minimum, value - step) }
                HStack(spacing: 3) {
                    // The hidden copy of the figure is what sizes the slot, so it scales
                    // with the face and with Dynamic Type instead of a measured constant.
                    // The field is overlaid on it and inherits that width — a greedy
                    // TextField is what made the group stretch to the leftovers beside the
                    // title. An empty draft still measures one digit, or the caret would
                    // have nowhere to stand.
                    Text(verbatim: draft.isEmpty ? "0" : draft)
                        .font(Self.numberFont)
                        .monospacedDigit()
                        .fixedSize()
                        .hidden()
                        .overlay {
                            TextField(text: $draft) { EmptyView() }
                                .keyboardType(.decimalPad)
                                .multilineTextAlignment(.trailing)
                                .font(Self.numberFont)
                                .monospacedDigit()
                                .foregroundStyle(Palette.ink)
                                .focused($focused)
                        }
                    if let suffix {
                        suffix.text
                            .font(Typeface.mono(13, .regular, relativeTo: .footnote))
                            .foregroundStyle(Palette.faint)
                    }
                }
                .padding(.horizontal, 10)
                .frame(minHeight: Metric.tapTarget)
                .contentShape(.rect)
                .onTapGesture { focused = true }
                IconButton(symbol: "plus", side: Self.stepSide) { value += step }
            }
            .fixedSize()
        }
        .padding(.horizontal, Metric.cardPadding)
        .padding(.vertical, 14)
        // The field mirrors the value while it is not being edited, so the ± buttons and
        // anything else that moves the number are reflected. It stops mirroring the
        // moment the operator starts typing, or a half-entered "1" would be rewritten to
        // "1" and the cursor thrown to the end on every keystroke.
        .onAppear { draft = Self.text(value, decimals: decimals) }
        .onChange(of: value) { if !focused { draft = Self.text(value, decimals: decimals) } }
        .onChange(of: draft) { if focused { value = max(minimum, .fromEditable(draft)) } }
        .onChange(of: focused) { if !focused { draft = Self.text(value, decimals: decimals) } }
    }

    /// Plain digits with a decimal point, not the locale's separators. This is a field
    /// somebody types into, and `Decimal.fromEditable` — which reads it back — accepts a
    /// comma or a point either way.
    private static func text(_ value: Decimal, decimals: Int) -> String {
        let rounded = NSDecimalNumber(decimal: value).rounding(
            accordingToBehavior: NSDecimalNumberHandler(
                roundingMode: .plain, scale: Int16(decimals),
                raiseOnExactness: false, raiseOnOverflow: false,
                raiseOnUnderflow: false, raiseOnDivideByZero: false
            )
        )
        return decimals == 0 ? String(rounded.intValue) : rounded.stringValue
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

/// The window in bars: what the shop kept stacked on what it spent, one column per bucket.
///
/// Unlabelled on the vertical axis on purpose — this is a shape, and the numbers that need
/// reading exactly sit above and below it. What it does carry is the horizontal axis, so a
/// column the eye lands on can be placed in time without counting backwards from today.
///
/// Selection is the one thing that makes it more than an ornament: a column answers "what
/// about that day" where the headline above it only answers "what about the week". Tapping
/// the selected column again clears it.
struct PeriodBars: View {
    let bars: [PeriodSummary.Bar]
    var height: CGFloat = 62
    /// The kept half. Accent on both screens that draw one: the strip is the same shape
    /// made of the same numbers, and it has to be recognisable as such across a tab.
    var tint: Color = Palette.accent
    var showsLabels = true
    var selection: Binding<Int?>?

    var body: some View {
        VStack(spacing: 6) {
            HStack(alignment: .bottom, spacing: spacing) {
                ForEach(bars) { bar in
                    column(bar)
                }
            }
            .frame(height: height)
            // The columns stand on a rule when they are labelled, because a bucket with
            // nothing in it draws nothing at all — and a label under an empty stretch of
            // canvas reads as a chart that failed to load rather than as a quiet Tuesday.
            .overlay(alignment: .bottom) {
                if showsLabels {
                    Rectangle().fill(Palette.hairline).frame(height: 1)
                }
            }

            if showsLabels {
                HStack(spacing: spacing) {
                    ForEach(bars) { bar in
                        Text(verbatim: bar.showsLabel ? bar.label : " ")
                            .font(Typeface.mono(10, .regular, relativeTo: .caption2))
                            .monospacedDigit()
                            .foregroundStyle(isSelected(bar) ? Palette.ink : Palette.faint)
                            .lineLimit(1)
                            .minimumScaleFactor(0.6)
                            .frame(maxWidth: .infinity)
                    }
                }
            }
        }
    }

    /// Tighter as the strip gets longer: six points between seven days, one between thirty.
    private var spacing: CGFloat {
        bars.count <= 8 ? 6 : (bars.count <= 16 ? 4 : 2)
    }

    private func isSelected(_ bar: PeriodSummary.Bar) -> Bool {
        selection?.wrappedValue == bar.id
    }

    private func column(_ bar: PeriodSummary.Bar) -> some View {
        let dimmed = selection?.wrappedValue != nil && !isSelected(bar)

        return VStack(spacing: 2) {
            Spacer(minLength: 0)
            UnevenRoundedRectangle(topLeadingRadius: 2, topTrailingRadius: 2)
                .fill(tint)
                .frame(height: max(0, bar.net) * (height - 4))
            UnevenRoundedRectangle(bottomLeadingRadius: 2, bottomTrailingRadius: 2)
                .fill(Palette.hairline)
                .frame(height: max(0, bar.cost) * (height - 4))
        }
        .opacity(dimmed ? 0.35 : 1)
        .frame(maxWidth: .infinity)
        // The whole column height, not just the drawn part — a quiet day is a two-point
        // sliver, and a two-point tap target is no target at all.
        .contentShape(.rect)
        .onTapGesture {
            guard let selection else { return }
            Haptics.tap()
            selection.wrappedValue = selection.wrappedValue == bar.id ? nil : bar.id
        }
    }
}

/// One line of a cost breakdown: label on the left, an optional mono note, then the value
/// right-aligned in a fixed slot so a column of them lines up.
struct BreakdownRow: View {
    let label: String
    var note: String?
    let value: String
    var tint: Color = Palette.slate
    var valueTint: Color = Palette.ink

    var body: some View {
        HStack(alignment: .firstTextBaseline, spacing: Metric.Space.m) {
            Text(label)
                .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
                .foregroundStyle(tint)
                .lineLimit(2)
                .minimumScaleFactor(0.9)
                .allowsTightening(true)
                .fixedSize(horizontal: false, vertical: true)
            Spacer(minLength: Metric.Space.s)
            if let note {
                Text(note).oynoNote().lineLimit(1)
            }
            Text(value)
                .oynoValue(14, color: valueTint)
                .frame(minWidth: 62, alignment: .trailing)
        }
    }
}
