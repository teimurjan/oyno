import ImageIO
import UIKit

/// The games' paintings, bundled as `<id>.webp` by `bun run art:build`. Decoded once each, at the
/// size asked for. A game not painted yet has none.
enum ActivityArt {
    private static let cache = NSCache<NSString, UIImage>()

    /// The whole painting, behind the game on Play.
    static func painting(for activity: Activity) -> UIImage? { image(for: activity.id, maxPixels: nil) }

    /// The painting decoded straight to `pixels` on its long edge, for a list row.
    static func thumbnail(for activity: Activity, pixels: Int) -> UIImage? { image(for: activity.id, maxPixels: pixels) }

    private static func image(for id: String, maxPixels: Int?) -> UIImage? {
        let key = "\(id)@\(maxPixels ?? 0)" as NSString
        if let cached = cache.object(forKey: key) { return cached }
        guard let url = Bundle.main.url(forResource: id, withExtension: "webp"),
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
