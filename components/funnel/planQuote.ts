import type { QuoteResult } from "@/lib/checkoutSession";
import type { PlanQuote } from "@/lib/plans";

/**
 * What this visitor will actually be charged, asked once per page.
 *
 * Dodo is the merchant of record and quotes in the buyer's own currency, so the plan cards ask
 * `/api/funnel/quote` rather than printing USD at everyone. It lives here rather than in
 * `PaywallStep` because `prewarm.ts` starts it while the reader is still answering questions.
 */

let pending: Promise<PlanQuote | null> | null = null;

/** Null when there is nothing to ask or the answer was unusable; the caller keeps
 * `planListQuote`. A failure is not remembered, so the paywall gets to ask again. */
export function planQuote(): Promise<PlanQuote | null> {
  pending ??= fetchQuote().then((quote) => {
    if (!quote) pending = null;
    return quote;
  });
  return pending;
}

async function fetchQuote(): Promise<PlanQuote | null> {
  try {
    const response = await fetch("/api/funnel/quote");
    if (!response.ok) return null;
    const result = (await response.json()) as QuoteResult;
    return result.configured ? result.quote : null;
  } catch {
    return null;
  }
}
