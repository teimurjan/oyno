import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "iphone-screen-time-family-evenings",
  kind: "guide",
  title: "How to set up iPhone Screen Time for family evenings",
  description:
    "Step by step: set up Screen Time on your own iPhone so the evening with your kid stays yours, plus what it cannot do and what to play instead.",
  published: "2026-10-19",
  games: ["hands-peekaboo", "still-stone-mouse", "touch-the-bear", "belly-boat", "sleepy-lion", "day-says-night"],
  sources: ["kushlev-dunn-2019", "andrews-2015", "aap-media-2016"],
  body: (
    <>
      <p>
        This guide is about your phone, not your kid’s. If you come home tired and the phone fills the hour before
        bedtime, Screen Time on your own iPhone can put a fence around that hour. It is free, it is already on your
        phone, and you can set it up tonight.
      </p>
      <p>
        It is worth doing. In one experiment, parents at a science museum who were asked to use their
        phones a lot felt more distracted and less connected to their children than parents asked to use them a
        little <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        The steps below follow Apple’s own support pages for iOS 27, the newest version Apple documents. If your
        iPhone runs iOS 26 or earlier, the menus have other names, and there is a section for you near the end.
      </p>

      <h2>What changed in iOS 27</h2>
      <p>
        Older guides talk about Downtime and App Limits. For iOS 27, Apple’s guide describes two tools instead.{" "}
        <strong>Screen Time Schedules</strong> set when during the day you can use your apps.{" "}
        <strong>Time Allowances</strong> set how long you can use them each day, by category, such as Entertainment,
        Games or Social Media. Apple’s own example is a schedule with time windows for work, dinner and the evening (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Apple Support: Set schedules and time allowances
        </a>
        ).
      </p>
      <p>
        Apple notes that these features need iOS 27 or later on all your Apple devices. If your iPad or Mac is still
        on an older version, update it first, or the steps below may not match what you see.
      </p>

      <h2>Step 1: Turn on Screen Time and look at your week</h2>
      <p>
        Go to the Settings app and tap Screen Time. Tap Manage Screen Time, then tap Turn On App &amp; Website
        Activity (
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Apple Support: Set up Screen Time for yourself
        </a>
        ).
      </p>
      <p>
        If you have used it for a while, look before you change anything. Tap Daily Average, then Week. Scroll down
        to Pickups to see how often you picked up the phone. Note the two or three apps you use most. Those are the
        apps you are about to fence.
      </p>
      <p>
        The real number can be higher than your guess. In one study, young adults whose phones logged their use
        picked them up about 85 times a day and used them about five hours, roughly twice what they estimated{" "}
        <Cite id="andrews-2015" />.
      </p>
      <p>
        If you also use an iPad or a Mac, Apple lets you share these settings across them. Tap Manage Screen Time,
        then turn on Share Across Devices. With it on, the schedule you set below applies on all of them, so the
        evening does not move to the iPad.
      </p>

      <h2>Step 2: Set allowances for the apps that pull hardest</h2>
      <p>
        Time Allowances work by category. You can use the apps in a category until they reach that category’s
        allowance or your daily total, whichever comes first.
      </p>
      <ol>
        <li>Go to Settings, tap Screen Time, then tap Time Allowances.</li>
        <li>
          Tap Manage Categories, tap the add button, and pick a category, such as Social Media or Entertainment.
        </li>
        <li>
          Back under Time Allowances, tap the category and drag the slider to set how long you get each day.
        </li>
        <li>
          To check which apps sit in a category, tap Manage Categories, then the category. You also see your average
          daily use there, and you can tap an app to see its own.
        </li>
      </ol>
      <p>
        Start with the apps from Step 1. Be honest about which ones eat the evening.
      </p>
      <p>
        One detail matters if you scroll in a browser. Apple says that if an app declares an associated website, the
        Time Allowance applies to both. So limiting an app can also limit its website.
      </p>

      <h2>Step 3: Give the evening its own time window</h2>
      <p>
        This is the part that protects the hour with your kid. You make a schedule, then a time window inside it
        that covers your family evening.
      </p>
      <ol>
        <li>Go to Settings, tap Screen Time, tap Screen Time Schedule, then turn on Schedule.</li>
        <li>Tap Add Schedule, tap the days you want, such as Monday to Friday, and confirm.</li>
        <li>Tap the time window. Tap its name and call it something plain, like “Evening”.</li>
        <li>Tap the start and stop times and set them to the hours you are home with your kid.</li>
        <li>
          Under the window, tap the Time Allowance categories you want available then. Leave out the ones you set up
          in Step 2 for the apps that pull hardest.
        </li>
      </ol>
      <p>
        Each window shows icons for the categories it allows, so you can see at a glance which kinds of apps are
        open in the evening. If weekends look different, add a second schedule for Saturday and Sunday with its own
        hours.
      </p>
      <p>
        Back in Time Allowances, Apple also has a switch called Match Screen Time Schedule. Turn it on if you want
        your allowances to apply only during certain times in your schedule.
      </p>
      <p>
        Pick hours you can keep, such as dinner to bedtime. That matches what the American Academy of
        Pediatrics recommends to families: keep bedrooms, mealtimes and parent and child playtimes screen free, for
        children and for parents <Cite id="aap-media-2016" />.
      </p>

      <h2>Step 4: Choose what stays allowed</h2>
      <p>
        Some apps should never be fenced off. Your partner needs to reach you. The babysitter needs to reach you. You
        may want Maps, the camera or a health app.
      </p>
      <ol>
        <li>Go to Settings, tap Screen Time, then tap Always Allowed.</li>
        <li>Tap Add People to add the contacts you can always reach and be reached by.</li>
        <li>Tap Add Apps to add the apps that stay open whatever the schedule says.</li>
      </ol>
      <p>
        Apple says that apps and contacts on this list stay available regardless of any schedule or allowance you
        set. Its own examples are family members and the Health app, for emergencies. Keep the list short. Every app
        on it is a door that stays open.
      </p>

      <h2>Step 5: Lock it with a passcode</h2>
      <p>
        A Screen Time passcode means you must type a code before you can change the settings above (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Apple Support: Create, change, or remove a Screen Time passcode
        </a>
        ).
      </p>
      <ol>
        <li>Go to Settings, tap Screen Time, tap Manage Screen Time, then tap Lock Screen Time Settings.</li>
        <li>Type a four-digit passcode, then type it again to confirm it.</li>
      </ol>
      <p>
        Now the honest part. You set this passcode yourself, so you know it. At 8 pm, tired, with the couch and the
        phone right there, a code you know is a speed bump, not a wall.
      </p>
      <p>
        That is why some parents ask a partner to type in the code, so they do not know it. It helps. But Apple also
        offers Screen Time Passcode Recovery, which lets you reset the code with your Apple Account if you forget it.
        If you turn it on, a partner’s code becomes one more step for you, not a lock. Decide which you want.
      </p>

      <h2>On iOS 26 or earlier: Downtime and App Limits</h2>
      <p>
        If your iPhone has not moved to iOS 27, the same ideas have older names (
        <a href="https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Apple Support: Set schedules with Screen Time, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Downtime</strong> is the evening window. In Settings, tap Screen Time, then Downtime, then
          Scheduled. Pick Every Day or Customize Days, and set the start and end times. Apple sends a reminder five
          minutes before it starts.
        </li>
        <li>
          <strong>App Limits</strong> are the allowances. Tap App Limits, then Add Limit, pick categories or single
          apps, tap Next and set the time.
        </li>
        <li>
          <strong>Always Allowed</strong> works the same way, for contacts and apps.
        </li>
      </ul>
      <p>
        One catch: Apple says that by default these limits can be ignored once you reach them. If you have a Screen
        Time passcode, you can turn on Block at Downtime, and then the apps cannot be opened during Downtime. With it
        off, you only see a reminder and can carry on.
      </p>

      <h2>What Screen Time does not do</h2>
      <p>
        Screen Time is good at one job. It says no. It does not say what to do instead.
      </p>
      <p>
        I know this one from my own evenings. I work all day, come home, and reach for the phone. I tried blockers. I
        deleted my social apps. The habit stayed. A blocked app leaves a gap in the evening, and Screen Time does
        not fill it.
      </p>
      <p>
        The AAP’s policy statement on young children and media makes the same point from the other side. It notes
        that heavy parent use of mobile devices is linked with fewer verbal and nonverbal exchanges between parents
        and children. It asks pediatricians to help families with a Family Media Use Plan that has guidelines for
        each child and each parent, and with ideas for play to do instead of screens <Cite id="aap-media-2016" />. A
        rule about the phone is half a plan. The other half is what you do with the time.
      </p>
      <p>
        So have the next ten minutes ready before the window starts. They do not need to be clever. They need to
        work when you have nothing left. Oyno uses Screen Time to pause the apps you pick during Kid hours and
        hands you a short game to play instead.
      </p>

      <h2>Your first evening</h2>
      <p>
        Here is a plan for tonight, sized for a parent who would rather lie down.
      </p>
      <ol>
        <li>Set the window from Step 3 to start ten minutes from now.</li>
        <li>Put the phone on a shelf out of reach, face down, with the sound on in case someone calls.</li>
        <li>Pick one game from the list below and play it until your kid stops smiling, not longer.</li>
      </ol>
      <p>
        For a baby, try <GameLink id="hands-peekaboo" />. You lie back with your baby on your chest, cover your face
        with both hands, and wait a slow count of three before “Boo!”.
      </p>
      <p>
        For a toddler of 2 and up, try <GameLink id="still-stone-mouse">Still Stone</GameLink>. Your kid lies still
        as a stone while your hand creeps toward them as a mouse, and any wriggle sends the mouse back to the start.
        Or <GameLink id="touch-the-bear" />: you are a bear asleep on the sofa, every shout makes you snore louder,
        and only a hand on your paw wakes you up.
      </p>
      <p>
        For a preschooler, try <GameLink id="belly-boat" />. You both lie on your backs with a small toy on each
        belly and breathe slowly so the boats rise and sink. <GameLink id="sleepy-lion" /> and{" "}
        <GameLink id="day-says-night" /> also work from the sofa.
      </p>
      <p>
        There are more in <Link href="/games/energy/low">low energy games for tired parents</Link>, and you can
        filter by age in <Link href="/games/age/toddlers">games for toddlers</Link> or{" "}
        <Link href="/games/age/preschoolers">games for preschoolers</Link>. If you are still choosing between Screen
        Time and an app on top of it, read{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Screen Time, app blockers and Oyno</Link>.
      </p>
      <p>
        Give the setup a week before you change it. If the window starts too early, move it. If an app keeps sneaking
        back through Always Allowed, take it off the list.
      </p>
    </>
  ),
};
