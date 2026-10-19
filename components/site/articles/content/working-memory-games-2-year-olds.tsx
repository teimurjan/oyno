import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "working-memory-games-2-year-olds",
  kind: "post",
  title: "Simple working memory games for 2 year olds",
  description:
    "What two-year-olds can hold in mind, what the studies tested them on, and short memory games with cups, toys and your own nose to play tonight.",
  published: "2026-10-19",
  games: ["cup-trio-hide", "who-ran-away", "two-things-fetch", "line-them-up", "goodnight-room-dark", "beep-nose-buttons"],
  sources: ["reznick-2004", "diamond-1985", "hughes-ensor-2005", "garon-2014", "brain-play", "cdc-guide"],
  body: (
    <>
      <p>
        Working memory is holding something in mind and using it. Where did the ball go? What did Dad ask me to
        bring? Which cup did I already look under? Your two-year-old does this all day, and it is one of the skills
        you can practice in a five-minute game.
      </p>

      <h2>It starts before two</h2>
      <p>
        Working memory shows up early. Babies of five and a half to six and a half months could find a toy after a
        short delay <Cite id="reznick-2004" />. Babies of 7 and a half to 12 months found a toy hidden under one of two
        covers after a short delay <Cite id="diamond-1985" />.
      </p>
      <p>
        Games for two-year-olds ask for a little more: two hidden things instead of one, or a short list instead of
        a single word.
      </p>

      <h2>What two-year-olds were tested on</h2>
      <p>
        In one study, two-year-olds played Spin the Pots, a game where they had to remember which pots they had
        already emptied <Cite id="hughes-ensor-2005" />. Another team built a set of working memory, self-control and
        rule-switching tasks for children from 18 months to about five and a half. The tasks picked up clear
        differences from one age to the next <Cite id="garon-2014" />.
      </p>
      <p>
        Harvard’s Brain-Building Through Play handouts for 12 months to 3 years list simple hide and seek, the three
        cup memory game, and matching and sorting <Cite id="brain-play" />. These are games you can play on the
        floor with what is already in the room.
      </p>

      <h2>Hiding games</h2>
      <p>
        <GameLink id="cup-trio-hide" /> is close to Spin the Pots. Turn three cups upside down in a row and tuck a toy
        under one while your kid watches. Ask “where is it?” and let them lift cups until they find it. For a kid of 2
        and up, hide two toys and see if they remember which cup is already empty.
      </p>
      <p>
        You can play it on the floor with your back against the sofa, and any three cups or bowls will do.
      </p>
      <p>
        <GameLink id="who-ran-away" /> flips it around. Line up three toys and name each one together. Your kid
        covers their eyes while you tuck one toy behind your back, then ask “who ran away?” When they guess right,
        the toy comes back with a hello. After a few goes, they hide and you guess.
      </p>

      <h2>List games</h2>
      <p>
        <GameLink id="two-things-fetch" /> turns a request into a game. Sit down and ask for two things in one
        breath, like “bring me the cup and the duck”. Stay where you are and cheer each thing as it arrives, even if
        only one makes it. When two is easy, ask for three.
      </p>
      <p>
        <GameLink id="line-them-up" /> adds order. Name two toys, like “bear, then car”, and your kid lines them up left
        to right as you said. Check the line together, then name three. Swap, and get one wrong for them to fix.
      </p>

      <h2>Games for a tired parent</h2>
      <p>
        Memory games do not need you on your feet. In <GameLink id="beep-nose-buttons" />, you are a machine lying
        down. Your nose is a button that beeps, your ear plays a song, and your chin snores. Your kid presses a button
        and you do exactly that thing. Add a fourth button on your cheek, then ask “which button snores?”
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> fits the last minute before lights out. Say goodnight to three things in
        the room together, pointing at each. Switch the light off and ask “where is the lamp?” so your kid points to
        it in the dark. Light back on to check.
      </p>

      <h2>How to pitch it right</h2>
      <ul>
        <li>
          <strong>Start with two.</strong> Two cups, two things to fetch, two toys in a row. Go to three only when two
          is easy.
        </li>
        <li>
          <strong>Let them win the first round.</strong> Hide the toy slowly, in full view.
        </li>
        <li>
          <strong>Keep a wrong guess light.</strong> If they lift the wrong cup, lift it with them, say “not here”, and
          try the next one together.
        </li>
        <li>
          <strong>Swap roles.</strong> Most of these games end with your kid hiding or giving the orders, and you
          getting it a little wrong.
        </li>
        <li>
          <strong>Talk about what comes next.</strong> Harvard’s activities guide for 18 to 36 months lists matching,
          puzzles, and conversation and storytelling about what you will do next <Cite id="cdc-guide" />.
        </li>
      </ul>
      <p>
        A two-year-old who forgets the second thing on the list is a two-year-old. You do not need to test or track
        anything. If you have concerns about how your child is developing, talk to your pediatrician.
      </p>
      <p>
        There are more in <Link href="/games/skill/working-memory">working memory games</Link>, and the{" "}
        <Link href="/games/age/toddlers">toddler games</Link> page sorts all of them by the energy you have left.
      </p>
    </>
  ),
};
