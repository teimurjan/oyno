import NextLink from "next/link";
import type { ReactNode } from "react";
import { gameById, sourceById } from "@/lib/games/catalog";
import { gamePath } from "@/lib/games/hubs";
import { localePath, type Lang } from "@/lib/i18n";

/** An inline citation: the authors and year, linked to the paper. */
export function Cite({ id }: { id: string }) {
  const source = sourceById(id);
  return <a href={source.url}>{source.short}</a>;
}

/**
 * The links an article body uses, in its language. `Link` takes the English path and adds the
 * locale's prefix, and `GameLink` names a game by its title in that language unless the
 * sentence needs other words. A translation takes both from here, never from `next/link`.
 */
export function linksIn(lang: Lang) {
  const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <NextLink href={localePath(lang, href)}>{children}</NextLink>
  );
  const GameLink = ({ id, children }: { id: string; children?: ReactNode }) => {
    const game = gameById(id, lang);
    if (!game) throw new Error(`Unknown game "${id}"`);
    return <NextLink href={localePath(lang, gamePath(id))}>{children ?? game.title}</NextLink>;
  };
  return { Link, GameLink };
}

export const { GameLink } = linksIn("en");
