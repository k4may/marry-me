// components/PresenteCard.tsx
import React from "react";
//import { Presente } from "../pages/presentes"; // Ajuste o caminho conforme necessário

interface PresenteCardProps {
  presente: Presente;
  onPresentear: (presente: Presente) => void;
}

interface Presente {
    nome: string;
    valor: number;
    imagem: string;
    categoria: string;
    descricao: string;
  }

const PresenteCard: React.FC<PresenteCardProps> = ({ presente, onPresentear }) => {
  const formatarValor = (valor: number) => {
    return valor
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      .replace("R$", "R$ ");
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={presente.imagem}
          alt={presente.nome}
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "8px",
            objectFit: "cover",
            marginBottom: "15px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          {presente.categoria.split(",").map((cat, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#560E58",
                color: "#FFF",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "8px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {cat.trim()}
            </div>
          ))}
        </div>
      </div>
      <h3
        style={{
          color: "#8772CD",
          fontSize: "1.2rem",
          marginBottom: "10px",
        }}
      >
        {presente.nome}
      </h3>
      <p
        style={{
          color: "#555",
          fontSize: "0.9rem",
          marginBottom: "15px",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        {presente.descricao}
      </p>
      <p
        style={{
          color: "#396278",
          fontWeight: "bold",
          fontSize: "1.1rem",
          marginBottom: "15px",
        }}
      >
        {formatarValor(presente.valor)}
      </p>
      <button
        style={{
          backgroundColor: "#82CECA",
          color: "#FFF",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.2s ease",
          width: "100%",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#396278")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#82CECA")
        }
        onClick={() => onPresentear(presente)}
      >
        Presentear
      </button>
    </div>
  );
};

export default PresenteCard;