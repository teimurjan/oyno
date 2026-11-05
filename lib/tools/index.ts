import type { Mechanic } from "@/lib/activities";

/** The free browser tools: where each lives, and which games link to which tool. */
export const TOOLS_PATH = "/tools";

export const TOOL_SLUGS = ["visual-timer", "freeze-dance", "red-light-green-light", "simon-says", "wake-windows"] as const;
export type ToolSlug = (typeof TOOL_SLUGS)[number];

export const toolPath = (slug: ToolSlug) => `${TOOLS_PATH}/${slug}` as const;

export const isToolSlug = (value: string): value is ToolSlug => (TOOL_SLUGS as readonly string[]).includes(value);

/** The game picker sits on the games pages, so the tools index links to it there. */
export const PICKER_ANCHOR = "pick";

export const TOOL_OF_MECHANIC: Partial<Record<Mechanic, ToolSlug>> = {
  "stop-go": "freeze-dance",
  "simon-says": "simon-says",
};
