import localFont from "next/font/local";

/**
 * The same two families the app ships, loaded straight out of the iOS bundle.
 *
 * One source of truth on purpose: `appstore/scripts/lib/screenshot-kit.mjs` reads these
 * same TTFs to composite the store frames, so the landing page, the App Store screenshots
 * and the app itself cannot drift. Adding a weight is a file drop in one directory.
 */

export const inter = localFont({
  src: [
    { path: "../ios/Oyno/Resources/Fonts/Inter-Regular.ttf", weight: "400", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Inter-Medium.ttf", weight: "500", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Inter-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/Inter-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

/** Every number on this site is set in this face, for the reason the app does it: the
 * page is read as columns of costs, and digits that shift width make a column
 * unscannable. */
export const plexMono = localFont({
  src: [
    { path: "../ios/Oyno/Resources/Fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../ios/Oyno/Resources/Fonts/IBMPlexMono-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

/**
 * The wordmark, and nothing else.
 *
 * Space Grotesk is the one display face on the site — a mark wants a shape of its own,
 * apart from the Inter the prose is set in and the Plex Mono the figures are — and it has
 * exactly one caller here: `components/Logo.tsx`. Anything a reader has to read in quantity
 * stays on `font-sans`.
 *
 * One weight, 600, and it is *ours*: the family ships no static SemiBold, so this file is a
 * 600 instance cut from the variable font. It lives in the iOS Fonts directory like the
 * other faces, and the app ships the same file — the splash prints the same word in the same
 * face (`SplashScreen.swift`, via `Typeface.wordmark`, PostScript name `SpaceGrotesk-SemiBold`).
 * Both sides read this directory, so the header and the splash cannot drift.
 */
export const spaceGrotesk = localFont({
  src: [
    { path: "../ios/Oyno/Resources/Fonts/SpaceGrotesk-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});
