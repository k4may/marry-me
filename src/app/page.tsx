"use client";

import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";

export default function Home() {
  const router = useRouter();

  const handleClick = (path: string) => {
    if (path === "/presentes") {
      router.push(path);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #F5F5F5, #E0E0E0)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          marginBottom: "40px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src="/brasao-casamento.png"
          alt="Brasão do Casamento"
          style={{
            width: "240px",
            height: "auto",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          onClick={() => handleClick("/presentes")}
          style={{
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "500",
            color: "#560E58",
            transition: "color 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#8772CD";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#560E58";
          }}
        >
          Lista de Presentes
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#CCCCCC",
          }}
        >
          |
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#CCCCCC",
            cursor: "not-allowed",
          }}
        >
          Confirmar Presença
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#CCCCCC",
          }}
        >
          |
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#CCCCCC",
            cursor: "not-allowed",
          }}
        >
          Galeria
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .menu-container {
            flex-direction: column;
            align-items: center;
          }

          .menu-container > div {
            margin-bottom: 15px;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
}
