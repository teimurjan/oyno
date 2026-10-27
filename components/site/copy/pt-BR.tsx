import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("pt-BR", page);

const UPDATED = "9 de outubro de 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const ptBR: SiteCopy = {
  nav: {
    pricing: "Preços",
    support: "Suporte",
    privacy: "Privacidade",
    terms: "Termos",
    switchLabel: "Mudar idioma",
    start: "Começar",
  },

  home: {
    meta: {
      title: "Oyno: largue o celular e brinque por dez minutos",
      description:
        "O Oyno pausa seus apps na hora de ficar com seu filho e te dá uma brincadeira fácil por dia. Cada rodada faz crescer o pequeno planeta da sua família.",
    },
    eyebrow: "Para pais de crianças de 0 a 5 anos",
    headline: (
      <>
        O celular rouba suas noites. <span className="hl">Recupere dez minutos.</span>
      </>
    ),
    sub: "O Oyno pausa seus apps no Tempo em família e te dá uma brincadeira fácil, do tamanho da energia que sobrou. Cada rodada faz crescer o planeta da sua família.",
    cta: "Começar",
    planet: {
      open: "Abrir seus mundos",
      close: "Fechar mundos",
      previous: "Mundo anterior",
      next: "Próximo mundo",
      yours: "Agora é seu",
      unlocksAt: "Desbloqueia no nível {n} da florada",
      hint: "Toque no planeta",
      worlds: {
        earth: "Terra",
        meadow: "Campina",
        ember: "Brasa",
        blossom: "Flor",
        lagoon: "Lagoa",
        dune: "Duna",
        frost: "Geada",
        lavender: "Lavanda",
        moss: "Musgo",
        honey: "Mel",
        cloud: "Nuvem",
        coral: "Coral",
        rose: "Rosa",
        pebble: "Pedrinha",
        orchard: "Pomar",
        aurora: "Aurora",
        clay: "Barro",
        mint: "Hortelã",
        twilight: "Crepúsculo",
        poppy: "Papoula",
        pearl: "Pérola",
        canyon: "Cânion",
        rain: "Chuva",
        cedar: "Cedro",
        sunlit: "Sol",
        berry: "Amora",
        glacier: "Geleira",
        marigold: "Calêndula",
        dream: "Sonho",
        hearth: "Lareira",
        home: "Lar",
      },
    },
    proof: {
      heading: "Uma noite com o Oyno",
      sub: "Sem depender de força de vontade. O celular já está pausado antes de você ter que decidir.",
      previous: "Tela anterior",
      next: "Próxima tela",
      steps: [
        {
          shot: "/screenshots/pt-BR/screens/kidhours.webp",
          title: "Começa o Tempo em família",
          body: "No horário que você definiu, os apps que você escolheu entram em pausa. Telefone, Mensagens e Mapas continuam liberados.",
        },
        {
          shot: "/screenshots/pt-BR/screens/low.webp",
          title: "Uma brincadeira fácil",
          body: "Conte ao Oyno quanta bateria ainda te resta. Ele te dá uma brincadeira de dez minutos, sem nada para preparar.",
        },
        {
          shot: "/screenshots/pt-BR/screens/growth.webp",
          title: "Brincadeira que desenvolve",
          body: "Cada brincadeira treina foco, memória ou autocontrole. Crescimento mostra o que vocês praticaram juntos, habilidade por habilidade.",
        },
        {
          shot: "/screenshots/pt-BR/screens/worlds.webp",
          title: "O planeta cresce",
          body: "Quando o timer acaba, seu filho toca no planeta. Ele floresce, e a cada poucas rodadas um novo mundo se abre.",
        },
        {
          shot: "/screenshots/pt-BR/screens/keepsake.webp",
          title: "Uma lembrança por noite",
          body: "Cada rodada deixa uma lembrança perto do planeta. No domingo, o planeta escreve a carta da semana para vocês.",
        },
      ],
    },
    author: {
      heading: "Por que criei o Oyno",
      paragraphs: [
        "Sem a minha filha, o Oyno não existiria. E também não existiria se os celulares não tivessem ficado tão bons em nos prender.",
        "Trabalho o dia inteiro. Aí chego em casa e pego o celular. É só um segundo. E eu me odeio por esse segundo.",
        "Minha filha vê. Ela acha que é assim que as coisas são. Não é.",
        "Tentei os bloqueadores. Apaguei as redes sociais. O hábito ficou. Eu pegava o celular, via a tela bloqueada e largava. Para mim, não era nada. Para ela, era eu no celular de novo.",
        "Então parei de brigar com o hábito. Dei a ele algo melhor para fazer.",
        "Oyno quer dizer “brinque” na língua do país onde nasci. Agora, quando pego o celular, ele me dá uma brincadeira para fazer com ela. É divertido, e ajuda o cérebro dela a crescer.",
        "Levou meses. Não é mais um bloqueador. Não é exercício de respiração nem meditação. São dez minutos com seu filho, numa brincadeira que tem pesquisa por trás.",
      ],
      name: "Tim",
      role: "Criador do Oyno",
      photoAlt: "Um adulto e uma menininha no chão da sala, com um planeta de massinha que brilha",
    },
    plan: {
      eyebrow: "Um plano, tudo incluído",
      pitch: "Tempo em família, uma brincadeira nova toda noite e todos os mundos que sua família desbloquear. Cancele quando quiser.",
      monthly: "Mensal",
      yearly: "Anual",
      cta: "Começar",
      appNote: "O Oyno é um app para iPhone. Assine aqui ou no app e depois entre com a mesma conta.",
    },
    closer: {
      heading: "Hoje à noite, dez minutos.",
      body: "Leva um minuto para configurar, e a primeira brincadeira fica pronta antes do jantar.",
    },
  },

  pricing: {
    meta: {
      title: "Preços | Oyno",
      description: "Quanto custa o Oyno, no site e na App Store.",
    },
    eyebrow: "Preços",
    heading: "Um plano. Duas formas de pagar.",
    intro: "As duas liberam o mesmo Oyno. Entre pela porta que estiver mais perto.",
    web: {
      eyebrow: "No site",
      perMonth: " / mês",
      orYearly: (yearly) => `ou ${yearly} / ano`,
      cta: "Começar",
      note: "Cobrança feita pela Dodo Payments, nossa revendedora oficial (merchant of record). Os preços incluem os impostos cobrados no seu país. Cancele quando quiser.",
    },
    app: {
      eyebrow: "Na App Store",
      headline: "Grátis por 3 dias",
      sub: "Depois, a Apple cobra o preço da App Store.",
      note: "O teste grátis é a oferta introdutória da Apple e é gerenciado nas assinaturas da sua Conta Apple.",
    },
    body: (
      <>
        <h2>O que está incluído</h2>
        <p>
          Tempo em família (os apps que você escolher entram em pausa no seu celular nos horários
          que você definir), uma brincadeira nova toda noite, o timer e todos os mundos que sua
          família desbloquear. Não existe plano gratuito nem cobrança extra dentro da assinatura.
        </p>
        <h2>Reembolsos</h2>
        <p>
          Assinou pelo site e não curtiu? Escreva para {SUPPORT} em até 14 dias após o pagamento
          e devolvemos o valor total. Compras na App Store são reembolsadas pela Apple em{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Suporte | Oyno",
      description: "Como falar com a gente e respostas para as dúvidas mais comuns.",
    },
    eyebrow: "Suporte",
    heading: "Como podemos ajudar?",
    intro: (
      <>
        Escreva para{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Quem responde é uma pessoa de verdade, geralmente em até um dia.
      </>
    ),
    body: (
      <>
        <h2>Um app que pausei ainda abre</h2>
        <p>
          Confira se o acesso ao Tempo de Uso está ativado para o Oyno em{" "}
          <strong>Ajustes → Tempo de Uso</strong> e se o app está na sua lista em{" "}
          <strong>Tempo em família → Pausados</strong>. Apps instalados depois que você montou a
          lista só entram nela quando você os adiciona.
        </p>
        <h2>Preciso do celular durante o Tempo em família</h2>
        <p>
          Telefone, Mensagens e Mapas nunca são pausados. Para todo o resto, toque e segure{" "}
          <strong>Agora não</strong>: seus apps abrem por 20 minutos e depois o Tempo em família
          volta.
        </p>
        <h2>Assinei pelo site. Como eu entro?</h2>
        <p>
          Instale o Oyno pela App Store e entre do mesmo jeito que entrou aqui: com o mesmo e-mail
          ou pela Apple, pelo Google ou pelo Facebook. A assinatura já está na sua conta.
        </p>
        <h2>Como eu cancelo?</h2>
        <p>
          No app: <strong>Perfil → Gerenciar assinatura</strong>. Uma assinatura feita pelo site
          também pode ser cancelada pelo link no recibo da Dodo Payments. Uma assinatura da App
          Store é cancelada nas assinaturas da sua Conta Apple.
        </p>
        <h2>Como excluo minha conta?</h2>
        <p>
          No app: <strong>Perfil → Excluir conta</strong>. Veja{" "}
          <Link href={`${to("privacy")}#delete`}>o que isso remove</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Privacidade | Oyno",
      description: "O que o Oyno armazena, o que ele nunca vê e como apagar tudo.",
    },
    eyebrow: "Privacidade",
    heading: "Suas noites são só suas",
    updatedLabel: "Última atualização",
    updated: UPDATED,
    body: (
      <>
        <p>
          O Oyno é operado por Teimur Gasanov. É um app para iPhone que pausa os apps que um pai
          ou uma mãe escolhe, nos horários que essa pessoa define, e sugere brincadeiras curtas
          para fazer com a criança. Esta página descreve o que o app e este site armazenam, por
          quê, e como remover esses dados.
        </p>

        <h2>O que armazenamos</h2>
        <h3>Sua conta</h3>
        <p>
          Um endereço de e-mail e, se você entrar com Apple, Google ou Facebook, o identificador
          que esse provedor nos fornece, junto com o nome e o endereço de e-mail que ele
          compartilha. Se você ocultar seu e-mail ao iniciar sessão com a Apple, só vemos o
          endereço de retransmissão.
        </p>
        <h3>Suas rodadas</h3>
        <p>
          Cada rodada que vocês fazem, quanto tempo ela durou e qual foi a brincadeira ficam no
          seu celular. Para que um celular novo ou uma reinstalação mantenha o seu planeta,
          guardamos dois totais com a sua conta: quantas rodadas vocês fizeram e quantos minutos. Em nenhum
          desses dados aparece o nome de uma criança: o Oyno nunca pede o nome, a idade ou a foto
          do seu filho. As respostas que você dá às perguntas deste site (por exemplo, uma faixa
          etária) são armazenadas com o registro da sua assinatura, para sabermos quais perguntas
          levam a brincadeiras que as pessoas continuam fazendo.
        </p>
        <h3>Sua assinatura</h3>
        <p>
          Se você assinou no app: o identificador da transação da Apple, o produto, a data de
          expiração e se a assinatura está ativa. Se você assinou pelo site: a Dodo Payments é a
          revendedora oficial (merchant of record) e guarda os dados do seu cartão, que nunca
          vemos. Armazenamos os identificadores de cliente e de assinatura que a Dodo nos fornece,
          o status e o fim do período pago.
        </p>
        <h3>Análise de uso do produto</h3>
        <p>
          Registramos quais telas são abertas e quais ações são realizadas (uma rodada iniciada,
          uma tela de assinatura exibida) por meio da Amplitude, para descobrir onde o app é
          confuso.
        </p>
        <h3>Publicidade</h3>
        <p>
          Este site carrega o pixel da Meta para medir quais anúncios trazem pessoas que assinam.
          Quando uma assinatura começa, enviamos à Meta um endereço de e-mail com hash, para que a
          conversão possa ser associada. O hash é gerado no nosso servidor, nunca no seu
          navegador.
        </p>

        <h2>O que nunca sai do seu celular</h2>
        <p>
          O Oyno usa a API do Tempo de Uso da Apple para pausar apps. A Apple entrega ao app
          tokens opacos dos apps que você escolhe, e não os nomes deles, e esses tokens ficam no
          aparelho. Nunca vemos quais apps você usa, por quanto tempo os usa, sua navegação, suas
          mensagens, sua localização, seus contatos ou suas fotos.
        </p>

        <h2>Quem mais tem acesso</h2>
        <ul>
          <li>
            <strong>Supabase</strong>: o banco de dados e o serviço de login.
          </li>
          <li>
            <strong>Vercel</strong>: hospedagem deste site e da API com que o app se comunica.
          </li>
          <li>
            <strong>Dodo Payments</strong>: revendedora oficial (merchant of record) das
            assinaturas feitas pelo site.
          </li>
          <li>
            <strong>Amplitude</strong>: análise de uso do produto.
          </li>
          <li>
            <strong>Resend</strong>: os códigos de login que enviamos por e-mail.
          </li>
          <li>
            <strong>Meta</strong>: mensuração de anúncios, como descrito acima.
          </li>
        </ul>
        <p>Não vendemos seus dados nem os compartilhamos com corretores de dados.</p>

        <h2 id="delete">Como excluir tudo</h2>
        <p>
          No app: <strong>Perfil → Excluir conta</strong>. Isso apaga sua conta, os totais que
          guardamos e as rodadas no seu celular, imediatamente, e não pode ser desfeito.
        </p>
        <p>
          Entrou com o Facebook? Você também pode remover o Oyno em{" "}
          <strong>Configurações e privacidade → Configurações → Apps e sites</strong> no Facebook.
          Isso impede que o Facebook compartilhe qualquer outra coisa com a gente; o passo acima é
          o que apaga seus dados.
        </p>
        <p>
          Excluir sua conta não cancela a assinatura. Cancele primeiro (veja{" "}
          <Link href={to("support")}>Suporte</Link>) e depois exclua. Ou escreva para {SUPPORT} e
          nós fazemos as duas coisas e confirmamos.
        </p>

        <h2>Seus direitos</h2>
        <p>
          Você pode acessar, corrigir, exportar e eliminar seus dados, e se opor ao tratamento
          deles. Escreva para {SUPPORT} para qualquer coisa que o app não faça diretamente.
        </p>

        <h2>Crianças</h2>
        <p>
          O Oyno é para pais e mães. As contas são para adultos, e o app não coleta nada da
          criança com quem ele ajuda você a brincar, nem sobre ela.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Termos | Oyno",
      description: "Os termos de uso do Oyno e da assinatura vendida neste site.",
    },
    eyebrow: "Termos de serviço",
    heading: "Termos",
    updatedLabel: "Última atualização",
    updated: UPDATED,
    body: (
      <>
        <p>
          Estes termos se aplicam ao app Oyno e a este site, ambos operados por Teimur Gasanov. Ao
          usar qualquer um deles, você aceita estes termos.
        </p>

        <h2>O que é o Oyno</h2>
        <p>
          Uma ferramenta que pausa os apps que você escolhe no seu próprio iPhone durante os
          horários que você define, sugere brincadeiras curtas para fazer com seu filho e mantém um
          registro das rodadas que vocês fazem. As brincadeiras são sugestões. Você decide se uma
          delas é segura e adequada para seu filho e para o seu espaço, e você a supervisiona.
        </p>

        <h2>Sua conta</h2>
        <p>
          Você precisa de uma conta para que uma assinatura comprada pelo site encontre você no
          app. Não compartilhe seus dados de login. Você pode excluir a conta a qualquer momento em{" "}
          <strong>Perfil → Excluir conta</strong>.
        </p>

        <h2>Assinaturas</h2>
        <h3>Compradas neste site</h3>
        <p>
          O pagamento é recebido pela Dodo Payments, a revendedora oficial (merchant of record),
          cujos termos se aplicam à transação. As assinaturas são renovadas automaticamente no
          intervalo que você escolheu, até que você cancele. Os preços são mostrados na sua moeda
          antes do pagamento e incluem qualquer imposto que a Dodo seja obrigada a recolher. Se o
          Oyno não for para você, peça o reembolso total a {SUPPORT} em até 14 dias após um
          pagamento.
        </p>
        <h3>Compradas no app</h3>
        <p>
          A Apple recebe o pagamento de acordo com os próprios termos, incluindo o Contrato de
          Licença de Usuário Final padrão da Apple para Aplicativos Licenciados. O teste grátis de
          3 dias é a oferta introdutória da Apple; se você não cancelar antes que ele termine, a
          Apple cobra pelo plano que você escolheu e o renova até que você cancele nas assinaturas
          da sua Conta Apple. Cabe à Apple conceder reembolsos.
        </p>
        <h3>Quando uma assinatura termina</h3>
        <p>
          Seu planeta e suas rodadas anteriores continuam. O Tempo em família e as brincadeiras
          novas param até você assinar de novo.
        </p>

        <h2>Mudanças e disponibilidade</h2>
        <p>
          Melhoramos o Oyno com o tempo e podemos alterar ou remover recursos. Se uma mudança tirar
          algo pelo qual você pagou, escreva para {SUPPORT} e vamos resolver. Trabalhamos para
          manter o serviço funcionando, mas não podemos prometer que ele nunca será interrompido.
        </p>

        <h2>Responsabilidade</h2>
        <p>
          O Oyno é fornecido “no estado em que se encontra”. Na medida permitida por lei, nossa
          responsabilidade por qualquer reclamação se limita ao valor que você nos pagou nos 12
          meses anteriores a ela. Nada aqui limita os direitos que você tem pela legislação de
          defesa do consumidor.
        </p>

        <h2>Contato</h2>
        <p>
          Dúvidas sobre estes termos: {SUPPORT}. Nossa{" "}
          <Link href={to("privacy")}>política de privacidade</Link> explica como tratamos seus
          dados.
        </p>
      </>
    ),
  },
};
