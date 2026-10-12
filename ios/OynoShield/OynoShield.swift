import ManagedSettings
import ManagedSettingsUI
import SwiftUI

/// Draws the screen a paused app opens to, in place of Screen Time's own. Apple allows only an
/// icon, a title, a subtitle and two buttons, all in the system font. Every request counts as
/// one more pause of that app today.
final class OynoShield: ShieldConfigurationDataSource {
    override func configuration(shielding application: Application) -> ShieldConfiguration {
        configuration(name: application.localizedDisplayName, token: application.token)
    }

    override func configuration(shielding application: Application, in category: ActivityCategory) -> ShieldConfiguration {
        configuration(name: application.localizedDisplayName, token: application.token)
    }

    override func configuration(shielding webDomain: WebDomain) -> ShieldConfiguration {
        configuration(name: webDomain.domain, token: webDomain.token)
    }

    override func configuration(shielding webDomain: WebDomain, in category: ActivityCategory) -> ShieldConfiguration {
        configuration(name: webDomain.domain, token: webDomain.token)
    }

    private func configuration(name: String?, token: (some Encodable)?) -> ShieldConfiguration {
        let key = token.flatMap { try? JSONEncoder().encode($0) }?.base64EncodedString()
        var stats = ShieldStats.load()
        if let key {
            stats = stats.counting(key, at: .now)
            stats.save()
        }
        let app = name ?? String(interface: "This app")
        let pausedToday = key.flatMap { stats.paused[$0] }

        let lines = [
            stats.rounds > 0 ? String(interface: "…and counting on your little planet.") : nil,
            String(interface: "\(app) is paused for Kid hours. Your kid gets you instead."),
            pausedToday.map { String(interface: "\(app) paused \($0)× today.") },
        ]
        let title = stats.rounds > 0
            ? String(interface: "\(stats.rounds) rounds together")
            : String(interface: "Kid hours")

        return ShieldConfiguration(
            backgroundBlurStyle: nil,
            backgroundColor: UIColor(Palette.ink),
            icon: UIImage(named: "ShieldMark"),
            title: .init(text: title, color: .white),
            subtitle: .init(text: lines.compactMap { $0 }.joined(separator: "\n\n"), color: .white.withAlphaComponent(0.7)),
            primaryButtonLabel: .init(text: String(interface: "Open Oyno"), color: UIColor(Palette.ink)),
            primaryButtonBackgroundColor: .white,
            secondaryButtonLabel: .init(text: String(interface: "Dismiss"), color: .white)
        )
    }
}
