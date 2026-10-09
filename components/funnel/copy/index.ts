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
import type { FunnelCopy } from "./types";

/**
 * Every deck, for the build. **Never imported by anything the browser bundle reaches** — a
 * page carries its own deck as JSON, and importing this would put all of them in front of
 * the first paint.
 */
export const FUNNEL_COPY: Record<Lang, FunnelCopy> = {
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
