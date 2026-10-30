import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-4-year-old-indoors";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Juegos en casa para niños de 4 años",
  description:
    "Ocho juegos en casa para un niño de cuatro años: reglas al revés, trucos con vasos, un restaurante de mentiritas y una carrera de obstáculos en la sala, con los estudios detrás de cada uno.",
  body: (
    <>
      <p>
        Todos los juegos de abajo tienen una regla, y casi todos la voltean a la mitad. Cada uno es para un niño de
        cuatro años, solo necesita un cuarto y lo que hay en él, y toma unos 10 minutos. Algunos te dejan quedarte en
        tu silla.
      </p>

      <h2>Juegos con reglas que se voltean</h2>
      <p>
        En un estudio, niños de 4 a 6 años se tocaban los pies cuando les decían “cabeza” y la cabeza cuando les
        decían “pies”, y cómo les iba predecía cómo les iría en el kínder <Cite id="ponitz-2009" />.
      </p>
      <p>
        <GameLink id="heads-mean-toes" /> es esa tarea hecha juego, y la puedes dirigir desde una silla. Dile a tu
        peque que cuando digas “cabeza” se toca los pies, y cuando digas “pies” se toca la cabeza. Di las dos palabras
        en desorden, primero despacio y luego más rápido. Cuando ya sea fácil, agreguen rodillas y hombros como
        segundo par al revés.
      </p>
      <p>
        <GameLink id="purple-light" /> necesita un pasillo. Párate en una punta. Tu peque camina hacia ti con “luz
        morada” y se congela con “luz roja”. Cuando te alcance, cambien las palabras, así que ahora roja es avanzar y
        morada es parar. Di los colores más rápido cada ronda. Niños de preescolar que jugaron en círculo a juegos
        como Red Light, Purple Light (luz roja, luz morada) mejoraron su autorregulación{" "}
        <Cite id="tominey-mcclelland-2011" />, y un segundo ensayo en salones de Head Start encontró que los mismos
        juegos mejoraban la autorregulación y la preparación para la escuela <Cite id="schmitt-2015" />.
      </p>

      <h2>Juegos de memoria en la mesa</h2>
      <p>
        <GameLink id="cup-shuffle" /> necesita tres vasos y una bolita de calcetín. Esconde el calcetín debajo de un
        vaso mientras tu peque mira. Cruza despacio dos vasos, luego intercambia otro par, y pregúntale debajo de cuál
        está el calcetín. Agrega un cambio en cada ronda, y luego pásale los vasos para que revuelva tu peque y tú
        adivines.
      </p>
      <p>
        En un ensayo, niños de cuatro y cinco años que entrenaron con tareas de memoria de trabajo mejoraron su memoria
        de trabajo y su atención en tareas que no habían entrenado <Cite id="thorell-2009" />.
      </p>
      <p>
        <GameLink id="build-my-plan" /> vuelve la construcción un juego de memoria. Describe primero una torre con
        palabras, como tres vasos, luego el libro, luego dos vasos arriba. Tu peque la construye de memoria mientras
        tú tienes las manos en las piernas. Revisen juntos si quedó como el plano, y luego tu peque describe una y tú
        construyes. Niños de preescolar en juego con bloques que construían a partir de planos e imágenes mejoraron
        sus funciones ejecutivas <Cite id="schmitt-2018" />.
      </p>

      <h2>Juego de imaginación con un plan</h2>
      <p>
        En <GameLink id="pretend-restaurant" />, te sientas como cliente y pides tres platillos, como sopa, unos tacos
        y un plátano. Tu peque, el mesero, repite la orden, la cocina con cojines y vasos, y sirve los platillos en el
        orden que pediste. En la siguiente ronda, agrega una bebida.
      </p>
      <p>
        Niños de 3 a 5 años que pasaron cinco semanas en juego simbólico fantástico mejoraron su memoria de trabajo y
        su autocontrol <Cite id="thibodeau-2016" />. En otro estudio, el juego simbólico complejo de niños de
        preescolar con otros niños predijo su autorregulación más adelante <Cite id="elias-berk-2002" />.
      </p>

      <h2>Una carrera de obstáculos en la sala</h2>
      <p>
        <GameLink id="obstacle" /> es el que más hay que preparar de esta lista, y dura 15 minutos. Armen un recorrido
        que pase debajo de una silla, sobre un cojín y alrededor de la mesa. Tómale el tiempo a tu peque contando
        despacio en voz alta. Luego tu peque cambia un obstáculo y te toma el tiempo a ti.
      </p>
      <p>
        La guía de actividades de Harvard para los 3 a 5 años incluye circuitos de obstáculos y equilibrio{" "}
        <Cite id="cdc-guide" />. Niños de preescolar en un programa de brincar, saltar, lanzar y atrapar mejoraron sus
        funciones ejecutivas <Cite id="mulvey-2018" />.
      </p>

      <h2>Cambiar reglas y canciones</h2>
      <p>
        <GameLink id="guess-my-rule" /> es un juego de detectives con un montón de calcetines. Separa los calcetines
        en dos montones con una regla secreta, como de rayas y lisos. Tu peque observa y dice la regla en cuanto la
        descubre. Luego separa con su propia regla secreta y tú adivinas, y ninguna regla se puede usar dos veces. A
        niños de 3 a 5 años se les ha probado con el mismo tipo de cambio: clasificar tarjetas por color y luego
        cambiar a forma <Cite id="zelazo-2006" />.
      </p>
      <p>
        <GameLink id="missing-word-song" /> es para un peque de cuatro años que se sabe toda la letra. Canten una
        canción que los dos se sepan, como “Estrellita, ¿dónde estás?”. Escojan una palabra, como “estrellita”, y cada
        vez que llegue los dos aplauden en lugar de cantarla. En cada ronda, agreguen otra palabra callada. Niños de 4
        a 6 años en un programa corto de música con canto, ritmo e instrumentos mejoraron sus funciones ejecutivas{" "}
        <Cite id="bugos-demarie-2017" />.
      </p>

      <h2>Cómo escoger uno para hoy</h2>
      <p>
        Escoge el juego según la energía que te queda. Si todavía tienes algo, arma la carrera de obstáculos o jueguen
        Luz morada, luz roja en el pasillo. Si estás en el sillón, Cabeza, pies, ¡al revés! y Adivina mi regla
        funcionan desde ahí. Si ya casi es hora de dormir, La canción sin palabra se puede cantar acostados.
      </p>
      <p>
        Hay más en los <Link href="/games/age/preschoolers">juegos para niños de 3 a 5 años</Link>, y los{" "}
        <Link href="/games/skill/self-control">juegos de autocontrol</Link> juntan los de congelados y de opuestos en
        un solo lugar.
      </p>
    </>
  ),
};
