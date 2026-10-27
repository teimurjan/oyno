# Oyno

For parents of 0 to 5 year olds whose phone eats the evening with their kid. Oyno pauses the
apps they pick during Kid hours. It hands them one easy 5 to 15 minute game, sized to the kid's
age and the energy they have left. Every round played together grows the family's little planet.

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

**The games are data, not Swift and not catalogue strings.** `activities/en.json` is the source:
500 games, each for one age band (`0-1`, `1-3`, `3-5`) and one energy, 5 to 15 minutes, at most
three steps of one sentence each. Every game names its `mechanic` (one of 27 activity families,
named after Harvard's guides: hide-and-find, stop-go, sorting-switch, …), the executive functions
it exercises (`skills`) and its `evidence`. The bibliography is the `sources` block, every entry
checked against Crossref. A study carries its `design` (trial, experiment, longitudinal,
observational), one sentence on who took part and what they did (`studied`), the age of its
youngest participants (`fromMonths`), the bands it speaks to and the mechanics it studied
(`supports`, taken from the paper's task battery or intervention). A guide carries the mechanics
it recommends per band (`recommends`) and one sentence of what it says for that band (`says`):
Harvard's 2014 activities guide and its 5 to 7 chapter, the 2022 Brain-Building Through Play
handouts, the Serve and Return handout, and the AAP's Power of Play clinical report. The schema
refuses a citation that does not speak to the game's mechanic at the game's age, a study whose
youngest participants were older than the game's youngest player (`fromMonths` on the game, else
the band's first month), and a game without both a study and a guide. The citing order is the
youngest-covering study first, then the strongest design, so a game is never aged up by a second
citation. A game that starts above its band says so in the blurb: "2 and up" for a toddler game
from 22 months, "four and up" for a preschool game from 42 months. Reviews are not cited: the
claim is always a primary study plus an institution's recommendation. One translation file per
locale sits beside the source.
`bun run activities:build` writes `Resources/Activities.json`, which is generated and committed,
never edited. `bun run activities:translate` fills what a locale is missing, or holds for English
that was reworded since, keyed by a fingerprint of the English. `bun run activities:check` fails
on any gap and on fewer games than the listing promises. `Activity.swift` only decodes. The age
band is `oyno.age` in defaults, picked on the Activity tab beside the energy. The deck deals a
random game per age and energy. Search lists all of them, shuffled. The games stay in the bundle, not on the API. A game must
show instantly and offline, and picking reads the rounds on the phone.

The everyday moments (reading, bath, cooking, their lead) sit beside the games in `en.json` as
`moments`: one per kind and band, an open timer whose three `steps` are nudges, cited under the
same rule. A band no source speaks to has no moment. The Activity tab (`PlayScreen`) picks a game or a
moment from its menu, and `Dealer` holds the pick, so Home's card and the tab show the same one. Every kind grows the planet
by the same rule, and a round records its `kind`, its `skills` and the keepsake it left.

## Keepsakes, the week and the letter

A round leaves a keepsake (`Keepsake.award`): always on the first moment of a kind, else one in
four, one in eight of those rare, never a repeat. They sit around the planet on Home and fill
`KeepsakesScreen`. The week runs Monday to Sunday, and the goal (`oyno.weekGoal`: 2, 3 or 5
evenings) only counts up, so a rest day costs nothing. On Sunday the planet writes the week's
letter (`WeekLetter`, `LetterScreen`), shared as a picture. After a moment, and from Home after
Kid hours, the parent can note what was new: the firsts, which Growth lists beside practice by
skill. The kid's name is optional (`oyno.kidName`), only on the phone, never in analytics.

## The planet scene

One scene, two renderers: the landing hero (`components/site/PlanetHero.tsx`, React) and the app
(`Screens/Home/PlanetScene.swift`, `WorldsGallery.swift`). The layout, depths, scales and worlds live in `lib/planet/scene.ts` and are
mirrored by `PlanetLayout` and `World.swift`. Change them together. The browser half is
`lib/planet/dom.ts`, framework-free, and the transforms are `.planet-*` in `app/globals.css`.
The layers come from `art/source/*.png` through `bun run art:build`, which writes `public/art/`,
`lib/art/manifest.ts` and the `Sky`, `Family` and `Planets/Planet-<id>` image sets. Commit all three together.
Each of the 31 worlds is its own painting. Earth is `art/source/planet.png`, the master. The rest
are `art/source/planets/<id>.png`, painted from Earth by `bun run art:planets` (OpenAI, `OPENAI_API_KEY`).
Each game's illustration is `art/source/activities/<id>.png`, painted by `bun run art:activities` from its
scene in `art/activity-scenes.json`. `art:build` ships it as `Resources/Activities/<id>.webp`, a bundle file
and not an image set, because the catalog stores it six times larger. The Activity tab and search draw it where it exists.
The keepsakes are `art/source/keepsakes/<id>.png`, painted by `bun run art:keepsakes` from `art/keepsakes.json`: one
object each, no rug, drawn to read at icon size. The everyday moments on the Activity tab (reading, bath, cooking, their lead) are
`art/source/moments/<id>.png`, painted by `bun run art:moments` from `art/moments.json`, also without a rug. `art:build`
ships them as `Resources/Keepsakes/keepsake-<id>.webp` and `Resources/Moments/moment-<id>.webp`, prefixed because the
bundle is flat, and writes `Domain/Keepsakes.generated.swift` from `keepsakes.json`. The petals that drift around the
planet after a round are `art/source/petals/<id>.png`, painted by `bun run art:petals` from `art/petals.json`. They are
never collected, so they are smaller than a keepsake and have no shadow. `art:build` ships them as
`Resources/Petals/petal-<id>.webp`, and Done's halo floats them. All four painters share `paintMissing` in
`scripts/lib/imageEdits.ts`.
The same bytes go to `public/art/activities/` for the site's game pages (`/games`, `lib/games/`), which
read `activities/en.json` at build and are English only. The guides and posts (`/guides`, `/blog`) are TSX
in `components/site/articles/content/`, registered in its `index.ts`. They follow the games' evidence rule:
every claim is a `<Cite>`, citing a game source or `lib/articles/references.ts`, each checked against Crossref.
`bun test lib` fails on an unlisted citation, an unknown game or a link to a page that is not built.

## Kid hours (Screen Time)

`KidHoursShared/` is compiled into both the app and the `OynoMonitor` DeviceActivity extension.
The app (`KidHoursStore`) saves the schedules (each with its own apps), the always-allowed and
never-allowed apps and the break to the App Group. It arms one daily activity per enabled schedule.
The extension answers every boundary, a schedule's or the break's, by re-reading the whole state
through `KidHoursShield.sync`. If an enabled schedule covers now and no break does, the apps of
every running schedule are paused. Never-allowed apps are added to every schedule, so a break,
"Not now" or a schedule turned off opens them too. Always-allowed apps are the `except` set.
The 20-minute break is a one-off `kidHours.break` activity. App tokens never leave the phone.
A paused app opens to `OynoShield`, the custom shield screen. It shows the planet's rounds, which
`OynoStore` mirrors into `ShieldStats` in the App Group, and counts that app's pauses for today.
`OynoShieldAction` answers its buttons. "Open Oyno" answers `.openParentalControlsApp` on iOS 26.5
and later, and leaves `ShieldRoute` in the App Group so `AppRoot` opens on the Activity tab. Before 26.5, it
posts a notification that opens Oyno on a tap.
The screen time card on Kid hours is drawn by the `OynoReport` DeviceActivityReport extension, the only
process that may read per-app usage. It borrows `AppUsageCard` and the design system files from
`Oyno/`. Growth's "Together" figure is all time: the days `bankPausedMinutes` banked, plus today's
Kid hours minus the unlocks logged in `opened`. The bloom level is the world the points reach
(10 a round, 1 a minute played), and Together does not count toward it.
Distribution needs Apple's Family Controls (Distribution) entitlement for `com.teimurjan.oyno`,
`com.teimurjan.oyno.monitor`, `com.teimurjan.oyno.report`, `com.teimurjan.oyno.shield` and
`com.teimurjan.oyno.shield-action`. Development builds work without it. Screen Time does not run in the
simulator.

## The round away from the app

`TimerScreen` hands the round to `RoundLive`, which shows it as a Live Activity. `RoundLive` also
schedules one `round.end` notification for the end. It rings `Chime.wav`, and the default sound
with the bell off. The
`OynoLive` widget extension draws the Lock Screen and the Dynamic Island from `RoundAttributes`.
It gets dates only, and the system counts them down, so the app updates it only on a pause, a
resume or "+5 min". A round that ran out in the background does not chime again on return. The
extension needs no Family Controls entitlement.

## Reminders

The reminders are local notifications, planned on the phone. There is no push server. Their
words are `push-notifications/en.md`, which the owner edits. A `#` heading is a group: under
"Reminders" at most one goes out a day, and the higher section wins the day. Under "Kid hours",
one goes out at every enabled schedule's start and end. A `##` heading is a reminder id that
`ReminderID` knows, `- key: value` lines are its settings, and each `###` heading is a version
that the phone takes turns with. `lib/notifications.ts` lists the settings and the `{placeholders}`
each id allows, and refuses anything else. When a reminder fires is decided in
`ReminderPlan.swift`, which is pure and plans 14 days ahead. `Reminders.replan` plans again when
the app opens or leaves, after a round and after a schedule change. `ReminderLedger` remembers what
already went out, so the cooldowns and "once per world" rules hold. A tap lands on the tab the
section names, through `NotificationRouter`. Profile has the two switches (`oyno.reminders`,
`oyno.kidHoursNotices`). Claude Code translates by hand into `push-notifications/<locale>.json`,
keyed by a fingerprint of each English version, and `bun run notifications:check` names every
missing key. French and Russian say vous and вы, the rest are informal. Keep each `{placeholder}`
the English uses. A count such as `{evenings}` arrives declined, and a name arrives in its
dictionary form. Set them after a colon or as the subject, and never inflect `{kid}`. `bun run notifications:build` writes
`Resources/Notifications.json`, which is generated and committed, never edited.

## Payments: two billers, one entitlement

Apple StoreKit 2 sells in the app, and Dodo sells on the web. `readEntitlement` is the union, and no caller of
`isPaid` learns there is more than one.

- `expires_at IS NULL` is perpetual on the Apple row and **not live** on the web row.
- The web lifetime unlock is its own table, `dodo_lifetime_entitlements`, one row per buyer keyed
  by the Dodo payment. It never expires, and only a full refund or a lost dispute sets
  `revoked_at`. It is on sale while `DODO_LIFETIME_ON_SALE` is `true`.
- `environment` gates the web read and is only a label on the Apple one: App Review and
  TestFlight buy in Sandbox, which is held perpetual.
- The buyer is linked by the Supabase uid carried through the biller (`appAccountToken`,
  server-written `metadata.userId`), validated as a UUID. Never by email.
- A webhook returns 200 only for work that landed (503 unconfigured, 401/400 bad signature, 500
  failed write).
- A failed entitlement read throws and returns 500. It is never "unpaid".
- Nothing above the paywall step imports the biller SDK.
- A Dodo session is minted for one product, so the reader picks the plan on the paywall step.
  The payment step mounts hidden under it, mints the picked plan's session and loads Dodo's
  frame, so Continue reveals a ready form. It reports nothing until it is shown. Success is the redirect to `/start/done`, where `PurchaseReport` fires
  the browser Purchase from `sessionStorage`.
- Resend sends two emails (`lib/checkoutReminder/`, `lib/welcomeEmail/`). An hour after the funnel
  last minted a session for an unpaid account, the cron (`vercel.json`) sends one reminder, ever,
  with a single-use 20% Dodo code. The code is tied to the account, and `/api/funnel/checkout`
  applies it, so nobody types it. A new web purchase gets the welcome email from the webhook.
- "Manage subscription" opens Dodo's portal (`POST /api/subscription/portal`) when
  `provider == "dodo"`, otherwise StoreKit's sheet.

## Data access

The service-role client bypasses RLS. Every table has RLS on with **no policies**, so the
`.eq("user_id", …)` in the query *is* the access check. Routes take the user from the bearer
token and never from the body. Rounds live on the device (`OynoStore`, Application
Support), keyed to the account that wrote them, with the firsts and letter lines. `POST /api/progress`
backs up the totals and keepsakes (`progress`), the rounds (`rounds`) and the firsts' signs
(`firsts`), so a reinstall keeps the planet and the letters. The totals only grow, the keepsakes
are a union, and a round or first is written once and never changed. The parent's words, in a
first or under a letter, and the kid's name never leave the phone.

## Sign-in

Facebook, Apple, Google and an emailed one-time code everywhere, with a sign-in-only password form
behind "Use a password instead" (App Review's demo account uses it). The app exchanges an id_token
(Apple, Google) and runs PKCE in `webAuthenticationSession` (Facebook, `oyno://auth-callback`),
while the web redirects through `/auth/callback`. Inside Meta's webview the funnel hides Google.

The emails are `supabase/templates/`, one file per tab in Authentication → Emails, in the Little
Planet look. You paste them by hand, and nothing pushes them. The code emails carry no link. The
other three link to `/auth/callback` with a `token_hash`, which redeems in any browser. Subjects:

- `confirmation`, `magic_link`: "Your Oyno code"
- `reauthentication`: "Your Oyno confirmation code"
- `recovery`: "Reset your Oyno password"
- `email_change`: "Confirm your new Oyno email"
- `invite`: "You’ve been invited to Oyno"

## Language

Ten languages: English, German, French, Spanish (Spain and Mexico), Brazilian Portuguese, Italian,
Dutch, Polish and Russian. Three places hold the same locale list: `InterfaceLanguage.supported`,
`LOCALES` in `lib/i18n.ts` and `LOCALES` in `appstore/scripts/lib/locales.mjs`. Every tag needs a
site deck and a funnel deck. Use
`String(interface:)`, never `String(localized:)`.

## Design system

`Palette.swift` and `app/base.css` `:root` hold the same values: ink on a warm sky, glass cards,
one accent fill (the ink pill) per screen. Red means only "this is costing you". The one typeface is
Figtree, with tabular figures for every number. Figtree has no Cyrillic, so Russian is set in Onest.
The Sunday letter alone is in a hand, Caveat. All three are vendored in `ios/Oyno/Resources/Fonts/`. The
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
  and commit `Funnel.json`. Check every step at 390×650. Then read the canvas's `project/canvas.json`
  and run `bun run funnel:canvas --index <that copy>`. Publish `.canvas/project/` to the canvas, and
  remove each artboard it reports stale. The `Funnel-*` row is captured, never drawn by hand.
- Reminders: if you edit `push-notifications/en.md`, translate every key `notifications:check`
  names, then `bun run notifications:build` and `bun run notifications:check`, and commit `Notifications.json`.
- Games: if you edit `activities/`, `bun run activities:build`, then `bun run activities:check`, and
  commit `Activities.json`.
- Store: `bun run metadata:check` before any deliver.
- Design: if a change alters a screen the canvas draws, update its artboard in the same change. The
  app is the source of truth, and the canvas follows it.
