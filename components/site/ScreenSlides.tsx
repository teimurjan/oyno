"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/site/Arrow";
import type { HomeCopy } from "@/components/site/copy/types";
import type { ListingFrame } from "@/lib/listingFrames";
import { bindStrip, scrollToSlide } from "@/lib/planet/dom";

/**
 * The proof section's screens, one at a time with its words beside it. A finger swipes or taps
 * the planet's arrows. The strip is bound through `lib/planet/dom.ts`, like the worlds.
 */
export function ScreenSlides({ frames, proof }: { frames: ListingFrame[]; proof: HomeCopy["proof"] }) {
  const strip = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!strip.current) return;
    return bindStrip(strip.current, setSelected);
  }, []);

  const go = (index: number) => strip.current && scrollToSlide(strip.current, index);
  const arrow = "absolute top-1/2 flex -translate-y-1/2";

  return (
    <div className="relative mt-10">
      <div
        ref={strip}
        role="list"
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {frames.map((frame) => (
          <figure
            key={frame.slug}
            role="listitem"
            className="m-0 grid flex-[0_0_100%] snap-center content-center gap-8 md:justify-center md:grid-cols-[260px_minmax(0,24rem)] md:items-center md:gap-14 md:px-16"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={frame.shot}
              alt=""
              width={260}
              height={565}
              loading="lazy"
              className="mx-auto w-[240px] rounded-[34px] shadow-[var(--glass-shadow)] ring-1 ring-black/5 md:w-[260px] md:rounded-[36px]"
            />
            <figcaption>
              <h3 className="text-[26px] font-extrabold tracking-[-0.02em] text-ink">
                {frame.caption.map((part, index) =>
                  part.highlighted ? (
                    <span key={index} className="hl">
                      {part.text}
                    </span>
                  ) : (
                    part.text
                  ),
                )}
              </h3>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">{proof.bodies[frame.slug]}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {selected > 0 && <Arrow side="left" label={proof.previous} onClick={() => go(selected - 1)} className={arrow} />}
      {selected < frames.length - 1 && (
        <Arrow side="right" label={proof.next} onClick={() => go(selected + 1)} className={arrow} />
      )}

      <div className="mt-8 flex justify-center gap-2" aria-hidden>
        {frames.map((frame, index) => (
          <span
            key={frame.slug}
            className={`h-1.5 rounded-full transition-all ${index === selected ? "w-5 bg-ink" : "w-1.5 bg-hairline"}`}
          />
        ))}
      </div>
    </div>
  );
}
