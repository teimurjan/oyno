import type { MetadataRoute } from "next";
import { ARTICLES } from "@/components/site/articles";
import { articlePath, BLOG_PATH, GUIDES_PATH } from "@/components/site/articles/paths";
import { GAMES, hubsIn } from "@/lib/games/catalog";
import { gamePath, GAMES_PATH, hubPath } from "@/lib/games/hubs";
import { alternatesFor, alternatesForPath, LOCALES, SITE_PAGES } from "@/lib/i18n";

/** Every indexable page in every language, with its `hreflang`: the marketing pages, the games
 * and the articles. The funnel is `noindex` and stays out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const marketing = SITE_PAGES.flatMap((page) => LOCALES.map((lang) => alternatesFor(lang, page)));
  const library = [
    GAMES_PATH,
    ...hubsIn("en").map(hubPath),
    ...GAMES.map((game) => gamePath(game.id)),
    GUIDES_PATH,
    BLOG_PATH,
    ...ARTICLES.map(articlePath),
  ];
  const published = new Map<string, Date>(ARTICLES.map((article) => [articlePath(article), new Date(article.published)]));
  const localized = library.flatMap((path) =>
    LOCALES.map((lang) => ({ ...alternatesForPath(lang, path), lastModified: published.get(path) })),
  );
  return [...marketing, ...localized].map(({ canonical, languages, ...rest }) => ({ url: canonical, alternates: { languages }, ...rest }));
}
