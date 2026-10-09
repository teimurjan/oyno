import type { CookieOptionsWithName } from "@supabase/ssr";
import { apexHost } from "@/lib/appHost";

/**
 * The session cookie: what it is called and where it is written.
 *
 * One session for the site and the app. The funnel signs in on `oyno.app` and the app
 * answers on `app.oyno.app`, and a cookie scoped to either host is worthless to the
 * other: the account created on `/start` would not be the one `app.` opened on, and the
 * site could not tell a subscriber from a prospect. So the cookie is written at the apex —
 * `Domain=oyno.app` from either host — and the browser sends it to both. The three
 * clients (`browser.ts`, `server.ts`, `middleware.ts`) all take their options from here.
 *
 * The name is ours rather than `@supabase/ssr`'s `sb-<ref>-auth-token`, because that name
 * already has host-only cookies under it in every browser that signed in before the scope
 * changed. A domain cookie and a host-only cookie of the same name are two cookies the
 * browser sends together, and whichever a parser meets first wins — the stale one, whose
 * refresh token has since been rotated, and a rotated token used twice revokes the whole
 * session. A new name has no history to collide with; the proxy expires the old ones as it
 * sees them.
 */
export const SESSION_COOKIE = "oyno-auth";

/**
 * `localhost`, `app.localhost` and a bare IP get no `Domain` at all: a browser refuses to
 * scope a cookie to a host with no registrable suffix and drops it rather than store it. So
 * in development the funnel and the app each keep their own session, and neither sees the
 * other's.
 */
export function cookieDomain(host: string): string | undefined {
  const apex = apexHost(host);
  if (!apex.includes(".") || /^\d+(\.\d+){3}$/.test(apex)) return undefined;
  return apex;
}

export function sessionCookieOptions(host: string): CookieOptionsWithName {
  const domain = cookieDomain(host);
  return domain ? { name: SESSION_COOKIE, domain } : { name: SESSION_COOKIE };
}

/**
 * Whether this browser holds a session, read off `document.cookie` alone — no client, no
 * request. `@supabase/ssr` splits a long session across `name.0`, `name.1`, … and writes
 * the PKCE verifier under `name-code-verifier`, so the test is the name itself or a chunk
 * of it, never the verifier. A `true` means "has an account", not "is signed in": the
 * cookie can be stale, and whatever acts on it has to be right to show a sign-in screen.
 */
export function hasSessionCookie(): boolean {
  try {
    return new RegExp(`(?:^|;\\s*)${SESSION_COOKIE}(?:\\.\\d+)?=`).test(document.cookie);
  } catch {
    return false;
  }
}
