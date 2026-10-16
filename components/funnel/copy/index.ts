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
import type { FunnelCopy } from "./types";

/**
 * Every deck, for the build. **Never imported by anything the browser bundle reaches** — a
 * page carries its own deck as JSON, and importing this would put all of them in front of
 * the first paint.
 */
export const FUNNEL_COPY: Record<Lang, FunnelCopy> = {
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
