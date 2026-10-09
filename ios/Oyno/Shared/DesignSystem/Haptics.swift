import UIKit

/// Every control that changes a number or commits a step gives one tick back.
///
/// Not decoration: the app is used standing at a running machine, where the screen is
/// often glanced at rather than watched, and a stepper you can feel land is a stepper you
/// can drive without looking down for the whole count.
enum Haptics {
    private static let light = UIImpactFeedbackGenerator(style: .light)

    static func tap() {
        light.impactOccurred()
    }

    static func success() {
        UINotificationFeedbackGenerator().notificationOccurred(.success)
    }

    static func warning() {
        UINotificationFeedbackGenerator().notificationOccurred(.warning)
    }
}
