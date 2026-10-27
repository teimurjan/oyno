import SwiftUI

/// "Anything new?": the signs to tap and a line in the parent's own words, which go in the
/// kid's firsts. After a moment on Done, and from Home after Kid hours.
struct NoticeForm: View {
    @Binding var signs: Set<First.Sign>
    @Binding var words: String
    @AppStorage("oyno.kidName") private var kidName = ""

    var body: some View {
        VStack(alignment: .leading, spacing: Metric.Space.m) {
            Text(kidName.isEmpty ? "Tap what you saw. It goes in their firsts." : "Tap what you saw. It goes in \(kidName)'s firsts.")
                .oynoEyebrow()
            FlowLayout(spacing: Metric.Space.s) {
                ForEach(First.Sign.allCases) { sign in
                    let on = signs.contains(sign)
                    Button {
                        Haptics.tap()
                        if on { signs.remove(sign) } else { signs.insert(sign) }
                    } label: {
                        Text(verbatim: sign.label)
                            .font(Typeface.ui(14, .bold, relativeTo: .subheadline))
                            .foregroundStyle(on ? Palette.pastelGreen.ink : Palette.ink)
                            .padding(.horizontal, 14)
                            .frame(minHeight: Metric.tapTarget)
                            .background(on ? Palette.pastelGreen.fill : Palette.surface, in: .capsule)
                            .overlay {
                                Capsule().strokeBorder(on ? Palette.good : Palette.hairline, lineWidth: on ? 1.5 : 1)
                            }
                            .contentShape(.capsule)
                    }
                    .buttonStyle(.plain)
                    .accessibilityAddTraits(on ? .isSelected : [])
                }
            }
            VStack(alignment: .leading, spacing: 6) {
                Text("Or in your words")
                    .font(Typeface.ui(13, .semibold, relativeTo: .caption))
                    .foregroundStyle(Palette.muted)
                TextField(text: $words, prompt: Text("They poured the water all by themselves")) {
                    Text("Or in your words")
                }
                .font(Typeface.ui(15, .medium, relativeTo: .body))
                .foregroundStyle(Palette.ink)
                .padding(.horizontal, 14)
                .frame(height: Metric.tapTarget)
                .background(Palette.surface, in: .rect(cornerRadius: 14))
                .overlay { RoundedRectangle(cornerRadius: 14).strokeBorder(Palette.hairline, lineWidth: 1) }
            }
        }
    }

    /// What Save writes, nil when nothing was tapped or typed.
    static func first(kind: MomentKind, signs: Set<First.Sign>, words: String, on date: Date = .now) -> First? {
        let trimmed = words.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !signs.isEmpty || !trimmed.isEmpty else { return nil }
        return First(date: date, kind: kind, signs: First.Sign.allCases.filter(signs.contains), words: trimmed.isEmpty ? nil : trimmed)
    }
}
