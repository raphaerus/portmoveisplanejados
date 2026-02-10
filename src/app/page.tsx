import MasonryGallery from '@/components/MasonryGallery';
import { clientData } from "@/_data/clientData";
import { ArrowRight } from 'lucide-react'; // Instale lucide-react se não tiver, ou use SVG

export default function Home() {
  return (
    <main className="min-h-screen font-sans">

      {/* HERO SECTION */}
      <div className="relative h-[500px] flex items-center justify-center text-center px-4">
        {/* Imagem de Fundo com Overlay Escuro */}
        <div className="absolute inset-0 z-0">
          <img src={clientData.hero.bgImage} alt="Fundo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Conteúdo Hero */}
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {clientData.businessName}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {clientData.hero.subtitle}
          </p>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Projetos Realizados <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* GALERIA */}
      <MasonryGallery />

      {/* RODAPÉ SIMPLES */}
      <footer className="bg-stone-900 text-stone-400 py-8 text-center">
        <p>© 2024 {clientData.businessName}. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Atendendo em {clientData.location}</p>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP (Extra que cliente ama) */}
      <a
        href={`https://wa.me/${clientData.whatsappNumber}`}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl animate-bounce"
        target="_blank"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.21C10.43 20.21 8.94 19.78 7.66 19.02L7.36 18.84L4.25 19.66L5.08 16.63L4.89 16.33C4.07 15.02 3.75 13.48 3.75 11.91C3.75 7.34 7.47 3.62 12.05 3.62C14.28 3.62 16.37 4.49 17.95 6.07C19.53 7.65 20.4 9.74 20.4 11.92C20.4 16.49 16.68 20.21 12.05 20.21Z" />
        </svg>
      </a>
    </main>
  );
}