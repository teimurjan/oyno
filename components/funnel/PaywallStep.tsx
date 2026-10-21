import { useEffect, useState } from "preact/hooks";
import { formatMoney, planListQuote, type Plan, type PlanQuote } from "@/lib/plans";
import { LegalNote } from "./LegalNote";
import { Accented, fill, useLocale } from "./locale";
import { Faq } from "./paywall/Faq";
import { Hero } from "./paywall/Hero";
import { lifetimeOffered, planQuote } from "./planQuote";

/**
 * The offer, drawn as a page of its own: the shell hides the header, the progress bar and Back
 * on this step and hands the action here, once under the plans and again under the questions.
 * The card field is the step after; the selection lives in `FunnelShell` so Back returns to the
 * plan that was picked. A Dodo session is minted for one product, so the shell keeps the picked
 * plan's form loading, hidden, under this page.
 *
 * Nothing here needs an account or a configured biller; the plans render from the list quote.
 */
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
  const [lifetime, setLifetime] = useState(false);
  const price = (amount: number) => formatMoney(amount, quote.currency);
  const saving = Math.round((1 - quote.yearly / (quote.monthly * 12)) * 100);

  // Usually already answered: `prewarm.ts` asks for this while the reader is still in the
  // survey, and `planQuote` hands both callers the one round trip.
  useEffect(() => {
    let cancelled = false;
    void planQuote().then((live) => {
      if (live && !cancelled) setQuote(live);
    });
    void lifetimeOffered().then((offered) => {
      if (!cancelled) setLifetime(offered);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  /** The yearly sold by its month, the gap to the monthly doing the selling. */
  const yearlyMonth = price(quote.yearly / 12);
  // Withheld if the yearly plan isn't actually cheaper: a saving that isn't one reads as a mistake.
  const badge =
    saving > 0
      ? fill(words.save, { percent: (saving / 100).toLocaleString(market.numberLocale, { style: "percent" }) })
      : undefined;
  const billed = `${fill(words.billed[plan], { price: price(quote[plan]) })} · ${words.refund}`;

  return (
    <>
      <h1 className="text-center font-extrabold leading-[1.06] tracking-[-0.035em] text-balance text-ink text-[clamp(28px,8.2vw,34px)]">
        <Accented text={headline} />
      </h1>
      <p className="mt-0.5 text-center text-[15.5px] leading-[1.45] text-pretty text-slate">{words.subhead}</p>

      <Hero />

      {/* Two plans read as a list. A third, the lifetime anchor, flanks the yearly instead. The
          row is as tall as a picked tile, so a tile growing never moves the page under it. */}
      {lifetime ? (
        <div role="group" aria-label={words.plans} className="mx-auto mt-3 grid h-32 w-full max-w-[360px] grid-cols-[1fr_1.2fr_1fr] items-end gap-2">
          <PlanTile
            label={words.monthly}
            price={price(quote.monthly)}
            unit={words.aMonth}
            selected={plan === "monthly"}
            onSelect={() => onSelect("monthly")}
          />
          <PlanTile
            label={words.yearly}
            price={yearlyMonth}
            unit={words.aMonth}
            badge={badge}
            selected={plan === "yearly"}
            onSelect={() => onSelect("yearly")}
          />
          <PlanTile
            label={words.lifetime}
            price={price(quote.lifetime)}
            unit={words.payOnce}
            selected={plan === "lifetime"}
            onSelect={() => onSelect("lifetime")}
          />
        </div>
      ) : (
        <div role="group" aria-label={words.plans} className="flex flex-col gap-2.5">
          <PlanRow
            label={words.yearly}
            price={`${yearlyMonth} ${words.perMonth}`}
            selected={plan === "yearly"}
            onSelect={() => onSelect("yearly")}
          />
          <PlanRow
            label={words.monthly}
            price={`${price(quote.monthly)} ${words.perMonth}`}
            selected={plan === "monthly"}
            onSelect={() => onSelect("monthly")}
          />
        </div>
      )}

      <Commit label={words.continue} billed={billed} onContinue={onContinue} />

      <Faq />

      {/* Again under the questions, so a reader who scrolled them commits from where they are. */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <Commit label={words.continue} billed={billed} onContinue={onContinue} billedLast />
        <LegalNote />
      </div>
    </>
  );
}

/** The picked plan's bill over the button, or under it at the foot of the page. */
function Commit({
  label,
  billed,
  onContinue,
  billedLast = false,
}: {
  label: string;
  billed: string;
  onContinue: () => void;
  billedLast?: boolean;
}) {
  const note = <p className="num text-center text-[13.5px] text-muted">{billed}</p>;
  return (
    <div className={`flex w-full flex-col gap-3 ${billedLast ? "" : "mt-3.5"}`}>
      {!billedLast && note}
      <button onClick={onContinue} className="btn h-14 text-[17.5px]">
        {label}
      </button>
      {billedLast && note}
    </div>
  );
}

/** How a plan eases into and out of being picked. The border and the weight stay put, so
 * nothing jumps a pixel: only size, colour, shadow and the price's type move. */
const PICK =
  "transition-[height,border-color,background-color,color,box-shadow,font-size,letter-spacing] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

/** A plan beside two others: the picked one stands taller, ringed in ink. */
function PlanTile({
  label,
  price,
  unit,
  badge,
  selected,
  onSelect,
}: {
  label: string;
  price: string;
  unit: string;
  badge?: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      aria-pressed={selected}
      className={`relative flex flex-col items-center justify-center gap-1 rounded-[22px] border-2 px-1.5 ${PICK} ${
        selected
          ? "h-32 border-ink bg-white/95 text-ink shadow-[0_10px_24px_rgba(48,80,130,0.18)]"
          : "h-28 border-white/95 bg-white/50 text-muted shadow-[0_10px_24px_rgba(48,80,130,0)]"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 flex h-[22px] -translate-x-1/2 items-center rounded-full bg-ink px-2.5 text-[11px] font-extrabold tracking-[0.08em] whitespace-nowrap text-white uppercase">
          {badge}
        </span>
      )}
      <span className="text-[13.5px] font-extrabold">{label}</span>
      <span
        className={`num font-extrabold leading-[1.05] text-ink ${PICK} ${
          selected ? "text-[30px] tracking-[-0.035em]" : "text-[21px] tracking-[-0.03em]"
        }`}
      >
        {price}
      </span>
      <span className="text-[12px] text-muted">{unit}</span>
    </button>
  );
}

/** A plan in a list of two: its name and its price on one line. */
function PlanRow({
  label,
  price,
  selected,
  onSelect,
}: {
  label: string;
  price: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex h-15 items-center justify-between rounded-full border-2 px-6 text-[17px] font-extrabold ${PICK} ${
        selected
          ? "border-ink bg-white/95 text-ink shadow-[0_8px_20px_rgba(48,80,130,0.12)]"
          : "border-white/95 bg-white/50 text-muted shadow-[0_8px_20px_rgba(48,80,130,0)]"
      }`}
    >
      <span>{label}</span>
      <span className="num">{price}</span>
    </button>
  );
}
