import FamilyControls
import SwiftUI

/// D7 on the canvas: the schedules Kid hours run on, with what is open right now folded into
/// the one on top, the apps always and never allowed, and the held "Not now". A schedule opens
/// as a sheet. Turning one on is gated like any other write; looking is free.
struct KidHoursScreen: View {
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(OynoStore.self) private var oyno
    @State private var open: OpenSchedule?
    @State private var picking: Picking?
    @State private var pickerDraft = FamilyActivitySelection()

    /// Which list the one Screen Time picker is open for.
    private enum Picking { case alwaysAllowed, neverAllowed }

    var body: some View {
        Screen {
            ScreenHeader(title: "Kid hours", subtitle: status) {
                if kidHours.isAuthorized { GlassPill(title: "New", symbol: "plus") { open = .new } }
            }

            if !kidHours.isAuthorized {
                permission
            } else {
                featured
                schedules.screenshotCallout("schedules")
                alwaysAllowed.screenshotCallout("alwaysAllowed")
                neverAllowed.screenshotCallout("neverAllowed")
                RowCard {
                    HoldRow(title: "Not now", hint: notNowHint, enabled: kidHours.isOnNow) { kidHours.takeNotNow() }
                    RowDivider(inset: 0)
                    soonRow
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
        guard schedule.isEnabled, let next = schedule.nextStart(after: .now) else { return String(interface: "Off") }
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
            Card(raised: true) {
                VStack(spacing: Metric.Space.m) {
                    Button {
                        Haptics.tap()
                        open = .existing(schedule)
                    } label: {
                        HStack(spacing: Metric.Space.m) {
                            VStack(alignment: .leading, spacing: 4) {
                                StatusPill(text: ScheduleWords.status(schedule, in: kidHours), on: schedule.id == kidHours.current?.id)
                                Text(verbatim: schedule.name)
                                    .font(Typeface.ui(19, .extrabold, relativeTo: .title3))
                                    .tracking(-0.4)
                                    .foregroundStyle(Palette.ink)
                                Text(verbatim: ScheduleWords.summary(schedule)).oynoCaption()
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

    private var schedules: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            SectionHeader(title: "Schedules") {
                Text(verbatim: "\(kidHours.settings.schedules.count)").oynoCaption()
            }
            ScrollView(.horizontal) {
                HStack(spacing: 10) {
                    ForEach(kidHours.others) { schedule in
                        ScheduleCard(schedule: schedule, summary: ScheduleWords.summary(schedule)) {
                            open = .existing(schedule)
                        }
                    }
                    AddCard(width: 110) { open = .new }
                }
            }
            .scrollIndicators(.hidden)
        }
    }

    /// Empty until the parent picks something: iOS keeps Phone and Messages reachable anyway.
    private var alwaysAllowed: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            SectionHeader(title: "Always allowed") {
                EditLink { picking = .alwaysAllowed }
            }
            TokenGrid(items: kidHours.alwaysAllowed) { picking = .alwaysAllowed }
        }
    }

    private var neverAllowed: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            SectionHeader(title: "Never allowed") {
                EditLink { picking = .neverAllowed }
            }
            TokenGrid(items: kidHours.neverAllowed) { picking = .neverAllowed }
        }
    }

    private var soonRow: some View {
        HStack {
            Text("Share with a co-parent")
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
            Spacer()
            Text("Soon").oynoCaption()
        }
        .padding(.horizontal, Metric.cardPadding)
        .frame(height: 52)
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
