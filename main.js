const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um prefeito influente de uma cidade do Brasil e que trabalha constantemente para a melhora da sociedade, um dia de forma anonima um deputado oferece uma grande recompensa para ajuda-lo num golpe, você o ajuda?",
        
        alternativas: [
            {
                texto: "Você aceita",
                afirmacao: "Apos aceitar ele fica muito feliz com sua participação, voce ganha uma bolada em dinheiro vivo e sai para comemorar em casa."
            },
            {
                texto: "Você recussa",
                afirmacao: "Apos recussar, ele desliga a ligacão e voce termina seu trabalho e vai para casa."
            }
        ]
    },
    {
        enunciado: "Passado um tempo desde o ultimo ocorrido voce decide fazer faculdade sobre finanças e contagem, apos ums aulas vc repara em um furo no golpe do deputado o que voce faz? ",
        alternativas: [
            {
                texto: "Você avisa para o deputado?",
                afirmacao: "Depois de uns messes, com seus estudos na faculdade você decide ajudar ele com seu plano e ganha uma reconpensa por isso."
            },
            {
                texto: "Você avisa a policia?",
                afirmacao: "depois de um tempo você ajuda a policia com o caso de golpe que estão tentando solucionar, eles agradecem a sua ajuda e diz tentar resolver ao maximo esse caso."
            }
        ]
    },
    {
        enunciado: "Apos mais um tempo chega a epoca das eleicões a policia esta mais perto de descobrir o golpe por conta da sua insistencia nas investigações, o Deputado reaparece pedindo sua ajudda uma ultima vez, o que você faz?",
        alternativas: [
            {
                texto: "Tenta ajuda-lo",
                afirmacao: "Apos isso você decide ajudar-lo e chegar o dia do golpe a policia descobre toda a armação e a sua participação, você e o deputado são detidos e estão dividindo uma cela e esperando o julgamento."
            },
            {
                texto: "você ajuda a policia",
                afirmacao: "Apos mais um tempo chega o dia das eleições e você percebe o que é certo a se fazer é não ajuda-lo no seu plano, ele é pego pelas autoridades e mesmo ele tentando te incriminar junto com ele a sua colaboracão com a policia mostra o contrario e você segue sua vida feliz."
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