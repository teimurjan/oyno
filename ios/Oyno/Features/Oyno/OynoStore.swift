import Foundation
import Observation

/// The family's moments, the planet they grow, the keepsakes they leave and the firsts the
/// parent noticed: the only type that changes user data.
///
/// Reads are free and writes are gated. Opening the app, the planet and the worlds costs
/// nothing; recording a round needs a live entitlement, decided by `requireEntitlement()`.
/// `refusedActions` is a counter rather than a flag, so a second refusal fires `onChange` in
/// `AppRoot` again and the paywall comes back.
///
/// Kept on the device, in Application Support, keyed to the account that wrote it. The totals,
/// the rounds and the firsts are backed up to the account, so a reinstall keeps the planet and
/// the letters. The parent's own words, in a first or under a letter, stay on the phone.
@MainActor
@Observable
final class OynoStore {
    private(set) var rounds: [Round] = []
    private(set) var firsts: [First] = []
    /// The parent's own line under a week's letter.
    private(set) var letterLines: [LetterLine] = []
    private(set) var refusedActions = 0
    /// Rounds this account played that are not on this phone, counted by the totals of builds
    /// from before the rounds themselves were backed up.
    private(set) var carried = Tally.zero

    var tally: Tally { carried + local }
    var points: Int { tally.points }
    var level: Int { Bloom.level(at: points) }
    var world: World { Bloom.currentWorld(at: points) }
    var minutesToday: Int { rounds.minutes(on: .now) }
    var keepsakesFound: Set<String> { tally.keepsakes }

    /// What one of this family's moments is usually worth, for "2 moments to Lagoon".
    var pointsPerMoment: Int {
        rounds.isEmpty ? Bloom.typicalMoment : Bloom.points(rounds: rounds.count, minutes: rounds.totalMinutes) / rounds.count
    }

    /// The keepsakes in the order they were found, the newest last. Ones restored from the
    /// backup have no round on this phone and come first.
    var keepsakesInOrder: [Keepsake] {
        let local = rounds.compactMap(\.keepsakeID)
        let restored = keepsakesFound.subtracting(local).sorted()
        return (restored + local).compactMap(Keepsake.find)
    }

    /// Whether the parent already said what was new today, so nobody is asked twice.
    func notedFirst(on date: Date, calendar: Calendar = .current) -> Bool {
        firsts.contains { calendar.isDate($0.date, inSameDayAs: date) } || answeredNothingNew.contains(calendar.startOfDay(for: date))
    }

    /// Skill by skill, for the rounds since `start`, or all of them.
    func practice(since start: Date?) -> [Practice] {
        let counted = start.map { start in rounds.filter { $0.startedAt >= start } } ?? rounds
        return Practice.bySkill(counted) { round in
            round.skills.isEmpty ? (round.activityID.flatMap(Activity.find)?.skills.map(\.id) ?? []) : round.skills
        }
    }

    func letter(for week: Week, goal: Int) -> WeekLetter? {
        WeekLetter.compose(week: week, rounds: rounds, firsts: firsts, goal: goal)
    }

    func letterLine(for week: Week) -> String? { letterLines.first { $0.weekStart == week.start }?.text }

    /// What this phone counted: its rounds, and the paused minutes Kid hours banked.
    private var local: Tally {
        var local = rounds.tally
        local.together = bankedTogether()
        return local
    }

    @ObservationIgnored private let isEntitled: () -> Bool
    @ObservationIgnored private let bankedTogether: @MainActor () -> Int
    @ObservationIgnored private let backup: @MainActor @Sendable (Backup) async -> Backup?
    @ObservationIgnored private let fileURL: URL
    @ObservationIgnored private var ownerID: String?
    /// Days the parent tapped "Nothing new today": asked once, never kept beyond the session.
    @ObservationIgnored private var answeredNothingNew: Set<Date> = []

    init(
        isEntitled: @escaping () -> Bool,
        bankedTogether: @escaping @MainActor () -> Int = { 0 },
        backup: @escaping @MainActor @Sendable (Backup) async -> Backup? = { _ in nil },
        fileURL: URL = URL.applicationSupportDirectory.appending(path: "oyno-rounds.json")
    ) {
        self.isEntitled = isEntitled
        self.bankedTogether = bankedTogether
        self.backup = backup
        self.fileURL = fileURL
    }

    /// Asks whether a write may happen, and counts the refusal when it may not.
    func requireEntitlement() -> Bool {
        if isEntitled() { return true }
        refusedActions += 1
        return false
    }

    /// Records a finished moment and what it left on the planet, and returns it. Nil when it was
    /// refused for want of an entitlement.
    @discardableResult
    func record(_ round: Round, roll: () -> Double = { .random(in: 0..<1) }) -> Round? {
        guard requireEntitlement() else { return nil }
        var round = round
        round.keepsakeID = Keepsake.award(for: round.kind, found: keepsakesFound, roll: roll)?.id
        rounds.append(round)
        save()
        Task { await syncBackup() }
        Analytics.shared.track(.roundCompleted(kind: round.kind, activity: round.activityID, minutes: round.minutes))
        if let keepsake = round.keepsakeID.flatMap(Keepsake.find) {
            Analytics.shared.track(.keepsakeFound(id: keepsake.id, rare: keepsake.isRare))
        }
        return round
    }

    /// Writes down something new the parent saw. False when refused.
    @discardableResult
    func note(_ first: First) -> Bool {
        guard requireEntitlement() else { return false }
        firsts.append(first)
        save()
        Task { await syncBackup() }
        Analytics.shared.track(.firstNoted(kind: first.kind, signs: first.signs.count, wroteWords: first.words != nil))
        return true
    }

    /// "Nothing new today": the question is not asked again today.
    func answerNothingNew(on date: Date = .now) {
        answeredNothingNew.insert(Calendar.current.startOfDay(for: date))
    }

    /// The parent's own line under a week's letter, replacing any before. False when refused.
    @discardableResult
    func setLetterLine(_ text: String, for week: Week) -> Bool {
        guard requireEntitlement() else { return false }
        letterLines.removeAll { $0.weekStart == week.start }
        let trimmed = text.trimmingCharacters(in: .whitespacesAndNewlines)
        if !trimmed.isEmpty { letterLines.append(LetterLine(weekStart: week.start, text: trimmed)) }
        save()
        return true
    }

    func load() {
        guard let data = try? Data(contentsOf: fileURL),
              let stored = try? JSONCoding.decoder.decode(Stored.self, from: data)
        else { return }
        ownerID = stored.ownerID
        rounds = stored.rounds
        firsts = stored.firsts ?? []
        letterLines = stored.letterLines ?? []
        carried = stored.carried ?? .zero
        mirrorForShield()
    }

    /// Claims the rounds on this phone for `userID`. Rounds written by another account are
    /// dropped: a family that signs in on a shared phone must not inherit someone else's planet.
    func adopt(userID: String) {
        if let ownerID, ownerID != userID {
            rounds = []
            firsts = []
            letterLines = []
            carried = .zero
        }
        ownerID = userID
        save()
    }

    /// Sends this phone's backup to the account and takes back what it grew elsewhere.
    func syncBackup() async {
        guard let owner = ownerID,
              let merged = await backup(Backup(tally: tally, rounds: rounds, firsts: firsts)),
              owner == ownerID
        else { return }
        restore(merged)
    }

    /// The rounds and firsts this phone lacks join it. Whatever the totals count beyond the phone
    /// becomes `carried`, less the rounds that just arrived, which it may already count. The
    /// planet never shrinks, so a reply that left before the latest round changes nothing.
    func restore(_ backedUp: Backup) {
        let roundIDs = Set(rounds.map(\.id))
        let arrived = backedUp.rounds.filter { !roundIDs.contains($0.id) }
        let firstIDs = Set(firsts.map(\.id))
        let noted = backedUp.firsts.filter { !firstIDs.contains($0.id) }
        let nextCarried = carried.union(backedUp.tally.excess(over: local)).excess(over: arrived.tally)
        guard !arrived.isEmpty || !noted.isEmpty || nextCarried != carried else { return }
        rounds = (rounds + arrived).sorted { $0.startedAt < $1.startedAt }
        firsts = (firsts + noted).sorted { $0.date < $1.date }
        carried = nextCarried
        save()
    }

    /// Account deletion and sign-out of a different account both start clean.
    func reset() {
        rounds = []
        firsts = []
        letterLines = []
        carried = .zero
        ownerID = nil
        try? FileManager.default.removeItem(at: fileURL)
        mirrorForShield()
    }

    #if DEBUG
    /// Screenshot harness only.
    func seedForScreenshot(_ seeded: [Round], firsts seededFirsts: [First] = []) {
        rounds = seeded
        firsts = seededFirsts
    }
    #endif

    private func save() {
        let stored = Stored(ownerID: ownerID, rounds: rounds, firsts: firsts, letterLines: letterLines, carried: carried)
        guard let data = try? JSONCoding.encoder.encode(stored) else { return }
        try? FileManager.default.createDirectory(
            at: fileURL.deletingLastPathComponent(),
            withIntermediateDirectories: true
        )
        try? data.write(to: fileURL, options: .atomic)
        mirrorForShield()
    }

    /// The paused-app screen runs outside the app and can only read the App Group.
    private func mirrorForShield() {
        var stats = ShieldStats.load()
        guard stats.rounds != tally.rounds else { return }
        stats.rounds = tally.rounds
        stats.save()
    }

    private struct Stored: Codable {
        let ownerID: String?
        let rounds: [Round]
        /// Absent in files written before they were kept.
        let firsts: [First]?
        let letterLines: [LetterLine]?
        /// Absent in files written before the backup.
        let carried: Tally?
    }
}

/// The parent's own words under one week's letter.
struct LetterLine: Codable, Hashable {
    let weekStart: Date
    let text: String
}
