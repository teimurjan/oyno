import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../rainy-day-games-toddlers";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Juegos para días de lluvia con niños pequeños",
  description:
    "Ocho juegos activos para un peque encerrado en casa: túneles de sillas, carreras en el pasillo, el piso es lava y juegos de congelados, con la edad mínima de cada uno.",
  body: (
    <>
      <p>
        Un día encerrados en casa con un peque es largo. Estos juegos son para las horas en que a tu peque todavía le
        sobra energía y salir no es opción. Usan el pasillo, los cojines del sillón y las sillas del comedor, y casi
        todos tienen una señal que detiene la carrera por un momento.
      </p>
      <p>
        Cada juego dice la edad mínima para la que funciona. Algunos van desde el primer cumpleaños, y otros desde los
        2. No necesitas los ocho en un solo día. Escoge dos, juega cada uno diez minutos, y guarda el resto para el
        siguiente día en casa.
      </p>

      <h2>Hagan un túnel</h2>
      <p>
        <GameLink id="chair-tunnels" /> funciona desde el año. Pon dos o tres sillas del comedor en fila para hacer un
        túnel, con un cojín al final como meta. Cruza tú primero, despacio, para que tu peque vea el camino, y luego
        síguelo. Tras unas vueltas, agrega un cojín para trepar.
      </p>
      <p>
        La hoja de Harvard Brain-Building Through Play para los 12 meses a 3 años incluye explorar entre cojines en el
        piso <Cite id="brain-play" />. Cuando tu peque se detenga en el túnel, pregunta “¿y ahora qué sigue?” en vez de
        señalar. Así el plan queda en sus manos. En un estudio, que mamá y papá apoyaran los propios intentos de su hijo
        a los 12 a 15 meses predijo las funciones ejecutivas a los 18 y 26 meses <Cite id="bernier-2010" />. Hay más
        en los <Link href="/games/tag/chairs">juegos con sillas</Link>.
      </p>

      <h2>Usen el pasillo</h2>
      <p>
        <GameLink id="silly-walk-leader" /> funciona desde el año. Recorre el pasillo caminando chistoso, como un
        pingüino tambaleante, con tu peque detrás copiándote. Cambia la caminada cada pocos pasos. Al final, voltéate y
        di “te toca”, y copia la caminada que invente, igualita, aunque solo sea pisar fuerte. Follow the Leader (sigue
        al líder) está en la lista de actividades de Harvard para niños pequeños <Cite id="cdc-guide" />.
      </p>
      <p>
        <GameLink id="roll-wait-go" /> es para 2 años en adelante. Agáchate en un extremo del pasillo con tu peque a un
        lado y rueda la pelota por el pasillo. Tómense de las manos y mírenla rodar. Solo cuando se detenga y digas
        “¡ya!” van los dos tras ella. Alarga un poco la espera después de que se detenga cada vez, y luego deja que tu
        peque diga “ya”.
      </p>
      <p>
        Hay más en los <Link href="/games/tag/hallway">juegos para el pasillo</Link>.
      </p>

      <h2>Conviertan el piso en lava</h2>
      <p>
        <GameLink id="cushion-lava" /> es para 2 años en adelante. Reparte todos los cojines de la casa por el piso y
        di que el piso es lava, así que los pies se quedan en los cojines. Brinquen juntos hasta el sillón, tomados de
        la mano en los huecos grandes. Di “¡sube la lava!” y quita un cojín cada ronda.
      </p>
      <p>
        <GameLink id="run-home" /> también es para 2 años en adelante. Cada quien tiene un cojín de casa en una esquina
        distinta, y luego paseen por el cuarto caminando chistoso. Grita “¡a casa!” y los dos corren a sentarse en su
        propio cojín. Cambien de casa cada pocas rondas, y festejen cuando los dos se acuerden de cuál cojín es el suyo
        ahora. Hay más en los <Link href="/games/tag/cushions">juegos con cojines</Link>.
      </p>

      <h2>Pónganle un alto al ruido</h2>
      <p>
        Detenerse con una señal es algo que los investigadores les piden a los niños pequeños. En un estudio de largo
        plazo, a niños de 22 a 45 meses se les pidió esperar, caminar despacio sobre una línea, susurrar, y parar y
        arrancar con una señal <Cite id="kochanska-2000" />. En otro, cantar, bailar y jugar con música juntos en casa
        a los 2 a 3 años predijo la atención y la autorregulación a los 5 <Cite id="williams-2015" />.
      </p>
      <p>
        <GameLink id="sock-rain" /> es para 2 años en adelante. Vacía en el piso un vaso de calcetines hechos bolita y
        grita “¡lluvia!”, y los dos los avientan lo más alto que puedan. Grita “¡sol!” y se acaba la aventadera, y cada
        calcetín regresa al vaso lo más rápido que puedan. El último sol deja el cuarto recogido.
      </p>
      <p>
        <GameLink id="cup-drum-parade" /> es para 2 años en adelante. Pon un vaso boca abajo, tócalo como tambor y
        marcha por la casa con tu peque detrás. Para el tambor sin avisar, y toda la banda se detiene a medio paso
        hasta que vuelva a sonar. Luego dale el tambor a tu peque.
      </p>

      <h2>Escondidillas para principiantes</h2>
      <p>
        La hoja de juego de Harvard para niños pequeños también incluye unas escondidillas sencillas{" "}
        <Cite id="brain-play" />. <GameLink id="terrible-hider" /> funciona desde el año, antes de que tu peque sepa
        contar. Dile que se quede en el tapete, y escóndete mal detrás de una silla, contando hasta cinco en voz alta
        todo el tiempo. Sigue contando desde tu escondite para que tu voz te delate. Luego cambien, y busca en dos
        lugares equivocados antes de encontrarlo.
      </p>
      <p>
        Cuando se acaben las carreras, cambia a algo tranquilo. Los{" "}
        <Link href="/games/energy/low">juegos con poca energía</Link> se juegan sentados o acostados, y{" "}
        <Link href="/blog/bedtime-wind-down-games">Juegos tranquilos para antes de dormir</Link> tiene unos cuantos
        para el final del día. La lista completa está en los{" "}
        <Link href="/games/age/toddlers">juegos para niños pequeños</Link>.
      </p>
    </>
  ),
};
