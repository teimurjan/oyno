import AVFoundation

/// The bell at the end of a round, `Chime.wav` from `bun run chime:build`. It plays over the
/// silent switch and over whatever else is on: the phone has been face down on the rug for
/// ten minutes, and this is the one thing it has to say. The timer's bell button turns it off.
@MainActor
enum Chime {
    private static var player: AVAudioPlayer?

    static func play() {
        guard let url = Bundle.main.url(forResource: "Chime", withExtension: "wav") else { return }
        let session = AVAudioSession.sharedInstance()
        try? session.setCategory(.playback, options: .mixWithOthers)
        try? session.setActive(true)
        player = try? AVAudioPlayer(contentsOf: url)
        player?.play()
    }
}
