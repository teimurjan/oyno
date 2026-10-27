/**
 * The planet scene as data and arithmetic, shared by the landing hero (React) and the funnel
 * widget (Preact). Pure: no DOM, no framework. `ios/Oyno/Domain/World.swift` and
 * `ios/Oyno/Screens/Home/PlanetScene.swift` carry the same numbers.
 */

export type LayerName = "sky" | "planet" | "family";

/**
 * Where each layer sits on the stage, in stage widths. The stage is `STAGE_RATIO` widths
 * tall. The sky is square and fades out at its edges; its painted contact shadow sits just
 * under the planet, so the planet reads as floating above it.
 */
export const STAGE_RATIO = 1.25;

export const LAYERS: Record<LayerName, { x: number; y: number; width: number; aspect: number }> = {
  sky: { x: 0, y: 0.25, width: 1, aspect: 1 },
  planet: { x: 0.2, y: 0.486, width: 0.6, aspect: 996 / 1041 },
  family: { x: 0.28, y: 0.095, width: 0.44, aspect: 1206 / 1153 },
};

/** How far each layer travels under the finger, as a share of `MAX_OFFSET`. Nearer layers move more. */
export const DEPTH: Record<LayerName, number> = { sky: 0.15, planet: 0.5, family: 1 };

/** The largest parallax shift, in CSS pixels or points. Slight on purpose. */
export const MAX_OFFSET = 10;

/**
 * How the planet and the family scale in each phase, as one body about the planet's foot, so
 * the body stays over its painted shadow. Open is the body shrunk into the gallery's centred
 * slide, which draws the same planet at the same scale and place.
 */
export const BODY_SCALE = { rest: 1, pressed: 0.98, open: 0.7 } as const satisfies Record<string, number>;

export type Phase = keyof typeof BODY_SCALE;

/** The planet's foot on the stage, as fractions of its width and height: the body's scale origin. */
export const BODY_ORIGIN = {
  x: LAYERS.planet.x + LAYERS.planet.width / 2,
  y: (LAYERS.planet.y + LAYERS.planet.width * LAYERS.planet.aspect) / STAGE_RATIO,
};

/** How much of each neighbour's planet the gallery shows at the stage's edges. */
export const PEEK = 0.15;

/** A gallery slide's width in stage widths: the gap between two planets' centres. */
export const SLIDE_WIDTH = 0.5 + LAYERS.planet.width * BODY_SCALE.open * (0.5 - PEEK);

/** The strip's inline style: the CSS reads the slide width from it, before any script runs. */
export const STRIP_STYLE = { "--slide": String(SLIDE_WIDTH) };

/** A layer's box as CSS percentages of the stage. `top` is a share of the stage's height. */
export function layerBox(name: LayerName): { left: string; top: string; width: string } {
  const layer = LAYERS[name];
  const percent = (value: number) => `${+(value * 100).toFixed(3)}%`;
  return { left: percent(layer.x), top: percent(layer.y / STAGE_RATIO), width: percent(layer.width) };
}

export interface Point {
  x: number;
  y: number;
}

export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * How far one layer shifts while the stage is pressed at `pointer`. It moves away from the
 * finger, in proportion to the finger's distance from the centre, clamped to `max × depth`.
 */
export function layerOffset(pointer: Point, rect: Rect, depth: number, max = MAX_OFFSET): Point {
  if (rect.width <= 0 || rect.height <= 0) return { x: 0, y: 0 };
  const clamp = (value: number) => Math.max(-1, Math.min(1, value));
  const dx = clamp((pointer.x - (rect.left + rect.width / 2)) / (rect.width / 2));
  const dy = clamp((pointer.y - (rect.top + rect.height / 2)) / (rect.height / 2));
  return { x: -dx * max * depth || 0, y: -dy * max * depth || 0 };
}

/**
 * How much a gallery slide is in focus by its distance from the strip's centre, in slide
 * widths: 1 when centred, 0 from one slide away.
 */
export function slideFocus(distance: number): number {
  return 1 - Math.min(Math.abs(distance), 1);
}

export const WORLD_IDS = [
  "earth", "meadow", "ember", "blossom", "lagoon", "dune", "frost", "lavender", "moss", "honey", "cloud",
  "coral", "rose", "pebble", "orchard", "aurora", "clay", "mint", "twilight", "poppy", "pearl", "canyon",
  "rain", "cedar", "sunlit", "berry", "glacier", "marigold", "dream", "hearth", "home",
] as const;
export type WorldId = (typeof WORLD_IDS)[number];

/** A world's words live in each surface's copy deck, keyed by `id`. Its painting is `ART.planets[id]`. */
export interface World {
  id: WorldId;
  /** The bloom points that unlock it: 10 a round and 1 a minute played. */
  unlocksAt: number;
}

/**
 * Points from the world before to the `index`th: 50, then 10 more for each world after, so
 * Home, the thirtieth, opens at 5,850.
 */
const pointsToReach = (index: number): number => 50 + 10 * (index - 1);

const unlocksAt = (index: number): number =>
  Array.from({ length: index }, (_, step) => pointsToReach(step + 1)).reduce((sum, points) => sum + points, 0);

export const WORLDS: readonly World[] = WORLD_IDS.map((id, index) => ({ id, unlocksAt: unlocksAt(index) }));

/** A locked world is dimmed, so it reads as not yet yours. */
export const lockedStyle = (locked: boolean) => (locked ? { filter: "saturate(0.55)", opacity: 0.7 } : {});

export const isUnlocked = (world: World, points: number): boolean => points >= world.unlocksAt;
