import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import source from "@/activities/en.json";
import { Source } from "@/lib/activities";
import { hubs } from "./hubs";

/**
 * The English games as the site reads them, checked once at build. The pages are all static, so
 * this runs in `next build` and never in a request.
 */
export const CATALOG = Source.parse(source);
export const GAMES = CATALOG.activities;
export const HUBS = hubs(GAMES);

export const gameById = (id: string) => GAMES.find((game) => game.id === id);

/** The illustration `bun run art:build` wrote, or nothing for a game not painted yet. */
export function gameArt(id: string): string | null {
  const file = `/art/activities/${id}.webp`;
  return existsSync(path.join(process.cwd(), "public", file)) ? file : null;
}
