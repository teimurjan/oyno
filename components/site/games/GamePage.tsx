import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { CATALOG, GAMES, gameArt, HUBS } from "@/lib/games/catalog";
import { AGE_NOUN, AGE_RANGE, ENERGY_LABEL, findHub, gamePath, hubPath, relatedGames, type Game, type Hub } from "@/lib/games/hubs";
import { AppPitch, capitalized, GAMES_CRUMB, GameList, Research, Section, Trail } from "./parts";

const Chip = ({ hub, label }: { hub: Hub | undefined; label: string }) => {
  const style = "inline-flex h-8 items-center rounded-full border border-hairline bg-white/60 px-3 text-[13px] text-slate";
  return hub ? <Link href={hubPath(hub)} className={`${style} hover:text-ink`}>{label}</Link> : <span className={style}>{label}</span>;
};

export function GamePage({ game }: { game: Game }) {
  const art = gameArt(game.id);
  const age = findHub(HUBS, "age", game.age)!;
  const type = findHub(HUBS, "type", game.mechanic);
  const references = game.evidence.map((id) => CATALOG.sources[id]);

  return (
    <SiteShell lang="en" page="home">
      <Trail
        crumbs={[GAMES_CRUMB, { name: capitalized(AGE_NOUN[game.age]), path: hubPath(age) }]}
        current={{ name: game.title, path: gamePath(game.id) }}
      />

      <div className="mt-3 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
        <div className="max-w-2xl">
          <h1 className="text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-ink">{game.title}</h1>
          <p className="num mt-2 text-[14px] text-faint">
            {game.minutes} minutes · {AGE_RANGE[game.age]} · {ENERGY_LABEL[game.energy]}
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
            {game.skills.map((skill) => <Chip key={skill} hub={findHub(HUBS, "skill", skill)} label={CATALOG.skills[skill]} />)}
            {game.tags.map((tag) => <Chip key={tag} hub={findHub(HUBS, "tag", tag)} label={CATALOG.tags[tag]} />)}
          </div>
        </div>
        {art && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={art} alt="" width={300} height={300} className="aspect-square w-full max-w-[300px] object-contain" />
        )}
      </div>

      <Section title="Why it works">
        <Research references={references} age={game.age} />
      </Section>

      <AppPitch />

      <Section title={type ? `More ${type.title.toLowerCase()}` : "More games"}>
        <GameList games={relatedGames(game, GAMES)} />
        {type && (
          <Link href={hubPath(type)} className="mt-4 inline-block text-[14px] font-semibold text-ink underline underline-offset-4">
            All {type.title.toLowerCase()}
          </Link>
        )}
      </Section>
    </SiteShell>
  );
}
