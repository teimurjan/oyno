import type { JSX } from "preact";
import { Cross, Tick } from "./icons";
import { useLocale } from "./locale";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** Widget: the reader's minutes of play beside an hour sitting nearby, pros in green, cons in
 * red, both on a solid surface so the sky behind cannot wash the words out. */
export function CompareStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const { bad } = copy.compare;
  const good = copy.compare.good[answers.minutes as keyof typeof copy.compare.good] ?? copy.compare.good.ten;

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="mt-2 grid grid-cols-2 gap-2">
        <Column
          title={good.title}
          points={good.points}
          mark={<Tick />}
          className="border-good"
          markClassName="text-good-ink"
        />
        <Column
          title={bad.title}
          points={bad.points}
          mark={<Cross />}
          className="border-alert/60"
          markClassName="text-alert"
        />
      </div>
    </>
  );
}

function Column({
  title,
  points,
  mark,
  className,
  markClassName,
}: {
  title: string;
  points: string[];
  mark: JSX.Element;
  className: string;
  markClassName: string;
}) {
  return (
    <div className={`rounded-[14px] border-[1.5px] bg-surface px-3 py-3 shadow-[0_6px_18px_rgba(48,80,130,0.08)] ${className}`}>
      <p className={`text-[16.5px] font-bold leading-[1.25] ${markClassName}`}>{title}</p>
      <ul className="mt-2.5 flex flex-col gap-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className={`mt-px shrink-0 ${markClassName}`}>{mark}</span>
            <span className="min-w-0 text-[16px] leading-[1.35] text-ink">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
