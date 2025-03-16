import { FaPhone, FaWhatsapp } from "react-icons/fa";

interface ContactInfoProps {
  phone: string;
  whatsapp: string;
}

const ContactInfo = ({ phone, whatsapp }: ContactInfoProps) => (
  <div style={{ marginTop: "40px", textAlign: "center" }}>
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
      }}
    >
      Dúvidas ou Informações
    </h2>
    <p
      style={{
        fontSize: "1.1rem",
        marginBottom: "10px",
        color: "#555",
      }}
    >
      Entre em contato diretamente com o noivo:
    </p>
    <div className="flex justify-center space-x-4">
      <a
        href={`tel:${phone}`}
        className="flex items-center text-green-600 hover:text-green-800 transition-colors"
      >
        <FaPhone className="mr-1" /> {phone}
      </a>
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-green-600 hover:text-green-800 transition-colors"
      >
        <FaWhatsapp className="mr-1" /> WhatsApp
      </a>
    </div>
  </div>
);

export default ContactInfo;