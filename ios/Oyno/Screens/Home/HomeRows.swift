import SwiftUI

/// Home's three doorways, one glass card: the week against its goal, what the kid practiced,
/// and the keepsakes found. Each opens its own screen, so Home stays a doorway, not a dashboard.
struct HomeRows: View {
    let openWeek: () -> Void
    let openGrowth: () -> Void
    let openKeepsakes: () -> Void

    @Environment(OynoStore.self) private var oyno
    @AppStorage("oyno.weekGoal") private var goal = Week.defaultGoal
    @AppStorage("oyno.kidName") private var kidName = ""

    var body: some View {
        VStack(spacing: 0) {
            row(action: openWeek) {
                Glyph(symbol: "envelope.fill", size: 18, weight: .semibold, color: Palette.pastelAmber.ink)
                    .tile(Palette.pastelAmber.fill)
            } title: {
                Text("This week")
            } line: {
                weekLine
            } trailing: {
                WeekDots(days: week.dots(weekRounds, today: .now), size: 9)
            }
            RowDivider()
            row(action: openGrowth) {
                Glyph(symbol: "leaf.fill", size: 19, weight: .semibold, color: Palette.pastelGreen.ink)
                    .tile(Palette.pastelGreen.fill)
            } title: {
                Text(kidName.isEmpty ? "Growth" : "\(kidName)'s growth")
            } line: {
                growthLine
            } trailing: {
                Glyph.disclosure
            }
            RowDivider()
            row(action: openKeepsakes) {
                Glyph(symbol: "gift.fill", size: 18, weight: .semibold, color: Palette.pastelLavender.ink)
                    .tile(Palette.pastelLavender.fill)
            } title: {
                Text("Keepsakes")
            } line: {
                keepsakeLine
            } trailing: {
                Glyph.disclosure
            }
        }
        .glassCard(radius: 22)
    }

    private var week: Week { .containing(.now) }
    private var weekRounds: [Round] { week.rounds(oyno.rounds) }

    private var weekLine: Text {
        let evenings = week.evenings(in: weekRounds)
        if week.letterIsReady(on: .now), !weekRounds.isEmpty { return Text("\(evenings) of \(goal) evenings · your letter is here") }
        if evenings >= goal { return Text("\(evenings) of \(goal) evenings · goal met, letter on Sunday") }
        return Text("\(evenings) of \(goal) evenings · letter on Sunday")
    }

    private var growthLine: Text {
        let month = Calendar.current.dateInterval(of: .month, for: .now)?.start
        guard let top = oyno.practice(since: month).first, top.minutes > 0, let skill = Activity.skill(top.skill) else {
            return Text("What you practice together, skill by skill")
        }
        return Text("\(skill.label), \(Format.duration(TimeInterval(top.minutes * 60))) this month")
    }

    private var keepsakeLine: Text {
        let found = oyno.keepsakesInOrder
        guard let newest = found.last else { return Text("0 of \(Keepsake.all.count) · the first comes with a moment") }
        return Text("\(found.count) of \(Keepsake.all.count) · newest: \(String(interface: newest.name))")
    }

    private func row(
        action: @escaping () -> Void,
        @ViewBuilder icon: () -> some View,
        @ViewBuilder title: () -> Text,
        @ViewBuilder line: () -> Text,
        @ViewBuilder trailing: () -> some View
    ) -> some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: Metric.Space.m) {
                icon()
                VStack(alignment: .leading, spacing: 1) {
                    title().oynoRowTitle()
                    line()
                        .font(Typeface.figures(13, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.muted)
                        .fixedSize(horizontal: false, vertical: true)
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                trailing()
            }
            .padding(.leading, Metric.Space.m)
            .padding(.trailing, 14)
            .padding(.vertical, 10)
            .frame(minHeight: 66)
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityElement(children: .combine)
    }
}

/// One dot a day, Monday first: green for a moment, grey for a rest, ringed for today.
struct WeekDots: View {
    let days: [Week.Day]
    var size: CGFloat = 9

    var body: some View {
        HStack(spacing: size * 0.45) {
            ForEach(Array(days.enumerated()), id: \.offset) { _, day in
                switch day {
                case .done: Circle().fill(Palette.good).frame(width: size, height: size)
                case .rest: Circle().fill(Palette.ink.opacity(0.12)).frame(width: size, height: size)
                case .today: Circle().strokeBorder(Palette.ink, lineWidth: max(1.5, size * 0.22)).frame(width: size, height: size)
                case .later: Circle().strokeBorder(Palette.ink.opacity(0.2), lineWidth: max(1, size * 0.16)).frame(width: size, height: size)
                }
            }
        }
        .accessibilityElement()
        .accessibilityLabel(Text("\(days.filter { $0 == .done }.count) evenings this week"))
    }
}

extension View {
    /// A 40pt pastel tile behind a row's glyph.
    func tile(_ fill: Color) -> some View {
        frame(width: 40, height: 40).background(fill, in: .rect(cornerRadius: 13))
    }
}
