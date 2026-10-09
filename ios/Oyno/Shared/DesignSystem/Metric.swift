import SwiftUI

/// Spacing, radii and the two control heights, so a new screen inherits the rhythm
/// instead of re-deriving it.
enum Metric {
    static let gutter: CGFloat = 20
    static let cardPadding: CGFloat = 16

    enum Space {
        static let xs: CGFloat = 4
        static let s: CGFloat = 8
        static let m: CGFloat = 12
        static let l: CGFloat = 16
        static let xl: CGFloat = 20
    }

    enum Radius {
        static let card: CGFloat = 22
        static let control: CGFloat = 999
        static let swatch: CGFloat = 3
        static let bar: CGFloat = 2
    }

    /// Apple's minimum, and the reason every stepper and icon button is a 44pt square:
    /// this app is used one-handed, standing, sometimes with a glove on.
    static let tapTarget: CGFloat = 44
    /// The one committing action per screen sits taller than everything around it.
    static let primaryButton: CGFloat = 52
    /// A control that shares a line rather than standing alone: the committing action where
    /// a screen keeps it in its header, and the filter and layout pair under a shelf.
    /// Shorter than the tap target on purpose — chrome beside a title is not the screen's
    /// subject — and one number, so those faces line up with each other.
    static let compactControl: CGFloat = 40

    static let barHeight: CGFloat = 4
}
