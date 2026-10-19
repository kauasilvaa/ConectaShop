import React from 'react';
import { Star, ShoppingCart, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden flex flex-col justify-between group">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-gray-50">
        {product.discountPercent && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-black px-1.5 py-0.5 rounded z-10">
            -{product.discountPercent}%
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium text-gray-800 text-xs sm:text-sm line-clamp-2 hover:text-red-600 transition-colors">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-1 mt-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
            <span className="text-[11px] text-gray-400 ml-1">{product.soldCount}</span>
          </div>

          {product.freeShipping && (
            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded w-fit">
              <Truck className="w-3 h-3" />
              <span>Frete Grátis</span>
            </div>
          )}
        </div>

        <div className="mt-3 flex items-end justify-between">
          <div>
            <span className="text-[11px] text-gray-400 line-through block">
              R$ {product.originalPrice.toFixed(2)}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-red-600">R$</span>
              <span className="text-lg font-extrabold text-red-600 leading-none">
                {product.price.toFixed(2)}
              </span>
            </div>
          </div>

          <button 
            onClick={() => onAddToCart(product)}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center shadow-sm"
            title="Adicionar ao Carrinho"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}