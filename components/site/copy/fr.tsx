import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("fr", page);

const UPDATED = "9 octobre 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const fr: SiteCopy = {
  nav: {
    pricing: "Tarifs",
    support: "Assistance",
    privacy: "Confidentialité",
    terms: "Conditions",
    switchLabel: "Changer de langue",
    start: "Commencer",
  },

  home: {
    meta: {
      title: "Oyno : posez le téléphone, jouez dix minutes",
      description:
        "Oyno met vos apps en pause pendant le temps avec votre enfant et vous propose un jeu simple par jour. Chaque partie fait grandir la petite planète de votre famille.",
    },
    eyebrow: "Pour les parents d’enfants de 0 à 5 ans",
    headline: (
      <>
        Votre téléphone vous vole la soirée. <span className="hl">Reprenez dix minutes.</span>
      </>
    ),
    sub: "Oyno met vos apps en pause pendant le Temps en famille et vous propose un jeu simple, à la mesure de l’énergie qui vous reste. Chaque partie fait grandir la planète de votre famille.",
    cta: "Commencer",
    planet: {
      open: "Ouvrir vos mondes",
      close: "Fermer les mondes",
      previous: "Monde précédent",
      next: "Monde suivant",
      yours: "Votre monde",
      unlocksAt: "Se débloque au niveau de floraison {n}",
      hint: "Appuyez sur la planète",
      worlds: {
        earth: "Terre",
        meadow: "Prairie",
        ember: "Braise",
        blossom: "Éclosion",
        lagoon: "Lagon",
        dune: "Dune",
        frost: "Givre",
        lavender: "Lavande",
        moss: "Mousse",
        honey: "Miel",
        cloud: "Nuage",
        coral: "Corail",
        rose: "Rose",
        pebble: "Galet",
        orchard: "Verger",
        aurora: "Aurore",
        clay: "Argile",
        mint: "Menthe",
        twilight: "Crépuscule",
        poppy: "Coquelicot",
        pearl: "Perle",
        canyon: "Canyon",
        rain: "Pluie",
        cedar: "Cèdre",
        sunlit: "Soleil",
        berry: "Baie",
        glacier: "Glacier",
        marigold: "Capucine",
        dream: "Rêve",
        hearth: "Foyer",
        home: "Maison",
      },
    },
    proof: {
      heading: "Des jeux faciles pour parents fatigués",
      sub: "Un jeu, un livre, le bain ou un repas préparé ensemble : chaque moment partagé fait grandir votre planète.",
      previous: "Écran précédent",
      next: "Écran suivant",
      bodies: {
        low: "Dites à Oyno où en est votre batterie : faible, moyenne ou pleine. Vous recevez un jeu de 5 à 15 minutes, sans rien à préparer, et à batterie faible, un jeu qui se joue allongé.",
        growth: "Chaque jeu entraîne l’attention, la mémoire de travail, la maîtrise de soi ou la flexibilité mentale, et cite l’étude et le guide qui le fondent. Progrès montre ce que vous avez pratiqué ensemble, compétence par compétence.",
        kidhours: "Créez des plages pour les soirs d’école, les matins de week-end ou le bain et le coucher, chacune avec ses apps à mettre en pause. Les apps dont vous avez toujours besoin restent ouvertes.",
        keepsake: "À la fin d’une partie, votre enfant touche la planète et un petit souvenir peut s’échouer à côté. Il y en a 24 à trouver, dont quelques raretés.",
        home: "Jeux, lecture, bain et cuisine : tout compte. L’accueil vous propose une chose facile pour ce soir et montre où en est le prochain monde.",
        letter: "Chaque dimanche, la planète vous écrit sur votre semaine : les soirées ensemble, vos jeux et les premières fois que vous avez remarquées. Ajoutez une ligne et envoyez-la à la famille.",
        find: "500 jeux pour les 0 à 5 ans, chacun en trois étapes courtes. Parcourez-les tous ou laissez Oyno vous en proposer un.",
        worlds: "Chaque partie fait fleurir la planète, et 31 mondes s’ouvrent au fil du jeu. Un jour sauté ne coûte rien : la planète ne fane jamais.",
      },
    },
    author: {
      heading: "Pourquoi j’ai créé Oyno",
      paragraphs: [
        "Sans ma fille, il n’y aurait pas d’Oyno. Il n’y en aurait pas non plus si les téléphones n’étaient pas devenus si doués pour nous retenir.",
        "Je travaille toute la journée. Puis je rentre, et je prends mon téléphone. Juste une seconde. Je m’en veux, de cette seconde.",
        "Ma fille le voit. Elle croit que c’est normal. Ça ne l’est pas.",
        "J’ai essayé les bloqueurs. J’ai supprimé les réseaux sociaux. L’habitude est restée. Je prenais le téléphone, je voyais l’écran verrouillé et je le reposais. Pour moi, ce n’était rien. Pour elle, c’était encore moi sur mon téléphone.",
        "Alors j’ai arrêté de combattre l’habitude. Je lui ai donné mieux à faire.",
        "Oyno veut dire « joue » dans la langue du pays où je suis né. Maintenant, quand je prends mon téléphone, il me propose un jeu à faire avec elle. C’est amusant, et ça aide son cerveau à se développer.",
        "Il m’a fallu des mois. Ce n’est pas un énième bloqueur. Ce n’est pas de la respiration, ni de la méditation. Ce sont dix minutes avec votre enfant, autour d’un jeu validé par la recherche.",
      ],
      name: "Tim",
      role: "Créateur d’Oyno",
      photoAlt: "Un parent et une petite fille assis par terre dans le salon, avec une planète d’argile lumineuse",
    },
    plan: {
      eyebrow: "Une formule, tout compris",
      pitch: "Le Temps en famille, 500 jeux, les souvenirs, la lettre du dimanche et tous les mondes que votre famille débloque. Annulable à tout moment.",
      monthly: "Mensuel",
      yearly: "Annuel",
      cta: "Commencer",
      appNote: "Oyno est une app iPhone. Abonnez-vous ici ou dans l’app, puis connectez-vous avec le même compte.",
    },
    closer: {
      heading: "Ce soir, dix minutes.",
      body: "La configuration prend une minute, et le premier jeu est prêt avant le dîner.",
    },
  },

  pricing: {
    meta: {
      title: "Tarifs | Oyno",
      description: "Ce que coûte Oyno, sur le web et sur l’App Store.",
    },
    eyebrow: "Tarifs",
    heading: "Une formule. Deux façons de payer.",
    intro: "Les deux débloquent le même Oyno. Passez par la porte la plus proche.",
    web: {
      eyebrow: "Sur le web",
      perMonth: " / mois",
      orYearly: (yearly) => `ou ${yearly} / an`,
      cta: "Commencer",
      note: "Facturé par Dodo Payments, notre revendeur officiel (merchant of record). Les prix incluent les taxes de votre pays. Annulable à tout moment.",
    },
    app: {
      eyebrow: "Sur l’App Store",
      headline: "Gratuit pendant 3 jours",
      sub: "Puis facturé par Apple au prix de l’App Store.",
      note: "L’essai gratuit est l’offre de lancement d’Apple et se gère dans les abonnements de votre compte Apple.",
    },
    body: (
      <>
        <h2>Ce qui est inclus</h2>
        <p>
          Le Temps en famille (les apps que vous choisissez se mettent en pause sur votre téléphone
          aux heures que vous fixez), un nouveau jeu chaque soir, le minuteur et tous les mondes que
          votre famille débloque. Il n’y a pas de version gratuite, ni d’achat supplémentaire dans
          l’abonnement.
        </p>
        <h2>Remboursements</h2>
        <p>
          Votre abonnement pris sur le web ne vous convient pas ? Écrivez à {SUPPORT} dans les 14
          jours suivant le paiement et nous vous rembourserons intégralement. Les achats sur l’App Store
          sont remboursés par Apple sur{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Assistance | Oyno",
      description: "Comment nous joindre, et les réponses aux questions les plus fréquentes.",
    },
    eyebrow: "Assistance",
    heading: "Comment pouvons-nous vous aider ?",
    intro: (
      <>
        Écrivez à{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Une vraie personne vous répond, en général dans la journée.
      </>
    ),
    body: (
      <>
        <h2>Une app mise en pause s’ouvre quand même</h2>
        <p>
          Vérifiez que l’accès à Temps d’écran est activé pour Oyno dans{" "}
          <strong>Réglages → Temps d’écran</strong>, et que l’app figure dans votre liste sous{" "}
          <strong>Temps en famille → Apps en pause</strong>. Les apps installées après la création de
          la liste n’y figurent pas tant que vous ne les ajoutez pas.
        </p>
        <h2>J’ai besoin de mon téléphone pendant le Temps en famille</h2>
        <p>
          Téléphone, Messages et Plans ne sont jamais mis en pause. Pour tout le reste, appuyez
          longuement sur <strong>Pas maintenant</strong> : vos apps se débloquent pendant 20
          minutes, puis le Temps en famille reprend.
        </p>
        <h2>J’ai souscrit sur le web. Comment accéder à l’app ?</h2>
        <p>
          Installez Oyno depuis l’App Store et connectez-vous avec le même compte (e-mail, Apple,
          Google ou Facebook) que celui utilisé ici. L’abonnement y est déjà associé.
        </p>
        <h2>Comment résilier ?</h2>
        <p>
          Dans l’app : <strong>Profil → Gérer l’abonnement</strong>. Un abonnement pris sur le web
          peut aussi être résilié via le lien de votre reçu Dodo Payments. Un abonnement App Store
          se résilie dans les abonnements de votre compte Apple.
        </p>
        <h2>Comment supprimer mon compte ?</h2>
        <p>
          Dans l’app : <strong>Profil → Supprimer le compte</strong>. Voir{" "}
          <Link href={`${to("privacy")}#delete`}>ce que cela efface</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Confidentialité | Oyno",
      description: "Ce qu’Oyno stocke, ce qu’il ne voit jamais, et comment tout supprimer.",
    },
    eyebrow: "Confidentialité",
    heading: "Vos soirées vous appartiennent",
    updatedLabel: "Dernière mise à jour",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno est exploité par Teimur Gasanov. Il s’agit d’une app iPhone qui met en pause les
          apps qu’un parent choisit pendant les heures qu’il définit, et qui suggère de courts jeux
          à faire avec son enfant. Cette page décrit ce que l’app et ce site stockent, pourquoi, et
          comment le supprimer.
        </p>

        <h2>Ce que nous stockons</h2>
        <h3>Votre compte</h3>
        <p>
          Une adresse e-mail et, si vous vous connectez avec Apple, Google ou Facebook,
          l’identifiant que ce fournisseur nous transmet, avec le nom et l’adresse e-mail qu’il
          partage. Si vous utilisez l’adresse masquée de « Se connecter avec Apple », nous ne
          voyons jamais que l’adresse relais.
        </p>
        <h3>Vos parties</h3>
        <p>
          Chaque partie que vous jouez, sa durée et le jeu concerné restent sur votre téléphone.
          Pour qu’un nouveau téléphone ou une réinstallation conserve votre planète, nous
          sauvegardons deux totaux avec votre compte : le nombre de parties jouées et le nombre de
          minutes. Aucune de ces données ne désigne un enfant : Oyno ne demande jamais le nom,
          l’âge ou la photo de votre enfant. Les réponses que vous donnez aux questions de ce site
          (par exemple, une tranche d’âge) sont stockées avec votre dossier d’abonnement, afin que
          nous puissions savoir quelles questions mènent à des jeux auxquels les gens continuent de
          jouer.
        </p>
        <h3>Votre abonnement</h3>
        <p>
          Si vous avez souscrit dans l’app : l’identifiant de transaction d’Apple, le produit, la
          date d’expiration et le fait qu’il soit actif ou non. Si vous avez souscrit sur le web :
          Dodo Payments est le revendeur officiel (merchant of record) et détient vos données de
          carte, que nous ne voyons jamais. Nous stockons les identifiants de client et
          d’abonnement que Dodo nous transmet, le statut et la fin de la période payée.
        </p>
        <h3>Analyse d’utilisation</h3>
        <p>
          Nous enregistrons, via Amplitude, les écrans ouverts et les actions effectuées (une
          partie lancée, un écran d’abonnement affiché), afin de repérer ce qui prête à confusion
          dans l’app.
        </p>
        <h3>Publicité</h3>
        <p>
          Ce site charge le pixel Meta pour mesurer quelles publicités amènent des personnes qui
          s’abonnent. Lorsqu’un abonnement commence, nous envoyons à Meta une adresse e-mail
          hachée afin que la conversion puisse être rapprochée. Le hachage est effectué sur notre
          serveur, jamais dans votre navigateur.
        </p>

        <h2>Ce qui ne quitte jamais votre téléphone</h2>
        <p>
          Oyno utilise l’API Temps d’écran d’Apple pour mettre des apps en pause. Apple transmet à
          l’app des jetons opaques pour les apps que vous choisissez, et non leurs noms, et ces
          jetons restent sur l’appareil. Nous ne voyons jamais quelles apps vous utilisez, combien
          de temps vous les utilisez, votre navigation, vos messages, votre position, vos contacts
          ou vos photos.
        </p>

        <h2>Qui d’autre y a accès</h2>
        <ul>
          <li>
            <strong>Supabase</strong> : la base de données et le service de connexion.
          </li>
          <li>
            <strong>Vercel</strong> : l’hébergement de ce site et de l’API avec laquelle l’app
            communique.
          </li>
          <li>
            <strong>Dodo Payments</strong> : revendeur officiel (merchant of record) pour les
            abonnements pris sur le web.
          </li>
          <li>
            <strong>Amplitude</strong> : l’analyse d’utilisation.
          </li>
          <li>
            <strong>Resend</strong> : les codes de connexion que nous vous envoyons par e-mail.
          </li>
          <li>
            <strong>Meta</strong> : la mesure publicitaire, comme décrit ci-dessus.
          </li>
        </ul>
        <p>Nous ne vendons pas vos données et ne les partageons pas avec des courtiers en données.</p>

        <h2 id="delete">Tout supprimer</h2>
        <p>
          Dans l’app : <strong>Profil → Supprimer le compte</strong>. Cela efface votre compte, les
          totaux que nous sauvegardons et les parties enregistrées sur votre téléphone,
          immédiatement et de manière irréversible.
        </p>
        <p>
          Vous vous connectez avec Facebook ? Vous pouvez aussi retirer Oyno sur Facebook, dans{" "}
          <strong>Paramètres et confidentialité → Paramètres → Applications et sites web</strong>.
          Facebook cesse alors de nous partager toute nouvelle information ; c’est l’étape
          ci-dessus qui efface vos données.
        </p>
        <p>
          Supprimer votre compte ne résilie pas votre abonnement. Résiliez-le d’abord (voir{" "}
          <Link href={to("support")}>Assistance</Link>), puis supprimez votre compte. Vous pouvez
          aussi écrire à {SUPPORT} : nous ferons les deux et vous le confirmerons.
        </p>

        <h2>Vos droits</h2>
        <p>
          Vous pouvez accéder à vos données, les rectifier, les exporter et les effacer, ainsi que
          vous opposer à leur traitement. Écrivez à {SUPPORT} pour tout ce que l’app ne permet pas
          de faire directement.
        </p>

        <h2>Enfants</h2>
        <p>
          Oyno s’adresse aux parents. Les comptes sont réservés aux adultes, et l’app ne collecte
          rien auprès de l’enfant avec qui elle vous aide à jouer, ni à son sujet.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Conditions | Oyno",
      description: "Les conditions d’utilisation d’Oyno et de l’abonnement vendu sur ce site.",
    },
    eyebrow: "Conditions d’utilisation",
    heading: "Conditions",
    updatedLabel: "Dernière mise à jour",
    updated: UPDATED,
    body: (
      <>
        <p>
          Les présentes conditions s’appliquent à l’app Oyno et à ce site, tous deux exploités par
          Teimur Gasanov. Utiliser l’un ou l’autre vaut acceptation de ces conditions.
        </p>

        <h2>Ce qu’est Oyno</h2>
        <p>
          Un outil qui met en pause les apps que vous choisissez sur votre propre iPhone pendant
          les heures que vous définissez, suggère de courts jeux à faire avec votre enfant et
          garde une trace des parties que vous jouez. Les jeux sont des suggestions. C’est à vous
          de décider si un jeu est sûr et adapté à votre enfant et à votre espace, et c’est vous
          qui en assurez la surveillance.
        </p>

        <h2>Votre compte</h2>
        <p>
          Un compte est nécessaire, afin qu’un abonnement acheté sur le web vous retrouve dans
          l’app. Ne communiquez à personne vos identifiants de connexion. Vous pouvez supprimer le
          compte à tout moment depuis <strong>Profil → Supprimer le compte</strong>.
        </p>

        <h2>Abonnements</h2>
        <h3>Achetés sur ce site</h3>
        <p>
          Le paiement est encaissé par Dodo Payments, le revendeur officiel (merchant of record),
          dont les conditions s’appliquent à la transaction. Les abonnements se renouvellent
          automatiquement selon la périodicité choisie, jusqu’à leur résiliation. Les prix sont
          affichés dans votre devise avant le paiement et incluent toute taxe que Dodo est tenu de
          percevoir. Si Oyno ne vous convient pas, demandez à {SUPPORT} un remboursement intégral
          dans les 14 jours suivant un paiement.
        </p>
        <h3>Achetés dans l’app</h3>
        <p>
          Apple encaisse le paiement selon ses propres conditions, y compris le contrat de licence
          utilisateur final standard d’Apple pour les applications sous licence. L’essai gratuit de
          3 jours est l’offre de lancement d’Apple ; si vous ne l’annulez pas avant son terme,
          Apple facture la formule choisie et la renouvelle jusqu’à ce que vous l’annuliez dans
          les abonnements de votre compte Apple. Les remboursements relèvent d’Apple.
        </p>
        <h3>Quand un abonnement prend fin</h3>
        <p>
          Votre planète et vos parties passées restent. Le Temps en famille et les nouveaux jeux
          s’arrêtent jusqu’à ce que vous vous abonniez de nouveau.
        </p>

        <h2>Évolutions et disponibilité</h2>
        <p>
          Nous améliorons Oyno au fil du temps et pouvons modifier ou supprimer des fonctionnalités.
          Si une modification vous retire quelque chose que vous avez payé, écrivez à {SUPPORT} et
          nous y remédierons. Nous faisons le nécessaire pour que le service reste disponible, mais
          ne pouvons pas garantir qu’il ne sera jamais interrompu.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Oyno est fourni « en l’état ». Dans la mesure permise par la loi, notre responsabilité au
          titre de toute réclamation est limitée aux sommes que vous nous avez versées au cours des
          12 mois qui la précèdent. Rien dans les présentes ne limite les droits dont vous disposez
          en vertu du droit de la consommation.
        </p>

        <h2>Contact</h2>
        <p>
          Questions sur ces conditions : {SUPPORT}. Notre{" "}
          <Link href={to("privacy")}>politique de confidentialité</Link> explique comment nous
          traitons vos données.
        </p>
      </>
    ),
  },
};
