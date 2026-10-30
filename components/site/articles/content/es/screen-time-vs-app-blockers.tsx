import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Tiempo de uso, bloqueadores de apps y Oyno: qué hace cada uno por los padres",
  description:
    "Una comparación justa entre Tiempo de uso de Apple, las apps bloqueadoras y Oyno para padres que quieren recuperar la tarde, con lo que no hace cada uno.",
  body: (
    <>
      <p>
        Quieres sacar el móvil del rato que pasas con tu peque. En un iPhone hay tres tipos de herramientas para eso: los
        ajustes de “Tiempo de uso” que trae Apple, las apps hechas para bloquear otras apps, y Oyno, que hago yo. Este es
        un repaso honesto de cada una, incluido cuándo Oyno no es la opción adecuada.
      </p>
      <p>
        El objetivo merece una herramienta. La Academia Americana de Pediatría recomienda que las comidas y los ratos de
        juego entre padres e hijos sean sin pantallas, también para los padres, y dice que los padres pueden activar una
        opción de “no molestar” en el móvil durante esos ratos <Cite id="aap-media-2016" />.
      </p>

      <h2>“Tiempo de uso” de Apple</h2>
      <p>
        “Tiempo de uso” ya está en tu iPhone y no cuesta nada. En iOS 27, configuras un{" "}
        <strong>horario de tiempo de uso</strong> con franjas horarias, como una franja de tarde, y{" "}
        <strong>límites de tiempo</strong> que ponen tope a cuánto usas categorías de apps, como “Redes sociales” o
        “Juegos”. Una lista de <strong>“Siempre permitidas”</strong> mantiene abiertas las personas y apps que elijas, diga
        lo que diga el horario (
        <a href="https://support.apple.com/es-es/guide/iphone/iphb0c7313c9/ios">
          Soporte de Apple: Establecer horarios y límites de tiempo de uso
        </a>
        ). Un código de “Tiempo de uso” de cuatro dígitos impide cambiar esos ajustes sin él (
        <a href="https://support.apple.com/es-es/guide/iphone/iph272b4c4bd/ios">
          Soporte de Apple: Código de “Tiempo de uso”
        </a>
        ).
      </p>
      <p>
        Lo que hace bien: es gratis, viene incluido y puede cubrir también tu iPad y tu Mac si activas “Compartir entre
        dispositivos”. Apple también dice que un límite de tiempo cubre el sitio web de una app cuando la app declara uno.
      </p>
      <p>
        Lo que no hace: dice que no, y nada más. Cuando empieza la franja, nada te dice qué hacer con ese tiempo. Y si el
        código lo pones tú, lo sabes. Nuestra{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">guía paso a paso de “Tiempo de uso”</Link> explica la
        configuración y el problema del código.
      </p>

      <h2>Apps bloqueadoras y de concentración</h2>
      <p>
        En el App Store hay muchas apps hechas para bloquear o limitar otras apps. Cambian mucho de una a otra, así que
        esta sección te da preguntas que hacerte, no veredictos. Antes de pagar por una, comprueba:
      </p>
      <ul>
        <li>¿Es para tu propio móvil, o es un control parental para el dispositivo de un niño?</li>
        <li>¿Puedes fijar los días y las horas, o solo empezar una sesión a mano?</li>
        <li>¿Qué pasa cuando abres una app bloqueada, y qué fácil es saltárselo?</li>
        <li>¿Bloquea webs, apps o ambas?</li>
        <li>¿Te da algo que hacer con el tiempo que libera?</li>
      </ul>
      <p>
        Yo mismo probé los bloqueadores, y borré las redes sociales. El hábito siguió ahí. No es un veredicto sobre
        ninguna app. Es la razón por la que la última pregunta de esa lista me importa.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno es una app de iOS para madres y padres de peques de 0 a 5 años. Usa “Tiempo de uso” de Apple en tu propio
        iPhone. Configuras el Tiempo en familia: los días, las horas de inicio y fin, y tantos horarios como necesites.
        Durante el Tiempo en familia, las apps que elegiste quedan en pausa. Tú eliges qué apps están siempre permitidas y
        cuáles nunca, y hay un descanso de 20 minutos, “Ahora no”.
      </p>
      <p>
        Una app en pausa muestra la pantalla de Oyno. Su botón “Abrir Oyno” lleva a un juego. Hay 500, en tres franjas de
        edad y para energía baja, media o llena, de 5 a 15 minutos cada uno, y cada uno respaldado por un estudio y una
        guía. Un horario puede desbloquear tus apps un rato después de que tu peque y tú juguéis una partida. Cada partida
        hace crecer el pequeño planeta de tu familia. Oyno no pide el nombre ni la foto de ningún niño.
      </p>
      <p>
        La idea es que el bloqueo y el juego vayan juntos. En un experimento, los padres que, en un museo de ciencia,
        recibieron la indicación de usar mucho el móvil se sintieron más distraídos y menos conectados con sus hijos que
        los que recibieron la indicación de usarlo poco <Cite id="kushlev-dunn-2019" />. La respuesta de Oyno es poner algo
        en el hueco que deja el móvil.
      </p>

      <h2>Lo que no hace Oyno</h2>
      <ul>
        <li>
          <strong>Solo es para iOS.</strong> No hay versión para Android.
        </li>
        <li>
          <strong>Es para tu móvil, no para el de tu peque.</strong> No es un control parental para el dispositivo de un
          niño. Para eso, Apple tiene su propia guía,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Dispositivos Apple para peques y familias
          </a>
          .
        </li>
        <li>
          <strong>No bloquea webs.</strong> Pausa apps. Si el problema es una web, usa directamente “Tiempo de uso”.
        </li>
        <li>
          <strong>No es un candado.</strong> El descanso “Ahora no” abre tus apps durante 20 minutos. Es un empujoncito
          que te pones tú.
        </li>
        <li>
          <strong>No es gratis.</strong> Es una suscripción mensual o anual, con una prueba gratuita de 3 días en el App
          Store. “Tiempo de uso” no cuesta nada.
        </li>
      </ul>

      <h2>Cómo elegir</h2>
      <p>
        Empieza por “Tiempo de uso”. Es gratis, y una semana con él te dirá mucho. Si la franja de la tarde aguanta y
        estás contento, quédate ahí.
      </p>
      <p>
        Mira una app bloqueadora si tu problema es sobre todo la jornada de trabajo, las webs o un móvil Android, porque
        Oyno no cubre eso. Hazte las preguntas de arriba, y comprueba que la app que elijas cubre las tuyas.
      </p>
      <p>
        Mira Oyno si tu peque tiene menos de 6 años, el rato que quieres recuperar es el que pasas con él, y bloquear sin
        más no funcionó porque el hueco que dejaba se llenaba con otra cosa del móvil.
      </p>
      <p>
        Elijas lo que elijas, ten un juego preparado para la primera noche. Con un bebé, prueba{" "}
        <GameLink id="babble-back" />: espera a que haga cualquier sonido y contéstale como si fuera una frase de verdad.
        Con un niño pequeño, prueba <GameLink id="pocket-kiss-hand" />, donde un beso se esconde en uno de sus puños. Con
        un niño de 3 a 5 años, prueba <GameLink id="countdown-stop" /> o <GameLink id="sleepy-lion" />, que puedes jugar
        tumbado. Hay más en los <Link href="/games/energy/low">juegos de poca energía para padres cansados</Link>.
      </p>
    </>
  ),
};
