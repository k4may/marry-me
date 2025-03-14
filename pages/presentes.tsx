// pages/presentes.tsx
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import PresenteCard from "../components/PresenteCard";
import Filtros from "../components/Filtros";
import LoadingSpinner from "../components/LoadingSpinner";

interface Presente {
  nome: string;
  valor: number;
  imagem: string;
  categoria: string;
  descricao: string;
}

const PresentesPage = () => {
  const [presentes, setPresentes] = useState<Presente[]>([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [ordenacao, setOrdenacao] = useState<"crescente" | "decrescente">(
    "crescente"
  );
  const router = useRouter();

  useEffect(() => {
    const fetchPresentes = async () => {
      try {
        const res = await fetch("/api/presentes");
        if (!res.ok) throw new Error("Erro ao carregar os presentes");
        const data = await res.json();
        setPresentes(data);

        const categoriasUnicas = Array.from(
          new Set(
            data.flatMap((p: Presente) =>
              p.categoria.split(",").map((cat) => cat.trim())
            )
          )
        ) as string[];
        setCategorias(categoriasUnicas);
      } catch (err) {
        setError(
          "Erro ao carregar os presentes. Tente novamente mais tarde. " + err
        );
      } finally {
        setLoading(false);
      }
    };
    fetchPresentes();
  }, []);

  const handleOrdenacao = () => {
    setOrdenacao(ordenacao === "crescente" ? "decrescente" : "crescente");
  };

  const presentesFiltrados = presentes
    .filter(
      (presente) =>
        presente.nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
        (filtroCategoria === "" ||
          presente.categoria
            .split(",")
            .map((cat) => cat.trim())
            .includes(filtroCategoria))
    )
    .sort((a, b) => {
      if (ordenacao === "crescente") {
        return a.valor - b.valor;
      } else {
        return b.valor - a.valor;
      }
    });

  const handlePagamento = async (presente: Presente) => {
    try {
      const res = await fetch("/api/pagamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(presente),
      });

      const data = await res.json();

      if (data.preferenceId) {
        window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.preferenceId}`;
      } else {
        alert("Erro ao processar o pagamento");
      }
    } catch (error) {
      alert("Erro ao processar o pagamento " + error);
    }
  };

  const handleClick = (path: string) => {
    if (path === "/") {
      router.push(path);
    }
  };

  return (
    <>
      <Head>
        <title>Lista de Presentes - Casamento de Kalebe e Shelda</title>
        <meta
          name="description"
          content="Confira a lista de presentes para o casamento de Kalebe e Shelda. Ajude-nos a realizar nossos sonhos!"
        />
        <meta
          name="keywords"
          content="presentes, ideias, presentes para casamento, presentes para ela, presentes para ele"
        />
        <meta name="author" content="Kalebe" />
        <meta
          property="og:title"
          content="PLista de Presentes - Casamento de Kalebe e Shelda"
        />
        <meta
          property="og:description"
          content="Confira a lista de presentes para o casamento de Kalebe e Shelda. Ajude-nos a realizar nossos sonhos!"
        />
        <meta property="og:image" content="/brasao-casamento.png" />
      </Head>
      <div
        style={{
          padding: "40px",
          background: "linear-gradient(135deg, #F5F5F5, #E0E0E0)",
          minHeight: "100vh",
          fontFamily: "'Roboto', sans-serif",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img
            src="/brasao-casamento.png"
            alt="Brasão do Casamento"
            onClick={() => handleClick("/")}
            style={{
              width: "240px",
              height: "auto",
            }}
          />
        </div>

        <Filtros
          filtroNome={filtroNome}
          setFiltroNome={setFiltroNome}
          filtroCategoria={filtroCategoria}
          setFiltroCategoria={setFiltroCategoria}
          categorias={categorias}
          ordenacao={ordenacao}
          handleOrdenacao={handleOrdenacao}
        />

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div
            style={{
              textAlign: "center",
              color: "#D32F2F",
              fontSize: "1.2rem",
            }}
          >
            {error}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "60px",
              padding: "0 20px",
            }}
          >
            {presentesFiltrados.map((presente) => (
              <PresenteCard
                key={presente.nome}
                presente={presente}
                onPresentear={handlePagamento}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PresentesPage;