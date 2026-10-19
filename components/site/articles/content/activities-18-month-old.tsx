import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "activities-18-month-old",
  kind: "post",
  title: "Activities for an 18 month old",
  description:
    "Eight short games for an 18-month-old: hiding, copying, taking turns and pretend phone calls, with what the studies of this age found.",
  published: "2026-10-19",
  games: [
    "cup-trio-hide",
    "terrible-hider",
    "pat-the-moo",
    "give-and-take",
    "pat-pat-copy",
    "ring-ring-calls",
    "look-and-name",
    "what-next-tower",
  ],
  sources: [
    "cdc-guide",
    "diamond-1985",
    "brain-play",
    "garon-2014",
    "ross-lollis-1987",
    "lind-2017",
    "mendelsohn-2018",
    "yu-smith-2016",
    "bernier-2010",
  ],
  body: (
    <>
      <p>
        Eighteen months sits between the baby games and the toddler games. Harvard’s Center on the Developing Child
        splits its activity guide right there, with one chapter for 6 to 18 months and the next for 18 to 36 months{" "}
        <Cite id="cdc-guide" />. The first lists lap games with a surprise, hiding games and copying games. The
        second adds start-and-stop songs, Follow the Leader, matching, and pretend play the child directs.
      </p>
      <p>
        Every game below fits a kid of 18 months. Most need a few cups, one toy or nothing at all, and each takes 5
        to 10 minutes.
      </p>

      <h2>Hiding games with more spots</h2>
      <p>
        In a classic experiment, babies of 7½ to 12 months found a toy hidden under one of two covers after a short
        delay <Cite id="diamond-1985" />. At 18 months you can add a third hiding place. Harvard’s Brain-Building
        Through Play handout for 12 months to 3 years lists a three cup memory game and simple hide and seek{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        <GameLink id="cup-trio-hide" /> is that cup game. Turn three cups upside down in a row and tuck a toy under
        one while your kid watches. Ask “where is it?” and let them lift cups until they find it, with a cheer for a
        first try.
      </p>
      <p>
        <GameLink id="terrible-hider" /> is hide and seek for a kid who cannot count yet. Tell them to stay on the
        rug, then hide badly behind a chair, counting to five out loud the whole time. Keep counting so your voice
        gives you away. Then swap, and look in two wrong places before you find them.
      </p>
      <p>
        <GameLink id="pat-the-moo" /> is a memory game for 18 months and up. Sit three toys in a row and agree on a
        noise for each, like “moo” for the cow and “beep” for the car. Make one noise without looking at the toys,
        and your kid pats the one that makes it. Researchers test working memory, self-control and rule switching in
        children from 18 months, with tasks that pick up differences from one age to the next{" "}
        <Cite id="garon-2014" />.
      </p>

      <h2>Taking turns</h2>
      <p>
        Babies of 9 to 18 months who played give and take and peekaboo with an adult signalled when the adult missed
        a turn <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        In <GameLink id="give-and-take" />, hold a toy out and say “for you”. Then hold your hand open and wait
        until your kid gives it back. Say “thank you” every time, and hold the toy a beat longer before you offer it
        again. Wait for them to reach or say “more” before each hand over.
      </p>
      <p>
        The waiting is the part for you. When parents of 6- to 21-month-olds were coached to follow their child’s
        lead, respond and show delight, the coaching improved their children’s cognitive flexibility at 4 years{" "}
        <Cite id="lind-2017" />.
      </p>

      <h2>Copying and pretend</h2>
      <p>
        The same Harvard handout lists Toddler See Toddler Do and pretend phone calls for this age{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        <GameLink id="pat-pat-copy" /> is the copying game. Pat a short pattern on your knee, like pat pat, and wait
        for your kid to pat it back on your arm. Keep it to two pats for now. Then swap, so they make the pattern and
        you copy it, slipping up now and then so they can fix you.
      </p>
      <p>
        <GameLink id="ring-ring-calls" /> works from the sofa. Hold a block to your ear, say “ring ring”, and hand
        your kid a block of their own. Ask one question, then go quiet and keep the phone to your ear until they say
        something back. Say “bye bye”, hang up, and wait for them to ring you.
      </p>
      <p>
        In a trial, coaching parents to read aloud and play pretend from birth to age 3 reduced hyperactivity and
        attention problems at four and a half <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Looking, naming and waiting</h2>
      <p>
        One-year-olds kept their attention on a toy for longer when their parent looked at and named the same toy{" "}
        <Cite id="yu-smith-2016" />. <GameLink id="look-and-name" /> turns that into a game. Sit by your kid, turn
        your head to look hard at one thing across the room, and say its name. When their eyes land on it, say the
        name again. Then follow their gaze instead, and name whatever they look at for as long as they look.
      </p>
      <p>
        Leave room for your kid to do things themselves. In one study, parents’ sensitive talk about what their
        child was thinking, and their support for the child’s own tries, at 12 to 15 months predicted executive
        function at 18 and 26 months <Cite id="bernier-2010" />.
      </p>
      <p>
        <GameLink id="what-next-tower" /> practices that on purpose. Tip out the blocks or cups, say “let’s build a
        tall one”, and keep your hands in your lap. When your kid stops, ask “what next?” instead of adding a block
        yourself. If a piece will not fit, point to where it might go and let them try.
      </p>

      <h2>How much is enough</h2>
      <p>
        One game a night is plenty. Play it while your kid is into it, and stop when they wander off. The same game
        can come back tomorrow.
      </p>
      <p>
        There are more in <Link href="/games/age/toddlers">games for toddlers</Link>, sorted by the energy you have
        left, and in <Link href="/games/skill/working-memory">working memory games</Link>. If you have concerns about
        how your kid is developing, talk to your pediatrician.
      </p>
    </>
  ),
};
