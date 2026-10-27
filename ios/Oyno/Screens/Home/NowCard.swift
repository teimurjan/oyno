import SwiftUI

/// Home's card for now, words only: what the evening holds at this minute. The ink pill is its
/// one accent, and only when there is something to start or to answer.
struct NowCard: View {
    let evening: Evening
    /// What Start runs: the dealt game, or the everyday moment picked on Play.
    let session: Session
    /// Today's rounds, for the evening's sum.
    let tonight: [Round]
    /// Whether the parent already said what was new today.
    let asked: Bool
    let start: (Session) -> Void
    let play: () -> Void
    let swap: () -> Void
    let notice: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            if let status {
                HStack(spacing: 7) {
                    Circle().fill(status.dot).frame(width: 7, height: 7)
                    Text(verbatim: status.text)
                        .font(Typeface.ui(13, .bold, relativeTo: .caption))
                        .foregroundStyle(Palette.muted)
                }
                .accessibilityElement(children: .combine)
                .padding(.bottom, 10)
            }
            VStack(alignment: .leading, spacing: 3) {
                Text(verbatim: title)
                    .font(Typeface.ui(21, .extrabold, relativeTo: .title3))
                    .tracking(-0.5)
                    .foregroundStyle(Palette.ink)
                    .fixedSize(horizontal: false, vertical: true)
                Text(verbatim: line)
                    .font(Typeface.ui(14, .medium, relativeTo: .subheadline))
                    .foregroundStyle(Palette.muted)
                    .lineSpacing(2)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            actions.padding(.top, 14)
        }
        .padding(Metric.cardPadding)
        .glassCard(raised: true, radius: 26)
        .accessibilityElement(children: .contain)
    }

    private struct Status {
        let text: String
        let dot: Color
    }

    private var status: Status? {
        switch evening {
        case .free: nil
        case let .before(start): Status(text: String(interface: "Kid hours start at \(Format.timeOfDay(date: start))"), dot: Palette.caution)
        case let .during(end): Status(text: String(interface: "Kid hours on · until \(Format.timeOfDay(date: end))"), dot: Palette.good)
        case .after: Status(text: String(interface: "Kid hours done for today"), dot: Palette.faint)
        }
    }

    private var title: String {
        switch evening {
        case .before: String(interface: "Ready when you are")
        case .after:
            String(interface: "\(tonight.count) moments, \(tonight.totalMinutes) minutes")
        case .free, .during: session.kind == .game ? session.title : (sessionMoment?.title ?? session.title)
        }
    }

    private var line: String {
        switch evening {
        case let .before(start):
            return String(interface: "At \(Format.timeOfDay(date: start)) there will be one easy thing waiting. Fifteen minutes is enough.")
        case .after:
            let names = tonight.map(Self.name).uniqued().formatted(.list(type: .and).locale(InterfaceLanguage.locale))
            guard let keepsake = tonight.compactMap(\.keepsakeID).last.flatMap(Keepsake.find) else { return names }
            return "\(names). \(String(interface: keepsake.arrival))."
        case .free, .during:
            return String(interface: "\(session.kind.label) · \(session.minutes) min")
        }
    }

    private static func name(_ round: Round) -> String {
        round.activityID.flatMap(Activity.find)?.title ?? round.kind.label
    }

    private var sessionMoment: OpenMoment? {
        if case let .moment(moment, _) = session { return moment }
        return nil
    }

    @ViewBuilder
    private var actions: some View {
        switch evening {
        case .before:
            GlassAction(title: "Play now", symbol: "play.fill", action: play)
        case .after:
            if asked {
                GlassAction(title: "One more", symbol: "play.fill", action: play)
            } else {
                PrimaryButton(title: "Anything new tonight?", action: notice)
            }
        case .free, .during:
            HStack(spacing: Metric.Space.s) {
                PrimaryButton(title: "Start", symbol: "play.fill") { start(session) }
                Button {
                    Haptics.tap()
                    swap()
                } label: {
                    Glyph(symbol: "shuffle", size: 18, weight: .semibold)
                        .frame(width: Metric.primaryButton, height: Metric.primaryButton)
                        .background(Palette.surface.opacity(0.8), in: .circle)
                        .overlay { Circle().strokeBorder(Palette.ink.opacity(0.08), lineWidth: 1) }
                }
                .buttonStyle(.plain)
                .accessibilityLabel(Text("Something else"))
            }
        }
    }
}

/// A full-width glass pill: the card's action when it is not the evening's commitment.
private struct GlassAction: View {
    let title: LocalizedStringResource
    let symbol: String
    let action: () -> Void

    var body: some View {
        Button {
            Haptics.tap()
            action()
        } label: {
            HStack(spacing: 9) {
                Glyph(symbol: symbol, size: 14, weight: .bold)
                Text(title)
                    .font(Typeface.ui(17, .bold, relativeTo: .headline))
                    .foregroundStyle(Palette.ink)
            }
            .frame(maxWidth: .infinity)
            .frame(height: Metric.primaryButton)
            .background(Palette.surface.opacity(0.8), in: .capsule)
            .overlay { Capsule().strokeBorder(Palette.ink.opacity(0.08), lineWidth: 1) }
        }
        .buttonStyle(.plain)
    }
}

private extension Array where Element: Hashable {
    func uniqued() -> [Element] {
        var seen = Set<Element>()
        return filter { seen.insert($0).inserted }
    }
}
