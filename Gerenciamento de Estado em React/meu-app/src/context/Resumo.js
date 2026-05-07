import {useNavigate} from 'react-router-dom';
import { useAtendimento } from './AtendimentoContext';
import { cores } from '../App';

function Campo({ label, valor }) {
    return (
        <div style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            padding: "14px 18px",
            borderLeft: `4px solid ${cores.secundaria}`,
        }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: cores.cinza, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {label}
            </span>
            <p style={{ margin: "4px 0 0 0", fontSize: "16px", color: cores.texto, fontWeight: "500" }}>
                {valor || <em style={{ color: "#aaa", fontWeight: "400" }}>Não informado</em>}
            </p>
        </div>
    );
}

function Resumo() {
    const { state, dispatch } = useAtendimento();
    const navigate = useNavigate();

    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "36px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}>
            <h2 style={{ margin: "0 0 28px 0", color: cores.primaria, fontSize: "20px", fontWeight: "700" }}>
                Resumo do Atendimento
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                <Campo label="Nome" valor={state.nome} />
                <Campo label="Contato" valor={state.contato} />
                <Campo label="Sintomas" valor={state.sintomas} />
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => navigate("/")} style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "8px",
                    border: `2px solid ${cores.primaria}`,
                    backgroundColor: "transparent",
                    color: cores.primaria,
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                }}>
                    ← Voltar
                </button>

                <button onClick={() => dispatch({type: "LIMPAR"})} style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "8px",
                    border: "2px solid #dc3545",
                    backgroundColor: "transparent",
                    color: "#dc3545",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                }}>
                    Limpar Dados
                </button>
            </div>
        </div>
    );
}

export default Resumo;