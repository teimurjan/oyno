import { Accented } from "./locale";

/** `[bracketed]` marks the span that gets the accent. */
export function Headline({ text }: { text: string }) {
  return (
    <h1 className="mb-8 text-center font-extrabold leading-[1.1] tracking-[-0.03em] text-ink text-[clamp(28px,7.4vw,36px)]">
      <Accented text={text} />
    </h1>
  );
}

/** A heading inside a long step — the paywall's reviews and questions. A size below the step's
 * own headline, so the page still has one title. */
export function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-center font-extrabold leading-[1.15] tracking-[-0.03em] text-ink text-[clamp(24px,6vw,30px)]">
      {text}
    </h2>
  );
}

export function Body({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="text-[18px] leading-[1.5] text-muted">{text}</p>;
}

/** The line under a headline that is a count rather than a claim: small, centred, and tucked
 * up close, which is what undoes most of the headline's own bottom margin. */
export function Note({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="-mt-6 text-center text-[15.5px] text-muted">{text}</p>;
}
