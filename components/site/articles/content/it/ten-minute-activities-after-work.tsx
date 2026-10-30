import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../ten-minute-activities-after-work";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Attività da 10 minuti da fare con tuo figlio dopo il lavoro",
  description:
    "Sei appena entrato e ti restano dieci minuti di energia. Ecco giochi brevi per neonati e bambini da 1 a 5 anni, quasi senza niente da preparare.",
  body: (
    <>
      <p>
        Entri, appoggi la borsa, e il tuo bambino è già attaccato alle tue gambe. Tra poco c’è la cena da preparare, e
        non ti è rimasto molto. Hai una decina di minuti. Bastano per un bel gioco.
      </p>
      <p>
        Anch’io lavoro tutto il giorno, e quando torno a casa la mano va al telefono prima ancora di togliermi il
        cappotto. Quei primi minuti si perdono facilmente. In un esperimento, i genitori in un museo della scienza a cui
        era stato chiesto di usare molto il telefono si sentivano più distratti e meno in sintonia con i figli rispetto a
        quelli a cui era stato chiesto di usarlo poco <Cite id="kushlev-dunn-2019" />. I giochi qui sotto sono un modo
        per passare gli stessi minuti sul pavimento.
      </p>

      <h2>Perché dieci minuti bastano</h2>
      <p>
        Un gioco breve è comunque tempo vero insieme. La scheda di Harvard sul “serve and return”, il botta e risposta,
        descrive lo scambio che conta: nota su cosa si concentra il tuo bambino, condividilo, dagli un nome, fate a turno
        e aspetta <Cite id="serve-return" />. Niente di tutto questo richiede un’ora.
      </p>
      <p>
        Ogni gioco qui dura 10 minuti o meno e ha al massimo tre passi. Scegline uno, giocalo finché il tuo bambino
        perde interesse, e poi comincia a preparare la cena.
      </p>

      <h2>Neonati: un gioco sul pavimento</h2>
      <p>
        Per un bambino che sta seduto ben stabile, prova <GameLink id="ball-back" />. Siediti di fronte a lui con le gambe
        larghe a fare un recinto, e fagli rotolare piano una palla in grembo. Tendi le mani e aspetta in silenzio che te
        la rimandi. Di’ “tocca a me”, falla rotolare di nuovo e lascia che le attese si allunghino.
      </p>
      <p>
        L’attesa è la tua parte del lavoro. In uno studio randomizzato, insegnare ai genitori di bambini da 6 a 10 mesi a
        rispondere al loro bambino ha migliorato l’attenzione dei piccoli e la loro capacità di risolvere problemi da
        soli <Cite id="landry-2006" />.
      </p>
      <p>
        Dai 9 mesi circa, quando i bambini cominciano a seguire un dito che indica, prova{" "}
        <GameLink id="point-and-name" />. Con il tuo bambino in braccio, indica una cosa dall’altra parte della stanza e
        tieni il braccio teso finché i suoi occhi ci arrivano. Di’ come si chiama una volta, piano. Poi segui tu il suo
        sguardo, e di’ il nome di qualsiasi cosa stia fissando. Bambini di un anno mantenevano più a lungo l’attenzione
        su un giocattolo quando il genitore guardava e nominava lo stesso giocattolo <Cite id="yu-smith-2016" />.
      </p>

      <h2>Bambini piccoli: regole brevi, turni rapidi</h2>
      <p>
        Questi tre sono per bambini dai 2 anni in su, e puoi farli tutti da seduto.
      </p>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: sedetevi uno di fronte all’altro con la palla in mano al tuo bambino. Di’ piano
          “aspetta, aspetta”, poi “via”, e lui te la fa rotolare. Allunga un po’ l’attesa ogni volta.
        </li>
        <li>
          <GameLink id="loud-soft-singing" />: cantate una canzone insieme. Mano in alto vuol dire forte, mano sul
          ginocchio vuol dire un sussurro. Poi decide la mano del tuo bambino.
        </li>
        <li>
          <GameLink id="tell-teddy" />: metti l’orsetto dall’altra parte della stanza e sussurra un messaggio breve al tuo
          bambino, tipo “orsetto, è pronta la cena”. Lui va dall’orsetto e gli dice il messaggio, e tu rispondi con la voce
          dell’orsetto.
        </li>
      </ul>
      <p>
        Aspettare e sussurrare sono tutti e due compiti che i ricercatori hanno usato per studiare l’autocontrollo in
        bambini da 22 a 45 mesi <Cite id="kochanska-2000" />. Contano anche i giochi musicali. In uno studio, cantare,
        ballare e fare giochi musicali insieme a casa a 2-3 anni ha predetto l’attenzione e l’autoregolazione a 5 anni{" "}
        <Cite id="williams-2015" />.
      </p>

      <h2>Bambini in età prescolare: una regola da infrangere</h2>
      <p>
        I bambini in età prescolare adorano una regola che capovolge le cose. Per un bambino dai quattro anni in su, prova{" "}
        <GameLink id="heads-mean-toes" />. Quando dici “testa”, si tocca i piedi, e quando dici “piedi”, si tocca la
        testa. Parti piano, poi vai più veloce. Puoi chiamarlo da una sedia. È simile a un compito di uno studio in cui
        bambini da 4 a 6 anni facevano lo stesso scambio, e come se la cavavano prediceva i loro risultati alla scuola
        dell’infanzia <Cite id="ponitz-2009" />.
      </p>
      <p>
        Se il tuo bambino è su di giri dopo l’asilo, <GameLink id="closed-hands" /> rallenta tutto. Chiude gli occhi e
        tende due mani chiuse. Contate piano insieme fino a venti, e se si aprono gli occhi o le mani si ricomincia. A
        venti, un giocattolino gli atterra in mano.
      </p>
      <p>
        Se ha bisogno di muoversi, <GameLink id="pillow-island" /> funziona in dieci minuti. Sparpaglia i cuscini sul
        pavimento come isole. Il tuo bambino attraversa la stanza senza toccare l’“acqua”, e ogni volta che ce la fa, togli
        un’isola.
      </p>

      <h2>Un piano per quando apri la porta</h2>
      <ol>
        <li>Lascia il telefono nella borsa o sul caricatore vicino alla porta.</li>
        <li>Proponi due giochi e lascia scegliere il tuo bambino.</li>
        <li>Siediti sul pavimento prima di sederti sul divano. Da lì è più facile cominciare un gioco.</li>
        <li>Gioca finché il tuo bambino si allontana, e poi prepara la cena senza sensi di colpa.</li>
      </ol>
      <p>
        Per altri giochi come questi, guarda i <Link href="/games/energy/medium">giochi a batteria media</Link>. Nelle
        sere in cui hai ancora meno, prova i <Link href="/games/energy/low">giochi a batteria bassa</Link>.
      </p>
    </>
  ),
};
