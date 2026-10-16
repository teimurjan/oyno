import DeviceActivity
import ManagedSettings
import SwiftUI

/// Today's usage, and the token behind each row so its icon can be drawn.
struct TodayApps {
    let usage: AppUsage
    let tokens: [String: ApplicationToken]
}

struct TodayAppsReport: DeviceActivityReportScene {
    let context: DeviceActivityReport.Context = .todayApps
    let content: (TodayApps) -> TodayAppsView

    func makeConfiguration(representing data: DeviceActivityResults<DeviceActivityData>) async -> TodayApps {
        let paused = PausedApps(KidHoursSettings.load())
        var total: TimeInterval = 0
        var apps: [ApplicationToken: (name: String, duration: TimeInterval, isPaused: Bool)] = [:]

        for await device in data {
            for await segment in device.activitySegments {
                total += segment.totalActivityDuration
                for await category in segment.categories {
                    for await report in category.applications {
                        guard let token = report.application.token else { continue }
                        let isPaused = paused.contains(token, in: category.category.token)
                        let name = report.application.localizedDisplayName ?? ""
                        let seen = apps[token]?.duration ?? 0
                        apps[token] = (name, seen + report.totalActivityDuration, isPaused)
                    }
                }
            }
        }

        let top = apps.sorted { $0.value.duration > $1.value.duration }.prefix(AppUsageCard<EmptyView>.rowLimit)
        let rows = top.enumerated().map { index, app in
            AppUsage.Row(id: "\(index)", name: app.value.name, duration: app.value.duration, isPaused: app.value.isPaused)
        }
        let tokens = Dictionary(uniqueKeysWithValues: zip(rows.map(\.id), top.map(\.key)))
        return TodayApps(usage: AppUsage(total: total, rows: rows), tokens: tokens)
    }
}

/// What Kid hours pause, from any enabled schedule, less what is always allowed.
private struct PausedApps {
    private let apps: Set<ApplicationToken>
    private let categories: Set<ActivityCategoryToken>
    private let allowed: Set<ApplicationToken>

    init(_ settings: KidHoursSettings?) {
        let selections = settings.map { settings in settings.schedules.filter(\.isEnabled).map(settings.apps(of:)) } ?? []
        apps = selections.reduce(into: []) { $0.formUnion($1.applicationTokens) }
        categories = selections.reduce(into: []) { $0.formUnion($1.categoryTokens) }
        allowed = settings?.alwaysAllowed.applicationTokens ?? []
    }

    func contains(_ app: ApplicationToken, in category: ActivityCategoryToken?) -> Bool {
        guard !allowed.contains(app) else { return false }
        return apps.contains(app) || category.map(categories.contains) == true
    }
}

struct TodayAppsView: View {
    let apps: TodayApps

    var body: some View {
        AppUsageCard(usage: apps.usage) { row in
            if let token = apps.tokens[row.id] {
                Label(token).labelStyle(.iconOnly)
            }
        }
        .environment(\.locale, InterfaceLanguage.locale)
    }
}
