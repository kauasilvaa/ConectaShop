import React from 'react';
import { Smartphone, Headphones, Watch, Monitor, Zap, ChevronRight } from 'lucide-react';

const iconMap = {
  Smartphone: <Smartphone className="w-4 h-4" />,
  Headphones: <Headphones className="w-4 h-4" />,
  Watch: <Watch className="w-4 h-4" />,
  Monitor: <Monitor className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4 text-red-500" />,
};

export function CategoriesSidebar({ categories, onSelectCategory }) {
  return (
    <aside className="w-64 bg-white rounded-xl shadow-sm border border-gray-200 p-3 hidden lg:block">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">
        Categorias
      </h3>
      <nav className="space-y-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.name)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors group font-medium"
          >
            <div className="flex items-center gap-2.5">
              {iconMap[cat.icon]}
              <span>{cat.name}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
          </button>
        ))}
      </nav>
    </aside>
  );
}