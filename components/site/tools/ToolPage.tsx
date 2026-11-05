import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { AppPitch, GameList, Heading, Research, Section, Trail } from "@/components/site/games/parts";
import { langOfSegment, type RouteProps } from "@/components/site/route";
import { SiteShell } from "@/components/site/SiteShell";
import { AGES, ENERGIES } from "@/lib/activities";
import { gamesIn, hubsIn, sourceById } from "@/lib/games/catalog";
import { findHub, GAMES_PATH, hubPath, type HubKind } from "@/lib/games/hubs";
import { localePath, type Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import { libraryPageMetadata, toolStructuredData } from "@/lib/seo";
import { isToolSlug, PICKER_ANCHOR, TOOL_SLUGS, toolPath, TOOLS_PATH, type ToolSlug } from "@/lib/tools";
import { toolsFor } from "@/lib/tools/copy";
import { AGE_ROWS, formatAgeRow, formatSleepHours, formatWindow, sleepHours, typicalNaps, wakeWindow } from "@/lib/tools/wakeWindows";
import { JsonLd } from "@/components/site/JsonLd";
import { FreezeDance } from "./FreezeDance";
import { GamePicker } from "./GamePicker";
import { RedLightGreenLight } from "./RedLightGreenLight";
import { SimonSays } from "./SimonSays";
import { VisualTimer } from "./VisualTimer";
import { WakePlanner } from "./WakePlanner";

/** What a tool page cites, and the hub whose games it links on to. */
const LINKS: Record<ToolSlug, { hub: readonly [HubKind, string]; sources: readonly string[] }> = {
  "visual-timer": { hub: ["type", "waiting"], sources: [] },
  "freeze-dance": { hub: ["type", "stop-go"], sources: ["kochanska-2000", "tominey-mcclelland-2011"] },
  "red-light-green-light": { hub: ["type", "stop-go"], sources: ["tominey-mcclelland-2011", "schmitt-2015"] },
  "simon-says": { hub: ["type", "simon-says"], sources: ["carlson-2005"] },
  "wake-windows": { hub: ["tag", "bedtime"], sources: ["paruthi-2016", "iglowstein-2003"] },
};

const RELATED_GAMES = 4;

/** A game's minutes as the picker prints them, a string because it crosses into the browser. */
const minutesUnit = (lang: Lang) => libraryFor(lang).games.minutesShort(0).replace("0", "{n}");

function WakeTable({ lang }: { lang: Lang }) {
  const { table } = toolsFor(lang).wake;
  return (
    <Section title={table.title}>
      <div className="mt-5 overflow-x-auto">
        <table className="num w-full min-w-[520px] text-left text-[14px] text-slate">
          <thead className="text-[13px] text-faint">
            <tr>
              {[table.age, table.naps, table.window, table.sleep].map((heading) => <th key={heading} className="border-b border-hairline py-2 pr-4 font-semibold">{heading}</th>)}
            </tr>
          </thead>
          <tbody>
            {AGE_ROWS.map((row) => {
              const naps = typicalNaps(row.from);
              return (
                <tr key={row.from}>
                  <th scope="row" className="border-b border-divider py-3 pr-4 font-semibold text-ink">{formatAgeRow(row, lang)}</th>
                  <td className="border-b border-divider py-3 pr-4">{naps}</td>
                  <td className="border-b border-divider py-3 pr-4">{formatWindow(wakeWindow(row.from, naps), lang)}</td>
                  <td className="border-b border-divider py-3 pr-4">{formatSleepHours(sleepHours(row.from), lang)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function Widget({ lang, slug }: { lang: Lang; slug: ToolSlug }) {
  const tools = toolsFor(lang);
  switch (slug) {
    case "visual-timer":
      return <VisualTimer words={tools.timer} controls={tools.controls} />;
    case "freeze-dance":
      return <FreezeDance words={tools.freeze} controls={tools.controls} />;
    case "red-light-green-light":
      return <RedLightGreenLight lang={lang} words={tools.light} controls={tools.controls} />;
    case "simon-says":
      return <SimonSays lang={lang} words={tools.simon} controls={tools.controls} />;
    case "wake-windows":
      return <WakePlanner lang={lang} words={tools.wake} gamesRoot={localePath(lang, GAMES_PATH)} minutesUnit={minutesUnit(lang)} />;
  }
}

/** What the tool adds below its own steps: the table people search for, or the moves. */
function Extra({ lang, slug }: { lang: Lang; slug: ToolSlug }): ReactNode {
  if (slug === "wake-windows") return <WakeTable lang={lang} />;
  if (slug !== "simon-says") return null;
  const { ideasTitle, commands } = toolsFor(lang).simon;
  return (
    <Section title={ideasTitle}>
      <ul className="mt-5 grid max-w-3xl gap-x-6 gap-y-2 text-[15px] text-slate sm:grid-cols-2">
        {commands.map((command) => <li key={command}>{command[0].toUpperCase() + command.slice(1)}</li>)}
      </ul>
    </Section>
  );
}

function ToolPage({ lang, slug }: { lang: Lang; slug: ToolSlug }) {
  const tools = toolsFor(lang);
  const words = libraryFor(lang);
  const page = tools.pages[slug];
  const path = toolPath(slug);
  const { hub: [kind, key], sources } = LINKS[slug];
  const hub = findHub(hubsIn(lang), kind, key)!;
  const games = gamesIn(lang).filter(hub.includes).slice(0, RELATED_GAMES);

  return (
    <SiteShell lang={lang} page={path}>
      <JsonLd data={toolStructuredData(lang, { name: page.name, description: page.description, path: localePath(lang, path) })} />
      <Trail lang={lang} crumbs={[{ name: tools.crumb, path: TOOLS_PATH }]} current={{ name: page.name, path }} />
      <Heading title={page.title} intro={page.description} />

      <Widget lang={lang} slug={slug} />

      <Section title={tools.howTitle}>
        <ol className="mt-5 max-w-3xl list-decimal space-y-2 pl-5 text-[16px] leading-relaxed text-slate">
          {page.how.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </Section>

      <Extra lang={lang} slug={slug} />

      <Section title={tools.faqTitle}>
        <dl className="mt-5 max-w-3xl space-y-5 text-[15px] leading-[1.6]">
          {page.faq.map(({ q, a }) => (
            <div key={q}>
              <dt className="font-semibold text-ink">{q}</dt>
              <dd className="mt-1 text-slate">{a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {sources.length > 0 && (
        <Section title={words.articles.sources}>
          <Research lang={lang} references={sources.map((id) => sourceById(id, lang))} />
        </Section>
      )}

      <AppPitch lang={lang} />

      <Section title={words.games.moreOf(hub.title)}>
        <GameList lang={lang} games={games} />
        <Link href={localePath(lang, hubPath(hub))} className="mt-4 inline-block text-[14px] font-semibold text-ink underline underline-offset-4">
          {words.games.allOf(hub.title)}
        </Link>
      </Section>
    </SiteShell>
  );
}

function ToolsIndex({ lang }: { lang: Lang }) {
  const tools = toolsFor(lang);
  const cards = [
    ...TOOL_SLUGS.map((slug) => ({ href: toolPath(slug) as string, name: tools.pages[slug].name, blurb: tools.pages[slug].description })),
    { href: `${GAMES_PATH}#${PICKER_ANCHOR}`, name: tools.index.pickerName, blurb: tools.index.pickerBlurb },
  ];
  return (
    <SiteShell lang={lang} page={TOOLS_PATH}>
      <Heading title={tools.index.title} intro={tools.index.intro} />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {cards.map((card) => (
          <li key={card.href}>
            <Link href={localePath(lang, card.href)} className="card block h-full p-5 hover:bg-white/80">
              <span className="block text-[18px] font-bold text-ink">{card.name}</span>
              <span className="mt-2 block text-[14px] leading-snug text-muted">{card.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
      <AppPitch lang={lang} />
    </SiteShell>
  );
}

/** The picker where the games pages show it, with the page's own age or energy already set. */
export function HubGamePicker({ lang, age, energy }: { lang: Lang; age?: (typeof AGES)[number]; energy?: (typeof ENERGIES)[number] }) {
  const words = libraryFor(lang);
  return (
    <GamePicker
      lang={lang}
      words={toolsFor(lang).picker}
      gamesRoot={localePath(lang, GAMES_PATH)}
      ages={AGES.map((value) => ({ value, label: words.ageNoun[value] }))}
      energies={ENERGIES.map((value) => ({ value, label: words.energy[value] }))}
      minutesUnit={minutesUnit(lang)}
      age={age}
      energy={energy}
    />
  );
}

/** What the tool route exports, at the root and under every locale. */
export function toolRoute() {
  type Props = RouteProps<{ slug: string }>;
  const pageOf = async ({ params }: Props) => {
    const { slug, locale } = await params;
    return { lang: langOfSegment(locale), slug: isToolSlug(slug) ? slug : notFound() };
  };
  return {
    params: () => TOOL_SLUGS.map((slug) => ({ slug })),
    metadata: async (props: Props): Promise<Metadata> => {
      const { lang, slug } = await pageOf(props);
      const { metaTitle, description } = toolsFor(lang).pages[slug];
      return libraryPageMetadata(lang, { title: `${metaTitle} | Oyno`, description, path: toolPath(slug) });
    },
    Page: async (props: Props) => <ToolPage {...await pageOf(props)} />,
  };
}

/** What the tools index exports, at the root and under every locale. */
export function toolsIndexRoute() {
  type Props = RouteProps<object>;
  const langOf = async ({ params }: Props) => langOfSegment((await params).locale);
  return {
    metadata: async (props: Props): Promise<Metadata> => {
      const lang = await langOf(props);
      const { metaTitle, intro } = toolsFor(lang).index;
      return libraryPageMetadata(lang, { title: `${metaTitle} | Oyno`, description: intro, path: TOOLS_PATH });
    },
    Page: async (props: Props) => <ToolsIndex lang={await langOf(props)} />,
  };
}
