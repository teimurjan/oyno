import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../tantrums-and-self-control";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "I capricci del mio bambino sono una questione di autocontrollo?",
  description:
    "Nei bambini piccoli l’autocontrollo sta ancora crescendo. Ecco cosa hanno chiesto gli studi ai bambini a ogni età, e giochi per i momenti tranquilli con cui il tuo bambino può allenarsi.",
  body: (
    <>
      <p>
        Il tuo bambino voleva la tazza blu. Gli hai dato quella verde. Ora è per terra. Probabilmente ti sei chiesto se è
        una fase, il suo carattere o qualcosa che hai fatto tu.
      </p>
      <p>
        Non posso dirti perché il tuo bambino va in crisi. Nessuno può farlo da un articolo di blog. Quello che posso fare
        è mostrarti cosa hanno trovato i ricercatori sull’autocontrollo a questa età, perché potrebbe cambiare quello che
        ti aspetti da un bambino di due anni. E sarò chiaro su cosa la ricerca non dice.
      </p>

      <h2>L’autocontrollo è un’abilità che sta ancora crescendo</h2>
      <p>
        Qui autocontrollo vuol dire fermare un primo impulso: aspettare, andare piano, tenere bassa la voce quando
        vorresti urlare. I ricercatori lo misurano con piccoli compiti, e i compiti cambiano con l’età.
      </p>
      <p>
        In uno studio durato anni, a bambini da 22 a 45 mesi veniva chiesto di aspettare un dolcetto, di camminare piano
        su una linea, di sussurrare, di fermarsi e ripartire a un segnale e di fare a turno su una torre{" "}
        <Cite id="kochanska-2000" />. Un altro studio ha dato a bambini da 2 a 6 anni una serie di compiti graduati per
        età, dall’aspettare uno spuntino o un regalo a Simon dice, al sussurro e a un gioco di giorno e notte{" "}
        <Cite id="carlson-2005" />. Un terzo ha costruito una serie di compiti per bambini dai 18 mesi ai cinque anni e
        mezzo circa che coglieva differenze chiare da un’età all’altra <Cite id="garon-2014" />.
      </p>
      <p>
        In parole semplici, i ricercatori usano compiti diversi per età diverse, e i risultati cambiano da un’età
        all’altra. Il tuo bambino è all’inizio di quel percorso.
      </p>

      <h2>Cosa la ricerca non dice</h2>
      <p>
        Nessuno degli studi di questo articolo ha studiato i capricci. Nessuno ha verificato se un gioco renda i capricci
        più brevi o più rari. Quindi questo articolo non te lo prometterà.
      </p>
      <p>
        Quello che uno studio randomizzato ha trovato è più limitato. Bambini in età prescolare da 3 a 5 anni che
        facevano giochi in cerchio come Red Light, Purple Light (luce rossa, luce viola) e statuine con le regole
        scambiate hanno migliorato l’autoregolazione <Cite id="tominey-mcclelland-2011" />. Erano bambini in età
        prescolare, che giocavano in gruppo, misurati sull’autoregolazione. È un motivo per fare questi giochi. Non è una
        promessa sulla prossima crisi.
      </p>

      <h2>Allenarsi nei momenti di calma, non nella tempesta</h2>
      <p>
        Un gioco è allenamento, ed è più facile giocare quando tutti sono tranquilli. Nel mezzo di una crisi non è il
        momento delle statuine. Una serata tranquilla, il buon umore dopo cena, dieci minuti prima del bagnetto: questi
        sono i momenti giusti.
      </p>
      <p>
        Tutti i giochi qui sotto sono per bambini dai 2 anni in su, e ognuno chiede un po’ di attesa o di stop, lo stesso
        tipo di cose degli studi qui sopra.
      </p>

      <h2>Giochi per una serata tranquilla</h2>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: sedetevi uno di fronte all’altro con la palla in mano al tuo bambino. Di’ piano
          “aspetta, aspetta”, poi “via”, e lui te la fa rotolare. Allunga un po’ l’attesa ogni volta, poi lascia che le
          parole le dica lui a te.
        </li>
        <li>
          <GameLink id="spoon-bell-snack" />: metti il suo boccone preferito sotto una tazza capovolta sul vassoio del
          seggiolone. Di’ “aspetta il campanello”, fai una pausa, poi batti il cucchiaio sul tavolo due volte. Al suono,
          lui solleva la tazza e mangia.
        </li>
        <li>
          <GameLink id="scarf-up-scarf-down" />: tieni una sciarpa in alto e il tuo bambino si dimena e balla. Lasciala
          cadere in grembo e lui si blocca finché non torna su.
        </li>
        <li>
          <GameLink id="whisper-feet" />: girate insieme per la stanza. Quando sussurri, i suoi piedi vanno in punta, e
          quando parli con un vocione, pesta forte.
        </li>
        <li>
          <GameLink id="open-shut-them" />: canta “apri, chiudi” con le mani e fai salire piano le dita fino al mento,
          fermandoti proprio lì su “ma in bocca non entrare”.
        </li>
        <li>
          <GameLink id="finger-candle-blow" />: alza un dito come una candelina. Un soffio veloce la fa tremolare, e solo
          un soffio lungo e lento la fa piegare giù.
        </li>
      </ul>
      <p>
        Tieni ogni gioco breve, lascia che il tuo bambino vinca quasi tutti i giri e smetti finché è ancora divertente.
        Ne trovi altri nei <Link href="/games/skill/self-control">giochi di autocontrollo</Link> e nei{" "}
        <Link href="/games/type/waiting">giochi di attesa</Link>.
      </p>

      <h2>Parole per le emozioni forti</h2>
      <p>
        Anche il linguaggio potrebbe contare. In uno studio, il vocabolario e il linguaggio dei bambini tra i 14 e i 36
        mesi predicevano la crescita della loro autoregolazione <Cite id="vallotton-ayoub-2011" />. È un collegamento,
        non la prova che parlare causi qualcosa. La guida alle attività di Harvard per i 18-36 mesi comprende tra i suoi
        consigli il parlare delle emozioni <Cite id="cdc-guide" />.
      </p>
      <p>
        In un momento di calma, di’ quello che hai visto: “Eri proprio arrabbiato per la tazza.”
      </p>

      <h2>Quando parlarne con qualcuno</h2>
      <p>
        Se ti preoccupa quanto spesso il tuo bambino fa i capricci, quanto durano, o qualsiasi altra cosa sul suo
        comportamento o sul suo sviluppo, parlane con il tuo pediatra. Conosce il tuo bambino, ed è proprio per domande
        come questa che c’è.
      </p>
    </>
  ),
};
