import { describe, expect, test } from "bun:test";
import { compose, fingerprint, Source, type Translations, wordsFingerprint } from "./activities";

const whisper = {
  id: "whisper",
  energy: "low",
  minutes: 10,
  tags: ["quiet"],
  title: "Whisper Race",
  blurb: "Good for a quiet room.",
  steps: ["Whisper a word.", "Pass it on."],
} as const;

const source = Source.parse({ tags: { quiet: "Quiet" }, activities: [whisper] });

const french = (madeFrom: string): Translations => ({
  tags: { quiet: { source: fingerprint(["Quiet"]), label: "Calme" } },
  activities: {
    whisper: {
      source: madeFrom,
      title: "Course chuchotée",
      blurb: "Pour une pièce calme.",
      steps: ["Chuchote un mot.", "Fais-le passer."],
    },
  },
});

describe("compose", () => {
  test("a translation made from the current English is used as written", () => {
    const { catalogue, gaps } = compose(source, { fr: french(wordsFingerprint(whisper)) }, ["en", "fr"]);
    expect(gaps).toEqual([]);
    expect(catalogue.decks.fr.activities.whisper.title).toBe("Course chuchotée");
    expect(catalogue.decks.fr.tags.quiet).toBe("Calme");
    expect(catalogue.decks.en.activities.whisper.title).toBe("Whisper Race");
  });

  test("reworded English makes its translation stale and ships in English", () => {
    const { catalogue, gaps } = compose(source, { fr: french("000000000000") }, ["en", "fr"]);
    expect(gaps).toEqual([{ locale: "fr", kind: "activity", id: "whisper", reason: "stale" }]);
    expect(catalogue.decks.fr.activities.whisper.title).toBe("Whisper Race");
  });

  test("a language with no file yet is every unit missing", () => {
    const { catalogue, gaps } = compose(source, {}, ["en", "fr"]);
    expect(gaps.map((gap) => `${gap.kind}:${gap.id}:${gap.reason}`)).toEqual(["tag:quiet:missing", "activity:whisper:missing"]);
    expect(catalogue.decks.fr).toEqual(catalogue.decks.en);
  });
});

describe("Source", () => {
  test("rejects a game that names a tag the vocabulary lacks", () => {
    const result = Source.safeParse({ tags: {}, activities: [whisper] });
    expect(result.success).toBe(false);
  });
});
