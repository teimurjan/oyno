/**
 * The English deck, and the shape every other deck fills in (`types.ts`).
 *
 * Keyed the way `steps.ts` is: questions by key, options by value, statement steps by id.
 * `{name}` is filled in at render; `[brackets]` is the accent in a headline.
 */
export const en = {
  meta: {
    title: "Oyno: put the phone down, play for ten minutes",
    description: "Pause your apps during kid time and get one easy game a day. Subscribe, then sign in on the app.",
  },

  chrome: {
    continue: "Continue",
    letsGo: "Let's go",
    intro: "A few questions · about a minute",
    back: "Back",
    progress: "Progress",
  },

  openers: {
    headline: "Does your phone [eat the evening] with your kid?",
    yes: "Yes",
    no: "Not really",
  },

  questions: {
    problem: {
      headline: "Which of these [sounds like your evenings]?",
      options: {
        scroll: "I scroll when I meant to play",
        ideas: "I'm too tired to think of a game",
        asks: "My kid asks for my phone",
        both: "We're both on our phones",
      },
    },
    age: {
      headline: "How old is your youngest?",
      options: {
        toddler: "2–3",
        preschool: "4–5",
        school: "6–8",
        older: "9 or older",
      },
    },
    hardest: {
      headline: "When does the phone [win most]?",
      options: {
        afterwork: "Right after work",
        dinner: "Around dinner",
        weekend: "Weekend mornings",
        bedtime: "Before bedtime",
      },
    },
    pickups: {
      headline: "How often do you pick it up [in an hour] with them?",
      options: {
        rare: "Hardly ever",
        few: "Once or twice",
        often: "Every few minutes",
        lost: "I lose count",
      },
    },
    apps: {
      headline: "Which apps [pull you back]?",
      description: "Choose all that apply",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "News",
        work: "Email and Slack",
        games: "Games",
      },
    },
    energy: {
      headline: "How much energy is left [at 6 PM]?",
      options: {
        low: "Low battery",
        okay: "Okay",
        full: "Plenty",
      },
    },
    partner: {
      headline: "Is there a co-parent home in the evening?",
      options: {
        yes: "Yes, most evenings",
        sometimes: "Sometimes",
        no: "No, it's just me",
      },
    },
    tried: {
      headline: "What have you [already tried]?",
      options: {
        limits: "Screen Time limits",
        room: "Phone in another room",
        delete: "Deleting apps",
        nothing: "Nothing yet",
      },
    },
    minutes: {
      headline: "How many minutes [a day] could you give?",
      options: {
        ten: "10 minutes",
        twenty: "20 minutes",
        thirty: "30 minutes or more",
      },
    },
    soon: {
      headline: "When do you want your evenings back?",
      options: {
        tonight: "Tonight",
        week: "This week",
        month: "This month",
        unsure: "Not sure yet",
      },
    },
  },

  steps: {
    why: {
      headline: "It's not you. Apps are [built to pull you back].",
      body: "Every app on your phone has a team paid to win your next minute. Willpower at 6 PM is not a fair fight.",
      variants: {
        ideas: {
          headline: "It's not you. Nobody has [game ideas] after a full day.",
          body: "So the easiest thing in the room wins, and the easiest thing in the room is a screen.",
        },
        asks: {
          headline: "It's not you. Kids want [what you're looking at].",
          body: "A phone in your hand is the most interesting thing in the room. Put it down, and you are.",
        },
        both: {
          headline: "It's not you. Two phones make [a quiet room].",
          body: "Each of you waits for the other to put theirs down first. Nobody has to wait if both phones pause at once.",
        },
      },
    },
    evening: {
      headline: "Where an evening [goes].",
    },
    alternative: {
      headline: "Oyno is [not breaking] a habit you already have.",
      body: "It gives you something better to pick up: a short game that makes your kid smarter.",
    },
    enough: {
      headline: "Ten minutes is [enough].",
      body: "Kids remember the parent who got down on the floor, not how long the game lasted. Oyno picks one that fits ten minutes and the energy you have left.",
    },
    plan: {
      headline: "Building [your plan]",
    },
    account: {
      headline: "Your plan is ready. [Save it] to see your price.",
    },
    paywall: {
      headline: "Get your [evenings] back.",
    },
    checkout: {
      headline: "Payment details.",
    },
  },

  evening: {
    caption: "A weekday evening",
    /** One label per hour line, the first at 4 PM. */
    hours: ["4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"],
    work: "Work",
    kid: "Time with your kid",
    phone: "Phone",
    summary: "{n} interruptions from your kiddo",
  },

  /** The play screen's top half, for one real game ("countdown-stop" in `activities/en.json`). */
  alternative: {
    eyebrow: "One easy thing",
    age: "Age 3–5",
    title: "Stop at Four",
    minutes: "8 min",
    tags: {
      "lying-down": "Lying down",
      quiet: "Quiet",
      "nothing-to-grab": "Nothing to grab",
    },
    blurb: "Good for a kid who counts everything, a dark bedroom, and a parent who can manage ten numbers.",
    why: "Why it works",
    skills: {
      "inhibitory-control": "Self-control",
      "working-memory": "Working memory",
    },
  },

  compare: {
    good: {
      title: "A 10-minute game together",
      points: [
        "All of your attention",
        "A game with a start and an end",
        "Your kid leads, you follow",
        "A memory you both keep",
      ],
    },
    bad: {
      title: "An hour sitting nearby",
      points: [
        "Half of you is on the phone",
        "Your kid asks for the screen",
        "Nothing gets to the end",
        "Nobody remembers it",
      ],
    },
  },

  /** The plan step's checklist: a line per answer, ticked in this order. A missing answer, or
   * one with no line, reads the fallback. */
  plan: {
    lines: {
      age: {
        toddler: "Games for a 2 to 3 year old",
        preschool: "Games for a 4 to 5 year old",
      },
      hardest: {
        afterwork: "Kid hours right after work",
        dinner: "Kid hours around dinner",
        weekend: "Kid hours on weekend mornings",
        bedtime: "Kid hours before bedtime",
      },
      energy: {
        low: "Easy games for a low battery",
        okay: "Games for an okay day",
        full: "Bigger games for a full battery",
      },
      minutes: {
        ten: "Ten minutes a day, phone down",
        twenty: "Twenty minutes a day, phone down",
        thirty: "Half an hour a day, phone down",
      },
    },
    fallback: {
      age: "Games you can play together",
      hardest: "Kid hours when the phone wins most",
      apps: "Pausing the apps that pull you back",
      energy: "Games sized to your energy",
      minutes: "A few minutes a day, phone down",
    },
    apps: "Pausing {apps} during Kid hours",
  },

  account: {
    notConfigured: "Accounts aren’t configured in this environment.",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "Password (8+ characters)",
    busy: "One moment…",
    noPassword: "No password. We'll email you a 6-digit code.",
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
      "Your apps paused during Kid hours",
      "One easy game every evening",
      "Your family's planet, growing",
    ],
    monthly: "Monthly",
    yearly: "Yearly",
    perMonth: "/ month",
    perYear: "/ year",
    perDay: "per day",
    cancelAnytime: "Cancel anytime",
    billedYearly: "Billed once a year",
    save: "Save {percent}",
    guarantee: "Not for you? Ask for a full refund within 14 days.",
    continue: "Continue",
  },

  faq: {
    title: "FAQ",
    items: [
      {
        question: "Do both plans include everything?",
        answer: "Yes. Monthly and yearly unlock the same Oyno: Kid hours, every game and every world. Only the way you pay differs.",
      },
      {
        question: "Whose phone does it pause?",
        answer: "Yours. Oyno pauses the apps you pick on the phone it is installed on, during the hours you set. It doesn't watch or limit your kid.",
      },
      {
        question: "What happens if I cancel?",
        answer: "Your planet and your rounds stay. Kid hours and new games stop. Cancel any time from the app or from your receipt email.",
      },
      {
        question: "Can I get my money back?",
        answer: "Yes, within 14 days and without giving a reason. Write to support@oyno.app from the address you paid with.",
      },
      {
        question: "Which devices does it run on?",
        answer: "Oyno is an iPhone app. Install it and sign in with the account you create here.",
      },
      {
        question: "Who handles the payment?",
        answer: "Dodo Payments, our merchant of record. It takes the card, adds the sales tax or VAT your country charges and emails you the receipt. Your card details never reach us.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno is an iPhone app. Install it and sign in with this account. Billed by Dodo Payments.",
    cancelAnytime: "Cancel anytime.",
    notConfigured: "Checkout isn’t configured in this environment.",
    needsAccount: "Access is tied to an account, so it needs one first.",
    createYours: "Create yours",
    opening: "Getting the payment form ready…",
    retry: "That didn’t open. Try again in a moment.",
    tryAgain: "Try again",
    failed: "The payment form didn’t load. Reload the page to try again.",
    summary: "Order summary",
    discount: "Discount",
    tax: "Tax",
    total: "Total",
    renews: "Renews at {amount} / {cycle}. Cancel anytime.",
    cycles: { month: "month", year: "year" },
  },

  done: {
    eyebrow: "You’re in",
    headline: "Now get it on your [phone]",
    body: "Install Oyno on your iPhone and sign in with the account you just created. Your plan is already on it, so no paywall is waiting for you.",
    badge: "Download on the App Store",
    receipt: "Dodo Payments will email your receipt. Manage or cancel your subscription any time from the app.",
  },
};
