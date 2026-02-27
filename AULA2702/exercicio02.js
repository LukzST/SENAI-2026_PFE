
class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false; 
    }

    concluir() {
        this.concluida = true;
        console.log(`Tarefa "${this.titulo}" concluída.`);
    }

    reabrir() {
        this.concluida = false;
        console.log(`Tarefa "${this.titulo}" foi reaberta.`);
    }
}
class ListaTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa.titulo}" adicionada.`);
    }

    removerPorTitulo(titulo) {
        this.tarefas = this.tarefas.filter(t => t.titulo !== titulo);
        console.log(`Tarefa "${titulo}" removida.`);
    }

    listar(concluidas = null) {
        if (concluidas === null) {
            return this.tarefas;
        }
        return this.tarefas.filter(t => t.concluida === concluidas);
    }
}

const minhaLista = new ListaTarefas();
const t1 = new Tarefa("estudar js", "aprender classes");
const t2 = new Tarefa("fazer exercício", "ir a academia");
const t3 = new Tarefa("comprar pao", "padaria da esquina");

minhaLista.adicionar(t1);
minhaLista.adicionar(t2);
minhaLista.adicionar(t3);

console.log("Lista Inicial");
console.log(minhaLista.listar());

t2.concluir();

minhaLista.removerPorTitulo("Comprar pão");

console.log("Toda as Tarefas Restantes");
console.log(minhaLista.listar());

console.log("apenas Concluidas");
console.log(minhaLista.listar(true));

console.log("qapenas Pendentes");
console.log(minhaLista.listar(false));
