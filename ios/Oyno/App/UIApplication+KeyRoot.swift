import UIKit

extension UIApplication {
    /// Google's sign-in sheet needs a UIKit presenter, which SwiftUI doesn't hand out.
    static var keyRootViewController: UIViewController? {
        shared.connectedScenes
            .compactMap { $0 as? UIWindowScene }
            .flatMap(\.windows)
            .first { $0.isKeyWindow }?
            .rootViewController
    }

    /// Puts the keyboard away, whatever is holding it.
    ///
    /// The number pads are why this exists: `.decimalPad` has no return key, so a field
    /// focused on a screen that does not scroll left the operator with a keypad and no
    /// way out of it. Addressed to the responder chain rather than to a `FocusState`,
    /// because the one bar that answers for every field on a screen does not know which
    /// of them is focused.
    static func dismissKeyboard() {
        shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
    }
}
