import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "ten-minute-activities-after-work",
  kind: "post",
  title: "10-minute activities to do with your kid after work",
  description:
    "You just walked in and have about ten minutes of energy left. Here are short games for babies, toddlers and preschoolers that need almost no setup.",
  published: "2026-10-19",
  games: ["ball-back", "point-and-name", "wait-wait-go", "tell-teddy", "heads-mean-toes", "closed-hands"],
  sources: ["kushlev-dunn-2019", "serve-return", "landry-2006", "yu-smith-2016", "kochanska-2000", "williams-2015", "ponitz-2009"],
  body: (
    <>
      <p>
        You walk in, put your bag down, and your kid is already at your legs. Dinner needs you soon, and you do not
        have much left. You have about ten minutes. That is enough for one good game.
      </p>
      <p>
        I work all day too, and when I get home my hand goes to my phone before my coat is off. Those first minutes
        are easy to lose. In one experiment, parents at a science museum who were asked to use their phones a lot
        felt more distracted and less connected to their children than parents asked to use them a little{" "}
        <Cite id="kushlev-dunn-2019" />. The games below are a way to spend the same minutes on the floor instead.
      </p>

      <h2>Why ten minutes is enough</h2>
      <p>
        A short game is still real time together. Harvard’s serve and return handout describes the back-and-forth
        that matters: notice what your kid is focused on, share it, name it, take turns and wait{" "}
        <Cite id="serve-return" />. None of that needs an hour.
      </p>
      <p>
        Every game here takes 10 minutes or less and has at most three steps. Pick one, play it until your kid
        loses interest, and then start dinner.
      </p>

      <h2>Babies: one game on the floor</h2>
      <p>
        For a baby who sits steady, try <GameLink id="ball-back" />. Sit facing them with your legs wide to make a
        pen, and roll a ball slowly into their lap. Hold out your hands and wait in silence until they push it back.
        Say “my turn”, roll it again, and let the waits get longer.
      </p>
      <p>
        The waiting is your part of the work. In a trial, coaching parents of babies of 6 to 10 months to respond to
        their baby improved the babies’ attention and independent problem solving <Cite id="landry-2006" />.
      </p>
      <p>
        From about 9 months, when babies start to follow a point, try <GameLink id="point-and-name" />. With your
        baby on your lap, point at one thing across the room and hold your arm there until their eyes land on it.
        Name it once, slowly. Then follow their look instead, and name whatever they stare at. One-year-olds kept
        their attention on a toy for longer when their parent looked at and named the same toy{" "}
        <Cite id="yu-smith-2016" />.
      </p>

      <h2>Toddlers: short rules, quick turns</h2>
      <p>
        These three are for kids of 2 and up, and you can play all of them sitting down.
      </p>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: sit facing each other with the ball in your kid’s hands. Say “wait, wait”
          slowly, then “go”, and they roll it to you. Stretch the wait a little each time.
        </li>
        <li>
          <GameLink id="loud-soft-singing">Loud and Soft</GameLink>: sing a song together. Hand high means loud, hand
          on your knee means a whisper. Then your kid’s hand decides.
        </li>
        <li>
          <GameLink id="tell-teddy" />: sit teddy across the room and whisper a short message to your kid, like
          “teddy, dinner time”. They walk over and tell teddy, and you answer in teddy’s voice.
        </li>
      </ul>
      <p>
        Waiting and whispering are both tasks researchers used to study self-control in children of 22 to 45 months{" "}
        <Cite id="kochanska-2000" />. Music games count too. In one study, shared singing, dancing and music games at
        home at 2 to 3 predicted attention and self-regulation at 5 <Cite id="williams-2015" />.
      </p>

      <h2>Preschoolers: a rule to break</h2>
      <p>
        Preschoolers love a rule that turns things upside down. For a kid of four and up, try{" "}
        <GameLink id="heads-mean-toes" />. When you say “head”, they touch their toes, and when you say “toes”, they
        touch their head. Start slow, then go faster. You can call it from a chair. This is close to a task from a
        study where children of 4 to 6 did the same swap, and how they did predicted their kindergarten outcomes{" "}
        <Cite id="ponitz-2009" />.
      </p>
      <p>
        If your kid is wound up after daycare, <GameLink id="closed-hands" /> slows things down. They shut their eyes
        and hold out two closed hands. Count slowly to twenty together, and if their eyes or hands open, start again.
        At twenty, a small toy lands in their hands.
      </p>
      <p>
        If they need to move, <GameLink id="pillow-island" /> works in ten minutes. Lay cushions across the floor as
        islands. Your kid crosses without touching the “water”, and each time they make it, you take one island away.
      </p>

      <h2>A plan for the door</h2>
      <ol>
        <li>Leave your phone in your bag or on the charger by the door.</li>
        <li>Offer two games and let your kid choose.</li>
        <li>Sit on the floor before you sit on the couch. It is easier to start a game from there.</li>
        <li>Play until your kid wanders off, and then start dinner without guilt.</li>
      </ol>
      <p>
        For more games like these, see <Link href="/games/energy/medium">easy games for an ordinary evening</Link>.
        On the nights you have less, try <Link href="/games/energy/low">low energy games</Link>.
      </p>
    </>
  ),
};
