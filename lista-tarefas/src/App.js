import { useState } from "react";
import "./App.css";
import FormTarefa from "./components/FormTarefa";
import ListaTarefas from "./components/ListaTarefas";

function App() {
  const [tarefas, setTarefas] = useState([]);

  function inserirTarefa(nome) {
    setTarefas([...tarefas, { id: Date.now(), nome, concluida: false }]);
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
        <FormTarefa onInserir={inserirTarefa} />
        <ListaTarefas
          tarefas={tarefas}
          onToggle={toggleConcluida}
          onRemover={removerTarefa}
        />
      </main>
    </>
  );
}

export default App;