import { prefersReducedMotion } from "@/lib/motion";
import { BODY_SCALE, DEPTH, layerOffset, slideFocus, type LayerName, type Phase, type Point } from "./scene";

/**
 * The planet scene's browser half, framework-free so the React hero and the Preact widget
 * bind the same code. Everything here writes CSS custom properties on the stage; the
 * transforms themselves live in `app/globals.css`.
 */

const NAMES: LayerName[] = ["sky", "planet", "family"];

/** Sets the stage's phase and the body's scale in it. */
export function setPhase(stage: HTMLElement, phase: Phase): void {
  stage.dataset.phase = phase;
  stage.style.setProperty("--body-s", String(BODY_SCALE[phase]));
  if (phase !== "pressed") setOffset(stage, null);
}

/** Shifts each layer by its depth, as if the stage were pressed at `pointer`. Null recentres. */
export function setOffset(stage: HTMLElement, pointer: Point | null): void {
  const rect = stage.getBoundingClientRect();
  for (const name of NAMES) {
    const offset = pointer && !prefersReducedMotion() ? layerOffset(pointer, rect, DEPTH[name]) : { x: 0, y: 0 };
    stage.style.setProperty(`--${name}-x`, `${offset.x}px`);
    stage.style.setProperty(`--${name}-y`, `${offset.y}px`);
  }
}

/**
 * The press: the layers lean away from the finger while it is down and follow it as it moves.
 * The tap itself is the caller's `<button>` click, so a keyboard opens the gallery too.
 */
export function bindPress(stage: HTMLElement, target: HTMLElement): () => void {
  let pressed = false;
  const at = (event: PointerEvent): Point => ({ x: event.clientX, y: event.clientY });

  const down = (event: PointerEvent) => {
    pressed = true;
    setPhase(stage, "pressed");
    setOffset(stage, at(event));
  };
  const move = (event: PointerEvent) => {
    if (pressed) setOffset(stage, at(event));
  };
  const release = () => {
    if (!pressed) return;
    pressed = false;
    if (stage.dataset.phase === "pressed") setPhase(stage, "rest");
  };

  target.addEventListener("pointerdown", down);
  target.addEventListener("pointermove", move);
  target.addEventListener("pointerup", release);
  target.addEventListener("pointercancel", release);
  target.addEventListener("pointerleave", release);
  return () => {
    target.removeEventListener("pointerdown", down);
    target.removeEventListener("pointermove", move);
    target.removeEventListener("pointerup", release);
    target.removeEventListener("pointercancel", release);
    target.removeEventListener("pointerleave", release);
  };
}

/**
 * Focuses each of the strip's slides by its distance from the strip's centre, and reports the
 * centred slide's index whenever it changes.
 */
export function bindStrip(strip: HTMLElement, onSelect: (index: number) => void): () => void {
  let frame = 0;
  let selected = -1;
  const paint = () => {
    frame = 0;
    const centre = strip.scrollLeft + strip.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Infinity;
    (Array.from(strip.children) as HTMLElement[]).forEach((slide, index) => {
      const distance = (slide.offsetLeft + slide.offsetWidth / 2 - centre) / slide.offsetWidth;
      slide.style.setProperty("--focus", String(slideFocus(distance)));
      if (Math.abs(distance) < nearestDistance) {
        nearest = index;
        nearestDistance = Math.abs(distance);
      }
    });
    if (nearest === selected) return;
    selected = nearest;
    onSelect(nearest);
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(paint);
  };
  paint();
  strip.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  return () => {
    cancelAnimationFrame(frame);
    strip.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}

/** Scrolls the strip so slide `index` is centred. */
export function scrollToSlide(strip: HTMLElement, index: number, smooth = true): void {
  const slide = strip.children[index] as HTMLElement | undefined;
  if (!slide) return;
  strip.scrollTo({
    left: slide.offsetLeft + slide.offsetWidth / 2 - strip.clientWidth / 2,
    behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
  });
}
