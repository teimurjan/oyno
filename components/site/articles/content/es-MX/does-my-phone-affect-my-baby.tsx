import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../does-my-phone-affect-my-baby";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "¿Usar el celular afecta a mi bebé?",
  description:
    "Lo que muestran los experimentos de la cara inmóvil, lo que los estudios del día a día solo relacionan y los pequeños hábitos que mantienen el ida y vuelta con tu bebé.",
  body: (
    <>
      <p>
        Si te lo estás preguntando, ya estás poniendo atención. El celular también es como ves la hora, le escribes
        al pediatra y aguantas una toma de madrugada. No se va a ir a ningún lado.
      </p>
      <p>
        La investigación es más tranquila de lo que quizá temes. No apunta a la mirada rápida. En un estudio con mamás
        y papás de niños de hasta 5 años, echarle un vistazo rápido al celular no cambiaba si respondían a su hijo{" "}
        <Cite id="vanden-abeele-2020" />. A lo que apunta es al rato largo y absorto. Esto es lo que muestran los
        estudios, y qué tan seguros están.
      </p>

      <h2>Lo que muestran los experimentos</h2>
      <p>
        En un experimento, los investigadores cambian una cosa a propósito y observan qué pasa después. Eso les
        permite decir más sobre la causa.
      </p>
      <p>
        El clásico es el experimento de la cara inmóvil (still face). Mamás de bebés de 1 a 4 meses mantenían la cara
        quieta y sin respuesta. En cuestión de minutos, los bebés se ponían recelosos y se retraían{" "}
        <Cite id="tronick-1978" />. Los bebés notan cuando se detiene el ida y vuelta.
      </p>
      <p>
        Una versión más reciente usó un celular. Cuando las mamás se volteaban hacia el celular a mitad de una tarea de
        cara inmóvil, los bebés de 7 a 24 meses se alteraban <Cite id="myruski-2018" />.
      </p>
      <p>
        Los niños pequeños intentan recuperarte. Mamás de niños de 20 a 22 meses interrumpieron el juego dos minutos
        para llenar un cuestionario, en un celular o en papel. Los dos grupos se volvieron menos receptivos, y sus
        hijos buscaron su atención más veces <Cite id="konrad-2021" />. El papel hizo lo mismo que el celular. Lo que
        importó fue la pausa en la atención, no la pantalla.
      </p>
      <p>
        Las interrupciones también pueden costar aprendizaje. Unas mamás les enseñaron dos palabras nuevas a sus hijos
        de 2 años. Los niños aprendieron la palabra enseñada sin pausas, pero no la que cortó una llamada al celular{" "}
        <Cite id="reed-2017" />.
      </p>

      <h2>Lo que los estudios del día a día solo relacionan</h2>
      <p>
        Otros estudios observan a las familias o les preguntan a mamás y papás por sus días. Pueden encontrar cosas
        que van juntas. No pueden decir cuál causó cuál.
      </p>
      <ul>
        <li>
          En el estudio de la cara inmóvil con celular, los bebés cuyas mamás usaban más los dispositivos en casa se
          recuperaban menos <Cite id="myruski-2018" />. Esa parte es una relación.
        </li>
        <li>
          Las mamás y los papás que reportaron más interrupciones del celular durante el tiempo en familia también
          reportaron más problemas de conducta en su hijo <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Cuando se siguió durante seis meses a familias con un hijo de 0 a 5 años, la relación iba en los dos
          sentidos. Una conducta más difícil del niño predijo más interferencia de la tecnología a través del estrés
          de crianza, y esa interferencia a menudo predijo más conductas de desafío después{" "}
          <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        Así que una mamá o un papá estresado que agarra el celular no es el villano de esta historia. En ese estudio,
        el estrés y el uso del celular iban juntos.
      </p>

      <h2>Por qué una mirada no es el problema</h2>
      <p>
        El estudio de los parques encontró que una mirada rápida no hacía diferencia, mientras que estar muy absorto
        en otras tareas tenía más o menos el mismo costo que el celular <Cite id="vanden-abeele-2020" />. El celular
        es una de muchas cosas que te pueden alejar.
      </p>
      <p>
        Las pausas también son parte del juego. La guía de Harvard sobre servir y devolver para bebés incluye
        turnarse, esperar y practicar los finales y los comienzos, con el “¿dónde está? ¡aquí está!” como ejemplo{" "}
        <Cite id="serve-return" />. Una pausa seguida de tu cara que vuelve es justo lo que es ese juego.
      </p>

      <h2>Lo que ayuda hoy en la tarde</h2>
      <p>
        La buena noticia también está del otro lado. Cuando a mamás y papás de bebés de 6 a 10 meses se les asesoró
        en una crianza receptiva, mejoraron la atención de sus bebés y su capacidad de resolver problemas por su
        cuenta <Cite id="landry-2006" />. Cuando a mamás y papás de niños de 6 a 21 meses se les asesoró para seguir
        la iniciativa del niño, responderle y mostrarle gusto, sus hijos tuvieron mejor flexibilidad mental a los 4
        años <Cite id="lind-2017" />.
      </p>
      <p>
        La Academia Americana de Pediatría recomienda que los ratos de juego entre mamá o papá e hijo sean sin
        pantallas, para los adultos y para los niños, y sugiere activar No molestar durante esos ratos{" "}
        <Cite id="aap-media-2016" />. Un juego corto basta para empezar:
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" />: contesta cualquier sonido que haga tu bebé como si fuera una frase, y luego
          espera su turno.
        </li>
        <li>
          <GameLink id="follow-their-gaze" />: mira lo que tu bebé mira, y nómbralo con pocas palabras cariñosas.
        </li>
        <li>
          <GameLink id="hands-peekaboo" />: recuéstate con tu bebé sobre tu pecho y escóndete detrás de tus manos
          mientras cuentas lento hasta tres.
        </li>
        <li>
          <GameLink id="copy-cat-faces" />: imita la cara o el sonido de tu bebé un instante después de que lo haga.
        </li>
      </ul>
      <p>
        Para una tarde en que tu bebé anda inquieto, <GameLink id="baby-mind-reader" /> te pide decir en voz alta lo que
        parece querer, y luego hacer una pausa para su respuesta. <GameLink id="house-sounds" /> deja que el
        microondas y la puerta hagan el trabajo. Hay más en los{" "}
        <Link href="/games/age/babies">juegos para bebés</Link>, y la guía{" "}
        <Link href="/guides/phone-down-with-your-kid">Suelta el celular y juega con tu peque</Link> tiene pasos para
        el celular mismo.
      </p>
      <p>Si te preocupa cómo se está desarrollando tu bebé, platícalo con tu pediatra.</p>
    </>
  ),
};
