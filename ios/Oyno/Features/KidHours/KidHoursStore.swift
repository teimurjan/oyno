import Combine
import DeviceActivity
import FamilyControls
import Foundation
import ManagedSettings
import Observation

/// What a tile in the Kid hours grids stands for. Tokens draw themselves through `Label`; a
/// placeholder is the screenshot harness standing in for a phone with Screen Time.
enum TokenItem: Hashable {
    case app(ApplicationToken)
    case category(ActivityCategoryToken)
    case domain(WebDomainToken)
    case placeholder(String)
}

/// Kid hours on this phone: Screen Time access, the apps to pause and the ones that stay open,
/// the schedules, and the unlocks inside them. The schedules and the relock run in
/// `OynoMonitor`, so they hold whether or not Oyno is open.
@MainActor
@Observable
final class KidHoursStore {
    private(set) var settings: KidHoursSettings
    private(set) var isAuthorized = AuthorizationCenter.shared.authorizationStatus == .approved

    static let notNowMinutes = 20

    @ObservationIgnored private let center = DeviceActivityCenter()
    @ObservationIgnored private var authorizationWatch: Task<Void, Never>?

    /// Screen Time loads the status after launch, so the first read is often `.notDetermined`.
    init() {
        settings = KidHoursSettings.load()
            ?? KidHoursSettings(schedules: [.afterWork(named: String(interface: "After work"))])
        authorizationWatch = Task { [weak self] in
            for await status in AuthorizationCenter.shared.$authorizationStatus.values {
                self?.isAuthorized = status == .approved
            }
        }
    }

    /// Whether the apps are paused right now.
    var isOnNow: Bool { settings.isPaused(at: .now) }

    /// The schedule pausing the apps right now, nil outside Kid hours and during an unlock.
    var current: KidHoursSchedule? { isOnNow ? settings.schedule(at: .now) : nil }

    /// The unlock keeping the apps open inside Kid hours right now.
    var liveUnlock: KidHoursUnlock? {
        let now = Date.now
        guard settings.isUnlocked(at: now), settings.schedule(at: now) != nil else { return nil }
        return settings.unlock
    }

    /// When the apps stop being open: the unlock's end, or Kid hours' if they end first.
    var unlockEnd: Date? {
        let now = Date.now
        guard let unlock = liveUnlock, let ends = settings.schedule(at: now)?.end(on: now) else { return nil }
        return min(ends, unlock.endsAt)
    }

    /// The unlock the last round earned, while the apps are paused and its schedule still runs.
    var claimable: KidHoursEarned? {
        let now = Date.now
        guard isOnNow, let earned = settings.earned, earned.isClaimable(at: now),
              settings.schedule(at: now)?.id == earned.scheduleID
        else { return nil }
        return earned
    }

    /// The schedule the top card shows: the one running now, else the next to start, else
    /// whatever there is.
    var featured: KidHoursSchedule? {
        let now = Date.now
        if let running = settings.schedule(at: now) { return running }
        let upcoming = settings.schedules.filter(\.isEnabled)
        return upcoming.min { ($0.nextStart(after: now) ?? .distantFuture) < ($1.nextStart(after: now) ?? .distantFuture) }
            ?? settings.schedules.first
    }

    /// Every schedule but the featured one, in the order they were made.
    var others: [KidHoursSchedule] { settings.schedules.filter { $0.id != featured?.id } }

    /// The apps that stay open. Only apps can be excepted from a paused category, so only apps
    /// are kept.
    var alwaysOpen: [TokenItem] { settings.alwaysOpen.applicationTokens.map(TokenItem.app) }

    var paused: [TokenItem] {
        #if DEBUG
        if let seededPaused { return seededPaused.map(TokenItem.placeholder) }
        #endif
        return settings.selection.applicationTokens.map(TokenItem.app)
            + settings.selection.categoryTokens.map(TokenItem.category)
            + settings.selection.webDomainTokens.map(TokenItem.domain)
    }

    #if DEBUG
    private var seededPaused: [String]?

    /// The simulator has no Screen Time and no app tokens, so the frame stands in a parent who set it up.
    func seedForScreenshot(paused: [String]) {
        authorizationWatch?.cancel()
        isAuthorized = true
        seededPaused = paused
    }
    #endif

    /// Asks Screen Time for access to the parent's own phone. Fails quietly in the simulator,
    /// which has no Screen Time.
    func requestAuthorization() async {
        do {
            try await AuthorizationCenter.shared.requestAuthorization(for: .individual)
        } catch {
            // Declined, or unavailable. The status below says which way it went.
        }
        isAuthorized = AuthorizationCenter.shared.authorizationStatus == .approved
        Analytics.shared.track(.kidHoursAuthorized(granted: isAuthorized))
    }

    func update(selection: FamilyActivitySelection) {
        settings.selection = selection
        commit()
        trackSelection()
    }

    func update(alwaysOpen: FamilyActivitySelection) {
        var apps = FamilyActivitySelection()
        apps.applicationTokens = alwaysOpen.applicationTokens
        settings.alwaysOpen = apps
        commit()
        trackSelection()
    }

    /// Adds the schedule, or replaces the one with its id. The sheet never lets an invalid
    /// one through, so one arriving here is dropped rather than half-saved.
    func save(_ schedule: KidHoursSchedule) {
        guard schedule.isValid else { return }
        if let at = settings.schedules.firstIndex(where: { $0.id == schedule.id }) {
            settings.schedules[at] = schedule
        } else {
            settings.schedules.append(schedule)
        }
        commit()
        Analytics.shared.track(.kidHoursScheduleSaved(schedules: settings.schedules.count))
    }

    func remove(_ schedule: KidHoursSchedule) {
        settings.schedules.removeAll { $0.id == schedule.id }
        commit()
        Analytics.shared.track(.kidHoursScheduleSaved(schedules: settings.schedules.count))
    }

    func setEnabled(_ enabled: Bool, for schedule: KidHoursSchedule) {
        var next = schedule
        next.isEnabled = enabled
        save(next)
    }

    /// Banks what a round just played earns, when its schedule rewards rounds. One at a time:
    /// a newer round replaces it.
    func earn(now: Date = .now) {
        guard let schedule = settings.schedule(at: now), schedule.unlocksAfterRound,
              let ends = schedule.end(on: now)
        else { return }
        settings.earned = KidHoursEarned(scheduleID: schedule.id, minutes: schedule.unlockMinutes, expiresAt: ends)
        settings.save()
    }

    /// Opens the apps for what the last round earned. False when nothing is claimable or the
    /// relock could not be armed, and then the apps stay paused.
    @discardableResult
    func claimEarned(now: Date = .now) -> Bool {
        guard let earned = claimable, unlock(.round, minutes: earned.minutes, now: now) else { return false }
        settings.earned = nil
        settings.save()
        return true
    }

    /// "Not now": the apps open without a round, then Kid hours pick back up on their own.
    @discardableResult
    func takeNotNow(now: Date = .now) -> Bool {
        unlock(.notNow, minutes: Self.notNowMinutes, now: now)
    }

    func lockNow() {
        guard settings.unlock != nil else { return }
        settings.unlock = nil
        settings.save()
        center.stopMonitoring([.kidHoursUnlock])
        KidHoursShield.sync(settings)
        Analytics.shared.track(.kidHoursLockedEarly)
    }

    /// Drops what has run out and makes the shield match. The monitor relocks on its own; this
    /// repairs a boundary it missed, each time the app comes forward.
    func refresh(now: Date = .now) {
        if let unlock = settings.unlock, now >= unlock.endsAt { settings.unlock = nil }
        if let earned = settings.earned, !earned.isClaimable(at: now) { settings.earned = nil }
        settings.save()
        guard isAuthorized else { return }
        KidHoursShield.sync(settings, at: now)
    }

    /// The relock is armed before the apps open: an unlock Screen Time will not end is refused,
    /// and the apps stay paused.
    private func unlock(_ reason: KidHoursUnlock.Reason, minutes: Int, now: Date) -> Bool {
        let wanted = KidHoursUnlock.end(minutes: minutes, from: now)
        let unlock = KidHoursUnlock(reason: reason, startedAt: now, endsAt: max(wanted, liveUnlock?.endsAt ?? wanted))
        center.stopMonitoring([.kidHoursUnlock])
        settings.unlock = unlock
        settings.save()
        do {
            try center.startMonitoring(.kidHoursUnlock, during: DeviceActivitySchedule(
                intervalStart: Self.moment(unlock.monitoredStart),
                intervalEnd: Self.moment(unlock.endsAt),
                repeats: false
            ))
        } catch {
            settings.unlock = nil
            settings.save()
            KidHoursShield.sync(settings, at: now)
            return false
        }
        KidHoursShield.sync(settings, at: now)
        Analytics.shared.track(.kidHoursBreak(minutes: minutes, reason: reason.rawValue))
        return true
    }

    private static func moment(_ date: Date) -> DateComponents {
        Calendar.current.dateComponents([.year, .month, .day, .hour, .minute, .second], from: date)
    }

    /// Saves, then re-arms the monitor so the schedules on the phone match the ones on screen.
    private func commit() {
        settings.save()
        center.stopMonitoring(center.activities.filter(\.isKidHours))
        guard isAuthorized else { return }

        for schedule in settings.schedules where schedule.isEnabled {
            try? center.startMonitoring(
                .kidHours(schedule),
                during: DeviceActivitySchedule(
                    intervalStart: schedule.startComponents,
                    intervalEnd: schedule.endComponents,
                    repeats: true
                )
            )
        }
        // The monitor only hears boundaries, so a change saved mid-interval takes effect now.
        KidHoursShield.sync(settings)
    }

    private func trackSelection() {
        Analytics.shared.track(.kidHoursSaved(
            apps: settings.selection.applicationTokens.count,
            categories: settings.selection.categoryTokens.count,
            alwaysOpen: settings.alwaysOpen.applicationTokens.count
        ))
    }
}
