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
import type { Article } from "./types";

/** Every article, newest first. A new one is a file in `content/` and a line here. */
export const ARTICLES: Article[] = [
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
].sort((a, b) => b.published.localeCompare(a.published));

export const articlesOf = (kind: Article["kind"]) => ARTICLES.filter((article) => article.kind === kind);

export const articleBy = (kind: Article["kind"], slug: string) =>
  ARTICLES.find((article) => article.kind === kind && article.slug === slug);
