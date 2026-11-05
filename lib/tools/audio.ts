/**
 * Every sound the tools make, made in the browser so there is nothing to license or download
 * but the bell. A browser only starts audio from a tap, so call `unlockAudio` in the handler.
 */
let context: AudioContext | null = null;
let chime: Promise<AudioBuffer> | null = null;

export function unlockAudio(): AudioContext {
  context ??= new AudioContext();
  void context.resume();
  return context;
}

/** Rings the bell `seconds` from now, and returns how to cancel it. */
export function ringAfter(seconds: number): () => void {
  const audio = unlockAudio();
  const at = audio.currentTime + seconds;
  let cancelled = false;
  let source: AudioBufferSourceNode | null = null;
  chime ??= fetch("/sounds/chime.wav")
    .then((response) => response.arrayBuffer())
    .then((bytes) => audio.decodeAudioData(bytes));
  chime.then(
    (buffer) => {
      if (cancelled) return;
      source = audio.createBufferSource();
      source.buffer = buffer;
      source.connect(audio.destination);
      source.start(Math.max(at, audio.currentTime));
    },
    () => {
      chime = null;
    },
  );
  return () => {
    cancelled = true;
    source?.stop();
  };
}

/** A short tone, the signal a light changed. */
export function beep(hertz: number, seconds = 0.25): void {
  const audio = unlockAudio();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  const now = audio.currentTime;
  oscillator.frequency.value = hertz;
  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + seconds);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(now);
  oscillator.stop(now + seconds);
}

/** Says a call in the page's language. Stays silent when the device has no voice for it, so a
 * Polish page never reads Polish in an English voice. */
export function speak(text: string, lang: string): void {
  if (!("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  const base = lang.split("-")[0].toLowerCase();
  if (voices.length > 0 && !voices.some((voice) => voice.lang.toLowerCase().startsWith(base))) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export const stopSpeaking = () => {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
};
