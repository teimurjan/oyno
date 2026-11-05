import { describe, expect, test } from "bun:test";
import { PREFIXED_LOCALES } from "@/lib/i18n";
import { TOOL_SLUGS } from "@/lib/tools";
import { en } from "./en";
import { toolsFor } from "./index";

/** The types hold every key. These hold what they cannot: the lists line up and the words are translated. */
describe.each(PREFIXED_LOCALES)("%s", (lang) => {
  const deck = toolsFor(lang);

  test("is its own translation, not the English", () => {
    expect(deck).not.toBe(en);
    for (const slug of TOOL_SLUGS) expect(deck.pages[slug].description).not.toBe(en.pages[slug].description);
  });

  test("has every step, question and move the English has", () => {
    expect(deck.simon.commands).toHaveLength(en.simon.commands.length);
    expect(new Set(deck.simon.commands).size).toBe(deck.simon.commands.length);
    for (const slug of TOOL_SLUGS) {
      expect(deck.pages[slug].how).toHaveLength(en.pages[slug].how.length);
      expect(deck.pages[slug].faq).toHaveLength(en.pages[slug].faq.length);
    }
  });

  test("keeps the place a move goes", () => {
    expect(deck.simon.says).toContain("{command}");
  });
});
