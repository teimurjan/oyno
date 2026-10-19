/**
 * The plans sold on the web, and the money formatting every surface shares.
 *
 * Nothing here is biller-specific and nothing here is secret, which is why the marketing
 * pages can import it: with Dodo the checkout session is minted on the server, so no
 * product id and no client token ever reaches the browser.
 *
 * The prices are deliberately *below* the App Store's — Apple takes its cut of an in-app
 * purchase and Dodo's is smaller, so the web can be cheaper and still net more. No trial
 * either: the 3-day free trial is an App Store introductory offer, which means any trial
 * wording on the site belongs to the App Store button alone.
 */

/** `lifetime` is a one-time payment, sold only while `DODO_LIFETIME_ON_SALE` is on. */
export type Plan = "monthly" | "yearly" | "lifetime";

export type PlanQuote = { currency: string } & Record<Plan, number>;

/** Stands in until Dodo's localized preview answers, and if it never does. Dodo is the
 * merchant of record and quotes in the buyer's own currency, so this is what a US buyer
 * sees and a placeholder for everyone else — never the number they're charged. */
export const planListQuote: PlanQuote = {
  currency: "USD",
  monthly: 9.99,
  yearly: 59.99,
  lifetime: 119.99,
};

/** Dodo quotes every amount in the currency's lowest denomination — as a number in the API,
 * and in the checkout SDK's breakdown events too. The exponent comes from the currency
 * rather than being 100, because it is 100 for USD and 1 for JPY. */
export function fromMinorUnits(amount: number | string, currency: string): number {
  const { maximumFractionDigits } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).resolvedOptions();
  return Number(amount) / 10 ** (maximumFractionDigits ?? 2);
}

/** The locale is fixed because the funnel's copy is: the currency is the buyer's, the number
 * formatting is the page's. */
export function formatMoney(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
