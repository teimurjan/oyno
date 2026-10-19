import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site/SiteShell";
import { AGES, ENERGIES } from "@/lib/activities";
import { CATALOG, GAMES, HUBS } from "@/lib/games/catalog";
import { AGE_RANGE, audience, ENERGY_LABEL, hubPath, type Game, type Hub, type HubKind } from "@/lib/games/hubs";
import { englishPageMetadata } from "@/lib/seo";
import { AppPitch, capitalized, GAMES_CRUMB, GameList, Heading, Research, Section, Trail } from "./parts";

/** The age hubs already say who they are for; every other hub adds it from its games. */
const headingOf = (hub: Hub, games: readonly Game[]) => (hub.kind === "age" ? hub.title : `${hub.title} for ${audience(games)}`);

/** An age hub splits by energy, every other hub by age. */
function groups(hub: Hub, games: readonly Game[]) {
  if (hub.kind === "age") return ENERGIES.map((energy) => ({ title: ENERGY_LABEL[energy], games: games.filter((game) => game.energy === energy) }));
  return AGES.map((age) => ({ title: capitalized(AGE_RANGE[age]), games: games.filter((game) => game.age === age) }));
}

/** The sources the hub's games cite, the most cited first. */
function citedBy(games: readonly Game[]) {
  const counts = new Map<string, number>();
  for (const id of games.flatMap((game) => game.evidence)) counts.set(id, (counts.get(id) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => CATALOG.sources[id]);
}

function HubPage({ hub }: { hub: Hub }) {
  const games = GAMES.filter(hub.includes);
  const heading = headingOf(hub, games);
  const path = hubPath(hub);

  return (
    <SiteShell lang="en" page="home">
      <Trail crumbs={[GAMES_CRUMB]} current={{ name: hub.title, path }} />
      <Heading title={heading} intro={hub.intro} />

      {groups(hub, games)
        .filter((group) => group.games.length > 0)
        .map((group) => (
          <Section key={group.title} title={group.title}>
            <GameList games={group.games} />
          </Section>
        ))}

      <AppPitch />

      <Section title="The research behind these games">
        <Research references={citedBy(games)} age={hub.kind === "age" ? games[0]?.age : undefined} />
      </Section>
    </SiteShell>
  );
}

/** What each hub route exports: one per kind, because a route cannot hold two dynamic segments side by side. */
export function hubRoute(kind: HubKind) {
  type Props = { params: Promise<{ slug: string }> };
  const hubOf = async ({ params }: Props) => {
    const { slug } = await params;
    return HUBS.find((hub) => hub.kind === kind && hub.slug === slug) ?? notFound();
  };
  return {
    params: () => HUBS.filter((hub) => hub.kind === kind).map((hub) => ({ slug: hub.slug })),
    metadata: async (props: Props): Promise<Metadata> => {
      const hub = await hubOf(props);
      const title = `${headingOf(hub, GAMES.filter(hub.includes))} | Oyno`;
      return englishPageMetadata({ title, description: hub.intro, path: hubPath(hub) });
    },
    Page: async (props: Props) => <HubPage hub={await hubOf(props)} />,
  };
}
