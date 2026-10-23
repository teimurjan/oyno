import { EveningDay, INTERRUPTIONS, PhoneLine } from "./calendar";
import { useLocale, fill } from "./locale";
import { REVEAL_DELAY_MS, useStagger } from "./reveal";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/**
 * Widget A: the pain as a calendar. The kid's hours, and the phone landing on them one red line
 * after another. No work block: a parent home all day reads it as their evening too. Plays once
 * on arrival and shows the end state on a second visit. Red is the phone, the one thing on this
 * screen costing the reader.
 */
export function EveningStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const words = copy.evening;
  const shown = useStagger("evening", INTERRUPTIONS.length + 1, REVEAL_DELAY_MS, 420);
  const summary = fill(words.summary, { n: INTERRUPTIONS.length });

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="card px-4 pb-4 pt-3.5">
        <p className="eyebrow">{words.caption}</p>

        <EveningDay hours={words.hours} kid={words.kid} label={summary}>
          {INTERRUPTIONS.map((minute, index) => (
            <PhoneLine key={minute} minute={minute} label={words.phone} shown={index < shown} />
          ))}
        </EveningDay>

        <p
          data-shown={shown > INTERRUPTIONS.length}
          className="row mt-4 text-center text-[17px] font-semibold leading-[1.35] text-alert"
        >
          {summary}
        </p>
      </div>
    </>
  );
}
