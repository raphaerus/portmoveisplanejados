import Image from "next/image";
import { FiArrowRight, FiHeart } from "react-icons/fi";

// Dados fictícios para não repetir código HTML
const products = [
  { id: 1, name: "Homalomena Rubescens", price: "$4.00", image: "/assets/rubber-plant.png" }, // Usando a mesma img por enquanto
  { id: 2, name: "Licuala Grandis", price: "$4.00", image: "/assets/rubber-plant.png" },
  { id: 3, name: "Fiddle Leaf Fig", price: "$4.00", image: "/assets/rubber-plant.png" },
  { id: 4, name: "Homalomena Rubescens", price: "$4.00", image: "/assets/rubber-plant.png" },
  { id: 5, name: "Licuala Grandis", price: "$4.00", image: "/assets/rubber-plant.png" },
  { id: 6, name: "Fiddle Leaf Fig", price: "$4.00", image: "/assets/rubber-plant.png" },
];

export default function ProductSection() {
  return (
    // Fundo claro para contrastar com o Hero verde
    <section className="bg-[#F8F9F5] py-20 text-plantGreen">
      <div className="container mx-auto px-4">
        
        {/* === PARTE 1: Cartões de Destaque (Promo Cards) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Card 1 */}
          <div className="bg-[#EAECE5] rounded-3xl p-8 flex items-center justify-between relative overflow-hidden h-64 hover:shadow-lg transition-shadow">
            <div className="z-10 flex flex-col items-start gap-4">
               <span className="font-bold text-sm tracking-wide">Big Sale Products</span>
               <h3 className="font-serif text-4xl">Indoor <br/> Plants</h3>
               <a href="#" className="flex items-center gap-2 font-bold text-sm hover:text-plantTerracotta transition-colors">
                  SHOP NOW <FiArrowRight />
               </a>
            </div>
            {/* Imagem posicionada absolutamente para efeito de corte se necessário */}
            <div className="absolute -right-4 bottom-0 w-40 h-40 md:w-48 md:h-48">
              <Image src="/assets/rubber-plant.png" alt="Indoor Plants" fill className="object-contain" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EAECE5] rounded-3xl p-8 flex items-center justify-between relative overflow-hidden h-64 hover:shadow-lg transition-shadow">
            <div className="z-10 flex flex-col items-start gap-4">
               <span className="font-bold text-sm tracking-wide">Top Products</span>
               <h3 className="font-serif text-4xl">Herbal <br/> Plants</h3>
               <a href="#" className="flex items-center gap-2 font-bold text-sm hover:text-plantTerracotta transition-colors">
                  SHOP NOW <FiArrowRight />
               </a>
            </div>
            <div className="absolute -right-4 bottom-0 w-40 h-40 md:w-48 md:h-48">
              <Image src="/assets/rubber-plant.png" alt="Herbal Plants" fill className="object-contain" />
            </div>
          </div>

        </div>

        {/* === PARTE 2: Cabeçalho da Seção e Abas === */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-8 relative inline-block">
            Our Products
            {/* Linha decorativa abaixo do título */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-plantGreen/30 rounded-full"></span>
          </h2>
          
          {/* Botões de Filtro */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="btn bg-plantGreen text-white hover:bg-plantGreen-dark rounded-full px-6 border-none normal-case">
                What's New
            </button>
            <button className="btn btn-outline border-plantGreen/30 text-plantGreen hover:bg-plantGreen hover:text-white hover:border-plantGreen rounded-full px-6 normal-case">
                Best Sellers
            </button>
            <button className="btn btn-outline border-plantGreen/30 text-plantGreen hover:bg-plantGreen hover:text-white hover:border-plantGreen rounded-full px-6 normal-case">
                Customer Favorites
            </button>
          </div>
        </div>

        {/* === PARTE 3: Grid de Produtos === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            // Adicionamos 'group' aqui para controlar o hover do pai afetar os filhos
            <div key={index} className="group cursor-pointer">
              
              {/* Box da Imagem */}
              {/* O truque do hover está aqui: group-hover:bg-green-400 */}
              <div className="bg-[#EAECE5] rounded-[2rem] h-80 relative flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#68A57E] group-hover:shadow-xl">
                
                {/* Ícone de Coração */}
                <button className="absolute top-6 right-6 p-2 rounded-full bg-transparent z-20">
                    <FiHeart className="text-2xl text-plantGreen/60 transition-colors duration-300 group-hover:text-white" />
                </button>

                {/* Imagem do Produto */}
                <div className="relative w-48 h-48 transition-transform duration-300 group-hover:scale-110">
                   <Image 
                     src={product.image} 
                     alt={product.name} 
                     fill 
                     className="object-contain" 
                   />
                </div>
              </div>

              {/* Informações do Produto */}
              <div className="px-2">
                <h3 className="font-bold text-lg text-plantGreen group-hover:text-plantGreen-dark">
                    {product.name}
                </h3>
                <p className="text-plantTerracotta font-bold mt-1">
                    {product.price}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}