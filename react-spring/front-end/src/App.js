import { useEffect, useState } from "react";
import "./App.css";

const initialForm = {
  cep: "",
  rua: "",
  bairro: "",
  cidade: ""
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [addresses, setAddresses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    listAddresses();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  async function listAddresses() {
    try {
      const response = await fetch("/address");
      const data = await response.json();
      setAddresses(data);
    } catch {
      setMessage("Erro ao carregar endereços.");
    }
  }

  async function findByCep() {
    try {
      const response = await fetch(`/address/${form.cep}`);
      if (response.status === 404) {
        setMessage("Endereço não encontrado.");
        return;
      }
      const data = await response.json();
      setForm(data);
      setMessage("Endereço localizado com sucesso.");
    } catch {
      setMessage("Erro ao buscar endereço.");
    }
  }

  async function createAddress() {
    try {
      const response = await fetch("/address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error();
      setMessage("Endereço cadastrado com sucesso.");
      listAddresses();
    } catch {
      setMessage("Erro ao cadastrar endereço.");
    }
  }

  async function deleteAddress() {
    try {
      const response = await fetch(`/address/${form.cep}`, { method: "DELETE" });
      if (!response.ok) throw new Error();
      setMessage("Endereço removido com sucesso.");
      setForm(initialForm);
      listAddresses();
    } catch {
      setMessage("Erro ao remover endereço.");
    }
  }

  // --- NOVOS ENDPOINTS (Etapa 7) ---

  async function updateAddress() {
    try {
      const response = await fetch(`/address/${form.cep}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rua: form.rua, bairro: form.bairro, cidade: form.cidade })
      });
      if (!response.ok) throw new Error();
      setMessage("Endereço atualizado com sucesso.");
      listAddresses();
    } catch {
      setMessage("Erro ao atualizar endereço.");
    }
  }

  async function findByCity() {
    try {
      const response = await fetch(`/address/cidade/${form.cidade}`);
      const data = await response.json();
      setAddresses(data);
      setMessage(`Endereços encontrados para: ${form.cidade}`);
    } catch {
      setMessage("Erro ao buscar endereços por cidade.");
    }
  }

  async function countAddresses() {
    try {
      const response = await fetch("/address/count");
      const data = await response.json();
      setMessage(`Total de endereços cadastrados: ${data.total}`);
    } catch {
      setMessage("Erro ao contar endereços.");
    }
  }

  return (
    <main className="container">
      <h1>Integração React + Spring Boot</h1>

      <label>CEP</label>
      <input name="cep" value={form.cep} onChange={handleChange} />

      <label>Rua</label>
      <input name="rua" value={form.rua} onChange={handleChange} />

      <label>Bairro</label>
      <input name="bairro" value={form.bairro} onChange={handleChange} />

      <label>Cidade</label>
      <input name="cidade" value={form.cidade} onChange={handleChange} />

      <button onClick={findByCep}>Buscar por CEP</button>
      <button onClick={createAddress}>Criar novo</button>
      <button onClick={deleteAddress}>Apagar por CEP</button>
      <button onClick={updateAddress}>Atualizar endereço</button>
      <button onClick={findByCity}>Buscar por cidade</button>
      <button onClick={countAddresses}>Contar endereços</button>

      {message && <p>{message}</p>}

      <table>
        <tbody>
          {addresses.map((address) => (
            <tr key={address.cep}>
              <td>{address.cep}</td>
              <td>{address.rua}</td>
              <td>{address.bairro}</td>
              <td>{address.cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;