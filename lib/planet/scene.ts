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
  family: { x: 0.28, y: 0.061, width: 0.44, aspect: 1206 / 1153 },
};

/** How far each layer travels under the finger, as a share of `MAX_OFFSET`. Nearer layers move more. */
export const DEPTH: Record<LayerName, number> = { sky: 0.15, planet: 0.5, family: 1 };

/** The largest parallax shift, in CSS pixels or points. Slight on purpose. */
export const MAX_OFFSET = 10;

/**
 * How the scene scales in each phase of a tap. The planet and the family scale together as
 * one body, about the planet's centre, so the family stays on its feet.
 */
export const SCALE = {
  rest: { sky: 1, body: 1 },
  pressed: { sky: 1, body: 0.98 },
  grown: { sky: 1.06, body: 1.18 },
} as const satisfies Record<string, { sky: number; body: number }>;

/** The planet's centre on the stage, as fractions of its width and height: the body's scale origin. */
export const BODY_ORIGIN = {
  x: LAYERS.planet.x + LAYERS.planet.width / 2,
  y: (LAYERS.planet.y + (LAYERS.planet.width * LAYERS.planet.aspect) / 2) / STAGE_RATIO,
};

export type Phase = keyof typeof SCALE;

/** A layer's box as CSS percentages of the stage. `top` is a share of the stage's height. */
export function layerBox(name: LayerName): { left: string; top: string; width: string } {
  const layer = LAYERS[name];
  const percent = (value: number) => `${+(value * 100).toFixed(3)}%`;
  return { left: percent(layer.x), top: percent(layer.y / STAGE_RATIO), width: percent(layer.width) };
}

/**
 * A layer's box inside a square gallery card, as CSS percentages. Planets sit at the same
 * height on every card, and the home planet's family stands on it as it does on the stage.
 */
export function cardBox(name: "planet" | "family"): { left: string; top: string; width: string } {
  const planetWidth = 0.56;
  const unit = planetWidth / LAYERS.planet.width;
  const top = 0.04 - LAYERS.family.y * unit;
  const layer = LAYERS[name];
  const percent = (value: number) => `${+(value * 100).toFixed(3)}%`;
  return {
    left: percent((1 - layer.width * unit) / 2),
    top: percent(top + layer.y * unit),
    width: percent(layer.width * unit),
  };
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
 * A gallery card's look by its distance from the centre of the strip, in card widths. The
 * centred card is full size; a neighbour one card away is at 80% and half opacity.
 */
export function neighborStyle(distance: number): { scale: number; opacity: number } {
  const away = Math.min(Math.abs(distance), 1);
  return { scale: 1 - 0.2 * away, opacity: 1 - 0.5 * away };
}

/** A colour shift that turns the one planet painting into another world. */
export interface Tint {
  hue: number;
  saturation: number;
  brightness: number;
  grayscale: number;
}

export const WORLD_IDS = ["home", "meadow", "snow", "ocean", "moon", "dune"] as const;
export type WorldId = (typeof WORLD_IDS)[number];

/** A world's words live in each surface's copy deck, keyed by `id`. */
export interface World {
  id: WorldId;
  /** The bloom level that unlocks it. A round together is one bloom. */
  unlocksAt: number;
  tint: Tint;
}

const NONE: Tint = { hue: 0, saturation: 1, brightness: 1, grayscale: 0 };

export const WORLDS: readonly World[] = [
  { id: "home", unlocksAt: 0, tint: NONE },
  { id: "meadow", unlocksAt: 6, tint: { hue: -18, saturation: 1.35, brightness: 1.04, grayscale: 0 } },
  { id: "snow", unlocksAt: 14, tint: { hue: 0, saturation: 0.5, brightness: 1.2, grayscale: 0.7 } },
  { id: "ocean", unlocksAt: 24, tint: { hue: 28, saturation: 1.45, brightness: 1, grayscale: 0 } },
  { id: "moon", unlocksAt: 36, tint: { hue: 0, saturation: 1, brightness: 0.92, grayscale: 1 } },
  { id: "dune", unlocksAt: 50, tint: { hue: -32, saturation: 1.7, brightness: 1.06, grayscale: 0 } },
];

/** The tint as a CSS `filter`. A locked world is also dimmed, so it reads as not yet yours. */
export function tintFilter(tint: Tint, locked: boolean): string {
  const parts = [
    tint.hue && `hue-rotate(${tint.hue}deg)`,
    tint.saturation !== 1 && `saturate(${tint.saturation})`,
    tint.brightness !== 1 && `brightness(${tint.brightness})`,
    tint.grayscale && `grayscale(${tint.grayscale})`,
    locked && "saturate(0.55)",
  ].filter(Boolean);
  return parts.length ? parts.join(" ") : "none";
}

export const isUnlocked = (world: World, bloom: number): boolean => bloom >= world.unlocksAt;
