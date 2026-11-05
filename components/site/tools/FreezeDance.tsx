"use client";

import { useEffect, useRef, useState } from "react";
import type { ControlWords, FreezeWords } from "@/lib/tools/copy/types";
import { danceSeconds, freezeSeconds, TEMPO, type Speed } from "@/lib/tools/rounds";
import { createTune, type Tune } from "@/lib/tools/tune";
import { GoButton, SpeedChoice, Stage, usePhases } from "./parts";

type Phase = "dance" | "freeze";

export function FreezeDance({ words, controls }: { words: FreezeWords; controls: ControlWords }) {
  const [speed, setSpeed] = useState<Speed>("medium");
  const [running, setRunning] = useState(false);
  const tune = useRef<Tune | null>(null);

  const phase = usePhases<Phase>(
    running,
    () => ({ phase: "dance", seconds: danceSeconds(speed) }),
    (current) => (current === "dance" ? { phase: "freeze", seconds: freezeSeconds() } : { phase: "dance", seconds: danceSeconds(speed) }),
  );

  useEffect(() => {
    if (phase === "dance") tune.current?.play(TEMPO[speed]);
    else tune.current?.stop();
  }, [phase, speed]);

  useEffect(() => () => tune.current?.stop(), []);

  const start = () => {
    tune.current ??= createTune();
    setRunning(true);
  };

  return (
    <Stage words={controls} running={running} background={phase === "freeze" ? "var(--pastel-lavender)" : phase === "dance" ? "var(--pastel-amber)" : undefined}>
      <p aria-live="assertive" className={phase ? "text-[64px] font-extrabold leading-none tracking-[-0.03em] text-ink sm:text-[88px]" : "max-w-md text-[20px] font-semibold text-slate"}>
        {phase === "freeze" ? words.freeze : phase === "dance" ? words.dance : words.ready}
      </p>
      <SpeedChoice words={controls} value={speed} onChange={setSpeed} />
      <GoButton onClick={running ? () => setRunning(false) : start}>{running ? controls.stop : controls.start}</GoButton>
    </Stage>
  );
}
