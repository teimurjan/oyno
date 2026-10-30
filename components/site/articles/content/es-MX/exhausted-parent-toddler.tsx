import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../exhausted-parent-toddler";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Qué hacer con tu peque cuando estás agotado",
  description:
    "¿Demasiado cansancio para jugar, pero tu peque no está cansado? Formas honestas de pasar la tarde y juegos que puedes jugar acostado, casi sin energía.",
  body: (
    <>
      <p>
        Hay tardes en que no queda nada. Trabajaste todo el día, la casa está llena de ruido, y tu peque quiere que lo
        persigas, que construyas y que cantes. Tú quieres acostarte en el piso y no moverte.
      </p>
      <p>
        Es normal estar ahí. Este texto no te va a decir que le eches más ganas. Te va a dar unas cuantas formas de
        estar con tu peque que te cuestan muy poco.
      </p>

      <h2>Baja la vara a propósito</h2>
      <p>
        No necesitas una manualidad, un plan ni el cuarto recogido. Lo que tu peque recibe de ti es atención, y la
        atención te la puede dar una mamá o un papá acostado.
      </p>
      <p>
        La hoja de Harvard sobre servir y devolver lo resume en unos pocos pasos chiquitos: fíjate en lo que tiene la
        atención de tu peque y compártelo, devuélvele con apoyo lo que te “sirve”, nombra lo que ve o siente, túrnense y
        espera <Cite id="serve-return" />. Todo eso se puede hacer con los ojos medio cerrados.
      </p>
      <p>
        Conozco el jalón del celular en estas noches. Probé los bloqueadores y borré las redes sociales, y el hábito
        se quedó. Así que este texto no te pide fuerza de voluntad. Te da un juego para tener listo.
      </p>

      <h2>Para un peque de menos de dos años</h2>
      <p>
        Prueba un juego con una pausa. En <GameLink id="piggy-pause-toes" />, tu peque se sienta en tus piernas con
        los pies descalzos. Recita “Este dedito compró un huevito” en cada dedo, más despacio con cada uno. Detente en
        seco antes del último y deja el dedo en el aire hasta que tu peque te mire. Luego termina con las cosquillas
        del “pícaro gordo”.
      </p>
      <p>
        Los niños de esta edad notan de quién es el turno. Bebés de 9 a 18 meses en juegos por turnos como dar y
        recibir y “¿dónde está? ¡aquí está!” hacían señas cuando el adulto se saltaba un turno{" "}
        <Cite id="ross-lollis-1987" />. Tu pausa es un turno que tu peque puede tomar.
      </p>
      <p>
        <GameLink id="what-can-you-hear" /> pide todavía menos. Acuéstense sin moverse, cierren los ojos y susurra
        “¿qué escuchas?”. Lo que tu peque señale o diga, nómbrenlo juntos: el refri, un carro allá afuera. Luego
        túrnense para encontrar un sonido nuevo cada quien.
      </p>

      <h2>Desde los dos años: acuéstate y da una regla</h2>
      <p>
        Estos cuatro son para peques de 2 años en adelante, y cada uno tiene una sola regla. Todos te dejan quedarte
        acostado.
      </p>
      <ul>
        <li>
          <GameLink id="pocket-kiss-hand" />: dale un beso en una palma y ayúdale a cerrar las dos manos en puño para
          guardar el beso. Canten un verso de una canción, y luego pregunta “¿en qué mano está el beso?”.
        </li>
        <li>
          <GameLink id="shy-tortoise-feet" />: tus pies bajo la cobija son dos tortugas tímidas que solo se asoman
          cuando tu peque cierra los ojos. En cuanto se asome, las dos se esconden.
        </li>
        <li>
          <GameLink id="finger-candle-blow" />: levanta un dedo como velita. Un soplido rápido la hace temblar y
          enderezarse otra vez, y solo un soplo largo y lento la dobla.
        </li>
        <li>
          <GameLink id="touch-the-bear" />: eres un oso dormido en el sillón. Cada grito te hace roncar más fuerte, y
          solo una mano en tu pata te despierta.
        </li>
      </ul>
      <p>
        Unos investigadores que estudiaban el autocontrol les pidieron a niños de 22 a 45 meses esperar un premio,
        caminar despacio sobre una línea y susurrar <Cite id="kochanska-2000" />. Estos juegos piden el mismo tipo de
        cosas, en dosis chiquitas, y el premio eres tú.
      </p>

      <h2>Cuando ya casi es hora de dormir</h2>
      <p>
        Si la tarde ya casi se acaba, escoge un juego que vaya bajando el ritmo. En{" "}
        <GameLink id="sleepy-mirror-slow" />, se acuestan lado a lado y hacen todo en cámara lenta, tanto que un
        bostezo tarda una respiración entera. Tu peque copia cada movimiento lento, una estirada, una vuelta, una
        tallada de ojos. Deja que dirija uno o dos movimientos lentos, y terminen cerrando los ojos más lento que
        nunca.
      </p>
      <p>
        Platicar también cuenta. La guía de Harvard para los 18 a 36 meses incluye plática, cuentos con “¿qué vas a
        hacer después?” y hablar de sentimientos <Cite id="cdc-guide" />. Acostarse a oscuras y preguntar qué fue lo
        mejor del día es una buena forma de terminar.
      </p>

      <h2>Sé amable contigo</h2>
      <ul>
        <li>Cinco minutos de un juego y luego diez minutos de calma uno junto al otro son una buena tarde.</li>
        <li>Si un juego no prende, para. Mañana prueba otro.</li>
        <li>Si puedes, cambia de tarea con otro adulto, aunque sea veinte minutos.</li>
      </ul>
      <p>
        Si el agotamiento no se quita con descanso, o te sientes decaído casi todos los días, platícalo con tu médico.
        Es un tema de salud, y merece atención.
      </p>
      <p>
        Para más, mira los <Link href="/games/energy/low">juegos con poca energía</Link> o los{" "}
        <Link href="/games/tag/lying-down">juegos para jugar acostados</Link>. La página de{" "}
        <Link href="/games/age/toddlers">juegos para niños pequeños</Link> los ordena por la energía que te queda.
      </p>
    </>
  ),
};
