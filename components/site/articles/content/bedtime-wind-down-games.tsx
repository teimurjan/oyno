import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "bedtime-wind-down-games",
  kind: "post",
  title: "Calm games for bedtime",
  description:
    "Quiet games for the last minutes before lights out: songs that pause, whispers, slow motion, breathing and stories, for babies, toddlers and preschoolers.",
  published: "2026-10-19",
  games: [
    "lullaby-stop-start",
    "missing-last-word",
    "whisper-chat",
    "sleepy-mirror-slow",
    "belly-boat",
    "melting-snowman",
    "five-sounds",
    "rewind-the-day",
  ],
  sources: ["kochanska-2000", "nakata-trehub-2004", "rochat-1999", "carlson-2005", "cdc-guide", "razza-2015"],
  body: (
    <>
      <p>
        The last stretch before lights out is not the time for chase games. The games here are quiet, played mostly
        lying down, and each one ends on a still moment. They will not make your kid fall asleep. They give the two
        of you ten calm minutes together at the end of the day.
      </p>

      <h2>What makes a game calm</h2>
      <p>
        Every game below has the same three parts: a low voice, a slow pace, and something to hold still for.
        Whispering and going slow on purpose are the kind of tasks researchers give toddlers. In a long-running
        study, children of 22 to 45 months were asked to whisper, walk a line slowly, and stop and start on a
        signal <Cite id="kochanska-2000" />.
      </p>
      <p>
        So a bedtime game can still be a real game. It has a rule. The rule is just quiet.
      </p>

      <h2>For babies: a song that stops</h2>
      <p>
        <GameLink id="lullaby-stop-start" /> works from 6 months. Lie back with your baby on your chest and hum or
        sing a lullaby they know. Stop in the middle of a line and go completely still, breathing slowly. The moment
        they wiggle, coo or look up, start again from where you stopped. Six-month-olds paid attention for longer
        when their mother sang to them than when she spoke <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        <GameLink id="missing-last-word" /> works from 2 months, with the lights low. Sing a song your baby knows
        well, slowly, looking at their face. Stop right before the last word of a line and hold the silence with
        your eyebrows up. Wait for a wiggle, a kick or a look, then land the word with a smile. Babies of 2 to 6
        months reacted when researchers broke the timing of games like peekaboo <Cite id="rochat-1999" />.
      </p>

      <h2>For toddlers: whispers and slow motion</h2>
      <p>
        <GameLink id="whisper-chat" /> is for 2 and up. Lay a toy down to sleep between you and agree that only
        whispers are allowed while it sleeps. Whisper a question, like “what did you eat?”, and your kid whispers
        the answer back. If anyone talks out loud, the toy sits up cross, and you both whisper it back to sleep.
      </p>
      <p>
        <GameLink id="sleepy-mirror-slow" /> is for 2 and up. Lie side by side and do everything in slow motion, so
        a yawn takes a whole breath to finish. Your kid copies each slow move, a stretch, a roll, a rub of the eyes,
        at your snail speed. Let them lead a slow move or two, then end with the slowest eyes closed of all.
      </p>
      <p>
        A whisper task is one of the tasks researchers have given children of 2 to 6, along with waiting and Simon
        says <Cite id="carlson-2005" />. There are more in <Link href="/games/type/quiet-voice">whisper games</Link>.
      </p>

      <h2>For preschoolers: breathing and listening</h2>
      <p>
        Harvard’s activity guide for 3 to 5 lists yoga poses with slow breathing <Cite id="cdc-guide" />.
        Preschoolers who did mindful yoga, with held poses and slow breathing, improved their self-regulation{" "}
        <Cite id="razza-2015" />.
      </p>
      <p>
        <GameLink id="belly-boat" /> needs one small toy each. Lie on your backs with a toy riding on each belly.
        Breathe in slowly so the boat rises, then out slowly so it sinks. Count five boat rides together, then watch
        one more without a word.
      </p>
      <p>
        <GameLink id="melting-snowman" /> is for a kid who is still wound up. Your kid lies down as a frozen
        snowman, stiff from toes to nose. Name one body part at a time, and the sun melts it soft into the floor.
        When the whole snowman is a puddle, breathe out together.
      </p>
      <p>
        <GameLink id="five-sounds" /> needs nothing at all. Lie still together with your eyes shut and listen. Each
        time one of you hears a sound, whisper what it was and hold up a finger. Stop at five, then decide together
        which sound was the quietest. More are in <Link href="/games/type/quiet-focus">quiet focus games</Link>.
      </p>

      <h2>Stories in the dark</h2>
      <p>
        <GameLink id="rewind-the-day" /> is for lights out and a kid who likes to talk. Start with right now and ask
        “and before that?” to walk the day backward. Give a hint only when your kid stalls, and keep going until
        breakfast. Next round, rewind a story you both know, from the end back to the beginning. Storytelling is on
        the same Harvard list for 3 to 5 <Cite id="cdc-guide" />.
      </p>
      <p>
        If the story runs long, let it. The point is ten minutes together, not a finished game.
      </p>

      <h2>If bedtime is a fight</h2>
      <p>
        A game will not fix every bedtime, and nothing here is advice about sleep. If falling asleep or staying
        asleep is a struggle most nights, talk to your pediatrician.
      </p>
      <p>
        For more, see <Link href="/games/tag/bedtime">bedtime games</Link> and the{" "}
        <Link href="/games/energy/low">low energy games</Link>.
      </p>
    </>
  ),
};
