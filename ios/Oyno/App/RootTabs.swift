import SwiftUI

enum RootTab: Hashable, CaseIterable {
    case home, play, kidHours

    var title: LocalizedStringResource {
        switch self {
        // Its own key: "Home" is also the last world, and Russian names the two differently.
        case .home: LocalizedStringResource("Home tab", defaultValue: "Home")
        case .play: "Play"
        case .kidHours: "Kid hours"
        }
    }

    var symbol: String {
        switch self {
        case .home: "globe.europe.africa.fill"
        case .play: "play.fill"
        case .kidHours: "clock.fill"
        }
    }
}

/// The three tabs, as the app and the screenshot harness both draw them. Where the system's bar
/// holds the screen's buttons they float as the canvas draws them, an icon and its name to each:
/// across the top bar on iPad, whose own floating tabs drop the icons, and down the foot of the
/// Duo's side bar, whose own tabs drop the names.
struct RootTabs<Home: View, Play: View, KidHours: View>: View {
    @Binding var selection: RootTab
    @ViewBuilder var home: Home
    @ViewBuilder var play: Play
    @ViewBuilder var kidHours: KidHours

    @Environment(\.adaptive) private var adaptive

    var body: some View {
        TabView(selection: $selection) {
            tab(.home) { home }
            tab(.play) { play }
            tab(.kidHours) { kidHours }
        }
        .tint(Palette.accent)
        .overlay(alignment: .top) {
            if adaptive.bars == .top { FloatingTabs(selection: $selection, axis: .horizontal) }
        }
        .overlay {
            if adaptive.bars == .side { sideTabs }
        }
    }

    /// Centred in the side bar, which is the safe area's trailing edge, 20pt above the screen's foot.
    private var sideTabs: some View {
        GeometryReader { proxy in
            FloatingTabs(selection: $selection, axis: .vertical)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottomTrailing)
                .offset(
                    x: proxy.safeAreaInsets.trailing / 2 + FloatingTabs.columnWidth / 2,
                    y: proxy.safeAreaInsets.bottom - Metric.Space.xl
                )
        }
    }

    private func tab(_ tab: RootTab, @ViewBuilder content: () -> some View) -> some View {
        content()
            .toolbar(adaptive.barsAreSystem ? .hidden : .automatic, for: .tabBar)
            .tabItem { Label { Text(tab.title) } icon: { Image(systemName: tab.symbol) } }
            .tag(tab)
    }
}

/// A glass capsule of the tabs, the open one on a darker ground: a row of icons beside their
/// names, or a column of icons over them.
private struct FloatingTabs: View {
    @Binding var selection: RootTab
    let axis: Axis

    static let columnWidth: CGFloat = 64
    /// Down from the safe area to where the top bar's own buttons centre on it.
    private static let barCentre: CGFloat = 23
    private static let rowHeight: CGFloat = 54

    var body: some View {
        if axis == .horizontal {
            HStack(spacing: 0) { items }
                .padding(4)
                .frame(height: Self.rowHeight)
                .floatingGlass()
                .padding(.top, Self.barCentre - Self.rowHeight / 2)
        } else {
            VStack(spacing: 2) { items }
                .padding(4)
                .frame(width: Self.columnWidth)
                .floatingGlass()
        }
    }

    private var items: some View {
        ForEach(RootTab.allCases, id: \.self) { tab in item(tab) }
    }

    private func item(_ tab: RootTab) -> some View {
        let open = tab == selection
        return Button {
            Haptics.tap()
            selection = tab
        } label: {
            label(tab, open: open)
                .background(open ? Palette.ink.opacity(0.08) : .clear, in: .capsule)
                .contentShape(.capsule)
        }
        .buttonStyle(.plain)
        .accessibilityAddTraits(open ? .isSelected : [])
    }

    @ViewBuilder
    private func label(_ tab: RootTab, open: Bool) -> some View {
        let weight: Typeface.Weight = open ? .bold : .semibold
        if axis == .horizontal {
            HStack(spacing: 8) {
                Glyph(symbol: tab.symbol, size: 17, weight: .semibold)
                Text(tab.title)
                    .font(Typeface.ui(15, weight, relativeTo: .subheadline))
                    .foregroundStyle(Palette.ink)
                    .lineLimit(1)
            }
            .padding(.horizontal, Metric.Space.l)
            .frame(minWidth: 132, maxHeight: .infinity)
        } else {
            VStack(spacing: 3) {
                Glyph(symbol: tab.symbol, size: 20, weight: .semibold)
                // Two lines where a name is too long for the column, as Russian's are.
                Text(tab.title)
                    .font(Typeface.ui(10, weight, relativeTo: .caption2))
                    .foregroundStyle(Palette.ink)
                    .multilineTextAlignment(.center)
                    .lineLimit(2)
                    .minimumScaleFactor(0.85)
            }
            .frame(maxWidth: .infinity)
            .frame(height: 62)
        }
    }
}
