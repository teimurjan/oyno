import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../baby-activities-by-month";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Actividades para bebés de 0 a 12 meses, mes por mes",
  description:
    "Juegos sencillos para cada etapa del primer año de tu bebé, desde el “¿dónde está?” sobre tu pecho hasta tomar turnos, con lo que encontraron los estudios en cada edad.",
  body: (
    <>
      <p>
        Un juego que hizo reír a tu bebé un mes puede aburrirle unas semanas después. Esta guía ordena juegos
        sencillos por etapa, desde las primeras semanas hasta el primer cumpleaños. Cada uno toma de 5 a 15 minutos,
        y casi todos no necesitan más que tu cara, tu voz y quizá un vaso o un trapo.
      </p>
      <p>
        Los meses vienen de los estudios de abajo, que probaron a bebés de esas edades. Úsalos como un mapa
        aproximado, no como una lista de pendientes. Si un juego de una etapa anterior todavía hace sonreír a tu bebé,
        sigue jugándolo.
      </p>
      <p>
        Hoy en la tarde, busca abajo la etapa de tu bebé, escoge un juego y lee sus pasos una vez. Deja el celular en
        otro cuarto, juega hasta que tu bebé voltee a otro lado y ahí termina.
      </p>

      <h2>Cómo se ve el juego en el primer año</h2>
      <p>
        La Academia Americana de Pediatría describe que el juego en el primer año crece desde la sonrisa social hacia
        el servir y devolver, el “¿dónde está? ¡aquí está!” y las tortillitas. Sus pediatras también recomiendan leer
        en voz alta junto con el juego desde el nacimiento <Cite id="aap-play" />.
      </p>
      <p>
        Para bebés de 6 a 18 meses, el Center on the Developing Child de Harvard recomienda juegos en las piernas con
        una sorpresa esperada, juegos de esconder, juegos de copiar, juegos de roles sencillos, juegos de manitas y
        platicar sobre lo que tu bebé nota <Cite id="cdc-guide" />. Casi todos los juegos de abajo son de esos. Lo que
        cambia de una etapa a otra es lo que tu bebé aporta.
      </p>

      <h2>De 0 a 3 meses: tu cara y tu voz</h2>
      <p>
        En las primeras semanas, el juguete eres tú. El juego es tu cara, tu voz y las pausas entre una y otra.
      </p>
      <p>
        Los bebés notan cuando esa cara se queda en blanco. En un experimento clásico, bebés de 1 a 4 meses cuyas
        mamás mantenían la cara quieta y sin respuesta se ponían recelosos y se retraían en cuestión de minutos{" "}
        <Cite id="tronick-1978" />. Los bebés también notan la forma de un juego. Cuando unos investigadores alteraron
        el ritmo y la estructura del “¿dónde está? ¡aquí está!” y del balbuceo de ida y vuelta, bebés de 2 a 6 meses
        reaccionaron al cambio <Cite id="rochat-1999" />.
      </p>
      <p>Dos juegos van con esta etapa, y los dos se juegan acostados:</p>
      <ul>
        <li>
          <GameLink id="hands-peekaboo" />: recuéstate con tu bebé sobre tu pecho y tápate la cara con las dos manos.
          Espera contando lento hasta tres, luego di “¡Aquí está!” y abre bien las manos. Alarga la cuenta un poquito
          cada vez, y termina cuando tu bebé todavía esté sonriendo.
        </li>
        <li>
          <GameLink id="missing-last-word" />: canta despacio una canción que tu bebé ha oído mil veces, mirándole la
          cara. Detente justo antes de la última palabra de un verso y quédate en silencio con las cejas levantadas.
          Espera un meneo, una patadita o una mirada, y luego suelta la palabra con una gran sonrisa.
        </li>
      </ul>
      <p>
        Los libros también cuentan, desde el principio. En un ensayo que asesoró a las familias para leer en voz alta
        y jugar a imaginar con su hijo desde el nacimiento hasta los 3 años, la asesoría redujo la hiperactividad y
        los problemas de atención a los cuatro años y medio <Cite id="mendelsohn-2018" />. Hay más juegos en las
        piernas en <Link href="/games/type/anticipation-rhyme">juegos de rimas con sorpresa</Link> y en{" "}
        <Link href="/games/type/peekaboo">juegos de “¿dónde está? ¡aquí está!”</Link>.
      </p>

      <h2>De 3 a 6 meses: mirar y anticipar</h2>
      <p>
        Tu bebé empieza a adelantarse. En un experimento, bebés de 3 meses y medio aprendieron una secuencia de
        imágenes a izquierda y derecha y miraban por adelantado adonde aparecería la siguiente imagen{" "}
        <Cite id="haith-1988" />.
      </p>
      <p>
        La atención también es parte de esta etapa. Qué tan bien enfocaban la atención los bebés a los 5 meses
        predecía sus funciones ejecutivas entre los 2 y los 4 años <Cite id="cuevas-bell-2014" />. Las funciones
        ejecutivas son el conjunto de habilidades que un niño usa para sostener una idea, frenarse antes de actuar y
        cambiar de plan. Nuestra{" "}
        <Link href="/guides/executive-function-babies-toddlers">guía de funciones ejecutivas</Link> lo explica con
        más detalle.
      </p>
      <p>
        Las primeras señales de memoria de trabajo aparecen hacia el final de esta etapa. Bebés de cinco meses y medio
        a seis meses y medio encontraban un juguete tras una breve espera <Cite id="reznick-2004" />.
      </p>
      <ul>
        <li>
          <GameLink id="toy-comet" />: acuéstense boca arriba y sostén un juguete a un antebrazo de distancia de la
          cara de tu bebé hasta que fije la mirada en él. Muévelo despacio hacia un lado, detente y espera a que sus
          ojos lo alcancen antes de seguir. Para cuando ya no lo mire.
        </li>
        <li>
          <GameLink id="peeking-tail" />: para un bebé de unos 5 meses que agarra cosas pero aún no encuentra un
          juguete escondido del todo. Pon un trapo sobre un juguete de modo que se asome una puntita. Pregunta “¿Dónde
          quedó?”, toca la parte que se asoma y espera con las manos quietas. Cuando jale el trapo, festeja bajito, y
          la siguiente vez tapa un poco más el juguete.
        </li>
      </ul>
      <p>
        Para más, mira los <Link href="/games/type/joint-attention">juegos de mirar y señalar</Link> y los{" "}
        <Link href="/games/type/hide-and-find">juegos de esconder y encontrar</Link>.
      </p>

      <h2>De 6 a 9 meses: canciones, copiar y esconder</h2>
      <p>
        Ahora cantar se gana su lugar. Los bebés de 6 meses ponían atención por más tiempo a su mamá cuando cantaba
        que cuando hablaba <Cite id="nakata-trehub-2004" />. No necesitas buena voz, solo una canción que tu bebé
        conozca.
      </p>
      <p>
        Para bebés de 6 y 9 meses, las hojas de Harvard Brain-Building Through Play incluyen el “¿dónde está? ¡aquí
        está!” y los juegos de esconder, Trot Trot to Boston (arre, caballito), Pat-a-Cake (tortillitas), Dickory
        Dean, Baby See Baby Do, turnarse para tirar un juguete diciendo “¡pum!”, juegos de plática y juegos de manitas{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        A esta edad importa cómo respondes. En un ensayo, asesorar a mamás y papás para responder a sus bebés de 6 a
        10 meses mejoró la atención de los bebés y su capacidad de resolver problemas por su cuenta{" "}
        <Cite id="landry-2006" />. Desde los 7 meses y medio, más o menos, los bebés de un experimento clásico podían
        encontrar un juguete escondido bajo una de dos tapas tras una breve espera <Cite id="diamond-1985" />.
      </p>
      <ul>
        <li>
          <GameLink id="copy-cat-faces" />: imita la cara o el sonido de tu bebé un instante después de que lo haga:
          la lengua de fuera, un chillido, el ceño fruncido. Después de unas cuantas, haz tú una cara nueva, despacito,
          y mantenla. Espera con esa cara puesta a que intente hacerla también.
        </li>
        <li>
          <GameLink id="two-cup-switch" />: para la charola de la periquera y un bebé de unos 8 meses. Pon dos vasos
          boca abajo y esconde un juguete bajo uno mientras tu bebé mira. Cuenta lento “uno, dos, tres”, luego deja
          que levante un vaso. Tras unos aciertos, pasa el juguete al otro vaso a la vista, cuenta otra vez y mira a
          dónde se estira.
        </li>
      </ul>
      <p>
        Para más, mira los <Link href="/games/type/fingerplay-song">juegos de manitas y canciones con mímica</Link> y
        los <Link href="/games/type/imitation">juegos de imitar</Link>.
      </p>

      <h2>De 9 a 12 meses: turnos, señalar y la primera imaginación</h2>
      <p>
        Los juegos se vuelven un ida y vuelta de verdad. Bebés de 9 a 18 meses en juegos por turnos, como dar y
        recibir y “¿dónde está? ¡aquí está!”, hacían señas cuando el adulto se saltaba un turno{" "}
        <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Alrededor del primer cumpleaños, importa hacia dónde miras. Los niños de un año mantenían la atención en un
        juguete por más tiempo cuando su mamá o su papá miraba y nombraba el mismo juguete{" "}
        <Cite id="yu-smith-2016" />. Las palabras también cuentan. Que mamá y papá hablaran con sensibilidad sobre lo
        que su bebé podría estar pensando, y apoyaran que hiciera cosas solo, a los 12 a 15 meses predijo las
        funciones ejecutivas a los 18 y 26 meses <Cite id="bernier-2010" />. En casa, puede ser tan poco como decir
        lo que crees que tu bebé quiere, “quieres la cuchara”, y dejar que lo intente antes de ayudarle.
      </p>
      <ul>
        <li>
          <GameLink id="toy-give-back" />: para un bebé de 9 meses en adelante en tus piernas. Dale un juguete y di
          “toma”. Luego extiende la mano abierta, di “me toca” y espera sin arrebatárselo, aunque tarde un minuto.
          Cuando te lo ponga en la mano, di “gracias” y devuélveselo enseguida con un “te toca”.
        </li>
        <li>
          <GameLink id="look-where-i-look" />: para un bebé de unos 9 meses que ya se sienta. Pon dos juguetes en el
          piso frente a los dos. Voltea la cabeza hacia uno, míralo fijamente y di su nombre una vez. Espera a que sus
          ojos sigan a los tuyos, luego nómbralo otra vez y dáselo.
        </li>
      </ul>
      <p>
        Los juegos de roles sencillos de la lista de Harvard también van aquí: un vaso vacío del que sorbes, o una
        llamada de mentiritas a la abuelita. Encuentra más en los{" "}
        <Link href="/games/type/turn-taking">juegos por turnos</Link> y los{" "}
        <Link href="/games/type/pretend-play">juegos de imaginación</Link>, o mira todos los{" "}
        <Link href="/games/age/babies">juegos para bebés</Link>.
      </p>

      <h2>Lo que no cambia en todo el año</h2>
      <p>
        El método no cambia con los meses. La hoja de Harvard sobre servir y devolver lo resume en cinco pasos: fíjate
        en lo que tiene la atención de tu bebé y compártelo, devuélvele con apoyo, nombra lo que ve o siente, túrnense
        y espera, y practica los finales y los comienzos. Su ejemplo es el “¿dónde está? ¡aquí está!”{" "}
        <Cite id="serve-return" />.
      </p>
      <p>
        Seguir la iniciativa de tu bebé es lo que hay que practicar. Cuando a mamás y papás de niños de 6 a 21 meses
        se les asesoró para seguir la iniciativa del niño, responderle y mostrarle gusto, mejoró la flexibilidad
        mental de sus hijos a los 4 años <Cite id="lind-2017" />.
      </p>
      <p>Unos hábitos de los pasos de arriba sirven en cualquier etapa:</p>
      <ul>
        <li>Para cuando tu bebé todavía esté sonriendo, no cuando ya se cansó.</li>
        <li>Cuando voltee a otro lado, tómalo como el final de la ronda.</li>
        <li>Alarga la pausa un poco cada vez, y deja que tu bebé la llene.</li>
        <li>Nombra lo que mira, con unas pocas palabras cariñosas.</li>
      </ul>
      <p>
        Los bebés también notan el celular. Bebés de 7 a 24 meses se alteraban cuando su mamá se volteaba hacia el
        celular durante una tarea de cara inmóvil, y los bebés cuyas mamás usaban más los dispositivos en casa se
        recuperaban menos <Cite id="myruski-2018" />. Sé lo difícil que es soltarlo. Trabajo todo el día, llego a casa
        y agarro el celular. Para diez minutos de juego, déjalo en otro cuarto.
      </p>

      <h2>Si tu bebé todavía no lo hace</h2>
      <p>
        Los meses de esta guía son las edades que probaron los estudios, no fechas límite. Si un juego es demasiado
        difícil hoy, regresa a uno de la etapa anterior. Casi todos estos juegos ya traen un inicio más fácil: una
        puntita asomada antes de un juguete escondido del todo, una pausa corta antes de una larga.
      </p>
      <p>
        No necesitas llevar registro de nada ni ponerle pruebas a tu bebé. Escoge un juego que vaya con hoy y juégalo
        mientras lo disfrute. Si algo de cómo se está desarrollando tu bebé te preocupa, platícalo con tu pediatra.
      </p>
    </>
  ),
};
