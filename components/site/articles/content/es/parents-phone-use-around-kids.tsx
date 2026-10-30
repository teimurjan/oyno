import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../parents-phone-use-around-kids";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "¿Cuánto usan los padres el móvil delante de sus hijos?",
  description:
    "Lo que contaron los investigadores al observar a padres con niños pequeños en restaurantes, parques y laboratorios, y lo que esas cifras no dicen.",
  body: (
    <>
      <p>
        Si alguna vez has levantado la vista del móvil y has visto a tu peque mirándote, seguro que te has preguntado
        cómo estás comparado con otros. Este artículo se ciñe a lo que los investigadores vieron y contaron al observar a
        padres con sus hijos. Cuando un estudio no da una cifra, lo decimos.
      </p>

      <h2>En la mesa</h2>
      <p>
        Un estudio mandó observadores a restaurantes de comida rápida. Observaron a 55 adultos que comían con niños
        pequeños. La mayoría usó el móvil durante la comida. Los más absortos a menudo respondían a su hijo tarde o con
        brusquedad <Cite id="radesky-2014" />.
      </p>
      <p>
        Ese estudio dice “la mayoría”, no da una cifra por horas. Te dice lo habitual que era el móvil en la mesa, no
        cuánto tiempo estuvo fuera.
      </p>

      <h2>En el parque</h2>
      <p>
        Un estudio posterior observó a 53 padres de niños de 0 a 5 años en salas de espera y parques. 23 de ellos usaron
        el móvil mientras los observaban <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        El mismo estudio contó lo que pasaba después. Mientras un padre o una madre estaba con el móvil, la probabilidad
        de que respondiera a una llamada de atención de su hijo era cinco veces menor. Un vistazo rápido al móvil no
        cambiaba nada. Estar muy absorto en otras tareas tenía más o menos el mismo coste{" "}
        <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        Una llamada de atención es cualquier cosa que hace un niño para que le hagas caso: señalar, llamarte, tirarte de
        la manga. Dicho claro, un padre metido de lleno en el móvil tenía muchas menos probabilidades de responder.
      </p>

      <h2>En el laboratorio</h2>
      <p>
        En un estudio de laboratorio se grabó a 225 madres y sus hijos de 6 años durante una tarea. Nadie pidió a las
        madres que usaran un dispositivo móvil, y aun así el 23% lo hizo. Las que lo usaron interactuaron menos con su
        hijo, sobre todo de forma no verbal <Cite id="radesky-2015" />.
      </p>
      <p>
        Estos niños eran mayores que la franja de 0 a 5 años de Oyno. Aun así, el estudio pone un porcentaje a lo a menudo
        que una madre o un padre coge un dispositivo delante de su hijo sin que nadie se lo pida.
      </p>

      <h2>A lo largo de un día entero</h2>
      <p>
        Ninguno de los estudios de arriba sigue a un padre durante un día entero con un registro del móvil. Para el día
        entero, las cifras de aquí vienen de adultos en general. Jóvenes adultos cuyos móviles registraban su uso lo
        cogían unas 85 veces al día y lo usaban unas cinco horas, aproximadamente el doble de lo que calculaban{" "}
        <Cite id="andrews-2015" />. No eran padres, y no se les contó estando con niños.
      </p>
      <p>
        Las encuestas hacen otra pregunta: ¿el móvil se mete por medio? La mayoría de las mujeres de un estudio dijeron
        que los dispositivos interrumpían a menudo el tiempo con su pareja <Cite id="mcdaniel-coyne-2016" />. Los padres de
        niños pequeños que decían que el móvil interrumpía más el tiempo en familia también decían que su hijo tenía más
        problemas de conducta <Cite id="mcdaniel-radesky-2018" />.
      </p>
      <p>
        Si quieres tu propia cifra, tu iPhone la cuenta. El{" "}
        <a href="https://support.apple.com/es-es/guide/iphone/iphbfa595995/ios">informe de “Tiempo de uso”</a> muestra
        cuántas veces has consultado el móvil cada día. Mira una tarde antes de decidir nada.
      </p>

      <h2>Lo que te cuesta a ti</h2>
      <p>
        Casi todos estos estudios se fijan en el niño. Un experimento se fijó en el padre. En un museo de ciencia, los
        padres a los que se pidió usar mucho el móvil se sintieron más distraídos y menos conectados con sus hijos que
        aquellos a los que se pidió usarlo poco <Cite id="kushlev-dunn-2019" />. El rato con tu peque se vive distinto
        cuando el móvil está en medio.
      </p>
      <p>
        La Academia Americana de Pediatría resume así la investigación: un uso intenso de los dispositivos móviles por
        parte de los padres se asocia con menos interacciones verbales y no verbales entre padres e hijos{" "}
        <Cite id="aap-media-2016" />.
      </p>

      <h2>Lo que las cifras no dicen</h2>
      <p>
        Son estudios observacionales. Muestran lo que hacían los padres y lo que iba asociado. No pueden demostrar que el
        móvil causara la conducta de un niño. En un estudio que siguió a familias durante seis meses, la relación iba en
        los dos sentidos: una conducta más difícil del niño predecía más interferencia de la tecnología a través del
        estrés de crianza, y esa interferencia a menudo predecía más conductas disruptivas después{" "}
        <Cite id="mcdaniel-radesky-2018b" />.
      </p>
      <p>
        Tampoco dicen que cada mirada sea un problema. El estudio del parque no encontró ningún coste en un vistazo rápido{" "}
        <Cite id="vanden-abeele-2020" />. Lo que señalan las cifras es el rato largo y absorto.
      </p>
      <p>
        La Academia Americana de Pediatría aconseja que las comidas y los ratos de juego entre padres e hijos sean sin
        pantallas, también para los padres, y sugiere activar el modo No molestar durante esos ratos{" "}
        <Cite id="aap-media-2016" />. Un juego corto llena ese tiempo sin mucho esfuerzo. Con un bebé, prueba{" "}
        <GameLink id="hands-peekaboo" /> o <GameLink id="babble-back" />. Con un niño pequeño, prueba{" "}
        <GameLink id="give-and-take" /> o <GameLink id="animal-sound-swap" />. Con un niño de 3 a 5 años, prueba{" "}
        <GameLink id="pretend-phone" />, donde el único teléfono es tu mano. Hay más en los{" "}
        <Link href="/games/age/toddlers">juegos para niños de 1 a 3 años</Link> y en los{" "}
        <Link href="/games/age/babies">juegos para bebés</Link>, y la guía{" "}
        <Link href="/guides/phone-down-with-your-kid">Deja el móvil y juega con tu peque</Link> tiene pasos para la tarde.
      </p>
    </>
  ),
};
