/**
 * Fills `activities/<locale>.json` for every language the app ships: each game, moment, tag and skill
 * the deck is missing, or holds for English that has since been reworded. A unit already
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

const LabelBatch = z.object({ labels: z.array(z.object({ id: z.string(), label: z.string() })) });
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
  `You translate Oyno, an app for parents of 0 to 5 year olds, from English into ${languageName(locale)}. ` +
  "Each game is one easy five-to-fifteen-minute thing a tired parent plays with their kid at home, in the evening. " +
  "Keep the voice: warm, playful, plain everyday words, short sentences. The parent is addressed " +
  "directly and the child is their kid, in whatever form is natural in the language. " +
  "A title is the game's name: make it short and fun in the language rather than literal. " +
  "A blurb is the one line under the title saying who the game is good for, kept to one sentence. " +
  "A step is one instruction to the parent, exactly one sentence, in the same order and " +
  "about the same length as the English, with the same number of steps. " +
  "A moment is an everyday routine the parent shares with the kid, like a bath or a book, and its steps are " +
  "three gentle nudges shown one at a time, each exactly one sentence, in the same order as the English. " +
  "A tag is a chip of one to three words under the title, saying where the game is played or what to grab. " +
  "A skill is the name of a thinking skill the game builds, one to three words, as a parent would say it. " +
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
    skills: Object.fromEntries(Object.keys(source.skills).flatMap((id) => (deck.skills[id] ? [[id, deck.skills[id]]] : []))),
    activities: Object.fromEntries(
      source.activities.flatMap(({ id }) => (deck.activities[id] ? [[id, deck.activities[id]]] : [])),
    ),
    moments: Object.fromEntries(source.moments.flatMap(({ id }) => (deck.moments[id] ? [[id, deck.moments[id]]] : []))),
  };
}

async function translate(locale: string) {
  const own = translations[locale] ?? EMPTY_TRANSLATIONS;
  const deck: Translations = {
    tags: { ...own.tags },
    skills: { ...own.skills },
    activities: { ...own.activities },
    moments: { ...own.moments },
  };
  const save = () => writeFileSync(absolute(translationsFile(locale)), render(ordered(deck, source)));
  const mine = gaps.filter((gap) => gap.locale === locale);

  for (const kind of ["tag", "skill"] as const) {
    const english: Record<string, string> = kind === "tag" ? source.tags : source.skills;
    const own = kind === "tag" ? deck.tags : deck.skills;
    const ids = mine.filter((gap) => gap.kind === kind).map((gap) => gap.id);
    if (!ids.length) continue;
    const got = await ask(locale, LabelBatch, { [`${kind}s`]: ids.map((id) => ({ id, label: english[id] })) });
    for (const id of ids) {
      const label = got.labels.find((unit) => unit.id === id)?.label.trim();
      if (!label) throw new Error(`${locale}: no label came back for ${kind} ${id}`);
      own[id] = { source: fingerprint([english[id]]), label };
    }
    save();
    console.log(`${locale}: ${ids.length} ${kind}s`);
  }

  for (const kind of ["activity", "moment"] as const) {
    const entries = kind === "activity" ? source.activities : source.moments;
    const own = kind === "activity" ? deck.activities : deck.moments;
    const byId = new Map<string, (typeof entries)[number]>(entries.map((entry) => [entry.id, entry]));
    const units = mine.filter((gap) => gap.kind === kind).flatMap((gap) => byId.get(gap.id) ?? []);
    for (let at = 0; at < units.length; at += BATCH) {
      const batch = units.slice(at, at + BATCH);
      const got = await ask(locale, GameBatch, {
        [kind === "activity" ? "games" : "moments"]: batch.map(({ id, title, blurb, steps }) => ({ id, title, blurb, steps })),
      });
      for (const entry of batch) {
        const words = got.games.find((game) => game.id === entry.id);
        const title = words?.title.trim();
        const blurb = words?.blurb.trim();
        const steps = words?.steps.map((step) => step.trim()) ?? [];
        if (!title || !blurb || steps.length !== entry.steps.length || steps.some((step) => !step)) {
          throw new Error(`${locale}: ${entry.id} came back incomplete`);
        }
        own[entry.id] = { source: wordsFingerprint(entry), title, blurb, steps };
      }
      save();
      console.log(`${locale}: ${Math.min(at + BATCH, units.length)}/${units.length} ${kind === "activity" ? "games" : "moments"}`);
    }
  }
}

const runs = await Promise.allSettled(wanted.map(translate));
const failed = runs.flatMap((run, index) => (run.status === "rejected" ? [`${wanted[index]}: ${run.reason}`] : []));
if (failed.length) {
  console.error(`${failed.length} language(s) stopped early; run again to resume:\n`);
  for (const failure of failed) console.error(`  ${failure}`);
  process.exit(1);
}
