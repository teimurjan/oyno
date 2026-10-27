import SwiftUI

/// D16 on the canvas: what the two of them practiced, skill by skill, the firsts the parent
/// noticed, and the all-time totals. Not a score: every kid grows at their own pace.
struct GrowthScreen: View {
    /// Deals a game that practices the least practiced skill, and opens Play on it.
    let findGame: (Activity) -> Void

    @Environment(OynoStore.self) private var oyno
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.dismiss) private var dismiss
    @Environment(\.adaptive) private var adaptive
    @AppStorage("oyno.kidName") private var kidName = ""
    @AppStorage("oyno.age") private var age = AgeBand.toddler
    @AppStorage("oyno.energy") private var energy = Energy.low
    @State private var period = Period.month

    enum Period: CaseIterable { case month, all }

    private var monthStart: Date? { Calendar.current.dateInterval(of: .month, for: .now)?.start }
    private var monthName: String {
        Date.now.formatted(Date.FormatStyle().month(.wide).locale(InterfaceLanguage.locale))
    }

    var body: some View {
        Group {
            if adaptive.columns == .two { split } else { column }
        }
        .background(Palette.sky.ignoresSafeArea())
        .systemBar(adaptive)
        .navigationTitle(Text(title))
        .navigationBarTitleDisplayMode(.inline)
        .swipesBack()
    }

    private var title: LocalizedStringResource { kidName.isEmpty ? "Growth" : "\(kidName)'s growth" }

    private var column: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Metric.Space.m) {
                if !adaptive.barsAreSystem { header }
                intro
                practice
                firsts
                totals.padding(.top, Metric.Space.xs)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.s)
            .padding(.bottom, Metric.Space.xl)
            .readableWidth()
        }
        .scrollIndicators(.hidden)
    }

    /// iPad and the Duo open: the title and practice on the leading side, the firsts and totals
    /// on the trailing one, both from the top.
    private var split: some View {
        FoldColumns {
            ScrollView {
                VStack(alignment: .leading, spacing: Metric.Space.m) {
                    ScreenHeader(title: title, subtitle: "") { EmptyView() }
                    intro
                    practice
                }
                .padding(.vertical, Metric.Space.xl)
            }
            .scrollIndicators(.hidden)
        } trailing: {
            ScrollView {
                VStack(alignment: .leading, spacing: Metric.Space.m) {
                    firsts
                    totals
                }
                .padding(.vertical, Metric.Space.xl)
            }
            .scrollIndicators(.hidden)
        }
    }

    private var header: some View {
        HStack(spacing: Metric.Space.s) {
            GlassIconButton(symbol: "chevron.left", label: "Back") { dismiss() }
            Text(title)
                .font(Typeface.ui(17, .extrabold, relativeTo: .headline))
                .foregroundStyle(Palette.ink)
                .frame(maxWidth: .infinity)
                .accessibilityAddTraits(.isHeader)
            // As wide as Back, so the title sits in the middle of the screen.
            Color.clear.frame(width: Metric.tapTarget, height: Metric.tapTarget)
        }
    }

    private var intro: some View {
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            Text("What you two practiced together. It is not a score: every kid grows at their own pace.")
                .font(Typeface.ui(15, .medium, relativeTo: .body))
                .foregroundStyle(Palette.muted)
                .lineSpacing(2)
                .fixedSize(horizontal: false, vertical: true)
            Segments(accessibilityLabel: "Period", options: Period.allCases, selection: $period) { option, active in
                Text(verbatim: option == .month ? monthName : String(interface: "All time"))
                    .font(Typeface.ui(14, active ? .bold : .semibold, relativeTo: .subheadline))
                    .foregroundStyle(active ? Palette.ink : Palette.muted)
            }
        }
    }

    // MARK: Practice

    private var skills: [Practice] { oyno.practice(since: period == .month ? monthStart : nil) }

    private var practice: some View {
        let skills = skills
        let most = max(1, skills.first?.minutes ?? 1)
        return Card(raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.m) {
                Text("Practice by skill").oynoEyebrow()
                ForEach(skills, id: \.skill) { practice in
                    if let skill = Activity.skill(practice.skill) {
                        VStack(alignment: .leading, spacing: 6) {
                            HStack(spacing: 10) {
                                Glyph(symbol: skill.symbol, size: 16, weight: .semibold)
                                Text(verbatim: skill.label)
                                    .font(Typeface.ui(15, .extrabold, relativeTo: .subheadline))
                                    .foregroundStyle(Palette.ink)
                                Spacer()
                                Text(verbatim: practice.minutes > 0 ? Format.duration(TimeInterval(practice.minutes * 60)) : "—")
                                    .font(Typeface.figures(15, .extrabold, relativeTo: .subheadline))
                                    .monospacedDigit()
                                    .foregroundStyle(Palette.ink)
                            }
                            FillBar(fraction: Double(practice.minutes) / Double(most), tint: Palette.good)
                            Text(verbatim: Self.mostlyFrom(practice))
                                .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                                .foregroundStyle(Palette.muted)
                        }
                        .accessibilityElement(children: .combine)
                    }
                }
                if let least = skills.last, let skill = Activity.skill(least.skill) {
                    Button {
                        Haptics.tap()
                        findGame(Activity.pick(practicing: least.skill, energy: energy, age: age))
                    } label: {
                        HStack(spacing: 6) {
                            Text("Find a game for \(skill.label)")
                                .font(Typeface.ui(14, .bold, relativeTo: .subheadline))
                            Glyph(symbol: "chevron.right", size: 11, weight: .bold, color: Palette.highlight)
                        }
                        .foregroundStyle(Palette.highlight)
                        .frame(minHeight: Metric.tapTarget)
                        .contentShape(.rect)
                    }
                    .buttonStyle(.plain)
                }
            }
        }
        .screenshotCallout("practice")
    }

    /// "Mostly from bath time and games", or where to start when nothing has fed it yet.
    private static func mostlyFrom(_ practice: Practice) -> String {
        let kinds = practice.mostlyFrom.map(\.label).formatted(.list(type: .and).locale(InterfaceLanguage.locale))
        return practice.minutes == 0 ? String(interface: "Not practiced yet") : String(interface: "Mostly from \(kinds)")
    }

    // MARK: Firsts

    private var shownFirsts: [First] {
        let all = oyno.firsts.sorted { $0.date > $1.date }
        guard period == .month, let monthStart else { return all }
        return all.filter { $0.date >= monthStart }
    }

    private var firsts: some View {
        Card(raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.m) {
                HStack(alignment: .firstTextBaseline) {
                    Text("Firsts you noticed").oynoEyebrow()
                    Spacer()
                    Text(period == .month ? "\(shownFirsts.count) in \(monthName)" : "\(shownFirsts.count) in all")
                        .font(Typeface.figures(13, .bold, relativeTo: .caption))
                        .monospacedDigit()
                        .foregroundStyle(Palette.ink)
                }
                if shownFirsts.isEmpty {
                    Text("After a moment, tap what was new. It lands here, in your words.")
                        .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                        .foregroundStyle(Palette.muted)
                        .fixedSize(horizontal: false, vertical: true)
                }
                ForEach(shownFirsts.prefix(20)) { first in
                    HStack(spacing: Metric.Space.m) {
                        VStack(spacing: 0) {
                            Text(verbatim: first.date.formatted(Date.FormatStyle().month(.abbreviated).locale(InterfaceLanguage.locale)))
                                .font(Typeface.ui(11, .bold, relativeTo: .caption2))
                                .foregroundStyle(Palette.muted)
                            Text(verbatim: first.date.formatted(Date.FormatStyle().day().locale(InterfaceLanguage.locale)))
                                .font(Typeface.figures(20, .extrabold, relativeTo: .title3))
                                .monospacedDigit()
                                .foregroundStyle(Palette.ink)
                        }
                        .frame(width: 44)
                        VStack(alignment: .leading, spacing: 2) {
                            Text(verbatim: first.text)
                                .font(Typeface.ui(15, .bold, relativeTo: .subheadline))
                                .foregroundStyle(Palette.ink)
                                .fixedSize(horizontal: false, vertical: true)
                            HStack(spacing: 5) {
                                Glyph(symbol: first.kind.symbol, size: 12, weight: .semibold, color: Palette.muted)
                                Text(verbatim: first.kind.label)
                                    .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                                    .foregroundStyle(Palette.muted)
                            }
                        }
                        Spacer(minLength: 0)
                    }
                    .accessibilityElement(children: .combine)
                }
            }
        }
    }

    // MARK: Totals

    /// All time, as Home showed them before: the minutes that grew the planet, the moments, and
    /// the minutes Kid hours kept the apps paused, today's included.
    private var totals: some View {
        TimelineView(.everyMinute) { context in
            HStack(spacing: Metric.Space.s) {
                total(Format.largestUnit(minutes: oyno.tally.minutes), label: "Development", tint: Palette.good)
                total("\(oyno.tally.rounds)", label: "Moments", tint: Palette.amber)
                total(
                    Format.largestUnit(minutes: oyno.tally.together + kidHours.pausedMinutesToday(now: context.date)),
                    label: "Together",
                    tint: Palette.lavender
                )
            }
        }
    }

    private func total(_ value: String, label: LocalizedStringResource, tint: Color) -> some View {
        VStack(spacing: Metric.Space.xs) {
            Text(verbatim: value)
                .font(Typeface.figures(17, .extrabold, relativeTo: .headline))
                .monospacedDigit()
                .foregroundStyle(Palette.ink)
                .frame(maxWidth: .infinity)
                .frame(height: Metric.tapTarget)
                .background(Palette.glass, in: .capsule)
                .overlay { Capsule().strokeBorder(tint, lineWidth: 1.5) }
            Text(label)
                .font(Typeface.ui(13, .medium, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .accessibilityElement(children: .combine)
    }
}
