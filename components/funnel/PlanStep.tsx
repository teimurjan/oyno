import { useEffect } from "preact/hooks";
import { Headline } from "./Headline";
import { Tick } from "./icons";
import { fill, useLocale } from "./locale";
import { REVEAL_DELAY_MS, useRamp } from "./reveal";
import { MULTI_SEPARATOR, type FunnelAnswers } from "./steps";

/** Long enough to read each line as it ticks, short enough not to feel like a wait. */
const BUILD_MS = 5000;

/** The checklist's order: the answers a plan is made of. */
const ORDER = ["age", "hardest", "apps", "energy", "minutes"] as const;

/**
 * The reader's plan being built from their answers, one line ticked at a time. No result at
 * the end: the account step that follows says the plan is ready. `onReady` fires at 100%, and
 * at once on a second visit, which is what shows the footer's Continue.
 */
export function PlanStep({
  headline,
  answers,
  onReady,
}: {
  headline: string;
  answers: FunnelAnswers;
  onReady: () => void;
}) {
  const { copy, lang } = useLocale();
  const progress = useRamp("plan", REVEAL_DELAY_MS, BUILD_MS);
  const done = progress === 1;
  const words = copy.plan;
  const appTitles: Record<string, string> = copy.questions.apps.options;
  const lines = ORDER.map((key) => {
    if (key === "apps") {
      const titles = (answers.apps ?? "").split(MULTI_SEPARATOR).flatMap((value) => appTitles[value] ?? []);
      return titles.length > 0
        ? fill(words.apps, { apps: new Intl.ListFormat(lang).format(titles) })
        : words.fallback.apps;
    }
    const byAnswer: Record<string, string> = words.lines[key];
    return byAnswer[answers[key] ?? ""] ?? words.fallback[key];
  });

  useEffect(() => {
    if (done) onReady();
  }, [done]);

  return (
    <>
      <Headline text={headline} />

      <div className="card px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-track">
            <div className="h-full rounded-full bg-good" style={{ width: `${progress * 100}%` }} />
          </div>
          <span className="num w-11 text-right text-[15px] font-bold text-ink">
            {Math.round(progress * 100)}%
          </span>
        </div>

        <ul className="mt-4 flex flex-col gap-3">
          {lines.map((line, index) => {
            const ticked = progress >= (index + 1) / lines.length;
            const active = !ticked && progress >= index / lines.length;
            return (
              <li key={ORDER[index]} className="flex items-center gap-3">
                <span className={`flex w-5 shrink-0 justify-center ${ticked ? "text-good" : "text-chevron"}`}>
                  {ticked ? <Tick /> : <span className="size-[15px] rounded-full border-[1.6px] border-current" />}
                </span>
                <span
                  className={`min-w-0 text-[15.5px] leading-[1.35] transition-colors ${
                    ticked || active ? "text-ink" : "text-faint"
                  }`}
                >
                  {line}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
