import DeviceActivity
import SwiftUI

/// Screen Time's process for Home's screen time card: the only place that may read how long
/// each app was open. What it reads is drawn here and never reaches the app.
@main
struct OynoReport: DeviceActivityReportExtension {
    var body: some DeviceActivityReportScene {
        TodayAppsReport { TodayAppsView(apps: $0) }
    }
}
