import type { FunnelCopy } from "./types";

/** The Mexican Spanish deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const esMX: FunnelCopy = {
  meta: {
    title: "Oyno: deja el celular y juega diez minutos",
    description: "Pausa tus apps mientras estás con tu peque y recibe un juego fácil al día. Suscríbete y luego inicia sesión en la app.",
  },

  chrome: {
    continue: "Continuar",
    letsGo: "¡Vamos!",
    intro: "Unas preguntas · toma un minuto",
    back: "Atrás",
    progress: "Progreso",
  },

  openers: {
    headline: "¿Alguna vez le dijiste a tu peque [“un segundo”] y seguiste en el celular?",
    yes: "Sí",
    no: "La verdad, no",
  },

  questions: {
    problem: {
      headline: "¿Cuál de estas [se parece a tus tardes]?",
      options: {
        scroll: "Me pongo a scrollear en vez de jugar",
        ideas: "Llego sin energía para pensar en un juego",
        asks: "Mi peque me pide el celular",
        both: "Los dos estamos pegados al celular",
      },
    },
    age: {
      headline: "¿Qué edad tiene el más chiquito de la casa?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "¿Cuándo [te gana más] el celular?",
      options: {
        afterwork: "Saliendo del trabajo",
        dinner: "A la hora de la cena",
        weekend: "Fines de semana en la mañana",
        bedtime: "Antes de dormir",
      },
    },
    pickups: {
      headline: "¿Cuántas veces agarras el celular [en una hora] con tu peque?",
      options: {
        rare: "Casi nunca",
        few: "Una o dos veces",
        often: "A cada rato",
        lost: "Pierdo la cuenta",
      },
    },
    apps: {
      headline: "¿Qué apps [te enganchan]?",
      description: "Elige todas las que apliquen",
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
      headline: "¿Cuánta energía te queda [a las 6 p.m.]?",
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
        rarely: "Casi nunca, me quedo en blanco",
      },
    },
    tried: {
      headline: "¿Qué [ya probaste]?",
      options: {
        limits: "Límites en Tiempo en pantalla",
        room: "Dejar el celular en otro cuarto",
        delete: "Borrar apps",
        nothing: "Nada todavía",
      },
    },
    minutes: {
      headline: "¿Cuántos minutos [al día] le puedes dedicar?",
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
        unsure: "Todavía no sé",
      },
    },
  },

  steps: {
    why: {
      headline: "No eres tú. Las apps están [hechas para engancharte].",
      body: "Cada app de tu celular tiene un equipo al que le pagan por ganarse tu siguiente minuto. A las 6 de la tarde, la fuerza de voluntad no tiene con qué.",
      variants: {
        ideas: {
          headline: "No eres tú. Después de un día entero, nadie tiene [ideas para jugar].",
          body: "Así que gana lo más fácil que hay en el cuarto, y lo más fácil siempre es una pantalla.",
        },
        asks: {
          headline: "No eres tú. Los niños quieren [lo que tú estás viendo].",
          body: "Un celular en tu mano es lo más interesante del cuarto. Suéltalo, y lo más interesante eres tú.",
        },
        both: {
          headline: "No eres tú. Con dos celulares, [el cuarto se queda callado].",
          body: "Cada quien espera a que el otro suelte el suyo primero. Nadie tiene que esperar si los dos celulares se pausan al mismo tiempo.",
        },
      },
    },
    evening: {
      headline: "Cada “un segundo” [se va sumando].",
    },
    promise: {
      headline: "¿Y si todos esos “un segundo” se volvieran [juegos fáciles]?",
    },
    influence: {
      headline: "Entre más usamos el celular, más [piden pantalla] los niños.",
    },
    alternative: {
      headline: "Oyno [no pelea] con un hábito que ya tienes.",
      body: "Te da una mejor idea: un juego cortito con tu peque, a la medida de la energía que te queda.",
      variants: {
        low: {
          body: "Te da una mejor idea: un juego corto y tranquilo que puedes jugar aunque tengas la batería baja.",
        },
        full: {
          body: "Te da una mejor idea: un juego con tu peque que aprovecha la energía que todavía tienes.",
        },
      },
    },
    enough: {
      headline: "Diez minutos [bastan].",
      body: "Los niños se acuerdan de cuando te tiraste al piso con ellos, no de cuánto duró el juego. Oyno elige uno que cabe en diez minutos y en la energía que te queda.",
      variants: {
        twenty: {
          headline: "Veinte minutos [son de sobra].",
          body: "Los niños se acuerdan de cuando te tiraste al piso con ellos, no de cuánto duró el juego. Oyno elige uno que cabe en veinte minutos y en la energía que te queda.",
        },
        thirty: {
          headline: "Treinta minutos son [más que suficiente].",
          body: "Los niños se acuerdan de cuando te tiraste al piso con ellos, no de cuánto duró el juego. Oyno elige uno a la medida de tu tarde y de la energía que te queda.",
        },
      },
    },
    plan: {
      headline: "Armando [tu plan]",
    },
    account: {
      headline: "Tu plan está listo. [Guárdalo] para ver tu precio.",
    },
    paywall: {
      headline: "Cambia el scroll por un peque más despierto.",
    },
    checkout: {
      headline: "Datos de pago.",
    },
  },

  evening: {
    caption: "Una tarde entre semana",
    hours: ["4 p.m.", "5 p.m.", "6 p.m.", "7 p.m.", "8 p.m."],
    kid: "Tiempo con tu peque",
    phone: "Celular",
    summary: "{n} veces “un segundo” en el tiempo con tu peque",
  },

  promise: {
    caption: "La misma tarde, con Oyno",
    summary: "Un juego, toda tu atención",
    games: [
      { title: "Te copio", minutes: "5 min", tag: "Sin materiales" },
      { title: "Zoológico de sombras", minutes: "8 min", tag: "Acostados" },
      { title: "Alto en el cuatro", minutes: "8 min", tag: "Tranquilo" },
    ],
  },

  influence: {
    caption: "Niños de 2 a 5 años que piden pantalla una y otra vez",
    bars: ["Menos de 1.3 h", "De 1.3 a 3 h", "Más de 3 h"],
    axis: "Redes sociales de mamá o papá al día",
    summary: "El doble de probable si mamá o papá pasa más de 3 horas al día en redes",
    source: "Domoff et al., 2021 · 383 familias de EE. UU.",
  },

  alternative: {
    eyebrow: "Algo fácil",
    age: "3–5 años",
    title: "Alto en el cuatro",
    minutes: "8 min",
    tags: {
      "lying-down": "Acostados",
      quiet: "Tranquilo",
      "nothing-to-grab": "Sin materiales",
    },
    blurb: "Ideal para un peque que lo cuenta todo, un cuarto a oscuras y tú, que solo tienes fuerzas para diez números.",
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
          "Tu peque decide, tú le sigues el juego",
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
          "Un juego nuevo y uno de sus favoritos",
          "3½ horas juntos a la semana",
        ],
      },
    },
    bad: {
      title: "Una hora cerca, pero no juntos",
      points: [
        "Tu cabeza está en el celular",
        "Tu peque pide la pantalla",
        "Nada se termina",
        "Nadie se acuerda",
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
        afterwork: "Tiempo en familia saliendo del trabajo",
        dinner: "Tiempo en familia a la hora de la cena",
        weekend: "Tiempo en familia los fines de semana en la mañana",
        bedtime: "Tiempo en familia antes de dormir",
      },
      energy: {
        low: "Juegos fáciles para la batería baja",
        okay: "Juegos para un día normal",
        full: "Juegos más movidos para la batería llena",
      },
      minutes: {
        ten: "Diez minutos al día, sin celular",
        twenty: "Veinte minutos al día, sin celular",
        thirty: "Media hora al día, sin celular",
      },
    },
    fallback: {
      age: "Juegos para jugar juntos",
      hardest: "Tiempo en familia cuando el celular más te gana",
      apps: "Pausa para las apps que te enganchan",
      energy: "Juegos a la medida de tu energía",
      minutes: "Unos minutos al día, sin celular",
    },
    apps: "{apps} en pausa durante el Tiempo en familia",
  },

  account: {
    notConfigured: "Las cuentas no están configuradas en este entorno.",
    emailPlaceholder: "tu@ejemplo.com",
    passwordPlaceholder: "Contraseña (mínimo 8 caracteres)",
    busy: "Un momento…",
    noPassword: "Sin contraseña. Te mandamos por correo un código de 6 dígitos.",
    createAccount: "Crear cuenta",
    signIn: "Iniciar sesión",
    or: "o",
    useCode: "Mejor mándame un código",
    usePassword: "Usar contraseña",
    haveAccount: "¿Ya tienes cuenta? Inicia sesión",
    newHere: "¿Primera vez aquí? Crea una cuenta",
    codeSent: "Código enviado a {email}.",
    continue: "Continuar",
    resendIn: "Reenviar en {seconds} s",
    resend: "Enviar otro código",
    changeEmail: "Cambiar correo",
    facebook: "Continuar con Facebook",
    apple: "Continuar con Apple",
    google: "Acceder con Google",
  },

  authErrors: {
    link_failed: "No funcionó. Pide un código nuevo.",
    not_configured: "El inicio de sesión no está configurado.",
    otp_expired: "Ese código ya venció o ya se usó. Pide uno nuevo.",
    over_email_send_rate_limit: "Demasiados correos a esta dirección. Espera un minuto y vuelve a intentarlo.",
    over_request_rate_limit: "Demasiados intentos. Espera un minuto y vuelve a intentarlo.",
    invalid_credentials: "El correo y la contraseña no coinciden.",
    email_address_invalid: "Ese correo no parece correcto.",
    weak_password: "Elige una contraseña más larga.",
    user_already_exists: "Ya hay una cuenta con este correo. Mejor inicia sesión.",
    email_exists: "Ya hay una cuenta con este correo. Mejor inicia sesión.",
    unknown: "Algo falló de nuestro lado. Intenta de nuevo en un minuto.",
  },

  legal: { terms: "Términos", privacy: "Aviso de privacidad" },

  paywall: {
    subhead: "Diez minutos de juego al día que entrenan su autocontrol y su memoria. Tus apps esperan hasta que terminen.",
    nudge: {
      title: "10 minutos para un peque más despierto",
      body: "{game} ya está listo. Instagram puede esperar.",
      time: "ahora",
    },
    game: {
      title: "Doctor peque",
      skills: ["Memoria", "Flexibilidad mental"],
      meta: "10 min · Acostados · 1 a 3 años",
    },
    pros: [
      "Tus apps en pausa durante el Tiempo en familia",
      "Un juego fácil cada tarde",
      "El planeta de tu familia, creciendo",
    ],
    plans: "Planes",
    monthly: "Mensual",
    yearly: "Anual",
    lifetime: "De por vida",
    perMonth: "/ mes",
    perYear: "/ año",
    aMonth: "al mes",
    payOnce: "pago único",
    cancelAnytime: "Cancela cuando quieras",
    save: "Ahorra {percent}",
    billed: {
      yearly: "Se cobra {price} al año",
      monthly: "Se cobra {price} al mes",
      lifetime: "{price} una vez, tuyo para siempre",
    },
    refund: "Reembolso completo en 14 días",
    continue: "Empezar esta noche",
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Todos los planes incluyen todo?",
        answer: "Sí. Todos los planes desbloquean el mismo Oyno: Tiempo en familia, todos los juegos y todos los mundos. Solo cambia la forma de pagar.",
      },
      {
        question: "¿En qué celular se pausan las apps?",
        answer: "En el tuyo. Oyno pausa las apps que eliges en el celular donde está instalado, en los horarios que pones. No vigila ni limita a tu peque.",
      },
      {
        question: "¿Qué pasa si cancelo?",
        answer: "Tu planeta y tus rondas se quedan. El Tiempo en familia y los juegos nuevos se detienen. Cancela cuando quieras desde la app o desde el correo de tu recibo.",
      },
      {
        question: "¿Me pueden devolver mi dinero?",
        answer: "Sí, dentro de los primeros 14 días y sin dar explicaciones. Escribe a tim@oyno.app desde el correo con el que pagaste.",
      },
      {
        question: "¿En qué dispositivos funciona?",
        answer: "Oyno es una app para iPhone. Instálala e inicia sesión con la cuenta que creas aquí.",
      },
      {
        question: "¿Quién procesa el pago?",
        answer: "Dodo Payments, el vendedor oficial de la suscripción (merchant of record). Cobra con tu tarjeta, agrega el impuesto sobre ventas o el IVA de tu país y te manda el recibo por correo. Los datos de tu tarjeta nunca nos llegan.",
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
    retry: "No se abrió. Intenta de nuevo en un momento.",
    tryAgain: "Intentar de nuevo",
    failed: "El formulario de pago no cargó. Recarga la página para intentarlo de nuevo.",
    summary: "Resumen del pedido",
    discount: "Descuento",
    tax: "Impuestos",
    total: "Total",
    renews: "Se renueva por {amount} / {cycle}. Cancela cuando quieras.",
    cycles: { month: "mes", year: "año" },
    once: "Un solo pago. Sin renovaciones.",
  },

  done: {
    eyebrow: "¡Listo!",
    headline: "Ahora instálala en tu [celular]",
    body: "Instala Oyno en tu iPhone e inicia sesión con la cuenta que acabas de crear. Tu plan ya está ahí, así que no te vas a topar con ninguna pantalla de pago.",
    badge: "Descárgalo en el App Store",
    receipt: "Dodo Payments te mandará el recibo por correo. Administra o cancela tu suscripción cuando quieras desde la app.",
  },
};
