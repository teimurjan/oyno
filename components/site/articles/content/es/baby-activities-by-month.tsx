import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../baby-activities-by-month";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Actividades para bebés de 0 a 12 meses, mes a mes",
  description:
    "Juegos sencillos para cada etapa del primer año de tu bebé, del cucú-tras sobre tu pecho a los turnos, con lo que hallaron los estudios a cada edad.",
  body: (
    <>
      <p>
        Un juego que hizo reír a tu bebé un mes puede aburrirle unas semanas después. Esta guía ordena juegos sencillos
        por etapas, desde las primeras semanas hasta el primer cumpleaños. Cada uno dura de 5 a 15 minutos, y casi
        todos solo necesitan tu cara, tu voz y quizá un vaso o un trapo.
      </p>
      <p>
        Los meses salen de los estudios de abajo, que observaron a bebés de esas edades. Úsalos como un mapa
        aproximado, no como una lista de control. Si un juego de una etapa anterior todavía hace sonreír a tu bebé,
        sigue jugándolo.
      </p>
      <p>
        Esta tarde, busca abajo la etapa de tu bebé, elige un juego y lee sus pasos una vez. Deja el móvil en otra
        habitación, juega hasta que tu bebé aparte la mirada y para ahí.
      </p>

      <h2>Cómo es el juego en el primer año</h2>
      <p>
        La Academia Americana de Pediatría describe el juego del primer año como algo que crece desde la sonrisa social
        hasta el ida y vuelta, el cucú-tras y el “palmas, palmitas”. Sus pediatras recomiendan además leer en voz alta
        junto al juego desde el nacimiento <Cite id="aap-play" />.
      </p>
      <p>
        Para bebés de 6 a 18 meses, el Center on the Developing Child de Harvard recomienda juegos en el regazo con una
        sorpresa esperada, juegos de esconder, juegos de imitar, juego de roles sencillo, juegos de dedos y hablar de
        lo que tu bebé observa <Cite id="cdc-guide" />. Casi todos los juegos de abajo son uno de esos. Lo que cambia de
        una etapa a otra es lo que tu bebé aporta.
      </p>

      <h2>De 0 a 3 meses: tu cara y tu voz</h2>
      <p>
        En las primeras semanas, el juguete eres tú. El juego es tu cara, tu voz y las pausas entre una y otra.
      </p>
      <p>
        Los bebés notan cuando esa cara se queda en blanco. En un experimento clásico, bebés de 1 a 4 meses cuyas
        madres mantenían la cara quieta, sin responder, se volvían recelosos y se retraían en cuestión de minutos{" "}
        <Cite id="tronick-1978" />. Los bebés también notan la forma de un juego. Cuando los investigadores alteraron el
        ritmo y la estructura del cucú-tras, y del balbuceo por turnos, bebés de 2 a 6 meses reaccionaron al cambio{" "}
        <Cite id="rochat-1999" />.
      </p>
      <p>Dos juegos encajan con esta etapa, y los dos funcionan contigo tumbado:</p>
      <ul>
        <li>
          <GameLink id="hands-peekaboo" />: túmbate con tu bebé sobre el pecho y tápate la cara con las dos manos.
          Espera sin moverte mientras cuentas despacio hasta tres, di “¡Cucú!” y abre bien las manos. Alarga un poco la
          cuenta cada vez y termina mientras tu bebé aún sonríe.
        </li>
        <li>
          <GameLink id="missing-last-word" />: canta despacio una canción que tu bebé haya oído cien veces, mirando su
          carita. Para justo antes de la última palabra de un verso y aguanta el silencio con las cejas levantadas.
          Espera a que se mueva, dé una patadita o te mire, y suelta la palabra con una gran sonrisa.
        </li>
      </ul>
      <p>
        Los libros también cuentan, desde el principio. En un ensayo que acompañó a las familias para leer en voz alta
        y jugar a hacer como si desde el nacimiento hasta los 3 años, el acompañamiento redujo la hiperactividad y los
        problemas de atención a los cuatro años y medio <Cite id="mendelsohn-2018" />. Tienes más juegos de regazo en{" "}
        <Link href="/games/type/anticipation-rhyme">rimas con sorpresa</Link> y en{" "}
        <Link href="/games/type/peekaboo">juegos de cucú-tras</Link>.
      </p>

      <h2>De 3 a 6 meses: mirar y anticipar</h2>
      <p>
        Tu bebé empieza a adelantarse. En un experimento, bebés de 3 meses y medio aprendieron una secuencia de imágenes
        a izquierda y derecha y miraban por adelantado dónde aparecería la siguiente <Cite id="haith-1988" />.
      </p>
      <p>
        La atención también forma parte de esta etapa. Lo bien que los bebés enfocaban la atención a los 5 meses
        predijo su función ejecutiva entre los 2 y los 4 años <Cite id="cuevas-bell-2014" />. La función ejecutiva es el
        conjunto de capacidades que un niño usa para sostener una idea, frenarse antes de actuar y cambiar de plan.
        Nuestra <Link href="/guides/executive-function-babies-toddlers">guía sobre la función ejecutiva</Link> lo
        explica con más detalle.
      </p>
      <p>
        Los primeros signos de memoria de trabajo aparecen hacia el final de esta etapa. Bebés de cinco meses y medio a
        seis meses y medio encontraban un juguete tras una breve espera <Cite id="reznick-2004" />.
      </p>
      <ul>
        <li>
          <GameLink id="toy-comet" />: tumbaos boca arriba y sujeta un juguete a un antebrazo de la cara de tu bebé
          hasta que fije la mirada en él. Muévelo despacio hacia un lado, para y espera a que sus ojos lo alcancen antes
          de seguir. Para cuando aparte la mirada.
        </li>
        <li>
          <GameLink id="peeking-tail" />: para un bebé de unos 5 meses que ya agarra cosas, pero aún no encuentra un
          juguete escondido del todo. Tapa un juguete con un trapo de modo que asome una esquina. Pregunta “¿Dónde
          está?”, toca la parte que asoma y espera con las manos quietas. Cuando tire del trapo, celébralo bajito, y la
          próxima vez tapa un poco más el juguete.
        </li>
      </ul>
      <p>
        Para más, mira los <Link href="/games/type/joint-attention">juegos de mirar y señalar</Link> y los{" "}
        <Link href="/games/type/hide-and-find">juegos de esconder y encontrar</Link>.
      </p>

      <h2>De 6 a 9 meses: canciones, imitar y esconder</h2>
      <p>
        Ahora cantar se gana su sitio. Los bebés de 6 meses prestaban atención más tiempo a su madre cuando cantaba que
        cuando hablaba <Cite id="nakata-trehub-2004" />. No hace falta buena voz, solo una canción que tu bebé conozca.
      </p>
      <p>
        Para bebés de 6 y 9 meses, las hojas Brain-Building Through Play de Harvard recomiendan el cucú-tras y los
        juegos de esconder, Trot Trot to Boston (un caballito en las rodillas), Pat-a-Cake (palmas, palmitas), Dickory
        Dean, Baby See Baby Do, dejar caer un juguete por turnos con un “¡bum!”, juegos de conversación y juegos de dedos{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        A esta edad importa cómo respondes. En un ensayo, enseñar a los padres a responder a sus bebés de 6 a 10 meses
        mejoró la atención de los bebés y su capacidad de resolver problemas por sí solos <Cite id="landry-2006" />.
        Desde los 7 meses y medio más o menos, los bebés de un experimento clásico encontraban un juguete escondido bajo
        una de dos telas tras una breve espera <Cite id="diamond-1985" />.
      </p>
      <ul>
        <li>
          <GameLink id="copy-cat-faces" />: imita la cara o el sonido de tu bebé justo después de que lo haga, la lengua
          fuera, un gritito, el ceño fruncido. Tras unas cuantas veces, pon tú una cara nueva, despacio, y mantenla.
          Espera, con esa cara puesta, a que intente imitarla.
        </li>
        <li>
          <GameLink id="two-cup-switch" />: para la bandeja de la trona y un bebé de unos 8 meses en adelante. Pon dos
          vasos boca abajo y mete un juguete debajo de uno mientras tu bebé mira. Cuenta despacio “uno, dos, tres” y
          deja que levante un vaso. Tras unos cuantos aciertos, pasa el juguete al otro vaso a la vista, cuenta otra vez
          y fíjate adónde va su mano.
        </li>
      </ul>
      <p>
        Para más, mira los <Link href="/games/type/fingerplay-song">juegos de manos y canciones con gestos</Link> y los{" "}
        <Link href="/games/type/imitation">juegos de imitar</Link>.
      </p>

      <h2>De 9 a 12 meses: turnos, señalar y el primer juego simbólico</h2>
      <p>
        Los juegos se convierten en un ida y vuelta de verdad. Bebés de 9 a 18 meses en juegos por turnos, como dar y
        tomar o el cucú-tras, avisaban cuando el adulto se saltaba un turno <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Hacia el primer cumpleaños, importa adónde miras. Los niños de un año mantenían la atención en un juguete
        durante más tiempo cuando su padre o su madre miraba y nombraba ese mismo juguete <Cite id="yu-smith-2016" />.
        Hablar también cuenta. Que los padres hablaran con sensibilidad de lo que su bebé podía estar pensando, y
        apoyaran que hiciera cosas solo, a los 12 a 15 meses predijo la función ejecutiva a los 18 y 26 meses{" "}
        <Cite id="bernier-2010" />. En casa, puede ser algo tan pequeño como decir lo que crees que quiere tu bebé, “quieres
        la cuchara”, y dejar que lo intente antes de ayudarle.
      </p>
      <ul>
        <li>
          <GameLink id="toy-give-back" />: para un bebé de unos 9 meses en adelante sentado en tu regazo. Dale un juguete
          y di “toma”. Luego tiende la mano abierta, di “me toca” y espera sin quitárselo, aunque tarde un minuto. Cuando
          te lo dé, di “gracias” y devuélveselo enseguida con un “te toca”.
        </li>
        <li>
          <GameLink id="look-where-i-look" />: para un bebé de unos 9 meses que ya se sienta. Pon dos juguetes en el
          suelo delante de los dos. Gira la cabeza hacia uno, míralo fijamente y di su nombre una vez. Espera a que sus
          ojos sigan a los tuyos, nómbralo otra vez y dáselo.
        </li>
      </ul>
      <p>
        El juego de roles sencillo, de la lista de Harvard de arriba, también encaja aquí: un vaso vacío del que sorbes,
        o una llamada de mentira a la abuela. Encontrarás más en los{" "}
        <Link href="/games/type/turn-taking">juegos por turnos</Link> y en los{" "}
        <Link href="/games/type/pretend-play">juegos de imaginación</Link>, o mira todos los{" "}
        <Link href="/games/age/babies">juegos para bebés</Link>.
      </p>

      <h2>Lo que no cambia en todo el año</h2>
      <p>
        El método no cambia con los meses. La hoja de Harvard sobre el ida y vuelta (serve and return) lo resume en
        cinco pasos: fíjate en lo que tiene la atención de tu bebé y compártelo, devuélveselo con apoyo, pon nombre a lo
        que ve o siente, turnaos y espera, y practica finales y comienzos. Su ejemplo es el cucú-tras{" "}
        <Cite id="serve-return" />.
      </p>
      <p>
        Seguir la iniciativa de tu bebé es lo que hay que practicar. Cuando se enseñó a padres de niños de 6 a 21 meses
        a seguir la iniciativa del niño, responder y disfrutar con él, mejoró la flexibilidad mental de los niños a los
        4 años <Cite id="lind-2017" />.
      </p>
      <p>Algunos hábitos de los pasos de estos juegos sirven en todas las etapas:</p>
      <ul>
        <li>Para mientras tu bebé aún sonríe, no cuando ya se ha cansado.</li>
        <li>Cuando aparte la mirada, tómalo como el final de la ronda.</li>
        <li>Alarga un poco la pausa cada vez, y deja que la llene tu bebé.</li>
        <li>Nombra lo que mira, con pocas palabras y mucho cariño.</li>
      </ul>
      <p>
        Los bebés también notan el móvil. Bebés de 7 a 24 meses se alteraban cuando su madre se volvía hacia el móvil
        durante una tarea de cara inmóvil, y los bebés cuyas madres usaban más los dispositivos en casa se recuperaban
        menos <Cite id="myruski-2018" />. Sé lo difícil que es soltarlo. Trabajo todo el día, llego a casa y voy a por
        el móvil. Para diez minutos de juego, déjalo en otra habitación.
      </p>

      <h2>Si tu bebé todavía no lo hace</h2>
      <p>
        Los meses de esta guía son las edades que observaron los estudios, no plazos. Si un juego es demasiado difícil
        esta tarde, vuelve a uno de la etapa anterior. Casi todos estos juegos llevan un comienzo más fácil: una
        esquina que asoma antes de un juguete escondido del todo, una pausa corta antes de una larga.
      </p>
      <p>
        No necesitas apuntar nada ni poner a prueba a tu bebé. Elige un juego que encaje con esta tarde y juégalo
        mientras lo disfrute. Si te preocupa cómo se está desarrollando tu bebé, habla con tu pediatra.
      </p>
    </>
  ),
};
