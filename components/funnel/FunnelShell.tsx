import type { ComponentType } from "preact";
import { lazy, Suspense } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";
import { track, trackOnExit } from "@/lib/analytics";
import { metaTrack } from "@/lib/metaPixel";
import type { Plan } from "@/lib/plans";
import { AccountStep } from "./AccountStep";
import { AlternativeStep } from "./AlternativeStep";
import { AppsStep } from "./AppsStep";
import { CompareStep } from "./CompareStep";
import { EveningStep } from "./EveningStep";
import { FunnelHeader } from "./FunnelChrome";
import { InfluenceStep } from "./InfluenceStep";
import { PlanStep } from "./PlanStep";
import { prewarmOffer } from "./prewarm";
import { QuestionCard } from "./QuestionCard";
import { StatementStep } from "./StatementStep";
import { useFunnelSession } from "./session";
import {
  WEB_FUNNEL,
  stepAt,
  SURVEY_LENGTH,
  type FunnelAnswers,
  type FunnelStep,
  type FunnelStepKind,
} from "./steps";
import { goto, useFunnelLocation } from "./location";
import { useLocale } from "./locale";

/** **Nothing above the paywall may import `lib/dodoCheckout.ts`**: `lazy()` is what keeps
 * `dodopayments-checkout` out of the chunk that hydrates the first paint. Neither is ever
 * prerendered; the build renders step 0 only. `prewarm.ts` fetches both chunks mid-survey. */
const PaywallStep = lazy(() => import("./PaywallStep").then((m) => ({ default: m.PaywallStep })));
const CheckoutStep = lazy(() => import("./CheckoutStep").then((m) => ({ default: m.CheckoutStep })));

/** The widgets, which all take exactly the step and the reader's answers. The other kinds each
 * need something of their own and stay written out in `StepBody`. */
const DEMOS: Partial<
  Record<FunnelStepKind, ComponentType<{ step: FunnelStep; answers: FunnelAnswers }>>
> = {
  evening: EveningStep,
  apps: AppsStep,
  influence: InfluenceStep,
  alternative: AlternativeStep,
  compare: CompareStep,
};

/**
 * The web funnel. What it asks is `steps.ts`; this renders a step by `kind` and knows nothing
 * about the copy.
 *
 * Rendered twice: `scripts/build-funnel.tsx` renders it to the HTML `/start` serves — always
 * step 0, once per language — and the browser hydrates the same component over it. **Nothing
 * here may differ between the two on the first render**, which is why answers, attribution and
 * the reader's real position are all read in effects, and why the language arrives from
 * `LocaleProvider`.
 */
export function FunnelShell() {
  const { copy, lang } = useLocale();
  /** Held here because the paywall and the checkout are two steps: inside the paywall it
   * would reset to the default every time somebody backed out to look at the prices again. */
  const [plan, setPlan] = useState<Plan>("yearly");
  /** Once per page load, like the build it waits for: a second visit finds it built. */
  const [planBuilt, setPlanBuilt] = useState(false);
  const trackedSteps = useRef(new Set<string>());
  /** The step column scrolls inside `main`, so a tall step is scrolled back to the top on the
   * way in rather than opening half-read. */
  const scroller = useRef<HTMLElement>(null);

  // Order matters: the hash listener registers first, the boot effect second, and the step
  // tracking below last — `onStaticAnswer` has to land before anything reports a step view.
  const { index, advance } = useFunnelLocation();
  const { answers, attribution, pick } = useFunnelSession({
    index,
    lang,
    // Ahead of the step-tracking effect below: the reader tapped before this code arrived, so
    // the shell mounts on step 1 and that effect never sees them. Marked so a Back into step 0
    // doesn't count it twice.
    onStaticAnswer: () => {
      trackedSteps.current.add(WEB_FUNNEL.steps[0].id);
      startFunnel();
    },
  });

  const step = stepAt(index, copy);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [index]);

  // From the first answer rather than the first paint: the offer is fetched while the reader
  // is still in the survey so the paywall costs them no wait. `prewarmOffer` runs once.
  useEffect(() => {
    if (index > 0) prewarmOffer();
  }, [index]);

  // Amplitude gets every step, because the question it answers is *which* step loses people.
  // Meta only needs the two it bids on. The account and checkout steps report themselves.
  useEffect(() => {
    const current = WEB_FUNNEL.steps[index];
    if (trackedSteps.current.has(current.id)) return;
    trackedSteps.current.add(current.id);
    track({ name: "onboarding_page_viewed", index, kind: current.kind, step: current.id });
    if (index === 0) startFunnel();
    if (current.kind === "plan") {
      track({ name: "plan_viewed" });
      metaTrack("Lead", { content_name: "funnel_plan" });
    }
  }, [index]);

  // Most paid readers leave on step 0 without a tap, and nothing else reports them. Step 1
  // already tracked means they answered, so a Back into step 0 is not a leave.
  useEffect(() => {
    if (index !== 0 || trackedSteps.current.has(WEB_FUNNEL.steps[1].id)) return;
    const reportLeave = () => {
      if (document.visibilityState !== "hidden") return;
      document.removeEventListener("visibilitychange", reportLeave);
      trackOnExit({ name: "first_screen_left", seen_ms: Math.round(performance.now()) });
    };
    document.addEventListener("visibilitychange", reportLeave);
    return () => document.removeEventListener("visibilitychange", reportLeave);
  }, [index]);

  /** A page of its own: the one screen asking for a decision, so no header counting down the
   * survey over it, no Back under it, and its own action inside it. */
  const bare = step.kind === "paywall";
  /** Mounted from the paywall on, outside the re-keyed step, so the frame loaded behind the
   * plans is the one Continue reveals. Re-mounting it would reload Dodo's iframe. */
  const checkoutMounted = bare || step.kind === "checkout";

  const multi = step.question?.multi ?? false;
  // A generic "Continue" beside a "Create account" button, or above Dodo's own Pay button,
  // is two buttons competing for one tap. A single-answer question advances on the option.
  const ownsItsAction =
    bare || step.kind === "account" || step.kind === "checkout" || (step.kind === "question" && !multi);
  /** Nothing chosen yet on a multi question: a button that silently does nothing is worse
   * than one that says so. */
  const waiting = multi && !(step.question && answers[step.question.key]);
  /** The plan step's Continue appears once the plan is built, never before. */
  const building = step.kind === "plan" && !planBuilt;
  const buttonTitle = step.kind === "plan" ? copy.chrome.letsGo : copy.chrome.continue;

  // `h-dvh`, not `min-h-dvh`: `main`'s `flex-1` is `flex-basis: 0%`, and a percentage against
  // a column whose height is only a minimum resolves to the content's own height — so a tall
  // step grew the column past the viewport and took the footer's button with it.
  return (
    <div className="funnel sky flex h-dvh flex-col">
      {!bare && <FunnelHeader index={index} count={SURVEY_LENGTH} label={copy.chrome.progress} />}

      {/* `min-h-0` keeps the chrome fixed and lets `main` scroll its own content. The gutter
          is reserved on both edges so a step that scrolls and one that doesn't are the same
          width. The paywall's pinned button brings its own floor, so it gets no bottom padding. */}
      <main
        ref={scroller}
        className={`flex min-h-0 flex-1 flex-col items-center overflow-y-auto px-5 [scrollbar-gutter:stable_both-edges] ${bare ? "paywall-page pt-8" : "py-8"}`}
      >
        {/* `mb-auto`, not `my-auto`: centring put the title at a different height on a
            four-option step than on a six-option one, and moved it between two taps. The
            paywall widens on a desktop so its plans and reviews can sit side by side. */}
        <div className={`relative mb-auto flex w-full max-w-[520px] flex-col ${bare ? "md:max-w-[56rem]" : ""}`}>
          <div
            // Re-keyed per step so `.anim-step` restarts. It brings this column's children in one
            // after another, which is why **every step component returns a fragment**: the title,
            // the body and each option have to be siblings here. No exit animation on purpose.
            key={step.id}
            className="anim-step flex flex-col gap-2"
          >
            <StepBody
              step={step}
              index={index}
              answers={answers}
              plan={plan}
              onSelectPlan={setPlan}
              onPick={pick}
              onAdvance={advance}
              onPlanBuilt={() => setPlanBuilt(true)}
            />
          </div>
          {checkoutMounted && (
            <div
              // Clipped and inert under the paywall: laid out at its real width so the form is
              // ready, but out of sight, out of the tab order and out of the scroll height.
              inert={bare}
              aria-hidden={bare}
              className={
                bare
                  ? "invisible pointer-events-none absolute inset-x-0 top-0 mx-auto h-0 max-w-[520px] overflow-hidden"
                  : "anim-step mt-4 flex flex-col"
              }
            >
              <Suspense fallback={null}>
                <CheckoutStep
                  plan={plan}
                  answers={answers}
                  attribution={attribution}
                  funnel={WEB_FUNNEL.id}
                  visible={!bare}
                />
              </Suspense>
            </div>
          )}
        </div>
      </main>

      {!bare && (
        <footer className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-2.5 px-5 pb-5">
          {/* The slot is always here, even on the steps that own their action, so the footer
              is the same height on every step and `main` never re-centres mid-transition. */}
          <div className="h-[52px] w-full max-w-[420px]">
            {!ownsItsAction && !building && (
              <button
                onClick={advance}
                disabled={waiting}
                className={`btn h-full w-full text-[17.5px] font-semibold ${step.kind === "plan" ? "anim-rise" : ""}`}
              >
                {buttonTitle}
              </button>
            )}
          </div>
          <div className="h-[18px]">
            {index === 0 ? (
              <p className="text-[15.5px] text-muted">{copy.chrome.intro}</p>
            ) : (
              <button
                onClick={() => goto(index - 1)}
                className="text-[15.5px] text-muted transition-colors hover:text-ink"
              >
                {copy.chrome.back}
              </button>
            )}
          </div>
        </footer>
      )}
    </div>
  );
}

/** The top of the funnel, once per visit. `performance.now()` is time since navigation, so
 * it is how long the prerendered screen stood alone. */
function startFunnel(): void {
  track({ name: "funnel_started", shell_ready_ms: Math.round(performance.now()) });
  metaTrack("ViewContent", { content_name: "funnel_start" });
}

interface StepProps {
  step: FunnelStep;
  index: number;
  answers: FunnelAnswers;
  plan: Plan;
  onSelectPlan: (plan: Plan) => void;
  onPick: (value: string) => void;
  /** Used by the steps whose primary control is their own. */
  onAdvance: () => void;
  onPlanBuilt: () => void;
}

function StepBody({
  step,
  index,
  answers,
  plan,
  onSelectPlan,
  onPick,
  onAdvance,
  onPlanBuilt,
}: StepProps) {
  const Demo = DEMOS[step.kind];
  if (Demo) return <Demo step={step} answers={answers} />;

  if (step.kind === "question" && step.question) {
    return <QuestionCard question={step.question} answers={answers} index={index} onPick={onPick} />;
  }

  if (step.kind === "plan") {
    return <PlanStep headline={step.headline} answers={answers} onReady={onPlanBuilt} />;
  }

  // Its note is drawn under the buttons rather than under the headline, so it lays out its own.
  if (step.kind === "account") {
    return <AccountStep headline={step.headline ?? ""} />;
  }

  // Its headline is drawn inside the lazy chunk, with the plans it introduces.
  if (step.kind === "paywall") {
    return (
      <Suspense fallback={null}>
        <PaywallStep headline={step.headline} plan={plan} onSelect={onSelectPlan} onContinue={onAdvance} />
      </Suspense>
    );
  }

  // Every remaining kind is the step's own copy, which is what `StatementStep` draws. The
  // checkout's frame sits under it, drawn by the shell.
  return <StatementStep step={step} answers={answers} />;
}
