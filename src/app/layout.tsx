import type { Metadata } from "next";
// 1. Importamos as fontes do Google
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css"; // Seu CSS com o Tailwind v4

// 2. Configuração da fonte padrão (Sans Serif para textos)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// 3. Configuração da fonte elegante (Serif para títulos grandes)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plants Avenue",
  description: "Bring the nature close to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* 4. Aplicamos as variáveis de fonte e as classes globais:
            - bg-plantGreen: define o fundo verde em todo o site
            - text-white: define a cor base do texto
            - antialiased: deixa a fonte mais nítida
      */}
      <body
        className={`
          ${inter.variable} 
          ${playfair.variable} 
          antialiased 
          bg-plantGreen 
          text-white 
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}