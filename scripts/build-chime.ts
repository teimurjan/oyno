/**
 * Writes the bell that ends a round, `ios/Oyno/Resources/Chime.wav`: two soft struck notes,
 * a fifth apart, synthesised from a few decaying partials. Generated and committed, never
 * edited, so the sound in the bundle has a source and a diff.
 */
import { writeFileSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve(import.meta.dir, "../ios/Oyno/Resources/Chime.wav");
const RATE = 44_100;
const SECONDS = 1.8;
const PEAK = 0.6;

/** Each partial as a multiple of the note's pitch, how loud it starts, and how fast it fades. */
const PARTIALS = [
  { ratio: 1, gain: 1, decay: 0.55 },
  { ratio: 2, gain: 0.25, decay: 0.2 },
  { ratio: 2.76, gain: 0.12, decay: 0.14 },
  { ratio: 4.07, gain: 0.05, decay: 0.1 },
];

/** C6 then G6, the second a beat behind the first. */
const NOTES = [
  { hertz: 1046.5, at: 0 },
  { hertz: 1568, at: 0.22 },
];

const ATTACK = 0.003;

function note(hertz: number, time: number): number {
  if (time < 0) return 0;
  const attack = Math.min(1, time / ATTACK);
  return PARTIALS.reduce((sum, partial) => {
    const envelope = partial.gain * Math.exp(-time / partial.decay);
    return sum + envelope * Math.sin(2 * Math.PI * hertz * partial.ratio * time);
  }, 0) * attack;
}

const count = Math.round(RATE * SECONDS);
const samples = new Float64Array(count);
for (let index = 0; index < count; index += 1) {
  const time = index / RATE;
  samples[index] = NOTES.reduce((sum, played) => sum + note(played.hertz, time - played.at), 0);
}

// A short fade keeps the file from clicking when it ends.
const fade = Math.round(RATE * 0.03);
for (let index = count - fade; index < count; index += 1) samples[index] *= (count - index) / fade;

const loudest = samples.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
const scale = PEAK / loudest;

const data = Buffer.alloc(count * 2);
samples.forEach((sample, index) => data.writeInt16LE(Math.round(sample * scale * 32_767), index * 2));

const header = Buffer.alloc(44);
header.write("RIFF", 0);
header.writeUInt32LE(36 + data.length, 4);
header.write("WAVE", 8);
header.write("fmt ", 12);
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20); // PCM
header.writeUInt16LE(1, 22); // mono
header.writeUInt32LE(RATE, 24);
header.writeUInt32LE(RATE * 2, 28);
header.writeUInt16LE(2, 32);
header.writeUInt16LE(16, 34);
header.write("data", 36);
header.writeUInt32LE(data.length, 40);

writeFileSync(OUT, Buffer.concat([header, data]));
console.log(`Wrote ${path.relative(process.cwd(), OUT)}: ${SECONDS}s, ${(header.length + data.length) / 1024 | 0} KB`);
