import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { langOfSegment, type RouteProps } from "@/components/site/route";
import { SiteShell } from "@/components/site/SiteShell";
import { gameArt, gameById, gamesIn, GAMES, hubsIn, labelsIn, sourceById } from "@/lib/games/catalog";
import { findHub, gamePath, hubPath, relatedGames, type Game, type Hub } from "@/lib/games/hubs";
import { localePath, type Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import { libraryPageMetadata } from "@/lib/seo";
import { AppPitch, capitalized, gamesCrumb, GameList, Research, Section, Trail } from "./parts";

const Chip = ({ lang, hub, label }: { lang: Lang; hub: Hub | undefined; label: string }) => {
  const style = "inline-flex h-8 items-center rounded-full border border-hairline bg-white/60 px-3 text-[13px] text-slate";
  return hub ? <Link href={localePath(lang, hubPath(hub))} className={`${style} hover:text-ink`}>{label}</Link> : <span className={style}>{label}</span>;
};

function GamePage({ lang, game }: { lang: Lang; game: Game }) {
  const words = libraryFor(lang);
  const hubs = hubsIn(lang);
  const labels = labelsIn(lang);
  const art = gameArt(game.id);
  const age = findHub(hubs, "age", game.age)!;
  const type = findHub(hubs, "type", game.mechanic);
  const path = gamePath(game.id);

  return (
    <SiteShell lang={lang} page={path}>
      <Trail
        lang={lang}
        crumbs={[gamesCrumb(lang), { name: capitalized(words.ageNoun[game.age]), path: hubPath(age) }]}
        current={{ name: game.title, path }}
      />

      <div className="mt-3 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
        <div className="max-w-2xl">
          <h1 className="text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-ink">{game.title}</h1>
          <p className="num mt-2 text-[14px] text-faint">
            {words.games.minutes(game.minutes)} · {words.ageRange[game.age]} · {words.energy[game.energy]}
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{game.blurb}</p>
          <ol className="mt-6 space-y-3">
            {game.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-[16px] leading-relaxed text-slate">
                <span className="num flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent text-[13px] font-bold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-2">
            {game.skills.map((skill) => <Chip key={skill} lang={lang} hub={findHub(hubs, "skill", skill)} label={labels.skills[skill]} />)}
            {game.tags.map((tag) => <Chip key={tag} lang={lang} hub={findHub(hubs, "tag", tag)} label={labels.tags[tag]} />)}
          </div>
        </div>
        {art && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={art} alt="" width={300} height={300} className="aspect-square w-full max-w-[300px] object-contain" />
        )}
      </div>

      <Section title={words.games.whyItWorks}>
        <Research lang={lang} references={game.evidence.map((id) => sourceById(id, lang))} age={game.age} />
      </Section>

      <AppPitch lang={lang} />

      <Section title={type ? words.games.moreOf(type.title) : words.games.more}>
        <GameList lang={lang} games={relatedGames(game, gamesIn(lang))} />
        {type && (
          <Link href={localePath(lang, hubPath(type))} className="mt-4 inline-block text-[14px] font-semibold text-ink underline underline-offset-4">
            {words.games.allOf(type.title)}
          </Link>
        )}
      </Section>
    </SiteShell>
  );
}

/** What the game route exports, at the root and under every locale. */
export function gameRoute() {
  type Props = RouteProps<{ id: string }>;
  const pageOf = async ({ params }: Props) => {
    const { id, locale } = await params;
    const lang = langOfSegment(locale);
    return { lang, game: gameById(id, lang) ?? notFound() };
  };
  return {
    params: () => GAMES.map((game) => ({ id: game.id })),
    metadata: async (props: Props): Promise<Metadata> => {
      const { lang, game } = await pageOf(props);
      const { games } = libraryFor(lang);
      const skills = game.skills.map((skill) => labelsIn(lang).skills[skill]);
      return libraryPageMetadata(lang, {
        title: `${games.metaTitle(game)} | Oyno`,
        description: games.metaDescription({ blurb: game.blurb, steps: game.steps.length, minutes: game.minutes, skills }),
        path: gamePath(game.id),
      });
    },
    Page: async (props: Props) => <GamePage {...await pageOf(props)} />,
  };
}
