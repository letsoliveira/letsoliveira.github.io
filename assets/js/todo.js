import { addTask, getAllTasks } from "./utils/domFunctions.js";
// console.log(db[0]).steps[2].step)

const db = [
    {
        id: 1,
        title:"Concluir App Conexão Arte",
        steps: [
            {step: "Ajustar textos"},
            {step: "Trocar imagens para imagens públicas"},
            {step: "Publicar no Expo"},
            {step: "Publicar no Expo Store Connect" },
        ],
        done: false,
        dueDate: "2022-05-06",
        reminder: "2022-05-02 10:00",
    },
    {
        id: 2,
        title:"Aula 4 Fiap - Avanade",
        steps: [
            {step: "Atributos Globais"},
            {step: "Estrutura CSS"}
        ],
        done: true,
        dueDate: "2022-04-28",
    },    

];
getAllTasks(db);
//console.log(db[0].title);
// DOM = DOCUMENT OBJECT MODEL - é o JS acessando o HTML e manipulando ele.
// HTML = É compilado pelo navegador em uma árvore de comandos, chamada DOM.
console.log(db[0].title);
const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector("#addNewTask");
form.addEventListener("submit", (e) => {
    //Form faz favor? Não faz nada...
    e.preventDefault();
})
newTask.addEventListener("keyup",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(e.key == "Enter"){
        if (!newTask.value){
            alert("Digite alguma coisa");
        } else {
        // alert(newTask.value);
        const d = new Date();
        const today = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;

        db.push({ id: Number(db.length) + 1 , title: newTask.value, done: false, dueDate: today });
        document.querySelector(".tasks").innerHTML = "";
        getAllTasks(db);
        newTask.value = "";
        console.log(db); 
        } 
    }
});

//exemplo de array
// const frutas = ["maçã", "banana", "abacaxi", "abacate"];
// frutas[3];
// frutas.length;
// frutas[frutas.length - 1];
// console.log(frutas.at(-1));

//criando um objeto literal
// const dados = {
//     nome: 'Leticia Oliveira',
//     idade: 29,
//     programadora: true,
//     acao: () => {
//         console.log("Executando uma ação");
//     },
// };

//Objeto é um conjunto de atributos (propriedades ou valores) e métodos(ações ou funções)
// console.log(dados.nome);
// console.log("Idade: ", dados.idade);
// dados.acao();