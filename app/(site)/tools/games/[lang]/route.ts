import { gameArt, gamesIn } from "@/lib/games/catalog";
import { isLang, LOCALES } from "@/lib/i18n";
import type { DealtGame } from "@/lib/tools/deal";

/** The games the picker deals from, one static file per language, outside the page's own weight. */
export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) return new Response(null, { status: 404 });
  const games: DealtGame[] = gamesIn(lang).map(({ id, title, blurb, steps, age, energy, minutes, fromMonths }) => ({
    id,
    title,
    blurb,
    steps,
    age,
    energy,
    minutes,
    fromMonths,
    art: gameArt(id),
  }));
  return Response.json(games, { headers: { "X-Robots-Tag": "noindex" } });
}
