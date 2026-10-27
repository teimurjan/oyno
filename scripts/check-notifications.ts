/**
 * Fails if `en.md` does not read, if a reminder ships in English in a language the app claims,
 * or if `Notifications.json` was not rebuilt after its sources changed. Run after
 * `bun run notifications:build`: build writes, this one only reads.
 */
import { existsSync, readFileSync } from "node:fs";
import { LOCALES } from "@/lib/i18n";
import { compose, readSource, versionFingerprint } from "@/lib/notifications";
import { absolute, render } from "./lib/activityFiles";
import { RESOURCE_FILE, SOURCE_FILE, describe, loadTranslations, translationsFile } from "./lib/notificationFiles";

const { reminders, problems: read } = readSource(readFileSync(absolute(SOURCE_FILE), "utf8"));
const { catalogue, gaps } = compose(reminders, loadTranslations(), LOCALES);
const problems = [
  ...read.map(describe),
  ...LOCALES.flatMap((locale) => {
    const owed = gaps.filter((gap) => gap.locale === locale);
    if (!owed.length) return [];
    const keys = owed.map((gap) => {
      const english = reminders.find((reminder) => reminder.id === gap.id)!.versions[gap.version];
      return `${gap.id}/${versionFingerprint(english)}`;
    });
    return [`${translationsFile(locale)}: ${owed.length} version(s) not translated: ${keys.join(", ")}`];
  }),
];

const committed = existsSync(absolute(RESOURCE_FILE)) ? readFileSync(absolute(RESOURCE_FILE), "utf8") : "";
if (committed !== render(catalogue)) problems.push(`${RESOURCE_FILE} is stale — run \`bun run notifications:build\``);

if (problems.length) {
  console.error(`${problems.length} problem(s):\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`${catalogue.reminders.length} reminders × ${LOCALES.join(", ")} — complete.`);
