import type { Age } from "@/lib/activities";

/**
 * Wake windows as open arithmetic: the hours a day a child is awake, from the American Academy
 * of Sleep Medicine's recommended sleep, divided by the stretches the naps cut the day into.
 * The statement starts at 4 months, so this does too. Pure, so the server draws the table and
 * the browser runs the planner from the same numbers.
 */
export const FIRST_MONTH = 4;
export const LAST_MONTH = 60;
export const MAX_NAPS = 4;

const MINUTES_IN_DAY = 24 * 60;
const ROUND_TO_MINUTES = 15;

/** Recommended hours of sleep in 24 hours, naps included. */
export function sleepHours(months: number): { min: number; max: number } {
  if (months < 12) return { min: 12, max: 16 };
  return months < 36 ? { min: 11, max: 14 } : { min: 10, max: 13 };
}

/** A starting point for the nap count, which the parent changes to what their kid does. */
export function typicalNaps(months: number): number {
  if (months < 6) return 4;
  if (months < 9) return 3;
  if (months < 15) return 2;
  return months < 48 ? 1 : 0;
}

export interface WakeWindow {
  from: number;
  to: number;
}

const rounded = (minutes: number) => Math.round(minutes / ROUND_TO_MINUTES) * ROUND_TO_MINUTES;

/** One awake stretch, in minutes. */
export function wakeWindow(months: number, naps: number): WakeWindow {
  const { min, max } = sleepHours(months);
  const stretches = naps + 1;
  return { from: rounded(((24 - max) * 60) / stretches), to: rounded(((24 - min) * 60) / stretches) };
}

/** When the next sleep falls, in minutes after midnight, for a kid who woke at `wokeAt`. */
export function nextSleep(wokeAt: number, window: WakeWindow): WakeWindow {
  return { from: (wokeAt + window.from) % MINUTES_IN_DAY, to: (wokeAt + window.to) % MINUTES_IN_DAY };
}

/** The rows of the by-age table, covering every month the planner takes. */
export const AGE_ROWS = [
  { from: 4, to: 5 },
  { from: 6, to: 8 },
  { from: 9, to: 11 },
  { from: 12, to: 14 },
  { from: 15, to: 35 },
  { from: 36, to: 47 },
  { from: 48, to: 60 },
] as const;

export const bandOfMonths = (months: number): Age => (months < 12 ? "0-1" : months < 36 ? "1-3" : "3-5");

const unit = (lang: string, unit: "hour" | "minute" | "month" | "year", unitDisplay: "short" | "long") =>
  new Intl.NumberFormat(lang, { style: "unit", unit, unitDisplay });

/** "2 hr 30 min", in the language's own units. */
export function formatDuration(minutes: number, lang: string): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  const parts = [
    hours > 0 ? unit(lang, "hour", "short").format(hours) : null,
    rest > 0 || hours === 0 ? unit(lang, "minute", "short").format(rest) : null,
  ];
  return parts.filter(Boolean).join(" ");
}

export const formatWindow = ({ from, to }: WakeWindow, lang: string) => `${formatDuration(from, lang)} – ${formatDuration(to, lang)}`;

/** "11–14 hr": the recommended sleep. */
export const formatSleepHours = ({ min, max }: { min: number; max: number }, lang: string) => unit(lang, "hour", "short").formatRange(min, max);

/** A time of day from minutes after midnight, as the language writes it. UTC on both ends, so
 * the reader's zone cannot move it. */
export const formatClock = (minutes: number, lang: string) =>
  new Intl.DateTimeFormat(lang, { hour: "numeric", minute: "2-digit", timeZone: "UTC" }).format(new Date(minutes * 60_000));

/** "14 months", or in years from 3: a child's age reads in years by then. */
export function formatMonths(months: number, lang: string): string {
  return months < 36 ? unit(lang, "month", "long").format(months) : unit(lang, "year", "long").format(Math.floor(months / 12));
}

/** "6–8 months" or "4–5 years", declined by the language. */
export function formatAgeRow({ from, to }: { from: number; to: number }, lang: string): string {
  const [low, high, format] = from < 36 ? [from, to, unit(lang, "month", "long")] : [Math.floor(from / 12), Math.floor(to / 12), unit(lang, "year", "long")];
  return low === high ? format.format(low) : format.formatRange(low, high);
}
