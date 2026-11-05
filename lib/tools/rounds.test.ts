import { expect, test } from "bun:test";
import { danceSeconds, formatCountdown, nextCall, type Call } from "./rounds";

const sequence = (values: readonly number[]) => {
  let at = 0;
  return () => values[at++ % values.length];
};

test("a call never repeats the move before it", () => {
  let previous: Call | null = null;
  for (let turn = 0; turn < 200; turn += 1) {
    const call: Call = nextCall(3, previous, true);
    expect(call.index).not.toBe(previous?.index);
    previous = call;
  }
});

test("tricks stop after two in a row", () => {
  const alwaysTrick = sequence([0]);
  const first = nextCall(4, null, true, alwaysTrick);
  const second = nextCall(4, first, true, alwaysTrick);
  const third = nextCall(4, second, true, alwaysTrick);
  expect([first.says, second.says, third.says]).toEqual([false, false, true]);
});

test("with tricks off, every call is Simon's", () => {
  expect(nextCall(4, null, false, sequence([0])).says).toBe(true);
});

test("a dance runs longer at a slow speed than a fast one", () => {
  expect(danceSeconds("slow", () => 0)).toBeGreaterThan(danceSeconds("fast", () => 0));
});

test("the countdown rounds up, so it reads 0:00 only at the end", () => {
  expect(formatCountdown(245_000)).toBe("4:05");
  expect(formatCountdown(1)).toBe("0:01");
  expect(formatCountdown(0)).toBe("0:00");
  expect(formatCountdown(3_600_000)).toBe("1:00:00");
});
