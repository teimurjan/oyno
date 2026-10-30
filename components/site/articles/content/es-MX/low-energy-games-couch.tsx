import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../low-energy-games-couch";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Juegos con poca energía para jugar acostado en el sillón",
  description:
    "Juegos que puedes jugar boca arriba al final de un día largo, ordenados por edad, desde el “¿dónde está?” para bebés hasta juegos de memoria para niños de preescolar.",
  body: (
    <>
      <p>
        Llegas a casa, te sientas y el sillón te atrapa. Tu peque todavía te quiere a ti. La buena noticia es que
        muchos juegos funcionan contigo acostado. Tu peque se mueve, y tú pones la voz, cuentas o roncas.
      </p>
      <p>
        Trabajo todo el día, y cuando llego a casa lo más fácil es acostarme y agarrar el celular. Estos son los juegos
        que funcionan desde ese mismo lugar, con el celular en otro lado.
      </p>

      <h2>Qué hace bueno a un juego de sillón</h2>
      <p>Un juego que puedes jugar acostado tiene tres cosas a su favor:</p>
      <ul>
        <li>Solo se mueve una parte chiquita de ti: una mano, un dedo o tu voz.</li>
        <li>Tu peque es quien trepa, quien trae las cosas y quien se menea.</li>
        <li>Hay una regla o una pausa, así que el juego le sostiene la atención sin que tú te levantes.</li>
      </ul>
      <p>
        No son juegos de segunda. La guía de actividades de Harvard para bebés incluye juegos en las piernas con una
        sorpresa esperada, juegos de esconder y juegos de copiar, y para niños pequeños incluye baile de congelados y
        canciones de parar y seguir <Cite id="cdc-guide" />. Casi todos funcionan desde un cojín.
      </p>

      <h2>Bebés: tu pecho es el escenario</h2>
      <p>
        Con un bebé, estar acostado muchas veces es la mejor posición de todos modos. Está sobre tu pecho, su cara
        queda cerca de la tuya y tienes las dos manos libres.
      </p>
      <p>
        Prueba <GameLink id="hands-peekaboo" />. Recuéstate con tu bebé sobre tu pecho y tápate la cara con las dos
        manos. Espera contando lento hasta tres, luego di “¡Aquí está!” y abre bien las manos. Alarga la cuenta un
        poquito cada vez. Para tu bebé, el ritmo es parte del juego: cuando unos investigadores alteraron el ritmo y
        la estructura del “¿dónde está? ¡aquí está!” con bebés de 2 a 6 meses, los bebés reaccionaron{" "}
        <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> usa la misma pausa. Recita “Este dedito compró un huevito” en los dedos
        de su pie, un dedito por verso, despacio. En el último dedito, para y sostén su pie quieto mientras cuentas
        lento hasta tres. Luego sube con los dedos hasta su pancita con “¡y este pícaro gordo se lo comió!” y empieza
        con el otro pie.
      </p>

      <h2>Niños pequeños: quédate quieto y que ellos hagan el trabajo</h2>
      <p>
        Los peques quieren acción. Se la puedes dar sin dejar de estar acostado, siempre que el juego tenga una regla.
      </p>
      <p>
        En <GameLink id="still-stone-mouse" />, para peques de 2 años en adelante, tu peque se queda quieto como
        piedra mientras tu mano se vuelve un ratón que se acerca despacito. Cualquier meneo o risita manda al ratón
        al inicio. Cuando llega, se acurruca a dormir en su panza, y luego cambian.
      </p>
      <p>
        En <GameLink id="tummy-drum-soft-loud" />, tu panza es el tambor. Di “ratón” para palmaditas suaves y
        chiquitas, y “elefante” para golpes grandes y lentos, cambiando sin avisar. Di “alto” y sus manos vuelan
        arriba.
      </p>
      <p>
        En <GameLink id="touch-the-bear" />, eres un oso dormido en el sillón, con los ojos cerrados. Cada grito hace
        que el oso ronque más fuerte, y solo una mano en tu pata lo despierta con un gruñido feliz.
      </p>
      <p>
        Los tres le piden a tu peque frenar, ir suave o esperar. Son el mismo tipo de tareas que los investigadores
        les pusieron a niños de 22 a 45 meses: esperar un premio, caminar despacio sobre una línea, susurrar, y parar
        y arrancar con una señal <Cite id="kochanska-2000" />.
      </p>

      <h2>Niños de preescolar: dales una misión</h2>
      <p>
        Un niño de preescolar puede hacerte mandados mientras tú te quedas en tu lugar. En{" "}
        <GameLink id="sofa-shopping" />, pides tres cosas de la casa, como una cuchara, un calcetín y un libro azul. Tu
        peque repite la lista y luego trae las tres en un solo viaje. Revisa qué trajo y en qué orden, y luego haz la
        siguiente lista con una cosa más.
      </p>
      <p>
        Ese es un juego de memoria de trabajo: guardar una lista en la mente mientras actúas. Las pruebas de
        habilidades como esta para niños de 18 meses a unos cinco años y medio detectan diferencias claras de una edad
        a la siguiente <Cite id="garon-2014" />, así que empieza con una lista que tu peque pueda manejar y de ahí
        crécela.
      </p>
      <p>
        <GameLink id="human-mountain" /> te pide todavía menos. Acuéstate boca arriba en el tapete como una montaña
        dormida. Tu peque te escala mientras tú narras la expedición en susurros, y en la cima la montaña retumba.
      </p>
      <p>
        Para un peque de tres años y medio en adelante, <GameLink id="day-says-night" /> funciona en un cuarto con
        poca luz. Cuando dices “día”, tu peque contesta “noche”, y al revés. Empiecen despacio y luego aceleren hasta
        que alguno se equivoque. Se parece a una tarea de un estudio en el que niños desde los tres años y medio
        decían “noche” ante un dibujo del sol y “día” ante un dibujo de la luna <Cite id="gerstadt-1994" />.
      </p>

      <h2>Cómo hacer que dure diez minutos, no dos</h2>
      <ul>
        <li>
          <strong>Primero deja el celular fuera de tu alcance.</strong> Si está en tu pecho, el juego se acaba en
          cuanto vibre.
        </li>
        <li>
          <strong>Cambien de papel.</strong> Casi todos estos juegos terminan con “ahora tú eres la piedra” o “ahora tú
          dices los animales”. El cambio muchas veces te da una segunda ronda.
        </li>
        <li>
          <strong>Espera su turno.</strong> La hoja de Harvard sobre servir y devolver dice que se turnen y esperes, y
          que nombres lo que tu peque ve o siente <Cite id="serve-return" />. Estando acostado, esperar es fácil.
        </li>
        <li>
          <strong>Para mientras siga siendo divertido.</strong> Una buena ronda vale más que una larga que termina en
          lágrimas.
        </li>
      </ul>
      <p>
        Hay más en los <Link href="/games/energy/low">juegos con poca energía</Link>, y todos los{" "}
        <Link href="/games/tag/lying-down">juegos para jugar acostados</Link> funcionan desde el sillón.
      </p>
    </>
  ),
};
