import SwiftUI

/// A schedule's apps, hours, days and unlock, the tall size of its sheet. The name, Done and
/// Delete belong to the sheet around it.
struct ScheduleForm: View {
    @Binding var draft: KidHoursSchedule
    let onPickApps: () -> Void

    @Environment(KidHoursStore.self) private var kidHours

    var body: some View {
        VStack(spacing: Metric.Space.m) {
            Button {
                Haptics.tap()
                onPickApps()
            } label: {
                HStack(spacing: Metric.Space.m) {
                    Text("Pauses").oynoRowTitle()
                    Spacer(minLength: Metric.Space.s)
                    AppsPreview(items: kidHours.apps(of: draft))
                    Glyph.disclosure
                }
                .padding(.horizontal, Metric.cardPadding)
                .frame(minHeight: 56)
                .glassCard()
                .contentShape(.rect)
            }
            .buttonStyle(.plain)

            RowCard {
                HStack(spacing: 0) {
                    TimeConnector()
                    VStack(spacing: 0) {
                        timeRow("From", \.start)
                        RowDivider(inset: 0)
                        timeRow("To", \.end)
                    }
                }
            }

            Card {
                VStack(spacing: Metric.Space.m) {
                    HStack {
                        Text("On these days").oynoRowTitle()
                        Spacer()
                        Text(verbatim: Format.weekdays(draft.weekdays)).oynoCaption()
                    }
                    weekdays
                }
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
                        MinuteChips(selection: $draft.unlockMinutes)
                            .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                }
            }
        }
    }

    private func timeRow(_ label: LocalizedStringResource, _ keyPath: WritableKeyPath<KidHoursSchedule, Int>) -> some View {
        DatePicker(selection: timeBinding(keyPath), displayedComponents: .hourAndMinute) {
            Text(label).oynoRowTitle()
        }
        .padding(.trailing, Metric.cardPadding)
        .frame(minHeight: 52)
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

/// The dot, the dashed line and the ring that join From to To.
private struct TimeConnector: View {
    private static let dot: CGFloat = 8

    var body: some View {
        VStack(spacing: 4) {
            Circle().fill(Palette.muted).frame(width: Self.dot, height: Self.dot)
            VerticalLine()
                .stroke(Palette.muted, style: StrokeStyle(lineWidth: 1, dash: [3, 3]))
                .frame(width: 1)
            Circle().strokeBorder(Palette.muted, lineWidth: 1.5).frame(width: Self.dot, height: Self.dot)
        }
        // Each dot sits level with its row's middle.
        .padding(.vertical, 26 - Self.dot / 2)
        .frame(width: Metric.cardPadding + 20)
        .accessibilityHidden(true)
    }
}

private struct VerticalLine: Shape {
    func path(in rect: CGRect) -> Path {
        Path { path in
            path.move(to: CGPoint(x: rect.midX, y: rect.minY))
            path.addLine(to: CGPoint(x: rect.midX, y: rect.maxY))
        }
    }
}
