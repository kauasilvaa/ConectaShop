import React from 'react';

export function BannerCarousel() {
  return (
    <div className="flex-1 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 rounded-2xl p-6 text-white shadow-md flex flex-col justify-between relative overflow-hidden min-h-[220px]">
      <div className="relative z-10 max-w-lg">
        <span className="bg-amber-400 text-red-950 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
          Super Ofertas do Dia
        </span>
        <h2 className="text-2xl sm:text-4xl font-black mt-2 leading-tight">
          Até 70% OFF em Tecnologia & Acessórios
        </h2>
        <p className="text-rose-100 text-sm mt-1">
          Frete Grátis na primeira compra e cupons acumulativos para todo o Brasil.
        </p>
      </div>

      <div className="relative z-10 mt-4 flex items-center gap-3">
        <button className="bg-white text-red-600 font-extrabold px-5 py-2.5 rounded-xl hover:bg-rose-50 transition-colors shadow">
          Resgatar Cupons
        </button>
        <span className="text-xs text-rose-100 font-semibold">Ofertas por tempo limitado ⏱️</span>
      </div>

      {/* Círculo decorativo ao fundo estilo marketplace */}
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}