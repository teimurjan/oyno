import type { ToolSlug } from "@/lib/tools";

/**
 * The words of the free tools in one language. Everything a browser component reads is a plain
 * string, because a function cannot cross from the server to the browser. `{command}` is the one
 * placeholder, and the units and clock times come from `Intl`.
 */
export interface ToolPageWords {
  /** On a card and in the trail. */
  name: string;
  title: string;
  metaTitle: string;
  /** Under the heading, and the meta description. */
  description: string;
  how: readonly string[];
  faq: readonly { q: string; a: string }[];
}

export interface ControlWords {
  start: string;
  stop: string;
  pause: string;
  resume: string;
  reset: string;
  fullScreen: string;
  exitFullScreen: string;
  readAloud: string;
  speed: string;
  slow: string;
  medium: string;
  fast: string;
}

export interface TimerWords {
  minutes: string;
  done: string;
}

export interface FreezeWords {
  ready: string;
  dance: string;
  freeze: string;
}

export interface LightWords {
  ready: string;
  green: string;
  red: string;
}

export interface SimonWords {
  ready: string;
  /** A call that counts, with `{command}` where the move goes. */
  says: string;
  tricks: string;
  ideasTitle: string;
  /** The moves, starting lower case. */
  commands: readonly string[];
}

export interface PickerWords {
  title: string;
  age: string;
  energy: string;
  any: string;
  deal: string;
  another: string;
  open: string;
}

export interface WakeWords {
  age: string;
  naps: string;
  wokeAt: string;
  window: string;
  nextSleep: string;
  noNaps: string;
  sleep: string;
  note: string;
  gameTitle: string;
  another: string;
  open: string;
  table: { title: string; age: string; naps: string; window: string; sleep: string };
}

export interface ToolsCopy {
  crumb: string;
  index: { title: string; intro: string; metaTitle: string; pickerName: string; pickerBlurb: string };
  howTitle: string;
  faqTitle: string;
  /** Before a tool's name, on a game it can run. */
  gameLink: string;
  controls: ControlWords;
  timer: TimerWords;
  freeze: FreezeWords;
  light: LightWords;
  simon: SimonWords;
  picker: PickerWords;
  wake: WakeWords;
  pages: Record<ToolSlug, ToolPageWords>;
}
