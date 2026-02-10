import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
// Importando ícones específicos para: Umidade, Pragas e Poda
import { RiDropLine, RiBugLine, RiScissorsCutLine } from "react-icons/ri";

export default function CareGuide() {
  return (
    <section className="bg-[#F8F9F5] py-24 text-plantGreen">
      <div className="container mx-auto px-4">
        
        {/* === PARTE 1: Cabeçalho e Passos === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Steps to start taking care of your plants
          </h2>
          <p className="text-gray-500">
            The right solution for the care of green and smart plants
          </p>
        </div>

        {/* Grid de 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          
          {/* Passo 1: Humidity */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-plantGreen rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
              <RiDropLine className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Humidity Control</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Effective humidity control is essential for properly caring for plants, 
              ensuring optimal growth and overall health.
            </p>
          </div>

          {/* Passo 2: Pest */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-plantGreen rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
              <RiBugLine className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Pest Anticipation</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Implementing proactive pest anticipation measures is essential to safeguard 
              and nurture the well-being of plants.
            </p>
          </div>

          {/* Passo 3: Pruning */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-plantGreen rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
              <RiScissorsCutLine className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Pruning Weeds</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Taking care of plants involves diligently managing unwanted growth 
              to ensure their well-being.
            </p>
          </div>

        </div>

        {/* === PARTE 2: Card Grande Final === */}
        <div className="bg-[#EAECE5] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row min-h-[400px]">
          
          {/* Lado Esquerdo: Imagem (Monstera) */}
          <div className="w-full md:w-5/12 relative h-64 md:h-auto">
             {/* Use uma imagem de folhas ou 'monstera' aqui */}
             <Image 
               src="/assets/rubber-plant.png" // Substitua por uma imagem cheia de folhas verdes
               alt="Green Leaves" 
               fill 
               className="object-cover"
             />
          </div>

          {/* Lado Direito: Texto */}
          <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center items-start">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-plantGreen">
              Come with us how to grow your plants to be better and healthier
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join us on a journey to learn the art of growing healthier and more vibrant plants. 
              We're here to share tips and insights that will help you nurture your garden to its fullest potential.
            </p>
            <button className="btn bg-plantTerracotta hover:bg-plantTerracotta/90 text-white border-none rounded-full px-8 normal-case flex items-center gap-2">
              Read More <FiArrowRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}