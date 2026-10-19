import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, ShoppingCart, ArrowLeft } from 'lucide-react';
import { MOCK_PRODUCTS } from '../mock/products';

export function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((p) => p.id === id) || MOCK_PRODUCTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 font-medium mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar às ofertas
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem do Produto */}
        <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
          <img src={product.image} alt={product.name} className="w-full max-h-96 object-contain" />
        </div>

        {/* Informações e Compra */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md uppercase">
              {product.category}
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-gray-800">{product.rating}</span>
              </div>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500 font-medium">{product.soldCount}</span>
            </div>

            <div className="mt-6 bg-red-50/60 p-4 rounded-xl border border-red-100">
              <span className="text-xs text-gray-400 line-through">R$ {product.originalPrice.toFixed(2)}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-red-600">R$ {product.price.toFixed(2)}</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                  -{product.discountPercent}% OFF
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span><strong>Frete Grátis</strong> para todo o Brasil em compras qualificadas.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>Garantia de proteção ao comprador de 7 dias.</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}