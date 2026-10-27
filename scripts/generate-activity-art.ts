import path from "node:path";
import { loadSource } from "./lib/activityFiles";
import { paintMissing } from "./lib/imageEdits";

/**
 * Paints one illustration per game with OpenAI's image edits, styled from the Earth master
 * (`art/source/planet.png`). Each game is its own props on a small floating rug, with no people.
 * The scene per game is `art/activity-scenes.json`. Writes `art/source/activities/<id>.png`, which
 * `bun run art:build` ships. `bun run art:activities` paints every game not painted yet, and
 * `bun run art:activities <id>…` repaints those games.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const REFERENCE = path.join(ROOT, "art/source/planet.png");
const SCENES = path.join(ROOT, "art/activity-scenes.json");
const OUT = path.join(ROOT, "art/source/activities");
const CANVAS = 1248;
const CONCURRENCY = 6;

const prompt = (title: string, scene: string) => `The attached image is the STYLE REFERENCE: a handmade storybook planet.

Create one illustration for a parent-and-toddler game called “${title}”.

SCENE:
A small, round, hand-knitted rug in soft sage and cream floats on its own, like a tiny world.
${scene}

STYLE LOCK:
Match the reference exactly: poetic handmade 3D storybook look, softly sculpted felt, papier-mâché and matte clay, visible knit and paper-fiber textures, slightly imperfect handcrafted shapes, delicate pencil-like details, gentle low-contrast shading.
Warm golden-hour light from the upper left, soft golden rim light, soft contact shadow under the rug.
Palette: muted sage, ochre, warm cream, dusty lavender, soft terracotta. No saturated or neon colors.

COMPOSITION:
Three-quarter view from slightly above. The props read clearly at a small size.
Center the rug, with generous transparent padding on every side.

OUTPUT:
- Square canvas, genuinely transparent background
- No people, hands or body parts
- No room, walls, furniture or floor beyond the rug
- No text, letters, logos or numbers
- No real animals: any animal is a handmade toy
- No glossy plastic, photorealism or mainstream animated-movie styling`;

const scenes = (await Bun.file(SCENES).json()) as Record<string, string>;
const games = loadSource().activities.flatMap((game) =>
  scenes[game.id] ? [{ id: game.id, title: game.title, scene: scenes[game.id] }] : [],
);

await paintMissing({
  jobs: games,
  noun: "games with a scene",
  source: "art/activity-scenes.json",
  reference: REFERENCE,
  out: OUT,
  canvas: CANVAS,
  concurrency: CONCURRENCY,
  prompt: (game) => prompt(game.title, game.scene),
});
