import React, { useState } from 'react';
import { CategoriesSidebar } from '../components/CategoriesSidebar';
import { BannerCarousel } from '../components/BannerCarousel';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../mock/products';

export function Home({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? MOCK_PRODUCTS.filter(p => p.category === selectedCategory)
    : MOCK_PRODUCTS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Topo estilo Marketplace: Sidebar + Banner */}
      <div className="flex gap-6 items-stretch">
        <CategoriesSidebar 
          categories={MOCK_CATEGORIES} 
          onSelectCategory={(cat) => setSelectedCategory(selectedCategory === cat ? null : cat)}
        />
        <BannerCarousel />
      </div>

      {/* Grade de Produtos */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-gray-900 tracking-tight">
              {selectedCategory ? `Categoria: ${selectedCategory}` : 'Escolhas Especiais para Você'}
            </h2>
            {selectedCategory && (
              <button 
                onClick={() => setSelectedCategory(null)}
                className="text-xs text-red-600 hover:underline font-semibold"
              >
                (Limpar filtro)
              </button>
            )}
          </div>
          <span className="text-xs text-gray-500 font-medium">{filteredProducts.length} itens encontrados</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}