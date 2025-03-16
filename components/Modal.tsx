import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#FFF",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative", // Adicionando posicionamento relativo
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            color: "#333",
            cursor: "pointer",
            padding: "5px 10px",
            borderRadius: "50%",
          }}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
