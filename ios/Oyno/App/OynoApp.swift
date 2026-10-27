import GoogleSignIn
import SwiftUI
import UserNotifications

@main
struct OynoApp: App {
    @UIApplicationDelegateAdaptor(OrientationLock.self) private var orientationLock

    init() {
        Typeface.register()
        #if DEBUG
        Typeface.assertFontsResolve()
        #endif
        InterfaceLanguage.adoptLaunchLocalization()
        // Before launch finishes, so a tap that cold-launched the app is not missed.
        UNUserNotificationCenter.current().delegate = NotificationRouter.shared
    }

    var body: some Scene {
        WindowGroup {
            root
                .onOpenURL { GIDSignIn.sharedInstance.handle($0) }
                // Re-establishes the Google SDK's own keychain state for a later
                // interactive sign-in. It must never gate anything: the Supabase
                // session is restored synchronously in `AuthStore.init`.
                .task { _ = try? await GIDSignIn.sharedInstance.restorePreviousSignIn() }
        }
    }

    @ViewBuilder private var root: some View {
        #if DEBUG
        if let screen = ScreenshotHarness.requestedScreen {
            ScreenshotHarness(screen: screen)
        } else {
            AppRoot()
        }
        #else
        AppRoot()
        #endif
    }
}
