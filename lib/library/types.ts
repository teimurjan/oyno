import type { Age, DESIGNS, Energy, Mechanic, Skill } from "@/lib/activities";

/**
 * The words of the library: the games pages, the guides and the blog, in one language. The
 * games' own words come from `activities/<locale>.json` and the articles are TSX of their own,
 * so this holds the rest: the hubs, the page chrome and the bibliography's sentences.
 *
 * A phrase that needs grammar around a number or a name is a function, so each language can
 * decline it rather than slot it into English word order.
 */
export interface HubText {
  title: string;
  /** One or two sentences under the heading, also the meta description. */
  intro: string;
}

/** The tags that get a hub, as searches. A tag missing here gets none. */
export const HUB_TAGS = [
  "nothing-to-grab", "lying-down", "sitting", "standing", "on-your-lap", "quiet", "one-room", "hallway", "bedtime",
  "mealtime", "bath", "on-a-walk", "in-the-car", "stairs", "window", "socks", "cushions", "chairs", "a-cup", "a-cloth",
  "a-book", "a-mirror", "a-ball", "a-toy", "stacking", "crayons", "lights", "music", "singing",
] as const;
export type HubTag = (typeof HUB_TAGS)[number];

export interface HubWords {
  age: Record<Age, HubText>;
  energy: Record<Energy, HubText>;
  skill: Record<Skill, HubText>;
  /** A game type's title and the one sentence on what it is, which opens its intro. */
  type: Record<Mechanic, { title: string; what: string }>;
  tag: Record<HubTag, string>;
  /** Who a set of ages is, after "for": "babies and toddlers", "kids 0 to 5". */
  audience: (ages: readonly Age[]) => string;
  /** A hub's heading with who it is for: "Memory games for toddlers". */
  titleFor: (title: string, audience: string) => string;
  /** The line closing a type or tag hub's intro. */
  countLine: (count: number, title: string, audience: string) => string;
}

export type Design = (typeof DESIGNS)[number];

export interface LibraryCopy {
  /** Who an age band is, on a game card: "toddlers". */
  ageNoun: Record<Age, string>;
  ageRange: Record<Age, string>;
  energy: Record<Energy, string>;
  hubs: HubWords;
  games: {
    crumb: string;
    title: string;
    intro: (count: number) => string;
    sections: { age: string; energy: string; skill: string; type: string; tag: string };
    /** "10 minutes", under a game's title. */
    minutes: (minutes: number) => string;
    /** "10 min", on a game card. */
    minutesShort: (minutes: number) => string;
    whyItWorks: string;
    /** The heading over related games, "More peekaboo games", and the link under them. */
    moreOf: (typeTitle: string) => string;
    allOf: (typeTitle: string) => string;
    more: string;
    researchBehind: string;
    metaTitle: (game: { title: string; minutes: number; age: Age }) => string;
    /** `skills` are the skills' labels in this language, to join and case as the sentence needs. */
    metaDescription: (game: { blurb: string; steps: number; minutes: number; skills: readonly string[] }) => string;
  };
  research: { design: Record<Design, string>; study: string; guide: string };
  pitch: { title: string; body: string; cta: string };
  articles: {
    guide: { crumb: string; title: string; intro: string };
    post: { crumb: string; title: string; intro: string };
    tryThese: string;
    sources: string;
    /** Under an article's description: "Tim, maker of Oyno". */
    byline: (name: string) => string;
  };
  /**
   * The bibliography's sentences, by source id, from `activities/en.json` and
   * `lib/articles/references.ts`. English reads them from there and leaves this empty.
   */
  sources: Record<string, { studied?: string; says?: Partial<Record<Age, string>> }>;
}
