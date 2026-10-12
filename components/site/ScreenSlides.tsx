"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/site/Arrow";
import type { HomeCopy } from "@/components/site/copy/types";
import { bindStrip, scrollToSlide } from "@/lib/planet/dom";

/**
 * The proof section's screens, one at a time with its words beside it. A finger swipes, a
 * mouse gets the planet's arrows. The strip is bound through `lib/planet/dom.ts`, like the worlds.
 */
export function ScreenSlides({ proof }: { proof: HomeCopy["proof"] }) {
  const strip = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!strip.current) return;
    return bindStrip(strip.current, setSelected);
  }, []);

  const go = (index: number) => strip.current && scrollToSlide(strip.current, index);
  const arrow = "absolute top-1/2 hidden -translate-y-1/2 pointer-fine:flex";

  return (
    <div className="relative mt-10">
      <div
        ref={strip}
        role="list"
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {proof.steps.map((step) => (
          <figure
            key={step.shot}
            role="listitem"
            className="m-0 grid flex-[0_0_100%] snap-center content-center gap-8 md:justify-center md:grid-cols-[260px_minmax(0,24rem)] md:items-center md:gap-14 md:px-16"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={step.shot}
              alt=""
              width={260}
              height={565}
              loading="lazy"
              className="mx-auto w-[240px] rounded-[34px] shadow-[var(--glass-shadow)] ring-1 ring-black/5 md:w-[260px] md:rounded-[36px]"
            />
            <figcaption>
              <h3 className="text-[26px] font-extrabold tracking-[-0.02em] text-ink">{step.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">{step.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {selected > 0 && <Arrow side="left" label={proof.previous} onClick={() => go(selected - 1)} className={arrow} />}
      {selected < proof.steps.length - 1 && (
        <Arrow side="right" label={proof.next} onClick={() => go(selected + 1)} className={arrow} />
      )}

      <div className="mt-8 flex justify-center gap-2" aria-hidden>
        {proof.steps.map((step, index) => (
          <span
            key={step.shot}
            className={`h-1.5 rounded-full transition-all ${index === selected ? "w-5 bg-ink" : "w-1.5 bg-hairline"}`}
          />
        ))}
      </div>
    </div>
  );
}
