import { DayLine, EveningDay, INTERRUPTIONS, PhoneLine, px } from "./calendar";
import { useLocale } from "./locale";
import { REVEAL_DELAY_MS, useTimeline } from "./reveal";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** Where the eight "one secs" gather, in minutes after 4 PM: the middle of each group. */
const SLOTS = [82, 135, 180];

/** Which slot each "one sec" collapses into, in order. */
const SLOT_OF = [0, 0, 0, 1, 1, 1, 2, 2];

const COLLAPSE_MS = 650;
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

/** Collapse, then each slot turns into its game, then the summary. */
const TIMELINE = [
  REVEAL_DELAY_MS,
  REVEAL_DELAY_MS + COLLAPSE_MS + 150,
  REVEAL_DELAY_MS + COLLAPSE_MS + 300,
  REVEAL_DELAY_MS + COLLAPSE_MS + 450,
  REVEAL_DELAY_MS + COLLAPSE_MS + 800,
];

/**
 * Widget: the calendar's evening again. Its eight red lines collapse into three, and each of
 * the three turns into a green game, with its minutes and a low-effort tag, so a tired parent
 * sees it costs them nothing. Starts from the calendar's end state, and shows its own on a
 * second visit.
 */
export function PromiseStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const words = copy.promise;
  const passed = useTimeline("promise", TIMELINE);
  const collapsed = passed >= 1;
  const morphed = (slot: number) => passed >= 2 + slot;

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="card px-4 pb-4 pt-3.5">
        <p className="eyebrow">{words.caption}</p>

        <EveningDay hours={copy.evening.hours} kid={copy.evening.kid} label={words.summary}>
          {INTERRUPTIONS.map((minute, index) => {
            const slot = SLOT_OF[index];
            // The first line of a group carries it into the slot; the rest fade as they arrive.
            const lead = SLOT_OF.indexOf(slot) === index;
            return (
              <PhoneLine
                key={minute}
                minute={minute}
                label={copy.evening.phone}
                shown
                style={
                  collapsed
                    ? {
                        transform: `translateY(${px(SLOTS[slot] - minute)}px)`,
                        opacity: lead && !morphed(slot) ? 1 : 0,
                        transition: lead
                          ? `transform ${COLLAPSE_MS}ms ${EASE}, opacity 320ms ease`
                          : `transform ${COLLAPSE_MS}ms ${EASE}, opacity 200ms ease ${COLLAPSE_MS - 200}ms`,
                      }
                    : undefined
                }
              />
            );
          })}

          {words.games.map((game, slot) => (
            <DayLine key={game.title} minute={SLOTS[slot]} tone="good" shown={morphed(slot)}>
              <span aria-hidden>▶</span>
              <span className="truncate">
                {game.title} · <span className="num">{game.minutes}</span> · {game.tag}
              </span>
            </DayLine>
          ))}
        </EveningDay>

        <p
          data-shown={passed >= TIMELINE.length}
          className="row mt-4 text-center text-[17px] font-semibold leading-[1.35] text-ink"
        >
          {words.summary}
        </p>
      </div>
    </>
  );
}
