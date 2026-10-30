import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Tiempo en pantalla, bloqueadores de apps y Oyno: qué hace cada uno por mamás y papás",
  description:
    "Una comparación justa entre Tiempo en pantalla de Apple, las apps para bloquear apps y Oyno para mamás y papás que quieren recuperar su tarde, con lo que no hace cada uno.",
  body: (
    <>
      <p>
        Quieres sacar el celular de la hora que pasas con tu peque. En un iPhone hay tres tipos de herramientas para
        eso: la configuración de Tiempo en pantalla que trae Apple, las apps hechas para bloquear otras apps, y Oyno,
        que hago yo. Esta es una mirada honesta a cada una, incluido cuándo Oyno no es la opción correcta.
      </p>
      <p>
        La meta merece una herramienta. La Academia Americana de Pediatría recomienda que las comidas y los ratos de
        juego entre mamá o papá e hijo sean sin pantallas, para los adultos y para los niños, y dice que mamá y papá
        pueden activar la opción “no molestar” en el celular durante esos ratos <Cite id="aap-media-2016" />.
      </p>

      <h2>Tiempo en pantalla de Apple</h2>
      <p>
        Tiempo en pantalla ya viene en tu iPhone y no cuesta nada. En iOS 27, fijas un{" "}
        <strong>horario de Tiempo en pantalla</strong> con franjas de tiempo, como una franja para la tarde, y{" "}
        <strong>tiempos permitidos</strong> que limitan cuánto usas ciertas categorías de apps, como Redes sociales o
        Juegos. Una lista de <strong>Siempre permitido</strong> deja abiertas a las personas y las apps que escojas,
        diga lo que diga el horario (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Soporte de Apple: configurar horarios y tiempos permitidos
        </a>
        ). Un código de Tiempo en pantalla de cuatro dígitos evita que cambies esa configuración sin él (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Soporte de Apple: código de Tiempo en pantalla
        </a>
        ).
      </p>
      <p>
        Lo que hace bien: es gratis, viene integrado y también puede cubrir tu iPad y tu Mac si activas Compartir entre
        dispositivos. Apple también dice que un tiempo permitido cubre el sitio web de una app cuando la app declara
        uno.
      </p>
      <p>
        Lo que no hace: dice que no, y nada más. Cuando empieza la franja, nada te dice qué hacer con ese tiempo. Y si
        el código lo pones tú, lo sabes. Nuestra{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">guía paso a paso de Tiempo en pantalla</Link> cubre la
        configuración y el problema del código.
      </p>

      <h2>Apps para bloquear apps y para concentrarte</h2>
      <p>
        En el App Store hay muchas apps hechas para bloquear o limitar otras apps. Cambian mucho de una a otra, así que
        esta sección te da preguntas para hacerte, no veredictos. Antes de pagar por una, revisa:
      </p>
      <ul>
        <li>¿Es para tu propio celular, o es un control parental para el dispositivo de un niño?</li>
        <li>¿Puedes fijar los días y las horas, o solo iniciar una sesión a mano?</li>
        <li>¿Qué pasa cuando abres una app bloqueada, y qué tan fácil es saltártelo?</li>
        <li>¿Bloquea sitios web, apps o las dos cosas?</li>
        <li>¿Te da algo que hacer con el tiempo que libera?</li>
      </ul>
      <p>
        Yo mismo probé los bloqueadores, y borré las redes sociales. El hábito se quedó. No es un veredicto sobre
        ninguna app. Es la razón por la que la última pregunta de esa lista me importa.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno es una app para iOS para mamás y papás de niños de 0 a 5 años. Usa Tiempo en pantalla de Apple en tu
        propio iPhone. Configuras el Tiempo en familia: los días, la hora de inicio y la de fin, y todos los horarios
        que necesites. Durante el Tiempo en familia, las apps que escogiste quedan en pausa. Tú eliges qué apps están
        siempre permitidas y cuáles nunca, y hay una pausa de 20 minutos con “Ahora no”.
      </p>
      <p>
        Una app en pausa muestra la pantalla de Oyno. Su botón “Abrir Oyno” te lleva a un juego. Hay 500, en tres
        rangos de edad y para energía baja, media o alta, cada uno de 5 a 15 minutos, y cada uno respaldado por un
        estudio y una guía. Un horario puede desbloquear tus apps por un rato después de que tú y tu peque jueguen una
        ronda. Cada ronda hace crecer el pequeño planeta de tu familia. Oyno no te pide el nombre ni la foto de tu
        peque.
      </p>
      <p>
        La idea es que el bloqueo y el juego vengan juntos. En un experimento, las mamás y los papás en un museo de
        ciencias a quienes se les pidió usar mucho el celular se sintieron más distraídos y menos conectados con sus
        hijos que aquellos a quienes se les pidió usarlo poco <Cite id="kushlev-dunn-2019" />. La respuesta de Oyno es
        poner algo en el hueco que deja el celular.
      </p>

      <h2>Lo que Oyno no hace</h2>
      <ul>
        <li>
          <strong>Solo es para iOS.</strong> No hay versión para Android.
        </li>
        <li>
          <strong>Es para tu celular, no el de tu peque.</strong> No es un control parental para el dispositivo de un
          niño. Para eso, Apple tiene su propia guía,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Dispositivos Apple para niños y familias
          </a>
          .
        </li>
        <li>
          <strong>No bloquea sitios web.</strong> Pausa apps. Si el problema es un sitio web, usa Tiempo en pantalla
          directamente.
        </li>
        <li>
          <strong>No es un candado.</strong> La pausa de “Ahora no” abre tus apps por 20 minutos. Es un empujoncito que
          te pones a ti mismo.
        </li>
        <li>
          <strong>No es gratis.</strong> Es una suscripción mensual o anual, con una prueba gratis de 3 días en el App
          Store. Tiempo en pantalla no cuesta nada.
        </li>
      </ul>

      <h2>Cómo escoger</h2>
      <p>
        Empieza con Tiempo en pantalla. Es gratis, y una semana con él te va a decir mucho. Si la franja de la tarde
        aguanta y estás contento, ahí párale.
      </p>
      <p>
        Busca una app bloqueadora si tu problema es más que nada la jornada de trabajo, los sitios web o un celular
        Android, porque Oyno no cubre eso. Hazte las preguntas de arriba, y revisa que la app que escojas cubra las
        tuyas.
      </p>
      <p>
        Busca Oyno si tu peque tiene menos de 6 años, la hora que quieres recuperar es la que pasas con tu peque, y
        bloquear por sí solo no funcionó porque el hueco que dejaba se llenaba con otra cosa del celular.
      </p>
      <p>
        Escojas lo que escojas, ten un juego listo para la primera noche. Con un bebé, prueba{" "}
        <GameLink id="babble-back" />: espera cualquier sonido y contéstale como si fuera una frase de verdad. Con un
        niño pequeño, prueba <GameLink id="pocket-kiss-hand" />, donde un beso se esconde en uno de sus puños. Con un
        niño de preescolar, prueba <GameLink id="countdown-stop" /> o <GameLink id="sleepy-lion" />, que puedes jugar
        acostado. Hay más en los{" "}
        <Link href="/games/energy/low">juegos con poca energía para papás cansados</Link>.
      </p>
    </>
  ),
};
