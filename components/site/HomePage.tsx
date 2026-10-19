import Link from "next/link";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { Logo } from "@/components/Logo";
import { copyFor } from "@/components/site/copy";
import { JsonLd } from "@/components/site/JsonLd";
import { PlanetHero } from "@/components/site/PlanetHero";
import { ScreenSlides } from "@/components/site/ScreenSlides";
import { LanguageSwitch } from "@/components/site/SiteShell";
import { BLOG_PATH, GUIDES_PATH } from "@/components/site/articles/paths";
import { GAMES_PATH } from "@/lib/games/hubs";
import { funnelPath, pathFor, type Lang } from "@/lib/i18n";
import { formatMoney, planListQuote } from "@/lib/plans";
import { homeStructuredData } from "@/lib/seo";

/**
 * Hero (the pain in the ad's words, beside the planet), one proof section (an evening with
 * Oyno), then the price. Every call to action goes to `/start`.
 */
export function HomePage({ lang }: { lang: Lang }) {
  const copy = copyFor(lang);
  const home = copy.home;
  const start = funnelPath(lang);

  return (
    <div className="sky min-h-screen">
      <JsonLd data={homeStructuredData(lang, home.meta.description)} />
      <header className="sticky top-0 z-20 pt-3">
        <div className="shell">
          <div className="glass-bar flex items-center justify-between py-2 pl-5 pr-2">
            <Logo className="h-[25px] w-auto" />
            <div className="flex items-center gap-5">
              <Link href={pathFor(lang, "pricing")} className="text-[14px] font-semibold text-muted hover:text-ink">
                {copy.nav.pricing}
              </Link>
              <Link href={start} className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-[14px] font-bold text-white hover:bg-accent-pressed">
                {copy.nav.start}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="shell grid items-center gap-6 py-12 sm:py-16 md:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">{home.eyebrow}</p>
            <h1 className="mt-3 text-[38px] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[54px]">
              {home.headline}
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted sm:text-[18px]">{home.sub}</p>
            <div className="mt-8 flex">
              <Link href={start} className="btn w-auto px-7 text-[16px]">
                {home.cta}
              </Link>
            </div>
          </div>
          <PlanetHero words={home.planet} />
        </div>
      </section>

      <section id="author">
        <div className="shell py-16">
          <figure className="card grid overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="relative aspect-[4/3] md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/evening.webp"
                alt={home.author.photoAlt}
                width={720}
                height={1557}
                loading="lazy"
                className="absolute inset-0 size-full object-cover object-[50%_20%]"
              />
            </div>
            <div className="px-6 py-9 sm:px-12 sm:py-12">
              <h2 className="text-[30px] font-extrabold tracking-[-0.03em] text-ink">{home.author.heading}</h2>
              <blockquote className="mt-6 space-y-4 text-[18px] leading-relaxed text-slate">
                {home.author.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-[16px] font-bold text-ink">{home.author.name}</p>
                <p className="text-[14px] text-muted">{home.author.role}</p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section id="how">
        <div className="shell py-16">
          <h2 className="text-[30px] font-extrabold tracking-[-0.03em] text-ink">{home.proof.heading}</h2>
          <p className="mt-3 max-w-2xl text-[16px] text-muted">{home.proof.sub}</p>
          <ScreenSlides proof={home.proof} />
        </div>
      </section>

      <section id="pricing">
        <div className="shell py-16">
          <h2 className="text-[30px] font-extrabold tracking-[-0.03em] text-ink">{home.closer.heading}</h2>
          <p className="mt-3 max-w-2xl text-[16px] text-muted">{home.closer.body}</p>

          <div className="card mt-10 grid grid-cols-1 overflow-hidden sm:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-7">
              <p className="eyebrow">{home.plan.eyebrow}</p>
              <p className="mt-3 max-w-md text-[17px] leading-relaxed text-slate">{home.plan.pitch}</p>
            </div>
            <div className="border-t border-hairline px-6 py-7 sm:border-l sm:border-t-0">
              <dl className="space-y-3">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-[15px] text-slate">{home.plan.yearly}</dt>
                  <dd className="num text-[16px] font-bold text-ink">
                    {formatMoney(planListQuote.yearly, planListQuote.currency)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-[15px] text-slate">{home.plan.monthly}</dt>
                  <dd className="num text-[16px] font-bold text-ink">
                    {formatMoney(planListQuote.monthly, planListQuote.currency)}
                  </dd>
                </div>
              </dl>
              <Link href={start} className="btn mt-7 text-[16px]">
                {home.plan.cta}
              </Link>
              <p className="mt-6 text-[13px] text-muted">{home.plan.appNote}</p>
              <div className="mt-4">
                <AppStoreBadge size="sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="shell py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Logo />
          <nav className="flex flex-wrap items-center gap-5 text-[13px] font-semibold text-muted">
            {copy.nav.games && <Link href={GAMES_PATH} className="hover:text-ink">{copy.nav.games}</Link>}
            {copy.nav.guides && <Link href={GUIDES_PATH} className="hover:text-ink">{copy.nav.guides}</Link>}
            {copy.nav.blog && <Link href={BLOG_PATH} className="hover:text-ink">{copy.nav.blog}</Link>}
            <Link href={pathFor(lang, "pricing")} className="hover:text-ink">{copy.nav.pricing}</Link>
            <Link href={pathFor(lang, "support")} className="hover:text-ink">{copy.nav.support}</Link>
            <Link href={pathFor(lang, "privacy")} className="hover:text-ink">{copy.nav.privacy}</Link>
            <Link href={pathFor(lang, "terms")} className="hover:text-ink">{copy.nav.terms}</Link>
            <LanguageSwitch lang={lang} page="home" />
          </nav>
        </div>
      </footer>
    </div>
  );
}
