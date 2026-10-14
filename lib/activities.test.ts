import { describe, expect, test } from "bun:test";
import { compose, fingerprint, sentenceCount, Source, type Translations, wordsFingerprint } from "./activities";

const whisper = {
  id: "whisper",
  age: "3-5",
  energy: "low",
  minutes: 10,
  mechanic: "quiet-voice",
  tags: ["quiet"],
  skills: ["inhibitory-control"],
  evidence: ["kochanska-2000", "cdc-guide"],
  title: "Whisper Race",
  blurb: "Good for a quiet room.",
  steps: ["Whisper a word.", "Pass it on."],
} as const;

const skills = {
  "working-memory": "Working memory",
  "inhibitory-control": "Self-control",
  "cognitive-flexibility": "Flexible thinking",
  attention: "Focus",
};

const sources = {
  "kochanska-2000": {
    kind: "study",
    short: "Kochanska et al., 2000",
    title: "Effortful control in early childhood",
    published: "Developmental Psychology, 36(2)",
    year: 2000,
    url: "https://doi.org/10.1037/0012-1649.36.2.220",
    design: "longitudinal",
    studied: "Children of 22 to 45 months whispering, waiting for a treat and stopping on a signal.",
    fromMonths: 22,
    ages: ["1-3", "3-5"],
    supports: ["quiet-voice", "waiting"],
  },
  "zelazo-2006": {
    kind: "study",
    short: "Zelazo, 2006",
    title: "The Dimensional Change Card Sort",
    published: "Nature Protocols, 1(1)",
    year: 2006,
    url: "https://doi.org/10.1038/nprot.2006.46",
    design: "observational",
    studied: "Children of 3 to 5 sorting cards by colour, then by shape.",
    fromMonths: 36,
    ages: ["3-5"],
    supports: ["sorting-switch"],
  },
  "cdc-guide": {
    kind: "guide",
    short: "Harvard Center on the Developing Child",
    title: "Enhancing and Practicing Executive Function Skills",
    published: "Center on the Developing Child at Harvard University",
    year: 2014,
    url: "https://developingchild.harvard.edu/",
    recommends: { "1-3": ["quiet-voice"], "3-5": ["quiet-voice", "sorting-switch"] },
    says: { "1-3": "Games that require active inhibition.", "3-5": "Quieter activities, and sorting by a rule that switches." },
  },
} as const;

const raw = { tags: { quiet: "Quiet" }, skills, sources, activities: [whisper] };
const source = Source.parse(raw);

const french = (madeFrom: string): Translations => ({
  tags: { quiet: { source: fingerprint(["Quiet"]), label: "Calme" } },
  skills: { "inhibitory-control": { source: fingerprint(["Self-control"]), label: "Maîtrise de soi" } },
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
    expect(gaps.map((gap) => gap.id)).toEqual(["working-memory", "cognitive-flexibility", "attention"]);
    expect(catalogue.decks.fr.activities.whisper.title).toBe("Course chuchotée");
    expect(catalogue.decks.fr.tags.quiet).toBe("Calme");
    expect(catalogue.decks.fr.skills["inhibitory-control"]).toBe("Maîtrise de soi");
    expect(catalogue.decks.en.activities.whisper.title).toBe("Whisper Race");
  });

  test("reworded English makes its translation stale and ships in English", () => {
    const { catalogue, gaps } = compose(source, { fr: french("000000000000") }, ["en", "fr"]);
    expect(gaps.filter((gap) => gap.kind === "activity")).toEqual([
      { locale: "fr", kind: "activity", id: "whisper", reason: "stale" },
    ]);
    expect(catalogue.decks.fr.activities.whisper.title).toBe("Whisper Race");
  });

  test("a language with no file yet is every unit missing", () => {
    const { catalogue, gaps } = compose(source, {}, ["en", "fr"]);
    expect(gaps.map((gap) => `${gap.kind}:${gap.id}:${gap.reason}`)).toEqual([
      "tag:quiet:missing",
      "skill:working-memory:missing",
      "skill:inhibitory-control:missing",
      "skill:cognitive-flexibility:missing",
      "skill:attention:missing",
      "activity:whisper:missing",
    ]);
    expect(catalogue.decks.fr).toEqual(catalogue.decks.en);
  });

  test("the bundle carries each game's age, skills and evidence, and the bibliography", () => {
    const { catalogue } = compose(source, {}, ["en"]);
    expect(catalogue.activities).toEqual([
      { id: "whisper", age: "3-5", energy: "low", minutes: 10, tags: ["quiet"], skills: ["inhibitory-control"], evidence: ["kochanska-2000", "cdc-guide"] },
    ]);
    expect(Object.keys(catalogue.sources)).toEqual(["kochanska-2000", "zelazo-2006", "cdc-guide"]);
  });
});

describe("sentenceCount", () => {
  test("a quoted shout inside a sentence is not a sentence of its own", () => {
    expect(sentenceCount('Say "Freeze!" and everyone stops.')).toBe(1);
    expect(sentenceCount("Every story starts with \"Once, a tiny dragon…\".")).toBe(1);
    expect(sentenceCount("Lie on your back on the rug. You're a sleeping mountain.")).toBe(2);
    expect(sentenceCount("Freeze! Then go.")).toBe(2);
  });

  test("counts sentences in a translation, whatever the script and quotes", () => {
    expect(sentenceCount("Скажите «Замри!» и все останавливаются.")).toBe(1);
    expect(sentenceCount("Лягте на ковёр. Вы — спящая гора.")).toBe(2);
    expect(sentenceCount("Скажите: «Где я?» «Вот я!»")).toBe(2);
  });
});

describe("Source", () => {
  const withGame = (game: Record<string, unknown>) => Source.safeParse({ ...raw, activities: [{ ...whisper, ...game }] });

  test("rejects a game that names a tag the vocabulary lacks", () => {
    expect(withGame({ tags: ["loud"] }).success).toBe(false);
  });

  test("rejects a step of two sentences and a fourth step", () => {
    expect(withGame({ steps: ["Whisper a word. Then pass it on."] }).success).toBe(false);
    expect(withGame({ steps: ["One.", "Two.", "Three.", "Four."] }).success).toBe(false);
  });

  test("every citation must speak to the game's mechanic at the game's age", () => {
    expect(withGame({ evidence: ["zelazo-2006", "cdc-guide"] }).success).toBe(false);
    expect(withGame({ mechanic: "sorting-switch" }).success).toBe(false);
    expect(withGame({ mechanic: "sorting-switch", evidence: ["zelazo-2006", "cdc-guide"] }).success).toBe(true);
    expect(withGame({ age: "1-3", fromMonths: 24 }).success).toBe(true);
    expect(withGame({ age: "0-1" }).success).toBe(false);
  });

  test("a study's youngest participants are no older than the game's youngest player", () => {
    expect(withGame({ age: "1-3" }).success).toBe(false);
    expect(withGame({ age: "1-3", fromMonths: 22 }).success).toBe(true);
    expect(withGame({ age: "1-3", fromMonths: 18 }).success).toBe(false);
  });

  test("a game needs both a study and a guide behind it", () => {
    expect(withGame({ evidence: ["cdc-guide", "cdc-guide"] }).success).toBe(false);
    expect(withGame({ evidence: ["kochanska-2000", "zelazo-2006"] }).success).toBe(false);
    expect(withGame({ evidence: ["nobody-1999", "cdc-guide"] }).success).toBe(false);
  });

  test("keeps a game between five and fifteen minutes", () => {
    expect(withGame({ minutes: 4 }).success).toBe(false);
    expect(withGame({ minutes: 16 }).success).toBe(false);
    expect(withGame({ minutes: 5 }).success).toBe(true);
  });
});
