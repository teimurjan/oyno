import { NextResponse } from "next/server";
import { createCheckoutSession, type BrowserContext } from "@/lib/checkoutSession";
import { logFields, withLogging } from "@/lib/log";
import type { Plan } from "@/lib/plans";
import { getUserFromRequest } from "@/lib/supabase/auth";

interface CheckoutBody {
  plan?: unknown;
  browser?: unknown;
}

const isPlan = (value: unknown): value is Plan => value === "monthly" || value === "yearly";

/** Only the shape the metadata bag needs is checked here; `metadataFor` bounds the rest,
 * since every key in it is the buyer's to edit. */
const isBrowserContext = (value: unknown): value is BrowserContext =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as BrowserContext).eventId === "string";

/**
 * Mint a Dodo checkout session for the signed-in buyer.
 *
 * Bearer-authenticated like every other route here — the web funnel holds a GoTrue session
 * the same way the iOS app does — and that is the whole of the attribution guarantee: the
 * uid `createCheckoutSession` stamps into the session's `metadata` is the one the token
 * verified, never one the page sent up.
 */
export const POST = withLogging("funnel.checkout", async (request: Request) => {
  const user = await getUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  let body: CheckoutBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  if (!isPlan(body.plan) || !isBrowserContext(body.browser)) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  logFields({ plan: body.plan, funnel: body.browser.funnel ?? null });

  const result = await createCheckoutSession(user, body.plan, body.browser);
  if (!result.ok) {
    logFields({ outcome: result.error });
    const status = result.error === "unconfigured" ? 503 : 502;
    return NextResponse.json({ error: result.error }, { status });
  }
  return NextResponse.json({ checkoutUrl: result.checkoutUrl, mode: result.mode });
});
