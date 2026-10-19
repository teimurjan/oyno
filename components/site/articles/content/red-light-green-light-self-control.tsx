import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "red-light-green-light-self-control",
  kind: "post",
  title: "Red light, green light and self-control",
  description:
    "Why stop-and-go games like Red Light, Green Light show up in self-control guides, what two classroom trials found, and how to play them at home.",
  published: "2026-10-19",
  games: ["green-means-go", "hum-and-stop", "red-means-clap", "purple-light", "three-lights", "freeze-dance"],
  sources: ["kochanska-2000", "tominey-mcclelland-2011", "schmitt-2015", "brain-play", "cdc-guide-5-7", "cdc-guide"],
  body: (
    <>
      <p>
        You know the game. Someone calls “green light” and everyone moves. Someone calls “red light” and everyone
        stops dead. Anyone still moving goes back to the start.
      </p>
      <p>
        The fun is in the stop. Your kid’s legs want to keep going, and the game asks them to stop anyway. That
        moment, holding back what the body wants to do, is self-control.
      </p>

      <h2>Stopping on a signal starts young</h2>
      <p>
        Researchers have watched this skill in toddlers. In a long-running study, children of 22 to 45 months were
        asked to wait for a treat, walk a line slowly, whisper, and stop and start on a signal{" "}
        <Cite id="kochanska-2000" />. Stop and start on a signal is Red Light, Green Light without the name.
      </p>
      <p>
        So a two-year-old can play a version of it. In <GameLink id="green-means-go" />, for kids of 2 and up, you
        stand side by side at one end of a room and say “green” so you both run for the far wall. Call “red” at any
        moment and you both stop dead. Then take turns calling, and when your kid calls, be a terrible stopper who
        skids and wobbles.
      </p>

      <h2>What the classroom trials found</h2>
      <p>
        Two trials tested stop-and-go games directly. Preschoolers of 3 to 5 played circle games like Red Light,
        Purple Light, freeze games with swapped rules, drum beats and conducting. Their self-regulation
        improved <Cite id="tominey-mcclelland-2011" />. A later trial
        in Head Start preschool classrooms found that the Red Light, Purple Light games improved self-regulation and
        school readiness <Cite id="schmitt-2015" />.
      </p>
      <p>
        These were studies of preschoolers playing in groups. At home you are playing the same kind of game, not running
        the program. That is fine. The game is still worth playing for its own sake.
      </p>

      <h2>The twist: swap the rule</h2>
      <p>
        The first trial did not stop at red and green. It used freeze games with swapped rules{" "}
        <Cite id="tominey-mcclelland-2011" />. A swap asks your kid to drop the old rule and follow the new one.
      </p>
      <p>
        <GameLink id="purple-light" /> brings that twist home. Stand at one end of a hallway. Your kid walks toward
        you on “purple light” and freezes on “red light”. When they reach you, swap the words, so now red means go
        and purple means stop. Call the colors faster each round.
      </p>
      <p>
        <GameLink id="three-lights" /> adds a third rule. Green light is run, red light is stop, and purple light means
        tiptoe. Shout the three in any order, and when your kid reaches you, they call the lights.
      </p>

      <h2>What the guides list</h2>
      <p>The guides that researchers write for parents list stop-and-go games at each age:</p>
      <ul>
        <li>
          For 18 to 36 months, Harvard’s activities guide lists freeze dance and start and stop songs{" "}
          <Cite id="cdc-guide" />.
        </li>
        <li>
          For 4 to 7 years, Harvard’s Brain-Building Through Play handouts list freeze dance with positions, Simon
          Says and Red Light Green Light <Cite id="brain-play" />.
        </li>
        <li>
          For 5 to 7 years, Harvard’s activities guide lists freeze dance, musical chairs and Red Light Green Light{" "}
          <Cite id="cdc-guide-5-7" />.
        </li>
      </ul>

      <h2>How to play it at home, by age</h2>
      <h3>Toddlers, 2 and up</h3>
      <p>
        Keep it to one stop signal. Besides Green Means Go, try <GameLink id="hum-and-stop" /> on a tired night: hum
        any tune and sway together, then stop humming without warning and freeze. Your kid freezes too until the hum
        starts again. <GameLink id="red-means-clap" /> works from a chair: point at things around the room, and your
        kid claps only when the thing is red.
      </p>
      <h3>Preschoolers</h3>
      <p>
        Add the swap. Start with Purple Light, then move to Three Lights. On a loud night, put on one song for{" "}
        <GameLink id="freeze-dance" />. Whoever is in charge shouts “Freeze!” at any moment, everyone holds still,
        and anyone who wobbles is in charge next. For a sitting version, <GameLink id="stop-the-song" /> stops a song
        dead when you raise your hand, even in the middle of a word.
      </p>
      <h3>For every age</h3>
      <ul>
        <li>Start slow, with long gaps between signals, so your kid can win.</li>
        <li>Try signals other than words: a raised hand, a hum that stops, a light switched off.</li>
        <li>Be a bad stopper on purpose now and then. Catching you is half the fun for your kid.</li>
        <li>Give them a turn as the caller. Most of these games end with a swap.</li>
        <li>Keep it short and stop while they still want one more round.</li>
      </ul>
      <p>
        There are more in <Link href="/games/type/stop-go">stop and go games</Link> and in{" "}
        <Link href="/games/skill/self-control">self-control games</Link>. If you have concerns about your kid’s
        behavior or development, talk to your pediatrician.
      </p>
    </>
  ),
};
