import Link from "next/link";
import { CATALOG, gameById } from "@/lib/games/catalog";
import { gamePath } from "@/lib/games/hubs";
import { REFERENCES } from "@/lib/articles/references";

/** A source by id, from the games' bibliography or the articles' own. Throws on an unknown id, so a
 * typo fails the build instead of shipping a claim with nothing behind it. */
export function sourceById(id: string) {
  const source = CATALOG.sources[id] ?? REFERENCES[id];
  if (!source) throw new Error(`Unknown source "${id}"`);
  return source;
}

/** An inline citation: the authors and year, linked to the paper. */
export function Cite({ id }: { id: string }) {
  const source = sourceById(id);
  return <a href={source.url}>{source.short}</a>;
}

/** A link to a game page, named by the game's title unless the sentence needs other words. */
export function GameLink({ id, children }: { id: string; children?: React.ReactNode }) {
  const game = gameById(id);
  if (!game) throw new Error(`Unknown game "${id}"`);
  return <Link href={gamePath(id)}>{children ?? game.title}</Link>;
}
