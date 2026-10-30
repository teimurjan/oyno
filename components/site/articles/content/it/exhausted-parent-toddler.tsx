import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../exhausted-parent-toddler";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Cosa fare con un bambino piccolo quando sei esausto",
  description:
    "Troppo stanco per giocare, ma il tuo bambino no? Ecco modi onesti per arrivare a fine serata, e giochi da fare sdraiati con pochissima energia.",
  body: (
    <>
      <p>
        Certe sere non è rimasto niente. Hai lavorato tutto il giorno, la casa è rumorosa e il tuo bambino vuole che tu
        lo rincorra, costruisca e canti. Tu vorresti sdraiarti sul pavimento e non muoverti più.
      </p>
      <p>
        È una situazione normale. Questo articolo non ti dirà di impegnarti di più. Ti darà qualche modo per stare con
        il tuo bambino che ti costa pochissimo.
      </p>

      <h2>Abbassa l’asticella apposta</h2>
      <p>
        Non ti servono un lavoretto, un piano o una stanza in ordine. Quello che un bambino piccolo riceve da te è
        attenzione, e l’attenzione può arrivare anche da un genitore sdraiato.
      </p>
      <p>
        La scheda di Harvard sul “serve and return”, il botta e risposta, lo riassume in pochi piccoli passi: nota su
        cosa si concentra il tuo bambino e condividilo, rispondi al suo “servizio” dandogli sostegno, dai un nome a ciò
        che vede o sente, fate a turno e aspetta <Cite id="serve-return" />. Ognuno di questi si può fare con gli occhi
        mezzi chiusi.
      </p>
      <p>
        Conosco il richiamo del telefono in queste sere. Ho provato le app che bloccano e ho cancellato i social, e
        l’abitudine è rimasta. Quindi questo articolo non ti chiede forza di volontà. Ti dà un gioco da tenere pronto.
      </p>

      <h2>Per un bambino sotto i due anni</h2>
      <p>
        Prova un gioco con una pausa dentro. In <GameLink id="piggy-pause-toes" /> il tuo bambino sta seduto in
        braccio a te a piedi nudi. Recita “Questo dice: ho fame” toccando un ditino per ogni verso, sempre più piano.
        Fermati di colpo prima dell’ultimo e tieni il dito in aria finché il tuo bambino alza gli occhi su di te. Poi
        finisci con un solletico che corre su fino al pancino.
      </p>
      <p>
        I bambini di questa età notano di chi è il turno. Bambini da 9 a 18 mesi, in giochi a turno come dare e
        prendere e il cucù, segnalavano quando l’adulto saltava il proprio turno <Cite id="ross-lollis-1987" />. La tua
        pausa è un turno che possono prendersi.
      </p>
      <p>
        <GameLink id="what-can-you-hear" /> chiede ancora meno. Sdraiatevi immobili insieme, chiudete gli occhi e
        sussurragli “cosa senti?”. Qualsiasi cosa il tuo bambino indichi o dica, ditene il nome insieme: il frigo, una
        macchina fuori. Poi a turno trovate un suono nuovo a testa.
      </p>

      <h2>Dai due anni in su: sdraiati e dai una regola sola</h2>
      <p>
        Questi quattro sono per bambini dai 2 anni in su, e ognuno ha una regola sola. Tutti ti lasciano stare
        sdraiato.
      </p>
      <ul>
        <li>
          <GameLink id="pocket-kiss-hand" />: bacia un palmo del tuo bambino e aiutalo a chiudere tutte e due le mani a
          pugno per tenere dentro il bacio. Cantate un verso di una canzone, poi chiedi “in quale mano c’è il bacio?”
        </li>
        <li>
          <GameLink id="shy-tortoise-feet" />: i tuoi piedi sotto la coperta sono due tartarughe timide che escono solo
          quando il tuo bambino chiude gli occhi. Appena sbircia, si rintanano tutte e due.
        </li>
        <li>
          <GameLink id="finger-candle-blow" />: alza un dito come una candelina. Un soffio veloce la fa tremolare e
          tornare dritta, e solo un soffio lungo e lento la fa piegare giù.
        </li>
        <li>
          <GameLink id="touch-the-bear" />: sei un orso che dorme sul divano. Ogni urlo ti fa russare più forte, e solo
          una mano sulla zampa ti sveglia.
        </li>
      </ul>
      <p>
        I ricercatori che studiavano l’autocontrollo hanno chiesto a bambini da 22 a 45 mesi di aspettare un dolcetto,
        di camminare piano su una linea e di sussurrare <Cite id="kochanska-2000" />. Questi giochi chiedono lo stesso
        tipo di cose, a piccole dosi, e il premio sei tu.
      </p>

      <h2>Quando la nanna è vicina</h2>
      <p>
        Se la serata è quasi finita, scegli un gioco che rallenta. In <GameLink id="sleepy-mirror-slow" /> vi sdraiate
        uno accanto all’altro e fate tutto al rallentatore, così uno sbadiglio dura un respiro intero. Il tuo bambino
        copia ogni mossa lenta, una stiracchiata, una rotolata, una stropicciata d’occhi. Lascia che guidi lui una mossa
        o due, poi finite chiudendo gli occhi più lentamente che mai.
      </p>
      <p>
        Anche parlare conta. La guida di Harvard per i 18-36 mesi elenca la conversazione, i racconti con un “e adesso
        cosa fai?” e il parlare delle emozioni <Cite id="cdc-guide" />. Stare sdraiati al buio e chiedere qual è stata la
        parte più bella della giornata è un ottimo modo per finire.
      </p>

      <h2>Sii gentile con te stesso</h2>
      <ul>
        <li>Cinque minuti di gioco, poi dieci minuti di silenzio uno accanto all’altro, sono una bella serata.</li>
        <li>Se un gioco non funziona, smetti. Domani provane un altro.</li>
        <li>Se puoi, datti il cambio con un altro adulto, anche solo per venti minuti.</li>
      </ul>
      <p>
        Se la stanchezza non passa con il riposo, o ti senti giù quasi tutti i giorni, parlane con il tuo medico. È una
        questione di salute, e merita attenzione.
      </p>
      <p>
        Per altri giochi, guarda i <Link href="/games/energy/low">giochi a batteria bassa</Link> o i{" "}
        <Link href="/games/tag/lying-down">giochi da fare sdraiati</Link>. La pagina dei{" "}
        <Link href="/games/age/toddlers">giochi per bambini da 1 a 3 anni</Link> li divide per l’energia che ti resta.
      </p>
    </>
  ),
};
