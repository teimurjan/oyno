#!/usr/bin/env node
// Composites the raw simulator captures (appstore/source/<tag>/*.png) into App
// Store Connect assets for the iPhone 6.9" slot (1290x2796) — one framed
// screenshot per captured screen. `--devices=ipad,ipad-11,duo-outer` does the same for
// the iPad 13" slot (2752x2064), the iPad 11" slot (2360x1640) and the iPhone Duo slot on its
// outer display (1398x2034), from appstore/source/<device>/<tag>/.
// Renders with headless Chromium (Playwright); everything is inlined as data
// URIs, so there's no external asset serving.
//
// Usage: node appstore/scripts/generate-app-store-screenshots.mjs [--locales=en,de,fr]
//                                                                 [--sources=03,play]
//                                                                 [--devices=iphone,ipad,ipad-11,duo-outer]
//
// Where each render lands:
//   appstore/screenshots/<ASC locale>/               deliver's screenshots_path, uploaded as-is
//   public/screenshots/<ASC locale>/                  the same frames, downscaled to WebP for
//                                                     the marketing site's gallery, and only
//                                                     for locales the site has
//   public/screenshots/<ASC locale>/screens/          each frame's raw capture, captionless,
//                                                     named by the frame's slug
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
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { localeFor, SITE_TAGS } from "./lib/locales.mjs";
import {
  captionHtml,
  captionsFor,
  dataUri,
  deviceFor,
  deviceGeometry,
  ensureDir,
  FACES,
  fontFaceCss,
  pad2,
  PALETTE,
  phoneMockupHtml,
  pixelSize,
  resolveScreen,
  ROOT,
  SCREENS,
  SCREENSHOTS_DIR,
  sourceDirFor,
  WEB_DIR,
  WEB_FRAME,
} from "./lib/screenshot-kit.mjs";

const CANVAS = deviceFor("iphone").canvas;

/** deliver's tree for the listing. Single-theme and no marketing-site mirror, so it is a
 * single directory — none of the theme/site fan-out the sister project needs. */
const outDirFor = (tag) => path.join(SCREENSHOTS_DIR, localeFor(tag).asc);

/** The store ground: the planet's blue, so a frame stands apart from the white store page
 * and from the cream app inside it. Captions are white on it and the emphasis is gold. */
const GROUND = `background: linear-gradient(180deg, ${PALETTE.sheen} 0%, ${PALETTE.accent} 100%);`;
const CAPTION_CSS = `.hl { color: ${PALETTE.gold}; }`;

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

/** A callout lifts one widget off the screen: the same capture, cropped to the widget the app
 * reported, drawn larger over it with the phone's shadow while a light veil quiets the rest. */
const CALLOUT = { zoom: 1.3, padPt: 12, radiusPt: 28, margin: 48, veil: 0.12 };

/** A capture with the widget positions it reported, keyed by its `nn`. */
function loadSource(sourceDir, nn) {
  const shotPath = path.join(sourceDir, `${nn}.png`);
  if (!existsSync(shotPath)) return null;
  const reportPath = path.join(sourceDir, `${nn}.json`);
  return {
    nn,
    shot: dataUri(shotPath, "image/png"),
    capture: pixelSize(shotPath),
    report: existsSync(reportPath) ? JSON.parse(readFileSync(reportPath, "utf8")) : null,
  };
}

/** The widgets reported for `ids`, in points and padded so a card's edge comes along.
 * Several ids are the box that holds them all. */
function paddedRect({ nn, report }, ids, pad = { x: CALLOUT.padPt, y: CALLOUT.padPt }) {
  const rects = [ids].flat().map((id) => {
    const found = report?.callouts?.[id];
    if (!found) throw new Error(`Capture ${nn} reported no "${id}" callout — recapture it`);
    return found;
  });
  const x = Math.min(...rects.map((r) => r.x)) - pad.x;
  const y = Math.min(...rects.map((r) => r.y)) - pad.y;
  return {
    x,
    y,
    w: Math.max(...rects.map((r) => r.x + r.w)) + pad.x - x,
    h: Math.max(...rects.map((r) => r.y + r.h)) + pad.y - y,
  };
}

/** The capture cut to `from` (points), drawn at `scale` canvas pixels per capture pixel. */
function liftedHtml({ shot, capture, report }, from, scale, style) {
  const px = report.scale * scale;
  return `
    <div style="width:${from.w * px}px; height:${from.h * px}px; border-radius:${CALLOUT.radiusPt * px}px; overflow:hidden; filter:drop-shadow(0 40px 70px rgba(10,10,10,0.28)); background-image:url('${shot}'); background-repeat:no-repeat; background-size:${capture.width * scale}px ${capture.height * scale}px; background-position:${-from.x * px}px ${-from.y * px}px; ${style}"></div>`;
}

function calloutHtml(frame, source) {
  const { capture, report } = source;
  const from = paddedRect(source, frame.callout);
  const { SCREEN } = deviceGeometry(DEVICE_WIDTH);
  const k = SCREEN.w / capture.width;
  const screenLeft = (CANVAS.w - DEVICE_WIDTH) / 2 + SCREEN.x;
  const screenTop = DEVICE_TOP + SCREEN.y;
  const toCanvas = (pt) => pt * report.scale * k;

  const zoom = Math.min(frame.zoom ?? CALLOUT.zoom, (CANVAS.w - 2 * CALLOUT.margin) / toCanvas(from.w));
  const w = toCanvas(from.w) * zoom;
  const h = toCanvas(from.h) * zoom;
  const clamp = (value, max) => Math.min(Math.max(value, CALLOUT.margin), max - CALLOUT.margin);
  const left = clamp(screenLeft + toCanvas(from.x + from.w / 2) - w / 2, CANVAS.w - w);
  const top = clamp(screenTop + toCanvas(from.y + from.h / 2) - h / 2, CANVAS.h - h);

  return `
    <div style="position:absolute; left:${screenLeft}px; top:${screenTop}px; width:${SCREEN.w}px; height:${SCREEN.h}px; border-radius:${SCREEN.r}px; background:${PALETTE.canvas}; opacity:${CALLOUT.veil};"></div>
    ${liftedHtml(source, from, k * zoom, `position:absolute; left:${left}px; top:${top}px;`)}`;
}

/** A frame with `art` is the listing's cover, read top to bottom: the game's painting, the
 * low battery it is for, what it asks, and what it practiced. The widgets come from the
 * game's capture and its Done screen. Each one is tilted a little, so the column reads as
 * things picked up off the screen rather than a form. No age pill: App Review reads an age
 * on the listing as a Kids category app. */
const HERO = { artTop: 380, artSize: 1000, rug: 0.86, bottom: 100, margin: 64, arrow: 96 };

/** Sizes as multiples of the practiced card's, which spans the margins. */
const ZOOM = { low: 1.35, chip: 1.6 };

/** The Done screen's capture, which has no frame of its own. */
const PRACTICED = "09";

/** The time and the first two things the game needs, each its own card. The edges stay inside
 * the 6pt gaps between them. */
const NEEDS = [
  { id: "meta.time", tilt: -6, lift: -12 },
  { id: "meta.tag0", tilt: 4, lift: 18 },
  { id: "meta.tag1", tilt: -3, lift: 0 },
];
const NEEDS_PAD = { x: 5, y: 5 };

/** "Low" is the first of the picker's three equal options, inside its 4pt track inset. */
function lowRect({ x, y, w, h }) {
  const track = 4;
  return { x, y, w: track + (w - 2 * track) / 3, h };
}

/** Under the 10pt before the next option's icon, so none of "Okay" comes along. */
const LOW_PAD = { x: 8, y: 6 };

function unionRect(rects, pad) {
  const x = Math.min(...rects.map((r) => r.x)) - pad.x;
  const y = Math.min(...rects.map((r) => r.y)) - pad.y;
  return {
    x,
    y,
    w: Math.max(...rects.map((r) => r.x + r.w)) + pad.x - x,
    h: Math.max(...rects.map((r) => r.y + r.h)) + pad.y - y,
  };
}

const arrowHtml = () => `
  <svg width="64" height="${HERO.arrow}" viewBox="0 0 64 ${HERO.arrow}" style="flex:none;">
    <path d="M32 10 V${HERO.arrow - 14} M12 ${HERO.arrow - 36} L32 ${HERO.arrow - 12} L52 ${HERO.arrow - 36}" stroke="${PALETTE.gold}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

function heroHtml(frame, source, sourceDir) {
  const done = loadSource(sourceDir, PRACTICED);
  if (!done) throw new Error(`Frame "${frame.slug}" needs capture ${PRACTICED} — capture it first`);
  const { callouts } = source.report;
  for (const id of ["battery.label", "energy"]) {
    if (!callouts[id]) throw new Error(`Capture ${source.nn} reported no "${id}" callout — recapture it`);
  }
  const low = unionRect([callouts["battery.label"], lowRect(callouts.energy)], LOW_PAD);
  const practiced = paddedRect(done, "practiced", { x: 16, y: 16 });
  // Canvas pixels per point at zoom 1: the practiced card spans the margins.
  const perPt = (CANVAS.w - 2 * HERO.margin) / practiced.w;
  const lift = (from, rect, zoom, style) => liftedHtml(from, rect, (perPt * zoom) / from.report.scale, `flex:none; ${style}`);
  const chips = NEEDS.map(({ id, tilt, lift: dy }) => lift(source, paddedRect(source, id, NEEDS_PAD), ZOOM.chip, `transform:translateY(${dy}px) rotate(${tilt}deg);`)).join("");
  const art = dataUri(path.join(ROOT, "art", "source", "activities", `${frame.art}.png`), "image/png");

  return `
    <img src="${art}" style="position:absolute; left:${(CANVAS.w - HERO.artSize) / 2}px; top:${HERO.artTop}px; width:${HERO.artSize}px; height:${HERO.artSize}px;">
    <div style="position:absolute; left:0; right:0; top:${HERO.artTop + HERO.rug * HERO.artSize}px; bottom:${HERO.bottom}px; display:flex; flex-direction:column; align-items:center; justify-content:space-evenly;">
      ${lift(source, low, ZOOM.low, "transform:rotate(-2deg);")}
      ${arrowHtml()}
      <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:28px 40px; padding:0 ${HERO.margin}px;">
        ${chips}
      </div>
      ${arrowHtml()}
      ${lift(done, practiced, 1, "transform:rotate(1.5deg);")}
    </div>`;
}

/** iPad and the closed iPhone Duo sit under a caption lined up with them, running off the foot like
 * the phone. The capture is the canvas's own size, so it fills the photograph's screen. */
const SLATE = { top: 440, bleed: 120 };

/** The device `height` tall: the photograph, turned a quarter anticlockwise if `turned`, the
 * capture under its transparent screen and a few pixels past it, under the bezel. */
const UNDERLAP = 4;

function mockupHtml(capture, height, mockup) {
  const k = height / (mockup.turned ? mockup.w : mockup.h);
  const width = (mockup.turned ? mockup.h : mockup.w) * k;
  const { x, y, w, h, radius: [tl, tr, br, bl] } = mockup.screen;
  const screen = mockup.turned
    ? { x: y * k, y: (mockup.w - x - w) * k, w: h * k, h: w * k }
    : { x: x * k, y: y * k, w: w * k, h: h * k };
  // Clipped to the screen's own corners, or it shows past the frame's rounder outer ones.
  const corners = (mockup.turned ? [tr, br, bl, tl] : [tl, tr, br, bl]).map((r) => `${r * k + UNDERLAP}px`).join(" ");
  return {
    width,
    html: `
    <div style="position:relative; width:${width}px; height:${height}px;">
      <img src="${capture}" style="position:absolute; left:${screen.x - UNDERLAP}px; top:${screen.y - UNDERLAP}px; width:${screen.w + 2 * UNDERLAP}px; height:${screen.h + 2 * UNDERLAP}px; border-radius:${corners}; object-fit:cover;">
      <img src="${dataUri(mockup.file, "image/png")}" style="position:absolute; left:${(width - mockup.w * k) / 2}px; top:${(height - mockup.h * k) / 2}px; width:${mockup.w * k}px; height:${mockup.h * k}px;${mockup.turned ? " transform:rotate(-90deg);" : ""}">
    </div>`,
  };
}

function slateFrameHtml(frame, sourceDir, canvas, mockup) {
  const sourcePath = path.join(sourceDir, `${frame.source}.png`);
  if (!existsSync(sourcePath)) throw new Error(`No capture at ${path.relative(ROOT, sourcePath)} for frame "${frame.slug}"`);
  const capture = dataUri(sourcePath, "image/png");
  const height = canvas.h + SLATE.bleed - SLATE.top;
  const device = mockupHtml(capture, height, mockup);
  const left = (canvas.w - device.width) / 2;

  return `
  <div style="width:${canvas.w}px; height:${canvas.h}px; position:relative; overflow:hidden; ${GROUND}">
    <div class="caption" style="position:absolute; top:${CAPTION_TOP}px; left:${left}px; right:${left}px; font-family:${FACES.heading}; font-size:${CAPTION_SIZES[0]}px; line-height:1.06; letter-spacing:-0.03em; color:${PALETTE.surface};">
      ${captionHtml(frame.caption)}
    </div>
    <div style="position:absolute; left:${left}px; top:${SLATE.top}px; filter:drop-shadow(0 40px 70px rgba(10,10,10,0.22));">
      ${device.html}
    </div>
  </div>`;
}

function frameHtml(frame, sourceDir, device) {
  const { canvas, mockup } = deviceFor(device);
  if (device !== "iphone") return slateFrameHtml(frame, sourceDir, canvas, mockup);
  const source = loadSource(sourceDir, frame.source);
  const body = frame.art && source
    ? heroHtml(frame, source, sourceDir)
    : `<div style="position:absolute; left:50%; top:${DEVICE_TOP}px; transform:translateX(-50%); filter:drop-shadow(0 40px 70px rgba(10,10,10,0.22));">
      ${phoneMockupHtml(source?.shot ?? null, DEVICE_WIDTH)}
    </div>
    ${frame.callout && source ? calloutHtml(frame, source) : ""}`;

  return `
  <div style="width:${CANVAS.w}px; height:${CANVAS.h}px; position:relative; overflow:hidden; ${GROUND}">
    <div class="caption" style="position:absolute; top:${CAPTION_TOP}px; left:88px; right:88px; font-family:${FACES.heading}; font-size:${CAPTION_SIZES[0]}px; line-height:1.06; letter-spacing:-0.03em; color:${PALETTE.surface};">
      ${captionHtml(frame.caption)}
    </div>
    ${body}
  </div>`;
}

function pageHtml(frame, { sourceDir, device }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    ${CAPTION_CSS}
    ${fontFaceCss()}
  </style></head><body>${frameHtml(frame, sourceDir, device)}</body></html>`;
}

/** The top size fits two or three lines of English in the space above the device.
 * German and Polish routinely need four. Rather than let the caption run into the phone,
 * step the size down until it clears — and say which locale and frame needed it, because
 * the better fix is nearly always shorter copy.
 *
 * The ceiling is the phone's own top edge, less the clearance below, so the two cannot
 * drift apart: moving the device up is what makes a caption too tall, and a hand-written
 * ceiling would have gone on approving one that now overlaps it. The clearance is the
 * slack left over once three lines at the top size fit — that is the promise the size
 * ladder makes, and a gap that reneged on it would quietly drop most of the translations
 * to 115px for the sake of four pixels. */
const CAPTION_SIZES = [129, 115, 104, 92];
const CAPTION_GAP = 28;
const CAPTION_CEILING = DEVICE_TOP - CAPTION_GAP;

/** Where a frame's caption must end: above the device. */
const captionCeiling = (device) => (device === "iphone" ? CAPTION_CEILING : SLATE.top - CAPTION_GAP);

async function fitCaption(page, label, ceiling = CAPTION_CEILING) {
  for (const size of CAPTION_SIZES) {
    // The constant has to travel with the call: `evaluate` runs in the page,
    // where this module's scope doesn't exist.
    const fits = await page.evaluate(({ px, ceiling }) => {
      const caption = document.querySelector(".caption");
      if (!caption) return true;
      caption.style.fontSize = `${px}px`;
      return caption.getBoundingClientRect().bottom <= ceiling;
    }, { px: size, ceiling });
    if (fits) {
      if (size !== CAPTION_SIZES[0]) {
        console.warn(`  ${label}: caption shrunk to ${size}px — consider shortening it`);
      }
      return;
    }
  }
  console.warn(`  ${label}: caption overruns even at ${CAPTION_SIZES.at(-1)}px — shorten it`);
}

/** Re-encodes a frame or a capture as the small WebP the marketing site serves.
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
  const dataUrl = await webPage.evaluate(async ({ src, w, quality }) => {
    const image = new Image();
    image.src = src;
    await image.decode();
    const h = Math.round((w * image.naturalHeight) / image.naturalWidth);
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
 * captures, named the way the capture script names them (`play`, `02`, or a bare `2`).
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

  const devicesFlag = argv.find((a) => a.startsWith("--devices="))?.split("=")[1] ?? "iphone";
  const devices = devicesFlag.split(",").map((name) => name.trim()).filter(Boolean);
  devices.forEach(deviceFor);

  return { sources, locales, devices };
}

/** A device's frames in a locale's folder, which every device shares. */
const isFrameOf = (file, prefix) => new RegExp(`^${prefix}\\d{2}-.+\\.png$`).test(file);

async function main() {
  const { sources, locales, devices } = parseArgs(process.argv.slice(2));

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const webPage = await browser.newPage();

  let count = 0;
  for (const device of devices) {
    const { canvas } = deviceFor(device);
    await page.setViewportSize({ width: canvas.w, height: canvas.h });
    for (const locale of locales) {
      count += await renderLocale({ page, webPage, device, locale, sources });
    }
  }

  await browser.close();
  console.log(`\n${count} screenshot(s) written across {${locales.join(",")}} for {${devices.join(",")}}.`);
}

async function renderLocale({ page, webPage, device, locale, sources }) {
  const { prefix, slugs } = deviceFor(device);
  const frames = captionsFor(locale);
  let count = 0;

  const sourceDir = sourceDirFor(device, locale);
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
  // site serves. And it is the phone's alone.
  const webDir = device === "iphone" && SITE_TAGS.includes(locale) ? path.join(WEB_DIR, localeFor(locale).asc) : null;
  const dirs = [outDir, ...(webDir ? [webDir] : [])];
  // Full runs replace this device's frames: frame files carry their caption slug, so a
  // reworded caption would otherwise leave the old file beside the new one. A run
  // limited to one capture must not — the frames it is not rendering are the whole
  // reason it was limited. The other devices' frames share the folder and stay.
  ensureDir(outDir);
  if (!sources) {
    for (const file of readdirSync(outDir).filter((name) => isFrameOf(name, prefix))) rmSync(path.join(outDir, file));
    if (webDir) rmSync(webDir, { recursive: true, force: true });
  }
  if (webDir) ensureDir(path.join(webDir, "screens"));
  console.log(`\n${device} ${locale}  ->  ${dirs.map((dir) => path.relative(ROOT, dir)).join(", ")}`);

  for (const [index, frame] of frames.entries()) {
    if (sources && !sources.has(frame.source)) continue;
    if (slugs && !slugs.includes(frame.slug)) continue;
    const nn = pad2(index + 1);
    await page.setContent(pageHtml(frame, { sourceDir, device }), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await fitCaption(page, `${device}/${locale}/${frame.slug}`, captionCeiling(device));

    const png = path.join(outDir, `${prefix}${nn}-${frame.slug}.png`);
    await page.screenshot({ path: png });
    if (webDir) await writeWebFrame(webPage, png, path.join(webDir, `${nn}-${frame.slug}.webp`));
    if (webDir) {
      await writeWebFrame(webPage, path.join(sourceDir, `${frame.source}.png`), path.join(webDir, "screens", `${frame.slug}.webp`));
    }
    console.log(`  composited  ${prefix}${nn}-${frame.slug}.png`);
    count += 1;
  }
  return count;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
