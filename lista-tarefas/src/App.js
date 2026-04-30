import { useState, useRef } from "react";
import "./App.css";
import Tarefa from "./components/Tarefa";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const inputRef = useRef(null);

  function inserirTarefa(e) {
    e.preventDefault();
    const nome = inputRef.current.value.trim();
    if (!nome) return;

    setTarefas([...tarefas, { id: Date.now(), nome, concluida: false }]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function toggleConcluida(id) {
    setTarefas(tarefas.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  return (
    <>
      <header>
        <h1>Cadastre sua tarefa</h1>
      </header>
      <main>
        <form className="formulario" onSubmit={inserirTarefa}>
          <label htmlFor="tarefa" id="labelTarefa">Tarefa:</label>
          <input type="text" id="tarefa" name="tarefa" ref={inputRef} required />
          <button type="submit" className="botao">Adicionar</button>
        </form>

        <ul id="listaTarefas">
          {tarefas.map(t => (
            <Tarefa
              key={t.id}
              nome={t.nome}
              concluida={t.concluida}
              onToggle={() => toggleConcluida(t.id)}
              onRemover={() => removerTarefa(t.id)}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;