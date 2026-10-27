import path from "node:path";
import { paintMissing } from "./lib/imageEdits";

/**
 * Paints one illustration per everyday moment on Play (reading, bath, cooking, their lead),
 * styled from the Earth master (`art/source/planet.png`). Unlike a game's illustration, the
 * props stand alone with no rug under them. The scenes are `art/moments.json`. Writes
 * `art/source/moments/<id>.png`. `bun run art:moments` paints every moment not painted yet,
 * and `bun run art:moments <id>…` repaints those.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const REFERENCE = path.join(ROOT, "art/source/planet.png");
const MOMENTS = path.join(ROOT, "art/moments.json");
const OUT = path.join(ROOT, "art/source/moments");
const CANVAS = 1248;
const CONCURRENCY = 4;

interface Moment {
  id: string;
  name: string;
  scene: string;
}

const prompt = (moment: Moment) => `The attached image is the STYLE REFERENCE: a handmade storybook planet.

Create one illustration for “${moment.name}”, an everyday moment a parent shares with a toddler.

SCENE:
${moment.scene}

STYLE LOCK:
Match the reference exactly: poetic handmade 3D storybook look, softly sculpted felt, papier-mâché and matte clay, visible knit and paper-fiber textures, slightly imperfect handcrafted shapes, delicate pencil-like details, gentle low-contrast shading.
Warm golden-hour light from the upper left, soft golden rim light.
Palette: muted sage, ochre, warm cream, dusty lavender, soft terracotta. No saturated or neon colors.

COMPOSITION:
Three-quarter view from slightly above. One small, tight group of props that reads clearly at a small size.
The props stand on nothing: no rug, mat, base, plinth, ground or floor, only a soft contact shadow under them.
Center the group, with generous transparent padding on every side.

OUTPUT:
- Square canvas, genuinely transparent background
- No rug, mat or round base of any kind
- No people, hands or body parts
- No room, walls or furniture
- No text, letters, logos or numbers
- No real animals: any animal is a handmade toy
- No glossy plastic, photorealism or mainstream animated-movie styling`;

const entries = (await Bun.file(MOMENTS).json()) as Record<string, Omit<Moment, "id">>;

await paintMissing({
  jobs: Object.entries(entries).map(([id, moment]) => ({ id, ...moment })),
  noun: "moments",
  source: "art/moments.json",
  reference: REFERENCE,
  out: OUT,
  canvas: CANVAS,
  concurrency: CONCURRENCY,
  prompt,
});
