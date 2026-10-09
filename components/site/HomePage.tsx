import Link from "next/link";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { Logo } from "@/components/Logo";
import { Receipt } from "@/components/Receipt";
import { BuyOrOpen, SignInOrOpen } from "@/components/site/BuyOrOpen";
import { copyFor } from "@/components/site/copy";
import { ScreenshotGallery } from "@/components/site/ScreenshotGallery";
import { PaddleRetain } from "@/components/site/PaddleRetain";
import { LanguageSwitch } from "@/components/site/SiteShell";
import { pathFor, type Lang } from "@/lib/i18n";
import { MARKETS } from "@/lib/markets";
import { formatMoney, paddleFallbackQuote } from "@/lib/paddlePrices";

/**
 * Hero, then the screenshots, then why, then how, then the price.
 *
 * The screenshots sit directly under the hero rather than three sections down. Someone
 * arriving from an ad has decided nothing yet, and the fastest way to answer "is this a
 * real app or a landing page for one" is to show them the app. The receipt — the argument
 * — comes after, because arithmetic rewards a reader who has already decided to keep
 * reading and stops one who has not.
 */
export function HomePage({ lang }: { lang: Lang }) {
  const copy = copyFor(lang);
  const home = copy.home;
  // The dollar placeholder in the reader's own number format; checkout quotes their currency.
  const { numberLocale } = MARKETS[lang];

  return (
    <div className="min-h-screen">
      <PaddleRetain />
      <header className="sticky top-0 z-20 border-b border-hairline bg-canvas/90 backdrop-blur-md">
        <div className="shell flex items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-5">
            <Link href={pathFor(lang, "pricing")} className="text-[13px] text-muted hover:text-ink">
              {copy.nav.pricing}
            </Link>
            <SignInOrOpen signIn={copy.nav.signIn} open={copy.nav.open} />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="grid-rule border-b border-hairline">
        <div className="shell py-16 sm:py-20">
          <p className="eyebrow">{home.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[54px]">
            {home.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[18px]">
            {home.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AppStoreBadge />
            <BuyOrOpen
              lang={lang}
              buy={home.webCta}
              open={`${copy.openApp} →`}
              className="text-[14px] font-medium text-accent hover:text-accent-pressed"
            />
          </div>
        </div>
      </section>

      {/* The app itself, before a word of argument */}
      <section className="border-b border-hairline">
        <div className="shell py-14">
          <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
            {home.shotsHeading}
          </h2>
          <div className="mt-8">
            <ScreenshotGallery shots={home.shots} />
          </div>
        </div>
      </section>

      {/* The argument */}
      <section className="border-b border-hairline">
        <div className="shell py-16">
          <h2 className="max-w-2xl text-[28px] font-semibold tracking-[-0.02em] text-ink">
            {home.receipt.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">{home.receipt.sub}</p>
          {/* Full width, unlike the prose around it. It is a bill, and a bill is read down
              its right-hand column — the wider the sheet, the more the numbers read as a
              column and the less they read as the tail of a sentence. */}
          <div className="mt-10">
            <Receipt lang={lang} />
          </div>
        </div>
      </section>

      {/* Features, as the three ways the money leaks */}
      <section className="border-b border-hairline">
        <div className="shell py-16">
          <h2 className="max-w-2xl text-[28px] font-semibold tracking-[-0.02em] text-ink">
            {home.painsHeading}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {home.pains.map((pain) => (
              <div key={pain.kicker} className="card p-6">
                <p className="eyebrow">{pain.kicker}</p>
                <h3 className="mt-3 text-[17px] font-semibold leading-snug text-ink">{pain.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{pain.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-hairline">
        <div className="shell py-16">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink">{home.howHeading}</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">{home.howSub}</p>

          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {home.steps.map((step) => (
              <li key={step.n}>
                <span className="num text-[12px] font-semibold tracking-[0.12em] text-accent">
                  {step.n}
                </span>
                <h3 className="mt-3 text-[17px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The price, last, and the close that leads into it.
          One section rather than two: a closing CTA stacked directly on top of the plan
          card would put two accent-filled buttons a hundred pixels apart, and this design
          spends the accent once. The closer's words do the closing; the card takes the
          click. */}
      <section id="pricing" className="border-b border-hairline">
        <div className="shell py-16">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-ink">
            {home.closer.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">{home.closer.body}</p>

          {/* Full width, and built like the receipt above it: an eyebrow band, then two
              halves. The argument for the money on the left, the money itself on the
              right. Squeezed into a column the pitch sets as five short lines against a
              page that is twice as wide, which reads as an afterthought rather than as
              the thing the page has been building to. */}
          <div className="card mt-10 overflow-hidden">
            <div className="border-b border-hairline px-5 py-4 sm:px-7">
              <p className="eyebrow">{home.plan.eyebrow}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Centred against the taller half, so the short paragraph reads as
                  deliberate rather than as a cell that ran out of content. */}
              <div className="flex flex-col justify-center px-5 py-6 sm:px-7">
                <p className="max-w-md text-[17px] leading-relaxed text-slate">
                  {home.plan.pitch}
                </p>
              </div>

              <div className="border-t border-hairline px-5 py-6 sm:border-l sm:border-t-0 sm:px-7">
                <dl className="space-y-3">
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-[14px] text-slate">{home.plan.monthly}</dt>
                    <dd className="num whitespace-nowrap text-[15px] font-medium text-ink">
                      {formatMoney(paddleFallbackQuote.monthly, paddleFallbackQuote.currency, numberLocale)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-[14px] text-slate">{home.plan.yearly}</dt>
                    <dd className="num whitespace-nowrap text-[15px] font-medium text-ink">
                      {formatMoney(paddleFallbackQuote.yearly, paddleFallbackQuote.currency, numberLocale)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-[14px] text-slate">{home.plan.lifetime}</dt>
                    <dd className="num whitespace-nowrap text-[15px] font-medium text-ink">
                      {formatMoney(paddleFallbackQuote.lifetime, paddleFallbackQuote.currency, numberLocale)}
                    </dd>
                  </div>
                </dl>

                <BuyOrOpen
                  lang={lang}
                  buy={home.plan.cta}
                  open={copy.openApp}
                  className="mt-7 flex h-[52px] items-center justify-center rounded-[8px] bg-accent text-[16px] font-medium text-white transition-colors hover:bg-accent-pressed"
                />

                <div className="mt-6 border-t border-hairline pt-6">
                  <p className="text-[13px] text-muted">{home.plan.appNote}</p>
                  <div className="mt-4">
                    <AppStoreBadge size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="shell py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Logo />
          <nav className="flex flex-wrap items-center gap-5 text-[13px] text-muted">
            <Link href={pathFor(lang, "pricing")} className="hover:text-ink">{copy.nav.pricing}</Link>
            <Link href={pathFor(lang, "support")} className="hover:text-ink">{copy.nav.support}</Link>
            <Link href={pathFor(lang, "privacy")} className="hover:text-ink">{copy.nav.privacy}</Link>
            <Link href={pathFor(lang, "terms")} className="hover:text-ink">{copy.nav.terms}</Link>
            <Link href={pathFor(lang, "refund")} className="hover:text-ink">{copy.nav.refund}</Link>
            <LanguageSwitch lang={lang} page="home" />
          </nav>
        </div>
      </footer>
    </div>
  );
}
