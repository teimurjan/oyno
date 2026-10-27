import { describe, expect, test } from "bun:test";
import { BODY_SCALE, DEPTH, LAYERS, MAX_OFFSET, PEEK, SLIDE_WIDTH, layerOffset, slideFocus, WORLDS } from "./scene";

const stage = { left: 0, top: 0, width: 200, height: 250 };

describe("layerOffset", () => {
  test("a press at the centre moves nothing", () => {
    expect(layerOffset({ x: 100, y: 125 }, stage, 1)).toEqual({ x: 0, y: 0 });
  });

  test("layers move away from the finger", () => {
    const offset = layerOffset({ x: 200, y: 0 }, stage, 1);
    expect(offset.x).toBe(-MAX_OFFSET);
    expect(offset.y).toBe(MAX_OFFSET);
  });

  test("a press outside the stage is clamped to the edge", () => {
    expect(layerOffset({ x: 900, y: 125 }, stage, 1).x).toBe(-MAX_OFFSET);
  });

  test("nearer layers travel further", () => {
    const at = (depth: number) => Math.abs(layerOffset({ x: 180, y: 40 }, stage, depth).x);
    expect(at(DEPTH.family)).toBeGreaterThan(at(DEPTH.planet));
    expect(at(DEPTH.planet)).toBeGreaterThan(at(DEPTH.sky));
  });

  test("an unmeasured stage moves nothing", () => {
    expect(layerOffset({ x: 10, y: 10 }, { ...stage, width: 0 }, 1)).toEqual({ x: 0, y: 0 });
  });
});

describe("slideFocus", () => {
  test("the centred slide is in full focus", () => {
    expect(slideFocus(0)).toBe(1);
  });

  test("focus falls off to nothing one slide away", () => {
    expect(slideFocus(-0.5)).toBe(0.5);
    expect(slideFocus(1)).toBe(0);
    expect(slideFocus(-3)).toBe(0);
  });
});

describe("layout", () => {
  test("the family stands on the planet", () => {
    const familyBottom = LAYERS.family.y + LAYERS.family.width * LAYERS.family.aspect;
    expect(familyBottom).toBeGreaterThan(LAYERS.planet.y);
    expect(familyBottom - LAYERS.planet.y).toBeLessThan(0.08);
  });

  test("the gallery shows the promised share of each neighbour's planet", () => {
    const planet = LAYERS.planet.width * BODY_SCALE.open;
    const neighbourLeft = 0.5 + SLIDE_WIDTH - planet / 2;
    expect((1 - neighbourLeft) / planet).toBeCloseTo(PEEK);
  });
});

describe("worlds", () => {
  test("Earth is unlocked from the start and the rest unlock in order", () => {
    expect(WORLDS[0]).toEqual({ id: "earth", unlocksAt: 0 });
    const thresholds = WORLDS.map((world) => world.unlocksAt);
    expect(new Set(thresholds).size).toBe(WORLDS.length);
    expect(thresholds).toEqual([...thresholds].sort((a, b) => a - b));
  });

  test("each world costs ten points more than the last", () => {
    const at = (id: string) => WORLDS.find((world) => world.id === id)?.unlocksAt;
    expect([at("meadow"), at("frost"), at("lavender"), at("rose"), at("pebble"), at("home")]).toEqual([50, 450, 560, 1260, 1430, 5850]);
  });
});
