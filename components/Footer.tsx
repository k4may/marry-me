import "../src/app/globals.css";

const Footer = () => {
    return (
      <footer className=" text-gray-400 text-center py-6 mt-10">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Casamento de Kalebe e Shelda. Todos os direitos reservados.
          </p>
          <div className="mt-2 space-x-4">
            <a href="/termos-de-uso" className="hover:text-white transition">
              Termos de Uso
            </a>
            <span>|</span>
            <a href="/politica-de-privacidade" className="hover:text-white transition">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  