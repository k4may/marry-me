import { FaCheck, FaSpinner } from "react-icons/fa";

interface ConfirmButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export const ConfirmButton = ({ isLoading, onClick }: ConfirmButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#82CECA",
        color: "#FFF",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.2s ease, transform 0.2s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      disabled={isLoading}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#396278";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#82CECA";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" style={{ marginRight: "8px" }} />
          Enviando...
        </>
      ) : (
        <>
          <FaCheck style={{ marginRight: "8px" }} /> Confirmar Presença
        </>
      )}
    </button>
  );
};
