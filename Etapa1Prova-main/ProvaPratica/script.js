class Tarefa {
    constructor(nome) {
        this.nome = nome;
        this.concluida = false;
    }
}

function inserirTarefa() {
    var nomeTarefa = document.getElementById("tarefa").value.trim();
    if (!nomeTarefa) return;

    var tarefa = new Tarefa(nomeTarefa);
    var lista = document.getElementById("listaTarefas");

    var item = document.createElement("li");
    item.className = "tarefa";

    var span = document.createElement("span");
    span.className = "nome-tarefa";
    span.textContent = tarefa.nome;
    span.title = "Clique para marcar como concluída";
    span.addEventListener("click", function () {
        tarefa.concluida = !tarefa.concluida;
        span.classList.toggle("concluida", tarefa.concluida);
    });

    var btnRemover = document.createElement("button");
    btnRemover.className = "btn-remover";
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", function () {
        lista.removeChild(item);
    });

    item.appendChild(span);
    item.appendChild(btnRemover);
    lista.appendChild(item);

    document.getElementById("tarefa").value = "";
    document.getElementById("tarefa").focus();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tarefa").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            inserirTarefa();
        }
    });
});
