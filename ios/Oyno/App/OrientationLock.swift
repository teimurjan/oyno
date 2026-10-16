import UIKit

/// A tall phone stays upright, the only way its screens are drawn. A screen that is not tall,
/// either side of iPhone Duo or an iPad, turns with the device.
final class OrientationLock: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
        guard let screen = window?.windowScene?.screen, screen.traitCollection.userInterfaceIdiom == .phone else { return .all }
        let sides = screen.bounds.size
        return max(sides.width, sides.height) >= min(sides.width, sides.height) * 1.7 ? .portrait : .allButUpsideDown
    }
}
