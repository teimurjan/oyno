import FamilyControls
import SwiftUI

/// D7 on the canvas: the schedules Kid hours run on, what pauses, what stays open, and the
/// held "Not now". Turning a schedule on is gated like any other write; looking is free.
struct KidHoursScreen: View {
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(OynoStore.self) private var oyno
    @State private var editing: ScheduleDraft?
    @State private var picking: Picking?
    @State private var pickerDraft = FamilyActivitySelection()

    /// Which list the one Screen Time picker is open for.
    private enum Picking { case paused, alwaysOpen }

    var body: some View {
        Screen {
            ScreenHeader(title: "Kid hours", subtitle: status) {
                if kidHours.isAuthorized { NewButton { editing = .new } }
            }

            if !kidHours.isAuthorized {
                permission
            } else {
                featured
                schedules
                paused
                alwaysOpen
                RowCard {
                    HoldRow(title: "Not now", hint: notNowHint, enabled: kidHours.isOnNow) { kidHours.takeBreak() }
                    RowDivider(inset: 0)
                    soonRow
                }
            }
        }
        .sheet(item: $editing) { draft in
            ScheduleSheet(schedule: draft.schedule, isNew: draft.isNew, onSave: save, onDelete: draft.isNew ? nil : {
                kidHours.remove(draft.schedule)
            })
        }
        .familyActivityPicker(isPresented: Binding(get: { picking != nil }, set: { if !$0 { picking = nil } }), selection: $pickerDraft)
        .onChange(of: picking) { closed, opened in
            switch (closed, opened) {
            case (_, .paused): pickerDraft = kidHours.settings.selection
            case (_, .alwaysOpen): pickerDraft = kidHours.settings.alwaysOpen
            case (.paused, nil): kidHours.update(selection: pickerDraft)
            case (.alwaysOpen, nil): kidHours.update(alwaysOpen: pickerDraft)
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

    private func enabledBinding(_ schedule: KidHoursSchedule) -> Binding<Bool> {
        Binding(
            get: { schedule.isEnabled },
            set: { enabled in
                // Turning on is the paid part; turning off never is.
                guard !enabled || oyno.requireEntitlement() else { return }
                kidHours.setEnabled(enabled, for: schedule)
            }
        )
    }

    // MARK: Words

    private var status: String {
        if let current = kidHours.current {
            return String(interface: "On now · ends \(Format.timeOfDay(minutes: current.end))")
        }
        if let ends = kidHours.breakEndsAt {
            return String(interface: "Apps open until \(Format.timeOfDay(date: ends))")
        }
        guard let schedule = kidHours.featured else { return String(interface: "No schedule yet") }
        guard schedule.isEnabled, let next = schedule.nextStart(after: .now) else { return String(interface: "Off") }
        return String(interface: "Starts \(Format.dayAndTime(next))")
    }

    private func pill(_ schedule: KidHoursSchedule) -> String {
        if schedule.id == kidHours.current?.id, let ends = schedule.end(on: .now) {
            return String(interface: "On now · ends in \(Format.remaining(until: ends))")
        }
        if let ends = kidHours.breakEndsAt, schedule.contains(.now) {
            return String(interface: "Apps open until \(Format.timeOfDay(date: ends))")
        }
        guard schedule.isEnabled, let next = schedule.nextStart(after: .now) else { return String(interface: "Off") }
        return String(interface: "Starts \(Format.dayAndTime(next))")
    }

    private var notNowHint: String {
        if let ends = kidHours.breakEndsAt { return String(interface: "Open until \(Format.timeOfDay(date: ends))") }
        return kidHours.isOnNow ? String(interface: "Hold 2 sec") : String(interface: "Only during Kid hours")
    }

    private static func summary(_ schedule: KidHoursSchedule) -> String {
        "\(Format.weekdays(schedule.weekdays)) · \(Format.timeRange(start: schedule.start, end: schedule.end))"
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

    @ViewBuilder
    private var featured: some View {
        if let schedule = kidHours.featured {
            Card(raised: true) {
                HStack(spacing: Metric.Space.m) {
                    Button {
                        Haptics.tap()
                        editing = .edit(schedule)
                    } label: {
                        VStack(alignment: .leading, spacing: 4) {
                            StatusPill(text: pill(schedule), on: schedule.id == kidHours.current?.id)
                            Text(verbatim: schedule.name)
                                .font(Typeface.ui(19, .extrabold, relativeTo: .title3))
                                .tracking(-0.4)
                                .foregroundStyle(Palette.ink)
                            Text(verbatim: Self.summary(schedule)).oynoCaption()
                        }
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .contentShape(.rect)
                    }
                    .buttonStyle(.plain)
                    Toggle(isOn: enabledBinding(schedule)) { EmptyView() }
                        .toggleStyle(.pill)
                        .fixedSize()
                        .accessibilityLabel(Text(verbatim: schedule.name))
                }
            }
        } else {
            Card(raised: true) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("No schedule yet").oynoRowTitle()
                    Text("Add one with New, and pick the apps to pause below.").oynoCaption()
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
                        ScheduleCard(schedule: schedule, summary: Self.summary(schedule)) { editing = .edit(schedule) }
                    }
                    AddCard(width: 110) { editing = .new }
                }
            }
            .scrollIndicators(.hidden)
        }
    }

    private var paused: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            SectionHeader(title: "Paused during Kid hours") {
                EditLink { picking = .paused }
            }
            TokenGrid(items: kidHours.paused) { picking = .paused }
        }
    }

    /// Empty until the parent picks something: iOS keeps Phone and Messages reachable anyway.
    private var alwaysOpen: some View {
        VStack(alignment: .leading, spacing: Metric.Space.s) {
            SectionHeader(title: "Always open") {
                EditLink { picking = .alwaysOpen }
            }
            TokenGrid(items: kidHours.alwaysOpen) { picking = .alwaysOpen }
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

/// A schedule on its way into the sheet. New ones start on, every day, after dinner.
private struct ScheduleDraft: Identifiable {
    let schedule: KidHoursSchedule
    let isNew: Bool

    var id: UUID { schedule.id }

    static var new: ScheduleDraft {
        ScheduleDraft(schedule: KidHoursSchedule(name: "", start: 19 * 60, end: 20 * 60, weekdays: Set(1...7)), isNew: true)
    }

    static func edit(_ schedule: KidHoursSchedule) -> ScheduleDraft { ScheduleDraft(schedule: schedule, isNew: false) }
}
