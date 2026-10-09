/**
 * The Embrace mark from the design canvas, at its default settings: the ring is the parents'
 * bodies, open at the top, their heads on its ends and the child nestled between. One source
 * for `components/Logo.tsx` and `scripts/build-icons.ts`, on a 100-unit square.
 */
export const MARK = {
  stroke: 10,
  parents: { left: { x: 40.07, y: 32.2 }, right: { x: 59.93, y: 32.2 }, r: 8.5 },
  child: { x: 50, y: 40.2, r: 6.4 },
  arcs: {
    left: "M 40.28 32.65 A 23 23 0 0 0 50 76.5",
    right: "M 59.72 32.65 A 23 23 0 0 1 50 76.5",
  },
  /** The knockout radii that leave a thin cut between the shapes. */
  cut: { parent: 10.1, child: 8, childOverHeads: 7.68 },
  /** The app icon's sky, top to bottom. */
  sky: ["#8DBDEB", "#CFE3F7", "#FFE9CC"],
} as const;

/** The mark as a standalone SVG document, white on the sky tile, for rasterizing. */
export function markSvg(size: number, { tile = true }: { tile?: boolean } = {}): string {
  const { parents, child, arcs, cut, stroke, sky } = MARK;
  const background = tile
    ? `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="0.58" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/></linearGradient></defs><rect width="100" height="100" fill="url(#sky)"/>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">${background}
<defs>
<mask id="ring" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><rect width="100" height="100" fill="#fff"/><circle cx="${parents.left.x}" cy="${parents.left.y}" r="${cut.parent}"/><circle cx="${parents.right.x}" cy="${parents.right.y}" r="${cut.parent}"/><circle cx="${child.x}" cy="${child.y}" r="${cut.child}"/></mask>
<mask id="heads" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><rect width="100" height="100" fill="#fff"/><circle cx="${child.x}" cy="${child.y}" r="${cut.childOverHeads}"/></mask>
</defs>
<g mask="url(#ring)" fill="none" stroke="#fff" stroke-width="${stroke}" stroke-linecap="round"><path d="${arcs.left}"/><path d="${arcs.right}"/></g>
<g mask="url(#heads)" fill="#fff"><circle cx="${parents.left.x}" cy="${parents.left.y}" r="${parents.r}"/><circle cx="${parents.right.x}" cy="${parents.right.y}" r="${parents.r}"/></g>
<circle cx="${child.x}" cy="${child.y}" r="${child.r}" fill="#fff"/>
</svg>`;
}
