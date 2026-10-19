import type { FunnelCopy } from "./types";

/** The Spanish (Spain) deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const es: FunnelCopy = {
  meta: {
    title: "Oyno: deja el móvil y juega diez minutos",
    description: "Pausa tus apps mientras estás con tu peque y recibe un juego fácil al día. Suscríbete y después inicia sesión en la app.",
  },

  chrome: {
    continue: "Continuar",
    letsGo: "¡Vamos!",
    intro: "Unas preguntas · un minuto",
    back: "Atrás",
    progress: "Progreso",
  },

  openers: {
    headline: "¿El móvil [se come tus tardes] con tu peque?",
    yes: "Sí",
    no: "No mucho",
  },

  questions: {
    problem: {
      headline: "¿Cuál [se parece a tus tardes]?",
      options: {
        scroll: "Hago scroll en vez de jugar",
        ideas: "No me quedan fuerzas para pensar un juego",
        asks: "Mi peque me pide el móvil",
        both: "Los dos estamos pegados al móvil",
      },
    },
    age: {
      headline: "¿Qué edad tiene el peque de la casa?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "¿Cuándo [gana más] el móvil?",
      options: {
        afterwork: "Al volver del trabajo",
        dinner: "A la hora de cenar",
        weekend: "Mañanas de fin de semana",
        bedtime: "Antes de dormir",
      },
    },
    pickups: {
      headline: "¿Cuántas veces coges el móvil [en una hora] cuando estás con tu peque?",
      options: {
        rare: "Casi nunca",
        few: "Una o dos veces",
        often: "Cada dos por tres",
        lost: "Pierdo la cuenta",
      },
    },
    apps: {
      headline: "¿Qué apps [te enganchan]?",
      description: "Puedes elegir varias",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "Noticias",
        work: "Correo y Slack",
        games: "Juegos",
      },
    },
    energy: {
      headline: "¿Cuánta energía te queda [a las seis]?",
      options: {
        low: "Batería baja",
        okay: "Media",
        full: "De sobra",
      },
    },
    ideas: {
      headline: "¿Sueles saber [a qué jugar] con tu peque?",
      options: {
        often: "Casi siempre",
        sometimes: "A veces",
        rarely: "Pocas veces, me quedo en blanco",
      },
    },
    tried: {
      headline: "¿Qué has [probado ya]?",
      options: {
        limits: "Límites en Tiempo de uso",
        room: "El móvil en otra habitación",
        delete: "Borrar apps",
        nothing: "Nada todavía",
      },
    },
    minutes: {
      headline: "¿Cuántos minutos [al día] podrías dedicarle?",
      options: {
        ten: "10 minutos",
        twenty: "20 minutos",
        thirty: "30 minutos o más",
      },
    },
    soon: {
      headline: "¿Cuándo quieres recuperar tus tardes?",
      options: {
        tonight: "Hoy mismo",
        week: "Esta semana",
        month: "Este mes",
        unsure: "Aún no lo sé",
      },
    },
  },

  steps: {
    why: {
      headline: "No eres tú. Las apps están [hechas para engancharte].",
      body: "Cada app de tu móvil tiene un equipo al que pagan por ganarse tu siguiente minuto. A las seis de la tarde, tu fuerza de voluntad juega en desventaja.",
      variants: {
        ideas: {
          headline: "No eres tú. Tras un día entero, nadie tiene [ideas para jugar].",
          body: "Así que gana lo que menos cuesta, y lo que menos cuesta es una pantalla.",
        },
        asks: {
          headline: "No eres tú. Los peques quieren [lo que tú miras].",
          body: "Un móvil en tu mano es lo más interesante de la habitación. Suéltalo, y lo más interesante serás tú.",
        },
        both: {
          headline: "No eres tú. Con dos móviles, [el salón se queda mudo].",
          body: "Cada uno espera a que el otro suelte el suyo primero. Nadie tiene que esperar si los dos móviles se pausan a la vez.",
        },
      },
    },
    evening: {
      headline: "Así [se va] una tarde.",
    },
    influence: {
      headline: "Cuanto más scroll hacemos, más [piden pantallas] los peques.",
    },
    alternative: {
      headline: "Oyno [no lucha] contra un hábito que ya tienes.",
      body: "Te da una idea mejor: un juego corto con tu peque, a la medida de la energía que te queda.",
      variants: {
        low: {
          body: "Te da una idea mejor: un juego corto y tranquilo para cuando vas con la batería baja.",
        },
        full: {
          body: "Te da una idea mejor: un juego con tu peque que aprovecha la energía que aún tienes.",
        },
      },
    },
    enough: {
      headline: "Con diez minutos [basta].",
      body: "Los peques recuerdan que te tiraste al suelo a jugar, no cuánto duró el juego. Oyno elige uno que cabe en diez minutos y en la energía que te queda.",
      variants: {
        twenty: {
          headline: "Veinte minutos dan [para mucho].",
          body: "Los peques recuerdan que te tiraste al suelo a jugar, no cuánto duró el juego. Oyno elige uno que cabe en veinte minutos y en la energía que te queda.",
        },
        thirty: {
          headline: "Media hora es [más que suficiente].",
          body: "Los peques recuerdan que te tiraste al suelo a jugar, no cuánto duró el juego. Oyno elige uno que encaja con tu tarde y con la energía que te queda.",
        },
      },
    },
    plan: {
      headline: "Preparando [tu plan]",
    },
    account: {
      headline: "Tu plan está listo. [Guárdalo] para ver tu precio.",
    },
    paywall: {
      headline: "Vuelve [al planeta de tu peque].",
    },
    checkout: {
      headline: "Datos de pago.",
    },
  },

  evening: {
    caption: "Una tarde entre semana",
    hours: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    work: "Trabajo",
    kid: "Tiempo con tu peque",
    phone: "Móvil",
    summary: "{n} interrupciones en el rato con tu peque",
  },

  influence: {
    caption: "Peques de 2 a 5 años que piden pantalla sin parar",
    bars: ["Menos de 1,3 h", "De 1,3 a 3 h", "Más de 3 h"],
    axis: "Tiempo en redes de mamá o papá al día",
    summary: "El doble de probable si mamá o papá pasa más de 3 horas al día en redes",
    source: "Domoff et al., 2021 · 383 familias de EE. UU.",
  },

  alternative: {
    eyebrow: "Algo fácil",
    age: "3–5 años",
    title: "Alto en el cuatro",
    minutes: "8 min",
    tags: {
      "lying-down": "Tumbados",
      quiet: "Tranquilo",
      "nothing-to-grab": "Sin material",
    },
    blurb: "Ideal para un peque que lo cuenta todo, un dormitorio a oscuras y tú con fuerzas justas para contar hasta diez.",
    why: "Por qué funciona",
    skills: {
      "inhibitory-control": "Autocontrol",
      "working-memory": "Memoria de trabajo",
    },
  },

  compare: {
    good: {
      ten: {
        title: "Un juego de 10 minutos juntos",
        points: [
          "Toda tu atención",
          "Un juego, de principio a fin",
          "Tu peque manda, tú le sigues",
          "70 minutos juntos a la semana",
        ],
      },
      twenty: {
        title: "20 minutos de juego juntos",
        points: [
          "Toda tu atención",
          "Dos juegos, de principio a fin",
          "Su juego favorito, dos veces",
          "Más de 2 horas juntos a la semana",
        ],
      },
      thirty: {
        title: "30 minutos de juego juntos",
        points: [
          "Toda tu atención",
          "Tres juegos, de principio a fin",
          "Un juego nuevo y un favorito de siempre",
          "3 horas y media juntos a la semana",
        ],
      },
    },
    bad: {
      title: "Una hora en el mismo sofá",
      points: [
        "Media cabeza en el móvil",
        "Tu peque pide la pantalla",
        "Nada llega al final",
        "Nadie lo recordará",
      ],
    },
  },

  plan: {
    lines: {
      age: {
        "0-1": "Juegos para un bebé de hasta un año",
        "1-3": "Juegos para peques de 1 a 3 años",
        "3-5": "Juegos para peques de 3 a 5 años",
      },
      hardest: {
        afterwork: "Tiempo en familia al volver del trabajo",
        dinner: "Tiempo en familia a la hora de cenar",
        weekend: "Tiempo en familia las mañanas de finde",
        bedtime: "Tiempo en familia antes de dormir",
      },
      energy: {
        low: "Juegos fáciles con la batería baja",
        okay: "Juegos para un día normal",
        full: "Juegos más movidos con la batería llena",
      },
      minutes: {
        ten: "Diez minutos al día, sin móvil",
        twenty: "Veinte minutos al día, sin móvil",
        thirty: "Media hora al día, sin móvil",
      },
    },
    fallback: {
      age: "Juegos para jugar juntos",
      hardest: "Tiempo en familia cuando más gana el móvil",
      apps: "Pausa para las apps que te enganchan",
      energy: "Juegos a la medida de tu energía",
      minutes: "Unos minutos al día, sin móvil",
    },
    apps: "{apps} en pausa durante el Tiempo en familia",
  },

  account: {
    notConfigured: "Las cuentas no están configuradas en este entorno.",
    emailPlaceholder: "tu@ejemplo.com",
    passwordPlaceholder: "Contraseña (mínimo 8 caracteres)",
    busy: "Un momento…",
    noPassword: "Sin contraseña. Te enviamos un código de 6 dígitos por correo.",
    createAccount: "Crear cuenta",
    signIn: "Iniciar sesión",
    or: "o",
    useCode: "Mejor envíame un código",
    usePassword: "Usar una contraseña",
    haveAccount: "¿Ya tienes cuenta? Inicia sesión",
    newHere: "¿Primera vez aquí? Crea una cuenta",
    codeSent: "Código enviado a {email}.",
    continue: "Continuar",
    resendIn: "Reenviar en {seconds} s",
    resend: "Enviar un código nuevo",
    changeEmail: "Cambiar correo",
    facebook: "Continuar con Facebook",
    apple: "Continuar con Apple",
    google: "Iniciar sesión con Google",
  },

  authErrors: {
    link_failed: "No ha funcionado. Pide un código nuevo.",
    not_configured: "El inicio de sesión no está configurado.",
    otp_expired: "Ese código ha caducado o ya se ha usado. Pide uno nuevo.",
    over_email_send_rate_limit: "Demasiados correos a esta dirección. Espera un minuto y vuelve a intentarlo.",
    over_request_rate_limit: "Demasiados intentos. Espera un minuto y vuelve a intentarlo.",
    invalid_credentials: "El correo y la contraseña no coinciden.",
    email_address_invalid: "Esa dirección de correo no parece correcta.",
    weak_password: "Elige una contraseña más larga.",
    user_already_exists: "Ya hay una cuenta con este correo. Inicia sesión.",
    email_exists: "Ya hay una cuenta con este correo. Inicia sesión.",
    unknown: "Algo ha fallado por nuestra parte. Inténtalo de nuevo en un minuto.",
  },

  legal: { terms: "Condiciones", privacy: "Política de privacidad" },

  paywall: {
    pros: [
      "Tus apps en pausa durante el Tiempo en familia",
      "Un juego fácil cada tarde",
      "El planeta de tu familia, cada vez más grande",
    ],
    timeline: [
      { title: "Hoy", detail: "Elige tus apps y tu Tiempo en familia. Tu primer juego ya está listo." },
      { title: "Esta semana", detail: "Diez minutos de juego juntos cada tarde, sin móvil." },
      { title: "En un mes", detail: "Un peque más espabilado: cada juego entrena el autocontrol y la memoria." },
    ],
    monthly: "Mensual",
    yearly: "Anual",
    lifetime: "De por vida",
    perMonth: "/ mes",
    perYear: "/ año",
    perDay: "al día",
    oneTime: "pago único",
    cancelAnytime: "Cancela cuando quieras",
    billedYearly: "Un solo pago al año",
    payOnce: "Pagas una vez y es tuyo para siempre",
    save: "Ahorra {percent}",
    guarantee: "¿No es para ti? Te devolvemos todo el dinero si lo pides en 14 días.",
    continue: "Continuar",
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Los dos planes lo incluyen todo?",
        answer: "Sí. El mensual y el anual desbloquean el mismo Oyno: Tiempo en familia, todos los juegos y todos los mundos. Solo cambia la forma de pago.",
      },
      {
        question: "¿Qué móvil pone en pausa?",
        answer: "El tuyo. Oyno pausa las apps que elijas en el móvil donde está instalado, durante las horas que marques. No vigila ni limita a tu peque.",
      },
      {
        question: "¿Qué pasa si cancelo?",
        answer: "Tu planeta y tus partidas se quedan. El Tiempo en familia y los juegos nuevos se detienen. Cancela cuando quieras desde la app o desde el correo con tu recibo.",
      },
      {
        question: "¿Puedo recuperar mi dinero?",
        answer: "Sí, en un plazo de 14 días y sin dar explicaciones. Escribe a tim@oyno.app desde la dirección con la que pagaste.",
      },
      {
        question: "¿En qué dispositivos funciona?",
        answer: "Oyno es una app para iPhone. Instálala e inicia sesión con la cuenta que crees aquí.",
      },
      {
        question: "¿Quién gestiona el pago?",
        answer: "Dodo Payments, que actúa como vendedor registrado (merchant of record). Cobra la tarjeta, añade el IVA o el impuesto sobre las ventas de tu país y te envía el recibo por correo. Los datos de tu tarjeta nunca nos llegan.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno es una app para iPhone. Instálala e inicia sesión con esta cuenta. El cobro lo hace Dodo Payments.",
    cancelAnytime: "Cancela cuando quieras.",
    notConfigured: "El pago no está configurado en este entorno.",
    needsAccount: "El acceso va ligado a una cuenta, así que primero necesitas una.",
    createYours: "Crea la tuya",
    opening: "Preparando el formulario de pago…",
    retry: "No se ha abierto. Inténtalo de nuevo en un momento.",
    tryAgain: "Reintentar",
    failed: "El formulario de pago no ha cargado. Recarga la página para volver a intentarlo.",
    summary: "Resumen del pedido",
    discount: "Descuento",
    tax: "Impuestos",
    total: "Total",
    renews: "Se renueva por {amount} / {cycle}. Cancela cuando quieras.",
    cycles: { month: "mes", year: "año" },
    once: "Un solo pago. Sin renovaciones.",
  },

  done: {
    eyebrow: "Ya estás dentro",
    headline: "Ahora, llévatelo [al móvil]",
    body: "Instala Oyno en tu iPhone e inicia sesión con la cuenta que acabas de crear. Tu plan ya va con ella, así que no te encontrarás ninguna pantalla de pago.",
    badge: "Descárgalo en el App Store",
    receipt: "Dodo Payments te enviará el recibo por correo. Gestiona o cancela tu suscripción cuando quieras desde la app.",
  },
};
