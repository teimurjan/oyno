import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "low-energy-games-couch",
  kind: "post",
  title: "Low energy games to play lying on the couch",
  description:
    "Games you can play flat on your back at the end of a long day, sorted by age, from peekaboo for babies to memory games for preschoolers.",
  published: "2026-10-19",
  games: ["hands-peekaboo", "little-piggy-pause", "still-stone-mouse", "tummy-drum-soft-loud", "sofa-shopping", "day-says-night"],
  sources: ["cdc-guide", "rochat-1999", "kochanska-2000", "garon-2014", "gerstadt-1994", "serve-return"],
  body: (
    <>
      <p>
        You get home, you sit down, and the couch has you. Your kid still wants you. The good news is that a lot of
        games work with you lying flat. Your kid does the moving, and you do the talking, the counting or the
        snoring.
      </p>
      <p>
        I work all day, and when I get home the easiest thing is to lie down and reach for my phone. These are the
        games that work from that same spot, with the phone somewhere else.
      </p>

      <h2>What makes a good couch game</h2>
      <p>A game you can play lying down has three things going for it:</p>
      <ul>
        <li>Only a small part of you moves: one hand, one finger, or your voice.</li>
        <li>Your kid does the climbing, the fetching and the wiggling.</li>
        <li>There is a rule or a pause, so the game holds their attention without you jumping up.</li>
      </ul>
      <p>
        These are not lesser games. Harvard’s activities guide for babies lists lap games with an expected surprise,
        hiding games and copying games, and for toddlers it lists freeze dance and start and stop songs{" "}
        <Cite id="cdc-guide" />. Most of those work from a cushion.
      </p>

      <h2>Babies: your chest is the stage</h2>
      <p>
        With a baby, lying down is often the best position anyway. They are on your chest, their face is close to
        yours, and you have both hands free.
      </p>
      <p>
        Try <GameLink id="hands-peekaboo" />. Lie back with your baby on your chest and cover your face with both
        hands. Hold still for a slow count of three, then say “Boo!” and open your hands wide. Stretch the count a
        little longer each time. The timing is part of the game for your baby: when researchers disrupted the timing
        and structure of peekaboo for babies of 2 to 6 months, the babies reacted <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> uses the same pause. Sing “this little piggy” on your baby’s toes, one
        toe for each pig, slowly. At the last toe, stop and hold their foot still for a long count of three. Then run
        your fingers up to their tummy on “wee wee wee” and start on the other foot.
      </p>

      <h2>Toddlers: lie still and let them do the work</h2>
      <p>
        Toddlers want action. You can give them action while you stay flat, as long as the game has a rule.
      </p>
      <p>
        In <GameLink id="still-stone-mouse" />, for kids of 2 and up, your kid lies still as a stone while your hand
        becomes a mouse that creeps toward them. Any wriggle or giggle sends the mouse back to the start. When it
        reaches them, it curls up to sleep on their tummy, and then you swap.
      </p>
      <p>
        In <GameLink id="tummy-drum-soft-loud" />, your tummy is the drum. Call “mouse” for tiny soft pats and
        “elephant” for big slow ones, switching without warning. Call “stop” and their hands fly up.
      </p>
      <p>
        In <GameLink id="touch-the-bear" />, you are a bear asleep on the sofa, eyes shut. Every shout makes the bear
        snore louder, and only a hand on your paw wakes it with a happy growl.
      </p>
      <p>
        All three ask your toddler to stop, go soft or wait. Those are the same kinds of tasks that researchers gave
        children of 22 to 45 months: waiting for a treat, walking a line slowly, whispering, and stopping and starting
        on a signal <Cite id="kochanska-2000" />.
      </p>

      <h2>Preschoolers: give them a mission</h2>
      <p>
        A preschooler can run errands for you while you stay put. In <GameLink id="sofa-shopping" />, you order three
        things from around the house, like a spoon, a sock and a blue book. Your kid says the list back, then fetches
        all three in one trip. Check what came back and in what order, then make the next list one thing longer.
      </p>
      <p>
        That is a working memory game: holding a list in mind while you act on it. Tests of skills like this for
        children from 18 months to about five and a half pick up clear differences from one age to the next{" "}
        <Cite id="garon-2014" />, so start with a list your kid can manage and grow it from there.
      </p>
      <p>
        <GameLink id="human-mountain" /> needs even less of you. Lie on your back on the rug as a sleeping mountain.
        Your kid climbs while you narrate the expedition in a whisper, and at the summit the mountain rumbles.
      </p>
      <p>
        For a kid of three and a half and up, <GameLink id="day-says-night" /> works in a dim room. When you say
        “day”, your kid answers “night”, and the other way round. Start slow, then speed up until one of you slips.
        It is close to a task from a study where children from three and a half said “night” to a picture of the sun
        and “day” to a picture of the moon <Cite id="gerstadt-1994" />.
      </p>

      <h2>How to make it last ten minutes, not two</h2>
      <ul>
        <li>
          <strong>Put the phone out of reach first.</strong> If it is on your chest, the game will end the moment it
          buzzes.
        </li>
        <li>
          <strong>Swap roles.</strong> Most of these games end with “now you be the stone” or “now you call the
          animals”. The swap often buys you a second round.
        </li>
        <li>
          <strong>Wait for their turn.</strong> Harvard’s serve and return handout says to take turns and wait, and
          to name what your kid sees or feels <Cite id="serve-return" />. Lying still makes waiting easy.
        </li>
        <li>
          <strong>Stop while it is still fun.</strong> One good round beats a long one that ends in tears.
        </li>
      </ul>
      <p>
        There are more in <Link href="/games/energy/low">low energy games</Link>, and every game in{" "}
        <Link href="/games/tag/lying-down">games to play lying down</Link> works from the couch.
      </p>
    </>
  ),
};
