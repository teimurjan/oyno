import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../winter-evening-games";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Juegos para las tardes oscuras de invierno",
  description:
    "Juegos que aprovechan la oscuridad: una lámpara, la linterna del móvil y un cuarto en silencio. Para bebés, niños pequeños y de 3 a 5 años, y para jugar con dos edades a la vez.",
  body: (
    <>
      <p>
        Cuando ya es de noche antes de la cena, toda la tarde pasa dentro de casa. Trabajo todo el día, llego a casa y voy
        a por el móvil. Los juegos de abajo le dan al móvil otro trabajo: hacer de linterna.
      </p>
      <p>
        Aprovechan la propia oscuridad. Una lámpara que se apaga y se enciende, un punto de luz en la pared, un cuarto en
        silencio para escuchar. Están ordenados por edad, con una sección al final para dos peques de edades distintas.
      </p>

      <h2>Para un bebé: la lámpara y el punto de luz</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> funciona desde los 2 meses. Siéntate junto a una lámpara a tu alcance con tu
        bebé en el regazo. Di “apagada” despacio y apágala, espera a que la busque, luego di “encendida” y vuelve a
        encenderla. Alarga un poco la pausa a oscuras cada vez, y mantén la voz suave.
      </p>
      <p>
        Es un cucú-tras con una lámpara. Cuando los investigadores rompieron el ritmo del cucú-tras con bebés de 2 a 6
        meses, los bebés reaccionaron <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> funciona desde los 5 meses, en un dormitorio con poca luz y con tu bebé en el
        regazo. Enfoca la pared con la linterna del móvil y espera a que tu bebé encuentre el punto. Deslízalo despacio por
        la pared, luego apágalo y pregunta “¿dónde se ha ido?”. Enciéndelo en otro sitio y deja que lo encuentre antes de
        volver a moverlo. Bebés de cinco meses y medio a seis meses y medio encontraban un juguete tras una breve espera{" "}
        <Cite id="reznick-2004" />.
      </p>

      <h2>Para un niño pequeño: una estrella en el techo</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> funciona desde 1 año. Tumbaos uno al lado del otro en un dormitorio a oscuras,
        apunta la linterna al techo y desliza el punto despacio. Tu peque sigue la estrella con los ojos, y cuando se para,
        la señala. Apágala, pregunta “¿dónde estaba?” y deja que señale antes de encenderla para comprobarlo.
      </p>
      <p>
        Harvard llama a este tipo de juego ida y vuelta (serve and return): comparte el foco de tu peque, pon nombre a lo
        que ve, turnaos y espera <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> es a partir de los 2 años. Dad juntos las buenas noches a tres cosas del
        cuarto, como la lámpara, la silla y el osito, señalando cada una. Apaga la luz y pregunta “¿dónde está la
        lámpara?”, para que tu peque la señale a oscuras. Enciende la luz para comprobarlo, y luego pregunta por las otras
        dos. En un estudio, niños de dos años recordaban qué botes ya habían vaciado <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>A partir de 2 años: estatuas a oscuras</h2>
      <p>
        <GameLink id="spot-chase" /> es el juego para cuando sobra energía. Baja la luz, enfoca el suelo con la linterna y
        deja que tu peque pisotee el punto de luz. Mueve el punto mientras lo persigue. Cuando apagues la linterna, nadie se
        mueve hasta que vuelva. Luego pásale la linterna y persigue tú el punto.
      </p>
      <p>
        En un estudio de largo recorrido, a niños de 22 a 45 meses se les pidió parar y arrancar a una señal, además de
        esperar y susurrar <Cite id="kochanska-2000" />. Aquí la señal es la oscuridad.
      </p>

      <h2>Para un niño de 3 a 5 años: caminos de luz y cambios</h2>
      <p>
        <GameLink id="torch-trail" /> se juega tumbados. Baja la luz e ilumina con la linterna tres cosas, una detrás de
        otra. Apágala, y tu peque dice las tres cosas en el mismo orden. Añade una cuarta, y luego pásale la linterna para
        que te ponga a prueba.
      </p>
      <p>
        <GameLink id="sun-moon-switch" /> necesita que estés de pie junto al interruptor. Con la luz encendida, tu peque
        dice “noche” y se hace un ovillo. Con la luz apagada, dice “día” y se estira despierto. Pulsa el interruptor en
        momentos inesperados, primero despacio y luego rápido. Luego cambiad los papeles, y equivócate a propósito. Decir
        día por noche es una de las tareas que los investigadores han dado a niños de 2 a 6 años{" "}
        <Cite id="carlson-2005" />.
      </p>
      <p>
        Para el final más tranquilo de la tarde, <GameLink id="five-sounds" /> no necesita ninguna luz. Tumbaos juntos sin
        moveros, con los ojos cerrados. Cada vez que uno oiga un sonido, susurra qué era y levanta un dedo. Al llegar a
        cinco, parad y decidid juntos cuál fue el sonido más bajito.
      </p>

      <h2>Dos peques, una linterna</h2>
      <p>
        Caza la luz acaba con tu peque sujetando la linterna. Un hermano mayor puede encargarse de ella todo el juego
        mientras un bebé o un niño pequeño busca el punto, como en La mancha de luz o La estrella del techo. Tú te quedas
        en el suelo entre los dos y pones los nombres.
      </p>
      <p>
        Mantén el haz en paredes, techos y suelos, lejos de las caras. Usa el móvil solo como linterna, y déjalo boca abajo
        cuando acabe el juego.
      </p>
      <p>
        Hay más en los <Link href="/games/tag/lights">juegos con luces</Link>, los{" "}
        <Link href="/games/tag/quiet">juegos tranquilos</Link> y los{" "}
        <Link href="/games/tag/bedtime">juegos antes de dormir</Link>.
      </p>
    </>
  ),
};
