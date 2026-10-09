import { createBrowserClient as createSsrBrowserClient } from "@supabase/ssr";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./config";
import { sessionCookieOptions } from "./cookie";

/**
 * The browser's Supabase client, for the web funnel's and the web app's sign-in.
 *
 * Additive to `auth.ts`, which is the iOS app's bearer-token path and stays exactly as it
 * was: the app holds its own GoTrue session and sends an `Authorization` header, and no
 * route under `app/api/**` reads a cookie. This client exists so the funnel can put a
 * `user.id` into Paddle's `customData` — the id the webhook writes the entitlement against —
 * and so the web app can take a bearer token off the same cookie session.
 *
 * Browser only: the cookie's scope comes off `location`, and the callers create it in an
 * effect or behind a `window` check.
 */
export const createBrowserClient = () =>
  createSsrBrowserClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    cookieOptions: sessionCookieOptions(window.location.hostname),
  });
