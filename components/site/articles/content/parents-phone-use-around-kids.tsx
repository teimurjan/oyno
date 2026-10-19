import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "parents-phone-use-around-kids",
  kind: "post",
  title: "How much do parents use their phones around kids?",
  description:
    "What researchers counted when they watched parents with young kids in restaurants, playgrounds and labs, and what those numbers do not tell you.",
  published: "2026-10-19",
  games: ["hands-peekaboo", "give-and-take", "animal-sound-swap", "pretend-phone", "babble-back"],
  sources: [
    "radesky-2014",
    "vanden-abeele-2020",
    "radesky-2015",
    "andrews-2015",
    "mcdaniel-coyne-2016",
    "mcdaniel-radesky-2018",
    "kushlev-dunn-2019",
    "aap-media-2016",
    "mcdaniel-radesky-2018b",
  ],
  body: (
    <>
      <p>
        If you have looked up from your phone and found your kid watching you, you have probably wondered how you
        compare. This post sticks to what researchers saw and counted when they watched parents with children. Where
        a study gives no number, it says so.
      </p>

      <h2>At the table</h2>
      <p>
        One study sent observers into fast food restaurants. They watched 55 caregivers eating with
        young children. Most of them used a phone during the meal. The caregivers who were most absorbed in it often
        answered their child late or harshly <Cite id="radesky-2014" />.
      </p>
      <p>
        That study gives “most”, not an hourly figure. It tells you how common the phone at the table was, not how
        long it stayed out.
      </p>

      <h2>On the playground</h2>
      <p>
        A later study watched 53 parents of children aged 0 to 5 in waiting rooms and on playgrounds. 23 of them used
        a phone while they were watched <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        The same study counted what happened next. While a parent was on the phone, the odds that they answered their
        child’s bid for attention were five times lower. A quick glance at the phone made no difference. Deep
        absorption in other tasks had about the same cost{" "}
        <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        A bid is anything a child does to get your attention: a point, a call, a tug on your sleeve. In plain words, a
        parent who was deep in the phone was much less likely to answer one.
      </p>

      <h2>In the lab</h2>
      <p>
        In one lab study, 225 mothers and their 6-year-olds were filmed during a task. Nobody asked the
        mothers to use a mobile device, and 23% of them did anyway. Those who used one had fewer interactions with their
        child, nonverbal ones most of all <Cite id="radesky-2015" />.
      </p>
      <p>
        These children were older than Oyno’s range of 0 to 5. The study still puts a percentage on how often a
        parent picks up a device in front of their kid when nobody asks them to.
      </p>

      <h2>Over a whole day</h2>
      <p>
        None of the studies above follows a parent through a whole day with a phone log. For a whole day, the
        numbers here come from adults in general. Young adults whose phones logged their use picked
        them up about 85 times a day and used them about five hours, roughly twice what they guessed <Cite id="andrews-2015" />. Those were not parents, and they were
        not counted around children.
      </p>
      <p>
        Surveys ask a different question: does the phone get in the way? Most women in one study said devices often
        interrupted time with their partner <Cite id="mcdaniel-coyne-2016" />. Parents of young children who reported
        more phone interruptions during family time also reported more behavior problems in their child{" "}
        <Cite id="mcdaniel-radesky-2018" />.
      </p>
      <p>
        If you want your own number, your iPhone counts it.{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Screen Time’s report
        </a>{" "}
        shows how many times you picked up your phone each day. Look at one evening before you decide anything.
      </p>

      <h2>What it costs you</h2>
      <p>
        Most of these studies look at the child. One experiment looked at the parent. At a science museum, parents who
        were asked to use their phones a lot felt more distracted and less connected to their children than parents
        asked to use them a little <Cite id="kushlev-dunn-2019" />. The time with your kid feels different when the
        phone is in it.
      </p>
      <p>
        The American Academy of Pediatrics sums up the research this way: heavy parent use of mobile devices is
        associated with fewer verbal and nonverbal interactions between parents and children{" "}
        <Cite id="aap-media-2016" />.
      </p>

      <h2>What the numbers do not tell you</h2>
      <p>
        These are observational studies. They show what parents did and what went with it. They cannot show that the
        phone caused a child’s behavior. In one study that followed families for six months, the link ran both ways:
        a child’s harder behavior predicted more technology interference through parenting stress, and that
        interference often predicted more acting out later <Cite id="mcdaniel-radesky-2018b" />.
      </p>
      <p>
        They also do not say that every look is a problem. The playground study found no cost to a quick glance{" "}
        <Cite id="vanden-abeele-2020" />. The long, absorbed stretch is what the numbers point at.
      </p>
      <p>
        The American Academy of Pediatrics advises keeping mealtimes and parent–child playtimes screen free for
        parents as well as children, and suggests turning on Do Not Disturb during those times{" "}
        <Cite id="aap-media-2016" />. A short game fills that time without much effort. With a baby, try <GameLink id="hands-peekaboo" /> or{" "}
        <GameLink id="babble-back" />. With a toddler, try <GameLink id="give-and-take" /> or{" "}
        <GameLink id="animal-sound-swap" />. With a preschooler, try <GameLink id="pretend-phone" />, where the only
        phone is your hand. More are in{" "}
        <Link href="/games/age/toddlers">games for toddlers</Link> and{" "}
        <Link href="/games/age/babies">games for babies</Link>, and the guide{" "}
        <Link href="/guides/phone-down-with-your-kid">Phone down with your kid</Link> has steps for the evening.
      </p>
    </>
  ),
};
