import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("es-MX");

export const article: Article = {
  ...english,
  title: "Cómo configurar Tiempo en pantalla del iPhone para las tardes en familia",
  description:
    "Paso a paso: configura Tiempo en pantalla en tu propio iPhone para que la tarde con tu peque siga siendo tuya, más lo que no puede hacer y a qué jugar en su lugar.",
  body: (
    <>
      <p>
        Esta guía es sobre tu celular, no el de tu peque. Si llegas cansado a casa y el celular se come la hora antes
        de dormir, Tiempo en pantalla en tu propio iPhone le puede poner una cerca a esa hora. Es gratis, ya viene en
        tu celular y lo puedes configurar hoy en la noche.
      </p>
      <p>
        Vale la pena hacerlo. En un experimento, las mamás y los papás en un museo de ciencias a quienes se les pidió
        usar mucho el celular se sintieron más distraídos y menos conectados con sus hijos que aquellos a quienes se
        les pidió usarlo poco <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        Los pasos de abajo siguen las páginas de soporte de Apple para iOS 27, la versión más reciente que Apple
        documenta. Si tu iPhone tiene iOS 26 o una versión anterior, los menús tienen otros nombres, y hay una sección
        para ti casi al final.
      </p>

      <h2>Qué cambió en iOS 27</h2>
      <p>
        Las guías más viejas hablan de Tiempo de inactividad y Límites de apps. Para iOS 27, la guía de Apple describe
        dos herramientas en su lugar. Los <strong>horarios de Tiempo en pantalla</strong> fijan en qué momentos del
        día puedes usar tus apps. Los <strong>tiempos permitidos</strong> fijan cuánto tiempo puedes usarlas cada día,
        por categoría, como Entretenimiento, Juegos o Redes sociales. El propio ejemplo de Apple es un horario con
        franjas para el trabajo, la cena y la noche (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Soporte de Apple: configurar horarios y tiempos permitidos
        </a>
        ).
      </p>
      <p>
        Apple aclara que estas funciones necesitan iOS 27 o posterior en todos tus dispositivos Apple. Si tu iPad o tu
        Mac siguen en una versión anterior, actualízalos primero, o puede que los pasos de abajo no coincidan con lo
        que ves.
      </p>

      <h2>Paso 1: activa Tiempo en pantalla y revisa tu semana</h2>
      <p>
        Abre la app Configuración y toca Tiempo en pantalla. Toca la opción para administrar Tiempo en pantalla y
        luego activa la actividad de apps y sitios web (
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Soporte de Apple: configurar Tiempo en pantalla para ti
        </a>
        ).
      </p>
      <p>
        Si ya lo has usado un tiempo, mira antes de cambiar nada. Toca el promedio diario y luego Semana. Baja hasta la
        sección que cuenta cuántas veces tomaste el celular. Anota las dos o tres apps que más usas. Esas son las apps
        a las que les vas a poner la cerca.
      </p>
      <p>
        El número real puede ser más alto de lo que calculas. En un estudio, adultos jóvenes cuyos celulares
        registraban su uso los agarraban unas 85 veces al día y los usaban unas cinco horas, más o menos el doble de lo
        que calculaban <Cite id="andrews-2015" />.
      </p>
      <p>
        Si también usas un iPad o una Mac, Apple te deja compartir esta configuración entre ellos. Entra a administrar
        Tiempo en pantalla y activa Compartir entre dispositivos. Así, el horario que configures abajo se aplica en
        todos, y la tarde no se muda al iPad.
      </p>

      <h2>Paso 2: pon tiempos permitidos a las apps que más jalan</h2>
      <p>
        Los tiempos permitidos funcionan por categoría. Puedes usar las apps de una categoría hasta que lleguen al
        tiempo permitido de esa categoría o a tu total diario, lo que pase primero.
      </p>
      <ol>
        <li>Ve a Configuración, toca Tiempo en pantalla y luego Tiempos permitidos.</li>
        <li>
          Toca la opción para administrar categorías, toca el botón de agregar y escoge una categoría, como Redes
          sociales o Entretenimiento.
        </li>
        <li>
          De vuelta en Tiempos permitidos, toca la categoría y arrastra el control para fijar cuánto tiempo tienes al
          día.
        </li>
        <li>
          Para ver qué apps hay en una categoría, entra a administrar categorías y luego a la categoría. Ahí también
          ves tu uso diario promedio, y puedes tocar una app para ver el suyo.
        </li>
      </ol>
      <p>
        Empieza con las apps del paso 1. Sé honesto sobre cuáles se comen la tarde.
      </p>
      <p>
        Hay un detalle que importa si navegas sin fin en el navegador. Apple dice que si una app declara un sitio web
        asociado, el tiempo permitido aplica a los dos. Así que limitar una app también puede limitar su sitio web.
      </p>

      <h2>Paso 3: dale a la tarde su propia franja de tiempo</h2>
      <p>
        Esta es la parte que protege la hora con tu peque. Creas un horario y, dentro de él, una franja de tiempo que
        cubra su tarde en familia.
      </p>
      <ol>
        <li>Ve a Configuración, toca Tiempo en pantalla, toca el horario de Tiempo en pantalla y actívalo.</li>
        <li>Toca la opción para agregar un horario, toca los días que quieras, como de lunes a viernes, y confirma.</li>
        <li>Toca la franja de tiempo. Toca su nombre y ponle algo sencillo, como “Tarde”.</li>
        <li>Toca la hora de inicio y la de fin y ponlas en las horas en que estás en casa con tu peque.</li>
        <li>
          Debajo de la franja, toca las categorías de tiempo permitido que quieres tener disponibles en ese rato. Deja
          fuera las que configuraste en el paso 2 para las apps que más jalan.
        </li>
      </ol>
      <p>
        Cada franja muestra íconos de las categorías que permite, así que de un vistazo ves qué tipos de apps quedan
        abiertos en la tarde. Si los fines de semana son distintos, agrega un segundo horario para sábado y domingo
        con sus propias horas.
      </p>
      <p>
        En Tiempos permitidos, Apple también tiene un interruptor para que coincidan con el horario de Tiempo en
        pantalla. Actívalo si quieres que tus tiempos permitidos apliquen solo en ciertos momentos de tu horario.
      </p>
      <p>
        Escoge horas que puedas cumplir, como de la cena a la hora de dormir. Eso coincide con lo que la Academia
        Americana de Pediatría recomienda a las familias: que las recámaras, las comidas y los ratos de juego entre
        mamá o papá e hijo sean sin pantallas, para los niños y para los adultos <Cite id="aap-media-2016" />.
      </p>

      <h2>Paso 4: escoge qué sigue permitido</h2>
      <p>
        Algunas apps nunca deberían quedar detrás de la cerca. Tu pareja necesita poder localizarte. La niñera
        necesita poder localizarte. Quizá quieras Mapas, la cámara o una app de salud.
      </p>
      <ol>
        <li>Ve a Configuración, toca Tiempo en pantalla y luego Siempre permitido.</li>
        <li>Agrega a las personas con las que siempre puedes comunicarte y que siempre pueden comunicarse contigo.</li>
        <li>Agrega las apps que se quedan abiertas diga lo que diga el horario.</li>
      </ol>
      <p>
        Apple dice que las apps y los contactos de esta lista siguen disponibles sin importar el horario o el tiempo
        permitido que configures. Sus propios ejemplos son los familiares y la app Salud, para emergencias. Que la
        lista sea corta. Cada app que está ahí es una puerta que se queda abierta.
      </p>

      <h2>Paso 5: ciérralo con un código</h2>
      <p>
        Un código de Tiempo en pantalla significa que tienes que escribir un código antes de poder cambiar la
        configuración de arriba (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Soporte de Apple: crear, cambiar o eliminar un código de Tiempo en pantalla
        </a>
        ).
      </p>
      <ol>
        <li>
          Ve a Configuración, toca Tiempo en pantalla, entra a administrar Tiempo en pantalla y toca la opción para
          bloquear la configuración de Tiempo en pantalla.
        </li>
        <li>Escribe un código de cuatro dígitos y escríbelo otra vez para confirmarlo.</li>
      </ol>
      <p>
        Ahora la parte honesta. Este código lo pones tú, así que lo sabes. A las 8 de la noche, con cansancio, con el
        sillón y el celular ahí mismo, un código que conoces es un tope, no una pared.
      </p>
      <p>
        Por eso hay mamás y papás que le piden a su pareja que escriba el código, para no saberlo. Ayuda. Pero Apple
        también ofrece la recuperación del código de Tiempo en pantalla, que te deja restablecerlo con tu Cuenta de
        Apple si lo olvidas. Si la activas, el código de tu pareja se vuelve un paso más para ti, no un candado. Decide
        qué quieres.
      </p>

      <h2>En iOS 26 o anterior: Tiempo de inactividad y Límites de apps</h2>
      <p>
        Si tu iPhone todavía no pasó a iOS 27, las mismas ideas tienen nombres más viejos (
        <a href="https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Soporte de Apple: configurar horarios con Tiempo en pantalla, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Tiempo de inactividad</strong> es la franja de la tarde. En Configuración, toca Tiempo en pantalla,
          luego Tiempo de inactividad y luego Programado. Escoge todos los días o días personalizados, y fija la hora
          de inicio y la de fin. Apple te manda un recordatorio cinco minutos antes de que empiece.
        </li>
        <li>
          <strong>Límites de apps</strong> son los tiempos permitidos. Toca Límites de apps, luego Agregar límite,
          escoge categorías o apps sueltas, toca Siguiente y fija el tiempo.
        </li>
        <li>
          <strong>Siempre permitido</strong> funciona igual, para contactos y apps.
        </li>
      </ul>
      <p>
        Un detalle: Apple dice que, de forma predeterminada, estos límites se pueden ignorar una vez que llegas a
        ellos. Si tienes un código de Tiempo en pantalla, puedes activar la opción de bloquear en tiempo de
        inactividad, y entonces las apps no se pueden abrir durante el Tiempo de inactividad. Sin ella, solo ves un
        recordatorio y puedes seguir.
      </p>

      <h2>Lo que Tiempo en pantalla no hace</h2>
      <p>
        Tiempo en pantalla es bueno para una sola cosa. Dice que no. No dice qué hacer en su lugar.
      </p>
      <p>
        Esto lo sé por mis propias tardes. Trabajo todo el día, llego a casa y agarro el celular. Probé los
        bloqueadores. Borré las redes sociales. El hábito se quedó. Una app bloqueada deja un hueco en la tarde, y
        Tiempo en pantalla no lo llena.
      </p>
      <p>
        La declaración de la AAP sobre niños pequeños y medios dice lo mismo desde el otro lado. Señala que el uso
        intenso de dispositivos móviles por parte de mamá o papá se relaciona con menos intercambios verbales y no
        verbales entre adultos e hijos. Les pide a los pediatras ayudar a las familias con un Plan Familiar de Uso de
        Medios que tenga pautas para cada hijo y para cada adulto, y con ideas de juego para hacer en lugar de usar
        pantallas <Cite id="aap-media-2016" />. Una regla sobre el celular es medio plan. La otra mitad es qué haces
        con ese tiempo.
      </p>
      <p>
        Así que ten listos los siguientes diez minutos antes de que empiece la franja. No tienen que ser ingeniosos.
        Tienen que funcionar cuando ya no te queda nada. Oyno usa Tiempo en pantalla para pausar las apps que tú
        escojas durante el Tiempo en familia y te da un juego corto para jugar en su lugar.
      </p>

      <h2>Tu primera tarde</h2>
      <p>
        Aquí va un plan para hoy, a la medida de una mamá o un papá que preferiría acostarse.
      </p>
      <ol>
        <li>Pon la franja del paso 3 para que empiece en diez minutos.</li>
        <li>Deja el celular en un estante fuera de tu alcance, boca abajo, con el sonido prendido por si alguien llama.</li>
        <li>Escoge un juego de la lista de abajo y juégalo hasta que tu peque deje de sonreír, no más.</li>
      </ol>
      <p>
        Para un bebé, prueba <GameLink id="hands-peekaboo" />. Te recuestas con tu bebé sobre tu pecho, te tapas la
        cara con las dos manos y esperas contando lento hasta tres antes del “¡Aquí está!”.
      </p>
      <p>
        Para un peque de 2 años en adelante, prueba <GameLink id="still-stone-mouse">Quieto como piedra</GameLink>. Tu
        peque se queda quieto como piedra mientras tu mano se acerca como un ratón, y cualquier meneo manda al ratón
        de vuelta al inicio. O <GameLink id="touch-the-bear" />: eres un oso dormido en el sillón, cada grito te hace
        roncar más fuerte, y solo una mano en tu pata te despierta.
      </p>
      <p>
        Para un niño de preescolar, prueba <GameLink id="belly-boat" />. Los dos se acuestan boca arriba con un
        juguetito encima de cada panza y respiran despacio para que los barcos suban y bajen.{" "}
        <GameLink id="sleepy-lion" /> y <GameLink id="day-says-night" /> también funcionan desde el sillón.
      </p>
      <p>
        Hay más en los <Link href="/games/energy/low">juegos con poca energía para papás cansados</Link>, y puedes
        filtrar por edad en los <Link href="/games/age/toddlers">juegos para niños pequeños</Link> o en los{" "}
        <Link href="/games/age/preschoolers">juegos para niños de 3 a 5 años</Link>. Si todavía estás decidiendo
        entre Tiempo en pantalla y una app encima, lee{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Tiempo en pantalla, bloqueadores de apps y Oyno</Link>.
      </p>
      <p>
        Dale una semana a la configuración antes de cambiarla. Si la franja empieza demasiado temprano, muévela. Si una
        app se sigue colando por Siempre permitido, sácala de la lista.
      </p>
    </>
  ),
};
