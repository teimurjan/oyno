import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "games-2-year-old-at-home",
  kind: "post",
  title: "Games to play with a 2 year old at home",
  description:
    "Eight games for a two-year-old with cups, socks, cushions or nothing at all, each 5 to 12 minutes, and what studies of two-year-olds found.",
  published: "2026-10-19",
  games: [
    "baby-cup-mummy-cup",
    "cup-trio-hide",
    "hand-on-the-cup",
    "two-sock-piles",
    "cushion-lava",
    "rescue-teddy",
    "jump-jump-freeze",
    "three-two-one-hug",
  ],
  sources: ["hughes-ensor-2005", "kochanska-2000", "cdc-guide", "hammond-2012", "williams-2015", "garon-2014"],
  body: (
    <>
      <p>
        You do not need a playroom for a two-year-old. You need what is already on the floor: a couple of cups, a
        pile of socks, the sofa cushions. Every game below fits a kid of 2, takes 5 to 12 minutes, and has one rule
        to play by.
      </p>

      <h2>What two-year-olds can do in a game</h2>
      <p>
        Researchers have played real rule games with two-year-olds. In one study, two-year-olds remembered which
        pots they had already emptied, and called the big cup “baby” and the small cup “mommy”{" "}
        <Cite id="hughes-ensor-2005" />. In a long-running study, children of 22 to 45 months were asked to wait for
        a treat, walk a line slowly, whisper, and stop and start on a signal <Cite id="kochanska-2000" />.
      </p>
      <p>
        Harvard’s activity guide for 18 to 36 months lists freeze dance, start and stop songs, Follow the Leader,
        physical challenges, and matching and silly sorting <Cite id="cdc-guide" />. None of that needs anything you
        have to buy.
      </p>

      <h2>Games with cups</h2>
      <p>
        <GameLink id="baby-cup-mummy-cup">Baby Cup, Mommy Cup</GameLink> is the cup game from that study. Hold up a
        big cup and a small cup, and agree that the big one is called “baby” and the small one “mommy”. Hold up one
        cup at a time, and your kid says its silly name. Go faster, and when they slip, hold the cups still and let
        them try again.
      </p>
      <p>
        <GameLink id="cup-trio-hide" /> hides a toy under one of three cups while your kid watches. For a
        two-year-old, hide two toys and see if they remember which cup is already empty, much like the pots in the
        study.
      </p>
      <p>
        <GameLink id="hand-on-the-cup" /> is a waiting game. Put a toy under an upside-down cup and rest your kid’s
        hand flat on top. Say “wait, wait, wait” and then “go”, and they lift the cup only on “go”. Stretch the wait
        a little each time, then let them hold the cup while you wait for their “go”.
      </p>

      <h2>Games with socks</h2>
      <p>
        The laundry pile is a game. In <GameLink id="two-sock-piles" />, you tip a heap of clean socks on the floor
        and start two piles: dark socks here, light socks there. Pass one sock at a time and let your kid choose the
        pile, with a hint only when they stall. When the heap is gone, mix it up and start again, but now it is big
        socks here and little socks there. The second round changes the rule.
      </p>
      <p>
        There are more in <Link href="/games/tag/socks">games with socks</Link>.
      </p>

      <h2>Games with cushions</h2>
      <p>
        In <GameLink id="cushion-lava" />, you scatter the cushions across the floor and say the floor is lava, so
        feet stay on cushions. Hop together from cushion to cushion to reach the sofa, holding hands for the big
        gaps. Say “lava rising” and take one cushion away each round.
      </p>
      <p>
        <GameLink id="rescue-teddy" /> adds a plan. Put teddy up on the sofa and say he is stuck. Plan a two-part
        rescue, like “over the cushion, then up”, say the two parts together, then crawl and climb them side by side.
        Next time, put teddy somewhere new and let your kid tell you the two parts before anyone moves.
      </p>
      <p>
        Help only as much as your kid needs. In one study, how well parents gave just enough help with a puzzle at 2
        to 3 years, and asked what comes next, predicted their children’s executive function at 3 to 4{" "}
        <Cite id="hammond-2012" />. More cushion games are in{" "}
        <Link href="/games/tag/cushions">cushion games</Link>.
      </p>

      <h2>Games with nothing at all</h2>
      <p>
        <GameLink id="jump-jump-freeze" /> is for the wiggles. Hold hands and jump together while you count “one,
        two, three”, then say “freeze” and hold still. Count a little higher each round. Then let your kid count the
        jumps, and freeze exactly when they say so.
      </p>
      <p>
        <GameLink id="three-two-one-hug" /> needs only your arms. Open them wide and count down slowly, “three, two,
        one”, while your kid waits a step away. Say “hug”, and they come in for the squeeze, then back up to their
        spot. Count slower, or pause before “one”.
      </p>
      <p>
        Freeze games are cousins of freeze dance. In one study, singing, dancing and music games shared at home at 2
        to 3 predicted attention and self-regulation at 5 <Cite id="williams-2015" />. You will find more in{" "}
        <Link href="/games/tag/one-room">games for one room</Link>.
      </p>

      <h2>When it falls apart</h2>
      <p>
        These skills keep growing through the preschool years. Tests of working memory, self-control and switching
        rules show differences from one age to the next between 18 months and five and a half years{" "}
        <Cite id="garon-2014" />. A kid who grabs the cup before “go” is two.
      </p>
      <p>
        Stop while it is still fun, and try a different game tomorrow. The full list is in{" "}
        <Link href="/games/age/toddlers">games for toddlers</Link>. If you have concerns about how your kid is
        developing, talk to your pediatrician.
      </p>
    </>
  ),
};
