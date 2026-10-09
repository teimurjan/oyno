#if DEBUG
import SwiftUI

/// Debug-only harness that renders one screen in a deterministic, seeded state for
/// `appstore/scripts/capture-simulator-screens.mjs`. Selected by a `--screenshot <name>`
/// launch argument (see `OynoApp`); compiled out of Release builds entirely, so it never
/// ships.
///
/// The fixtures are the numbers from the design canvas, deliberately. Marketing
/// screenshots that show a shop with three spools and $0 of revenue sell nothing, and
/// numbers invented per-shot drift from the ones the store listing quotes. One seeded
/// shop, used by every frame, keeps the whole set internally consistent — the 640 g of
/// charcoal PLA in the inventory shot is the same roll the log flow deducts from.
struct ScreenshotHarness: View {
    let screen: String

    static var requestedScreen: String? {
        let args = ProcessInfo.processInfo.arguments
        guard let index = args.firstIndex(of: "--screenshot"), index + 1 < args.count else { return nil }
        return args[index + 1]
    }

    /// What the camera would see, since a simulator has none: `--screenshot-camera <path>`
    /// names a picture `ScannerSheet` draws where the live feed goes.
    static let cameraStill: UIImage? = {
        let args = ProcessInfo.processInfo.arguments
        guard let index = args.firstIndex(of: "--screenshot-camera"), index + 1 < args.count else { return nil }
        return UIImage(contentsOfFile: args[index + 1])
    }()

    /// The lists as a returning shop sees them: every place open and each first-run slide
    /// already shown, so the capture never photographs a row halfway open.
    private static let settledLists: UserDefaults = {
        let defaults = UserDefaults(suiteName: "oyno.screenshot.shelf") ?? .standard
        defaults.removePersistentDomain(forName: "oyno.screenshot.shelf")
        for list in ["inventory", "orders", "quotes"] {
            defaults.set(true, forKey: "oyno.\(list).swipeHinted")
        }
        return defaults
    }()

    var body: some View {
        seeded
            // The capture run launches with `-AppleLanguages (ru)`, which
            // `adoptLaunchLocalization` mirrors into `InterfaceLanguage`. Carrying it into
            // the environment here is what makes the harness resolve the same copy the app
            // does — without it a locale capture photographs English screens.
            .environment(\.locale, InterfaceLanguage.locale)
            .environment(ScreenshotFixtures.shop())
            .environment(ScreenshotFixtures.auth())
            .environment(ScreenshotFixtures.purchases())
    }

    @ViewBuilder private var seeded: some View {
        switch screen {
        case "splash":
            SplashScreen()
        case "signin":
            SignInScreen()
        case "quote":
            QuoteEditor(draft: ScreenshotFixtures.quoteDraft)
        case "filament":
            NavigationStack { InventoryScreen() }
                .defaultAppStorage(Self.settledLists)
        // The hero's phone: the label reader, fed `cameraStill`.
        case "label":
            ScannerSheet(mode: .label) { _ in }
        case "tag":
            SpoolEditor(spool: ScreenshotFixtures.spools[0])
        // A roll straight off a delivery: the form opens on the label and code readers.
        case "spool":
            SpoolEditor(spool: Spool())
        // The quote frame's job as the customer gets it, a tap from the share sheet.
        case "share":
            let receipt = ScreenshotFixtures.quoteReceipt
            QuoteReceiptSheet(job: receipt.job, breakdown: receipt.breakdown, price: receipt.breakdown.suggestedPrice)
        case "orders":
            NavigationStack { OrdersScreen() }
                .defaultAppStorage(Self.settledLists)
        case "month":
            NavigationStack { StatsScreen() }
        case "printer":
            PrinterEditor(printer: ScreenshotFixtures.printer)
        // None of these six is in the capture script's `SCREENS`. Log and tag are here to
        // be looked at, Quotes and Home so a list and a dashboard can be seen in a seeded
        // shop, in either language;
        // profile so the currency and language pickers can be, without signing in; the
        // paywall so the plan rows can be, though a simulator with no StoreKit
        // configuration draws them as a spinner.
        case "log":
            QuoteEditor(mode: .log)
        case "quotes":
            NavigationStack { QuotesScreen() }
                .defaultAppStorage(Self.settledLists)
        case "home":
            NavigationStack { HomeScreen() }
        case "profile":
            NavigationStack { ProfileScreen() }
        case "paywall":
            PaywallScreen()
        default:
            Text(verbatim: "Unknown screenshot screen: \(screen)")
        }
    }
}

/// One seeded shop, shared by every frame.
///
/// Everything is anchored to `Date.now` so the month header always reads the current
/// month and the trailing-week strip always ends today — a capture run in March must not
/// produce a store listing that says August.
@MainActor
enum ScreenshotFixtures {
    /// What the seeded shop pays for things.
    ///
    /// A store listing that quotes dollars to a Russian reader is a listing they scroll
    /// past. Converting the dollar figures at spot would be worse than leaving them: this
    /// audience prices things for a living, and $1,199 at spot is not what a Bambu costs
    /// in Moscow. So each market gets figures a maker there would actually pay, and the
    /// *ratios* between them — which is what every frame is really arguing about — stay
    /// close enough that both listings tell the same story.
    struct Economy {
        let currency: ShopCurrency
        let printerPrice: Decimal
        let upkeepPerYear: Decimal
        let electricityPerKwh: Decimal
        let laborPerHour: Decimal
        /// A one-kilogram roll, by material.
        let pla: Decimal
        let petg: Decimal
        let abs: Decimal
        let shippingPaid: Decimal
        let shippingCharged: Decimal

        static let usd = Economy(
            currency: .usd, printerPrice: 1_199, upkeepPerYear: 180,
            electricityPerKwh: 0.17, laborPerHour: 28,
            pla: 22, petg: 26.5, abs: 24,
            shippingPaid: 6.40, shippingCharged: 7.95
        )

        /// Moscow single-rate electricity, a Bambu at Russian retail, a maker's hour at
        /// what a small shop actually bills, and filament at what the local brands charge
        /// rather than what an imported spool costs.
        ///
        /// That last one is load-bearing rather than cosmetic. Russian filament is dear
        /// relative to Russian labour where American filament is cheap relative to American
        /// labour, and priced off an imported spool the "three times filament" rule stops
        /// underpricing and starts *over*pricing — which would have put a receipt on the
        /// Russian store listing arguing against the product it was selling.
        static let rub = Economy(
            currency: .rub, printerPrice: 129_000, upkeepPerYear: 19_000,
            electricityPerKwh: 6, laborPerHour: 700,
            pla: 1_700, petg: 2_000, abs: 1_900,
            shippingPaid: 350, shippingCharged: 450
        )

        /// One row per euro-area market, because seven of the eighteen languages bill in
        /// euro and a listing cannot show a Finn a German's electricity bill in kroner.
        /// The filament prices are what the European brands charge rather than what an
        /// import costs, on the same reasoning as the rouble row.
        static let eur = Economy(
            currency: .eur, printerPrice: 1_099, upkeepPerYear: 170,
            electricityPerKwh: 0.30, laborPerHour: 30,
            pla: 22, petg: 26, abs: 24,
            shippingPaid: 5.90, shippingCharged: 7.50
        )

        /// Mexico and Brazil import their filament and pay for local hours, which is the
        /// Russian shape rather than the American one: the rule of thumb comes out closer
        /// to break-even here, and the frame argues about what it leaves on the table.
        static let mxn = Economy(
            currency: .mxn, printerPrice: 24_000, upkeepPerYear: 3_600,
            electricityPerKwh: 3, laborPerHour: 180,
            pla: 550, petg: 650, abs: 620,
            shippingPaid: 120, shippingCharged: 150
        )

        static let brl = Economy(
            currency: .brl, printerPrice: 7_500, upkeepPerYear: 1_100,
            electricityPerKwh: 0.85, laborPerHour: 50,
            pla: 160, petg: 190, abs: 180,
            shippingPaid: 28, shippingCharged: 35
        )

        /// The Nordic rows are where an hour of a maker's time is worth the most against
        /// the plastic, so they are the strongest version of the receipt's argument.
        static let sek = Economy(
            currency: .sek, printerPrice: 12_500, upkeepPerYear: 1_900,
            electricityPerKwh: 2, laborPerHour: 400,
            pla: 260, petg: 300, abs: 280,
            shippingPaid: 69, shippingCharged: 89
        )

        static let dkk = Economy(
            currency: .dkk, printerPrice: 8_500, upkeepPerYear: 1_300,
            electricityPerKwh: 2.3, laborPerHour: 350,
            pla: 175, petg: 205, abs: 190,
            shippingPaid: 45, shippingCharged: 59
        )

        static let nok = Economy(
            currency: .nok, printerPrice: 13_000, upkeepPerYear: 2_000,
            electricityPerKwh: 1.3, laborPerHour: 500,
            pla: 270, petg: 310, abs: 290,
            shippingPaid: 79, shippingCharged: 99
        )

        static let pln = Economy(
            currency: .pln, printerPrice: 4_700, upkeepPerYear: 700,
            electricityPerKwh: 1.1, laborPerHour: 90,
            pla: 95, petg: 110, abs: 105,
            shippingPaid: 16, shippingCharged: 21
        )

        static let czk = Economy(
            currency: .czk, printerPrice: 26_000, upkeepPerYear: 3_900,
            electricityPerKwh: 4.5, laborPerHour: 500,
            pla: 550, petg: 620, abs: 580,
            shippingPaid: 89, shippingCharged: 119
        )

        /// Named for the currency rather than spelled `` `try` `` twice, exactly as in
        /// `FunnelEconomy`.
        static let lira = Economy(
            currency: .`try`, printerPrice: 45_000, upkeepPerYear: 7_000,
            electricityPerKwh: 3, laborPerHour: 350,
            pla: 900, petg: 1_050, abs: 1_000,
            shippingPaid: 90, shippingCharged: 120
        )

        static let uah = Economy(
            currency: .uah, printerPrice: 45_000, upkeepPerYear: 6_500,
            electricityPerKwh: 4.32, laborPerHour: 300,
            pla: 700, petg: 820, abs: 790,
            shippingPaid: 90, shippingCharged: 120
        )

        /// Picked off the language the capture was launched in. The harness is the one
        /// place that pairing is allowed — everywhere else a shop's currency is its own
        /// choice — because a store listing has exactly one audience per locale.
        ///
        /// Keyed on the whole tag rather than a prefix: `pt-BR` bills in reais and `pt-PT`
        /// in euro, so the language alone is not the market. Every tag in
        /// `InterfaceLanguage.supported` is named here; the `default` is unreachable and
        /// is there because a Swift switch over a `String` has to be.
        static var current: Economy { forTag(InterfaceLanguage.current) }

        static func forTag(_ tag: String) -> Economy {
            switch tag {
            case "es", "fr", "de", "pt-PT", "it", "nl", "fi": eur
            case "es-MX": mxn
            case "pt-BR": brl
            case "sv": sek
            case "da": dkk
            case "nb": nok
            case "pl": pln
            case "cs": czk
            case "tr": lira
            case "ru": rub
            case "uk": uah
            default: usd
            }
        }
    }

    private static let economy = Economy.current

    static let printer = Printer(
        id: UUID(uuidString: "00000000-0000-0000-0000-0000000000A1")!,
        name: String(interface: "Bench A1"), brand: "Bambu Lab", model: "X1 Carbon",
        powerWatts: 115, purchasePrice: economy.printerPrice, lifetimeHours: 6_000,
        maintenancePerYear: economy.upkeepPerYear, annualRunHours: 4_200
    )

    static let printerB = Printer(
        id: UUID(uuidString: "00000000-0000-0000-0000-0000000000A2")!,
        name: String(interface: "Bench A2"), brand: "Bambu Lab", model: "X1 Carbon",
        powerWatts: 115, purchasePrice: economy.printerPrice, lifetimeHours: 6_000,
        maintenancePerYear: economy.upkeepPerYear, annualRunHours: 4_200
    )

    /// The exact rolls from the canvas, including the two that are under the reorder
    /// point — the alert state is the one worth showing in a store listing. The charcoal
    /// roll carries a tag so the tag frame shows one bound.
    static let spools: [Spool] = [
        spool("Matte Charcoal", "PLA", "#3A3A3A", remaining: 640, location: "Bench A1 · loaded", cost: economy.pla, tagged: true),
        spool("Bone White", "PLA", "#EFEBE3", remaining: 910, location: "Shelf 2", cost: economy.pla),
        spool("Green", "PLA", "#24A148", remaining: 820, location: "Shelf 2", cost: economy.pla),
        spool("Signal Blue", "PETG", "#0F62FE", remaining: 145, location: "Shelf 1", cost: economy.petg),
        spool("Translucent", "PETG", "#CFE0DA", remaining: 480, location: "Shelf 1", cost: economy.petg),
        spool("Carbon", "ABS", "#1C1C1C", remaining: 85, location: "Dry box", cost: economy.abs),
        spool("Terracotta", "PLA", "#B4674A", remaining: 720, location: "Shelf 3", cost: economy.pla),
    ]

    /// The quote frame's job: named, on the green roll.
    static var quoteDraft: Job {
        var job = Job.newQuote()
        job.name = String(interface: "Planter, medium")
        job.printMinutes = 546
        guard let line = job.liveMaterials.first?.id else { return job }
        QuoteStock.select(spool: spools[2], line: line, in: &job)
        QuoteStock.write(&job, line: line) { $0.grams = 260 }
        return job
    }

    /// The quote frame's job, costed the way the editor costs it — purge included — so the
    /// share frame's total is the quote frame's price.
    static var quoteReceipt: (job: Job, breakdown: Costing.Breakdown) {
        var job = quoteDraft
        let settings = document().settings
        job.wasteG = QuoteStock.modelGrams(of: job) * settings.wastePct(for: QuoteStock.quoteClass(of: job)) / 100
        return (job, Costing.cost(job: job, printer: printer, rates: Costing.Rates(settings)))
    }

    static func shop() -> ShopStore {
        let store = ShopStore(token: { nil })
        store.seedForScreenshot(document: document())
        return store
    }

    static func auth() -> AuthStore {
        let store = AuthStore()
        store.seedUserForScreenshot()
        return store
    }

    static func purchases() -> PurchaseStore {
        let store = PurchaseStore(accessToken: { nil }, userID: { nil })
        store.seedPaidForScreenshot()
        return store
    }

    private static func document() -> ShopDocument {
        var document = ShopDocument()
        document.settings.currency = economy.currency.rawValue
        document.settings.electricityRateKwh = economy.electricityPerKwh
        document.settings.laborRateHour = economy.laborPerHour
        // Tuned so the seeded month lands near a 45% net margin. A store screenshot
        // claiming 85% would be read as fake by the only audience that matters — these are
        // people who price things for a living — and one that showed single digits would be
        // advertising the problem rather than the fix.
        document.settings.defaultMarkupPct = 120
        document.settings.failureRatePct = 5
        document.settings.defaultWastePct = 6
        let shop = shopIdentity(forTag: InterfaceLanguage.current)
        document.settings.shopName = shop.name
        document.settings.shopContact = shop.contact
        // Saved, so Home shows the week rather than the setup card.
        document.settings.updatedAt = .now

        for printer in [printer, printerB] { document.printers[printer.id] = printer }
        for spool in spools { document.spools[spool.id] = spool }

        let customers = customerNames(forTag: InterfaceLanguage.current).map { name in
            Customer(name: name, createdAt: .now.addingTimeInterval(-120 * 24 * 3600))
        }
        for customer in customers { document.customers[customer.id] = customer }
        for job in jobs(document: document) { document.jobs[job.id] = job }
        for order in orders(document: document, customers: customers) { document.orders[order.id] = order }
        return document
    }

    /// Two of them off the charcoal roll, which is what the tag frame lists under it.
    private static func jobs(document: ShopDocument) -> [Job] {
        let charcoal = spools[0]
        let green = spools[2]
        let blue = spools[3]
        let terracotta = spools[6]
        let catalogue: [(LocalizedStringResource, Decimal, Decimal, Spool, JobStatus, Int)] = [
            ("Cable clip · 6-up plate", 84, 192, charcoal, .done, 0),
            ("Planter, medium", 260, 546, green, .done, 2),
            ("Hex desk tray", 145, 324, blue, .done, 4),
            ("Keycap set, blank", 52, 156, blue, .done, 6),
            ("Articulated dragon", 310, 720, terracotta, .failed, 9),
            ("Cosplay pauldron", 480, 1_140, charcoal, .done, 12),
        ]

        return catalogue.map { name, grams, minutes, spool, status, daysAgo in
            var job = Job()
            job.id = UUID()
            job.name = String(interface: name)
            job.printerID = printer.id
            job.printMinutes = minutes
            job.laborMinutes = 15
            job.wasteG = grams * 6 / 100
            job.status = status
            job.quantity = 1
            job.updatedAt = Calendar.current.date(byAdding: .day, value: -daysAgo, to: .now) ?? .now
            job.materials = [JobMaterial(
                jobID: job.id, spoolID: spool.id, grams: grams,
                costPerGram: spool.costPerGram, material: spool.materialName,
                materialClass: spool.materialClass
            )]

            let breakdown = Costing.cost(job: job, printer: printer, rates: Costing.Rates(document.settings))
            job.materialCost = breakdown.material + breakdown.waste
            job.electricityCost = breakdown.electricity
            job.depreciationCost = breakdown.depreciation
            job.laborCost = breakdown.labor
            job.failureCost = breakdown.failure
            job.landedCost = breakdown.landed
            job.suggestedPrice = breakdown.suggestedPrice
            job.costedAt = job.updatedAt
            return job
        }
    }

    /// Enough orders across the current month to make the dashboard's gross, net and
    /// week strip land near the canvas's numbers without any of them being hard-coded —
    /// they are computed from these rows exactly as a real shop's would be.
    ///
    /// The newest six walk the pipeline one stage apiece, so the list's status glyphs read
    /// as a working week rather than a column of ticks; everything older is settled.
    ///
    /// Dated by the calendar, not by a fixed step back from now: the newest eighteen fall
    /// evenly between the 1st and the moment of capture, the rest in the month before. A
    /// step of two days left a capture on the 6th with three unpaid orders in "This month"
    /// and a Stats frame of zeroes.
    private static func orders(document: ShopDocument, customers: [Customer]) -> [Order] {
        let saleable = document.jobs.values.filter { $0.status == .done }.sorted { $0.name < $1.name }
        guard !saleable.isEmpty, !customers.isEmpty else { return [] }
        let pipeline: [OrderStatus] = [.quote, .confirmed, .printing, .finishing, .ready, .shipped]

        let total = 24
        let inThisMonth = 18
        let now = Date.now
        let calendar = Calendar.current
        let month = calendar.dateInterval(of: .month, for: now) ?? DateInterval(start: now, duration: 0)
        let lastMonth = calendar.dateInterval(of: .month, for: month.start.addingTimeInterval(-1)) ?? month
        let elapsed = now.timeIntervalSince(month.start)

        return (0 ..< total).map { index in
            var order = Order()
            order.id = UUID()
            order.number = 1_000 + index
            order.channel = index % 3 == 0 ? .etsy : (index % 3 == 1 ? .shopify : .direct)
            let (pct, fixed) = order.channel.defaultFee
            order.feePct = pct
            order.feeFixed = fixed
            order.shippingCost = economy.shippingPaid
            order.shippingCharged = economy.shippingCharged
            order.status = index < pipeline.count ? pipeline[index] : .completed
            order.createdAt = index < inThisMonth
                ? now.addingTimeInterval(-elapsed * Double(index) / Double(inThisMonth))
                : lastMonth.start.addingTimeInterval(
                    lastMonth.duration * Double(total - index) / Double(total - inThisMonth + 1)
                )
            order.updatedAt = order.createdAt
            // No title: the row falls back to the customer, which is how a shop names them.
            order.customerID = customers[index % customers.count].id

            let job = saleable[index % saleable.count]
            order.items = [OrderItem(
                orderID: order.id, jobID: job.id, description: job.name,
                quantity: 1 + index % 3,
                unitPrice: job.suggestedPrice, unitCost: job.landedCost
            )]
            return order
        }
    }

    private static func spool(
        _ colorName: LocalizedStringResource, _ material: String, _ hex: String,
        remaining: Decimal, location: LocalizedStringResource, cost: Decimal, tagged: Bool = false
    ) -> Spool {
        var spool = Spool()
        spool.id = UUID()
        if tagged { spool.tagID = SpoolTag.payload(for: spool.id) }
        spool.brand = "Bambu Lab"
        spool.material = material
        spool.colorName = String(interface: colorName)
        spool.colorHex = hex
        spool.remainingG = remaining
        spool.netWeightG = 1_000
        spool.cost = cost
        spool.location = String(interface: location)
        // A roll the shop has had for a while. `SpoolEditor` reads a `createdAt` within a
        // second of now as "this one is being added right now" and retitles itself, so a
        // fixture left at the default is a frame that says "New spool" or does not,
        // depending on how fast the simulator got to the screen.
        spool.createdAt = .now.addingTimeInterval(-90 * 24 * 3600)
        return spool
    }
}

extension ShopStore {
    /// Screenshot harness only. Bypasses disk and the network entirely — the capture runs
    /// against a simulator with no account and no server.
    func seedForScreenshot(document: ShopDocument) {
        seed(document)
    }
}
#endif
