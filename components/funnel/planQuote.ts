import { paddleBrowserClient } from "@/lib/paddleClient";
import {
  fromMinorUnits,
  isPaddleCheckoutConfigured,
  paddlePriceIds,
  type PaddlePlan,
  type PlanQuote,
} from "@/lib/paddlePrices";

/**
 * What this visitor will actually be charged, asked once per page.
 *
 * Paddle is the merchant of record and quotes in the buyer's own currency, so the plan cards
 * ask it rather than printing USD at everyone. It lives here rather than in `PaywallStep`
 * because `prewarm.ts` starts it while the reader is still answering questions: this one call
 * is what loads Paddle.js and the prices, so the paywall opens localized instead of snapping
 * out of the fallback, and the checkout after it already has its instance.
 */

const PLANS = ["monthly", "yearly", "lifetime"] as const;

let pending: Promise<PlanQuote | null> | null = null;

/** Null when there is nothing to ask or the answer was unusable — the caller keeps
 * `paddleFallbackQuote`. A failure is deliberately *not* remembered: the prewarm runs on
 * whatever signal the reader had mid-survey, and the paywall gets to ask again. */
export function planQuote(): Promise<PlanQuote | null> {
  pending ??= fetchQuote().then((quote) => {
    if (!quote) pending = null;
    return quote;
  });
  return pending;
}

async function fetchQuote(): Promise<PlanQuote | null> {
  if (!isPaddleCheckoutConfigured) return null;
  try {
    const paddle = await paddleBrowserClient();
    const preview = await paddle?.PricePreview({
      items: PLANS.map((plan) => ({ priceId: paddlePriceIds[plan], quantity: 1 })),
    });
    if (!preview) return null;

    const { currencyCode, details } = preview.data;
    const amountOf = (plan: PaddlePlan) =>
      details.lineItems.find((item) => item.price.id === paddlePriceIds[plan])?.totals.total;
    const [monthly, yearly, lifetime] = PLANS.map(amountOf);
    // All or none: the yearly card strikes the monthly price per day through, so one
    // localized price beside one fallback would advertise a saving across two currencies.
    if (!monthly || !yearly || !lifetime) return null;

    return {
      currency: currencyCode,
      monthly: fromMinorUnits(monthly, currencyCode),
      yearly: fromMinorUnits(yearly, currencyCode),
      lifetime: fromMinorUnits(lifetime, currencyCode),
    };
  } catch {
    return null;
  }
}
