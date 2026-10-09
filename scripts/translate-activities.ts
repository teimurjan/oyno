/**
 * Fills `activities/<locale>.json` for every language the app ships: each game and tag the
 * deck is missing, or holds for English that has since been reworded. A unit already
 * translated from the current English is never sent again, and the file is written after
 * every batch, so a run that died halfway picks up where it stopped. Review the diff, then
 * `bun run activities:build`.
 *
 *   bun run activities:translate
 *   bun run activities:translate -- --locale=fr
 *
 * Needs ANTHROPIC_API_KEY, or an `ant auth login` profile, only when there is work to do.
 */
import { writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";
import {
  EMPTY_TRANSLATIONS,
  SOURCE_LANG,
  compose,
  fingerprint,
  wordsFingerprint,
  type Source,
  type Translations,
} from "@/lib/activities";
import { LOCALES } from "@/lib/i18n";
import { absolute, loadSource, loadTranslations, render, translationsFile } from "./lib/activityFiles";

const MODEL = "claude-opus-5-5";
/** Games per request: enough to keep one voice across a batch, few enough to review as a diff. */
const BATCH = 20;

const TagBatch = z.object({ tags: z.array(z.object({ id: z.string(), label: z.string() })) });
const GameBatch = z.object({
  games: z.array(z.object({ id: z.string(), title: z.string(), blurb: z.string(), steps: z.array(z.string()) })),
});

const { values: flags } = parseArgs({ args: Bun.argv.slice(2), options: { locale: { type: "string" } } });
const shipping: readonly string[] = LOCALES;
if (flags.locale && !shipping.includes(flags.locale)) {
  throw new Error(`${flags.locale} is not in LOCALES (lib/i18n.ts)`);
}

const source = loadSource();
const translations = loadTranslations();
const wanted = shipping.filter((locale) => locale !== SOURCE_LANG && (!flags.locale || locale === flags.locale));
const { gaps } = compose(source, translations, wanted);

if (gaps.length === 0) {
  console.log("Nothing to translate: every deck is complete.");
  process.exit(0);
}

const client = new Anthropic();

const languageName = (locale: string) => new Intl.DisplayNames(["en"], { type: "language" }).of(locale) ?? locale;

const brief = (locale: string) =>
  `You translate Oyno, an app for parents of 2 to 8 year olds, from English into ${languageName(locale)}. ` +
  "Each game is one easy ten-minute thing a tired parent plays with their kid at home, in the evening. " +
  "Keep the voice: warm, playful, plain everyday words, short sentences. The parent is addressed " +
  "directly and the child is their kid, in whatever form is natural in the language. " +
  "A title is the game's name: make it short and fun in the language rather than literal. " +
  "A blurb is the one line under the title saying who the game is good for, kept to one sentence. " +
  "A step is one instruction to the parent, one or two short sentences, in the same order and " +
  "about the same length as the English, with the same number of steps. " +
  "A tag is a chip of one to three words under the title. " +
  "Translate every item, keep every id exactly as given, and return nothing else.";

async function ask<Shape>(locale: string, format: z.ZodType<Shape>, items: unknown): Promise<Shape> {
  const response = await client.messages.parse({
    model: MODEL,
    max_tokens: 16000,
    output_config: { effort: "medium", format: zodOutputFormat(format) },
    system: brief(locale),
    messages: [{ role: "user", content: JSON.stringify(items, null, 2) }],
  });
  if (response.stop_reason !== "end_turn" || !response.parsed_output) {
    const why = response.stop_details ? ` (${response.stop_details.category}: ${response.stop_details.explanation})` : "";
    throw new Error(`${locale}: the model stopped with ${response.stop_reason}${why}`);
  }
  return response.parsed_output;
}

/** Source order on disk, orphans dropped, so a diff reads the way the catalogue does. */
function ordered(deck: Translations, source: Source): Translations {
  return {
    tags: Object.fromEntries(Object.keys(source.tags).flatMap((id) => (deck.tags[id] ? [[id, deck.tags[id]]] : []))),
    activities: Object.fromEntries(
      source.activities.flatMap(({ id }) => (deck.activities[id] ? [[id, deck.activities[id]]] : [])),
    ),
  };
}

async function translate(locale: string) {
  const own = translations[locale] ?? EMPTY_TRANSLATIONS;
  const deck: Translations = { tags: { ...own.tags }, activities: { ...own.activities } };
  const save = () => writeFileSync(absolute(translationsFile(locale)), render(ordered(deck, source)));
  const mine = gaps.filter((gap) => gap.locale === locale);

  const tags = mine.filter((gap) => gap.kind === "tag").map((gap) => gap.id);
  if (tags.length) {
    const got = await ask(locale, TagBatch, { tags: tags.map((id) => ({ id, label: source.tags[id] })) });
    for (const id of tags) {
      const label = got.tags.find((tag) => tag.id === id)?.label.trim();
      if (!label) throw new Error(`${locale}: no label came back for tag ${id}`);
      deck.tags[id] = { source: fingerprint([source.tags[id]]), label };
    }
    save();
    console.log(`${locale}: ${tags.length} tags`);
  }

  const byId = new Map(source.activities.map((activity) => [activity.id, activity]));
  const games = mine.filter((gap) => gap.kind === "activity").flatMap((gap) => byId.get(gap.id) ?? []);
  for (let at = 0; at < games.length; at += BATCH) {
    const batch = games.slice(at, at + BATCH);
    const got = await ask(locale, GameBatch, {
      games: batch.map(({ id, title, blurb, steps }) => ({ id, title, blurb, steps })),
    });
    for (const activity of batch) {
      const words = got.games.find((game) => game.id === activity.id);
      const title = words?.title.trim();
      const blurb = words?.blurb.trim();
      const steps = words?.steps.map((step) => step.trim()) ?? [];
      if (!title || !blurb || steps.length !== activity.steps.length || steps.some((step) => !step)) {
        throw new Error(`${locale}: ${activity.id} came back incomplete`);
      }
      deck.activities[activity.id] = { source: wordsFingerprint(activity), title, blurb, steps };
    }
    save();
    console.log(`${locale}: ${Math.min(at + BATCH, games.length)}/${games.length} games`);
  }
}

const runs = await Promise.allSettled(wanted.map(translate));
const failed = runs.flatMap((run, index) => (run.status === "rejected" ? [`${wanted[index]}: ${run.reason}`] : []));
if (failed.length) {
  console.error(`${failed.length} language(s) stopped early; run again to resume:\n`);
  for (const failure of failed) console.error(`  ${failure}`);
  process.exit(1);
}
