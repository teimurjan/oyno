import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "activities-6-month-old",
  kind: "post",
  title: "Activities for a 6 month old",
  description:
    "Eight five-minute games for a six-month-old that you can play lying down or with your baby on your lap, and what the research says about each kind.",
  published: "2026-10-19",
  games: [
    "under-the-cup",
    "slow-fist-open",
    "hands-peekaboo",
    "little-piggy-pause",
    "babble-back",
    "copy-cat-faces",
    "big-tiny-voice",
    "flat-out-story",
  ],
  sources: [
    "reznick-2004",
    "rochat-1999",
    "nakata-trehub-2004",
    "cdc-guide",
    "brain-play",
    "serve-return",
    "landry-2006",
    "cuevas-bell-2014",
    "aap-play",
    "mendelsohn-2018",
  ],
  body: (
    <>
      <p>
        A six-month-old does not need a schedule of activities. They need you close, your face where they can see
        it, and a few minutes of back-and-forth. Most of the games below work with you lying on the floor or the
        sofa, and none needs more than a cup, a sock or a book.
      </p>
      <p>
        Every game here fits a baby of six months or younger. Each one takes about five minutes. Stop while your
        baby is still enjoying it.
      </p>

      <h2>What your baby is ready for</h2>
      <p>
        Babies of five and a half to six and a half months could find a toy after a short delay, which researchers
        count as the earliest working memory <Cite id="reznick-2004" />. Working memory is the skill of holding
        something in mind and using it.
      </p>
      <p>
        Babies also pick up the rhythm of a game. When researchers broke the timing of peekaboo and of babbling back
        and forth with babies of 2 to 6 months, the babies reacted <Cite id="rochat-1999" />. And six-month-olds
        paid attention for longer when their mother sang to them than when she spoke{" "}
        <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        Harvard’s Center on the Developing Child suggests a short list for babies of 6 to 18 months: lap games with
        an expected surprise, hiding games, copying games, fingerplays, and talk about what the baby notices{" "}
        <Cite id="cdc-guide" />. The games below follow that list.
      </p>

      <h2>Hiding games</h2>
      <p>
        <GameLink id="under-the-cup" /> is the simplest one. Put a cup upside down over a toy while your baby
        watches it vanish. Ask “Where did it go?”, wait one slow breath, then lift the cup with a gasp. After a few
        rounds, put it back and let your baby do the lifting.
      </p>
      <p>
        <GameLink id="slow-fist-open" /> needs only one hand. Close your fist around a toy too big to swallow, with a
        bit of it poking out, and ask “What’s in there?” Open one finger at a time, as slowly as you can. If your
        baby pulls your fingers open, let them, and close up again for another go.
      </p>

      <h2>Peekaboo and the pause</h2>
      <p>
        Harvard’s Brain-Building Through Play handout for 6 and 9 months starts with peekaboo and hiding games, and
        adds lap rhymes and fingerplays <Cite id="brain-play" />. In each one, the fun sits in the pause before the
        surprise.
      </p>
      <p>
        In <GameLink id="hands-peekaboo" />, you lie back with your baby on your chest and cover your face with both
        hands. Hold still for a slow count of three, then say “Boo!” and open your hands wide. Stretch the count a
        little each time.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> needs bare feet on your lap. Sing This Little Piggy, one toe for each
        pig, slowly. At the last toe, stop and hold the foot still for a long count of three. Then run your fingers
        up to the tummy on “wee wee wee” and start on the other foot.
      </p>

      <h2>Talking and copying</h2>
      <p>
        Your baby can take turns long before they have words. In <GameLink id="babble-back" />, you wait for any
        sound, then answer it as if it were a real sentence. Stop, look at them, and leave a long gap for their turn.
        Let them end the chat when they look away.
      </p>
      <p>
        In <GameLink id="copy-cat-faces" />, you copy your baby’s face or sound one beat after they make it: a tongue
        out, a squeak, a frown. After a few rounds, make one new slow face of your own, hold it, and wait for them to
        try it back.
      </p>
      <p>
        Harvard calls this serve and return. Notice what your baby is focused on, answer it, name what they see or
        feel, then take turns and wait <Cite id="serve-return" />. In a trial, coaching parents to respond this way
        to babies of 6 to 10 months improved the babies’ attention and their problem solving on their own{" "}
        <Cite id="landry-2006" />.
      </p>

      <h2>Songs and books</h2>
      <p>
        <GameLink id="big-tiny-voice" /> uses a song your baby has heard a hundred times. Sing one line in your
        biggest voice, arms wide. Sing the next line in a whisper, leaning in close so they watch your mouth. Keep
        flipping, and flip early whenever their eyes come up to yours.
      </p>
      <p>
        For books, try <GameLink id="flat-out-story" />. Lie side by side on the bed and hold a picture book open
        above you both. Point to one picture, name it, and wait until your baby’s eyes land on it. If they look at
        something else on the page, name that instead and stay there.
      </p>
      <p>
        Looking at one thing together is practice in attention. In one study, how well babies focused their
        attention at 5 months predicted their executive function between 2 and 4 years{" "}
        <Cite id="cuevas-bell-2014" />. The American Academy of Pediatrics notes that pediatricians promote reading
        aloud alongside play from birth <Cite id="aap-play" />. In a trial, coaching parents to read aloud and play
        pretend from birth to age 3 reduced hyperactivity and attention problems at four and a half{" "}
        <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Fitting it into a tired evening</h2>
      <p>
        You do not need all eight. Pick the one that fits where you already are: on your back, on the sofa, or on
        the floor. Five minutes is a full round. Play the same game again tomorrow if it worked today.
      </p>
      <p>
        There are more in <Link href="/games/age/babies">games for babies</Link>, and the{" "}
        <Link href="/games/energy/low">low energy games</Link> are the ones you can play without getting up. If you
        have questions about how your baby is developing, talk to your pediatrician.
      </p>
    </>
  ),
};
