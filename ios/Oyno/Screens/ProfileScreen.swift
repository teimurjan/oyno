import StoreKit
import SwiftUI
import UserNotifications

/// The account: who is signed in, the subscription and how to manage it, the kid's name the
/// app calls them by, the reminders, and the ways out.
struct ProfileScreen: View {
    @Environment(OynoStore.self) private var oyno
    @Environment(AuthStore.self) private var auth
    @Environment(PurchaseStore.self) private var purchases
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(Dealer.self) private var dealer
    @Environment(\.scenePhase) private var scenePhase
    @Environment(\.dismiss) private var dismiss
    @Environment(\.openURL) private var openURL

    @State private var showDeleteConfirm = false
    @State private var isDeleting = false
    /// Shown rather than swallowed: somebody who asked to be erased and was not has to be told.
    @State private var deleteError: DisplayMessage?
    @State private var manageError = false
    @State private var showsManageSheet = false
    @State private var paywall: PaywallContext?
    @AppStorage(InterfaceLanguage.overrideKey, store: InterfaceLanguage.store) private var language = "en"
    /// Only ever on this phone, and never in analytics.
    @AppStorage("oyno.kidName") private var kidName = ""
    @AppStorage(Reminders.remindersKey) private var remindersOn = true
    @AppStorage(Reminders.kidHoursKey) private var kidHoursNoticesOn = true
    @State private var notifications = UNAuthorizationStatus.notDetermined

    var body: some View {
        SheetScreen(title: "Profile", subtitle: auth.currentUser?.email ?? "") {
            PlanBanner {
                if purchases.isPaid { manage() } else { paywall = .settings }
            }
            RowCard(raised: true) {
                TextFieldRow(label: "Kid's name", text: $kidName, prompt: "Optional")
                    .textContentType(.givenName)
                    .submitLabel(.done)
            }
            RowCard(raised: true) { languageMenu }
            RowCard(raised: true) {
                reminderToggle(
                    "Reminders", caption: "At most one a day: a game for tonight, your letter, a new world.",
                    isOn: $remindersOn, field: "reminders"
                )
                RowDivider(inset: 0)
                reminderToggle(
                    "Kid hours start and end", caption: "A note when your apps pause and when they come back.",
                    isOn: $kidHoursNoticesOn, field: "kid_hours_notices"
                )
                if notifications == .denied && (remindersOn || kidHoursNoticesOn) {
                    RowDivider(inset: 0)
                    row(String(interface: "Notifications are off. Turn them on in Settings")) {
                        if let url = URL(string: UIApplication.openNotificationSettingsURLString) { openURL(url) }
                    }
                }
            }
            RowCard(raised: true) {
                row(String(interface: "Restore purchases"), busy: purchases.isRestoring) {
                    Task { await purchases.restore() }
                }
                RowDivider(inset: 0)
                row(String(interface: "Sign out")) {
                    Analytics.shared.track(.signedOut)
                    oyno.reset()
                    kidName = ""
                    auth.signOut()
                    dismiss()
                }
                RowDivider(inset: 0)
                // Guideline 5.1.1(v): an app that makes you sign in has to let you erase the account.
                Button(role: .destructive) { showDeleteConfirm = true } label: {
                    HStack {
                        Text("Delete account")
                            .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                            .foregroundStyle(Palette.alert)
                        Spacer()
                        if isDeleting { ProgressView() }
                    }
                    .padding(Metric.cardPadding)
                    .contentShape(.rect)
                }
                .buttonStyle(.plain)
                .disabled(isDeleting)
                .confirmationDialog("Delete your account?", isPresented: $showDeleteConfirm, titleVisibility: .visible) {
                    Button("Delete everything", role: .destructive) { deleteAccount() }
                } message: {
                    Text("Your rounds and your planet go with it. This cannot be undone. An active subscription keeps running until you cancel it.")
                }
            }

            if let deleteError {
                Text(deleteError)
                    .font(Typeface.ui(13, .regular, relativeTo: .footnote))
                    .foregroundStyle(Palette.alert)
            }
            if manageError {
                Text("The subscription page didn't open. Try again, or use the link in your receipt email.")
                    .font(Typeface.ui(13, .regular, relativeTo: .footnote))
                    .foregroundStyle(Palette.alert)
            }
        }
        .manageSubscriptionsSheet(isPresented: $showsManageSheet, subscriptionGroupID: purchases.subscriptionGroupID ?? "")
        .fullScreenCover(item: $paywall) { PaywallScreen(context: $0) }
        .task {
            notifications = await UNUserNotificationCenter.current().notificationSettings().authorizationStatus
            if !purchases.didLoadProducts { await purchases.loadProducts() }
        }
        .onChange(of: scenePhase) { _, phase in
            guard phase == .active else { return }
            Task { notifications = await UNUserNotificationCenter.current().notificationSettings().authorizationStatus }
        }
    }

    /// A web subscription is managed in Dodo's portal; an App Store one in StoreKit's sheet.
    private func manage() {
        manageError = false
        guard purchases.provider == "dodo" else {
            showsManageSheet = true
            return
        }
        Task {
            if let url = await purchases.webPortalURL() {
                openURL(url)
            } else {
                manageError = true
            }
        }
    }

    /// Each language is named in itself, so somebody stuck in one they cannot read still finds theirs.
    private var languageMenu: some View {
        Menu {
            Picker("Language", selection: Binding(get: { language }, set: InterfaceLanguage.select)) {
                ForEach(InterfaceLanguage.supported, id: \.self) { tag in
                    Text(verbatim: InterfaceLanguage.displayName(tag)).tag(tag)
                }
            }
        } label: {
            HStack {
                Text("Language").oynoRowTitle()
                Spacer()
                Text(verbatim: InterfaceLanguage.displayName(language)).oynoCaption()
                Glyph.caret(Palette.muted)
            }
            .padding(Metric.cardPadding)
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }

    /// Turning one on asks for permission the first time; either way the plan follows at once.
    private func reminderToggle(_ title: LocalizedStringResource, caption: LocalizedStringResource, isOn: Binding<Bool>, field: String) -> some View {
        Toggle(isOn: isOn) {
            VStack(alignment: .leading, spacing: 2) {
                Text(title).oynoRowTitle()
                Text(caption).oynoCaption()
            }
        }
        .toggleStyle(.pill)
        .padding(Metric.cardPadding)
        .onChange(of: isOn.wrappedValue) { _, on in
            Analytics.shared.track(.settingsChanged(field: field))
            Task {
                if on { await kidHours.requestNotifications() }
                notifications = await UNUserNotificationCenter.current().notificationSettings().authorizationStatus
                Reminders.replan(oyno: oyno, kidHours: kidHours, dealer: dealer)
            }
        }
    }

    private func row(_ title: String, busy: Bool = false, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack {
                Text(verbatim: title).oynoRowTitle()
                Spacer()
                if busy { ProgressView() }
            }
            .padding(Metric.cardPadding)
            .contentShape(.rect)
        }
        .buttonStyle(.plain)
    }

    /// The local wipe happens only after the server confirms, so a failed call never leaves
    /// somebody signed out of an account that still exists.
    private func deleteAccount() {
        isDeleting = true
        deleteError = nil
        Task {
            let service = AccountService(accessToken: { await auth.accessToken() })
            if let failure = await service.delete() {
                deleteError = failure
            } else {
                Analytics.shared.track(.accountDeleted)
                oyno.reset()
                kidName = ""
                auth.signOut()
                dismiss()
            }
            isDeleting = false
        }
    }
}
