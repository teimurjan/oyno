import StoreKit
import SwiftUI

/// The account: who is signed in, the subscription and how to manage it, and the ways out.
struct ProfileScreen: View {
    @Environment(OynoStore.self) private var oyno
    @Environment(AuthStore.self) private var auth
    @Environment(PurchaseStore.self) private var purchases
    @Environment(\.dismiss) private var dismiss
    @Environment(\.openURL) private var openURL

    @State private var showDeleteConfirm = false
    @State private var isDeleting = false
    /// Shown rather than swallowed: somebody who asked to be erased and was not has to be told.
    @State private var deleteError: DisplayMessage?
    @State private var manageError = false
    @State private var showsManageSheet = false
    @State private var paywall: PaywallContext?
    @AppStorage(InterfaceLanguage.overrideKey) private var language = "en"

    var body: some View {
        SheetScreen(title: "Profile", subtitle: auth.currentUser?.email ?? "") {
            PlanBanner {
                if purchases.isPaid { manage() } else { paywall = .settings }
            }
            RowCard(raised: true) { languageMenu }
            RowCard(raised: true) {
                row(String(interface: "Restore purchases"), busy: purchases.isRestoring) {
                    Task { await purchases.restore() }
                }
                RowDivider(inset: 0)
                row(String(interface: "Sign out")) {
                    Analytics.shared.track(.signedOut)
                    oyno.reset()
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
            if !purchases.didLoadProducts { await purchases.loadProducts() }
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
                auth.signOut()
                dismiss()
            }
            isDeleting = false
        }
    }
}
