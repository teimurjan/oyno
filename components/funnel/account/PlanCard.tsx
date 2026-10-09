import { ICONS, Tick } from "../RecapStep";

/** The recap's red card carried onto the account step, with the line of the plan that answers
 * it, so the screen reads as saving *their* plan rather than as making an account. */
export function PlanCard({ problem, fix }: { problem: string; fix: string }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-[8px] border border-alert/35 bg-alert/6 px-3.5 py-3">
      <div className="flex items-center gap-3 text-alert">
        <span className="shrink-0">{ICONS.problem}</span>
        <p className="min-w-0 text-[15.5px] font-medium leading-[1.4] text-ink">{problem}</p>
      </div>
      <div className="flex items-center gap-3 border-t border-alert/20 pt-2.5">
        <span className="flex w-5 shrink-0 justify-center text-accent">
          <Tick />
        </span>
        <p className="min-w-0 text-[15px] leading-[1.4] text-ink">{fix}</p>
      </div>
    </div>
  );
}
