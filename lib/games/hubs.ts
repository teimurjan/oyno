/**
 * The public game pages: where each game lives, the hub pages that group them, and which games
 * a page links on to. Pure: `catalog.ts` loads the games, this only arranges them.
 *
 * A hub is a search people make ("games for toddlers", "car games", "self-control games"), and
 * every game is reachable from at least its age hub, so a crawler that finds `/games` finds all.
 */
import type { Age, Energy, Mechanic, Skill, Source } from "@/lib/activities";

export type Game = Source["activities"][number];

export const GAMES_PATH = "/games";
export const gamePath = (id: string) => `${GAMES_PATH}/${id}`;

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

export const hubPath = (hub: Pick<Hub, "kind" | "slug">) => `${GAMES_PATH}/${hub.kind}/${hub.slug}`;

/** A tag or a game type with fewer games than this is a thin page, so it gets no hub. */
const MIN_HUB_GAMES = 4;

export const AGE_NOUN: Record<Age, string> = { "0-1": "babies", "1-3": "toddlers", "3-5": "preschoolers" };
export const AGE_RANGE: Record<Age, string> = { "0-1": "0 to 12 months", "1-3": "1 to 3 years", "3-5": "3 to 5 years" };
export const ENERGY_LABEL: Record<Energy, string> = { low: "Low energy", okay: "Medium energy", full: "High energy" };

const AGE_HUBS: Record<Age, Omit<Hub, "kind" | "key" | "includes">> = {
  "0-1": {
    slug: "babies",
    title: "Games for babies, 0 to 12 months",
    intro: "Lap games, peekaboo and first back-and-forth for the first year. Each takes 5 to 15 minutes and fits a tired parent.",
  },
  "1-3": {
    slug: "toddlers",
    title: "Games for toddlers, 1 to 3 years",
    intro: "Freeze games, hide-and-find and copycat games for one to three year olds, 5 to 15 minutes each, sorted by the energy you have left.",
  },
  "3-5": {
    slug: "preschoolers",
    title: "Games for preschoolers, 3 to 5 years",
    intro: "Rule games, memory games and pretend play that build self-control in three to five year olds, 5 to 15 minutes each.",
  },
};

const ENERGY_HUBS: Record<Energy, Omit<Hub, "kind" | "key" | "includes">> = {
  low: {
    slug: "low",
    title: "Low energy games for tired parents",
    intro: "Games for the end of a long day, many of them sitting or lying down. Your kid does the moving, you do the talking.",
  },
  okay: {
    slug: "medium",
    title: "Easy games for an ordinary evening",
    intro: "Games for when you have some energy left but not much: almost no setup and 5 to 15 minutes of play.",
  },
  full: {
    slug: "high",
    title: "Active games for when you have energy",
    intro: "Games that get you both moving: chasing, hopping, building and racing, 5 to 15 minutes each.",
  },
};

const SKILL_HUBS: Record<Skill, Omit<Hub, "kind" | "key" | "includes">> = {
  "working-memory": {
    slug: "working-memory",
    title: "Working memory games",
    intro: "Games that ask your kid to hold something in mind and use it: where the toy went, what comes next, which word is missing.",
  },
  "inhibitory-control": {
    slug: "self-control",
    title: "Self-control games",
    intro: "Games that practice stopping, waiting and doing the opposite of what the body wants: freeze games, waiting games, Simon says.",
  },
  "cognitive-flexibility": {
    slug: "flexible-thinking",
    title: "Flexible thinking games",
    intro: "Games that switch the rule halfway: sort by color, then by size; big means small; now you lead, now I do.",
  },
  attention: {
    slug: "focus",
    title: "Focus games",
    intro: "Games that hold your kid's attention on one thing a little longer: a toy that moves, a quiet sound, one page of a book.",
  },
};

const TYPE_HUBS: Record<Mechanic, { title: string; what: string }> = {
  peekaboo: { title: "Peekaboo games", what: "A face or a toy disappears and comes back, and your baby learns to expect it." },
  "hide-and-find": { title: "Hide-and-find games", what: "You hide a toy while your kid watches, and they remember where it went." },
  "anticipation-rhyme": { title: "Anticipation rhymes", what: "A rhyme builds to a tickle or a pause, and your kid learns to wait for it." },
  imitation: { title: "Copycat games", what: "You copy your kid and your kid copies you, one beat apart." },
  "pretend-play": { title: "Pretend play games", what: "An empty cup becomes tea and a teddy gets a whole day, so your kid holds a story in mind." },
  "fingerplay-song": { title: "Finger plays and action songs", what: "Songs with hand moves and sudden stops, sung slowly enough to follow." },
  conversation: { title: "Talking games", what: "You name what your kid looks at and wants, and leave room for them to answer." },
  "vocal-turns": { title: "Babble back-and-forth games", what: "You and your baby take turns babbling, like a real chat." },
  "joint-attention": { title: "Look-and-point games", what: "You and your kid look at the same thing, and their eyes learn to follow yours." },
  "turn-taking": { title: "Turn-taking games", what: "A toy or a ball goes back and forth, and each of you waits for a turn." },
  building: { title: "Building games", what: "Stacking, tipping and making tunnels, one careful step at a time." },
  "stop-go": { title: "Stop and go games", what: "Freeze games: move on go, stop dead on stop." },
  tempo: { title: "Fast and slow games", what: "The same move done fast, then slow, on your signal." },
  "simon-says": { title: "Simon says games", what: "Touch your nose, but only when the rule says so." },
  opposites: { title: "Opposite games", what: "Big means small and day means night, so your kid says the opposite of what they see." },
  "sorting-switch": { title: "Sorting games", what: "Sort things one way, then switch the rule and sort them another way." },
  "working-memory-list": { title: "Memory games", what: "Hold a short list in mind, in order, and say it back." },
  waiting: { title: "Waiting games", what: "Wait a few seconds for something good, with a game to help the wait." },
  "motor-control": { title: "Slow-motion games", what: "Slow, careful moves under a rule: tiptoe, tightrope, one finger only." },
  "motor-skill": { title: "Movement games", what: "Hopping, crawling, throwing and catching." },
  rhythm: { title: "Rhythm games", what: "Clap or tap a beat and copy it back." },
  storytelling: { title: "Storytelling games", what: "Tell a story together, in order, with your kid as the hero." },
  reading: { title: "Reading games", what: "A picture book with a job: find, guess or turn the page at the right time." },
  "quiet-focus": { title: "Quiet focus games", what: "Lie still, listen and breathe, with a small task to hold attention." },
  "rule-game": { title: "Rule games", what: "Classic games with one rule to remember, like Grandma's Footsteps." },
  planning: { title: "Planning games", what: "Think first, then do: aim, plan a route, say the plan out loud." },
  "quiet-voice": { title: "Whisper games", what: "Whisper, tiptoe and keep your voice small on purpose." },
};

/** Titles for the tags as searches. A tag missing here gets no hub. */
const TAG_TITLES: Record<string, string> = {
  "nothing-to-grab": "Games with no toys",
  "lying-down": "Games to play lying down",
  sitting: "Games to play sitting down",
  standing: "Standing games",
  "on-your-lap": "Lap games",
  quiet: "Quiet games",
  "one-room": "Games for one room",
  hallway: "Hallway games",
  bedtime: "Bedtime games",
  mealtime: "Mealtime games",
  bath: "Bath time games",
  "on-a-walk": "Games for a walk",
  "in-the-car": "Car games",
  stairs: "Stair games",
  window: "Window games",
  socks: "Games with socks",
  cushions: "Cushion games",
  chairs: "Games with chairs",
  "a-cup": "Games with a cup",
  "a-cloth": "Games with a cloth",
  "a-book": "Games with a book",
  "a-mirror": "Mirror games",
  "a-ball": "Ball games",
  "a-toy": "Games with one toy",
  stacking: "Stacking games",
  crayons: "Crayon games",
  lights: "Games with lights",
  music: "Music games",
  singing: "Singing games",
};

/** Who a set of games is for, in words: "babies and toddlers", "kids 0 to 5". */
export function audience(games: readonly Game[]): string {
  const ages = (Object.keys(AGE_NOUN) as Age[]).filter((age) => games.some((game) => game.age === age));
  if (ages.length === 3) return "kids 0 to 5";
  return ages.map((age) => AGE_NOUN[age]).join(" and ");
}

const countLine = (games: readonly Game[], title: string) =>
  `${games.length} ${title.toLowerCase()} for ${audience(games)}, 5 to 15 minutes each, with at most three steps.`;

/** Every hub the catalogue fills, in the order the index lists them. */
export function hubs(games: readonly Game[]): Hub[] {
  const ages = (Object.keys(AGE_HUBS) as Age[]).map((age) => ({
    ...AGE_HUBS[age],
    kind: "age" as const,
    key: age,
    includes: (game: Game) => game.age === age,
  }));
  const energies = (Object.keys(ENERGY_HUBS) as Energy[]).map((energy) => ({
    ...ENERGY_HUBS[energy],
    kind: "energy" as const,
    key: energy,
    includes: (game: Game) => game.energy === energy,
  }));
  const skills = (Object.keys(SKILL_HUBS) as Skill[]).map((skill) => ({
    ...SKILL_HUBS[skill],
    kind: "skill" as const,
    key: skill,
    includes: (game: Game) => game.skills.includes(skill),
  }));
  const types = (Object.keys(TYPE_HUBS) as Mechanic[]).map((mechanic) => {
    const includes = (game: Game) => game.mechanic === mechanic;
    const { title, what } = TYPE_HUBS[mechanic];
    return { kind: "type" as const, slug: mechanic, key: mechanic, title, intro: `${what} ${countLine(games.filter(includes), title)}`, includes };
  });
  const tags = Object.entries(TAG_TITLES).map(([tag, title]) => {
    const includes = (game: Game) => game.tags.includes(tag);
    return { kind: "tag" as const, slug: tag, key: tag, title, intro: countLine(games.filter(includes), title), includes };
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
