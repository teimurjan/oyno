import FamilyControls
import SwiftUI

/// D7 on the canvas: when Kid hours run, which apps pause, and the hold-to-skip "Not now".
/// Turning Kid hours on is gated like any other write; looking at them is free.
struct KidHoursScreen: View {
    @Environment(KidHoursStore.self) private var kidHours
    @Environment(OynoStore.self) private var oyno
    @State private var picking = false
    @State private var selection = FamilyActivitySelection()

    var body: some View {
        Screen {
            ScreenHeader(title: "Kid hours", subtitle: status)

            if !kidHours.isAuthorized {
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
            } else {
                toggle
                schedule
                paused
                if kidHours.isOnNow { NotNowButton { kidHours.takeBreak() } }
            }

            Text("Phone, Messages and Maps are never paused.")
                .oynoCaption()
        }
        .familyActivityPicker(isPresented: $picking, selection: $selection)
        .onChange(of: picking) { _, open in
            if open { selection = kidHours.settings.selection } else { kidHours.update(selection: selection) }
        }
    }

    private var status: String {
        let schedule = kidHours.settings.schedule
        if !kidHours.settings.isEnabled { return String(interface: "Off") }
        if kidHours.isOnNow { return String(interface: "On now · ends \(Format.timeOfDay(minutes: schedule.end))") }
        return String(interface: "Starts \(Format.timeOfDay(minutes: schedule.start))")
    }

    private var toggle: some View {
        Card(raised: true) {
            Toggle(isOn: Binding(
                get: { kidHours.settings.isEnabled },
                set: { enabled in
                    // Turning on is the paid part; turning off never is.
                    guard !enabled || oyno.requireEntitlement() else { return }
                    kidHours.setEnabled(enabled)
                }
            )) {
                VStack(alignment: .leading, spacing: 2) {
                    Text("Pause apps during Kid hours").oynoRowTitle()
                    Text("\(kidHours.settings.pausedCount) apps and categories picked").oynoCaption()
                }
            }
            .tint(Palette.good)
        }
    }

    private var schedule: some View {
        let current = kidHours.settings.schedule
        return Card {
            VStack(alignment: .leading, spacing: Metric.Space.m) {
                Text("Schedule").oynoEyebrow()
                DatePicker("Starts", selection: timeBinding(\.start), displayedComponents: .hourAndMinute)
                    .font(Typeface.ui(15, .semibold, relativeTo: .body))
                DatePicker("Ends", selection: timeBinding(\.end), displayedComponents: .hourAndMinute)
                    .font(Typeface.ui(15, .semibold, relativeTo: .body))
                HStack(spacing: 6) {
                    ForEach(Self.weekdayOrder, id: \.self) { weekday in
                        let on = current.weekdays.contains(weekday)
                        Button {
                            Haptics.tap()
                            var next = current
                            if on { next.weekdays.remove(weekday) } else { next.weekdays.insert(weekday) }
                            kidHours.update(schedule: next)
                        } label: {
                            Text(verbatim: Self.symbol(weekday))
                                .font(Typeface.ui(13, .bold, relativeTo: .caption))
                                .foregroundStyle(on ? Palette.onAccent : Palette.ink)
                                .frame(width: 38, height: 38)
                                .background(on ? Palette.accent : Palette.surface.opacity(0.7), in: .circle)
                        }
                        .buttonStyle(.plain)
                        .accessibilityLabel(Text(verbatim: Calendar.current.weekdaySymbols[weekday - 1]))
                        .accessibilityAddTraits(on ? .isSelected : [])
                    }
                }
                if current.start >= current.end {
                    Text("The end has to be after the start.")
                        .oynoCaption(Palette.alert)
                }
            }
        }
    }

    private var paused: some View {
        Card {
            VStack(alignment: .leading, spacing: Metric.Space.s) {
                Text("Paused during Kid hours").oynoEyebrow()
                Text(kidHours.settings.pausedCount == 0
                     ? String(interface: "Nothing picked yet")
                     : String(interface: "\(kidHours.settings.pausedCount) apps and categories"))
                    .oynoRowTitle()
                Button {
                    Haptics.tap()
                    picking = true
                } label: {
                    Text("Choose apps")
                        .font(Typeface.ui(15, .bold, relativeTo: .subheadline))
                        .foregroundStyle(Palette.ink)
                        .frame(height: Metric.tapTarget)
                }
                .buttonStyle(.plain)
            }
        }
    }

    /// Minutes after midnight, as a `Date` today, for the time pickers.
    private func timeBinding(_ keyPath: WritableKeyPath<KidHoursSchedule, Int>) -> Binding<Date> {
        Binding(
            get: {
                let minutes = kidHours.settings.schedule[keyPath: keyPath]
                return Calendar.current.date(bySettingHour: minutes / 60, minute: minutes % 60, second: 0, of: .now) ?? .now
            },
            set: { date in
                let parts = Calendar.current.dateComponents([.hour, .minute], from: date)
                var next = kidHours.settings.schedule
                next[keyPath: keyPath] = (parts.hour ?? 0) * 60 + (parts.minute ?? 0)
                kidHours.update(schedule: next)
            }
        )
    }

    /// Monday first, the way a week of evenings reads.
    private static let weekdayOrder = [2, 3, 4, 5, 6, 7, 1]

    private static func symbol(_ weekday: Int) -> String {
        Calendar.current.veryShortWeekdaySymbols[weekday - 1]
    }
}

/// "Not now", held for a second and a half: a tap is too easy to make without meaning it.
private struct NotNowButton: View {
    let action: () -> Void

    @State private var progress: CGFloat = 0

    var body: some View {
        HStack(spacing: 9) {
            ZStack {
                Circle().stroke(Palette.ink.opacity(0.14), lineWidth: 2.2)
                Circle()
                    .trim(from: 0, to: progress)
                    .stroke(Palette.ink, style: StrokeStyle(lineWidth: 2.2, lineCap: .round))
                    .rotationEffect(.degrees(-90))
            }
            .frame(width: 24, height: 24)
            Text("Hold for not now (\(KidHoursStore.breakMinutes) min)")
                .font(Typeface.ui(15, .semibold, relativeTo: .subheadline))
                .foregroundStyle(Palette.muted)
        }
        .frame(height: Metric.tapTarget)
        .contentShape(.rect)
        .onLongPressGesture(minimumDuration: 1.5) {
            Haptics.success()
            progress = 0
            action()
        } onPressingChanged: { pressing in
            withAnimation(pressing ? .linear(duration: 1.5) : .easeOut(duration: 0.2)) {
                progress = pressing ? 1 : 0
            }
        }
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(.isButton)
        .accessibilityAction { action() }
    }
}
