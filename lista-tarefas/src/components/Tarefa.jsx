function Tarefa({ nome, concluida, onToggle, onRemover }) {
  return (
    <li className="tarefa">
      <span
        className={`nome-tarefa${concluida ? " concluida" : ""}`}
        title="Clique para marcar como concluída"
        onClick={onToggle}
      >
        {nome}
      </span>
      <button className="btn-remover" onClick={onRemover}>
        Remover
      </button>
    </li>
  );
}

export default Tarefa;