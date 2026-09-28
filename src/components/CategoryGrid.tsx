import React from 'react';
import { 
  Wheat, 
  Cookie, 
  Coffee, 
  Milk, 
  Sparkles, 
  Home, 
  Heart, 
  Flame, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../data/storeData';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  // Map icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat': return Wheat;
      case 'Cookie': return Cookie;
      case 'Coffee': return Coffee;
      case 'Milk': return Milk;
      case 'Sparkles': return Sparkles;
      case 'Home': return Home;
      case 'Heart': return Heart;
      case 'Flame': return Flame;
      default: return Wheat;
    }
  };

  return (
    <section id="categories" className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#0B5A38]">
              <span>Store Department</span>
              <span aria-hidden="true">·</span>
              <span>All 8 Aisles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
              EVERYTHING YOU NEED.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
              From everyday groceries to household essentials, find what you need in one place.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#063B2A] hover:text-[#0B5A38] group cursor-pointer"
          >
            <span>VIEW ALL CATEGORIES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#F4C400]" />
          </button>
        </div>

        {/* 8-Grid of Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative group p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#063B2A] text-white border-[#F4C400] shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-[#FDFBF7] text-[#171717] border-[#E8E2D2] hover:border-[#F4C400] hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isSelected
                        ? 'bg-[#F4C400] text-[#063B2A]'
                        : 'bg-[#063B2A]/10 text-[#063B2A] group-hover:bg-[#F4C400] group-hover:text-[#063B2A]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold tabular-nums px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#0B5A38] text-[#F4C400]' : 'bg-[#F1ECE1] text-neutral-600'
                    }`}>
                      {cat.itemCount}+ items
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold leading-snug mb-1 font-display ${
                    isSelected ? 'text-white' : 'text-[#063B2A]'
                  }`}>
                    {cat.name}
                  </h3>

                  <p className={`text-xs line-clamp-2 leading-relaxed mb-4 ${
                    isSelected ? 'text-neutral-300' : 'text-neutral-500'
                  }`}>
                    {cat.tagline}
                  </p>
                </div>

                <div className={`flex items-center justify-between text-xs font-semibold pt-3 border-t ${
                  isSelected ? 'border-[#0B5A38] text-[#F4C400]' : 'border-neutral-100 text-[#063B2A]'
                }`}>
                  <span>Browse aisle</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
