import SwiftUI

/// The app's icon drawn inside the app, where a notification or a plan names Oyno: the mark on the sky.
struct AppIconTile: View {
    var side: CGFloat = 38

    var body: some View {
        let shape = RoundedRectangle(cornerRadius: side * 0.24)
        Image("SplashMark")
            .resizable()
            .frame(width: side, height: side)
            .background(Palette.sky, in: shape)
            .overlay(shape.strokeBorder(Palette.ink.opacity(0.12), lineWidth: 0.5))
            .accessibilityHidden(true)
    }
}
