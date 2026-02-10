import { FiSend, FiMapPin, FiPhone } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { clientData } from "@/_data/clientData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-plantGreen text-white pt-20 pb-8">
      <div className="container mx-auto px-4">

        {/* === PARTE 1: Newsletter (Mantido como exemplo visual) === */}
        

        <div className="border-t border-white/20 mb-12"></div>

        {/* === PARTE 2: Colunas de Informação === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16 text-center md:text-left">

          {/* Coluna 1: Sobre & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-xl text-white mb-4">{clientData.businessName}</h4>
            <p className="text-sm text-white/70 mb-6 max-w-xs leading-relaxed">
              {clientData.hero.subtitle}
            </p>

            {/* Ícones Sociais - Renderização Condicional */}
            <div className="flex gap-4">
              {/* WhatsApp (Sempre ativo pois é core do negócio) */}
              <a
                href={`https://wa.me/${clientData.whatsappNumber}`}
                target="_blank"
                className="p-2 bg-white text-plantGreen rounded-full hover:bg-green-600 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              {/* Instagram (Opcional) */}
              {clientData.instagram && (
                <a
                  href={clientData.instagram}
                  target="_blank"
                  className="p-2 bg-white text-plantGreen rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
            </div>
          </div>

          {/* Coluna 2: Contato & Endereço */}
          <div className="flex flex-col items-center md:items-start text-white/80 text-sm gap-4">
            <h5 className="font-bold text-white uppercase tracking-wider mb-2">Contato</h5>

            {/* Endereço Físico (Opcional) */}
            {clientData.fullAddress && (
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-plantTerracotta" size={18} />
                <span>{clientData.fullAddress}</span>
              </div>
            )}

            {/* Telefone / WhatsApp */}
            <div className="flex items-center gap-3">
              <FiPhone className="flex-shrink-0 text-plantTerracotta" size={18} />
              <span>WhatsApp: {clientData.whatsappNumber}</span>
            </div>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h5 className="font-bold text-white uppercase tracking-wider mb-4">Navegação</h5>
            <a href="#" className="hover:text-plantTerracotta transition-colors">Início</a>
            <a href="#projetos" className="hover:text-plantTerracotta transition-colors">Projetos</a>
            <a href={`https://wa.me/${clientData.whatsappNumber}`} className="hover:text-plantTerracotta transition-colors">Solicitar Orçamento</a>
          </div>

        </div>

        {/* === PARTE 3: Copyright === */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40 tracking-wider">
          <p>© {currentYear} {clientData.businessName} | Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}