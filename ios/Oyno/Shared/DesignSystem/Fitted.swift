import SwiftUI

/// A Screen Time label at the size a tile wants. Those labels set their own font and size and
/// ignore ours, so the one lever left is a transform: measure what the system drew, then scale
/// it. The icon arrives small, so a scaled one is a little soft; there is no API for a bigger one.
struct Fitted<Content: View>: View {
    let height: CGFloat
    /// The box to fit into, or the content's own width at that height.
    var width: CGFloat?
    @ViewBuilder var content: Content

    @State private var natural = CGSize.zero

    private var scale: CGFloat {
        guard natural.width > 0, natural.height > 0 else { return 1 }
        let byHeight = height / natural.height
        return width.map { min(byHeight, $0 / natural.width) } ?? byHeight
    }

    var body: some View {
        content
            .fixedSize()
            .onGeometryChange(for: CGSize.self) { $0.size } action: { natural = $0 }
            .scaleEffect(scale)
            .frame(width: width ?? natural.width * scale, height: height)
    }
}
