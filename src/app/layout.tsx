import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casamento de Kalebe e Shelda",
  description: "Bem-vindos ao nosso site de casamento! Acompanhe os detalhes da nossa celebração, que acontecerá em outubro.",
  keywords: ["casamento", "Kalebe", "Shelda", "outubro", "celebração"],
  authors: [{ name: "Kalebe e Shelda" }],
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Casamento de Kalebe e Shelda",
    description: "Bem-vindos ao nosso site de casamento! Acompanhe os detalhes da nossa celebração, que acontecerá em outubro.",
    type: "website",
    url: "https://casamento-kalebe-shelda.com", 
    images: [
      {
        url: "/brasao-casamento.png",
        width: 240,
        height: 240,
        alt: "Brasão do Casamento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casamento de Kalebe e Shelda",
    description: "Bem-vindos ao nosso site de casamento! Acompanhe os detalhes da nossa celebração, que acontecerá em outubro.",
    images: ["/brasao-casamento.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}