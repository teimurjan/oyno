import DeviceActivity
import SwiftUI

/// Today's screen time, app by app, on Kid hours: the phone's numbers, kept beside the
/// schedules that cut them down rather than on Home, where every number is the family's.
struct ScreenTimeCard: View {
    @Environment(KidHoursStore.self) private var kidHours

    var body: some View {
        Group {
            #if DEBUG
            if let seeded = kidHours.seededUsage {
                AppUsageCard(usage: seeded) { TokenTile(item: .placeholder($0.name)) }
            } else {
                report
            }
            #else
            report
            #endif
        }
        .frame(height: AppUsageCard<EmptyView>.height)
        .glassCard()
    }

    /// Drawn by `OynoReport`: only Screen Time's own process may read what each app took.
    /// It has nothing to tap, and a hosted report would otherwise keep the drag from the scroll view.
    private var report: some View {
        let today = DateInterval(start: Calendar.current.startOfDay(for: .now), duration: 86_400)
        return DeviceActivityReport(.todayApps, filter: DeviceActivityFilter(segment: .daily(during: today), users: .all, devices: .init([.iPhone])))
            .allowsHitTesting(false)
    }
}
