import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../rainy-day-games-toddlers";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Juegos para días de lluvia con niños pequeños",
  description:
    "Ocho juegos activos en casa para un peque que no puede salir: túneles de sillas, carreras por el pasillo, el suelo es lava y estatuas, con la edad mínima de cada uno.",
  body: (
    <>
      <p>
        Un día encerrados en casa con un niño pequeño se hace largo. Estos juegos son para las horas en que tu peque aún
        tiene energía que quemar y salir no es una opción. Usan el pasillo, los cojines del sofá y las sillas de la
        cocina, y casi todos tienen una señal que frena la carrera un momento.
      </p>
      <p>
        Cada juego indica la edad mínima a la que encaja. Algunos funcionan desde el primer cumpleaños, y otros desde los
        2. No necesitas los ocho en un día. Elige dos, juega a cada uno diez minutos y guarda el resto para el próximo día
        en casa.
      </p>

      <h2>Construye un túnel</h2>
      <p>
        <GameLink id="chair-tunnels" /> funciona desde 1 año. Pon dos o tres sillas de la cocina en fila para hacer un
        túnel, con un cojín al final como meta. Pasa tú primero, despacio, para que tu peque vea el camino, y luego ve
        detrás. Tras unas cuantas pasadas, añade un cojín por el que trepar.
      </p>
      <p>
        La hoja Brain-Building Through Play de Harvard para niños de 12 meses a 3 años incluye explorar por encima de
        cojines en el suelo <Cite id="brain-play" />. Cuando tu peque se pare en el túnel, pregunta “¿y ahora qué?” en vez
        de señalar. Así el plan queda en sus manos. En un estudio, que los padres apoyaran los propios intentos de su hijo
        a los 12 a 15 meses predijo la función ejecutiva a los 18 y 26 meses <Cite id="bernier-2010" />. Hay más en los{" "}
        <Link href="/games/tag/chairs">juegos con sillas</Link>.
      </p>

      <h2>Aprovecha el pasillo</h2>
      <p>
        <GameLink id="silly-walk-leader" /> funciona desde 1 año. Recorre el pasillo con andares de risa, como un pingüino
        tambaleante, con tu peque detrás copiándote. Cambia de andares cada pocos pasos. Al final, date la vuelta, di “te
        toca” y copia los andares que invente, tal cual, aunque solo sea dar pisotones. Sigue al líder está en la lista de
        actividades de Harvard para niños pequeños <Cite id="cdc-guide" />.
      </p>
      <p>
        <GameLink id="roll-wait-go" /> es a partir de los 2 años. Agáchate en un extremo del pasillo con tu peque al lado y
        haz rodar una pelota por el pasillo. Daos la mano y mirad cómo rueda. Solo cuando se haya parado y digas “¡ya!”
        vais los dos a por ella. Alarga un poco la espera tras pararse cada vez, y luego deja que diga “¡ya!” tu peque.
      </p>
      <p>
        Más en los <Link href="/games/tag/hallway">juegos en el pasillo</Link>.
      </p>

      <h2>Convierte el suelo en lava</h2>
      <p>
        <GameLink id="cushion-lava" /> es a partir de los 2 años. Esparce todos los cojines de la casa por el suelo y di
        que el suelo es lava, así que los pies solo pisan cojines. Saltad juntos hasta llegar al sofá, de la mano en los
        huecos grandes. Di “¡la lava sube!” y quita un cojín en cada ronda.
      </p>
      <p>
        <GameLink id="run-home" /> también es a partir de los 2 años. Dad a cada uno un cojín que será su casa, en esquinas
        distintas, y luego paseaos por la habitación con andares graciosos. Grita “¡a casa!” y corred los dos a sentaros
        en vuestro cojín. Cambiad las casas cada pocas rondas, y celebradlo cuando los dos os acordéis de cuál es ahora
        vuestro cojín. Más en los <Link href="/games/tag/cushions">juegos con cojines</Link>.
      </p>

      <h2>Ponle una pausa al jaleo</h2>
      <p>
        Parar a una señal es algo que los investigadores piden a los niños pequeños. En un estudio de largo recorrido, a
        niños de 22 a 45 meses se les pidió esperar, caminar despacio por una línea, susurrar y parar y arrancar a una
        señal <Cite id="kochanska-2000" />. En otro, cantar, bailar y jugar con música juntos en casa a los 2 a 3 años
        predijo la atención y la autorregulación a los 5 <Cite id="williams-2015" />.
      </p>
      <p>
        <GameLink id="sock-rain" /> es a partir de los 2 años. Vuelca en el suelo un vaso de calcetines enrollados y grita
        “¡lluvia!”, y los dos los lanzáis lo más alto que podáis. Grita “¡sol!” y se acabó lanzar: cada calcetín vuelve al
        vaso lo más rápido posible. El último sol deja la habitación recogida.
      </p>
      <p>
        <GameLink id="cup-drum-parade" /> es a partir de los 2 años. Pon un vaso boca abajo, tócalo como un tambor y
        desfila por la casa con tu peque detrás. Para el tambor sin avisar, y toda la banda se para a medio paso hasta que
        vuelva a sonar. Luego dale el tambor a tu peque.
      </p>

      <h2>El escondite para principiantes</h2>
      <p>
        La hoja de juego de Harvard para niños pequeños también recomienda un escondite sencillo{" "}
        <Cite id="brain-play" />. <GameLink id="terrible-hider" /> funciona desde 1 año, antes de que tu peque sepa
        contar. Dile que se quede en la alfombra y escóndete fatal detrás de una silla, contando hasta cinco en voz alta
        todo el rato. Sigue contando desde tu sitio para que tu voz te delate. Luego cambiad los papeles, y busca en dos
        sitios equivocados antes de dar con su escondite.
      </p>
      <p>
        Cuando se acaben las carreras, pasa a algo tranquilo. Los{" "}
        <Link href="/games/energy/low">juegos de poca energía</Link> se juegan sentados o tumbados, y{" "}
        <Link href="/blog/bedtime-wind-down-games">Juegos tranquilos para antes de dormir</Link> tiene unos cuantos para
        el final del día. La lista completa está en los{" "}
        <Link href="/games/age/toddlers">juegos para niños de 1 a 3 años</Link>.
      </p>
    </>
  ),
};
