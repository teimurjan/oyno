"use client";

import { useEffect, useState } from "react";
import { speak, stopSpeaking, unlockAudio } from "@/lib/tools/audio";
import type { ControlWords, SimonWords } from "@/lib/tools/copy/types";
import { callSeconds, nextCall, type Call, type Speed } from "@/lib/tools/rounds";
import { GoButton, SpeedChoice, Stage, Toggle, usePhases } from "./parts";

const capitalized = (text: string) => text[0].toUpperCase() + text.slice(1);

export function SimonSays({ lang, words, controls }: { lang: string; words: SimonWords; controls: ControlWords }) {
  const [speed, setSpeed] = useState<Speed>("medium");
  const [tricks, setTricks] = useState(true);
  const [readAloud, setReadAloud] = useState(true);
  const [running, setRunning] = useState(false);

  const call = usePhases<Call>(
    running,
    () => ({ phase: nextCall(words.commands.length, null, tricks), seconds: callSeconds(speed) }),
    (current) => ({ phase: nextCall(words.commands.length, current, tricks), seconds: callSeconds(speed) }),
  );

  const line = call && (call.says ? words.says.replace("{command}", words.commands[call.index]) : `${capitalized(words.commands[call.index])}!`);

  useEffect(() => {
    if (!call) return stopSpeaking();
    if (readAloud && line) speak(line, lang);
    // Each call speaks once, and turning the voice off mid-call only stops the next one.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [call]);

  const start = () => {
    unlockAudio();
    setRunning(true);
  };

  return (
    <Stage words={controls} running={running}>
      <p aria-live="assertive" className={call ? "max-w-2xl text-[36px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[52px]" : "max-w-md text-[20px] font-semibold text-slate"}>
        {line ?? words.ready}
      </p>
      {!running && (
        <>
          <SpeedChoice words={controls} value={speed} onChange={setSpeed} />
          <div className="flex flex-wrap justify-center gap-5">
            <Toggle label={words.tricks} checked={tricks} onChange={setTricks} />
            <Toggle label={controls.readAloud} checked={readAloud} onChange={setReadAloud} />
          </div>
        </>
      )}
      <GoButton onClick={running ? () => setRunning(false) : start}>{running ? controls.stop : controls.start}</GoButton>
    </Stage>
  );
}
