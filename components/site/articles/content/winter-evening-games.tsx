import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "winter-evening-games",
  kind: "post",
  title: "Games for dark winter evenings",
  description:
    "Games that use the dark: a lamp, a phone flashlight and a quiet room. Picks for babies, toddlers and preschoolers, and a way to play with two ages at once.",
  published: "2026-10-19",
  games: [
    "lamp-off-lamp-on",
    "light-spot-hunt",
    "ceiling-star-spot",
    "goodnight-room-dark",
    "spot-chase",
    "torch-trail",
    "sun-moon-switch",
    "five-sounds",
  ],
  sources: ["rochat-1999", "reznick-2004", "serve-return", "hughes-ensor-2005", "kochanska-2000", "carlson-2005"],
  body: (
    <>
      <p>
        When it is dark before dinner, the whole evening happens indoors. I work all day, come home and reach for the
        phone. The games below give the phone one other job: a flashlight.
      </p>
      <p>
        They use the dark itself. A lamp switched off and on, a spot of light on the wall, a quiet room to listen
        in. They are grouped by age, with a section at the end for two kids of different ages.
      </p>

      <h2>For a baby: the lamp and the spot</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> works from 2 months. Sit by a lamp you can reach with your baby on your
        lap. Say “off” slowly and switch it off, wait for them to look for it, then say “on” and bring it back.
        Stretch the dark pause a little each time, and keep your voice soft.
      </p>
      <p>
        It is peekaboo with a lamp. When researchers broke the timing of peekaboo with babies of 2 to 6 months, the
        babies reacted <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> works from 5 months, in a dim bedroom with your baby on your lap. Shine
        your phone flashlight on the wall and wait until your baby finds the spot. Slide it slowly along the wall,
        then switch it off and ask “where did it go?” Switch it on in a new place and let them find it before you
        move it again. Babies of five and a half to six and a half months could find a toy after a short delay{" "}
        <Cite id="reznick-2004" />.
      </p>

      <h2>For a toddler: a star on the ceiling</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> works from age 1. Lie side by side in a dark bedroom, shine the
        flashlight at the ceiling, and glide the spot slowly across it. Your kid follows the star with their eyes,
        and when it stops, they point at it. Switch it off, ask “where was it?”, and let them point before you
        switch it back on to check.
      </p>
      <p>
        Harvard calls this kind of play serve and return: share your kid’s focus, name what they see, take turns and
        wait <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> is for 2 and up. Say goodnight to three things in the room together,
        like the lamp, the chair and teddy, pointing at each. Switch the light off and ask “where is the lamp?” so
        your kid points to it in the dark. Light back on to check, then ask for the other two. In one study,
        two-year-olds remembered which pots they had already emptied{" "}
        <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>For 2 and up: freeze in the dark</h2>
      <p>
        <GameLink id="spot-chase" /> is the one for energy left over. Dim the room, shine the flashlight on the
        floor, and let your kid stamp on the bright spot. Slide the spot away as they chase it. When you switch the
        flashlight off, everyone freezes until it is back. Then hand it over and chase the spot yourself.
      </p>
      <p>
        In a long-running study, children of 22 to 45 months were asked to stop and start on a signal, along with
        waiting and whispering <Cite id="kochanska-2000" />. Here the signal is the dark.
      </p>

      <h2>For a preschooler: trails and switches</h2>
      <p>
        <GameLink id="torch-trail" /> is played lying down. Dim the room and shine the flashlight on three things,
        one after another. Switch it off, and your kid names the three things in the same order. Add a fourth, then
        hand over the flashlight so they can test you.
      </p>
      <p>
        <GameLink id="sun-moon-switch" /> needs you standing by the light switch. Light on means your kid says
        “night” and curls up. Light off means they say “day” and stretch awake. Flick the switch at odd moments,
        slowly at first and then quickly. Then swap, and get it wrong on purpose. Saying day for night is one of the
        tasks researchers have given children of 2 to 6 <Cite id="carlson-2005" />.
      </p>
      <p>
        For the quietest end of the evening, <GameLink id="five-sounds" /> needs no light at all. Lie still together
        with your eyes shut. Each time one of you hears a sound, whisper what it was and hold up a finger. Stop at
        five, and decide together which sound was the quietest.
      </p>

      <h2>Two kids, one flashlight</h2>
      <p>
        Spot Chase ends with your kid holding the flashlight. An older sibling can take that job for the whole game
        while a baby or toddler hunts the spot, as in Light Spot or Ceiling Star. You stay on the floor between them
        and do the naming.
      </p>
      <p>
        Keep the beam on walls, ceilings and floors, away from faces. Use the phone only as a light, and put it face
        down when the game is over.
      </p>
      <p>
        There are more in <Link href="/games/tag/lights">games with lights</Link>,{" "}
        <Link href="/games/tag/quiet">quiet games</Link> and <Link href="/games/tag/bedtime">bedtime games</Link>.
      </p>
    </>
  ),
};
