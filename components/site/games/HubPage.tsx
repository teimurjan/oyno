import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { langOfSegment, type RouteProps } from "@/components/site/route";
import { SiteShell } from "@/components/site/SiteShell";
import { AGES, ENERGIES } from "@/lib/activities";
import { gamesIn, hubsIn, sourceById } from "@/lib/games/catalog";
import { audience, hubPath, type Game, type Hub, type HubKind } from "@/lib/games/hubs";
import type { Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import { libraryPageMetadata } from "@/lib/seo";
import { AppPitch, capitalized, gamesCrumb, GameList, Heading, Research, Section, Trail } from "./parts";

/** The age hubs already say who they are for; every other hub adds it from its games. */
function headingOf(lang: Lang, hub: Hub, games: readonly Game[]) {
  const { hubs } = libraryFor(lang);
  return hub.kind === "age" ? hub.title : hubs.titleFor(hub.title, audience(games, hubs));
}

/** An age hub splits by energy, every other hub by age. */
function groups(lang: Lang, hub: Hub, games: readonly Game[]) {
  const words = libraryFor(lang);
  if (hub.kind === "age") return ENERGIES.map((energy) => ({ title: words.energy[energy], games: games.filter((game) => game.energy === energy) }));
  return AGES.map((age) => ({ title: capitalized(words.ageRange[age]), games: games.filter((game) => game.age === age) }));
}

/** The sources the hub's games cite, the most cited first. */
function citedBy(lang: Lang, games: readonly Game[]) {
  const counts = new Map<string, number>();
  for (const id of games.flatMap((game) => game.evidence)) counts.set(id, (counts.get(id) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => sourceById(id, lang));
}

function HubPage({ lang, hub }: { lang: Lang; hub: Hub }) {
  const games = gamesIn(lang).filter(hub.includes);
  const path = hubPath(hub);

  return (
    <SiteShell lang={lang} page={path}>
      <Trail lang={lang} crumbs={[gamesCrumb(lang)]} current={{ name: hub.title, path }} />
      <Heading title={headingOf(lang, hub, games)} intro={hub.intro} />

      {groups(lang, hub, games)
        .filter((group) => group.games.length > 0)
        .map((group) => (
          <Section key={group.title} title={group.title}>
            <GameList lang={lang} games={group.games} />
          </Section>
        ))}

      <AppPitch lang={lang} />

      <Section title={libraryFor(lang).games.researchBehind}>
        <Research lang={lang} references={citedBy(lang, games)} age={hub.kind === "age" ? games[0]?.age : undefined} />
      </Section>
    </SiteShell>
  );
}

/** What each hub route exports, at the root and under every locale: one per kind, because a
 * route cannot hold two dynamic segments side by side. */
export function hubRoute(kind: HubKind) {
  type Props = RouteProps<{ slug: string }>;
  const pageOf = async ({ params }: Props) => {
    const { slug, locale } = await params;
    const lang = langOfSegment(locale);
    return { lang, hub: hubsIn(lang).find((hub) => hub.kind === kind && hub.slug === slug) ?? notFound() };
  };
  return {
    params: () => hubsIn("en").filter((hub) => hub.kind === kind).map((hub) => ({ slug: hub.slug })),
    metadata: async (props: Props): Promise<Metadata> => {
      const { lang, hub } = await pageOf(props);
      const title = `${headingOf(lang, hub, gamesIn(lang).filter(hub.includes))} | Oyno`;
      return libraryPageMetadata(lang, { title, description: hub.intro, path: hubPath(hub) });
    },
    Page: async (props: Props) => <HubPage {...await pageOf(props)} />,
  };
}
