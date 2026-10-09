"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { funnelPath, type Lang } from "@/lib/i18n";
import { hasSessionCookie } from "@/lib/supabase/cookie";

/**
 * Whether this browser already has an account, decided from the session cookie alone, in
 * an effect. These pages are static and served from the CDN, so the server cannot know who
 * is asking, and the first client render has to match the HTML it hydrates — so the
 * prospect's version is what renders, and the swap lands a frame later. supabase-js stays
 * out of it: a cookie is enough to tell "has an account" from "has not", and a stale one
 * costs a sign-in screen on the far side of the link, which the app draws anyway.
 */
function useHasAccount(): boolean {
  const [hasAccount, setHasAccount] = useState(false);
  useEffect(() => {
    setHasAccount(hasSessionCookie());
  }, []);
  return hasAccount;
}

/**
 * The buy button — unless this browser already has an account, in which case it is the
 * door to the web app. Somebody who signed in on `/start` or on `app.` and comes back to
 * the site is not a prospect, and "Buy on the web" in front of a subscriber reads as a site
 * that does not know them.
 *
 * `/app` is a plain anchor rather than a `Link`: `proxy.ts` sends it to `app.<host>`, a
 * different origin, which a client-side navigation has no business trying to fetch.
 */
export function BuyOrOpen({
  lang,
  buy,
  open,
  className,
}: {
  /** The funnel is opened in the page's language. */
  lang: Lang;
  buy: string;
  open: string;
  className?: string;
}) {
  const hasAccount = useHasAccount();
  if (hasAccount) {
    return (
      <a href="/app" className={className}>
        {open}
      </a>
    );
  }
  return (
    <Link href={funnelPath(lang)} className={className}>
      {buy}
    </Link>
  );
}

/** The header's door to the web app. One address either way — the app draws its own
 * sign-in screen for a browser with no session — so only the word changes. */
export function SignInOrOpen({ signIn, open }: { signIn: string; open: string }) {
  return (
    <a href="/app" className="inline-flex h-9 items-center rounded-md bg-accent px-3.5 text-[13px] font-medium text-white hover:bg-accent-pressed">
      {useHasAccount() ? open : signIn}
    </a>
  );
}
