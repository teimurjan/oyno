import SwiftUI

/// D8 on the canvas: every game, the ones played before first. A row hands its game back to
/// Play, which shows it with the age and the battery set to match. In a wide window a row
/// shows its game beside the list instead, and that game starts from there.
struct ActivitySearchScreen: View {
    let onPick: (Activity) -> Void
    let onStart: (Activity) -> Void

    @Environment(\.dismiss) private var dismiss
    @Environment(OynoStore.self) private var oyno
    @Environment(\.adaptive) private var adaptive
    @State private var query = ""
    @State private var selected: Activity.ID?
    /// Shuffled once a visit, so the list never reads the same and holds still while typing.
    @State private var games = Activity.all.shuffled()

    private var trimmed: String { query.trimmingCharacters(in: .whitespacesAndNewlines) }

    private var matches: [Activity] {
        guard !trimmed.isEmpty else { return games }
        return games.filter { game in
            ([game.title, game.blurb] + game.tags.map(\.label)).contains { $0.localizedStandardContains(trimmed) }
        }
    }

    private typealias Row = (game: Activity, meta: String)

    private var replays: [Row] {
        oyno.rounds.replays(limit: 3).compactMap { replay in
            Activity.find(replay.activityID).map { (game: $0, meta: Self.history(replay)) }
        }
    }

    private static func history(_ replay: Replay) -> String {
        String(interface: "Played \(replay.count)× · last \(Format.day(replay.last))")
    }

    var body: some View {
        Group {
            if adaptive.columns == .two {
                FoldColumns {
                    list.padding(.top, Metric.Space.xl)
                } trailing: {
                    preview.padding(.vertical, Metric.Space.xl)
                }
            } else {
                list
            }
        }
        .background(Palette.sky.ignoresSafeArea())
        // The system's own back button where the Duo's side bar holds the screen's buttons.
        // iPad keeps the canvas's, beside the field, under an empty bar that the tabs float over.
        .toolbar(adaptive.barsAreSystem ? .visible : .hidden, for: .navigationBar)
        .toolbarBackground(.hidden, for: .navigationBar)
        .navigationBarBackButtonHidden(adaptive.bars == .top)
    }

    private var list: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                if trimmed.isEmpty, !replays.isEmpty { playAgain.padding(.top, Metric.Space.xl) }
                everything.padding(.top, Metric.Space.xl)
            }
            .padding(.horizontal, inset)
            .padding(.bottom, Metric.Space.xl)
            .readableWidth()
        }
        .scrollIndicators(.hidden)
        .scrollDismissesKeyboard(.immediately)
        // An inset, not a stacked header, so rows scroll under the bar instead of clipping at its edge.
        .safeAreaInset(edge: .top, spacing: 0) {
            header
                .padding(.horizontal, inset)
                .padding(.top, Metric.Space.s)
                .readableWidth()
        }
    }

    /// The phone's gutter, or none in a column whose margins `FoldColumns` keeps.
    private var inset: CGFloat { adaptive.columns == .two ? 0 : Metric.gutter }

    private var header: some View {
        HStack(spacing: 10) {
            if adaptive.bars != .side {
                GlassIconButton(symbol: "chevron.left", label: "Back") { dismiss() }
            }
            HStack(spacing: Metric.Space.s) {
                Glyph(symbol: "magnifyingglass", size: 16, weight: .semibold, color: Palette.muted)
                TextField("Search activities", text: $query)
                    .font(Typeface.ui(16, .regular, relativeTo: .body))
                    .foregroundStyle(Palette.ink)
                    .submitLabel(.search)
                    .autocorrectionDisabled()
                if !query.isEmpty {
                    Button {
                        query = ""
                    } label: {
                        Glyph(symbol: "xmark", size: 11, weight: .bold, color: Palette.muted)
                            .frame(width: 30, height: 30)
                            .background(Palette.ink.opacity(0.08), in: .circle)
                            .frame(width: Metric.tapTarget, height: Metric.tapTarget)
                            .contentShape(.rect)
                    }
                    .buttonStyle(.plain)
                    .accessibilityLabel(Text("Clear search"))
                }
            }
            .padding(.leading, 14)
            .frame(maxWidth: .infinity, minHeight: Metric.tapTarget)
            .glassCard(radius: Metric.tapTarget / 2)
        }
    }

    private var playAgain: some View {
        VStack(alignment: .leading, spacing: 10) {
            heading("Play again", detail: String(interface: "From your history"))
            rows(replays)
        }
    }

    @ViewBuilder private var everything: some View {
        let found = matches
        VStack(alignment: .leading, spacing: 10) {
            if trimmed.isEmpty {
                heading("All activities", detail: String(interface: "\(games.count) ideas, no prep"))
            } else {
                heading("\(found.count) activities", detail: nil)
            }
            if found.isEmpty {
                nothingFound
            } else {
                rows(found.map { game in
                    (game: game, meta: String(interface: "\(game.minutes) min · \(game.energy.label) battery · Age \(game.age.label)"))
                })
            }
        }
    }

    private func heading(_ title: LocalizedStringResource, detail: String?) -> some View {
        HStack(alignment: .firstTextBaseline) {
            Text(title)
                .font(Typeface.ui(17, .extrabold, relativeTo: .headline))
                .tracking(-0.3)
                .foregroundStyle(Palette.ink)
                .accessibilityAddTraits(.isHeader)
            Spacer(minLength: Metric.Space.s)
            if let detail {
                Text(verbatim: detail).oynoEyebrow()
            }
        }
    }

    private func rows(_ list: [Row]) -> some View {
        LazyVStack(spacing: 0) {
            ForEach(Array(list.enumerated()), id: \.element.game.id) { index, item in
                if index > 0 { Divider().overlay(Palette.ink.opacity(0.07)) }
                row(item.game, meta: item.meta)
            }
        }
        .glassCard(radius: Metric.Radius.card)
    }

    private func row(_ game: Activity, meta: String) -> some View {
        Button {
            Haptics.tap()
            if adaptive.columns == .two { selected = game.id } else { onPick(game) }
        } label: {
            HStack(spacing: Metric.Space.m) {
                let tint = Palette.pastels[game.id.unicodeScalars.reduce(0) { $0 + Int($1.value) } % Palette.pastels.count]
                Text(verbatim: String(game.title.prefix(1)))
                    .font(Typeface.ui(15, .extrabold, relativeTo: .subheadline))
                    .foregroundStyle(tint.ink)
                    .frame(width: 40, height: 40)
                    .background(tint.fill, in: .rect(cornerRadius: 14))
                    .accessibilityHidden(true)
                VStack(alignment: .leading, spacing: 1) {
                    Text(verbatim: game.title)
                        .font(Typeface.ui(15, .bold, relativeTo: .subheadline))
                        .foregroundStyle(Palette.ink)
                    Text(verbatim: meta)
                        .font(Typeface.figures(12, .semibold, relativeTo: .caption))
                        .monospacedDigit()
                        .foregroundStyle(Palette.muted)
                }
                .multilineTextAlignment(.leading)
                Spacer(minLength: 0)
                Glyph.disclosure
            }
            .padding(.horizontal, 14)
            .padding(.vertical, Metric.Space.m)
            .frame(minHeight: Metric.tapTarget)
            .background(isShowing(game) ? Palette.surface.opacity(0.7) : .clear, ignoresSafeAreaEdges: [])
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(isShowing(game) ? .isSelected : [])
    }

    private func isShowing(_ game: Activity) -> Bool {
        adaptive.columns == .two && game.id == shown?.id
    }

    // MARK: Preview

    /// The game a row picked, else the first one listed.
    private var shown: Activity? {
        if let selected, let game = Activity.find(selected) { return game }
        return (trimmed.isEmpty ? replays.first?.game : nil) ?? matches.first
    }

    /// The picked game as Play draws it, its start in reach. On a card where the iPad has room.
    @ViewBuilder
    private var preview: some View {
        if let game = shown {
            let card = ScrollsIfNeeded { details(game) }
            if adaptive.roomy {
                card.padding(32).glassCard(radius: 32)
            } else {
                card
            }
        }
    }

    /// The age, then how long and how much battery: beside the age on the Duo, leading the tags
    /// on iPad, whose room beside the age goes to when the family last played it.
    private func details(_ game: Activity) -> some View {
        let fit = Text("\(game.minutes) min · \(game.energy.label) battery")
            .font(Typeface.figures(13, .semibold, relativeTo: .caption))
            .monospacedDigit()
            .foregroundStyle(Palette.muted)
        let played = oyno.rounds.replays(limit: .max).first { $0.activityID == game.id }
        return VStack(alignment: .leading, spacing: adaptive.roomy ? Metric.Space.l : Metric.Space.m) {
            HStack(spacing: Metric.Space.s) {
                Text("Age \(game.age.label)")
                    .font(Typeface.figures(13, .bold, relativeTo: .caption))
                    .monospacedDigit()
                    .foregroundStyle(Palette.ink)
                    .padding(.horizontal, 11)
                    .frame(minHeight: 28)
                    .background(Palette.surface, in: .capsule)
                if !adaptive.roomy {
                    fit
                } else if let played {
                    Text(verbatim: Self.history(played)).oynoEyebrow()
                }
            }
            Text(verbatim: game.title)
                .font(Typeface.ui(adaptive.roomy ? 48 : 34, .extrabold, relativeTo: .largeTitle))
                .tracking(adaptive.roomy ? -1.6 : -1)
                .foregroundStyle(Palette.ink)
                .fixedSize(horizontal: false, vertical: true)
                .accessibilityAddTraits(.isHeader)
            FlowLayout(spacing: 6) {
                if adaptive.roomy {
                    HStack(spacing: 5) {
                        Glyph(symbol: "clock", size: 13, weight: .semibold, color: Palette.muted)
                        fit
                    }
                    .frame(minHeight: 26)
                    .padding(.trailing, Metric.Space.xs)
                }
                ForEach(game.tags, id: \.id) { tag in
                    Text(verbatim: tag.label)
                        .font(Typeface.ui(adaptive.roomy ? 13 : 12, .semibold, relativeTo: .caption))
                        .foregroundStyle(Palette.slate)
                        .padding(.horizontal, adaptive.roomy ? 9 : 8)
                        .frame(minHeight: adaptive.roomy ? 26 : 24)
                        .background(Palette.ink.opacity(0.06), in: .rect(cornerRadius: 8))
                }
            }
            if adaptive.roomy {
                Text(verbatim: game.blurb)
                    .font(Typeface.ui(16, .regular, relativeTo: .body))
                    .foregroundStyle(Palette.muted)
                    .lineSpacing(4)
                    .frame(maxWidth: 560, alignment: .leading)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Card(padding: adaptive.roomy ? Metric.Space.xl : Metric.cardPadding, raised: true) { StepList(steps: game.steps) }
            Spacer(minLength: 0)
            PrimaryButton(title: "Start \(game.minutes)-minute round", symbol: "play.fill") { onStart(game) }
        }
        .animation(.easeInOut(duration: 0.2), value: game.id)
    }

    private var nothingFound: some View {
        VStack(spacing: 6) {
            Text("Nothing matches that yet")
                .font(Typeface.ui(16, .extrabold, relativeTo: .headline))
                .foregroundStyle(Palette.ink)
            Text("Try a word like quiet, moving or bedtime.")
                .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
            PrimaryButton(title: "Clear search") { query = "" }
                .padding(.top, Metric.Space.s)
        }
        .multilineTextAlignment(.center)
        .padding(.horizontal, 18)
        .padding(.vertical, 22)
        .frame(maxWidth: .infinity)
        .glassCard(radius: Metric.Radius.card)
    }
}
