import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../stop-checking-phone-evening";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Cómo dejar de mirar el móvil por la tarde",
  description:
    "Por qué mirar el móvil por la tarde es un hábito, y pasos para hoy: menos avisos, el móvil en otra habitación, una franja fija y un juego al que recurrir.",
  body: (
    <>
      <p>
        Trabajo todo el día, llego a casa y voy a por el móvil. Probé los bloqueadores y borré las redes sociales, y el
        hábito siguió ahí. Si tus tardes van igual, casi todos los pasos de abajo se apoyan en un estudio. Ninguno te pide
        más fuerza de voluntad.
      </p>

      <h2>Por qué lo miras una y otra vez</h2>
      <p>
        Unos investigadores que estudiaron a usuarios de smartphone encontraron un “hábito de comprobación”: vistazos
        breves y repetidos a contenidos a los que se llega rápido. Los usuarios lo vivían más como una molestia que como
        una adicción <Cite id="oulasvirta-2012" />. Si mirar el móvil por la tarde te molesta más de lo que te gusta,
        estás en buena compañía.
      </p>
      <p>
        Los hábitos funcionan con la cabeza en otra parte. En estudios de diario, las personas que hacían algo que hacían
        casi a diario y en el mismo entorno solían pensar en otra cosa <Cite id="wood-2002" />. El sofá después del
        trabajo, cada día, es ese tipo de entorno.
      </p>
      <p>
        Seguramente lo miras más de lo que crees. Jóvenes adultos cuyos móviles registraban su uso lo cogían unas 85 veces
        al día y lo usaban unas cinco horas, aproximadamente el doble de lo que calculaban <Cite id="andrews-2015" />. Tu
        iPhone lleva la misma cuenta. El{" "}
        <a href="https://support.apple.com/es-es/guide/iphone/iphbfa595995/ios">informe de “Tiempo de uso”</a> muestra
        tus consultas del dispositivo de cada día. Míralo una vez, sin juzgarte, para saber de dónde partes.
      </p>

      <h2>Reduce los avisos, no los elimines</h2>
      <p>
        Cada vibración es una invitación. Las notificaciones por sí solas, sin que nadie tocara el móvil, empeoraron una
        tarea de atención casi tanto como atender una llamada o escribir un mensaje <Cite id="stothart-2015" />.
      </p>
      <p>
        Apagarlas todas tampoco es la solución. En un ensayo, se asignó al azar a las personas a recibir las
        notificaciones como siempre, agrupadas tres veces al día o nunca. El grupo de notificaciones agrupadas se sintió
        más atento, de mejor humor, con más control sobre el móvil y menos estresado. El grupo sin notificaciones se
        sintió más ansioso <Cite id="fitz-2019" />.
      </p>
      <ul>
        <li>
          Activa el{" "}
          <a href="https://support.apple.com/es-es/guide/iphone/iph7c3d96bab/ios">resumen programado</a> y mete en él
          tus apps más ruidosas. Pon un resumen para después de la hora de dormir.
        </li>
        <li>
          Configura un{" "}
          <a href="https://support.apple.com/es-es/guide/iphone/iphd6288a67f/ios">modo de concentración</a> para la
          tarde que deje pasar las llamadas de unas pocas personas y retenga el resto.
        </li>
      </ul>

      <h2>Cambia el móvil de sitio</h2>
      <p>
        En un experimento, a personas que compartían una comida en un restaurante con amigos o familia se les indicó que
        dejaran el móvil sobre la mesa o que lo guardaran. Con el móvil en la mesa, se sintieron más distraídas y
        disfrutaron menos de la comida <Cite id="dwyer-2018" />.
      </p>
      <p>
        Dale al móvil un sitio donde vivir por la tarde que no sea tu bolsillo ni el brazo del sofá. Un cargador en el
        recibidor o en la cocina sirve. Déjalo ahí al entrar, boca abajo y en silencio, y acércate a él si lo necesitas.
      </p>

      <h2>A la misma hora, en el mismo sitio</h2>
      <p>
        Los hábitos nuevos se forman repitiendo en un entorno estable. Voluntarios que repitieron una conducta diaria
        nueva en el mismo contexto tardaron entre 18 y 254 días en alcanzar su máximo de automatismo, y saltarse un día no
        lo afectó de forma apreciable <Cite id="lally-2010" />. Así que elige una franja y mantenla fija. No esperes que
        sea fácil la primera semana, y no lo dejes tras una mala noche.
      </p>
      <p>
        La Academia Americana de Pediatría aconseja que las comidas y los ratos de juego entre padres e hijos sean sin
        pantallas, también para los padres, y sugiere activar el modo No molestar durante esos ratos{" "}
        <Cite id="aap-media-2016" />. La cena es una buena primera franja. También lo son los primeros 15 minutos después
        de llegar a casa.
      </p>
      <p>
        Si quieres que el móvil vigile la franja por ti, “Tiempo de uso” puede{" "}
        <a href="https://support.apple.com/es-es/guide/iphone/iphb0c7313c9/ios">
          programar cuándo están disponibles las apps
        </a>
        . La guía de{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">Tiempo de uso para las tardes en familia</Link> lo explica
        paso a paso.
      </p>

      <h2>Ten un juego preparado</h2>
      <p>
        Las ganas de cogerlo seguirán llegando. Dales otro sitio adonde ir. En un experimento en un museo de ciencia, los
        padres a los que se pidió usar mucho el móvil se sintieron más distraídos y menos conectados con sus hijos que
        aquellos a los que se pidió usarlo poco <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>Elige un juego antes de que empiece la tarde, para no tener que pensar cuando llegue el momento:</p>
      <ul>
        <li>
          Con un bebé, <GameLink id="sock-puppet-chat" /> necesita un calcetín suelto y una voz de pito.
        </li>
        <li>
          Con un niño pequeño, en <GameLink id="what-can-you-hear" /> os tumbáis sin moveros y nombráis los sonidos de la
          casa. <GameLink id="give-and-take" /> es un juguete que va y viene de mano en mano.
        </li>
        <li>
          Con un niño de 3 a 5 años, <GameLink id="sleepy-lion" /> te deja roncar en el sofá mientras tu peque se acerca a
          escondidas. <GameLink id="rewind-the-day" /> recorre el día hacia atrás, de ahora hasta el desayuno, y{" "}
          <GameLink id="story-stones" /> construye un cuento de tres en tres palabras.
        </li>
      </ul>
      <p>
        Hay más en los <Link href="/games/energy/low">juegos de poca energía</Link>, para las noches en que apenas puedes
        sentarte.
      </p>
    </>
  ),
};
