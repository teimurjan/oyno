import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../toddler-games-by-energy";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Juegos para niños de 1 a 3 años: 40 ideas según tu energía",
  description:
    "Cuarenta juegos cortos para niños de 1 a 3 años, ordenados según la energía que te queda esta tarde. Cada uno dura de 5 a 15 minutos y necesita poco o nada.",
  body: (
    <>
      <p>
        Hay tardes en las que tienes energía para perseguirle por el salón. Muchas tardes te llega justo para tumbarte en
        la alfombra. Conozco bien esa tarde: trabajo todo el día, llego a casa y voy a por el móvil.
      </p>
      <p>
        Así que esta lista empieza por cómo te sientes. Elige la sección que encaje con esta tarde, escoge un juego y
        juégalo de 5 a 15 minutos. Todos los juegos son para peques de 1 a 3 años, y casi todos solo necesitan lo que ya
        tienes en casa: un vaso, un calcetín, un cojín, un libro.
      </p>

      <h2>Cómo usar esta lista</h2>
      <p>
        Los juegos marcados con <strong>2+</strong> están pensados para peques de unos 2 años en adelante. El resto
        funcionan desde el primer cumpleaños. Todos son cortos, y muchos acaban con un cambio de papeles en el que tu peque
        hace tu parte.
      </p>
      <p>
        Lee la línea, juega una ronda y mira si tu peque quiere otra. Si se va a otra cosa, el juego se ha acabado, y no
        pasa nada. Cada juego tiene su propia página con sus pasos.
      </p>

      <h2>Poca energía: 14 juegos desde el sofá o el suelo</h2>
      <p>
        Para las noches en que puedes sentarte o tumbarte y poco más. Tu peque se mueve, y tú hablas. Hay más en los{" "}
        <Link href="/games/energy/low">juegos de poca energía</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="cup-trio-hide" />: pon tres vasos boca abajo, esconde un juguete bajo uno mientras tu peque mira y
          deja que levante vasos hasta encontrarlo.
        </li>
        <li>
          <GameLink id="pat-pat-copy" />: da dos palmaditas en tu rodilla y espera a que tu peque te las devuelva en el
          brazo, y luego copia un ritmo que invente.
        </li>
        <li>
          <GameLink id="piggy-pause-toes" />: recita “este compró un huevito” un poco más despacio en cada dedo, y para antes
          del último hasta que tu peque te mire.
        </li>
        <li>
          <GameLink id="two-in-the-picture" />: antes de pasar a una página llena de cosas, di dos que hay que encontrar, y
          deja que tu peque busque las dos mientras tu dedo se queda quieto.
        </li>
        <li>
          <GameLink id="give-and-take" />: dale un juguete con un “para ti”, luego tiende la mano abierta y espera a que
          vuelva para decir “gracias”.
        </li>
        <li>
          <GameLink id="peekaboo-faces-cloth" />: baja un trapo de cocina de tu cara para enseñar una cara alegre, triste o
          de sueño, y nombra cada una.
        </li>
        <li>
          <GameLink id="fill-the-rhyme" />: quédate en silencio justo antes de la última palabra de un verso de una canción
          que tu peque conozca, y espera a que la diga.
        </li>
        <li>
          <GameLink id="doctor-kid-patient" />: túmbate como paciente con dos sitios que te duelen, y deja que tu peque
          revise los dos y te cure.
        </li>
        <li>
          <GameLink id="still-stone-mouse" /> (2+): tu peque se queda inmóvil como una piedra mientras tu mano se acerca
          como un ratón, y cualquier meneo manda al ratón de vuelta al principio.
        </li>
        <li>
          <GameLink id="hand-on-the-cup" /> (2+): esconde un juguete bajo un vaso, apoya encima la mano de tu peque, y solo
          levanta el vaso cuando digas “¡ya!”.
        </li>
        <li>
          <GameLink id="whisper-tent-rule" /> (2+): pon una manta sobre tus rodillas dobladas como una tienda donde solo
          se puede susurrar, y fuera hablad normal.
        </li>
        <li>
          <GameLink id="tummy-drum-soft-loud" /> (2+): tu barriga es el tambor, “ratón” son palmaditas suaves y diminutas,
          “elefante” son golpes grandes y lentos, y con “¡alto!” sus manos salen volando hacia arriba.
        </li>
        <li>
          <GameLink id="baby-cup-mummy-cup" /> (2+): llamad “bebé” al vaso grande y “mamá” al pequeño, y luego enseña uno
          cada vez para que tu peque diga su nombre.
        </li>
        <li>
          <GameLink id="hum-and-stop" /> (2+): tararead y balanceaos juntos, y cuando para el tarareo, os congeláis los dos
          hasta que vuelva.
        </li>
      </ol>

      <h2>Algo de energía: 13 juegos para una tarde cualquiera</h2>
      <p>
        Para las noches en que puedes sentarte en el suelo y quizá ponerte de pie un minuto. Poca preparación y algunas
        cosas a mano. Hay más en los <Link href="/games/energy/medium">juegos de energía media</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="look-and-name" />: para un peque que acaba de cumplir 1 año, mira fijamente algo al otro lado del
          cuarto y nómbralo, y luego sigue su mirada y nombra lo que mire.
        </li>
        <li>
          <GameLink id="show-and-name" />: coge lo que te dé tu peque, di cómo se llama y algo sobre ello, y devuélveselo.
        </li>
        <li>
          <GameLink id="ring-ring-calls" />: ponte un bloque en la oreja, di “ring, ring”, haz una pregunta y espera a que tu
          peque conteste con otro bloque.
        </li>
        <li>
          <GameLink id="cup-drum-turns" />: marca un ritmo corto en tu vaso boca abajo, y luego deja las manos quietas
          mientras tu peque responde en el suyo.
        </li>
        <li>
          <GameLink id="page-patrol" />: elige algo que salga en todas las páginas de un libro que conozcáis, y en cada
          página espera a que tu peque lo encuentre y lo señale.
        </li>
        <li>
          <GameLink id="cup-hat-pretend" />: un vaso se convierte en sombrero, en la taza de un gigante, en un coche y en un
          barco, y luego tu peque decide qué es.
        </li>
        <li>
          <GameLink id="what-next-tower" />: saca los bloques, deja las manos en el regazo y pregunta “¿y ahora qué?” en
          vez de poner tú un bloque.
        </li>
        <li>
          <GameLink id="wait-wait-go" /> (2+): sentaos uno frente al otro con la pelota en las manos de tu peque, y solo te
          la hace rodar con el “¡ya!”.
        </li>
        <li>
          <GameLink id="two-sock-piles" /> (2+): separa calcetines limpios en un montón de oscuros y otro de claros, y luego
          mézclalos y separadlos por grandes y pequeños.
        </li>
        <li>
          <GameLink id="cat-bear-switch" /> (2+): de puntillas y sin ruido con “gato”, pisotones y gruñidos con “oso”, y
          cambia la palabra cada vez más a menudo.
        </li>
        <li>
          <GameLink id="who-ran-away" /> (2+): pon tres juguetes en fila, esconde uno mientras tu peque se tapa los ojos y
          pregunta “¿quién se ha escapado?”.
        </li>
        <li>
          <GameLink id="loud-soft-singing" /> (2+): cantad juntos fuerte mientras tu mano está arriba, y en un susurro
          cuando baja a tu rodilla.
        </li>
        <li>
          <GameLink id="red-light-whisper" /> (2+): contigo en el asiento del copiloto, todos susurran en un semáforo en
          rojo y vuelven a la voz normal con el verde.
        </li>
      </ol>

      <h2>Mucha energía: 13 juegos para poneros en marcha</h2>
      <p>
        Para las noches en que todavía puedes dar una vuelta corriendo al salón. Despeja antes un trozo de suelo. Hay más
        en los <Link href="/games/energy/high">juegos de mucha energía</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="terrible-hider" />: escóndete fatal detrás de una silla y sigue contando en voz alta, para que tu voz
          te delate.
        </li>
        <li>
          <GameLink id="airplane-landing" />: haz volar a tu peque por el cuarto, aterrízalo en el sofá con un “tres, dos,
          uno” y espera a que diga “arriba” antes del siguiente vuelo.
        </li>
        <li>
          <GameLink id="silly-walk-leader" />: recorre el pasillo andando como un pingüino con tu peque detrás copiándote, y
          luego copia los andares que invente.
        </li>
        <li>
          <GameLink id="chair-tunnels" />: pon dos o tres sillas de la cocina en fila como un túnel, pasa tú primero y
          pregunta “¿y ahora qué?” cuando tu peque se pare.
        </li>
        <li>
          <GameLink id="blanket-parachute" />: levantad juntos una manta bien alto y dejad que caiga flotando, y al cuarto
          “arriba” os metéis los dos debajo.
        </li>
        <li>
          <GameLink id="bridge-falls-down" />: haz un puente con los brazos contra la pared mientras tu peque pasa por debajo
          al ritmo de “Pase misí, pase misá”, y bájalo en la última palabra.
        </li>
        <li>
          <GameLink id="green-means-go" /> (2+): corred hacia la pared del fondo con “verde”, parad en seco con “rojo” y
          turnaos para decir los colores.
        </li>
        <li>
          <GameLink id="jump-jump-freeze" /> (2+): daos la mano y saltad mientras contáis hasta tres, luego di “¡estatua!”
          y quietos.
        </li>
        <li>
          <GameLink id="snail-and-rocket" /> (2+): cruzad el cuarto tan despacio como un caracol, luego salid disparados como
          un cohete, y cambia la palabra cada vez antes.
        </li>
        <li>
          <GameLink id="dance-till-it-stops" /> (2+): bailad a lo grande con una canción, y cuando la pausas, os quedáis los
          dos congelados hasta que vuelva a sonar.
        </li>
        <li>
          <GameLink id="cushion-lava" /> (2+): esparce los cojines, di que el suelo es lava y saltad de cojín en cojín hasta
          llegar al sofá.
        </li>
        <li>
          <GameLink id="roll-wait-go" /> (2+): haz rodar una pelota por el pasillo, daos la mano mientras rueda y id a por
          ella solo cuando se pare y digas “¡ya!”.
        </li>
        <li>
          <GameLink id="sock-rain" /> (2+): lanzad calcetines enrollados bien alto con “¡lluvia!”, y con “¡sol!” se acabó
          lanzar y cada calcetín vuelve al vaso.
        </li>
      </ol>

      <h2>Por qué tantos juegos de estatuas y de esperar</h2>
      <p>
        Muchos de los juegos de arriba piden a tu peque parar, esperar o susurrar a una señal. Es a propósito. En un
        estudio de largo recorrido, a niños de 22 a 45 meses se les pidió esperar una golosina, caminar despacio por una
        línea, susurrar y parar y arrancar a una señal <Cite id="kochanska-2000" />. Son los mismos movimientos que en
        Como una piedra, Espera, espera, ¡ya! y La tienda de los susurros.
      </p>
      <p>
        Los juegos con música también encajan aquí. Cantar, bailar y jugar con música juntos en casa a los 2 a 3 años
        predijo la atención y la autorregulación a los 5 años <Cite id="williams-2015" />. Es una relación, no la prueba de
        que las canciones lo causaran, pero es un buen motivo para cantar.
      </p>
      <p>
        Para 18 a 36 meses, el Center on the Developing Child de Harvard recomienda bailar y quedarse como estatuas y
        canciones de empezar y parar, canciones con movimientos, Sigue al líder y retos físicos <Cite id="cdc-guide" />.
        Hay más en los <Link href="/games/skill/self-control">juegos de autocontrol</Link> y en los{" "}
        <Link href="/games/type/stop-go">juegos de parar y seguir</Link>.
      </p>

      <h2>Por qué juegos de esconder, de imitar y de imaginación</h2>
      <p>
        Los niños de dos años ya pueden sostener unas cuantas cosas en la cabeza. En un estudio, recordaban qué botes ya
        habían vaciado, y llamaban “bebé” a un vaso grande y “mamá” a uno pequeño <Cite id="hughes-ensor-2005" />. Tres
        vasos, ¿Quién se ha escapado? y Vaso bebé, vaso mamá piden lo mismo.
      </p>
      <p>
        Las hojas de juego de Harvard para niños de 12 meses a 3 años recomiendan Toddler See Toddler Do (imitar al peque y
        que te imite), un escondite sencillo, un juego de memoria con tres vasos, emparejar y clasificar, llamadas de
        teléfono y tareas de casa de mentira, canciones activas, las estatuas y Sigue al líder <Cite id="brain-play" />.
        Encontrarás casi todos en la lista de arriba.
      </p>
      <p>
        Cómo juegas también importa. Los niños de un año mantenían la atención en un juguete durante más tiempo cuando su
        padre o su madre miraba y nombraba ese mismo juguete <Cite id="yu-smith-2016" />. La ayuda justa de los padres con
        un puzle a los 2 a 3 años, incluido preguntar qué viene después, predijo la función ejecutiva de sus hijos a los 3
        a 4 <Cite id="hammond-2012" />. Por eso algunos pasos te dicen que preguntes “¿y ahora qué?” en vez de enseñar.
      </p>
      <p>
        El juego de imaginación también cuenta. Acompañar a las familias para leer en voz alta y jugar a hacer como si
        desde el nacimiento hasta los 3 años redujo la hiperactividad y los problemas de atención a los cuatro años y medio{" "}
        <Cite id="mendelsohn-2018" />. Mira los <Link href="/games/type/pretend-play">juegos de imaginación</Link> y los{" "}
        <Link href="/games/type/hide-and-find">juegos de esconder y encontrar</Link> para más.
      </p>

      <h2>Que sea algo pequeño</h2>
      <p>
        La Academia Americana de Pediatría describe el juego a esta edad como juego con objetos que se vuelve simbólico,
        habilidades motoras, turnarse y un adulto que ayuda un poco, por ejemplo girando una pieza del puzle{" "}
        <Cite id="aap-play" />. Nada de eso necesita un plan ni ir de compras.
      </p>
      <p>
        Un juego basta para una tarde. Juégalo mientras tu peque se ríe, deja que haga tu parte una ronda y para antes de
        que se convierta en una obligación. Si quiere el mismo juego cada noche, también está bien. La lista completa de{" "}
        <Link href="/games/age/toddlers">juegos para niños de 1 a 3 años</Link> está ordenada por energía, como esta.
      </p>
      <p>Si te preocupa cómo se está desarrollando o comportando tu peque, habla con tu pediatra.</p>
    </>
  ),
};
