import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("it", page);

const UPDATED = "9 ottobre 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const it: SiteCopy = {
  nav: {
    pricing: "Prezzi",
    support: "Assistenza",
    privacy: "Privacy",
    terms: "Termini",
    switchLabel: "Cambia lingua",
    start: "Inizia",
    games: "Giochi",
    guides: "Guide",
    blog: "Blog",
  },

  home: {
    meta: {
      title: "Oyno: metti giù il telefono e gioca dieci minuti",
      description:
        "Oyno mette in pausa le tue app quando stai con il tuo bambino e ti dà un gioco facile al giorno. Ogni partita fa crescere il piccolo pianeta della tua famiglia.",
    },
    eyebrow: "Per genitori di bambini da 0 a 5 anni",
    headline: (
      <>
        Il telefono ti ruba la serata. <span className="hl">Riprenditi dieci minuti.</span>
      </>
    ),
    sub: "Durante il Tempo in famiglia, Oyno mette in pausa le tue app e ti dà un gioco facile, su misura per l’energia che ti resta. Ogni partita fa crescere il pianeta della tua famiglia.",
    cta: "Inizia",
    planet: {
      open: "Apri i tuoi mondi",
      close: "Chiudi i mondi",
      previous: "Mondo precedente",
      next: "Mondo successivo",
      yours: "Ora è tuo",
      unlocksAt: "Si sblocca al livello di fioritura {n}",
      hint: "Tocca il pianeta",
      worlds: {
        earth: "Terra",
        meadow: "Prato",
        ember: "Brace",
        blossom: "Bocciolo",
        lagoon: "Laguna",
        dune: "Duna",
        frost: "Brina",
        lavender: "Lavanda",
        moss: "Muschio",
        honey: "Miele",
        cloud: "Nuvola",
        coral: "Corallo",
        rose: "Rosa",
        pebble: "Sassolino",
        orchard: "Frutteto",
        aurora: "Aurora",
        clay: "Argilla",
        mint: "Menta",
        twilight: "Crepuscolo",
        poppy: "Papavero",
        pearl: "Perla",
        canyon: "Canyon",
        rain: "Pioggia",
        cedar: "Cedro",
        sunlit: "Sole",
        berry: "Mirtillo",
        glacier: "Ghiacciaio",
        marigold: "Calendula",
        dream: "Sogno",
        hearth: "Focolare",
        home: "Casa",
      },
    },
    proof: {
      heading: "Giochi facili per genitori stanchi",
      sub: "Un gioco, un libro, il bagnetto o cucinare insieme: ogni momento insieme fa crescere il vostro pianeta.",
      previous: "Schermata precedente",
      next: "Schermata successiva",
      bodies: {
        low: "Di’ a Oyno com’è la tua batteria: bassa, media o carica. Ricevi un gioco da 5 a 15 minuti, senza niente da preparare, e con la batteria bassa uno da fare sdraiati.",
        growth: "Ogni gioco allena attenzione, memoria di lavoro, autocontrollo o flessibilità mentale, e cita lo studio e la guida su cui si basa. Progressi mostra cosa avete allenato insieme, abilità per abilità.",
        kidhours: "Crea orari per le sere di scuola, le mattine del weekend o il bagnetto e la nanna, ognuno con le sue app da mettere in pausa. Le app che ti servono sempre restano aperte.",
        keepsake: "Alla fine di una partita, il tuo bimbo tocca il pianeta e accanto può comparire un piccolo ricordo. Ce ne sono 24 da trovare, e alcuni sono rari.",
        home: "Giochi, lettura, bagnetto e cucina: conta tutto. La Home ti tiene pronta una cosa facile per stasera e mostra quanto manca al prossimo mondo.",
        letter: "Ogni domenica il pianeta vi scrive della vostra settimana: le serate insieme, i giochi e le prime volte che hai notato. Aggiungi una riga e mandala alla famiglia.",
        find: "500 giochi da 0 a 5 anni, ognuno in tre brevi passi. Cercali tutti o lascia che Oyno te ne dia uno.",
        worlds: "Ogni partita fa fiorire il pianeta, e giocando si aprono 31 mondi. Saltare un giorno non costa nulla: il pianeta non appassisce mai.",
      },
    },
    author: {
      heading: "Perché ho creato Oyno",
      paragraphs: [
        "Senza mia figlia Oyno non esisterebbe. E non esisterebbe nemmeno se i telefoni non fossero diventati così bravi a tenerci incollati.",
        "Lavoro tutto il giorno. Poi torno a casa e la mano va al telefono. È solo un secondo. E per quel secondo mi odio.",
        "Mia figlia lo vede. Pensa che sia normale. Non lo è.",
        "Ho provato le app che bloccano. Ho cancellato i social. L’abitudine è rimasta. Prendevo il telefono, vedevo lo schermo bloccato e lo rimettevo giù. Per me non era niente. Per lei ero di nuovo io con il telefono in mano.",
        "Così ho smesso di combattere l’abitudine. Le ho dato qualcosa di meglio da fare.",
        "Oyno vuol dire “gioca” nella lingua del Paese in cui sono nato. Ora, quando prendo il telefono, mi propone un gioco da fare con lei. È divertente, e aiuta il suo cervello a crescere.",
        "Ci sono voluti mesi. Non è l’ennesima app per bloccare. Non è respirazione e non è meditazione. Sono dieci minuti con il tuo bambino, con un gioco che ha la ricerca dalla sua parte.",
      ],
      name: "Tim",
      role: "Creatore di Oyno",
      photoAlt: "Un genitore e una bambina sul pavimento del soggiorno con un pianeta di argilla luminoso",
    },
    plan: {
      eyebrow: "Un solo piano, con tutto dentro",
      pitch: "Tempo in famiglia, 500 giochi, i ricordi, la lettera della domenica e tutti i mondi che la tua famiglia sblocca. Disdici quando vuoi.",
      monthly: "Mensile",
      yearly: "Annuale",
      cta: "Inizia",
      appNote: "Oyno è un’app per iPhone. Abbonati qui o nell’app, poi accedi con lo stesso account.",
    },
    closer: {
      heading: "Stasera, dieci minuti.",
      body: "Si configura in un minuto e il primo gioco è pronto prima di cena.",
    },
  },

  pricing: {
    meta: {
      title: "Prezzi | Oyno",
      description: "Quanto costa Oyno, sul web e su App Store.",
    },
    eyebrow: "Prezzi",
    heading: "Un solo piano. Due modi per pagare.",
    intro: "Entrambi sbloccano lo stesso Oyno. Scegli la porta che hai davanti.",
    web: {
      eyebrow: "Sul web",
      perMonth: " / mese",
      orYearly: (yearly) => `oppure ${yearly} / anno`,
      cta: "Inizia",
      note: "Addebito tramite Dodo Payments, il nostro merchant of record (il venditore ufficiale). I prezzi includono le imposte del tuo Paese. Disdici quando vuoi.",
    },
    app: {
      eyebrow: "Su App Store",
      headline: "Gratis per 3 giorni",
      sub: "Poi Apple addebita il prezzo di App Store.",
      note: "La prova è l’offerta introduttiva di Apple e si gestisce negli abbonamenti del tuo Account Apple.",
    },
    body: (
      <>
        <h2>Cosa è incluso</h2>
        <p>
          Il Tempo in famiglia (le app che scegli vanno in pausa sul tuo telefono negli orari che
          imposti), un gioco nuovo ogni sera, il timer e tutti i mondi che la tua famiglia sblocca.
          Non c&rsquo;è un piano gratuito e non ci sono acquisti extra dentro l&rsquo;abbonamento.
        </p>
        <h2>Rimborsi</h2>
        <p>
          Hai fatto l&rsquo;abbonamento sul web e non fa per te? Scrivi a {SUPPORT} entro 14 giorni dal
          pagamento e ti rimborsiamo l&rsquo;intero importo. Gli acquisti su App Store li rimborsa
          Apple su{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Assistenza | Oyno",
      description: "Come contattarci, e le risposte alle domande più frequenti.",
    },
    eyebrow: "Assistenza",
    heading: "Come possiamo aiutarti?",
    intro: (
      <>
        Scrivi a{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Ti risponde una persona vera, di solito entro un giorno.
      </>
    ),
    body: (
      <>
        <h2>Un&rsquo;app che ho messo in pausa si apre lo stesso</h2>
        <p>
          Controlla che Oyno abbia l&rsquo;accesso a Tempo di utilizzo in{" "}
          <strong>Impostazioni → Tempo di utilizzo</strong>, e che l&rsquo;app sia nel tuo elenco in{" "}
          <strong>Tempo in famiglia → In pausa</strong>. Le app installate dopo che hai creato
          l&rsquo;elenco non ci sono finché non le aggiungi.
        </p>
        <h2>Mi serve il telefono durante il Tempo in famiglia</h2>
        <p>
          Telefono, Messaggi e Mappe non vanno mai in pausa. Per tutto il resto, tieni premuto{" "}
          <strong>Non ora</strong>: le tue app si aprono per 20 minuti, poi il Tempo in famiglia
          riprende.
        </p>
        <h2>Ho fatto l&rsquo;abbonamento sul web. Come entro?</h2>
        <p>
          Installa Oyno da App Store e accedi con la stessa email o lo stesso account Apple, Google
          o Facebook che hai usato qui. L&rsquo;abbonamento è già collegato.
        </p>
        <h2>Come disdico?</h2>
        <p>
          Nell&rsquo;app: <strong>Profilo → Gestisci abbonamento</strong>. Un abbonamento sul web
          si può disdire anche dal link nella ricevuta di Dodo Payments. Un abbonamento su App Store
          si disdice negli abbonamenti del tuo Account Apple.
        </p>
        <h2>Come elimino il mio account?</h2>
        <p>
          Nell&rsquo;app: <strong>Profilo → Elimina account</strong>. Scopri{" "}
          <Link href={`${to("privacy")}#delete`}>cosa viene cancellato</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Privacy | Oyno",
      description: "Cosa conserva Oyno, cosa non vede mai e come cancellare tutto.",
    },
    eyebrow: "Privacy",
    heading: "Le tue serate sono tue",
    updatedLabel: "Ultimo aggiornamento",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno è gestita da Teimur Gasanov. È un&rsquo;app per iPhone che mette in pausa le app
          scelte da un genitore, negli orari che imposta, e suggerisce brevi giochi da fare con
          il proprio bambino. Questa pagina descrive quali dati conservano l&rsquo;app e questo
          sito, perché, e come rimuoverli.
        </p>

        <h2>Cosa conserviamo</h2>
        <h3>Il tuo account</h3>
        <p>
          Un indirizzo email e, se accedi con Apple, Google o Facebook, l&rsquo;identificativo che
          ci fornisce quel servizio, insieme al nome e all&rsquo;indirizzo email che il servizio
          condivide. Se usi l&rsquo;indirizzo nascosto di Accedi con Apple, vediamo soltanto
          l&rsquo;indirizzo di inoltro.
        </p>
        <h3>Le tue partite</h3>
        <p>
          Ogni partita che giochi, la sua durata e il gioco a cui si riferisce restano sul tuo
          telefono. Perché il tuo pianeta si conservi su un nuovo telefono o dopo una
          reinstallazione, salviamo nel tuo account due totali: quante partite hai giocato e per
          quanti minuti. Nessuno di questi dati identifica un bambino: Oyno non chiede mai il nome,
          l&rsquo;età o una foto del tuo bambino. Le risposte che dai alle domande su questo sito
          (per esempio una fascia d&rsquo;età) sono conservate insieme ai dati del tuo
          abbonamento, così possiamo capire quali domande portano a giochi che le persone
          continuano a fare.
        </p>
        <h3>Il tuo abbonamento</h3>
        <p>
          Se hai sottoscritto l&rsquo;abbonamento nell&rsquo;app: l&rsquo;identificativo della transazione Apple, il
          prodotto, la data di scadenza e se l&rsquo;abbonamento è attivo. Se l&rsquo;hai sottoscritto sul
          web: Dodo Payments è il merchant of record (il venditore ufficiale) e conserva i dati
          della tua carta, che noi non vediamo mai. Conserviamo gli identificativi del cliente e
          dell&rsquo;abbonamento che Dodo ci fornisce, lo stato e la fine del periodo pagato.
        </p>
        <h3>Analisi del prodotto</h3>
        <p>
          Tramite Amplitude registriamo quali schermate vengono aperte e quali azioni vengono
          compiute (una partita iniziata, un paywall visualizzato), per capire dove l&rsquo;app
          crea confusione.
        </p>
        <h3>Pubblicità</h3>
        <p>
          Questo sito carica il pixel di Meta per misurare quali annunci portano persone che si
          abbonano. Quando inizia un abbonamento, inviamo a Meta un indirizzo email in forma di
          hash, così da poter associare la conversione. L&rsquo;hash viene calcolato sul nostro
          server, mai nel tuo browser.
        </p>

        <h2>Cosa non lascia mai il tuo telefono</h2>
        <p>
          Oyno usa l&rsquo;API Tempo di utilizzo di Apple per mettere in pausa le app. Apple
          fornisce all&rsquo;app dei token opachi per le app che scegli, non i loro nomi, e quei
          token restano sul dispositivo. Non vediamo mai quali app usi, per quanto tempo le usi, la
          tua navigazione, i tuoi messaggi, la tua posizione, i tuoi contatti o le tue foto.
        </p>

        <h2>Chi altro li vede</h2>
        <ul>
          <li>
            <strong>Supabase</strong>: il database e il servizio di accesso.
          </li>
          <li>
            <strong>Vercel</strong>: l&rsquo;hosting di questo sito e dell&rsquo;API con cui
            comunica l&rsquo;app.
          </li>
          <li>
            <strong>Dodo Payments</strong>: merchant of record per gli abbonamenti sul web.
          </li>
          <li>
            <strong>Amplitude</strong>: analisi del prodotto.
          </li>
          <li>
            <strong>Resend</strong>: le email con i codici di accesso che ti inviamo.
          </li>
          <li>
            <strong>Meta</strong>: misurazione degli annunci, come descritto sopra.
          </li>
        </ul>
        <p>Non vendiamo i tuoi dati e non li condividiamo con data broker.</p>

        <h2 id="delete">Cancellare tutto</h2>
        <p>
          Nell&rsquo;app: <strong>Profilo → Elimina account</strong>. Cancella il tuo account, i
          totali di cui facciamo il backup e le partite sul tuo telefono, immediatamente e in modo
          irreversibile.
        </p>
        <p>
          Hai effettuato l&rsquo;accesso con Facebook? Puoi anche rimuovere Oyno su Facebook in{" "}
          <strong>Impostazioni e privacy → Impostazioni → App e siti web</strong>. In questo modo
          Facebook smette di condividere altro con noi; è il passaggio descritto sopra a cancellare
          i tuoi dati.
        </p>
        <p>
          Eliminare l&rsquo;account non disdice l&rsquo;abbonamento. Prima disdicilo (vedi{" "}
          <Link href={to("support")}>Assistenza</Link>), poi elimina l&rsquo;account. Oppure scrivi
          a {SUPPORT} e faremo entrambe le cose, dandotene conferma.
        </p>

        <h2>I tuoi diritti</h2>
        <p>
          Puoi accedere ai tuoi dati, rettificarli, esportarli e cancellarli, e opporti al loro
          trattamento. Scrivi a {SUPPORT} per tutto ciò che l&rsquo;app non permette di fare
          direttamente.
        </p>

        <h2>Minori</h2>
        <p>
          Oyno è pensata per i genitori. Gli account sono riservati agli adulti, e l&rsquo;app non
          raccoglie nulla dal bambino con cui ti aiuta a giocare, né su di lui.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Termini | Oyno",
      description: "I termini di utilizzo di Oyno e dell’abbonamento venduto su questo sito.",
    },
    eyebrow: "Termini di servizio",
    heading: "Termini",
    updatedLabel: "Ultimo aggiornamento",
    updated: UPDATED,
    body: (
      <>
        <p>
          I presenti termini si applicano all&rsquo;app Oyno e a questo sito, entrambi gestiti da
          Teimur Gasanov. Utilizzando l&rsquo;una o l&rsquo;altro, li accetti.
        </p>

        <h2>Che cos&rsquo;è Oyno</h2>
        <p>
          Uno strumento che mette in pausa le app che scegli sul tuo iPhone negli orari che
          imposti, suggerisce brevi giochi da fare con il tuo bambino e tiene traccia delle
          partite che giochi. I giochi sono suggerimenti. Sei tu a decidere se un gioco è sicuro e
          adatto al tuo bambino e al tuo ambiente, e sei tu a sorvegliarlo.
        </p>

        <h2>Il tuo account</h2>
        <p>
          Ti serve un account, così un abbonamento acquistato sul web ti ritrova nell&rsquo;app.
          Non condividere con altri le tue credenziali di accesso. Puoi eliminare l&rsquo;account
          in qualsiasi momento da <strong>Profilo → Elimina account</strong>.
        </p>

        <h2>Abbonamenti</h2>
        <h3>Acquistati su questo sito</h3>
        <p>
          Il pagamento è riscosso da Dodo Payments, il merchant of record, i cui termini si
          applicano alla transazione. Gli abbonamenti si rinnovano automaticamente alla cadenza
          che hai scelto finché non li disdici. I prezzi sono mostrati nella tua valuta prima del
          pagamento e includono le imposte che Dodo è tenuta a riscuotere. Se Oyno non fa per te,
          chiedi a {SUPPORT} il rimborso completo entro 14 giorni da un pagamento.
        </p>
        <h3>Acquistati nell&rsquo;app</h3>
        <p>
          Apple riscuote il pagamento in base ai propri termini, compreso il contratto di licenza
          standard di Apple per l&rsquo;utente finale delle applicazioni concesse in licenza. La
          prova gratuita di 3 giorni è l&rsquo;offerta introduttiva di Apple; se non disdici prima
          che termini, Apple addebita il piano che hai scelto e lo rinnova finché non lo disdici
          negli abbonamenti del tuo Account Apple. Spetta ad Apple concedere i rimborsi.
        </p>
        <h3>Quando un abbonamento termina</h3>
        <p>
          Il tuo pianeta e le tue partite passate restano. Il Tempo in famiglia e i nuovi giochi si
          fermano finché non ti abboni di nuovo.
        </p>

        <h2>Modifiche e disponibilità</h2>
        <p>
          Miglioriamo Oyno nel tempo e possiamo modificare o rimuovere funzioni. Se una modifica
          ti toglie qualcosa per cui hai pagato, scrivi a {SUPPORT} e rimedieremo. Ci impegniamo a
          mantenere il servizio attivo, ma non possiamo garantire che non subisca mai
          interruzioni.
        </p>

        <h2>Responsabilità</h2>
        <p>
          Oyno è fornita &ldquo;così com&rsquo;è&rdquo;. Nei limiti consentiti dalla legge, la
          nostra responsabilità per qualsiasi pretesa è limitata a quanto ci hai pagato nei 12
          mesi precedenti. Nulla di quanto previsto qui limita i diritti che ti spettano in base
          alla normativa a tutela dei consumatori.
        </p>

        <h2>Contatti</h2>
        <p>
          Domande su questi termini: {SUPPORT}. La nostra{" "}
          <Link href={to("privacy")}>informativa sulla privacy</Link> spiega come trattiamo i tuoi
          dati.
        </p>
      </>
    ),
  },
};
