export const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ],
                proxima: 1,
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ],
                proxima: 1,
            }
        ]
    },

    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao: [
                    "Você decidiu usar a IA como uma ferramenta de apoio para encontrar informações.",
                    "Percebeu que é importante conferir as informações e compreender o conteúdo antes de colocá-lo no trabalho."
                ],
                proxima: 2,
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Você preferiu realizar pesquisas por conta própria e utilizar seus conhecimentos para desenvolver o trabalho.",
                    "Percebeu que diferentes fontes e opiniões podem ajudar na construção de um trabalho."
                ],
                proxima: 2,
            }
        ]
    },

    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Você ficou preocupado com a possibilidade de algumas profissões serem substituídas pela Inteligência Artificial.",
                    "Defendeu a importância de preparar e proteger os trabalhadores diante das mudanças causadas pela tecnologia."
                ],
                proxima: 3,
            },
            {
                texto: "Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Você acredita que a Inteligência Artificial pode criar novas profissões e oportunidades de trabalho.",
                    "Também percebeu que a IA pode ajudar as pessoas a desenvolver e melhorar suas habilidades."
                ],
                proxima: 3,
            }
        ]
    },

    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Você decidiu criar a imagem manualmente usando uma ferramenta de desenho.",
                    "Preferiu colocar suas próprias ideias e criatividade diretamente na produção da imagem."
                ],
                proxima: 4,
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Você decidiu experimentar um gerador de imagens de Inteligência Artificial.",
                    "Percebeu que a IA pode ser uma ferramenta útil para transformar ideias em imagens."
                ],
                proxima: 4,
            }
        ]
    },

    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: [
                    "Você decidiu revisar o conteúdo produzido pela IA e verificar se as informações estavam corretas.",
                    "Também considerou importante acrescentar as ideias e conhecimentos dos integrantes do grupo."
                ]
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: [
                    "Você considerou que criar comandos para a IA já era uma forma de participação no trabalho.",
                    "Por isso, decidiu utilizar o texto produzido pelo chat sem fazer grandes alterações."
                ]
            }
        ]
    }
];if (opcaoSelecionada.proxima !== undefined) {
    atual = opcaoSelecionada.proxima;
} else {
    mostraResultado();
    return;
}