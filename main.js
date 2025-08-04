const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um prefeito influente de umma cidade do Brasil e que trabalha constantemente para a melhora da sosiedade, um dia de forma anonima um deputado oferece uma grande recompensa para ajuda-lo num golpe, você o ajuda?",
        
        alternativas: [
            {
                texto: "Você aceita",
                afirmacao: "Apos aceitar ele fica muito feliz com sua participação e voce ganha uma bolada em dinheiro vivo e sai para comemorar em casa."
            },
            {
                texto: "Você recussa",
                afirmacao: "Apos recussar isso ele sai bravo da sua sala, voce termina seu trabalho e vai para casa."
            }
        ]
    },
    {
        enunciado: "Passado um tempo desde o ultimo ocorrido voce decide fazer faculdade sobre finanças e contagem, apos ums aulas vc repara em um furo no golpe do deputado o que voce faz? ",
        alternativas: [
            {
                texto: "Você avisa para o deputado?",
                afirmacao: "depois de um tempo você decide ajuda ele depois dos seus estudos na faculdade e ele tem mais confianca confianca em você."
            },
            {
                texto: "Você avisa a policia?",
                afirmacao: "depois de um tempo você ajuda a policia coim um caso e golpe que ela esta tentando solucionar e eles agradece a sua ajuda e diz tentar resolver ao maximo esse caso."
            }
        ]
    },
    {
        enunciado: "Apos um tempo chega a epoca das eleicões e a policia esta mais perto de descobrir o golpe por conta da sua insistencia nas investigações, o Deputado reaparece pedindo sua ajudda uma ultima vez, o que você faz?",
        alternativas: [
            {
                texto: "Tenta ajuda-lo",
                afirmacao: "apos isso você ajudar ele e chegar o dia do golpe a policia descobre toda a armação e a sua participação, você e o deputado são detidos e estão dividindo uma cela e esperando o julgamento."
            },
            {
                texto: "você ajuda a policia",
                afirmacao: "depois um tempo e muita insistencia você percebe o que é ceto a se fazer e não ajuda no seu plano, ele é pego pelas autoridades e mesmo ele tentando te incriminar junto com ele a sua colaboracão com a policia mostyra o contrario e você segue sua vida feliz."
            }
        ]
    },

        ]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas();
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
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent = " Como termina a sua historia... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

console.log(perguntas)