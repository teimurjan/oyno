import type { JSX } from "preact";

/** The one stroked-icon frame. Lucide's geometry, so a glyph pasted from the package fits. */
export function Glyph({
  size,
  box,
  stroke,
  children,
}: {
  size: number;
  box: number;
  stroke: number;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox={`0 0 ${box} ${box}`}
      fill="none"
      stroke="currentColor"
      stroke-width={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {children}
    </svg>
  );
}

/** Filled rather than outlined: a thing that is already true. */
export function Tick() {
  return (
    <svg aria-hidden width="17" height="17" viewBox="0 0 20 20" className="fill-current">
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8Zm4.05 6.42-4.9 4.9a.8.8 0 0 1-1.13 0L5.95 10.7a.8.8 0 0 1 1.13-1.13l1.5 1.5 4.34-4.34a.8.8 0 0 1 1.13 1.13Z" />
    </svg>
  );
}

/** `Tick`'s opposite, for a thing that costs the reader. */
export function Cross() {
  return (
    <svg aria-hidden width="17" height="17" viewBox="0 0 20 20" className="fill-current">
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8Zm2.97 10.24a.8.8 0 1 1-1.13 1.13L10 11.13l-1.84 1.84a.8.8 0 0 1-1.13-1.13L8.87 10 7.03 8.16a.8.8 0 0 1 1.13-1.13L10 8.87l1.84-1.84a.8.8 0 0 1 1.13 1.13L11.13 10l1.84 1.84Z" />
    </svg>
  );
}
