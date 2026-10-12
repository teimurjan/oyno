import type { JSX } from "preact";
import { Cross, Tick } from "./icons";
import { useLocale } from "./locale";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** Widget: ten minutes of play beside an hour sitting nearby, pros in green, cons in red. */
export function CompareStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const { good, bad } = copy.compare;

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="mt-2 grid grid-cols-2 gap-2">
        <Column
          title={good.title}
          points={good.points}
          mark={<Tick />}
          className="border-good/45 bg-good/12"
          markClassName="text-good"
        />
        <Column
          title={bad.title}
          points={bad.points}
          mark={<Cross />}
          className="border-alert/35 bg-alert/6"
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
    <div className={`rounded-[8px] border px-3 py-3 ${className}`}>
      <p className="text-[15px] font-bold leading-[1.25] text-ink">{title}</p>
      <ul className="mt-2.5 flex flex-col gap-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className={`mt-px shrink-0 ${markClassName}`}>{mark}</span>
            <span className="min-w-0 text-[13.5px] leading-[1.35] text-ink">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
