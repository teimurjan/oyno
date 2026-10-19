import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "games-4-year-old-indoors",
  kind: "post",
  title: "Indoor games for a 4 year old",
  description:
    "Eight indoor games for a four-year-old: rule flips, cup tricks, a pretend restaurant and a living room obstacle course, with the studies behind each.",
  published: "2026-10-19",
  games: [
    "heads-mean-toes",
    "purple-light",
    "cup-shuffle",
    "build-my-plan",
    "pretend-restaurant",
    "obstacle",
    "guess-my-rule",
    "missing-word-song",
  ],
  sources: [
    "ponitz-2009",
    "tominey-mcclelland-2011",
    "schmitt-2015",
    "thorell-2009",
    "schmitt-2018",
    "thibodeau-2016",
    "elias-berk-2002",
    "cdc-guide",
    "mulvey-2018",
    "zelazo-2006",
    "bugos-demarie-2017",
  ],
  body: (
    <>
      <p>
        The games below all have one rule, and most of them flip it halfway. Each one fits a four-year-old, needs
        only a room and what is in it, and takes about 10 minutes. A few let you stay in your chair.
      </p>

      <h2>Rule games that flip</h2>
      <p>
        In one study, children of 4 to 6 touched their toes when told “head” and their head when told “toes”, and
        how they did predicted how they fared in kindergarten <Cite id="ponitz-2009" />.
      </p>
      <p>
        <GameLink id="heads-mean-toes" /> is that task as a game, and you can call it from a chair. Tell your kid
        that when you say “head” they touch their toes, and when you say “toes” they touch their head. Call the two
        words in a random order, slowly at first and then faster. When it gets easy, add knees and shoulders as a
        second swapped pair.
      </p>
      <p>
        <GameLink id="purple-light" /> needs a hallway. Stand at one end. Your kid walks toward you on “purple light”
        and freezes on “red light”. When they reach you, swap the words, so red means go and purple means stop.
        Call the colors faster each round. Preschoolers who played circle games like Red Light, Purple Light
        improved their self-regulation <Cite id="tominey-mcclelland-2011" />, and a second trial in Head Start
        classrooms found the same games improved self-regulation and school readiness <Cite id="schmitt-2015" />.
      </p>

      <h2>Memory games at the table</h2>
      <p>
        <GameLink id="cup-shuffle" /> needs three cups and a rolled-up sock. Hide the sock under one cup while your
        kid watches. Slide two cups past each other slowly, then swap another pair, and ask which cup hides the
        sock. Add a swap each round, then hand over the cups so your kid shuffles and you guess.
      </p>
      <p>
        In a trial, four- and five-year-olds who trained on working memory tasks improved their working memory and
        attention on tasks they had not trained on <Cite id="thorell-2009" />.
      </p>
      <p>
        <GameLink id="build-my-plan" /> turns building into memory. Describe a tower in words first, like three
        cups, then the book, then two cups on top. Your kid builds it from memory while you keep your hands in your
        lap. Check it together against the plan, then your kid describes one and you build. Preschoolers in block
        play that built from plans and pictures improved their executive function <Cite id="schmitt-2018" />.
      </p>

      <h2>Pretend play with a plan</h2>
      <p>
        In <GameLink id="pretend-restaurant" />, you sit down as the customer and order three dishes, like soup, a
        pizza and a banana. Your kid, the waiter, repeats the order back, cooks it from cushions and cups, and
        serves the dishes in the order you asked. Next round, add a drink.
      </p>
      <p>
        Children of 3 to 5 who spent five weeks in fantastical pretend play improved their working memory and
        self-control <Cite id="thibodeau-2016" />. In another study, preschoolers’ complex pretend play with others
        predicted their self-regulation later on <Cite id="elias-berk-2002" />.
      </p>

      <h2>A living room obstacle course</h2>
      <p>
        <GameLink id="obstacle" /> takes the most setup here, and it runs for 15 minutes. Build a
        course that goes under a chair, over a cushion and around the table. Time your kid with a slow count out
        loud. Then they change one obstacle and time you.
      </p>
      <p>
        Harvard’s activity guide for 3 to 5 lists obstacle courses and balance <Cite id="cdc-guide" />.
        Preschoolers in a program of hopping, jumping, throwing and catching improved their executive function{" "}
        <Cite id="mulvey-2018" />.
      </p>

      <h2>Switching rules and songs</h2>
      <p>
        <GameLink id="guess-my-rule" /> is a detective game with a sock pile. Sort the socks into two piles by a
        secret rule, like striped and plain. Your kid watches and calls out the rule as soon as they spot it. Then
        they sort by their own secret rule and you guess, and no rule may be used twice. Children of 3 to 5 have
        been tested on the same kind of switch: sort cards by color, then switch to shape{" "}
        <Cite id="zelazo-2006" />.
      </p>
      <p>
        <GameLink id="missing-word-song" /> is for a kid of four who knows all the words. Sing a song you both know,
        like “Twinkle Twinkle”. Pick one word, like “star”, and every time it comes you both clap instead of singing
        it. Each round, add one more silent word. Children of 4 to 6 in a short music program of singing, rhythm and
        instruments improved their executive function <Cite id="bugos-demarie-2017" />.
      </p>

      <h2>Picking one tonight</h2>
      <p>
        Match the game to the energy you have left. If you still have some, set up the obstacle course or play
        Purple Light in the hallway. If you are on the sofa, Heads Mean Toes and Guess My Rule both work from there.
        If it is close to bed, Missing Word Song can be sung lying down.
      </p>
      <p>
        There are more in <Link href="/games/age/preschoolers">games for preschoolers</Link>, and the{" "}
        <Link href="/games/skill/self-control">self-control games</Link> collect the freeze and opposite games in
        one place.
      </p>
    </>
  ),
};
