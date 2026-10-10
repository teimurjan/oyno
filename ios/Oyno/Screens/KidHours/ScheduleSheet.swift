import SwiftUI

/// One schedule's name, hours, days and unlock, as a sheet over Kid hours. Save is the one commit;
/// an existing schedule can also be deleted from here.
struct ScheduleSheet: View {
    @State private var draft: KidHoursSchedule
    private let isNew: Bool
    private let onSave: (KidHoursSchedule) -> Void
    private let onDelete: (() -> Void)?

    @Environment(\.dismiss) private var dismiss

    init(schedule: KidHoursSchedule, isNew: Bool, onSave: @escaping (KidHoursSchedule) -> Void, onDelete: (() -> Void)?) {
        _draft = State(initialValue: schedule)
        self.isNew = isNew
        self.onSave = onSave
        self.onDelete = onDelete
    }

    var body: some View {
        SheetScreen(title: isNew ? "New schedule" : "Edit schedule", subtitle: subtitle) {
            RowCard(raised: true) {
                TextFieldRow(label: "Name", text: $draft.name, prompt: "Bedtime")
                RowDivider(inset: 0)
                timeRow("Starts", \.start)
                RowDivider(inset: 0)
                timeRow("Ends", \.end)
            }

            Card {
                VStack(alignment: .leading, spacing: Metric.Space.m) {
                    Text("Days").oynoEyebrow()
                    weekdays
                    if let problem {
                        Text(problem).oynoCaption(Palette.alert)
                    }
                }
            }

            Card {
                Toggle(isOn: $draft.isEnabled) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Pauses apps").oynoRowTitle()
                        Text(draft.isEnabled ? "On the days above." : "Kept, but not running.").oynoCaption()
                    }
                }
                .toggleStyle(.pill)
            }

            Card {
                VStack(alignment: .leading, spacing: Metric.Space.m) {
                    Toggle(isOn: $draft.unlocksAfterRound.animation(.easeOut(duration: 0.2))) {
                        VStack(alignment: .leading, spacing: 2) {
                            Text("Unlock after a round").oynoRowTitle()
                            Text(draft.unlocksAfterRound ? "Play together, then your apps open for a while." : "Apps stay paused until Kid hours end.")
                                .oynoCaption()
                        }
                    }
                    .toggleStyle(.pill)
                    if draft.unlocksAfterRound {
                        VStack(alignment: .leading, spacing: Metric.Space.s) {
                            Text("For").oynoEyebrow()
                            MinuteChips(selection: $draft.unlockMinutes)
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                }
            }

            PrimaryButton(title: "Save", enabled: draft.isValid) {
                onSave(draft)
                dismiss()
            }
            if let onDelete {
                Button {
                    onDelete()
                    dismiss()
                } label: {
                    Text("Delete schedule")
                        .font(Typeface.ui(14, .regular, relativeTo: .subheadline))
                        .foregroundStyle(Palette.alert)
                        .frame(maxWidth: .infinity)
                        .frame(height: Metric.tapTarget)
                }
                .buttonStyle(.plain)
            }
        }
    }

    private var subtitle: String {
        "\(Format.weekdays(draft.weekdays)) · \(Format.timeRange(start: draft.start, end: draft.end))"
    }

    private var problem: LocalizedStringResource? {
        if !draft.hasRoom { return "The end has to be at least \(KidHoursSchedule.minimumMinutes) minutes after the start." }
        if draft.weekdays.isEmpty { return "Pick at least one day." }
        return nil
    }

    private func timeRow(_ label: LocalizedStringResource, _ keyPath: WritableKeyPath<KidHoursSchedule, Int>) -> some View {
        DatePicker(selection: timeBinding(keyPath), displayedComponents: .hourAndMinute) {
            Text(label)
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
        }
        .padding(.horizontal, Metric.cardPadding)
        .padding(.vertical, 8)
    }

    /// Minutes after midnight, as a `Date` today, for the time pickers.
    private func timeBinding(_ keyPath: WritableKeyPath<KidHoursSchedule, Int>) -> Binding<Date> {
        Binding(
            get: {
                let minutes = draft[keyPath: keyPath]
                return Calendar.current.date(bySettingHour: minutes / 60, minute: minutes % 60, second: 0, of: .now) ?? .now
            },
            set: { date in
                let parts = Calendar.current.dateComponents([.hour, .minute], from: date)
                draft[keyPath: keyPath] = (parts.hour ?? 0) * 60 + (parts.minute ?? 0)
            }
        )
    }

    private var weekdays: some View {
        HStack(spacing: 6) {
            ForEach(Self.weekdayOrder, id: \.self) { weekday in
                let on = draft.weekdays.contains(weekday)
                Button {
                    Haptics.tap()
                    if on { draft.weekdays.remove(weekday) } else { draft.weekdays.insert(weekday) }
                } label: {
                    Text(verbatim: Self.symbol(weekday))
                        .font(Typeface.ui(13, .bold, relativeTo: .caption))
                        .foregroundStyle(on ? Palette.onAccent : Palette.ink)
                        .frame(maxWidth: .infinity)
                        .frame(height: Metric.tapTarget)
                        .background(on ? Palette.accent : Palette.track, in: .circle)
                }
                .buttonStyle(.plain)
                .accessibilityLabel(Text(verbatim: Calendar.current.weekdaySymbols[weekday - 1]))
                .accessibilityAddTraits(on ? .isSelected : [])
            }
        }
    }

    /// Monday first, the way a week of evenings reads.
    private static let weekdayOrder = [2, 3, 4, 5, 6, 7, 1]

    private static func symbol(_ weekday: Int) -> String {
        Calendar.current.veryShortWeekdaySymbols[weekday - 1]
    }
}
