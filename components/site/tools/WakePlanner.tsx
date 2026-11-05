"use client";

import { useState } from "react";
import type { WakeWords } from "@/lib/tools/copy/types";
import { deal, type DealtGame } from "@/lib/tools/deal";
import { bandOfMonths, FIRST_MONTH, formatClock, formatMonths, formatSleepHours, formatWindow, LAST_MONTH, MAX_NAPS, nextSleep, sleepHours, typicalNaps, wakeWindow } from "@/lib/tools/wakeWindows";
import { DealtGameCard, useGames } from "./DealtGameCard";
import { Choice, GoButton } from "./parts";

const START_MONTHS = 12;
const START_WOKE_AT = 7 * 60;

const minutesOfDay = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};
const timeValue = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;

export function WakePlanner({ lang, words, gamesRoot, minutesUnit }: { lang: string; words: WakeWords; gamesRoot: string; minutesUnit: string }) {
  const [months, setMonths] = useState(START_MONTHS);
  const [naps, setNaps] = useState(typicalNaps(START_MONTHS));
  const [wokeAt, setWokeAt] = useState(START_WOKE_AT);
  const [game, setGame] = useState<DealtGame | null>(null);
  const games = useGames(lang, true);

  const stretch = wakeWindow(months, naps);
  const sleep = nextSleep(wokeAt, stretch);
  const shown = game ?? (games && deal(games, { age: bandOfMonths(months), months }, undefined, () => 0));

  const changeAge = (value: number) => {
    setMonths(value);
    setNaps(typicalNaps(value));
    setGame(null);
  };

  return (
    <div className="card mt-8 p-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-5">
          <label className="block">
            <span className="eyebrow">{words.age}</span>
            <output className="num mt-1 block text-[20px] font-bold text-ink">{formatMonths(months, lang)}</output>
            <input type="range" min={FIRST_MONTH} max={LAST_MONTH} value={months} onChange={(event) => changeAge(Number(event.target.value))} className="mt-2 h-11 w-full accent-[var(--ink)]" />
          </label>
          <div className="[&_div]:justify-start">
            <Choice label={words.naps} options={Array.from({ length: MAX_NAPS + 1 }, (_, value) => ({ value, label: String(value) }))} value={naps} onChange={setNaps} />
          </div>
          <label className="block">
            <span className="eyebrow">{words.wokeAt}</span>
            <input type="time" value={timeValue(wokeAt)} onChange={(event) => event.target.value && setWokeAt(minutesOfDay(event.target.value))} className="field num mt-2 max-w-40" />
          </label>
        </div>

        <dl className="space-y-4" aria-live="polite">
          <div>
            <dt className="eyebrow">{words.window}</dt>
            <dd className="num mt-1 text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-ink">{formatWindow(stretch, lang)}</dd>
          </div>
          <div>
            <dt className="eyebrow">{words.nextSleep}</dt>
            <dd className="num mt-1 text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-ink">
              {formatClock(sleep.from, lang)} – {formatClock(sleep.to, lang)}
            </dd>
            {naps === 0 && <p className="mt-1 text-[14px] text-muted">{words.noNaps}</p>}
          </div>
          <div>
            <dt className="eyebrow">{words.sleep}</dt>
            <dd className="num mt-1 text-[16px] font-semibold text-slate">{formatSleepHours(sleepHours(months), lang)}</dd>
          </div>
        </dl>
      </div>

      <p className="mt-6 text-[13px] text-faint">{words.note}</p>

      {shown && (
        <div className="mt-6 border-t border-hairline pt-6">
          <h2 className="text-[19px] font-extrabold tracking-[-0.02em] text-ink">{words.gameTitle}</h2>
          <DealtGameCard game={shown} href={`${gamesRoot}/${shown.id}`} open={words.open} meta={minutesUnit.replace("{n}", String(shown.minutes))} />
          <div className="mt-4">
            <GoButton onClick={() => games && setGame(deal(games, { age: bandOfMonths(months), months }, shown.id))}>{words.another}</GoButton>
          </div>
        </div>
      )}
    </div>
  );
}
