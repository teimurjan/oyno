import Link from "next/link";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import type { Age } from "@/lib/activities";
import { JsonLd } from "@/components/site/JsonLd";
import { gamePath, GAMES_PATH, type Game } from "@/lib/games/hubs";
import { funnelPath, localePath, type Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import type { Design } from "@/lib/library/types";
import { breadcrumbList } from "@/lib/seo";

/** A step of the trail, by its English path. */
type Crumb = { name: string; path: string };

export const gamesCrumb = (lang: Lang): Crumb => ({ name: libraryFor(lang).games.crumb, path: GAMES_PATH });

/** The pieces the game pages share: the trail, the heading, a list of games, the research and the pitch. */

export const capitalized = (text: string) => text[0].toUpperCase() + text.slice(1);

/** The path above a page, shown and given to search engines as the same list. */
export function Trail({ lang, crumbs, current }: { lang: Lang; crumbs: readonly Crumb[]; current: Crumb }) {
  const local = (crumb: Crumb) => ({ ...crumb, path: localePath(lang, crumb.path) });
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-faint">
      <JsonLd data={breadcrumbList([...crumbs, current].map(local))} />
      {crumbs.map((crumb, index) => (
        <span key={crumb.path}>
          {index > 0 && <span aria-hidden className="px-1.5">/</span>}
          <Link href={localePath(lang, crumb.path)} className="hover:text-ink">{crumb.name}</Link>
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

export function GameList({ lang, games }: { lang: Lang; games: readonly Game[] }) {
  const words = libraryFor(lang);
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {games.map((game) => (
        <li key={game.id}>
          <Link href={localePath(lang, gamePath(game.id))} className="card block h-full p-4 hover:bg-white/80">
            <span className="block text-[16px] font-bold text-ink">{game.title}</span>
            <span className="num mt-1 block text-[12px] text-faint">
              {words.games.minutesShort(game.minutes)} · {words.ageNoun[game.age]} · {words.energy[game.energy]}
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

/** What the list needs from a source: the games' bibliography and the articles' extra references both fit. */
type Citable = { short: string; title: string; url: string } & (
  | { kind: "study"; design?: Design; studied?: string }
  | { kind: "guide"; says?: Partial<Record<Age, string>> }
);

/** Each source in full: a study by who took part and what they did, a guide by what it says for
 * the age when there is one. */
export function Research({ lang, references, age }: { lang: Lang; references: readonly Citable[]; age?: Age }) {
  const { design, study, guide } = libraryFor(lang).research;
  return (
    <ul className="mt-5 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
      {references.map((reference) => (
        <li key={reference.url}>
          <a href={reference.url} className="font-semibold text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">
            {reference.short}
          </a>
          <span className="text-faint"> · {reference.kind === "study" ? (reference.design ? design[reference.design] : study) : guide}</span>
          <p className="mt-1">
            {reference.kind === "study" ? reference.studied ?? reference.title : (age && reference.says?.[age]) || reference.title}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function AppPitch({ lang }: { lang: Lang }) {
  const { title, body, cta } = libraryFor(lang).pitch;
  return (
    <section className="card mt-14 p-6 sm:p-8">
      <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink">{title}</h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{body}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link href={funnelPath(lang)} className="btn w-auto px-7 text-[16px]">{cta}</Link>
        <AppStoreBadge />
      </div>
    </section>
  );
}
