import { useRef } from "react";

function FormTarefa({ onInserir }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const nome = inputRef.current.value.trim();
    if (!nome) return;

    onInserir(nome);
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="tarefa" id="labelTarefa">Tarefa:</label>
      <input type="text" id="tarefa" name="tarefa" ref={inputRef} required />
      <button type="submit" className="botao">Adicionar</button>
    </form>
  );
}

export default FormTarefa;
