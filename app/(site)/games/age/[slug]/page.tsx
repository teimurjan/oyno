import { hubRoute } from "@/components/site/games/HubPage";

const route = hubRoute("age");

export const dynamicParams = false;
export const generateStaticParams = route.params;
export const generateMetadata = route.metadata;
export default route.Page;
