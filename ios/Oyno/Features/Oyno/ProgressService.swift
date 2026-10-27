import Foundation

/// The planet's backup on our backend: the totals, keepsakes, rounds and firsts per account.
struct ProgressService: Sendable {
    var client = HTTPClient()
    var baseURL: URL = AppConfig.apiBaseURL
    let accessToken: AccessTokenProvider

    /// Sends this phone's backup and returns the account's: the larger of each total and every
    /// round and first. Nil when the call failed: a backup is best-effort, and the next round
    /// or launch tries again.
    func merge(_ backup: Backup) async -> Backup? {
        guard let token = await accessToken() else { return nil }
        return try? await client.post(baseURL.appendingPathComponent("api/progress"),
                                      body: backup,
                                      headers: BackendAuth.headers(token: token),
                                      as: Backup.self)
    }
}
