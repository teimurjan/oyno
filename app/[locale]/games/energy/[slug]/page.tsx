import { hubRoute } from "@/components/site/games/HubPage";

const route = hubRoute("energy");

export const dynamicParams = false;
export const generateStaticParams = route.params;
export const generateMetadata = route.metadata;
export default route.Page;
