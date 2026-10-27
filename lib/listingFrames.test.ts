import { existsSync } from "node:fs";
import path from "node:path";
import { expect, test } from "bun:test";
import { LOCALES } from "./i18n";
import { captionParts, listingFrames } from "./listingFrames";

test("a caption splits into plain and highlighted runs", () => {
  expect(captionParts("Too tired to play? [Play lying down]")).toEqual([
    { text: "Too tired to play? ", highlighted: false },
    { text: "Play lying down", highlighted: true },
  ]);
  expect(captionParts("[500 easy games], nothing to set up")[0]).toEqual({ text: "500 easy games", highlighted: true });
});

test("every frame the home page shows has its screen in public/", () => {
  const missing = LOCALES.flatMap((lang) => listingFrames(lang).map((frame) => frame.shot)).filter(
    (shot) => !existsSync(path.join(process.cwd(), "public", shot)),
  );
  expect(missing).toEqual([]);
});
