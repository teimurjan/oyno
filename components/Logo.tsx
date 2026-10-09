/**
 * The Embrace mark on its sky tile, then the name. Shared by the site (React) and the funnel
 * (Preact), so the mark is the file `scripts/build-icons.ts` renders from `lib/mark.ts` rather
 * than inline SVG, whose attribute spelling the two disagree on. Decorative: the name is real text.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 align-middle ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/ico/mark.svg" alt="" width={26} height={26} className="size-[26px] rounded-[7px]" />
      <span className="text-[20px] font-extrabold tracking-[-0.04em] text-ink">oyno</span>
    </span>
  );
}

export default Logo;
