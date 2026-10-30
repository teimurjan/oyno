import { expect, test } from "bun:test";
import source from "@/activities/en.json";
import { Source } from "@/lib/activities";
import { en } from "@/lib/library/en";
import { hubPath, hubs, relatedGames } from "./hubs";

const games = Source.parse(source).activities;
const all = hubs(games, en.hubs);

test("every game is on exactly one age hub, so the index reaches all of them", () => {
  for (const game of games) {
    expect(all.filter((hub) => hub.kind === "age" && hub.includes(game))).toHaveLength(1);
  }
});

test("no two hubs share a path", () => {
  const paths = all.map(hubPath);
  expect(new Set(paths).size).toBe(paths.length);
});

test("related games share the type and never include the game itself", () => {
  for (const game of games) {
    const related = relatedGames(game, games);
    expect(related).not.toContain(game);
    expect(related.every((other) => other.mechanic === game.mechanic)).toBe(true);
  }
});
