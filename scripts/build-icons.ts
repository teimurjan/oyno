import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import opentype from "opentype.js";
import sharp from "sharp";
import { glyphSvg, MARK, markSvg, wordmarkSvg, type Letters } from "@/lib/mark";

/**
 * Renders the favicon set, the wordmark and the iOS `SplashMark`, `SplashSky` and `Wordmark`
 * images from `lib/mark.ts`. The app icon is the Icon Composer document `ios/Oyno/AppIcon.icon`,
 * made by hand, with the same sky gradient.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const ASSETS = path.join(ROOT, "ios/Oyno/Resources/Assets.xcassets");

const WEB_ICONS = [
  { out: "public/ico/icon-32.png", size: 32 },
  { out: "public/ico/icon-192.png", size: 192 },
  { out: "public/ico/icon-512.png", size: 512 },
  { out: "public/ico/apple-icon-180x180.png", size: 180 },
];

const rasterize = (svg: string) => sharp(Buffer.from(svg)).png().toBuffer();
const render = (size: number) => rasterize(markSvg(size));

/** A tall strip, stretched to the screen by the launch storyboard and the splash alike. */
const skySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="1024"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${MARK.sky[0]}"/><stop offset="1" stop-color="${MARK.sky[1]}"/></linearGradient></defs><rect width="8" height="1024" fill="url(#sky)"/></svg>`;

/** The site's `tracking-[-0.04em]`, in thousandths of an em. */
const TRACKING = -40;

function outlineLetters(): Letters {
  const font = opentype.loadSync(path.join(ROOT, "ios/Oyno/Resources/Fonts/Figtree-ExtraBold.ttf"));
  const letters = font.getPath("yno", 0, 0, 1000, { tracking: TRACKING });
  return { d: letters.toPathData(1), box: letters.getBoundingBox() };
}

async function writeImageSet(name: string, file: string, png: Buffer, scale?: "3x") {
  const dir = path.join(ASSETS, `${name}.imageset`);
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
  await Bun.write(path.join(dir, file), png);
  await Bun.write(
    path.join(dir, "Contents.json"),
    `${JSON.stringify({ images: [{ filename: file, idiom: "universal", ...(scale && { scale }) }], info: { author: "xcode", version: 1 } }, null, 2)}\n`,
  );
  const { width, height } = await sharp(png).metadata();
  console.log(`  ${name}.imageset  ${width}×${height}`);
}

await mkdir(path.join(ROOT, "public/ico"), { recursive: true });
for (const { out, size } of WEB_ICONS) {
  await Bun.write(path.join(ROOT, out), await render(size));
  console.log(`  ${out}  ${size}×${size}`);
}
// Browsers accept a PNG payload inside an .ico.
await Bun.write(path.join(ROOT, "public/ico/favicon.ico"), await render(32));
await Bun.write(
  path.join(ROOT, "public/ico/manifest.json"),
  `${JSON.stringify(
    {
      name: "Oyno",
      short_name: "Oyno",
      icons: [
        { src: "/ico/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/ico/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      theme_color: "#FFF8EF",
      background_color: "#FFF8EF",
      display: "standalone",
    },
    null,
    2,
  )}\n`,
);

const letters = outlineLetters();
const wordmark = wordmarkSvg(letters, 20);
await Bun.write(path.join(ROOT, "public/ico/wordmark.svg"), wordmark.svg);
console.log(`  public/ico/wordmark.svg  ${wordmark.width}×${wordmark.height}`);

await writeImageSet("SplashMark", "splash-mark.png", await rasterize(glyphSvg(1024)));
await writeImageSet("SplashSky", "splash-sky.png", await rasterize(skySvg));
// At 3x of the 22pt home header; the funnel's 20pt one scales it down.
await writeImageSet("Wordmark", "wordmark.png", await rasterize(wordmarkSvg(letters, 66).svg), "3x");
