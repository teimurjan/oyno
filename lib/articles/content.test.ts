import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import source from "@/activities/en.json";
import { Source } from "@/lib/activities";
import { gamePath, GAMES_PATH, hubPath, hubs } from "@/lib/games/hubs";
import { REFERENCES } from "./references";

/**
 * The articles are TSX and load the catalogue through `server-only`, so this reads them as text:
 * every citation has a listed source, every listed source exists and is cited, and every link
 * into the site lands on a page that is built.
 */
const ROOT = path.resolve(import.meta.dir, "../..");
const CONTENT = path.join(ROOT, "components/site/articles/content");
const files = readdirSync(CONTENT).filter((file) => file.endsWith(".tsx"));
const registry = readFileSync(path.join(ROOT, "components/site/articles/index.ts"), "utf8");

const { activities, sources } = Source.parse(source);
const gameIds = new Set(activities.map((game) => game.id));
const known = new Set([...Object.keys(sources), ...Object.keys(REFERENCES)]);

const listed = (text: string, field: string) => {
  const match = text.match(new RegExp(`${field}:\\s*\\[([^\\]]*)\\]`));
  return [...(match?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((found) => found[1]);
};
const all = (text: string, pattern: RegExp) => [...text.matchAll(pattern)].map((found) => found[1]);
const field = (text: string, name: string) => text.match(new RegExp(`${name}:\\s*"([^"]+)"`))?.[1];

const articles = files.map((file) => {
  const text = readFileSync(path.join(CONTENT, file), "utf8");
  return { file, text, slug: field(text, "slug"), kind: field(text, "kind") };
});
const pages = new Set([
  "/", "/pricing", "/support", "/start", "/guides", "/blog", GAMES_PATH,
  ...hubs(activities).map(hubPath),
  ...activities.map((game) => gamePath(game.id)),
  ...articles.map(({ kind, slug }) => `${kind === "guide" ? "/guides" : "/blog"}/${slug}`),
]);

test("article slugs are unique and match their file", () => {
  for (const { file, slug } of articles) expect(`${slug}.tsx`).toBe(file);
});

describe.each(articles)("$file", ({ file, text }) => {
  test("is registered", () => {
    expect(registry).toContain(`./content/${file.replace(/\.tsx$/, "")}"`);
  });

  test("cites only listed sources, and lists only what it cites", () => {
    const cited = new Set(all(text, /<Cite id="([^"]+)"/g));
    const sourceList = listed(text, "sources");
    for (const id of sourceList) expect(known).toContain(id);
    expect([...cited].filter((id) => !sourceList.includes(id))).toEqual([]);
    expect(sourceList.filter((id) => !cited.has(id))).toEqual([]);
  });

  test("names only real games", () => {
    for (const id of [...listed(text, "games"), ...all(text, /<GameLink id="([^"]+)"/g)]) expect(gameIds).toContain(id);
  });

  test("links only to pages that are built", () => {
    for (const href of all(text, /href="(\/[^"#?]*)/g)) expect(pages).toContain(href);
  });
});
