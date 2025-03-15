/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function TermosDeUso() {
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
          Termos de Uso
        </h1>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          1. Termos
        </h2>
        <p>
          Ao acessar ao site <strong>Shelda e Kalebe</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis 
          e reconhece que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar 
          ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          2. Uso de Licença
        </h2>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site <strong>Shelda e Kalebe</strong>, apenas 
          para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
        </p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Modificar ou copiar os materiais;</li>
          <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
          <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site <strong>Shelda e Kalebe</strong>;</li>
          <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
          <li>Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor.</li>
        </ul>
        <p>
          Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida pelo <strong>Shelda e Kalebe</strong> a qualquer 
          momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, 
          seja em formato eletrônico ou impresso.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          3. Isenção de Responsabilidade
        </h2>
        <p>
          Os materiais no site do <strong>Shelda e Kalebe</strong> são fornecidos "como estão". <strong>Shelda e Kalebe</strong> não oferece garantias, expressas ou implícitas, e, 
          por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação 
          a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          4. Limitações
        </h2>
        <p>
          Em nenhum caso o <strong>Shelda e Kalebe</strong> ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda 
          de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em <strong>Shelda e Kalebe</strong>, 
          mesmo que <strong>Shelda e Kalebe</strong> ou um representante autorizado tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          5. Precisão dos Materiais
        </h2>
        <p>
          Os materiais exibidos no site do <strong>Shelda e Kalebe</strong> podem incluir erros técnicos, tipográficos ou fotográficos. <strong>Shelda e Kalebe</strong> não 
          garante que qualquer material em seu site seja preciso, completo ou atual. <strong>Shelda e Kalebe</strong> pode fazer alterações nos materiais contidos 
          em seu site a qualquer momento, sem aviso prévio. No entanto, <strong>Shelda e Kalebe</strong> não se compromete a atualizar os materiais.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          6. Links
        </h2>
        <p>
          O <strong>Shelda e Kalebe</strong> não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. 
          A inclusão de qualquer link não implica endosso pelo <strong>Shelda e Kalebe</strong>. O uso de qualquer site vinculado é por conta e risco do usuário.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          7. Modificações
        </h2>
        <p>
          O <strong>Shelda e Kalebe</strong> pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda 
          em ficar vinculado à versão atual desses termos de serviço.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
          8. Lei Aplicável
        </h2>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as leis do <strong>Shelda e Kalebe</strong>, e você se submete irrevogavelmente à 
          jurisdição exclusiva dos tribunais naquela localidade.
        </p>

        <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>
          Estes termos são válidos a partir de 15 de março de 2025.
        </p>
      </div>

      <Footer />
    </div>
  );
}
