import Combine
import DeviceActivity
import FamilyControls
import Foundation
import ManagedSettings
import Observation
import UserNotifications

/// What a tile in the Kid hours grids stands for. Tokens draw themselves through `Label`; a
/// placeholder is the screenshot harness standing in for a phone with Screen Time.
enum TokenItem: Hashable {
    case app(ApplicationToken)
    case category(ActivityCategoryToken)
    case domain(WebDomainToken)
    case placeholder(String)
}

/// Kid hours on this phone: Screen Time access, the schedules and the apps each pauses, the
/// apps always and never allowed, and the unlocks inside the schedules. The schedules and the relock run in
/// `OynoMonitor`, so they hold whether or not Oyno is open.
@MainActor
@Observable
final class KidHoursStore {
    private(set) var settings: KidHoursSettings
    private(set) var isAuthorized = AuthorizationCenter.shared.authorizationStatus == .approved

    static let notNowMinutes = 20

    @ObservationIgnored private let center = DeviceActivityCenter()
    @ObservationIgnored private var authorizationWatch: Task<Void, Never>?
    @ObservationIgnored private var earnedExpiry: Task<Void, Never>?

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

    /// What "right now" means below: the clock, or the moment the screenshot harness pins.
    var now: Date {
        #if DEBUG
        if let seededNow { return seededNow }
        #endif
        return .now
    }

    /// Whether the apps are paused right now.
    var isOnNow: Bool { settings.isPaused(at: now) }

    /// The schedule pausing the apps right now, nil outside Kid hours and during an unlock.
    var current: KidHoursSchedule? { isOnNow ? settings.schedule(at: now) : nil }

    /// The unlock keeping the apps open inside Kid hours right now.
    var liveUnlock: KidHoursUnlock? {
        guard settings.isUnlocked(at: now), settings.schedule(at: now) != nil else { return nil }
        return settings.unlock
    }

    /// When the apps stop being open: the unlock's end, or Kid hours' if they end first.
    var unlockEnd: Date? {
        guard let unlock = liveUnlock, let ends = settings.schedule(at: now)?.end(on: now) else { return nil }
        return min(ends, unlock.endsAt)
    }

    /// Minutes so far today that Kid hours kept the apps paused.
    func pausedMinutesToday(now: Date = .now) -> Int {
        #if DEBUG
        if let seededPausedMinutes { return seededPausedMinutes }
        #endif
        guard isAuthorized else { return 0 }
        return settings.pausedMinutes(until: now)
    }

    /// The unlock the last round earned, while the apps are paused and its schedule still runs.
    var claimable: KidHoursEarned? {
        guard isOnNow, let earned = settings.earned, earned.isClaimable(at: now),
              settings.schedule(at: now)?.id == earned.scheduleID
        else { return nil }
        return earned
    }

    /// The schedule the top card shows: the one running now, else the next to start, else
    /// whatever there is.
    var featured: KidHoursSchedule? {
        if let running = settings.schedule(at: now) { return running }
        let upcoming = settings.schedules.filter(\.isEnabled)
        return upcoming.min { ($0.nextStart(after: now) ?? .distantFuture) < ($1.nextStart(after: now) ?? .distantFuture) }
            ?? settings.schedules.first
    }

    /// Every schedule but the featured one, in the order they were made.
    var others: [KidHoursSchedule] { settings.schedules.filter { $0.id != featured?.id } }

    /// Only apps can be excepted from a paused category, so only apps are kept.
    var alwaysAllowed: [TokenItem] {
        #if DEBUG
        if let seededAllowed { return seededAllowed.map(TokenItem.placeholder) }
        #endif
        return settings.alwaysAllowed.applicationTokens.map(TokenItem.app)
    }

    var neverAllowed: [TokenItem] {
        #if DEBUG
        if let seededNever { return seededNever.map(TokenItem.placeholder) }
        #endif
        return Self.items(settings.neverAllowed)
    }

    func apps(of schedule: KidHoursSchedule) -> [TokenItem] {
        #if DEBUG
        if let seededApps { return seededApps.map(TokenItem.placeholder) }
        #endif
        return Self.items(schedule.apps)
    }

    static func items(_ selection: FamilyActivitySelection) -> [TokenItem] {
        selection.applicationTokens.map(TokenItem.app)
            + selection.categoryTokens.map(TokenItem.category)
            + selection.webDomainTokens.map(TokenItem.domain)
    }

    #if DEBUG
    private var seededApps: [String]?
    private var seededAllowed: [String]?
    private var seededNever: [String]?
    private(set) var seededUsage: AppUsage?
    private var seededPausedMinutes: Int?
    private var seededNow: Date?

    /// The simulator has no Screen Time and no app tokens, so the frame stands in a parent who set it up.
    func seedForScreenshot(schedules: [KidHoursSchedule], apps: [String], alwaysAllowed: [String], neverAllowed: [String], usage: AppUsage, pausedMinutes: Int, now: Date) {
        authorizationWatch?.cancel()
        isAuthorized = true
        settings.schedules = schedules
        seededApps = apps
        seededAllowed = alwaysAllowed
        seededNever = neverAllowed
        seededUsage = usage
        seededPausedMinutes = pausedMinutes
        seededNow = now
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

    /// The shield's "Open Oyno" is a notification, so it needs this permission to do anything.
    /// Asked by the funnel, and again on every save for a phone that skipped it.
    func requestNotifications() async {
        let center = UNUserNotificationCenter.current()
        guard await center.notificationSettings().authorizationStatus == .notDetermined else { return }
        let granted = (try? await center.requestAuthorization(options: [.alert, .sound])) == true
        Analytics.shared.track(.notificationsAuthorized(granted: granted))
    }

    /// An app is on one list at most: picking it here takes it off Never allowed.
    func update(alwaysAllowed: FamilyActivitySelection) {
        var apps = FamilyActivitySelection()
        apps.applicationTokens = alwaysAllowed.applicationTokens
        settings.alwaysAllowed = apps
        settings.neverAllowed.applicationTokens.subtract(apps.applicationTokens)
        commit()
        trackLists()
    }

    /// An app is on one list at most: picking it here takes it off Always allowed.
    func update(neverAllowed: FamilyActivitySelection) {
        settings.neverAllowed = neverAllowed
        settings.alwaysAllowed.applicationTokens.subtract(neverAllowed.applicationTokens)
        commit()
        trackLists()
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
        if isAuthorized { Task { await requestNotifications() } }
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

    /// Banks what a round just played earns, when its schedule rewards rounds, for a minute.
    /// One at a time: a newer round replaces it.
    func earn(now: Date = .now) {
        guard let schedule = settings.schedule(at: now), schedule.unlocksAfterRound,
              let ends = schedule.end(on: now)
        else { return }
        let expiresAt = min(now.addingTimeInterval(KidHoursEarned.claimWindow), ends)
        settings.earned = KidHoursEarned(scheduleID: schedule.id, minutes: schedule.unlockMinutes, expiresAt: expiresAt)
        settings.save()
        earnedExpiry?.cancel()
        earnedExpiry = Task { [weak self] in
            try? await Task.sleep(for: .seconds(expiresAt.timeIntervalSinceNow))
            guard !Task.isCancelled else { return }
            self?.refresh()
        }
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
        let now = Date.now
        settings.unlock = nil
        settings.opened = settings.opened.map { $0.end > now ? DateInterval(start: min($0.start, now), end: now) : $0 }
        settings.save()
        center.stopMonitoring([.kidHoursUnlock])
        KidHoursShield.sync(settings)
        Analytics.shared.track(.kidHoursLockedEarly)
    }

    /// Drops what has run out, banks the days that ended and makes the shield match. The
    /// monitor relocks on its own; this repairs a boundary it missed, each time the app comes
    /// forward. Without Screen Time nothing was paused, so nothing is banked.
    func refresh(now: Date = .now) {
        if let unlock = settings.unlock, now >= unlock.endsAt { settings.unlock = nil }
        if let earned = settings.earned, !earned.isClaimable(at: now) { settings.earned = nil }
        if isAuthorized { settings.bankPausedMinutes(now: now) }
        settings.save()
        guard isAuthorized else { return }
        KidHoursShield.sync(settings, at: now)
    }

    /// Signing out opens every paused app, and no schedule pauses one until someone signs in.
    func release(now: Date = .now) {
        settings.signOut(at: now)
        settings.save()
        KidHoursShield.sync(settings, at: now)
    }

    func resume(now: Date = .now) {
        guard settings.signedOutAt != nil else { return }
        settings.signIn(at: now)
        refresh(now: now)
    }

    /// The relock is armed before the apps open: an unlock Screen Time will not end is refused,
    /// and the apps stay paused.
    private func unlock(_ reason: KidHoursUnlock.Reason, minutes: Int, now: Date) -> Bool {
        let wanted = now.addingTimeInterval(TimeInterval(minutes * 60))
        let unlock = KidHoursUnlock(reason: reason, startedAt: now, endsAt: max(wanted, liveUnlock?.endsAt ?? wanted))
        center.stopMonitoring([.kidHoursUnlock])
        settings.bankPausedMinutes(now: now)
        let logged = settings.opened
        settings.unlock = unlock
        settings.opened = logged + [DateInterval(start: now, end: unlock.endsAt)]
        settings.save()
        do {
            try center.startMonitoring(.kidHoursUnlock, during: DeviceActivitySchedule(
                intervalStart: Self.moment(unlock.monitoredStart),
                intervalEnd: Self.moment(unlock.endsAt),
                repeats: false
            ))
        } catch {
            settings.unlock = nil
            settings.opened = logged
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

    private func trackLists() {
        Analytics.shared.track(.kidHoursSaved(
            alwaysAllowed: settings.alwaysAllowed.count,
            neverAllowed: settings.neverAllowed.count
        ))
    }
}
