/**
 * The English deck, and the shape every other deck fills in (`types.ts`).
 *
 * Keyed the way `steps.ts` is: questions by key, options by value, statement steps by id.
 * `{name}` is filled in at render; `[brackets]` is the accent in a headline.
 */
export const en = {
  meta: {
    title: "Oyno: the pocket ERP for 3D printing businesses",
    description: "Know what every print costs before you quote it. Subscribe, then sign in on the app.",
  },

  chrome: {
    continue: "Continue",
    letsGo: "Let's go",
    intro: "A few questions · about a minute",
    back: "Back",
    progress: "Progress",
  },

  openers: {
    headline: "Is your filament sheet [a few rolls behind] the shelf?",
    yes: "Yes",
    no: "Not really",
  },

  questions: {
    problem: {
      headline: "Which of these is [costing you] right now?",
      options: {
        cost: "Guessing what a print costs",
        filament: "Not knowing what's left on the roll",
        orders: "Forgetting who was promised what",
        earnings: "Not knowing what the month earned",
      },
      recap: {
        cost: "You guess a price, then find out later.",
        filament: "A roll that doesn't say what's left on it.",
        orders: "Promises living in a DM thread.",
        earnings: "Sales you can see. Earnings you can't.",
      },
    },
    brought: {
      headline: "What brought you here?",
      options: {
        guessing: "Every order is a guess",
        clean: "I want a clean start",
        broke: "My old system stopped working",
        works: "I just want something that works",
        unsure: "Not sure yet",
      },
      recap: {
        guessing: "Every order priced from scratch, and never the same way twice.",
        clean: "Ready to start the books over, properly this time.",
        broke: "A system that worked at ten orders and not at fifty.",
        works: "Done evaluating. You want the thing that just runs.",
      },
    },
    earned: {
      headline: "Do you know what you earn on a print?",
      options: {
        yes: "Yes, usually",
        sometimes: "Sometimes",
        rarely: "Rarely",
        avoid: "I avoid looking",
      },
      recap: {
        sometimes: "Sometimes you know the margin. Usually you find out later.",
        rarely: "Prints go out the door at a price nobody has checked.",
        avoid: "A number you would rather not look at.",
      },
    },
    motivation: {
      headline: "What would change your week the most?",
      description: "Choose all that apply",
      options: {
        control: "Feel in control of the shop",
        price: "Raise my prices without losing sales",
        calm: "Stop worrying I forgot an order",
        which: "Know which prints are worth doing",
        evenings: "Get my evenings back",
      },
    },
    volume: {
      headline: "How many prints a day?",
      options: {
        six: "6 or more",
        four: "4–5",
        two: "2–3",
        one: "1 or less",
      },
      recap: {
        six: "Six or more prints a day, tracked by memory.",
        four: "Four or five jobs a day, and no ledger under them.",
        two: "A couple of prints a day, each one priced from scratch.",
      },
    },
    tracking: {
      headline: "What do you use to track filament?",
      options: {
        scale: "I weigh every roll",
        labels: "Labels on the spools",
        sheet: "A spreadsheet",
        head: "Nothing, I keep it in my head",
        look: "I just look at the roll",
      },
      recap: {
        labels: "Labels that were right the day they were written.",
        sheet: "A filament sheet updated when you remember to.",
        head: "Every roll's weight kept in your head, alongside everything else.",
        look: "Judging a roll by eye, which works until the night it doesn't.",
      },
    },
    orderbook: {
      headline: "Where does an order live [once the customer says yes]?",
      options: {
        marketplace: "The marketplace's orders page",
        messages: "The message thread",
        notes: "The notes app",
        postits: "A Post-it on the printer",
        whiteboard: "A whiteboard",
        head: "My head",
      },
      recap: {
        marketplace: "The marketplace's page, which knows its own orders and none of the fair's.",
        messages: "The order is in the thread, forty messages up.",
        notes: "An order in a note, with the due date in your head.",
        postits: "A Post-it on the enclosure, holding the order until it falls off.",
        whiteboard: "A whiteboard that knows this week and has forgotten the last.",
        head: "Every promise held in your head, next to everything else.",
      },
    },
    feel: {
      headline: "What if opening your shop app [felt good]?",
      options: {
        everything: "That would change everything",
        lot: "It would help a lot",
        unsure: "Not sure yet",
        already: "It already does",
      },
    },
    tools: {
      headline: "What are you running the shop on right now?",
      options: {
        notes: "A notes app",
        dashboard: "The marketplace's dashboard and the payout",
        paper: "Paper",
        sheet: "Notion or a spreadsheet",
        head: "Nothing, it's all in my head",
        gaveup: "Tried apps, gave up on all of them",
      },
      recap: {
        notes: "A notes app with four lists in it, none of them current.",
        dashboard: "A dashboard that shows the sales and none of the costs.",
        paper: "Paper, which is honest and does no arithmetic.",
        sheet: "A spreadsheet that started small and mutated into a monster.",
        head: "The whole shop held in your head, with no backup.",
        gaveup: "A graveyard of apps that each wanted more than they gave.",
      },
    },
    searching: {
      headline: "How long have you been looking for something better?",
      options: {
        new: "Just started",
        weeks: "A few weeks",
        months: "Months",
        years: "Years",
      },
      recap: {
        weeks: "A few weeks of looking, and nothing that fits a print shop.",
        months: "Months of looking for this, on and off.",
        years: "Years of making do, because nothing was built for this.",
      },
    },
  },

  steps: {
    why: {
      headline: "It's not you. [A rule of thumb] prices the plastic and nothing else.",
      body: "Power, machine wear, purge waste and the marketplace's cut are all still coming out. They just come out of you.",
      variants: {
        filament: {
          headline: "It's not you. A roll [doesn't say] what's left on it.",
          body: "The label said a kilo when you bought it. Every print since came off it unrecorded, and the rule of thumb never counted the hours anyway.",
        },
        orders: {
          headline: "It's not you. A DM thread is [not an order book].",
          body: "The promise is real, the deposit is real, and the only record of either is a chat you'd have to search. The price underneath it was a guess too.",
        },
        earnings: {
          headline: "It's not you. What you sold is [not what you earned].",
          body: "The dashboard shows the sales. It doesn't show the marketplace's cut, the roll you bought, the two prints that failed or the power the chamber drew.",
        },
      },
    },
    note: {
      headline: "What if every order was [one clean, profitable note]?",
      body: "No approximations, no broken promises, no notes in five places. Every cost in it, and the margin at the bottom.",
    },
    buckets: {
      headline: "Every open job, [sorted by what it pays].",
    },
    shelf: {
      headline: "[No way to remember] every roll.",
      body: "Tag a spool, move it where it lives, and tonight's print says whether it finishes.",
    },
    contrast: {
      headline: "Your notes now, and [a clean start] every morning.",
    },
    recap: {
      headline: "How this works for you",
    },
    account: {
      headline: "Your plan is ready. [Save it] to see your price.",
      // A count, like the paywall's proof lines: written by hand, nothing updates it, and it is
      // a representation to a buyer — so it has to be true and kept true, in every deck.
      note: "1,457 people already joined.",
    },
    paywall: {
      headline: "Unlock the [full potential] of your shop.",
    },
    checkout: {
      headline: "Payment details.",
    },
  },

  units: { g: "{n} g", h: "{n} h" },

  underpriced: {
    print: "{weight} {material}, one print",
    ruleOfThumb: "3× filament",
    withOyno: "With Oyno",
    lose: "You lose {amount}",
    keep: "You keep {amount}",
  },

  orderNote: {
    order: "Order #142",
    filament: "Filament + purge",
    power: "Power + machine wear",
    time: "Your time · {minutes} min",
    reserve: "Failed-print reserve + consumables",
    fee: "Marketplace fee",
    charge: "You charge",
    keep: "You keep",
  },

  buckets: {
    losing: { name: "Losing money", hint: "reprice these or turn them down" },
    thin: { name: "Thin", hint: "fine, but they are not the business" },
    healthy: { name: "Healthy", hint: "take every one of these you can get" },
    orders: {
      helmet: "Cosplay helmet ×2",
      keychains: "Keychain batch ×40",
      stand: "Phone stand ×6",
      planter: "Planter ×3",
      drone: "Drone frame ×1",
      organiser: "Desk organiser ×2",
    },
  },

  contrast: {
    now: "Your notes now",
    morning: "Every morning",
    /** Scribbled, lower-case and half-finished on purpose: they are somebody's own notes. */
    notes: [
      "OVERDUE, Friday??",
      "marcus, 2 black",
      "no filament?",
      "price = 3x?",
      "did he pay",
      "reprint helmet",
    ],
    drone: "Drone frame",
    organiser: "Organiser ×2",
    helmet: "Helmet ×2",
    reprice: "reprice",
    blue: "Blue PETG",
  },

  shelf: {
    printer: { name: "On the printer", empty: "Nothing loaded. Drop a roll on it." },
    shelf: { name: "Shelf", empty: "Nothing here yet. Drop a roll on it." },
    dryBox: { name: "Dry box", empty: "Nothing here yet. Drop a roll on it." },
    rolls: {
      blue: "Signal Blue",
      charcoal: "Matte Charcoal",
      clear: "Translucent",
      carbon: "Carbon",
    },
    finishes: "Finishes",
    spare: "{weight} to spare",
    runsOut: "Runs out at hour {hour}",
    short: "{weight} short",
    caption: "The app's own shelf. Drag a roll, or a whole place, anywhere.",
    dragPlace: "Drag to reorder {place}",
    loadRoll: "{roll} {material}, {weight} — load on the printer",
  },

  recap: {
    closing: "Oyno gives you [a clean order book] every morning.",
    answers: [
      "Every cost in every price",
      "Every roll weighed to the gram",
      "On your phone, at the machine",
    ],
  },

  account: {
    notConfigured: "Accounts aren’t configured in this environment.",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "Password (8+ characters)",
    busy: "One moment…",
    noPassword: "No password. We'll email you a 6-digit code.",
    /** The account step's tick under the reader's problem: the line of the plan that answers it. */
    fix: {
      cost: "Every cost counted before you quote.",
      filament: "Every roll weighed to the gram, at a tap.",
      orders: "Every promise in one list, with its due date.",
      earnings: "What every print earned, after fees and failures.",
    },
    createAccount: "Create account",
    signIn: "Sign in",
    or: "or",
    useCode: "Email me a code instead",
    usePassword: "Use a password instead",
    haveAccount: "Already have an account? Sign in",
    newHere: "New here? Create an account",
    codeSent: "Code sent to {email}.",
    continue: "Continue",
    resendIn: "Resend in {seconds}s",
    resend: "Send a new code",
    changeEmail: "Change email",
    /** Meta's wording, as their Login button words it in each language. */
    facebook: "Continue with Facebook",
    /** Apple permits "Continue with Apple" and "Sign in with Apple" only, each in Apple's own
     * translation; Google's button reads as its generator words it in that language. */
    apple: "Continue with Apple",
    google: "Sign in with Google",
  },

  /** By GoTrue's error code. A code with no entry shows GoTrue's own words in English and
   * `unknown` everywhere else, since those words are only ever English. */
  authErrors: {
    link_failed: "That didn’t work. Send yourself a new code.",
    not_configured: "Sign-in is not configured.",
    otp_expired: "That code has expired or was already used. Send yourself a new one.",
    over_email_send_rate_limit: "Too many emails to this address. Wait a minute and try again.",
    over_request_rate_limit: "Too many attempts. Wait a minute and try again.",
    invalid_credentials: "That email and password don’t match.",
    email_address_invalid: "That email address doesn’t look right.",
    weak_password: "Choose a longer password.",
    user_already_exists: "There is already an account with this email. Sign in instead.",
    email_exists: "There is already an account with this email. Sign in instead.",
    unknown: "Something went wrong on our side. Try again in a minute.",
  },

  legal: { terms: "Terms", privacy: "Privacy Policy" },

  paywall: {
    pros: [
      "Margin on every print",
      "Control over every roll of filament",
      "Orders and quotes in your pocket",
    ],
    monthly: "Monthly",
    yearly: "Yearly",
    lifetime: "Lifetime",
    perMonth: "/ month",
    perYear: "/ year",
    perDay: "per day",
    once: "once",
    cancelAnytime: "Cancel anytime",
    billedYearly: "Billed once a year",
    save: "Save {percent}",
    forever: "Pay once. Yours forever.",
    // Both counts are written by hand and neither updates itself, so they have to be made true
    // and kept true — in every deck at once. The lifetime cap is real
    // (`paddle_lifetime_entitlements`); when it moves, move it here.
    lifetimeLeft: "51 out of 200 left",
    weekly: "253 people started Premium this week",
    guarantee: "30-day money-back guarantee, no questions asked.",
    continue: "Continue",
  },

  reviews: {
    title: "What others are saying",
    dot: "Review {n} of {count}",
    rating: "Rated {n} out of 5",
    items: [
      {
        name: "Greg H.",
        role: "3D print solopreneur",
        rating: "5",
        quote: "I charged 3× the filament. Counting power, wear and failures, my big pieces barely broke even. I repriced it all in an evening.",
      },
      {
        name: "Wendy P.",
        role: "Etsy seller",
        rating: "5",
        quote: "I never counted Etsy’s fees. Now every quote has them, and the month shows what I kept, not what sold.",
      },
      {
        name: "Tomasz K.",
        role: "Print farm, 12 printers",
        rating: "5",
        quote: "Twelve printers, no idea which roll was where. Now a print is three taps, and I catch short spools before overnight runs.",
      },
    ],
  },

  faq: {
    title: "FAQ",
    items: [
      {
        question: "Do all plans include everything?",
        answer: "Yes. Monthly, yearly and lifetime unlock the same Oyno: unlimited printers, spools, orders and quotes, on iPhone and on the web. Only the way you pay differs.",
      },
      {
        question: "What happens to my records if I cancel?",
        answer: "Nothing is deleted. Every order, quote and roll you recorded still opens as before; what stops is adding new ones. Cancel any time from the app or from your receipt email.",
      },
      {
        question: "Can I get my money back?",
        answer: "Yes, within 30 days and without giving a reason. Write to support@oyno.app from the address you paid with.",
      },
      {
        question: "Which devices does it run on?",
        answer: "Oyno is an iPhone app and a web app that runs in any modern browser, on Android, Windows or Mac. One account signs you in on all of them.",
      },
      {
        question: "Does it work for resin printing?",
        answer: "Yes. Resin jobs are quoted in millilitres, with the wash-and-cure station and FEP film wear counted in the price.",
      },
      {
        question: "Who handles the payment?",
        answer: "Paddle, our merchant of record. It takes the card, adds the VAT or sales tax your country charges and emails you the receipt. Your card details never reach us.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno runs on iPhone and on the web. Sign in with this account on either. Billed by Paddle.",
    oneTime: "One payment, nothing renews.",
    cancelAnytime: "Cancel anytime.",
    notConfigured: "Checkout isn’t configured in this environment.",
    needsAccount: "Access is tied to an account, so it needs one first.",
    createYours: "Create yours",
    failed: "The payment form didn’t load. Reload the page to try again.",
    summary: "Order summary",
    subtotal: "Subtotal",
    discount: "Discount",
    tax: "Tax",
    total: "Total",
    renews: "Renews at {amount} / {cycle}. Cancel anytime.",
    noRenewal: "One payment. Nothing renews, so there is nothing to cancel.",
    cycles: { day: "day", week: "week", month: "month", year: "year" },
  },

  done: {
    eyebrow: "You’re in",
    headline: "Open it on your [phone] or in your browser",
    body: "Install Oyno on your iPhone, or open it in your browser, and sign in with the account you just created. Your plan is already on it, so there is no paywall waiting for you.",
    badge: "Download on the App Store",
    orWeb: "Or open the web app →",
    web: "Open the web app →",
    receipt: "We’ll email you a receipt from Paddle. A subscription can be managed or cancelled any time from your account.",
  },
};
