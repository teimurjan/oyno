import CoreText
import SwiftUI
import UIKit

/// Three families, split by job — and the third has exactly one caller.
///
/// Inter carries language: titles, labels, prose. IBM Plex Mono carries every number the
/// shop is judged on — grams, hours, currency, percentages — because this app's screens
/// are read as columns. A gram count that shifts left when it drops from 1000 to 940 makes
/// a list of spools unscannable, and scanning a spool list at arm's length while a printer
/// runs is the thing the product is for. Mono plus tabular figures keeps the digits on a
/// fixed grid.
///
/// Space Grotesk draws the wordmark and nothing else. It is the one display face here — a
/// mark wants a shape of its own, distinct from the Inter the interface is set in and the
/// Plex Mono the numbers are — and it is the same face the website header sets "Oyno"
/// in: `components/Logo.tsx` reaches this very directory through `app/fonts.ts`, so the app's
/// splash and the site's header cannot drift. It ships at one weight, 600, because the mark
/// is set in one weight; the 600 instance is cut from the variable font (there is no static
/// SemiBold in the family), which is why the file is ours rather than a stock download.
///
/// Anything a reader has to read in quantity stays on Inter. A third family is a licence to
/// pick a font per screen, and the reason this enum is worth having is that nobody does.
///
/// The faces register themselves rather than going through `UIAppFonts`, so adding a
/// weight is a file drop with no Info.plist edit — the same reason the Xcode target syncs
/// the whole source folder.
enum Typeface {
    enum Weight: String {
        case regular = "Regular"
        case medium = "Medium"
        case semibold = "SemiBold"
        case bold = "Bold"
    }

    private static let registered: Void = {
        let names = [
            "Inter-Regular", "Inter-Medium", "Inter-SemiBold", "Inter-Bold",
            "IBMPlexMono-Regular", "IBMPlexMono-Medium", "IBMPlexMono-SemiBold",
            "SpaceGrotesk-SemiBold",
        ]
        let urls = names.compactMap { Bundle.main.url(forResource: $0, withExtension: "ttf") } as CFArray
        CTFontManagerRegisterFontURLs(urls, .process, true, nil)
    }()

    static func register() { _ = registered }

    /// `Font.custom` takes a *PostScript* name, not a filename, and the families here
    /// disagree about what those look like. Inter's follow the obvious pattern; both IBM
    /// Plex faces are abbreviated to fit the 31-character limit older tooling imposed —
    /// `IBMPlexMono`, `IBMPlexMono-Medm`, `IBMPlexMono-SmBld`. Space Grotesk's is spelt out,
    /// `SpaceGrotesk-SemiBold`, and set by hand when the 600 instance was cut.
    ///
    /// Worth stating rather than deriving, because getting one wrong fails *silently*:
    /// SwiftUI falls back to the system font, every number quietly loses its tabular
    /// figures, and the columns this whole design is built on stop lining up. Nothing
    /// crashes and nothing logs. Verified in `assertFontsResolve()` below.
    private static func postScriptName(_ family: Family, _ weight: Weight) -> String {
        switch (family, weight) {
        case (.inter, .regular): "Inter-Regular"
        case (.inter, .medium): "Inter-Medium"
        case (.inter, .semibold): "Inter-SemiBold"
        case (.inter, .bold): "Inter-Bold"
        case (.mono, .regular): "IBMPlexMono"
        case (.mono, .medium): "IBMPlexMono-Medm"
        case (.mono, .semibold), (.mono, .bold): "IBMPlexMono-SmBld"
        // The face ships in one weight, because the wordmark is set in one weight.
        case (.wordmark, _): "SpaceGrotesk-SemiBold"
        }
    }

    private enum Family { case inter, mono, wordmark }

    /// Inter at a fixed size. Sizes come straight off the canvas, which specifies them in
    /// points; `relativeTo` still lets Dynamic Type scale them.
    static func ui(_ size: CGFloat, _ weight: Weight = .regular, relativeTo style: Font.TextStyle = .body) -> Font {
        register()
        return .custom(postScriptName(.inter, weight), size: size, relativeTo: style)
    }

    /// IBM Plex Mono. Always pair with `.monospacedDigit()` at the call site — the face is
    /// monospaced, but the modifier is what keeps digits aligned if the bundle ever ships
    /// without the TTF.
    static func mono(_ size: CGFloat, _ weight: Weight = .regular, relativeTo style: Font.TextStyle = .body) -> Font {
        register()
        return .custom(postScriptName(.mono, weight), size: size, relativeTo: style)
    }

    /// The wordmark, and the one face in here with no `relativeTo:`.
    ///
    /// Dynamic Type must not touch it. A mark is a fixed shape rather than something read at
    /// a comfortable size — and on the splash its rendered width is what the nozzle's travel
    /// distance is measured against, so a reader on the largest accessibility size would
    /// otherwise get a nozzle that parks halfway through the word.
    static func wordmark(_ size: CGFloat) -> Font {
        register()
        return .custom(postScriptName(.wordmark, .semibold), fixedSize: size)
    }

    #if DEBUG
    /// Fails the launch of a Debug build if any face is missing or misnamed.
    ///
    /// The failure this guards against is invisible: a wrong PostScript name renders in
    /// the system font, which on iOS is close enough to Inter that a screenshot looks
    /// almost right — and every number silently loses the tabular figures the layout
    /// depends on. It shipped once already. Compiled out of Release, so a font that fails
    /// to register on a real device degrades rather than crashes.
    static func assertFontsResolve() {
        register()
        for (family, weights) in [
            (Family.inter, [Weight.regular, .medium, .semibold]),
            (.mono, [.regular, .medium, .semibold]),
            (.wordmark, [.semibold]),
        ] {
            for weight in weights {
                let name = postScriptName(family, weight)
                assert(
                    UIFont(name: name, size: 12) != nil,
                    "Font \"\(name)\" did not resolve — check the PostScript name and that the TTF is in the bundle"
                )
            }
        }
    }
    #endif
}

extension View {
    /// A screen's large title. 27pt semibold with the tight tracking the canvas specifies —
    /// large enough to anchor the screen, small enough that "Filament Inventory" does not
    /// wrap on a 6.1" phone.
    func oynoTitle() -> some View {
        font(Typeface.ui(27, .semibold, relativeTo: .largeTitle))
            .tracking(-0.68)
            .foregroundStyle(Palette.ink)
    }

    /// The mono all-caps rule above a card's contents — LANDED COST, WHERE IT GOES, NET.
    /// Wide tracking is what makes 10pt legible.
    func oynoEyebrow() -> some View {
        font(Typeface.mono(10, .semibold, relativeTo: .caption2))
            .tracking(1.2)
            .textCase(.uppercase)
            .foregroundStyle(Palette.muted)
    }

    /// A row's name.
    func oynoRowTitle() -> some View {
        font(Typeface.ui(15, .medium, relativeTo: .subheadline)).foregroundStyle(Palette.ink)
    }

    /// The line under a row title, and the caption under a screen title.
    func oynoCaption(_ color: Color = Palette.muted) -> some View {
        font(Typeface.ui(12, .regular, relativeTo: .caption)).foregroundStyle(color)
    }

    /// A number the reader compares against other numbers.
    func oynoValue(_ size: CGFloat = 15, _ weight: Typeface.Weight = .medium, color: Color = Palette.ink) -> some View {
        font(Typeface.mono(size, weight, relativeTo: .subheadline))
            .monospacedDigit()
            .foregroundStyle(color)
    }

    /// The one number a screen is built around: the list price, the month's net.
    func oynoHeadlineValue(_ size: CGFloat = 38) -> some View {
        font(Typeface.mono(size, .semibold, relativeTo: .largeTitle))
            .monospacedDigit()
            .tracking(-1.1)
            .foregroundStyle(Palette.ink)
    }

    /// The mono annotation beside a value — "6.5 h @ 115 W".
    func oynoNote() -> some View {
        font(Typeface.mono(11, .regular, relativeTo: .caption2))
            .monospacedDigit()
            .foregroundStyle(Palette.faint)
    }
}
