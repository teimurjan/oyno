#!/usr/bin/env node
// Renders the web favicon set from one HTML source. The iOS app icon is an Icon Composer
// document (ios/Oyno/AppIcon.icon) and is not generated here.
//
// Usage: node scripts/build-icons.mjs
//
// The mark is four bars on a baseline: a month of weeks, one of them short. Drawn rather
// than sourced so it inherits the palette from one place, and re-rendering after a palette
// change is one command.

import { chromium } from "playwright";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const INK = "#0A0A0A";
const ACCENT = "#0F62FE";
const PAPER = "#FAFAFA";

/** Bar heights as a share of the plot area. Rising, then one short — a month where three
 * weeks paid and one did not, which is the story every screen in the app tells. */
const BARS = [0.42, 0.58, 0.86, 0.3];

function markSvg(size) {
  const pad = size * 0.22;
  const plot = size - pad * 2;
  const gap = plot * 0.09;
  const width = (plot - gap * (BARS.length - 1)) / BARS.length;
  const radius = Math.max(1, size * 0.012);

  const bars = BARS.map((fraction, index) => {
    const height = plot * fraction;
    const x = pad + index * (width + gap);
    const y = pad + plot - height;
    // The tallest bar is the accent — the one week that carried the month. Everything
    // else is ink, the same rule the app follows.
    const fill = fraction === Math.max(...BARS) ? ACCENT : INK;
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}"/>`;
  }).join("");

  const baselineY = pad + plot + size * 0.045;
  const baseline = `<rect x="${pad}" y="${baselineY}" width="${plot}" height="${Math.max(1, size * 0.022)}" rx="${radius}" fill="${INK}"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="${PAPER}"/>
    ${bars}
    ${baseline}
  </svg>`;
}

const WEB_ICONS = [
  { out: "public/ico/icon-32.png", size: 32 },
  { out: "public/ico/icon-192.png", size: 192 },
  { out: "public/ico/icon-512.png", size: 512 },
  { out: "public/ico/apple-icon-180x180.png", size: 180 },
];

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });

  for (const { out, size } of WEB_ICONS) {
    const target = path.join(ROOT, out);
    mkdirSync(path.dirname(target), { recursive: true });
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(
      `<!doctype html><html><body style="margin:0">${markSvg(size)}</body></html>`,
      { waitUntil: "load" },
    );
    await page.screenshot({ path: target, omitBackground: false });
    console.log(`  ${out}  ${size}×${size}`);
  }

  await browser.close();

  // An .ico is what a bare `/favicon.ico` request wants; browsers accept a PNG payload in
  // one, and every target this ships to does.
  const favicon = path.join(ROOT, "public/ico/favicon.ico");
  if (!existsSync(favicon)) {
    const { readFileSync } = await import("node:fs");
    writeFileSync(favicon, readFileSync(path.join(ROOT, "public/ico/icon-32.png")));
    console.log("  public/ico/favicon.ico  (from icon-32)");
  }

  writeFileSync(
    path.join(ROOT, "public/ico/manifest.json"),
    JSON.stringify(
      {
        name: "Oyno",
        short_name: "Oyno",
        icons: [
          { src: "/ico/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/ico/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        theme_color: PAPER,
        background_color: PAPER,
        display: "standalone",
      },
      null,
      2,
    ) + "\n",
  );
  console.log("  public/ico/manifest.json");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
