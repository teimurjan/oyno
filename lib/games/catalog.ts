import "server-only";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import source from "@/activities/en.json";
import { compose, Source, SOURCE_LANG, Translations } from "@/lib/activities";
import { REFERENCES } from "@/lib/articles/references";
import { LOCALES, type Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import { hubs, type Game } from "./hubs";

/**
 * The games as the site reads them, checked once at build: the shape and the English from
 * `activities/en.json`, the other languages' words from `activities/<locale>.json`, English
 * filling any gap the way the phone's bundle does. The pages are all static, so this runs in
 * `next build` and never in a request.
 */
export const CATALOG = Source.parse(source);
export const GAMES = CATALOG.activities;

const translations = Object.fromEntries(
  LOCALES.filter((lang) => lang !== SOURCE_LANG).map((lang) => {
    const file = path.join(process.cwd(), "activities", `${lang}.json`);
    return [lang, existsSync(file) ? Translations.parse(JSON.parse(readFileSync(file, "utf8"))) : undefined];
  }),
);
const DECKS = compose(CATALOG, translations, LOCALES).catalogue.decks;

const LOCALIZED = Object.fromEntries(
  LOCALES.map((lang) => [lang, GAMES.map((game) => ({ ...game, ...DECKS[lang].activities[game.id] }))]),
) as Record<Lang, Game[]>;

/** Every game in `lang`, in the catalogue's order. */
export const gamesIn = (lang: Lang) => LOCALIZED[lang];
export const gameById = (id: string, lang: Lang = "en") => LOCALIZED[lang].find((game) => game.id === id);

/** What the chips call each skill and tag in `lang`. */
export const labelsIn = (lang: Lang) => ({ skills: DECKS[lang].skills, tags: DECKS[lang].tags });

const HUBS = Object.fromEntries(LOCALES.map((lang) => [lang, hubs(GAMES, libraryFor(lang).hubs)])) as Record<Lang, ReturnType<typeof hubs>>;
export const hubsIn = (lang: Lang) => HUBS[lang];

/** A source by id, from the games' bibliography or the articles' own, with its sentences in
 * `lang`. Throws on an unknown id, so a typo fails the build instead of shipping a claim with
 * nothing behind it. */
export function sourceById(id: string, lang: Lang = "en") {
  const reference = CATALOG.sources[id] ?? REFERENCES[id];
  if (!reference) throw new Error(`Unknown source "${id}"`);
  const words = libraryFor(lang).sources[id];
  if (!words) return reference;
  return reference.kind === "study"
    ? { ...reference, studied: words.studied ?? reference.studied }
    : { ...reference, says: { ...("says" in reference ? reference.says : {}), ...words.says } };
}

/** The illustration `bun run art:build` wrote, or nothing for a game not painted yet. */
export function gameArt(id: string): string | null {
  const file = `/art/activities/${id}.webp`;
  return existsSync(path.join(process.cwd(), "public", file)) ? file : null;
}
