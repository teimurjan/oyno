#!/usr/bin/env node
// Composites the raw simulator captures (appstore/source/<tag>/*.png) into App
// Store Connect assets for the iPhone 6.9" slot (1290x2796) — one framed
// screenshot per captured screen.
// Renders with headless Chromium (Playwright); everything is inlined as data
// URIs, so there's no external asset serving.
//
// Usage: node appstore/scripts/generate-app-store-screenshots.mjs [--locales=en,de,fr]
//                                                                 [--sources=03,filament]
//
// Where each render lands:
//   appstore/screenshots/<ASC locale>/               deliver's screenshots_path, uploaded as-is
//   public/screenshots/<ASC locale>/                  the same frames, downscaled to WebP for
//                                                     the marketing site's gallery, and only
//                                                     for locales the site has
//
// So `--locales=nb` writes to `screenshots/no/`. There is no separate staging directory to
// sync and no flat English case: every tree is keyed by the locale it belongs to.
//
// `appstore/screenshots/` is not committed — this script is what puts it there, from the
// captures in `appstore/source/<tag>/` (on this Mac's disk only), `appstore/captions/<tag>.json`
// and the fonts in the iOS bundle. `public/screenshots/` is the exception and *is* committed:
// the site deploys from a runner that has neither the captures nor a reason to run a
// browser, so the small set has to be in the tree for the gallery to render at all.
// Run this after every capture, and commit what lands under `public/`.

import { chromium } from "playwright";
import { existsSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { localeFor, SITE_TAGS } from "./lib/locales.mjs";
import {
  backgroundCss,
  captionHtml,
  captionsFor,
  dataUri,
  ensureDir,
  escapeHtml,
  FACES,
  fontFaceCss,
  HIGHLIGHT_CSS,
  pad2,
  PALETTE,
  phoneMockupHtml,
  resolveScreen,
  ROOT,
  SCREENS,
  SCREENSHOTS_DIR,
  SOURCE_DIR,
  WEB_DIR,
  WEB_FRAME,
} from "./lib/screenshot-kit.mjs";

const CANVAS = { w: 1290, h: 2796 };

/** deliver's tree for the listing. Single-theme and no marketing-site mirror, so it is a
 * single directory — none of the theme/site fan-out the sister project needs. */
const outDirFor = (tag) => path.join(SCREENSHOTS_DIR, localeFor(tag).asc);

/** The store canvas: the app's own off-white with a faint engineering grid. A grid rather
 * than the app's flat ground because a store frame has to read at thumbnail size, and the
 * ruled surface is what says "measuring instrument" before a single word is read. */
const DEVICE_WIDTH = 1130;
const CAPTION_TOP = 120;

/** Where the phone's top edge sits, measured from the top of the canvas rather than as a
 * bleed off the bottom.
 *
 * It is the same composition either way — the device is taller than what is left of the
 * canvas below this line, so it still runs off the bottom edge — but the measurement that
 * matters is this one: the gap between the caption and the phone is what a reader sees,
 * and pinning it to the bottom left that gap as whatever the arithmetic happened to
 * produce. It was ~300px under a two-line caption, which reads as a frame with nothing in
 * the middle of it.
 *
 * Fixed rather than derived from each caption's height: the store shows the set as a
 * filmstrip, and a device that moved frame to frame would read as a wobble. */
const DEVICE_TOP = 560;

function frameHtml(frame, sourceDir) {
  const sourcePath = path.join(sourceDir, `${frame.source}.png`);
  const shotDataUri = existsSync(sourcePath) ? dataUri(sourcePath, "image/png") : null;

  return `
  <div style="width:${CANVAS.w}px; height:${CANVAS.h}px; position:relative; overflow:hidden; ${backgroundCss()}">
    <div class="caption" style="position:absolute; top:${CAPTION_TOP}px; left:88px; right:88px; font-family:${FACES.heading}; font-size:112px; line-height:1.06; letter-spacing:-0.03em; color:${PALETTE.ink};">
      ${captionHtml(frame.caption)}
    </div>
    <div style="position:absolute; left:50%; top:${DEVICE_TOP}px; transform:translateX(-50%); filter:drop-shadow(0 40px 70px rgba(10,10,10,0.22));">
      ${phoneMockupHtml(shotDataUri, DEVICE_WIDTH)}
    </div>
  </div>`;
}

function pageHtml(frame, { sourceDir }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    ${HIGHLIGHT_CSS}
    ${fontFaceCss()}
  </style></head><body>${frameHtml(frame, sourceDir)}</body></html>`;
}

/** 112px of Inter fits two or three lines of English in the space above the device.
 * German and Polish routinely need four. Rather than let the caption run into the phone,
 * step the size down until it clears — and say which locale and frame needed it, because
 * the better fix is nearly always shorter copy.
 *
 * The ceiling is the phone's own top edge, less the clearance below, so the two cannot
 * drift apart: moving the device up is what makes a caption too tall, and a hand-written
 * ceiling would have gone on approving one that now overlaps it. The clearance is the
 * slack left over once three lines at the top size fit — that is the promise the size
 * ladder makes, and a gap that reneged on it would quietly drop most of the translations
 * to 100px for the sake of four pixels. */
const CAPTION_SIZES = [112, 100, 90, 80];
const CAPTION_GAP = 80;
const CAPTION_CEILING = DEVICE_TOP - CAPTION_GAP;

async function fitCaption(page, label) {
  for (const size of CAPTION_SIZES) {
    // The constant has to travel with the call: `evaluate` runs in the page,
    // where this module's scope doesn't exist.
    const fits = await page.evaluate(({ px, ceiling }) => {
      const caption = document.querySelector(".caption");
      if (!caption) return true;
      caption.style.fontSize = `${px}px`;
      return caption.getBoundingClientRect().bottom <= ceiling;
    }, { px: size, ceiling: CAPTION_CEILING });
    if (fits) {
      if (size !== CAPTION_SIZES[0]) {
        console.warn(`  ${label}: caption shrunk to ${size}px — consider shortening it`);
      }
      return;
    }
  }
  console.warn(`  ${label}: caption overruns even at ${CAPTION_SIZES.at(-1)}px — shorten it`);
}

/** Re-encodes a finished frame as the small WebP the marketing gallery serves.
 *
 * Chromium is already open, so the resize and the encode happen in a canvas rather than
 * pulling in an image library to do two lines of work. It gets a blank page of its own —
 * the frame page is mid-render and must not be touched.
 *
 * `toDataURL` falls back to PNG for a format the build cannot encode, which would write a
 * PNG under a .webp name and quietly undo the point of the exercise, so the prefix is
 * checked rather than assumed.
 */
async function writeWebFrame(webPage, pngPath, outPath) {
  const dataUrl = await webPage.evaluate(async ({ src, w, h, quality }) => {
    const image = new Image();
    image.src = src;
    await image.decode();
    const canvas = Object.assign(document.createElement("canvas"), { width: w, height: h });
    const context = canvas.getContext("2d");
    context.imageSmoothingQuality = "high";
    context.drawImage(image, 0, 0, w, h);
    return canvas.toDataURL("image/webp", quality);
  }, { src: dataUri(pngPath, "image/png"), ...WEB_FRAME });

  if (!dataUrl.startsWith("data:image/webp")) {
    throw new Error(`This Chromium cannot encode WebP — ${path.relative(ROOT, outPath)} would have been a PNG`);
  }
  writeFileSync(outPath, Buffer.from(dataUrl.slice(dataUrl.indexOf(",") + 1), "base64"));
}

/** Args: `--sources` (or bare names) limits the run to the frames built from those
 * captures, named the way the capture script names them (`filament`, `03`, or a bare `3`).
 * Order-independent, all optional.
 *
 * A capture rather than a frame *index*, which is what this filter used to take: a capture
 * is the thing that was re-shot, and its frame number is a detail of the order the captions
 * put it in. */
function parseArgs(argv) {
  const named = argv.filter((arg) => !arg.startsWith("--"));
  const flag = argv.find((a) => a.startsWith("--sources="))?.split("=")[1];
  const asked = [...named, ...(flag ? flag.split(",") : [])].map((name) => name.trim()).filter(Boolean);
  const sources = asked.length
    ? new Set(asked.map((name) => {
      const found = resolveScreen(name);
      if (!found) {
        console.error(`unknown "${name}" — expected a capture (${SCREENS.map((s) => `${s.nn} ${s.screen}`).join(", ")})`);
        process.exit(1);
      }
      return found.nn;
    }))
    : null;

  const localesFlag = argv.find((a) => a.startsWith("--locales="))?.split("=")[1] ?? "en";
  const locales = localesFlag.split(",").map((tag) => tag.trim()).filter(Boolean);
  locales.forEach(localeFor);

  return { sources, locales };
}

async function main() {
  const { sources, locales } = parseArgs(process.argv.slice(2));

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: CANVAS.w, height: CANVAS.h }, deviceScaleFactor: 1 });
  const webPage = await browser.newPage();

  let count = 0;
  for (const locale of locales) {
    const frames = captionsFor(locale);

    const sourceDir = path.join(SOURCE_DIR, locale);
    // Without this, a locale that was never captured renders eight frames of the
    // "missing capture" placeholder and exits 0 — which is exactly the sort of set
    // that gets uploaded before anyone looks at it.
    if (!existsSync(sourceDir)) {
      throw new Error(`No captures for ${locale} at ${path.relative(ROOT, sourceDir)} — capture first`);
    }
    const outDir = outDirFor(locale);
    // The web set is narrower than the store set: a store locale the site has no page for
    // would have nothing to serve its frames — `public/screenshots/` is the one generated
    // tree that is checked in, which is exactly why it has to stay the size of what the
    // site serves.
    const webDir = SITE_TAGS.includes(locale) ? path.join(WEB_DIR, localeFor(locale).asc) : null;
    const dirs = [outDir, ...(webDir ? [webDir] : [])];
    for (const dir of dirs) {
      // Full runs replace the directory: frame files carry their caption slug, so a
      // reworded caption would otherwise leave the old file beside the new one. A run
      // limited to one capture must not — the frames it is not rendering are the whole
      // reason it was limited.
      if (!sources) rmSync(dir, { recursive: true, force: true });
      ensureDir(dir);
    }
    console.log(`\n${locale}  ->  ${dirs.map((dir) => path.relative(ROOT, dir)).join(", ")}`);

    for (const [index, frame] of frames.entries()) {
      if (sources && !sources.has(frame.source)) continue;
      const nn = pad2(index + 1);
      await page.setContent(pageHtml(frame, { sourceDir }), { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);
      await fitCaption(page, `${locale}/${frame.slug}`);

      const png = path.join(outDir, `${nn}-${frame.slug}.png`);
      await page.screenshot({ path: png });
      if (webDir) await writeWebFrame(webPage, png, path.join(webDir, `${nn}-${frame.slug}.webp`));
      console.log(`  composited  ${nn}-${frame.slug}.png`);
      count += 1;
    }
  }

  await browser.close();
  console.log(`\n${count} screenshot(s) written across {${locales.join(",")}} (${CANVAS.w}x${CANVAS.h}).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
