import { articleIndexRoute } from "@/components/site/articles/ArticleIndex";

const route = articleIndexRoute("post");

export const generateMetadata = route.metadata;
export default route.Page;
