import { copyFor } from "@/components/site/copy";
import type { ProsePageCopy } from "@/components/site/copy/types";
import { Prose, SiteShell } from "@/components/site/SiteShell";
import type { Lang, SitePage } from "@/lib/i18n";

/**
 * Support and the three legal pages, which are the same page with different words in it:
 * an eyebrow, a heading, sometimes a date, sometimes an opening paragraph, then prose.
 *
 * One component rather than four so a change to the measure or the heading rhythm lands
 * on all of them, in both languages, at once.
 */
export function ProsePage({
  lang,
  page,
  select,
}: {
  lang: Lang;
  page: SitePage;
  select: (copy: ReturnType<typeof copyFor>) => ProsePageCopy;
}) {
  const text = select(copyFor(lang));

  return (
    <SiteShell lang={lang} page={page}>
      <header>
        <p className="eyebrow">{text.eyebrow}</p>
        <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-ink">
          {text.heading}
        </h1>
        {text.updated && (
          <p className="mt-2 text-[13px] text-faint">
            {text.updatedLabel} {text.updated}
          </p>
        )}
        {text.intro && (
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{text.intro}</p>
        )}
      </header>

      <Prose>{text.body}</Prose>
    </SiteShell>
  );
}
