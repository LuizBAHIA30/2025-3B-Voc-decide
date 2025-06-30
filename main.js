const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmacao: "resultado 1"
            },
            {
                texto: "alternativa 2",
                afirmacao: "resultado 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "alternativa 3",
                afirmacao: "resultado 3"
            },
            {
                texto: "alternativa 4",
                afirmacao: "resultado 4"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "alternativa 5",
                afirmacao: "resultado 5"
            },
            {
                texto: "alternativa 6",
                afirmacao: "resultado 6"
            }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    }
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas()
}
function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas ){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada){
    atual++
    mostraPergunta();
}
mostraPergunta();
console.log(perguntas)