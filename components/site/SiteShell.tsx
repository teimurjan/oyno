import Link from "next/link";
import { Logo } from "@/components/Logo";
import { copyFor } from "@/components/site/copy";
import { BLOG_PATH, GUIDES_PATH } from "@/components/site/articles/paths";
import { GAMES_PATH } from "@/lib/games/hubs";
import { funnelPath, LOCALE_NAMES, LOCALES, pathFor, type Lang, type SitePage } from "@/lib/i18n";

/**
 * The frame every non-funnel page sits in.
 *
 * Its own component because the legal pages, pricing and support are read rarely and
 * edited often — a shared header and footer is one place to keep them consistent rather
 * than six, times two languages.
 */
export function SiteShell({
  lang,
  page,
  children,
}: {
  lang: Lang;
  /** Which page this is, so the language switcher can offer the same page in the other
   * language rather than dumping the reader on the home page. */
  page: SitePage;
  children: React.ReactNode;
}) {
  const copy = copyFor(lang);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-hairline bg-canvas/85 backdrop-blur-md">
        <div className="shell flex items-center justify-between py-4">
          <Link href={pathFor(lang, "home")}>
            <Logo />
          </Link>
          <div className="flex items-center gap-5">
            <Link href={pathFor(lang, "pricing")} className="text-[13px] text-muted hover:text-ink">
              {copy.nav.pricing}
            </Link>
            <Link href={funnelPath(lang)} className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-[14px] font-bold text-white hover:bg-accent-pressed">
              {copy.nav.start}
            </Link>
          </div>
        </div>
      </header>

      <main className="shell py-14">{children}</main>

      <footer className="shell pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <Logo />
          <nav className="flex flex-wrap items-center gap-5 text-[13px] text-muted">
            {copy.nav.games && <Link href={GAMES_PATH} className="hover:text-ink">{copy.nav.games}</Link>}
            {copy.nav.guides && <Link href={GUIDES_PATH} className="hover:text-ink">{copy.nav.guides}</Link>}
            {copy.nav.blog && <Link href={BLOG_PATH} className="hover:text-ink">{copy.nav.blog}</Link>}
            <Link href={pathFor(lang, "pricing")} className="hover:text-ink">{copy.nav.pricing}</Link>
            <Link href={pathFor(lang, "support")} className="hover:text-ink">{copy.nav.support}</Link>
            <Link href={pathFor(lang, "privacy")} className="hover:text-ink">{copy.nav.privacy}</Link>
            <Link href={pathFor(lang, "terms")} className="hover:text-ink">{copy.nav.terms}</Link>
            <LanguageSwitch lang={lang} page={page} />
          </nav>
        </div>
      </footer>
    </div>
  );
}

/**
 * Plain links, not buttons, inside a `<details>` so eighteen languages fit in a footer.
 *
 * Each goes to `/lang`, which sets the cookie server-side and redirects. Doing it with a
 * client component would mean shipping JavaScript to otherwise static pages for one menu;
 * `<details>` opens and closes with none. A bare link to `/ru` would let the proxy's geo rule
 * bounce a Russian reader who asked for English straight back — a switcher that cannot switch.
 *
 * `page` is a name from a fixed list, never a URL. `/lang` maps it to a path itself, so
 * there is nothing here for an open redirect to hold on to.
 *
 * Every language is written in itself: a reader looking for Russian scans for "Русский".
 * The summary names the current one, which is also what tells a reader who landed in the
 * wrong language where the way out is.
 */
export function LanguageSwitch({ lang, page }: { lang: Lang; page: SitePage }) {
  if (LOCALES.length < 2) return null;
  const copy = copyFor(lang);
  return (
    <details className="group relative">
      <summary
        aria-label={copy.nav.switchLabel}
        className="flex cursor-pointer list-none items-center gap-1 hover:text-ink [&::-webkit-details-marker]:hidden"
      >
        {LOCALE_NAMES[lang]}
        <svg aria-hidden width="10" height="10" viewBox="0 0 10 10" className="transition-transform group-open:rotate-180">
          <path d="M2 6.5 5 3.5l3 3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </summary>
      <ul className="card absolute bottom-full right-0 z-30 mb-2 max-h-[60vh] w-56 overflow-y-auto py-1.5">
        {LOCALES.filter((other) => other !== lang).map((other) => (
          <li key={other}>
            <a
              href={`/lang?to=${other}&page=${page}`}
              hrefLang={other}
              lang={other}
              className="block px-3.5 py-2 text-[13px] text-muted hover:bg-ink/5 hover:text-ink"
            >
              {LOCALE_NAMES[other]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

/** A prose block, the full width of the shell so it lines up with the header. Headings clear
 * the sticky header when linked to, as `/privacy#delete` is from Meta's app settings. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-[15px] leading-[1.65] text-slate [&_a]:text-accent [&_a:hover]:text-accent-pressed [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-ink [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-[19px] [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mt-7 [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">
      {children}
    </div>
  );
}
