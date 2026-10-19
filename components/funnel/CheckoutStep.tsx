import type { ComponentChildren } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import type { CheckoutBreakdownData, CheckoutEvent, CheckoutMode } from "dodopayments-checkout";
import { useAuth } from "@/components/auth/AuthProvider";
import { track } from "@/lib/analytics";
import type { BrowserContext, CheckoutSessionResult } from "@/lib/checkoutSession";
import { onDodoCheckoutEvent } from "@/lib/dodoCheckout";
import { funnelPath } from "@/lib/i18n";
import { metaCookie, metaTrack } from "@/lib/metaPixel";
import { fromMinorUnits, planListQuote, type Plan, type PlanQuote } from "@/lib/plans";
import { InlineCheckout } from "./InlineCheckout";
import { useLocale } from "./locale";
import { planQuote } from "./planQuote";
import { readClickId, rememberPurchase, type Attribution } from "./session";
import { ACCOUNT_STEP_INDEX, type FunnelAnswers } from "./steps";

interface OpenCheckout {
  checkoutUrl: string;
  mode: CheckoutMode;
}

async function requestCheckout(
  accessToken: string,
  plan: Plan,
  browser: BrowserContext,
): Promise<CheckoutSessionResult> {
  try {
    const response = await fetch("/api/funnel/checkout", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ plan, browser }),
    });
    if (!response.ok) return { ok: false, error: response.status === 503 ? "unconfigured" : "failed" };
    const session = (await response.json()) as { checkoutUrl: string; mode: "live" | "test" };
    return { ok: true, ...session };
  } catch {
    return { ok: false, error: "failed" };
  }
}

/**
 * The card field, and only the card field: the plan was picked on the step before, because a
 * Dodo session is minted server-side for one product and cannot change it.
 *
 * Two things ride into the session's `metadata`: the Supabase uid, which the route reads off
 * the bearer token so a buyer cannot claim to be somebody else, and an `eventId` minted once
 * per mount, which the browser Pixel and the server CAPI event dedupe on. Dodo emits no
 * completion event; success is the redirect to `/start/done`, so the amount is written down
 * here for `PurchaseReport` to read there.
 */
export function CheckoutStep({
  plan,
  answers,
  attribution,
  funnel,
}: {
  plan: Plan;
  answers: FunnelAnswers;
  attribution: Attribution;
  funnel: string;
}) {
  const { user, accessToken } = useAuth();
  const { copy, lang } = useLocale();
  const words = copy.checkout;
  const [eventId] = useState(() => crypto.randomUUID());
  const [quote, setQuote] = useState<PlanQuote>(planListQuote);
  const [checkout, setCheckout] = useState<OpenCheckout | null>(null);
  const [state, setState] = useState<"opening" | "failed" | "unconfigured" | "open">("opening");
  const started = useRef(false);

  useEffect(() => {
    void planQuote().then((live) => live && setQuote(live));
  }, []);

  const handleCheckoutEvent = useCallback(
    (event: CheckoutEvent) => {
      if (event.event_type === "checkout.opened") {
        if (!started.current) {
          started.current = true;
          metaTrack("InitiateCheckout", { content_name: plan });
          track({ name: "checkout_started", plan });
        }
        // Provisional, at the list price: a missed conversion is worse than one a few cents
        // out. The breakdown below overwrites it with the charged total.
        rememberPurchase({ eventId, plan, value: quote[plan], currency: quote.currency });
      }
      if (event.event_type === "checkout.breakdown") {
        const breakdown = event.data as CheckoutBreakdownData | undefined;
        const minor = breakdown?.finalTotal ?? breakdown?.total;
        const currency = breakdown?.finalTotalCurrency ?? breakdown?.currency;
        if (minor != null && currency) {
          rememberPurchase({ eventId, plan, value: fromMinorUnits(minor, currency), currency });
        }
      }
    },
    [eventId, plan, quote],
  );

  useEffect(() => onDodoCheckoutEvent(handleCheckoutEvent), [handleCheckoutEvent]);

  const open = useCallback(async () => {
    setState("opening");
    const token = await accessToken().catch(() => null);
    if (!token) {
      setState("failed");
      return;
    }
    const result = await requestCheckout(token, plan, {
      eventId,
      fbp: metaCookie("_fbp") ?? undefined,
      fbc: metaCookie("_fbc") ?? readClickId(),
      ua: navigator.userAgent,
      answers,
      attribution,
      funnel,
    });
    if (!result.ok) {
      setState(result.error === "unconfigured" ? "unconfigured" : "failed");
      return;
    }
    setCheckout({ checkoutUrl: result.checkoutUrl, mode: result.mode });
    setState("open");
  }, [accessToken, answers, attribution, eventId, funnel, plan]);

  useEffect(() => {
    if (user) void open();
  }, [user?.id]);

  function payment() {
    // Reachable signed-out only by deep link. Say why there is no form rather than show an inert one.
    if (!user) {
      return (
        <Unavailable>
          {words.needsAccount}{" "}
          <a href={`${funnelPath(lang)}#step-${ACCOUNT_STEP_INDEX}`} className="font-semibold underline underline-offset-4">
            {words.createYours}
          </a>
        </Unavailable>
      );
    }
    if (state === "unconfigured") return <Unavailable>{words.notConfigured}</Unavailable>;
    if (state === "failed") {
      return (
        <Unavailable>
          {words.retry}{" "}
          <button onClick={() => void open()} className="font-semibold underline underline-offset-4">
            {words.tryAgain}
          </button>
        </Unavailable>
      );
    }
    if (!checkout) return <Unavailable>{words.opening}</Unavailable>;
    return <InlineCheckout key={checkout.checkoutUrl} {...checkout} plan={plan} quote={quote} />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Above the card field: a buyer who finds out the platform after paying is a refund. */}
      <p className="text-center text-[14.5px] leading-[1.5] text-muted">
        {words.platforms} {plan !== "lifetime" && words.cancelAnytime}
      </p>
      {payment()}
    </div>
  );
}

function Unavailable({ children }: { children: ComponentChildren }) {
  return <p className="card px-4 py-3.5 text-center text-[15.5px] leading-snug text-muted">{children}</p>;
}
