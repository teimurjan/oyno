import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-no-toys";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Juegos sin juguetes para niños",
  description:
    "¿No tienes juguetes a mano, o no te apetece sacarlos? Estos juegos para niños de 0 a 5 años solo necesitan tus manos, tu voz y la habitación en la que estás.",
  body: (
    <>
      <p>
        Los juguetes están en el otro cuarto, guardados en una caja o desperdigados bajo el sofá. No los necesitas.
        Muchos de los juegos más antiguos para niños pequeños no usan más que una cara, un par de manos y una voz.
      </p>
      <p>
        La Academia Americana de Pediatría describe cómo el juego crece desde la sonrisa social hasta el ida y vuelta, el
        cucú-tras y el “palmas, palmitas” <Cite id="aap-play" />. Las hojas Brain-Building Through Play de Harvard
        recomiendan Pat-a-Cake (palmas, palmitas) y Baby See Baby Do para bebés, Sigue al líder para niños pequeños, y
        Simón dice y ¿Qué hora es, señor Lobo? para los mayores <Cite id="brain-play" />. Ninguno necesita un juguete.
      </p>

      <h2>Bebés: tu cara es el juguete</h2>
      <p>
        Desde los 6 meses más o menos, prueba <GameLink id="copy-cat-faces" />. Imita la cara o el sonido de tu bebé justo
        después de que lo haga: la lengua fuera, un gritito, el ceño fruncido. Hazlo unas cuantas veces, y luego pon tú una
        cara nueva, despacio, y mantenla. Espera, con esa cara puesta, a que intente imitarla.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> se juega con tu bebé en el regazo. Pregunta “¿Dónde está tu nariz?” y espera
        una respiración lenta mirando su carita. Tócale la nariz con suavidad y di “nariz”, y luego las orejas, los pies y
        la barriga.
      </p>
      <p>
        Los dos juegos siguen la iniciativa de tu bebé. En un ensayo, enseñar a padres de niños de 6 a 21 meses a seguir
        la iniciativa del niño, responder y disfrutar con él mejoró la flexibilidad mental de los niños a los 4 años{" "}
        <Cite id="lind-2017" />.
      </p>

      <h2>Niños pequeños: tu cuerpo es el tablero</h2>
      <p>
        <GameLink id="nose-knees-toes" /> es para un peque de 2 años en adelante que ya sabe dónde tiene la nariz.
        Pregunta “¿dónde está tu nariz?” y tócate la tuya, y tu peque se toca la suya. Luego rodillas, pies, orejas.
        Cuando vaya rápido, di “tócate los pies” mientras tú te tocas la nariz, y tiene que seguir tus palabras, no tu
        mano.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> solo necesita el borde de una alfombra o una línea entre las tablas del
        suelo. Es una cuerda floja que lleva hasta ti en el sofá. Tu peque la recorre paso a paso, despacio, con los
        brazos abiertos, mientras tú narras cada paso en voz baja. Un pie fuera de la cuerda significa volver a empezar, y
        quien llega hasta ti se lleva un abrazo en el sofá. No tienes que levantarte ni una vez.
      </p>
      <p>
        Se parecen a las tareas de un estudio de largo recorrido, en el que a niños de 22 a 45 meses se les pidió caminar
        despacio por una línea, susurrar y parar y arrancar a una señal <Cite id="kochanska-2000" />.
      </p>

      <h2>Niños de 3 a 5 años: juegos hechos de palabras</h2>
      <p>
        A los 3 años, un juego puede ser solo reglas y palabras. <GameLink id="simon-says" /> es el clásico. Di
        movimientos en voz alta, y tu peque solo hace los que empiezan por “Simón dice”. Mezcla órdenes sin más y pilla a
        tu peque si se mueve. Después de tres pilladas, tu peque es Simón. Simón dice era una de las tareas de un estudio
        con niños de 2 a 6 años <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" /> es el juego del lobo para un pasillo. Te pones mirando a la pared del fondo. Tu peque
        pregunta “¿qué hora es, señor lobo?”, y contestas un número hasta diez, así que da exactamente esos pasos hacia
        ti, contándolos en voz alta. Cuando esté cerca, contesta “¡la hora de cenar!” y persíguelo hasta la salida.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> funciona cuando un hermano duerme. Susúrrale a tu peque al oído un mensaje
        corto, como “el gato se ha comido un calcetín”, y te lo susurra de vuelta, palabra por palabra. Añade una palabra
        en cada ronda.
      </p>

      <h2>Cuando estáis fuera de casa</h2>
      <p>
        Los juegos sin juguetes brillan en una sala de espera, una cola o un viaje largo en coche. En{" "}
        <GameLink id="zoo-list" />, dices “fui al zoo y vi una cebra”. Tu peque repite toda la lista y añade un animal, y
        luego tú haces lo mismo, hasta que a alguien se le olvide un animal. Entonces empieza otro viaje a un sitio nuevo.
        La playa, la granja y la tienda funcionan, y tu peque puede elegir adónde vais.
      </p>
      <p>
        Hay más para el camino en los <Link href="/games/tag/in-the-car">juegos en el coche</Link>.
      </p>

      <h2>Cómo empezar uno esta tarde</h2>
      <ul>
        <li>Elige un juego para la edad de tu peque y explica la regla en una frase.</li>
        <li>Con un bebé, quédate en caras y sonidos. Copia lo que hace y espera a que responda.</li>
        <li>Juega la primera ronda despacio, para que pueda ganarla.</li>
        <li>Pásale el mando. Casi todos estos juegos acaban con un cambio de papeles, así que tu peque también manda.</li>
      </ul>
      <p>
        Todos los <Link href="/games/tag/nothing-to-grab">juegos sin juguetes</Link> funcionan con las manos vacías.
        También puedes buscarlos por edad, empezando por los{" "}
        <Link href="/games/age/toddlers">juegos para niños de 1 a 3 años</Link>.
      </p>
    </>
  ),
};
