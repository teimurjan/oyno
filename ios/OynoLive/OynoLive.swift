import SwiftUI
import WidgetKit

/// The system's process for a round away from the app: the Lock Screen and the Dynamic Island.
/// It reads the App Group only for the interface language.
@main
struct OynoLive: WidgetBundle {
    var body: some Widget {
        RoundLiveActivity()
    }
}
