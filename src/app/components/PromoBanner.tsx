import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function PromoBanner() {
  return (
    <section className="bg-plantGreen py-20 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* === LADO ESQUERDO: Texto === */}
        <div className="max-w-lg z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Grow Plant For <br /> A Better Life
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed max-w-sm">
            Cultivating plants enhances well-being and contributes to a healthier environment, 
            fostering a more fulfilling life.
          </p>
          <button className="btn bg-plantTerracotta hover:bg-plantTerracotta/90 text-white border-none rounded-full px-8 normal-case flex items-center gap-2">
            Read More <FiArrowRight />
          </button>
        </div>

        {/* === LADO DIREITO: Círculos de Imagem === */}
        <div className="relative w-full md:w-1/2 h-[300px] flex items-center justify-center md:justify-end">
          
          {/* Círculo Menor (Trás) */}
          <div className="absolute right-[20%] md:right-[35%] top-0 w-48 h-48 bg-white rounded-full p-2 shadow-lg z-0">
             <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100">
               <Image src="/assets/rubber-plant.png" alt="Plant 1" fill className="object-cover" />
             </div>
          </div>

          {/* Círculo Maior (Frente) */}
          <div className="absolute right-0 md:right-[10%] bottom-0 w-64 h-64 bg-white rounded-full p-2 shadow-2xl z-10">
             <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100">
               <Image src="/assets/rubber-plant.png" alt="Plant 2" fill className="object-cover" />
             </div>
          </div>

        </div>
      </div>

      {/* Elemento decorativo de fundo (opcional - círculo sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </section>
  );
}