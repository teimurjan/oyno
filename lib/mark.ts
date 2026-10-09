/**
 * The Embrace mark: the ring is the parents' arms, open at the top, their heads on its ends and
 * the child nestled between. The same paths as the Icon Composer layer
 * `ios/Oyno/AppIcon.icon/Assets/image (1).svg`, on its 480-unit square. One source for the
 * wordmark, the favicons and the iOS splash, all through `scripts/build-icons.ts`.
 */
export const MARK = {
  size: 480,
  fill: "#fefefe",
  /** The ring and the two heads. */
  parents: [
    "M144.04,162.97 A51.35 51.35 0 0 0 174.5,199.67 A87.08 87.08 0 0 0 222.25,341.43 A86.88 86.88 0 0 0 305.5,199.67 A51.16 51.16 0 0 0 335.92,162.99 A134.38 134.38 0 0 1 374.11,267.25 A134.62 134.62 0 0 1 162.75,366.85 A134.32 134.32 0 0 1 144.04,162.97 Z",
    "M233.01,156.67 A37.73 37.73 0 0 0 202.95,194.05 A40.79 40.79 -51.21 1 1 233.01,156.67 Z",
    "M246.96,156.13 A40.79 40.79 51.9 1 1 276.56,193.87 A37.73 37.73 0 0 0 246.96,156.13 Z",
  ],
  /** Apart from the parents because the splash grows it to fill the screen. */
  child: { x: 240, y: 192.97, r: 30.72 },
  /** The glyph's ink box, measured off a render. */
  bounds: { x1: 105.6, y1: 113.8, x2: 374.5, y2: 391.2 },
  /** How far the glyph sits below the square's centre; `icon.json` lifts the layer by it. */
  lift: 12.5,
  /** The glyph's scale on a 1024 tile, the group scale in `icon.json`. */
  tileScale: 2.56,
  /** Drop shadows in glyph units: the tile's is Icon Composer's neutral one, measured off its
   * render; the splash's is deeper so it reads at full-screen size. */
  shadow: {
    tile: { dy: 4, blur: 6, opacity: 0.07 },
    splash: { dy: 8, blur: 12, opacity: 0.16 },
    /** Deeper again, so the white glyph holds at text size on the canvas. */
    wordmark: { dy: 18, blur: 14, opacity: 0.24 },
  },
  /** The wordmark in thousandths of an em: the glyph's height, standing on the baseline, and the
   * gap before "yno". The letters are `--ink` in `app/base.css`. */
  wordmark: { height: 800, gap: 16, ink: "#18202e" },
  /** The app icon's fill, top to bottom. */
  sky: ["#8DBDEB", "#FFE9CC"],
} as const;

const TILE = 1024;

type Shadow = (typeof MARK.shadow)[keyof typeof MARK.shadow];

const glyph = (shadow: Shadow) => {
  const { parents, child, fill, size } = MARK;
  return `<filter id="shadow" x="0" y="0" width="${size}" height="${size}" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="${shadow.dy}" stdDeviation="${shadow.blur}" flood-color="#000" flood-opacity="${shadow.opacity}"/></filter>
<g filter="url(#shadow)" fill="${fill}">${parents.map((d) => `<path d="${d}"/>`).join("")}<circle cx="${child.x}" cy="${child.y}" r="${child.r}"/></g>`;
};

/** The shadowed mark, white on the app icon's sky, as a standalone SVG for rasterizing. */
export function markSvg(size: number): string {
  const { sky, tileScale, lift } = MARK;
  const center = TILE / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${TILE} ${TILE}">
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
<rect width="${TILE}" height="${TILE}" fill="url(#sky)"/>
<g transform="translate(${center} ${center}) scale(${tileScale}) translate(${-MARK.size / 2} ${-MARK.size / 2 - lift})">${glyph(MARK.shadow.tile)}</g>
</svg>`;
}

/** The shadowed mark alone on a clear square, centred on the glyph rather than the source square. */
export function glyphSvg(size: number): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 ${MARK.lift} ${MARK.size} ${MARK.size}">
${glyph(MARK.shadow.splash)}
</svg>`;
}

type Box = { x1: number; y1: number; x2: number; y2: number };

/** "yno" outlined in font units from the origin, on a baseline at y = 0. */
export type Letters = { d: string; box: Box };

/** The wordmark: the shadowed mark standing in for the first "o" of "oyno", at `em` pixels. */
export function wordmarkSvg({ d, box }: Letters, em: number) {
  const { bounds, shadow, wordmark } = MARK;
  const scale = wordmark.height / (bounds.y2 - bounds.y1);
  const markWidth = (bounds.x2 - bounds.x1) * scale;
  const lettersX = markWidth + wordmark.gap - box.x1;
  // The shadow's reach past the glyph, two deviations out, pushed down by its offset.
  const spread = 2 * shadow.wordmark.blur * scale;
  const drop = shadow.wordmark.dy * scale;
  const x1 = -spread;
  const y1 = -wordmark.height - Math.max(spread - drop, 0);
  const width = lettersX + box.x2 - x1;
  const height = Math.max(spread + drop, box.y2) - y1;
  const px = (units: number) => +((units * em) / 1000).toFixed(2);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${px(width)}" height="${px(height)}" viewBox="${x1.toFixed(1)} ${y1.toFixed(1)} ${width.toFixed(1)} ${height.toFixed(1)}">
<g transform="scale(${scale.toFixed(4)}) translate(${-bounds.x1} ${-bounds.y2})">${glyph(shadow.wordmark)}</g>
<path fill="${wordmark.ink}" transform="translate(${lettersX.toFixed(1)} 0)" d="${d}"/>
</svg>`;
  return { svg, width: px(width), height: px(height) };
}
