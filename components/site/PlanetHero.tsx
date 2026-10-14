"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Arrow } from "@/components/site/Arrow";
import type { PlanetCopy } from "@/components/site/copy/types";
import { ART } from "@/lib/art/manifest";
import { fallbackSrc, srcSet } from "@/lib/art/srcSet";
import { bindPress, bindStrip, scrollToSlide, setPhase } from "@/lib/planet/dom";
import { layerBox, lockedStyle, STRIP_STYLE, WORLDS } from "@/lib/planet/scene";

/** The stage's widest, in CSS pixels: what `sizes` asks the renditions for. */
const STAGE_PX = 440;
const PLANET_SIZES = `(max-width: 480px) 60vw, ${Math.round(STAGE_PX * 0.6)}px`;
const FAMILY_SIZES = `(max-width: 480px) 44vw, ${Math.round(STAGE_PX * 0.44)}px`;

/** The world the planet rests on: a visitor has played no rounds, so the home planet. */
const REST = 0;

/**
 * The landing hero's planet: press it and the layers lean away from the finger, let go and the
 * planet and the family shrink in place into a strip of worlds that scrolls sideways. Tapping
 * the centred planet scrolls back home and grows it. The planet is the strip's first slide,
 * never swapped for another element. The same scene as the app's `PlanetScene`, bound
 * through `lib/planet/dom.ts`. No tour here: the hint line asks for the press instead.
 */
export function PlanetHero({ words }: { words: PlanetCopy }) {
  const stage = useRef<HTMLDivElement>(null);
  const hit = useRef<HTMLButtonElement>(null);
  const strip = useRef<HTMLDivElement>(null);
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

  return (
    <div className="mx-auto w-full" style={{ maxWidth: STAGE_PX }}>
      <div ref={stage} className="planet-stage" data-phase="rest">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="planet-layer planet-sky"
          src={fallbackSrc(ART.sky)}
          srcSet={srcSet(ART.sky)}
          sizes={`(max-width: 480px) 100vw, ${STAGE_PX}px`}
          style={layerBox("sky")}
          alt=""
          fetchPriority="high"
        />
        <div className="planet-float">
          <div ref={strip} className="planet-strip" style={STRIP_STYLE as CSSProperties} role="list" aria-label={words.open}>
            {WORLDS.map((world, index) => {
              const locked = world.unlocksAt > 0;
              const atRest = index === REST;
              return (
                <figure key={world.id} role="listitem" className="planet-slide m-0" data-rest={atRest || undefined}>
                  <div className="planet-slide-stage">
                    <div className="planet-body">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="planet-layer planet-planet"
                        src={fallbackSrc(ART.planets[world.id])}
                        srcSet={srcSet(ART.planets[world.id])}
                        sizes={PLANET_SIZES}
                        style={{ ...layerBox("planet"), ...lockedStyle(locked) }}
                        alt=""
                        fetchPriority={atRest ? "high" : undefined}
                        loading={atRest ? undefined : "lazy"}
                      />
                      {!locked && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className="planet-layer planet-family"
                          src={fallbackSrc(ART.family)}
                          srcSet={srcSet(ART.family)}
                          sizes={FAMILY_SIZES}
                          style={layerBox("family")}
                          alt={atRest ? "A parent, a child and another parent holding hands on a small clay planet" : ""}
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
                    <span className="text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                      {words.worlds[world.id]}
                    </span>
                    <span className="text-[13px] font-semibold text-muted">
                      {locked ? words.unlocksAt.replace("{n}", String(index + 1)) : words.yours}
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

        {open && selected > 0 && (
          <Arrow side="left" label={words.previous} onClick={() => go(selected - 1)} className="planet-arrow" />
        )}
        {open && selected < WORLDS.length - 1 && (
          <Arrow side="right" label={words.next} onClick={() => go(selected + 1)} className="planet-arrow" />
        )}
      </div>
      <p
        className={`mt-1 text-center text-[13px] font-semibold text-muted transition-opacity ${open ? "opacity-0" : ""}`}
        aria-hidden
      >
        {words.hint}
      </p>
    </div>
  );
}
