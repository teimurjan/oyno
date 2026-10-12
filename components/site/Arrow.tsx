/** A round glass button that steps one slide over. The caller positions it. */
export function Arrow({
  side,
  label,
  onClick,
  className,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`card size-11 items-center justify-center text-ink ${side === "left" ? "left-0" : "right-0"} ${className}`}
    >
      <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d={side === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}
