import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GamePage } from "@/components/site/games/GamePage";
import { CATALOG, GAMES, gameById } from "@/lib/games/catalog";
import { AGE_NOUN, gamePath } from "@/lib/games/hubs";
import { englishPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GAMES.map((game) => ({ id: game.id }));
}

const gameOf = async ({ params }: Props) => gameById((await params).id) ?? notFound();

export async function generateMetadata(props: Props): Promise<Metadata> {
  const game = await gameOf(props);
  const skills = new Intl.ListFormat("en").format(game.skills.map((skill) => CATALOG.skills[skill].toLowerCase()));
  return englishPageMetadata({
    title: `${game.title}: a ${game.minutes}-minute game for ${AGE_NOUN[game.age]} | Oyno`,
    description: `${game.blurb} ${game.steps.length} steps, ${game.minutes} minutes, builds ${skills}.`,
    path: gamePath(game.id),
  });
}

export default async function Page(props: Props) {
  return <GamePage game={await gameOf(props)} />;
}
