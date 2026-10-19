import { GAMES_INTRO, GAMES_TITLE, GamesIndex } from "@/components/site/games/GamesIndex";
import { GAMES_PATH } from "@/lib/games/hubs";
import { englishPageMetadata } from "@/lib/seo";

export const metadata = englishPageMetadata({ title: `${GAMES_TITLE} | Oyno`, description: GAMES_INTRO, path: GAMES_PATH });

export default function Page() {
  return <GamesIndex />;
}
