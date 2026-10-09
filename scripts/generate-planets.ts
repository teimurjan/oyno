import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/**
 * Paints every world's planet with OpenAI's image edits, each from the Earth master
 * (`art/source/planet.png`), never from another generated planet, so style and size do not
 * drift. Writes `art/source/planets/<id>.png` and skips files already there: delete one to
 * repaint it. `bun run art:planets [id…]`, then `bun run art:build`.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const MASTER = path.join(ROOT, "art/source/planet.png");
const OUT = path.join(ROOT, "art/source/planets");
const MODEL = "gpt-image-2.5-sunburst";
/** The edits API wants edges in multiples of 16. The master is resized to the same canvas. */
const CANVAS = 1248;
const CONCURRENCY = 4;

const PLANETS: readonly { id: string; name: string; direction: string }[] = [
  { id: "meadow", name: "Meadow", direction: "Powder-blue water, soft sage meadows, tiny cream clouds and sparse grass" },
  { id: "ember", name: "Ember", direction: "Warm terracotta terrain, charcoal valleys and small glowing amber fissures" },
  { id: "blossom", name: "Blossom", direction: "Muted coral land, dusty-pink flowering patches and pale peach clouds" },
  { id: "lagoon", name: "Lagoon", direction: "Mostly turquoise water with scattered mint islands and ivory sand edges" },
  { id: "dune", name: "Dune", direction: "Faded ochre deserts, soft cream dunes and a few dusty-blue salt lakes" },
  { id: "frost", name: "Frost", direction: "Pale blue ice, ivory snowfields and subtle translucent frozen lakes" },
  { id: "lavender", name: "Lavender", direction: "Muted lavender plains, dusty-blue water and small cream hilltops" },
  { id: "moss", name: "Moss", direction: "Deep sage moss, forest-green patches and small muted teal ponds" },
  { id: "honey", name: "Honey", direction: "Warm golden terrain, ochre valleys and creamy amber lakes" },
  { id: "cloud", name: "Cloud", direction: "Ivory landforms surrounded by pale blue water and abundant soft clouds" },
  { id: "coral", name: "Coral", direction: "Faded coral islands, muted turquoise seas and pale shell-colored shores" },
  { id: "rose", name: "Rose", direction: "Dusty-rose terrain, cream rivers and muted burgundy vegetation" },
  { id: "pebble", name: "Pebble", direction: "Blue-gray stone terrain, sage lichen and small silvery lakes" },
  { id: "orchard", name: "Orchard", direction: "Gentle green terrain dotted with tiny ochre and coral tree-like marks" },
  { id: "aurora", name: "Aurora", direction: "Dusky-blue surface with subtle mint, lavender and peach painted ribbons" },
  { id: "clay", name: "Clay", direction: "Handmade ochre and terracotta continents with chalky cream waterways" },
  { id: "mint", name: "Mint", direction: "Pale mint terrain, powder-blue seas and tiny ivory cloud clusters" },
  { id: "twilight", name: "Twilight", direction: "Muted indigo oceans, lavender land and a soft warm horizon glow" },
  { id: "poppy", name: "Poppy", direction: "Sage fields dotted with tiny restrained coral-red flower patches" },
  { id: "pearl", name: "Pearl", direction: "Warm ivory terrain with restrained opalescent blue and lavender accents" },
  { id: "canyon", name: "Canyon", direction: "Rust-colored terrain, layered ochre ridges and narrow dusty-blue rivers" },
  { id: "rain", name: "Rain", direction: "Soft blue-gray oceans, mossy islands and delicate painted rain patterns" },
  { id: "cedar", name: "Cedar", direction: "Muted forest-green terrain, deep teal water and sparse ochre clearings" },
  { id: "sunlit", name: "Sunlit", direction: "Cream land, warm golden fields and pale sky-blue lakes" },
  { id: "berry", name: "Berry", direction: "Muted plum landforms, dusty lavender valleys and sage-green accents" },
  { id: "glacier", name: "Glacier", direction: "Powder-blue ice sheets, white ridges and deep muted-blue cracks" },
  { id: "marigold", name: "Marigold", direction: "Faded mustard plains, sage valleys and warm cream cloud formations" },
  { id: "dream", name: "Dream", direction: "Restrained watercolor patches of peach, lavender, mint and powder blue" },
  { id: "hearth", name: "Hearth", direction: "Warm amber land, terracotta hills and small cream-colored lakes" },
  { id: "home", name: "Home", direction: "Balanced sage, blue, peach and gold terrain, the warmest and most welcoming planet" },
];

const prompt = (index: number, name: string, direction: string) => `The attached image is the MASTER REFERENCE planet: Planet 0, Earth.

Create Planet ${index}, named “${name}”.

SURFACE DIRECTION:
${direction}

Use the attached Earth as an immutable geometry, composition and style template.

GEOMETRY LOCK:
- Output the exact same canvas dimensions and aspect ratio as the reference.
- The planet must occupy exactly the same visual bounding box as the reference.
- Keep the exact same planet diameter, circular silhouette, center point and vertical position.
- Keep the same camera angle, viewing distance, perspective and rotation.
- Keep the same amount of transparent padding on every side.
- The new planet must align directly over the reference without needing to be resized or repositioned.
- Do not crop or enlarge the planet.

STYLE LOCK:
Preserve exactly the same poetic handmade 3D storybook direction: softly sculpted papier-mâché, felt and matte clay; watercolor-painted surfaces; subtle paper fibers; slightly imperfect handcrafted shapes; delicate pencil-like details; gentle low-contrast shading.

Preserve the same lighting direction from the upper left, soft golden rim light, shadow softness, material roughness and overall level of detail.

CHANGE ONLY:
Change the planet’s surface colors, terrain, vegetation, clouds and small environmental characteristics according to the surface direction above.

Do not reuse Earth’s recognizable continents. Create simple fictional land shapes with no identifiable real-world geography.

OUTPUT:
- One isolated planet
- Genuinely transparent background
- No floor or background
- No text
- Do not display the planet’s name or number
- No people, buildings, spaceships, moons, rings or floating decorations
- No glossy plastic, photorealism, neon colors or mainstream animated-movie styling`;

type Result = { ok: true; usage: unknown } | { ok: false; error: string };

async function paint(master: Blob, index: number, planet: (typeof PLANETS)[number]): Promise<Result> {
  const form = new FormData();
  form.append("model", MODEL);
  form.append("image[]", master, "earth.png");
  form.append("prompt", prompt(index, planet.name, planet.direction));
  form.append("size", `${CANVAS}x${CANVAS}`);
  form.append("quality", "high");
  form.append("background", "transparent");
  form.append("output_format", "png");
  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: form,
  });
  const body = (await response.json()) as { data?: { b64_json: string }[]; usage?: unknown; error?: { message: string } };
  const image = body.data?.[0]?.b64_json;
  if (!response.ok || !image) return { ok: false, error: `${response.status} ${body.error?.message ?? "no image"}` };
  await Bun.write(path.join(OUT, `${planet.id}.png`), Buffer.from(image, "base64"));
  return { ok: true, usage: body.usage };
}

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set.");
  process.exit(1);
}

await mkdir(OUT, { recursive: true });
const master = new Blob([await sharp(MASTER).resize(CANVAS, CANVAS).png().toBuffer()], { type: "image/png" });
const wanted = new Set(process.argv.slice(2));
const queue = PLANETS.map((planet, index) => ({ planet, index: index + 1 })).filter(
  ({ planet }) => (wanted.size === 0 || wanted.has(planet.id)) && !Bun.file(path.join(OUT, `${planet.id}.png`)).size,
);

let failed = 0;
const worker = async () => {
  for (let job = queue.shift(); job; job = queue.shift()) {
    const result = await paint(master, job.index, job.planet);
    if (result.ok) console.log(`${job.index} ${job.planet.id}: ok ${JSON.stringify(result.usage)}`);
    else {
      failed++;
      console.error(`${job.index} ${job.planet.id}: ${result.error}`);
    }
  }
};
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
process.exit(failed ? 1 : 0);
