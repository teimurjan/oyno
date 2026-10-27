import SwiftUI

/// D18 on the canvas: the week so far and the goal the family set for it. A rest day costs
/// nothing, and on Sunday the planet writes about it.
struct WeekSheet: View {
    let openLetter: () -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(\.dismiss) private var dismiss
    @AppStorage("oyno.weekGoal") private var goal = Week.defaultGoal

    private var week: Week { .containing(.now) }

    var body: some View {
        SheetScreen(title: "This week", subtitle: String(interface: "A goal you pick, and a letter on Sunday")) {
            VStack(alignment: .leading, spacing: Metric.Space.xl) {
                Card(raised: true) {
                    VStack(alignment: .leading, spacing: Metric.Space.m) {
                        HStack(alignment: .firstTextBaseline) {
                            Text("\(week.evenings(in: week.rounds(oyno.rounds))) of \(goal) evenings")
                                .font(Typeface.figures(22, .extrabold, relativeTo: .title3))
                                .monospacedDigit()
                                .foregroundStyle(Palette.ink)
                            Spacer()
                        }
                        HStack(spacing: 0) {
                            ForEach(Array(zip(week.days(), week.dots(week.rounds(oyno.rounds), today: .now))), id: \.0) { day, dot in
                                VStack(spacing: 6) {
                                    WeekDots(days: [dot], size: 14)
                                    Text(verbatim: day.formatted(Date.FormatStyle().weekday(.narrow).locale(InterfaceLanguage.locale)))
                                        .font(Typeface.ui(12, .semibold, relativeTo: .caption))
                                        .foregroundStyle(Palette.muted)
                                }
                                .frame(maxWidth: .infinity)
                            }
                        }
                        Text("A rest day costs nothing. Every evening you two play fills a dot.")
                            .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                            .foregroundStyle(Palette.muted)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }
                VStack(alignment: .leading, spacing: Metric.Space.s) {
                    Text("Your goal").oynoEyebrow()
                    Segments(accessibilityLabel: "Evenings a week", options: Week.goals, selection: $goal) { evenings, active in
                        Text("\(evenings) evenings")
                            .font(Typeface.figures(14, active ? .bold : .semibold, relativeTo: .subheadline))
                            .monospacedDigit()
                            .lineLimit(1)
                            .minimumScaleFactor(0.8)
                            .foregroundStyle(active ? Palette.ink : Palette.muted)
                    }
                    .onChange(of: goal) { _, evenings in Analytics.shared.track(.weekGoalSet(evenings: evenings)) }
                }
                letterNote
            }
        }
    }

    @ViewBuilder
    private var letterNote: some View {
        if week.letterIsReady(on: .now), oyno.letter(for: week, goal: goal) != nil {
            PrimaryButton(title: "Open Sunday's letter", symbol: "envelope.open") {
                dismiss()
                openLetter()
            }
        } else {
            HStack(spacing: Metric.Space.m) {
                Glyph(symbol: "envelope", size: 17, weight: .semibold, color: Palette.pastelAmber.ink)
                    .tile(Palette.pastelAmber.fill)
                Text("On Sunday your planet writes you a letter about the week.")
                    .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
    }
}

/// "Anything new tonight?", asked from Home once Kid hours are over.
struct NoticeSheet: View {
    let kind: MomentKind

    @Environment(OynoStore.self) private var oyno
    @Environment(\.dismiss) private var dismiss
    @State private var signs: Set<First.Sign> = []
    @State private var words = ""

    var body: some View {
        SheetScreen(title: "Anything new tonight?", subtitle: String(interface: "Small firsts are the real progress.")) {
            VStack(alignment: .leading, spacing: Metric.Space.xl) {
                NoticeForm(signs: $signs, words: $words)
                VStack(spacing: 2) {
                    PrimaryButton(title: "Save") {
                        if let first = NoticeForm.first(kind: kind, signs: signs, words: words) {
                            guard oyno.note(first) else { return }
                        } else {
                            oyno.answerNothingNew()
                        }
                        dismiss()
                    }
                    QuietButton(title: "Nothing new today") {
                        oyno.answerNothingNew()
                        dismiss()
                    }
                }
            }
        }
    }
}
