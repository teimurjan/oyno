import { prefersReducedMotion } from "@/lib/motion";
import { DEPTH, SCALE, layerOffset, neighborStyle, type LayerName, type Phase, type Point } from "./scene";

/**
 * The planet scene's browser half, framework-free so the React hero and the Preact widget
 * bind the same code. Everything here writes CSS custom properties on the stage; the
 * transforms themselves live in `app/globals.css`.
 */

const NAMES: LayerName[] = ["sky", "planet", "family"];


/** Sets the stage's phase and the scale every layer has in it. */
export function setPhase(stage: HTMLElement, phase: Phase): void {
  stage.dataset.phase = phase;
  stage.style.setProperty("--sky-s", String(SCALE[phase].sky));
  stage.style.setProperty("--body-s", String(SCALE[phase].body));
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

/** Scales and fades each gallery card by its distance from the strip's centre. */
export function bindFalloff(strip: HTMLElement): () => void {
  let frame = 0;
  const paint = () => {
    frame = 0;
    const centre = strip.scrollLeft + strip.clientWidth / 2;
    for (const card of Array.from(strip.children) as HTMLElement[]) {
      const distance = (card.offsetLeft + card.offsetWidth / 2 - centre) / card.offsetWidth;
      const { scale, opacity } = neighborStyle(distance);
      card.style.setProperty("--card-scale", String(scale));
      card.style.setProperty("--card-opacity", String(opacity));
    }
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

/** Scrolls the strip so card `index` is centred. */
export function scrollToCard(strip: HTMLElement, index: number, smooth = true): void {
  const card = strip.children[index] as HTMLElement | undefined;
  if (!card) return;
  strip.scrollTo({
    left: card.offsetLeft + card.offsetWidth / 2 - strip.clientWidth / 2,
    behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
  });
}
