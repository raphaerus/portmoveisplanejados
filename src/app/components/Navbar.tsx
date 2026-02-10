import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
// MUDANÇA AQUI: Trocamos 'GiPottedPlant' (que não existe) por 'PiPottedPlant'
import { PiPottedPlant } from "react-icons/pi"; 

export default function Navbar() {
  return (
    <div className="navbar container mx-auto py-6 px-4">
      {/* Esquerda: Logo */}
      <div className="navbar-start">
        <a className="btn btn-ghost hover:bg-transparent px-0 text-xl normal-case flex items-center gap-2 text-white">
          {/* MUDANÇA AQUI: Usando o novo ícone */}
          <PiPottedPlant className="text-plantTerracotta text-3xl" />
          <span className="font-bold">Plants Avenue</span>
        </a>
      </div>

      {/* ... o resto do código continua igual ... */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium text-white/90 gap-8">
          <li><a className="hover:text-plantTerracotta transition-colors">Home</a></li>
          <li><a className="hover:text-plantTerracotta transition-colors">Shop</a></li>
          <li><a className="hover:text-plantTerracotta transition-colors">About</a></li>
          <li><a className="hover:text-plantTerracotta transition-colors">Blog</a></li>
          <li><a className="hover:text-plantTerracotta transition-colors">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end flex gap-6 text-xl text-white">
        <button className="hover:text-plantTerracotta transition-colors"><FiHeart /></button>
        <button className="hover:text-plantTerracotta transition-colors"><FiShoppingBag /></button>
        <button className="hover:text-plantTerracotta transition-colors"><FiUser /></button>
      </div>
    </div>
  );
}