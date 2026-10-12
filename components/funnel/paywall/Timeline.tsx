import type { JSX } from "preact";
import { Glyph } from "../icons";
import { useLocale } from "../locale";

/** One per line of `paywall.timeline`, in order: a paused phone, a game, a growing kid. */
const GLYPHS: JSX.Element[] = [
  <>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M3.5 3.5l17 17" />
  </>,
  <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />,
  <>
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </>,
];

/** What the plan does over time, as the app's trial timeline draws it: lit nodes for what
 * starts now, an unlit one for what it grows into. */
export function Timeline() {
  const { copy } = useLocale();
  const steps = copy.paywall.timeline;

  return (
    <ol className="mx-auto mb-6 flex w-full max-w-[420px] flex-col">
      {steps.map(({ title, detail }, index) => {
        const last = index === steps.length - 1;
        return (
          <li key={title} className="flex gap-4">
            <span className="flex shrink-0 flex-col items-center">
              <span className={`sheen-node ${last ? "" : "sheen-node--lit"}`}>
                <Glyph size={17} box={24} stroke={2}>
                  {GLYPHS[index]}
                </Glyph>
              </span>
              {!last && <span className="sheen-line w-[2px] flex-1" />}
            </span>
            <span className={`min-w-0 pt-2 ${last ? "" : "pb-5"}`}>
              <span className="block text-[18.5px] font-semibold leading-[1.3] text-ink">{title}</span>
              <span className="mt-0.5 block text-[16.5px] leading-[1.4] text-muted">{detail}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
