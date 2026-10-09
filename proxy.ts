import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LANG,
  isLang,
  LANG_COOKIE,
  languageFromAcceptHeader,
  LOCALE_BY_COUNTRY,
  pageForPath,
  pathFor,
  type Lang,
  type SitePage,
} from "@/lib/i18n";
import { updateSession } from "@/lib/supabase/middleware";
import { APP_PASSTHROUGH, APP_SEGMENT, isAppHost, isAppSegment, requestHost } from "@/lib/appHost";

/**
 * Next 16's `proxy` convention, formerly `middleware`. Four jobs.
 *
 * 1. Serve the web app from the `app.` host by rewriting onto `app/app/`.
 * 2. Refresh the Supabase cookie session on `/pay` and the auth callback.
 * 3. Withhold the Meta Pixel where setting `_fbp` without prior consent would be unlawful.
 * 4. Send a reader to the site in the language they are going to want.
 *
 * `/start` is deliberately absent: the funnel is now a static file (`public/funnel/`,
 * served by the rewrite in `next.config.mjs`), so there is no function on the path and no
 * cookie session to refresh in front of it. The funnel manages its own Supabase session
 * client-side, and the sign-in round trip goes through `/auth/callback`, which sets the
 * cookie server-side and is still matched below.
 */

/**
 * `_fbp` and `_fbc` are advertising cookies, and under ePrivacy/GDPR an EEA, UK or Swiss
 * reader has to opt in *before* they are set.
 *
 * The alternative is a consent banner on the first screen of a funnel whose entire brief is
 * that the first screen opens instantly and the reader is one tap from step 1 — which costs
 * conversions on every visitor to avoid a problem we do not have, because the campaigns
 * target the US. When EEA traffic is worth buying, this is the seam a real consent platform
 * goes into. A cosmetic "we use cookies, OK" banner that sets the cookie before the click is
 * worse than either option: it costs the conversion and provides no cover.
 *
 * Done here, against the script request, rather than by conditionally rendering the tag: a
 * `headers()` read in a root layout would opt every page in the site into dynamic
 * rendering, and `/start` being served from the CDN is worth more than the tidier code.
 *
 * `x-vercel-ip-country` is set by the platform and cannot be spoofed by the client.
 */
const CONSENT_REQUIRED = new Set([
  // EEA
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IS",
  "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // UK and Switzerland
  "GB", "CH",
]);

const SHOULD_REQUIRE_CONSENT = false

/** Served in place of the loader. It marks the page so `flushMetaQueue` settles quietly
 * rather than reporting a blocked pixel — a withheld pixel is a decision, not a loss, and
 * counting it as one would corrupt the number that says how much CAPI is carrying. */
const GATED_PIXEL = 'window.__metaConsentGated = true;\n';

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/scripts/pixel.js") {
    const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
    // No header at all means local or a non-Vercel host — serve the real loader, so the
    // pixel stays testable in development.
    if (SHOULD_REQUIRE_CONSENT && country && CONSENT_REQUIRED.has(country)) {
      return new NextResponse(GATED_PIXEL, {
        headers: {
          "content-type": "application/javascript; charset=utf-8",
          // Per-country, so a CDN cannot hand one reader's answer to another.
          "cache-control": "private, no-store",
        },
      });
    }
    return NextResponse.next();
  }

  const app = appHostRouting(request);
  if (app) return app;

  const marketing = pageForPath(request.nextUrl.pathname);
  if (marketing) return languageRedirect(request, marketing);

  return updateSession(request);
}

/**
 * The web app lives at `app.<domain>` and is the route tree under `app/app/`.
 *
 * A rewrite rather than a second project: the app talks to the same `/api/sync` the phone
 * does and signs in through the same `/auth/callback`, so it is the same deployment
 * answering on a second name. The `app/` segment is an implementation detail the address
 * bar never shows — `/filament` on the app host is `app/app/filament/page.tsx`, and every
 * link inside the app is written root-relative on that host.
 *
 * Two consequences are enforced here rather than left to chance. The internal segment is
 * not a second address for the same page: `app.example/app/x` canonicalises to `/x`, and
 * `example/app/x` on the marketing host is sent to the app host — one origin, one cookie
 * jar, one place a bookmark can point. And everything that is one path for the whole
 * deployment — the API, the auth callback, Next's assets, files under `public/` — passes
 * through untouched, with the auth callback still getting its session refresh.
 */
function appHostRouting(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;
  // Off the request's own `Host`, not `nextUrl`, which a server started with a hostname
  // reports as that hostname whatever the request said — and a redirect to the wrong host
  // is a redirect to a different site.
  const host = requestHost(request.headers);

  if (isAppHost(request.headers)) {
    if (APP_PASSTHROUGH.test(pathname)) {
      return pathname.startsWith("/auth") ? null : NextResponse.next();
    }
    const url = request.nextUrl.clone();
    if (isAppSegment(pathname)) {
      url.host = host;
      url.pathname = pathname.slice(APP_SEGMENT.length) || "/";
      return NextResponse.redirect(url, 308);
    }
    url.pathname = pathname === "/" ? APP_SEGMENT : `${APP_SEGMENT}${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (isAppSegment(pathname)) {
    const url = request.nextUrl.clone();
    url.host = `app.${host}`;
    url.pathname = pathname.slice(APP_SEGMENT.length) || "/";
    return NextResponse.redirect(url, 308);
  }

  return null;
}

/**
 * Send a reader to the same page in the language they are most likely to want, once.
 *
 * A 307 rather than a rewrite. The reader can then see, copy and share the URL of the page
 * they are actually reading, and `hreflang` can make an honest claim about two addresses
 * instead of one address that changes shape depending on who asks — which is the version a
 * crawler indexes in whichever language its own IP resolved to.
 *
 * Three rules, in this order, and every one is about never overruling a decision
 * somebody made with a guess about them:
 *
 * 1. **A stored choice wins, in both directions.** Without it, a reader in Almaty who
 *    clicks "English" lands on `/` and is bounced straight back to `/ru` by their own IP
 *    address — a switcher that cannot switch.
 * 2. **An explicit locale URL is left alone.** Guessing only ever moves somebody *to* a
 *    prefixed locale, never off one. A link shared into a Russian-speaking group chat has
 *    to open in Russian for the person abroad who receives it.
 * 3. **The device's language beats the IP address.** A phone set to English in Bishkek
 *    is a reader who chose English; the country is only where the packets came from, and
 *    it decides nothing until the browser has named no language the site is written in.
 */
function languageRedirect(request: NextRequest, at: { lang: Lang; page: SitePage }) {
  const wanted = preferredLanguage(request, at.lang);
  if (wanted === at.lang) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = pathFor(wanted, at.page);
  return NextResponse.redirect(url, 307);
}

function preferredLanguage(request: NextRequest, current: Lang): Lang {
  const chosen = request.cookies.get(LANG_COOKIE)?.value;
  if (isLang(chosen)) return chosen;

  // Nothing stored, and the reader asked for a specific language by URL. Honour it.
  if (current !== DEFAULT_LANG) return current;

  const asked = languageFromAcceptHeader(request.headers.get("accept-language"));
  if (asked) return asked;

  // No browser language the site has — a Kazakh-only header, a bot, a bare curl. Where
  // the request comes from is the next best signal.
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const byCountry = country ? LOCALE_BY_COUNTRY[country] : undefined;
  if (byCountry) return byCountry;

  return DEFAULT_LANG;
}

export const config = {
  // The funnel's own routes, the pixel loader, and the marketing pages in every language.
  //
  // A deliberate narrowing of the reference, which runs this on everything but static
  // assets. `app/api/**` is the iOS app's bearer-token surface and reads no cookie, so
  // refreshing one there would put a `getUser()` round trip in front of every request the
  // app makes — and `/lang` must be reachable without being redirected by the very guess
  // the reader is trying to overrule.
  //
  // The locale entries are a pattern rather than a list of prefixes, so a locale added to
  // `LOCALES` is redirected to without a second edit here — a matcher has to be a literal
  // Next can read at build time, so it cannot be generated from that list. A tag is two
  // letters or two plus a region (`pt-BR`). The pages under a prefix are named rather than
  // globbed, because `/<tag>/start` is the funnel — a static file with no function in front
  // of it, and a session refresh there would put one back.
  //
  // The app's routes are listed as the paths they have on the app host, because a matcher
  // sees the path and not the host — the same entries are what let the marketing host
  // bounce `/app/*` to the app host. A page added under `app/app/` is added here too.
  matcher: [
    "/",
    "/pricing",
    "/support",
    "/privacy",
    "/terms",
    "/refund",
    "/:locale([a-z]{2}|[a-z]{2}-[A-Z]{2})",
    "/:locale([a-z]{2}|[a-z]{2}-[A-Z]{2})/:page(pricing|support|privacy|terms|refund)",
    "/pay",
    "/auth/:path*",
    "/scripts/pixel.js",
    "/app",
    "/app/:path*",
    "/filament",
    "/quotes",
    "/orders",
    "/customers",
    "/stats",
    "/profile",
  ],
};
