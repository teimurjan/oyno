// The one place the shipping locales are written down, in all three spellings they need.
//
// They are genuinely three different identifiers for the same market, and pairs of them
// disagree: the app's BCP-47 tag, Apple's region identifier that `simctl` wants, and App
// Store Connect's locale code. Russian happens to agree in the first and third
// (`ru` / `ru_RU` / `ru`) and Norwegian famously does not (`nb` / `nb_NO` / `no`) — but so
// do `it` -> `it_IT` -> `it` and `sv` -> `sv_SE` -> `sv` in the middle column. Keeping
// three separate lists in step by hand is how a locale ends up captured in the wrong
// language, or uploaded to the wrong storefront, with nothing failing loudly.
//
// `asc` values must all be members of FastlaneCore::Languages::ALL_LANGUAGES — deliver
// refuses to run when it meets a directory it cannot map to a language.
//
// **This list and `InterfaceLanguage.supported` are the same set, deliberately.** A store
// listing in a language the app is not drawn in sells a translation that does not exist;
// an app translated into a language with no listing is invisible to the market it was
// translated for. Adding a market means: a row here, a tag in `InterfaceLanguage`, a full
// `Localizable.xcstrings` column (`bun run strings:check` enforces it), and a metadata
// directory (`bun run metadata:check` enforces that one).
//
// The marketing site and the web funnel are the same set too: `LOCALES` in `lib/i18n.ts`,
// with a copy deck per language under `components/site/copy/` and `components/funnel/copy/`.
// `SITE_TAGS` below is read out of that TypeScript rather than repeated here, so the gallery
// can never be rendered for a language the site does not serve.

import { readFileSync } from "node:fs";

/** Ordered by market priority, which is the order every report prints in. */
export const LOCALES = [
  { tag: "en", sim: "en_US", asc: "en-US" },
];

export const APP_TAGS = LOCALES.map((locale) => locale.tag);
export const ASC_LOCALES = LOCALES.map((locale) => locale.asc);

/** Throws rather than defaulting: a typo in `--locales=` should stop the run, not
 * quietly capture English and label it Russian. */
export function localeFor(tag) {
  const locale = LOCALES.find((entry) => entry.tag === tag);
  if (!locale) throw new Error(`Unknown locale "${tag}" — expected one of ${APP_TAGS.join(", ")}`);
  return locale;
}

/** Every locale that can be captured, which is every locale there is.
 *
 * A capture needs two things a translated `Localizable.xcstrings` does not supply: a
 * caption file (`appstore/captions/<tag>.json`) and a `ScreenshotFixtures.Economy` in that
 * market's own currency. Without the second, a Polish frame photographs a shop billing in
 * dollars, which is a worse advertisement than the English frames App Store Connect falls
 * back to on its own. Both exist for all eighteen, so all eighteen are capturable — adding
 * a market means writing both in the same commit as the translation. */
export const SCREENSHOT_TAGS = APP_TAGS;

/** The highest-ASO markets. Kept as its own list so the capture picker can offer a
 * sensible default without hiding the other eight: eighteen locales with one box ticked
 * makes the common run look like the rare one. */
export const PRIORITY_TAGS = ["en", "de", "fr", "es", "es-MX", "pt-BR", "it", "nl", "pl", "ru"];

/** The locales the marketing site is written in, read out of `lib/i18n.ts`.
 *
 * The generator writes a downscaled WebP set to `public/screenshots/<asc>` for the
 * gallery, and that set is committed. A locale with no page on the site has nothing to
 * serve it, so rendering one would commit seven files per locale that no request ever
 * reaches. Parsed rather than repeated because a copy of a list is a list that goes
 * stale — the same reason `check-strings.mjs` reads its languages out of the Swift. */
export const SITE_TAGS = (() => {
  const source = readFileSync(new URL("../../../lib/i18n.ts", import.meta.url), "utf8");
  const match = source.match(/export const LOCALES = \[([^\]]*)\]/s);
  if (!match) throw new Error("No 'LOCALES' array in lib/i18n.ts");
  return [...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
})();
