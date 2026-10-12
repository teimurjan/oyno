import type { ReactNode } from "react";
import type { WorldId } from "@/lib/planet/scene";

/**
 * The shape every site deck fills in: one structure, every language. Long-form prose is a
 * `ReactNode` because the legal pages carry links and emphasis.
 */

export interface Meta {
  title: string;
  description: string;
}

export interface NavCopy {
  pricing: string;
  support: string;
  privacy: string;
  terms: string;
  /** The label the switcher's links are read out as. */
  switchLabel: string;
  /** The header's button into the funnel. */
  start: string;
}

/** The words the planet hero needs, matching the funnel's `planet` section. */
export interface PlanetCopy {
  open: string;
  close: string;
  /** The gallery's arrows, shown only where there is a mouse. */
  previous: string;
  next: string;
  yours: string;
  /** `{n}` is the bloom level. A string, because the copy crosses into a client component. */
  unlocksAt: string;
  /** A quiet line under the stage that tells a reader the planet can be pressed. */
  hint: string;
  worlds: Record<WorldId, string>;
}

export interface HomeCopy {
  meta: Meta;
  eyebrow: string;
  headline: ReactNode;
  sub: string;
  cta: string;
  planet: PlanetCopy;
  /** The one proof section: an evening with Oyno, one App Store screenshot per step. */
  proof: { heading: string; sub: string; steps: { shot: string; title: string; body: string }[] };
  plan: {
    eyebrow: string;
    pitch: string;
    monthly: string;
    yearly: string;
    cta: string;
    appNote: string;
  };
  closer: { heading: string; body: string };
}

export interface PricingCopy {
  meta: Meta;
  eyebrow: string;
  heading: string;
  intro: string;
  web: {
    eyebrow: string;
    perMonth: string;
    /** The yearly price, on one line under the monthly figure. */
    orYearly: (yearly: string) => string;
    cta: string;
    note: string;
  };
  app: { eyebrow: string; headline: string; sub: string; note: string };
  body: ReactNode;
}

export interface ProsePageCopy {
  meta: Meta;
  eyebrow: string;
  heading: string;
  updated?: string;
  updatedLabel?: string;
  intro?: ReactNode;
  body: ReactNode;
}

export interface SiteCopy {
  nav: NavCopy;
  home: HomeCopy;
  pricing: PricingCopy;
  support: ProsePageCopy;
  privacy: ProsePageCopy;
  terms: ProsePageCopy;
}
