import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("es-MX", page);

const UPDATED = "9 de octubre de 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const esMX: SiteCopy = {
  nav: {
    pricing: "Precios",
    support: "Soporte",
    privacy: "Privacidad",
    terms: "Términos",
    switchLabel: "Cambiar idioma",
    start: "Empezar",
  },

  home: {
    meta: {
      title: "Oyno: deja el celular y juega diez minutos",
      description:
        "Oyno pausa tus apps mientras estás con tu peque y te da un juego fácil al día. Cada ronda hace crecer el pequeño planeta de tu familia.",
    },
    eyebrow: "Para mamás y papás de niños de 0 a 5 años",
    headline: (
      <>
        El celular se come tus tardes. <span className="hl">Recupera diez minutos.</span>
      </>
    ),
    sub: "Oyno pausa tus apps durante el Tiempo en familia y te da un juego fácil, a la medida de la energía que te queda. Cada ronda hace crecer el planeta de tu familia.",
    cta: "Empezar",
    planet: {
      open: "Ver tus mundos",
      close: "Cerrar mundos",
      previous: "Mundo anterior",
      next: "Mundo siguiente",
      yours: "Ya es tuyo",
      unlocksAt: "Se desbloquea en el nivel de floración {n}",
      hint: "Presiona el planeta",
      worlds: {
        earth: "Tierra",
        meadow: "Pradera",
        ember: "Brasa",
        blossom: "Azahar",
        lagoon: "Laguna",
        dune: "Duna",
        frost: "Escarcha",
        lavender: "Lavanda",
        moss: "Musgo",
        honey: "Miel",
        cloud: "Nube",
        coral: "Coral",
        rose: "Rosa",
        pebble: "Piedrita",
        orchard: "Huerto",
        aurora: "Aurora",
        clay: "Barro",
        mint: "Menta",
        twilight: "Ocaso",
        poppy: "Amapola",
        pearl: "Perla",
        canyon: "Cañón",
        rain: "Lluvia",
        cedar: "Cedro",
        sunlit: "Soleado",
        berry: "Mora",
        glacier: "Glaciar",
        marigold: "Cempasúchil",
        dream: "Sueño",
        hearth: "Fogón",
        home: "Hogar",
      },
    },
    proof: {
      heading: "Una tarde con Oyno",
      sub: "Sin fuerza de voluntad. El celular se pausa antes de que tengas que decidir.",
      previous: "Pantalla anterior",
      next: "Pantalla siguiente",
      steps: [
        {
          shot: "/screenshots/es-MX/screens/kidhours.webp",
          title: "Empieza el Tiempo en familia",
          body: "A la hora que pusiste, las apps que elegiste se pausan. Teléfono, Mensajes y Mapas siguen abiertos.",
        },
        {
          shot: "/screenshots/es-MX/screens/low.webp",
          title: "Algo fácil",
          body: "Dile a Oyno cuánta batería te queda. Te da un juego de diez minutos, sin nada que preparar.",
        },
        {
          shot: "/screenshots/es-MX/screens/science.webp",
          title: "Juegos que entrenan",
          body: "Cada juego entrena la atención, la memoria o el autocontrol, y te dice qué estudio y qué guía lo respaldan.",
        },
        {
          shot: "/screenshots/es-MX/screens/worlds.webp",
          title: "El planeta crece",
          body: "Cuando suena el temporizador, tu peque toca el planeta. Florece, y cada pocas rondas se abre un mundo nuevo.",
        },
        {
          shot: "/screenshots/es-MX/screens/together-time.webp",
          title: "El tiempo juntos, contado",
          body: "Inicio te muestra cuánto tiempo estuvo guardado el celular hoy, para que veas la tarde que recuperaste.",
        },
      ],
    },
    author: {
      heading: "Por qué hice Oyno",
      paragraphs: [
        "Oyno no existiría sin mi niña. Tampoco existiría si los celulares no se hubieran vuelto tan buenos para atraparnos.",
        "Trabajo todo el día. Luego llego a casa y agarro el celular. Es solo un segundo. Me odio por ese segundo.",
        "Mi niña lo ve. Cree que así son las cosas. No es así.",
        "Probé los bloqueadores. Borré las redes sociales. El hábito se quedó. Agarraba el celular, veía la pantalla bloqueada y lo dejaba. Para mí no era nada. Para ella, era yo otra vez en el celular.",
        "Así que dejé de pelear contra el hábito. Le di algo mejor que hacer.",
        "En el idioma del país donde nací, “oyno” quiere decir “juega”. Ahora, cuando agarro el celular, me da un juego para jugar con ella. Es divertido y ayuda a que su cerebro crezca.",
        "Me tomó meses. No es otro bloqueador. No es respiración ni meditación. Son diez minutos con tu peque, con un juego que respalda la investigación.",
      ],
      name: "Tim",
      role: "Creador de Oyno",
      photoAlt: "Un adulto y una niña pequeña en el piso de la sala con un planeta de plastilina que brilla",
    },
    plan: {
      eyebrow: "Un solo plan, todo incluido",
      pitch: "Tiempo en familia, un juego nuevo cada tarde y todos los mundos que desbloquee tu familia. Cancela cuando quieras.",
      monthly: "Mensual",
      yearly: "Anual",
      cta: "Empezar",
      appNote: "Oyno es una app para iPhone. Suscríbete aquí o en la app, y luego inicia sesión con la misma cuenta.",
    },
    closer: {
      heading: "Esta tarde, diez minutos.",
      body: "Configurarlo toma un minuto, y el primer juego está listo antes de la cena.",
    },
  },

  pricing: {
    meta: {
      title: "Precios | Oyno",
      description: "Cuánto cuesta Oyno en la web y en el App Store.",
    },
    eyebrow: "Precios",
    heading: "Un plan. Dos formas de pagar.",
    intro: "Los dos desbloquean el mismo Oyno. Elige la puerta que te quede más cerca.",
    web: {
      eyebrow: "En la web",
      perMonth: " / mes",
      orYearly: (yearly) => `o ${yearly} / año`,
      cta: "Empezar",
      note: "El cobro lo hace Dodo Payments, nuestro vendedor oficial (merchant of record). Los precios incluyen los impuestos de tu país. Cancela cuando quieras.",
    },
    app: {
      eyebrow: "En el App Store",
      headline: "Gratis por 3 días",
      sub: "Después, Apple te cobra el precio del App Store.",
      note: "La prueba gratis es la oferta introductoria de Apple y se administra en las suscripciones de tu cuenta de Apple.",
    },
    body: (
      <>
        <h2>Qué incluye</h2>
        <p>
          El Tiempo en familia (las apps que eliges se pausan en tu celular a las horas que pones),
          un juego nuevo cada tarde, el temporizador y todos los mundos que desbloquee tu familia.
          No hay plan gratis ni cobros extra dentro de la suscripción.
        </p>
        <h2>Reembolsos</h2>
        <p>
          ¿Te suscribiste en la web y no es para ti? Escribe a {SUPPORT} dentro de los 14 días
          posteriores al pago y te devolvemos todo. Las compras en el App Store las reembolsa Apple
          en <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Soporte | Oyno",
      description: "Cómo contactarnos y respuestas a las preguntas más comunes.",
    },
    eyebrow: "Soporte",
    heading: "¿Cómo te ayudamos?",
    intro: (
      <>
        Escríbenos a{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Te contesta una persona de verdad, normalmente en menos de un día.
      </>
    ),
    body: (
      <>
        <h2>Una app que pausé todavía se abre</h2>
        <p>
          Revisa que Oyno tenga acceso a Tiempo en pantalla en{" "}
          <strong>Configuración → Tiempo en pantalla</strong>, y que la app esté en tu lista en{" "}
          <strong>Tiempo en familia → Apps en pausa</strong>. Las apps que instalaste después de armar la
          lista no están en ella hasta que las agregues.
        </p>
        <h2>Necesito mi celular durante el Tiempo en familia</h2>
        <p>
          Teléfono, Mensajes y Mapas nunca se pausan. Para todo lo demás, mantén presionado{" "}
          <strong>Ahora no</strong>: abre tus apps por 20 minutos y luego el Tiempo en familia sigue.
        </p>
        <h2>Me suscribí en la web. ¿Cómo entro?</h2>
        <p>
          Instala Oyno desde el App Store e inicia sesión con el mismo correo o la misma cuenta de
          Apple, Google o Facebook que usaste aquí. La suscripción ya está ligada a ella.
        </p>
        <h2>¿Cómo cancelo?</h2>
        <p>
          En la app: <strong>Perfil → Administrar suscripción</strong>. Una suscripción web también
          se puede cancelar desde el enlace de tu recibo de Dodo Payments. Una suscripción del App
          Store se cancela en las suscripciones de tu cuenta de Apple.
        </p>
        <h2>¿Cómo elimino mi cuenta?</h2>
        <p>
          En la app: <strong>Perfil → Eliminar cuenta</strong>. Mira{" "}
          <Link href={`${to("privacy")}#delete`}>qué se borra</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Privacidad | Oyno",
      description: "Qué guarda Oyno, qué nunca ve y cómo borrarlo todo.",
    },
    eyebrow: "Privacidad",
    heading: "Tus tardes son tuyas",
    updatedLabel: "Última actualización",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno es operado por Teimur Gasanov. Es una app para iPhone que pausa las apps que elige la
          madre o el padre durante las horas que establece, y que sugiere juegos cortos para jugar
          con su hija o hijo. Esta página describe qué guardan la app y este sitio web, por qué, y
          cómo eliminarlo.
        </p>

        <h2>Qué guardamos</h2>
        <h3>Tu cuenta</h3>
        <p>
          Una dirección de correo electrónico y, si inicias sesión con Apple, Google o Facebook, el
          identificador que nos da ese proveedor, junto con el nombre y la dirección de correo que
          comparte. Si usas la dirección oculta de Iniciar sesión con Apple, solo vemos la dirección
          de reenvío.
        </p>
        <h3>Tus rondas</h3>
        <p>
          Cada ronda que juegas, cuánto duró y qué juego fue se quedan en tu celular. Para que un
          celular nuevo o una reinstalación conserven tu planeta, respaldamos dos totales en tu
          cuenta: cuántas rondas jugaste y cuántos minutos. Ninguno de esos datos identifica a una
          niña o a un niño: Oyno nunca pide el nombre, la edad ni la foto de tu hija o hijo. Las
          respuestas que das a las preguntas de este sitio web (por ejemplo, un rango de edad) se
          guardan con el registro de tu suscripción, para que podamos saber qué preguntas llevan a
          juegos que la gente sigue jugando.
        </p>
        <h3>Tu suscripción</h3>
        <p>
          Si te suscribiste en la app: el identificador de la transacción de Apple, el producto, la
          fecha de vencimiento y si está vigente. Si te suscribiste en la web: Dodo Payments es el
          vendedor oficial (merchant of record) y guarda los datos de tu tarjeta, que nosotros nunca
          vemos. Guardamos los identificadores de cliente y de suscripción que nos da Dodo, el
          estado y el fin del periodo pagado.
        </p>
        <h3>Analítica del producto</h3>
        <p>
          Registramos qué pantallas se abren y qué acciones se realizan (una ronda iniciada, una
          pantalla de pago vista) mediante Amplitude, para encontrar dónde la app resulta confusa.
        </p>
        <h3>Publicidad</h3>
        <p>
          Este sitio web carga el píxel de Meta para medir qué anuncios atraen a personas que se
          suscriben. Cuando inicia una suscripción, enviamos a Meta una dirección de correo
          electrónico con hash para que se pueda asociar la conversión. El hash se genera en nuestro
          servidor, nunca en tu navegador.
        </p>

        <h2>Lo que nunca sale de tu celular</h2>
        <p>
          Oyno usa la API de Tiempo en pantalla de Apple para pausar apps. Apple le entrega a la app
          tokens opacos de las apps que eliges, no sus nombres, y esos tokens se quedan en el
          dispositivo. Nunca vemos qué apps usas, cuánto tiempo las usas, tu navegación, tus
          mensajes, tu ubicación, tus contactos ni tus fotos.
        </p>

        <h2>Quién más lo ve</h2>
        <ul>
          <li>
            <strong>Supabase</strong>: la base de datos y el servicio de inicio de sesión.
          </li>
          <li>
            <strong>Vercel</strong>: el hosting de este sitio web y de la API con la que se comunica
            la app.
          </li>
          <li>
            <strong>Dodo Payments</strong>: vendedor oficial (merchant of record) de las
            suscripciones web.
          </li>
          <li>
            <strong>Amplitude</strong>: analítica del producto.
          </li>
          <li>
            <strong>Resend</strong>: los códigos de inicio de sesión que te enviamos por correo.
          </li>
          <li>
            <strong>Meta</strong>: medición de anuncios, como se describe arriba.
          </li>
        </ul>
        <p>No vendemos tus datos ni los compartimos con corredores de datos.</p>

        <h2 id="delete">Cómo borrarlo todo</h2>
        <p>
          En la app: <strong>Perfil → Eliminar cuenta</strong>. Borra tu cuenta, los totales que
          respaldamos y las rondas de tu celular, de inmediato, y no se puede deshacer.
        </p>
        <p>
          ¿Iniciaste sesión con Facebook? También puedes quitar Oyno en Facebook, en{" "}
          <strong>Configuración y privacidad → Configuración → Apps y sitios web</strong>. Eso
          impide que Facebook siga compartiendo información con nosotros; el paso anterior es el que
          borra tus datos.
        </p>
        <p>
          Eliminar tu cuenta no cancela una suscripción. Primero cancélala (consulta{" "}
          <Link href={to("support")}>Soporte</Link>) y luego elimina la cuenta. O escribe a{" "}
          {SUPPORT} y nosotros hacemos ambas cosas y te lo confirmamos.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes acceder a tus datos, corregirlos, exportarlos y borrarlos, así como oponerte a su
          tratamiento. Escribe a {SUPPORT} para cualquier cosa que la app no haga directamente.
        </p>

        <h2>Niñas y niños</h2>
        <p>
          Oyno es para madres y padres. Las cuentas son para personas adultas, y la app no recopila
          ningún dato que provenga de la niña o el niño con quien te ayuda a jugar, ni ningún dato
          sobre ellos.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Términos | Oyno",
      description: "Los términos para usar Oyno y para la suscripción que se vende en este sitio.",
    },
    eyebrow: "Términos del servicio",
    heading: "Términos",
    updatedLabel: "Última actualización",
    updated: UPDATED,
    body: (
      <>
        <p>
          Estos términos aplican a la app Oyno y a este sitio web, ambos operados por Teimur
          Gasanov. Usar cualquiera de los dos implica aceptarlos.
        </p>

        <h2>Qué es Oyno</h2>
        <p>
          Una herramienta que pausa las apps que eliges en tu propio iPhone durante las horas que
          estableces, sugiere juegos cortos para jugar con tu hija o hijo y lleva un registro de las
          rondas que juegas. Los juegos son sugerencias. Tú decides si un juego es seguro y adecuado
          para tu hija o hijo y para tu espacio, y tú lo supervisas.
        </p>

        <h2>Tu cuenta</h2>
        <p>
          Necesitas una cuenta para que una suscripción comprada en la web te encuentre en la app.
          No compartas tus datos de inicio de sesión. Puedes eliminar la cuenta en cualquier momento
          desde <strong>Perfil → Eliminar cuenta</strong>.
        </p>

        <h2>Suscripciones</h2>
        <h3>Compradas en este sitio web</h3>
        <p>
          El pago lo cobra Dodo Payments, el vendedor oficial (merchant of record), cuyos términos
          aplican a la transacción. Las suscripciones se renuevan automáticamente con la
          periodicidad que elegiste hasta que las canceles. Los precios se muestran en tu moneda
          antes de pagar e incluyen cualquier impuesto que Dodo deba cobrar. Si Oyno no es para ti,
          pide a {SUPPORT} un reembolso completo dentro de los 14 días posteriores a un pago.
        </p>
        <h3>Compradas en la app</h3>
        <p>
          Apple cobra el pago conforme a sus propios términos, incluido el contrato de licencia de
          usuario final estándar de Apple para aplicaciones con licencia. La prueba gratis de 3 días
          es la oferta introductoria de Apple; si no cancelas antes de que termine, Apple cobra el
          plan que elegiste y lo renueva hasta que lo canceles en las suscripciones de tu cuenta de
          Apple.
          Otorgar reembolsos le corresponde a Apple.
        </p>
        <h3>Cuando termina una suscripción</h3>
        <p>
          Tu planeta y tus rondas anteriores se quedan. El Tiempo en familia y los juegos nuevos se
          detienen hasta que vuelvas a suscribirte.
        </p>

        <h2>Cambios y disponibilidad</h2>
        <p>
          Mejoramos Oyno con el tiempo y podemos cambiar o quitar funciones. Si un cambio te quita
          algo por lo que pagaste, escribe a {SUPPORT} y lo solucionaremos. Trabajamos para que el
          servicio siga funcionando, pero no podemos prometer que nunca se interrumpa.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Oyno se ofrece “tal cual”. En la medida en que la ley lo permita, nuestra responsabilidad
          por cualquier reclamación se limita a lo que nos hayas pagado en los 12 meses anteriores a
          ella. Nada de lo aquí dispuesto limita los derechos que te otorgan las leyes de protección
          al consumidor.
        </p>

        <h2>Contacto</h2>
        <p>
          Preguntas sobre estos términos: {SUPPORT}. Nuestro{" "}
          <Link href={to("privacy")}>aviso de privacidad</Link> explica cómo tratamos tus datos.
        </p>
      </>
    ),
  },
};
