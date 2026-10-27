/**
 * Writes the reminders into the iOS bundle (`ios/Oyno/Resources/Notifications.json`): the
 * settings and the English from `push-notifications/en.md`, the other words from
 * `push-notifications/<locale>.json`. Generated and committed, never edited. A gap is filled
 * with English here and failed by `bun run notifications:check`.
 */
import { writeFileSync } from "node:fs";
import { LOCALES } from "@/lib/i18n";
import { compose } from "@/lib/notifications";
import { absolute, render } from "./lib/activityFiles";
import { RESOURCE_FILE, loadSource, loadTranslations } from "./lib/notificationFiles";

const { catalogue, gaps } = compose(loadSource(), loadTranslations(), LOCALES);
writeFileSync(absolute(RESOURCE_FILE), render(catalogue));
console.log(`Wrote ${RESOURCE_FILE}: ${catalogue.reminders.length} reminders, ${Object.keys(catalogue.decks).length} decks`);
for (const locale of LOCALES) {
  const owed = gaps.filter((gap) => gap.locale === locale).length;
  if (owed) console.warn(`  ${locale}: ${owed} version(s) shipped in English — \`bun run notifications:check\` lists them`);
}
