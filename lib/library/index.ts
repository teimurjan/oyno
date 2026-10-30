import type { Lang } from "@/lib/i18n";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { esMX } from "./es-MX";
import { fr } from "./fr";
import { it } from "./it";
import { nl } from "./nl";
import { pl } from "./pl";
import { ptBR } from "./pt-BR";
import { ru } from "./ru";
import type { LibraryCopy } from "./types";

const DECKS: Record<Lang, LibraryCopy> = { en, de, fr, es, "es-MX": esMX, "pt-BR": ptBR, it, nl, pl, ru };

export const libraryFor = (lang: Lang): LibraryCopy => DECKS[lang];

export type { LibraryCopy } from "./types";
