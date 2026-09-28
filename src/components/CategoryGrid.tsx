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
  ArrowRight,
  CheckCircle2
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
    <section id="categories" className="py-14 sm:py-20 bg-[#FFFDF5] border-b-2 border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-black uppercase tracking-wider text-[#063B2A] bg-[#F4C400] px-3.5 py-1 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 fill-[#063B2A]" />
              <span>SHOP BY DEPARTMENT · 8 SPECIALIZED AISLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#063B2A] tracking-tight font-display">
              EVERYTHING YOU NEED.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
              From everyday groceries to household essentials, find what you need in one place.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#063B2A] hover:text-[#0B5A38] group cursor-pointer bg-white px-4 py-2 rounded-xl border border-[#E8E2D2] shadow-2xs hover:shadow-xs"
          >
            <span>VIEW ALL 8 DEPARTMENTS</span>
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
                className={`relative group p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#063B2A] text-white border-[#F4C400] shadow-xl scale-[1.03] gold-glow'
                    : 'bg-white hover:bg-[#FDFBF7] text-[#171717] border-[#E8E2D2] hover:border-[#F4C400] hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#F4C400] text-[#063B2A] shadow-md scale-105'
                        : 'bg-[#063B2A]/10 text-[#063B2A] group-hover:bg-[#F4C400] group-hover:text-[#063B2A] group-hover:scale-105 shadow-xs'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-black tabular-nums px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isSelected ? 'bg-[#0B5A38] text-[#F4C400] border border-[#F4C400]/40' : 'bg-[#F4C400]/20 text-[#063B2A] border border-[#F4C400]/40'
                    }`}>
                      {cat.itemCount}+ items
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-black leading-snug mb-1 font-display ${
                    isSelected ? 'text-white' : 'text-[#063B2A] group-hover:text-[#0B5A38]'
                  }`}>
                    {cat.name}
                  </h3>

                  <p className={`text-xs line-clamp-2 leading-relaxed mb-3 ${
                    isSelected ? 'text-neutral-200' : 'text-neutral-500'
                  }`}>
                    {cat.tagline}
                  </p>

                  {/* Popular Brand Highlights */}
                  <div className="mb-3 flex flex-wrap gap-1">
                    {cat.popularItems.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-white/15 text-neutral-200' : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`flex items-center justify-between text-xs font-black pt-3 border-t ${
                  isSelected ? 'border-[#0B5A38] text-[#F4C400]' : 'border-neutral-100 text-[#063B2A]'
                }`}>
                  <span>Browse Products</span>
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
