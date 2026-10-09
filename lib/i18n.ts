/**
 * The languages the site is written in, and the one place that knows where each page lives
 * in each of them.
 *
 * English sits at the root and every other locale under its own prefix, rather than all of
 * them under one. The English URLs are the ones already indexed and already printed in the
 * App Store listing, and moving them to `/en` to gain symmetry would cost every one of
 * those links.
 *
 * Adding a locale is this list, a copy deck in `components/site/copy/` and one in
 * `components/funnel/copy/`, a name below, and a row in `lib/markets.ts`. The routes are
 * `app/[locale]/**` and `public/funnel/<tag>/`, and both already serve whatever is on the list.
 *
 * The tag is the URL segment as it stands, region and all (`/es-MX`, `/pt-BR`): those are
 * different translations rather than regions of one, and `hreflang` wants the same spelling.
 *
 * The same set as `InterfaceLanguage.supported` in the app and `LOCALES` in
 * `appstore/scripts/lib/locales.mjs`. A market is only really supported when all three
 * agree: a Russian ad landing on an English page converts about as well as a Russian
 * listing for an English app.
 */

export const LOCALES = [
  "en", "es", "es-MX", "fr", "de", "pt-BR", "pt-PT", "it", "nl",
  "sv", "da", "nb", "fi", "pl", "cs", "tr", "ru", "uk",
] as const;
export type Lang = (typeof LOCALES)[number];

export const DEFAULT_LANG: Lang = "en";

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Every locale that carries a path prefix — the list minus the default, which is served
 * from the root. It is what `app/[locale]` generates its params from, so a locale added
 * above gets its pages for free and `/en` stays a 404 rather than a second address for
 * pages that already have one. */
export const PREFIXED_LOCALES = LOCALES.filter((lang) => lang !== DEFAULT_LANG);

export function isPrefixedLocale(value: unknown): value is Lang {
  return isLang(value) && value !== DEFAULT_LANG;
}

/** Each language named in itself, for the switcher.
 *
 * In the copy decks this was the name of *the other* language, which is a shape that only
 * works while there are exactly two. A reader looking for their own language scans for the
 * word they would write it with, not for its English name. */
export const LOCALE_NAMES: Record<Lang, string> = {
  en: "English",
  es: "Español (España)",
  "es-MX": "Español (México)",
  fr: "Français",
  de: "Deutsch",
  "pt-BR": "Português (Brasil)",
  "pt-PT": "Português (Portugal)",
  it: "Italiano",
  nl: "Nederlands",
  sv: "Svenska",
  da: "Dansk",
  nb: "Norsk bokmål",
  fi: "Suomi",
  pl: "Polski",
  cs: "Čeština",
  tr: "Türkçe",
  ru: "Русский",
  uk: "Українська",
};

/** Every page the site has, addressed by name rather than by path.
 *
 * The name is what the language switcher and the proxy pass around, which is what makes
 * `/lang` safe: it maps a name from this list to a path and can therefore never be talked
 * into redirecting somewhere else. A `?next=` carrying a URL would be an open redirect on
 * a domain that also runs a checkout. */
export const SITE_PAGES = ["home", "pricing", "support", "privacy", "terms", "refund"] as const;
export type SitePage = (typeof SITE_PAGES)[number];

export function isSitePage(value: unknown): value is SitePage {
  return typeof value === "string" && (SITE_PAGES as readonly string[]).includes(value);
}

const SUFFIX: Record<SitePage, string> = {
  home: "",
  pricing: "/pricing",
  support: "/support",
  privacy: "/privacy",
  terms: "/terms",
  refund: "/refund",
};

export function pathFor(lang: Lang, page: SitePage): string {
  const suffix = SUFFIX[page];
  if (lang === DEFAULT_LANG) return suffix || "/";
  return `/${lang}${suffix}`;
}

/** Where the web funnel lives in a language: `/start` for English, whose URL every live ad
 * already points at, and under the locale's prefix for the rest — the same shape as the
 * site's own pages. `done` is the page a purchase lands on. */
export function funnelPath(lang: Lang, page: "start" | "done" = "start"): string {
  const suffix = page === "done" ? "/start/done" : "/start";
  return lang === DEFAULT_LANG ? suffix : `/${lang}${suffix}`;
}

/** Turns a request path back into the page it is, for the proxy's redirect and for the
 * switcher. Returns null for anything that is not a marketing page — the funnel, the API
 * and `/lang` itself must never be rewritten by language. */
export function pageForPath(pathname: string): { lang: Lang; page: SitePage } | null {
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  for (const lang of LOCALES) {
    for (const page of SITE_PAGES) {
      if (pathFor(lang, page) === trimmed) return { lang, page };
    }
  }
  return null;
}

/** The cookie the language switcher writes.
 *
 * Its whole job is to beat the geo rule. Without it, a Russian-speaking reader who wants
 * the English page clicks "English", lands on `/`, and is redirected straight back to
 * `/ru` by their own IP address — a switcher that cannot switch. */
export const LANG_COOKIE = "oyno.lang";
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * The locale a single language tag asks for, or nothing when the site has no such language.
 *
 * Region subtags mostly drop away — `de-AT` is German — except where the site keeps two
 * translations of one language. Spanish outside Spain reads the Mexican deck (`es-419`,
 * `es-AR`, `es-US` are all Latin American usage), Portuguese is Brazilian unless it names
 * Portugal, and the three spellings of Norwegian are the one Bokmål deck.
 */
export function localeForTag(tag: string): Lang | undefined {
  const [base, region] = tag.trim().toLowerCase().split("-");
  if (base === "es") return region && region !== "es" ? "es-MX" : "es";
  if (base === "pt") return region === "pt" ? "pt-PT" : "pt-BR";
  if (base === "no" || base === "nn" || base === "nb") return "nb";
  return isLang(base) ? base : undefined;
}

/**
 * The first language on an `Accept-Language` header that the site is written in, or
 * nothing when none of them is.
 *
 * Walked in the reader's order, not read off the first tag alone. A browser set to
 * `kk, ru, en` has asked for Russian over English as plainly as one set to `ru` has, and
 * a reader whose first language the site lacks is exactly who the rest of the list is
 * for. Weights are honoured because the header defines preference by `q`, not position,
 * and `q=0` is a language the reader has refused.
 */
export function languageFromAcceptHeader(header: string | null | undefined): Lang | undefined {
  if (!header) return undefined;
  return header
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.trim().split(";");
      const weight = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { tag, q: weight ? Number(weight.slice(2)) : 1 };
    })
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q)
    .map(({ tag }) => localeForTag(tag))
    .find((lang) => lang !== undefined);
}

/** The locale a reader in a given country is most likely to want, keyed by the country
 * code the platform puts on the request. A country not named here gets the default.
 *
 * Consulted only when the browser's own languages name none the site has — a Kazakh-only
 * header, a bot, a bare `curl`. A language a reader set on their device is a decision;
 * where their packets come from is a guess about where they are standing, and the guess
 * must not overrule the decision.
 *
 * Russian is wider than Russia on purpose: Kazakhstan, Kyrgyzstan and Belarus are markets
 * where a maker's suppliers, invoices and marketplace listings are in Russian, which is
 * why the app bills in tenge and som as well as roubles. Countries with two languages of
 * their own (Belgium, Switzerland) are left out rather than guessed at: this only decides
 * which page loads first, and every one of them carries a switcher. */
export const LOCALE_BY_COUNTRY: Partial<Record<string, Lang>> = {
  ES: "es",
  MX: "es-MX", AR: "es-MX", CO: "es-MX", CL: "es-MX", PE: "es-MX", VE: "es-MX", EC: "es-MX",
  GT: "es-MX", BO: "es-MX", DO: "es-MX", HN: "es-MX", PY: "es-MX", SV: "es-MX", NI: "es-MX",
  CR: "es-MX", PA: "es-MX", UY: "es-MX", CU: "es-MX",
  FR: "fr", MC: "fr",
  DE: "de", AT: "de", LI: "de",
  BR: "pt-BR",
  PT: "pt-PT", AO: "pt-PT", MZ: "pt-PT",
  IT: "it", SM: "it",
  NL: "nl",
  SE: "sv",
  DK: "da",
  NO: "nb",
  FI: "fi",
  PL: "pl",
  CZ: "cs",
  TR: "tr",
  UA: "uk",
  RU: "ru", BY: "ru", KZ: "ru", KG: "ru", UZ: "ru", TJ: "ru", TM: "ru", AM: "ru", AZ: "ru",
  MD: "ru",
};

/** The canonical origin, for the absolute URLs `hreflang` requires.
 *
 * The same `SITE_URL` the Paddle webhook builds its success redirect from, not a
 * `NEXT_PUBLIC_` twin: `alternates` is resolved when the page's metadata is generated,
 * which is on the server. A second variable holding the same value is a second variable
 * to forget to set on a new deployment. */
export const SITE_URL = /* @__PURE__ */ siteUrl();

/** A call rather than an expression so it can be marked pure: the funnel's browser bundle
 * imports this module for its paths, never reads this, and must not carry a `process.env`
 * read it has no value for. */
function siteUrl(): string {
  return process.env.SITE_URL ?? "https://oyno.app";
}

/**
 * `hreflang` for one page, in the shape Next's `metadata.alternates` wants.
 *
 * Both directions and an `x-default`, on every page in both languages. Search engines
 * treat the annotations as a claim that has to be reciprocated — a Russian page pointing
 * at an English one that does not point back is ignored, which is the failure mode where
 * you do all the work and Google indexes one language.
 */
export function alternatesFor(lang: Lang, page: SitePage) {
  return {
    canonical: `${SITE_URL}${pathFor(lang, page)}`,
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}${pathFor(l, page)}`])),
      "x-default": `${SITE_URL}${pathFor(DEFAULT_LANG, page)}`,
    },
  };
}
