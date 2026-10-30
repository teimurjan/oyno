import { describe, expect, test } from "bun:test";
import source from "@/activities/en.json";
import { Source } from "@/lib/activities";
import { REFERENCES } from "@/lib/articles/references";
import { PREFIXED_LOCALES } from "@/lib/i18n";
import { en } from "./en";
import { libraryFor } from "./index";

const references = { ...Source.parse(source).sources, ...REFERENCES };

describe.each(PREFIXED_LOCALES)("%s", (lang) => {
  const deck = libraryFor(lang);

  test("is its own translation, not the English", () => {
    expect(deck).not.toBe(en);
    expect(deck.games.title).not.toBe(en.games.title);
  });

  test("words every sentence of the bibliography", () => {
    for (const [id, reference] of Object.entries(references)) {
      const words = deck.sources[id];
      if (reference.kind === "study") expect({ id, studied: words?.studied }).toEqual({ id, studied: expect.any(String) });
      else if ("says" in reference) expect(Object.keys(words?.says ?? {}).sort()).toEqual(Object.keys(reference.says).sort());
    }
  });

  test("words no source that does not exist", () => {
    expect(Object.keys(deck.sources).filter((id) => !(id in references))).toEqual([]);
  });
});
