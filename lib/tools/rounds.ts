/**
 * The timing of the game callers. Pure, with the randomness passed in, so a test can pin it. The
 * tools draw and play what these return.
 */
export type Random = () => number;

export const SPEEDS = ["slow", "medium", "fast"] as const;
export type Speed = (typeof SPEEDS)[number];

const between = (low: number, high: number, random: Random) => low + (high - low) * random();

export const TEMPO: Record<Speed, number> = { slow: 92, medium: 116, fast: 138 };

const DANCE_SECONDS: Record<Speed, readonly [number, number]> = { slow: [10, 18], medium: [7, 14], fast: [4, 10] };
const LIGHT_SECONDS: Record<Speed, readonly [number, number]> = { slow: [6, 10], medium: [4, 8], fast: [2, 5] };
const CALL_SECONDS: Record<Speed, number> = { slow: 8, medium: 5.5, fast: 4 };

export const danceSeconds = (speed: Speed, random: Random = Math.random) => between(...DANCE_SECONDS[speed], random);
export const freezeSeconds = (random: Random = Math.random) => between(3, 6, random);
export const lightSeconds = (speed: Speed, random: Random = Math.random) => between(...LIGHT_SECONDS[speed], random);
export const callSeconds = (speed: Speed) => CALL_SECONDS[speed];

export interface Call {
  index: number;
  /** A call that starts with "Simon says", which the kid should follow. */
  says: boolean;
  /** Trick calls in a row so far, so a run of them stays short. */
  tricks: number;
}

const TRICK_ODDS = 0.3;
const MAX_TRICKS_IN_A_ROW = 2;

/** The next call: never the same move twice running, and a trick about one time in three. */
export function nextCall(count: number, previous: Call | null, allowTricks: boolean, random: Random = Math.random): Call {
  const options = Array.from({ length: count }, (_, index) => index).filter((index) => index !== previous?.index);
  const index = options[Math.floor(random() * options.length)];
  const tricksSoFar = previous?.tricks ?? 0;
  const trick = allowTricks && tricksSoFar < MAX_TRICKS_IN_A_ROW && random() < TRICK_ODDS;
  return { index, says: !trick, tricks: trick ? tricksSoFar + 1 : 0 };
}

/** The clock on the timer: "4:05", or "1:00:00" from an hour. */
export function formatCountdown(milliseconds: number): string {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const pad = (value: number) => String(value).padStart(2, "0");
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds % 60)}` : `${minutes}:${pad(seconds % 60)}`;
}
