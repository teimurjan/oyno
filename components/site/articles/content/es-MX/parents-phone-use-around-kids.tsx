import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../parents-phone-use-around-kids";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "¿Cuánto usan el celular los papás frente a sus hijos?",
  description:
    "Lo que contaron los investigadores al observar a mamás y papás con niños pequeños en restaurantes, parques y laboratorios, y lo que esos números no te dicen.",
  body: (
    <>
      <p>
        Si alguna vez levantaste la vista del celular y encontraste a tu peque mirándote, seguro te preguntaste cómo
        estás comparado con los demás. Este texto se queda en lo que los investigadores vieron y contaron al observar a
        mamás y papás con sus hijos. Cuando un estudio no da un número, lo decimos.
      </p>

      <h2>En la mesa</h2>
      <p>
        Un estudio mandó observadores a restaurantes de comida rápida. Observaron a 55 cuidadores que comían con niños
        pequeños. La mayoría usó el celular durante la comida. Los cuidadores más absortos en él a menudo le
        respondían tarde o con dureza a su hijo <Cite id="radesky-2014" />.
      </p>
      <p>
        Ese estudio dice “la mayoría”, no una cifra por hora. Te dice qué tan común era el celular en la mesa, no
        cuánto tiempo se quedaba fuera.
      </p>

      <h2>En el parque</h2>
      <p>
        Un estudio posterior observó a 53 mamás y papás de niños de 0 a 5 años en salas de espera y en parques. 23 de
        ellos usaron el celular mientras los observaban <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        El mismo estudio contó lo que pasó después. Mientras una mamá o un papá estaba en el celular, la probabilidad
        de que respondiera cuando su hijo buscaba su atención era cinco veces menor. Una mirada rápida al celular no
        hacía diferencia. Estar muy absorto en otras tareas tenía más o menos el mismo costo{" "}
        <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        Buscar tu atención es cualquier cosa que un niño hace para que lo voltees a ver: señalar, llamarte, jalarte la
        manga. Dicho simple, una mamá o un papá metido de lleno en el celular tenía muchas menos probabilidades de
        responder.
      </p>

      <h2>En el laboratorio</h2>
      <p>
        En un estudio de laboratorio, se filmó a 225 mamás y sus hijos de 6 años durante una tarea. Nadie les pidió a
        las mamás usar un dispositivo móvil, y el 23% lo usó de todos modos. Las que lo usaron tuvieron menos
        interacciones con su hijo, sobre todo las no verbales <Cite id="radesky-2015" />.
      </p>
      <p>
        Estos niños eran más grandes que el rango de Oyno, de 0 a 5 años. Aun así, el estudio le pone un porcentaje a
        qué tan seguido una mamá o un papá agarra un dispositivo frente a su hijo cuando nadie se lo pide.
      </p>

      <h2>A lo largo de un día entero</h2>
      <p>
        Ninguno de los estudios de arriba sigue a una mamá o a un papá durante un día entero con un registro del
        celular. Para un día entero, los números de aquí vienen de adultos en general. Adultos jóvenes cuyos celulares
        registraban su uso los agarraban unas 85 veces al día y los usaban unas cinco horas, más o menos el doble de lo
        que calculaban <Cite id="andrews-2015" />. No eran papás, y no se les contó estando con niños.
      </p>
      <p>
        Las encuestas hacen otra pregunta: ¿el celular se mete en medio? La mayoría de las mujeres de un estudio dijo
        que los dispositivos a menudo interrumpían el tiempo con su pareja <Cite id="mcdaniel-coyne-2016" />. Las
        mamás y los papás de niños pequeños que reportaron más interrupciones del celular durante el tiempo en familia
        también reportaron más problemas de conducta en su hijo <Cite id="mcdaniel-radesky-2018" />.
      </p>
      <p>
        Si quieres tu propio número, tu iPhone lo cuenta.{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          El informe de Tiempo en pantalla
        </a>{" "}
        muestra cuántas veces tomaste el celular cada día. Mira una tarde antes de decidir nada.
      </p>

      <h2>Lo que te cuesta a ti</h2>
      <p>
        Casi todos estos estudios se fijan en el niño. Un experimento se fijó en mamá y papá. En un museo de ciencias,
        a quienes se les pidió usar mucho el celular se sintieron más distraídos y menos conectados con sus hijos que
        aquellos a quienes se les pidió usarlo poco <Cite id="kushlev-dunn-2019" />. El tiempo con tu peque se siente
        distinto cuando el celular está de por medio.
      </p>
      <p>
        La Academia Americana de Pediatría resume la investigación así: el uso intenso de dispositivos móviles por
        parte de mamá o papá se relaciona con menos interacciones verbales y no verbales entre adultos e hijos{" "}
        <Cite id="aap-media-2016" />.
      </p>

      <h2>Lo que los números no te dicen</h2>
      <p>
        Son estudios observacionales. Muestran lo que hicieron mamá y papá y qué iba con eso. No pueden mostrar que el
        celular causó la conducta de un niño. En un estudio que siguió a familias durante seis meses, la relación iba
        en los dos sentidos: una conducta más difícil del niño predijo más interferencia de la tecnología a través del
        estrés de crianza, y esa interferencia a menudo predijo más conductas de desafío después{" "}
        <Cite id="mcdaniel-radesky-2018b" />.
      </p>
      <p>
        Tampoco dicen que cada mirada sea un problema. El estudio de los parques no encontró ningún costo en una mirada
        rápida <Cite id="vanden-abeele-2020" />. A lo que apuntan los números es al rato largo y absorto.
      </p>
      <p>
        La Academia Americana de Pediatría recomienda que las comidas y los ratos de juego entre mamá o papá e hijo
        sean sin pantallas, para los adultos y para los niños, y sugiere activar No molestar durante esos ratos{" "}
        <Cite id="aap-media-2016" />. Un juego corto llena ese tiempo sin mucho esfuerzo. Con un bebé, prueba{" "}
        <GameLink id="hands-peekaboo" /> o <GameLink id="babble-back" />. Con un niño pequeño, prueba{" "}
        <GameLink id="give-and-take" /> o <GameLink id="animal-sound-swap" />. Con un niño de preescolar, prueba{" "}
        <GameLink id="pretend-phone" />, donde el único teléfono es tu mano. Hay más en los{" "}
        <Link href="/games/age/toddlers">juegos para niños pequeños</Link> y en los{" "}
        <Link href="/games/age/babies">juegos para bebés</Link>, y la guía{" "}
        <Link href="/guides/phone-down-with-your-kid">Suelta el celular y juega con tu peque</Link> tiene pasos para
        la tarde.
      </p>
    </>
  ),
};
