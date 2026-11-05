"use client";

import { useEffect, useRef, useState } from "react";
import { ringAfter, unlockAudio } from "@/lib/tools/audio";
import type { ControlWords, TimerWords } from "@/lib/tools/copy/types";
import { formatCountdown } from "@/lib/tools/rounds";
import { Choice, GoButton, Stage } from "./parts";

const PRESETS = [1, 2, 3, 5, 10, 15, 20, 30, 60];
const MAX_MINUTES = 180;
const TICK_MS = 200;

type Clock =
  | { phase: "idle" }
  | { phase: "running"; endsAt: number }
  | { phase: "paused"; left: number }
  | { phase: "done" };

export function VisualTimer({ words, controls }: { words: TimerWords; controls: ControlWords }) {
  const [minutes, setMinutes] = useState(5);
  const [clock, setClock] = useState<Clock>({ phase: "idle" });
  const [now, setNow] = useState(0);
  const cancelBell = useRef<() => void>(() => undefined);

  const total = minutes * 60_000;
  const left =
    clock.phase === "running" ? Math.max(0, clock.endsAt - now) : clock.phase === "paused" ? clock.left : clock.phase === "done" ? 0 : total;

  useEffect(() => {
    if (clock.phase !== "running") return;
    const tick = () => {
      const current = Date.now();
      setNow(current);
      if (current >= clock.endsAt) setClock({ phase: "done" });
    };
    tick();
    const timer = setInterval(tick, TICK_MS);
    return () => clearInterval(timer);
  }, [clock]);

  useEffect(() => () => cancelBell.current(), []);

  const run = (milliseconds: number) => {
    unlockAudio();
    cancelBell.current();
    cancelBell.current = ringAfter(milliseconds / 1000);
    const current = Date.now();
    setNow(current);
    setClock({ phase: "running", endsAt: current + milliseconds });
  };
  const pause = () => {
    cancelBell.current();
    setClock({ phase: "paused", left });
  };
  const reset = () => {
    cancelBell.current();
    setClock({ phase: "idle" });
  };

  const fraction = total > 0 ? left / total : 0;
  const idle = clock.phase === "idle";

  return (
    <Stage words={controls} running={clock.phase === "running"}>
      <svg viewBox="0 0 100 100" className="h-[min(56vh,320px)] w-[min(56vh,320px)]" aria-hidden>
        <circle cx="50" cy="50" r="49" fill="var(--surface)" stroke="var(--hairline)" strokeWidth="0.5" />
        <circle
          cx="50"
          cy="50"
          r="24"
          fill="none"
          stroke="var(--amber)"
          strokeWidth="48"
          pathLength={1}
          strokeDasharray={`${fraction} 1`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <p className="num text-[44px] font-extrabold leading-none tracking-[-0.02em] text-ink" role="timer">
        {clock.phase === "done" ? words.done : formatCountdown(left)}
      </p>

      {idle && (
        <div className="flex flex-col items-center gap-4">
          <Choice label={words.minutes} options={PRESETS.map((value) => ({ value, label: String(value) }))} value={minutes} onChange={setMinutes} />
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={MAX_MINUTES}
            value={minutes}
            aria-label={words.minutes}
            onChange={(event) => setMinutes(Math.min(MAX_MINUTES, Math.max(1, Math.floor(Number(event.target.value)) || 1)))}
            className="field num w-24 text-center"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        {idle && <GoButton onClick={() => run(total)}>{controls.start}</GoButton>}
        {clock.phase === "running" && <GoButton onClick={pause}>{controls.pause}</GoButton>}
        {clock.phase === "paused" && <GoButton onClick={() => run(clock.left)}>{controls.resume}</GoButton>}
        {!idle && (
          <button type="button" onClick={reset} className="h-11 px-4 text-[14px] font-semibold text-slate underline underline-offset-4 hover:text-ink">
            {controls.reset}
          </button>
        )}
      </div>
    </Stage>
  );
}
