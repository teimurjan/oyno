import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = {
  "0-1": "bebês",
  "1-3": "crianças de 1 a 3 anos",
  "3-5": "crianças de 3 a 5 anos",
};

const plural = new Intl.PluralRules("pt-BR");
const counted = (count: number, one: string, other: string) => `${count} ${plural.select(count) === "one" ? one : other}`;
const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);
const list = (items: readonly string[]) => new Intl.ListFormat("pt-BR").format(items);

const audienceOf = (ages: readonly Age[]) => {
  if (ages.length === 3) return "crianças de 0 a 5 anos";
  if (ages.join() === "1-3,3-5") return "crianças de 1 a 5 anos";
  if (ages.join() === "0-1,1-3") return "bebês e crianças de até 3 anos";
  return list(ages.map((age) => AGE_NOUN[age]));
};

export const ptBR: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "0 a 12 meses", "1-3": "1 a 3 anos", "3-5": "3 a 5 anos" },
  energy: { low: "Pouca energia", okay: "Energia média", full: "Muita energia" },

  hubs: {
    age: {
      "0-1": {
        title: "Brincadeiras para bebês de 0 a 12 meses",
        intro: "Brincadeiras de colo, cadê-achou e as primeiras conversas de vai e vem para o primeiro ano. Cada uma leva de 5 a 15 minutos e cabe num dia de cansaço.",
      },
      "1-3": {
        title: "Brincadeiras para crianças de 1 a 3 anos",
        intro: "Estátua, esconder e achar e brincadeiras de imitar para crianças de um a três anos, de 5 a 15 minutos cada, separadas pela energia que sobrou para você.",
      },
      "3-5": {
        title: "Brincadeiras para crianças de 3 a 5 anos",
        intro: "Brincadeiras com regras, jogos de memória e faz de conta que desenvolvem o autocontrole de crianças de três a cinco anos, de 5 a 15 minutos cada.",
      },
    },
    energy: {
      low: {
        title: "Brincadeiras para pais cansados",
        intro: "Brincadeiras para o fim de um dia longo, muitas para fazer sentado ou deitado. Seu filho se mexe, você conversa.",
      },
      okay: {
        title: "Brincadeiras fáceis para uma noite comum",
        intro: "Brincadeiras para quando ainda sobra um pouco de energia, mas não muita: quase nada para preparar e de 5 a 15 minutos de brincadeira.",
      },
      full: {
        title: "Brincadeiras agitadas para quando você tem energia",
        intro: "Brincadeiras que põem vocês dois para se mexer: pega-pega, pulos, construções e corridas, de 5 a 15 minutos cada.",
      },
    },
    skill: {
      "working-memory": {
        title: "Brincadeiras de memória de trabalho",
        intro: "Brincadeiras que pedem que seu filho guarde algo na cabeça e use: onde o brinquedo foi parar, o que vem depois, que palavra está faltando.",
      },
      "inhibitory-control": {
        title: "Brincadeiras de autocontrole",
        intro: "Brincadeiras que treinam parar, esperar e fazer o contrário do que o corpo quer: estátua, brincadeiras de esperar, o mestre mandou.",
      },
      "cognitive-flexibility": {
        title: "Brincadeiras de flexibilidade mental",
        intro: "Brincadeiras que trocam a regra no meio: separar por cor, depois por tamanho; grande quer dizer pequeno; agora você manda, agora sou eu.",
      },
      attention: {
        title: "Brincadeiras de foco e atenção",
        intro: "Brincadeiras que prendem a atenção do seu filho numa coisa só por um pouco mais de tempo: um brinquedo que se mexe, um som baixinho, uma página de um livro.",
      },
    },
    type: {
      peekaboo: { title: "Brincadeiras de cadê-achou", what: "Um rosto ou um brinquedo some e volta, e seu bebê aprende a esperar por isso." },
      "hide-and-find": { title: "Brincadeiras de esconder e achar", what: "Você esconde um brinquedo enquanto seu filho olha, e ele lembra onde foi parar." },
      "anticipation-rhyme": { title: "Parlendas com surpresa", what: "Uma parlenda vai crescendo até uma cócega ou uma pausa, e seu filho aprende a esperar por ela." },
      imitation: { title: "Brincadeiras de imitar", what: "Você imita seu filho e seu filho imita você, um de cada vez." },
      "pretend-play": { title: "Brincadeiras de faz de conta", what: "Um copo vazio vira chá e o ursinho ganha um dia inteiro, e seu filho guarda uma história na cabeça." },
      "fingerplay-song": { title: "Músicas com gestos", what: "Músicas com movimentos de mão e paradas de repente, cantadas devagar para dar tempo de acompanhar." },
      conversation: { title: "Brincadeiras de conversa", what: "Você dá nome ao que seu filho olha e quer, e deixa espaço para ele responder." },
      "vocal-turns": { title: "Brincadeiras de balbucio a dois", what: "Você e seu bebê se revezam no balbucio, como numa conversa de verdade." },
      "joint-attention": { title: "Brincadeiras de olhar e apontar", what: "Você e seu filho olham para a mesma coisa, e os olhos dele aprendem a seguir os seus." },
      "turn-taking": { title: "Brincadeiras de revezar", what: "Um brinquedo ou uma bola vai e volta, e cada um espera a sua vez." },
      building: { title: "Brincadeiras de construir", what: "Empilhar, derrubar e fazer túneis, um passo cuidadoso de cada vez." },
      "stop-go": { title: "Brincadeiras de estátua", what: "Brincadeiras de parar: mexa no “vai”, congele no “para”." },
      tempo: { title: "Brincadeiras de rápido e devagar", what: "O mesmo movimento feito rápido e depois devagar, no seu sinal." },
      "simon-says": { title: "Brincadeiras de “o mestre mandou”", what: "Pegue no nariz, mas só quando a regra mandar." },
      opposites: { title: "Brincadeiras de opostos", what: "Grande quer dizer pequeno e dia quer dizer noite, e seu filho diz o contrário do que vê." },
      "sorting-switch": { title: "Brincadeiras de separar", what: "Separe as coisas de um jeito, depois troque a regra e separe de outro." },
      "working-memory-list": { title: "Brincadeiras de memória", what: "Guarde uma listinha na cabeça, na ordem, e repita." },
      waiting: { title: "Brincadeiras de esperar", what: "Espere alguns segundos por algo bom, com uma brincadeira para ajudar na espera." },
      "motor-control": { title: "Brincadeiras em câmera lenta", what: "Movimentos lentos e cuidadosos com uma regra: na ponta dos pés, na corda bamba, só com um dedo." },
      "motor-skill": { title: "Brincadeiras de movimento", what: "Pular, engatinhar, jogar e pegar." },
      rhythm: { title: "Brincadeiras de ritmo", what: "Bata palmas ou batuque um ritmo e repita de volta." },
      storytelling: { title: "Brincadeiras de contar histórias", what: "Contem uma história juntos, na ordem, com seu filho como herói." },
      reading: { title: "Brincadeiras de leitura", what: "Um livro ilustrado com uma missão: achar, adivinhar ou virar a página na hora certa." },
      "quiet-focus": { title: "Brincadeiras calmas de foco", what: "Fique quietinho, escute e respire, com uma pequena tarefa para prender a atenção." },
      "rule-game": { title: "Brincadeiras com regras", what: "Brincadeiras clássicas com uma regra para lembrar, como a batatinha frita 1, 2, 3." },
      planning: { title: "Brincadeiras de planejar", what: "Primeiro pensar, depois fazer: mirar, planejar um caminho, dizer o plano em voz alta." },
      "quiet-voice": { title: "Brincadeiras de cochicho", what: "Cochichar, andar na ponta dos pés e falar baixinho de propósito." },
    },
    tag: {
      "nothing-to-grab": "Brincadeiras sem brinquedo",
      "lying-down": "Brincadeiras para fazer deitado",
      sitting: "Brincadeiras para fazer sentado",
      standing: "Brincadeiras em pé",
      "on-your-lap": "Brincadeiras de colo",
      quiet: "Brincadeiras silenciosas",
      "one-room": "Brincadeiras para um cômodo só",
      hallway: "Brincadeiras no corredor",
      bedtime: "Brincadeiras para a hora de dormir",
      mealtime: "Brincadeiras para a hora da comida",
      bath: "Brincadeiras para a hora do banho",
      "on-a-walk": "Brincadeiras para o passeio",
      "in-the-car": "Brincadeiras para o carro",
      stairs: "Brincadeiras na escada",
      window: "Brincadeiras na janela",
      socks: "Brincadeiras com meias",
      cushions: "Brincadeiras com almofadas",
      chairs: "Brincadeiras com cadeiras",
      "a-cup": "Brincadeiras com um copo",
      "a-cloth": "Brincadeiras com um paninho",
      "a-book": "Brincadeiras com um livro",
      "a-mirror": "Brincadeiras com espelho",
      "a-ball": "Brincadeiras com bola",
      "a-toy": "Brincadeiras com um brinquedo só",
      stacking: "Brincadeiras de empilhar",
      crayons: "Brincadeiras com giz de cera",
      lights: "Brincadeiras com luzes",
      music: "Brincadeiras com música",
      singing: "Brincadeiras cantadas",
    },
    audience: audienceOf,
    titleFor: (title, audience) => `${title} para ${audience}`,
    countLine: (count, title, audience) =>
      `${count} ${lowerFirst(title)} para ${audience}, de 5 a 15 minutos cada, com no máximo três passos.`,
  },

  games: {
    crumb: "Brincadeiras",
    title: "Brincadeiras para bebês e crianças de 1 a 5 anos",
    intro: (count) =>
      `${count} brincadeiras para crianças de 0 a 5 anos, cada uma de 5 a 15 minutos e com no máximo três passos. Todas se apoiam num estudo publicado e num guia do Center on the Developing Child de Harvard ou da Academia Americana de Pediatria.`,
    sections: {
      age: "Por idade",
      energy: "Pela energia que sobrou",
      skill: "Pela habilidade que desenvolve",
      type: "Por tipo de brincadeira",
      tag: "Por onde você está e o que tem à mão",
    },
    minutes: (minutes) => counted(minutes, "minuto", "minutos"),
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Por que funciona",
    moreOf: (typeTitle) => `Mais ${lowerFirst(typeTitle)}`,
    allOf: (typeTitle) => `Todas as ${lowerFirst(typeTitle)}`,
    more: "Mais brincadeiras",
    researchBehind: "A pesquisa por trás destas brincadeiras",
    metaTitle: ({ title, minutes, age }) => `${title}: brincadeira de ${minutes} minutos para ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${counted(steps, "passo", "passos")}, ${counted(minutes, "minuto", "minutos")}, treina ${list(skills.map(lowerFirst))}.`,
  },

  research: {
    design: { rct: "Ensaio randomizado", experiment: "Experimento", longitudinal: "Estudo longitudinal", observational: "Estudo observacional" },
    study: "Estudo",
    guide: "Guia",
  },

  pitch: {
    title: "O Oyno te dá uma brincadeira assim toda noite",
    body: "Ele escolhe uma brincadeira para a idade do seu filho e a energia que sobrou para você, pausa os apps que você escolher enquanto vocês brincam e faz crescer o pequeno planeta da sua família a cada rodada.",
    cta: "Começar",
  },

  articles: {
    guide: {
      crumb: "Guias",
      title: "Guias para pais de crianças de 0 a 5 anos",
      intro: "Leituras longas sobre como a brincadeira desenvolve o foco e o autocontrole, e sobre largar o celular. Cada afirmação tem link para o estudo por trás dela.",
    },
    post: {
      crumb: "Blog",
      title: "O blog do Oyno",
      intro: "Leituras curtas para pais cansados: brincadeiras para hoje à noite, o que a pesquisa diz e como tomar a noite de volta do celular.",
    },
    tryThese: "Experimente estas brincadeiras",
    sources: "Fontes",
    byline: (name) => `${name}, criador do Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "De 6 a 18 meses: brincadeiras de colo com uma surpresa esperada, brincadeiras de esconder, brincadeiras de imitar e copiar, faz de conta simples, músicas com gestos e conversa sobre o que o bebê nota.",
        "1-3": "De 18 a 36 meses: dança da estátua e músicas de parar e começar, cantigas com movimentos, siga o líder, desafios físicos, conversa e histórias com “o que você vai fazer agora?”, conversa sobre sentimentos, combinar pares e separações bobas, quebra-cabeças e faz de conta conduzido pela criança.",
        "3-5": "De 3 a 5 anos: faz de conta com plano de brincadeira, contar histórias e encená-las, leitura, movimento no ritmo e cantigas de roda, circuitos de obstáculos e equilíbrio, posturas de ioga com respiração lenta, dançar rápido e depois devagar, dança da estátua, separar com uma regra trocada, bingo dos opostos, músicas cumulativas, cozinhar com espera e quebra-cabeças.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "De 5 a 7 anos: dança da estátua, dança das cadeiras, Red Light Green Light (batatinha frita 1, 2, 3), Mother May I (mamãe, posso ir?), What Time Is It Mr Fox, o jogo da palavra mágica, Simon Says (o mestre mandou) e faça o que eu digo, não o que eu faço, brincadeiras de imitar, chamada e resposta, músicas cumulativas, Packing for a Picnic (como “fui à feira e comprei…”), jogo da memória, ritmos com palmas, ioga, adivinhe minha regra e I Spy.",
      },
    },
    "brain-play": {
      says: {
        "0-1": "Para 6 e 9 meses: cadê-achou e brincadeiras de esconder, Trot Trot to Boston, Pat-a-Cake, Dickory Dean, Baby See Baby Do, revezar para derrubar um brinquedo com um “bum!”, brincadeiras de conversa e músicas com gestos.",
        "1-3": "De 12 meses a 3 anos: Toddler See Toddler Do, explorar por cima de almofadas no chão, telefone e tarefas de casa de faz de conta, esvaziar e encher, esconde-esconde simples, o jogo da memória dos três copos, combinar e separar, músicas agitadas, dança da estátua, siga o líder, contar, quebra-cabeças e Be the Narrator (seja o narrador).",
        "3-5": "De 4 a 7 anos: dança da estátua com posições, Simon Says (o mestre mandou), Red Light Green Light (batatinha frita 1, 2, 3), Duck Duck Goose, What Time Is It Mr Fox, I Spy, bingo dos opostos e Continue the Story (continue a história).",
      },
    },
    "serve-return": {
      says: {
        "0-1": "Perceba o saque e compartilhe o foco da criança, devolva com apoio, dê nome ao que a criança vê ou sente, reveze e espere, e pratique fins e começos, com o cadê-achou como exemplo.",
        "1-3": "Perceba o saque e compartilhe o foco da criança, devolva com apoio, dê nome ao que a criança vê ou sente, reveze e espere, e pratique fins e começos, com o cadê-achou como exemplo.",
      },
    },
    "aap-play": {
      says: {
        "0-1": "A brincadeira cresce do sorriso social para o saque e devolução, o cadê-achou e as palminhas, e os pediatras incentivam a leitura em voz alta junto com a brincadeira desde o nascimento.",
        "1-3": "Brincadeira com objetos que se torna simbólica, habilidades motoras básicas, revezamento e o apoio de um adulto que gira uma peça do quebra-cabeça para ajudar.",
        "3-5": "Faz de conta e brincadeira social com regras, brincadeira física e de luta de mentirinha, e jogos cujas regras as crianças negociam entre si.",
      },
    },
    "diamond-1985": {
      studied: "Bebês de 7 meses e meio a 12 meses, o primeiro mês da faixa de 1 a 3 anos, pegando um brinquedo escondido sob uma de duas coberturas depois de uma pequena espera, a tarefa A-não-B.",
    },
    "reznick-2004": { studied: "Bebês de 5 meses e meio a 6 meses e meio achando um brinquedo depois de uma pequena espera, a memória de trabalho mais precoce." },
    "haith-1988": { studied: "Bebês de 3 meses e meio aprendendo uma sequência de imagens à esquerda e à direita e olhando antes para onde a próxima imagem ia aparecer." },
    "rochat-1999": { studied: "Bebês de 2 a 6 meses reagindo quando o ritmo e a estrutura do cadê-achou e do balbucio de vai e vem eram quebrados." },
    "yu-smith-2016": { studied: "Crianças de um ano mantendo a atenção num brinquedo por mais tempo quando o pai ou a mãe olhava para o mesmo brinquedo e dizia o nome dele." },
    "cuevas-bell-2014": { studied: "A atenção focada aos 5 meses previu as funções executivas entre 24 e 48 meses." },
    "nakata-trehub-2004": { studied: "Bebês de 6 meses prestando atenção por mais tempo à mãe cantando do que à mãe falando." },
    "ross-lollis-1987": { studied: "Bebês de 9 a 18 meses em brincadeiras de revezar, como dar e pegar e cadê-achou, sinalizando quando o adulto perdia a vez." },
    "landry-2006": { studied: "Orientar pais a responder com sensibilidade a bebês de 6 a 10 meses melhorou a atenção dos bebês e a capacidade de resolver problemas sozinhos." },
    "bernier-2010": { studied: "Uma fala sensível e atenta aos pensamentos do bebê e o apoio à autonomia aos 12 a 15 meses previram as funções executivas aos 18 e aos 26 meses." },
    "mendelsohn-2018": { studied: "Orientar a leitura em voz alta e o faz de conta do nascimento aos 3 anos reduziu a hiperatividade e os problemas de atenção aos 4 anos e meio." },
    "hughes-ensor-2005": { studied: "Crianças de dois anos no Spin the Pots, lembrando quais potes já foram esvaziados, e num Baby Stroop, chamando o copo grande de bebê." },
    "kochanska-2000": { studied: "Crianças de 22 a 45 meses esperando por um petisco, andando devagar sobre uma linha, cochichando, parando e começando num sinal e revezando numa torre." },
    "vallotton-ayoub-2011": { studied: "O vocabulário e a fala de crianças pequenas dos 14 aos 36 meses previram o crescimento da autorregulação." },
    "hammond-2012": { studied: "O apoio dos pais, só a ajuda necessária e o “e agora?”, durante um quebra-cabeça aos 2 a 3 anos previu as funções executivas aos 3 a 4 anos." },
    "williams-2015": { studied: "Cantar, dançar e brincar com música juntos em casa aos 2 a 3 anos previu a atenção e a autorregulação aos 5 anos." },
    "carlson-2005": { studied: "Crianças de 2 a 6 anos em tarefas graduadas por idade: espera pelo lanche e pelo presente, separação invertida, urso e dragão, Simon says (o mestre mandou), cochicho, dia e noite, menos é mais." },
    "zelazo-2006": { studied: "Crianças de 3 a 5 anos separando cartas por cor e depois mudando para forma, o Dimensional Change Card Sort." },
    "gerstadt-1994": { studied: "Crianças de 3 anos e meio a 7 anos dizendo “noite” para uma carta de sol e “dia” para uma carta de lua." },
    "ponitz-2009": { studied: "Crianças de 4 a 6 anos tocando os pés quando ouviam “cabeça” e a cabeça quando ouviam “pés”, o que previu o desempenho no jardim de infância." },
    "tominey-mcclelland-2011": { studied: "Pré-escolares de 3 a 5 anos que brincaram de Red Light Purple Light em roda, estátua com regras trocadas, batidas de tambor e regência melhoraram a autorregulação." },
    "schmitt-2015": { studied: "Pré-escolares do Head Start que brincaram de Red Light Purple Light melhoraram a autorregulação e a prontidão escolar." },
    "thibodeau-2016": { studied: "Crianças de 3 a 5 anos em cinco semanas de faz de conta fantasioso melhoraram a memória de trabalho e a inibição." },
    "elias-berk-2002": { studied: "O faz de conta sociodramático complexo de pré-escolares previu a autorregulação mais tarde." },
    "bugos-demarie-2017": { studied: "Crianças de 4 a 6 anos num programa curto de música, com canto, ritmo e instrumentos, melhoraram as funções executivas." },
    "razza-2015": { studied: "Pré-escolares que fizeram ioga com atenção plena, posturas mantidas e respiração lenta, melhoraram a autorregulação." },
    "schmitt-2018": { studied: "Pré-escolares em brincadeira semiestruturada com blocos, construindo a partir de planos e imagens, melhoraram as funções executivas." },
    "mulvey-2018": { studied: "Pré-escolares num programa de habilidades motoras, com pular, saltar, jogar e pegar, melhoraram as funções executivas." },
    "thorell-2009": { studied: "Crianças de 4 a 5 anos treinadas em tarefas de memória de trabalho melhoraram a memória de trabalho e a atenção em tarefas não treinadas." },
    "lind-2017": { studied: "Orientar pais de bebês de 6 a 21 meses a seguir a iniciativa da criança, responder e se encantar com ela melhorou a flexibilidade mental aos 48 meses." },
    "garon-2014": { studied: "Crianças de 18 a 67 meses numa bateria de tarefas de memória de trabalho, inibição e alternância que captou as diferenças de idade." },

    "tronick-1978": { studied: "Bebês de 1 a 4 meses cujas mães mantinham o rosto parado e sem resposta ficaram desconfiados e se retraíram em poucos minutos, o experimento do rosto imóvel (still face)." },
    "radesky-2014": { studied: "Pesquisadores observaram 55 cuidadores comendo com crianças pequenas em lanchonetes de fast food; a maioria usou o celular durante a refeição, e os mais absortos muitas vezes responderam tarde ou com rispidez aos chamados da criança." },
    "mcdaniel-radesky-2018": { studied: "Pais de crianças pequenas que relataram mais interrupções do celular durante o tempo em família também relataram mais problemas de comportamento no filho." },
    "myruski-2018": { studied: "Bebês de 7 a 24 meses ficaram aflitos quando a mãe se voltou para o celular numa tarefa de rosto imóvel, e aqueles cujas mães usavam mais aparelhos em casa se recuperaram menos." },
    "kushlev-dunn-2019": { studied: "Pais num museu de ciências a quem se pediu que usassem muito o celular se sentiram mais distraídos e menos conectados aos filhos do que os pais a quem se pediu que usassem pouco." },
    "andrews-2015": { studied: "Jovens adultos cujos celulares registravam o uso pegavam o aparelho cerca de 85 vezes por dia e o usavam por cerca de cinco horas, mais ou menos o dobro do que estimavam." },
    "mcdaniel-coyne-2016": { studied: "143 mulheres casadas ou morando com o parceiro disseram numa pesquisa que os aparelhos muitas vezes interrompiam o tempo com o parceiro, o que os autores chamaram de technoference, e as que relataram mais disso relataram mais conflitos por causa da tecnologia e menos satisfação com a relação." },
    "chotpitayasunondh-douglas-2016": { studied: "Um estudo sobre phubbing, esnobar alguém num momento social olhando para o celular em vez de conversar com a pessoa, descobriu que quem fazia mais phubbing, e quem sofria mais com ele, o via como mais normal." },
    "reed-2017": { studied: "38 mães ensinaram duas palavras novas aos filhos de 2 anos, e as crianças aprenderam a palavra ensinada sem pausa, mas não a interrompida por uma ligação, embora cada palavra tenha sido dita o mesmo número de vezes." },
    "vanden-abeele-2020": { studied: "Pesquisadores observaram 53 pais de crianças de 0 a 5 anos em salas de espera e parquinhos: 23 usaram o celular, a chance de responder a um chamado da criança foi cinco vezes menor enquanto estavam nele, uma olhada rápida não fez diferença, e estar muito absorto em outras tarefas teve mais ou menos o mesmo efeito." },
    "radesky-2015": { studied: "Numa tarefa filmada em laboratório com 225 mães e seus filhos de 6 anos, 23% das mães usaram um aparelho celular sem que ninguém pedisse, e as que usaram tiveram menos interações com a criança, sobretudo as não verbais." },
    "mcdaniel-radesky-2018b": { studied: "183 casais com um filho de 0 a 5 anos responderam a questionários por seis meses: o comportamento mais difícil da criança previu mais interferência da tecnologia por meio do estresse parental, e essa interferência muitas vezes previu mais comportamentos externalizantes depois." },
    "konrad-2021": { studied: "Mães de crianças de 20 a 22 meses que interromperam a brincadeira por dois minutos para preencher um questionário, no celular ou no papel, ficaram menos responsivas, e os filhos fizeram mais chamados por atenção." },
    "dwyer-2018": { studied: "Mais de 300 pessoas numa refeição em restaurante com amigos ou família, orientadas por sorteio a deixar o celular na mesa ou guardá-lo, se sentiram mais distraídas e aproveitaram menos a refeição com o celular à vista." },
    "stothart-2015": { studied: "Só as notificações do celular, sem ninguém tocar no aparelho, atrapalharam o desempenho numa tarefa de atenção mais ou menos tanto quanto atender uma ligação ou mandar mensagem." },
    "oulasvirta-2012": { studied: "Três estudos com usuários de smartphone encontraram um hábito de checagem, olhadas breves e repetidas em conteúdos de acesso rápido, que os usuários sentiam mais como um incômodo do que como um vício." },
    "wood-2002": { studied: "Em dois estudos com diários de registro a cada hora, as pessoas que faziam algo que repetiam quase todo dia no mesmo lugar tendiam a pensar em outra coisa e sentiam menos estresse do que em ações novas." },
    "lally-2010": { studied: "Voluntários que repetiram um novo comportamento diário no mesmo contexto por 12 semanas levaram de 18 a 254 dias para chegar ao pico de automatismo, e pular um dia não afetou isso de forma significativa." },
    "fitz-2019": { studied: "237 pessoas foram sorteadas para receber notificações do celular como sempre, agrupadas três vezes por dia ou nunca: o grupo com notificações agrupadas se sentiu mais atento, de melhor humor, com mais controle sobre o celular e menos estressado, e o grupo sem notificações se sentiu mais ansioso." },
  },
};
