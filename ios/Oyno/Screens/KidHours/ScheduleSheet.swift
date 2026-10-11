import FamilyControls
import SwiftUI

/// A schedule in one glass sheet with two sizes: the summary, sized to fit, and the form at full
/// height. The size is the mode, so Edit and a drag up both open the form, and Back and a drag
/// down both return to the summary. A new schedule opens straight into the form.
struct ScheduleSheet: View {
    private let scheduleID: UUID
    private let isNew: Bool
    /// The screen's save, which gates turning a schedule on.
    private let onSave: (KidHoursSchedule) -> Void

    @Environment(KidHoursStore.self) private var kidHours
    @Environment(\.dismiss) private var dismiss
    @State private var detent: PresentationDetent
    /// What the form edits. Copied from the saved schedule each time the form opens.
    @State private var draft: KidHoursSchedule
    /// The summary's own height.
    @State private var height: CGFloat = 520
    @State private var picking = false
    @State private var renaming = false
    @State private var newName = ""

    init(schedule: KidHoursSchedule, isNew: Bool, onSave: @escaping (KidHoursSchedule) -> Void) {
        scheduleID = schedule.id
        self.isNew = isNew
        self.onSave = onSave
        _detent = State(initialValue: isNew ? .large : .height(520))
        _draft = State(initialValue: schedule)
    }

    private var isEditing: Bool { detent == .large }

    private var saved: KidHoursSchedule? {
        kidHours.settings.schedules.first { $0.id == scheduleID }
    }

    var body: some View {
        ScrollView {
            VStack(spacing: Metric.Space.l) {
                header
                if isEditing {
                    ScheduleForm(draft: $draft) { picking = true }
                    footer
                } else if let saved {
                    ScheduleSummary(schedule: saved)
                }
            }
            .padding(.horizontal, Metric.gutter)
            .padding(.top, Metric.Space.xl)
            .padding(.bottom, Metric.Space.s)
            .screenshotCallout("sheet")
            .onGeometryChange(for: CGFloat.self) { $0.size.height } action: { measured in
                // Only the summary sizes the sheet, and only by a real change: the sheet's
                // width moves with its height, so following every half point never settles.
                guard !isEditing, abs(measured - height) > 1 else { return }
                height = measured
                detent = .height(measured)
            }
        }
        .scrollBounceBehavior(.basedOnSize)
        .presentationDetents(isNew ? [.large] : [.height(height), .large], selection: $detent)
        .onChange(of: detent) { _, now in
            if now == .large, !isNew, let saved { draft = saved }
        }
        .presentationDragIndicator(.visible)
        .glassSheet()
        .animation(.snappy, value: isEditing)
        .familyActivityPicker(isPresented: $picking, selection: $draft.apps)
        .alert("Name this schedule", isPresented: $renaming) {
            TextField("Bedtime", text: $newName)
            Button("Save") { rename() }
            Button("Cancel", role: .cancel) {}
        }
        // Deleted: nothing is left to show.
        .onChange(of: saved == nil) { _, gone in if gone && !isNew { dismiss() } }
    }

    /// Close and Edit around the summary; back (or close, when new), the name and rename around
    /// the form.
    private var header: some View {
        ZStack {
            if isEditing {
                Text(verbatim: draft.name)
                    .font(Typeface.ui(17, .extrabold, relativeTo: .headline))
                    .foregroundStyle(Palette.ink)
                    .lineLimit(1)
                    .padding(.horizontal, Metric.tapTarget + Metric.Space.m)
            }
            HStack {
                if isEditing && !isNew {
                    GlassIconButton(symbol: "chevron.left", label: "Back") { showSummary() }
                } else {
                    GlassIconButton(symbol: "xmark", label: "Close") { dismiss() }
                }
                Spacer()
                if isEditing {
                    GlassIconButton(symbol: "pencil", label: "Rename") {
                        newName = draft.name
                        renaming = true
                    }
                } else {
                    GlassPill(title: "Edit") {
                        withAnimation(.snappy) { detent = .large }
                    }
                }
            }
        }
    }

    private var footer: some View {
        VStack(spacing: Metric.Space.s) {
            if let problem = Self.problem(draft) {
                Text(problem).oynoCaption(Palette.alert)
            }
            PrimaryButton(title: "Done", symbol: "checkmark", enabled: draft.isValid) { commit() }
            if !isNew {
                Button {
                    Haptics.tap()
                    kidHours.remove(draft)
                    dismiss()
                } label: {
                    HStack(spacing: 6) {
                        Glyph(symbol: "trash", size: 14, weight: .semibold, color: Palette.alert)
                        Text("Delete schedule")
                            .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                            .foregroundStyle(Palette.alert)
                    }
                    .frame(maxWidth: .infinity)
                        .frame(height: Metric.tapTarget)
                }
                .buttonStyle(.plain)
            }
        }
        .padding(.top, Metric.Space.s)
    }

    /// A new schedule is done once saved; an edited one goes back to its summary.
    private func commit() {
        onSave(draft)
        if isNew { dismiss() } else { showSummary() }
    }

    private func showSummary() {
        withAnimation(.snappy) { detent = .height(height) }
    }

    private func rename() {
        let name = newName.trimmingCharacters(in: .whitespaces)
        guard !name.isEmpty else { return }
        draft.name = name
    }

    private static func problem(_ draft: KidHoursSchedule) -> LocalizedStringResource? {
        if !draft.hasRoom { return "The end has to be at least \(KidHoursSchedule.minimumMinutes) minutes after the start." }
        if draft.weekdays.isEmpty { return "Pick at least one day." }
        return nil
    }
}
