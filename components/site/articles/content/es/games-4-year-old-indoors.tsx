import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-4-year-old-indoors";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Juegos en casa para niños de 4 años",
  description:
    "Ocho juegos en casa para un peque de cuatro años: reglas al revés, trucos con vasos, un restaurante de mentira y un circuito en el salón, con los estudios detrás.",
  body: (
    <>
      <p>
        Todos los juegos de abajo tienen una regla, y casi todos le dan la vuelta a mitad. Cada uno encaja con un peque
        de cuatro años, solo necesita una habitación y lo que hay en ella, y dura unos 10 minutos. Con algunos puedes
        quedarte en la silla.
      </p>

      <h2>Juegos de reglas que se dan la vuelta</h2>
      <p>
        En un estudio, niños de 4 a 6 años se tocaban los pies cuando se les decía “cabeza” y la cabeza cuando se les
        decía “pies”, y cómo lo hacían predijo cómo les fue en su primer curso escolar <Cite id="ponitz-2009" />.
      </p>
      <p>
        <GameLink id="heads-mean-toes" /> es esa tarea convertida en juego, y puedes dirigirla desde una silla. Explícale a
        tu peque que cuando digas “cabeza” se toca los pies, y cuando digas “pies” se toca la cabeza. Di las dos palabras
        sin orden, primero despacio y luego más rápido. Cuando sea fácil, añade rodillas y hombros como segunda pareja
        cambiada.
      </p>
      <p>
        <GameLink id="purple-light" /> necesita un pasillo. Ponte en un extremo. Tu peque camina hacia ti con “luz
        morada” y se congela con “luz roja”. Cuando llegue hasta ti, cambia las palabras, y ahora la roja es avanzar y la
        morada es parar. Di los colores más rápido en cada ronda. Niños de 3 a 5 años que jugaron en corro a juegos como
        Red Light, Purple Light mejoraron su autorregulación <Cite id="tominey-mcclelland-2011" />, y un segundo ensayo en
        aulas de Head Start halló que los mismos juegos mejoraban la autorregulación y la preparación para la escuela{" "}
        <Cite id="schmitt-2015" />.
      </p>

      <h2>Juegos de memoria en la mesa</h2>
      <p>
        <GameLink id="cup-shuffle" /> necesita tres vasos y un calcetín hecho una bola. Esconde el calcetín bajo un vaso
        mientras tu peque mira. Desliza despacio dos vasos cruzándolos, luego cambia otra pareja, y pregunta qué vaso
        esconde el calcetín. Añade un cambio en cada ronda, y luego pásale los vasos para que los mueva tu peque y
        adivines tú.
      </p>
      <p>
        En un ensayo, niños de cuatro y cinco años entrenados en tareas de memoria de trabajo mejoraron su memoria de
        trabajo y su atención en tareas que no habían entrenado <Cite id="thorell-2009" />.
      </p>
      <p>
        <GameLink id="build-my-plan" /> convierte la construcción en memoria. Describe primero una torre con palabras,
        como tres vasos, luego el libro y dos vasos encima. Tu peque la construye de memoria mientras tú dejas las manos
        en el regazo. Comparadla juntos con el plano, y luego tu peque describe una y construyes tú. Niños en edad
        preescolar que jugaron con bloques construyendo a partir de planos e imágenes mejoraron su función ejecutiva{" "}
        <Cite id="schmitt-2018" />.
      </p>

      <h2>Juego de imaginación con plan</h2>
      <p>
        En <GameLink id="pretend-restaurant" />, te sientas como cliente y pides tres platos, como sopa, una pizza y un
        plátano. Tu peque, que hace de camarero, repite el pedido, lo cocina con cojines y vasos y sirve los platos en el
        orden que pediste. En la siguiente ronda, añade una bebida.
      </p>
      <p>
        Niños de 3 a 5 años que pasaron cinco semanas en juego simbólico fantástico mejoraron su memoria de trabajo y su
        autocontrol <Cite id="thibodeau-2016" />. En otro estudio, el juego simbólico complejo con otros niños en edad
        preescolar predijo su autorregulación más adelante <Cite id="elias-berk-2002" />.
      </p>

      <h2>Un circuito de obstáculos en el salón</h2>
      <p>
        <GameLink id="obstacle" /> es el que más preparación lleva de esta lista, y dura 15 minutos. Montad un circuito
        que pase por debajo de una silla, por encima de un cojín y alrededor de la mesa. Cronometra a tu peque contando
        despacio en voz alta. Luego cambia un obstáculo y te cronometra a ti.
      </p>
      <p>
        La guía de actividades de Harvard para 3 a 5 años recomienda circuitos de obstáculos y equilibrio{" "}
        <Cite id="cdc-guide" />. Niños en edad preescolar en un programa de saltar a la pata coja, brincar, lanzar y
        atrapar mejoraron su función ejecutiva <Cite id="mulvey-2018" />.
      </p>

      <h2>Cambiar de regla y canciones</h2>
      <p>
        <GameLink id="guess-my-rule" /> es un juego de detectives con un montón de calcetines. Sepáralos en dos montones
        según una regla secreta, como de rayas y lisos. Tu peque mira y dice la regla en cuanto la descubre. Luego
        clasifica con su propia regla secreta y adivinas tú, y ninguna regla se puede repetir. A niños de 3 a 5 años se
        les ha puesto a prueba con el mismo tipo de cambio: clasificar cartas por color y luego pasar a la forma{" "}
        <Cite id="zelazo-2006" />.
      </p>
      <p>
        <GameLink id="missing-word-song" /> es para un peque de cuatro años que se sabe toda la letra. Cantad una canción
        que os sepáis los dos, como “Los pollitos dicen”. Elegid una palabra, como “pío”, y cada vez que salga dais una
        palmada en vez de cantarla. En cada ronda, añadid otra palabra muda. Niños de 4 a 6 años en un programa corto de
        música con canto, ritmo e instrumentos mejoraron su función ejecutiva <Cite id="bugos-demarie-2017" />.
      </p>

      <h2>Elegir uno esta tarde</h2>
      <p>
        Elige el juego según la energía que te queda. Si aún te queda algo, monta el circuito o jugad a Luz morada en el
        pasillo. Si estás en el sofá, Cabeza es pies y Adivina mi regla funcionan desde ahí. Si ya es casi hora de
        dormir, La canción muda se puede cantar tumbados.
      </p>
      <p>
        Hay más en los <Link href="/games/age/preschoolers">juegos para niños de 3 a 5 años</Link>, y los{" "}
        <Link href="/games/skill/self-control">juegos de autocontrol</Link> reúnen en un sitio los juegos de estatuas y
        de contrarios.
      </p>
    </>
  ),
};
