import type { Art } from "./manifest";

/** The `srcset` for one layer, so the browser picks the rendition its pixel ratio needs. */
export const srcSet = (art: Art): string =>
  art.renditions.map((rendition) => `${rendition.src} ${rendition.width}w`).join(", ");

/** The smallest rendition, the `src` a browser without `srcset` falls back to. */
export const fallbackSrc = (art: Art): string => art.renditions[0].src;
