/**
 * The games as data. `activities/en.json` is the source: the shape of every game, the evidence
 * it leans on, and its English words. `activities/<locale>.json` holds what the translator
 * wrote, beside a fingerprint of the English it was written from. `compose` joins them into
 * the one file the phone decodes, `ios/Oyno/Resources/Activities.json`. Pure: the scripts own
 * the files.
 *
 * The fingerprint is what keeps a translation honest. Rewording a step changes it, so the old
 * translation counts as a gap rather than shipping under new English. Every gap, missing or
 * stale, is filled with English in the bundle and reported, and `bun run activities:check`
 * fails on it: a Polish screen with one English game on it reads as a bug, not as a gap.
 *
 * The evidence is what keeps a game honest. Every game names its mechanic, the executive
 * functions it exercises and the sources that say so. A study lists the mechanics it studied
 * and the ages it studied them at; a guide lists the mechanics it recommends for each age. The
 * schema refuses a citation that does not speak to the game's mechanic at the game's age, and
 * a game without both a study and a guide behind it. The bibliography is the `sources` block.
 *
 * The everyday moments (reading, bath, cooking, their lead) are open timers rather than games:
 * one per kind and age band, with three nudges where a game has steps. They follow the same
 * evidence rule, so a band no source speaks to has no moment, and the phone offers none.
 */
import { createHash } from "node:crypto";
import { z } from "zod";

export const SOURCE_LANG = "en";

export const ENERGIES = ["low", "okay", "full"] as const;
export type Energy = (typeof ENERGIES)[number];

/** Who the game is written for: a baby, a toddler, a preschooler. */
export const AGES = ["0-1", "1-3", "3-5"] as const;
export type Age = (typeof AGES)[number];

/** The first month of each band. */
export const BAND_START: Record<Age, number> = { "0-1": 0, "1-3": 12, "3-5": 36 };

/**
 * The executive functions, as Harvard's Center on the Developing Child names them, and the
 * attention control they grow out of in the first years.
 */
export const SKILLS = ["working-memory", "inhibitory-control", "cognitive-flexibility", "attention"] as const;
export type Skill = (typeof SKILLS)[number];

/**
 * What a game fundamentally asks the child to do: the unit the evidence is matched on. The
 * names follow the activity families in Harvard's guides. Peekaboo (a person hides and comes back)
 * and hide-and-find (an object is hidden and searched for) are two families because the infant
 * studies behind them differ, as are vocal turns (babble back and forth) and conversation
 * (naming and narrating). Movement is two families on purpose:
 * `motor-control` is slow, exact movement under a rule, the slowing tasks Kochanska timed;
 * `motor-skill` is hopping, crawling, throwing and catching, the skills Mulvey trained.
 */
export const MECHANICS = [
  "peekaboo", "hide-and-find", "anticipation-rhyme", "imitation", "pretend-play", "fingerplay-song", "conversation", "vocal-turns",
  "joint-attention", "turn-taking", "building", "stop-go", "tempo", "simon-says", "opposites", "sorting-switch",
  "working-memory-list", "waiting", "motor-control", "motor-skill", "rhythm", "storytelling", "reading", "quiet-focus",
  "rule-game", "planning", "quiet-voice",
] as const;
export type Mechanic = (typeof MECHANICS)[number];

/** The everyday moments Play offers beside the games, each an open timer with nudges. */
export const MOMENT_KINDS = ["reading", "bath", "cooking", "lead"] as const;
export type MomentKind = (typeof MOMENT_KINDS)[number];

const line = z.string().trim().min(1);
const identifier = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "kebab-case id");

/** A sentence ends at a terminator, any closing quote, then a space before a capital in any script or the end. */
const SENTENCE_END = /[.!?…]["”»')\]]*(?:\s+(?=["“«(\p{Lu}\d])|$)/gu;

export const sentenceCount = (text: string) => Math.max(1, (text.match(SENTENCE_END) ?? []).length);

/** One instruction is one sentence, so a whole game reads in three. */
const sentence = line.refine((text) => sentenceCount(text) === 1, "one sentence");

/** A game's words: its name, the one line under the tags saying who it suits, and its steps. */
const Words = z.object({ title: line, blurb: sentence, steps: z.array(sentence).min(1).max(3) });
type Words = z.infer<typeof Words>;

const citation = {
  /** How the phone names it: "Tominey & McClelland, 2011". */
  short: line,
  title: line,
  /** The journal and issue, or the institution. */
  published: line,
  year: z.number().int().min(1900).max(2100),
  url: z.url(),
};

/** How the study was built: a trial is the strongest claim, a correlation across years the weakest. */
export const DESIGNS = ["rct", "experiment", "longitudinal", "observational"] as const;

/** A peer-reviewed study: what it did, the mechanics it looked at, and the ages it looked at them in. */
const Study = z.object({
  ...citation,
  kind: z.literal("study"),
  design: z.enum(DESIGNS),
  /** One sentence on who took part and what they did, so a reader can judge the match. */
  studied: sentence,
  /** The youngest children in the study, in months. */
  fromMonths: z.number().int().min(0).max(84),
  ages: z.array(z.enum(AGES)).min(1),
  supports: z.array(z.enum(MECHANICS)).min(1),
});

/** An institution's guidance: the mechanics it recommends, by age, and the words it uses. */
const Guide = z.object({
  ...citation,
  kind: z.literal("guide"),
  recommends: z.partialRecord(z.enum(AGES), z.array(z.enum(MECHANICS)).min(1)),
  /** What the guide says for that age, one sentence, so a reader can check the mapping. */
  says: z.partialRecord(z.enum(AGES), sentence),
});

export const Reference = z.discriminatedUnion("kind", [Study, Guide]).superRefine((reference, context) => {
  if (reference.kind !== "guide") return;
  for (const age of Object.keys(reference.recommends)) {
    if (!(age in reference.says)) context.addIssue({ code: "custom", path: ["says", age], message: `no words for ${age}` });
  }
});
export type Reference = z.infer<typeof Reference>;

/** Whether `reference` speaks to `mechanic` at `age`: a study that looked at it, or a guide that recommends it. */
export function speaksTo(reference: Reference, mechanic: Mechanic, age: Age): boolean {
  return reference.kind === "study"
    ? reference.ages.includes(age) && reference.supports.includes(mechanic)
    : (reference.recommends[age] ?? []).includes(mechanic);
}

/** What a game or a moment practices, and the sources that say so. */
const evidenced = {
  mechanic: z.enum(MECHANICS),
  /** Where it starts above its band, in months: no cited study may have started older. */
  fromMonths: z.number().int().positive().optional(),
  skills: z.array(z.enum(SKILLS)).min(1).max(3),
  /** Source ids: a study that looked at this mechanic at this age, and a guide that recommends it. */
  evidence: z.array(identifier).min(2).max(3),
};

interface Evidenced {
  age: Age;
  mechanic: Mechanic;
  fromMonths?: number;
  evidence: string[];
}

/** Every citation speaks to the mechanic at the age, a study and a guide both, none started older. */
function checkEvidence(
  entry: Evidenced,
  sources: Record<string, Reference>,
  issue: (path: (string | number)[], message: string) => void,
) {
  const references = entry.evidence.flatMap((id, slot) => {
    const reference = sources[id];
    if (!reference) issue(["evidence", slot], `unknown source "${id}"`);
    else if (!speaksTo(reference, entry.mechanic, entry.age)) {
      const verb = reference.kind === "study" ? "did not study" : "does not recommend";
      issue(["evidence", slot], `"${id}" ${verb} ${entry.mechanic} at ${entry.age}`);
    }
    return reference ? [reference] : [];
  });
  for (const kind of ["study", "guide"] as const) {
    if (!references.some((reference) => reference.kind === kind && speaksTo(reference, entry.mechanic, entry.age))) {
      issue(["evidence"], `no ${kind} for ${entry.mechanic} at ${entry.age}`);
    }
  }
  const youngest = entry.fromMonths ?? BAND_START[entry.age];
  for (const reference of references) {
    if (reference.kind === "study" && reference.fromMonths > youngest) {
      issue(["evidence"], `"${reference.short}" started at ${reference.fromMonths} months, this one at ${youngest}`);
    }
  }
}

export const Source = z
  .object({
    /** The chips under a title, one small vocabulary shared by every game. */
    tags: z.record(identifier, line),
    /** What each skill is called on the phone. */
    skills: z.record(z.enum(SKILLS), line),
    sources: z.record(identifier, Reference),
    activities: z.array(
      Words.extend({
        id: identifier,
        age: z.enum(AGES),
        energy: z.enum(ENERGIES),
        /** Micro-play: five to fifteen minutes. */
        minutes: z.number().int().min(5).max(15),
        ...evidenced,
        /** Three fit beside the minutes chip on the play screen. */
        tags: z.array(identifier).max(3),
      }),
    ),
    /** One per kind and band; its `steps` are the nudges, one at a time on the timer. */
    moments: z.array(
      Words.extend({
        id: identifier,
        kind: z.enum(MOMENT_KINDS),
        age: z.enum(AGES),
        ...evidenced,
        steps: z.array(sentence).length(3),
        /** The tag of the games "Or play …" offers instead, where the deck has some. */
        game: identifier.optional(),
      }),
    ),
  })
  .superRefine((source, context) => {
    const seen = new Set<string>();
    const issue = (path: (string | number)[], message: string) => context.addIssue({ code: "custom", path, message });
    const unique = (at: (string | number)[], id: string) => {
      if (seen.has(id)) issue([...at, "id"], `duplicate id "${id}"`);
      seen.add(id);
    };
    source.activities.forEach((activity, index) => {
      const at = ["activities", index];
      unique(at, activity.id);
      activity.tags.forEach((tag, slot) => {
        if (!(tag in source.tags)) issue([...at, "tags", slot], `unknown tag "${tag}"`);
      });
      checkEvidence(activity, source.sources, (path, message) => issue([...at, ...path], message));
    });
    const bands = new Set<string>();
    source.moments.forEach((moment, index) => {
      const at = ["moments", index];
      unique(at, moment.id);
      const band = `${moment.kind} ${moment.age}`;
      if (bands.has(band)) issue(at, `a second ${band} moment`);
      bands.add(band);
      if (moment.game && !(moment.game in source.tags)) issue([...at, "game"], `unknown tag "${moment.game}"`);
      checkEvidence(moment, source.sources, (path, message) => issue([...at, ...path], message));
    });
  });
export type Source = z.infer<typeof Source>;

const translated = { source: z.string() };
const Labels = z.record(identifier, z.object({ ...translated, label: line }));
export const Translations = z.object({
  tags: Labels,
  skills: Labels,
  activities: z.record(identifier, Words.extend(translated)),
  moments: z.record(identifier, Words.extend(translated)).default({}),
});
export type Translations = z.infer<typeof Translations>;

export const EMPTY_TRANSLATIONS: Translations = { tags: {}, skills: {}, activities: {}, moments: {} };

/** What the phone decodes: the games and the bibliography once, and the words once per language. */
export interface Catalogue {
  activities: { id: string; age: Age; energy: Energy; minutes: number; tags: string[]; skills: Skill[]; evidence: string[] }[];
  moments: { id: string; kind: MomentKind; age: Age; game?: string; skills: Skill[]; evidence: string[] }[];
  sources: Record<string, Reference>;
  decks: Record<string, Deck>;
}

export interface Deck {
  tags: Record<string, string>;
  skills: Record<string, string>;
  activities: Record<string, Words>;
  moments: Record<string, Words>;
}

/** A unit a deck is missing, or holds for English that has since changed. */
export interface Gap {
  locale: string;
  kind: "tag" | "skill" | "activity" | "moment";
  id: string;
  reason: "missing" | "stale";
}

/** The English a translation was made from, short enough to sit beside it. */
export function fingerprint(parts: readonly string[]): string {
  return createHash("sha256").update(JSON.stringify(parts)).digest("hex").slice(0, 12);
}

export const wordsFingerprint = (words: { title: string; blurb: string; steps: readonly string[] }) =>
  fingerprint([words.title, words.blurb, ...words.steps]);

/** One vocabulary in `locale`: the translation where it was made from the current English, else the English. */
function labels(
  kind: "tag" | "skill",
  english: Record<string, string>,
  own: Translations["tags"],
  locale: string,
  gaps: Gap[],
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(english).map(([id, label]) => {
      const unit = own[id];
      const reason = !unit ? "missing" : unit.source !== fingerprint([label]) ? "stale" : null;
      if (reason) gaps.push({ locale, kind, id, reason });
      return [id, reason || !unit ? label : unit.label];
    }),
  );
}

/** Each game's or moment's words in `locale`: the translation where it was made from the current English, else the English. */
function worded(
  kind: "activity" | "moment",
  english: readonly (Words & { id: string })[],
  own: Translations["activities"],
  locale: string,
  gaps: Gap[],
): Record<string, Words> {
  return Object.fromEntries(
    english.map((entry) => {
      const unit = own[entry.id];
      const stale = unit && (unit.source !== wordsFingerprint(entry) || unit.steps.length !== entry.steps.length);
      const reason = !unit ? "missing" : stale ? "stale" : null;
      if (reason) gaps.push({ locale, kind, id: entry.id, reason });
      const words = reason || !unit ? entry : unit;
      return [entry.id, { title: words.title, blurb: words.blurb, steps: words.steps }];
    }),
  );
}

/**
 * The bundle for `locales`, English filling every gap, and the gaps. The source language
 * takes its deck straight from the source.
 */
export function compose(
  source: Source,
  translations: Record<string, Translations | undefined>,
  locales: readonly string[],
): { catalogue: Catalogue; gaps: Gap[] } {
  const english: Deck = {
    tags: source.tags,
    skills: source.skills,
    activities: Object.fromEntries(source.activities.map(({ id, title, blurb, steps }) => [id, { title, blurb, steps }])),
    moments: Object.fromEntries(source.moments.map(({ id, title, blurb, steps }) => [id, { title, blurb, steps }])),
  };
  const gaps: Gap[] = [];
  const decks: Record<string, Deck> = {};

  for (const locale of locales) {
    if (locale === SOURCE_LANG) {
      decks[locale] = english;
      continue;
    }
    const own = translations[locale] ?? EMPTY_TRANSLATIONS;
    decks[locale] = {
      tags: labels("tag", source.tags, own.tags, locale, gaps),
      skills: labels("skill", source.skills, own.skills, locale, gaps),
      activities: worded("activity", source.activities, own.activities, locale, gaps),
      moments: worded("moment", source.moments, own.moments, locale, gaps),
    };
  }

  return {
    catalogue: {
      activities: source.activities.map(({ id, age, energy, minutes, tags, skills, evidence }) => ({
        id, age, energy, minutes, tags, skills, evidence,
      })),
      moments: source.moments.map(({ id, kind, age, game, skills, evidence }) => ({ id, kind, age, game, skills, evidence })),
      sources: source.sources,
      decks,
    },
    gaps,
  };
}
