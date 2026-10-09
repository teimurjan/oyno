"use client";

import { useEffect, useRef, useState } from "react";
import type { PlanetCopy } from "@/components/site/copy/types";
import { ART } from "@/lib/art/manifest";
import { fallbackSrc, srcSet } from "@/lib/art/srcSet";
import { bindFalloff, bindPress, scrollToCard, setPhase } from "@/lib/planet/dom";
import { cardBox, layerBox, tintFilter, WORLDS } from "@/lib/planet/scene";

/** The stage's widest, in CSS pixels: what `sizes` asks the renditions for. */
const STAGE_PX = 440;

/**
 * The landing hero's planet: press it and the layers lean away from the finger, let go and the
 * planet and the family grow, then the worlds open in a strip that scrolls sideways. The same
 * scene as the funnel's `PlanetStep`, bound through `lib/planet/dom.ts`. No tour here: the
 * hint line asks for the press instead.
 */
export function PlanetHero({ words }: { words: PlanetCopy }) {
  const stage = useRef<HTMLDivElement>(null);
  const hit = useRef<HTMLButtonElement>(null);
  const strip = useRef<HTMLDivElement>(null);
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
          <div className="planet-body">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="planet-layer planet-planet"
              src={fallbackSrc(ART.planet)}
              srcSet={srcSet(ART.planet)}
              sizes={`(max-width: 480px) 71vw, ${Math.round(STAGE_PX * 0.6 * 1.18)}px`}
              style={layerBox("planet")}
              alt=""
              fetchPriority="high"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="planet-layer planet-family"
              src={fallbackSrc(ART.family)}
              srcSet={srcSet(ART.family)}
              sizes={`(max-width: 480px) 52vw, ${Math.round(STAGE_PX * 0.44 * 1.18)}px`}
              style={layerBox("family")}
              alt="A parent, a child and another parent holding hands on a small clay planet"
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
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fallbackSrc(ART.planet)}
                        srcSet={srcSet(ART.planet)}
                        sizes={`${Math.round(STAGE_PX * 0.64 * 0.56)}px`}
                        style={{ ...cardBox("planet"), filter: tintFilter(world.tint, locked), opacity: locked ? 0.7 : 1 }}
                        alt=""
                      />
                      {!locked && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={fallbackSrc(ART.family)}
                          srcSet={srcSet(ART.family)}
                          sizes={`${Math.round(STAGE_PX * 0.64 * 0.41)}px`}
                          style={cardBox("family")}
                          alt=""
                        />
                      )}
                    </div>
                    <figcaption className="flex flex-col">
                      <span className="text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                        {words.worlds[world.id]}
                      </span>
                      <span className="text-[13px] font-semibold text-muted">
                        {locked ? words.unlocksAt.replace("{n}", String(world.unlocksAt)) : words.yours}
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
              <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <p className="mt-1 text-center text-[13px] font-semibold text-muted" aria-hidden>
        {open ? " " : words.hint}
      </p>
    </div>
  );
}
