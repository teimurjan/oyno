import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { Heading } from "@/components/site/games/parts";
import { formatDate } from "./ArticlePage";
import { articlesOf } from "./index";
import { articlePath, BLOG_PATH, GUIDES_PATH } from "./paths";
import type { Article } from "./types";

export const ARTICLE_INDEX = {
  guide: {
    path: GUIDES_PATH,
    title: "Guides for parents of kids 0 to 5",
    intro: "Long reads on how play builds focus and self-control, and on putting the phone down. Every claim links to the study behind it.",
  },
  post: {
    path: BLOG_PATH,
    title: "The Oyno blog",
    intro: "Short reads for tired parents: games for tonight, what the research says, and how to take the evening back from the phone.",
  },
} as const;

export function ArticleIndex({ kind }: { kind: Article["kind"] }) {
  const { title, intro } = ARTICLE_INDEX[kind];
  return (
    <SiteShell lang="en" page="home">
      <Heading title={title} intro={intro} />
      <ul className="mt-10 grid max-w-3xl gap-3">
        {articlesOf(kind).map((article) => (
          <li key={article.slug}>
            <Link href={articlePath(article)} className="card block p-5 hover:bg-white/80">
              <span className="block text-[18px] font-bold text-ink">{article.title}</span>
              <span className="mt-2 block text-[14px] leading-snug text-muted">{article.description}</span>
              <span className="mt-2 block text-[12px] text-faint">{formatDate(article.published)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
