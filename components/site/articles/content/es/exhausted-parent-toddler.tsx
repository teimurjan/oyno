import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../exhausted-parent-toddler";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Qué hacer con un niño pequeño cuando estás agotado",
  description:
    "¿Demasiado cansado para jugar, pero tu peque no? Formas honestas de pasar la tarde y juegos para jugar tumbado casi sin energía.",
  body: (
    <>
      <p>
        Hay tardes en las que no te queda nada. Has trabajado todo el día, en casa hay mucho ruido y tu peque quiere
        que le persigas, construyas y cantes. Tú quieres tumbarte en el suelo y no moverte.
      </p>
      <p>
        Es normal estar ahí. Este artículo no te va a pedir que te esfuerces más. Te va a dar unas cuantas formas de
        estar con tu peque que te cuestan muy poco.
      </p>

      <h2>Baja el listón a propósito</h2>
      <p>
        No necesitas una manualidad, un plan ni la casa recogida. Lo que un niño pequeño saca de ti es atención, y la
        atención puede venir de una madre o un padre tumbados.
      </p>
      <p>
        La hoja de Harvard sobre el ida y vuelta (serve and return) lo resume en unos pocos pasos pequeños: fíjate en lo
        que tiene la atención de tu peque y compártelo, devuélvele el “saque” con apoyo, pon nombre a lo que ve o siente,
        turnaos y espera <Cite id="serve-return" />. Todo eso se puede hacer con los ojos medio cerrados.
      </p>
      <p>
        Conozco el tirón del móvil en estas noches. Probé los bloqueadores y borré las redes sociales, y el hábito siguió
        ahí. Así que este artículo no te pide fuerza de voluntad. Te da un juego para tener a mano.
      </p>

      <h2>Para un peque de menos de dos años</h2>
      <p>
        Prueba un juego con una pausa. En <GameLink id="piggy-pause-toes" />, tu peque se sienta en tu regazo con los
        pies descalzos. Recita “este compró un huevito” dedo a dedo, cada vez más despacio. Para en seco antes del último
        dedo y deja el tuyo en el aire hasta que tu peque te mire. Luego termina con las cosquillas de “y este pícaro
        gordo se lo comió”.
      </p>
      <p>
        A esta edad saben a quién le toca. Bebés de 9 a 18 meses en juegos por turnos como dar y tomar o el cucú-tras
        avisaban cuando el adulto se saltaba un turno <Cite id="ross-lollis-1987" />. Tu pausa es un turno que pueden
        aprovechar.
      </p>
      <p>
        <GameLink id="what-can-you-hear" /> pide todavía menos. Tumbaos sin moveros, cerrad los ojos y susurra “¿qué
        oyes?”. Señale lo que señale o diga lo que diga tu peque, nombradlo juntos: la nevera, un coche en la calle.
        Luego buscad por turnos un sonido nuevo cada uno.
      </p>

      <h2>A partir de dos años: túmbate y pon una regla</h2>
      <p>
        Estos cuatro son para peques de 2 años en adelante, y cada uno tiene una sola regla. Con todos puedes quedarte
        tumbado.
      </p>
      <ul>
        <li>
          <GameLink id="pocket-kiss-hand" />: dale un beso en la palma de una mano a tu peque y ayúdale a cerrar las dos
          en puño para guardar el beso. Canta un verso de una canción y luego pregunta “¿en qué mano está el beso?”.
        </li>
        <li>
          <GameLink id="shy-tortoise-feet" />: tus pies bajo la manta son dos tortugas tímidas que solo asoman cuando tu
          peque cierra los ojos. En cuanto mira, las dos se esconden.
        </li>
        <li>
          <GameLink id="finger-candle-blow" />: levanta un dedo como si fuera una vela. Un soplido rápido hace que tiemble
          y vuelva a ponerse recta, y solo un soplido largo y lento la dobla.
        </li>
        <li>
          <GameLink id="touch-the-bear" />: eres un oso dormido en el sofá. Cada grito te hace roncar más fuerte, y solo
          una mano en tu zarpa te despierta.
        </li>
      </ul>
      <p>
        Unos investigadores que estudiaban el autocontrol pidieron a niños de 22 a 45 meses que esperaran una golosina,
        caminaran despacio por una línea y susurraran <Cite id="kochanska-2000" />. Estos juegos piden lo mismo, en
        pequeñas dosis, y el premio eres tú.
      </p>

      <h2>Cuando se acerca la hora de dormir</h2>
      <p>
        Si la tarde casi ha terminado, elige un juego que calme. En <GameLink id="sleepy-mirror-slow" />, os tumbáis uno
        al lado del otro y lo hacéis todo a cámara lenta, que hasta un bostezo dure una respiración entera. Tu peque
        copia cada movimiento lento, un estirón, una vuelta, frotarse los ojos. Deja que dirija uno o dos movimientos
        lentos, y acaba con el cierre de ojos más lento de todos.
      </p>
      <p>
        Hablar también cuenta. La guía de Harvard para 18 a 36 meses recomienda conversar, contar cuentos con un “¿qué
        vas a hacer ahora?” y hablar de sentimientos <Cite id="cdc-guide" />. Tumbaros a oscuras y preguntar qué ha sido
        lo mejor del día es una buena forma de acabar.
      </p>

      <h2>Sé amable contigo</h2>
      <ul>
        <li>Cinco minutos de juego y luego diez minutos tranquilos uno al lado del otro son una buena tarde.</li>
        <li>Si un juego no funciona, para. Mañana prueba otro.</li>
        <li>Si puedes, cámbiate el turno con otro adulto, aunque sea veinte minutos.</li>
      </ul>
      <p>
        Si el agotamiento no se va al descansar, o te sientes de bajón casi todos los días, habla con tu médico. Es un
        tema de salud, y merece cuidados.
      </p>
      <p>
        Para más, mira los <Link href="/games/energy/low">juegos de poca energía</Link> o los{" "}
        <Link href="/games/tag/lying-down">juegos tumbados</Link>. La página de{" "}
        <Link href="/games/age/toddlers">juegos para niños de 1 a 3 años</Link> los ordena según la energía que te
        queda.
      </p>
    </>
  ),
};
