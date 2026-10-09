/**
 * Which host a request is for.
 *
 * The web app is served from the `app.` subdomain of whatever domain the site is on —
 * `app.oyno.app` in production, `app.localhost:7071` in development — and `proxy.ts`
 * rewrites everything under it onto the `app/app/` route tree. The rule is the first label
 * of the host and nothing else, so the same build serves a preview deployment or a second
 * domain without a setting.
 *
 * Reads no `process.env`, and has to stay that way: `lib/supabase/cookie.ts` pulls
 * `apexHost` into the funnel bundle, and `scripts/build-funnel.tsx` fails the build on any
 * `process.env` read outside its allowlist.
 */
export function requestHost(headers: Headers): string {
  return (headers.get("x-forwarded-host") ?? headers.get("host") ?? "")
    .split(",")[0]
    .trim()
    .toLowerCase();
}

/** The one label the app host adds. */
const APP_LABEL = "app.";

export const isAppHost = (headers: Headers): boolean => requestHost(headers).startsWith(APP_LABEL);

/** The domain the site and the app host share: `app.oyno.app` and `oyno.app`
 * both answer `oyno.app`. Any port is dropped with the label. */
export function apexHost(host: string): string {
  const hostname = host.replace(/:\d+$/, "");
  return hostname.startsWith(APP_LABEL) ? hostname.slice(APP_LABEL.length) : hostname;
}

/**
 * What is *not* rewritten under the app host: the bearer-token API, the auth round trip,
 * Next's own assets, and anything served as a file out of `public/`. Each of those is one
 * path for the whole deployment, whichever host it was asked on.
 */
export const APP_PASSTHROUGH =
  /^\/(api|auth|_next|ico|scripts|fonts|funnel|paywall|screenshots)(\/|$)|\.[a-z0-9]+$/i;

/** The internal segment the app's routes live under. */
export const APP_SEGMENT = "/app";

export const isAppSegment = (pathname: string) =>
  pathname === APP_SEGMENT || pathname.startsWith(`${APP_SEGMENT}/`);
