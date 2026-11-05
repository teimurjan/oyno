"use client";

import { useEffect, useState } from "react";
import type { DealtGame } from "@/lib/tools/deal";
import { gamesPath } from "@/lib/tools/deal";

/** The games, fetched only once `wanted`, so a reader who never deals never downloads them. */
export function useGames(lang: string, wanted: boolean): readonly DealtGame[] | null {
  const [games, setGames] = useState<readonly DealtGame[] | null>(null);
  useEffect(() => {
    if (!wanted || games) return;
    let current = true;
    fetch(gamesPath(lang))
      .then((response) => response.json() as Promise<DealtGame[]>)
      .then((loaded) => {
        if (current) setGames(loaded);
      })
      .catch(() => undefined);
    return () => {
      current = false;
    };
  }, [lang, wanted, games]);
  return games;
}

/** A dealt game whole: it can be played from here, and links to its own page. */
export function DealtGameCard({ game, href, meta, open }: { game: DealtGame; href: string; meta: string; open: string }) {
  return (
    <article className="mt-5 grid items-start gap-5 text-left sm:grid-cols-[minmax(0,1fr)_160px]">
      <div>
        <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink">{game.title}</h3>
        <p className="num mt-1 text-[13px] text-faint">{meta}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{game.blurb}</p>
        <ol className="mt-4 space-y-2">
          {game.steps.map((step, index) => (
            <li key={step} className="flex gap-3 text-[15px] leading-relaxed text-slate">
              <span className="num flex h-6 w-6 flex-none items-center justify-center rounded-full border border-hairline bg-white text-[12px] font-bold text-ink">{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <a href={href} className="mt-4 inline-block py-2 text-[14px] font-semibold text-ink underline underline-offset-4">{open}</a>
      </div>
      {game.art && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={game.art} alt="" width={160} height={160} loading="lazy" className="aspect-square w-full max-w-[160px] object-contain" />
      )}
    </article>
  );
}
