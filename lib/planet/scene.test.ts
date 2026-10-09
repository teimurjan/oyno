import { describe, expect, test } from "bun:test";
import { DEPTH, LAYERS, MAX_OFFSET, layerOffset, neighborStyle, tintFilter, WORLDS } from "./scene";

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

describe("neighborStyle", () => {
  test("the centred card is full size and opaque", () => {
    expect(neighborStyle(0)).toEqual({ scale: 1, opacity: 1 });
  });

  test("falloff stops one card away", () => {
    expect(neighborStyle(-1)).toEqual(neighborStyle(3));
    expect(neighborStyle(1)).toEqual({ scale: 0.8, opacity: 0.5 });
  });
});

describe("layout", () => {
  test("the family stands on the planet", () => {
    const familyBottom = LAYERS.family.y + LAYERS.family.width * LAYERS.family.aspect;
    expect(familyBottom).toBeGreaterThan(LAYERS.planet.y);
    expect(familyBottom - LAYERS.planet.y).toBeLessThan(0.05);
  });
});

describe("worlds", () => {
  test("the home planet is unlocked from the start and the rest unlock in order", () => {
    expect(WORLDS[0].unlocksAt).toBe(0);
    const thresholds = WORLDS.map((world) => world.unlocksAt);
    expect(thresholds).toEqual([...thresholds].sort((a, b) => a - b));
  });

  test("the home planet is drawn as painted", () => {
    expect(tintFilter(WORLDS[0].tint, false)).toBe("none");
  });
});
