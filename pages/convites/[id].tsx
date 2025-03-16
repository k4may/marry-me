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
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { GetServerSideProps } from "next";

// Import the map component with dynamic loading (no SSR)
const VenueMap = dynamic(() => import("../../components/VenueMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "300px",
        background: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Carregando mapa...
    </div>
  ),
});

interface Convidado {
  nome: string;
  id: string;
  confirmado: boolean;
}

interface ConvitePageProps {
  convidados: Convidado[];
  error?: string;
}

const ConvitePage = ({ convidados: initialConvidados, error }: ConvitePageProps) => {
  const router = useRouter();
  const { id } = router.query;

  const [convidados, setConvidados] = useState<Convidado[]>(initialConvidados);
  const [confirmacoes, setConfirmacoes] = useState<{ [key: string]: boolean }>(() => {
    const initialConfirmacoes: { [key: string]: boolean } = {};
    initialConvidados.forEach((convidado) => {
      initialConfirmacoes[convidado.nome] = convidado.confirmado;
    });
    return initialConfirmacoes;
  });

  const [isLoading, setIsLoading] = useState(false);

  // Atualiza o estado `convidados` sempre que `initialConvidados` mudar
  useEffect(() => {
    setConvidados(initialConvidados);
    const updatedConfirmacoes: { [key: string]: boolean } = {};
    initialConvidados.forEach((convidado) => {
      updatedConfirmacoes[convidado.nome] = convidado.confirmado;
    });
    setConfirmacoes(updatedConfirmacoes);
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

      for (const nome of confirmados) {
        const convidado = convidados.find((c) => c.nome === nome);
        if (convidado) {
          const response = await fetch("/api/convite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nome: convidado.nome,
              id: convidado.id,
              confirmado: true,
            }),
          });

          if (!response.ok) {
            throw new Error("Erro ao confirmar presença");
          }

          // Atualiza o estado local do convidado após a confirmação
          const updatedConvidados = convidados.map((c) =>
            c.nome === nome ? { ...c, confirmado: true } : c
          );
          setConvidados(updatedConvidados);
        }
      }

      alert("Confirmações enviadas com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar confirmações:", error);
      alert("Ocorreu um erro ao enviar as confirmações. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const gerarTitulo = () => {
    if (convidados.length === 1) {
      return `Convite do ${convidados[0].nome}`;
    } else if (convidados.length > 1) {
      const nomes = convidados.map((c) => c.nome).join(" e ");
      return `Convite de ${nomes}`;
    }
    return "Convite - Casamento de Kalebe e Shelda";
  };

  const gerarDescricao = () => {
    if (convidados.length === 1) {
      return `${convidados[0].nome}, você está convidado(a) para celebrar conosco o dia mais especial de nossas vidas. Será uma honra ter sua presença no nosso casamento!`;
    } else if (convidados.length > 1) {
      const nomes = convidados.map((c) => c.nome).join(" e ");
      return `${nomes}, vocês estão convidados(as) para celebrar conosco o dia mais especial de nossas vidas. Será uma honra ter suas presenças no nosso casamento!`;
    }
    return "Celebre conosco o dia mais especial de nossas vidas. Será uma honra ter sua presença no nosso casamento!";
  };

  return (
    <>
      <Header title={gerarTitulo()} description={gerarDescricao()} />
      <div
        style={{
          padding: "20px",
          background: "linear-gradient(135deg, #F5F5F5, #E0E0E0)",
          minHeight: "100vh",
          fontFamily: "'Roboto', sans-serif",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          textAlign: "center",
        }}
      >
        <div className="flex justify-center items-center mb-8">
          <img
            src="/brasao-casamento.png"
            alt="Brasão do Casamento"
            onClick={() => router.push("/")}
            className="w-60 h-auto"
          />
        </div>

        {error ? (
          <div style={{ color: "#D32F2F", fontSize: "1.2rem", marginTop: "20px" }}>
            {error}
          </div>
        ) : (
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              padding: "20px",
              background: "#FFFFFF",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
              {gerarTitulo()}
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#555" }}>
              {gerarDescricao()}
            </p>

            {/* Confirmação de Presença */}
            <ConvidadoList
              convidados={convidados}
              confirmacoes={confirmacoes}
              toggleConfirmacao={toggleConfirmacao}
            />

            <ConfirmButton isLoading={isLoading} onClick={enviarConfirmacoes} />

            {/* Local do Casamento */}
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
                Local do Casamento
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "10px", color: "#555" }}>
                Villa Floresta
              </p>

              <VenueMap />

              <div className="flex justify-center space-x-4 mt-3 mb-3">
                <a
                  href="https://maps.app.goo.gl/Jbha1qdfgYs5n8MZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                >
                  <FaMapMarkerAlt className="mr-1" /> Ver no Google Maps
                </a>

                <a
                  href="https://www.instagram.com/villa.floresta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                >
                  <FaInstagram className="mr-1" /> villa.floresta
                </a>
              </div>
            </div>

            {/* Dúvidas ou Informações */}
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
                Dúvidas ou Informações
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "10px", color: "#555" }}>
                Entre em contato diretamente com o noivo:
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:79991597981"
                  className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                >
                  <FaPhone className="mr-1" /> (79) 99159-7981
                </a>

                <a
                  href="https://wa.me/5579991597981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                >
                  <FaWhatsapp className="mr-1" /> WhatsApp
                </a>
              </div>
            </div>
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
    return {
      props: {
        convidados,
      },
    };
  } catch (err) {
    return {
      props: {
        convidados: [],
        error: "Erro ao carregar os convidados. Verifique o ID e tente novamente.",
      },
    };
  }
};

export default ConvitePage;