import type { JSX } from "preact";
import { Headline } from "./Headline";
import { Glyph } from "./icons";
import { Accented, useLocale } from "./locale";
import { recapLines, type FunnelAnswers } from "./steps";

/** Enough that the reader recognises their own shop, few enough to read standing up. */
const LINES = 5;

/**
 * The reader's own answers, a card apiece. **The first card is red and only the first** — it
 * is the problem they named on step 0 (`recapLines` sorts it to the front), the one thing on
 * the screen that is measurably costing them money. Five red cards is an accusation.
 */
export function RecapStep({ answers, headline }: { answers: FunnelAnswers; headline: string }) {
  const { copy } = useLocale();
  const lines = recapLines(answers, LINES, copy);

  return (
    <>
      <Headline text={headline} />

      {lines.map((entry, index) => {
        const problem = index === 0;
        return (
          <div
            key={entry.key}
            className={`flex items-center gap-3 rounded-[8px] border px-3.5 py-3 ${
              problem ? "border-alert/35 bg-alert/6 text-alert" : "card border-hairline text-faint"
            }`}
          >
            <span className="shrink-0">{ICONS[entry.key] ?? ICONS.default}</span>
            <p
              className={`min-w-0 text-[15.5px] leading-[1.4] ${
                problem ? "font-medium text-ink" : "text-ink"
              }`}
            >
              {entry.line}
            </p>
          </div>
        );
      })}

      {/* Tinted and ticked rather than filled, so the footer's button is still the only accent
          *fill* on the screen and nothing here competes for the tap. */}
      <div className="rounded-[8px] border border-accent/30 bg-accent/6 px-3.5 py-3.5">
        <p className="text-[16.5px] font-semibold leading-[1.3] text-ink">
          <Accented text={copy.recap.closing} />
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {copy.recap.answers.map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <span className="mt-px shrink-0 text-accent">
                <Tick />
              </span>
              <span className="min-w-0 text-[14.5px] leading-[1.35] text-ink">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/** Filled rather than outlined, unlike the diagnosis glyphs: these are already true. */
export function Tick() {
  return (
    <svg aria-hidden width="17" height="17" viewBox="0 0 20 20" className="fill-current">
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8Zm4.05 6.42-4.9 4.9a.8.8 0 0 1-1.13 0L5.95 10.7a.8.8 0 0 1 1.13-1.13l1.5 1.5 4.34-4.34a.8.8 0 0 1 1.13 1.13Z" />
    </svg>
  );
}

const Mark = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <Glyph size={20} box={20} stroke={1.6}>
    {children}
  </Glyph>
);

/** One outline mark per question key — drawn rather than emoji, because the options above use
 * emoji for warmth and the recap reads as a diagnosis. A key with no entry falls back. */
export const ICONS: Record<string, JSX.Element> = {
  problem: (
    <Mark>
      <circle cx="10" cy="10" r="7.4" />
      <path d="M10 6.2v4.4" />
      <circle cx="10" cy="13.6" r="0.95" fill="currentColor" stroke="none" />
    </Mark>
  ),
  brought: (
    <Mark>
      <path d="M16.6 10a6.6 6.6 0 1 1-2-4.7" />
      <path d="M16.9 3.1v3.3h-3.3" />
    </Mark>
  ),
  earned: (
    <Mark>
      <path d="M3 10s2.9-4.4 7-4.4 7 4.4 7 4.4-2.9 4.4-7 4.4S3 10 3 10Z" />
      <path d="M4.3 15.7 15.7 4.3" />
    </Mark>
  ),
  volume: (
    <Mark>
      <path d="M4 6.4h12" />
      <path d="M4 10h12" />
      <path d="M4 13.6h7.5" />
    </Mark>
  ),
  tracking: (
    <Mark>
      <circle cx="10" cy="10" r="6.6" />
      <circle cx="10" cy="10" r="2.1" />
    </Mark>
  ),
  orderbook: (
    <Mark>
      <rect x="4" y="3.4" width="12" height="13.2" rx="1.4" />
      <path d="M7 7.6h6M7 10.4h6M7 13.2h3.5" />
    </Mark>
  ),
  tools: (
    <Mark>
      <rect x="3.4" y="3.4" width="5.6" height="5.6" rx="1.2" />
      <rect x="11" y="3.4" width="5.6" height="5.6" rx="1.2" />
      <rect x="3.4" y="11" width="5.6" height="5.6" rx="1.2" />
      <rect x="11" y="11" width="5.6" height="5.6" rx="1.2" />
    </Mark>
  ),
  searching: (
    <Mark>
      <path d="M6 3.4h8M6 16.6h8" />
      <path d="M7.1 3.4c0 3 2.9 4.4 2.9 6.6s-2.9 3.6-2.9 6.6" />
      <path d="M12.9 3.4c0 3-2.9 4.4-2.9 6.6s2.9 3.6 2.9 6.6" />
    </Mark>
  ),
  default: (
    <Mark>
      <circle cx="10" cy="10" r="7.4" />
      <path d="M6.6 10h6.8" />
    </Mark>
  ),
};
