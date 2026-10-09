import SwiftUI
import UIKit

/// The frame every screen sits in: canvas background, 20pt gutters, and a title block
/// that pairs a large title with one line of context and an optional trailing control.
///
/// The context line is not decoration. Each screen answers "which shop state am I looking
/// at" in it — `9 spools · 6.42 kg on hand`, `41 prints · 3 failed · 2.9 kg used` — so a
/// glance from two feet away is enough to know whether the screen needs attention.
struct ScreenHeader<Trailing: View>: View {
    let title: LocalizedStringResource
    let subtitle: String
    /// The way back out of a pushed screen.
    ///
    /// `Screen` hides the navigation bar so each screen can draw its own title, which
    /// also takes the system's back button with it — and a pushed screen with no back
    /// button is a screen the operator is stuck on. Settings was exactly that: reachable
    /// from the quote screen's gear and impossible to leave without force-quitting. Any
    /// screen that is pushed rather than presented has to pass this.
    var onBack: (() -> Void)?
    @ViewBuilder var trailing: Trailing

    var body: some View {
        HStack(alignment: .top, spacing: Metric.Space.m) {
            if let onBack {
                Button {
                    Haptics.tap()
                    onBack()
                } label: {
                    Glyph(symbol: "chevron.left", size: 17, weight: .semibold)
                        .glyphButtonFace()
                }
                .buttonStyle(.plain)
                .accessibilityLabel(Text("Back"))
            }

            VStack(alignment: .leading, spacing: 3) {
                Text(title).oynoTitle()
                Text(subtitle)
                    .font(Typeface.ui(13, .regular, relativeTo: .footnote))
                    .foregroundStyle(Palette.muted)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Spacer(minLength: Metric.Space.s)
            trailing
        }
    }
}

extension ScreenHeader where Trailing == EmptyView {
    init(title: LocalizedStringResource, subtitle: String, onBack: (() -> Void)? = nil) {
        self.init(title: title, subtitle: subtitle, onBack: onBack) { EmptyView() }
    }
}

/// Wraps a screen's content in the canvas and the standard gutter, and hides the
/// navigation chrome — these screens draw their own titles.
///
/// **The content is pinned to the viewport's width, and that is not cosmetic.** A
/// `ScrollView(.vertical)` is a `UIScrollView` underneath, and a `UIScrollView` scrolls in
/// whichever direction its content is bigger than its bounds — the axis only decides where
/// it bounces. So one row wide enough to overflow, and a whole screen slides sideways under
/// the thumb: the fixed −/+ group on a stepper and an untruncatable unit suffix are each
/// enough to do it on a 4.7" phone, and both together did it on Quick Quote and on Settings.
/// Pinning the width means such a row is clipped rather than hidden off the side of a screen
/// nobody expected to move, which is the failure worth having — a number you can see is cut
/// off gets fixed, a screen that drifts sideways just feels broken.
struct Screen<Content: View>: View {
    var scrolls = true
    @ViewBuilder var content: Content

    var body: some View {
        Group {
            if scrolls {
                ScrollView {
                    VStack(alignment: .leading, spacing: Metric.Space.l) { content }
                        .padding(.horizontal, Metric.gutter)
                        .padding(.top, Metric.Space.s)
                        .padding(.bottom, Metric.Space.xl)
                        .containerRelativeFrame(.horizontal)
                }
                .scrollDismissesKeyboard(.interactively)
            } else {
                VStack(alignment: .leading, spacing: Metric.Space.l) { content }
                    .padding(.horizontal, Metric.gutter)
                    .padding(.top, Metric.Space.s)
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
        // Past every safe area, the keyboard's included. The keypad's backdrop is
        // translucent, so a canvas that stops at the keyboard shows the window's black
        // through it — and the home indicator strip below it with nothing painted at all.
        .background(Palette.sky.ignoresSafeArea())
        .background { SwipeBackGesture() }
        .toolbar(.hidden, for: .navigationBar)
        .keyboardDismissBar()
    }
}

/// The system's swipe-from-the-left-edge back gesture, put back.
///
/// UIKit switches its interactive pop gesture off whenever the navigation bar is hidden
/// — the back chevron and the swipe are one feature to it — and `Screen` hides the bar
/// on every screen in the app so each can draw its own title. So every pushed screen
/// (Settings, a printer, the log flow) could only be left by aiming at a 44pt chevron in
/// the top-left corner, one-handed, standing at a machine.
///
/// Taking the gesture's delegate over is what restores it. The delegate says yes only
/// when there is something to pop back to: swiping on the root of a stack is what
/// wedges a `UINavigationController` into a state where the next push shows a blank
/// screen.
private struct SwipeBackGesture: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> UIViewController { Host() }

    func updateUIViewController(_ controller: UIViewController, context: Context) {}

    final class Host: UIViewController, UIGestureRecognizerDelegate {
        override func viewDidLoad() {
            super.viewDidLoad()
            view.backgroundColor = .clear
            view.isUserInteractionEnabled = false
        }

        /// Claimed on every appearance rather than once. The delegate reference is weak,
        /// so popping back to a screen whose host set it earlier arrives with it already
        /// cleared by the screen that has just gone away.
        override func viewWillAppear(_ animated: Bool) {
            super.viewWillAppear(animated)
            guard let gesture = navigationController?.interactivePopGestureRecognizer else { return }
            gesture.delegate = self
            gesture.isEnabled = true
        }

        func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
            guard let navigation = navigationController else { return false }
            // Something to go back to, and nothing already on its way: a swipe begun on
            // top of a push that is still animating is the other half of the same
            // wedged-stack bug.
            return navigation.viewControllers.count > 1 && navigation.transitionCoordinator == nil
        }
    }
}

extension View {
    /// One "Done" above the keyboard, for every field on the screen below it.
    ///
    /// Every number in this app is typed into a `.decimalPad`, which has no return key,
    /// so on any screen that does not scroll — an editor sheet, sign-in —
    /// the keypad came up and stayed up. `scrollDismissesKeyboard` answers only where
    /// there is something to scroll; this answers everywhere, and it sits on `Screen` so
    /// a new screen inherits it rather than remembering to ask.
    func keyboardDismissBar() -> some View {
        toolbar {
            ToolbarItemGroup(placement: .keyboard) {
                Spacer()
                Button("Done") { UIApplication.dismissKeyboard() }
            }
        }
    }
}

extension View {
    /// The bar pinned to the bottom of a screen — the price and its action on Quick Quote,
    /// the save button on every editor.
    ///
    /// It steps aside for the keyboard rather than riding above it. SwiftUI lifts a
    /// `safeAreaInset` bar clear of the keypad, which stacks it under the Done bar that
    /// `keyboardDismissBar` draws and leaves the two of them squatting on the half of the
    /// screen the keyboard has not already taken. Nothing on this bar is wanted mid-entry
    /// anyway: a quote is committed after the numbers are typed, not during.
    func pinnedBar<Bar: View>(@ViewBuilder _ bar: () -> Bar) -> some View {
        modifier(PinnedBar(bar: bar()))
    }
}

private struct PinnedBar<Bar: View>: ViewModifier {
    let bar: Bar
    @State private var keyboardIsUp = false

    func body(content: Content) -> some View {
        content
            .safeAreaInset(edge: .bottom) {
                if !keyboardIsUp { bar.pinnedBarBackground() }
            }
            .onReceive(NotificationCenter.default.publisher(for: UIResponder.keyboardWillShowNotification)) {
                setKeyboard(up: true, from: $0)
            }
            .onReceive(NotificationCenter.default.publisher(for: UIResponder.keyboardWillHideNotification)) {
                setKeyboard(up: false, from: $0)
            }
    }

    /// Timed off the notification rather than a constant, so the bar leaves with the
    /// keyboard instead of blinking out from under it.
    private func setKeyboard(up: Bool, from note: Notification) {
        let duration = note.userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double ?? 0.25
        withAnimation(.easeOut(duration: duration)) { keyboardIsUp = up }
    }
}

private extension View {
    /// The ground under a pinned bar.
    ///
    /// The canvas, not a material. This palette is a flat near-white, so a blur over it
    /// resolves a half-step darker than everything around it and the bar reads as a grey
    /// strip taped across the bottom of the screen rather than as part of it. The hairline
    /// is what the material was really providing: the line that says the content scrolls
    /// under here.
    func pinnedBarBackground() -> some View {
        background(Palette.canvas)
            .overlay(alignment: .top) {
                Rectangle().fill(Palette.hairline).frame(height: 1)
            }
    }
}
