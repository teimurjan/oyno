import type { FunnelCopy } from "./types";

/** The Italian deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const it: FunnelCopy = {
  meta: {
    title: "Oyno: metti giù il telefono e gioca dieci minuti",
    description: "Metti in pausa le app quando stai con il tuo bambino e ricevi un gioco facile al giorno. Abbonati, poi accedi dall’app.",
  },

  chrome: {
    continue: "Continua",
    letsGo: "Iniziamo",
    intro: "Qualche domanda · circa un minuto",
    back: "Indietro",
    progress: "Avanzamento",
  },

  openers: {
    headline: "Hai mai detto [“un attimo”] al tuo bambino e sei rimasto sul telefono?",
    yes: "Sì",
    no: "Non proprio",
  },

  questions: {
    problem: {
      headline: "Quale di queste [somiglia alle tue serate]?",
      options: {
        scroll: "Scorro il feed invece di giocare",
        ideas: "Non ho la forza di inventare un gioco",
        asks: "Il mio bambino mi chiede il telefono",
        both: "Siamo tutti e due al telefono",
      },
    },
    age: {
      headline: "Quanti anni ha il più piccolo?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "Quando il telefono [vince più spesso]?",
      options: {
        afterwork: "Appena finito il lavoro",
        dinner: "Verso l’ora di cena",
        weekend: "Le mattine del weekend",
        bedtime: "Prima della nanna",
      },
    },
    pickups: {
      headline: "Quante volte prendi in mano il telefono [in un’ora] quando state insieme?",
      options: {
        rare: "Quasi mai",
        few: "Una o due volte",
        often: "Ogni due per tre",
        lost: "Perdo il conto",
      },
    },
    apps: {
      headline: "Quali app [ti risucchiano]?",
      description: "Scegli tutte quelle che ti riguardano",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "Notizie",
        work: "Email e Slack",
        games: "Giochi",
      },
    },
    energy: {
      headline: "Quanta energia ti resta [alle 18]?",
      options: {
        low: "Batteria scarica",
        okay: "Così così",
        full: "Tanta",
      },
    },
    ideas: {
      headline: "Di solito sai [a cosa giocare] con il tuo bambino?",
      options: {
        often: "Quasi sempre",
        sometimes: "A volte",
        rarely: "Di rado, ho il vuoto",
      },
    },
    tried: {
      headline: "Cosa hai [già provato]?",
      options: {
        limits: "Limiti di Tempo di utilizzo",
        room: "Telefono in un’altra stanza",
        delete: "Cancellare le app",
        nothing: "Niente, per ora",
      },
    },
    minutes: {
      headline: "Quanti minuti [al giorno] potresti dedicarci?",
      options: {
        ten: "10 minuti",
        twenty: "20 minuti",
        thirty: "30 minuti o più",
      },
    },
    soon: {
      headline: "Quando vuoi riprenderti le serate?",
      options: {
        tonight: "Stasera stessa",
        week: "Questa settimana",
        month: "Questo mese",
        unsure: "Non lo so ancora",
      },
    },
  },

  steps: {
    why: {
      headline: "Non è colpa tua. Le app sono [fatte per risucchiarti].",
      body: "Dietro ogni app sul tuo telefono c’è un team pagato per conquistare il tuo prossimo minuto. Alle sei di sera la forza di volontà parte già sconfitta.",
      variants: {
        ideas: {
          headline: "Non è colpa tua. Dopo una giornata piena nessuno ha [idee per giocare].",
          body: "Così vince la cosa più facile nella stanza, e la cosa più facile nella stanza è uno schermo.",
        },
        asks: {
          headline: "Non è colpa tua. I bambini vogliono [quello che guardi tu].",
          body: "Il telefono che hai in mano è la cosa più interessante della stanza. Mettilo giù e la cosa più interessante diventi tu.",
        },
        both: {
          headline: "Non è colpa tua. Due telefoni fanno [una stanza muta].",
          body: "Ognuno aspetta che l’altro metta giù il telefono per primo. Nessuno deve aspettare se entrambi i telefoni vanno in pausa insieme.",
        },
      },
    },
    evening: {
      headline: "Ogni “un attimo” [si accumula].",
    },
    promise: {
      headline: "E se tutti quegli “un attimo” diventassero [un gioco]?",
      body: "Oyno ti propone un gioco facile da fare insieme, pronto quando inizia la vostra serata. Qualche domanda e si adatta al tuo bambino e alle vostre serate.",
    },
    influence: {
      headline: "Più scorriamo noi, più i bambini [chiedono schermi].",
    },
    alternative: {
      headline: "Oyno [non combatte] un’abitudine che hai già.",
      body: "Ti dà un’idea migliore: un gioco breve con il tuo bambino, su misura per l’energia che ti resta.",
      variants: {
        low: {
          body: "Ti dà un’idea migliore: un gioco breve e tranquillo, che si fa anche a batteria scarica.",
        },
        full: {
          body: "Ti dà un’idea migliore: un gioco con il tuo bambino che sfrutta l’energia che hai ancora.",
        },
      },
    },
    enough: {
      headline: "Dieci minuti [bastano].",
      body: "I bambini ricordano il genitore che si è seduto per terra con loro, non quanto è durato il gioco. Oyno ne sceglie uno da dieci minuti, adatto all’energia che ti resta.",
      variants: {
        twenty: {
          headline: "Venti minuti [sono tantissimi].",
          body: "I bambini ricordano il genitore che si è seduto per terra con loro, non quanto è durato il gioco. Oyno ne sceglie uno da venti minuti, adatto all’energia che ti resta.",
        },
        thirty: {
          headline: "Mezz’ora è [più che abbastanza].",
          body: "I bambini ricordano il genitore che si è seduto per terra con loro, non quanto è durato il gioco. Oyno ne sceglie uno adatto alla tua serata e all’energia che ti resta.",
        },
      },
    },
    plan: {
      headline: "Stiamo creando [il tuo piano]",
    },
    account: {
      headline: "Il tuo piano è pronto. [Salvalo] per vedere il prezzo.",
    },
    paywall: {
      headline: "Scambia lo scroll con un bambino più sveglio.",
    },
    checkout: {
      headline: "Dati di pagamento.",
    },
  },

  evening: {
    caption: "Una sera qualunque in settimana",
    hours: ["16:00", "17:00", "18:00", "19:00", "20:00"],
    kid: "Tempo con il bambino",
    phone: "Telefono",
    summary: "{n} volte “un attimo” mentre sei con il tuo piccolo",
  },

  promise: {
    caption: "La stessa serata, con Oyno",
    summary: "Un gioco, tutta la tua attenzione",
    games: [
      { title: "Il pappagallo", minutes: "5 min", tag: "Senza oggetti" },
      { title: "Lo zoo delle ombre", minutes: "8 min", tag: "Da sdraiati" },
      { title: "Zitti al quattro", minutes: "8 min", tag: "Tranquillo" },
    ],
  },

  influence: {
    caption: "Bambini di 2–5 anni che chiedono sempre uno schermo",
    bars: ["Meno di 1,3 h", "Da 1,3 a 3 h", "Oltre 3 h"],
    axis: "Ore di social del genitore al giorno",
    summary: "Il doppio delle probabilità se un genitore sta sui social più di 3 ore al giorno",
    source: "Domoff et al., 2021 · 383 famiglie statunitensi",
  },

  alternative: {
    eyebrow: "Un gioco semplice",
    age: "Età 3–5",
    title: "Zitti al quattro",
    minutes: "8 min",
    tags: {
      "lying-down": "Da sdraiati",
      quiet: "Tranquillo",
      "nothing-to-grab": "Senza oggetti",
    },
    blurb: "Perfetto per un bambino che conta tutto, una cameretta al buio e un genitore che ce la fa giusto a contare fino a dieci.",
    why: "Perché funziona",
    skills: {
      "inhibitory-control": "Autocontrollo",
      "working-memory": "Memoria di lavoro",
    },
  },

  compare: {
    good: {
      ten: {
        title: "Un gioco insieme da 10 minuti",
        points: [
          "Tutta la tua attenzione",
          "Un gioco, dall’inizio alla fine",
          "Il tuo bambino guida, tu segui",
          "70 minuti insieme a settimana",
        ],
      },
      twenty: {
        title: "20 minuti di gioco insieme",
        points: [
          "Tutta la tua attenzione",
          "Due giochi, dall’inizio alla fine",
          "Il suo gioco preferito, due volte",
          "Più di 2 ore insieme a settimana",
        ],
      },
      thirty: {
        title: "30 minuti di gioco insieme",
        points: [
          "Tutta la tua attenzione",
          "Tre giochi, dall’inizio alla fine",
          "Un gioco nuovo e un vecchio preferito",
          "3 ore e mezza insieme a settimana",
        ],
      },
    },
    bad: {
      title: "Un’ora seduti lì accanto",
      points: [
        "Con la testa sei sul telefono",
        "Il tuo bambino chiede lo schermo",
        "Niente arriva alla fine",
        "Nessuno se ne ricorderà",
      ],
    },
  },

  plan: {
    lines: {
      age: {
        "0-1": "Giochi per un bebè fino a un anno",
        "1-3": "Giochi per un bambino da 1 a 3 anni",
        "3-5": "Giochi per un bambino da 3 a 5 anni",
      },
      hardest: {
        afterwork: "Tempo in famiglia appena finito il lavoro",
        dinner: "Tempo in famiglia verso l’ora di cena",
        weekend: "Tempo in famiglia le mattine del weekend",
        bedtime: "Tempo in famiglia prima della nanna",
      },
      energy: {
        low: "Giochi facili a batteria scarica",
        okay: "Giochi per una giornata così così",
        full: "Giochi più movimentati a batteria carica",
      },
      minutes: {
        ten: "Dieci minuti al giorno, senza telefono",
        twenty: "Venti minuti al giorno, senza telefono",
        thirty: "Mezz’ora al giorno, senza telefono",
      },
    },
    fallback: {
      age: "Giochi da fare insieme",
      hardest: "Tempo in famiglia quando il telefono vince",
      apps: "In pausa le app che ti risucchiano",
      energy: "Giochi su misura per la tua energia",
      minutes: "Qualche minuto al giorno, senza telefono",
    },
    apps: "In pausa durante il Tempo in famiglia: {apps}",
  },

  account: {
    notConfigured: "Gli account non sono configurati in questo ambiente.",
    emailPlaceholder: "nome@example.com",
    passwordPlaceholder: "Password (almeno 8 caratteri)",
    busy: "Un attimo…",
    noPassword: "Niente password. Ti mandiamo via email un codice di 6 cifre.",
    createAccount: "Crea account",
    signIn: "Accedi",
    or: "oppure",
    useCode: "Mandami un codice via email",
    usePassword: "Usa una password",
    haveAccount: "Hai già un account? Accedi",
    newHere: "Prima volta qui? Crea un account",
    codeSent: "Codice inviato a {email}.",
    continue: "Continua",
    resendIn: "Reinvia tra {seconds} s",
    resend: "Invia un nuovo codice",
    changeEmail: "Cambia email",
    facebook: "Continua con Facebook",
    apple: "Continua con Apple",
    google: "Accedi con Google",
  },

  authErrors: {
    link_failed: "Non ha funzionato. Richiedi un nuovo codice.",
    not_configured: "L’accesso non è configurato.",
    otp_expired: "Il codice è scaduto o è già stato usato. Richiedine uno nuovo.",
    over_email_send_rate_limit: "Troppe email a questo indirizzo. Aspetta un minuto e riprova.",
    over_request_rate_limit: "Troppi tentativi. Aspetta un minuto e riprova.",
    invalid_credentials: "Email e password non corrispondono.",
    email_address_invalid: "Questo indirizzo email non sembra corretto.",
    weak_password: "Scegli una password più lunga.",
    user_already_exists: "Esiste già un account con questa email. Accedi.",
    email_exists: "Esiste già un account con questa email. Accedi.",
    unknown: "Qualcosa è andato storto da parte nostra. Riprova tra un minuto.",
  },

  legal: { terms: "Termini", privacy: "Informativa sulla privacy" },

  paywall: {
    subhead: "Dieci minuti di gioco al giorno che allenano autocontrollo e memoria. Le tue app aspettano che abbiate finito.",
    nudge: {
      title: "10 minuti per un bambino più sveglio",
      body: "{game} è pronto. Instagram può aspettare.",
      time: "ora",
    },
    game: {
      title: "Il piccolo dottore",
      skills: ["Memoria", "Flessibilità mentale"],
      meta: "10 min · Da sdraiati · 1–3 anni",
    },
    pros: [
      "Le tue app in pausa durante il Tempo in famiglia",
      "Un gioco facile ogni sera",
      "Il pianeta della tua famiglia che cresce",
    ],
    plans: "Piani",
    monthly: "Mensile",
    yearly: "Annuale",
    lifetime: "A vita",
    perMonth: "/ mese",
    perYear: "/ anno",
    aMonth: "al mese",
    payOnce: "una tantum",
    cancelAnytime: "Disdici quando vuoi",
    save: "Risparmi il {percent}",
    billed: {
      yearly: "Addebito di {price} all’anno",
      monthly: "Addebito di {price} al mese",
      lifetime: "{price} una volta, tuo per sempre",
    },
    refund: "Rimborso completo entro 14 giorni",
    continue: "Inizia stasera",
  },

  faq: {
    title: "Domande frequenti",
    items: [
      {
        question: "Ogni piano include tutto?",
        answer: "Sì. Ogni piano sblocca lo stesso Oyno: Tempo in famiglia, tutti i giochi e tutti i mondi. Cambia solo il modo in cui paghi.",
      },
      {
        question: "Il telefono di chi viene messo in pausa?",
        answer: "Il tuo. Oyno mette in pausa le app che scegli sul telefono su cui è installato, nelle ore che imposti tu. Non controlla e non limita il tuo bambino.",
      },
      {
        question: "Cosa succede se disdico?",
        answer: "Il tuo pianeta e le tue partite restano. Il Tempo in famiglia e i nuovi giochi si fermano. Puoi disdire quando vuoi dall’app o dall’email con la ricevuta.",
      },
      {
        question: "Posso avere un rimborso?",
        answer: "Sì, entro 14 giorni e senza dover dare spiegazioni. Scrivi a tim@oyno.app dall’indirizzo con cui hai pagato.",
      },
      {
        question: "Su quali dispositivi funziona?",
        answer: "Oyno è un’app per iPhone. Installala e accedi con l’account che crei qui.",
      },
      {
        question: "Chi gestisce il pagamento?",
        answer: "Dodo Payments, il nostro merchant of record (il venditore ufficiale). Riceve il pagamento con carta, aggiunge l’IVA o l’imposta sulle vendite del tuo Paese e ti manda la ricevuta via email. I dati della tua carta non arrivano mai a noi.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno è un’app per iPhone. Installala e accedi con questo account. Addebito tramite Dodo Payments.",
    cancelAnytime: "Disdici quando vuoi.",
    notConfigured: "Il pagamento non è configurato in questo ambiente.",
    needsAccount: "L’accesso è legato a un account, quindi prima serve crearne uno.",
    createYours: "Crea il tuo",
    opening: "Stiamo preparando il modulo di pagamento…",
    retry: "Non si è aperto. Riprova tra un momento.",
    tryAgain: "Riprova",
    failed: "Il modulo di pagamento non si è caricato. Ricarica la pagina per riprovare.",
    summary: "Riepilogo ordine",
    discount: "Sconto",
    tax: "Imposte",
    total: "Totale",
    renews: "Si rinnova a {amount} / {cycle}. Disdici quando vuoi.",
    cycles: { month: "mese", year: "anno" },
    once: "Un solo pagamento. Nessun rinnovo.",
  },

  done: {
    eyebrow: "Ci siamo",
    headline: "Ora installalo sul tuo [telefono]",
    body: "Installa Oyno sul tuo iPhone e accedi con l’account che hai appena creato. Il tuo piano è già collegato, quindi non ti aspetta nessun paywall.",
    badge: "Scarica su App Store",
    receipt: "Dodo Payments ti manderà la ricevuta via email. Puoi gestire o disdire l’abbonamento quando vuoi dall’app.",
  },
};
