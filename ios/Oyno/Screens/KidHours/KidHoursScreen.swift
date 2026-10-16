import FamilyControls
import SwiftUI

/// D7 on the canvas: the schedules Kid hours run on, with what is open right now folded into
/// the one on top, the apps always and never allowed, and the held "Not now". A schedule opens
/// as a sheet. Turning one on is gated like any other write; looking is free.
struct KidHoursScreen: View {
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(OynoStore.self) private var oyno
    @Environment(\.adaptive) private var adaptive
    @State private var open: OpenSchedule?
    @State private var picking: Picking?
    @State private var pickerDraft = FamilyActivitySelection()

    /// Which list the one Screen Time picker is open for.
    private enum Picking { case alwaysAllowed, neverAllowed }

    var body: some View {
        Group {
            if adaptive.columns == .two { split } else { column }
        }
        .toolbar {
            if adaptive.bars == .side, kidHours.isAuthorized {
                ToolbarItem(placement: .topBarTrailing) {
                    BarButton(title: "New schedule", symbol: "plus") { open = .new }
                }
            }
        }
        .sheet(item: $open) { open in
            ScheduleSheet(schedule: open.schedule, isNew: open.isNew, onSave: save)
        }
        .familyActivityPicker(isPresented: Binding(get: { picking != nil }, set: { if !$0 { picking = nil } }), selection: $pickerDraft)
        .onChange(of: picking) { closed, opened in
            switch (closed, opened) {
            case (_, .alwaysAllowed): pickerDraft = kidHours.settings.alwaysAllowed
            case (_, .neverAllowed): pickerDraft = kidHours.settings.neverAllowed
            case (.alwaysAllowed, nil): kidHours.update(alwaysAllowed: pickerDraft)
            case (.neverAllowed, nil): kidHours.update(neverAllowed: pickerDraft)
            case (nil, nil): break
            }
        }
    }

    /// The phone's: the schedules, then the apps, then "Not now".
    private var column: some View {
        Screen {
            header
            if !kidHours.isAuthorized {
                permission
            } else {
                featured
                schedules.screenshotCallout("schedules")
                alwaysAllowed.screenshotCallout("alwaysAllowed")
                neverAllowed.screenshotCallout("neverAllowed")
                notNowCard
            }
        }
    }

    /// iPad and the Duo open: the schedules on the leading side, the apps and "Not now" on the
    /// trailing one.
    private var split: some View {
        FoldColumns {
            ScrollView {
                VStack(alignment: .leading, spacing: Metric.Space.xl) {
                    header
                    if !kidHours.isAuthorized {
                        permission
                    } else {
                        featured
                        schedules
                    }
                }
                .padding(.vertical, Metric.Space.xl)
            }
            .scrollIndicators(.hidden)
        } trailing: {
            if kidHours.isAuthorized {
                ScrollView {
                    VStack(spacing: Metric.Space.m) {
                        Card(raised: true) { alwaysAllowed }
                        Card(raised: true) { neverAllowed }
                        notNowCard
                    }
                    .padding(.vertical, Metric.Space.xl)
                }
                .scrollIndicators(.hidden)
            }
        }
        .background(Palette.sky.ignoresSafeArea())
        .systemBar(adaptive)
    }

    /// "New" beside the title, except where the Duo's side bar holds it.
    private var header: some View {
        ScreenHeader(title: "Kid hours", subtitle: status) {
            if kidHours.isAuthorized, adaptive.bars != .side {
                GlassPill(title: "New", symbol: "plus") { open = .new }
            }
        }
    }

    private var notNowCard: some View {
        RowCard {
            HoldRow(title: "Not now", hint: notNowHint, enabled: kidHours.isOnNow) { kidHours.takeNotNow() }
            RowDivider(inset: 0)
            soonRow
        }
    }

    /// A schedule saved on is the paid part. Refused, it is kept off rather than lost.
    private func save(_ schedule: KidHoursSchedule) {
        var kept = schedule
        kept.isEnabled = schedule.isEnabled && oyno.requireEntitlement()
        kidHours.save(kept)
    }

    // MARK: Words

    private var status: String {
        if let current = kidHours.current {
            return String(interface: "On now · ends \(Format.timeOfDay(minutes: current.end))")
        }
        if let end = kidHours.unlockEnd {
            return String(interface: "Apps open until \(Format.timeOfDay(date: end))")
        }
        guard let schedule = kidHours.featured else { return String(interface: "No schedule yet") }
        guard schedule.isEnabled, let next = schedule.nextStart(after: kidHours.now) else { return String(interface: "Off") }
        return String(interface: "Starts \(Format.dayAndTime(next))")
    }

    private var notNowHint: String {
        if let end = kidHours.unlockEnd { return String(interface: "Open until \(Format.timeOfDay(date: end))") }
        return kidHours.isOnNow ? String(interface: "Hold 2 sec") : String(interface: "Only during Kid hours")
    }

    // MARK: Blocks

    private var permission: some View {
        Card(raised: true) {
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                Text("Let Oyno pause apps").oynoRowTitle()
                Text("Screen Time asks once. Oyno only sees the apps you pick, as tokens, and never what you do in them.")
                    .oynoCaption()
                    .fixedSize(horizontal: false, vertical: true)
                PrimaryButton(title: "Allow Screen Time") {
                    Task { await kidHours.requestAuthorization() }
                }
                .padding(.top, Metric.Space.s)
            }
        }
    }

    /// The apps open right now and until when, else what the last round earned.
    @ViewBuilder
    private var unlock: some View {
        if let unlock = kidHours.liveUnlock, let end = kidHours.unlockEnd {
            UnlockStrip(unlock: unlock, end: end, onEnd: { kidHours.refresh() }, onLock: { kidHours.lockNow() })
        } else if let earned = kidHours.claimable {
            EarnedStrip(earned: earned) {
                if !kidHours.claimEarned() { Haptics.warning() }
            }
        }
    }

    @ViewBuilder
    private var featured: some View {
        if let schedule = kidHours.featured {
            Card(padding: adaptive.roomy ? 22 : Metric.cardPadding, raised: true) {
                VStack(spacing: Metric.Space.m) {
                    Button {
                        Haptics.tap()
                        open = .existing(schedule)
                    } label: {
                        HStack(spacing: Metric.Space.m) {
                            VStack(alignment: .leading, spacing: 4) {
                                StatusPill(text: ScheduleWords.status(schedule, in: kidHours), on: schedule.id == kidHours.current?.id)
                                Text(verbatim: schedule.name)
                                    .font(Typeface.ui(adaptive.roomy ? 26 : 19, .extrabold, relativeTo: .title3))
                                    .tracking(adaptive.roomy ? -0.6 : -0.4)
                                    .foregroundStyle(Palette.ink)
                                Text(verbatim: ScheduleWords.summary(schedule))
                                    .font(Typeface.ui(adaptive.roomy ? 14 : 13, .medium, relativeTo: .caption))
                                    .foregroundStyle(Palette.muted)
                            }
                            Spacer(minLength: 0)
                            Glyph.disclosure
                        }
                        .contentShape(.rect)
                    }
                    .buttonStyle(.plain)
                    unlock
                }
                .animation(.snappy, value: kidHours.settings.unlock)
                .animation(.snappy, value: kidHours.settings.earned)
            }
        } else {
            Card(raised: true) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("No schedule yet").oynoRowTitle()
                    Text("Add one with New, and pick the apps it pauses.").oynoCaption()
                }
            }
        }
    }

    /// A row that scrolls on the phone, three across in a column of its own.
    private var schedules: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            SectionHeader(title: "Schedules") {
                Text(verbatim: "\(kidHours.settings.schedules.count)").oynoCaption()
            }
            if adaptive.columns == .two {
                LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 10), count: 3), spacing: 10) {
                    scheduleCards(width: nil)
                }
            } else {
                ScrollView(.horizontal) {
                    HStack(spacing: 10) { scheduleCards(width: 150) }
                }
                .scrollIndicators(.hidden)
            }
        }
    }

    @ViewBuilder
    private func scheduleCards(width: CGFloat?) -> some View {
        ForEach(kidHours.others) { schedule in
            ScheduleCard(schedule: schedule, width: width) {
                open = .existing(schedule)
            }
        }
        AddCard(width: width.map { _ in 110 }) { open = .new }
    }

    /// Empty until the parent picks something: iOS keeps Phone and Messages reachable anyway.
    private var alwaysAllowed: some View {
        apps("Always allowed", detail: "Open during every schedule", items: kidHours.alwaysAllowed, list: .alwaysAllowed)
    }

    private var neverAllowed: some View {
        apps("Never allowed", detail: "Paused in every schedule", items: kidHours.neverAllowed, list: .neverAllowed)
    }

    private func apps(_ title: LocalizedStringResource, detail: LocalizedStringResource, items: [TokenItem], list: Picking) -> some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            SectionHeader(title: title, detail: adaptive.roomy ? detail : nil) {
                EditLink { picking = list }
            }
            if adaptive.columns == .two {
                TokenGrid(items: items, across: 6, tile: adaptive.roomy ? 60 : 48) { picking = list }
            } else {
                TokenGrid(items: items) { picking = list }
            }
        }
    }

    private var soonRow: some View {
        HStack {
            Text("Share with a co-parent")
                .font(Typeface.ui(adaptive.roomy ? 16 : 15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
            Spacer()
            Text("Soon")
                .font(Typeface.ui(adaptive.roomy ? 14 : 13, .medium, relativeTo: .caption))
                .foregroundStyle(Palette.muted)
        }
        .padding(.horizontal, adaptive.roomy ? Metric.Space.xl : Metric.cardPadding)
        .frame(height: adaptive.roomy ? 56 : 52)
        .accessibilityElement(children: .combine)
    }
}

/// The schedule in the sheet. A new one starts on, every day, after dinner, with a name the
/// parent can change.
private struct OpenSchedule: Identifiable {
    let schedule: KidHoursSchedule
    let isNew: Bool

    var id: UUID { schedule.id }

    static var new: OpenSchedule {
        let schedule = KidHoursSchedule(name: String(interface: "New schedule"), start: 19 * 60, end: 20 * 60, weekdays: Set(1...7))
        return OpenSchedule(schedule: schedule, isNew: true)
    }

    static func existing(_ schedule: KidHoursSchedule) -> OpenSchedule { OpenSchedule(schedule: schedule, isNew: false) }
}
