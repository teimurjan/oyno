import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("es");

export const article: Article = {
  ...english,
  title: "Cómo configurar Tiempo de uso del iPhone para las tardes en familia",
  description:
    "Paso a paso: configura Tiempo de uso en tu propio iPhone para que la tarde con tu peque siga siendo tuya, qué no puede hacer y a qué jugar en su lugar.",
  body: (
    <>
      <p>
        Esta guía va de tu móvil, no del de tu peque. Si llegas a casa cansado y el móvil se come la hora antes de
        dormir, “Tiempo de uso” en tu propio iPhone puede poner una valla alrededor de esa hora. Es gratis, ya está en tu
        móvil y puedes configurarlo esta misma tarde.
      </p>
      <p>
        Merece la pena. En un experimento, los padres que, en un museo de ciencia, recibieron la indicación de usar mucho
        el móvil se sintieron más distraídos y menos conectados con sus hijos que los que recibieron la indicación de
        usarlo poco <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        Los pasos de abajo siguen las páginas de soporte de Apple para iOS 27, la versión más reciente que documenta
        Apple. Si tu iPhone tiene iOS 26 o anterior, los menús tienen otros nombres, y hay una sección para ti cerca del
        final.
      </p>

      <h2>Qué ha cambiado en iOS 27</h2>
      <p>
        Las guías antiguas hablan de “Tiempo de inactividad” y “Límites de uso de apps”. Para iOS 27, la guía de Apple
        describe otras dos herramientas. Los <strong>horarios de tiempo de uso</strong> fijan en qué momentos del día
        puedes usar tus apps. Los <strong>límites de tiempo</strong> fijan cuánto puedes usarlas cada día, por categoría,
        como “Entretenimiento”, “Juegos” o “Redes sociales”. El ejemplo de la propia Apple es un horario con franjas
        horarias para el trabajo, la cena y la noche (
        <a href="https://support.apple.com/es-es/guide/iphone/iphb0c7313c9/ios">
          Soporte de Apple: Establecer horarios y límites de tiempo de uso
        </a>
        ).
      </p>
      <p>
        Apple advierte que estas funciones necesitan iOS 27 o posterior en todos tus dispositivos Apple. Si tu iPad o tu
        Mac siguen en una versión anterior, actualízalos primero, o puede que los pasos de abajo no coincidan con lo que
        ves.
      </p>

      <h2>Paso 1: Activa “Tiempo de uso” y mira tu semana</h2>
      <p>
        Abre la app Ajustes y toca “Tiempo de uso”. Toca “Gestionar tiempo de uso” y luego “Activar actividad de apps y
        sitios web” (
        <a href="https://support.apple.com/es-es/guide/iphone/iphbfa595995/ios">
          Soporte de Apple: Configurar el tiempo de uso para ti
        </a>
        ).
      </p>
      <p>
        Si ya lo usas desde hace tiempo, mira antes de cambiar nada. Toca “Promedio diario” y luego Semana. Desplázate
        hacia abajo hasta “Consultas del dispositivo” para ver cuántas veces has cogido el móvil. Apunta las dos o tres
        apps que más usas. Esas son las apps que vas a vallar.
      </p>
      <p>
        El número real puede ser mayor de lo que crees. En un estudio, jóvenes adultos cuyos móviles registraban su uso
        lo cogían unas 85 veces al día y lo usaban unas cinco horas, aproximadamente el doble de lo que calculaban{" "}
        <Cite id="andrews-2015" />.
      </p>
      <p>
        Si también usas un iPad o un Mac, Apple te deja compartir estos ajustes entre ellos. Toca “Gestionar tiempo de
        uso” y activa “Compartir entre dispositivos”. Con esto activado, el horario que configures abajo se aplica en
        todos, así que la tarde no se muda al iPad.
      </p>

      <h2>Paso 2: Pon límites a las apps que más tiran</h2>
      <p>
        Los límites de tiempo funcionan por categorías. Puedes usar las apps de una categoría hasta que se agote el
        límite de esa categoría o tu límite diario total, lo que llegue antes.
      </p>
      <ol>
        <li>Abre Ajustes, toca “Tiempo de uso” y luego “Límites de tiempo”.</li>
        <li>Toca “Gestionar categorías”, toca el botón Añadir y elige una categoría, como “Redes sociales” o “Entretenimiento”.</li>
        <li>De vuelta en “Límites de tiempo”, toca la categoría y arrastra el control deslizante para fijar cuánto tiempo tienes al día.</li>
        <li>
          Para ver qué apps hay en una categoría, toca “Gestionar categorías” y luego la categoría. Ahí también ves tu uso
          diario medio, y puedes tocar una app para ver el suyo.
        </li>
      </ol>
      <p>Empieza por las apps del paso 1. Sé honesto sobre cuáles se comen la tarde.</p>
      <p>
        Un detalle importa si haces scroll en el navegador. Apple dice que si una app declara un sitio web asociado, el
        límite de tiempo se aplica a ambos. Así que limitar una app también puede limitar su web.
      </p>

      <h2>Paso 3: Dale a la tarde su propia franja horaria</h2>
      <p>
        Esta es la parte que protege la hora con tu peque. Creas un horario y, dentro de él, una franja horaria que cubra
        vuestra tarde en familia.
      </p>
      <ol>
        <li>Abre Ajustes, toca “Tiempo de uso”, toca “Horario de tiempo de uso” y activa “Horario”.</li>
        <li>Toca “Añadir horario”, toca los días que quieras, como de lunes a viernes, y confirma.</li>
        <li>Toca la franja horaria. Toca su nombre y ponle algo sencillo, como “Tarde”.</li>
        <li>Toca las horas de inicio y fin y ajústalas a las horas en que estás en casa con tu peque.</li>
        <li>
          Debajo de la franja, toca las categorías de límites de tiempo que quieras tener disponibles en ese rato. Deja
          fuera las que configuraste en el paso 2 para las apps que más tiran.
        </li>
      </ol>
      <p>
        Cada franja muestra iconos de las categorías que permite, así que ves de un vistazo qué tipos de apps están
        abiertos por la tarde. Si los fines de semana son distintos, añade un segundo horario para el sábado y el domingo
        con sus propias horas.
      </p>
      <p>
        En “Límites de tiempo”, Apple también tiene un interruptor llamado “Ajustar al horario de tiempo de uso”. Actívalo
        si quieres que tus límites solo se apliquen en determinados momentos de tu horario.
      </p>
      <p>
        Elige horas que puedas cumplir, como de la cena a la hora de dormir. Eso encaja con lo que la Academia Americana
        de Pediatría recomienda a las familias: que los dormitorios, las comidas y los ratos de juego entre padres e hijos
        sean sin pantallas, para los niños y para los padres <Cite id="aap-media-2016" />.
      </p>

      <h2>Paso 4: Elige qué sigue permitido</h2>
      <p>
        Algunas apps nunca deberían quedar valladas. Tu pareja tiene que poder localizarte. La canguro tiene que poder
        localizarte. Puede que quieras Mapas, la cámara o una app de salud.
      </p>
      <ol>
        <li>Abre Ajustes, toca “Tiempo de uso” y luego “Siempre permitidas”.</li>
        <li>Toca “Añadir personas” para añadir los contactos con los que siempre puedes hablar y que siempre pueden localizarte.</li>
        <li>Toca “Añadir apps” para añadir las apps que siguen abiertas diga lo que diga el horario.</li>
      </ol>
      <p>
        Apple dice que las apps y los contactos de esta lista siguen disponibles independientemente de los horarios o los
        límites que configures. Sus propios ejemplos son los miembros de la familia y la app Salud, para emergencias.
        Mantén la lista corta. Cada app que está en ella es una puerta que se queda abierta.
      </p>

      <h2>Paso 5: Protégelo con un código</h2>
      <p>
        Un código de “Tiempo de uso” significa que tienes que escribir un código antes de poder cambiar los ajustes de
        arriba (
        <a href="https://support.apple.com/es-es/guide/iphone/iph272b4c4bd/ios">
          Soporte de Apple: Crear, cambiar o eliminar un código de “Tiempo de uso”
        </a>
        ).
      </p>
      <ol>
        <li>Abre Ajustes, toca “Tiempo de uso”, toca “Código y gestión” y luego “Bloquear ajustes de Tiempo de uso”.</li>
        <li>Escribe un código de cuatro dígitos y vuelve a escribirlo para confirmarlo.</li>
      </ol>
      <p>
        Ahora, la parte honesta. Este código lo pones tú, así que lo sabes. A las 8 de la tarde, cansado, con el sofá y el
        móvil ahí mismo, un código que conoces es un badén, no un muro.
      </p>
      <p>
        Por eso algunos padres le piden a su pareja que escriba el código, para no saberlo. Ayuda. Pero Apple también
        ofrece la recuperación del código de “Tiempo de uso”, que te deja restablecer el código con tu cuenta de Apple si
        lo olvidas. Si la activas, el código de tu pareja se convierte en un paso más para ti, no en un candado. Decide
        qué prefieres.
      </p>

      <h2>En iOS 26 o anterior: “Tiempo de inactividad” y “Límites de uso de apps”</h2>
      <p>
        Si tu iPhone aún no ha pasado a iOS 27, las mismas ideas tienen nombres antiguos (
        <a href="https://support.apple.com/es-es/guide/iphone/iphb0c7313c9/26/ios/26">
          Soporte de Apple: Definir horarios con “Tiempo de uso”, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>“Tiempo de inactividad”</strong> es la franja de la tarde. En Ajustes, toca “Tiempo de uso”, luego
          “Tiempo de inactividad” y luego “Programado”. Elige “Todos los días” o “Personalizar días” y fija las horas de
          inicio y fin. Apple envía un aviso cinco minutos antes de que empiece.
        </li>
        <li>
          <strong>“Límites de uso de apps”</strong> son los límites. Toca “Límites de uso de apps”, luego “Añadir
          límite”, elige categorías o apps sueltas, toca Siguiente y fija el tiempo.
        </li>
        <li>
          <strong>“Siempre permitido”</strong> funciona igual, para contactos y apps.
        </li>
      </ul>
      <p>
        Una pega: Apple dice que, por defecto, estos límites se pueden ignorar una vez que llegas a ellos. Si tienes un
        código de “Tiempo de uso”, puedes activar “Bloquear en tiempo de inactividad”, y entonces las apps no se pueden
        abrir durante el tiempo de inactividad. Si está desactivado, solo ves un aviso y puedes seguir.
      </p>

      <h2>Lo que no hace “Tiempo de uso”</h2>
      <p>“Tiempo de uso” es bueno en una tarea. Dice que no. No dice qué hacer en su lugar.</p>
      <p>
        Esto lo sé por mis propias tardes. Trabajo todo el día, llego a casa y voy a por el móvil. Probé los bloqueadores.
        Borré las redes sociales. El hábito siguió ahí. Una app bloqueada deja un hueco en la tarde, y “Tiempo de uso” no
        lo llena.
      </p>
      <p>
        La declaración de la AAP (Academia Americana de Pediatría) sobre niños pequeños y medios digitales dice lo mismo
        desde el otro lado. Señala que un uso intenso del móvil por parte de los padres se asocia con menos intercambios
        verbales y no verbales entre padres e hijos. Pide a los pediatras que ayuden a las familias con un plan familiar
        de uso de medios que tenga pautas para cada hijo y para cada padre, y con ideas de juego para hacer en lugar de
        pantallas <Cite id="aap-media-2016" />. Una norma sobre el móvil es medio plan. La otra mitad es qué haces con ese
        tiempo.
      </p>
      <p>
        Así que ten preparados los diez minutos siguientes antes de que empiece la franja. No tienen que ser ingeniosos.
        Tienen que funcionar cuando no te queda nada. Oyno usa “Tiempo de uso” para pausar las apps que elijas durante el
        Tiempo en familia y te da un juego corto para jugar en su lugar.
      </p>

      <h2>Tu primera tarde</h2>
      <p>Aquí tienes un plan para esta tarde, pensado para una madre o un padre que preferiría tumbarse.</p>
      <ol>
        <li>Pon la franja del paso 3 para que empiece dentro de diez minutos.</li>
        <li>Deja el móvil en una estantería fuera de tu alcance, boca abajo, con el sonido puesto por si alguien llama.</li>
        <li>Elige un juego de la lista de abajo y juega hasta que tu peque deje de sonreír, no más.</li>
      </ol>
      <p>
        Para un bebé, prueba <GameLink id="hands-peekaboo" />. Te tumbas con tu bebé sobre el pecho, te tapas la cara con
        las dos manos y esperas mientras cuentas despacio hasta tres antes del “¡Cucú!”.
      </p>
      <p>
        Para un peque de 2 años en adelante, prueba <GameLink id="still-stone-mouse" />. Tu peque se queda inmóvil como una
        piedra mientras tu mano se acerca como un ratón, y cualquier meneo manda al ratón de vuelta al principio. O{" "}
        <GameLink id="touch-the-bear" />: eres un oso dormido en el sofá, cada grito te hace roncar más fuerte y solo una
        mano en tu zarpa te despierta.
      </p>
      <p>
        Para un niño de 3 a 5 años, prueba <GameLink id="belly-boat" />. Os tumbáis boca arriba con un juguete pequeño en
        cada barriga y respiráis despacio para que los barcos suban y bajen. <GameLink id="sleepy-lion" /> y{" "}
        <GameLink id="day-says-night" /> también funcionan desde el sofá.
      </p>
      <p>
        Hay más en los <Link href="/games/energy/low">juegos de poca energía para padres cansados</Link>, y puedes
        filtrar por edad en los <Link href="/games/age/toddlers">juegos para niños de 1 a 3 años</Link> o en los{" "}
        <Link href="/games/age/preschoolers">juegos para niños de 3 a 5 años</Link>. Si aún dudas entre “Tiempo de uso” y
        una app encima, lee{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Tiempo de uso, bloqueadores de apps y Oyno</Link>.
      </p>
      <p>
        Dale una semana a la configuración antes de cambiarla. Si la franja empieza demasiado pronto, muévela. Si una app
        se sigue colando por “Siempre permitidas”, quítala de la lista.
      </p>
    </>
  ),
};
