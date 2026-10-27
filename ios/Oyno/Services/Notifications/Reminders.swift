import Foundation
import UserNotifications

/// Puts the reminder plan on the lock screen. Planned again whenever the app opens or leaves,
/// and after a round, so a reminder never speaks of a state the family already moved past.
@MainActor
enum Reminders {
    /// Profile's two switches, both on unless turned off.
    static let remindersKey = "oyno.reminders"
    static let kidHoursKey = "oyno.kidHoursNotices"
    private static let ledgerKey = "oyno.reminderLedger"
    private static let ownPrefixes = ["reminder.", "kidhours."]
    /// iOS keeps 64 pending. The rest is room for the round's chime and the trial reminder.
    private static let weeklyLimit = 44

    private static var running: Task<Void, Never>?

    /// One plan at a time, the newest state last.
    static func replan(oyno: OynoStore, kidHours: KidHoursStore, dealer: Dealer) {
        let state = snapshot(oyno: oyno, kidHours: kidHours, dealer: dealer)
        let previous = running
        running = Task {
            await previous?.value
            await schedule(state)
        }
    }

    /// Sign-out: nothing of one account reminds the next.
    static func clear() {
        let previous = running
        running = Task {
            await previous?.value
            UserDefaults.standard.removeObject(forKey: ledgerKey)
            await removeOwn(from: .current())
        }
    }

    private static func schedule(_ state: ReminderState) async {
        let center = UNUserNotificationCenter.current()
        let status = await center.notificationSettings().authorizationStatus
        var ledger = loadLedger().settled(at: state.now)
        if ledger.firstSeen == nil { ledger.firstSeen = state.now }
        let allowed = [.authorized, .provisional, .ephemeral].contains(status)
        let plan = allowed
            ? ReminderPlan.make(state: state, ledger: ledger, catalogue: .bundled, language: InterfaceLanguage.current)
            : ReminderPlan.Plan()
        ledger.pending = plan.dated
        saveLedger(ledger)

        await removeOwn(from: center)
        for reminder in plan.dated {
            let parts = Calendar.current.dateComponents([.year, .month, .day, .hour, .minute], from: reminder.date)
            let trigger = UNCalendarNotificationTrigger(dateMatching: parts, repeats: false)
            let identifier = "reminder.\(reminder.id.rawValue).\(Int(reminder.date.timeIntervalSince1970))"
            try? await center.add(request(identifier, reminder.id, reminder.title, reminder.body, reminder.tap, trigger))
        }
        for reminder in plan.weekly.prefix(weeklyLimit) {
            let parts = DateComponents(hour: reminder.minute / 60, minute: reminder.minute % 60, weekday: reminder.weekday)
            let trigger = UNCalendarNotificationTrigger(dateMatching: parts, repeats: true)
            try? await center.add(request(reminder.identifier, reminder.id, reminder.title, reminder.body, reminder.tap, trigger))
        }
    }

    private static func request(
        _ identifier: String,
        _ id: ReminderID,
        _ title: String,
        _ body: String,
        _ tap: ReminderCatalogue.Tap,
        _ trigger: UNNotificationTrigger
    ) -> UNNotificationRequest {
        let content = UNMutableNotificationContent()
        content.title = title
        content.body = body
        content.sound = .default
        content.threadIdentifier = id.rawValue
        content.userInfo = [NotificationRouter.reminderKey: id.rawValue, NotificationRouter.tapKey: tap.rawValue]
        return UNNotificationRequest(identifier: identifier, content: content, trigger: trigger)
    }

    private static func removeOwn(from center: UNUserNotificationCenter) async {
        let own = await center.pendingNotificationRequests()
            .map(\.identifier)
            .filter { identifier in ownPrefixes.contains { identifier.hasPrefix($0) } }
        center.removePendingNotificationRequests(withIdentifiers: own)
    }

    /// Everything the reminders may speak of, in the interface language, read now.
    private static func snapshot(oyno: OynoStore, kidHours: KidHoursStore, dealer: Dealer) -> ReminderState {
        let defaults = UserDefaults.standard
        let age = defaults.string(forKey: "oyno.age").flatMap(AgeBand.init) ?? .toddler
        let energy = defaults.string(forKey: "oyno.energy").flatMap(Energy.init) ?? .low
        dealer.dealIfStale(energy: energy, age: age)
        let monthStart = Calendar.current.dateInterval(of: .month, for: .now)?.start
        let practice = oyno.practice(since: monthStart).first { $0.minutes > 0 }.flatMap { top in
            Activity.skill(top.skill).map { skill in
                ReminderState.Practice(
                    skill: top.skill, label: skill.label, minutes: top.minutes,
                    game: Activity.pick(practicing: top.skill, energy: energy, age: age).title
                )
            }
        }
        let found = oyno.keepsakesFound
        let untried = MomentKind.allCases.filter { kind in
            let leavesOne = !Keepsake.all.contains { $0.kind == Keepsake.Kind(kind) && found.contains($0.id) }
            return leavesOne && (kind == .game || OpenMoment.find(kind, age: age) != nil)
        }
        return ReminderState(
            now: .now,
            rounds: oyno.rounds,
            roundsEver: oyno.tally.rounds,
            points: oyno.points,
            pointsPerMoment: oyno.pointsPerMoment,
            weekGoal: defaults.object(forKey: "oyno.weekGoal") as? Int ?? Week.defaultGoal,
            kidName: defaults.string(forKey: "oyno.kidName")?.trimmingCharacters(in: .whitespaces) ?? "",
            game: dealer.game.title,
            gameSkill: dealer.game.skills.first?.label ?? "",
            lowEnergyGame: Activity.pick(for: .low, age: age).title,
            practice: practice,
            untriedMoments: untried.map(\.label),
            keepsakesLeft: Keepsake.all.filter { !found.contains($0.id) }.count,
            schedules: kidHours.settings.schedules,
            remindersOn: defaults.object(forKey: remindersKey) as? Bool ?? true,
            kidHoursOn: defaults.object(forKey: kidHoursKey) as? Bool ?? true
        )
    }

    private static func loadLedger() -> ReminderLedger {
        UserDefaults.standard.data(forKey: ledgerKey).flatMap { try? JSONCoding.decoder.decode(ReminderLedger.self, from: $0) }
            ?? ReminderLedger()
    }

    private static func saveLedger(_ ledger: ReminderLedger) {
        guard let data = try? JSONCoding.encoder.encode(ledger) else { return }
        UserDefaults.standard.set(data, forKey: ledgerKey)
    }
}
