import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "games-with-grandparents",
  kind: "post",
  title: "Easy games for grandparents to play with grandkids",
  description:
    "Low-energy games a grandparent can play from a chair or with a baby on their lap, with nothing to buy. Picks for babies, toddlers and preschoolers.",
  published: "2026-10-19",
  games: [
    "wheres-your-nose",
    "little-piggy-pause",
    "you-say-three",
    "face-copy-feelings",
    "grandma-footsteps",
    "story-stones",
    "i-spy-switch",
  ],
  sources: [
    "serve-return",
    "aap-play",
    "landry-2006",
    "ross-lollis-1987",
    "tominey-mcclelland-2011",
    "thibodeau-2016",
    "zelazo-2006",
  ],
  body: (
    <>
      <p>
        This page is for two readers. If you are the parent, it is something to send to your own mom or dad before
        the next visit. If you are the grandparent, it is a short list of games you can play sitting down, with
        nothing to buy and nothing to set up.
      </p>
      <p>
        Every game here takes 5 to 10 minutes. Most need only a lap, a chair and your voice.
      </p>

      <h2>For the parent: what to hand over</h2>
      <p>
        Pick two games that fit your kid’s age and send the links ahead. Each game is at most three short steps, so
        it reads fine on a phone. Two is enough for one visit.
      </p>
      <p>
        Tell them the one thing your kid loves right now, like a song, an animal or a joke. Every game below can
        take it in.
      </p>

      <h2>For the grandparent: three habits</h2>
      <p>
        Harvard’s Center on the Developing Child calls the back-and-forth of play serve and return. Notice what the
        child is focused on and share it. Answer it. Name what they see or feel. Then take turns, and wait{" "}
        <Cite id="serve-return" />. None of those steps needs quick legs or a toy. If the floor is hard on your knees or
        back, every game below works from a chair or the sofa.
      </p>
      <ul>
        <li>
          <strong>Wait longer than feels natural.</strong> Give a small child a few seconds to answer.
        </li>
        <li>
          <strong>Let them lead.</strong> If they change the game, play their version.
        </li>
        <li>
          <strong>Stop while it is still fun.</strong> The same game again next visit is a good thing.
        </li>
      </ul>

      <h2>With a baby on your lap</h2>
      <p>
        The American Academy of Pediatrics describes how a baby’s play grows from social smiles into serve and
        return, peekaboo and pat-a-cake <Cite id="aap-play" />. Both games below fit on a lap.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> works from 6 months. Ask “Where’s your nose?” and wait a slow breath while
        you look at the baby’s face. Touch their nose gently and say “nose”, then do the same for ears, toes and
        tummy. After a few rounds, ask “Where’s my nose?” and move their hand to yours. In a trial, coaching parents
        to respond this way to babies of 6 to 10 months improved the babies’ attention and their problem solving on
        their own <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> works from 2 months, with bare feet on your lap. Sing This Little Piggy,
        one toe for each pig, slowly. At the last toe, stop and hold the foot still for a long count of three. Then
        run your fingers up to the tummy on “wee wee wee” and start on the other foot.
      </p>

      <h2>With a toddler</h2>
      <p>
        <GameLink id="you-say-three" /> is a knee bounce with a gap in it. Bounce your grandchild on your knee and
        count “one, two”, then stop dead with your hands in the air. Wait, eyebrows up, until they say “three”, then
        give the biggest bounce of all. Babies of 9 to 18 months who played turn-taking games with an adult signaled
        when the adult missed a turn <Cite id="ross-lollis-1987" />. Here you miss it on purpose.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> needs a toddler on your knees, nose to nose. Make a big face, name it,
        like “surprised”, and hold it until they copy it. Try happy, sleepy, cross and silly. Then swap, so they pull
        a face, you copy it, and you both guess the feeling.
      </p>

      <h2>With a preschooler</h2>
      <p>
        <GameLink id="grandma-footsteps" /> has the right name. Sit in a chair with your back to your grandchild,
        who starts at the far wall. They creep toward you, and whenever you turn round, they must be frozen still.
        Anyone you catch moving goes back to the wall, and a tap on your shoulder wins. Preschoolers who played
        circle games, such as freeze with swapped rules, improved their self-regulation <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> needs only a tired voice. Start every story with “Once, a tiny dragon” and take
        turns adding exactly three words. Count the words on your fingers so nobody slips in a fourth. Children of 3
        to 5 who spent five weeks in fantastical pretend play improved their working memory and self-control{" "}
        <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" /> is I Spy with a twist. Say “I spy something red”, and your grandchild finds it
        from where you sit. After three colors, switch the clue to shapes, then to what things are for. Children of 3
        to 5 have been tested on the same kind of switch: sort by color, then by shape <Cite id="zelazo-2006" />.
      </p>
      <p>
        More games you can play from a chair are in <Link href="/games/tag/sitting">games to play sitting down</Link>,{" "}
        <Link href="/games/tag/on-your-lap">lap games</Link> and{" "}
        <Link href="/games/energy/low">low energy games</Link>.
      </p>
    </>
  ),
};
