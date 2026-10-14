import CoreText
import SwiftUI
import UIKit

/// One family, Figtree, for language and numbers alike. Numbers stay on a grid through its
/// tabular figures (`.monospacedDigit()`), which is why there is no second, mono face.
///
/// Figtree has no Cyrillic, so a language written in it is drawn whole in Onest, a geometric
/// sans of the same build, rather than letter by letter in the system font.
///
/// The faces register themselves rather than going through `UIAppFonts`, so adding a weight
/// is a file drop with no Info.plist edit. The site and the funnel read the same TTFs.
enum Typeface {
    enum Weight: String, CaseIterable {
        case regular = "Regular"
        case medium = "Medium"
        case semibold = "SemiBold"
        case bold = "Bold"
        case extrabold = "ExtraBold"
    }

    private static let families = ["Figtree", "Onest"]

    private static let registered: Void = {
        let urls = families.flatMap { family in
            Weight.allCases.compactMap { Bundle.main.url(forResource: "\(family)-\($0.rawValue)", withExtension: "ttf") }
        } as CFArray
        CTFontManagerRegisterFontURLs(urls, .process, true, nil)
    }()

    static func register() { _ = registered }

    /// A wrong PostScript name falls back to the system font without a word, so it is
    /// checked in `assertFontsResolve()`.
    private static func postScriptName(_ weight: Weight, family: String = face) -> String { "\(family)-\(weight.rawValue)" }

    /// Read on every call, so a language picked in the app redraws in its own face.
    private static var face: String {
        InterfaceLanguage.locale.language.script == .cyrillic ? "Onest" : "Figtree"
    }

    static func ui(_ size: CGFloat, _ weight: Weight = .regular, relativeTo style: Font.TextStyle = .body) -> Font {
        register()
        return .custom(postScriptName(weight), size: size, relativeTo: style)
    }

    /// The interface face for a number. Pair with `.monospacedDigit()` so a changing figure keeps its width.
    static func figures(_ size: CGFloat, _ weight: Weight = .semibold, relativeTo style: Font.TextStyle = .body) -> Font {
        ui(size, weight, relativeTo: style)
    }

    #if DEBUG
    static func assertFontsResolve() {
        register()
        for family in families {
            for weight in Weight.allCases {
                let name = postScriptName(weight, family: family)
                assert(UIFont(name: name, size: 12) != nil, "Font \"\(name)\" did not resolve")
            }
        }
    }
    #endif
}

extension View {
    /// A screen's large title, as the canvas draws it: heavy, tight.
    func oynoTitle() -> some View {
        font(Typeface.ui(28, .extrabold, relativeTo: .largeTitle))
            .tracking(-0.8)
            .foregroundStyle(Palette.ink)
    }

    /// The small label above a block.
    func oynoEyebrow() -> some View {
        font(Typeface.ui(13, .semibold, relativeTo: .caption))
            .foregroundStyle(Palette.muted)
    }

    func oynoRowTitle() -> some View {
        font(Typeface.ui(16, .bold, relativeTo: .subheadline)).foregroundStyle(Palette.ink)
    }

    func oynoCaption(_ color: Color = Palette.muted) -> some View {
        font(Typeface.ui(13, .medium, relativeTo: .caption)).foregroundStyle(color)
    }

    /// A number the reader compares against other numbers.
    func oynoValue(_ size: CGFloat = 15, _ weight: Typeface.Weight = .bold, color: Color = Palette.ink) -> some View {
        font(Typeface.figures(size, weight, relativeTo: .subheadline))
            .monospacedDigit()
            .foregroundStyle(color)
    }

    /// The one number a screen is built around.
    func oynoHeadlineValue(_ size: CGFloat = 52) -> some View {
        font(Typeface.figures(size, .extrabold, relativeTo: .largeTitle))
            .monospacedDigit()
            .tracking(-2)
            .foregroundStyle(Palette.ink)
    }

    func oynoNote() -> some View {
        font(Typeface.figures(12, .medium, relativeTo: .caption2))
            .monospacedDigit()
            .foregroundStyle(Palette.muted)
    }
}
