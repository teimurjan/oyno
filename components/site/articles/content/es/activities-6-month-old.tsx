import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../activities-6-month-old";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Actividades para un bebé de 6 meses",
  description:
    "Ocho juegos de cinco minutos para un bebé de seis meses, para jugar tumbado o con tu bebé en el regazo, y lo que dice la investigación de cada tipo.",
  body: (
    <>
      <p>
        Un bebé de seis meses no necesita un horario de actividades. Te necesita cerca, con tu cara donde pueda verla,
        y unos minutos de ida y vuelta. Casi todos los juegos de abajo funcionan contigo tumbado en el suelo o en el
        sofá, y ninguno necesita más que un vaso, un calcetín o un libro.
      </p>
      <p>
        Todos estos juegos encajan con un bebé de seis meses o menos. Cada uno dura unos cinco minutos. Para mientras
        tu bebé aún lo esté disfrutando.
      </p>

      <h2>Para qué está listo tu bebé</h2>
      <p>
        Bebés de cinco meses y medio a seis meses y medio encontraban un juguete tras una breve espera, lo que los
        investigadores consideran la memoria de trabajo más temprana <Cite id="reznick-2004" />. La memoria de trabajo
        es la capacidad de guardar algo en la cabeza y usarlo.
      </p>
      <p>
        Los bebés también captan el ritmo de un juego. Cuando los investigadores rompieron el ritmo del cucú-tras y del
        balbuceo por turnos con bebés de 2 a 6 meses, los bebés reaccionaron <Cite id="rochat-1999" />. Y los bebés de
        seis meses prestaban atención durante más tiempo cuando su madre les cantaba que cuando les hablaba{" "}
        <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        El Center on the Developing Child de Harvard propone una lista corta para bebés de 6 a 18 meses: juegos en el
        regazo con una sorpresa esperada, juegos de esconder, juegos de imitar, juegos de dedos y hablar de lo que el
        bebé observa <Cite id="cdc-guide" />. Los juegos de abajo siguen esa lista.
      </p>

      <h2>Juegos de esconder</h2>
      <p>
        <GameLink id="under-the-cup" /> es el más sencillo. Pon un vaso boca abajo sobre un juguete mientras tu bebé ve
        cómo desaparece. Pregunta “¿Dónde está?”, espera una respiración lenta y levanta el vaso con cara de sorpresa.
        Tras unas cuantas rondas, vuelve a taparlo y deja que lo levante tu bebé.
      </p>
      <p>
        <GameLink id="slow-fist-open" /> solo necesita una mano. Cierra el puño sobre un juguete demasiado grande para
        tragárselo, con un trocito asomando, y pregunta “¿Qué hay aquí?”. Abre los dedos de uno en uno, lo más despacio
        que puedas. Si tu bebé te abre los dedos, déjale, y vuelve a cerrar el puño para otra ronda.
      </p>

      <h2>El cucú-tras y la pausa</h2>
      <p>
        La hoja Brain-Building Through Play de Harvard para 6 y 9 meses empieza por el cucú-tras y los juegos de
        esconder, y añade rimas de regazo y juegos de dedos <Cite id="brain-play" />. En todos, la gracia está en la
        pausa antes de la sorpresa.
      </p>
      <p>
        En <GameLink id="hands-peekaboo" />, te tumbas con tu bebé sobre el pecho y te tapas la cara con las dos manos.
        Espera sin moverte mientras cuentas despacio hasta tres, di “¡Cucú!” y abre bien las manos. Alarga un poco la
        cuenta cada vez.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> necesita unos pies descalzos en tu regazo. Recita “este compró un huevito”,
        un dedo del pie por verso, despacio. Al llegar al último dedo, para y sujétale el pie quieto mientras cuentas
        despacio hasta tres. Luego sube los dedos hasta su barriga con un “¡y se lo comió!” y empieza con el otro pie.
      </p>

      <h2>Hablar e imitar</h2>
      <p>
        Tu bebé sabe turnarse mucho antes de tener palabras. En <GameLink id="babble-back" />, esperas a que haga
        cualquier sonido y le contestas como si fuera una frase de verdad. Para, míralo y déjale un buen hueco para su
        turno. Deja que la charla acabe cuando aparte la mirada.
      </p>
      <p>
        En <GameLink id="copy-cat-faces" />, imitas la cara o el sonido de tu bebé justo después de que lo haga: la
        lengua fuera, un gritito, el ceño fruncido. Tras unas cuantas veces, pon tú una cara nueva, despacio, mantenla
        y espera a que intente imitarla.
      </p>
      <p>
        Harvard lo llama ida y vuelta (serve and return). Fíjate en qué tiene la atención tu bebé, respóndele, pon
        nombre a lo que ve o siente, y luego turnaos y espera <Cite id="serve-return" />. En un ensayo, enseñar a los
        padres a responder así a bebés de 6 a 10 meses mejoró la atención de los bebés y su capacidad de resolver
        problemas por sí solos <Cite id="landry-2006" />.
      </p>

      <h2>Canciones y libros</h2>
      <p>
        <GameLink id="big-tiny-voice" /> usa una canción que tu bebé ha oído cien veces. Canta un verso a pleno pulmón,
        con los brazos abiertos. Canta el siguiente en un susurro, acercándote para que mire tu boca. Sigue alternando,
        y cambia antes de tiempo cada vez que te mire a los ojos.
      </p>
      <p>
        Para los libros, prueba <GameLink id="flat-out-story" />. Tumbaos uno al lado del otro en la cama y sujeta un
        libro de dibujos abierto encima de los dos. Señala un dibujo, nómbralo y espera a que los ojos de tu bebé
        lleguen a él. Si mira otra cosa de la página, nombra eso y quédate ahí.
      </p>
      <p>
        Mirar juntos una misma cosa es práctica de atención. En un estudio, lo bien que los bebés enfocaban la atención
        a los 5 meses predijo su función ejecutiva entre los 2 y los 4 años <Cite id="cuevas-bell-2014" />. La Academia
        Americana de Pediatría señala que los pediatras recomiendan leer en voz alta junto al juego desde el nacimiento{" "}
        <Cite id="aap-play" />. En un ensayo, acompañar a las familias para leer en voz alta y jugar a hacer como si
        desde el nacimiento hasta los 3 años redujo la hiperactividad y los problemas de atención a los cuatro años y
        medio <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Cómo encajarlo en una tarde de cansancio</h2>
      <p>
        No necesitas los ocho. Elige el que encaje con donde ya estás: boca arriba, en el sofá o en el suelo. Cinco
        minutos son una ronda completa. Si hoy ha funcionado, repite mañana el mismo juego.
      </p>
      <p>
        Hay más en <Link href="/games/age/babies">juegos para bebés</Link>, y los{" "}
        <Link href="/games/energy/low">juegos de poca energía</Link> son los que puedes jugar sin levantarte. Si tienes
        dudas sobre cómo se está desarrollando tu bebé, habla con tu pediatra.
      </p>
    </>
  ),
};
