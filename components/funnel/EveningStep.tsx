import { useLocale, fill, fillNodes } from "./locale";
import { REVEAL_DELAY_MS, useStagger } from "./reveal";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** 4:30 to 7:30 PM, in minutes. */
const EVENING_MINUTES = 180;

/**
 * An example evening, labelled as one: when each pickup starts and how long it lasts, in
 * minutes after 4:30. Illustrative, not a statistic.
 */
const PICKUPS: readonly [start: number, length: number][] = [
  [12, 8],
  [31, 14],
  [58, 6],
  [77, 18],
  [104, 9],
  [126, 11],
  [151, 4],
];

const PHONE_MINUTES = PICKUPS.reduce((total, [, length]) => total + length, 0);

const percent = (minutes: number) => `${(minutes / EVENING_MINUTES) * 100}%`;

/**
 * Widget A: the pain happening. The pickups land on the evening one after another, then the
 * totals. No controls: it plays once on arrival and shows the end state on a second visit.
 * Red is the phone's time, the one thing on this screen costing the reader.
 */
export function EveningStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const words = copy.evening;
  const shown = useStagger("evening", PICKUPS.length + 1, REVEAL_DELAY_MS, 520);
  const minutes = (n: number) => fill(words.minutes, { n });

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="card px-4 pb-4 pt-3.5">
        <p className="eyebrow">{words.caption}</p>

        <div
          role="img"
          aria-label={fill(words.summary, {
            kid: minutes(EVENING_MINUTES - PHONE_MINUTES),
            phone: minutes(PHONE_MINUTES),
          })}
          className="relative mt-3 h-11 overflow-hidden rounded-[14px] bg-good/25"
        >
          {PICKUPS.map(([start, length], index) => (
            <span
              key={start}
              data-shown={index < shown}
              className="row absolute inset-y-0 bg-alert"
              style={{ left: percent(start), width: percent(length) }}
            />
          ))}
        </div>

        <div className="num mt-1.5 flex justify-between text-[12px] font-medium text-muted">
          <span>{words.start}</span>
          <span>{words.end}</span>
        </div>

        <div className="mt-3 flex gap-4 text-[13px] font-semibold text-ink">
          <span className="flex items-center gap-1.5">
            <span aria-hidden className="size-2.5 rounded-full bg-good/60" />
            {words.kid}
          </span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden className="size-2.5 rounded-full bg-alert" />
            {words.phone}
          </span>
        </div>

        <p
          data-shown={shown > PICKUPS.length}
          className="row mt-3 text-[15.5px] font-semibold leading-[1.35] text-ink"
        >
          {fillNodes(words.summary, {
            kid: <span className="num">{minutes(EVENING_MINUTES - PHONE_MINUTES)}</span>,
            phone: <span className="num">{minutes(PHONE_MINUTES)}</span>,
          })}
        </p>
      </div>
    </>
  );
}
