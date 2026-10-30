import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("es", page);

const UPDATED = "9 de octubre de 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const es: SiteCopy = {
  nav: {
    pricing: "Precios",
    support: "Ayuda",
    privacy: "Privacidad",
    terms: "Condiciones",
    switchLabel: "Cambiar idioma",
    start: "Empezar",
    games: "Juegos",
    guides: "Guías",
    blog: "Blog",
  },

  home: {
    meta: {
      title: "Oyno: deja el móvil y juega diez minutos",
      description:
        "Oyno pausa tus apps mientras estás con tu peque y te da un juego fácil al día. Cada partida hace crecer el pequeño planeta de tu familia.",
    },
    eyebrow: "Para madres y padres de peques de 0 a 5 años",
    headline: (
      <>
        El móvil se come tus tardes. <span className="hl">Recupera diez minutos.</span>
      </>
    ),
    sub: "Oyno pausa tus apps durante el Tiempo en familia y te da un juego fácil, a la medida de la energía que te queda. Cada partida hace crecer el planeta de tu familia.",
    cta: "Empezar",
    planet: {
      open: "Abrir tus mundos",
      close: "Cerrar mundos",
      previous: "Mundo anterior",
      next: "Mundo siguiente",
      yours: "Ya es tuyo",
      unlocksAt: "Se desbloquea en el nivel {n}",
      hint: "Pulsa el planeta",
      worlds: {
        earth: "Tierra",
        meadow: "Pradera",
        ember: "Ascua",
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
        pebble: "Guijarro",
        orchard: "Huerto",
        aurora: "Aurora",
        clay: "Arcilla",
        mint: "Menta",
        twilight: "Ocaso",
        poppy: "Amapola",
        pearl: "Perla",
        canyon: "Cañón",
        rain: "Lluvia",
        cedar: "Cedro",
        sunlit: "Solana",
        berry: "Mora",
        glacier: "Glaciar",
        marigold: "Caléndula",
        dream: "Sueño",
        hearth: "Lumbre",
        home: "Hogar",
      },
    },
    proof: {
      heading: "Juego fácil para padres cansados",
      sub: "Un juego, un cuento, el baño o cocinar juntos: cada rato en familia hace crecer vuestro planeta.",
      previous: "Pantalla anterior",
      next: "Pantalla siguiente",
      bodies: {
        low: "Dile a Oyno cómo va tu batería: baja, media o llena. Te da un juego de 5 a 15 minutos sin nada que preparar y, con la batería baja, uno para jugar tumbado.",
        growth: "Cada juego entrena la atención, la memoria de trabajo, el autocontrol o la flexibilidad mental, y cita el estudio y la guía que lo respaldan. Crecimiento muestra lo que habéis practicado juntos, habilidad a habilidad.",
        kidhours: "Crea horarios para las tardes de cole, las mañanas del finde o el baño y la cama, cada uno con sus apps en pausa. Las apps que siempre necesitas siguen abiertas.",
        keepsake: "Al acabar una partida, tu peque toca el planeta y puede aparecer un pequeño recuerdo a su lado. Hay 24 por encontrar, y algunos son raros.",
        home: "Juegos, lectura, baño y cocina: todo cuenta. Inicio te guarda una cosa fácil para esta tarde y muestra cuánto falta para el próximo mundo.",
        letter: "Cada domingo, el planeta os escribe sobre vuestra semana: las tardes juntos, a qué jugasteis y las primeras veces que notaste. Añade una línea y envíasela a la familia.",
        find: "500 juegos de 0 a 5 años, cada uno en tres pasos cortos. Búscalos todos o deja que Oyno te reparta uno.",
        worlds: "Cada partida hace florecer el planeta, y se abren 31 mundos a medida que jugáis. Saltarte un día no cuesta nada: el planeta nunca se marchita.",
      },
    },
    author: {
      heading: "Por qué hice Oyno",
      paragraphs: [
        "Sin mi hija no existiría Oyno. Tampoco existiría si los móviles no se hubieran vuelto tan buenos atrapándonos.",
        "Trabajo todo el día. Luego llego a casa y voy a por el móvil. Es solo un segundo. Y odio ese segundo.",
        "Mi hija lo ve. Cree que las cosas son así. No lo son.",
        "Probé los bloqueadores. Borré las redes sociales. El hábito siguió ahí. Cogía el móvil, veía la pantalla bloqueada y lo dejaba. Para mí no era nada. Para ella era papá otra vez con el móvil.",
        "Así que dejé de pelear con el hábito. Le di algo mejor que hacer.",
        "Oyno significa “juega” en el idioma del país donde nací. Ahora, cuando cojo el móvil, me da un juego para hacer con ella. Es divertido y ayuda a que su cerebro crezca.",
        "Me llevó meses. No es otro bloqueador. No es respiración ni meditación. Son diez minutos con tu peque, con un juego que la investigación respalda.",
      ],
      name: "Tim",
      role: "Creador de Oyno",
      photoAlt: "Un padre y una niña pequeña en el suelo del salón con un planeta de plastilina que brilla",
    },
    plan: {
      eyebrow: "Un solo plan, con todo incluido",
      pitch: "Tiempo en familia, 500 juegos, los recuerdos, la carta del domingo y todos los mundos que desbloquee tu familia. Cancela cuando quieras.",
      monthly: "Mensual",
      yearly: "Anual",
      cta: "Empezar",
      appNote: "Oyno es una app para iPhone. Suscríbete aquí o en la app y luego inicia sesión con la misma cuenta.",
    },
    closer: {
      heading: "Esta tarde, diez minutos.",
      body: "Se configura en un minuto y el primer juego está listo antes de la cena.",
    },
  },

  pricing: {
    meta: {
      title: "Precios | Oyno",
      description: "Lo que cuesta Oyno, en la web y en el App Store.",
    },
    eyebrow: "Precios",
    heading: "Un plan. Dos formas de pagar.",
    intro: "Las dos desbloquean el mismo Oyno. Elige la puerta que tengas más a mano.",
    web: {
      eyebrow: "En la web",
      perMonth: " / mes",
      orYearly: (yearly) => `o ${yearly} / año`,
      cta: "Empezar",
      note: "El cobro lo hace Dodo Payments, que actúa como vendedor registrado (merchant of record). Los precios incluyen los impuestos de tu país. Cancela cuando quieras.",
    },
    app: {
      eyebrow: "En el App Store",
      headline: "Gratis durante 3 días",
      sub: "Después, Apple te cobra el precio del App Store.",
      note: "La prueba es la oferta introductoria de Apple y se gestiona en las suscripciones de tu cuenta de Apple.",
    },
    body: (
      <>
        <h2>Qué incluye</h2>
        <p>
          El Tiempo en familia (las apps que elijas se pausan en tu móvil a las horas que marques),
          un juego nuevo cada tarde, el temporizador y todos los mundos que desbloquee tu familia.
          No hay plan gratuito ni compras extra dentro de la suscripción.
        </p>
        <h2>Reembolsos</h2>
        <p>
          ¿Te suscribiste en la web y no es para ti? Escribe a {SUPPORT} en un plazo de 14 días
          desde el pago y te devolveremos el importe íntegro. Las compras del App Store las
          reembolsa Apple en{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Ayuda | Oyno",
      description: "Cómo contactar con nosotros y respuestas a las preguntas más frecuentes.",
    },
    eyebrow: "Ayuda",
    heading: "¿En qué podemos ayudarte?",
    intro: (
      <>
        Escribe a{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Te responde una persona de verdad, normalmente en menos de un día.
      </>
    ),
    body: (
      <>
        <h2>Una app que pausé se sigue abriendo</h2>
        <p>
          Comprueba que Oyno tiene acceso a Tiempo de uso en{" "}
          <strong>Ajustes → Tiempo de uso</strong>, y que la app está en tu lista de{" "}
          <strong>Tiempo en familia → En pausa</strong>. Las apps que instalaste después de crear
          la lista no están en ella hasta que las añadas.
        </p>
        <h2>Necesito el móvil durante el Tiempo en familia</h2>
        <p>
          Teléfono, Mensajes y Mapas nunca se pausan. Para todo lo demás, mantén pulsado{" "}
          <strong>Ahora no</strong>: tus apps se abren durante 20 minutos y luego el Tiempo en
          familia vuelve a empezar.
        </p>
        <h2>Me suscribí en la web. ¿Cómo entro?</h2>
        <p>
          Instala Oyno desde el App Store e inicia sesión con el mismo correo o la misma cuenta de
          Apple, Google o Facebook que usaste aquí. La suscripción ya va con ella.
        </p>
        <h2>¿Cómo cancelo?</h2>
        <p>
          En la app: <strong>Perfil → Gestionar suscripción</strong>. Una suscripción web también
          se puede cancelar desde el enlace de tu recibo de Dodo Payments. Una suscripción del App
          Store se cancela en las suscripciones de tu cuenta de Apple.
        </p>
        <h2>¿Cómo elimino mi cuenta?</h2>
        <p>
          En la app: <strong>Perfil → Eliminar cuenta</strong>. Consulta{" "}
          <Link href={`${to("privacy")}#delete`}>qué se borra</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Privacidad | Oyno",
      description: "Qué guarda Oyno, qué no ve nunca y cómo borrarlo todo.",
    },
    eyebrow: "Privacidad",
    heading: "Tus tardes son tuyas",
    updatedLabel: "Última actualización",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno está gestionada por Teimur Gasanov. Es una app para iPhone que pausa las apps que
          elige un padre o una madre durante las horas que marca y le sugiere juegos cortos para
          hacer con su hijo o hija. Esta página explica qué guardan la app y este sitio web, por
          qué y cómo eliminarlo.
        </p>

        <h2>Qué guardamos</h2>
        <h3>Tu cuenta</h3>
        <p>
          Una dirección de correo electrónico y, si inicias sesión con Apple, Google o Facebook, el
          identificador que nos da ese proveedor, junto con el nombre y la dirección de correo que
          comparte. Si usas Ocultar mi correo electrónico al iniciar sesión con Apple, solo vemos
          la dirección de reenvío.
        </p>
        <h3>Tus partidas</h3>
        <p>
          Cada partida que juegas, cuánto duró y qué juego era se quedan en tu móvil. Para que un
          móvil nuevo o una reinstalación conserven tu planeta, guardamos con tu cuenta una copia
          de dos totales: cuántas partidas has jugado y cuántos minutos. Nada de esto identifica a
          un menor: Oyno nunca pide el nombre, la edad ni una foto de tu peque. Las respuestas que
          das a las preguntas de este sitio web (por ejemplo, un rango de edad) se guardan con el
          registro de tu suscripción, para saber qué preguntas llevan a juegos a los que la gente
          sigue jugando.
        </p>
        <h3>Tu suscripción</h3>
        <p>
          Si te suscribiste en la app: el identificador de la transacción de Apple, el producto,
          la fecha de vencimiento y si está activa. Si te suscribiste en la web: Dodo Payments es
          el vendedor registrado (merchant of record) y conserva los datos de tu tarjeta, que nosotros
          nunca vemos. Guardamos los identificadores de cliente y de suscripción que nos da Dodo,
          el estado y el final del periodo pagado.
        </p>
        <h3>Analítica del producto</h3>
        <p>
          Registramos con Amplitude qué pantallas se abren y qué acciones se realizan (una partida
          iniciada, una pantalla de pago vista), para detectar en qué puntos la app resulta
          confusa.
        </p>
        <h3>Publicidad</h3>
        <p>
          Este sitio web carga el píxel de Meta para medir qué anuncios atraen a personas que se
          suscriben. Cuando empieza una suscripción, enviamos a Meta una dirección de correo
          cifrada con hash para poder asociar la conversión. El hash se genera en nuestro
          servidor, nunca en tu navegador.
        </p>

        <h2>Lo que nunca sale de tu móvil</h2>
        <p>
          Oyno usa la API de Tiempo de uso de Apple para pausar apps. Apple entrega a la app
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
            <strong>Vercel</strong>: el alojamiento de este sitio web y de la API con la que se
            comunica la app.
          </li>
          <li>
            <strong>Dodo Payments</strong>: vendedor registrado (merchant of record) de las
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
        <p>No vendemos tus datos ni los compartimos con intermediarios de datos.</p>

        <h2 id="delete">Borrarlo todo</h2>
        <p>
          En la app: <strong>Perfil → Eliminar cuenta</strong>. Borra tu cuenta, los totales de los
          que guardamos copia y las partidas de tu móvil, de inmediato y de forma irreversible.
        </p>
        <p>
          ¿Iniciaste sesión con Facebook? También puedes quitar Oyno en Facebook, en{" "}
          <strong>Configuración y privacidad → Configuración → Aplicaciones y sitios web</strong>. Así
          Facebook deja de compartir datos con nosotros, pero lo que borra tus datos es el paso
          anterior.
        </p>
        <p>
          Eliminar tu cuenta no cancela la suscripción. Cancélala primero (consulta{" "}
          <Link href={to("support")}>Ayuda</Link>) y después elimina la cuenta. O escribe a{" "}
          {SUPPORT} y haremos las dos cosas y te lo confirmaremos.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes acceder a tus datos, rectificarlos, exportarlos y suprimirlos, así como oponerte a
          su tratamiento. Escribe a {SUPPORT} para cualquier cosa que la app no haga directamente.
        </p>

        <h2>Menores</h2>
        <p>
          Oyno es para madres y padres. Las cuentas son para personas adultas, y la app no recoge
          ningún dato del peque con quien juegas.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Condiciones | Oyno",
      description: "Las condiciones de uso de Oyno y de la suscripción que se vende en este sitio.",
    },
    eyebrow: "Condiciones del servicio",
    heading: "Condiciones",
    updatedLabel: "Última actualización",
    updated: UPDATED,
    body: (
      <>
        <p>
          Estas condiciones se aplican a la app Oyno y a este sitio web, ambos gestionados por
          Teimur Gasanov. Usar cualquiera de ellos supone aceptarlas.
        </p>

        <h2>Qué es Oyno</h2>
        <p>
          Una herramienta que pausa las apps que eliges en tu propio iPhone durante las horas que
          marcas, sugiere juegos cortos para hacer con tu hijo o hija y lleva un registro de las
          partidas que juegas. Los juegos son sugerencias. Tú decides si un juego es seguro y
          adecuado para tu peque y para tu espacio, y tú lo supervisas.
        </p>

        <h2>Tu cuenta</h2>
        <p>
          Necesitas una cuenta para que una suscripción comprada en la web se active en la app.
          No compartas tus datos de acceso. Puedes eliminar la cuenta en cualquier momento desde{" "}
          <strong>Perfil → Eliminar cuenta</strong>.
        </p>

        <h2>Suscripciones</h2>
        <h3>Compradas en este sitio web</h3>
        <p>
          El pago lo cobra Dodo Payments, el vendedor registrado (merchant of record), cuyas
          condiciones se aplican a la transacción. Las suscripciones se renuevan automáticamente
          con la periodicidad que elegiste hasta que las canceles. Los precios se muestran en tu
          moneda antes de pagar e incluyen los impuestos que Dodo deba recaudar. Si Oyno no es
          para ti, pide a {SUPPORT} el reembolso íntegro en un plazo de 14 días desde un pago.
        </p>
        <h3>Compradas en la app</h3>
        <p>
          Apple cobra el pago según sus propias condiciones, incluido el contrato de licencia
          estándar de Apple para el usuario final de aplicaciones con licencia. La prueba gratis
          de 3 días es la oferta introductoria de Apple; si no cancelas antes de que termine,
          Apple te cobra el plan que elegiste y lo renueva hasta que lo canceles en las
          suscripciones de tu cuenta de Apple. Los reembolsos los concede Apple.
        </p>
        <h3>Cuando termina una suscripción</h3>
        <p>
          Tu planeta y tus partidas anteriores se mantienen. El Tiempo en familia y los juegos
          nuevos se detienen hasta que vuelvas a suscribirte.
        </p>

        <h2>Cambios y disponibilidad</h2>
        <p>
          Mejoramos Oyno con el tiempo y podemos cambiar o retirar funciones. Si un cambio te quita
          algo por lo que pagaste, escribe a {SUPPORT} y lo solucionaremos. Trabajamos para que el
          servicio siga funcionando, pero no podemos garantizar que nunca se interrumpa.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Oyno se ofrece “tal cual”. En la medida en que la ley lo permita, nuestra
          responsabilidad por cualquier reclamación se limita a lo que nos hayas pagado en los 12
          meses anteriores a ella. Nada de lo aquí dispuesto limita los derechos que te reconoce la
          normativa de protección de los consumidores.
        </p>

        <h2>Contacto</h2>
        <p>
          Preguntas sobre estas condiciones: {SUPPORT}. Nuestra{" "}
          <Link href={to("privacy")}>política de privacidad</Link> explica cómo tratamos tus datos.
        </p>
      </>
    ),
  },
};
