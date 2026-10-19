import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/JsonLd";
import { Prose, SiteShell } from "@/components/site/SiteShell";
import { AppPitch, GameList, Research, Section, Trail } from "@/components/site/games/parts";
import { gameById } from "@/lib/games/catalog";
import { articleStructuredData, AUTHOR, englishPageMetadata } from "@/lib/seo";
import { sourceById } from "./Cite";
import { articleBy, articlesOf } from "./index";
import { articlePath, BLOG_PATH, GUIDES_PATH } from "./paths";
import type { Article } from "./types";

const SECTION = {
  guide: { name: "Guides", path: GUIDES_PATH },
  post: { name: "Blog", path: BLOG_PATH },
} as const;

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function ArticlePage({ article }: { article: Article }) {
  const path = articlePath(article);
  const games = article.games.flatMap((id) => gameById(id) ?? []);

  return (
    <SiteShell lang="en" page="home">
      <JsonLd data={articleStructuredData({ ...article, path })} />
      <Trail crumbs={[SECTION[article.kind]]} current={{ name: article.title, path }} />
      <div className="max-w-3xl">
        <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-ink">{article.title}</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{article.description}</p>
        <p className="mt-4 text-[13px] text-faint">
          {AUTHOR.name}, {AUTHOR.role.toLowerCase()} · <time dateTime={article.published}>{formatDate(article.published)}</time>
        </p>
      </div>

      <div className="mt-10">
        <Prose>{article.body}</Prose>
      </div>

      {games.length > 0 && (
        <Section title="Try these games">
          <GameList games={games} />
        </Section>
      )}

      <AppPitch />

      <Section title="Sources">
        <Research references={article.sources.map(sourceById)} />
      </Section>
    </SiteShell>
  );
}

/** What each article route exports: one for guides, one for the blog. */
export function articleRoute(kind: Article["kind"]) {
  type Props = { params: Promise<{ slug: string }> };
  const articleOf = async ({ params }: Props) => articleBy(kind, (await params).slug) ?? notFound();
  return {
    params: () => articlesOf(kind).map((article) => ({ slug: article.slug })),
    metadata: async (props: Props): Promise<Metadata> => {
      const article = await articleOf(props);
      return englishPageMetadata({ title: `${article.title} | Oyno`, description: article.description, path: articlePath(article) });
    },
    Page: async (props: Props) => <ArticlePage article={await articleOf(props)} />,
  };
}
