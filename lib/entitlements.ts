import "server-only";
import { accountExists } from "./account";
import { createAdminClient, isServiceConfigured } from "./supabase/admin";

/** A grant is live only while unexpired; a null expiry is a perpetual unlock.
 * Every entitlement read applies this so a lapsed subscription never reads as
 * owned before the EXPIRED webhook lands. */
function isUnexpired(expiresAt: string | null | undefined): boolean {
  return !expiresAt || new Date(expiresAt) > new Date();
}

/** Which billing relationship the live entitlement came from. Decides what the
 * client's "Manage subscription" opens: Apple's own sheet, or the Dodo Payments
 * customer portal, which is the only place a web subscription can be cancelled. */
export type EntitlementProvider = "app_store" | "dodo";

/** Dodo statuses that keep access on. `past_due` is Dodo's dunning grace window — the
 * analogue of Apple's billing grace period, where the card failed but the subscription
 * hasn't lapsed. Everything else reads as not live, so an unrecognized status never
 * grants, and three exclusions are deliberate: `on_hold` means a renewal charge failed
 * and the subscription will not renew, `failed` means the mandate was never created at
 * all, and `pending` means it has not been authorized yet. */
const DODO_LIVE_STATUSES = new Set(["active", "past_due"]);

/** Which Dodo this deployment talks to. Same derivation as `lib/dodo.ts`, repeated
 * rather than imported: `readEntitlement` is on the hot path for every generation
 * request, and importing that module would pull the payments SDK in with it.
 *
 * The label written on a row and the filter that reads it come from this one value, so a
 * deployment that has DODO_PAYMENTS_ENVIRONMENT wrong is at least self-consistent — it
 * labels and honours the same thing, and nobody loses access over it. */
const DODO_ENVIRONMENT =
  process.env.DODO_PAYMENTS_ENVIRONMENT === "test_mode" ? "test_mode" : "live_mode";

/** An entitlement is owned by a signed-in user, but written under Apple's
 * `originalTransactionId` (stable across renewals, present on every purchase),
 * because that is the only identity the App Store Server Notifications webhook
 * ever carries. `userId` is the caller on the two authenticated paths and the
 * stamped `appAccountToken` on the webhook; `deviceId` is a best-effort label only. */
export interface EntitlementEvent {
  originalTransactionId: string;
  /** The buyer, when there is one to name. Null leaves an owner a purchase already
   * recorded alone rather than clearing it. */
  userId: string | null;
  deviceId: string | null;
  productId: string;
  /** Whether this event grants or revokes the paid tier. */
  active: boolean;
  /** ISO string for subscriptions; null for a perpetual (non-consumable) unlock. */
  expiresAt: string | null;
  /** Apple's signed date for this event — the ordering key. Older events no-op. */
  eventAt: string;
  /** StoreKit environment ("Production" | "Sandbox") the transaction was signed in.
   * Sandbox grants (App Review, TestFlight) are accepted but recorded so they can be
   * told apart from real revenue. Null when the payload omits it. */
  environment: string | null;
}

/** Single atomic writer for all three entitlement paths (client purchase-verify,
 * the notifications webhook, and the sync reconcile) — always upserts by
 * `original_transaction_id`, the one id every path has. Out-of-order events are
 * dropped by the RPC's `last_event_at` guard, and a null `userId` leaves an
 * existing owner alone rather than clearing it.
 *
 * False means the write did not land, and the caller must fail the request on it: Apple
 * stops retrying a notification once it gets a 200. */
export async function applyEntitlementEvent(event: EntitlementEvent): Promise<boolean> {
  if (!isServiceConfigured) return false;
  // Apple signs a deleted buyer's uid onto every later transaction, and written as the
  // owner it fails the foreign key — so the event lands without one instead.
  const userId = event.userId && (await accountExists(event.userId)) ? event.userId : null;
  const admin = createAdminClient();
  const { error } = await admin.rpc("apply_entitlement_event", {
    p_original_transaction_id: event.originalTransactionId,
    p_device_id: event.deviceId,
    p_product_id: event.productId,
    p_active: event.active,
    p_expires_at: event.expiresAt,
    p_event_at: event.eventAt,
    p_environment: event.environment,
    p_user_id: userId,
  });
  if (error) {
    console.error("applyEntitlementEvent failed", error);
    return false;
  }
  return true;
}

/** The Dodo side of the same idea, written by the webhook alone. Its own row, its own
 * ordering guard — see 0006_dodo_entitlements.sql for why this is not more columns on
 * the Apple table. */
export interface DodoEntitlementEvent {
  /** The Supabase uid the checkout session stamped into `metadata`. */
  userId: string;
  customerId: string;
  subscriptionId: string;
  /** Dodo's product id, which is also its price — the two are one object there. */
  productId: string | null;
  /** Dodo's status, unmapped. See DODO_LIVE_STATUSES. */
  status: string;
  /** Dodo's `next_billing_date`: the end of the paid-for period. Null only for a
   * subscription with no billing period left to honour — never as a stand-in for
   * "unknown", since a null here means the subscription reads as not live. */
  currentPeriodEnd: string | null;
  /** The webhook envelope's `timestamp` — the ordering key. Older events no-op. */
  eventAt: string;
  /** Which Dodo billed this ("live_mode" | "test_mode"). Unlike the Apple column this
   * gates the read, so a test-mode subscription made from a developer's machine never
   * grants paid access in production. */
  environment: string;
}

export interface DodoEntitlementResult {
  /** False means the write did not land, and the caller must fail the webhook on it. Dodo
   * only redelivers on a non-2xx, so a 200 after a failed write is the one outcome that
   * loses a paid subscription for good. An event dropped by the RPC's ordering guard is
   * not a failure — it updates no rows and reports no error, the intended no-op. */
  applied: boolean;
  /** First event ever seen for this subscription id — the acquisition signal. A renewal,
   * a redelivery and a dunning recovery all find the row already there and report false,
   * which is what keeps them out of Meta's conversion count. */
  isNewSubscription: boolean;
}

/** Single atomic writer for the Dodo webhook, with a `last_event_at` guard separate from
 * Apple's so the two providers can't drop each other's events. */
export async function applyDodoEntitlementEvent(
  event: DodoEntitlementEvent,
): Promise<DodoEntitlementResult> {
  if (!isServiceConfigured) return { applied: false, isNewSubscription: false };
  const admin = createAdminClient();
  const { data, error } = await admin.rpc("apply_dodo_entitlement_event", {
    p_user_id: event.userId,
    p_dodo_customer_id: event.customerId,
    p_dodo_subscription_id: event.subscriptionId,
    p_product_id: event.productId,
    p_status: event.status,
    p_current_period_end: event.currentPeriodEnd,
    p_event_at: event.eventAt,
    p_environment: event.environment,
  });
  if (error) {
    console.error("applyDodoEntitlementEvent failed", error);
    return { applied: false, isNewSubscription: false };
  }
  return { applied: true, isNewSubscription: data === true };
}

/** Is this user on the paid tier — do they hold a live subscription from either biller?
 * There is no free tier, so this is the whole access check. */
export async function isPaid(userId: string): Promise<boolean> {
  const { paid } = await readEntitlement(userId);
  return paid;
}

/** The Dodo ids behind a user's web subscription, for minting a customer-portal
 * session. Null when they never bought on the web. */
export async function getStoredDodoIds(
  userId: string,
): Promise<{ customerId: string; subscriptionId: string } | null> {
  if (!isServiceConfigured) return null;
  const admin = createAdminClient();
  const { data } = await admin
    .from("dodo_entitlements")
    .select("dodo_customer_id, dodo_subscription_id")
    .eq("user_id", userId)
    .maybeSingle();
  if (!data?.dodo_customer_id || !data.dodo_subscription_id) return null;
  return { customerId: data.dodo_customer_id, subscriptionId: data.dodo_subscription_id };
}

export interface EntitlementStatus {
  paid: boolean;
  expiresAt: string | null;
  /** Null when nothing is live. Additive on /api/entitlement — binaries that predate it
   * decode `paid`/`expiresAt` and ignore this. */
  provider: EntitlementProvider | null;
}

/** The best of a set of live expiries: a perpetual grant (null — sandbox/App Review)
 * outranks any dated one, otherwise the one that runs longest. */
function furthestExpiry(expiries: (string | null)[]): string | null {
  if (expiries.some((expiry) => !expiry)) return null;
  return expiries.reduce((latest, expiry) => (latest && expiry! < latest ? latest : expiry));
}

/**
 * One read of a user's live entitlement across both billers, and the only place the
 * union is computed — `isPaid` is a view onto it, so callers never learn there are two.
 *
 * `entitlements` is the App Store half; the generic name predates there being a second
 * biller. Someone can own more than one row there — an old lapsed subscription alongside
 * a current one — so it takes the best live grant rather than assuming a single row.
 * `dodo_entitlements` holds at most one row per account.
 *
 * The two are read in parallel because this sits in front of every generation request.
 */
export async function readEntitlement(userId: string): Promise<EntitlementStatus> {
  if (!isServiceConfigured) return { paid: false, expiresAt: null, provider: null };
  const admin = createAdminClient();

  const [apple, dodo] = await Promise.all([
    admin
      .from("entitlements")
      .select("active, expires_at")
      .eq("user_id", userId)
      .eq("active", true),
    admin
      .from("dodo_entitlements")
      .select("status, current_period_end, environment")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  // Migration 0006 not applied yet — a deploy-ordering state rather than a fault, and it
  // reads as "no web subscription" exactly as an empty table would. That is what keeps
  // either deploy order safe. Once 0006 is everywhere this can never fire.
  const dodoTableMissing = dodo.error?.code === "PGRST205";

  // Otherwise: a failed read is not the same answer as "unpaid", and until now it produced
  // one. Every gate turns a false into `403 requires_pro`, so a transient database error
  // showed the paywall to someone who had already paid — and the entitlement refresh
  // flipped a live subscriber to locked. Fail the request instead: a 500 says we don't
  // know, which is true, and the client retries rather than believing it.
  const failure = apple.error ?? (dodoTableMissing ? null : dodo.error);
  if (failure) {
    console.error("readEntitlement failed", failure);
    throw new Error("entitlement_read_failed");
  }

  const appleLive = (apple.data ?? []).filter((row) => isUnexpired(row.expires_at));

  // A row grants only on the environment that billed it, so a test-mode subscription
  // bought from a developer's machine reads as nothing in production. And unlike the
  // Apple row, a null period end is not perpetual here — it means there is no paid-for
  // period left to honour, so it must not grant.
  const web = dodo.data;
  const dodoLive =
    web?.environment === DODO_ENVIRONMENT &&
    DODO_LIVE_STATUSES.has(web.status) &&
    Boolean(web.current_period_end) &&
    isUnexpired(web.current_period_end);

  const expiries = [
    ...appleLive.map((row) => row.expires_at as string | null),
    ...(dodoLive ? [web.current_period_end as string] : []),
  ];
  if (expiries.length === 0) return { paid: false, expiresAt: null, provider: null };

  return {
    paid: true,
    expiresAt: furthestExpiry(expiries),
    // Dodo wins when both are live: it's the one the user can only cancel off-device,
    // so it's the one worth pointing them at.
    provider: dodoLive ? "dodo" : "app_store",
  };
}
