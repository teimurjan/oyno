import type { Lang } from "@/lib/i18n";

/**
 * The letter a web buyer gets once the payment lands: where the app is, which account to open
 * it with, and the first two things to do in it. In each funnel deck's register, with Kid hours
 * and Play spelled as the app spells them, and the reminder's signature and badge wording.
 */
export interface WelcomeCopy {
  subject: string;
  thanks: string;
  /** `provider` is a brand name (Facebook, Apple, Google), or null for the email sign-in. */
  signIn: (provider: string | null, email: string) => string;
  ios: string;
  /** Apple's own wording for the badge in this language; its alt text and the text part's label. */
  appStore: string;
  start: string;
  signature: string;
  reason: string;
}

export const WELCOME_COPY: Record<Lang, WelcomeCopy> = {
  en: {
    subject: "Welcome to Oyno",
    thanks: "Thanks for joining Oyno. It’s on your account now, on every iPhone you sign in to.",
    signIn: (p, e) => (p ? `Sign in with ${p}, the account for ${e}.` : `Sign in with your email, ${e}.`),
    ios: "Get the app on your iPhone:",
    appStore: "Download on the App Store",
    start: "Then turn on Kid hours and pick the apps to pause. When you sit down with your kid, open Play for one easy game.",
    signature: "— Tim, founder of Oyno",
    reason: "You got this because you bought Oyno.",
  },
  de: {
    subject: "Willkommen bei Oyno",
    thanks: "Danke, dass du dabei bist. Oyno gehört jetzt zu deinem Konto, auf jedem iPhone, auf dem du dich anmeldest.",
    signIn: (p, e) => (p ? `Melde dich mit ${p} an, mit dem Konto für ${e}.` : `Melde dich mit deiner E-Mail an: ${e}.`),
    ios: "Hol dir die App auf dein iPhone:",
    appStore: "Laden im App Store",
    start: "Schalte dann die Familienzeit ein und wähle die Apps, die pausieren sollen. Wenn du dich zu deinem Kind setzt, öffne Spielen für ein einfaches Spiel.",
    signature: "— Tim, Gründer von Oyno",
    reason: "Du bekommst diese E-Mail, weil du Oyno gekauft hast.",
  },
  fr: {
    subject: "Bienvenue sur Oyno",
    thanks: "Merci de nous rejoindre. Oyno est maintenant lié à votre compte, sur chaque iPhone où vous vous connectez.",
    signIn: (p, e) => (p ? `Connectez-vous avec ${p}, le compte de ${e}.` : `Connectez-vous avec votre e-mail, ${e}.`),
    ios: "Installez l’app sur votre iPhone :",
    appStore: "Télécharger dans l’App Store",
    start: "Activez ensuite le Temps en famille et choisissez les apps à mettre en pause. Quand vous êtes avec votre enfant, ouvrez Jouer pour un jeu simple.",
    signature: "— Tim, fondateur d’Oyno",
    reason: "Vous recevez cet e-mail parce que vous avez acheté Oyno.",
  },
  es: {
    subject: "Te damos la bienvenida a Oyno",
    thanks: "Gracias por unirte a Oyno. Ya está en tu cuenta, en cada iPhone donde inicies sesión.",
    signIn: (p, e) => (p ? `Inicia sesión con ${p}: la cuenta de ${e}.` : `Inicia sesión con tu correo, ${e}.`),
    ios: "Descarga la app en tu iPhone:",
    appStore: "Descárgalo en el App Store",
    start: "Después activa el Tiempo en familia y elige las apps que se pausan. Cuando estés con tu peque, abre Jugar para un juego sencillo.",
    signature: "— Tim, fundador de Oyno",
    reason: "Te llega este correo porque compraste Oyno.",
  },
  "es-MX": {
    subject: "Te damos la bienvenida a Oyno",
    thanks: "Gracias por unirte a Oyno. Ya está en tu cuenta, en cada iPhone donde inicies sesión.",
    signIn: (p, e) => (p ? `Inicia sesión con ${p}: la cuenta de ${e}.` : `Inicia sesión con tu correo, ${e}.`),
    ios: "Descarga la app en tu iPhone:",
    appStore: "Descárgalo en el App Store",
    start: "Luego activa el Tiempo en familia y elige las apps que se pausan. Cuando estés con tu peque, abre Jugar para un juego sencillo.",
    signature: "— Tim, fundador de Oyno",
    reason: "Te llegó este correo porque compraste Oyno.",
  },
  "pt-BR": {
    subject: "Boas-vindas ao Oyno",
    thanks: "Obrigado por entrar no Oyno. Ele já está na sua conta, em todo iPhone em que você entrar.",
    signIn: (p, e) => (p ? `Entre com ${p}, a conta de ${e}.` : `Entre com seu e-mail, ${e}.`),
    ios: "Baixe o app no seu iPhone:",
    appStore: "Baixar na App Store",
    start: "Depois ative o Tempo em família e escolha os apps que vão pausar. Quando estiver com seu filho, abra Brincar para uma brincadeira simples.",
    signature: "— Tim, fundador do Oyno",
    reason: "Você recebeu este e-mail porque comprou o Oyno.",
  },
  it: {
    subject: "Ti diamo il benvenuto in Oyno",
    thanks: "Grazie per aver scelto Oyno. Ora è sul tuo account, su ogni iPhone in cui accedi.",
    signIn: (p, e) => (p ? `Accedi con ${p}: l’account di ${e}.` : `Accedi con la tua email, ${e}.`),
    ios: "Scarica l’app sul tuo iPhone:",
    appStore: "Scarica su App Store",
    start: "Poi attiva il Tempo in famiglia e scegli le app da mettere in pausa. Quando sei con il tuo bambino, apri Gioca per un gioco semplice.",
    signature: "— Tim, fondatore di Oyno",
    reason: "Ricevi questa email perché hai acquistato Oyno.",
  },
  nl: {
    subject: "Welkom bij Oyno",
    thanks: "Bedankt dat je erbij bent. Oyno staat nu op je account, op elke iPhone waarop je inlogt.",
    signIn: (p, e) => (p ? `Log in met ${p}, het account van ${e}.` : `Log in met je e-mailadres, ${e}.`),
    ios: "Haal de app op je iPhone:",
    appStore: "Download in de App Store",
    start: "Zet daarna Gezinstijd aan en kies de apps die pauzeren. Zit je bij je kind, open dan Spelen voor één makkelijk spel.",
    signature: "— Tim, oprichter van Oyno",
    reason: "Je krijgt deze e-mail omdat je Oyno hebt gekocht.",
  },
  pl: {
    subject: "Witaj w Oyno",
    thanks: "Dzięki, że jesteś z nami. Oyno jest już na twoim koncie, na każdym iPhonie, na którym się zalogujesz.",
    signIn: (p, e) => (p ? `Zaloguj się przez ${p}, na konto ${e}.` : `Zaloguj się swoim e-mailem, ${e}.`),
    ios: "Pobierz aplikację na iPhone’a:",
    appStore: "Pobierz w App Store",
    start: "Potem włącz Czas z dzieckiem i wybierz aplikacje do wstrzymania. Gdy siądziesz z dzieckiem, otwórz Graj, żeby dostać jedną prostą zabawę.",
    signature: "— Tim, założyciel Oyno",
    reason: "Dostajesz tę wiadomość, bo na twoim koncie w Oyno dokonano zakupu.",
  },
  ru: {
    subject: "Добро пожаловать в Oyno",
    thanks: "Спасибо, что вы с нами. Oyno теперь привязан к вашему аккаунту — на любом iPhone, где вы войдёте.",
    signIn: (p, e) => (p ? `Войдите через ${p} — аккаунт ${e}.` : `Войдите по почте: ${e}.`),
    ios: "Установите приложение на iPhone:",
    appStore: "Загрузите в App Store",
    start: "Затем включите Детское время и выберите приложения для паузы. Когда сядете с ребёнком, откройте «Играть» — там будет одна простая игра.",
    signature: "— Тим, основатель Oyno",
    reason: "Вы получили это письмо, потому что купили Oyno.",
  },
};
