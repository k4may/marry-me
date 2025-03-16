import { FaClock, FaTshirt, FaCar, FaCamera, FaGift } from "react-icons/fa";
import Modal from "../components/Modal";

interface ManualConvidadoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ManualConvidadoModal = ({ isOpen, onClose }: ManualConvidadoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Manual do Convidado
      </h2>
      <div
        style={{
          fontSize: "1.1rem",
          color: "#555",
          textAlign: "left",
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          <FaClock style={{ marginRight: "10px" }} />
          <strong>Horário:</strong> O casamento começará pontualmente às 16h. Pedimos que todos cheguem com pelo menos 30 minutos de antecedência.
        </p>
        <p style={{ marginBottom: "10px" }}>
          <FaTshirt style={{ marginRight: "10px" }} />
          <strong>Dress Code:</strong> Por favor, evitem usar a cor branca, pois é reservada para os noivos. Sugerimos trajes elegantes e confortáveis.
        </p>
        <p style={{ marginBottom: "10px" }}>
          <FaCar style={{ marginRight: "10px" }} />
          <strong>Estacionamento:</strong> Haverá estacionamento disponível no local. Recomendamos que os convidados compartilhem caronas para facilitar a organização.
        </p>
        <p style={{ marginBottom: "10px" }}>
          <FaCamera style={{ marginRight: "10px" }} />
          <strong>Fotos:</strong> Durante a cerimônia, pedimos que os celulares sejam mantidos no modo silencioso. Após a cerimônia, todos estão convidados a tirar fotos e compartilhar conosco!
        </p>
        <p style={{ marginBottom: "10px" }}>
          <FaGift style={{ marginRight: "10px" }} />
          <strong>Presentes:</strong> Caso queiram nos presentear, sugerimos contribuições em dinheiro ou presentes de nossa lista de casamento.
        </p>
      </div>
    </Modal>
  );
};

export default ManualConvidadoModal;