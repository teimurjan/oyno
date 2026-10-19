import type { ReactNode } from "react";

/**
 * One article: an evergreen guide at `/guides/<slug>` or a post at `/blog/<slug>`. Every claim in
 * the body cites a source with `<Cite>`, and every cited id is listed in `sources`, which is what
 * the list at the end is built from. `bun test` checks both.
 */
export interface Article {
  slug: string;
  kind: "guide" | "post";
  title: string;
  /** The line under the heading, also the meta description. */
  description: string;
  /** ISO date. */
  published: string;
  /** Game ids shown as cards after the body. */
  games: string[];
  /** Source ids from `activities/en.json` or `references.ts`, in the order the list shows them. */
  sources: string[];
  body: ReactNode;
}
