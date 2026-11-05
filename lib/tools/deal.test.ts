import { expect, test } from "bun:test";
import { deal, type DealtGame } from "./deal";

const game = (id: string, extra: Partial<DealtGame> = {}): DealtGame => ({
  id,
  title: id,
  blurb: "",
  steps: [],
  age: "1-3",
  energy: "low",
  minutes: 5,
  art: null,
  ...extra,
});

test("deals only what fits the age and energy", () => {
  const games = [game("a"), game("b", { age: "3-5" }), game("c", { energy: "full" })];
  expect(deal(games, { age: "1-3", energy: "low" })?.id).toBe("a");
});

test("leaves out a game that starts above the kid's age", () => {
  const games = [game("old", { fromMonths: 22 }), game("young")];
  expect(deal(games, { months: 14 })?.id).toBe("young");
});

test("does not deal the same game twice running, unless it is the only one", () => {
  expect(deal([game("a"), game("b")], {}, "a")?.id).toBe("b");
  expect(deal([game("a")], {}, "a")?.id).toBe("a");
});

test("says so when nothing fits", () => {
  expect(deal([game("a")], { age: "3-5" })).toBeNull();
});
