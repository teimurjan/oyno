import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("en", page);

const UPDATED = "31 August 2026";

export const en: SiteCopy = {
  nav: {
    pricing: "Pricing",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    refund: "Refunds",
    switchLabel: "Switch language",
    signIn: "Sign In",
    open: "Open App",
  },
  openApp: "Open the web app",

  home: {
    meta: {
      title: "Oyno: the pocket ERP for 3D printing businesses",
      description:
        "Know the exact landed cost, waste and net profit of every 3D print, on your iPhone or in your browser. Filament tracked to the gram, quotes in ten seconds, and a month that already has fees and failures taken out.",
    },
    eyebrow: "Pocket ERP · 3D printing",
    headline: (
      <>
        Know what a print costs <span className="hl">before you quote it</span>
      </>
    ),
    sub: "Filament, electricity, machine wear, purge waste and the marketplace’s cut. One screen, at the machine, in about ten seconds. Then log the print in three taps and watch the spool come down.",
    webCta: "Or buy on the web →",

    shotsHeading: "Four screens, and a stepper",
    shots: [
      { src: "/screenshots/en-US/02-quote.webp", alt: "Quote a job in ten seconds, with an itemised landed cost" },
      { src: "/screenshots/en-US/03-filament.webp", alt: "Every spool, to the gram" },
      { src: "/screenshots/en-US/04-spool.webp", alt: "Add a roll by its NFC tag, a QR code or the printed label, with no typing" },
      { src: "/screenshots/en-US/05-share.webp", alt: "Send the customer the quote as a PDF" },
      { src: "/screenshots/en-US/06-month.webp", alt: "What the month actually earned" },
      { src: "/screenshots/en-US/07-orders.webp", alt: "Fees, taken out first" },
      { src: "/screenshots/en-US/08-printer.webp", alt: "What an hour on the machine really costs" },
    ],

    receipt: {
      eyebrow: "One 24-hour ASA print",
      heading: "One 24-hour print, priced two ways",
      sub: "The rule of thumb charges for the plastic. Here is everything it does not charge for.",
      note: ({ grams, printer, power }) =>
        `Every figure above is computed by the same module the app uses, from a ${grams} ASA print on a ${printer} machine at ${power}/kWh. Change any of those in the app and the arithmetic follows.`,
      labels: {
        filament: "Filament in the model",
        purge: "Purge, prime and brim",
        electricity: "Electricity",
        wear: "Machine wear",
        hands: "Your hands",
        reserve: "Reprint reserve",
        packaging: "Packaging",
        total: "What it costs you",
        ruleOfThumb: "Priced at 3\u00d7 filament",
        ours: "Priced by Oyno",
      },
      units: { g: "g", h: "h", min: "min" },
      kept: (amount) => `${amount} kept`,
      afterFee: (fee) => `after Etsy\u2019s ${fee}`,
    },

    painsHeading: "Three ways a print farm loses money without noticing",
    pains: [
      {
        kicker: "The 3× rule",
        title: "It prices the plastic and nothing else",
        body: "A 24-hour ASA run draws roughly three times the power of the same print in PLA, and takes a day of machine life with it. Triple the filament cost and you have charged for none of that.",
      },
      {
        kicker: "The purge bin",
        title: "You paid for what went in the waste box",
        body: "A multi-colour plate can purge more filament than it puts into the model, as high as 50 to 113% of print weight on a four-colour change. That is filament you bought and threw away, unbilled.",
      },
      {
        kicker: "The spreadsheet",
        title: "It doesn’t open at the machine",
        body: "Fifty tabs that started small and mutated. It can’t warn you a spool is 40 grams short of finishing an overnight print, because it only knows what you remembered to type into it yesterday.",
      },
    ],

    howHeading: "Set it up once, then it is arithmetic",
    howSub: "No keyboard at the machine, no Docker container, no spreadsheet that opens badly on a phone.",
    steps: [
      {
        n: "01",
        title: "Tell it what you print on",
        body: "One printer, one spool, your grid price. Two minutes, and every quote after that is built on real numbers instead of a guess.",
      },
      {
        n: "02",
        title: "Quote at the machine",
        body: "Pick a material, set grams and hours with two steppers. Filament, power, wear, purge, reprint reserve and the marketplace’s cut, itemised, with the price and what you net beneath it.",
      },
      {
        n: "03",
        title: "Log the print before you walk away",
        body: "Three taps. The spool’s weight comes down, the job’s margin is booked, and the month updates. Works with no signal and syncs when you’re back in range.",
      },
    ],

    plan: {
      eyebrow: "Oyno Pro",
      pitch: "One mispriced commission costs more than a year of this. So does one 24-hour print that runs out of filament at hour nineteen.",
      monthly: "Monthly",
      yearly: "Yearly",
      lifetime: "Lifetime",
      cta: "Buy on the web",
      appNote: "Or start a 3-day free trial in the iPhone app, then monthly or yearly. The lifetime unlock is sold here only.",
    },

    closer: {
      heading: "Price the next one properly.",
      body: "Buy once. Sign in on your iPhone at the machine, or in your browser at the desk — it is the same shop either way.",
    },
  },

  pricing: {
    meta: {
      title: "Pricing | Oyno",
      description:
        "One plan for the iPhone app and the web app. Monthly or yearly on the web or in the iPhone app, where it starts with a 3-day free trial, and a one-time lifetime unlock on the web.",
    },
    eyebrow: "Pricing",
    heading: "One plan, and it costs less than a spool",
    intro:
      "There is no free tier and no usage meter. A shop that can only price half its jobs is a shop that goes back to guessing, which is the thing this is for.",
    web: {
      eyebrow: "On the web",
      perMonth: " / month",
      orOthers: (yearly, lifetime) => `or ${yearly} a year, or ${lifetime} once for good`,
      cta: "Get Oyno",
      note: "The lifetime unlock is sold here only. Prices are shown in your own currency at checkout.",
    },
    app: {
      eyebrow: "In the iPhone app",
      headline: "3 days free",
      sub: "then monthly or yearly",
      note: "The free trial is an App Store introductory offer. Apple charges nothing until it ends, and it can be cancelled from your Apple ID settings at any point before then.",
    },
    body: (
      <>
        <h2>What you get</h2>
        <ul>
          <li>Unlimited printers, spools, jobs, customers and orders</li>
          <li>
            Landed cost with filament, electricity, depreciation, purge waste, labour and
            reprint reserve
          </li>
          <li>Marketplace fee presets for Etsy, Shopify, Amazon and eBay</li>
          <li>Filament tracked to the gram, with low-stock warnings and a reorder list</li>
          <li>Three-tap print logging that works offline and syncs when you’re back in range</li>
          <li>
            Monthly gross, net, margin and an itemised breakdown of where the money went
          </li>
          <li>
            Books in any of fourteen currencies, from dollars and euros to złoty, lira and
            hryvnia, and an interface in eighteen languages. The two are chosen separately.
          </li>
          <li>The iPhone app and the web app on one account — your shop on every device you sign in on</li>
        </ul>

        <h2>What it isn’t</h2>
        <p>
          Worth being explicit, because the category is crowded and half of it does something
          else.
        </p>
        <ul>
          <li>
            Printer control. Oyno does not talk to your machines. Use OctoPrint or your
            slicer for that.
          </li>
          <li>
            Slicer integration. Print time and weight are entered by hand or copied from your
            slicer’s estimate.
          </li>
          <li>A model marketplace or a store.</li>
        </ul>

        <h2>Cancelling</h2>
        <p>
          A web subscription is cancelled from the customer portal, reachable from Settings in
          the app or from the receipt emailed to you. An App Store subscription is cancelled in
          your Apple ID settings, and only Apple can do that, so deleting the app or your Oyno
          account will not stop it.
        </p>
        <p>The lifetime unlock renews nothing, so there is nothing to cancel.</p>
        <p>
          Either way your records stay readable after a subscription lapses. You can open the
          app, read your inventory and export your order history; what stops is writing new
          records to the server. Money back is covered on the{" "}
          <Link href={to("refund")}>refunds page</Link>.
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
    heading: "Something not adding up?",
    intro: (
      <>
        Write to{" "}
        <a className="text-accent hover:text-accent-pressed" href="mailto:support@oyno.app">
          support@oyno.app
        </a>
        . A real person answers, usually within a day. If it is about a number the app
        produced, include the figures you entered and we can tell you exactly which term is
        doing it.
      </>
    ),
    body: (
      <>
        <h2>My quote looks too high</h2>
        <p>
          Usually one of three things. Check your printer’s expected life in{" "}
          <strong>Shop → Printers</strong>: a machine set to 500 hours instead of 5,000 makes
          depreciation ten times what it should be. Check your markup, which starts at 100% and
          is applied to landed cost. And check the waste allowance: 10–15% covers
          single-colour printing, but if you set it to a multi-colour figure it applies to
          every job.
        </p>

        <h2>The app is deducting more filament than the print used</h2>
        <p>
          It deducts the model weight plus the waste allowance. If you record purge separately
          or your slicer’s figure already includes it, set{" "}
          <strong>Shop → Waste allowance</strong> to zero and enter total grams instead.
        </p>

        <h2>My spool weight has drifted from the scale</h2>
        <p>
          Expected, and worth paying attention to. Slicer estimates commonly run a few percent
          light. Open the spool, set <strong>Left on the roll</strong> to what the scale says,
          and save. The difference is recorded as an adjustment, so you can see how big the gap
          usually is.
        </p>

        <h2>Can I keep my books in my own currency?</h2>
        <p>
          Yes, in any of fourteen. <strong>Shop → Currency</strong> sets what every number in the
          app is denominated in, and it is a separate choice from <strong>Shop → Language</strong>:
          a shop billing in euros can read the app in English, and one billing in dollars can
          read it in Spanish.
          Changing the currency changes the symbol, not the figures you have already entered.
        </p>

        <h2>I logged prints with no signal. Where did they go?</h2>
        <p>
          Nowhere. They are on the device. The app writes locally first and syncs when it can.{" "}
          <strong>Shop</strong> shows how many changes are still waiting. If the count is not
          going down, check that your subscription is still live: writing to the server needs
          one, and everything recorded in the meantime is kept and sent the moment it is.
        </p>

        <h2>I paid on the web but the app still shows a paywall</h2>
        <p>
          Sign in on the app with the same email you used at checkout. The purchase is
          attached to the account, not to the device.
        </p>

        <h2>How do I cancel?</h2>
        <p>
          If you subscribed in the app, in your Apple ID settings. Only Apple can cancel that.
          If you subscribed on this website, through the customer portal, reachable from
          Settings in the app or from your receipt. The lifetime unlock has nothing to cancel.
          See <Link href={to("terms")}>Terms</Link>, and{" "}
          <Link href={to("refund")}>Refunds</Link> for money back.
        </p>

        <h2>How do I delete my data?</h2>
        <p>
          <strong>Shop → Delete account</strong> in the app. It erases everything, immediately,
          on every device. See <Link href={to("privacy")}>Privacy</Link> for what “everything”
          covers.
        </p>

        <h2>Does it talk to my printer?</h2>
        <p>
          No, and it is not going to. Oyno is the business side: costs, inventory, orders.
          Machine control belongs to OctoPrint, Klipper or your printer’s own app, and they do
          it better than a business tool would.
        </p>
      </>
    ),
  },

  refund: {
    meta: {
      title: "Refunds | Oyno",
      description: "The refund policy for a purchase on this website, and how App Store refunds work.",
    },
    eyebrow: "Refunds",
    heading: "Money back",
    updatedLabel: "Last updated",
    updated: UPDATED,
    intro: (
      <>
        Its own page rather than a paragraph inside{" "}
        <Link href={to("terms")}>Terms</Link>, because it is the one clause anybody looks for
        before paying, and it should not take a search to find.
      </>
    ),
    body: (
      <>
        <h2>Bought on this website</h2>
        <p>
          <strong>Thirty days, no questions.</strong> Write to{" "}
          <a href="mailto:support@oyno.app">support@oyno.app</a> from the address you
          paid with, say you want a refund, and you will get one. You do not have to give
          a reason, and we will not ask you to sit through an offer first.
        </p>
        <p>
          Paddle.com Market Ltd is the merchant of record and issues the money, so it returns
          to the card you paid with and appears as a Paddle refund. Most land within five to
          ten working days depending on your bank. Access ends when the refund is issued,
          whether it was a subscription or the lifetime unlock.
        </p>
        <p>
          After thirty days, we will still look at it. An accidental renewal you have not used
          is not a sale we want to keep. That one is a judgement call rather than a promise.
        </p>

        <h2>Bought in the app</h2>
        <p>
          Refunds for an App Store purchase are Apple’s to give and we have no ability to issue
          them, no matter how much we would like to. Request one at{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a> with the Apple
          ID you bought it on. Apple usually answers within a couple of days.
        </p>
        <p>
          This applies to the monthly subscription and the yearly one alike. If Apple turns down a request you think is reasonable, write to us anyway. We
          can sometimes add context to an appeal, which is not the same as being able to pay
          you back.
        </p>

        <h2>The free trial</h2>
        <p>
          The 3-day trial is an App Store introductory offer. Nothing is charged until it ends,
          so cancelling before then costs nothing and there is nothing to refund. Cancel in
          your Apple ID settings. Deleting the app does not do it.
        </p>

        <h2>What a refund does not do</h2>
        <p>
          It does not delete your account or your records, and it does not cancel a
          subscription bought somewhere else. If you want the data gone as well, use{" "}
          <strong>Shop → Delete account</strong> in the app; see{" "}
          <Link href={to("privacy")}>Privacy</Link> for what that erases.
        </p>

        <h2>Your statutory rights</h2>
        <p>
          If you are a consumer in the EU or the UK, you have a 14-day right to withdraw from a
          distance contract. The thirty days above is longer and easier, and neither it nor
          anything on this page takes that right away.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:support@oyno.app">support@oyno.app</a>
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Privacy | Oyno",
      description: "What Oyno stores, what it never stores, and how to get rid of all of it.",
    },
    eyebrow: "Privacy",
    heading: "Your shop’s books are yours",
    updatedLabel: "Last updated",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno is operated by Teimur Gasanov. It is a cost-calculation and inventory app for
          3D printing businesses. This page describes what the app and this website store, why,
          and how to remove it.
        </p>

        <h2>What we store</h2>
        <h3>Your account</h3>
        <p>
          An email address, and an Apple user identifier if you signed in with Apple. Sign in
          with Apple lets you hide your real address; if you do, we only ever see the relay
          address Apple gives us, and that is fine. We never need to reach you at it except to
          answer a support request you started.
        </p>

        <p>
          If you signed in with Google or Facebook: the identifier that provider gives us
          for your account, and the name, email address and profile picture link it
          shares. We never see your password there, and we ask for nothing else: no
          friends, no posts, no contacts.
        </p>

        <h3>Your shop</h3>
        <p>
          The records you create: printers, filament spools, jobs, customers, orders and the
          spool movement ledger. These sync to our database so they are on every device you
          sign in on. They are stored against your account id and nobody else’s.
        </p>
        <p>
          We do not read them, mine them, aggregate them into benchmarks, or sell them. There is
          no analytics event in this app that carries a customer’s name, an order’s contents, a
          price you charge, or what your shop makes.
        </p>

        <h3>Your subscription</h3>
        <p>
          If you subscribed in the app: Apple’s original transaction identifier, the product id,
          the expiry date and whether it is live. Apple does not give us your card details, your
          name or your address, and we do not ask for them.
        </p>
        <p>
          If you subscribed on the web: our payment processor, Paddle, is the merchant of
          record. Paddle takes the payment and holds the card details, which we never see. We
          store the customer and subscription identifiers Paddle gives us, the price, the status
          and the end of the paid period.
        </p>

        <h3>Product analytics</h3>
        <p>
          We record which screens are opened and which actions are taken (a quote saved, a
          print logged, a paywall seen) through Amplitude. Each event carries a material name
          or a channel name and nothing more. We use it to find where the app is confusing. You
          can opt out of app tracking in iOS Settings, and the app respects it.
        </p>

        <h3>Advertising</h3>
        <p>
          This website loads the Meta pixel to measure which ads bring people who subscribe. It
          is not loaded at all for readers in the EEA, the UK or Switzerland, where setting an
          advertising cookie needs your consent first and we would rather not ask than ask
          badly. When a subscription completes we send Meta a hashed email address so the
          conversion can be matched. It is hashed on our server, never in your browser, and never
          reversible by us or by them into anything but a match.
        </p>

        <h3>Your language</h3>
        <p>
          If you use the switcher at the bottom of this page, we store your choice in a cookie
          named <code>oyno.lang</code> so the site stops guessing from your IP address. It
          holds a language tag such as <code>en</code> or <code>de</code> and nothing else, it is
          not shared with anybody, and deleting it only means the guess comes back.
        </p>

        <h2>What we never store</h2>
        <ul>
          <li>Card numbers. Apple and Paddle handle payment; we never touch a card.</li>
          <li>Your location, your contacts, your photos or your files.</li>
          <li>Anything from a device sensor.</li>
          <li>
            Your shop’s figures in any analytics event: no prices, no totals, no customer
            names.
          </li>
        </ul>

        <h2>Who else sees it</h2>
        <p>Four processors, each doing one job:</p>
        <ul>
          <li>
            <strong>Supabase</strong>: the database your shop is stored in, and the service
            that authenticates your sign-in.
          </li>
          <li>
            <strong>Vercel</strong>: hosting for this website and the API the app talks to.
          </li>
          <li>
            <strong>Paddle</strong>: merchant of record for web subscriptions.
          </li>
          <li>
            <strong>Amplitude</strong>: product analytics.
          </li>
        </ul>
        <p>Nobody else. We do not sell or share your data with advertisers or data brokers.</p>

        <h2 id="delete">Deleting everything</h2>
        <p>
          In the app: <strong>Shop → Delete account</strong>. It erases your account and every
          record attached to it (printers, spools, jobs, customers, orders and the ledger)
          across every device, immediately, and it cannot be undone.
        </p>
        <p>
          Signed in with Facebook? You can also remove Oyno from your Facebook
          account under <strong>Settings &amp; privacy → Settings → Apps and
          websites</strong>. That stops Facebook sharing anything further with us, but it
          does not erase your Oyno account or your records; the step above does.
        </p>
        <p>
          Deleting your account does not cancel a subscription. An App Store subscription lives
          on your Apple ID and only Apple can cancel it; a web subscription is cancelled through
          the Paddle customer portal. Cancel first, then delete.
        </p>
        <p>
          If you would rather ask us, write to{" "}
          <a href="mailto:support@oyno.app">support@oyno.app</a> and we will do it and
          confirm.
        </p>

        <h2>Your rights</h2>
        <p>
          If you are in the EEA or the UK, you have the right to access, correct, export and
          erase your data, and to object to processing. The app already gives you all of these
          directly: your records are visible and editable in the app, and the delete is
          complete. For anything the app does not cover, write to{" "}
          <a href="mailto:support@oyno.app">support@oyno.app</a>.
        </p>

        <h2>Retention</h2>
        <p>
          Your shop’s records are kept until you delete them or your account. Analytics events
          are retained by Amplitude under their own schedule. Subscription records are kept
          while a subscription can still be restored. An App Store purchase can be restored
          years later, and the row is what makes that work.
        </p>

        <h2>Children</h2>
        <p>
          Oyno is a business tool and is not directed at children. We do not knowingly
          collect data from anyone under 13.
        </p>

        <h2>Changes</h2>
        <p>
          If this page changes in a way that affects what we store or who sees it, we will say
          so in the app before the change takes effect.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:support@oyno.app">support@oyno.app</a>
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
          These terms cover the Oyno app, on iPhone and on the web, and this website, all
          operated by Teimur Gasanov. Using any of them means accepting them.
        </p>

        <h2>What Oyno is</h2>
        <p>
          A cost-calculation, inventory and order-tracking tool for 3D printing businesses. It
          performs arithmetic on figures you enter: your electricity rate, your printer’s price
          and expected life, your filament costs, your labour rate, your marketplace’s fees.
        </p>
        <p>
          <strong>
            The numbers it produces are only as good as the numbers you put in, and they are not
            financial, tax or accounting advice.
          </strong>{" "}
          Fee presets for marketplaces are starting values that were accurate when written;
          those companies change their rates, and keeping yours current is your job. Nothing in
          Oyno is a guarantee of profit.
        </p>

        <h2>Your account</h2>
        <p>
          You need an account, because your shop syncs between devices. Keep your credentials to
          yourself; you are responsible for what happens under your account. One account is for
          one business, so do not resell access.
        </p>
        <p>
          You can delete your account at any time from <strong>Shop → Delete account</strong>. It
          is immediate and irreversible.
        </p>

        <h2>Your data</h2>
        <p>
          Your records are yours. We claim no ownership of them and no licence to use them
          beyond storing and syncing them so the app works. See{" "}
          <Link href={to("privacy")}>Privacy</Link>.
        </p>

        <h2>Subscriptions and the lifetime unlock</h2>
        <h3>Bought on this website</h3>
        <p>
          Payment is taken by Paddle.com Market Ltd, who are the merchant of record and whose{" "}
          <a href="https://www.paddle.com/legal/checkout-buyer-terms">buyer terms</a> apply to
          the transaction. Subscriptions renew automatically at the interval you chose until
          cancelled. Prices are shown in your own currency before you pay and include any tax
          Paddle is required to collect.
        </p>
        <p>
          Cancel from the customer portal, reachable from Settings in the app or from the link
          in your receipt. Cancelling stops the next renewal; the subscription stays live until
          the end of the period you already paid for.
        </p>
        <p>
          The lifetime unlock is a one-time purchase through the same checkout. It does not
          renew and there is nothing to cancel. It is tied to the account you bought it with,
          and a refund ends the access it granted.
        </p>

        <h3>Bought in the app</h3>
        <p>
          Payment is taken by Apple under your Apple ID and Apple’s{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            standard end-user licence agreement
          </a>
          . Subscriptions renew automatically unless cancelled at least 24 hours before the end
          of the current period. Manage or cancel in your Apple ID settings. We cannot cancel
          an App Store subscription for you, and neither deleting the app nor deleting your
          Oyno account will do it.
        </p>
        <p>
          A free trial is an App Store introductory offer. Nothing is charged until it ends, and
          cancelling before then costs nothing. Unused trial time is forfeited if you subscribe
          early.
        </p>

        <h3>Refunds</h3>
        <p>
          Thirty days on a web purchase, and Apple’s to give on an App Store one. The detail is
          on the <Link href={to("refund")}>refunds page</Link>.
        </p>

        <h2>What we owe you</h2>
        <p>
          We will make a reasonable effort to keep the service running and your records intact,
          and to warn you before anything changes in a way that would lose data. We do not
          promise uninterrupted availability. The app keeps a local copy of your shop and works
          offline, which is the practical protection against an outage.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Do not attempt to break, overload or reverse-engineer the service, use it to store
          anything unlawful, or resell access. We may suspend an account that does, and will say
          why.
        </p>

        <h2>Liability</h2>
        <p>
          To the extent the law allows, Oyno is provided as-is and our liability is limited
          to what you paid in the twelve months before the claim. We are not liable for lost
          profits or for business decisions made using the app’s output. Pricing your own work
          remains your call.
        </p>
        <p>Nothing here limits liability that cannot lawfully be limited.</p>

        <h2>Changes</h2>
        <p>
          We may update these terms. Material changes will be announced in the app before they
          take effect, and continuing to use Oyno after that means accepting them.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:support@oyno.app">support@oyno.app</a>
        </p>
      </>
    ),
  },
};
