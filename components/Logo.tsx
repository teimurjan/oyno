/**
 * The wordmark: the Embrace mark as the first "o", then "yno". Shared by the site (React) and the
 * funnel (Preact), so it is the file `scripts/build-icons.ts` renders from `lib/mark.ts` rather
 * than inline SVG, whose attribute spelling the two disagree on.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/ico/wordmark.svg" alt="Oyno" width={50.38} height={20.82} className={`inline-block align-middle ${className}`} />
  );
}

export default Logo;
