import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-grandparents";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Juegos fáciles para que los abuelos jueguen con sus nietos",
  description:
    "Juegos con poca energía que un abuelo o una abuela puede jugar desde una silla o con un bebé en las piernas, sin comprar nada. Para bebés, peques y niños de preescolar.",
  body: (
    <>
      <p>
        Esta página es para dos lectores. Si eres la mamá o el papá, es algo para mandarle a tu propia mamá o a tu
        papá antes de la próxima visita. Si eres el abuelo o la abuela, es una lista corta de juegos que puedes jugar
        sentado, sin comprar nada y sin nada que preparar.
      </p>
      <p>
        Cada juego toma de 5 a 10 minutos. Casi todos solo necesitan unas piernas, una silla y tu voz.
      </p>

      <h2>Para la mamá o el papá: qué compartir</h2>
      <p>
        Escoge dos juegos que vayan con la edad de tu peque y manda los enlaces antes. Cada juego tiene como máximo
        tres pasos cortos, así que se lee bien en el celular. Dos son suficientes para una visita.
      </p>
      <p>
        Diles lo que más le gusta a tu peque en este momento, como una canción, un animal o un chiste. Todos los juegos
        de abajo lo pueden incluir.
      </p>

      <h2>Para los abuelos: tres hábitos</h2>
      <p>
        El Center on the Developing Child de Harvard le llama servir y devolver al ida y vuelta del juego. Fíjate en lo
        que tiene la atención del niño y compártelo. Respóndele. Nombra lo que ve o siente. Luego túrnense, y espera{" "}
        <Cite id="serve-return" />. Ninguno de esos pasos necesita piernas rápidas ni un juguete. Si el piso es duro
        para tus rodillas o tu espalda, todos los juegos de abajo funcionan desde una silla o el sillón.
      </p>
      <ul>
        <li>
          <strong>Espera más de lo que parece natural.</strong> Dale a un niño chiquito unos segundos para contestar.
        </li>
        <li>
          <strong>Deja que dirija.</strong> Si cambia el juego, juega su versión.
        </li>
        <li>
          <strong>Para mientras siga siendo divertido.</strong> Repetir el mismo juego en la próxima visita es algo
          bueno.
        </li>
      </ul>

      <h2>Con un bebé en las piernas</h2>
      <p>
        La Academia Americana de Pediatría describe cómo el juego de un bebé crece desde las sonrisas sociales hacia
        el servir y devolver, el “¿dónde está? ¡aquí está!” y las tortillitas <Cite id="aap-play" />. Los dos juegos
        de abajo caben en tus piernas.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> funciona desde los 6 meses. Pregunta “¿Dónde está tu nariz?” y espera un
        respiro lento mientras le miras la cara al bebé. Tócale la nariz con suavidad y di “nariz”, y luego haz lo
        mismo con orejas, deditos y pancita. Tras unas rondas, pregunta “¿Dónde está mi nariz?” y lleva su mano a la
        tuya. En un ensayo, asesorar a mamás y papás para responder así a bebés de 6 a 10 meses mejoró la atención de
        los bebés y su capacidad de resolver problemas por su cuenta <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> funciona desde los 2 meses, con unos piecitos descalzos en tus piernas.
        Recita “Este dedito compró un huevito”, un dedito por verso, despacio. En el último dedito, para y sostén su
        pie quieto mientras cuentas lento hasta tres. Luego sube con los dedos hasta su pancita con “¡y este pícaro
        gordo se lo comió!” y empieza con el otro pie.
      </p>

      <h2>Con un niño pequeño</h2>
      <p>
        <GameLink id="you-say-three" /> es un brinco en la rodilla con un hueco. Haz brincar a tu nieto en tu rodilla y
        cuenta “uno, dos”, y detente en seco con las manos arriba. Espera, con las cejas arriba, hasta que diga
        “tres”, y luego dale el brinco más grande de todos. Bebés de 9 a 18 meses que jugaban juegos por turnos con un
        adulto hacían señas cuando el adulto se saltaba un turno <Cite id="ross-lollis-1987" />. Aquí te lo saltas a
        propósito.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> necesita a un peque en tus rodillas, nariz con nariz. Haz una cara grande,
        nómbrala, como “sorprendido”, y aguántala hasta que la copie. Prueben feliz, con sueño, enojado y chistoso.
        Luego cambien, para que haga una cara, tú la copies, y los dos adivinen qué sentimiento es.
      </p>

      <h2>Con un niño de preescolar</h2>
      <p>
        <GameLink id="grandma-footsteps" /> en inglés se llama “los pasos de la abuela”, así que le queda perfecto.
        Siéntate en una silla de espaldas a tu nieto, que empieza en la pared del fondo. Se acerca a escondidas, y
        cada vez que voltees tiene que estar congelado. Si lo cachas moviéndose regresa a la pared, y gana con un
        toquecito en tu hombro. Niños de preescolar que jugaron juegos en círculo, como congelados con reglas
        cambiadas, mejoraron su autorregulación <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> solo necesita una voz cansada. Empieza cada cuento con “Había una vez un
        dragoncito” y túrnense para agregar exactamente tres palabras. Cuenten las palabras con los dedos para que a
        nadie se le cuele una cuarta. Niños de 3 a 5 años que pasaron cinco semanas en juego simbólico fantástico
        mejoraron su memoria de trabajo y su autocontrol <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" /> es el Veo, veo con un giro. Di “veo, veo una cosa roja”, y tu nieto la
        encuentra desde donde estás sentado. Después de tres colores, cambia la pista a formas, y luego a para qué
        sirven las cosas. A niños de 3 a 5 años se les ha probado con el mismo tipo de cambio: clasificar por color y
        luego por forma <Cite id="zelazo-2006" />.
      </p>
      <p>
        Hay más juegos para jugar desde una silla en los{" "}
        <Link href="/games/tag/sitting">juegos para jugar sentados</Link>, los{" "}
        <Link href="/games/tag/on-your-lap">juegos en tus piernas</Link> y los{" "}
        <Link href="/games/energy/low">juegos con poca energía</Link>.
      </p>
    </>
  ),
};
