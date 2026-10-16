import { describe, expect, test } from "bun:test";
import { languageFromAcceptHeader, localeForTag } from "./i18n";

describe("localeForTag", () => {
  test("an exact regional match wins over the bare language", () => {
    expect(localeForTag("es-MX")).toBe("es-MX");
    expect(localeForTag("pt-br")).toBe("pt-BR");
  });

  test("another region falls back to the first locale of its language", () => {
    expect(localeForTag("en-GB")).toBe("en");
    expect(localeForTag("es-AR")).toBe("es");
    expect(localeForTag("pt-PT")).toBe("pt-BR");
  });

  test("a language the site lacks is nothing", () => {
    expect(localeForTag("ja-JP")).toBeUndefined();
  });
});

test("the Accept-Language walk reaches a regional locale", () => {
  expect(languageFromAcceptHeader("ja, pt-BR;q=0.8, en;q=0.5")).toBe("pt-BR");
});
