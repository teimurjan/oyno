import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../working-memory-games-2-year-olds";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Juegos sencillos de memoria de trabajo para niños de 2 años",
  description:
    "Lo que un niño de dos años puede guardar en la mente, con qué lo probaron los estudios y juegos cortos de memoria con vasos, juguetes y tu propia nariz para jugar hoy.",
  body: (
    <>
      <p>
        La memoria de trabajo es guardar algo en la mente y usarlo. ¿A dónde se fue la pelota? ¿Qué me pidió papá que
        le llevara? ¿Debajo de cuál vaso ya busqué? Tu peque de dos años hace esto todo el día, y es una de las
        habilidades que puedes practicar en un juego de cinco minutos.
      </p>

      <h2>Empieza antes de los dos años</h2>
      <p>
        La memoria de trabajo aparece temprano. Bebés de cinco meses y medio a seis meses y medio encontraban un
        juguete tras una breve espera <Cite id="reznick-2004" />. Bebés de 7 meses y medio a 12 meses encontraban un
        juguete escondido bajo una de dos tapas tras una breve espera <Cite id="diamond-1985" />.
      </p>
      <p>
        Los juegos para niños de dos años piden un poco más: dos cosas escondidas en lugar de una, o una lista corta en
        lugar de una sola palabra.
      </p>

      <h2>Con qué probaron a los niños de dos años</h2>
      <p>
        En un estudio, niños de dos años jugaron Spin the Pots, un juego en el que tenían que recordar qué ollitas ya
        habían vaciado <Cite id="hughes-ensor-2005" />. Otro equipo armó un conjunto de tareas de memoria de trabajo,
        autocontrol y cambio de reglas para niños de 18 meses a unos cinco años y medio. Las tareas detectaban
        diferencias claras de una edad a la siguiente <Cite id="garon-2014" />.
      </p>
      <p>
        Las hojas de Harvard Brain-Building Through Play para los 12 meses a 3 años incluyen escondidillas sencillas,
        el juego de memoria de los tres vasos, y emparejar y clasificar <Cite id="brain-play" />. Son juegos que puedes
        jugar en el piso con lo que ya hay en el cuarto.
      </p>

      <h2>Juegos de esconder</h2>
      <p>
        <GameLink id="cup-trio-hide" /> se parece mucho a Spin the Pots. Pon tres vasos boca abajo en fila y esconde un
        juguete bajo uno mientras tu peque mira. Pregunta “¿dónde está?” y deja que levante vasos hasta encontrarlo.
        Para un peque de 2 años en adelante, esconde dos juguetes y mira si recuerda qué vaso ya está vacío.
      </p>
      <p>
        Lo puedes jugar en el piso con la espalda en el sillón, y sirven tres vasos o tazones cualesquiera.
      </p>
      <p>
        <GameLink id="who-ran-away" /> le da la vuelta. Pongan tres juguetes en fila y nombren cada uno juntos. Tu peque
        se tapa los ojos mientras escondes un juguete detrás de tu espalda, y luego pregunta “¿quién se escapó?”.
        Cuando adivine, el juguete regresa saludando. Tras unas rondas, tu peque esconde y adivinas tú.
      </p>

      <h2>Juegos de listas</h2>
      <p>
        <GameLink id="two-things-fetch" /> convierte un encargo en juego. Siéntate y pide dos cosas de un jalón, como
        “tráeme el vaso y el pato”. Quédate donde estás y festeja cada cosa que llegue, aunque solo llegue una. Cuando
        dos sea fácil, pide tres.
      </p>
      <p>
        <GameLink id="line-them-up" /> le suma orden. Nombra dos juguetes, como “oso y luego carro”, y tu peque los
        forma de izquierda a derecha como dijiste. Revisen la fila juntos, y luego nombra tres. Cambien, y equivócate
        en uno para que lo corrija.
      </p>

      <h2>Juegos para una mamá o un papá cansados</h2>
      <p>
        Los juegos de memoria no necesitan que estés de pie. En <GameLink id="beep-nose-buttons" />, eres una máquina
        acostada. Tu nariz es un botón que hace pip, tu oreja toca una canción y tu barbilla ronca. Tu peque aprieta un
        botón y tú haces justo eso. Agrega un cuarto botón en tu cachete, y luego pregunta “¿cuál botón ronca?”.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> va con el último minuto antes de apagar la luz. Denle las buenas noches
        juntos a tres cosas del cuarto, señalando cada una. Apaga la luz y pregunta “¿dónde está la lámpara?” para que
        tu peque la señale a oscuras. Prende la luz para comprobar.
      </p>

      <h2>Cómo darle al nivel justo</h2>
      <ul>
        <li>
          <strong>Empieza con dos.</strong> Dos vasos, dos cosas que traer, dos juguetes en fila. Pasa a tres solo
          cuando dos sea fácil.
        </li>
        <li>
          <strong>Deja que gane la primera ronda.</strong> Esconde el juguete despacio, a la vista.
        </li>
        <li>
          <strong>Que un error no pese.</strong> Si levanta el vaso equivocado, levántalo con tu peque, di “aquí no” y
          prueben el siguiente juntos.
        </li>
        <li>
          <strong>Cambien de papel.</strong> Casi todos estos juegos terminan con tu peque escondiendo o dando las
          órdenes, y tú equivocándote un poquito.
        </li>
        <li>
          <strong>Platiquen de lo que sigue.</strong> La guía de actividades de Harvard para los 18 a 36 meses incluye
          emparejar, rompecabezas, y plática y cuentos sobre lo que van a hacer después <Cite id="cdc-guide" />.
        </li>
      </ul>
      <p>
        Un niño de dos años que olvida la segunda cosa de la lista es un niño de dos años. No necesitas ponerle pruebas
        ni llevar registro de nada. Si algo de cómo se está desarrollando tu peque te preocupa, platícalo con tu
        pediatra.
      </p>
      <p>
        Hay más en los <Link href="/games/skill/working-memory">juegos de memoria de trabajo</Link>, y la página de{" "}
        <Link href="/games/age/toddlers">juegos para niños pequeños</Link> los ordena todos por la energía que te
        queda.
      </p>
    </>
  ),
};
