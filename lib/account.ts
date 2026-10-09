import "server-only";
import { createAdminClient, isServiceConfigured } from "./supabase/admin";

/**
 * Erase an operator permanently — the account and everything the shop owns.
 *
 * One call does all of it. Every table in the ERP schema keys `user_id` with
 * `on delete cascade`, and the child tables cascade from their parents, so the
 * printers, spools, jobs, customers, orders and the whole spool ledger go with
 * the identity.
 *
 * `entitlements.user_id` is `on delete set null` instead, and that is the whole
 * of what happens to a subscription here: it belongs to the Apple ID rather than
 * to this account, deleting it in our database would not cancel it, and the row
 * is also the transaction history a later App Store notification still has to be
 * able to land on. An ownerless row is claimed again by the next purchase or
 * restore from the same Apple ID — `apply_entitlement_event` coalesces the owner
 * rather than overwriting one.
 *
 * Returns false when the delete failed, which the route reports as a 500: an
 * account the operator asked to be rid of that is still there must never come
 * back as a success.
 */
export async function deleteAccount(userId: string): Promise<boolean> {
  if (!isServiceConfigured) return false;
  const admin = createAdminClient();
  const { error } = await admin.auth.admin.deleteUser(userId);
  if (error) {
    console.error("deleteAccount failed", error);
    return false;
  }
  return true;
}

/** Whether the account is still there. A lookup that fails throws rather than answering
 * false, because "deleted" is what lets somebody else claim that account's purchase. */
export async function accountExists(userId: string): Promise<boolean> {
  const { error } = await createAdminClient().auth.admin.getUserById(userId);
  if (!error) return true;
  if (error.code === "user_not_found") return false;
  console.error("accountExists failed", error);
  throw new Error("account_lookup_failed");
}
