/**
 * The nozzle, then the name.
 *
 * The name is set in Space Grotesk now — a display face of its own, apart from the Inter
 * the prose wears and the Plex Mono the numbers do. It replaced the Plex Mono the mark used
 * to wear: mono gives every letter the same advance width, which is exactly what a column of
 * grams needs and exactly what a nine-letter word cannot survive — the `I` sat in a cell
 * built for a `D`, and the 0.32em of tracking that made that bearable was the workaround
 * admitting it. Mixed case in a proportional face gives the word back the ascenders and
 * descenders a reader recognises it by at a glance in a sticky bar.
 *
 * One weight and one colour on purpose: the nozzle is carrying the visual interest here,
 * and a two-tone wordmark next to a detailed mark is two things asking to be looked at.
 *
 * 17px rather than the 15px the spaced caps used, because mixed case at tight tracking
 * sits optically smaller — the mark should hold the same weight in the header it always
 * did, not shrink because its letters got closer together.
 *
 * `mark.webp` is `ico/logo.png` trimmed to its alpha bounding box (798x1191 inside a
 * 1274px square) and scaled to 4x its drawn height. Untrimmed, a third of the width drawn
 * here would be transparent padding and the nozzle would sit small and off-centre.
 *
 * The image is decorative — the name sits next to it in real text, so alt copy would only
 * make a screen reader say "Oyno" twice.
 *
 * `inline-flex` rather than `flex`, and that is load-bearing: `/pay` centres this with
 * `text-center` inside a 420px column, and a block-level flex container would fill that
 * column and quietly park the mark against its left edge.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 align-middle ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/ico/mark.webp" alt="" width={16} height={24} className="h-6 w-4" />
      <span className="font-wordmark text-[17px] font-semibold tracking-[-0.01em] text-ink">
        Oyno
      </span>
    </span>
  );
}

export default Logo;
