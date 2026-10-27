import de from "@/appstore/captions/de.json";
import en from "@/appstore/captions/en.json";
import esMX from "@/appstore/captions/es-MX.json";
import es from "@/appstore/captions/es.json";
import fr from "@/appstore/captions/fr.json";
import it from "@/appstore/captions/it.json";
import nl from "@/appstore/captions/nl.json";
import pl from "@/appstore/captions/pl.json";
import ptBR from "@/appstore/captions/pt-BR.json";
import ru from "@/appstore/captions/ru.json";
import type { Lang } from "@/lib/i18n";

/**
 * The App Store listing's frames as the home page shows them: the same screens, in the same
 * order, under the same captions. The captions are read from `appstore/captions/`, never copied.
 */

export const LISTING_SLUGS = ["low", "growth", "kidhours", "keepsake", "home", "letter", "find", "worlds"] as const;
export type ListingSlug = (typeof LISTING_SLUGS)[number];

export interface CaptionPart {
  text: string;
  highlighted: boolean;
}

export interface ListingFrame {
  slug: ListingSlug;
  shot: string;
  caption: CaptionPart[];
}

const CAPTIONS: Record<Lang, { default: { slug: string; caption: string }[] }> = {
  en,
  de,
  fr,
  es,
  "es-MX": esMX,
  "pt-BR": ptBR,
  it,
  nl,
  pl,
  ru,
};

/** App Store Connect's locale codes, which name the folders under `public/screenshots/`. */
const SCREENSHOT_LOCALE: Record<Lang, string> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  "es-MX": "es-MX",
  "pt-BR": "pt-BR",
  it: "it",
  nl: "nl-NL",
  pl: "pl",
  ru: "ru",
};

const isListingSlug = (slug: string): slug is ListingSlug => (LISTING_SLUGS as readonly string[]).includes(slug);

/** "Too tired to play? [Play lying down]" → a plain run, then a highlighted one. */
export const captionParts = (caption: string): CaptionPart[] =>
  caption
    .split(/(\[[^\]]*\])/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("[") ? { text: part.slice(1, -1), highlighted: true } : { text: part, highlighted: false },
    );

export function listingFrames(lang: Lang): ListingFrame[] {
  return CAPTIONS[lang].default.map(({ slug, caption }) => {
    if (!isListingSlug(slug)) throw new Error(`appstore/captions/${lang}.json: "${slug}" is not in LISTING_SLUGS`);
    return { slug, shot: `/screenshots/${SCREENSHOT_LOCALE[lang]}/screens/${slug}.webp`, caption: captionParts(caption) };
  });
}
