import type { Age, Energy } from "@/lib/activities";

/** What the picker needs of a game. The route at `/tools/games/<lang>` serves these. */
export interface DealtGame {
  id: string;
  title: string;
  blurb: string;
  steps: readonly string[];
  age: Age;
  energy: Energy;
  minutes: number;
  fromMonths?: number;
  art: string | null;
}

export interface DealFilter {
  age?: Age;
  energy?: Energy;
  /** The kid's age, which leaves out a game that starts above it. */
  months?: number;
}

export const gamesPath = (lang: string) => `/tools/games/${lang}`;

/** One game that fits, other than the one on screen, or null when none does. */
export function deal(games: readonly DealtGame[], filter: DealFilter, previousId?: string, random: () => number = Math.random): DealtGame | null {
  const fits = games.filter(
    (game) =>
      (!filter.age || game.age === filter.age) &&
      (!filter.energy || game.energy === filter.energy) &&
      (filter.months === undefined || (game.fromMonths ?? 0) <= filter.months),
  );
  const fresh = fits.filter((game) => game.id !== previousId);
  const from = fresh.length > 0 ? fresh : fits;
  return from.length > 0 ? from[Math.floor(random() * from.length)] : null;
}
