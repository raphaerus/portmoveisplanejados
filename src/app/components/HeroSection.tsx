import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <div className="hero flex-1 container mx-auto px-4 pb-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24 w-full justify-between">
        
        {/* === LADO DIREITO: Arco e Imagem === */}
        <div className="relative mt-8 lg:mt-0">
          {/* Fundo Bege em Arco */}
          <div className="w-[320px] h-[420px] md:w-[400px] md:h-[500px] bg-plantBeige rounded-t-full relative flex items-end justify-center mx-auto">
             
             {/* Imagem da Planta (Coloque seu arquivo em public/assets/) */}
             <div className="relative w-[90%] h-[90%] mb-4">
                <Image 
                  src="/assets/rubber-plant.png" // Certifique-se que essa imagem existe!
                  alt="Planta decorativa" 
                  fill 
                  className="object-contain"
                  priority
                />
             </div>

             {/* Bolinha do Preço */}
             <div className="absolute top-[25%] -left-4 md:-left-8 bg-plantGreen-dark h-20 w-20 md:h-24 md:w-24 rounded-full flex flex-col justify-center items-center border-[6px] border-plantGreen shadow-lg z-20">
                <span className="text-xs md:text-sm text-white/70">Price</span>
                <span className="text-xl md:text-2xl font-bold text-white">$8</span>
             </div>
          </div>
        </div>

        {/* === LADO ESQUERDO: Textos === */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif text-white mb-6">
            Bring The Nature <br className="hidden md:block"/> Close To You
          </h1>
          
          <p className="py-6 text-white/80 text-lg font-light max-w-md mx-auto lg:mx-0 mb-4">
            Enhance your space with our indoor and herb plants. 
            Experience the calming effect of greenery, right at home.
          </p>
          
          <button className="btn bg-plantTerracotta hover:bg-plantTerracotta/90 text-white border-none rounded-full px-8 h-14 text-base normal-case flex items-center gap-3 mx-auto lg:mx-0 shadow-lg">
            Discover Now <FiArrowRight className="text-xl"/>
          </button>
        </div>

      </div>
    </div>
  );
}