# Oyno

For parents of 2 to 8 year olds whose phone eats the evening with their kid. Oyno pauses the
apps they pick during Kid hours. It hands them one easy 10-minute game, sized to the energy they
have left. Every round played together grows the family's little planet.

## Architecture

Root is the Next.js backend (API, payments, marketing site, web funnel). The SwiftUI app lives in
`ios/` and the store-listing pipeline in `appstore/`. The scaffold came from Printyard (`~/Projects/takt`)
and Wait Professor's Dodo half (`~/Projects/wait-professor`). If a pattern is missing here, look
there before you invent one. The approved design is the Claude Design canvas
https://claude.ai/artifact/BpkSaJjwMLVjAEnpxsGKSg (direction D, "Little Planet").

**No free tier, and the wall is on writing, not reading.** The planet, the worlds and past rounds
open for free. Starting a round and turning Kid hours on need a live entitlement. The gate is
`requireEntitlement()` inside `OynoStore`, the only type that mutates user data, never on buttons.
`refusedActions` is a counter, not a flag.

**The first run is one sequence**, decided in `AppRoot`: `FunnelScreen` → `SignInScreen` (hard
wall, no skip) → `PaywallScreen` → main, all keyed on `didFinishFirstRun`. `FunnelScreen` is native
and its own. `FunnelStep` lists the screens in order, and each step's words live in its view. The
one answer (`Pickups`) is what the news screens sum. Only `PaywallScreen` still reads the web deck: `bun run funnel:export-ios`
writes `Resources/Funnel.json`, which is generated and committed, never edited.

**The paywall is a page, never a sheet**: a step in the first run, and a `fullScreenCover` over a
refused write. The billed amount is the big figure (3.1.2). The trial is a 3-day App Store intro
offer, never a server allowance, and store copy must not say we charge from the start.

**The games are data, not Swift and not catalogue strings.** `activities/en.json` is the source.
One translation file per locale sits beside it. `bun run activities:build` writes
`Resources/Activities.json`, which is generated and committed, never edited.
`bun run activities:translate` fills what a locale is missing, or holds for English that was
reworded since, keyed by a fingerprint of the English. `bun run activities:check` fails on any gap.
`Activity.swift` only decodes. The games stay in the bundle, not on the API. A game must show
instantly and offline, and picking needs the rounds, which never leave the phone.

## The planet scene

One scene, three renderers: the landing hero (`components/site/PlanetHero.tsx`, React), the funnel
widget (`components/funnel/PlanetStep.tsx`, Preact) and the app (`Screens/Home/PlanetScene.swift`,
`WorldsGallery.swift`). The layout, depths, scales and worlds live in `lib/planet/scene.ts` and are
mirrored by `PlanetLayout` and `World.swift`. Change them together. The browser half is
`lib/planet/dom.ts`, framework-free, and the transforms are `.planet-*` in `app/globals.css`.
The layers come from `art/source/*.png` through `bun run art:build`, which writes `public/art/`,
`lib/art/manifest.ts` and the `Sky`, `Family` and `Planets/Planet-<id>` image sets. Commit all three together.
Each of the 31 worlds is its own painting. Earth is `art/source/planet.png`, the master. The rest
are `art/source/planets/<id>.png`, painted from Earth by `bun run art:planets` (OpenAI, `OPENAI_API_KEY`).

## Kid hours (Screen Time)

`KidHoursShared/` is compiled into both the app and the `OynoMonitor` DeviceActivity extension.
The app (`KidHoursStore`) saves the paused apps, the always-open apps, the schedules and the
break to the App Group. It arms one daily activity per enabled schedule. The extension answers
every boundary, a schedule's or the break's, by re-reading the whole state through
`KidHoursShield.sync`. If an enabled schedule covers now and no break does, the apps are paused.
Always-open apps are the `except` set on the shielded categories.
The 20-minute break is a one-off `kidHours.break` activity. App tokens never leave the phone.
Distribution needs Apple's Family Controls (Distribution) entitlement for `com.teimurjan.oyno` and
`com.teimurjan.oyno.monitor`. Development builds work without it. Screen Time does not run in the
simulator.

## Payments: two billers, one entitlement

Apple StoreKit 2 sells in the app, and Dodo sells on the web. `readEntitlement` is the union, and no caller of
`isPaid` learns there is more than one.

- `expires_at IS NULL` is perpetual on the Apple row and **not live** on the web row.
- `environment` gates the web read and is only a label on the Apple one: App Review and
  TestFlight buy in Sandbox, which is held perpetual.
- The buyer is linked by the Supabase uid carried through the biller (`appAccountToken`,
  server-written `metadata.userId`), validated as a UUID. Never by email.
- A webhook returns 200 only for work that landed (503 unconfigured, 401/400 bad signature, 500
  failed write).
- A failed entitlement read throws and returns 500. It is never "unpaid".
- Nothing above the paywall step imports the biller SDK.
- A Dodo session is minted for one product, so the reader picks the plan on the paywall step.
  The payment step mints the session after that. Success is the redirect to `/start/done`, where `PurchaseReport` fires
  the browser Purchase from `sessionStorage`.
- "Manage subscription" opens Dodo's portal (`POST /api/subscription/portal`) when
  `provider == "dodo"`, otherwise StoreKit's sheet.

## Data access

The service-role client bypasses RLS. Every table has RLS on with **no policies**, so the
`.eq("user_id", …)` in the query *is* the access check. Routes take the user from the bearer
token and never from the body. Rounds are stored on the device only (`OynoStore`, Application
Support), keyed to the account that wrote them. Only their totals are backed up (`progress`, via
`POST /api/progress`), so a reinstall keeps the planet. The totals only grow.

## Sign-in

Facebook, Apple, Google and an emailed one-time code everywhere, with a sign-in-only password form
behind "Use a password instead" (App Review's demo account uses it). The app exchanges an id_token
(Apple, Google) and runs PKCE in `webAuthenticationSession` (Facebook, `oyno://auth-callback`),
while the web redirects through `/auth/callback`. Inside Meta's webview the funnel hides Google.

## Language

English only at launch. Three places hold the same locale list: `InterfaceLanguage.supported`,
`LOCALES` in `lib/i18n.ts` and `LOCALES` in `appstore/scripts/lib/locales.mjs`. Every tag needs a
site deck and a funnel deck. Use
`String(interface:)`, never `String(localized:)`.

## Design system

`Palette.swift` and `app/base.css` `:root` hold the same values: ink on a warm sky, glass cards,
one accent fill (the ink pill) per screen. Red means only "this is costing you". The one typeface is
Figtree, with tabular figures for every number. It is vendored in `ios/Oyno/Resources/Fonts/`. The
app, the site, the funnel build and the screenshot kit read it from there. The mark is `lib/mark.ts`, rendered by
`bun run icons:build`. Tap targets are 44pt, and 52pt for the committing button. The bell that
ends a round is `Resources/Chime.wav`, written by `bun run chime:build`, generated and committed.

## Error copy

Routes send a machine code and never a `message`. The words live in `ServerErrorCopy.swift` and the
funnel decks.

## Before finishing a change

- Strings: copy the catalogue aside, `bun run strings:sync`, then `bun run strings:check`.
- Backend: `bun run typecheck && bun run build && bun test lib`.
- iOS: build Debug and Release (Release whenever payments, Kid hours or an xcconfig changed).
- Funnel: `bun run funnel:build`. If you edit `steps.ts` or a deck, run `bun run funnel:export-ios`
  and commit `Funnel.json`. Check every step at 390×650.
- Games: if you edit `activities/`, `bun run activities:build`, then `bun run activities:check`, and
  commit `Activities.json`.
- Store: `bun run metadata:check` before any deliver.
