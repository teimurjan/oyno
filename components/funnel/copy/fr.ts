import type { FunnelCopy } from "./types";

/** The French deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const fr: FunnelCopy = {
  meta: {
    title: "Oyno : posez le téléphone, jouez dix minutes",
    description: "Vos apps en pause pendant le temps avec votre enfant, et un jeu simple par jour. Abonnez-vous, puis connectez-vous dans l’app.",
  },

  chrome: {
    continue: "Continuer",
    letsGo: "C’est parti",
    intro: "Quelques questions · environ une minute",
    back: "Retour",
    progress: "Progression",
  },

  openers: {
    headline: "Déjà dit [« deux secondes »] à votre enfant sans lâcher votre téléphone ?",
    yes: "Oui",
    no: "Pas vraiment",
  },

  questions: {
    problem: {
      headline: "Qu’est-ce qui [ressemble à vos soirées] ?",
      options: {
        scroll: "Je scrolle au lieu de jouer",
        ideas: "Pas la force d’inventer un jeu",
        asks: "Mon enfant réclame mon téléphone",
        both: "On est chacun sur son téléphone",
      },
    },
    age: {
      headline: "Quel âge a votre plus jeune ?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "À quel moment le téléphone [l’emporte le plus] ?",
      options: {
        afterwork: "Juste après le travail",
        dinner: "Autour du dîner",
        weekend: "Les matins du week-end",
        bedtime: "Avant le coucher",
      },
    },
    pickups: {
      headline: "Combien de fois prenez-vous votre téléphone [en une heure] avec votre enfant ?",
      options: {
        rare: "Presque jamais",
        few: "Une ou deux fois",
        often: "Toutes les cinq minutes",
        lost: "Je ne compte plus",
      },
    },
    apps: {
      headline: "Quelles apps [vous font replonger] ?",
      description: "Plusieurs choix possibles",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "Actualités",
        work: "Mails et Slack",
        games: "Jeux",
      },
    },
    energy: {
      headline: "Combien d’énergie vous reste-t-il [à 18 h] ?",
      options: {
        low: "Batterie faible",
        okay: "Ça va",
        full: "À bloc",
      },
    },
    ideas: {
      headline: "Savez-vous en général [à quoi jouer] avec votre enfant ?",
      options: {
        often: "Presque toujours",
        sometimes: "Parfois",
        rarely: "Rarement, c’est le trou noir",
      },
    },
    tried: {
      headline: "Qu’avez-vous [déjà essayé] ?",
      options: {
        limits: "Les limites de Temps d’écran",
        room: "Le téléphone dans une autre pièce",
        delete: "Supprimer des apps",
        nothing: "Rien pour l’instant",
      },
    },
    minutes: {
      headline: "Combien de minutes [par jour] pourriez-vous y consacrer ?",
      options: {
        ten: "10 minutes",
        twenty: "20 minutes",
        thirty: "30 minutes ou plus",
      },
    },
    soon: {
      headline: "Quand voulez-vous retrouver vos soirées ?",
      options: {
        tonight: "Dès ce soir",
        week: "Cette semaine",
        month: "Ce mois-ci",
        unsure: "Je ne sais pas encore",
      },
    },
  },

  steps: {
    why: {
      headline: "Ce n’est pas vous. Les apps sont [faites pour vous retenir].",
      body: "Chaque app de votre téléphone a une équipe payée pour gagner votre prochaine minute. À 18 h, la volonté ne fait pas le poids.",
      variants: {
        ideas: {
          headline: "Ce n’est pas vous. Après une longue journée, personne n’a [d’idées de jeux].",
          body: "Alors c’est le plus facile qui gagne. Et le plus facile, c’est l’écran.",
        },
        asks: {
          headline: "Ce n’est pas vous. Les enfants veulent [ce que vous regardez].",
          body: "Un téléphone dans votre main, c’est ce qu’il y a de plus intéressant dans la pièce. Posez-le, et ce sera vous.",
        },
        both: {
          headline: "Ce n’est pas vous. Deux téléphones, et [la pièce se tait].",
          body: "Chacun attend que l’autre pose le sien en premier. Plus besoin d’attendre si les deux téléphones se mettent en pause en même temps.",
        },
      },
    },
    evening: {
      headline: "Chaque « deux secondes » [s’additionne].",
    },
    promise: {
      headline: "Et si tous ces « deux secondes » devenaient [des jeux faciles] ?",
    },
    influence: {
      headline: "Plus on scrolle, plus les enfants [réclament un écran].",
    },
    alternative: {
      headline: "Oyno ne cherche pas à [casser] votre habitude.",
      body: "Il vous donne une meilleure idée : un jeu court avec votre enfant, à la mesure de l’énergie qui vous reste.",
      variants: {
        low: {
          body: "Il vous donne une meilleure idée : un jeu court et calme, même avec une batterie faible.",
        },
        full: {
          body: "Il vous donne une meilleure idée : un jeu avec votre enfant qui profite de l’énergie qui vous reste.",
        },
      },
    },
    enough: {
      headline: "Dix minutes, [ça suffit].",
      body: "Les enfants se souviennent du parent qui s’est assis par terre avec eux, pas de la durée du jeu. Oyno en choisit un qui tient en dix minutes, à la mesure de l’énergie qui vous reste.",
      variants: {
        twenty: {
          headline: "Vingt minutes, [c’est déjà beaucoup].",
          body: "Les enfants se souviennent du parent qui s’est assis par terre avec eux, pas de la durée du jeu. Oyno en choisit un qui tient en vingt minutes, à la mesure de l’énergie qui vous reste.",
        },
        thirty: {
          headline: "Trente minutes, [c’est plus que suffisant].",
          body: "Les enfants se souviennent du parent qui s’est assis par terre avec eux, pas de la durée du jeu. Oyno en choisit un qui va avec votre soirée et l’énergie qui vous reste.",
        },
      },
    },
    plan: {
      headline: "On prépare [votre programme]",
    },
    account: {
      headline: "Votre programme est prêt. [Enregistrez-le] pour voir votre tarif.",
    },
    paywall: {
      headline: "Échangez le scroll contre un enfant plus vif.",
    },
    checkout: {
      headline: "Informations de paiement.",
    },
  },

  evening: {
    caption: "Un soir de semaine",
    hours: ["16 h", "17 h", "18 h", "19 h", "20 h"],
    kid: "Temps avec votre enfant",
    phone: "Téléphone",
    summary: "{n} « deux secondes » pendant le temps avec votre tout-petit",
  },

  promise: {
    caption: "La même soirée, avec Oyno",
    summary: "Un jeu, toute votre attention",
    games: [
      { title: "Petit singe", minutes: "5 min", tag: "Sans matériel" },
      { title: "Le zoo des ombres", minutes: "8 min", tag: "Allongés" },
      { title: "Chut au quatre", minutes: "8 min", tag: "Au calme" },
    ],
  },

  influence: {
    caption: "Enfants de 2 à 5 ans qui réclament sans cesse un écran",
    bars: ["Moins de 1,3 h", "1,3 à 3 h", "Plus de 3 h"],
    axis: "Réseaux sociaux du parent par jour",
    summary: "Deux fois plus fréquent quand un parent passe plus de 3 h par jour sur les réseaux",
    source: "Domoff et al., 2021 · 383 familles américaines",
  },

  alternative: {
    eyebrow: "Un jeu tout simple",
    age: "3–5 ans",
    title: "Chut au quatre",
    minutes: "8 min",
    tags: {
      "lying-down": "Allongés",
      quiet: "Au calme",
      "nothing-to-grab": "Sans matériel",
    },
    blurb: "Idéal pour un enfant qui compte tout, une chambre dans le noir et un parent qui peut encore aller jusqu’à dix.",
    why: "Pourquoi ça marche",
    skills: {
      "inhibitory-control": "Maîtrise de soi",
      "working-memory": "Mémoire de travail",
    },
  },

  compare: {
    good: {
      ten: {
        title: "Un jeu de 10 minutes ensemble",
        points: [
          "Toute votre attention",
          "Un jeu, du début à la fin",
          "Votre enfant mène, vous suivez",
          "70 minutes ensemble par semaine",
        ],
      },
      twenty: {
        title: "20 minutes de jeu ensemble",
        points: [
          "Toute votre attention",
          "Deux jeux, du début à la fin",
          "Son jeu préféré, deux fois",
          "Plus de 2 h ensemble par semaine",
        ],
      },
      thirty: {
        title: "30 minutes de jeu ensemble",
        points: [
          "Toute votre attention",
          "Trois jeux, du début à la fin",
          "Un nouveau jeu et un grand classique",
          "3 h 30 ensemble par semaine",
        ],
      },
    },
    bad: {
      title: "Une heure à côté, sans être là",
      points: [
        "La tête dans le téléphone",
        "Votre enfant réclame l’écran",
        "Rien ne va jusqu’au bout",
        "Personne ne s’en souvient",
      ],
    },
  },

  plan: {
    lines: {
      age: {
        "0-1": "Des jeux pour un bébé jusqu’à 1 an",
        "1-3": "Des jeux pour un enfant de 1 à 3 ans",
        "3-5": "Des jeux pour un enfant de 3 à 5 ans",
      },
      hardest: {
        afterwork: "Temps en famille juste après le travail",
        dinner: "Temps en famille autour du dîner",
        weekend: "Temps en famille les matins du week-end",
        bedtime: "Temps en famille avant le coucher",
      },
      energy: {
        low: "Des jeux faciles pour une batterie faible",
        okay: "Des jeux pour un jour ordinaire",
        full: "Des jeux plus actifs pour une batterie pleine",
      },
      minutes: {
        ten: "Dix minutes par jour, téléphone posé",
        twenty: "Vingt minutes par jour, téléphone posé",
        thirty: "Une demi-heure par jour, téléphone posé",
      },
    },
    fallback: {
      age: "Des jeux à faire ensemble",
      hardest: "Temps en famille quand le téléphone gagne le plus",
      apps: "Les apps qui vous retiennent, en pause",
      energy: "Des jeux à la mesure de votre énergie",
      minutes: "Quelques minutes par jour, téléphone posé",
    },
    apps: "{apps} en pause pendant le Temps en famille",
  },

  account: {
    notConfigured: "Les comptes ne sont pas configurés dans cet environnement.",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "Mot de passe (8 caractères min.)",
    busy: "Un instant…",
    noPassword: "Pas de mot de passe. Nous vous enverrons un code à 6 chiffres par e-mail.",
    createAccount: "Créer un compte",
    signIn: "Se connecter",
    or: "ou",
    useCode: "Recevoir plutôt un code par e-mail",
    usePassword: "Utiliser plutôt un mot de passe",
    haveAccount: "Déjà un compte ? Se connecter",
    newHere: "Pas encore de compte ? En créer un",
    codeSent: "Code envoyé à {email}.",
    continue: "Continuer",
    resendIn: "Nouveau code dans {seconds} s",
    resend: "Envoyer un nouveau code",
    changeEmail: "Modifier l’e-mail",
    facebook: "Continuer avec Facebook",
    apple: "Continuer avec Apple",
    google: "Se connecter avec Google",
  },

  authErrors: {
    link_failed: "Ça n’a pas marché. Demandez un nouveau code.",
    not_configured: "La connexion n’est pas configurée.",
    otp_expired: "Ce code a expiré ou a déjà servi. Demandez-en un nouveau.",
    over_email_send_rate_limit: "Trop d’e-mails envoyés à cette adresse. Patientez une minute, puis réessayez.",
    over_request_rate_limit: "Trop de tentatives. Patientez une minute, puis réessayez.",
    invalid_credentials: "Cet e-mail et ce mot de passe ne correspondent pas.",
    email_address_invalid: "Cette adresse e-mail semble incorrecte.",
    weak_password: "Choisissez un mot de passe plus long.",
    user_already_exists: "Un compte existe déjà avec cet e-mail. Connectez-vous plutôt.",
    email_exists: "Un compte existe déjà avec cet e-mail. Connectez-vous plutôt.",
    unknown: "Un problème est survenu de notre côté. Réessayez dans une minute.",
  },

  legal: { terms: "Conditions d’utilisation", privacy: "Politique de confidentialité" },

  paywall: {
    subhead: "Dix minutes de jeu par jour qui entraînent sa maîtrise de soi et sa mémoire. Vos apps attendent que vous ayez fini.",
    nudge: {
      title: "10 minutes pour un enfant plus vif",
      body: "{game} est prêt. Instagram peut attendre.",
      time: "maintenant",
    },
    game: {
      title: "Le petit docteur",
      skills: ["Mémoire", "Flexibilité mentale"],
      meta: "10 min · Allongés · 1–3 ans",
    },
    pros: [
      "Vos apps en pause pendant le Temps en famille",
      "Un jeu facile chaque soir",
      "Une planète qui grandit avec votre famille",
    ],
    plans: "Formules",
    monthly: "Mensuel",
    yearly: "Annuel",
    lifetime: "À vie",
    perMonth: "/ mois",
    perYear: "/ an",
    aMonth: "par mois",
    payOnce: "paiement unique",
    cancelAnytime: "Annulable à tout moment",
    save: "Économisez {percent}",
    billed: {
      yearly: "Facturé {price} par an",
      monthly: "Facturé {price} par mois",
      lifetime: "{price} une fois, à vous pour toujours",
    },
    refund: "Remboursement intégral sous 14 jours",
    continue: "Commencer ce soir",
  },

  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Chaque formule inclut-elle tout ?",
        answer: "Oui. Chaque formule débloque le même Oyno : le Temps en famille, tous les jeux et tous les mondes. Seule la façon de payer change.",
      },
      {
        question: "Quel téléphone est mis en pause ?",
        answer: "Le vôtre. Oyno met en pause les apps que vous choisissez, sur le téléphone où il est installé, aux heures que vous fixez. Il ne surveille pas votre enfant et ne lui impose aucune limite.",
      },
      {
        question: "Que se passe-t-il si j’annule ?",
        answer: "Votre planète et vos parties restent. Le Temps en famille et les nouveaux jeux s’arrêtent. Annulez quand vous voulez, depuis l’app ou depuis l’e-mail de votre reçu.",
      },
      {
        question: "Puis-je me faire rembourser ?",
        answer: "Oui, sous 14 jours et sans avoir à vous justifier. Écrivez à tim@oyno.app depuis l’adresse utilisée pour payer.",
      },
      {
        question: "Sur quels appareils fonctionne Oyno ?",
        answer: "Oyno est une app iPhone. Installez-la et connectez-vous avec le compte que vous créez ici.",
      },
      {
        question: "Qui gère le paiement ?",
        answer: "Dodo Payments, notre revendeur officiel (merchant of record). Il encaisse la carte, ajoute la taxe sur les ventes ou la TVA de votre pays et vous envoie le reçu par e-mail. Vos données de carte ne nous parviennent jamais.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno est une app iPhone. Installez-la et connectez-vous avec ce compte. Facturé par Dodo Payments.",
    cancelAnytime: "Annulable à tout moment.",
    notConfigured: "Le paiement n’est pas configuré dans cet environnement.",
    needsAccount: "L’accès est lié à un compte : il vous en faut d’abord un.",
    createYours: "Créer le vôtre",
    opening: "Préparation du formulaire de paiement…",
    retry: "Ça ne s’est pas ouvert. Réessayez dans un instant.",
    tryAgain: "Réessayer",
    failed: "Le formulaire de paiement ne s’est pas chargé. Rechargez la page pour réessayer.",
    summary: "Récapitulatif de la commande",
    discount: "Remise",
    tax: "Taxes",
    total: "Total",
    renews: "Renouvelé à {amount} / {cycle}. Annulable à tout moment.",
    cycles: { month: "mois", year: "an" },
    once: "Un seul paiement. Aucun renouvellement.",
  },

  done: {
    eyebrow: "C’est fait",
    headline: "Maintenant, installez Oyno sur votre [téléphone]",
    body: "Installez Oyno sur votre iPhone et connectez-vous avec le compte que vous venez de créer. Votre abonnement y est déjà : vous n’aurez pas à payer une seconde fois.",
    badge: "Télécharger dans l’App Store",
    receipt: "Dodo Payments vous enverra votre reçu par e-mail. Gérez ou annulez votre abonnement à tout moment depuis l’app.",
  },
};
