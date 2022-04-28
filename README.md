import { escreve } from "./utils/write.js";

console.log("Olá mundo")
console.info("Hello World!")
console.error("Tá errado!")
console.warn("TAN!")

// case sensitive - camelCase
// const - constante - Não muda. Nunca. A não ser objetos e referências, aí o seu conteúdo pode mudar.
const nome = 'Leticia Oliveira';

// let - variavel - pode mudar a qualquer momento.
let email = 'leen.stephani@gmail.com';

// var nome
// tc39 - Grupo de Tecnologia dentro ECMA International - Responsável EcmaScript - ES2015, ..., ES2017, ..., ESNEXT - Código intermediário, traduz essa versão mais moderna para uma versão compatível.
// Transpiladores. BabelJS
console.log(`Nome: ${nome} Email: ${email}`);

if(nome == "Leticia Oliveira"){
    console.log("é igual");
}

// hoisting -> se escreve (x) fosse function, seria fisgado para a 1ª linha de código durante a análise léxica e a ordem do escreve() não interfere.

//const e let não sofrem hoisting
const escreve = (x) => {
    console.log("Frase: " + x);
}
escreve(`Seja bem-vinda ${nome}`);
escreve("Treinamento HTML5, CSS3 e JS");

// objeto.metodo();
// objeto.propriedade = valor;

// document é um objeto.
// window é um objeto. window.innerHeight window.innerWidth

//Em JS existem 7 tipos de erros
// Type Error, Reference Error, Syntax Error, Eval, Range Error, Iternal Error, URIError
// Mais comuns: Type, Reference, Syntax.