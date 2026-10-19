import type { MetadataRoute } from "next";
import { ARTICLES } from "@/components/site/articles";
import { articlePath, BLOG_PATH, GUIDES_PATH } from "@/components/site/articles/paths";
import { GAMES, HUBS } from "@/lib/games/catalog";
import { gamePath, GAMES_PATH, hubPath } from "@/lib/games/hubs";
import { alternatesFor, LOCALES, SITE_PAGES, SITE_URL } from "@/lib/i18n";

/** Every indexable page: the marketing pages in every language, with their `hreflang`, and the
 * games and articles, which are English only. The funnel is `noindex` and stays out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const marketing = SITE_PAGES.flatMap((page) =>
    LOCALES.map((lang) => {
      const { canonical, languages } = alternatesFor(lang, page);
      return { url: canonical, alternates: { languages } };
    }),
  );
  const english = [
    GAMES_PATH,
    ...HUBS.map(hubPath),
    ...GAMES.map((game) => gamePath(game.id)),
    GUIDES_PATH,
    BLOG_PATH,
    ...ARTICLES.map(articlePath),
  ].map((path) => ({ url: `${SITE_URL}${path}` }));
  const published = new Map(ARTICLES.map((article) => [`${SITE_URL}${articlePath(article)}`, new Date(article.published)]));
  return [...marketing, ...english.map((entry) => ({ ...entry, lastModified: published.get(entry.url) }))];
}
