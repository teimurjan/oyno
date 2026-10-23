import type { FunnelCopy } from "./types";

/** The German deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const de: FunnelCopy = {
  meta: {
    title: "Oyno: Handy weg, zehn Minuten spielen",
    description: "Pausiere deine Apps, während du mit deinem Kind zusammen bist, und hol dir jeden Tag ein einfaches Spiel. Erst abonnieren, dann in der App anmelden.",
  },

  chrome: {
    continue: "Weiter",
    letsGo: "Los geht’s",
    intro: "Ein paar Fragen · etwa eine Minute",
    back: "Zurück",
    progress: "Fortschritt",
  },

  openers: {
    headline: "Schon mal zu deinem Kind [„Moment noch“] gesagt und weiter aufs Handy geschaut?",
    yes: "Ja",
    no: "Eher nicht",
  },

  questions: {
    problem: {
      headline: "Was davon [passt zu deinen Abenden]?",
      options: {
        scroll: "Ich scrolle, statt zu spielen",
        ideas: "Ich bin zu müde für Spielideen",
        asks: "Mein Kind will mein Handy",
        both: "Wir hängen beide am Handy",
      },
    },
    age: {
      headline: "Wie alt ist dein jüngstes Kind?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "Wann [gewinnt das Handy] am häufigsten?",
      options: {
        afterwork: "Direkt nach der Arbeit",
        dinner: "Rund ums Abendessen",
        weekend: "Am Wochenende morgens",
        bedtime: "Vor dem Schlafengehen",
      },
    },
    pickups: {
      headline: "Wie oft greifst du [in einer Stunde] mit deinem Kind zum Handy?",
      options: {
        rare: "Fast nie",
        few: "Ein- oder zweimal",
        often: "Alle paar Minuten",
        lost: "Ich zähle nicht mehr mit",
      },
    },
    apps: {
      headline: "Welche Apps [ziehen dich immer wieder rein]?",
      description: "Wähle alle aus, die passen",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "Nachrichten",
        work: "E-Mail und Slack",
        games: "Spiele",
      },
    },
    energy: {
      headline: "Wie viel Energie hast du [um 18 Uhr] noch?",
      options: {
        low: "Akku fast leer",
        okay: "Geht so",
        full: "Jede Menge",
      },
    },
    ideas: {
      headline: "Weißt du meistens, [was ihr spielen könnt]?",
      options: {
        often: "Fast immer",
        sometimes: "Manchmal",
        rarely: "Selten, mir fällt nichts ein",
      },
    },
    tried: {
      headline: "Was hast du [schon probiert]?",
      options: {
        limits: "Bildschirmzeit-Limits",
        room: "Handy ins Nebenzimmer",
        delete: "Apps löschen",
        nothing: "Noch nichts",
      },
    },
    minutes: {
      headline: "Wie viele Minuten [am Tag] kannst du dir nehmen?",
      options: {
        ten: "10 Minuten",
        twenty: "20 Minuten",
        thirty: "30 Minuten oder mehr",
      },
    },
    soon: {
      headline: "Wann willst du deine Abende zurück?",
      options: {
        tonight: "Heute Abend",
        week: "Diese Woche",
        month: "Diesen Monat",
        unsure: "Weiß ich noch nicht",
      },
    },
  },

  steps: {
    why: {
      headline: "Es liegt nicht an dir. Apps sind [gemacht, um dich zurückzuholen].",
      body: "Hinter jeder App auf deinem Handy steckt ein Team, das dafür bezahlt wird, deine nächste Minute zu gewinnen. Gegen die hat deine Willenskraft um 18 Uhr keine faire Chance.",
      variants: {
        ideas: {
          headline: "Es liegt nicht an dir. Nach einem vollen Tag hat niemand [Spielideen].",
          body: "Also gewinnt das Einfachste im Raum, und das Einfachste im Raum ist ein Bildschirm.",
        },
        asks: {
          headline: "Es liegt nicht an dir. Kinder wollen, [was du anschaust].",
          body: "Ein Handy in deiner Hand ist das Spannendste im Raum. Leg es weg, und das Spannendste bist du.",
        },
        both: {
          headline: "Es liegt nicht an dir. Zwei Handys, und [im Raum wird es still].",
          body: "Jeder wartet, dass der andere sein Handy zuerst weglegt. Warten muss niemand, wenn beide Handys gleichzeitig Pause machen.",
        },
      },
    },
    evening: {
      headline: "Jedes „Moment noch“ [läppert sich].",
    },
    influence: {
      headline: "Je mehr wir scrollen, desto öfter [wollen Kinder an den Bildschirm].",
    },
    alternative: {
      headline: "Oyno [kämpft nicht] gegen deine Gewohnheit.",
      body: "Es gibt dir eine bessere Idee: ein kurzes Spiel mit deinem Kind, passend zu der Energie, die du noch hast.",
      variants: {
        low: {
          body: "Es gibt dir eine bessere Idee: ein kurzes, ruhiges Spiel, das auch mit fast leerem Akku klappt.",
        },
        full: {
          body: "Es gibt dir eine bessere Idee: ein Spiel mit deinem Kind, das die Energie nutzt, die du noch hast.",
        },
      },
    },
    enough: {
      headline: "Zehn Minuten [reichen].",
      body: "Kinder erinnern sich daran, dass du dich zu ihnen auf den Boden gesetzt hast, nicht daran, wie lange das Spiel ging. Oyno sucht eins aus, das in zehn Minuten passt und zu der Energie, die du noch hast.",
      variants: {
        twenty: {
          headline: "Zwanzig Minuten sind [reichlich].",
          body: "Kinder erinnern sich daran, dass du dich zu ihnen auf den Boden gesetzt hast, nicht daran, wie lange das Spiel ging. Oyno sucht eins aus, das in zwanzig Minuten passt und zu der Energie, die du noch hast.",
        },
        thirty: {
          headline: "Dreißig Minuten sind [mehr als genug].",
          body: "Kinder erinnern sich daran, dass du dich zu ihnen auf den Boden gesetzt hast, nicht daran, wie lange das Spiel ging. Oyno sucht eins aus, das zu deinem Abend passt und zu der Energie, die du noch hast.",
        },
      },
    },
    plan: {
      headline: "Wir erstellen [deinen Plan]",
    },
    account: {
      headline: "Dein Plan ist fertig. [Speichere ihn], um deinen Preis zu sehen.",
    },
    paywall: {
      headline: "Tausch das Scrollen gegen ein wacheres Kind.",
    },
    checkout: {
      headline: "Zahlungsdaten.",
    },
  },

  evening: {
    caption: "Ein Abend unter der Woche",
    hours: ["16 Uhr", "17 Uhr", "18 Uhr", "19 Uhr", "20 Uhr"],
    kid: "Zeit mit deinem Kind",
    phone: "Handy",
    summary: "{n}-mal „Moment noch“ in der Zeit mit deinem Kind",
  },

  influence: {
    caption: "Kinder von 2 bis 5, die ständig nach einem Bildschirm fragen",
    bars: ["Unter 1,3 Std.", "1,3 bis 3 Std.", "Über 3 Std."],
    axis: "Social Media der Eltern pro Tag",
    summary: "Doppelt so häufig, wenn ein Elternteil 3+ Stunden am Tag auf Social Media ist",
    source: "Domoff et al., 2021 · 383 Familien in den USA",
  },

  alternative: {
    eyebrow: "Ein einfaches Spiel",
    age: "3–5 Jahre",
    title: "Stopp bei vier",
    minutes: "8 Min.",
    tags: {
      "lying-down": "Im Liegen",
      quiet: "Ruhig",
      "nothing-to-grab": "Ohne Material",
    },
    blurb: "Gut für ein Kind, das alles zählt, ein dunkles Schlafzimmer und dich, wenn du gerade noch bis zehn zählen kannst.",
    why: "Warum es wirkt",
    skills: {
      "inhibitory-control": "Selbstkontrolle",
      "working-memory": "Arbeitsgedächtnis",
    },
  },

  compare: {
    good: {
      ten: {
        title: "10 Minuten gemeinsam spielen",
        points: [
          "Deine volle Aufmerksamkeit",
          "Ein Spiel, von Anfang bis Ende",
          "Dein Kind führt, du machst mit",
          "70 Minuten zusammen pro Woche",
        ],
      },
      twenty: {
        title: "20 Minuten gemeinsam spielen",
        points: [
          "Deine volle Aufmerksamkeit",
          "Zwei Spiele, von Anfang bis Ende",
          "Zweimal Zeit fürs Lieblingsspiel",
          "Über 2 Stunden zusammen pro Woche",
        ],
      },
      thirty: {
        title: "30 Minuten gemeinsam spielen",
        points: [
          "Deine volle Aufmerksamkeit",
          "Drei Spiele, von Anfang bis Ende",
          "Ein neues Spiel und ein Lieblingsspiel",
          "3½ Stunden zusammen pro Woche",
        ],
      },
    },
    bad: {
      title: "Eine Stunde nur danebensitzen",
      points: [
        "Mit dem Kopf halb am Handy",
        "Dein Kind will den Bildschirm",
        "Nichts wird zu Ende gespielt",
        "Niemand erinnert sich daran",
      ],
    },
  },

  plan: {
    lines: {
      age: {
        "0-1": "Spiele für ein Baby bis 1 Jahr",
        "1-3": "Spiele für 1- bis 3-Jährige",
        "3-5": "Spiele für 3- bis 5-Jährige",
      },
      hardest: {
        afterwork: "Familienzeit direkt nach der Arbeit",
        dinner: "Familienzeit rund ums Abendessen",
        weekend: "Familienzeit am Wochenende morgens",
        bedtime: "Familienzeit vor dem Schlafengehen",
      },
      energy: {
        low: "Leichte Spiele für einen fast leeren Akku",
        okay: "Spiele für einen normalen Tag",
        full: "Größere Spiele für einen vollen Akku",
      },
      minutes: {
        ten: "Zehn Minuten am Tag, Handy weg",
        twenty: "Zwanzig Minuten am Tag, Handy weg",
        thirty: "Eine halbe Stunde am Tag, Handy weg",
      },
    },
    fallback: {
      age: "Spiele, die ihr zusammen spielen könnt",
      hardest: "Familienzeit, wenn das Handy am häufigsten gewinnt",
      apps: "Pause für die Apps, die dich reinziehen",
      energy: "Spiele passend zu deiner Energie",
      minutes: "Ein paar Minuten am Tag, Handy weg",
    },
    apps: "In der Familienzeit pausiert: {apps}",
  },

  account: {
    notConfigured: "Konten sind in dieser Umgebung nicht eingerichtet.",
    emailPlaceholder: "du@example.com",
    passwordPlaceholder: "Passwort (mind. 8 Zeichen)",
    busy: "Einen Moment…",
    noPassword: "Kein Passwort nötig. Wir schicken dir einen 6-stelligen Code per E-Mail.",
    createAccount: "Konto erstellen",
    signIn: "Anmelden",
    or: "oder",
    useCode: "Lieber einen Code per E-Mail",
    usePassword: "Lieber mit Passwort",
    haveAccount: "Schon ein Konto? Anmelden",
    newHere: "Neu hier? Konto erstellen",
    codeSent: "Code an {email} gesendet.",
    continue: "Weiter",
    resendIn: "Erneut senden in {seconds} s",
    resend: "Neuen Code senden",
    changeEmail: "E-Mail ändern",
    facebook: "Mit Facebook fortfahren",
    apple: "Mit Apple fortfahren",
    google: "Über Google anmelden",
  },

  authErrors: {
    link_failed: "Das hat nicht geklappt. Fordere einen neuen Code an.",
    not_configured: "Die Anmeldung ist nicht eingerichtet.",
    otp_expired: "Der Code ist abgelaufen oder wurde schon verwendet. Fordere einen neuen an.",
    over_email_send_rate_limit: "Zu viele E-Mails an diese Adresse. Warte eine Minute und versuch es noch mal.",
    over_request_rate_limit: "Zu viele Versuche. Warte eine Minute und versuch es noch mal.",
    invalid_credentials: "E-Mail und Passwort passen nicht zusammen.",
    email_address_invalid: "Diese E-Mail-Adresse sieht nicht richtig aus.",
    weak_password: "Wähle ein längeres Passwort.",
    user_already_exists: "Mit dieser E-Mail gibt es schon ein Konto. Melde dich stattdessen an.",
    email_exists: "Mit dieser E-Mail gibt es schon ein Konto. Melde dich stattdessen an.",
    unknown: "Bei uns ist etwas schiefgelaufen. Versuch es in einer Minute noch mal.",
  },

  legal: { terms: "AGB", privacy: "Datenschutzerklärung" },

  paywall: {
    subhead: "Zehn Minuten Spiel am Tag, die Selbstkontrolle und Gedächtnis trainieren. Deine Apps warten, bis ihr fertig seid.",
    nudge: {
      title: "10 Minuten für ein wacheres Kind",
      body: "{game} ist bereit. Instagram kann warten.",
      time: "jetzt",
    },
    game: {
      title: "Kinderdoktor",
      skills: ["Gedächtnis", "Flexibles Denken"],
      meta: "10 Min. · Im Liegen · 1–3 Jahre",
    },
    pros: [
      "Deine Apps pausieren in der Familienzeit",
      "Jeden Abend ein leichtes Spiel",
      "Der Planet deiner Familie wächst",
    ],
    plans: "Tarife",
    monthly: "Monatlich",
    yearly: "Jährlich",
    lifetime: "Lebenslang",
    perMonth: "/ Monat",
    perYear: "/ Jahr",
    aMonth: "im Monat",
    payOnce: "einmal zahlen",
    cancelAnytime: "Jederzeit kündbar",
    save: "{percent} sparen",
    billed: {
      yearly: "{price} jährlich abgerechnet",
      monthly: "{price} monatlich abgerechnet",
      lifetime: "{price} einmalig, für immer deins",
    },
    refund: "Volle Erstattung innerhalb von 14 Tagen",
    continue: "Heute Abend starten",
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        question: "Ist in jedem Tarif alles drin?",
        answer: "Ja. Jeder Tarif schaltet dasselbe Oyno frei: Familienzeit, alle Spiele und alle Welten. Nur die Zahlweise ist anders.",
      },
      {
        question: "Wessen Handy wird pausiert?",
        answer: "Deins. Oyno pausiert die Apps, die du auswählst, auf dem Handy, auf dem es installiert ist, und zwar zu den Zeiten, die du festlegst. Dein Kind wird weder überwacht noch eingeschränkt.",
      },
      {
        question: "Was passiert, wenn ich kündige?",
        answer: "Dein Planet und deine Runden bleiben. Familienzeit und neue Spiele enden. Kündigen kannst du jederzeit in der App oder über die E-Mail mit deinem Zahlungsbeleg.",
      },
      {
        question: "Bekomme ich mein Geld zurück?",
        answer: "Ja, innerhalb von 14 Tagen und ohne Angabe von Gründen. Schreib an tim@oyno.app, und zwar von der Adresse, mit der du bezahlt hast.",
      },
      {
        question: "Auf welchen Geräten läuft Oyno?",
        answer: "Oyno ist eine iPhone-App. Installiere sie und melde dich mit dem Konto an, das du hier erstellst.",
      },
      {
        question: "Wer wickelt die Zahlung ab?",
        answer: "Dodo Payments, als Merchant of Record unser offizieller Verkäufer. Dodo nimmt die Karte entgegen, berechnet die Umsatz- oder Mehrwertsteuer deines Landes und schickt dir den Beleg per E-Mail. Deine Kartendaten erreichen uns nie.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno ist eine iPhone-App. Installiere sie und melde dich mit diesem Konto an. Abgerechnet über Dodo Payments.",
    cancelAnytime: "Jederzeit kündbar.",
    notConfigured: "Die Bezahlung ist in dieser Umgebung nicht eingerichtet.",
    needsAccount: "Der Zugang hängt an einem Konto, deshalb brauchst du zuerst eins.",
    createYours: "Konto erstellen",
    opening: "Zahlungsformular wird vorbereitet…",
    retry: "Das hat sich nicht geöffnet. Versuch es gleich noch mal.",
    tryAgain: "Noch mal versuchen",
    failed: "Das Zahlungsformular wurde nicht geladen. Lade die Seite neu, um es noch mal zu versuchen.",
    summary: "Bestellübersicht",
    discount: "Rabatt",
    tax: "Steuer",
    total: "Gesamt",
    renews: "Verlängert sich für {amount} / {cycle}. Jederzeit kündbar.",
    cycles: { month: "Monat", year: "Jahr" },
    once: "Eine Zahlung. Keine Verlängerung.",
  },

  done: {
    eyebrow: "Du bist dabei",
    headline: "Jetzt noch [aufs Handy] damit",
    body: "Installiere Oyno auf deinem iPhone und melde dich mit dem Konto an, das du gerade erstellt hast. Dein Abo ist schon damit verknüpft, also wartet keine Bezahlseite auf dich.",
    badge: "Laden im App Store",
    receipt: "Dodo Payments schickt dir den Beleg per E-Mail. Dein Abo verwaltest oder kündigst du jederzeit in der App.",
  },
};
