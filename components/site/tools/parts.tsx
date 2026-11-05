"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { ControlWords } from "@/lib/tools/copy/types";
import { SPEEDS, type Speed } from "@/lib/tools/rounds";

/** The pieces the browser tools share: the stage, the controls, and keeping the screen awake. */

/** Keeps the screen on while `active`. The browser drops the lock when the tab hides, so it
 * asks again on return. */
function useWakeLock(active: boolean) {
  useEffect(() => {
    if (!active || !("wakeLock" in navigator)) return;
    let lock: WakeLockSentinel | null = null;
    let ended = false;
    const request = () =>
      navigator.wakeLock.request("screen").then(
        (granted) => {
          if (ended) void granted.release();
          else lock = granted;
        },
        () => undefined,
      );
    const onVisible = () => {
      if (document.visibilityState === "visible") void request();
    };
    void request();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      ended = true;
      void lock?.release();
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [active]);
}

/** Runs a loop of timed phases while `running`, starting over from `first` each time. */
export function usePhases<Phase>(running: boolean, first: () => { phase: Phase; seconds: number }, next: (phase: Phase) => { phase: Phase; seconds: number }) {
  const [phase, setPhase] = useState<Phase | null>(null);
  const steps = useRef({ first, next });
  steps.current = { first, next };

  useEffect(() => {
    if (!running) {
      setPhase(null);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const enter = ({ phase: entered, seconds }: { phase: Phase; seconds: number }) => {
      setPhase(entered);
      timer = setTimeout(() => enter(steps.current.next(entered)), seconds * 1000);
    };
    enter(steps.current.first());
    return () => clearTimeout(timer);
  }, [running]);

  return phase;
}

/** The card a tool plays in: it holds the screen awake and can fill the screen, for a kid across the room. */
export function Stage({
  words,
  running,
  background,
  children,
}: {
  words: ControlWords;
  running: boolean;
  background?: string;
  children: ReactNode;
}) {
  const stage = useRef<HTMLDivElement>(null);
  const [canFill, setCanFill] = useState(false);
  const [filled, setFilled] = useState(false);
  useWakeLock(running);

  useEffect(() => {
    setCanFill(document.fullscreenEnabled);
    const onChange = () => setFilled(document.fullscreenElement === stage.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggle = () => {
    if (filled) void document.exitFullscreen();
    else void stage.current?.requestFullscreen();
  };

  return (
    <div
      ref={stage}
      style={background ? { background } : undefined}
      className="card relative mt-8 flex min-h-[420px] flex-col items-center justify-center gap-6 p-6 text-center transition-colors [&:fullscreen]:overflow-auto [&:fullscreen]:rounded-none [&:fullscreen]:bg-canvas"
    >
      {children}
      {canFill && (
        <button type="button" onClick={toggle} className="absolute right-4 top-4 h-11 rounded-full px-3 text-[13px] font-semibold text-slate underline underline-offset-4 hover:text-ink">
          {filled ? words.exitFullScreen : words.fullScreen}
        </button>
      )}
    </div>
  );
}

/** One choice from a row of pills, each big enough for a thumb. */
export function Choice<Value extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { value: Value; label: string }[];
  value: Value;
  onChange: (value: Value) => void;
}) {
  return (
    <fieldset>
      <legend className="eyebrow">{label}</legend>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
            className={`num h-11 min-w-11 rounded-full border px-4 text-[14px] font-semibold ${
              option.value === value ? "border-ink bg-white text-ink" : "border-hairline bg-white/40 text-muted hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function SpeedChoice({ words, value, onChange }: { words: ControlWords; value: Speed; onChange: (speed: Speed) => void }) {
  const options = SPEEDS.map((speed) => ({ value: speed, label: words[speed] }));
  return <Choice label={words.speed} options={options} value={value} onChange={onChange} />;
}

export function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex h-11 cursor-pointer items-center gap-2 text-[14px] font-semibold text-slate">
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-5 w-5 accent-[var(--ink)]" />
      {label}
    </label>
  );
}

/** The committing button. */
export function GoButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="btn w-auto min-w-40 px-8 text-[16px]">
      {children}
    </button>
  );
}
