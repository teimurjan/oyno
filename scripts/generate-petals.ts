import path from "node:path";
import { paintMissing } from "./lib/imageEdits";

/**
 * Paints the petals that drift on the orbit around the planet after a round, styled from the
 * Earth master (`art/source/planet.png`). They are the planet blooming, never collected, so each
 * is smaller and simpler than a keepsake and floats with no shadow. The pieces are
 * `art/petals.json`. Writes `art/source/petals/<id>.png`. `bun run art:petals` paints every
 * petal not painted yet, and `bun run art:petals <id>…` repaints those.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const REFERENCE = path.join(ROOT, "art/source/planet.png");
const PETALS = path.join(ROOT, "art/petals.json");
const OUT = path.join(ROOT, "art/source/petals");
const CANVAS = 1024;
const CONCURRENCY = 4;

interface Petal {
  id: string;
  name: string;
  piece: string;
}

const prompt = (petal: Petal) => `The attached image is the STYLE REFERENCE: a handmade storybook planet.

Create one tiny piece called “${petal.name}”: a bit of the planet blooming that drifts in the air around it.

PIECE:
${petal.piece}

STYLE LOCK:
Match the reference: poetic handmade 3D storybook look, softly sculpted felt and paper, slightly imperfect handcrafted shape, gentle shading.
Warm golden-hour light from the upper left, soft golden rim light.
Palette: muted sage, ochre, warm cream, dusty blush, soft terracotta. No saturated or neon colors.

READS WHEN TINY:
It is shown at 20 points, smaller than any icon, so it must read as one soft shape.
One simple silhouette with no thin parts, no fine lines and no small details.
A faint warm glow around its edge, so it stands out on a pale sky.

COMPOSITION:
Seen from slightly above, a little tilted, as if it is floating. Centered, filling about 70% of the canvas, with even transparent padding.
It floats: no shadow under it.

OUTPUT:
- Square canvas, genuinely transparent background
- No shadow, ground, base, stem or other pieces
- No stars, leaves, feathers or other objects
- No people, hands or body parts
- No text, letters, logos or numbers
- No glossy plastic, photorealism or mainstream animated-movie styling`;

const entries = (await Bun.file(PETALS).json()) as Record<string, Omit<Petal, "id">>;

await paintMissing({
  jobs: Object.entries(entries).map(([id, petal]) => ({ id, ...petal })),
  noun: "petals",
  source: "art/petals.json",
  reference: REFERENCE,
  out: OUT,
  canvas: CANVAS,
  concurrency: CONCURRENCY,
  prompt,
});
