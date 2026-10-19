import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export function Navbar({ cartCount = 0, onOpenCart }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-xl font-black text-xl tracking-wider">
                CS
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight hidden sm:inline">
                Conecta<span className="text-blue-600">Shop</span>
              </span>
            </a>
          </div>

          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="Buscar produtos, marcas e categorias..."
              className="w-full bg-gray-100 text-gray-800 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Entrar</span>
            </button>

            <button 
              onClick={onOpenCart}
              className="relative p-2.5 text-gray-700 hover:text-blue-600 transition-colors bg-gray-100 rounded-full hover:bg-gray-200"
              title="Carrinho"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}