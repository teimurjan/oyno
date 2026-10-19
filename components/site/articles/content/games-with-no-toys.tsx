import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "games-with-no-toys",
  kind: "post",
  title: "Games you can play with no toys",
  description:
    "No toys in reach, or no will to dig them out? These games for kids 0 to 5 need only your hands, your voice and the room you are in.",
  published: "2026-10-19",
  games: ["copy-cat-faces", "wheres-your-nose", "nose-knees-toes", "rug-tightrope-walk", "simon-says", "zoo-list"],
  sources: ["aap-play", "brain-play", "lind-2017", "kochanska-2000", "carlson-2005"],
  body: (
    <>
      <p>
        The toys are in the other room, or packed away, or scattered under the sofa. You do not need them. Many of
        the oldest games for small kids use nothing but a face, a pair of hands and a voice.
      </p>
      <p>
        The American Academy of Pediatrics describes how play grows from social smiling into serve and return,
        peekaboo and pat-a-cake <Cite id="aap-play" />. Harvard’s Brain-Building Through Play handouts list Pat-a-Cake
        and Baby See Baby Do for babies, Follow the Leader for toddlers, and Simon Says and What Time Is It Mr Fox for
        older kids <Cite id="brain-play" />. None of those needs a toy.
      </p>

      <h2>Babies: your face is the toy</h2>
      <p>
        From about 6 months, try <GameLink id="copy-cat-faces" />. Copy your baby’s face or sound one beat after they
        make it: a tongue out, a squeak, a frown. Do it a few times, then make one new slow face of your own and hold
        it. Wait, with the face on, for them to try it back.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> works with your baby on your lap. Ask “Where’s your nose?” and wait a slow
        breath while you look at their face. Touch their nose gently and say “nose”, then do ears, toes and tummy.
      </p>
      <p>
        Both games follow your baby’s lead. In a trial, coaching parents of 6- to 21-month-olds to follow the child’s
        lead, respond and show delight improved the children’s cognitive flexibility at 4 years{" "}
        <Cite id="lind-2017" />.
      </p>

      <h2>Toddlers: your body is the board</h2>
      <p>
        <GameLink id="nose-knees-toes" /> is for a toddler of 2 and up who knows where their nose is. Ask “where is
        your nose?” and touch yours, and your kid touches theirs. Then knees, toes, ears. Once they are quick, say
        “touch your toes” while you touch your nose, and they have to follow your words, not your hand.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> needs only the edge of a rug or a line in the floorboards. It is a
        tightrope that leads to you on the sofa. Your kid walks it one slow step at a time, arms out, while you
        narrate every step in a hush. A foot off the rope means back to the start, and a kid who reaches you gets
        a sofa hug. You do not have to get up once.
      </p>
      <p>
        These are close to tasks from a long-running study, where children of 22 to 45 months were asked to walk a
        line slowly, whisper, and stop and start on a signal <Cite id="kochanska-2000" />.
      </p>

      <h2>Preschoolers: games made of words</h2>
      <p>
        By 3, a game can be nothing but rules and talk. <GameLink id="simon-says" /> is the classic. Call out moves,
        and your kid only does the ones that start with “Simon says”. Mix in plain orders and catch them if they
        move. After three catches, your kid is Simon. Simon says was one of the tasks in a study of children of 2 to
        6 <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" /> is What Time Is It Mr Wolf for a hallway. You face the wall at the far end. Your
        kid asks “what time is it, wolf?”, and you answer a number up to ten, so they take exactly that many steps
        toward you, counting out loud. When they are close, answer “dinner time” and chase them back.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> works when a sibling is asleep. Whisper a short message into your kid’s
        ear, like “the cat ate a sock”, and they whisper it back to you, word for word. Add one word each round.
      </p>

      <h2>When you are out of the house</h2>
      <p>
        No-toy games come into their own in a waiting room, a queue or a long drive. In{" "}
        <GameLink id="zoo-list">I Saw a Zebra</GameLink>, you say “I went to the zoo and saw a zebra”. Your kid repeats
        the whole list and adds one animal, then you do the same, until someone drops an animal. Then start a new
        trip to a new place. The beach, the farm and the shop all work, and your kid can pick where you go.
      </p>
      <p>
        There are more for the road in <Link href="/games/tag/in-the-car">car games</Link>.
      </p>

      <h2>How to start one tonight</h2>
      <ul>
        <li>Pick one game for your kid’s age and say the rule in one sentence.</li>
        <li>With a baby, keep it to faces and sounds. Copy what they do, then wait for them to answer.</li>
        <li>Play the first round slowly, so they can win it.</li>
        <li>Hand them the lead. Most of these games end with a swap, so your kid gets a turn in charge.</li>
      </ul>
      <p>
        Every game in <Link href="/games/tag/nothing-to-grab">games with no toys</Link> works with empty hands. You
        can also browse by age, starting with <Link href="/games/age/toddlers">toddler games</Link>.
      </p>
    </>
  ),
};
