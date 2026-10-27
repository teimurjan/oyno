import { existsSync, readFileSync } from "node:fs";
import { z } from "zod";
import { LOCALES } from "@/lib/i18n";
import { type Problem, type Reminder, SOURCE_LANG, type Translations, readSource } from "@/lib/notifications";
import { absolute } from "./activityFiles";

/** Where the reminders live, relative to the repo, which is how every message names them. */
export const SOURCE_FILE = "push-notifications/en.md";
export const RESOURCE_FILE = "ios/Oyno/Resources/Notifications.json";
export const translationsFile = (locale: string) => `push-notifications/${locale}.json`;

const TranslationsSchema = z.record(
  z.string(),
  z.record(z.string(), z.object({ title: z.string().min(1), body: z.string().min(1) })),
);

export const describe = (problem: Problem) => `${SOURCE_FILE}:${problem.line}: ${problem.message}`;

/** The reminders in `en.md`, or every problem in it: nothing is built from a file that does not read. */
export function loadSource(): Reminder[] {
  const { reminders, problems } = readSource(readFileSync(absolute(SOURCE_FILE), "utf8"));
  if (problems.length) throw new Error(`${problems.length} problem(s):\n${problems.map(describe).join("\n")}`);
  return reminders;
}

/** Each shipping language's translations, absent where no file has been written yet. */
export function loadTranslations(): Record<string, Translations | undefined> {
  const entries = LOCALES.filter((locale) => locale !== SOURCE_LANG).map((locale) => {
    const file = translationsFile(locale);
    if (!existsSync(absolute(file))) return [locale, undefined] as const;
    const result = TranslationsSchema.safeParse(JSON.parse(readFileSync(absolute(file), "utf8")));
    if (!result.success) throw new Error(`${file}:\n${z.prettifyError(result.error)}`);
    return [locale, result.data] as const;
  });
  return Object.fromEntries(entries);
}
