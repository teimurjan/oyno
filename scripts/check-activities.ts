/**
 * Fails if a game or a tag ships in English in a language the app claims, or if
 * `Activities.json` was not rebuilt after its sources changed. Run after
 * `bun run activities:build`: build writes, this one only reads.
 */
import { existsSync, readFileSync } from "node:fs";
import { compose } from "@/lib/activities";
import { LOCALES } from "@/lib/i18n";
import { RESOURCE_FILE, absolute, loadSource, loadTranslations, render } from "./lib/activityFiles";

const { catalogue, gaps } = compose(loadSource(), loadTranslations(), LOCALES);
const problems = gaps.map(
  (gap) => `${gap.locale}: ${gap.kind} ${gap.id} is ${gap.reason} — run \`bun run activities:translate\``,
);

const committed = existsSync(absolute(RESOURCE_FILE)) ? readFileSync(absolute(RESOURCE_FILE), "utf8") : "";
if (committed !== render(catalogue)) problems.push(`${RESOURCE_FILE} is stale — run \`bun run activities:build\``);

if (problems.length) {
  console.error(`${problems.length} problem(s):\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`${catalogue.activities.length} games × ${LOCALES.join(", ")} — complete.`);
