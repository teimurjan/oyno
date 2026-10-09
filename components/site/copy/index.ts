import type { Lang } from "@/lib/i18n";
import { cs } from "./cs";
import { da } from "./da";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { esMX } from "./es-MX";
import { fi } from "./fi";
import { fr } from "./fr";
import { it } from "./it";
import { nb } from "./nb";
import { nl } from "./nl";
import { pl } from "./pl";
import { ptBR } from "./pt-BR";
import { ptPT } from "./pt-PT";
import { ru } from "./ru";
import { sv } from "./sv";
import { tr } from "./tr";
import { uk } from "./uk";
import type { SiteCopy } from "./types";

const DECKS: Record<Lang, SiteCopy> = {
  en,
  es,
  "es-MX": esMX,
  fr,
  de,
  "pt-BR": ptBR,
  "pt-PT": ptPT,
  it,
  nl,
  sv,
  da,
  nb,
  fi,
  pl,
  cs,
  tr,
  ru,
  uk,
};

export function copyFor(lang: Lang): SiteCopy {
  return DECKS[lang];
}

export type { SiteCopy } from "./types";
