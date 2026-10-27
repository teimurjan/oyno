import ImageIO
import UIKit

/// The paintings bundled by `bun run art:build` as plain WebP files: each game's (`<id>.webp`),
/// each keepsake's (`keepsake-<id>.webp`), each everyday moment's (`moment-<id>.webp`) and each
/// petal's (`petal-<id>.webp`). Decoded once each, at the size asked for. A game not painted
/// yet has none.
enum Painting {
    private static let cache = NSCache<NSString, UIImage>()

    /// The whole painting, behind the game on Play.
    static func of(_ activity: Activity) -> UIImage? { image(named: activity.id, maxPixels: nil) }

    /// The painting decoded straight to `pixels` on its long edge, for a list row.
    static func thumbnail(of activity: Activity, pixels: Int) -> UIImage? { image(named: activity.id, maxPixels: pixels) }

    static func of(_ moment: OpenMoment) -> UIImage? { image(named: moment.paintingName, maxPixels: nil) }

    static func of(_ keepsake: Keepsake) -> UIImage? { image(named: "keepsake-\(keepsake.id)", maxPixels: nil) }

    /// A petal from `art/petals.json`, which floats around the planet after a round.
    static func petal(_ id: String) -> UIImage? { image(named: "petal-\(id)", maxPixels: nil) }

    private static func image(named name: String, maxPixels: Int?) -> UIImage? {
        let key = "\(name)@\(maxPixels ?? 0)" as NSString
        if let cached = cache.object(forKey: key) { return cached }
        guard let url = Bundle.main.url(forResource: name, withExtension: "webp"),
              let source = CGImageSourceCreateWithURL(url as CFURL, nil)
        else { return nil }
        let decoded = if let maxPixels {
            CGImageSourceCreateThumbnailAtIndex(source, 0, [
                kCGImageSourceCreateThumbnailFromImageAlways: true,
                kCGImageSourceThumbnailMaxPixelSize: maxPixels,
                kCGImageSourceShouldCacheImmediately: true,
            ] as CFDictionary)
        } else {
            CGImageSourceCreateImageAtIndex(source, 0, [kCGImageSourceShouldCacheImmediately: true] as CFDictionary)
        }
        guard let decoded else { return nil }
        let image = UIImage(cgImage: decoded)
        cache.setObject(image, forKey: key)
        return image
    }
}

private extension OpenMoment {
    /// Every band of a kind shares one painting.
    var paintingName: String { "moment-\(kind.paintingID ?? id)" }
}
