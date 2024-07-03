const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
    
        enunciado: "Por que a preservação das florestas tropicais é importante para a sustentabilidade? ",
        alternativas: [
            {
                texto: "Regulação do clima global e biodiversidade.",
                afirmacao: "A primeira tava certo,",
                id: "1"    
            },
            {
                texto: "Reduz os papeis de lixos nas estradas por não serem biodegradaveis.",
                afirmacao: "Já começou errado,",
                id: "1"
            }
        ]
    },
    
    {
        enunciado: "Como a poluição marinha afeta os ecossistemas costeiros e a vida marinha?",
        alternativas: [
            {
                texto: "Os peixes de água salgada vão pra águas dosces.",
                afirmacao: "mas lhe faltou conhecimento de como funciona os peixes.",
                id: "2"
            },
            {
                texto: "Danos aos ecossistemas, ingestão de plásticos, e impacto nas indústrias pesqueira e turística,",
                afirmacao: "pelo menos sabe como funciona os peixes.",
                id: "3"
            }
        ]
    },

    {
        enunciado: "Quais são os benefícios da adoção de práticas de transporte sustentável nas cidades?",
        alternativas: [
            {
                texto: "Redução da poluição, congestionamentos e emissões de gases de efeito estufa.",
                afirmacao: "E eu achei que você fosse de calor.",
                id: "5"
            },
            {
                texto: "Potencialisa o aquecimeto global e acaba com o inverno e as geadas.",
                afirmacao: "E eu tambem queria mais calor hoje, mas tá errado a reposta.",
                id: "6"
            }
        ]
    },

    {
        enunciado: "Qual é o papel da reciclagem na redução do impacto ambiental dos resíduos sólidos?",
        alternativas: [
            {
                texto: "Redução de resíduos, conservação de recursos e economia de energia",
                afirmacao: "Eu tenho certeza que na 4 você queria colocar que dá trabalho procurar o lixo.",
                id: "5"
            },
            {
                texto: "Da mais trabalho para procurar as latas de lixo, que normalmente vem acompanhado com odor e abelhas.",
                afirmacao: "Imagino como é sua casa se você já tem preguiça de procurar o lixo.",
                id: "6"
            }
        ]
    },

    {
        enunciado: "Quais são as principais fontes de poluição do solo e como elas podem ser controladas?",
        alternativas: [
            {
                texto: "Atividades agrícolas, industriais, mineração, e regulamentação ambiental.",
                afirmacao: "Você provavelmente pula carnaval, então tava explicado.",
                id: "5"
            },
            {
                texto: "Esse povo que gosta de confetes de carnaval, suja tudo o chão.",
                afirmacao: "Hooo tia da igreja, não gosta nem de fevereiro só pelo carnaval.",
                id: "6"
            }
        ]
    },

    {
        enunciado: "Como a adoção de práticas agrícolas sustentáveis pode ajudar a mitigar as mudanças climáticas?",
        alternativas: [
            {
                texto: "Armazenamento de carbono no solo, redução de agroquímicos e aumento da resiliência das plantações.",
                afirmacao: "A do carbono no solo eu deixo com a Bruna.",
                id: "7"
            },
            {
                texto: "Como a vaca come grama, se ela defecar na planta, a rama vai ajudar a planta florescer.",
                afirmacao: "Sua resposta da grama das vacas foi mais vaga que estacionamento de empresa depois da noitada.",
                id: "7"
            }
        ]
    },

    {
            enunciado: "Quais são os benefícios e desafios da transição para uma economia circular?",
            alternativas: [
                {
                    texto: "Redução de resíduos, oportunidades econômicas, e mudanças nos padrões de consumo",
                    afirmacao: "Redução de resídos? Eu prefiro dar certo na outra.",
                    id: "7"
                },
                {
                    texto: "O benefcio é que eu acho dinheiro na rua, a dificuldade é a teimosia.",
                    afirmacao: "ERRADA, não se paga mais em dinheiro, só acha dinheiro em pix hj.",
                    id: "7"
                }
            ]
        },
        
        {
            enunciado: "De que maneira a preservação dos oceanos contribui para a sustentabilidade global",
            alternativas: [
                {
                    texto: "O povo que só fica vandalisando para pra ver o Nemo no aquario que agora ele consegue sobreviver.",
                    afirmacao: "E você ainda acredita em coelhinho da pascoa ou só no Nemo?",
                    id: "8"
                },
                {
                    texto: "Regulação climática, produção de oxigênio, fornecimento de alimentos e turismo sustentável",
                    afirmacao: "Eu concluo que as respostas erradas eram mais divertidas, mas a ultima tava certa.",
                    id: "8"
                    
                }
            ]
        }
       
   
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    const id = opcaoSelecionada.id;
    atual = id;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
