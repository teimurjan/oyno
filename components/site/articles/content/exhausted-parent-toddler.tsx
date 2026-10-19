import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "exhausted-parent-toddler",
  kind: "post",
  title: "What to do with a toddler when you are exhausted",
  description:
    "Too tired to play, but your toddler is not? Here are honest ways through the evening, and games you can play lying down with almost no energy.",
  published: "2026-10-19",
  games: ["piggy-pause-toes", "what-can-you-hear", "pocket-kiss-hand", "shy-tortoise-feet", "finger-candle-blow", "sleepy-mirror-slow"],
  sources: ["serve-return", "ross-lollis-1987", "kochanska-2000", "cdc-guide"],
  body: (
    <>
      <p>
        Some evenings there is nothing left. You have worked all day, the house is loud, and your toddler wants you
        to chase, build and sing. You want to lie on the floor and not move.
      </p>
      <p>
        That is a normal place to be. This post will not tell you to try harder. It will give you a few ways to be
        with your toddler that cost you very little.
      </p>

      <h2>Lower the bar on purpose</h2>
      <p>
        You do not need a craft, a plan or a clean room. What a toddler gets from you is attention, and attention can
        come from a parent who is lying down.
      </p>
      <p>
        Harvard’s serve and return handout puts it in a few small steps: notice what your kid is focused on and share
        it, return their serve with support, name what they see or feel, take turns and wait{" "}
        <Cite id="serve-return" />. Every one of those can be done with your eyes half shut.
      </p>
      <p>
        I know the pull of the phone on these nights. I tried blockers and deleted my social apps, and the habit
        stayed. So this post does not ask you for willpower. It gives you a game to have ready.
      </p>

      <h2>For a toddler under two</h2>
      <p>
        Try a game with a pause in it. In <GameLink id="piggy-pause-toes" />, your kid sits on your
        lap with bare feet. Say “this little piggy” on each toe, slower with every piggy. Stop dead before the last
        one and hold your finger in the air until your kid looks up at you. Then finish with the wee wee wee wiggle.
      </p>
      <p>
        Kids this age notice whose turn it is. Babies of 9 to 18 months in turn-taking games like give and take and
        peekaboo signaled when the adult missed a turn <Cite id="ross-lollis-1987" />. Your pause is a turn they can
        take.
      </p>
      <p>
        <GameLink id="what-can-you-hear" /> asks even less. Lie still together, close your eyes, and whisper “what can
        you hear?” Whatever your kid points at or says, name it with them: the fridge, a car outside. Then take turns
        finding one new sound each.
      </p>

      <h2>For two and up: lie down and give one rule</h2>
      <p>
        These four are for kids of 2 and up, and each one has a single rule. All of them let you stay flat.
      </p>
      <ul>
        <li>
          <GameLink id="pocket-kiss-hand" />: kiss one of your kid’s palms and help them close both hands into fists to
          keep the kiss in. Sing one line of a song, then ask “which hand has the kiss?”
        </li>
        <li>
          <GameLink id="shy-tortoise-feet" />: your feet under the blanket are two shy tortoises that only poke out when
          your kid shuts their eyes. The moment they peek, both dive back under.
        </li>
        <li>
          <GameLink id="finger-candle-blow" />: hold up one finger as a candle. A quick puff makes it flicker and stand
          up again, and only a long slow blow folds it down.
        </li>
        <li>
          <GameLink id="touch-the-bear" />: you are a bear asleep on the sofa. Every shout makes you snore louder, and
          only a hand on your paw wakes you.
        </li>
      </ul>
      <p>
        Researchers studying self-control asked children
        of 22 to 45 months to wait for a treat, walk a line slowly and whisper <Cite id="kochanska-2000" />. These
        games ask for the same kinds of things, in small doses, with you as the reward.
      </p>

      <h2>When bedtime is close</h2>
      <p>
        If the evening is nearly over, pick a game that winds down. In <GameLink id="sleepy-mirror-slow" />, you lie
        side by side and do everything in slow motion, so a yawn takes a whole breath to finish. Your kid copies each
        slow move, a stretch, a roll, a rub of the eyes. Let them lead a slow move or two, then end with the slowest
        eyes closed of all.
      </p>
      <p>
        Talk counts too. Harvard’s guide for 18 to 36 months lists conversation, storytelling with “what will you do
        next”, and talk about feelings <Cite id="cdc-guide" />. Lying in the dark and asking what was the best part
        of the day is a fine way to end.
      </p>

      <h2>Be kind to yourself</h2>
      <ul>
        <li>Five minutes of a game, then ten minutes of quiet next to each other, is a good evening.</li>
        <li>If a game falls flat, stop. Try a different one tomorrow.</li>
        <li>Swap jobs with another adult if you can, even for twenty minutes.</li>
      </ul>
      <p>
        If the exhaustion does not lift with rest, or you feel low most days,
        talk to your doctor. That is a health matter, and it deserves care.
      </p>
      <p>
        For more, see <Link href="/games/energy/low">low energy games</Link> or{" "}
        <Link href="/games/tag/lying-down">games to play lying down</Link>. The{" "}
        <Link href="/games/age/toddlers">toddler games</Link> page sorts them by the energy you have left.
      </p>
    </>
  ),
};
