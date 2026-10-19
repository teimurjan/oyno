import { ARTICLE_INDEX, ArticleIndex } from "@/components/site/articles/ArticleIndex";
import { englishPageMetadata } from "@/lib/seo";

const { title, intro, path } = ARTICLE_INDEX.guide;

export const metadata = englishPageMetadata({ title: `${title} | Oyno`, description: intro, path });

export default function Page() {
  return <ArticleIndex kind="guide" />;
}
