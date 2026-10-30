import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../winter-evening-games";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Juegos para las tardes oscuras de invierno",
  description:
    "Juegos que aprovechan la oscuridad: una lámpara, la linterna del celular y un cuarto tranquilo. Para bebés, peques y niños de preescolar, y una forma de jugar con dos edades a la vez.",
  body: (
    <>
      <p>
        Cuando oscurece antes de la cena, toda la tarde pasa adentro. Trabajo todo el día, llego a casa y agarro el
        celular. Los juegos de abajo le dan al celular otro trabajo: ser linterna.
      </p>
      <p>
        Aprovechan la oscuridad misma. Una lámpara que se apaga y se prende, un puntito de luz en la pared, un cuarto
        tranquilo para escuchar. Están agrupados por edad, con una sección al final para dos peques de edades
        distintas.
      </p>

      <h2>Para un bebé: la lámpara y el puntito</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> funciona desde los 2 meses. Siéntate junto a una lámpara que alcances, con
        tu bebé en tus piernas. Di “se apaga” despacio y apágala, espera a que la busque, luego di “se prende” y
        préndela. Alarga un poco la pausa a oscuras cada vez, y mantén la voz suave.
      </p>
      <p>
        Es un “¿dónde está? ¡aquí está!” con lámpara. Cuando unos investigadores rompieron el ritmo de ese juego con
        bebés de 2 a 6 meses, los bebés reaccionaron <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> funciona desde los 5 meses, en una recámara con poca luz y tu bebé en tus
        piernas. Apunta la linterna del celular a la pared y espera a que tu bebé encuentre el puntito. Deslízalo
        despacio por la pared, luego apágalo y pregunta “¿dónde quedó?”. Préndelo en otro lugar y deja que lo
        encuentre antes de moverlo otra vez. Bebés de cinco meses y medio a seis meses y medio encontraban un juguete
        tras una breve espera <Cite id="reznick-2004" />.
      </p>

      <h2>Para un niño pequeño: una estrella en el techo</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> funciona desde el año. Acuéstense lado a lado en una recámara a oscuras,
        alumbra el techo con la linterna y desliza el puntito despacio. Tu peque sigue la estrella con los ojos, y
        cuando se detiene, la señala. Apaga la linterna, pregunta “¿dónde estaba?”, y deja que señale antes de
        prenderla para comprobar.
      </p>
      <p>
        Harvard le llama a este tipo de juego servir y devolver: comparte el foco de tu peque, nombra lo que ve,
        túrnense y espera <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> es para 2 años en adelante. Denle las buenas noches juntos a tres cosas
        del cuarto, como la lámpara, la silla y el osito, señalando cada una. Apaga la luz y pregunta “¿dónde está la
        lámpara?” para que tu peque la señale a oscuras. Prende la luz para comprobar, y luego pregunta por las otras
        dos. En un estudio, niños de dos años recordaban qué ollitas ya habían vaciado{" "}
        <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>Desde los 2 años: congelados a oscuras</h2>
      <p>
        <GameLink id="spot-chase" /> es para cuando sobra energía. Baja la luz del cuarto, alumbra el piso con la
        linterna y deja que tu peque pise el puntito de luz. Mueve la luz mientras la persigue. Cuando apagues la
        linterna, todos se congelan hasta que vuelva. Luego pásale la linterna y persigue tú la luz.
      </p>
      <p>
        En un estudio de largo plazo, a niños de 22 a 45 meses se les pidió parar y arrancar con una señal, además de
        esperar y susurrar <Cite id="kochanska-2000" />. Aquí la señal es la oscuridad.
      </p>

      <h2>Para un niño de preescolar: caminos y cambios</h2>
      <p>
        <GameLink id="torch-trail" /> se juega acostados. Baja la luz del cuarto y alumbra tres cosas con la linterna,
        una tras otra. Apágala, y tu peque dice las tres cosas en el mismo orden. Agrega una cuarta, y luego pásale la
        linterna para que te ponga a prueba.
      </p>
      <p>
        <GameLink id="sun-moon-switch" /> necesita que estés parado junto al apagador. Con la luz prendida, tu peque
        dice “noche” y se hace bolita. Con la luz apagada, dice “día” y se estira despierto. Mueve el apagador cuando
        menos lo espere, primero despacio y luego rápido. Luego cambien, y equivócate a propósito. Decir día en lugar
        de noche es una de las tareas que los investigadores les han puesto a niños de 2 a 6 años{" "}
        <Cite id="carlson-2005" />.
      </p>
      <p>
        Para el final más tranquilo de la tarde, <GameLink id="five-sounds" /> no necesita nada de luz. Acuéstense
        quietos juntos con los ojos cerrados. Cada vez que alguno oiga un sonido, que susurre qué fue y levante un
        dedo. Paren al llegar a cinco, y decidan juntos cuál fue el sonido más bajito.
      </p>

      <h2>Dos peques, una linterna</h2>
      <p>
        Atrapa la lucecita termina con tu peque sosteniendo la linterna. Un hermano mayor puede tomar ese trabajo todo
        el juego mientras un bebé o un peque busca el puntito, como en El puntito de luz o Estrella en el techo. Tú te
        quedas en el piso entre los dos y pones los nombres.
      </p>
      <p>
        Mantén la luz en paredes, techos y pisos, lejos de las caras. Usa el celular solo como lámpara, y déjalo boca
        abajo cuando se acabe el juego.
      </p>
      <p>
        Hay más en los <Link href="/games/tag/lights">juegos con luces</Link>, los{" "}
        <Link href="/games/tag/quiet">juegos tranquilos</Link> y los{" "}
        <Link href="/games/tag/bedtime">juegos para antes de dormir</Link>.
      </p>
    </>
  ),
};
