import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "stop-checking-phone-evening",
  kind: "post",
  title: "How to stop checking your phone in the evening",
  description:
    "Why the evening check is a habit, and steps for tonight: fewer buzzes, the phone in another room, a set window and a game to reach for instead.",
  published: "2026-10-19",
  games: ["sock-puppet-chat", "what-can-you-hear", "give-and-take", "sleepy-lion", "rewind-the-day", "story-stones"],
  sources: [
    "oulasvirta-2012",
    "wood-2002",
    "andrews-2015",
    "stothart-2015",
    "fitz-2019",
    "dwyer-2018",
    "lally-2010",
    "aap-media-2016",
    "kushlev-dunn-2019",
  ],
  body: (
    <>
      <p>
        I work all day, I come home, and I reach for my phone. I tried blockers and I deleted my social apps, and the
        habit stayed. If your evenings go the same way, most of the steps below lean on a study. None of them
        asks for more willpower.
      </p>

      <h2>Why you keep checking</h2>
      <p>
        Researchers who studied smartphone users found a “checking habit”: brief, repeated looks at content that is
        quick to reach. Users felt it more as an annoyance than as an addiction <Cite id="oulasvirta-2012" />. If the
        evening check annoys you more than it pleases you, you are in good company.
      </p>
      <p>
        Habits run with your mind elsewhere. In diary studies, people doing what they did almost daily in the same
        setting tended to think about something else <Cite id="wood-2002" />. The couch after work, every day, is that
        kind of setting.
      </p>
      <p>
        You probably check more than you think. Young adults whose phones logged their use picked them up about 85
        times a day and used them about five hours, roughly twice what they guessed <Cite id="andrews-2015" />. Your
        iPhone keeps the same count.{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Screen Time’s report
        </a>{" "}
        shows your pickups for each day. Look at it once, without judging, so you know where you start.
      </p>

      <h2>Cut the buzz, do not kill it</h2>
      <p>
        Each buzz is an invitation. Notifications alone, with nobody touching the phone, disrupted an attention task
        about as much as taking a call or texting <Cite id="stothart-2015" />.
      </p>
      <p>
        Turning them all off is not the answer either. In a trial, people were randomly assigned to get notifications
        as usual, in batches three times a day, or never. The batched group felt more attentive, in a better mood,
        more in control of their phones and less stressed. The group with none felt more anxious{" "}
        <Cite id="fitz-2019" />.
      </p>
      <ul>
        <li>
          Turn on{" "}
          <a href="https://support.apple.com/guide/iphone/change-notification-settings-iph7c3d96bab/ios">
            Scheduled Summary
          </a>{" "}
          and move your busiest apps into it. Set one summary for after bedtime.
        </li>
        <li>
          Set up a{" "}
          <a href="https://support.apple.com/guide/iphone/set-up-a-focus-iphd6288a67f/ios">Focus</a> for the
          evening that lets calls from a few people through and holds the rest.
        </li>
      </ul>

      <h2>Move the phone</h2>
      <p>
        In one experiment, people sharing a restaurant meal with friends or family were told either to keep their
        phones on the table or to put them away. With phones on the table, they felt more distracted and enjoyed the
        meal less <Cite id="dwyer-2018" />.
      </p>
      <p>
        Give the phone a place to live in the evening that is not your pocket or the sofa arm. A charger in the
        hallway or the kitchen works. Put it there when you walk in, face down and on silent, and walk over to it if
        you need it.
      </p>

      <h2>Same time, same place</h2>
      <p>
        New habits form through repetition in a steady setting. Volunteers who repeated a new daily behavior in the
        same setting took from 18 to 254 days to reach their peak of automaticity, and missing one day did not
        materially affect it <Cite id="lally-2010" />. So pick one window and keep it fixed. Do not expect it to
        feel easy in the first week, and do not quit after a bad night.
      </p>
      <p>
        The American Academy of Pediatrics advises keeping mealtimes and parent–child playtimes screen free for
        parents as well as children, and suggests turning on Do Not Disturb during those times{" "}
        <Cite id="aap-media-2016" />. Dinner is a good first window. So is the first 15 minutes after you get home.
      </p>
      <p>
        If you want the phone to hold the line for you, Screen Time can{" "}
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          schedule when apps are available
        </a>
        . The guide to{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">Screen Time for family evenings</Link> walks through
        it.
      </p>

      <h2>Have a game ready</h2>
      <p>
        The reach will still come. Give it somewhere to go. In an experiment at a science museum, parents who were
        asked to use their phones a lot felt more distracted and less connected to their children than parents asked
        to use them a little <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>Pick a game before the evening starts, so you do not have to think when the moment comes:</p>
      <ul>
        <li>
          With a baby, <GameLink id="sock-puppet-chat" /> needs one spare sock and a squeaky voice.
        </li>
        <li>
          With a toddler, <GameLink id="what-can-you-hear" /> has you both lie still and name the sounds of the
          house. <GameLink id="give-and-take" /> is a toy handed back and forth.
        </li>
        <li>
          With a preschooler, <GameLink id="sleepy-lion" /> lets you snore on the sofa while your kid sneaks up.{" "}
          <GameLink id="rewind-the-day" /> walks the day backwards from now to breakfast, and{" "}
          <GameLink id="story-stones" /> builds a story three words at a time.
        </li>
      </ul>
      <p>
        More are in <Link href="/games/energy/low">low energy games</Link>, for the nights you can barely sit up.
      </p>
    </>
  ),
};
