import { gamesIndexRoute } from "@/components/site/games/GamesIndex";

const route = gamesIndexRoute();

export const generateMetadata = route.metadata;
export default route.Page;
