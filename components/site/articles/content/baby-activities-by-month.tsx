import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "baby-activities-by-month",
  kind: "guide",
  title: "Activities for babies 0 to 12 months, by month",
  description:
    "Simple games for each stage of your baby’s first year, from peekaboo on your chest to taking turns, with what the studies found at each age.",
  published: "2026-10-19",
  games: [
    "hands-peekaboo",
    "missing-last-word",
    "toy-comet",
    "peeking-tail",
    "copy-cat-faces",
    "two-cup-switch",
    "toy-give-back",
    "look-where-i-look",
  ],
  sources: [
    "aap-play",
    "cdc-guide",
    "tronick-1978",
    "rochat-1999",
    "mendelsohn-2018",
    "haith-1988",
    "cuevas-bell-2014",
    "reznick-2004",
    "nakata-trehub-2004",
    "brain-play",
    "landry-2006",
    "diamond-1985",
    "ross-lollis-1987",
    "yu-smith-2016",
    "bernier-2010",
    "serve-return",
    "lind-2017",
    "myruski-2018",
  ],
  body: (
    <>
      <p>
        A game that made your baby laugh in one month can bore them a few weeks later. This guide sorts simple games
        by stage, from the first weeks to the first birthday. Each one takes 5 to 15 minutes, and most need nothing
        but your face, your voice and maybe a cup or a cloth.
      </p>
      <p>
        The months come from the studies below, which tested babies at those ages. Use them as a rough map, not a
        checklist. If a game from an earlier stage still makes your baby smile, keep playing it.
      </p>
      <p>
        Tonight, find your baby’s stage below, pick one game and read its steps once. Leave the phone in another
        room, play until your baby looks away, and stop there.
      </p>

      <h2>What play looks like in the first year</h2>
      <p>
        The American Academy of Pediatrics describes play in the first year as growing from social smiling into serve
        and return, peekaboo and pat-a-cake. Its pediatricians also promote reading aloud alongside play from birth{" "}
        <Cite id="aap-play" />.
      </p>
      <p>
        For babies of 6 to 18 months, Harvard’s Center on the Developing Child recommends lap games with an expected
        surprise, hiding games, copying games, simple role play, fingerplays, and talking about what your baby notices{" "}
        <Cite id="cdc-guide" />. Almost every game below is one of those. What changes from stage to stage is what your
        baby brings to it.
      </p>

      <h2>0 to 3 months: your face and your voice</h2>
      <p>
        In the first weeks, you are the toy. The game is your face, your voice and the pauses between them.
      </p>
      <p>
        Babies notice when that face goes blank. In a classic experiment, babies of 1 to 4 months whose mothers held
        a still, unresponsive face grew wary and withdrew within minutes <Cite id="tronick-1978" />. Babies also notice
        the shape of a game. When researchers disrupted the timing and structure of peekaboo, and of babbling back and
        forth, babies of 2 to 6 months reacted to the change <Cite id="rochat-1999" />.
      </p>
      <p>Two games fit this stage, and both work with you lying down:</p>
      <ul>
        <li>
          <GameLink id="hands-peekaboo" />: lie back with your baby on your chest and cover your face with both hands.
          Hold still for a slow count of three, then say “Boo!” and open your hands wide. Stretch the count a little
          each time, and stop while your baby is still smiling.
        </li>
        <li>
          <GameLink id="missing-last-word" />: sing a song your baby has heard a hundred times, slowly, looking at
          their face. Stop right before the last word of a line and hold the silence with your eyebrows up. Wait for a
          wiggle, a kick or a look, then land the word with a big smile.
        </li>
      </ul>
      <p>
        Books count too, from the start. In a trial that coached parents to read aloud and play pretend with their
        child from birth to age 3, the coaching reduced hyperactivity and attention problems at four and a half{" "}
        <Cite id="mendelsohn-2018" />. More lap games are in{" "}
        <Link href="/games/type/anticipation-rhyme">anticipation rhymes</Link> and{" "}
        <Link href="/games/type/peekaboo">peekaboo games</Link>.
      </p>

      <h2>3 to 6 months: watching and expecting</h2>
      <p>
        Your baby starts to look ahead. In one experiment, babies of 3 and a half months learned a left and right
        sequence of pictures and looked ahead to where the next picture would appear <Cite id="haith-1988" />.
      </p>
      <p>
        Attention is part of this stage too. How well babies focused their attention at 5 months predicted their
        executive function at 2 to 4 years <Cite id="cuevas-bell-2014" />. Executive function is the set of skills a
        kid uses to hold a thought, stop before acting and switch plans. Our{" "}
        <Link href="/guides/executive-function-babies-toddlers">guide to executive function</Link> explains it in
        more detail.
      </p>
      <p>
        The first signs of working memory show up toward the end of this stage. Babies of five and a half to six and
        a half months could find a toy after a short delay <Cite id="reznick-2004" />.
      </p>
      <ul>
        <li>
          <GameLink id="toy-comet" />: lie on your backs and hold a toy about a forearm from your baby’s face until
          their eyes settle on it. Drift it slowly to one side, stop, and wait for their eyes to catch up before you
          move again. Stop when they look away.
        </li>
        <li>
          <GameLink id="peeking-tail" />: for a baby of about 5 months who grabs but cannot yet find a toy that is
          fully hidden. Lay a cloth over a toy so a corner still peeks out. Ask “Where did it go?”, tap the peeking
          bit, and wait with your hands off. When they pull the cloth, cheer softly, and cover a little more of the
          toy next time.
        </li>
      </ul>
      <p>
        For more, see <Link href="/games/type/joint-attention">look-and-point games</Link> and{" "}
        <Link href="/games/type/hide-and-find">hide-and-find games</Link>.
      </p>

      <h2>6 to 9 months: songs, copying and hiding</h2>
      <p>
        Singing earns its place now. Babies of 6 months paid attention longer to their mother singing than to her
        speaking <Cite id="nakata-trehub-2004" />. You do not need a good voice, only a song your baby knows.
      </p>
      <p>
        For babies of 6 and 9 months, Harvard’s Brain-Building Through Play handouts list peekaboo and hiding games,
        Trot Trot to Boston, Pat-a-Cake, Dickory Dean, Baby See Baby Do, taking turns dropping a toy with “Boom”,
        conversation games and fingerplays <Cite id="brain-play" />.
      </p>
      <p>
        How you respond matters at this age. In a trial, coaching parents to respond to their babies of 6 to 10 months
        improved the babies’ attention and independent problem solving <Cite id="landry-2006" />. From about 7 and a
        half months, babies in a classic experiment could find a toy hidden under one of two covers after a short delay{" "}
        <Cite id="diamond-1985" />.
      </p>
      <ul>
        <li>
          <GameLink id="copy-cat-faces" />: copy your baby’s face or sound one beat after they make it, a tongue out,
          a squeak, a frown. After a few, make one new slow face of your own and hold it. Wait, with the face on, for
          them to try it back.
        </li>
        <li>
          <GameLink id="two-cup-switch" />: for the high chair tray and a baby from about 8 months. Turn two cups
          upside down and tuck a toy under one while your baby watches. Count a slow “one, two, three”, then let them
          lift a cup. After a few wins, move the toy under the other cup in full view, count again, and watch where
          they reach.
        </li>
      </ul>
      <p>
        For more, see <Link href="/games/type/fingerplay-song">finger plays and action songs</Link> and{" "}
        <Link href="/games/type/imitation">copycat games</Link>.
      </p>

      <h2>9 to 12 months: turns, points and first pretend</h2>
      <p>
        Games become a real back-and-forth. Babies of 9 to 18 months in turn-taking games, such as give-and-take and
        peekaboo, signaled when the adult missed a turn <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Around the first birthday, where you look matters. One-year-olds kept their attention on a toy for longer
        when their parent looked at and named the same toy <Cite id="yu-smith-2016" />. Talk counts too. Parents’ sensitive talk about what their baby might be thinking,
        and their support for the baby doing things alone, at 12 to 15 months predicted executive function at 18 and
        26 months <Cite id="bernier-2010" />. At home, that can be as small as saying what you think your baby wants,
        “you want the spoon”, and letting them try before you help.
      </p>
      <ul>
        <li>
          <GameLink id="toy-give-back" />: for a baby of about 9 months and up on your lap. Hand them a toy and say
          “here you go”. Then hold out your open hand, say “my turn”, and wait without grabbing, even if it takes a
          minute. When the toy lands in your hand, say “thank you” and give it straight back with “your turn”.
        </li>
        <li>
          <GameLink id="look-where-i-look" />: for a baby of about 9 months who sits. Put two toys on the floor in
          front of you both. Turn your head to one, look hard at it, and say its name once. Wait for their eyes to
          follow yours, then name it again and let them have it.
        </li>
      </ul>
      <p>
        Simple role play, from Harvard’s list above, fits here too: an empty cup you slurp from, or a pretend phone
        call to Grandma. Find more in{" "}
        <Link href="/games/type/turn-taking">turn-taking games</Link> and{" "}
        <Link href="/games/type/pretend-play">pretend play games</Link>, or browse all{" "}
        <Link href="/games/age/babies">games for babies</Link>.
      </p>

      <h2>What stays the same all year</h2>
      <p>
        The method does not change with the months. Harvard’s serve and return handout puts it in five steps: notice
        what your baby is focused on and share it, return it with support, name what they see or feel, take turns
        and wait, and practice endings and beginnings. Its example is peekaboo <Cite id="serve-return" />.
      </p>
      <p>
        Following your baby’s lead is the part to practice. When parents of 6- to 21-month-olds were coached to follow the
        child’s lead, respond and show delight, it improved their children’s cognitive flexibility at 4 years{" "}
        <Cite id="lind-2017" />.
      </p>
      <p>A few habits from the game steps above fit every stage:</p>
      <ul>
        <li>Stop while your baby is still smiling, not when they are done.</li>
        <li>When they look away, take it as the end of the round.</li>
        <li>Stretch the pause a little each time, and let them fill it.</li>
        <li>Name what they look at, in a few warm words.</li>
      </ul>
      <p>
        Babies notice the phone, too. Babies of 7 to 24 months grew upset when their mother turned to her phone during
        a still-face task, and babies whose mothers used devices more at home recovered less{" "}
        <Cite id="myruski-2018" />. I know how hard it is to put it down. I work all day, come home and reach for
        the phone. For ten minutes of play, leave it in another room.
      </p>

      <h2>If your baby isn’t doing it yet</h2>
      <p>
        The months in this guide are the ages the studies tested, not deadlines. If a game is too hard tonight, go
        back to one from the stage before. Most of these games have an easier start built in: a peeking corner before
        a fully hidden toy, a short pause before a long one.
      </p>
      <p>
        You do not need to track anything or test your baby. Pick one game that fits tonight and play it while they
        enjoy it. If you have concerns about how your baby is developing, talk to your pediatrician.
      </p>
    </>
  ),
};
