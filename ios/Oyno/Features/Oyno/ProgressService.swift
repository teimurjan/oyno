import Foundation

/// The planet's backup on our backend: three totals per account, never the rounds themselves.
struct ProgressService: Sendable {
    var client = HTTPClient()
    var baseURL: URL = AppConfig.apiBaseURL
    let accessToken: AccessTokenProvider

    /// Sends this phone's totals and returns the account's, the larger of each. Nil when the
    /// call failed: a backup is best-effort, and the next round or launch tries again.
    func merge(_ tally: Tally) async -> Tally? {
        guard let token = await accessToken() else { return nil }
        return try? await client.post(baseURL.appendingPathComponent("api/progress"),
                                      body: tally,
                                      headers: BackendAuth.headers(token: token),
                                      as: Tally.self)
    }
}
