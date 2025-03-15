"use client";

import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function PoliticaDePrivacidade() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F5F5F5, #E0E0E0)",
        fontFamily: "'Roboto', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          marginTop: "40px",
          marginBottom: "20px",
        }}
        onClick={() => router.push("/")}
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
          style={{ width: "240px", height: "auto" }}
        />
      </div>

      <div
        style={{
          maxWidth: "800px",
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "40px",
          textAlign: "justify",
          lineHeight: "1.6",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", marginBottom: "10px" }}>
          Política de Privacidade
        </h1>

        <p>
          A sua privacidade é importante para nós. É política do <strong>Shelda e Kalebe</strong> respeitar a sua privacidade
          em relação a qualquer informação sua que possamos coletar no site <strong>Shelda e Kalebe</strong>, e outros sites que possuímos e operamos.
        </p>

        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, 
          com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>

        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de 
          meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>

        <p>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>

        <p>
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites 
          e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>

        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>

        <p>
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. 
          Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          Google AdSense e Cookies
        </h2>

        <p>
          O serviço <strong>Google AdSense</strong> que usamos para veicular publicidade usa um cookie <strong>DoubleClick</strong> para veicular anúncios mais relevantes 
          em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
        </p>

        <p>
          Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
        </p>

        <p>
          Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. 
          Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, 
          rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          Compromisso do Usuário
        </h2>

        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o <strong>Shelda e Kalebe</strong> oferece no site e, com caráter enunciativo, mas não limitativo:
        </p>

        <ul style={{ paddingLeft: "20px" }}>
          <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública.</li>
          <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de azar, qualquer tipo de pornografia ilegal, apologia ao terrorismo ou contra os direitos humanos.</li>
          <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do <strong>Shelda e Kalebe</strong>, de seus fornecedores ou terceiros.</li>
          <li>D) Não introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos.</li>
        </ul>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          Mais Informações
        </h2>

        <p>
          Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro 
          deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
        </p>

        <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>
          Esta política é efetiva a partir de 15 de março de 2025.
        </p>
      </div>

      <Footer />
    </div>
  );
}
