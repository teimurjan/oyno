import SwiftUI

/// One line on an empty sky, then gone: the turn from the story to the numbers. It advances
/// itself, and a tap gets there sooner.
struct FunnelInterlude: View {
    let onContinue: () -> Void

    @State private var shown = false

    var body: some View {
        FunnelLine(text: String(interface: "Some not-so-good news, and some good news."))
            .padding(.horizontal, Metric.gutter + 12)
            .opacity(shown ? 1 : 0)
            .blur(radius: shown ? 0 : 10)
            .animation(.easeInOut(duration: 0.7), value: shown)
            .task {
                guard await funnelPause(350) else { return }
                shown = true
                guard await funnelPause(2300) else { return }
                shown = false
                guard await funnelPause(700) else { return }
                onContinue()
            }
    }
}
