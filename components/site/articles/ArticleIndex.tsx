import type { Metadata } from "next";
import Link from "next/link";
import { langOfSegment, type RouteProps } from "@/components/site/route";
import { SiteShell } from "@/components/site/SiteShell";
import { Heading } from "@/components/site/games/parts";
import { localePath, type Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import { libraryPageMetadata } from "@/lib/seo";
import { formatDate } from "./ArticlePage";
import { articlesOf } from "./index";
import { articlePath, BLOG_PATH, GUIDES_PATH } from "./paths";
import type { Article } from "./types";

const INDEX_PATH = { guide: GUIDES_PATH, post: BLOG_PATH } as const;

function ArticleIndex({ lang, kind }: { lang: Lang; kind: Article["kind"] }) {
  const { title, intro } = libraryFor(lang).articles[kind];
  return (
    <SiteShell lang={lang} page={INDEX_PATH[kind]}>
      <Heading title={title} intro={intro} />
      <ul className="mt-10 grid max-w-3xl gap-3">
        {articlesOf(lang, kind).map((article) => (
          <li key={article.slug}>
            <Link href={localePath(lang, articlePath(article))} className="card block p-5 hover:bg-white/80">
              <span className="block text-[18px] font-bold text-ink">{article.title}</span>
              <span className="mt-2 block text-[14px] leading-snug text-muted">{article.description}</span>
              <span className="mt-2 block text-[12px] text-faint">{formatDate(lang, article.published)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}

/** What each article index exports, at the root and under every locale. */
export function articleIndexRoute(kind: Article["kind"]) {
  type Props = RouteProps<object>;
  const langOf = async ({ params }: Props) => langOfSegment((await params).locale);
  return {
    metadata: async (props: Props): Promise<Metadata> => {
      const lang = await langOf(props);
      const { title, intro } = libraryFor(lang).articles[kind];
      return libraryPageMetadata(lang, { title: `${title} | Oyno`, description: intro, path: INDEX_PATH[kind] });
    },
    Page: async (props: Props) => <ArticleIndex lang={await langOf(props)} kind={kind} />,
  };
}
