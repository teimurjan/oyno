import path from "node:path";
import { paintMissing } from "./lib/imageEdits";

/**
 * Paints the keepsakes, the objects a moment leaves on the planet, styled from the Earth master
 * (`art/source/planet.png`). Each is one object with no rug, bolder and simpler than a game's
 * illustration, because it is drawn at icon size. The objects are `art/keepsakes.json`. Writes
 * `art/source/keepsakes/<id>.png`. `bun run art:keepsakes` paints every keepsake not painted
 * yet, and `bun run art:keepsakes <id>…` repaints those.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const REFERENCE = path.join(ROOT, "art/source/planet.png");
const KEEPSAKES = path.join(ROOT, "art/keepsakes.json");
const OUT = path.join(ROOT, "art/source/keepsakes");
const CANVAS = 1024;
const CONCURRENCY = 6;

interface Keepsake {
  id: string;
  name: string;
  kind: "game" | "reading" | "bath" | "cooking" | "lead" | "rare";
  object: string;
}

const RARE = `
RARE FIND:
Give its edges a faint warm golden shimmer, still in the same handmade materials.
`;

const prompt = (keepsake: Keepsake) => `The attached image is the STYLE REFERENCE: a handmade storybook planet.

Create one keepsake called “${keepsake.name}”: a small object a family finds on their planet after playing together.

OBJECT:
${keepsake.object}
${keepsake.kind === "rare" ? RARE : ""}
STYLE LOCK:
Match the reference: poetic handmade 3D storybook look, softly sculpted felt, papier-mâché and matte clay, visible knit and paper-fiber textures, slightly imperfect handcrafted shapes, gentle shading.
Warm golden-hour light from the upper left, soft golden rim light.
Palette: muted sage, ochre, warm cream, dusty lavender, soft terracotta. No saturated or neon colors.

READS WHEN SMALL:
It is shown as a 40-point icon, so it must read at a glance.
One object only, with a bold, simple silhouette and a few large details.
A little more contrast and warmth than the reference, so it stands out on a pale sky.
Thin lines, pencil details and fine textures never carry the shape.

COMPOSITION:
Three-quarter view from slightly above. The object is centered and fills about 70% of the canvas, with even transparent padding.
Only a faint soft contact shadow under it.

OUTPUT:
- Square canvas, genuinely transparent background
- No rug, base, ground, scene or other props
- No people, hands or body parts
- No text, letters, logos or numbers
- No real animals: any animal is a handmade toy
- No glossy plastic, photorealism or mainstream animated-movie styling`;

const entries = (await Bun.file(KEEPSAKES).json()) as Record<string, Omit<Keepsake, "id">>;

await paintMissing({
  jobs: Object.entries(entries).map(([id, keepsake]) => ({ id, ...keepsake })),
  noun: "keepsakes",
  source: "art/keepsakes.json",
  reference: REFERENCE,
  out: OUT,
  canvas: CANVAS,
  concurrency: CONCURRENCY,
  prompt,
});
