/**
 * The public game pages: where each game lives, the hub pages that group them, and which games
 * a page links on to. Pure: `catalog.ts` loads the games, this only arranges them.
 *
 * A hub is a search people make ("games for toddlers", "car games", "self-control games"), and
 * every game is reachable from at least its age hub, so a crawler that finds `/games` finds all.
 */
import { AGES, ENERGIES, MECHANICS, SKILLS, type Age, type Energy, type Skill, type Source } from "@/lib/activities";
import { HUB_TAGS, type HubWords } from "@/lib/library/types";

export type Game = Source["activities"][number];

export const GAMES_PATH = "/games";
export const gamePath = (id: string) => `${GAMES_PATH}/${id}` as const;

export const HUB_KINDS = ["age", "energy", "skill", "type", "tag"] as const;
export type HubKind = (typeof HUB_KINDS)[number];

export interface Hub {
  kind: HubKind;
  slug: string;
  /** What it groups by: the age, energy, skill, mechanic or tag id. */
  key: string;
  /** The heading and, with the audience, the page title. */
  title: string;
  /** One or two sentences under the heading, also the meta description. */
  intro: string;
  includes: (game: Game) => boolean;
}

export const hubPath = (hub: Pick<Hub, "kind" | "slug">) => `${GAMES_PATH}/${hub.kind}/${hub.slug}` as const;

/** A tag or a game type with fewer games than this is a thin page, so it gets no hub. */
const MIN_HUB_GAMES = 4;

/** The URL segment of each age, energy and skill hub: English everywhere, like every path. */
const AGE_SLUG: Record<Age, string> = { "0-1": "babies", "1-3": "toddlers", "3-5": "preschoolers" };
const ENERGY_SLUG: Record<Energy, string> = { low: "low", okay: "medium", full: "high" };
const SKILL_SLUG: Record<Skill, string> = {
  "working-memory": "working-memory",
  "inhibitory-control": "self-control",
  "cognitive-flexibility": "flexible-thinking",
  attention: "focus",
};

/** The age bands a set of games covers, youngest first. */
export const agesOf = (games: readonly Game[]): Age[] => AGES.filter((age) => games.some((game) => game.age === age));

/** Who a set of games is for, in words: "babies and toddlers", "kids 0 to 5". */
export const audience = (games: readonly Game[], words: HubWords) => words.audience(agesOf(games));

/** Every hub the catalogue fills, in the order the index lists them, in the language of `words`. */
export function hubs(games: readonly Game[], words: HubWords): Hub[] {
  const countLine = (title: string, includes: (game: Game) => boolean) => {
    const grouped = games.filter(includes);
    return words.countLine(grouped.length, title, audience(grouped, words));
  };
  const ages = AGES.map((age) => ({
    ...words.age[age],
    kind: "age" as const,
    slug: AGE_SLUG[age],
    key: age,
    includes: (game: Game) => game.age === age,
  }));
  const energies = ENERGIES.map((energy) => ({
    ...words.energy[energy],
    kind: "energy" as const,
    slug: ENERGY_SLUG[energy],
    key: energy,
    includes: (game: Game) => game.energy === energy,
  }));
  const skills = SKILLS.map((skill) => ({
    ...words.skill[skill],
    kind: "skill" as const,
    slug: SKILL_SLUG[skill],
    key: skill,
    includes: (game: Game) => game.skills.includes(skill),
  }));
  const types = MECHANICS.map((mechanic) => {
    const includes = (game: Game) => game.mechanic === mechanic;
    const { title, what } = words.type[mechanic];
    return { kind: "type" as const, slug: mechanic, key: mechanic, title, intro: `${what} ${countLine(title, includes)}`, includes };
  });
  const tags = HUB_TAGS.map((tag) => {
    const includes = (game: Game) => game.tags.includes(tag);
    const title = words.tag[tag];
    return { kind: "tag" as const, slug: tag, key: tag, title, intro: countLine(title, includes), includes };
  });
  const thick = (hub: Hub) => games.filter(hub.includes).length >= MIN_HUB_GAMES;
  return [...ages, ...energies, ...skills, ...types.filter(thick), ...tags.filter(thick)];
}

export const findHub = (all: readonly Hub[], kind: HubKind, key: string) =>
  all.find((hub) => hub.kind === kind && hub.key === key);

/**
 * The games a game page links on to: the same type, the same age first, starting after it in
 * the catalogue. Starting after it spreads the links, so no game is linked from every page of
 * its type and none from none.
 */
export function relatedGames(game: Game, games: readonly Game[], count = 4): Game[] {
  const at = games.indexOf(game);
  const peers = games.filter((other) => other.mechanic === game.mechanic && other !== game);
  const after = [...peers.filter((other) => games.indexOf(other) > at), ...peers.filter((other) => games.indexOf(other) < at)];
  return [...after.filter((other) => other.age === game.age), ...after.filter((other) => other.age !== game.age)].slice(0, count);
}
