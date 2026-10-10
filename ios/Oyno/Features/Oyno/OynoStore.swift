import Foundation
import Observation

/// The family's rounds and the planet they grow: the only type that changes user data.
///
/// Reads are free and writes are gated. Opening the app, the planet and the worlds costs
/// nothing; recording a round needs a live entitlement, decided by `requireEntitlement()`.
/// `refusedActions` is a counter rather than a flag, so a second refusal fires `onChange` in
/// `AppRoot` again and the paywall comes back.
///
/// Kept on the device, in Application Support, keyed to the account that wrote it. Only the
/// totals are backed up to the account, so a reinstall keeps the planet but not the rounds.
@MainActor
@Observable
final class OynoStore {
    private(set) var rounds: [Round] = []
    private(set) var refusedActions = 0
    /// Rounds this account played that are not on this phone, restored from the backup.
    private(set) var carried = Tally.zero

    var tally: Tally { carried + rounds.tally }
    /// One round together is one bloom.
    var bloom: Int { tally.rounds }
    var world: World { Bloom.currentWorld(at: bloom) }
    var minutesToday: Int { rounds.minutes(on: .now) }

    @ObservationIgnored private let isEntitled: () -> Bool
    @ObservationIgnored private let backup: @MainActor @Sendable (Tally) async -> Tally?
    @ObservationIgnored private let fileURL: URL
    @ObservationIgnored private var ownerID: String?

    init(
        isEntitled: @escaping () -> Bool,
        backup: @escaping @MainActor @Sendable (Tally) async -> Tally? = { _ in nil },
        fileURL: URL = URL.applicationSupportDirectory.appending(path: "oyno-rounds.json")
    ) {
        self.isEntitled = isEntitled
        self.backup = backup
        self.fileURL = fileURL
    }

    /// Asks whether a write may happen, and counts the refusal when it may not.
    func requireEntitlement() -> Bool {
        if isEntitled() { return true }
        refusedActions += 1
        return false
    }

    /// Records a finished round. False when it was refused for want of an entitlement.
    @discardableResult
    func record(_ round: Round) -> Bool {
        guard requireEntitlement() else { return false }
        rounds.append(round)
        save()
        Task { await syncBackup() }
        Analytics.shared.track(.roundCompleted(activity: round.activityID, minutes: round.minutes))
        return true
    }

    func load() {
        guard let data = try? Data(contentsOf: fileURL),
              let stored = try? JSONCoding.decoder.decode(Stored.self, from: data)
        else { return }
        ownerID = stored.ownerID
        rounds = stored.rounds
        carried = stored.carried ?? .zero
    }

    /// Claims the rounds on this phone for `userID`. Rounds written by another account are
    /// dropped: a family that signs in on a shared phone must not inherit someone else's planet.
    func adopt(userID: String) {
        if let ownerID, ownerID != userID {
            rounds = []
            carried = .zero
        }
        ownerID = userID
        save()
    }

    /// Sends this phone's totals to the account and takes back what it grew elsewhere.
    func syncBackup() async {
        guard let owner = ownerID, let merged = await backup(tally), owner == ownerID else { return }
        restore(merged)
    }

    /// Whatever the backup counts beyond the rounds on this phone becomes `carried`. Never
    /// lowers it, so a reply that left before the latest round cannot shrink the planet.
    func restore(_ backedUp: Tally) {
        let next = carried.union(backedUp.excess(over: rounds.tally))
        guard next != carried else { return }
        carried = next
        save()
    }

    /// Account deletion and sign-out of a different account both start clean.
    func reset() {
        rounds = []
        carried = .zero
        ownerID = nil
        try? FileManager.default.removeItem(at: fileURL)
    }

    #if DEBUG
    /// Screenshot harness only.
    func seedForScreenshot(_ seeded: [Round]) { rounds = seeded }
    #endif

    private func save() {
        guard let data = try? JSONCoding.encoder.encode(Stored(ownerID: ownerID, rounds: rounds, carried: carried)) else { return }
        try? FileManager.default.createDirectory(
            at: fileURL.deletingLastPathComponent(),
            withIntermediateDirectories: true
        )
        try? data.write(to: fileURL, options: .atomic)
    }

    private struct Stored: Codable {
        let ownerID: String?
        let rounds: [Round]
        /// Absent in files written before the backup.
        let carried: Tally?
    }
}
