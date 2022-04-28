// Quando for importar do arquivo domFunctions. O JS não sabe quantas funções estão disponíveis.
// Quando eu preciso extrair qualquer recurso, usando a desestruturação (destructuring)
// import { addTask } from './domFunctions.js';
// CRUD - CREATE READ UPDATE DELETE


export function addTask() {
    alert("Cadastrando uma nova tarefa");
}
export function removeTask() {
    alert("Removendo uma nova tarefa");
}
export function updateTask() {
    alert("Alternando uma nova tarefa");
}
export function getAllTask() {
    alert("Listando todas as tarefas");
}
export function getTaskById() {
    alert("Exibindo uma tarefa");
}
