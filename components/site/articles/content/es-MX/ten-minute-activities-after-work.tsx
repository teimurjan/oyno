import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../ten-minute-activities-after-work";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Actividades de 10 minutos para hacer con tu peque después del trabajo",
  description:
    "Acabas de llegar y te quedan unos diez minutos de energía. Aquí hay juegos cortos para bebés, niños pequeños y niños de preescolar que casi no necesitan preparación.",
  body: (
    <>
      <p>
        Entras, dejas la bolsa, y tu peque ya está pegado a tus piernas. La cena te va a necesitar pronto, y no te
        queda mucho. Tienes unos diez minutos. Alcanzan para un buen juego.
      </p>
      <p>
        Yo también trabajo todo el día, y cuando llego a casa la mano se me va al celular antes de quitarme la chamarra.
        Esos primeros minutos se pierden fácil. En un experimento, las mamás y los papás en un museo de ciencias a
        quienes se les pidió usar mucho el celular se sintieron más distraídos y menos conectados con sus hijos que
        aquellos a quienes se les pidió usarlo poco <Cite id="kushlev-dunn-2019" />. Los juegos de abajo son una forma
        de pasar esos mismos minutos en el piso.
      </p>

      <h2>Por qué diez minutos son suficientes</h2>
      <p>
        Un juego corto sigue siendo tiempo real juntos. La hoja de Harvard sobre servir y devolver describe el ida y
        vuelta que importa: fíjate en lo que tiene la atención de tu peque, compártelo, nómbralo, túrnense y espera{" "}
        <Cite id="serve-return" />. Nada de eso necesita una hora.
      </p>
      <p>
        Cada juego de aquí toma 10 minutos o menos y tiene como máximo tres pasos. Escoge uno, juégalo hasta que tu
        peque pierda el interés, y luego ponte a hacer la cena.
      </p>

      <h2>Bebés: un juego en el piso</h2>
      <p>
        Para un bebé que ya se sienta firme, prueba <GameLink id="ball-back" />. Siéntate frente a tu bebé con las
        piernas abiertas como corralito, y rueda una pelota despacio hasta sus piernas. Extiende las manos y espera en
        silencio hasta que te la regrese. Di “me toca”, ruédala otra vez y deja que las esperas se alarguen.
      </p>
      <p>
        La espera es tu parte del trabajo. En un ensayo, asesorar a mamás y papás de bebés de 6 a 10 meses para
        responder a su bebé mejoró la atención de los bebés y su capacidad de resolver problemas por su cuenta{" "}
        <Cite id="landry-2006" />.
      </p>
      <p>
        Desde los 9 meses, más o menos, cuando los bebés empiezan a seguir lo que señalas, prueba{" "}
        <GameLink id="point-and-name" />. Con tu bebé en tus piernas, señala algo al otro lado del cuarto y deja el
        brazo ahí hasta que sus ojos lleguen a eso. Nómbralo una vez, despacio. Luego sigue tú su mirada, y nombra lo
        que se quede viendo. Los niños de un año mantenían la atención en un juguete por más tiempo cuando su mamá o su
        papá miraba y nombraba el mismo juguete <Cite id="yu-smith-2016" />.
      </p>

      <h2>Niños pequeños: reglas cortas, turnos rápidos</h2>
      <p>
        Estos tres son para peques de 2 años en adelante, y todos se pueden jugar sentados.
      </p>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: siéntense frente a frente con la pelota en las manos de tu peque. Di “espera,
          espera” despacio, luego “¡ya!”, y te la rueda. Alarga la espera un poquito cada vez.
        </li>
        <li>
          <GameLink id="loud-soft-singing">Fuerte y bajito</GameLink>: canten una canción juntos. La mano bien alto
          quiere decir fuerte, la mano en tu rodilla quiere decir susurro. Luego decide la mano de tu peque.
        </li>
        <li>
          <GameLink id="tell-teddy" />: sienta al osito al otro lado del cuarto y susúrrale a tu peque un recado corto,
          como “osito, a cenar”. Va y le da el recado al osito, y tú contestas con la voz del osito.
        </li>
      </ul>
      <p>
        Esperar y susurrar son tareas que los investigadores usaron para estudiar el autocontrol en niños de 22 a 45
        meses <Cite id="kochanska-2000" />. Los juegos con música también cuentan. En un estudio, cantar, bailar y
        jugar con música juntos en casa a los 2 a 3 años predijo la atención y la autorregulación a los 5{" "}
        <Cite id="williams-2015" />.
      </p>

      <h2>Niños de preescolar: una regla para romper</h2>
      <p>
        A los niños de preescolar les encanta una regla que pone todo de cabeza. Para un peque de cuatro años en
        adelante, prueba <GameLink id="heads-mean-toes" />. Cuando dices “cabeza”, se toca los pies, y cuando dices
        “pies”, se toca la cabeza. Empiecen despacio y luego más rápido. Lo puedes dirigir desde una silla. Se parece a
        una tarea de un estudio en el que niños de 4 a 6 años hacían el mismo cambio, y cómo les iba predecía sus
        resultados en el kínder <Cite id="ponitz-2009" />.
      </p>
      <p>
        Si tu peque llega acelerado de la guardería, <GameLink id="closed-hands" /> baja el ritmo. Cierra los ojos y
        estira las dos manos cerradas. Cuenten juntos despacio hasta veinte, y si abre los ojos o las manos, empiecen
        otra vez. Al llegar a veinte, un juguetito aterriza en sus manos.
      </p>
      <p>
        Si necesita moverse, <GameLink id="pillow-island" /> funciona en diez minutos. Pon cojines por el piso como
        islas. Tu peque cruza sin tocar el “agua”, y cada vez que lo logra, quitas una isla.
      </p>

      <h2>Un plan para cuando cruzas la puerta</h2>
      <ol>
        <li>Deja el celular en tu bolsa o en el cargador junto a la puerta.</li>
        <li>Ofrece dos juegos y deja que tu peque escoja.</li>
        <li>Siéntate en el piso antes de sentarte en el sillón. Desde ahí es más fácil empezar un juego.</li>
        <li>Jueguen hasta que tu peque se vaya a otra cosa, y luego haz la cena sin culpa.</li>
      </ol>
      <p>
        Para más juegos como estos, mira los{" "}
        <Link href="/games/energy/medium">juegos fáciles para una tarde cualquiera</Link>. En las noches en que tienes
        menos, prueba los <Link href="/games/energy/low">juegos con poca energía</Link>.
      </p>
    </>
  ),
};
