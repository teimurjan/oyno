import Foundation
import Observation

/// The family's rounds and the planet they grow: the only type that changes user data.
///
/// Reads are free and writes are gated. Opening the app, the planet and the worlds costs
/// nothing; recording a round needs a live entitlement, decided by `requireEntitlement()`.
/// `refusedActions` is a counter rather than a flag, so a second refusal fires `onChange` in
/// `AppRoot` again and the paywall comes back.
///
/// Kept on the device, in Application Support, keyed to the account that wrote it.
@MainActor
@Observable
final class OynoStore {
    private(set) var rounds: [Round] = []
    private(set) var refusedActions = 0

    /// One round together is one bloom.
    var bloom: Int { rounds.count }
    var world: World { Bloom.currentWorld(at: bloom) }
    var minutesToday: Int { rounds.minutes(on: .now) }

    @ObservationIgnored private let isEntitled: () -> Bool
    @ObservationIgnored private let fileURL: URL
    @ObservationIgnored private var ownerID: String?

    init(
        isEntitled: @escaping () -> Bool,
        fileURL: URL = URL.applicationSupportDirectory.appending(path: "oyno-rounds.json")
    ) {
        self.isEntitled = isEntitled
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
        Analytics.shared.track(.roundCompleted(activity: round.activityID, minutes: round.minutes))
        return true
    }

    func load() {
        guard let data = try? Data(contentsOf: fileURL),
              let stored = try? JSONCoding.decoder.decode(Stored.self, from: data)
        else { return }
        ownerID = stored.ownerID
        rounds = stored.rounds
    }

    /// Claims the rounds on this phone for `userID`. Rounds written by another account are
    /// dropped: a family that signs in on a shared phone must not inherit someone else's planet.
    func adopt(userID: String) {
        if let ownerID, ownerID != userID { rounds = [] }
        ownerID = userID
        save()
    }

    /// Account deletion and sign-out of a different account both start clean.
    func reset() {
        rounds = []
        ownerID = nil
        try? FileManager.default.removeItem(at: fileURL)
    }

    #if DEBUG
    /// Screenshot harness only.
    func seedForScreenshot(_ seeded: [Round]) { rounds = seeded }
    #endif

    private func save() {
        guard let data = try? JSONCoding.encoder.encode(Stored(ownerID: ownerID, rounds: rounds)) else { return }
        try? FileManager.default.createDirectory(
            at: fileURL.deletingLastPathComponent(),
            withIntermediateDirectories: true
        )
        try? data.write(to: fileURL, options: .atomic)
    }

    private struct Stored: Codable {
        let ownerID: String?
        let rounds: [Round]
    }
}
