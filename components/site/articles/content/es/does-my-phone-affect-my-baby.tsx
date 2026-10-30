import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../does-my-phone-affect-my-baby";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "¿Afecta a mi bebé que use el móvil?",
  description:
    "Qué muestran los experimentos de la cara inmóvil, qué solo relacionan los estudios del día a día y los pequeños hábitos que mantienen el ida y vuelta con tu bebé.",
  body: (
    <>
      <p>
        Si te lo estás preguntando, ya estás prestando atención. El móvil también es tu reloj, la forma de escribir al
        pediatra y lo que te ayuda a pasar una toma de madrugada. No va a desaparecer.
      </p>
      <p>
        La investigación es más tranquilizadora de lo que quizá temes. No señala el vistazo rápido. En un estudio con
        padres de niños de hasta 5 años, echar un vistazo rápido al móvil no cambiaba que el padre o la madre
        respondiera a su hijo <Cite id="vanden-abeele-2020" />. Lo que señala es el rato largo y absorto. Esto es lo que
        muestran los estudios, y hasta qué punto están seguros.
      </p>

      <h2>Qué muestran los experimentos</h2>
      <p>
        En un experimento, los investigadores cambian una cosa a propósito y observan qué pasa después. Eso les permite
        decir más sobre la causa.
      </p>
      <p>
        El clásico es el experimento de la cara inmóvil (still face). Madres de bebés de 1 a 4 meses mantenían la cara
        quieta, sin responder. En cuestión de minutos, los bebés se volvían recelosos y se retraían{" "}
        <Cite id="tronick-1978" />. Los bebés notan cuando el ida y vuelta se detiene.
      </p>
      <p>
        Una versión más reciente usó un móvil. Cuando las madres se volvían hacia el móvil en mitad de una tarea de cara
        inmóvil, los bebés de 7 a 24 meses se alteraban <Cite id="myruski-2018" />.
      </p>
      <p>
        Los niños pequeños intentan recuperarte. Madres de niños de 20 a 22 meses interrumpieron el juego durante dos
        minutos para rellenar un cuestionario, en el móvil o en papel. Los dos grupos respondieron menos, y sus hijos
        reclamaron su atención más veces <Cite id="konrad-2021" />. El papel tuvo el mismo efecto que el móvil. Lo que
        importó fue la pausa en la atención, no la pantalla.
      </p>
      <p>
        Las interrupciones también pueden costar aprendizaje. Unas madres enseñaron dos palabras nuevas a sus hijos de 2
        años. Los niños aprendieron la palabra enseñada sin pausa, pero no la que cortó una llamada{" "}
        <Cite id="reed-2017" />.
      </p>

      <h2>Qué solo relacionan los estudios del día a día</h2>
      <p>
        Otros estudios observan a las familias o preguntan a los padres por su día a día. Pueden encontrar cosas que van
        juntas. No pueden decir cuál causó la otra.
      </p>
      <ul>
        <li>
          En el estudio de la cara inmóvil con móvil, los bebés cuyas madres usaban más los dispositivos en casa se
          recuperaban menos <Cite id="myruski-2018" />. Esa parte es una relación.
        </li>
        <li>
          Los padres que decían que el móvil interrumpía más el tiempo en familia también decían que su hijo tenía más
          problemas de conducta <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Cuando se siguió durante seis meses a familias con un hijo de 0 a 5 años, la relación iba en los dos sentidos.
          Una conducta más difícil del niño predecía más interferencia de la tecnología a través del estrés de crianza,
          y esa interferencia a menudo predecía más conductas disruptivas después <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        Así que una madre o un padre estresado que coge el móvil no es el malo de esta historia. En ese estudio, el
        estrés y el uso del móvil iban de la mano.
      </p>

      <h2>Por qué un vistazo no es el problema</h2>
      <p>
        El estudio de los parques halló que un vistazo rápido no cambiaba nada, mientras que estar muy absorto en otras
        tareas tenía más o menos el mismo coste que el móvil <Cite id="vanden-abeele-2020" />. El móvil es una de muchas
        cosas que pueden alejarte.
      </p>
      <p>
        Las pausas también forman parte del juego. La guía de Harvard sobre el ida y vuelta (serve and return) para
        bebés incluye turnarse, esperar y practicar finales y comienzos, con el cucú-tras como ejemplo{" "}
        <Cite id="serve-return" />. Una pausa seguida de tu cara que vuelve es justo lo que es el cucú-tras.
      </p>

      <h2>Qué ayuda esta tarde</h2>
      <p>
        La buena noticia también está al otro lado. Cuando se enseñó a padres de bebés de 6 a 10 meses a responder con
        sensibilidad, mejoraron la atención de sus bebés y su capacidad de resolver problemas por sí solos{" "}
        <Cite id="landry-2006" />. Cuando se enseñó a padres de niños de 6 a 21 meses a seguir la iniciativa del niño,
        responder y disfrutar con él, sus hijos tenían mejor flexibilidad mental a los 4 años <Cite id="lind-2017" />.
      </p>
      <p>
        La Academia Americana de Pediatría aconseja que los ratos de juego entre padres e hijos sean sin pantallas,
        también para los padres, y sugiere activar el modo No molestar durante esos ratos <Cite id="aap-media-2016" />.
        Para empezar, basta un juego corto:
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" />: contesta a cualquier sonido de tu bebé como si fuera una frase, y luego espera su
          turno.
        </li>
        <li>
          <GameLink id="follow-their-gaze" />: mira lo que mire tu bebé y nómbralo con pocas palabras cariñosas.
        </li>
        <li>
          <GameLink id="hands-peekaboo" />: túmbate con tu bebé sobre el pecho y escóndete tras tus manos mientras cuentas
          despacio hasta tres.
        </li>
        <li>
          <GameLink id="copy-cat-faces" />: imita la cara o el sonido de tu bebé justo después de que lo haga.
        </li>
      </ul>
      <p>
        Para una tarde de lloros, <GameLink id="baby-mind-reader" /> te pide decir en voz alta lo que parece querer tu
        bebé, y luego hacer una pausa para su respuesta. <GameLink id="house-sounds" /> deja que el microondas y la puerta
        hagan el trabajo. Hay más en los <Link href="/games/age/babies">juegos para bebés</Link>, y la guía{" "}
        <Link href="/guides/phone-down-with-your-kid">Deja el móvil y juega con tu peque</Link> tiene pasos para el
        propio móvil.
      </p>
      <p>Si te preocupa cómo se está desarrollando tu bebé, habla con tu pediatra.</p>
    </>
  ),
};
