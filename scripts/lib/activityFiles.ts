import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { SOURCE_LANG, Source, Translations } from "@/lib/activities";
import { LOCALES } from "@/lib/i18n";

/** Where the games live, relative to the repo, which is how every message names them. */
export const SOURCE_FILE = "activities/en.json";
export const RESOURCE_FILE = "ios/Oyno/Resources/Activities.json";
export const translationsFile = (locale: string) => `activities/${locale}.json`;

const ROOT = path.resolve(import.meta.dir, "../..");
export const absolute = (file: string) => path.join(ROOT, file);

function parse<T>(file: string, schema: z.ZodType<T>): T {
  const result = schema.safeParse(JSON.parse(readFileSync(absolute(file), "utf8")));
  if (!result.success) throw new Error(`${file}:\n${z.prettifyError(result.error)}`);
  return result.data;
}

export const loadSource = () => parse(SOURCE_FILE, Source);

/** Each shipping language's translations, absent where no file has been written yet. */
export function loadTranslations(): Record<string, Translations | undefined> {
  const entries = LOCALES.filter((locale) => locale !== SOURCE_LANG).map((locale) => {
    const file = translationsFile(locale);
    return [locale, existsSync(absolute(file)) ? parse(file, Translations) : undefined] as const;
  });
  return Object.fromEntries(entries);
}

/** One shape on disk, so `check` can compare bytes. */
export const render = (value: unknown) => `${JSON.stringify(value, null, 2)}\n`;
