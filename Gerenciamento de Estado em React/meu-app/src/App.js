import { Outlet, Link, useLocation } from "react-router-dom";

const cores = {
  primaria: "#0077b6",
  secundaria: "#00b4d8",
  fundo: "#f0f4f8",
  branco: "#ffffff",
  texto: "#1a1a2e",
  cinza: "#6c757d",
};

export { cores };

function App() {
  const location = useLocation();

  const navLinkStyle = (path) => ({
    textDecoration: "none",
    padding: "8px 20px",
    borderRadius: "20px",
    fontWeight: "600",
    fontSize: "14px",
    backgroundColor: location.pathname === path ? cores.primaria : "transparent",
    color: location.pathname === path ? cores.branco : cores.primaria,
    border: `2px solid ${cores.primaria}`,
    transition: "all 0.2s",
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: cores.fundo, fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      <header style={{
        backgroundColor: cores.primaria,
        padding: "18px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}>
        <h1 style={{ margin: 0, color: cores.branco, fontSize: "22px", fontWeight: "700", letterSpacing: "0.5px" }}>
          🏥 Clínica Sorriso Saudável
        </h1>
        <nav style={{ display: "flex", gap: "12px" }}>
          <Link to="/" style={navLinkStyle("/")}>Cadastro</Link>
          <Link to="/resumo" style={navLinkStyle("/resumo")}>Resumo</Link>
        </nav>
      </header>

      <main style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;