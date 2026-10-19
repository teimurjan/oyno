import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "tantrums-and-self-control",
  kind: "post",
  title: "Is my toddler’s tantrum a self-control skill gap?",
  description:
    "Self-control is still growing in toddlers. Here is what studies asked kids to do at each age, and calm-moment games that let your toddler practice.",
  published: "2026-10-19",
  games: ["wait-wait-go", "spoon-bell-snack", "scarf-up-scarf-down", "open-shut-them", "finger-candle-blow", "whisper-feet"],
  sources: ["kochanska-2000", "carlson-2005", "garon-2014", "tominey-mcclelland-2011", "vallotton-ayoub-2011", "cdc-guide"],
  body: (
    <>
      <p>
        Your toddler wanted the blue cup. You gave the green one. Now they are on the floor. You have probably
        wondered whether this is a phase, a personality, or something you did.
      </p>
      <p>
        I cannot tell you why your toddler melts down. Nobody can from a blog post. What I can do is show you what
        researchers have found about self-control at this age, because it may change what you expect from a
        two-year-old. And I will be clear about what the research does not say.
      </p>

      <h2>Self-control is a skill that is still growing</h2>
      <p>
        Self-control here means stopping a first impulse: waiting, going slow, keeping your voice down when you want
        to shout. Researchers test it with small tasks, and the tasks change with age.
      </p>
      <p>
        In a long-running study, children of 22 to 45 months were asked to wait for a treat, walk a line slowly,
        whisper, stop and start on a signal, and take turns on a tower <Cite id="kochanska-2000" />. Another
        study gave children of 2 to 6 a set of age-graded tasks, from waiting for a snack or a gift to Simon says,
        whispering and a day and night game <Cite id="carlson-2005" />. A third built a set of tasks for
        children from 18 months to about five and a half that picked up clear differences from one age to the next{" "}
        <Cite id="garon-2014" />.
      </p>
      <p>
        Put plainly, researchers use different tasks for different ages, and the results differ from one age to the
        next. Your toddler is early in that range.
      </p>

      <h2>What the research does not say</h2>
      <p>
        None of the studies in this post looked at tantrums. None of them tested whether a game makes tantrums
        shorter or rarer. So this post will not promise that.
      </p>
      <p>
        What one trial did find is narrower. Preschoolers of 3 to 5 who played circle games such as Red Light, Purple
        Light and freeze games with swapped rules improved their self-regulation <Cite id="tominey-mcclelland-2011" />.
        That was preschoolers, playing in a group, measured on self-regulation. It is a reason to play these games. It
        is not a promise about the next meltdown.
      </p>

      <h2>Practice in calm moments, not in the storm</h2>
      <p>
        A game is practice, and it is easier to play when everyone is calm. The middle of a meltdown is not the time
        for a freeze game. A quiet evening, a good mood after dinner, ten minutes before the bath: those are the
        times.
      </p>
      <p>
        Every game below is for kids of 2 and up, and each one asks for a small amount of waiting or stopping, the
        same kinds of things from the studies above.
      </p>

      <h2>Games for a calm evening</h2>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: sit facing each other with the ball in your kid’s hands. Say “wait, wait”
          slowly, then “go”, and they roll it to you. Stretch the wait a little each time, then let them say the
          words to you.
        </li>
        <li>
          <GameLink id="spoon-bell-snack" />: put one favorite bite under an upturned cup on the high chair tray. Say
          “wait for the bell”, pause, then tap the spoon on the table twice. On the tap, they lift the cup and eat.
        </li>
        <li>
          <GameLink id="scarf-up-scarf-down" />: hold a scarf up high and your kid wiggles and dances. Drop it into your
          lap and they freeze until it goes up again.
        </li>
        <li>
          <GameLink id="whisper-feet" />: walk around the room together. When you whisper, their feet go on tiptoe,
          and when you talk in a big voice, they stomp.
        </li>
        <li>
          <GameLink id="open-shut-them" />: sing “open, shut them” with your hands and creep your fingers up to your
          chin, stopping right there on “but do not let them in”.
        </li>
        <li>
          <GameLink id="finger-candle-blow" />: hold up one finger as a candle. A quick puff makes it flicker, and only
          a long slow blow folds it down.
        </li>
      </ul>
      <p>
        Keep each one short, let your kid win most rounds, and stop while it is still fun. There are more in{" "}
        <Link href="/games/skill/self-control">self-control games</Link> and{" "}
        <Link href="/games/type/waiting">waiting games</Link>.
      </p>

      <h2>Words for big feelings</h2>
      <p>
        Language may matter too. In one study, toddlers’ vocabulary and talk from 14 to 36 months predicted growth in
        their self-regulation <Cite id="vallotton-ayoub-2011" />. That is a link, not proof that talking causes
        anything. Harvard’s activities guide for 18 to 36 months includes talk about feelings among its
        recommendations <Cite id="cdc-guide" />.
      </p>
      <p>
        In a calm moment, name what you saw: “You were so cross about the cup.”
      </p>

      <h2>When to talk to someone</h2>
      <p>
        If you worry about how often your toddler’s tantrums happen, how long they last, or anything else about
        their behavior or development, talk to your pediatrician. They know your kid, and that question is exactly
        what they are there for.
      </p>
    </>
  ),
};
