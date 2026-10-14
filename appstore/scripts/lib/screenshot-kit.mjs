// Shared brand kit for the screenshot generator: palette, fonts, and the device-frame
// geometry — one source of truth so the store frames and the app render the same visual
// system.
//
// The fonts are read directly out of the iOS bundle (ios/Oyno/Resources/Fonts), so
// marketing can never drift from what ships: the caption above the phone is set in the
// app's own Figtree, and Onest for Cyrillic. The phone mockup (appstore/source/frame.png)
// is brand-neutral device photography, not app-specific art.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const APPSTORE_DIR = path.resolve(__dirname, "..", "..");
export const ROOT = path.resolve(APPSTORE_DIR, "..");
export const IOS_DIR = path.join(ROOT, "ios");
export const IOS_PROJECT = path.join(IOS_DIR, "Oyno.xcodeproj");
export const FONTS_DIR = path.join(IOS_DIR, "Oyno", "Resources", "Fonts");
export const CACHE_DIR = path.join(APPSTORE_DIR, ".cache");
export const SOURCE_DIR = path.join(APPSTORE_DIR, "source");
export const CAPTIONS_DIR = path.join(APPSTORE_DIR, "captions");

/** Which seeded screen the capture run photographs, and what it is filed as.
 *
 * The order is the argument the store listing makes, after the photo frame that opens it: the
 * time together today, a game for each battery level and why it works, Kid hours and one
 * schedule's form, and the next world to earn.
 *
 * `nn` is what a caption's `source` points at, which is why adding a screen in the middle
 * renumbers the ones after it *and* every `appstore/captions/<tag>.json`. It lives here
 * rather than in the capture script because the menu offers the same list twice — once for
 * what to photograph, once for what to composite — and two copies of it would let a screen
 * exist on one of those lists and not the other. */
export const SCREENS = [
  // The tally wheel rolls in after the lines, so it needs longer than the default to settle.
  { nn: "01", screen: "home" },
  { nn: "02", screen: "play:low:0-1" },
  { nn: "03", screen: "play:full:1-3" },
  { nn: "04", screen: "play:okay:why" },
  { nn: "05", screen: "kidhours" },
  // The sheet slides up over the screen after launch.
  { nn: "06", screen: "schedule", delay: 6000 },
  { nn: "07", screen: "worlds" },
];

/** A screen named the way a person names it — "play", "02", or "2" — resolved to the
 * `nn` everything downstream keys on. Null for a name no screen answers to, so the caller
 * can list what it does have rather than capture the wrong thing. */
export function resolveScreen(name) {
  const trimmed = String(name).trim();
  const padded = /^\d+$/.test(trimmed) ? pad2(Number(trimmed)) : trimmed;
  return SCREENS.find((s) => s.nn === padded || s.screen === trimmed) ?? null;
}

/** deliver's `screenshots_path`. Everything written here is uploaded, and every directory
 * in it must be an App Store Connect locale code — which is why the raw captures and the
 * captions live beside it, not under it. */
export const SCREENSHOTS_DIR = path.join(APPSTORE_DIR, "screenshots");
export const METADATA_DIR = path.join(APPSTORE_DIR, "metadata");

/** The header and search-result creative assets. Deliver cannot upload them, so this is
 * where they wait to be dragged into App Store Connect. */
export const CREATIVES_DIR = path.join(APPSTORE_DIR, "creatives");

/** The marketing site's copy of the same frames, `public/screenshots/<ASC locale>/`.
 *
 * Downscaled WebP rather than the uploaded PNGs themselves: the gallery draws them 240pt
 * wide and the store wants 1290px, so serving the originals ships a 500 kB image to render
 * a thumbnail. These are the one generated set that *is* committed — the site builds on a
 * runner with no simulator captures and no browser to composite with. */
export const WEB_DIR = path.join(ROOT, "public", "screenshots");

/** Twice the site's 240pt width, which covers every display the page is read on: the
 * images are an impression of the app at that size, not something anyone reads the
 * numbers off. The height follows each image's own aspect. */
export const WEB_FRAME = { w: 480, quality: 0.82 };

/** Mirrors ios/Oyno/Shared/DesignSystem/Palette.swift exactly.
 *
 * One accent and one alert, and the store frames spend them the same way the app does:
 * the blue marks the one thing that matters in a caption, the red marks money being lost.
 * Everything else is the greyscale the app is built from. */
export const PALETTE = {
  ink: "#18202E",
  slate: "#364152",
  muted: "#4E5869",
  faint: "#7D8696",
  hairline: "#DFE3E9",
  surface: "#FFFFFF",
  canvas: "#FFF8EF",
  accent: "#2F5E9E",
  alert: "#C2412D",
};

/** Mirrors Shared/DesignSystem/Typeface.swift: Figtree for everything, tabular figures for numbers.
 * The family names are the faces' own; `fontFaceCss` lends each one Onest's Cyrillic. */
export const FACES = {
  heading: "'Figtree-ExtraBold'",
  body: "'Figtree-Regular'",
  label: "'Figtree-SemiBold'",
  mono: "'Figtree-Bold'",
  monoBody: "'Figtree-Medium'",
};

/** Figtree has no Cyrillic, so each family takes those letters from Onest, as the app does. */
const CYRILLIC = "U+0400-04FF, U+0500-052F, U+2DE0-2DFF, U+A640-A69F, U+1C80-1C8F";

const FONT_FILES = ["Regular", "Medium", "SemiBold", "Bold", "ExtraBold"].flatMap((weight) => [
  { family: `Figtree-${weight}`, file: `Figtree-${weight}.ttf` },
  { family: `Figtree-${weight}`, file: `Onest-${weight}.ttf`, range: CYRILLIC },
]);

export function pad2(n) {
  return String(n).padStart(2, "0");
}

export function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

export function dataUri(filePath, mime) {
  const contents = readFileSync(filePath).toString("base64");
  return `data:${mime};base64,${contents}`;
}

/** Inline every bundled font face as base64 — no network fetch, no cache: the same TTFs
 * the app itself ships are the source of truth. A ranged face is declared last, so it wins
 * for its letters. */
export function fontFaceCss() {
  return FONT_FILES.map(({ family, file, range }) => {
    const uri = dataUri(path.join(FONTS_DIR, file), "font/ttf");
    const unicodeRange = range ? ` unicode-range: ${range};` : "";
    return `@font-face { font-family: '${family}'; src: url('${uri}') format('truetype'); font-display: block;${unicodeRange} }`;
  }).join("\n");
}

/** The caption file holds the listing's frames under `default` (the key a second store
 * page would sit beside). A file still in the old flat `{ sub, frames }` shape is a mistake
 * worth failing on rather than rendering an empty set nobody looks at before upload. */
export function captionsFor(tag) {
  const file = path.join(CAPTIONS_DIR, `${tag}.json`);
  if (!existsSync(file)) throw new Error(`No captions for ${tag} at ${path.relative(ROOT, file)}`);
  const frames = JSON.parse(readFileSync(file, "utf8")).default;
  if (!Array.isArray(frames) || !frames.length) {
    throw new Error(`${tag}: expected a non-empty array of frames under "default"`);
  }
  // The slug names the uploaded file. A missing one used to produce `01-undefined.png`,
  // which uploads perfectly happily.
  for (const [index, frame] of frames.entries()) {
    if (!frame.slug) throw new Error(`${tag}: frame ${index + 1} has no slug`);
    if (!frame.source === !frame.photo) throw new Error(`${tag}: frame ${index + 1} needs a source or a photo, not both`);
  }
  return frames;
}

/** Emphasis is written inline, as `Quote at the machine, [before you walk away]`.
 *
 * One field rather than a separate `accent` string that has to be a literal substring of
 * the caption: in English the two are written together and always match, but the moment
 * captions are translated one word-order change silently drops the emphasis — the only
 * emphasis this design has, and its absence is invisible unless you already know it should
 * be there. So: one field, and a hard failure rather than a quiet one.
 *
 * A caption emphasises a *number or an outcome*, never a feature — the whole pitch is
 * that this app tells you what things cost. */
export function captionHtml(caption) {
  const match = caption.match(/^([^[\]]*)\[([^\]]+)\]([^[\]]*)$/);
  if (!match) {
    throw new Error(`Caption needs exactly one [emphasis] span: ${JSON.stringify(caption)}`);
  }
  const [, before, emphasis, after] = match;
  return escapeHtml(before)
    + `<span class="hl">${escapeHtml(emphasis)}</span>`
    + escapeHtml(after);
}

/** The emphasis run, in the accent. The app spends this colour on the one action a screen
 * wants; a caption spends it on the one claim a frame makes. Not an underline and not a
 * highlighter block — this is an engineering-tool design, and the emphasis reads as a
 * value rather than as marketing. */
export const HIGHLIGHT_CSS = `
  .hl { color: ${PALETTE.accent}; }
`;

/** The ground every frame sits on: the warm canvas with a faint engineering grid. A canvas
 * shown smaller than a screenshot frame wants a coarser grid and heavier rules, or it reads
 * as noise. */
export function backgroundCss({ cell = 64, rule = 1 } = {}) {
  return `
    background-color: ${PALETTE.canvas};
    background-image:
      linear-gradient(rgba(10,10,10,0.045) ${rule}px, transparent ${rule}px),
      linear-gradient(90deg, rgba(10,10,10,0.045) ${rule}px, transparent ${rule}px);
    background-size: ${cell}px ${cell}px;
  `;
}

export const FRAME_PNG = path.join(SOURCE_DIR, "frame.png");

// Screen rect measured from source/frame.png (flood-fill of the screen fill colour).
export const FRAME = { w: 1424, h: 2956, sx: 52, sy: 44, sw: 1320, sh: 2868, r: 215 };

/** The Dynamic Island, as fractions of the screen's width: an iPhone 17's 125x37pt pill,
 * 11pt below the top of a 402pt screen. A simulator capture never contains it, so the
 * mockup draws it over the capture. */
const ISLAND = { w: 125 / 402, h: 37 / 402, top: 11 / 402 };

/** Device + screen geometry for a target on-canvas phone width. */
export function deviceGeometry(displayWidth) {
  const k = displayWidth / FRAME.w;
  const DEVICE = { w: displayWidth, h: FRAME.h * k };
  const SCREEN = { x: FRAME.sx * k, y: FRAME.sy * k, w: FRAME.sw * k, h: FRAME.sh * k, r: FRAME.r * k };
  return { k, DEVICE, SCREEN };
}

/** A capture composited into the phone mockup at `displayWidth`: the frame image as the
 * base layer, the screenshot layered on top and clipped to the measured screen rect — the
 * frame's own screen fill is opaque, so stacking order (not alpha) is what makes the real
 * capture show through. Falls back to a dashed placeholder if the source capture is
 * missing, so a run with one screen not yet captured still produces a reviewable sheet. */
export function phoneMockupHtml(imgDataUri, displayWidth) {
  const { DEVICE, SCREEN } = deviceGeometry(displayWidth);
  const screenContent = imgDataUri
    ? `<img src="${imgDataUri}" style="width:100%; height:100%; object-fit:cover;">`
    : `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:${PALETTE.surface}; font-family:${FACES.body}; font-size:22px; color:${PALETTE.muted}; text-align:center; padding:24px;">Missing capture — run capture-simulator-screens.mjs first.</div>`;
  return `
    <div style="position:relative; width:${DEVICE.w}px; height:${DEVICE.h}px;">
      <img src="${dataUri(FRAME_PNG, "image/png")}" style="position:absolute; inset:0; width:100%; height:100%;">
      <div style="position:absolute; left:${SCREEN.x}px; top:${SCREEN.y}px; width:${SCREEN.w}px; height:${SCREEN.h}px; border-radius:${SCREEN.r}px; overflow:hidden;">
        ${screenContent}
        <div style="position:absolute; left:50%; top:${ISLAND.top * SCREEN.w}px; width:${ISLAND.w * SCREEN.w}px; height:${ISLAND.h * SCREEN.w}px; transform:translateX(-50%); border-radius:9999px; background:#000;"></div>
      </div>
    </div>
  `;
}

/** Pixel dimensions of a PNG, via `sips`. Used to sanity-check a capture before it is
 * composited — a 0-byte or half-written screenshot otherwise reaches the store as a
 * blank phone. */
export function pixelSize(pngPath) {
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", pngPath]).toString();
  return {
    width: Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]),
    height: Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]),
  };
}
