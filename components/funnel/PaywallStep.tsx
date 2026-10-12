import type { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";
import { formatMoney, planListQuote, type Plan, type PlanQuote } from "@/lib/plans";
import { Headline } from "./Headline";
import { LegalNote } from "./LegalNote";
import { fill, useLocale } from "./locale";
import { Faq } from "./paywall/Faq";
import { PlanetFamily } from "./paywall/PlanetFamily";
import { Timeline } from "./paywall/Timeline";
import { planQuote } from "./planQuote";

/**
 * The offer, drawn as a page of its own: the shell hides the header, the progress bar and Back
 * on this step and hands the action here. The card field is the step after; the selection
 * lives in `FunnelShell` so Back returns to the plan that was picked. A Dodo session is minted
 * for one product, so the plan is settled here, before the form exists.
 *
 * Nothing here needs an account or a configured biller; the cards render from the list quote.
 */

/** A month is 30 and not 30.44: the figure illustrates scale, and a buyer checking it will
 * divide by 30. */
const DAYS = { monthly: 30, yearly: 365 };

export function PaywallStep({
  headline,
  plan,
  onSelect,
  onContinue,
}: {
  headline: string;
  plan: Plan;
  onSelect: (plan: Plan) => void;
  onContinue: () => void;
}) {
  const { copy, market } = useLocale();
  const words = copy.paywall;
  const [quote, setQuote] = useState<PlanQuote>(planListQuote);
  const price = (amount: number) => formatMoney(amount, quote.currency);
  const yearOfMonthly = quote.monthly * 12;
  const saving = Math.round((1 - quote.yearly / yearOfMonthly) * 100);

  // Usually already answered: `prewarm.ts` asks for this while the reader is still in the
  // survey, and `planQuote` hands both callers the one round trip.
  useEffect(() => {
    let cancelled = false;
    void planQuote().then((live) => {
      if (live && !cancelled) setQuote(live);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  /** Keeps the currency's own precision: three decimal-free days' worth would read as the
   * same number on two cards. */
  const perDay = (amount: number, days: number) => price(amount / days);
  const monthlyPerDay = perDay(quote.monthly, DAYS.monthly);

  const billed =
    plan === "yearly" ? `${price(quote.yearly)} ${words.perYear}` : `${price(quote.monthly)} ${words.perMonth}`;

  return (
    <>
      <PlanetFamily />
      <Headline text={headline} />
      <Timeline />

      {/* A list on a phone, a row to compare across once there is room for one. */}
      <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-3">
        <PlanCard
          label={words.yearly}
          price={price(quote.yearly)}
          term={words.perYear}
          figure={perDay(quote.yearly, DAYS.yearly)}
          figureLabel={words.perDay}
          // Withheld if the yearly plan isn't actually cheaper: a struck figure lower than the
          // one beside it reads as a mistake.
          wasFigure={saving > 0 ? monthlyPerDay : undefined}
          badge={
            saving > 0
              ? fill(words.save, {
                  percent: (saving / 100).toLocaleString(market.numberLocale, { style: "percent" }),
                })
              : undefined
          }
          note={words.billedYearly}
          selected={plan === "yearly"}
          onSelect={() => onSelect("yearly")}
        />
        <PlanCard
          label={words.monthly}
          price={price(quote.monthly)}
          term={words.perMonth}
          figure={monthlyPerDay}
          figureLabel={words.perDay}
          note={words.cancelAnytime}
          selected={plan === "monthly"}
          onSelect={() => onSelect("monthly")}
        />
      </div>

      <Commit label={words.continue} billed={billed} onContinue={onContinue}>
        <p className="text-center text-[15.5px] text-muted">{words.guarantee}</p>
      </Commit>

      <Faq />

      {/* The same action as the one above: a reader who read the questions should not have to
          scroll back up to act on them. */}
      <Commit label={words.continue} billed={billed} onContinue={onContinue} className="mt-12" />

      {/* Last on the page, under everything a buyer reads before agreeing to it. */}
      <div className="mt-8 flex justify-center">
        <LegalNote />
      </div>
    </>
  );
}

/** The one thing to press, set off from what is above and held to a button's width on a wide paywall. */
function Commit({
  label,
  billed,
  onContinue,
  className = "mt-6",
  children,
}: {
  label: string;
  /** The picked plan's price and term, under the label as the app's offer button has it. */
  billed: string;
  onContinue: () => void;
  /** The space above it: close under the plans, a section's worth after the questions. */
  className?: string;
  children?: ComponentChildren;
}) {
  return (
    <div className={`${className} flex w-full flex-col items-center gap-3 md:max-w-[420px] md:self-center`}>
      <button onClick={onContinue} className="btn-offer">
        <span className="text-[18.5px] font-bold leading-tight">{label}</span>
        <span className="num text-[13.5px] font-medium leading-tight opacity-72">{billed}</span>
      </button>
      {children}
    </div>
  );
}

function PlanCard({
  label,
  price,
  term = "",
  figure,
  figureLabel,
  wasFigure,
  badge,
  note,
  selected,
  onSelect,
}: {
  label: string;
  /** The recurring price, small, under the label. Omitted by the plan whose price is already
   * the big figure on the right. */
  price?: string;
  /** Spelled out by the caller: a card that derives this from the plan silently prints
   * "/ month" under anything it has not heard of. */
  term?: string;
  figure: string;
  figureLabel: string;
  /** The figure this one undercuts, struck through above it. */
  wasFigure?: string;
  badge?: string;
  note: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      data-selected={selected}
      className="offer-card relative flex items-start justify-between gap-3 px-4 py-4 text-left"
    >
      {badge && <span className="offer-tag absolute top-0 right-5 -translate-y-1/2">{badge}</span>}
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Radio selected={selected} />
          <span className="text-[18.5px] font-extrabold tracking-[-0.02em] text-ink">{label}</span>
        </span>
        {price && (
          <span className="mt-1.5 block">
            <span className="num text-[17.5px] font-medium text-ink">{price}</span>{" "}
            <span className="text-[15.5px] text-muted">{term}</span>
          </span>
        )}
        <span className="mt-1 block text-[15px] text-muted">{note}</span>
      </span>

      <span className="shrink-0 text-right">
        {wasFigure && (
          <span className="num block text-[14.5px] text-muted line-through">{wasFigure}</span>
        )}
        <span className="num block text-[30px] font-extrabold leading-none tracking-[-0.03em] text-ink">
          {figure}
        </span>
        <span className="mt-1 block text-[12px] uppercase tracking-[0.08em] text-muted">
          {figureLabel}
        </span>
      </span>
    </button>
  );
}

/** A radio, not a tick: two plans where exactly one is chosen. */
function Radio({ selected }: { selected: boolean }) {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={`shrink-0 ${selected ? "text-accent" : "text-faint"}`}
    >
      <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" stroke-width="1.5" />
      {selected && <circle cx="10" cy="10" r="4.5" fill="currentColor" />}
    </svg>
  );
}
