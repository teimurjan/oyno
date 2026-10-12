import ManagedSettings

/// Answers the paused-app screen's buttons: "Open Oyno" brings the app forward, "Dismiss"
/// closes the screen.
final class OynoShieldAction: ShieldActionDelegate {
    override func handle(action: ShieldAction, for application: ApplicationToken, completionHandler: @escaping (ShieldActionResponse) -> Void) {
        respond(to: action, completionHandler)
    }

    override func handle(action: ShieldAction, for webDomain: WebDomainToken, completionHandler: @escaping (ShieldActionResponse) -> Void) {
        respond(to: action, completionHandler)
    }

    override func handle(action: ShieldAction, for category: ActivityCategoryToken, completionHandler: @escaping (ShieldActionResponse) -> Void) {
        respond(to: action, completionHandler)
    }

    private func respond(to action: ShieldAction, _ completionHandler: @escaping (ShieldActionResponse) -> Void) {
        guard action == .primaryButtonPressed else {
            completionHandler(.close)
            return
        }
        // `.close` sends the foreground app home, and by then that app is Oyno.
        if ParentApp.open() {
            completionHandler(.none)
            return
        }
        Task {
            await ParentApp.notify()
            completionHandler(.close)
        }
    }
}
