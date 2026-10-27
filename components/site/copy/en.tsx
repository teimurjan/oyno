import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("en", page);

const UPDATED = "9 October 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const en: SiteCopy = {
  nav: {
    pricing: "Pricing",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    switchLabel: "Switch language",
    start: "Get started",
    games: "Games",
    guides: "Guides",
    blog: "Blog",
  },

  home: {
    meta: {
      title: "Oyno: put the phone down, play for ten minutes",
      description:
        "Oyno pauses your apps during kid time and hands you one easy game a day. Every round grows your family's little planet.",
    },
    eyebrow: "For parents of 0 to 5 year olds",
    headline: (
      <>
        Your phone eats the evening. <span className="hl">Take ten minutes back.</span>
      </>
    ),
    sub: "Oyno pauses your apps during Kid hours and hands you one easy game, sized to the energy you have left. Every round grows your family's planet.",
    cta: "Get started",
    planet: {
      open: "Open your worlds",
      close: "Close worlds",
      previous: "Previous world",
      next: "Next world",
      yours: "Yours now",
      unlocksAt: "Unlocks at bloom {n}",
      hint: "Press the planet",
      worlds: {
        earth: "Earth",
        meadow: "Meadow",
        ember: "Ember",
        blossom: "Blossom",
        lagoon: "Lagoon",
        dune: "Dune",
        frost: "Frost",
        lavender: "Lavender",
        moss: "Moss",
        honey: "Honey",
        cloud: "Cloud",
        coral: "Coral",
        rose: "Rose",
        pebble: "Pebble",
        orchard: "Orchard",
        aurora: "Aurora",
        clay: "Clay",
        mint: "Mint",
        twilight: "Twilight",
        poppy: "Poppy",
        pearl: "Pearl",
        canyon: "Canyon",
        rain: "Rain",
        cedar: "Cedar",
        sunlit: "Sunlit",
        berry: "Berry",
        glacier: "Glacier",
        marigold: "Marigold",
        dream: "Dream",
        hearth: "Hearth",
        home: "Home",
      },
    },
    proof: {
      heading: "An evening with Oyno",
      sub: "No willpower required. The phone is paused before you have to decide.",
      previous: "Previous screen",
      next: "Next screen",
      steps: [
        {
          shot: "/screenshots/en-US/screens/kidhours.webp",
          title: "Kid hours start",
          body: "At the time you set, the apps you picked pause. Phone, Messages and Maps stay open.",
        },
        {
          shot: "/screenshots/en-US/screens/low.webp",
          title: "One easy thing",
          body: "Tell Oyno how much battery you have left. It hands you one game for ten minutes, with nothing to set up.",
        },
        {
          shot: "/screenshots/en-US/screens/growth.webp",
          title: "Play that builds",
          body: "Every game trains focus, memory or self-control. Growth shows what you two practiced, skill by skill.",
        },
        {
          shot: "/screenshots/en-US/screens/worlds.webp",
          title: "The planet grows",
          body: "When the timer ends, your kid taps the planet. It blooms, and every few rounds a new world opens.",
        },
        {
          shot: "/screenshots/en-US/screens/keepsake.webp",
          title: "A keepsake each evening",
          body: "A round leaves a keepsake by the planet. On Sunday, the planet writes you the week’s letter.",
        },
      ],
    },
    author: {
      heading: "Why I made Oyno",
      paragraphs: [
        "There would be no Oyno without my girl. There would be no Oyno if the phones had not gotten so good at holding us.",
        "I work all day. Then I come home and I reach for the phone. It is only a second. I hate myself for that second.",
        "My girl sees it. She thinks it is how things are. It is not.",
        "I tried the blockers. I deleted the socials. The habit stayed. I picked up the phone, saw the locked screen and put it down. To me it was nothing. To her it was me on my phone again.",
        "So I stopped fighting the habit. I gave it something better to do.",
        "Oyno means play in the language of the country where I was born. Now when I pick up the phone, it hands me a game to play with her. It is fun, and it helps her brain grow.",
        "It took months. It is not another blocker. It is not breathing and it is not meditation. It is ten minutes with your kid, on a game the research stands behind.",
      ],
      name: "Tim",
      role: "Maker of Oyno",
      photoAlt: "A parent and a little girl on the living room floor with a glowing clay planet",
    },
    plan: {
      eyebrow: "One plan, everything in it",
      pitch: "Kid hours, a new game every evening and every world your family unlocks. Cancel any time.",
      monthly: "Monthly",
      yearly: "Yearly",
      cta: "Get started",
      appNote: "Oyno is an iPhone app. Subscribe here or in the app, then sign in with the same account.",
    },
    closer: {
      heading: "Tonight, ten minutes.",
      body: "It takes a minute to set up, and the first game is ready before dinner.",
    },
  },

  pricing: {
    meta: {
      title: "Pricing | Oyno",
      description: "What Oyno costs, on the web and in the App Store.",
    },
    eyebrow: "Pricing",
    heading: "One plan. Two ways to pay.",
    intro: "Both unlock the same Oyno. Pick the door you are standing at.",
    web: {
      eyebrow: "On the web",
      perMonth: " / month",
      orYearly: (yearly) => `or ${yearly} / year`,
      cta: "Get started",
      note: "Billed by Dodo Payments, our merchant of record. Prices include the tax your country charges. Cancel any time.",
    },
    app: {
      eyebrow: "In the App Store",
      headline: "Free for 3 days",
      sub: "Then billed by Apple at the App Store's price.",
      note: "The trial is Apple's introductory offer and is managed in your Apple ID's subscriptions.",
    },
    body: (
      <>
        <h2>What is included</h2>
        <p>
          Kid hours (the apps you pick pause on your phone at the times you set), a new game every
          evening, the timer, and every world your family unlocks. There is no free tier and no
          upsell inside the subscription.
        </p>
        <h2>Refunds</h2>
        <p>
          Subscribed on the web and it isn&rsquo;t for you? Write to {SUPPORT} within 14 days of
          the payment and we will refund it in full. App Store purchases are refunded by Apple at{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Support | Oyno",
      description: "How to reach us, and answers to the questions that come up most.",
    },
    eyebrow: "Support",
    heading: "How can we help?",
    intro: (
      <>
        Write to{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . A real person answers, usually within a day.
      </>
    ),
    body: (
      <>
        <h2>An app I paused still opens</h2>
        <p>
          Check that Screen Time access is on for Oyno in <strong>Settings → Screen Time</strong>,
          and that the app is in your list under <strong>Kid hours → Paused</strong>. Apps added
          to the phone after you made the list are not in it until you add them.
        </p>
        <h2>I need my phone during Kid hours</h2>
        <p>
          Phone, Messages and Maps are never paused. For anything else, press and hold{" "}
          <strong>Not now</strong>: it opens your apps for 20 minutes, then Kid hours pick back up.
        </p>
        <h2>I subscribed on the web. How do I get in?</h2>
        <p>
          Install Oyno from the App Store and sign in with the same email, Apple, Google or
          Facebook account you used here. The subscription is already on it.
        </p>
        <h2>How do I cancel?</h2>
        <p>
          In the app: <strong>Profile → Manage subscription</strong>. A web subscription can also
          be cancelled from the link in your Dodo Payments receipt. An App Store subscription is
          cancelled in your Apple ID&rsquo;s subscriptions.
        </p>
        <h2>How do I delete my account?</h2>
        <p>
          In the app: <strong>Profile → Delete account</strong>. See{" "}
          <Link href={`${to("privacy")}#delete`}>what that removes</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Privacy | Oyno",
      description: "What Oyno stores, what it never sees, and how to delete all of it.",
    },
    eyebrow: "Privacy",
    heading: "Your evenings are yours",
    updatedLabel: "Last updated",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno is operated by Teimur Gasanov. It is an iPhone app that pauses the apps a parent
          picks during the hours they set and suggests short games to play with their child. This
          page describes what the app and this website store, why, and how to remove it.
        </p>

        <h2>What we store</h2>
        <h3>Your account</h3>
        <p>
          An email address, and the identifier Apple, Google or Facebook gives us if you sign in
          with one of them, with the name and email address that provider shares. If you use
          Sign in with Apple&rsquo;s hidden address, we only ever see the relay address.
        </p>
        <h3>Your rounds</h3>
        <p>
          Each round you play, how long it lasted and which game it was stay on your phone. So a
          new phone or a reinstall keeps your planet, we back up two totals with your account: how
          many rounds you played and how many minutes. None of it names a child: Oyno never asks
          for your kid&rsquo;s name, age or photo. The answers you give to the questions on this
          website (for example, an age range) are stored with your subscription record, so we can
          tell which questions lead to games people keep playing.
        </p>
        <h3>Your subscription</h3>
        <p>
          If you subscribed in the app: Apple&rsquo;s transaction identifier, the product, the
          expiry date and whether it is live. If you subscribed on the web: Dodo Payments is the
          merchant of record and holds your card details, which we never see. We store the
          customer and subscription identifiers Dodo gives us, the status and the end of the paid
          period.
        </p>
        <h3>Product analytics</h3>
        <p>
          We record which screens are opened and which actions are taken (a round started, a
          paywall seen) through Amplitude, to find where the app is confusing.
        </p>
        <h3>Advertising</h3>
        <p>
          This website loads the Meta pixel to measure which ads bring people who subscribe. When
          a subscription starts, we send Meta a hashed email address so the conversion can be
          matched. It is hashed on our server, never in your browser.
        </p>

        <h2>What never leaves your phone</h2>
        <p>
          Oyno uses Apple&rsquo;s Screen Time API to pause apps. Apple hands the app opaque tokens
          for the apps you pick, not their names, and those tokens stay on the device. We never
          see which apps you use, how long you use them, your browsing, your messages, your
          location, your contacts or your photos.
        </p>

        <h2>Who else sees it</h2>
        <ul>
          <li>
            <strong>Supabase</strong>: the database and the sign-in service.
          </li>
          <li>
            <strong>Vercel</strong>: hosting for this website and the API the app talks to.
          </li>
          <li>
            <strong>Dodo Payments</strong>: merchant of record for web subscriptions.
          </li>
          <li>
            <strong>Amplitude</strong>: product analytics.
          </li>
          <li>
            <strong>Resend</strong>: the sign-in codes we email you.
          </li>
          <li>
            <strong>Meta</strong>: ad measurement, as described above.
          </li>
        </ul>
        <p>We do not sell your data or share it with data brokers.</p>

        <h2 id="delete">Deleting everything</h2>
        <p>
          In the app: <strong>Profile → Delete account</strong>. It erases your account, the
          totals we back up and the rounds on your phone, immediately, and it cannot be undone.
        </p>
        <p>
          Signed in with Facebook? You can also remove Oyno under{" "}
          <strong>Settings &amp; privacy → Settings → Apps and websites</strong> on Facebook. That
          stops Facebook sharing anything further with us; the step above erases your data.
        </p>
        <p>
          Deleting your account does not cancel a subscription. Cancel it first (see{" "}
          <Link href={to("support")}>Support</Link>), then delete. Or write to {SUPPORT} and we
          will do both and confirm.
        </p>

        <h2>Your rights</h2>
        <p>
          You can access, correct, export and erase your data, and object to its processing.
          Write to {SUPPORT} for anything the app does not do directly.
        </p>

        <h2>Children</h2>
        <p>
          Oyno is for parents. Accounts are for adults, and the app collects nothing from or
          about the child it helps you play with.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Terms | Oyno",
      description: "The terms for using Oyno and for the subscription sold on this site.",
    },
    eyebrow: "Terms of service",
    heading: "Terms",
    updatedLabel: "Last updated",
    updated: UPDATED,
    body: (
      <>
        <p>
          These terms cover the Oyno app and this website, both operated by Teimur Gasanov. Using
          either means accepting them.
        </p>

        <h2>What Oyno is</h2>
        <p>
          A tool that pauses apps you choose on your own iPhone during hours you set, suggests
          short games to play with your child, and keeps a record of the rounds you play. The
          games are suggestions. You decide whether one is safe and suitable for your child and
          your space, and you supervise it.
        </p>

        <h2>Your account</h2>
        <p>
          You need an account, so a subscription bought on the web finds you in the app. Keep your
          sign-in to yourself. You can delete the account at any time from{" "}
          <strong>Profile → Delete account</strong>.
        </p>

        <h2>Subscriptions</h2>
        <h3>Bought on this website</h3>
        <p>
          Payment is taken by Dodo Payments, the merchant of record, whose terms apply to the
          transaction. Subscriptions renew automatically at the interval you chose until you
          cancel. Prices are shown in your currency before you pay and include any tax Dodo must
          collect. If Oyno isn&rsquo;t for you, ask {SUPPORT} for a full refund within 14 days of a
          payment.
        </p>
        <h3>Bought in the app</h3>
        <p>
          Apple takes the payment under its own terms, including Apple&rsquo;s standard licensed
          application end user agreement. The 3-day free trial is Apple&rsquo;s introductory
          offer; if you do not cancel before it ends, Apple charges for the plan you chose and
          renews it until you cancel in your Apple ID&rsquo;s subscriptions. Refunds are
          Apple&rsquo;s to grant.
        </p>
        <h3>When a subscription ends</h3>
        <p>
          Your planet and your past rounds stay. Kid hours and new games stop until you subscribe
          again.
        </p>

        <h2>Changes and availability</h2>
        <p>
          We improve Oyno over time and may change or remove features. If a change takes away
          something you paid for, write to {SUPPORT} and we will make it right. We work to keep
          the service running but cannot promise it will never be interrupted.
        </p>

        <h2>Liability</h2>
        <p>
          Oyno is provided as is. To the extent the law allows, our liability for any claim is
          limited to what you paid us in the 12 months before it. Nothing here limits rights you
          have under consumer law.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms: {SUPPORT}. Our <Link href={to("privacy")}>privacy policy</Link>{" "}
          explains how we handle your data.
        </p>
      </>
    ),
  },
};
