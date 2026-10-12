/**
 * The web funnel's shape, as data: which steps, in what order, asking what. `FunnelShell`
 * renders a step by its `kind`, so reordering or adding a step costs an entry here, its words
 * in every deck under `copy/`, and no component.
 *
 * **Nothing here is in a language.** The words live in `copy/<tag>.ts`, keyed by step id,
 * question key and option value, and `stepAt` puts the two together for one reader. Keys and
 * values are what analytics, `sessionStorage` and the Dodo subscription record, so they stay
 * the same in every language and are never reworded once an ad points at them.
 *
 * The app reads these decks too: `bun run funnel:export-ios` writes them into its bundle for
 * `PaywallScreen.swift`, so a step of a new `kind` needs `FunnelContent.swift` to decode it
 * before the script will write it.
 */

import type { FunnelCopy } from "./copy/types";
import { validateFunnel, type FunnelSpine } from "./steps.validate";

export type FunnelStepKind =
  | "question"
  /** A headline and a line or two, read rather than answered. */
  | "statement"
  /** An example evening as a calendar, the phone interrupting the kid's hours. Self-running. */
  | "evening"
  /** The feeds the apps are built around, drifting and knocking at the reader. */
  | "apps"
  /** Blocking against playing: what they tried, struck through, and one real game. */
  | "alternative"
  /** Ten minutes of play against an hour sitting nearby, pros against cons. */
  | "compare"
  /** Their plan being built from their answers. Continue waits for it. */
  | "plan"
  | "account"
  | "paywall"
  | "checkout";

export interface OptionShape {
  /** Stored, reported, and stamped onto the Dodo subscription. Never reworded once an ad
   * points at it. */
  value: string;
  /** Kept off the title on purpose: the title is what a chart, a plan line and a transaction
   * read, and a glyph in the middle of that is one somebody has to strip later. */
  emoji?: string;
}

export interface QuestionShape {
  /** Names the answer in `sessionStorage`, as an Amplitude user property, as a key on the
   * Dodo subscription, and as the question's entry in every copy deck. Never translated. */
  key: QuestionKey;
  /** Several answers at once, stored as a `MULTI_SEPARATOR`-joined string. A multi question
   * cannot auto-advance, so it keeps the footer's Continue. */
  multi?: boolean;
  options: OptionShape[];
}

export interface StepShape {
  /** Stable across a reorder, unlike the index — this is what analytics reports as `step`,
   * and the step's entry in every copy deck. */
  id: string;
  kind: FunnelStepKind;
  question?: QuestionShape;
  /** Reads differently by an earlier answer: the variant under the reader's answer overlays
   * the step's own copy line by line, and no answer leaves the step's own copy standing. */
  branch?: { on: QuestionKey };
}

/** The keys a deck has to word. `problem` is step 0's; the rest follow in step order. */
export type QuestionKey = keyof FunnelCopy["questions"];

export interface FunnelOption extends OptionShape {
  title: string;
}

/** A question as one reader sees it: the shape with its deck's words laid over it. */
export interface FunnelQuestion {
  key: string;
  headline: string;
  description?: string;
  multi?: boolean;
  options: FunnelOption[];
}

export interface StatementCopy {
  /** `[bracketed]` marks the span that gets the accent. */
  headline: string;
  body?: string;
  /** A quiet centred line tucked under the headline. What it says is a fact about who is
   * already here, not part of the argument — the argument is the headline. */
  note?: string;
}

/** A step as one reader sees it. */
export interface FunnelStep extends StatementCopy {
  id: string;
  kind: FunnelStepKind;
  question?: FunnelQuestion;
  /** `fallback` is the opener's problem: what the step reads when the answer names no variant,
   * so a reader who said "not really" is argued the opener's case rather than the default one. */
  branch?: { on: string; variants: Record<string, Partial<StatementCopy>>; fallback?: string };
}

export type FunnelAnswers = Record<string, string>;

/** A separator no option value contains, so a joined answer can be split back apart. */
export const MULTI_SEPARATOR = "|";

/** The four problems the ads name and step 0 asks between. */
export const PROBLEMS = ["scroll", "ideas", "asks", "both"] as const;

export type Problem = (typeof PROBLEMS)[number];

const PROBLEM: QuestionShape = {
  key: "problem",
  options: [
    { value: "scroll", emoji: "📱" },
    { value: "ideas", emoji: "🥱" },
    { value: "asks", emoji: "🙋" },
    { value: "both", emoji: "👀" },
  ],
};

/** The opener's "Not really". Not a problem, so the account step has no card for it; a branching
 * step falls back to the opener's own problem rather than to the default copy. */
const OPENER_DECLINED = "none";

/** The problem the one opener asks about: the phone eating the evening. */
const OPENER_PROBLEM: Problem = "scroll";

/** Names the opener in Amplitude's `opener` user property. */
export const OPENER_ID = "evening";

/**
 * Step 0 for every web visit: one yes/no on the phone eating the evening. Same `key` as
 * `PROBLEM` and "Yes" is `scroll`, so the branch and the Amplitude join read
 * as a four-way answer would. The app's first run keeps the four-way question.
 */
function opener(copy: FunnelCopy): FunnelQuestion {
  return {
    key: PROBLEM.key,
    headline: copy.openers.headline,
    options: [
      { value: OPENER_PROBLEM, emoji: "✅", title: copy.openers.yes },
      { value: OPENER_DECLINED, emoji: "🙅", title: copy.openers.no },
    ],
  };
}

/** Which answers the first screen can carry through the hash before the bundle lands. */
export const OPENER_VALUES: readonly string[] = [OPENER_PROBLEM, OPENER_DECLINED];

const question = (
  key: QuestionKey,
  options: [value: string, emoji: string][],
  multi?: boolean,
): QuestionShape => ({
  key,
  ...(multi ? { multi } : {}),
  options: options.map(([value, emoji]) => ({ value, emoji })),
});

/** The app's age bands (`AgeBand` in `Activity.swift`), by the same ids. */
const AGE = question("age", [
  ["0-1", "🍼"],
  ["1-3", "🧸"],
  ["3-5", "🖍️"],
]);

const HARDEST = question("hardest", [
  ["afterwork", "🌇"],
  ["dinner", "🍝"],
  ["weekend", "🛋️"],
  ["bedtime", "🌙"],
]);

const PICKUPS = question("pickups", [
  ["rare", "🙂"],
  ["few", "🤏"],
  ["often", "🔁"],
  ["lost", "🌀"],
]);

const APPS = question(
  "apps",
  [
    ["instagram", "📸"],
    ["tiktok", "🎵"],
    ["youtube", "▶️"],
    ["news", "📰"],
    ["work", "💼"],
    ["games", "🎮"],
  ],
  true,
);

const ENERGY = question("energy", [
  ["low", "🪫"],
  ["okay", "🔋"],
  ["full", "⚡"],
]);

const PARTNER = question("partner", [
  ["yes", "👫"],
  ["sometimes", "🔀"],
  ["no", "🧍"],
]);

const TRIED = question("tried", [
  ["limits", "⏱️"],
  ["room", "🚪"],
  ["delete", "🗑️"],
  ["nothing", "🤷"],
]);

const MINUTES = question("minutes", [
  ["ten", "🌱"],
  ["twenty", "🌿"],
  ["thirty", "🌳"],
]);

const SOON = question("soon", [
  ["tonight", "🌙"],
  ["week", "📅"],
  ["month", "🗓️"],
  ["unsure", "🤔"],
]);

export const FUNNEL: { id: string; steps: StepShape[] } = {
  id: "evenings",
  steps: [
    { id: "problem", kind: "question", question: PROBLEM },
    { id: "evening", kind: "evening" },
    { id: "why", kind: "apps", branch: { on: "problem" } },
    { id: "age", kind: "question", question: AGE },
    { id: "hardest", kind: "question", question: HARDEST },
    { id: "pickups", kind: "question", question: PICKUPS },
    { id: "apps", kind: "question", question: APPS },
    { id: "energy", kind: "question", question: ENERGY },
    { id: "partner", kind: "question", question: PARTNER },
    { id: "tried", kind: "question", question: TRIED },
    { id: "alternative", kind: "alternative" },
    { id: "minutes", kind: "question", question: MINUTES },
    { id: "enough", kind: "compare", branch: { on: "minutes" } },
    { id: "soon", kind: "question", question: SOON },
    { id: "plan", kind: "plan" },
    { id: "account", kind: "account" },
    { id: "paywall", kind: "paywall" },
    { id: "checkout", kind: "checkout" },
  ],
};

/** The web walks the app's order: the ads name the same pain the app's opener does. */
export const WEB_FUNNEL = FUNNEL;

/** The words a deck has for a statement step, by id. */
export type StepCopy = FunnelCopy["steps"][keyof FunnelCopy["steps"]];

/** A question's words laid over its shape. */
function worded(shape: QuestionShape, copy: FunnelCopy): FunnelQuestion {
  const words: {
    headline: string;
    description?: string;
    options: Record<string, string>;
  } = copy.questions[shape.key];
  return {
    key: shape.key,
    headline: words.headline,
    description: words.description,
    multi: shape.multi,
    options: shape.options.map((option) => ({ ...option, title: words.options[option.value] })),
  };
}

/** A step's words laid over its shape. Question steps carry theirs on the question. */
function localized(shape: StepShape, copy: FunnelCopy): FunnelStep {
  const words: Partial<StatementCopy> & { variants?: Record<string, Partial<StatementCopy>> } =
    (copy.steps as Record<string, StepCopy | undefined>)[shape.id] ?? {};
  return {
    id: shape.id,
    kind: shape.kind,
    headline: words.headline ?? "",
    body: words.body,
    note: words.note,
    question: shape.question && worded(shape.question, copy),
    branch: shape.branch && { on: shape.branch.on, variants: words.variants ?? {} },
  };
}

/** Where the account step's two round trips come back to. Derived rather than written down,
 * so a step added above it cannot land a signed-in reader on the wrong screen. */
export const ACCOUNT_STEP_INDEX = WEB_FUNNEL.steps.findIndex((step) => step.kind === "account");

/**
 * What the progress counter promises: the questions and the demos, ending at the plan. The
 * account step, the offer and the card field are not survey, so the bar reads its last number
 * on the plan rather than running past its own total.
 */
export const SURVEY_LENGTH = ACCOUNT_STEP_INDEX;

/** The step at `index` as the web shows it, in its reader's words: the web's order with the
 * opener on step 0, and the opener's problem as the fallback on a branching step. */
export function stepAt(index: number, copy: FunnelCopy): FunnelStep {
  const step = localized(WEB_FUNNEL.steps[index], copy);
  return {
    ...step,
    question: index === 0 ? opener(copy) : step.question,
    branch: step.branch && { ...step.branch, fallback: OPENER_PROBLEM },
  };
}

// Development only — the live funnel must never fail to render over a copy mistake. The
// literal comparison is what lets the bundler fold this branch, and the import with it, away.
// Keep it synchronous, or a thrown error becomes an unhandled rejection.
/** Everything the checks read. The funnel build hands it to `validateCopy` for every deck. */
export const SPINE: FunnelSpine = {
  steps: FUNNEL.steps,
  problem: PROBLEM,
  problems: PROBLEMS,
  declined: OPENER_DECLINED,
  separator: MULTI_SEPARATOR,
};

if (process.env.NODE_ENV !== "production") {
  validateFunnel(SPINE);
}
