import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { WORLD_IDS } from "../lib/planet/scene";

/**
 * Turns the scene layers in `art/source/` into what each surface loads: hashed WebP
 * renditions under `public/art/` plus `lib/art/manifest.ts` for the site and the funnel, and
 * one image set apiece in the iOS asset catalog. Every world has its own planet: Earth is
 * `planet.png`, the rest are `planets/<id>.png` from `bun run art:planets`.
 *
 * The planets and the family are trimmed to their alpha bounds first, so `lib/planet/scene.ts`
 * can place them by their visible edges. Each planet is then fitted, foot down, into Earth's
 * box, so every world lands on the same shadow. Each game's illustration, `activities/<id>.png`,
 * ships as `Resources/Activities/<id>.webp` in the app and as the same bytes in `public/art/activities/`
 * for the game pages, which git stores once. The keepsakes and the everyday moments ship the same
 * way, as `Resources/Keepsakes/keepsake-<id>.webp`, `Resources/Moments/moment-<id>.webp` and
 * `Resources/Petals/petal-<id>.webp`: the
 * bundle is flat, so the prefix keeps their names apart from the games'. The keepsakes' ids, kinds
 * and names also become `Domain/Keepsakes.generated.swift`. Output is committed: `bun run art:build`,
 * then commit `public/art/`, `lib/art/manifest.ts`, the image sets and the bundle files together.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const SOURCE = path.join(ROOT, "art/source");
const OUT = path.join(ROOT, "public/art");
const MANIFEST = path.join(ROOT, "lib/art/manifest.ts");
const ASSETS = path.join(ROOT, "ios/Oyno/Resources/Assets.xcassets");
const BASE = "/art";
const CATALOG_INFO = { info: { author: "xcode", version: 1 } };

interface Layer {
  file: string;
  /** The asset catalog's name for it, under an optional folder. */
  imageSet: string;
  trim: boolean;
  /** Rendered widths, in device pixels: 1×, 2× and 3× of the largest CSS size it is shown at. */
  widths: number[];
  quality: number;
  /** The bitmap the app ships: 3× the largest point size the app draws it at. */
  iosWidth: number;
}

const SKY: Layer = { file: "background.png", imageSet: "Sky", trim: false, widths: [480, 960, 1254], quality: 72, iosWidth: 1254 };
const FAMILY: Layer = { file: "family.png", imageSet: "Family", trim: true, widths: [240, 480, 720], quality: 82, iosWidth: 640 };
const planet = (id: string): Layer => ({
  file: id === "earth" ? "planet.png" : `planets/${id}.png`,
  imageSet: `Planets/Planet-${id}`,
  trim: true,
  widths: [320, 640, 960],
  quality: 82,
  iosWidth: 840,
});
/** Plain bundle files, not image sets: the catalog re-encodes losslessly at 6× the size, which
 * 500 paintings cannot afford. 600px covers 300pt at 2× and the faded 260pt on a phone. */
const ACTIVITY_ART = path.join(ROOT, "ios/Oyno/Resources/Activities");
const ACTIVITY_WIDTH = 600;
const ACTIVITY_WEB = path.join(OUT, "activities");

const contentHash = (bytes: Uint8Array) =>
  new Bun.CryptoHasher("sha256").update(bytes).digest("hex").slice(0, 8);

async function source(layer: Layer): Promise<Buffer> {
  const image = sharp(path.join(SOURCE, layer.file));
  return layer.trim ? image.trim({ threshold: 10 }).png().toBuffer() : image.png().toBuffer();
}

/** Fits a trimmed planet into Earth's box, foot down, so it sits where Earth sits. */
async function fitTo(box: { width: number; height: number }, input: Buffer): Promise<Buffer> {
  return sharp(input)
    .resize(box.width, box.height, { fit: "contain", position: "south", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function emitWeb(name: string, layer: Layer, input: Buffer) {
  const { width, height } = await sharp(input).metadata();
  const renditions = [];
  for (const target of layer.widths) {
    const webp = await sharp(input)
      .resize({ width: Math.min(target, width) })
      .webp({ quality: layer.quality, alphaQuality: 90, effort: 6 })
      .toBuffer();
    const rendered = Math.min(target, width);
    const file = `${name}-${rendered}w.${contentHash(webp)}.webp`;
    await Bun.write(path.join(OUT, file), webp);
    renditions.push({ src: `${BASE}/${file}`, width: rendered });
  }
  return { width, height, renditions };
}

/** One universal image per set: the layers are paintings, so one bitmap at the largest size
 * the app draws looks the same as three hand-sized ones and ships one file. */
async function emitIOS(layer: Layer, input: Buffer) {
  const dir = path.join(ASSETS, `${layer.imageSet}.imageset`);
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
  const opaque = !layer.trim;
  const file = `${path.basename(layer.imageSet).toLowerCase()}.${opaque ? "jpg" : "png"}`;
  const sized = sharp(input).resize({ width: layer.iosWidth, withoutEnlargement: true });
  const bytes = opaque
    ? await sized.jpeg({ quality: 85, mozjpeg: true }).toBuffer()
    : await sized.png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 }).toBuffer();
  await Bun.write(path.join(dir, file), bytes);
  await Bun.write(
    path.join(dir, "Contents.json"),
    `${JSON.stringify({ images: [{ filename: file, idiom: "universal" }], ...CATALOG_INFO }, null, 2)}\n`,
  );
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await rm(path.join(ASSETS, "Planets"), { recursive: true, force: true });
await mkdir(path.join(ASSETS, "Planets"), { recursive: true });
await Bun.write(path.join(ASSETS, "Planets/Contents.json"), `${JSON.stringify(CATALOG_INFO, null, 2)}\n`);

async function emit(name: string, layer: Layer, input: Buffer) {
  const art = await emitWeb(name, layer, input);
  await emitIOS(layer, input);
  console.log(`${name}: ${art.width}×${art.height}`);
  return art;
}

const earth = await sharp(await source(planet("earth"))).metadata();
const planets: Record<string, Awaited<ReturnType<typeof emitWeb>>> = {};
for (const id of WORLD_IDS) {
  planets[id] = await emit(`planet-${id}`, planet(id), await fitTo(earth, await source(planet(id))));
}
const manifest = {
  sky: await emit("sky", SKY, await source(SKY)),
  family: await emit("family", FAMILY, await source(FAMILY)),
  planets,
};

await Bun.write(
  MANIFEST,
  `// Generated by \`bun run art:build\` (scripts/build-art.ts). Do not edit.

import type { WorldId } from "@/lib/planet/scene";

/** One layer: its intrinsic size after trimming, and its WebP renditions by width. */
export interface Art {
  width: number;
  height: number;
  renditions: readonly { src: string; width: number }[];
}

export const ART = ${JSON.stringify(manifest, null, 2)} as const satisfies {
  sky: Art;
  family: Art;
  planets: Record<WorldId, Art>;
};
`,
);

await rm(ACTIVITY_ART, { recursive: true, force: true });
await mkdir(ACTIVITY_ART, { recursive: true });
await mkdir(ACTIVITY_WEB, { recursive: true });
const paintings = (await readdir(path.join(SOURCE, "activities"))).filter((name) => name.endsWith(".png"));
for (const file of paintings) {
  const webp = await sharp(path.join(SOURCE, "activities", file))
    .trim({ threshold: 10 })
    .resize({ width: ACTIVITY_WIDTH, withoutEnlargement: true })
    .webp({ quality: 70, alphaQuality: 80, effort: 6 })
    .toBuffer();
  const name = `${path.basename(file, ".png")}.webp`;
  await Bun.write(path.join(ACTIVITY_ART, name), webp);
  await Bun.write(path.join(ACTIVITY_WEB, name), webp);
}
console.log(`activities: ${paintings.length}`);

/** Shown at 44pt at most, so 3× is enough. */
const KEEPSAKE_WIDTH = 192;
const KEEPSAKE_ART = path.join(ROOT, "ios/Oyno/Resources/Keepsakes");
const KEEPSAKE_SWIFT = path.join(ROOT, "ios/Oyno/Domain/Keepsakes.generated.swift");
const MOMENT_ART = path.join(ROOT, "ios/Oyno/Resources/Moments");
/** Drawn at about 20pt around the planet, so 3× of a little more. */
const PETAL_WIDTH = 96;
const PETAL_ART = path.join(ROOT, "ios/Oyno/Resources/Petals");

interface KeepsakeEntry {
  name: string;
  kind: "game" | "reading" | "bath" | "cooking" | "lead" | "rare";
  object: string;
}

async function emitBundle(dir: string, prefix: string, ids: string[], width: number) {
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
  for (const id of ids) {
    const file = path.join(SOURCE, `${prefix}s`, `${id}.png`);
    if (!(await Bun.file(file).exists())) throw new Error(`No painting for ${prefix} ${id}: run bun run art:${prefix}s`);
    const webp = await sharp(file)
      .trim({ threshold: 10 })
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 74, alphaQuality: 85, effort: 6 })
      .toBuffer();
    await Bun.write(path.join(dir, `${prefix}-${id}.webp`), webp);
  }
  console.log(`${prefix}s: ${ids.length}`);
}

const keepsakes: Record<string, KeepsakeEntry> = await Bun.file(path.join(ROOT, "art/keepsakes.json")).json();
await emitBundle(KEEPSAKE_ART, "keepsake", Object.keys(keepsakes), KEEPSAKE_WIDTH);
const moments: Record<string, unknown> = await Bun.file(path.join(ROOT, "art/moments.json")).json();
await emitBundle(MOMENT_ART, "moment", Object.keys(moments), ACTIVITY_WIDTH);
const petals: Record<string, unknown> = await Bun.file(path.join(ROOT, "art/petals.json")).json();
await emitBundle(PETAL_ART, "petal", Object.keys(petals), PETAL_WIDTH);

const swiftString = (text: string) => JSON.stringify(text);
/** "A kite washed up", "An acorn washed up": the line Done shows when one is found. */
const arrival = (name: string) => `${/^[aeiou]/i.test(name) ? "An" : "A"} ${name.toLowerCase()} washed up`;
await Bun.write(
  KEEPSAKE_SWIFT,
  `// Generated by \`bun run art:build\` (scripts/build-art.ts) from art/keepsakes.json. Do not edit.

import Foundation

extension Keepsake {
    static let all: [Keepsake] = [
${Object.entries(keepsakes)
  .map(
    ([id, k]) =>
      `        Keepsake(id: ${swiftString(id)}, kind: .${k.kind}, name: LocalizedStringResource(${swiftString(k.name)}), arrival: LocalizedStringResource(${swiftString(arrival(k.name))})),`,
  )
  .join("\n")}
    ]
}
`,
);
