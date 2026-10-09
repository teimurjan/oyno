import { useEffect, useRef, useState } from "preact/hooks";
import { ART } from "@/lib/art/manifest";
import { fallbackSrc, srcSet } from "@/lib/art/srcSet";
import { prefersReducedMotion } from "@/lib/motion";
import { bindFalloff, bindPress, scrollToCard, setOffset, setPhase } from "@/lib/planet/dom";
import { cardBox, layerBox, tintFilter, WORLDS } from "@/lib/planet/scene";
import { fill, useLocale } from "./locale";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** The stage's widest, in CSS pixels: what `sizes` asks the renditions for. */
const STAGE_PX = 260;

/** The tour, in ms from its start: press, grow, browse two worlds, close, rest, repeat. */
const TOUR = { press: 900, open: 1300, next: 2700, after: 3900, close: 5400, loop: 7400 };

/**
 * Widget B: the reward. Press the planet and the layers lean away from the finger; let go and
 * the planet and the family grow, then the worlds open in a strip that scrolls sideways.
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

  useEffect(() => {
    if (!stage.current || !hit.current) return;
    setPhase(stage.current, "rest");
    return bindPress(stage.current, hit.current);
  }, []);

  useEffect(() => {
    if (stage.current) setPhase(stage.current, open ? "grown" : "rest");
    if (!open || !strip.current) return;
    scrollToCard(strip.current, 0, false);
    return bindFalloff(strip.current);
  }, [open]);

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
      at(TOUR.next, () => strip.current && scrollToCard(strip.current, 1));
      at(TOUR.after, () => strip.current && scrollToCard(strip.current, 2));
      at(TOUR.close, () => setOpen(false));
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
            <div className="planet-body">
              <img
                className="planet-layer planet-planet"
                src={fallbackSrc(ART.planet)}
                srcset={srcSet(ART.planet)}
                sizes={`${Math.round(STAGE_PX * 0.6 * 1.18)}px`}
                style={layerBox("planet")}
                alt=""
                decoding="async"
              />
              <img
                className="planet-layer planet-family"
                src={fallbackSrc(ART.family)}
                srcset={srcSet(ART.family)}
                sizes={`${Math.round(STAGE_PX * 0.44 * 1.18)}px`}
                style={layerBox("family")}
                alt=""
                decoding="async"
              />
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

          {open && (
            <div className="planet-gallery">
              <div ref={strip} className="planet-strip" role="list" aria-label={words.open}>
                {WORLDS.map((world) => {
                  const locked = world.unlocksAt > 0;
                  return (
                    <figure key={world.id} role="listitem" className="planet-card m-0">
                      <div className="planet-card-art">
                        <img
                          src={fallbackSrc(ART.planet)}
                          srcset={srcSet(ART.planet)}
                          sizes={`${Math.round(STAGE_PX * 0.64 * 0.56)}px`}
                          style={{ ...cardBox("planet"), filter: tintFilter(world.tint, locked), opacity: locked ? 0.7 : 1 }}
                          alt=""
                          decoding="async"
                        />
                        {!locked && (
                          <img
                            src={fallbackSrc(ART.family)}
                            srcset={srcSet(ART.family)}
                            sizes={`${Math.round(STAGE_PX * 0.64 * 0.41)}px`}
                            style={cardBox("family")}
                            alt=""
                            decoding="async"
                          />
                        )}
                      </div>
                      <figcaption className="flex flex-col">
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
              <button
                type="button"
                aria-label={words.close}
                onClick={() => setOpen(false)}
                className="card absolute right-0 top-0 flex size-11 items-center justify-center text-ink"
              >
                <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
