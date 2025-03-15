
interface Convidado {
  nome: string;
    id: string;
    confirmado: boolean;
}

interface ConvidadoListProps {
    convidados: Convidado[];
    confirmacoes: { [key: string]: boolean };
    toggleConfirmacao: (nome: string) => void;
  }
  
  export const ConvidadoList = ({
    convidados,
    confirmacoes,
    toggleConfirmacao,
  }: ConvidadoListProps) => {
    return (
      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
          Confirme sua presença
        </h2>
        {convidados.map((convidado) => (
          <div
            key={convidado.nome}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              background: "#F5F5F5",
              borderRadius: "5px",
              cursor: convidado.confirmado ? "not-allowed" : "pointer", 
              transition: "background 0.3s ease",
            }}
            onClick={() => !convidado.confirmado && toggleConfirmacao(convidado.nome)} 
          >
            <input
              type="checkbox"
              checked={!!confirmacoes[convidado.nome]}
              onChange={() => !convidado.confirmado && toggleConfirmacao(convidado.nome)} 
              disabled={convidado.confirmado} 
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <span style={{ fontSize: "1.1rem", color: "#333" }}>{convidado.nome}</span>
          </div>
        ))}
      </div>
    );
  };