import type { FunnelCopy } from "./types";

/** The Dutch deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const nl: FunnelCopy = {
  meta: {
    title: "Oyno: leg je telefoon weg, speel tien minuten",
    description: "Je apps op pauze als je bij je kind bent, en elke dag één makkelijk spelletje. Neem een abonnement en log daarna in de app in.",
  },

  chrome: {
    continue: "Verder",
    letsGo: "Aan de slag",
    intro: "Een paar vragen · ongeveer een minuut",
    back: "Terug",
    progress: "Voortgang",
  },

  openers: {
    headline: "Ooit [‘momentje’] tegen je kind gezegd en op je telefoon gebleven?",
    yes: "Ja",
    no: "Niet echt",
  },

  questions: {
    problem: {
      headline: "Wat [herken je] van je avonden?",
      options: {
        scroll: "Ik scrol terwijl ik wilde spelen",
        ideas: "Te moe om een spelletje te bedenken",
        asks: "Mijn kind vraagt om mijn telefoon",
        both: "We zitten allebei op onze telefoon",
      },
    },
    age: {
      headline: "Hoe oud is je jongste?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "Wanneer [wint de telefoon] het vaakst?",
      options: {
        afterwork: "Meteen na het werk",
        dinner: "Rond etenstijd",
        weekend: "Weekendochtenden",
        bedtime: "Voor het slapengaan",
      },
    },
    pickups: {
      headline: "Hoe vaak pak je je telefoon [per uur] als je bij je kind bent?",
      options: {
        rare: "Bijna nooit",
        few: "Een of twee keer",
        often: "Om de paar minuten",
        lost: "Ik raak de tel kwijt",
      },
    },
    apps: {
      headline: "Welke apps [zuigen je erin]?",
      description: "Kies alles wat past",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "Nieuws",
        work: "Mail en Slack",
        games: "Games",
      },
    },
    energy: {
      headline: "Hoeveel energie heb je nog [om zes uur]?",
      options: {
        low: "Batterij bijna leeg",
        okay: "Gaat wel",
        full: "Nog genoeg",
      },
    },
    ideas: {
      headline: "Weet je meestal [wat je kunt spelen] met je kind?",
      options: {
        often: "Meestal wel",
        sometimes: "Soms",
        rarely: "Zelden, mijn hoofd is leeg",
      },
    },
    tried: {
      headline: "Wat heb je [al geprobeerd]?",
      options: {
        limits: "Schermtijdlimieten",
        room: "Telefoon in een andere kamer",
        delete: "Apps verwijderen",
        nothing: "Nog niks",
      },
    },
    minutes: {
      headline: "Hoeveel minuten [per dag] kun je vrijmaken?",
      options: {
        ten: "10 minuten",
        twenty: "20 minuten",
        thirty: "30 minuten of meer",
      },
    },
    soon: {
      headline: "Wanneer wil je je avonden terug?",
      options: {
        tonight: "Vanavond",
        week: "Deze week",
        month: "Deze maand",
        unsure: "Weet ik nog niet",
      },
    },
  },

  steps: {
    why: {
      headline: "Het ligt niet aan jou. Apps zijn [gemaakt om je vast te houden].",
      body: "Achter elke app op je telefoon zit een team dat betaald wordt om je volgende minuut te winnen. Met alleen wilskracht is dat om zes uur ’s avonds geen eerlijke strijd.",
      variants: {
        ideas: {
          headline: "Het ligt niet aan jou. Na een lange dag heeft niemand [ideeën voor spelletjes].",
          body: "Dus wint het makkelijkste in de kamer, en het makkelijkste in de kamer is een scherm.",
        },
        asks: {
          headline: "Het ligt niet aan jou. Kinderen willen [waar jij naar kijkt].",
          body: "Een telefoon in je hand is het interessantste in de kamer. Leg hem weg en dan ben jij het.",
        },
        both: {
          headline: "Het ligt niet aan jou. Twee telefoons maken [een stille kamer].",
          body: "Jullie wachten allebei tot de ander als eerste de telefoon weglegt. Niemand hoeft te wachten als beide telefoons tegelijk op pauze gaan.",
        },
      },
    },
    evening: {
      headline: "Elk ‘momentje’ [telt op].",
    },
    influence: {
      headline: "Kinderen [vragen vaker om een scherm] als wij meer scrollen.",
    },
    alternative: {
      headline: "Oyno [vecht niet] tegen een gewoonte die je al hebt.",
      body: "Je krijgt er een beter idee voor terug: één kort spelletje met je kind, passend bij de energie die je nog hebt.",
      variants: {
        low: {
          body: "Je krijgt er een beter idee voor terug: een kort, rustig spelletje dat ook lukt met een bijna lege batterij.",
        },
        full: {
          body: "Je krijgt er een beter idee voor terug: een spelletje met je kind waarin je je energie kwijt kunt.",
        },
      },
    },
    enough: {
      headline: "Tien minuten is [genoeg].",
      body: "Kinderen onthouden de ouder die bij ze op de grond ging zitten, niet hoe lang het spelletje duurde. Oyno kiest er een dat in tien minuten past en bij de energie die je nog hebt.",
      variants: {
        twenty: {
          headline: "Twintig minuten is [ruim voldoende].",
          body: "Kinderen onthouden de ouder die bij ze op de grond ging zitten, niet hoe lang het spelletje duurde. Oyno kiest er een dat in twintig minuten past en bij de energie die je nog hebt.",
        },
        thirty: {
          headline: "Dertig minuten is [meer dan genoeg].",
          body: "Kinderen onthouden de ouder die bij ze op de grond ging zitten, niet hoe lang het spelletje duurde. Oyno kiest er een dat bij je avond past en bij de energie die je nog hebt.",
        },
      },
    },
    plan: {
      headline: "We maken [je plan]",
    },
    account: {
      headline: "Je plan is klaar. [Sla het op] om je prijs te zien.",
    },
    paywall: {
      headline: "Ruil het scrollen in voor een pienter kind.",
    },
    checkout: {
      headline: "Betaalgegevens.",
    },
  },

  evening: {
    caption: "Een doordeweekse avond",
    hours: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    work: "Werk",
    kid: "Tijd met je kind",
    phone: "Telefoon",
    summary: "{n} keer ‘momentje’ tegen je kleintje",
  },

  influence: {
    caption: "Kinderen van 2 tot 5 die steeds om een scherm vragen",
    bars: ["Minder dan 1,3 u", "1,3 tot 3 u", "Meer dan 3 u"],
    axis: "Sociale media van de ouder per dag",
    summary: "Twee keer zo vaak als een ouder 3+ uur per dag op sociale media zit",
    source: "Domoff et al., 2021 · 383 Amerikaanse gezinnen",
  },

  alternative: {
    eyebrow: "Iets makkelijks",
    age: "3–5 jaar",
    title: "Stop bij vier",
    minutes: "8 min",
    tags: {
      "lying-down": "Liggend",
      quiet: "Rustig",
      "nothing-to-grab": "Niks nodig",
    },
    blurb: "Fijn voor een kind dat alles telt, een donkere slaapkamer en een ouder die nog tien getallen aankan.",
    why: "Waarom het werkt",
    skills: {
      "inhibitory-control": "Zelfbeheersing",
      "working-memory": "Werkgeheugen",
    },
  },

  compare: {
    good: {
      ten: {
        title: "Samen een spelletje van 10 minuten",
        points: [
          "Al je aandacht",
          "Eén spelletje, van begin tot eind",
          "Je kind leidt, jij volgt",
          "70 minuten samen per week",
        ],
      },
      twenty: {
        title: "20 minuten samen spelen",
        points: [
          "Al je aandacht",
          "Twee spelletjes, van begin tot eind",
          "Twee keer het lievelingsspelletje",
          "Ruim 2 uur samen per week",
        ],
      },
      thirty: {
        title: "30 minuten samen spelen",
        points: [
          "Al je aandacht",
          "Drie spelletjes, van begin tot eind",
          "Een nieuw spelletje en een oude favoriet",
          "3½ uur samen per week",
        ],
      },
    },
    bad: {
      title: "Een uur ernaast zitten",
      points: [
        "Je hoofd zit half in je telefoon",
        "Je kind vraagt om het scherm",
        "Niets wordt afgemaakt",
        "Niemand onthoudt het",
      ],
    },
  },

  plan: {
    lines: {
      age: {
        "0-1": "Spelletjes voor een baby tot één jaar",
        "1-3": "Spelletjes voor een kind van 1 tot 3",
        "3-5": "Spelletjes voor een kind van 3 tot 5",
      },
      hardest: {
        afterwork: "Gezinstijd meteen na het werk",
        dinner: "Gezinstijd rond etenstijd",
        weekend: "Gezinstijd op weekendochtenden",
        bedtime: "Gezinstijd voor het slapengaan",
      },
      energy: {
        low: "Makkelijke spelletjes voor een lage batterij",
        okay: "Spelletjes voor een gewone dag",
        full: "Grotere spelletjes voor een volle batterij",
      },
      minutes: {
        ten: "Tien minuten per dag, telefoon weg",
        twenty: "Twintig minuten per dag, telefoon weg",
        thirty: "Een half uur per dag, telefoon weg",
      },
    },
    fallback: {
      age: "Spelletjes om samen te spelen",
      hardest: "Gezinstijd als de telefoon het vaakst wint",
      apps: "De apps die je erin zuigen op pauze",
      energy: "Spelletjes die passen bij je energie",
      minutes: "Elke dag een paar minuten, telefoon weg",
    },
    apps: "{apps} op pauze tijdens Gezinstijd",
  },

  account: {
    notConfigured: "Accounts zijn in deze omgeving niet ingesteld.",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "Wachtwoord (minstens 8 tekens)",
    busy: "Even geduld…",
    noPassword: "Geen wachtwoord nodig. We mailen je een code van 6 cijfers.",
    createAccount: "Account aanmaken",
    signIn: "Inloggen",
    or: "of",
    useCode: "Mail me liever een code",
    usePassword: "Liever met een wachtwoord",
    haveAccount: "Heb je al een account? Log in",
    newHere: "Nieuw hier? Maak een account aan",
    codeSent: "Code gestuurd naar {email}.",
    continue: "Verder",
    resendIn: "Opnieuw sturen over {seconds} s",
    resend: "Stuur een nieuwe code",
    changeEmail: "Ander e-mailadres",
    facebook: "Doorgaan met Facebook",
    apple: "Ga door met Apple",
    google: "Inloggen met Google",
  },

  authErrors: {
    link_failed: "Dat lukte niet. Vraag een nieuwe code aan.",
    not_configured: "Inloggen is niet ingesteld.",
    otp_expired: "Die code is verlopen of al gebruikt. Vraag een nieuwe aan.",
    over_email_send_rate_limit: "Te veel e-mails naar dit adres. Wacht een minuut en probeer het opnieuw.",
    over_request_rate_limit: "Te veel pogingen. Wacht een minuut en probeer het opnieuw.",
    invalid_credentials: "Dat e-mailadres en wachtwoord horen niet bij elkaar.",
    email_address_invalid: "Dat e-mailadres lijkt niet te kloppen.",
    weak_password: "Kies een langer wachtwoord.",
    user_already_exists: "Er is al een account met dit e-mailadres. Log liever in.",
    email_exists: "Er is al een account met dit e-mailadres. Log liever in.",
    unknown: "Er ging bij ons iets mis. Probeer het over een minuut opnieuw.",
  },

  legal: { terms: "Voorwaarden", privacy: "Privacybeleid" },

  paywall: {
    subhead: "Tien minuten spelen per dag die zelfbeheersing en geheugen trainen. Je apps wachten tot jullie klaar zijn.",
    nudge: {
      title: "10 minuten voor een pienter kind",
      body: "{game} staat klaar. Instagram kan wachten.",
      time: "nu",
    },
    game: {
      title: "Dokter Kind",
      skills: ["Geheugen", "Flexibel denken"],
      meta: "10 min · Liggend · 1–3 jaar",
    },
    pros: [
      "Je apps op pauze tijdens Gezinstijd",
      "Elke avond één makkelijk spelletje",
      "De planeet van je gezin groeit",
    ],
    plans: "Opties",
    monthly: "Maandelijks",
    yearly: "Jaarlijks",
    lifetime: "Levenslang",
    perMonth: "/ maand",
    perYear: "/ jaar",
    aMonth: "per maand",
    payOnce: "eenmalig",
    cancelAnytime: "Altijd opzegbaar",
    save: "Bespaar {percent}",
    billed: {
      yearly: "Je betaalt {price} per jaar",
      monthly: "Je betaalt {price} per maand",
      lifetime: "{price} eenmalig, voor altijd van jou",
    },
    refund: "Binnen 14 dagen je geld terug",
    continue: "Begin vanavond",
  },

  faq: {
    title: "Veelgestelde vragen",
    items: [
      {
        question: "Zit bij elke optie alles inbegrepen?",
        answer: "Ja. Elke optie geeft je precies hetzelfde Oyno: Gezinstijd, alle spelletjes en alle werelden. Alleen de manier van betalen verschilt.",
      },
      {
        question: "Welke telefoon gaat op pauze?",
        answer: "Die van jou. Oyno pauzeert de apps die jij kiest op de telefoon waar het op staat, tijdens de uren die jij instelt. Het houdt je kind niet in de gaten en legt je kind niets op.",
      },
      {
        question: "Wat gebeurt er als ik opzeg?",
        answer: "Je planeet en je rondjes blijven. Gezinstijd en nieuwe spelletjes stoppen. Opzeggen kan altijd, in de app of via de mail met je betaalbewijs.",
      },
      {
        question: "Kan ik mijn geld terugkrijgen?",
        answer: "Ja, binnen 14 dagen en zonder opgave van reden. Mail naar tim@oyno.app vanaf het adres waarmee je hebt betaald.",
      },
      {
        question: "Op welke apparaten werkt het?",
        answer: "Oyno is een iPhone-app. Installeer de app en log in met het account dat je hier aanmaakt.",
      },
      {
        question: "Wie regelt de betaling?",
        answer: "Dodo Payments, onze merchant of record (de officiële verkoper). Zij verwerken je kaart, rekenen de btw of omzetbelasting die je land heft en mailen je het betaalbewijs. Je kaartgegevens komen nooit bij ons.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno is een iPhone-app. Installeer de app en log in met dit account. Gefactureerd door Dodo Payments.",
    cancelAnytime: "Altijd opzegbaar.",
    notConfigured: "Betalen is in deze omgeving niet ingesteld.",
    needsAccount: "Toegang hoort bij een account, dus dat heb je eerst nodig.",
    createYours: "Maak er een aan",
    opening: "Het betaalformulier wordt klaargezet…",
    retry: "Dat ging niet open. Probeer het zo nog eens.",
    tryAgain: "Opnieuw proberen",
    failed: "Het betaalformulier is niet geladen. Laad de pagina opnieuw om het nog eens te proberen.",
    summary: "Je bestelling",
    discount: "Korting",
    tax: "Btw",
    total: "Totaal",
    renews: "Wordt verlengd voor {amount} / {cycle}. Altijd opzegbaar.",
    cycles: { month: "maand", year: "jaar" },
    once: "Eén betaling. Geen verlenging.",
  },

  done: {
    eyebrow: "Je bent binnen",
    headline: "Nu nog op je [telefoon]",
    body: "Installeer Oyno op je iPhone en log in met het account dat je net hebt gemaakt. Je abonnement zit er al aan vast, dus er wacht geen betaalscherm op je.",
    badge: "Download in de App Store",
    receipt: "Dodo Payments mailt je het betaalbewijs. Je abonnement beheer of zeg je op wanneer je wilt, in de app.",
  },
};
