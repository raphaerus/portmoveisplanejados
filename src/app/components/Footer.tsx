import { FiSend } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"; 
// Se der erro no 'fa', instale: npm install react-icons (já deve ter)

export default function Footer() {
  return (
    <footer className="bg-plantGreen text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        
        {/* === PARTE 1: Newsletter === */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-8 leading-snug">
            Stay In The Loop With Special Offers, <br />
            Plant Parenting Tips, & More.
          </h3>
          
          <div className="join w-full max-w-md h-12">
            {/* Input com fundo levemente transparente */}
            <input 
              type="email" 
              placeholder="Email" 
              className="input join-item w-full bg-white/10 border-none placeholder-white/50 text-white focus:outline-none h-full" 
            />
            <button className="btn join-item bg-plantTerracotta border-none hover:bg-plantTerracotta/80 text-white h-full px-6 text-xl">
              <FiSend />
            </button>
          </div>
        </div>

        {/* Linha Divisória Horizontal */}
        <div className="border-t border-white/20 mb-12"></div>

        {/* === PARTE 2: Colunas de Informação === */}
        {/* Usamos 'lg:divide-x' para criar as linhas verticais apenas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x divide-white/20 mb-16">
          
          {/* Coluna 1: Contato (Alinhado à esquerda) */}
          <div className="flex flex-col gap-6 lg:pr-12 text-sm text-white/80">
            <p>
              123 Hello Street, CA <br/>
              8034, LA
            </p>
            <p>
              +55 96 99999-9999 <br/>
              plants.ave@gmail.com
            </p>
          </div>

          {/* Coluna 2: Marca e Social (Centralizado) */}
          <div className="flex flex-col items-center text-center px-4">
            <h4 className="font-bold text-xl text-white mb-4">Plants Avenue</h4>
            <p className="text-sm text-white/70 mb-6 max-w-xs leading-relaxed">
              Caring for plants enhances your space with life. 
              Whether it's a small herb garden or thriving jungle.
            </p>
            {/* Ícones Sociais */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white text-plantGreen rounded-full hover:bg-plantTerracotta hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-white text-plantGreen rounded-full hover:bg-plantTerracotta hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-white text-plantGreen rounded-full hover:bg-plantTerracotta hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Coluna 3: Links (Alinhado à direita no desktop) */}
          <div className="flex flex-col items-center lg:items-end gap-3 lg:pl-12 font-medium">
             <h5 className="text-white/50 text-sm uppercase mb-2 self-center lg:self-end">Pages</h5>
             <a href="#" className="hover:text-plantTerracotta transition-colors">Home</a>
             <a href="#" className="hover:text-plantTerracotta transition-colors">Shop</a>
             <a href="#" className="hover:text-plantTerracotta transition-colors">About</a>
             <a href="#" className="hover:text-plantTerracotta transition-colors">Blog</a>
             <a href="#" className="hover:text-plantTerracotta transition-colors">Contact</a>
          </div>

        </div>

        {/* === PARTE 3: Copyright === */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40 tracking-wider">
          <p>© 2026 PLANTS AVENUE | ALL RIGHTS RESERVED</p>
          <p className="mt-2">DESIGN BY LA</p>
        </div>

      </div>
    </footer>
  );
}