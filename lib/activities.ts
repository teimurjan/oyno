/**
 * The games as data. `activities/en.json` is the source: the shape of every game and its
 * English words. `activities/<locale>.json` holds what the translator wrote, beside a
 * fingerprint of the English it was written from. `compose` joins them into the one file the
 * phone decodes, `ios/Oyno/Resources/Activities.json`. Pure: the scripts own the files.
 *
 * The fingerprint is what keeps a translation honest. Rewording a step changes it, so the old
 * translation counts as a gap rather than shipping under new English. Every gap, missing or
 * stale, is filled with English in the bundle and reported, and `bun run activities:check`
 * fails on it: a Polish screen with one English game on it reads as a bug, not as a gap.
 */
import { createHash } from "node:crypto";
import { z } from "zod";

export const SOURCE_LANG = "en";

export const ENERGIES = ["low", "okay", "full"] as const;
export type Energy = (typeof ENERGIES)[number];

const line = z.string().trim().min(1);
const identifier = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "kebab-case id");

/** A game's words: its name, the one line under the tags saying who it suits, and its steps. */
const Words = z.object({ title: line, blurb: line, steps: z.array(line).min(1) });
type Words = z.infer<typeof Words>;

export const Source = z
  .object({
    /** The chips under a title, one small vocabulary shared by every game. */
    tags: z.record(identifier, line),
    activities: z.array(
      Words.extend({
        id: identifier,
        energy: z.enum(ENERGIES),
        minutes: z.number().int().positive(),
        /** Three fit beside the minutes chip on the play screen. */
        tags: z.array(identifier).max(3),
      }),
    ),
  })
  .superRefine((source, context) => {
    const seen = new Set<string>();
    source.activities.forEach((activity, index) => {
      if (seen.has(activity.id)) {
        context.addIssue({ code: "custom", path: ["activities", index, "id"], message: `duplicate id "${activity.id}"` });
      }
      seen.add(activity.id);
      activity.tags.forEach((tag, at) => {
        if (!(tag in source.tags)) {
          context.addIssue({ code: "custom", path: ["activities", index, "tags", at], message: `unknown tag "${tag}"` });
        }
      });
    });
  });
export type Source = z.infer<typeof Source>;

const translated = { source: z.string() };
export const Translations = z.object({
  tags: z.record(identifier, z.object({ ...translated, label: line })),
  activities: z.record(identifier, Words.extend(translated)),
});
export type Translations = z.infer<typeof Translations>;

export const EMPTY_TRANSLATIONS: Translations = { tags: {}, activities: {} };

/** What the phone decodes: the games once, and their words once per language. */
export interface Catalogue {
  activities: { id: string; energy: Energy; minutes: number; tags: string[] }[];
  decks: Record<string, Deck>;
}

export interface Deck {
  tags: Record<string, string>;
  activities: Record<string, Words>;
}

/** A unit a deck is missing, or holds for English that has since changed. */
export interface Gap {
  locale: string;
  kind: "tag" | "activity";
  id: string;
  reason: "missing" | "stale";
}

/** The English a translation was made from, short enough to sit beside it. */
export function fingerprint(parts: readonly string[]): string {
  return createHash("sha256").update(JSON.stringify(parts)).digest("hex").slice(0, 12);
}

export const wordsFingerprint = (words: { title: string; blurb: string; steps: readonly string[] }) =>
  fingerprint([words.title, words.blurb, ...words.steps]);

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
    activities: Object.fromEntries(source.activities.map(({ id, title, blurb, steps }) => [id, { title, blurb, steps }])),
  };
  const gaps: Gap[] = [];
  const decks: Record<string, Deck> = {};

  for (const locale of locales) {
    if (locale === SOURCE_LANG) {
      decks[locale] = english;
      continue;
    }
    const own = translations[locale] ?? EMPTY_TRANSLATIONS;
    const deck: Deck = { tags: {}, activities: {} };

    for (const [id, label] of Object.entries(source.tags)) {
      const unit = own.tags[id];
      const reason = !unit ? "missing" : unit.source !== fingerprint([label]) ? "stale" : null;
      if (reason) gaps.push({ locale, kind: "tag", id, reason });
      deck.tags[id] = reason || !unit ? label : unit.label;
    }

    for (const activity of source.activities) {
      const unit = own.activities[activity.id];
      const stale = unit && (unit.source !== wordsFingerprint(activity) || unit.steps.length !== activity.steps.length);
      const reason = !unit ? "missing" : stale ? "stale" : null;
      if (reason) gaps.push({ locale, kind: "activity", id: activity.id, reason });
      deck.activities[activity.id] = reason || !unit
        ? { title: activity.title, blurb: activity.blurb, steps: activity.steps }
        : { title: unit.title, blurb: unit.blurb, steps: unit.steps };
    }

    decks[locale] = deck;
  }

  return {
    catalogue: {
      activities: source.activities.map(({ id, energy, minutes, tags }) => ({ id, energy, minutes, tags })),
      decks,
    },
    gaps,
  };
}
