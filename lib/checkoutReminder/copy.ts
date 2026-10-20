import type { Lang } from "@/lib/i18n";

/**
 * The reminder is a letter from the founder, in each funnel deck's own register (du, vous,
 * на «вы»), with Kid hours spelled as the app spells it. Two ways to finish follow the pitch:
 * the web with the discount, and the App Store trial, which no discount reaches. `percent`
 * arrives already formatted for the language (`20 %`, `20%`).
 */
export interface ReminderCopy {
  subject: (percent: string) => string;
  intro: string;
  pitch: string;
  web: (percent: string) => string;
  webLink: string;
  ios: string;
  trial: string;
  /** Apple's own wording for the badge in this language; its alt text and the text part's label. */
  appStore: string;
  signature: string;
  reason: string;
  unsubscribe: string;
  unsubscribeTitle: string;
  unsubscribeButton: string;
  unsubscribed: string;
}

export const REMINDER_COPY: Record<Lang, ReminderCopy> = {
  en: {
    subject: (p) => `${p} off your first Oyno payment`,
    intro: "You stopped just before paying, and your Oyno account is already set up.",
    pitch:
      "Oyno pauses the apps you pick during Kid hours and hands you one easy game for your kid’s age. Five to fifteen minutes, and every round grows your family’s little planet.",
    web: (p) => `On the web, ${p} off your first payment. It’s already on your account:`,
    webLink: "Finish on the web",
    ios: "On iPhone, start with a free trial:",
    trial: "3 days free. Cancel during the trial and you pay nothing. Sign in with the same account.",
    appStore: "Download on the App Store",
    signature: "— Tim, founder of Oyno",
    reason: "You got this because you started a checkout at Oyno. It’s the only reminder we send.",
    unsubscribe: "Unsubscribe",
    unsubscribeTitle: "Stop emails from Oyno?",
    unsubscribeButton: "Unsubscribe",
    unsubscribed: "Done. We won’t email you about a checkout again.",
  },
  de: {
    subject: (p) => `${p} Rabatt auf deine erste Oyno-Zahlung`,
    intro: "Du hast kurz vor dem Bezahlen aufgehört, und dein Oyno-Konto ist schon angelegt.",
    pitch:
      "Oyno pausiert in der Familienzeit die Apps, die du auswählst, und gibt dir ein einfaches Spiel für das Alter deines Kindes. Fünf bis fünfzehn Minuten, und jede Runde lässt euren kleinen Familienplaneten wachsen.",
    web: (p) => `Im Web: ${p} Rabatt auf deine erste Zahlung. Er ist schon auf deinem Konto:`,
    webLink: "Im Web abschließen",
    ios: "Auf dem iPhone: Starte mit einer kostenlosen Testphase.",
    trial: "3 Tage kostenlos. Kündigst du in der Testphase, zahlst du nichts. Melde dich mit demselben Konto an.",
    appStore: "Laden im App Store",
    signature: "— Tim, Gründer von Oyno",
    reason: "Du bekommst diese E-Mail, weil du bei Oyno eine Zahlung begonnen hast. Es ist die einzige Erinnerung, die wir schicken.",
    unsubscribe: "Abmelden",
    unsubscribeTitle: "Keine E-Mails mehr von Oyno?",
    unsubscribeButton: "Abmelden",
    unsubscribed: "Erledigt. Wir schreiben dir nicht mehr wegen einer Zahlung.",
  },
  fr: {
    subject: (p) => `${p} de réduction sur votre premier paiement Oyno`,
    intro: "Il ne restait plus qu’à payer, et votre compte Oyno est déjà prêt.",
    pitch:
      "Oyno met en pause les apps que vous choisissez pendant le Temps en famille et vous propose un jeu simple, adapté à l’âge de votre enfant. De cinq à quinze minutes, et chaque partie fait grandir la petite planète de votre famille.",
    web: (p) => `Sur le web, ${p} de réduction sur votre premier paiement. Elle est déjà sur votre compte\u202f:`,
    webLink: "Terminer sur le web",
    ios: "Sur iPhone, commencez par un essai gratuit\u202f:",
    trial: "3 jours gratuits. Annulez pendant l’essai et vous ne payez rien. Connectez-vous avec le même compte.",
    appStore: "Télécharger dans l’App Store",
    signature: "— Tim, fondateur d’Oyno",
    reason: "Vous recevez cet e-mail parce que vous avez commencé un paiement sur Oyno. C’est le seul rappel que nous envoyons.",
    unsubscribe: "Se désabonner",
    unsubscribeTitle: "Ne plus recevoir d’e-mails d’Oyno\u202f?",
    unsubscribeButton: "Me désabonner",
    unsubscribed: "C’est fait. Nous ne vous écrirons plus au sujet d’un paiement.",
  },
  es: {
    subject: (p) => `${p} de descuento en tu primer pago de Oyno`,
    intro: "Te quedaste justo antes de pagar, y tu cuenta de Oyno ya está creada.",
    pitch:
      "Oyno pausa las apps que elijas durante el Tiempo en familia y te da un juego sencillo para la edad de tu peque. De cinco a quince minutos, y cada ronda hace crecer el pequeño planeta de tu familia.",
    web: (p) => `En la web, ${p} de descuento en tu primer pago. Ya está en tu cuenta:`,
    webLink: "Terminar en la web",
    ios: "En iPhone, empieza con una prueba gratis:",
    trial: "3 días gratis. Si cancelas durante la prueba, no pagas nada. Inicia sesión con la misma cuenta.",
    appStore: "Descárgalo en el App Store",
    signature: "— Tim, fundador de Oyno",
    reason: "Te llega este correo porque empezaste un pago en Oyno. Es el único recordatorio que enviamos.",
    unsubscribe: "Darse de baja",
    unsubscribeTitle: "¿Dejar de recibir correos de Oyno?",
    unsubscribeButton: "Darme de baja",
    unsubscribed: "Hecho. No volveremos a escribirte sobre un pago.",
  },
  "es-MX": {
    subject: (p) => `${p} de descuento en tu primer pago de Oyno`,
    intro: "Te quedaste justo antes de pagar, y tu cuenta de Oyno ya está lista.",
    pitch:
      "Oyno pausa las apps que elijas durante el Tiempo en familia y te da un juego sencillo para la edad de tu peque. De cinco a quince minutos, y cada ronda hace crecer el pequeño planeta de tu familia.",
    web: (p) => `En la web, ${p} de descuento en tu primer pago. Ya está en tu cuenta:`,
    webLink: "Terminar en la web",
    ios: "En iPhone, empieza con una prueba gratis:",
    trial: "3 días gratis. Si cancelas durante la prueba, no pagas nada. Inicia sesión con la misma cuenta.",
    appStore: "Descárgalo en el App Store",
    signature: "— Tim, fundador de Oyno",
    reason: "Te llegó este correo porque iniciaste un pago en Oyno. Es el único recordatorio que mandamos.",
    unsubscribe: "Darse de baja",
    unsubscribeTitle: "¿Ya no quieres correos de Oyno?",
    unsubscribeButton: "Darme de baja",
    unsubscribed: "Listo. No te volveremos a escribir sobre un pago.",
  },
  "pt-BR": {
    subject: (p) => `${p} de desconto no seu primeiro pagamento do Oyno`,
    intro: "Você parou logo antes de pagar, e sua conta do Oyno já está criada.",
    pitch:
      "O Oyno pausa os apps que você escolher durante o Tempo em família e te dá uma brincadeira simples para a idade do seu filho. De cinco a quinze minutos, e cada rodada faz crescer o pequeno planeta da sua família.",
    web: (p) => `Na web, ${p} de desconto no seu primeiro pagamento. Ele já está na sua conta:`,
    webLink: "Concluir na web",
    ios: "No iPhone, comece com um teste grátis:",
    trial: "3 dias grátis. Cancele durante o teste e você não paga nada. Entre com a mesma conta.",
    appStore: "Baixar na App Store",
    signature: "— Tim, fundador do Oyno",
    reason: "Você recebeu este e-mail porque começou um pagamento no Oyno. É o único lembrete que enviamos.",
    unsubscribe: "Cancelar inscrição",
    unsubscribeTitle: "Parar de receber e-mails do Oyno?",
    unsubscribeButton: "Cancelar inscrição",
    unsubscribed: "Pronto. Não vamos mais te escrever sobre um pagamento.",
  },
  it: {
    subject: (p) => `${p} di sconto sul tuo primo pagamento Oyno`,
    intro: "Mancava solo il pagamento, e il tuo account Oyno è già pronto.",
    pitch:
      "Oyno mette in pausa le app che scegli durante il Tempo in famiglia e ti propone un gioco semplice per l’età del tuo bambino. Da cinque a quindici minuti, e ogni partita fa crescere il piccolo pianeta della tua famiglia.",
    web: (p) => `Sul web, ${p} di sconto sul primo pagamento. È già sul tuo account:`,
    webLink: "Completa sul web",
    ios: "Su iPhone, inizia con una prova gratuita:",
    trial: "3 giorni gratis. Se disdici durante la prova, non paghi nulla. Accedi con lo stesso account.",
    appStore: "Scarica su App Store",
    signature: "— Tim, fondatore di Oyno",
    reason: "Ricevi questa email perché hai iniziato un pagamento su Oyno. È l’unico promemoria che inviamo.",
    unsubscribe: "Annulla l’iscrizione",
    unsubscribeTitle: "Non vuoi più email da Oyno?",
    unsubscribeButton: "Annulla l’iscrizione",
    unsubscribed: "Fatto. Non ti scriveremo più per un pagamento.",
  },
  nl: {
    subject: (p) => `${p} korting op je eerste Oyno-betaling`,
    intro: "Je stopte vlak voor het betalen, en je Oyno-account staat al klaar.",
    pitch:
      "Oyno pauzeert tijdens Gezinstijd de apps die jij kiest en geeft je één makkelijk spel voor de leeftijd van je kind. Vijf tot vijftien minuten, en elke ronde laat de kleine planeet van je gezin groeien.",
    web: (p) => `Op het web: ${p} korting op je eerste betaling. Die staat al op je account:`,
    webLink: "Afronden op het web",
    ios: "Op iPhone: begin met een gratis proefperiode.",
    trial: "3 dagen gratis. Zeg je op tijdens de proefperiode, dan betaal je niets. Log in met hetzelfde account.",
    appStore: "Download in de App Store",
    signature: "— Tim, oprichter van Oyno",
    reason: "Je krijgt deze e-mail omdat je bij Oyno een betaling bent begonnen. Het is de enige herinnering die we sturen.",
    unsubscribe: "Afmelden",
    unsubscribeTitle: "Geen e-mails meer van Oyno?",
    unsubscribeButton: "Afmelden",
    unsubscribed: "Klaar. We mailen je niet meer over een betaling.",
  },
  pl: {
    subject: (p) => `${p} zniżki na pierwszą płatność w Oyno`,
    intro: "Do końca brakowało tylko płatności, a twoje konto Oyno już czeka.",
    pitch:
      "Oyno wstrzymuje wybrane aplikacje w Czasie z dzieckiem i podsuwa jedną prostą zabawę dopasowaną do wieku dziecka. Od pięciu do piętnastu minut, a każda runda powiększa małą planetę twojej rodziny.",
    web: (p) => `W przeglądarce: ${p} zniżki na pierwszą płatność. Jest już na twoim koncie:`,
    webLink: "Dokończ w przeglądarce",
    ios: "Na iPhonie: zacznij od darmowego okresu próbnego.",
    trial: "3 dni za darmo. Anuluj w trakcie okresu próbnego, a nic nie zapłacisz. Zaloguj się na to samo konto.",
    appStore: "Pobierz w App Store",
    signature: "— Tim, założyciel Oyno",
    reason: "Dostajesz tę wiadomość, bo na twoim koncie w Oyno rozpoczęto płatność. To jedyne przypomnienie, jakie wysyłamy.",
    unsubscribe: "Wypisz się",
    unsubscribeTitle: "Nie chcesz więcej e-maili od Oyno?",
    unsubscribeButton: "Wypisz mnie",
    unsubscribed: "Gotowe. Nie napiszemy już do ciebie w sprawie płatności.",
  },
  ru: {
    subject: (p) => `Скидка ${p} на первый платёж в Oyno`,
    intro: "Вы остановились прямо перед оплатой, а аккаунт Oyno у вас уже есть.",
    pitch:
      "Oyno ставит на паузу выбранные вами приложения в Детское время и предлагает одну простую игру под возраст ребёнка. От пяти до пятнадцати минут, и каждый раунд растит маленькую планету вашей семьи.",
    web: (p) => `На сайте — скидка ${p} на первый платёж. Она уже привязана к вашему аккаунту:`,
    webLink: "Закончить на сайте",
    ios: "На iPhone — начните с бесплатного пробного периода:",
    trial: "3 дня бесплатно. Отмените до конца пробного периода — и ничего не заплатите. Войдите в тот же аккаунт.",
    appStore: "Загрузите в App Store",
    signature: "— Тим, основатель Oyno",
    reason: "Вы получили это письмо, потому что начали оплату в Oyno. Это единственное напоминание, которое мы отправляем.",
    unsubscribe: "Отписаться",
    unsubscribeTitle: "Отписаться от писем Oyno?",
    unsubscribeButton: "Отписаться",
    unsubscribed: "Готово. Больше не будем писать вам об оплате.",
  },
};
