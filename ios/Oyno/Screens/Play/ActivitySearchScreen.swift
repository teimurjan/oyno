import SwiftUI

/// D8 on the canvas: every game, the ones played before first. A row hands its game back to
/// Play, which shows it with the age and the battery set to match.
struct ActivitySearchScreen: View {
    let onPick: (Activity) -> Void

    @Environment(\.dismiss) private var dismiss
    @Environment(OynoStore.self) private var oyno
    @State private var query = ""
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
            Activity.find(replay.activityID).map {
                (game: $0, meta: String(interface: "Played \(replay.count)× · last \(Format.day(replay.last))"))
            }
        }
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                if trimmed.isEmpty, !replays.isEmpty { playAgain.padding(.top, Metric.Space.xl) }
                everything.padding(.top, Metric.Space.xl)
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.bottom, Metric.Space.xl)
        }
        .scrollIndicators(.hidden)
        .scrollDismissesKeyboard(.immediately)
        // An inset, not a stacked header, so rows scroll under the bar instead of clipping at its edge.
        .safeAreaInset(edge: .top, spacing: 0) {
            header
                .padding(.horizontal, Metric.gutter)
                .padding(.top, Metric.Space.s)
        }
        .background(Palette.sky.ignoresSafeArea())
        .toolbar(.hidden, for: .navigationBar)
    }

    private var header: some View {
        HStack(spacing: 10) {
            GlassIconButton(symbol: "chevron.left", label: "Back") { dismiss() }
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
            onPick(game)
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
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
        .accessibilityElement(children: .combine)
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
