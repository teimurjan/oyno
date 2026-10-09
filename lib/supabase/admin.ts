import "server-only";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "./config";

const SECRET_KEY = process.env.SUPABASE_SECRET_KEY ?? "";
export const isServiceConfigured = Boolean(SUPABASE_URL && SECRET_KEY);

/** Elevated server client using the Supabase secret key — bypasses RLS.
 * Server-only; never expose the key.
 *
 * Reserved for the tables that have no user in hand: the two entitlement tables, written
 * by the App Store and Dodo webhooks against ids the biller supplies rather than a
 * signed-in account. Everything in the ERP schema is reached with the user's own JWT and
 * guarded by RLS — reaching for this client there would quietly disable that. */
export const createAdminClient = () =>
  createClient(SUPABASE_URL, SECRET_KEY, { auth: { persistSession: false } });
