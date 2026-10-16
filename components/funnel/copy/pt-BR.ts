import type { FunnelCopy } from "./types";

/** The Brazilian Portuguese deck. Keys follow `en.ts`; `{name}` is filled in at render, `[brackets]` is the accent. */
export const ptBR: FunnelCopy = {
  meta: {
    title: "Oyno: largue o celular e brinque por dez minutos",
    description: "Pause seus apps na hora de ficar com seu filho e receba uma brincadeira fácil por dia. Assine e depois entre no app.",
  },

  chrome: {
    continue: "Continuar",
    letsGo: "Vamos lá",
    intro: "Algumas perguntas · cerca de um minuto",
    back: "Voltar",
    progress: "Progresso",
  },

  openers: {
    headline: "O celular [rouba suas noites] com seu filho?",
    yes: "Sim",
    no: "Nem tanto",
  },

  questions: {
    problem: {
      headline: "Qual destas [tem a cara das suas noites]?",
      options: {
        scroll: "Rolo o feed em vez de brincar",
        ideas: "Sem energia para inventar brincadeira",
        asks: "Meu filho pede o meu celular",
        both: "Nós dois ficamos no celular",
      },
    },
    age: {
      headline: "Quantos anos tem o seu caçula?",
      options: {
        "0-1": "0–1",
        "1-3": "1–3",
        "3-5": "3–5",
      },
    },
    hardest: {
      headline: "Quando o celular [mais ganha]?",
      options: {
        afterwork: "Logo depois do trabalho",
        dinner: "Na hora do jantar",
        weekend: "Fim de semana de manhã",
        bedtime: "Antes de dormir",
      },
    },
    pickups: {
      headline: "Quantas vezes você pega o celular [numa hora] com seu filho?",
      options: {
        rare: "Quase nunca",
        few: "Uma ou duas",
        often: "A cada poucos minutos",
        lost: "Perco a conta",
      },
    },
    apps: {
      headline: "Quais apps [te puxam de volta]?",
      description: "Marque quantos quiser",
      options: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        news: "Notícias",
        work: "E-mail e Slack",
        games: "Jogos",
      },
    },
    energy: {
      headline: "Quanta energia sobra [às 18h]?",
      options: {
        low: "Bateria baixa",
        okay: "Média",
        full: "De sobra",
      },
    },
    ideas: {
      headline: "Você costuma saber [do que brincar] com seu filho?",
      options: {
        often: "Quase sempre",
        sometimes: "Às vezes",
        rarely: "Raramente, me dá um branco",
      },
    },
    tried: {
      headline: "O que você [já tentou]?",
      options: {
        limits: "Limites do Tempo de Uso",
        room: "Celular em outro cômodo",
        delete: "Apagar apps",
        nothing: "Nada ainda",
      },
    },
    minutes: {
      headline: "Quantos minutos [por dia] você teria para brincar?",
      options: {
        ten: "10 minutos",
        twenty: "20 minutos",
        thirty: "30 minutos ou mais",
      },
    },
    soon: {
      headline: "Quando você quer suas noites de volta?",
      options: {
        tonight: "Hoje mesmo",
        week: "Esta semana",
        month: "Este mês",
        unsure: "Ainda não sei",
      },
    },
  },

  steps: {
    why: {
      headline: "A culpa não é sua. Os apps são [feitos para te prender].",
      body: "Cada app no seu celular tem uma equipe paga para ganhar o seu próximo minuto. Força de vontade às 18h não é uma briga justa.",
      variants: {
        ideas: {
          headline: "A culpa não é sua. Ninguém tem [ideia de brincadeira] depois de um dia cheio.",
          body: "Aí ganha o que estiver mais à mão, e o que está mais à mão é uma tela.",
        },
        asks: {
          headline: "A culpa não é sua. Criança quer [o que você está olhando].",
          body: "Um celular na sua mão é a coisa mais interessante da sala. Largue o celular, e a coisa mais interessante passa a ser você.",
        },
        both: {
          headline: "A culpa não é sua. Dois celulares deixam [a sala em silêncio].",
          body: "Cada um espera o outro largar o celular primeiro. Ninguém precisa esperar se os dois celulares pausarem ao mesmo tempo.",
        },
      },
    },
    evening: {
      headline: "Para onde [vai] uma noite.",
    },
    influence: {
      headline: "Quanto mais a gente rola o feed, mais as crianças [pedem tela].",
    },
    alternative: {
      headline: "O Oyno [não briga] com um hábito que você já tem.",
      body: "Ele te dá uma ideia melhor: uma brincadeira curta com seu filho, do tamanho da energia que sobrou.",
      variants: {
        low: {
          body: "Ele te dá uma ideia melhor: uma brincadeira curta e tranquila, que dá para fazer até com a bateria baixa.",
        },
        full: {
          body: "Ele te dá uma ideia melhor: uma brincadeira com seu filho que aproveita a energia que você ainda tem.",
        },
      },
    },
    enough: {
      headline: "Dez minutos [bastam].",
      body: "As crianças lembram de quem sentou no chão com elas, não de quanto tempo durou a brincadeira. O Oyno escolhe uma que cabe em dez minutos e na energia que sobrou.",
      variants: {
        twenty: {
          headline: "Vinte minutos [é de sobra].",
          body: "As crianças lembram de quem sentou no chão com elas, não de quanto tempo durou a brincadeira. O Oyno escolhe uma que cabe em vinte minutos e na energia que sobrou.",
        },
        thirty: {
          headline: "Meia hora é [mais do que suficiente].",
          body: "As crianças lembram de quem sentou no chão com elas, não de quanto tempo durou a brincadeira. O Oyno escolhe uma que cabe na sua noite e na energia que sobrou.",
        },
      },
    },
    plan: {
      headline: "Montando [seu plano]",
    },
    account: {
      headline: "Seu plano está pronto. [Salve] para ver o seu preço.",
    },
    paywall: {
      headline: "Volte ao [planeta do seu filho].",
    },
    checkout: {
      headline: "Dados de pagamento.",
    },
  },

  evening: {
    caption: "Uma noite de dia útil",
    hours: ["15h", "16h", "17h", "18h", "19h", "20h"],
    work: "Trabalho",
    kid: "Tempo com seu filho",
    phone: "Celular",
    summary: "{n} interrupções no tempo com seu pequeno",
  },

  influence: {
    caption: "Crianças de 2 a 5 anos que vivem pedindo tela",
    bars: ["Menos de 1,3 h", "1,3 a 3 h", "Mais de 3 h"],
    axis: "Redes sociais do pai ou da mãe por dia",
    summary: "O dobro de chance quando o pai ou a mãe passa mais de 3 horas por dia nas redes",
    source: "Domoff et al., 2021 · 383 famílias dos EUA",
  },

  alternative: {
    eyebrow: "Algo bem fácil",
    age: "3–5 anos",
    title: "Pare no quatro",
    minutes: "8 min",
    tags: {
      "lying-down": "Deitados",
      quiet: "Tranquila",
      "nothing-to-grab": "Sem material",
    },
    blurb: "Ideal para a criança que conta tudo, um quarto escuro e um adulto que só dá conta de contar até dez.",
    why: "Por que funciona",
    skills: {
      "inhibitory-control": "Autocontrole",
      "working-memory": "Memória de trabalho",
    },
  },

  compare: {
    good: {
      ten: {
        title: "Uma brincadeira de 10 minutos juntos",
        points: [
          "Toda a sua atenção",
          "Uma brincadeira, do começo ao fim",
          "Seu filho conduz, você acompanha",
          "70 minutos juntos por semana",
        ],
      },
      twenty: {
        title: "20 minutos de brincadeira juntos",
        points: [
          "Toda a sua atenção",
          "Duas brincadeiras, do começo ao fim",
          "Tempo para a favorita, duas vezes",
          "Mais de 2 horas juntos por semana",
        ],
      },
      thirty: {
        title: "30 minutos de brincadeira juntos",
        points: [
          "Toda a sua atenção",
          "Três brincadeiras, do começo ao fim",
          "Uma novidade e uma favorita",
          "3 horas e meia juntos por semana",
        ],
      },
    },
    bad: {
      title: "Uma hora só por perto",
      points: [
        "Sua cabeça está no celular",
        "Seu filho pede a tela",
        "Nada chega ao fim",
        "Ninguém vai lembrar",
      ],
    },
  },

  plan: {
    lines: {
      age: {
        "0-1": "Brincadeiras para bebês de até 1 ano",
        "1-3": "Brincadeiras para crianças de 1 a 3 anos",
        "3-5": "Brincadeiras para crianças de 3 a 5 anos",
      },
      hardest: {
        afterwork: "Tempo em família logo depois do trabalho",
        dinner: "Tempo em família na hora do jantar",
        weekend: "Tempo em família no fim de semana de manhã",
        bedtime: "Tempo em família antes de dormir",
      },
      energy: {
        low: "Brincadeiras leves para bateria baixa",
        okay: "Brincadeiras para um dia normal",
        full: "Brincadeiras mais agitadas para bateria cheia",
      },
      minutes: {
        ten: "Dez minutos por dia, celular de lado",
        twenty: "Vinte minutos por dia, celular de lado",
        thirty: "Meia hora por dia, celular de lado",
      },
    },
    fallback: {
      age: "Brincadeiras para fazer juntos",
      hardest: "Tempo em família quando o celular mais ganha",
      apps: "Pausa nos apps que te puxam de volta",
      energy: "Brincadeiras do tamanho da sua energia",
      minutes: "Alguns minutos por dia, celular de lado",
    },
    apps: "{apps} em pausa no Tempo em família",
  },

  account: {
    notConfigured: "As contas não estão configuradas neste ambiente.",
    emailPlaceholder: "voce@exemplo.com",
    passwordPlaceholder: "Senha (mínimo de 8 caracteres)",
    busy: "Só um instante…",
    noPassword: "Sem senha. Vamos te mandar um código de 6 dígitos por e-mail.",
    createAccount: "Criar conta",
    signIn: "Entrar",
    or: "ou",
    useCode: "Receber um código por e-mail",
    usePassword: "Usar senha",
    haveAccount: "Já tem conta? Entrar",
    newHere: "Primeira vez aqui? Criar conta",
    codeSent: "Código enviado para {email}.",
    continue: "Continuar",
    resendIn: "Reenviar em {seconds}s",
    resend: "Enviar novo código",
    changeEmail: "Trocar e-mail",
    facebook: "Continuar com o Facebook",
    apple: "Continuar com a Apple",
    google: "Fazer login com o Google",
  },

  authErrors: {
    link_failed: "Não deu certo. Peça um novo código.",
    not_configured: "O login não está configurado.",
    otp_expired: "Esse código expirou ou já foi usado. Peça um novo.",
    over_email_send_rate_limit: "Muitos e-mails para este endereço. Espere um minuto e tente de novo.",
    over_request_rate_limit: "Muitas tentativas. Espere um minuto e tente de novo.",
    invalid_credentials: "O e-mail e a senha não conferem.",
    email_address_invalid: "Esse e-mail não parece estar certo.",
    weak_password: "Escolha uma senha mais longa.",
    user_already_exists: "Já existe uma conta com este e-mail. Entre nela.",
    email_exists: "Já existe uma conta com este e-mail. Entre nela.",
    unknown: "Algo deu errado do nosso lado. Tente de novo em um minuto.",
  },

  legal: { terms: "Termos", privacy: "Política de Privacidade" },

  paywall: {
    pros: [
      "Seus apps pausados no Tempo em família",
      "Uma brincadeira fácil toda noite",
      "O planeta da sua família crescendo",
    ],
    timeline: [
      { title: "Hoje", detail: "Escolha seus apps e seu Tempo em família. Sua primeira brincadeira já está pronta." },
      { title: "Esta semana", detail: "Dez minutos de brincadeira juntos, toda noite, celular de lado." },
      { title: "Em um mês", detail: "Uma criança mais esperta: cada brincadeira treina autocontrole e memória." },
    ],
    monthly: "Mensal",
    yearly: "Anual",
    perMonth: "/ mês",
    perYear: "/ ano",
    perDay: "por dia",
    cancelAnytime: "Cancele quando quiser",
    billedYearly: "Cobrado uma vez por ano",
    save: "Economize {percent}",
    guarantee: "Não curtiu? Peça o reembolso total em até 14 dias.",
    continue: "Continuar",
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "Os dois planos incluem tudo?",
        answer: "Sim. O mensal e o anual liberam o mesmo Oyno: Tempo em família, todas as brincadeiras e todos os mundos. Só muda a forma de pagar.",
      },
      {
        question: "Ele pausa o celular de quem?",
        answer: "O seu. O Oyno pausa os apps que você escolher no celular em que ele está instalado, nos horários que você definir. Ele não vigia nem limita seu filho.",
      },
      {
        question: "O que acontece se eu cancelar?",
        answer: "Seu planeta e suas rodadas ficam. O Tempo em família e as brincadeiras novas param. Cancele quando quiser pelo app ou pelo link no e-mail do recibo.",
      },
      {
        question: "Posso pedir meu dinheiro de volta?",
        answer: "Sim, em até 14 dias e sem precisar dizer o motivo. Escreva para support@oyno.app usando o e-mail com que você pagou.",
      },
      {
        question: "Em quais aparelhos funciona?",
        answer: "O Oyno é um app para iPhone. Instale e entre com a conta que você criar aqui.",
      },
      {
        question: "Quem processa o pagamento?",
        answer: "A Dodo Payments, nossa revendedora oficial (merchant of record). Ela recebe o cartão, adiciona o imposto sobre vendas ou o IVA que o seu país cobra e manda o recibo por e-mail. Os dados do seu cartão nunca chegam até nós.",
      },
    ],
  },

  checkout: {
    platforms: "O Oyno é um app para iPhone. Instale e entre com esta conta. Cobrança feita pela Dodo Payments.",
    cancelAnytime: "Cancele quando quiser.",
    notConfigured: "O pagamento não está configurado neste ambiente.",
    needsAccount: "O acesso fica ligado a uma conta, então primeiro você precisa de uma.",
    createYours: "Criar a sua",
    opening: "Preparando o formulário de pagamento…",
    retry: "Não abriu. Tente de novo daqui a pouco.",
    tryAgain: "Tentar de novo",
    failed: "O formulário de pagamento não carregou. Recarregue a página para tentar de novo.",
    summary: "Resumo do pedido",
    discount: "Desconto",
    tax: "Impostos",
    total: "Total",
    renews: "Renova por {amount} / {cycle}. Cancele quando quiser.",
    cycles: { month: "mês", year: "ano" },
  },

  done: {
    eyebrow: "Tudo certo",
    headline: "Agora é só instalar [no celular]",
    body: "Instale o Oyno no seu iPhone e entre com a conta que você acabou de criar. Seu plano já está nela, então nenhuma tela de pagamento vai te esperar.",
    badge: "Baixar na App Store",
    receipt: "A Dodo Payments vai mandar o seu recibo por e-mail. Gerencie ou cancele sua assinatura quando quiser pelo app.",
  },
};
