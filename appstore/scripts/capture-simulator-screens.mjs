#!/usr/bin/env node
// Boots a simulator, builds the Debug configuration (so the #if DEBUG
// ScreenshotHarness is compiled in), and captures one raw PNG per seeded
// screen. Run this first; then generate-app-store-screenshots.mjs and
// generate-product-hunt-screenshots.mjs composite the results.
//
// The simulator itself — boot, build, install, launch, the crash check — is
// lib/simulator.mjs.
//
// Usage: node appstore/scripts/capture-simulator-screens.mjs ["iPhone 17"]
//                                                            [--locales=en,ru]
//                                                            [--screens=filament,03]

import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { localeFor } from "./lib/locales.mjs";
import { ensureDir, resolveScreen, ROOT, SCREENS, SOURCE_DIR } from "./lib/screenshot-kit.mjs";
import { captureScreen, clearStatusBar, DEFAULT_DEVICE, prepareSimulator, warmUp } from "./lib/simulator.mjs";

const DEVICE_NAME = (process.argv[2] && !process.argv[2].startsWith("--")) ? process.argv[2] : DEFAULT_DEVICE;

/** Which languages to capture. Passed to the app as launch arguments rather than
 * by switching the simulator's system language — they land in NSArgumentDomain,
 * the same route `--screenshot` already takes, so no device state changes and
 * the locales can be captured back to back. */
const LOCALES = (process.argv.find((a) => a.startsWith("--locales="))?.split("=")[1] ?? "en")
  .split(",").map((tag) => tag.trim()).filter(Boolean);

/** Which screens to photograph, defaulting to every one.
 *
 * A screen that changed is usually the only reason to run this at all — a filter control
 * added to the shelf makes one frame stale and leaves six correct — and each screen costs
 * a launch and a four-second wait in every locale. What is not captured is left on disk
 * untouched, which is the point: the frames in `appstore/source/<tag>/` persist between runs,
 * so the ones this run skips stay exactly as they were. They are not committed, so a fresh
 * clone's first run has to be a full one.
 */
function selectedScreens() {
  const flag = process.argv.find((a) => a.startsWith("--screens="))?.split("=")[1];
  if (!flag) return SCREENS;
  return flag.split(",").map((name) => name.trim()).filter(Boolean).map((name) => {
    const found = resolveScreen(name);
    if (!found) {
      throw new Error(
        `Unknown screen "${name}". Have: ${SCREENS.map((s) => `${s.nn} ${s.screen}`).join(", ")}`,
      );
    }
    return found;
  });
}

async function main() {
  const screens = selectedScreens();
  if (screens.length !== SCREENS.length) {
    console.log(`Capturing ${screens.length} of ${SCREENS.length} screens: ${screens.map((s) => s.screen).join(", ")}`);
  }
  const device = prepareSimulator(DEVICE_NAME);
  await warmUp(device, screens[0].screen);

  for (const locale of LOCALES) {
    const outDir = path.join(SOURCE_DIR, locale);
    ensureDir(outDir);
    console.log(`Capturing ${locale} -> ${path.relative(ROOT, outDir)}`);
    await captureLocale(device, locale, outDir, screens);
  }

  clearStatusBar(device);

  for (const locale of LOCALES) {
    const captured = readdirSync(path.join(SOURCE_DIR, locale)).filter((f) => f.endsWith(".png"));
    console.log(`Done — ${captured.length} raw ${locale} screenshots in appstore/source/${locale}/.`);
  }
  // The same subset, handed on: compositing the six frames this run did not touch would
  // rewrite six identical PNGs and, for the committed web set, six identical WebPs.
  const sources = screens.length === SCREENS.length ? "" : ` --sources=${screens.map((s) => s.nn).join(",")}`;
  console.log(`Next: node appstore/scripts/generate-app-store-screenshots.mjs --locales=${LOCALES.join(",")}${sources}`);
}

async function captureLocale(device, locale, outDir, screens) {
  // No two seeded screens look alike, so two identical frames mean the delay ran out
  // before the app drew and `simctl` photographed the launch screen twice. That is the
  // same failure `assertStillRunning` exists for — an image that uploads perfectly happily
  // and looks deliberate — and it has to stop the run rather than be found later.
  const seen = new Map();

  for (const { nn, screen, delay, camera } of screens) {
    console.log(`  "${screen}" → ${nn}.png`);
    const file = path.join(outDir, `${nn}.png`);
    const extraArgs = camera ? ["--screenshot-camera", path.join(SOURCE_DIR, camera)] : [];
    await captureScreen(device, { screen, locale, sim: localeFor(locale).sim, file, delay, extraArgs });

    const digest = createHash("sha1").update(readFileSync(file)).digest("hex");
    const twin = seen.get(digest);
    if (twin) {
      throw new Error(
        `${locale}: "${screen}" and "${twin}" captured the same image — the app had not `
        + "finished drawing when the screenshot was taken. Raise DEFAULT_DELAY and run again.",
      );
    }
    seen.set(digest, screen);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
