import { unlockAudio } from "./audio";

/**
 * The freeze dance tune: an eight-bar loop, written here and synthesised in the browser, so it
 * has no licence, no file and no ads between songs. Each array is one step per eighth note, as a
 * MIDI note, with null for a rest.
 */
const MELODY: readonly (number | null)[] = [
  72, null, 76, 79, 81, null, 79, 76, 74, null, 76, 79, 76, null, 72, null,
  72, 76, 79, 84, 81, 79, 76, 79, 74, 76, 74, 72, 69, null, 72, null,
  79, null, 79, 81, 79, 76, 72, null, 81, null, 81, 84, 81, 79, 76, null,
  74, 76, 79, 76, 74, 72, 74, 76, 72, null, 67, null, 72, null, null, null,
];
/** C, A minor, F, G, one chord a bar. */
const BASS_BY_BAR = [48, 45, 41, 43, 48, 45, 41, 43] as const;
const STEPS_PER_BAR = 8;
const STEPS_PER_BEAT = 2;

const SCHEDULE_AHEAD_SECONDS = 0.15;
const TICK_MS = 50;
const VOLUME = 0.32;

const hertz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

export interface Tune {
  play: (beatsPerMinute: number) => void;
  stop: () => void;
}

export function createTune(): Tune {
  const audio = unlockAudio();
  const master = audio.createGain();
  master.connect(audio.destination);
  master.gain.value = 0;

  let timer: ReturnType<typeof setInterval> | null = null;
  let step = 0;
  let nextAt = 0;
  let stepSeconds = 0.25;

  const note = (type: OscillatorType, midi: number, at: number, seconds: number, gain: number) => {
    const oscillator = audio.createOscillator();
    const envelope = audio.createGain();
    oscillator.type = type;
    oscillator.frequency.value = hertz(midi);
    envelope.gain.setValueAtTime(gain, at);
    envelope.gain.exponentialRampToValueAtTime(0.001, at + seconds);
    oscillator.connect(envelope).connect(master);
    oscillator.start(at);
    oscillator.stop(at + seconds);
  };

  const kick = (at: number) => {
    const oscillator = audio.createOscillator();
    const envelope = audio.createGain();
    oscillator.frequency.setValueAtTime(120, at);
    oscillator.frequency.exponentialRampToValueAtTime(45, at + 0.12);
    envelope.gain.setValueAtTime(0.8, at);
    envelope.gain.exponentialRampToValueAtTime(0.001, at + 0.14);
    oscillator.connect(envelope).connect(master);
    oscillator.start(at);
    oscillator.stop(at + 0.14);
  };

  const scheduleStep = (at: number) => {
    const melody = MELODY[step % MELODY.length];
    if (melody !== null) note("triangle", melody, at, stepSeconds * 1.6, 0.45);
    if (step % STEPS_PER_BEAT === 0) {
      kick(at);
      note("sine", BASS_BY_BAR[Math.floor(step / STEPS_PER_BAR) % BASS_BY_BAR.length], at, stepSeconds * 1.8, 0.5);
    }
  };

  const tick = () => {
    while (nextAt < audio.currentTime + SCHEDULE_AHEAD_SECONDS) {
      scheduleStep(nextAt);
      nextAt += stepSeconds;
      step += 1;
    }
  };

  return {
    play: (beatsPerMinute) => {
      stepSeconds = 60 / beatsPerMinute / STEPS_PER_BEAT;
      void audio.resume();
      master.gain.cancelScheduledValues(audio.currentTime);
      master.gain.setValueAtTime(VOLUME, audio.currentTime);
      if (timer !== null) return;
      nextAt = audio.currentTime + 0.05;
      tick();
      timer = setInterval(tick, TICK_MS);
    },
    // The silence is the game's signal, so it cuts rather than fades.
    stop: () => {
      if (timer !== null) clearInterval(timer);
      timer = null;
      master.gain.cancelScheduledValues(audio.currentTime);
      master.gain.setValueAtTime(0, audio.currentTime);
    },
  };
}
