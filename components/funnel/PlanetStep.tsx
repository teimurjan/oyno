import { useEffect, useRef, useState } from "preact/hooks";
import { ART } from "@/lib/art/manifest";
import { fallbackSrc, srcSet } from "@/lib/art/srcSet";
import { prefersReducedMotion } from "@/lib/motion";
import { bindPress, bindStrip, scrollToSlide, setOffset, setPhase } from "@/lib/planet/dom";
import { layerBox, STRIP_STYLE, tintFilter, WORLDS } from "@/lib/planet/scene";
import { fill, useLocale } from "./locale";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** The stage's widest, in CSS pixels: what `sizes` asks the renditions for. */
const STAGE_PX = 260;
const PLANET_SIZES = `${Math.round(STAGE_PX * 0.6)}px`;
const FAMILY_SIZES = `${Math.round(STAGE_PX * 0.44)}px`;

/** The world the planet rests on: the reader has played no rounds, so the home planet. */
const REST = 0;

/** The tour, in ms from its start: press, shrink into the worlds, browse two, come home, grow back, rest, repeat. */
const TOUR = { press: 900, open: 1300, next: 2700, after: 3900, back: 5300, close: 6300, loop: 8300 };

/**
 * Widget B: the reward. Press the planet and the layers lean away from the finger; let go and
 * the planet and the family shrink in place into a strip of worlds that scrolls sideways.
 * Tapping the centred planet scrolls back home and grows it. The planet is the strip's first
 * slide, never swapped for another element.
 *
 * It tours itself on a loop until the first touch, so a reader who never taps still sees the
 * worlds. Nothing here is unlocked yet but the home planet: the reader has played no rounds.
 */
export function PlanetStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const words = useLocale().copy.planet;
  const stage = useRef<HTMLDivElement>(null);
  const hit = useRef<HTMLButtonElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const stopTour = useRef<(() => void) | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(REST);

  useEffect(() => {
    if (!stage.current || !hit.current || !strip.current) return;
    setPhase(stage.current, "rest");
    const unbindPress = bindPress(stage.current, hit.current);
    const unbindStrip = bindStrip(strip.current, setSelected);
    return () => {
      unbindPress();
      unbindStrip();
    };
  }, []);

  useEffect(() => {
    if (stage.current) setPhase(stage.current, open ? "open" : "rest");
  }, [open]);

  const go = (index: number) => strip.current && scrollToSlide(strip.current, index);
  const close = () => {
    setOpen(false);
    go(REST);
  };

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timers: number[] = [];
    const at = (ms: number, run: () => void) => timers.push(window.setTimeout(run, ms));
    const tour = () => {
      at(TOUR.press, () => {
        const target = stage.current;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        setPhase(target, "pressed");
        setOffset(target, { x: rect.left + rect.width * 0.75, y: rect.top + rect.height * 0.35 });
      });
      at(TOUR.open, () => setOpen(true));
      at(TOUR.next, () => go(1));
      at(TOUR.after, () => go(2));
      at(TOUR.back, () => go(REST));
      at(TOUR.close, close);
      at(TOUR.loop, tour);
    };
    const stop = () => {
      timers.forEach(window.clearTimeout);
      timers = [];
      stopTour.current = null;
    };
    stopTour.current = stop;
    tour();
    return stop;
  }, []);

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="mx-auto w-full" style={{ maxWidth: STAGE_PX }} onPointerDownCapture={() => stopTour.current?.()}>
        <div ref={stage} className="planet-stage" data-phase="rest">
          <img
            className="planet-layer planet-sky"
            src={fallbackSrc(ART.sky)}
            srcset={srcSet(ART.sky)}
            sizes={`${STAGE_PX}px`}
            style={layerBox("sky")}
            alt=""
            decoding="async"
          />
          <div className="planet-float">
            <div ref={strip} className="planet-strip" style={STRIP_STYLE} role="list" aria-label={words.open}>
              {WORLDS.map((world, index) => {
                const locked = world.unlocksAt > 0;
                const atRest = index === REST;
                return (
                  <figure key={world.id} role="listitem" className="planet-slide m-0" data-rest={atRest || undefined}>
                    <div className="planet-slide-stage">
                      <div className="planet-body">
                        <img
                          className="planet-layer planet-planet"
                          src={fallbackSrc(ART.planet)}
                          srcset={srcSet(ART.planet)}
                          sizes={PLANET_SIZES}
                          style={{ ...layerBox("planet"), filter: tintFilter(world.tint, locked), opacity: locked ? 0.7 : 1 }}
                          alt=""
                          decoding="async"
                        />
                        {!locked && (
                          <img
                            className="planet-layer planet-family"
                            src={fallbackSrc(ART.family)}
                            srcset={srcSet(ART.family)}
                            sizes={FAMILY_SIZES}
                            style={layerBox("family")}
                            alt=""
                            decoding="async"
                          />
                        )}
                        <button
                          type="button"
                          className="planet-hit"
                          aria-label={index === selected ? words.close : words.worlds[world.id]}
                          tabIndex={open ? 0 : -1}
                          onClick={() => (index === selected ? close() : go(index))}
                        />
                      </div>
                    </div>
                    <figcaption className="planet-caption">
                      <span className="text-[15px] font-extrabold tracking-[-0.02em] text-ink">
                        {words.worlds[world.id]}
                      </span>
                      <span className="text-[12.5px] font-semibold text-muted">
                        {locked ? fill(words.unlocksAt, { n: world.unlocksAt }) : words.yours}
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>

          <button
            ref={hit}
            type="button"
            className="planet-hit"
            aria-label={words.open}
            aria-expanded={open}
            tabIndex={open ? -1 : 0}
            onClick={() => setOpen(true)}
          />

          {open && selected > 0 && <Arrow side="left" label={words.previous} onClick={() => go(selected - 1)} />}
          {open && selected < WORLDS.length - 1 && (
            <Arrow side="right" label={words.next} onClick={() => go(selected + 1)} />
          )}
        </div>
      </div>
    </>
  );
}

/** One world over. Shown only where there is a mouse: a finger swipes. */
function Arrow({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`planet-arrow card size-11 items-center justify-center text-ink ${side === "left" ? "left-0" : "right-0"}`}
    >
      <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d={side === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}
