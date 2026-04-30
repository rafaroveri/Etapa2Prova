import Tarefa from "./Tarefa";

function ListaTarefas({ tarefas, onToggle, onRemover }) {
  return (
    <ul id="listaTarefas">
      {tarefas.map(t => (
        <Tarefa
          key={t.id}
          nome={t.nome}
          concluida={t.concluida}
          onToggle={() => onToggle(t.id)}
          onRemover={() => onRemover(t.id)}
        />
      ))}
    </ul>
  );
}

export default ListaTarefas;
