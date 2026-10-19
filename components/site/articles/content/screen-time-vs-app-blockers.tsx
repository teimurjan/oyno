import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "screen-time-vs-app-blockers",
  kind: "post",
  title: "Screen Time, app blockers and Oyno: what each does for parents",
  description:
    "A fair comparison of Apple’s Screen Time, app blocker apps and Oyno for parents who want their evening back, with what each one does not do.",
  published: "2026-10-19",
  games: ["babble-back", "pocket-kiss-hand", "countdown-stop", "sleepy-lion"],
  sources: ["aap-media-2016", "kushlev-dunn-2019"],
  body: (
    <>
      <p>
        You want the phone out of the hour you spend with your kid. There are three kinds of tools for that on an
        iPhone: the Screen Time settings Apple builds in, apps made to block other apps, and Oyno, which I make. This
        is an honest look at each, including where Oyno is the wrong pick.
      </p>
      <p>
        The goal is worth a tool. The American Academy of Pediatrics recommends keeping mealtimes and parent and
        child playtimes screen free, for parents as well as children, and says parents can set a “do not disturb”
        option on their phones during these times <Cite id="aap-media-2016" />.
      </p>

      <h2>Apple’s Screen Time</h2>
      <p>
        Screen Time is already on your iPhone and costs nothing. On iOS 27, you set a{" "}
        <strong>Screen Time Schedule</strong> with time windows, such as an evening window, and{" "}
        <strong>Time Allowances</strong> that cap how long you use categories of apps, such as Social Media or Games.
        An <strong>Always Allowed</strong> list keeps chosen people and apps open whatever the schedule says (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Apple Support: Set schedules and time allowances
        </a>
        ). A four-digit Screen Time passcode stops you from changing those settings without it (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Apple Support: Screen Time passcode
        </a>
        ).
      </p>
      <p>
        What it does well: it is free, it is built in, and it can cover your iPad and Mac too when you turn on Share
        Across Devices. Apple also says a Time Allowance covers an app’s website when the app declares one.
      </p>
      <p>
        What it does not do: it says no, and that is all. When the window starts, nothing tells you what to do with
        the time. And if you set the passcode yourself, you know it. Our{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">step-by-step Screen Time guide</Link> covers the
        setup and the passcode problem.
      </p>

      <h2>App blocker and focus apps</h2>
      <p>
        The App Store has many apps made to block or limit other apps. They differ a lot from one to the next, so
        this section gives you questions to ask, not verdicts. Before you pay for one, check:
      </p>
      <ul>
        <li>Is it for your own phone, or is it a parental control for a child’s device?</li>
        <li>Can you set the days and hours, or only start a session by hand?</li>
        <li>What happens when you open a blocked app, and how easy is it to get past?</li>
        <li>Does it block websites, apps, or both?</li>
        <li>Does it give you anything to do in the time it frees?</li>
      </ul>
      <p>
        I tried blockers myself, and I deleted my social apps. The habit stayed. That is not a verdict on any app. It
        is the reason the last question on that list matters to me.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno is an iOS app for parents of kids from 0 to 5. It uses Apple’s Screen Time on your own iPhone. You set
        Kid hours: the days, the start and end times, and as many schedules as you need. During Kid hours, the apps
        you picked are paused. You choose which apps are always allowed and which are never allowed, and there is a
        20-minute “Not now” break.
      </p>
      <p>
        A paused app shows Oyno’s screen. Its “Open Oyno” button leads to a game. There are 500 of them, in three age
        bands and for low, okay or full energy, each 5 to 15 minutes long, and each backed by a study and a guide. A
        schedule can unlock your apps for a while after you and your kid play a round. Every round grows your family’s
        little planet. Oyno asks for no child name or photo.
      </p>
      <p>
        The idea is that the block and the game come together. In one experiment, parents at a science museum who
        were asked to use their phones a lot felt more distracted and less connected to their children than parents
        asked to use them a little <Cite id="kushlev-dunn-2019" />. Oyno’s answer is to put something in the space
        the phone leaves.
      </p>

      <h2>What Oyno does not do</h2>
      <ul>
        <li>
          <strong>It is iOS only.</strong> There is no Android version.
        </li>
        <li>
          <strong>It is for your phone, not your kid’s.</strong> It is not a parental control for a child’s device.
          For that, Apple has its own guide,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Apple Devices for Kids and Families
          </a>
          .
        </li>
        <li>
          <strong>It does not block websites.</strong> It pauses apps. If a website is the problem, use Screen Time
          itself.
        </li>
        <li>
          <strong>It is not a lock.</strong> The “Not now” break opens your apps for 20 minutes. It is a nudge you
          set up for yourself.
        </li>
        <li>
          <strong>It is not free.</strong> It is a monthly or yearly subscription, with a 3-day free trial on the
          App Store. Screen Time costs nothing.
        </li>
      </ul>

      <h2>How to choose</h2>
      <p>
        Start with Screen Time. It is free, and a week of it will tell you a lot. If the evening window holds and you
        are happy, stop there.
      </p>
      <p>
        Look at a blocker app if your problem is mostly the workday, websites or an Android phone, since Oyno does
        not cover those. Ask the questions above, and check that the app you pick covers yours.
      </p>
      <p>
        Look at Oyno if your kid is under 6, the hour you want back is the one with them, and blocking alone did not
        stick because the gap it left got filled by something else on the phone.
      </p>
      <p>
        Whichever you pick, have a game ready for the first night. With a baby, try{" "}
        <GameLink id="babble-back" />: wait for any sound and answer it as if it were a real sentence. With a
        toddler, try <GameLink id="pocket-kiss-hand" />, where a kiss hides in one of their fists. With a
        preschooler, try <GameLink id="countdown-stop" /> or <GameLink id="sleepy-lion" />, which you can play lying
        down. More are in <Link href="/games/energy/low">low energy games for tired parents</Link>.
      </p>
    </>
  ),
};
