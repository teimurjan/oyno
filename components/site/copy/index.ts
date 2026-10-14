import type { Lang } from "@/lib/i18n";
import { en } from "./en";
import { ru } from "./ru";
import type { SiteCopy } from "./types";

const DECKS: Record<Lang, SiteCopy> = {
  en,
  ru,
};

export function copyFor(lang: Lang): SiteCopy {
  return DECKS[lang];
}

export type { SiteCopy } from "./types";
