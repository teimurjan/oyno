import type { Lang } from "@/lib/i18n";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { es } from "./es";
import { esMX } from "./es-MX";
import { ptBR } from "./pt-BR";
import { it } from "./it";
import { nl } from "./nl";
import { pl } from "./pl";
import { ru } from "./ru";
import type { SiteCopy } from "./types";

const DECKS: Record<Lang, SiteCopy> = {
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

export function copyFor(lang: Lang): SiteCopy {
  return DECKS[lang];
}

export type { SiteCopy } from "./types";
