import { AppStoreBadge } from "@/components/AppStoreBadge";
import { BuyOrOpen } from "@/components/site/BuyOrOpen";
import { copyFor } from "@/components/site/copy";
import { Prose, SiteShell } from "@/components/site/SiteShell";
import type { Lang } from "@/lib/i18n";
import { MARKETS } from "@/lib/markets";
import { formatMoney, paddleFallbackQuote } from "@/lib/paddlePrices";

/** Two cards — the web door and the App Store door — and then the detail. The price on both
 * is the same: Paddle's cut is smaller than Apple's, so the web could undercut the App Store
 * and still net more, but a page that has to explain why one door is cheaper is arguing
 * against the door most people will already be standing in. */
export function PricingPage({ lang }: { lang: Lang }) {
  const copy = copyFor(lang);
  const { numberLocale } = MARKETS[lang];
  const text = copy.pricing;
  const monthly = formatMoney(paddleFallbackQuote.monthly, paddleFallbackQuote.currency, numberLocale);
  const yearly = formatMoney(paddleFallbackQuote.yearly, paddleFallbackQuote.currency, numberLocale);
  const lifetime = formatMoney(paddleFallbackQuote.lifetime, paddleFallbackQuote.currency, numberLocale);

  return (
    <SiteShell lang={lang} page="pricing">
      <div className="max-w-2xl">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1 className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.03em] text-ink">
          {text.heading}
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">{text.intro}</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="card p-6">
          <p className="eyebrow">{text.web.eyebrow}</p>
          <p className="num mt-3 text-[32px] font-semibold leading-none tracking-tight text-ink">
            {monthly}
            <span className="text-[15px] font-normal text-muted">{text.web.perMonth}</span>
          </p>
          <p className="num mt-2 text-[15px] text-slate">{text.web.orOthers(yearly, lifetime)}</p>
          <BuyOrOpen lang={lang} buy={text.web.cta} open={copy.openApp} className="btn mt-6" />
          <p className="mt-4 text-[12px] leading-relaxed text-faint">{text.web.note}</p>
        </div>

        <div className="card p-6">
          <p className="eyebrow">{text.app.eyebrow}</p>
          <p className="mt-3 text-[32px] font-semibold leading-none tracking-tight text-ink">
            {text.app.headline}
          </p>
          <p className="mt-2 text-[15px] text-slate">{text.app.sub}</p>
          <div className="mt-6">
            <AppStoreBadge />
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-faint">{text.app.note}</p>
        </div>
      </div>

      <Prose>{text.body}</Prose>
    </SiteShell>
  );
}
