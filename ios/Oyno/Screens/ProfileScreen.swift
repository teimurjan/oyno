import SwiftUI

/// The account, the machines that wear out, and the way into the shop's economics.
///
/// The account leads because it is what somebody opening this screen came for — the email
/// they signed up with, whether the subscription is live, and the two buttons that fix it
/// when it is not. Underneath it sit the two lists that are facts about the shop rather
/// than about any one job: the printers and the things they consume. The seven rates that
/// multiply through every quote are one tap further down, on `QuoteSettingsScreen`, because
/// they are read once a quarter and the account is read on the day something goes wrong.
struct ProfileScreen: View {
    @Environment(ShopStore.self) private var shop
    @Environment(AuthStore.self) private var auth
    @Environment(PurchaseStore.self) private var purchases
    @Environment(\.dismiss) private var dismiss

    /// Watched rather than read once: `InterfaceLanguage.select` writes this key, and the
    /// row that shows the current language has to redraw when it does.
    @AppStorage(InterfaceLanguage.overrideKey) private var language = "en"

    @State private var showDeleteConfirm = false
    @State private var isDeleting = false
    /// The reason the delete did not happen, if it did not. Shown rather than swallowed:
    /// somebody who asked to be erased and was not has to be told.
    @State private var deleteError: DisplayMessage?

    /// The four editors, presented exactly as the filament list presents its own — an
    /// `item:` sheet to correct a record and an `isPresented:` one to add a new one. Every
    /// form in the app is a sheet with an inline title and Cancel; a printer pushed onto
    /// the stack instead was the one that disagreed.
    @State private var editingPrinter: Printer?
    @State private var addingPrinter = false
    @State private var editingConsumable: Consumable?
    @State private var addingConsumable = false

    /// Raised by the subscription row, and only ever by it: everywhere else in the app the
    /// wall goes up because something was refused, which `AppRoot` watches for.
    @State private var paywall: PaywallContext?

    var body: some View {
        Screen {
            // The way out. `Screen` hides the navigation bar so each screen can draw its
            // own title, which takes the system's back button with it — and this screen
            // is pushed from Home, so without this it was a room with the door painted
            // over.
            ScreenHeader(title: "Profile", subtitle: syncLine, onBack: { dismiss() })

            accountSection
            localization
            printersSection
            consumablesSection
            quoteSettingsLink
        }
        .sheet(item: $editingPrinter) { PrinterEditor(printer: $0) }
        .sheet(isPresented: $addingPrinter) { PrinterEditor(printer: Printer()) }
        .sheet(item: $editingConsumable) { ConsumableEditor(consumable: $0) }
        .sheet(isPresented: $addingConsumable) { ConsumableEditor(consumable: Consumable()) }
        // A page rather than a sheet, like every other showing of it — this is the one
        // somebody went looking for, which is what `.settings` records.
        .fullScreenCover(item: $paywall) { PaywallScreen(context: $0) }
    }

    private var syncLine: String {
        // Not "never synced": nothing is waiting on a network here, it is waiting on an
        // account. A shop working deliberately on one device should not read as a failure.
        guard auth.isSignedIn else { return String(interface: "On this device only") }
        if shop.pendingChanges > 0 {
            return String(interface: "\(shop.pendingChanges) changes waiting to sync")
        }
        // Said here and nowhere else. The screens are showing the shop either way, so a
        // failed exchange is not worth an alert — but a sync that fails silently for a
        // month looks exactly like one that works, until the phone is replaced.
        if shop.lastFailure != nil { return String(interface: "Couldn't sync — will retry") }
        guard let lastSyncedAt = shop.lastSyncedAt else { return String(interface: "Not synced yet") }
        // The relative date carries the interface locale explicitly. Left alone it answers
        // in the device's, which puts "2 minutes ago" under a Russian header.
        let when = lastSyncedAt.formatted(.relative(presentation: .named).locale(InterfaceLanguage.locale))
        return String(interface: "Synced \(when)")
    }

    /// Currency and language, side by side and independent of each other. Both are here
    /// rather than in iOS Settings because the shop that needs them is standing at a
    /// machine, and because currency has no iOS Settings to be in.
    ///
    /// The heading is what says they are two choices rather than one. Under a card with no
    /// title the pair reads as a single regional setting, which is exactly the reading that
    /// would have a shop billing in som find its books re-denominated for picking Russian.
    private var localization: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            Text("Localization").oynoEyebrow()
            RowCard {
                MenuRow(label: "Currency", value: currency.rawValue, mono: true) {
                    ForEach(ShopCurrency.allCases) { option in
                        Button(option.localizedName) { select(currency: option) }
                    }
                }
                RowDivider(inset: 0)
                MenuRow(label: "Language", value: InterfaceLanguage.displayName(language)) {
                    ForEach(InterfaceLanguage.supported, id: \.self) { tag in
                        Button(InterfaceLanguage.displayName(tag)) { select(language: tag) }
                    }
                }
            }
        }
    }

    private var currency: ShopCurrency {
        ShopCurrency.resolve(shop.document.settings.currency)
    }

    private func select(currency option: ShopCurrency) {
        guard option != currency else { return }
        guard shop.updateSettings({ $0.currency = option.rawValue }) else { return }
        Analytics.shared.track(.settingsChanged(field: "currency"))
    }

    private func select(language tag: String) {
        guard tag != language else { return }
        InterfaceLanguage.select(tag)
        Analytics.shared.track(.settingsChanged(field: "language"))
    }

    // MARK: The account

    private var accountSection: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            Text("Account").oynoEyebrow()
            signedInAccount
        }
    }

    /// Who you are, what you are paying for, and the two ways to change either — one card,
    /// because they are one question. Sign out used to sit outside it as a loose line of
    /// grey text, which read as a caption rather than as the control it is.
    private var signedInAccount: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            RowCard {
                if let email = auth.currentUser?.email {
                    HStack {
                        Text("Email").oynoRowTitle()
                        Spacer(minLength: Metric.Space.m)
                        // The shop's own address, so verbatim — and truncated in the
                        // middle, because the half that identifies an account is the
                        // start and the domain at the end, never the run of characters
                        // between them.
                        Text(verbatim: email)
                            .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
                            .foregroundStyle(Palette.muted)
                            .lineLimit(1)
                            .truncationMode(.middle)
                    }
                    .padding(Metric.cardPadding)
                    RowDivider(inset: 0)
                }
                subscriptionRow
                RowDivider(inset: 0)
                Button {
                    Task { await purchases.restore() }
                } label: {
                    HStack {
                        Text("Restore purchases").oynoRowTitle()
                        Spacer()
                        if purchases.isRestoring { ProgressView() }
                    }
                    .padding(Metric.cardPadding)
                    .contentShape(.rect)
                }
                .buttonStyle(.plain)
                RowDivider(inset: 0)
                Button {
                    Analytics.shared.track(.signedOut)
                    shop.reset()
                    auth.signOut()
                    dismiss()
                } label: {
                    HStack {
                        Text("Sign out").oynoRowTitle()
                        Spacer()
                    }
                    .padding(Metric.cardPadding)
                    .contentShape(.rect)
                }
                .buttonStyle(.plain)
                RowDivider(inset: 0)
                // Guideline 5.1.1(v): an app that makes you sign in has to let you erase
                // the account from inside it. The same row as Sign out, because it is the
                // same kind of thing — leaving, once and for good. Centred red text below
                // the card read as a warning label rather than as the control it is, and
                // the word is red either way.
                Button(role: .destructive) { showDeleteConfirm = true } label: {
                    HStack {
                        Text("Delete account")
                            .font(Typeface.ui(15, .medium, relativeTo: .subheadline))
                            .foregroundStyle(Palette.alert)
                        Spacer()
                        if isDeleting { ProgressView() }
                    }
                    .padding(Metric.cardPadding)
                    .contentShape(.rect)
                }
                .buttonStyle(.plain)
                .disabled(isDeleting)
                // Anchored to the button rather than to the screen — see `SpoolEditor`.
                .confirmationDialog("Delete your account?", isPresented: $showDeleteConfirm, titleVisibility: .visible) {
                    Button("Delete everything", role: .destructive) { deleteAccount() }
                } message: {
                    Text("Every printer, spool, print and order goes with it, on every device. This cannot be undone. An active subscription keeps running — only Apple can cancel that.")
                }
            }

            if let deleteError {
                Text(deleteError)
                    .font(Typeface.ui(13, .regular, relativeTo: .footnote))
                    .foregroundStyle(Palette.alert)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
    }

    /// What the shop is paying for, and the way to start if it is not.
    ///
    /// "None" was a dead end: the one row on this screen that reports a state the operator
    /// might want to change, answered with a grey word and nothing to tap. So an unpaid
    /// shop gets the offer instead — and this is where the screen spends its accent, which
    /// the two add rows below used to take between them.
    @ViewBuilder
    private var subscriptionRow: some View {
        if purchases.isPaid {
            HStack {
                Text("Subscription").oynoRowTitle()
                Spacer()
                Text("Active").oynoValue(14)
            }
            .padding(Metric.cardPadding)
        } else {
            Button { paywall = .settings } label: {
                HStack {
                    Text("Subscription").oynoRowTitle()
                    Spacer()
                    Text("Subscribe")
                        .font(Typeface.ui(15, .medium, relativeTo: .subheadline))
                        .foregroundStyle(Palette.accent)
                }
                .padding(Metric.cardPadding)
                .contentShape(.rect)
            }
            .buttonStyle(.plain)
        }
    }

    /// The local wipe happens only after the server confirms. An app that clears the
    /// device first and then fails the call leaves somebody signed out of an account that
    /// still exists, holding none of their own records.
    private func deleteAccount() {
        isDeleting = true
        deleteError = nil
        Task {
            let service = AccountService(accessToken: { await auth.accessToken() })
            if let failure = await service.delete() {
                deleteError = failure
            } else {
                Analytics.shared.track(.accountDeleted)
                shop.reset()
                auth.signOut()
                dismiss()
            }
            isDeleting = false
        }
    }

    // MARK: The shop's own hardware

    private var printersSection: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            Text("Printers").oynoEyebrow()
            ForEach(shop.document.activePrinters) { printer in
                listRow(name: printer.name, rate: hourlyLine(printer)) { editingPrinter = printer }
            }
            addRow(title: "Add a printer") { addingPrinter = true }
        }
    }

    /// What wears out, and what one job owes for it.
    ///
    /// This replaces a field on the quote screen labelled "Nozzle, plate, glue" that took
    /// a lump sum, and there were only ever two ways to answer that: the price of a whole
    /// nozzle, which overcharges a six-hour job by forty times, or nothing, which prices
    /// the wear at zero — and nothing is what got typed. A price and a life is the pair
    /// that makes it arithmetic, and both are printed on the packet.
    ///
    /// It lives here rather than on the quote because it is a fact about the shop and not
    /// about the job, exactly like the grid price. Asked once, charged on every quote from
    /// then on, and never asked again.
    private var consumablesSection: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            Text("Consumables").oynoEyebrow()
            ForEach(shop.document.activeConsumables) { item in
                listRow(name: item.name, rate: shareLine(item)) { editingConsumable = item }
            }
            addRow(title: "Add a consumable") { addingConsumable = true }
        }
    }

    /// One record in a list on this screen: what the shop calls it, and the figure it puts
    /// on every quote. Printers and consumables draw the same row because they are the
    /// same shape of fact — a name and a rate — and two copies of one card is how the two
    /// lists drift apart.
    private func listRow(name: String, rate: String, onTap: @escaping () -> Void) -> some View {
        Button(action: onTap) {
            HStack {
                VStack(alignment: .leading, spacing: 2) {
                    Text(verbatim: name).oynoRowTitle()
                    Text(verbatim: rate)
                        .font(Typeface.mono(12, .regular, relativeTo: .caption))
                        .monospacedDigit()
                        .foregroundStyle(Palette.muted)
                }
                Spacer()
                Glyph.disclosure
            }
            .padding(Metric.cardPadding)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(Palette.surface, in: .rect(cornerRadius: Metric.Radius.card))
            .overlay(
                RoundedRectangle(cornerRadius: Metric.Radius.card)
                    .strokeBorder(Palette.hairline, lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
    }

    /// The last row of a list: the way to make it longer.
    ///
    /// A card like every row above it rather than a line of accent text, which is the same
    /// shape Restore purchases has and for the same reason — it is a thing you do, not a
    /// caption. Two accent links on one screen also meant the screen had three primary
    /// things; the accent is spent on the subscription row instead.
    private func addRow(title: LocalizedStringResource, onTap: @escaping () -> Void) -> some View {
        RowCard {
            Button(action: onTap) {
                HStack {
                    Text(title).oynoRowTitle()
                    Spacer()
                }
                .padding(Metric.cardPadding)
                .contentShape(.rect)
            }
            .buttonStyle(.plain)
        }
    }

    /// What one hour, or one print, of an item costs — the figure that actually reaches a
    /// quote, so it is what the row shows rather than the price on the packet.
    private func shareLine(_ item: Consumable) -> String {
        let money = Format.money(item.costPerUse, currency: currency.rawValue)
        return switch item.basis {
        case .hour: String(interface: "\(money) / print hour")
        case .print: String(interface: "\(money) / print")
        }
    }

    /// What an hour on the machine costs, and what it draws while doing it — the two
    /// numbers that decide whether this printer should have taken the job.
    private func hourlyLine(_ printer: Printer) -> String {
        let hourly = Format.money(Costing.machineHourlyCost(printer), currency: currency.rawValue)
        return String(interface: "\(hourly)/h · \(Format.watts(printer.powerWatts))")
    }

    // MARK: The rates, one tap down

    /// A row rather than an accent link, because it goes somewhere rather than doing
    /// something — and the two rates under it are the pair a shop checks before deciding
    /// whether to open it at all.
    private var quoteSettingsLink: some View {
        RowCard {
            NavigationLink {
                QuoteSettingsScreen()
            } label: {
                HStack {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Quote settings").oynoRowTitle()
                        Text(verbatim: QuoteSettingsScreen.summary(shop.document.settings))
                            .font(Typeface.mono(12, .regular, relativeTo: .caption))
                            .monospacedDigit()
                            .foregroundStyle(Palette.muted)
                    }
                    Spacer()
                    Glyph.disclosure
                }
                .padding(Metric.cardPadding)
                .contentShape(.rect)
            }
            .buttonStyle(.plain)
        }
    }
}
