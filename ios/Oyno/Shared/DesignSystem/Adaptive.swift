import SwiftUI
import UIKit

/// How the window is shaped, and where the system draws its bars, read once at the root so
/// every screen picks its layout from the same answer. The canvas draws three: a phone held
/// upright, iPad, and iPhone Duo closed, open and standing half open.
struct Adaptive: Equatable {
    enum Columns {
        /// The phone's one column: an upright phone, the Duo closed, a narrow iPad window.
        case one
        /// Two columns either side of the window's centre line, which is the Duo's fold.
        case two
        /// Two rows either side of it: the Duo open upright or standing on a table, iPad upright.
        case rows
    }

    enum Bars {
        /// The screen draws its own buttons: an upright phone, as the canvas's D artboards.
        case inline
        /// The system bar along the top, which the iPad's tabs float in.
        case top
        /// The system bar down the trailing edge, as the Duo draws it when short or wide.
        case side
    }

    /// The window in global coordinates: the screen, unless the screenshot harness frames it.
    var frame = CGRect.zero
    var columns = Columns.one
    var bars = Bars.inline

    var window: CGSize { frame.size }

    init() {}

    init(window: CGSize, idiom: UIUserInterfaceIdiom) {
        self.init(frame: CGRect(origin: .zero, size: window), idiom: idiom)
    }

    init(frame: CGRect, idiom: UIUserInterfaceIdiom) {
        self.frame = frame
        let window = frame.size
        let wide = window.width > window.height
        if window.width >= 700, wide {
            columns = .two
        } else if window.width >= 600, !wide {
            columns = .rows
        }
        if idiom == .pad {
            bars = .top
        } else if window.height < window.width * 1.7 {
            bars = .side
        }
    }

    /// Whether the screen's own buttons move into the system's bar.
    var barsAreSystem: Bool { bars != .inline }

    /// A window as wide as an iPad's, whose type and controls the canvas draws a size up.
    var roomy: Bool { window.width >= 1000 }

    /// The space outside a column, wider on an iPad than on the Duo.
    var margin: CGFloat { roomy ? 56 : 28 }
}

extension EnvironmentValues {
    @Entry var adaptive = Adaptive()
}

extension View {
    /// Measures the window and hands its `Adaptive` to everything below, the covers included.
    /// `idiom` stands in for the device's, for the screenshot harness.
    func adaptiveLayout(idiom: UIUserInterfaceIdiom? = nil) -> some View {
        modifier(AdaptiveReader(idiom: idiom))
    }

    /// Caps a column at a comfortable reading width and centres it in a wider window.
    func readableWidth() -> some View {
        frame(maxWidth: Metric.readableWidth).frame(maxWidth: .infinity)
    }

    /// Shows the navigation bar, clear, where the system's bar holds the screen's buttons, and
    /// hides it where the screen draws them itself.
    func systemBar(_ adaptive: Adaptive) -> some View {
        toolbar(adaptive.barsAreSystem ? .visible : .hidden, for: .navigationBar)
            .toolbarBackground(.hidden, for: .navigationBar)
    }
}

extension ToolbarContent {
    /// No glass behind an item that is not a control, such as the wordmark.
    @ToolbarContentBuilder
    func bare() -> some ToolbarContent {
        if #available(iOS 26, *) {
            sharedBackgroundVisibility(.hidden)
        } else {
            self
        }
    }
}

private struct AdaptiveReader: ViewModifier {
    let idiom: UIUserInterfaceIdiom?
    @State private var adaptive = Adaptive()

    func body(content: Content) -> some View {
        content
            .environment(\.adaptive, adaptive)
            .background {
                Color.clear
                    .ignoresSafeArea()
                    .onGeometryChange(for: CGRect.self, of: { $0.frame(in: .global) }) { frame in
                        adaptive = Adaptive(frame: frame, idiom: idiom ?? UIDevice.current.userInterfaceIdiom)
                    }
            }
    }
}

/// The two columns of a wide window. They meet at the window's centre, not the safe area's:
/// on the Duo that line is the fold, and nothing to tap may sit in it. A side bar narrows only
/// the trailing column, whose outer margin then shrinks to the bar's own. The margins are safe
/// area, so a column that scrolls runs to the edge and insets only its content.
struct FoldColumns<Leading: View, Trailing: View>: View {
    @ViewBuilder var leading: Leading
    @ViewBuilder var trailing: Trailing

    @Environment(\.adaptive) private var adaptive

    var body: some View {
        GeometryReader { proxy in
            let frame = proxy.frame(in: .global)
            let center = adaptive.frame.midX - frame.minX
            let barred = adaptive.frame.maxX - frame.maxX > Metric.fold / 2
            HStack(spacing: Metric.fold) {
                leading
                    .safeAreaPadding(.leading, adaptive.margin)
                    .frame(width: max(0, center - Metric.fold / 2))
                trailing
                    .safeAreaPadding(.trailing, barred ? Metric.Space.m : adaptive.margin)
                    .frame(width: max(0, frame.width - center - Metric.fold / 2))
            }
            .frame(height: proxy.size.height)
        }
    }
}

/// A column that stands still while it fits, so a spacer can hold its last part at the foot,
/// and scrolls once it does not, at a large type size or in a short window.
struct ScrollsIfNeeded<Content: View>: View {
    @ViewBuilder var content: Content

    var body: some View {
        ViewThatFits(in: .vertical) {
            content
            ScrollView { content }.scrollIndicators(.hidden)
        }
    }
}

/// The two rows of an upright wide window, either side of its centre line: the Duo standing
/// half open on a table puts what to read on the raised half and what to tap on the flat one.
struct FoldRows<Top: View, Bottom: View>: View {
    @ViewBuilder var top: Top
    @ViewBuilder var bottom: Bottom

    @Environment(\.adaptive) private var adaptive

    var body: some View {
        GeometryReader { proxy in
            let frame = proxy.frame(in: .global)
            let center = adaptive.frame.midY - frame.minY
            VStack(spacing: Metric.fold) {
                top.frame(height: max(0, center - Metric.fold / 2))
                bottom.frame(height: max(0, frame.height - center - Metric.fold / 2))
            }
            .frame(width: proxy.size.width)
        }
    }
}
