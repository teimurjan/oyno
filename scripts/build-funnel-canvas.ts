import { $ } from "bun";
import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import { WEB_FUNNEL, type FunnelAnswers } from "@/components/funnel/steps";

/**
 * Draws the web funnel onto the design canvas: one `Funnel-*` artboard per step plus the done
 * page, captured from the built funnel in headless Chromium at 390 wide and written to
 * `.canvas/project/`. Publish that folder to the canvas after any funnel change.
 *
 * The artboards keep the funnel's own classes and link `funnel.css`, the built stylesheet, so
 * they are the shipped markup rather than a redrawing of it. Every request off localhost is
 * aborted, so a capture reports nothing to Amplitude or Meta.
 *
 * `--index <canvas.json>` rewrites a downloaded copy of the canvas's index in place: the
 * `Funnel-*` boards, their order and their two notes, every other key left as it was.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const PUBLIC = path.join(ROOT, "public");
const OUT = path.join(ROOT, ".canvas/project");
const PORT = 7073;
const WIDTH = 390;
const HEIGHT = 844;
/** Below the canvas's last row of app screens. */
const ROW_Y = 4060;
const GAP_X = 80;

/** One answer per question, so each step is drawn as a reader who answered everything before it sees it. */
const ANSWERS: FunnelAnswers = {
  problem: "scroll",
  age: "1-3",
  hardest: "afterwork",
  pickups: "often",
  apps: "instagram|youtube",
  energy: "low",
  ideas: "sometimes",
  tried: "limits",
  minutes: "ten",
  soon: "tonight",
};

/** Raster images the funnel draws, by site path, and the canvas upload that holds each. A capture
 * can inline an SVG but not upload a picture, so a new one is uploaded to the canvas by hand
 * and named here. */
const CANVAS_IMAGES: Record<string, string> = {
  "/ico/apple-icon-180x180.png": "/_blob/291256662c89f5ed9fdd23c75cffc2bb",
  "/art/activities/doctor-kid-patient.webp": "/_blob/1c53e159508732e96df3a0a9cd95f8e9",
};

/** The steps that run a demo or build something before they settle. */
const SETTLE_MS: Record<string, number> = { evening: 4500, plan: 7000, influence: 2500 };
const DEFAULT_SETTLE_MS = 1500;

interface Board {
  file: string;
  title: string;
  url: string;
  answers: FunnelAnswers;
  settleMs: number;
}

const boardFile = (index: number, id: string) => `Funnel-${String(index + 1).padStart(2, "0")}-${id}.dc.html`;

const STEP_FILES = WEB_FUNNEL.steps.map((step, index) => boardFile(index, step.id));

function boards(): Board[] {
  const steps = WEB_FUNNEL.steps.map((step, index) => {
    const before = new Set(WEB_FUNNEL.steps.slice(0, index).map((earlier) => earlier.question?.key ?? earlier.id));
    return {
      file: STEP_FILES[index],
      title: `Web ${index + 1} · ${step.id}`,
      url: `/start#step-${index}`,
      answers: Object.fromEntries(Object.entries(ANSWERS).filter(([key]) => before.has(key))),
      settleMs: SETTLE_MS[step.kind] ?? DEFAULT_SETTLE_MS,
    };
  });
  const done = {
    file: boardFile(steps.length, "done"),
    title: `Web ${steps.length + 1} · done`,
    url: "/start/done",
    answers: ANSWERS,
    settleMs: DEFAULT_SETTLE_MS,
  };
  return [...steps, done];
}

/** `public/` as Vercel serves it, with the funnel's two rewrites and a quote that offers lifetime at list prices. */
function serve() {
  return Bun.serve({
    port: PORT,
    async fetch(request) {
      const { pathname } = new URL(request.url);
      if (pathname === "/api/funnel/quote") return Response.json({ configured: false, lifetime: true });
      if (pathname.startsWith("/api/")) return new Response(null, { status: 404 });
      const file = pathname === "/start" ? "funnel/index.html" : pathname === "/start/done" ? "funnel/done.html" : pathname;
      const served = Bun.file(path.join(PUBLIC, file));
      return (await served.exists()) ? new Response(served) : new Response(null, { status: 404 });
    },
  });
}

/** The built stylesheet without its `@font-face` rules, whose URLs only the site serves. The canvas loads Figtree from Google Fonts. */
async function stylesheet(): Promise<string> {
  const name = (await readdir(path.join(PUBLIC, "funnel"))).find((file) => /^funnel-.+\.css$/.test(file));
  if (!name) throw new Error("no funnel stylesheet in public/funnel — did funnel:build fail?");
  const css = await Bun.file(path.join(PUBLIC, "funnel", name)).text();
  return css.replace(/@font-face\{[^}]*\}/g, "");
}

/** The settled step as artboard markup: hidden and inert parts dropped, step links pointed at artboards. */
async function capture(page: Page, board: Board): Promise<{ markup: string; height: number }> {
  await page.setViewportSize({ width: WIDTH, height: HEIGHT });
  await page.goto(`http://localhost:${PORT}${board.url}`);
  await page.waitForTimeout(board.settleMs);

  // A step taller than the phone gets a taller artboard rather than a clipped one.
  const overflow = await page.evaluate(() => {
    const main = document.querySelector("main");
    return main ? main.scrollHeight - main.clientHeight : 0;
  });
  const height = HEIGHT + Math.max(0, overflow);
  if (overflow > 0) {
    await page.setViewportSize({ width: WIDTH, height });
    await page.waitForTimeout(300);
  }

  const markup = await page.evaluate(async ({ files, images }: { files: string[]; images: Record<string, string> }) => {
    const root = document.querySelector("#funnel-root")?.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
    if (!root) throw new Error("the funnel did not render");
    root.classList.remove("h-dvh", "min-h-dvh");
    root.style.height = "100%";
    for (const node of root.querySelectorAll("[inert], script, iframe, noscript")) node.remove();
    for (const anchor of root.querySelectorAll("a[href]")) {
      const step = anchor.getAttribute("href")?.match(/#step-(\d+)/);
      if (step && files[Number(step[1])]) anchor.setAttribute("href", files[Number(step[1])]);
    }
    for (const button of root.querySelectorAll("button:not([type])")) button.setAttribute("type", "button");
    for (const form of root.querySelectorAll("form")) form.removeAttribute("action");
    for (const image of root.querySelectorAll<HTMLImageElement>('img[src$=".svg"]')) {
      const svg = await (await fetch(image.src)).text();
      image.outerHTML = svg.replace(/<!--[\s\S]*?-->/g, "").trim();
    }
    for (const image of root.querySelectorAll("img")) {
      const source = image.getAttribute("src") ?? "";
      if (!images[source]) throw new Error(`${source} has no canvas upload: add it to CANVAS_IMAGES`);
      image.setAttribute("src", images[source]);
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let text = walker.nextNode(); text; text = walker.nextNode()) {
      text.nodeValue = text.nodeValue?.replaceAll("{{", "{ {") ?? null;
    }
    return root.outerHTML;
  }, { files: STEP_FILES, images: CANVAS_IMAGES });

  return { markup, height };
}

function artboard(board: Board, markup: string, height: number): string {
  const props = JSON.stringify({ $preview: { width: WIDTH, height } });
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Oyno funnel · ${board.title}</title>
<script src="./support.js"></script>
<link rel="stylesheet" href="./funnel.css">
</head>
<body>
<x-dc>
<helmet>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
<style>
body{margin:0}
</style>
</helmet>
<div style="width: ${WIDTH}px; height: ${height}px; overflow: hidden; font-family: 'Figtree', system-ui, sans-serif">
${markup}
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='${props}'>
class Component extends DCLogic {
  renderVals() {
    return {};
  }
}
</script>
</body>
</html>
`;
}

interface CanvasIndex {
  boards: Record<string, Record<string, unknown>>;
  order: string[];
  notes: Record<string, Record<string, unknown>>;
}

/** Replaces the index's `Funnel-*` entries with this capture's and returns the files no longer drawn. */
async function rewriteIndex(indexPath: string, drawn: { board: Board; height: number }[]): Promise<string[]> {
  const index = (await Bun.file(indexPath).json()) as CanvasIndex;
  const isFunnel = (file: string) => file.startsWith("Funnel-");
  const files = new Set(drawn.map(({ board }) => board.file));
  const stale = Object.keys(index.boards).filter((file) => isFunnel(file) && !files.has(file));

  const boards = Object.fromEntries(Object.entries(index.boards).filter(([file]) => !isFunnel(file)));
  drawn.forEach(({ board, height }, position) => {
    boards[board.file] = { x: position * (WIDTH + GAP_X), y: ROW_Y, w: WIDTH, h: height, radius: 48, title: board.title };
  });
  const rowWidth = drawn.length * (WIDTH + GAP_X) - GAP_X;
  index.boards = boards;
  index.order = [...index.order.filter((file) => !isFunnel(file)), ...drawn.map(({ board }) => board.file)];
  index.notes.titleFunnel = { kind: "title1", maxW: rowWidth, text: "Web funnel: /start, captured from the build", x: 0, y: ROW_Y - 300 };
  index.notes.stickyFunnel = {
    fill: "orange",
    w: 340,
    x: rowWidth + GAP_X,
    y: ROW_Y,
    text:
      "The web funnel, generated\n\nEvery artboard in this row is the shipped funnel, captured by `bun run funnel:canvas` from the build at 390 wide in English. Do not edit them here: the next capture overwrites them. Change the funnel in code, capture and publish.\n\nEach step is drawn as a reader who answered every question before it. The account step is signed out. The checkout shows its signed-out note, because Dodo's card form is a frame from Dodo that a capture cannot draw.",
  };
  await Bun.write(indexPath, `${JSON.stringify(index, null, 2)}\n`);
  return stale;
}

async function main() {
  const indexFlag = process.argv.indexOf("--index");
  const indexPath = indexFlag === -1 ? undefined : process.argv[indexFlag + 1];

  await $`bun run funnel:build`.cwd(ROOT).quiet();
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  await Bun.write(path.join(OUT, "funnel.css"), await stylesheet());

  const server = serve();
  const browser = await chromium.launch();
  const drawn: { board: Board; height: number }[] = [];
  try {
    for (const board of boards()) {
      const context = await browser.newContext({ deviceScaleFactor: 1, locale: "en-US" });
      await context.route(/^(?!http:\/\/localhost)/, (route) => route.abort());
      await context.addInitScript((answers) => {
        sessionStorage.setItem("oyno.funnel.answers", JSON.stringify(answers));
      }, board.answers);
      const page = await context.newPage();
      const { markup, height } = await capture(page, board);
      await Bun.write(path.join(OUT, board.file), artboard(board, markup, height));
      drawn.push({ board, height });
      console.log(`${board.file.padEnd(32)} ${WIDTH}×${height}`);
      await context.close();
    }
  } finally {
    await browser.close();
    server.stop();
  }

  if (!indexPath) return;
  const stale = await rewriteIndex(indexPath, drawn);
  for (const file of stale) console.log(`stale: ${file} — remove it from the canvas`);
}

await main();
