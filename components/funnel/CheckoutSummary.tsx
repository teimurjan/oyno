import type { CheckoutEventsData, CheckoutEventsTimePeriod } from "@paddle/paddle-js";
import { formatMoney } from "@/lib/paddlePrices";
import type { FunnelCopy } from "./copy/types";
import { fill, useLocale } from "./locale";

/**
 * The order summary under the inline checkout — Paddle's frame renders the payment form and
 * nothing else, so the breakdown a checkout is obliged to show is ours to draw. It reads off
 * the checkout events, so it is always the number Paddle is about to charge.
 *
 * Event totals are already decimals, unlike the Paddle API's. No trial branch: the web sells
 * none. The one-time case is the lifetime unlock, and a summary silent on whether something
 * recurs has left out the term the buyer most wants to read.
 */
export function CheckoutSummary({ checkout }: { checkout?: CheckoutEventsData }) {
  const { copy, market } = useLocale();
  const words = copy.checkout;
  if (!checkout) return <SummarySkeleton title={words.summary} />;

  const { currency_code: currency, items, totals } = checkout;
  const money = (amount: number) => formatMoney(amount, currency, market.numberLocale);
  // `find` rather than `[0]`: a cart can open with something that doesn't recur in front.
  const billingCycle = items.find((item) => item.billing_cycle)?.billing_cycle;
  const renewal =
    billingCycle && checkout.recurring_totals
      ? fill(words.renews, {
          amount: money(checkout.recurring_totals.total),
          cycle: cycle(billingCycle, words.cycles),
        })
      : null;

  return (
    <div className="card px-4 py-3.5">
      <p className="eyebrow">{words.summary}</p>

      <ul className="mt-2.5 flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item.price_id}
            className="flex items-start justify-between gap-4 text-[13.5px] leading-[1.45]"
          >
            <span className="min-w-0">
              <span className="font-medium">{item.product.name}</span>
              {item.price_name && <span className="opacity-70"> · {item.price_name}</span>}
              {item.quantity > 1 && <span className="opacity-70"> × {item.quantity}</span>}
            </span>
            <span className="shrink-0 tabular-nums opacity-70">
              {money(item.totals.subtotal)}
            </span>
          </li>
        ))}
      </ul>

      <dl className="mt-2.5 flex flex-col gap-1 border-t border-ink/12 pt-2.5 text-[13.5px]">
        <Line label={words.subtotal} value={money(totals.subtotal)} />
        {totals.discount > 0 && <Line label={words.discount} value={`−${money(totals.discount)}`} />}
        <Line label={words.tax} value={money(totals.tax)} />
      </dl>

      <div className="mt-2.5 flex items-baseline justify-between border-t border-ink/25 pt-2.5">
        <span className="font-medium text-[14.5px]">{words.total}</span>
        <span className="font-medium text-[16px] tabular-nums">{money(totals.total)}</span>
      </div>

      {renewal && (
        <p className="mt-2 text-[13px] leading-[1.5] opacity-55">
          {renewal}
        </p>
      )}
      {!billingCycle && (
        <p className="mt-2 text-[13px] leading-[1.5] opacity-55">
          {words.noRenewal}
        </p>
      )}
    </div>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="opacity-70">{label}</dt>
      <dd className="tabular-nums">{value}</dd>
    </div>
  );
}

/** Holds the card's height while Paddle's first `checkout.loaded` is in flight. */
function SummarySkeleton({ title }: { title: string }) {
  return (
    <div className="card px-4 py-3.5" aria-hidden>
      <p className="eyebrow">{title}</p>
      <div className="mt-3 flex animate-pulse flex-col gap-2.5">
        {["w-40", "w-24", "w-16", "w-20"].map((width) => (
          <div key={width} className="flex justify-between gap-4">
            <span className={`h-3 rounded-full bg-ink/10 ${width}`} />
            <span className="h-3 w-14 rounded-full bg-ink/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** The tail of "$99.99 / year": a cycle of one drops the count. Every plan sold is a cycle of
 * one; a longer one keeps the count and the singular rather than guessing every language's
 * plural. */
function cycle(billingCycle: CheckoutEventsTimePeriod, names: FunnelCopy["checkout"]["cycles"]): string {
  const { frequency, interval } = billingCycle;
  return frequency === 1 ? names[interval] : `${frequency} × ${names[interval]}`;
}
