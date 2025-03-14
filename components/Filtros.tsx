// components/Filtros.tsx
import React from "react";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

interface FiltrosProps {
  filtroNome: string;
  setFiltroNome: (value: string) => void;
  filtroCategoria: string;
  setFiltroCategoria: (value: string) => void;
  categorias: string[];
  ordenacao: "crescente" | "decrescente";
  handleOrdenacao: () => void;
}

const Filtros: React.FC<FiltrosProps> = ({
  filtroNome,
  setFiltroNome,
  filtroCategoria,
  setFiltroCategoria,
  categorias,
  ordenacao,
  handleOrdenacao,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Pesquisa"
        value={filtroNome}
        onChange={(e) => setFiltroNome(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "200px",
          border: "2px solid #8772CD",
          outline: "none",
          fontSize: "16px",
          color: "#560E58",
          backgroundColor: "#FFF",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />

      <select
        value={filtroCategoria}
        onChange={(e) => setFiltroCategoria(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "2px solid #8772CD",
          outline: "none",
          fontSize: "16px",
          color: "#560E58",
          backgroundColor: "#FFF",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        <option value="">Categorias</option>
        {categorias.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        onClick={handleOrdenacao}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "2px solid #8772CD",
          outline: "none",
          fontSize: "16px",
          color: "#560E58",
          backgroundColor: "#FFF",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {ordenacao === "crescente" ? (
          <FaSortAmountDown />
        ) : (
          <FaSortAmountUp />
        )}
        {ordenacao === "crescente" ? "Crescente" : "Decrescente"}
      </button>
    </div>
  );
};

export default Filtros;