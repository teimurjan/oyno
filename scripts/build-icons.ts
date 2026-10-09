import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { markSvg } from "@/lib/mark";

/**
 * Renders the favicon set and the iOS `AppMark` image from `lib/mark.ts`. The app icon is the
 * Icon Composer document `ios/Oyno/AppIcon.icon`, made by hand, with the same sky gradient.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const ASSETS = path.join(ROOT, "ios/Oyno/Resources/Assets.xcassets");
const MARK_SET = path.join(ASSETS, "AppMark.imageset");

const WEB_ICONS = [
  { out: "public/ico/icon-32.png", size: 32 },
  { out: "public/ico/icon-192.png", size: 192 },
  { out: "public/ico/icon-512.png", size: 512 },
  { out: "public/ico/apple-icon-180x180.png", size: 180 },
];

const render = (size: number, tile = true) => sharp(Buffer.from(markSvg(size, { tile }))).png().toBuffer();

await mkdir(path.join(ROOT, "public/ico"), { recursive: true });
for (const { out, size } of WEB_ICONS) {
  await Bun.write(path.join(ROOT, out), await render(size));
  console.log(`  ${out}  ${size}×${size}`);
}
// Browsers accept a PNG payload inside an .ico.
await Bun.write(path.join(ROOT, "public/ico/favicon.ico"), await render(32));
await Bun.write(path.join(ROOT, "public/ico/mark.svg"), markSvg(100));
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

await rm(MARK_SET, { recursive: true, force: true });
await mkdir(MARK_SET, { recursive: true });
await Bun.write(path.join(MARK_SET, "app-mark.png"), await render(1024));
await Bun.write(
  path.join(MARK_SET, "Contents.json"),
  `${JSON.stringify({ images: [{ filename: "app-mark.png", idiom: "universal" }], info: { author: "xcode", version: 1 } }, null, 2)}\n`,
);
console.log("  AppMark.imageset  1024×1024");

