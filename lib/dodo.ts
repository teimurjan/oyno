import "server-only";
import DodoPayments from "dodopayments";
import { dodoProductId } from "./dodoProducts";

/**
 * Dodo Payments — the merchant of record on the web, beside Apple's StoreKit in the app.
 *
 * Two secrets, two jobs. The API key mints checkout sessions and customer-portal links;
 * the webhook key verifies the Standard Webhooks signature on every event, which is a
 * local HMAC and never leaves the process. Both variable names are the SDK's own defaults,
 * so the constructor below doesn't have to name them.
 */

const API_KEY = process.env.DODO_PAYMENTS_API_KEY ?? "";
const WEBHOOK_KEY = process.env.DODO_PAYMENTS_WEBHOOK_KEY ?? "";

/** Which Dodo this deployment talks to. Test keys only work against the test API and vice
 * versa, so this must agree with which key is set. It also gates the entitlement *read* —
 * see `lib/entitlements.ts`. Defaults to live, as the SDK does. */
const ENVIRONMENT: "live_mode" | "test_mode" =
  process.env.DODO_PAYMENTS_ENVIRONMENT === "test_mode" ? "test_mode" : "live_mode";

/** The webhook 503s until both are set rather than 200-ing work it did not do — a 200 is
 * what stops Dodo retrying, so a missing key here would lose a paid subscription for good. */
export const isDodoConfigured = Boolean(API_KEY && WEBHOOK_KEY);

/** Selling needs the key and both products; verifying webhooks needs neither. */
export const isDodoCheckoutConfigured = Boolean(
  API_KEY && dodoProductId("monthly") && dodoProductId("yearly"),
);

export const dodoEnvironment = ENVIRONMENT;

/** What the browser SDK calls the same thing. Handed to the client alongside a checkout
 * url rather than published as an env var: the server already knows, and one value that
 * can't drift is better than two that can. */
export const dodoBrowserMode: "live" | "test" = ENVIRONMENT === "live_mode" ? "live" : "test";

let client: DodoPayments | null = null;

export function dodoClient(): DodoPayments {
  if (!client) {
    client = new DodoPayments({
      bearerToken: API_KEY,
      webhookKey: WEBHOOK_KEY,
      environment: ENVIRONMENT,
    });
  }
  return client;
}
