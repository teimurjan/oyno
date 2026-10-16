import ManagedSettings

/// Answers the paused-app screen's buttons: "Open Oyno" opens the app on Play, "Dismiss"
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
        if #available(iOS 26.5, *) {
            ShieldRoute.requestPlay()
            completionHandler(.openParentalControlsApp)
            return
        }
        Task {
            await ParentApp.notify()
            completionHandler(.close)
        }
    }
}
