import type { FunnelCopy } from "./types";

/** The Polish deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const pl: FunnelCopy = {
  meta: {
    title: "Oyno: odłóż telefon i pobaw się dziesięć minut",
    description: "Aplikacje wstrzymane na czas z dzieckiem i jedna łatwa zabawa dziennie. Wykup subskrypcję, a potem zaloguj się w aplikacji.",
  },

  chrome: {
    continue: "Dalej",
    letsGo: "Zaczynamy",
    intro: "Kilka pytań · około minuty",
    back: "Wstecz",
    progress: "Postęp",
  },

  openers: {
    headline: "Zdarzyło ci się powiedzieć dziecku [„chwileczkę”] i dalej siedzieć w telefonie?",
    yes: "Tak",
    no: "Raczej nie",
  },

  questions: {
    problem: {
      headline: "Co [pasuje do twoich wieczorów]?",
      options: {
        scroll: "Scrolluję, zamiast się bawić",
        ideas: "Brak mi sił, by wymyślić zabawę",
        asks: "Dziecko prosi o mój telefon",
        both: "Oboje siedzimy w telefonach",
      },
    },
    age: {
      headline: "Ile lat ma twoje najmłodsze dziecko?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "Kiedy telefon [wygrywa najczęściej]?",
      options: {
        afterwork: "Zaraz po pracy",
        dinner: "Przy kolacji",
        weekend: "W weekendowe poranki",
        bedtime: "Przed snem",
      },
    },
    pickups: {
      headline: "Jak często sięgasz po telefon [w ciągu godziny] spędzanej z dzieckiem?",
      options: {
        rare: "Prawie wcale",
        few: "Raz, może dwa",
        often: "Co kilka minut",
        lost: "Tracę rachubę",
      },
    },
    apps: {
      headline: "Które aplikacje [cię wciągają]?",
      description: "Zaznacz wszystkie pasujące",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "Newsy",
        work: "Poczta i Slack",
        games: "Gry",
      },
    },
    energy: {
      headline: "Ile energii zostaje ci [o 18:00]?",
      options: {
        low: "Niska bateria",
        okay: "Średnio",
        full: "Mnóstwo",
      },
    },
    ideas: {
      headline: "Zwykle wiesz, [w co się pobawić] z dzieckiem?",
      options: {
        often: "Prawie zawsze",
        sometimes: "Czasami",
        rarely: "Rzadko, mam pustkę w głowie",
      },
    },
    tried: {
      headline: "Co [masz już za sobą]?",
      options: {
        limits: "Limity w Czasie przed ekranem",
        room: "Telefon w innym pokoju",
        delete: "Usuwanie aplikacji",
        nothing: "Jeszcze nic",
      },
    },
    minutes: {
      headline: "Ile minut [dziennie] znajdziesz na zabawę?",
      options: {
        ten: "10 minut",
        twenty: "20 minut",
        thirty: "30 minut lub więcej",
      },
    },
    soon: {
      headline: "Kiedy chcesz odzyskać swoje wieczory?",
      options: {
        tonight: "Już dziś",
        week: "W tym tygodniu",
        month: "W tym miesiącu",
        unsure: "Jeszcze nie wiem",
      },
    },
  },

  steps: {
    why: {
      headline: "To nie twoja wina. Aplikacje są [stworzone, by cię wciągać].",
      body: "Za każdą aplikacją w twoim telefonie stoi zespół, któremu płacą za twoją kolejną minutę. O 18:00 silna wola nie ma szans w tej walce.",
      variants: {
        ideas: {
          headline: "To nie twoja wina. Po całym dniu nikt nie ma [pomysłów na zabawę].",
          body: "Wygrywa więc to, co najłatwiejsze. A najłatwiejszy jest ekran.",
        },
        asks: {
          headline: "To nie twoja wina. Dzieci chcą [tego, na co patrzysz].",
          body: "Telefon w twojej ręce to najciekawsza rzecz w pokoju. Odłóż go, a cała uwaga przejdzie na ciebie.",
        },
        both: {
          headline: "To nie twoja wina. Dwa telefony to [cisza w pokoju].",
          body: "Każde z was czeka, aż to drugie pierwsze odłoży telefon. Nikt nie musi czekać, jeśli oba telefony zamilkną naraz.",
        },
      },
    },
    evening: {
      headline: "Każde „chwileczkę” [się sumuje].",
    },
    influence: {
      headline: "Im więcej scrollujemy, tym częściej dzieci [proszą o ekran].",
    },
    alternative: {
      headline: "Oyno [nie walczy] z twoim nawykiem.",
      body: "Daje ci lepszy pomysł: jedną krótką zabawę z dzieckiem, dopasowaną do energii, która ci została.",
      variants: {
        low: {
          body: "Daje ci lepszy pomysł: krótką, cichą zabawę, na którą wystarczy nawet niska bateria.",
        },
        full: {
          body: "Daje ci lepszy pomysł: zabawę z dzieckiem, która wykorzysta energię, jaką jeszcze masz.",
        },
      },
    },
    enough: {
      headline: "Dziesięć minut [wystarczy].",
      body: "Dzieci pamiętają, że rodzic usiadł z nimi na podłodze, a nie to, ile trwała zabawa. Oyno dobierze taką na dziesięć minut i na energię, która ci została.",
      variants: {
        twenty: {
          headline: "Dwadzieścia minut [w zupełności wystarczy].",
          body: "Dzieci pamiętają, że rodzic usiadł z nimi na podłodze, a nie to, ile trwała zabawa. Oyno dobierze taką na dwadzieścia minut i na energię, która ci została.",
        },
        thirty: {
          headline: "Pół godziny to [więcej, niż trzeba].",
          body: "Dzieci pamiętają, że rodzic usiadł z nimi na podłodze, a nie to, ile trwała zabawa. Oyno dobierze zabawę do twojego wieczoru i energii, która ci została.",
        },
      },
    },
    plan: {
      headline: "Układamy [twój plan]",
    },
    account: {
      headline: "Plan gotowy. [Zapisz go], by zobaczyć cenę.",
    },
    paywall: {
      headline: "Zamień scrollowanie na bystrzejsze dziecko.",
    },
    checkout: {
      headline: "Dane do płatności.",
    },
  },

  evening: {
    caption: "Zwykły wieczór w tygodniu",
    hours: ["16:00", "17:00", "18:00", "19:00", "20:00"],
    kid: "Z dzieckiem",
    phone: "Telefon",
    summary: "„Chwileczkę” w czasie z dzieckiem: {n}",
  },

  influence: {
    caption: "Dzieci w wieku 2–5 lat, które ciągle proszą o ekran",
    bars: ["Poniżej 1,3 h", "1,3–3 h", "Powyżej 3 h"],
    axis: "Rodzic w mediach społecznościowych dziennie",
    summary: "Dwa razy częściej, gdy rodzic spędza w mediach społecznościowych ponad 3 godziny dziennie",
    source: "Domoff et al., 2021 · 383 rodziny z USA",
  },

  alternative: {
    eyebrow: "Jedna prosta zabawa",
    age: "Wiek 3–5",
    title: "Cisza na czwórce",
    minutes: "8 min",
    tags: {
      "lying-down": "Na leżąco",
      quiet: "Po cichu",
      "nothing-to-grab": "Bez rekwizytów",
    },
    blurb: "Dla dziecka, które liczy wszystko, w ciemnej sypialni, gdy masz siłę policzyć tylko do dziesięciu.",
    why: "Dlaczego to działa",
    skills: {
      "inhibitory-control": "Samokontrola",
      "working-memory": "Pamięć robocza",
    },
  },

  compare: {
    good: {
      ten: {
        title: "10 minut wspólnej zabawy",
        points: [
          "Cała twoja uwaga",
          "Jedna zabawa od początku do końca",
          "Dziecko prowadzi, ty dołączasz",
          "70 minut razem w tygodniu",
        ],
      },
      twenty: {
        title: "20 minut wspólnej zabawy",
        points: [
          "Cała twoja uwaga",
          "Dwie zabawy od początku do końca",
          "Ulubiona zabawa, i to dwa razy",
          "Ponad 2 godziny razem w tygodniu",
        ],
      },
      thirty: {
        title: "30 minut wspólnej zabawy",
        points: [
          "Cała twoja uwaga",
          "Trzy zabawy od początku do końca",
          "Coś nowego i stara ulubiona",
          "3,5 godziny razem w tygodniu",
        ],
      },
    },
    bad: {
      title: "Godzina obok, ale nie razem",
      points: [
        "Połową głowy jesteś w telefonie",
        "Dziecko prosi o ekran",
        "Nic nie dobiega końca",
        "Nikt tego nie zapamięta",
      ],
    },
  },

  plan: {
    lines: {
      age: {
        "0-1": "Zabawy dla maluszka do roku",
        "1-3": "Zabawy dla dziecka w wieku 1–3 lat",
        "3-5": "Zabawy dla dziecka w wieku 3–5 lat",
      },
      hardest: {
        afterwork: "Czas z dzieckiem zaraz po pracy",
        dinner: "Czas z dzieckiem przy kolacji",
        weekend: "Czas z dzieckiem w weekendowe poranki",
        bedtime: "Czas z dzieckiem przed snem",
      },
      energy: {
        low: "Łatwe zabawy na niską baterię",
        okay: "Zabawy na zwykły dzień",
        full: "Większe zabawy na pełną baterię",
      },
      minutes: {
        ten: "Dziesięć minut dziennie bez telefonu",
        twenty: "Dwadzieścia minut dziennie bez telefonu",
        thirty: "Pół godziny dziennie bez telefonu",
      },
    },
    fallback: {
      age: "Zabawy dla was obojga",
      hardest: "Czas z dzieckiem, gdy telefon najczęściej wygrywa",
      apps: "Wstrzymane aplikacje, które cię wciągają",
      energy: "Zabawy dopasowane do twojej energii",
      minutes: "Kilka minut dziennie bez telefonu",
    },
    apps: "Wstrzymane w Czasie z dzieckiem: {apps}",
  },

  account: {
    notConfigured: "Konta nie są skonfigurowane w tym środowisku.",
    emailPlaceholder: "ty@example.com",
    passwordPlaceholder: "Hasło (min. 8 znaków)",
    busy: "Chwileczkę…",
    noPassword: "Bez hasła. Wyślemy ci e-mailem 6-cyfrowy kod.",
    createAccount: "Utwórz konto",
    signIn: "Zaloguj się",
    or: "lub",
    useCode: "Wyślij mi kod e-mailem",
    usePassword: "Użyj hasła",
    haveAccount: "Masz już konto? Zaloguj się",
    newHere: "Pierwszy raz tutaj? Utwórz konto",
    codeSent: "Kod wysłany na {email}.",
    continue: "Dalej",
    resendIn: "Nowy kod za {seconds} s",
    resend: "Wyślij nowy kod",
    changeEmail: "Zmień e-mail",
    facebook: "Kontynuuj z Facebookiem",
    apple: "Kontynuuj z Apple",
    google: "Zaloguj się przez Google",
  },

  authErrors: {
    link_failed: "Nie udało się. Wyślij sobie nowy kod.",
    not_configured: "Logowanie nie jest skonfigurowane.",
    otp_expired: "Ten kod wygasł albo został już użyty. Wyślij sobie nowy.",
    over_email_send_rate_limit: "Za dużo e-maili na ten adres. Odczekaj minutę i spróbuj ponownie.",
    over_request_rate_limit: "Za dużo prób. Odczekaj minutę i spróbuj ponownie.",
    invalid_credentials: "Ten e-mail i hasło do siebie nie pasują.",
    email_address_invalid: "Ten adres e-mail wygląda na błędny.",
    weak_password: "Wybierz dłuższe hasło.",
    user_already_exists: "Konto z tym adresem e-mail już istnieje. Zaloguj się.",
    email_exists: "Konto z tym adresem e-mail już istnieje. Zaloguj się.",
    unknown: "Coś poszło nie tak po naszej stronie. Spróbuj ponownie za minutę.",
  },

  legal: { terms: "Regulamin", privacy: "Polityka prywatności" },

  paywall: {
    subhead: "Dziesięć minut zabawy dziennie, które ćwiczą samokontrolę i pamięć. Aplikacje poczekają, aż skończycie.",
    nudge: {
      title: "10 minut dla bystrzejszego dziecka",
      body: "„{game}” czeka. Instagram może poczekać.",
      time: "teraz",
    },
    game: {
      title: "Mały doktor",
      skills: ["Pamięć", "Elastyczne myślenie"],
      meta: "10 min · Na leżąco · 1–3 lata",
    },
    pros: [
      "Aplikacje wstrzymane w Czasie z dzieckiem",
      "Jedna łatwa zabawa każdego wieczoru",
      "Planeta twojej rodziny rośnie",
    ],
    plans: "Plany",
    monthly: "Miesięczna",
    yearly: "Roczna",
    lifetime: "Dożywotnio",
    perMonth: "/ mies.",
    perYear: "/ rok",
    aMonth: "miesięcznie",
    payOnce: "jednorazowo",
    cancelAnytime: "Anuluj w dowolnym momencie",
    save: "Oszczędzasz {percent}",
    billed: {
      yearly: "{price} płatne raz w roku",
      monthly: "{price} płatne co miesiąc",
      lifetime: "{price} jednorazowo, na zawsze",
    },
    refund: "Pełny zwrot w ciągu 14 dni",
    continue: "Zacznij dziś wieczorem",
  },

  faq: {
    title: "Częste pytania",
    items: [
      {
        question: "Czy każdy plan obejmuje wszystko?",
        answer: "Tak. Każdy plan daje dokładnie to samo: Czas z dzieckiem, wszystkie zabawy i wszystkie światy. Różni je tylko sposób płacenia.",
      },
      {
        question: "Na czyim telefonie działa pauza?",
        answer: "Na twoim. W ustawionych przez ciebie godzinach Oyno wstrzymuje wybrane aplikacje na telefonie, na którym jest zainstalowane. Nie śledzi dziecka i niczego mu nie ogranicza.",
      },
      {
        question: "Co się stanie, jeśli zrezygnuję?",
        answer: "Twoja planeta i rundy zostają. Czas z dzieckiem i nowe zabawy przestają działać. Zrezygnować możesz w każdej chwili w aplikacji albo przez link w e-mailu z rachunkiem.",
      },
      {
        question: "Czy mogę odzyskać pieniądze?",
        answer: "Tak, w ciągu 14 dni i bez podawania przyczyny. Napisz na tim@oyno.app z adresu użytego przy płatności.",
      },
      {
        question: "Na jakich urządzeniach działa Oyno?",
        answer: "Oyno to aplikacja na iPhone’a. Zainstaluj ją i zaloguj się na konto, które tutaj utworzysz.",
      },
      {
        question: "Kto obsługuje płatność?",
        answer: "Dodo Payments, nasz oficjalny sprzedawca (merchant of record). Pobiera płatność kartą, dolicza podatek od sprzedaży lub VAT obowiązujący w twoim kraju i wysyła ci rachunek e-mailem. Dane twojej karty nigdy do nas nie trafiają.",
      },
    ],
  },

  checkout: {
    platforms: "Oyno to aplikacja na iPhone’a. Zainstaluj ją i zaloguj się na to konto. Płatność obsługuje Dodo Payments.",
    cancelAnytime: "Anuluj w dowolnym momencie.",
    notConfigured: "Płatności nie są skonfigurowane w tym środowisku.",
    needsAccount: "Dostęp jest przypisany do konta, więc najpierw trzeba je założyć.",
    createYours: "Załóż konto",
    opening: "Przygotowujemy formularz płatności…",
    retry: "Nie udało się otworzyć. Spróbuj ponownie za chwilę.",
    tryAgain: "Spróbuj ponownie",
    failed: "Formularz płatności się nie załadował. Odśwież stronę, aby spróbować ponownie.",
    summary: "Podsumowanie zamówienia",
    discount: "Rabat",
    tax: "Podatek",
    total: "Razem",
    renews: "Odnawia się za {amount} / {cycle}. Anuluj w dowolnym momencie.",
    cycles: { month: "mies.", year: "rok" },
    once: "Jedna płatność. Bez odnowień.",
  },

  done: {
    eyebrow: "Gotowe",
    headline: "Teraz pobierz Oyno [na telefon]",
    body: "Zainstaluj Oyno na iPhonie i zaloguj się na nowo utworzone konto. Twój plan już na nim jest, więc nie czeka cię żadna płatność.",
    badge: "Pobierz w App Store",
    receipt: "Dodo Payments wyśle ci rachunek e-mailem. Subskrypcją możesz zarządzać i anulować ją w każdej chwili w aplikacji.",
  },
};
