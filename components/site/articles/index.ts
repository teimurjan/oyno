import { article as activities18MonthOld } from "./content/activities-18-month-old";
import { article as activities6MonthOld } from "./content/activities-6-month-old";
import { article as babyActivitiesByMonth } from "./content/baby-activities-by-month";
import { article as bedtimeWindDownGames } from "./content/bedtime-wind-down-games";
import { article as doesMyPhoneAffectMyBaby } from "./content/does-my-phone-affect-my-baby";
import { article as executiveFunctionBabiesToddlers } from "./content/executive-function-babies-toddlers";
import { article as exhaustedParentToddler } from "./content/exhausted-parent-toddler";
import { article as games2YearOldAtHome } from "./content/games-2-year-old-at-home";
import { article as games4YearOldIndoors } from "./content/games-4-year-old-indoors";
import { article as gamesWithGrandparents } from "./content/games-with-grandparents";
import { article as gamesWithNoToys } from "./content/games-with-no-toys";
import { article as iphoneScreenTimeFamilyEvenings } from "./content/iphone-screen-time-family-evenings";
import { article as lowEnergyGamesCouch } from "./content/low-energy-games-couch";
import { article as parentsPhoneUseAroundKids } from "./content/parents-phone-use-around-kids";
import { article as phoneDownWithYourKid } from "./content/phone-down-with-your-kid";
import { article as preschoolSelfControlGames } from "./content/preschool-self-control-games";
import { article as rainyDayGamesToddlers } from "./content/rainy-day-games-toddlers";
import { article as redLightGreenLightSelfControl } from "./content/red-light-green-light-self-control";
import { article as screenTimeVsAppBlockers } from "./content/screen-time-vs-app-blockers";
import { article as stopCheckingPhoneEvening } from "./content/stop-checking-phone-evening";
import { article as tantrumsAndSelfControl } from "./content/tantrums-and-self-control";
import { article as tenMinuteActivitiesAfterWork } from "./content/ten-minute-activities-after-work";
import { article as toddlerGamesByEnergy } from "./content/toddler-games-by-energy";
import { article as whyPeekabooMatters } from "./content/why-peekaboo-matters";
import { article as winterEveningGames } from "./content/winter-evening-games";
import { article as workingMemoryGames2YearOlds } from "./content/working-memory-games-2-year-olds";
import type { Lang } from "@/lib/i18n";
import { articles as de } from "./content/de";
import { articles as es } from "./content/es";
import { articles as esMX } from "./content/es-MX";
import { articles as fr } from "./content/fr";
import { articles as it } from "./content/it";
import { articles as nl } from "./content/nl";
import { articles as pl } from "./content/pl";
import { articles as ptBR } from "./content/pt-BR";
import { articles as ru } from "./content/ru";
import type { Article } from "./types";

/** Every English article. A new one is a file in `content/` and a line here, and a translation
 * of it in each `content/<lang>/`, registered in that folder's `index.ts`. */
const ENGLISH: Article[] = [
  activities18MonthOld,
  activities6MonthOld,
  babyActivitiesByMonth,
  bedtimeWindDownGames,
  doesMyPhoneAffectMyBaby,
  executiveFunctionBabiesToddlers,
  exhaustedParentToddler,
  games2YearOldAtHome,
  games4YearOldIndoors,
  gamesWithGrandparents,
  gamesWithNoToys,
  iphoneScreenTimeFamilyEvenings,
  lowEnergyGamesCouch,
  parentsPhoneUseAroundKids,
  phoneDownWithYourKid,
  preschoolSelfControlGames,
  rainyDayGamesToddlers,
  redLightGreenLightSelfControl,
  screenTimeVsAppBlockers,
  stopCheckingPhoneEvening,
  tantrumsAndSelfControl,
  tenMinuteActivitiesAfterWork,
  toddlerGamesByEnergy,
  whyPeekabooMatters,
  winterEveningGames,
  workingMemoryGames2YearOlds,
];

const newestFirst = (articles: Article[]) => [...articles].sort((a, b) => b.published.localeCompare(a.published));

const BY_LANG: Record<Lang, Article[]> = Object.fromEntries(
  Object.entries({ en: ENGLISH, de, fr, es, "es-MX": esMX, "pt-BR": ptBR, it, nl, pl, ru }).map(([lang, articles]) => [lang, newestFirst(articles)]),
) as Record<Lang, Article[]>;

/** The English articles, newest first: every language has the same ones at the same paths. */
export const ARTICLES = BY_LANG.en;

export const articlesOf = (lang: Lang, kind: Article["kind"]) => BY_LANG[lang].filter((article) => article.kind === kind);

export const articleBy = (lang: Lang, kind: Article["kind"], slug: string) =>
  BY_LANG[lang].find((article) => article.kind === kind && article.slug === slug);
