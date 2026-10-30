import { articleIndexRoute } from "@/components/site/articles/ArticleIndex";

const route = articleIndexRoute("guide");

export const generateMetadata = route.metadata;
export default route.Page;
