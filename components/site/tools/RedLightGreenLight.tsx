"use client";

import { useEffect, useState } from "react";
import { beep, speak, stopSpeaking, unlockAudio } from "@/lib/tools/audio";
import type { ControlWords, LightWords } from "@/lib/tools/copy/types";
import { lightSeconds, type Speed } from "@/lib/tools/rounds";
import { GoButton, SpeedChoice, Stage, Toggle, usePhases } from "./parts";

type Light = "green" | "red";

// The game's own two colors, the one place red stands for something other than a cost.
const COLOR: Record<Light, string> = { green: "var(--good)", red: "var(--alert)" };
const TONE: Record<Light, number> = { green: 880, red: 330 };

export function RedLightGreenLight({ lang, words, controls }: { lang: string; words: LightWords; controls: ControlWords }) {
  const [speed, setSpeed] = useState<Speed>("medium");
  const [readAloud, setReadAloud] = useState(true);
  const [running, setRunning] = useState(false);

  const light = usePhases<Light>(
    running,
    () => ({ phase: "green", seconds: lightSeconds(speed) }),
    (current) => ({ phase: current === "green" ? "red" : "green", seconds: lightSeconds(speed) }),
  );

  useEffect(() => {
    if (!light) return stopSpeaking();
    beep(TONE[light]);
    if (readAloud) speak(words[light], lang);
  }, [light, readAloud, words, lang]);

  const start = () => {
    unlockAudio();
    setRunning(true);
  };

  return (
    <Stage words={controls} running={running} background={light ? COLOR[light] : undefined}>
      <p aria-live="assertive" className={light ? "text-[56px] font-extrabold leading-none tracking-[-0.03em] text-white sm:text-[84px]" : "max-w-md text-[20px] font-semibold text-slate"}>
        {light ? words[light] : words.ready}
      </p>
      {!running && (
        <>
          <SpeedChoice words={controls} value={speed} onChange={setSpeed} />
          <Toggle label={controls.readAloud} checked={readAloud} onChange={setReadAloud} />
        </>
      )}
      <GoButton onClick={running ? () => setRunning(false) : start}>{running ? controls.stop : controls.start}</GoButton>
    </Stage>
  );
}
