import { expect, test } from "bun:test";
import { AGE_ROWS, bandOfMonths, FIRST_MONTH, formatAgeRow, formatClock, formatDuration, LAST_MONTH, nextSleep, sleepHours, wakeWindow } from "./wakeWindows";

test("a window is the awake hours split by the stretches the naps make", () => {
  expect(wakeWindow(6, 3)).toEqual({ from: 120, to: 180 });
  expect(wakeWindow(24, 1)).toEqual({ from: 300, to: 390 });
  expect(wakeWindow(48, 0)).toEqual({ from: 660, to: 840 });
});

test("sleep follows the statement's three age groups, with no gap at their edges", () => {
  expect([sleepHours(11), sleepHours(12), sleepHours(35), sleepHours(36)]).toEqual([
    { min: 12, max: 16 },
    { min: 11, max: 14 },
    { min: 11, max: 14 },
    { min: 10, max: 13 },
  ]);
});

test("the next sleep wraps past midnight", () => {
  expect(nextSleep(23 * 60, { from: 120, to: 180 })).toEqual({ from: 60, to: 120 });
});

test("the table covers every month the planner takes, once", () => {
  const months = AGE_ROWS.flatMap(({ from, to }) => Array.from({ length: to - from + 1 }, (_, index) => from + index));
  expect(months).toEqual(Array.from({ length: LAST_MONTH - FIRST_MONTH + 1 }, (_, index) => FIRST_MONTH + index));
});

test("a month lands in the band the games use", () => {
  expect([bandOfMonths(11), bandOfMonths(12), bandOfMonths(35), bandOfMonths(36)]).toEqual(["0-1", "1-3", "1-3", "3-5"]);
});

test("words come out in the reader's language and clock", () => {
  expect(formatDuration(150, "en")).toBe("2 hr 30 min");
  expect(formatAgeRow({ from: 6, to: 8 }, "en")).toBe("6–8 months");
  expect(formatAgeRow({ from: 36, to: 47 }, "en")).toBe("3 years");
  expect(formatAgeRow({ from: 6, to: 8 }, "ru")).toBe("6–8 месяцев");
  expect(formatClock(13 * 60 + 5, "de")).toBe("13:05");
});
