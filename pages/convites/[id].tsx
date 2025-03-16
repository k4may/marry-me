/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/LoadingSpinner";
import "../../src/app/globals.css";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";
import { Header } from "../../components/Header";
import { ConvidadoList } from "../../components/ConvidadoList";
import { ConfirmButton } from "../../components/ConfirmButton";
import {  FaMapMarkerAlt, FaInstagram, FaBookOpen, FaGift } from "react-icons/fa";
import { GetServerSideProps } from "next";
import IconCircle from "../../components/IconCircle";
import ContactInfo from "../../components/ContactInfo";
import ManualConvidadoModal from "../../components/ManualConvidadoModal";
import { gerarTitulo, gerarDescricao, inicializarConfirmacoes } from "../../utils/conviteUtils"; 
import { Convidado, ConvitePageProps } from "../../types/types"; 


const VenueMap = dynamic(() => import("../../components/VenueMap"), {
  ssr: false,
  loading: () => <div style={{ height: "300px", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>Carregando mapa...</div>,
});


const ConvitePage = ({ convidados: initialConvidados, error }: ConvitePageProps) => {
  const router = useRouter();
  const { id } = router.query;

  const [convidados, setConvidados] = useState<Convidado[]>(initialConvidados);
  const [confirmacoes, setConfirmacoes] = useState<{ [key: string]: boolean }>(() =>
    inicializarConfirmacoes(initialConvidados)
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const todosConfirmados = convidados.every((convidado) => convidado.confirmado);

  useEffect(() => {
    setConvidados(initialConvidados);
    setConfirmacoes(inicializarConfirmacoes(initialConvidados)); 
  }, [initialConvidados]);

  const toggleConfirmacao = (nome: string) => {
    setConfirmacoes((prev) => ({
      ...prev,
      [nome]: !prev[nome],
    }));
  };

  const enviarConfirmacoes = async () => {
    setIsLoading(true);
    try {
      const confirmados = Object.keys(confirmacoes).filter((nome) => confirmacoes[nome]);
      const promises = confirmados.map(async (nome) => {
        const convidado = convidados.find((c) => c.nome === nome);
        if (convidado) {
          const response = await fetch("/api/convite", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome: convidado.nome, id: convidado.id, confirmado: true }),
          });
          if (!response.ok) throw new Error(`Erro ao confirmar presença de ${convidado.nome}`);
          return convidado.nome;
        }
      });
      const nomesConfirmados = await Promise.all(promises);
      const updatedConvidados = convidados.map((c) => (nomesConfirmados.includes(c.nome) ? { ...c, confirmado: true } : c));
      setConvidados(updatedConvidados);
      const updatedConfirmacoes = { ...confirmacoes };
      nomesConfirmados.forEach((nome) => {
        if (nome) updatedConfirmacoes[nome] = true;
      });
      setConfirmacoes(updatedConfirmacoes);
      alert("Confirmações enviadas com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar confirmações:", error);
      alert("Ocorreu um erro ao enviar as confirmações. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header title={gerarTitulo(convidados)} description={gerarDescricao(convidados)} /> {/* Use as funções utilitárias */}
      <div style={{ padding: "20px", background: "linear-gradient(135deg, #F5F5F5, #E0E0E0)", minHeight: "100vh", fontFamily: "'Roboto', sans-serif", backgroundSize: "cover", backgroundAttachment: "fixed", textAlign: "center" }}>
        <div className="flex justify-center items-center mb-8">
          <img src="/brasao-casamento.png" alt="Brasão do Casamento" onClick={() => router.push("/")} className="w-60 h-auto" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "20px" }}>
          <IconCircle icon={<FaMapMarkerAlt />} label="Localização" href="https://maps.app.goo.gl/Jbha1qdfgYs5n8MZA" />
          <IconCircle icon={<FaGift />} label="Presentes" onClick={() => router.push("/presentes")} />
          <IconCircle icon={<FaBookOpen />} label="Manual do Convidado" onClick={() => setIsModalOpen(true)} />
        </div>

        <ManualConvidadoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {error ? (
          <div style={{ color: "#D32F2F", fontSize: "1.2rem", marginTop: "20px" }}>{error}</div>
        ) : (
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h1 style={{ fontSize: "1.7rem", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>{gerarTitulo(convidados)}</h1> {/* Use a função utilitária */}
            <p style={{ fontSize: "1rem", marginBottom: "20px", color: "#555" }}>{gerarDescricao(convidados)}</p> {/* Use a função utilitária */}

            <ConvidadoList convidados={convidados} confirmacoes={confirmacoes} toggleConfirmacao={toggleConfirmacao} />

            {!todosConfirmados && <ConfirmButton isLoading={isLoading} onClick={enviarConfirmacoes} />}

            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>Local do Casamento</h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "10px", color: "#555" }}>Villa Floresta</p>
              <VenueMap />
              <div className="flex justify-center space-x-4 mt-3 mb-3">
                <a href="https://maps.app.goo.gl/Jbha1qdfgYs5n8MZA" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                  <FaMapMarkerAlt className="mr-1" /> Ver no Google Maps
                </a>
                <a href="https://www.instagram.com/villa.floresta/" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                  <FaInstagram className="mr-1" /> villa.floresta
                </a>
              </div>
            </div>

            <ContactInfo phone="79991597981" whatsapp="5579991597981" />
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ConvitePageProps> = async (context) => {
  const { id } = context.params as { id: string };
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/convite?id=${id}`);
    if (!res.ok) throw new Error("Erro ao carregar os convidados");
    const convidados = await res.json();
    return { props: { convidados } };
  } catch (err) {
    return { props: { convidados: [], error: "Erro ao carregar os convidados. Verifique o ID e tente novamente." } };
  }
};

export default ConvitePage;