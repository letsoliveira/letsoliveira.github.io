//Função nominal com parâmetro obrigatório
//undefined é um tipo de valor que não existe.
//null é um tipo de valor inválido.
//uma função sem return é uma subrotina
function escreve(nome, sobrenome){
    const a = sobrenome;
    if(a == undefined){
        console.log("a é nulo");
        console.log("Valor de a", a, "\n");
        console.log("Valor de sobrenome", sobrenome, "\n");
    }
    console.log(`${nome} ${sobrenome}`);
}

escreve("Leticia");

//função nominal que retorna valor.
function soma(a,b){
    return Number(a) + Number(b);
}

const resultado = soma(1,2);
console.log(soma(3,5));

//expressão de função = uma função atribuída a um contexto, por exemplo, uma variável.
const exibe = function(x){
    return `Exibindo parâmetro ${x}`;
};
console.log(exibe("chocolate"));
//Onde o JavaScript está sendo executado? Qual o contexto? Contexto: Navegador. This depende do contexto.
//No navegador o this é a window. Mas se vc estiver usando a versao estrita do JS, o this não sera a window.
function quemEoThis(){
    console.log(this === window);
}
function quemEoThisEstrito(){
    //quando queremos usar o JS na versão mais polida, o use strict deve ser informado no início.
    "use strict";
    console.log("strict");
    console.log(this === window);
}

quemEoThis();
quemEoThisEstrito();

function Exibe2(){
    this.a = 50;
}

const novoObjeto = new Exibe2();
console.log(novoObjeto.a);

//Objeto global
let empresa = this; //window

//quando criamos um objeto, criamos um escopo.
const aluno = {
    nome: "Leticia",
    matricula: 123,
    executar: function () {
        return `Exibindo de dentro de um méotodo ${this.nome}`;
    },
};

aluno.executar();
//escrito - this é undefined
console.log("Quem é o this no contexto global", empresa);

//this dentro de uma função - também é um objeto global.
function globalObj() {
    return this;
}
window.document.write('<h2>Escrevendo no Body</h2>');
document.write(globalObj());
globalObj().alert("Aoba!");
function Pessoa() {
    this.velocidade = 0;

    function andar(){
        console.log("velocidade atual", this.velocidade)
    }
}
//Objeto Literal
//Escopo é uma área de atuação. this dentro de pessoa ele só enxerga os elementos dentro de pessoa.
// const Pessoa = {
//     velocidade: 0,
//     nome: "Leticia Oliveira",
//     andar: function() {
//         console.log("velocidade atual", this.velocidade);
//     }
// }

//Arrow Function - Função de seta, ela é mais curta, não tem o próprio contexto.
const novaFuncao = (a, b) => {
    console.log("Chamando de dentro de uma arrow function");
    //Interpolação de variáveis é chamar uma variável dentro de uma string; Template string.
    console.log(`Exibindo o valor de ${a}`);
    //Concatenação de variáveis.
    console.log("Exibindo o total de caracteres " + b.length);
    //Indentação é um código escrito de forma legível, que respeita hierarquia { dá um espaço, para facilitar a leitura do código. Um código indentado é uma das maneiras de manter um código limpo.}
}

const funcao3 = (a) =>
    console.log(`Exibindo o total de caracteres de ${a.length}`);
funcao3("Leticia Oliveira");

//No arrowfunction o this não existe

const carros = (primeiro, segundo, ...restante) => {
    console.log(
        `Os carros informados foram: ${primeiro},${segundo}. Todos os demais são ${restante.join(", ")}`
    );
};
carros(
    "DelRey",
    "Brasilia",
    "Belina",
    "Fusca",
    "Variant",
    "Parati",
    "Monza",
    "Scort",
    "Fiat 147",
    "D-20",
    "Kombi",
    "BMW",
    "Opala",
    "Land-Rover",
    "Gurgel",
    "Maverick",
    "Marea"
);
const frutas = ['Guaraná', 'Cupuaçu', 'Açai'];
const todasFrutas = [...frutas, "banana", "abacaxi"];
console.log("Todas as frutas", todasFrutas);

//destructuring assignment - atribuição por desestruturação.

let a = 50;
let b = 100;
const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro: ", primeiro);
console.log("Exibindo o resto: ", resto);
const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(", "));
// const [p,s,t,q] = meuArray;
// console.log("Exibindo o quarto elemento",q);
const [q, ...p] = meuArray.reverse();
console.log(p.reverse());