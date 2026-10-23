import { useEffect, useState } from "preact/hooks";

/**
 * Once per page load, not once per mount: a reader who steps back onto a widget gets the end
 * state rather than the performance a second time. No animation library — this bundle
 * hydrates the first paint.
 */

export { prefersReducedMotion } from "@/lib/motion";
import { prefersReducedMotion } from "@/lib/motion";

/** After the step's own entry animation has settled. */
export const REVEAL_DELAY_MS = 950;

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const played = new Set<string>();

const skips = (key: string): boolean => played.has(key) || prefersReducedMotion();

/** Eased 0 → 1 over `durationMs`, after `delayMs`. Jumps to 1 on a second visit. */
export function useRamp(key: string, delayMs: number, durationMs: number): number {
  const [progress, setProgress] = useState(() => (played.has(key) ? 1 : 0));

  useEffect(() => {
    if (skips(key)) {
      setProgress(1);
      return;
    }
    played.add(key);
    let frame = 0;
    let startedAt = 0;
    const tick = (now: number) => {
      const elapsed = Math.min(1, (now - startedAt) / durationMs);
      setProgress(easeInOutCubic(elapsed));
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };
    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame((now) => {
        startedAt = now;
        tick(now);
      });
    }, delayMs);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}

/** How many of `times` (ms after mount) have passed. Jumps to all of them on a second visit. */
export function useTimeline(key: string, times: number[]): number {
  const [passed, setPassed] = useState(() => (played.has(key) ? times.length : 0));

  useEffect(() => {
    if (skips(key)) {
      setPassed(times.length);
      return;
    }
    played.add(key);
    const timers = times.map((at, index) => window.setTimeout(() => setPassed(index + 1), at));
    return () => timers.forEach(window.clearTimeout);
  }, []);

  return passed;
}

/** How many of `count` items have arrived. Jumps to `count` on a second visit. */
export function useStagger(key: string, count: number, delayMs: number, everyMs: number): number {
  return useTimeline(
    key,
    Array.from({ length: count }, (_, index) => delayMs + index * everyMs),
  );
}
