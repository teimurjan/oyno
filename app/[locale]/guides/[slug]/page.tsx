import { articleRoute } from "@/components/site/articles/ArticlePage";

const route = articleRoute("guide");

export const dynamicParams = false;
export const generateStaticParams = route.params;
export const generateMetadata = route.metadata;
export default route.Page;
