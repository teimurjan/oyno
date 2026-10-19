import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "executive-function-babies-toddlers",
  kind: "guide",
  title: "Executive function in babies and toddlers: how play builds it",
  description:
    "The skills your kid uses to remember, wait and switch start in the first year. What they look like at each age, and the games that practice them.",
  published: "2026-10-19",
  games: ["under-the-cup", "still-stone-mouse", "baby-cup-mummy-cup", "day-says-night", "guess-my-rule", "purple-light"],
  sources: [
    "cdc-guide",
    "cuevas-bell-2014",
    "reznick-2004",
    "diamond-1985",
    "rochat-1999",
    "kochanska-2000",
    "hughes-ensor-2005",
    "carlson-2005",
    "gerstadt-1994",
    "zelazo-2006",
    "tominey-mcclelland-2011",
    "schmitt-2015",
    "aap-play",
    "brain-play",
    "thibodeau-2016",
    "mendelsohn-2018",
    "serve-return",
    "yu-smith-2016",
    "lind-2017",
    "hammond-2012",
    "garon-2014",
  ],
  body: (
    <>
      <p>
        “Executive function” sounds like something from an office. It is the set of skills your kid uses to hold a
        thought, stop before acting, and change plans when the rules change. You see it when your toddler waits for
        your “go”, remembers where the ball rolled, or puts the blocks away by color after sorting them by size.
      </p>
      <p>
        These skills are not fixed at birth. They grow fastest in the first five years, and they grow through
        ordinary back-and-forth with an adult. Games are one of the easiest ways to give them practice.
      </p>

      <h2>The three skills, and the one under them</h2>
      <p>
        Harvard’s Center on the Developing Child names three core skills <Cite id="cdc-guide" />:
      </p>
      <ul>
        <li>
          <strong>Working memory</strong>: holding information in mind and using it. Where did the toy go? What
          comes after the song’s next line?
        </li>
        <li>
          <strong>Inhibitory control</strong>, or self-control: stopping the first impulse. Freezing when the music
          stops. Waiting for the spoon.
        </li>
        <li>
          <strong>Cognitive flexibility</strong>: switching between rules or ideas. Sorting by color, then by shape.
          Saying “night” when you see the sun.
        </li>
      </ul>
      <p>
        Under all three sits attention, the ability to stay on one thing. It matters early: in one study, how well
        babies focused their attention at 5 months predicted their executive function between 2 and 4 years{" "}
        <Cite id="cuevas-bell-2014" />.
      </p>

      <h2>In the first year: remembering what is hidden</h2>
      <p>
        Working memory shows up sooner than most parents expect. Babies of five and a half to six and a half months
        could find a toy after a short delay <Cite id="reznick-2004" />. In a classic experiment, babies of 7 and a half
        to 12 months found a toy hidden under one of two covers after a short delay <Cite id="diamond-1985" />.
      </p>
      <p>
        Babies also learn the shape of a game. When researchers disrupted the timing of peekaboo for babies of 2 to 6
        months, the babies noticed <Cite id="rochat-1999" />. The pause before “boo” is a small lesson in holding an
        expectation.
      </p>
      <p>
        At this age the games are simple: <GameLink id="under-the-cup" /> hides a toy while your baby watches, and{" "}
        <GameLink id="hands-peekaboo" /> works with your baby on your chest and nothing in your hands. More are in{" "}
        <Link href="/games/age/babies">games for babies</Link>.
      </p>

      <h2>From 1 to 3: waiting, stopping and the first rules</h2>
      <p>
        Self-control becomes visible in the second and third years. In a long-running study, children of 22 to 45
        months were asked to wait for a treat, walk a line slowly, whisper, and stop and start on a signal{" "}
        <Cite id="kochanska-2000" />. These are all things a toddler can practice in a game.
      </p>
      <p>
        Two-year-olds can also handle a simple rule that goes against what they see. In one task they remembered which
        pots they had already emptied, and in another they called the big cup “baby” and the small cup “mommy”{" "}
        <Cite id="hughes-ensor-2005" />.
      </p>
      <p>
        Try <GameLink id="still-stone-mouse" />, a freeze game you can play lying on the sofa, or{" "}
        <GameLink id="baby-cup-mummy-cup">Baby Cup, Mommy Cup</GameLink>, the same swapped-name rule from the study.
        The <Link href="/games/age/toddlers">toddler games</Link> page sorts them by the energy you have left.
      </p>

      <h2>From 3 to 5: switching rules on purpose</h2>
      <p>
        Preschoolers can take on games with a rule that changes. Children of 2 to 6 were tested on delay tasks,
        reverse sorting, Simon says and whispering, each task graded for a different age <Cite id="carlson-2005" />. Children from three and a half said “night” to a picture of the sun and “day” to
        a picture of the moon <Cite id="gerstadt-1994" />. Children of 3 to 5 sorted cards by color, then switched
        to sorting by shape <Cite id="zelazo-2006" />.
      </p>
      <p>
        Games like these can also train the skills. Preschoolers who played circle games with stop-and-go and
        swapped rules, such as Red Light, Purple Light, improved their self-regulation in a randomized trial{" "}
        <Cite id="tominey-mcclelland-2011" />. A second trial with Head Start preschoolers found the same games
        improved self-regulation and school readiness <Cite id="schmitt-2015" />.
      </p>
      <p>
        At home, try <GameLink id="day-says-night" />, <GameLink id="guess-my-rule" /> or{" "}
        <GameLink id="purple-light" />. There are more in{" "}
        <Link href="/games/age/preschoolers">games for preschoolers</Link> and{" "}
        <Link href="/games/skill/flexible-thinking">flexible thinking games</Link>.
      </p>

      <h2>Why play, and not drills</h2>
      <p>
        The guides that pediatricians and researchers write for parents recommend play, not worksheets. The
        American Academy of Pediatrics describes how play grows from social smiles and peekaboo into pretend play and
        games with rules <Cite id="aap-play" />. Harvard’s activity guides list games for each age: hiding games and
        fingerplays for babies, freeze dance and Follow the Leader for toddlers, Simon says and I Spy for older kids{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        Trials point the same way. Children of 3 to 5 who spent five weeks in fantastical pretend play improved their
        working memory and self-control <Cite id="thibodeau-2016" />. Coaching parents to read aloud and play pretend
        from birth to age 3 reduced hyperactivity and attention problems at four and a half{" "}
        <Cite id="mendelsohn-2018" />.
      </p>

      <h2>The part only you can do</h2>
      <p>
        The skills grow inside a relationship. Harvard calls it serve and return: your kid serves with a look, a sound
        or a point, and you return it, name it, and wait for the next turn <Cite id="serve-return" />.
      </p>
      <p>
        The details matter. One-year-olds kept their attention on a toy for longer when their parent looked at and
        named the same toy <Cite id="yu-smith-2016" />. When parents of babies and toddlers were coached to follow the
        child’s lead, respond and show delight, their children had better cognitive flexibility at 4 years{" "}
        <Cite id="lind-2017" />. When parents gave just enough help with a puzzle at 2 to 3 years, their children had
        stronger executive function a year later <Cite id="hammond-2012" />.
      </p>
      <p>
        None of this needs a toy or a plan. It needs you looking at the same thing your kid is looking at, for a few
        minutes, without the phone in between.
      </p>

      <h2>What not to worry about</h2>
      <p>
        These skills grow steadily through the preschool years. Tests built for children from 18 months to 5 and a
        half years pick up clear differences from one age to the next <Cite id="garon-2014" />. A two-year-old who
        cannot wait for a cookie is a two-year-old.
      </p>
      <p>
        You do not need to test your kid or track scores. Pick a game that fits tonight, play it while they still
        enjoy it, and stop before they are bored. If you have concerns about how your child is developing, talk to
        your pediatrician.
      </p>
    </>
  ),
};
