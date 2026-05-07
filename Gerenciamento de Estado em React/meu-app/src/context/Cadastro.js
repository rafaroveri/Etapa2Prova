import {useNavigate} from 'react-router-dom'
import { useAtendimento } from './AtendimentoContext'
import { cores } from '../App'

const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1.5px solid #d0d7de",
    fontSize: "15px",
    color: "#1a1a2e",
    backgroundColor: "#fff",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
};

const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    fontSize: "14px",
    color: cores.texto,
};

function Cadastro() {
    const { state, dispatch } = useAtendimento();
    const navigate = useNavigate();

    function handleChange(e) {
        dispatch({
            type: "ATUALIZAR",
            campo: e.target.name,
            valor: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/resumo");
    }

    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "36px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}>
            <h2 style={{ margin: "0 0 28px 0", color: cores.primaria, fontSize: "20px", fontWeight: "700" }}>
                Cadastro do Paciente
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                    <label style={labelStyle}>Nome</label>
                    <input
                        name="nome"
                        placeholder="Nome completo"
                        value={state.nome}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Contato</label>
                    <input
                        name="contato"
                        placeholder="Telefone ou e-mail"
                        value={state.contato}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Sintomas</label>
                    <textarea
                        name="sintomas"
                        placeholder="Descreva os sintomas do paciente..."
                        value={state.sintomas}
                        onChange={handleChange}
                        rows={4}
                        style={{ ...inputStyle, resize: "vertical" }}
                    />
                </div>

                <button type="submit" style={{
                    backgroundColor: cores.primaria,
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "13px",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                    marginTop: "4px",
                }}>
                    Salvar e Ver Resumo →
                </button>
            </form>
        </div>
    );
}

export default Cadastro;