import { useLocale, fill } from "./locale";
import { REVEAL_DELAY_MS, useStagger } from "./reveal";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** One hour of the day column, in CSS pixels. */
const HOUR_PX = 56;

/** The app's default Kid hours (`KidHoursSchedule.afterWork`), 4:30 to 7:30 PM, in minutes
 * after 3 PM. */
const KID_FROM = 90;
const KID_UNTIL = 270;

/** An example evening, labelled as one: minutes after 3 PM when the phone pulls the parent
 * away. Illustrative, not a statistic. */
const INTERRUPTIONS = [124, 142, 159, 178, 194, 213, 231, 250];

const px = (minutes: number) => (minutes / 60) * HOUR_PX;

/**
 * Widget A: the pain as a calendar. Work until half past four, then the kid's hours, and the phone
 * landing on them one red line after another. Plays once on arrival and shows the end state
 * on a second visit. Red is the phone, the one thing on this screen costing the reader.
 */
export function EveningStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const words = copy.evening;
  const shown = useStagger("evening", INTERRUPTIONS.length + 1, REVEAL_DELAY_MS, 420);
  const summary = fill(words.summary, { n: INTERRUPTIONS.length });
  const dayMinutes = (words.hours.length - 1) * 60;

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="card px-4 pb-4 pt-3.5">
        <p className="eyebrow">{words.caption}</p>

        <div role="img" aria-label={summary} className="mt-4 flex gap-2">
          <div className="relative w-10 shrink-0" style={{ height: px(dayMinutes) }}>
            {words.hours.map((hour, index) => (
              <span
                key={hour}
                className="num absolute right-0 -translate-y-1/2 text-[13px] font-medium text-muted"
                style={{ top: index * HOUR_PX }}
              >
                {hour}
              </span>
            ))}
          </div>

          <div className="relative flex-1" style={{ height: px(dayMinutes) }}>
            {words.hours.map((hour, index) => (
              <span
                key={hour}
                className="absolute inset-x-0 border-t border-hairline"
                style={{ top: index * HOUR_PX }}
              />
            ))}

            <Event title={words.work} top={0} height={px(KID_FROM)} className="border-highlight bg-highlight/12" />
            <Event
              title={words.kid}
              top={px(KID_FROM)}
              height={px(KID_UNTIL - KID_FROM)}
              className="border-good bg-good/22"
            />

            {INTERRUPTIONS.map((minute, index) => (
              <div
                key={minute}
                data-shown={index < shown}
                className="row absolute inset-x-1 flex items-center"
                style={{ top: px(minute) }}
              >
                <span className="h-[2px] flex-1 bg-alert" />
                <span className="flex -translate-y-px items-center gap-1 rounded-full bg-alert px-1.5 py-px text-[10.5px] font-bold leading-[1.3] text-white">
                  <span aria-hidden>!</span>
                  {words.phone}
                </span>
              </div>
            ))}
          </div>
        </div>

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

function Event({
  title,
  top,
  height,
  className,
}: {
  title: string;
  top: number;
  height: number;
  className: string;
}) {
  return (
    // The tint over a solid surface, so the sky through the glass card cannot wash it out.
    <div className="absolute inset-x-1 overflow-hidden rounded-[8px] bg-surface" style={{ top: top + 1, height: height - 2 }}>
      <div className={`h-full border-l-[3px] px-2.5 py-1.5 ${className}`}>
        <p className="text-[15.5px] font-semibold leading-[1.2] text-ink">{title}</p>
      </div>
    </div>
  );
}
