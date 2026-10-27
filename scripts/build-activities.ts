/**
 * Writes the games into the iOS bundle (`ios/Oyno/Resources/Activities.json`): the shape and
 * the English from `activities/en.json`, the other words from `activities/<locale>.json` for
 * every language the app ships. Generated and committed, never edited. A gap is filled with
 * English here and failed by `bun run activities:check`, so the phone always has a complete
 * deck and the repo always knows which lines it is still owed.
 */
import { writeFileSync } from "node:fs";
import { compose } from "@/lib/activities";
import { LOCALES } from "@/lib/i18n";
import { RESOURCE_FILE, absolute, loadSource, loadTranslations, render } from "./lib/activityFiles";

const { catalogue, gaps } = compose(loadSource(), loadTranslations(), LOCALES);
writeFileSync(absolute(RESOURCE_FILE), render(catalogue));
console.log(`Wrote ${RESOURCE_FILE}: ${catalogue.activities.length} games, ${catalogue.moments.length} moments, ${Object.keys(catalogue.decks).length} decks`);
for (const gap of gaps) console.warn(`  ${gap.locale}: ${gap.kind} ${gap.id} is ${gap.reason}, shipped in English`);
