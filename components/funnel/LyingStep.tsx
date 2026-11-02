import type { FunnelCopy } from "./copy/types";
import { fill, useLocale } from "./locale";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

type GameId = keyof FunnelCopy["lying"]["games"];

/** Real games from `activities/en.json`, all played lying down, with their minutes there. */
const ROWS: { id: GameId; minutes: number }[][] = [
  [
    { id: "hands-peekaboo", minutes: 5 },
    { id: "ceiling-star-spot", minutes: 5 },
    { id: "ceiling-cinema", minutes: 10 },
    { id: "knee-bridge-ball", minutes: 8 },
  ],
  [
    { id: "back-drawing", minutes: 10 },
    { id: "snore-and-wake", minutes: 5 },
    { id: "belly-boat", minutes: 8 },
    { id: "tummy-drum-soft-loud", minutes: 5 },
  ],
];

/**
 * Widget: the answer to "too tired to play", as proof. Two rows of real games drift past in
 * opposite directions, so a tired parent sees there are many and none needs them to get up.
 * Pure CSS (`.lying-row` in `globals.css`), so the build's render and hydration agree.
 */
export function LyingStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const words = copy.lying;

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="card mt-2 overflow-hidden pt-3.5 pb-4">
        <p className="eyebrow px-4">{words.caption}</p>
        <div className="mt-3 flex flex-col gap-3 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          {ROWS.map((row, index) => (
            // Twice over, so the row loops without a seam. The second pass is for the eye only.
            <div key={index} className="lying-row flex w-max" data-reverse={index % 2 === 1}>
              {[false, true].map((repeat) =>
                row.map((game) => (
                  <div
                    key={`${game.id}-${repeat}`}
                    aria-hidden={repeat || undefined}
                    className="mr-3 flex w-[132px] shrink-0 flex-col gap-1 rounded-[16px] bg-surface px-2.5 pt-2 pb-2.5"
                  >
                    <img
                      src={`/art/activities/${game.id}.webp`}
                      alt=""
                      width={112}
                      height={96}
                      loading="lazy"
                      decoding="async"
                      className="block h-[96px] w-[112px] object-contain"
                    />
                    <span className="truncate text-[15px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
                      {words.games[game.id]}
                    </span>
                    <span className="num text-[13px] font-semibold text-muted">
                      {fill(words.minutes, { n: game.minutes })}
                    </span>
                  </div>
                )),
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
