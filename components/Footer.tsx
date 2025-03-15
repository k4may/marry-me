import Link from "next/link";
import "../src/app/globals.css";

const Footer = () => {
  return (
    <footer className="text-gray-400 text-center py-6 mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Casamento de Kalebe e Shelda. Todos os direitos reservados.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/termos-de-uso" className="hover:text-white transition">
            Termos de Uso
          </Link>
          <span>|</span>
          <Link href="/politica-de-privacidade" className="hover:text-white transition">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
