import Link from "next/link";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import type { Age } from "@/lib/activities";
import { JsonLd } from "@/components/site/JsonLd";
import { AGE_NOUN, ENERGY_LABEL, gamePath, GAMES_PATH, type Game } from "@/lib/games/hubs";
import { funnelPath } from "@/lib/i18n";
import { breadcrumbList } from "@/lib/seo";

type Crumb = { name: string; path: string };

export const GAMES_CRUMB: Crumb = { name: "Games", path: GAMES_PATH };

/** The pieces the game pages share: the trail, the heading, a list of games, the research and the pitch. */

export const capitalized = (text: string) => text[0].toUpperCase() + text.slice(1);

/** The path above a page, shown and given to search engines as the same list. */
export function Trail({ crumbs, current }: { crumbs: readonly Crumb[]; current: Crumb }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-faint">
      <JsonLd data={breadcrumbList([...crumbs, current])} />
      {crumbs.map((crumb, index) => (
        <span key={crumb.path}>
          {index > 0 && <span aria-hidden className="px-1.5">/</span>}
          <Link href={crumb.path} className="hover:text-ink">{crumb.name}</Link>
        </span>
      ))}
    </nav>
  );
}

export function Heading({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="max-w-3xl">
      <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-ink">{title}</h1>
      <p className="mt-4 text-[16px] leading-relaxed text-muted">{intro}</p>
    </div>
  );
}

export function GameList({ games }: { games: readonly Game[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {games.map((game) => (
        <li key={game.id}>
          <Link href={gamePath(game.id)} className="card block h-full p-4 hover:bg-white/80">
            <span className="block text-[16px] font-bold text-ink">{game.title}</span>
            <span className="num mt-1 block text-[12px] text-faint">
              {game.minutes} min · {AGE_NOUN[game.age]} · {ENERGY_LABEL[game.energy]}
            </span>
            <span className="mt-2 block text-[14px] leading-snug text-muted">{game.blurb}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink">{title}</h2>
      {children}
    </section>
  );
}

const DESIGN: Record<string, string> = {
  rct: "Randomized trial",
  experiment: "Experiment",
  longitudinal: "Long-term study",
  observational: "Observational study",
};

/** What the list needs from a source: the games' bibliography and the articles' extra references both fit. */
type Citable = { short: string; title: string; url: string } & (
  | { kind: "study"; design?: string; studied?: string }
  | { kind: "guide"; says?: Partial<Record<Age, string>> }
);

/** Each source in full: a study by who took part and what they did, a guide by what it says for
 * the age when there is one. */
export function Research({ references, age }: { references: readonly Citable[]; age?: Age }) {
  return (
    <ul className="mt-5 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
      {references.map((reference) => (
        <li key={reference.url}>
          <a href={reference.url} className="font-semibold text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">
            {reference.short}
          </a>
          <span className="text-faint"> · {reference.kind === "study" ? DESIGN[reference.design ?? ""] ?? "Study" : "Guide"}</span>
          <p className="mt-1">
            {reference.kind === "study" ? reference.studied ?? reference.title : (age && reference.says?.[age]) || reference.title}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function AppPitch() {
  return (
    <section className="card mt-14 p-6 sm:p-8">
      <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink">Oyno deals one game like this every evening</h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
        It picks a game for your kid&rsquo;s age and the energy you have left, pauses the apps you choose while you
        play, and grows your family&rsquo;s little planet with every round.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link href={funnelPath("en")} className="btn w-auto px-7 text-[16px]">Get started</Link>
        <AppStoreBadge />
      </div>
    </section>
  );
}
