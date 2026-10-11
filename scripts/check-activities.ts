/**
 * Fails if the deck is short of the five hundred games the listing promises, if a game, a tag
 * or a skill ships in English in a language the app claims, or if `Activities.json` was not
 * rebuilt after its sources changed. Run after `bun run activities:build`: build writes, this
 * one only reads.
 */
import { existsSync, readFileSync } from "node:fs";
import { compose } from "@/lib/activities";
import { LOCALES } from "@/lib/i18n";
import { RESOURCE_FILE, absolute, loadSource, loadTranslations, render } from "./lib/activityFiles";

/** What the store listing says. */
const PROMISED_GAMES = 500;

const { catalogue, gaps } = compose(loadSource(), loadTranslations(), LOCALES);
const problems = gaps.map(
  (gap) => `${gap.locale}: ${gap.kind} ${gap.id} is ${gap.reason} — run \`bun run activities:translate\``,
);

if (catalogue.activities.length < PROMISED_GAMES) {
  problems.push(`${catalogue.activities.length} games, and the listing promises ${PROMISED_GAMES}`);
}

const committed = existsSync(absolute(RESOURCE_FILE)) ? readFileSync(absolute(RESOURCE_FILE), "utf8") : "";
if (committed !== render(catalogue)) problems.push(`${RESOURCE_FILE} is stale — run \`bun run activities:build\``);

if (problems.length) {
  console.error(`${problems.length} problem(s):\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`${catalogue.activities.length} games × ${LOCALES.join(", ")} — complete.`);
