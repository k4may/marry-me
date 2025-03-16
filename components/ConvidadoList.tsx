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
  // Filtra os convidados que ainda não confirmaram presença
  const convidadosPendentes = convidados.filter((convidado) => !convidado.confirmado);

  // Verifica se há convidados que já confirmaram presença
  const convidadosConfirmados = convidados.filter((convidado) => convidado.confirmado);

  return (
    <div style={{ textAlign: "left", marginBottom: "20px" }}>
      {/* Lista de convidados pendentes */}
      {convidadosPendentes.length > 0 && (
        <>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
            Confirme sua presença
          </h2>
          {convidadosPendentes.map((convidado) => (
            <div
              key={convidado.nome}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "10px",
                background: "#F5F5F5",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onClick={() => toggleConfirmacao(convidado.nome)}
            >
              <input
                type="checkbox"
                checked={!!confirmacoes[convidado.nome]}
                onChange={() => toggleConfirmacao(convidado.nome)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <span style={{ fontSize: "1.1rem", color: "#333" }}>{convidado.nome}</span>
            </div>
          ))}
        </>
      )}

      {/* Mensagem de agradecimento para convidados confirmados */}
      {convidadosConfirmados.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
            Obrigado por confirmar!
          </h2>
          {convidadosConfirmados.map((convidado) => (
            <div
              key={convidado.nome}
              style={{
                padding: "10px",
                background: "#E8F5E9", // Verde claro para indicar sucesso
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              <p style={{ fontSize: "1.1rem", color: "#333" }}>
                {convidado.nome}, estamos ansiosos para sua presença no nosso casamento!
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};