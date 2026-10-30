import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../ten-minute-activities-after-work";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Actividades de 10 minutos con tu peque al volver del trabajo",
  description:
    "Acabas de llegar y te quedan unos diez minutos de energía. Juegos cortos para bebés, niños pequeños y niños de 3 a 5 años que casi no necesitan preparación.",
  body: (
    <>
      <p>
        Entras, sueltas la bolsa y tu peque ya está agarrado a tus piernas. La cena te va a necesitar pronto, y no te
        queda mucho. Tienes unos diez minutos. Es suficiente para un buen juego.
      </p>
      <p>
        Yo también trabajo todo el día, y cuando llego a casa la mano se me va al móvil antes de quitarme el abrigo. Esos
        primeros minutos se pierden fácil. En un experimento, los padres que, en un museo de ciencia, recibieron la
        indicación de usar mucho el móvil se sintieron más distraídos y menos conectados con sus hijos que los que
        recibieron la indicación de usarlo poco <Cite id="kushlev-dunn-2019" />. Los juegos de abajo son una forma de
        pasar esos mismos minutos en el suelo.
      </p>

      <h2>Por qué diez minutos bastan</h2>
      <p>
        Un juego corto sigue siendo tiempo juntos de verdad. La hoja de Harvard sobre el ida y vuelta (serve and return)
        describe el intercambio que importa: fíjate en lo que tiene la atención de tu peque, compártelo, ponle nombre,
        turnaos y espera <Cite id="serve-return" />. Nada de eso necesita una hora.
      </p>
      <p>
        Todos estos juegos duran 10 minutos o menos y tienen como mucho tres pasos. Elige uno, juega hasta que tu peque
        pierda el interés y luego ponte con la cena.
      </p>

      <h2>Bebés: un juego en el suelo</h2>
      <p>
        Para un bebé que ya se sienta firme, prueba <GameLink id="ball-back" />. Siéntate frente a tu bebé con las piernas
        abiertas como un corralito y haz rodar una pelota despacio hasta su regazo. Tiende las manos y espera en silencio
        hasta que te la devuelva. Di “me toca”, vuelve a hacerla rodar y deja que las esperas sean cada vez más largas.
      </p>
      <p>
        La espera es tu parte del trabajo. En un ensayo, enseñar a padres de bebés de 6 a 10 meses a responder a su bebé
        mejoró la atención de los bebés y su capacidad de resolver problemas por sí solos <Cite id="landry-2006" />.
      </p>
      <p>
        Desde los 9 meses más o menos, cuando los bebés empiezan a seguir un dedo que señala, prueba{" "}
        <GameLink id="point-and-name" />. Con tu bebé en el regazo, señala algo al otro lado del cuarto y mantén el brazo
        así hasta que sus ojos lleguen a ello. Nómbralo una vez, despacio. Luego sigue tú su mirada, y nombra lo que mire
        fijamente. Los niños de un año mantenían la atención en un juguete durante más tiempo cuando su padre o su madre
        miraba y nombraba ese mismo juguete <Cite id="yu-smith-2016" />.
      </p>

      <h2>Niños pequeños: reglas cortas, turnos rápidos</h2>
      <p>Estos tres son para peques de 2 años en adelante, y puedes jugarlos todos sentado.</p>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: sentaos uno frente al otro con la pelota en las manos de tu peque. Di “espera,
          espera” despacio, luego “¡ya!”, y te la hace rodar. Alarga un poco la espera cada vez.
        </li>
        <li>
          <GameLink id="loud-soft-singing" />: cantad juntos una canción. La mano arriba significa fuerte, la mano en la
          rodilla significa un susurro. Luego decide la mano de tu peque.
        </li>
        <li>
          <GameLink id="tell-teddy" />: sienta al osito en la otra punta del cuarto y susúrrale a tu peque un mensaje
          corto, como “osito, a cenar”. Va hasta allí y se lo dice al osito, y tú contestas con la voz del osito.
        </li>
      </ul>
      <p>
        Esperar y susurrar son dos de las tareas que los investigadores usaron para estudiar el autocontrol en niños de 22
        a 45 meses <Cite id="kochanska-2000" />. Los juegos con música también cuentan. En un estudio, cantar, bailar y
        jugar con música juntos en casa a los 2 a 3 años predijo la atención y la autorregulación a los 5{" "}
        <Cite id="williams-2015" />.
      </p>

      <h2>Niños de 3 a 5 años: una regla para romper</h2>
      <p>
        A esta edad les encanta una regla que lo pone todo patas arriba. Para un peque de cuatro años en adelante, prueba{" "}
        <GameLink id="heads-mean-toes" />. Cuando dices “cabeza”, se toca los pies, y cuando dices “pies”, se toca la
        cabeza. Empieza despacio y luego ve más rápido. Puedes dirigirlo desde una silla. Se parece a una tarea de un
        estudio en el que niños de 4 a 6 años hacían el mismo cambio, y cómo lo hacían predijo sus resultados en el primer
        curso escolar <Cite id="ponitz-2009" />.
      </p>
      <p>
        Si tu peque llega revolucionado de la guarde o del cole, <GameLink id="closed-hands" /> baja el ritmo. Cierra los
        ojos y extiende las dos manos cerradas. Contad juntos despacio hasta veinte, y si abre los ojos o las manos, vuelta
        a empezar. Al llegar a veinte, un juguetito aterriza en sus manos.
      </p>
      <p>
        Si necesita moverse, <GameLink id="pillow-island" /> cabe en diez minutos. Reparte los cojines por el suelo como
        islas. Tu peque cruza sin tocar el “agua”, y cada vez que lo consigue, quitas una isla.
      </p>

      <h2>Un plan para la puerta</h2>
      <ol>
        <li>Deja el móvil en la bolsa o en el cargador junto a la puerta.</li>
        <li>Ofrece dos juegos y deja que tu peque elija.</li>
        <li>Siéntate en el suelo antes que en el sofá. Desde ahí es más fácil empezar un juego.</li>
        <li>Juega hasta que tu peque se vaya a otra cosa, y luego ponte con la cena sin culpa.</li>
      </ol>
      <p>
        Para más juegos así, mira los{" "}
        <Link href="/games/energy/medium">juegos fáciles para una tarde cualquiera</Link>. Las noches en que te queda
        menos, prueba los <Link href="/games/energy/low">juegos de poca energía</Link>.
      </p>
    </>
  ),
};
