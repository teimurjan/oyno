import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { loadSource } from "./lib/activityFiles";

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
const MODEL = "gpt-image-2.5-sunburst";
/** The edits API wants edges in multiples of 16. The reference is resized to the same canvas. */
const CANVAS = 1248;
const CONCURRENCY = 6;
const ATTEMPTS = 4;

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

interface Job {
  id: string;
  title: string;
  scene: string;
}

type Result = { ok: true; usage: unknown } | { ok: false; error: string; retry: boolean };

async function paint(reference: Blob, job: Job): Promise<Result> {
  const form = new FormData();
  form.append("model", MODEL);
  form.append("image[]", reference, "planet.png");
  form.append("prompt", prompt(job.title, job.scene));
  form.append("size", `${CANVAS}x${CANVAS}`);
  form.append("quality", "high");
  form.append("background", "transparent");
  form.append("output_format", "png");
  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: form,
  }).catch((error: Error) => error);
  if (response instanceof Error) return { ok: false, error: response.message, retry: true };
  const body = (await response.json().catch(() => ({}))) as {
    data?: { b64_json: string }[];
    usage?: unknown;
    error?: { message: string };
  };
  const image = body.data?.[0]?.b64_json;
  if (!response.ok || !image) {
    const retry = response.status === 429 || response.status >= 500;
    return { ok: false, error: `${response.status} ${body.error?.message ?? "no image"}`, retry };
  }
  await Bun.write(path.join(OUT, `${job.id}.png`), Buffer.from(image, "base64"));
  return { ok: true, usage: body.usage };
}

/** Rate limits and server errors back off and try again; a refused prompt does not. */
async function paintWithRetry(reference: Blob, job: Job): Promise<Result> {
  for (let attempt = 1; ; attempt++) {
    const result = await paint(reference, job);
    if (result.ok || !result.retry || attempt === ATTEMPTS) return result;
    await Bun.sleep(2 ** attempt * 5_000);
  }
}

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set.");
  process.exit(1);
}

const scenes = (await Bun.file(SCENES).json()) as Record<string, string>;
const games = loadSource().activities.flatMap((game) =>
  scenes[game.id] ? [{ id: game.id, title: game.title, scene: scenes[game.id] }] : [],
);
const wanted = process.argv.slice(2);
const unknown = wanted.filter((id) => !scenes[id]);
if (unknown.length) {
  console.error(`No scene for ${unknown.join(", ")}. Add it to art/activity-scenes.json first.`);
  process.exit(1);
}
const painted = (id: string) => Bun.file(path.join(OUT, `${id}.png`)).size > 0;
const queue = games.filter((game) => (wanted.length ? wanted.includes(game.id) : !painted(game.id)));
const total = queue.length;
console.log(`Painting ${total} of ${games.length} games with a scene.`);

await mkdir(OUT, { recursive: true });
const reference = new Blob([await sharp(REFERENCE).resize(CANVAS, CANVAS).png().toBuffer()], { type: "image/png" });

let done = 0;
let failed = 0;
const worker = async () => {
  for (let job = queue.shift(); job; job = queue.shift()) {
    const result = await paintWithRetry(reference, job);
    done++;
    if (result.ok) console.log(`${done}/${total} ${job.id}: ok`);
    else {
      failed++;
      console.error(`${done}/${total} ${job.id}: ${result.error}`);
    }
  }
};
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
process.exit(failed ? 1 : 0);
