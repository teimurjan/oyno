import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-no-toys";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Juegos para jugar sin juguetes",
  description:
    "¿No hay juguetes a la mano, o no tienes ganas de sacarlos? Estos juegos para niños de 0 a 5 años solo necesitan tus manos, tu voz y el cuarto donde estás.",
  body: (
    <>
      <p>
        Los juguetes están en el otro cuarto, guardados o regados debajo del sillón. No los necesitas. Muchos de los
        juegos más antiguos para niños chiquitos no usan nada más que una cara, un par de manos y una voz.
      </p>
      <p>
        La Academia Americana de Pediatría describe cómo el juego crece desde la sonrisa social hacia el servir y
        devolver, el “¿dónde está? ¡aquí está!” y las tortillitas <Cite id="aap-play" />. Las hojas de Harvard
        Brain-Building Through Play incluyen Pat-a-Cake (tortillitas) y Baby See Baby Do para bebés, Follow the Leader
        (sigue al líder) para niños pequeños, y Simon Says (Simón dice) y What Time Is It Mr Fox para los más grandes{" "}
        <Cite id="brain-play" />. Ninguno necesita un juguete.
      </p>

      <h2>Bebés: tu cara es el juguete</h2>
      <p>
        Desde los 6 meses, más o menos, prueba <GameLink id="copy-cat-faces" />. Imita la cara o el sonido de tu bebé
        un instante después de que lo haga: la lengua de fuera, un chillido, el ceño fruncido. Hazlo unas cuantas
        veces, luego haz tú una cara nueva, despacito, y mantenla. Espera con esa cara puesta a que intente hacerla
        también.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> funciona con tu bebé en tus piernas. Pregunta “¿Dónde está tu nariz?” y
        espera un respiro lento mientras le miras la cara. Tócale la nariz con suavidad y di “nariz”, y luego sigue
        con orejas, deditos y pancita.
      </p>
      <p>
        Los dos juegos siguen la iniciativa de tu bebé. En un ensayo, asesorar a mamás y papás de niños de 6 a 21
        meses para seguir la iniciativa del niño, responderle y mostrarle gusto mejoró la flexibilidad mental de los
        niños a los 4 años <Cite id="lind-2017" />.
      </p>

      <h2>Niños pequeños: tu cuerpo es el tablero</h2>
      <p>
        <GameLink id="nose-knees-toes" /> es para un peque de 2 años en adelante que sabe dónde tiene la nariz.
        Pregunta “¿dónde está tu nariz?” y toca la tuya, y tu peque toca la suya. Luego rodillas, pies, orejas. Cuando
        ya sea rápido, di “toca tus pies” mientras tú tocas tu nariz, y tiene que seguir tus palabras, no tu mano.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> solo necesita la orilla de un tapete o una línea del piso. Es una cuerda
        floja que lleva hasta ti en el sillón. Tu peque la recorre paso a paso, despacio y con los brazos abiertos,
        mientras narras cada paso en voz bajita. Un pie fuera de la cuerda es volver al inicio, y quien llega hasta ti
        gana un abrazo en el sillón. No tienes que levantarte ni una vez.
      </p>
      <p>
        Se parecen a tareas de un estudio de largo plazo en el que a niños de 22 a 45 meses se les pidió caminar
        despacio sobre una línea, susurrar, y parar y arrancar con una señal <Cite id="kochanska-2000" />.
      </p>

      <h2>Niños de preescolar: juegos hechos de palabras</h2>
      <p>
        A los 3 años, un juego puede ser solo reglas y plática. <GameLink id="simon-says" /> es el clásico. Di
        movimientos en voz alta, y tu peque solo hace los que empiezan con “Simón dice”. Mezcla órdenes sin Simón y
        cáchalo si se mueve. Después de tres cachadas, tu peque es Simón. Simón dice fue una de las tareas de un
        estudio con niños de 2 a 6 años <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" /> es “¿Qué hora es, señor lobo?” para un pasillo. Te pones viendo a la pared en la
        punta del fondo. Tu peque pregunta “¿qué hora es, señor lobo?”, y tú contestas un número hasta el diez, así
        que da exactamente esa cantidad de pasos hacia ti, contando en voz alta. Cuando esté cerca, contesta “¡hora de
        cenar!” y persíguelo hasta el inicio.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> funciona cuando un hermanito está dormido. Susúrrale a tu peque al oído un
        mensaje cortito, como “el gato se comió un calcetín”, y te lo susurra de vuelta, palabra por palabra. Agrega
        una palabra en cada ronda.
      </p>

      <h2>Cuando están fuera de casa</h2>
      <p>
        Los juegos sin juguetes lucen de verdad en una sala de espera, en una fila o en un viaje largo en carro. En{" "}
        <GameLink id="zoo-list">Fui al zoológico</GameLink>, dices “fui al zoológico y vi una cebra”. Tu peque repite
        toda la lista y agrega un animal, luego tú haces lo mismo, hasta que a alguien se le olvide un animal. Luego
        empiecen otro viaje a un lugar nuevo. La playa, la granja y la tienda funcionan, y tu peque puede escoger a
        dónde van.
      </p>
      <p>
        Hay más para el camino en los <Link href="/games/tag/in-the-car">juegos para el carro</Link>.
      </p>

      <h2>Cómo empezar uno hoy en la tarde</h2>
      <ul>
        <li>Escoge un juego para la edad de tu peque y di la regla en una sola frase.</li>
        <li>Con un bebé, quédate en caras y sonidos. Copia lo que hace, y luego espera a que te conteste.</li>
        <li>Juega la primera ronda despacio, para que la pueda ganar.</li>
        <li>Pásale el mando. Casi todos estos juegos terminan con un cambio, así que a tu peque le toca dirigir.</li>
      </ul>
      <p>
        Todos los <Link href="/games/tag/nothing-to-grab">juegos sin juguetes</Link> funcionan con las manos vacías.
        También puedes buscar por edad, empezando por los{" "}
        <Link href="/games/age/toddlers">juegos para niños pequeños</Link>.
      </p>
    </>
  ),
};
