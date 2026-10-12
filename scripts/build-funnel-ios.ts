/**
 * Writes the web funnel's shape and words into the iOS bundle (`ios/Oyno/Resources/Funnel.json`),
 * so the app's paywall says what `/start`'s offer says, in the same words, in every language.
 *
 * Generated rather than mirrored: `steps.ts` and `copy/<tag>.ts` stay the one source, and a
 * reworded line reaches the phone on the next run of this script. The app's first run itself
 * is native (`FunnelScreen.swift`) and reads none of this; `PaywallScreen.swift` reads the
 * paywall deck.
 */
import { writeFileSync } from "node:fs";
import { FUNNEL_COPY } from "@/components/funnel/copy";
import { FUNNEL, SPINE } from "@/components/funnel/steps";
import { validateCopy } from "@/components/funnel/steps.validate";

const OUT = "ios/Oyno/Resources/Funnel.json";

/** The step kinds `FunnelContent.swift` decodes. A kind added on the web fails here, not as a
 * bundle the app cannot decode when the paywall opens. */
const IOS_KINDS = new Set([
  "question",
  "statement",
  "evening",
  "apps",
  "alternative",
  "compare",
  "plan",
  "account",
]);

/** The parts of a deck the phone reads. The rest is the web's own — its sign-in forms, Dodo's
 * checkout, the page after it. */
const SECTIONS = ["chrome", "questions", "steps", "paywall"] as const;

// The app opens on the four-way question; the web's opener is its yes/no.
const accountIndex = FUNNEL.steps.findIndex((step) => step.kind === "account");
const steps = FUNNEL.steps.slice(0, accountIndex + 1);
const unknown = steps.filter((step) => !IOS_KINDS.has(step.kind));
if (unknown.length > 0) {
  throw new Error(
    `FunnelContent.swift cannot decode: ${unknown.map((step) => `${step.id} (${step.kind})`).join(", ")}`,
  );
}

const decks = Object.fromEntries(
  Object.entries(FUNNEL_COPY).map(([lang, copy]) => {
    validateCopy(lang, copy, SPINE);
    const shared = Object.fromEntries(SECTIONS.map((section) => [section, copy[section]]));
    const { signIn, haveAccount } = copy.account;
    return [lang, { ...shared, account: { signIn, haveAccount } }];
  }),
);

const funnel = {
  spine: {
    steps,
    surveyLength: accountIndex,
    separator: SPINE.separator,
  },
  decks,
};

writeFileSync(OUT, `${JSON.stringify(funnel, null, 2)}\n`);
console.log(`Wrote ${OUT}: ${steps.length} steps, ${Object.keys(decks).length} decks`);
