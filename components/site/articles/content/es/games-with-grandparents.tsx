import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-grandparents";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Juegos fáciles para abuelos y nietos",
  description:
    "Juegos de poca energía que un abuelo o una abuela puede jugar desde una silla o con un bebé en el regazo, sin comprar nada. Para bebés, niños pequeños y de 3 a 5 años.",
  body: (
    <>
      <p>
        Esta página tiene dos lectores. Si eres la madre o el padre, es algo para mandar a tus propios padres antes de la
        próxima visita. Si eres el abuelo o la abuela, es una lista corta de juegos para jugar sentados, sin comprar nada
        y sin nada que preparar.
      </p>
      <p>Cada juego dura de 5 a 10 minutos. Casi todos solo necesitan un regazo, una silla y tu voz.</p>

      <h2>Para la madre o el padre: qué pasarles</h2>
      <p>
        Elige dos juegos que encajen con la edad de tu peque y manda los enlaces con antelación. Cada juego tiene como
        mucho tres pasos cortos, así que se lee bien en el móvil. Dos son suficientes para una visita.
      </p>
      <p>
        Cuéntales lo que más le gusta a tu peque ahora mismo, como una canción, un animal o una broma. Todos los juegos de
        abajo pueden incluirlo.
      </p>

      <h2>Para los abuelos: tres hábitos</h2>
      <p>
        El Center on the Developing Child de Harvard llama al ida y vuelta del juego serve and return, como un saque y una
        devolución. Fíjate en lo que tiene la atención del niño y compártelo. Respóndele. Pon nombre a lo que ve o siente.
        Luego turnaos, y espera <Cite id="serve-return" />. Ninguno de esos pasos necesita piernas rápidas ni un juguete.
        Si el suelo te castiga las rodillas o la espalda, todos los juegos de abajo funcionan desde una silla o el sofá.
      </p>
      <ul>
        <li>
          <strong>Espera más de lo que te parece natural.</strong> Dale a un niño pequeño unos segundos para responder.
        </li>
        <li>
          <strong>Deja que mande.</strong> Si cambia el juego, juega a su versión.
        </li>
        <li>
          <strong>Para mientras todavía sea divertido.</strong> Repetir el mismo juego en la próxima visita es algo
          bueno.
        </li>
      </ul>

      <h2>Con un bebé en el regazo</h2>
      <p>
        La Academia Americana de Pediatría describe cómo el juego de un bebé crece desde las sonrisas sociales hasta el
        ida y vuelta, el cucú-tras y el “palmas, palmitas” <Cite id="aap-play" />. Los dos juegos de abajo caben en un
        regazo.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> funciona desde los 6 meses. Pregunta “¿Dónde está tu nariz?” y espera una
        respiración lenta mirando la carita del bebé. Tócale la nariz con suavidad y di “nariz”, y haz lo mismo con las
        orejas, los pies y la barriga. Tras unas cuantas rondas, pregunta “¿Dónde está mi nariz?” y lleva su mano a la
        tuya. En un ensayo, enseñar a los padres a responder así a bebés de 6 a 10 meses mejoró la atención de los bebés y
        su capacidad de resolver problemas por sí solos <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> funciona desde los 2 meses, con unos pies descalzos en tu regazo. Recita
        “este compró un huevito”, un dedo del pie por verso, despacio. Al llegar al último dedo, para y sujétale el pie
        quieto mientras cuentas despacio hasta tres. Luego sube los dedos hasta su barriga con un “¡y se lo comió!” y
        empieza con el otro pie.
      </p>

      <h2>Con un niño pequeño</h2>
      <p>
        <GameLink id="you-say-three" /> es un caballito en las rodillas con un hueco. Haz botar a tu nieto en la rodilla y
        cuenta “uno, dos”, y para en seco con las manos en el aire. Espera, con las cejas arriba, a que diga “tres”, y dale
        el bote más grande de todos. Bebés de 9 a 18 meses que jugaban con un adulto a juegos por turnos avisaban cuando el
        adulto se saltaba un turno <Cite id="ross-lollis-1987" />. Aquí te lo saltas a propósito.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> necesita a un peque sobre tus rodillas, nariz con nariz. Pon una cara
        exagerada, dile su nombre, como “sorpresa”, y mantenla hasta que la copie. Prueba la alegría, el sueño, el enfado
        y la cara de payaso. Luego cambiad los papeles: pone una cara tu nieto, tú la copias y adivináis juntos qué emoción
        es.
      </p>

      <h2>Con un niño de 3 a 5 años</h2>
      <p>
        <GameLink id="grandma-footsteps" /> se llama en inglés Grandma’s Footsteps, “los pasos de la abuela”: ni hecho a
        propósito. Siéntate en una silla de espaldas a tu nieto, que empieza en la pared del fondo. Se acerca a
        escondidas, y cada vez que te giras tiene que estar congelado. Si le pillas moviéndose, vuelve a la pared, y si te
        toca el hombro, gana. Niños de 3 a 5 años que jugaron en corro a juegos como las estatuas con las reglas cambiadas
        mejoraron su autorregulación <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> solo necesita una voz cansada. Empieza cada cuento con “Había una vez un
        dragoncito” y añadid por turnos exactamente tres palabras. Cuenta las palabras con los dedos, para que nadie cuele
        una cuarta. Niños de 3 a 5 años que pasaron cinco semanas en juego simbólico fantástico mejoraron su memoria de
        trabajo y su autocontrol <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" /> es el veo, veo con una vuelta de tuerca. Di “veo, veo una cosita roja”, y tu nieto
        la encuentra desde donde estáis sentados. Después de tres colores, cambia la pista a formas, y luego a para qué
        sirven las cosas. A niños de 3 a 5 años se les ha puesto a prueba con el mismo tipo de cambio: clasificar por
        color y luego por forma <Cite id="zelazo-2006" />.
      </p>
      <p>
        Tienes más juegos para jugar desde una silla en los <Link href="/games/tag/sitting">juegos sentados</Link>, los{" "}
        <Link href="/games/tag/on-your-lap">juegos en el regazo</Link> y los{" "}
        <Link href="/games/energy/low">juegos de poca energía</Link>.
      </p>
    </>
  ),
};
