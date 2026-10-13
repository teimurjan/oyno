import { useLocale } from "./locale";
import { REVEAL_DELAY_MS, useRamp } from "./reveal";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** Domoff et al. (2021), Table 3: persistent requesting per tertile of the parent's daily social
 * media, 25 of 130, 42 of 128 and 43 of 125, as whole percents. */
const SHARES = [19, 33, 34];

const SOURCE_URL = "https://doi.org/10.1002/hbe2.322";

/** The top of the axis, a little above the tallest bar so its label fits. */
const AXIS_MAX = 40;
const PLOT_PX = 150;
const GROW_MS = 900;

/**
 * Widget: the study behind the headline as three bars, the parent's scrolling rising left to
 * right and the kid's asking with it. One series, so no legend: the caption names it. Red is
 * the cost, deeper as it grows.
 */
export function InfluenceStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const words = copy.influence;
  const progress = useRamp("influence", REVEAL_DELAY_MS, GROW_MS);
  const described = words.bars.map((bar, index) => `${bar}: ${SHARES[index]}%`).join(", ");

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="card px-4 pb-4 pt-3.5">
        <p className="eyebrow">{words.caption}</p>

        <div role="img" aria-label={`${words.caption}. ${described}`}>
          <div className="mt-4 flex items-end gap-3 border-b border-hairline" style={{ height: PLOT_PX }}>
            {SHARES.map((share, index) => (
              <div key={words.bars[index]} className="flex flex-1 flex-col items-center justify-end gap-1.5">
                <span className="num text-[17px] font-bold text-ink" style={{ opacity: progress }}>
                  {share}%
                </span>
                <span
                  className="w-full max-w-[64px] rounded-t-[4px] bg-alert"
                  style={{
                    height: (share / AXIS_MAX) * PLOT_PX * progress,
                    opacity: 0.4 + 0.3 * index,
                  }}
                />
              </div>
            ))}
          </div>
          <div aria-hidden className="mt-2 flex gap-3">
            {words.bars.map((bar) => (
              <span key={bar} className="num flex-1 text-center text-[13px] font-medium text-muted">
                {bar}
              </span>
            ))}
          </div>
          <p aria-hidden className="mt-1 text-center text-[13px] text-muted">
            {words.axis}
          </p>
        </div>

        <p
          data-shown={progress === 1}
          className="row mt-4 text-center text-[17px] font-semibold leading-[1.35] text-alert"
        >
          {words.summary}
        </p>
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex min-h-7 items-center justify-center text-[14.5px] font-semibold text-muted"
        >
          {words.source}
        </a>
      </div>
    </>
  );
}
