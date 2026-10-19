import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "rainy-day-games-toddlers",
  kind: "post",
  title: "Rainy day games for toddlers",
  description:
    "Eight active indoor games for a toddler stuck inside: chair tunnels, hallway races, cushion lava and freeze games, with the youngest age for each.",
  published: "2026-10-19",
  games: [
    "chair-tunnels",
    "silly-walk-leader",
    "roll-wait-go",
    "cushion-lava",
    "run-home",
    "sock-rain",
    "cup-drum-parade",
    "terrible-hider",
  ],
  sources: ["brain-play", "bernier-2010", "cdc-guide", "kochanska-2000", "williams-2015"],
  body: (
    <>
      <p>
        A day stuck inside with a toddler is long. These games are for the hours when your kid still has energy to
        burn and going out is not an option. They use the hallway, the sofa cushions and the kitchen chairs, and
        most have a signal that stops the running for a moment.
      </p>
      <p>
        Each game says the youngest age it fits. Some work from the first birthday, and some from 2. You do not
        need all eight in one day. Pick two, play each for ten minutes, and keep the rest for the next day indoors.
      </p>

      <h2>Build a tunnel</h2>
      <p>
        <GameLink id="chair-tunnels" /> works from age 1. Line up two or three kitchen chairs in a row to make a
        tunnel, with a cushion at the end as the finish. Crawl through first, slowly, so your kid sees the way, then
        follow them through. After a few runs, add a cushion to climb over.
      </p>
      <p>
        Harvard’s Brain-Building Through Play handout for 12 months to 3 years includes exploring over cushions on
        the floor <Cite id="brain-play" />. When your kid stops in the tunnel, ask “what next?” instead of pointing.
        That leaves the plan to them. In one study, parents’ support for their child’s own tries at 12 to 15 months
        predicted executive function at 18 and 26 months <Cite id="bernier-2010" />. There are more in{" "}
        <Link href="/games/tag/chairs">games with chairs</Link>.
      </p>

      <h2>Use the hallway</h2>
      <p>
        <GameLink id="silly-walk-leader" /> works from age 1. Walk up the hallway in a silly way, like a wobbly
        penguin, with your kid behind you copying. Change the walk every few steps. At the end, turn round and say
        “your turn”, then copy whatever walk they invent, exactly, even if it is just stamping. Follow the Leader is
        on Harvard’s activity list for toddlers <Cite id="cdc-guide" />.
      </p>
      <p>
        <GameLink id="roll-wait-go" /> is for 2 and up. Crouch at one end of the hallway with your kid beside you and
        roll a ball away down the hall. Hold hands and watch it roll. Only when it has stopped and you say “go” do you
        both chase it. Make the wait after it stops a little longer each time, then let your kid say “go”.
      </p>
      <p>
        More in <Link href="/games/tag/hallway">hallway games</Link>.
      </p>

      <h2>Turn the floor into lava</h2>
      <p>
        <GameLink id="cushion-lava" /> is for 2 and up. Scatter every cushion in the house across the floor and say
        the floor is lava, so feet stay on cushions. Hop together to reach the sofa, holding hands for the big gaps.
        Say “lava rising” and take one cushion away each round.
      </p>
      <p>
        <GameLink id="run-home" /> is for 2 and up too. Give each of you a home cushion in a different corner, then
        wander the room doing silly walks. Shout “home!” and both race to sit on your own cushion. Swap homes every
        few rounds, and cheer when you both remember which cushion is yours now. More in{" "}
        <Link href="/games/tag/cushions">cushion games</Link>.
      </p>

      <h2>Add a stop to the noise</h2>
      <p>
        Stopping on a signal is something researchers ask of toddlers. In a long-running study, children of 22 to 45
        months were asked to wait, walk a line slowly, whisper, and stop and start on a signal{" "}
        <Cite id="kochanska-2000" />. In another, singing, dancing and music games shared at home at 2 to 3 predicted
        attention and self-regulation at 5 <Cite id="williams-2015" />.
      </p>
      <p>
        <GameLink id="sock-rain" /> is for 2 and up. Tip a cup of rolled socks on the floor and shout “rain”, so you
        both throw them up as high as you can. Shout “sunshine” and all throwing stops, and every sock goes back in
        the cup as fast as you can. The last sunshine leaves the room tidy.
      </p>
      <p>
        <GameLink id="cup-drum-parade" /> is for 2 and up. Turn a cup upside down, bang it like a drum, and march
        round the house with your kid behind you. Stop the drum without warning, and the whole band stops mid-step
        until it starts again. Then give your kid the drum.
      </p>

      <h2>Hide and seek for beginners</h2>
      <p>
        Harvard’s play handout for toddlers also lists simple hide and seek <Cite id="brain-play" />.{" "}
        <GameLink id="terrible-hider" /> works from age 1, before your kid can count. Tell them to stay on the rug,
        then hide badly behind a chair, counting to five out loud the whole time. Keep counting from your spot so
        your voice gives you away. Then swap, and look in two wrong places before you find them.
      </p>
      <p>
        When the running is done, switch to something quiet. The{" "}
        <Link href="/games/energy/low">low energy games</Link> are played sitting or lying down, and{" "}
        <Link href="/blog/bedtime-wind-down-games">calm games for bedtime</Link> has a few for the end of the day.
        The full list is in <Link href="/games/age/toddlers">games for toddlers</Link>.
      </p>
    </>
  ),
};
