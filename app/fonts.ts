import localFont from "next/font/local";

/** Figtree, loaded straight out of the iOS bundle so the site, the store frames and the app
 * read the same files. */
export const figtree = localFont({
  src: [
    { path: "../ios/Oyno/Resources/Fonts/Figtree-Regular.ttf", weight: "400", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Figtree-Medium.ttf", weight: "500", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Figtree-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Figtree-Bold.ttf", weight: "700", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Figtree-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-figtree",
  display: "swap",
});

/** Onest, for the languages Figtree has no letters for. Not preloaded: only those pages use it. */
export const onest = localFont({
  src: [
    { path: "../ios/Oyno/Resources/Fonts/Onest-Regular.ttf", weight: "400", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Onest-Medium.ttf", weight: "500", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Onest-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Onest-Bold.ttf", weight: "700", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Onest-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-onest",
  display: "swap",
  preload: false,
});
