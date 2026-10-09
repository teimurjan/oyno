import SwiftUI

/// The pieces every funnel step is built from — `Headline.tsx`, `StatementStep.tsx` and
/// `QuestionCard.tsx`. Each returns its parts as siblings rather than in a stack of its own,
/// because the step's entrance brings them in one after another.

/// A step's headline, centred, with its `[bracketed]` span in the accent.
struct FunnelHeadline: View {
    let text: String

    var body: some View {
        Text(FunnelCopy.accented(text))
            .font(Typeface.ui(27, .semibold, relativeTo: .largeTitle))
            .tracking(-0.54)
            .foregroundStyle(Palette.ink)
            .multilineTextAlignment(.center)
            .frame(maxWidth: .infinity)
            .fixedSize(horizontal: false, vertical: true)
            .padding(.bottom, 32)
    }
}

struct FunnelBody: View {
    let text: String

    var body: some View {
        Text(verbatim: text)
            .font(Typeface.ui(16.5, .regular, relativeTo: .body))
            .lineSpacing(4)
            .foregroundStyle(Palette.muted)
            .frame(maxWidth: .infinity, alignment: .leading)
            .fixedSize(horizontal: false, vertical: true)
    }
}

/// A count under a headline rather than a claim: small, centred, tucked up under it.
struct FunnelNote: View {
    let text: String

    var body: some View {
        Text(verbatim: text)
            .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
            .foregroundStyle(Palette.muted)
            .multilineTextAlignment(.center)
            .frame(maxWidth: .infinity)
            .padding(.top, -24)
    }
}

/// A statement step's headline, note and body. `parts` is how many it drew, so whatever
/// follows it in the step joins the entrance where it left off.
struct FunnelStatement: View {
    let words: FunnelCopy.StatementWords

    var parts: Int { [words.headline, words.note, words.body].compactMap { $0 }.count }

    var body: some View {
        if let headline = words.headline { FunnelHeadline(text: headline).funnelEntrance(0) }
        if let note = words.note { FunnelNote(text: note).funnelEntrance(1) }
        if let text = words.body { FunnelBody(text: text).funnelEntrance(parts - 1) }
    }
}

/// One question: the headline, the line under it, and its options. A single answer is the
/// continue; a question that takes several keeps the footer's button.
struct FunnelQuestion: View {
    let question: FunnelContent.Step.Question
    let words: FunnelCopy.QuestionWords
    let answer: String?
    let separator: String
    let onPick: (String) -> Void

    var body: some View {
        FunnelHeadline(text: words.headline).funnelEntrance(0)
        if let description = words.description { FunnelBody(text: description).funnelEntrance(1) }
        let first = words.description == nil ? 1 : 2
        ForEach(Array(question.options.enumerated()), id: \.element.value) { index, option in
            FunnelChoice(
                emoji: option.emoji,
                title: words.options[option.value] ?? option.value,
                selected: chosen.contains(option.value),
                multi: multi
            ) { pick(option.value) }
            .funnelEntrance(first + index)
        }
    }

    private var multi: Bool { question.multi ?? false }

    private var chosen: Set<String> {
        guard let answer else { return [] }
        return multi ? Set(answer.components(separatedBy: separator)) : [answer]
    }

    /// Joined in option order, not tap order, so the stored answer is stable.
    private func pick(_ value: String) {
        guard multi else { return onPick(value) }
        var next = chosen
        if next.remove(value) == nil { next.insert(value) }
        onPick(question.options.map(\.value).filter(next.contains).joined(separator: separator))
    }
}

/// One option. An accent border when picked and nothing else moves, so the rows below stay
/// where the thumb expects them.
private struct FunnelChoice: View {
    let emoji: String?
    let title: String
    let selected: Bool
    let multi: Bool
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: Metric.Space.m) {
                if let emoji {
                    Text(verbatim: emoji)
                        .font(.system(size: 19))
                        .accessibilityHidden(true)
                }
                Text(verbatim: title)
                    .font(Typeface.ui(17, .medium, relativeTo: .body))
                    .foregroundStyle(Palette.ink)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .fixedSize(horizontal: false, vertical: true)
                FunnelTick(selected: selected, multi: multi)
            }
            .padding(.horizontal, Metric.cardPadding)
            .padding(.vertical, 14)
            .background(Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
            .overlay(
                RoundedRectangle(cornerRadius: Metric.Radius.card)
                    .strokeBorder(selected ? Palette.accent : Palette.hairline, lineWidth: selected ? 2 : 1)
            )
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }
}

/// A circle for one answer, a rounded square for several — the distinction a form makes.
private struct FunnelTick: View {
    let selected: Bool
    let multi: Bool

    var body: some View {
        let shape = RoundedRectangle(cornerRadius: multi ? 5 : 9)
        ZStack {
            shape.fill(selected ? Palette.accent : .clear)
            shape.strokeBorder(selected ? Palette.accent : Palette.chevron, lineWidth: 1.5)
            if selected {
                Image(systemName: "checkmark")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(Palette.onAccent)
            }
        }
        .frame(width: 18, height: 18)
        .frame(width: 20, height: 20)
        .accessibilityHidden(true)
    }
}

/// How the funnel prints a figure: money in the example's currency, weights and hours in the
/// deck's own units.
struct FunnelFigures {
    let units: FunnelCopy.Units
    let currency: String

    func money(_ value: Decimal) -> String { Format.money(value, currency: currency) }

    /// The formatter's minus sits inside the currency symbol in some locales, and these are
    /// read as losses, so the sign goes outside.
    func signed(_ value: Decimal) -> String { value < 0 ? "−" + money(-value) : money(value) }

    func grams(_ value: Decimal) -> String { units.grams(value) }

    func hours(_ value: Decimal) -> String { units.hours(value) }
}

extension FunnelCopy.Units {
    func grams(_ value: Decimal) -> String {
        FunnelCopy.fill(g, ["n": Format.number(value, digits: 0)])
    }

    func hours(_ value: Decimal) -> String {
        FunnelCopy.fill(h, ["n": Format.number(value, digits: 0)])
    }
}

/// Where a staggered widget's reveal starts: after the step's own entrance has settled.
enum FunnelReveal {
    static let delay: Duration = .milliseconds(950)
}

extension View {
    /// The step's entrance: each part scales up from its top edge a fraction of a second
    /// after the one above it — `.anim-step` in `app/globals.css`.
    func funnelEntrance(_ order: Int) -> some View {
        modifier(FunnelEntrance(order: order))
    }
}

private struct FunnelEntrance: ViewModifier {
    let order: Int
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var shown = false

    func body(content: Content) -> some View {
        let visible = shown || reduceMotion
        content
            .opacity(visible ? 1 : 0)
            .scaleEffect(visible ? 1 : 0.9, anchor: .top)
            .onAppear {
                guard !reduceMotion else { return }
                let delay = 0.15 + 0.18 * Double(min(order, 9))
                withAnimation(.easeOut(duration: 0.3).delay(delay)) { shown = true }
            }
    }
}
