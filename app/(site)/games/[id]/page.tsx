import { gameRoute } from "@/components/site/games/GamePage";

const route = gameRoute();

export const dynamicParams = false;
export const generateStaticParams = route.params;
export const generateMetadata = route.metadata;
export default route.Page;
