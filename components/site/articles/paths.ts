import type { Article } from "./types";

/** Where articles live, apart from the registry so the footer can link here without loading every article. */
export const GUIDES_PATH = "/guides";
export const BLOG_PATH = "/blog";

export const articlePath = (article: Pick<Article, "kind" | "slug">) =>
  `${article.kind === "guide" ? GUIDES_PATH : BLOG_PATH}/${article.slug}`;
