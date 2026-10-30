import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/JsonLd";
import { langOfSegment, type RouteProps } from "@/components/site/route";
import { Prose, SiteShell } from "@/components/site/SiteShell";
import { AppPitch, GameList, Research, Section, Trail } from "@/components/site/games/parts";
import { gameById, sourceById } from "@/lib/games/catalog";
import { localePath, type Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import { articleStructuredData, AUTHOR, libraryPageMetadata } from "@/lib/seo";
import { articleBy, articlesOf } from "./index";
import { articlePath, BLOG_PATH, GUIDES_PATH } from "./paths";
import type { Article } from "./types";

const SECTION_PATH = { guide: GUIDES_PATH, post: BLOG_PATH } as const;

export const formatDate = (lang: Lang, iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" });

function ArticlePage({ lang, article }: { lang: Lang; article: Article }) {
  const words = libraryFor(lang);
  const path = articlePath(article);
  const games = article.games.flatMap((id) => gameById(id, lang) ?? []);

  return (
    <SiteShell lang={lang} page={path}>
      <JsonLd data={articleStructuredData(lang, { ...article, path: localePath(lang, path) })} />
      <Trail lang={lang} crumbs={[{ name: words.articles[article.kind].crumb, path: SECTION_PATH[article.kind] }]} current={{ name: article.title, path }} />
      <div className="max-w-3xl">
        <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-ink">{article.title}</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{article.description}</p>
        <p className="mt-4 text-[13px] text-faint">
          {words.articles.byline(AUTHOR.name)} · <time dateTime={article.published}>{formatDate(lang, article.published)}</time>
        </p>
      </div>

      <div className="mt-10">
        <Prose>{article.body}</Prose>
      </div>

      {games.length > 0 && (
        <Section title={words.articles.tryThese}>
          <GameList lang={lang} games={games} />
        </Section>
      )}

      <AppPitch lang={lang} />

      <Section title={words.articles.sources}>
        <Research lang={lang} references={article.sources.map((id) => sourceById(id, lang))} />
      </Section>
    </SiteShell>
  );
}

/** What each article route exports, at the root and under every locale: one for guides, one for the blog. */
export function articleRoute(kind: Article["kind"]) {
  type Props = RouteProps<{ slug: string }>;
  const pageOf = async ({ params }: Props) => {
    const { slug, locale } = await params;
    const lang = langOfSegment(locale);
    return { lang, article: articleBy(lang, kind, slug) ?? notFound() };
  };
  return {
    params: async ({ params }: { params: { locale?: string; slug?: string } }) =>
      articlesOf(langOfSegment(params.locale), kind).map((article) => ({ slug: article.slug })),
    metadata: async (props: Props): Promise<Metadata> => {
      const { lang, article } = await pageOf(props);
      return libraryPageMetadata(lang, { title: `${article.title} | Oyno`, description: article.description, path: articlePath(article) });
    },
    Page: async (props: Props) => <ArticlePage {...await pageOf(props)} />,
  };
}
