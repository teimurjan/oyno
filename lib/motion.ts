/** False on the server, where nothing animates anyway. */
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
