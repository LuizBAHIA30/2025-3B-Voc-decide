const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector("caixa-Perguntas");
const caixaAlternativas = document.querySelector("caixa.Alternativas");
const caixaResultados = document.querySelector("caixa-Resultados");
const textoResultos = document.querySelector("texto-Resultados");

const Perguntas = [
{
    enuciado:"perguntas 1",
    alternatias:[
        "alternativa 1",
        "alternativa 2"
    ]
},
{
    enuciado:"perguntas 2",
    alternatias:[
        "alternativa 3",
        "alternativa 4"
    ]
},
{
    enuciado:"perguntas 3",
    alternatias:[
        "alternativa 5",
        "alternativa 6"
    ]
}
]

let atual =0;
let PerguntaAtual;

function mostraPergunta(){
    PerguntaAtual = Perguntas[atual]
    caixaPerguntas.textContent = PerguntaAtual.enuciado
}

console.log(caixaPrincipal)