import "server-only";
import type { Plan } from "./plans";

/**
 * What the web sells through Dodo, read from the environment. Apart from `lib/dodo.ts` so the
 * entitlement read can name a plan without pulling the payments SDK onto its hot path.
 */

const PRODUCT_IDS: Record<Plan, string> = {
  monthly: process.env.DODO_PRODUCT_MONTHLY ?? "",
  yearly: process.env.DODO_PRODUCT_YEARLY ?? "",
  lifetime: process.env.DODO_PRODUCT_LIFETIME ?? "",
};

/** The product being sold for a plan. Dodo has no separate price id — a product carries its
 * price inline — so this one id is both. Server-side only: the checkout session is minted
 * here, so nothing about what we sell needs to reach the browser. Empty for a plan not on sale. */
export function dodoProductId(plan: Plan): string {
  return PRODUCT_IDS[plan];
}

/** Every product configured on this deployment, for a discount that covers whichever is bought. */
export const dodoProductIds = (): string[] => Object.values(PRODUCT_IDS).filter(Boolean);

/** The lifetime unlock is a launch offer, switched off by the flag alone. The product id
 * stays set after it ends, so a checkout still open, or a redelivered payment, still grants. */
export const isLifetimeOffered =
  Boolean(PRODUCT_IDS.lifetime) && process.env.DODO_LIFETIME_ON_SALE === "true";

/** Whether a checkout for this plan may be minted now. */
export const isOnSale = (plan: Plan): boolean =>
  plan === "lifetime" ? isLifetimeOffered : Boolean(PRODUCT_IDS[plan]);

/** Name the plan behind a product id. Unknown ids return null rather than guessing — a product
 * added in the Dodo dashboard but not in the env should be visible, not silently filed as
 * monthly. */
export function planForProductId(productId: string | null | undefined): Plan | null {
  if (!productId) return null;
  const plans = Object.keys(PRODUCT_IDS) as Plan[];
  return plans.find((plan) => PRODUCT_IDS[plan] === productId) ?? null;
}
