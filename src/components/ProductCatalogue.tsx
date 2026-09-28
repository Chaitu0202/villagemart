import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Plus, 
  Minus, 
  Check, 
  Sparkles, 
  Tag, 
  SlidersHorizontal 
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../data/storeData';
import { useCart } from '../context/CartContext';

interface ProductCatalogueProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const { cart, addToCart, updateQuantity, lastAddedProduct } = useCart();
  const [filterMode, setFilterMode] = useState<'all' | 'popular' | 'offers'>('all');

  const popularKeywords = ['Atta', 'Rice', 'Oil', 'Biscuits', 'Soap', 'Tea', 'Dal'];

  // Filter products by category, search query, and filter mode
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Filter mode (Popular or Offers)
      if (filterMode === 'popular' && !product.isPopular) return false;
      if (filterMode === 'offers' && !product.isOffer) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        return matchesName || matchesBrand || matchesCategory;
      }

      return true;
    });
  }, [selectedCategory, filterMode, searchQuery]);

  const getCartQuantity = (productId: string) => {
    const item = cart.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="products" className="py-14 sm:py-20 bg-[#F9F6ED] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-white px-3 py-1 rounded-full border border-[#E8E2D2] mb-3">
            <Tag className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Priced Right · Fresh Stock</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
            YOUR EVERYDAY FAVOURITES
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Popular essentials from brands you already know and trust. Demo pricing shown for preview.
          </p>
        </div>

        {/* Search Bar & Fast Query Chips */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative flex items-center shadow-xs rounded-xl bg-white border-2 border-[#E8E2D2] focus-within:border-[#063B2A] transition-all">
            <Search className="w-5 h-5 text-neutral-400 ml-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for? (e.g. Rice, Atta, Oil, Biscuits...)"
              className="w-full py-3.5 pl-3 pr-10 text-sm sm:text-base bg-transparent focus:outline-none text-[#171717] placeholder:text-neutral-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-2 text-neutral-400 hover:text-neutral-700 mr-2"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick search suggestion chips */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-neutral-500 font-medium whitespace-nowrap">Try:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => setSearchQuery(kw)}
                className="px-2.5 py-1 bg-white hover:bg-[#F4C400]/20 border border-[#E8E2D2] rounded-md text-neutral-700 hover:text-[#063B2A] font-medium whitespace-nowrap transition-colors"
              >
                {kw}
              </button>
            ))}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#063B2A] font-bold underline hover:text-[#0B5A38] whitespace-nowrap ml-2"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category & Segment Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-[#E8E2D2] pb-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#063B2A] text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-[#E8E2D2]'
              }`}
            >
              All Items ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#063B2A] text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-[#E8E2D2]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick Filter toggle (All vs Popular vs Deals) */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#E8E2D2] text-xs font-medium self-end sm:self-auto shrink-0">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterMode === 'all' ? 'bg-[#063B2A] text-white font-bold' : 'text-neutral-600 hover:text-black'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('popular')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterMode === 'popular' ? 'bg-[#063B2A] text-white font-bold' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Popular
            </button>
            <button
              onClick={() => setFilterMode('offers')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterMode === 'offers' ? 'bg-[#063B2A] text-white font-bold' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Deals
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E8E2D2] p-12 text-center max-w-md mx-auto my-8">
            <Search className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#063B2A]">No products found</h3>
            <p className="text-sm text-neutral-500 mt-1 mb-6">
              Try searching for common staples like "Rice", "Atta", "Oil", "Biscuits", or "Soap".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
                setFilterMode('all');
              }}
              className="px-5 py-2.5 bg-[#063B2A] text-white text-xs font-bold rounded-lg hover:bg-[#0B5A38]"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => {
              const qtyInCart = getCartQuantity(product.id);
              const isJustAdded = lastAddedProduct?.id === product.id;
              const savings = Math.max(0, product.mrp - product.price);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-[#E8E2D2] hover:border-[#F4C400] hover:shadow-md transition-all duration-200 p-4 flex flex-col justify-between group text-left relative"
                >
                  {/* Card Badges */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B5A38]">
                      {product.brand}
                    </span>
                    {product.isOffer ? (
                      <span className="text-[10px] font-bold bg-[#F4C400] text-[#063B2A] px-2 py-0.5 rounded-full">
                        {product.offerTag || 'Special'}
                      </span>
                    ) : product.isPopular ? (
                      <span className="text-[10px] font-bold bg-[#E8E2D2] text-[#063B2A] px-2 py-0.5 rounded-full">
                        Top Seller
                      </span>
                    ) : null}
                  </div>

                  {/* Product Header / Visual Block */}
                  <div className="mb-3">
                    {/* Clean product visual container with Indian Kirana icon badge */}
                    <div className="w-full h-32 sm:h-36 rounded-xl bg-[#FFFDF5] border border-[#F1ECE1] flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:bg-[#FAF7EE] transition-colors">
                      <div className="w-14 h-14 rounded-full bg-[#063B2A]/5 flex items-center justify-center text-[#063B2A] mb-2">
                        <Sparkles className="w-7 h-7 text-[#0B5A38]" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-600 text-center line-clamp-1">
                        {product.packSize}
                      </span>
                      {savings > 0 && (
                        <span className="absolute bottom-2 left-2 text-[10px] font-bold text-[#0B5A38] bg-green-50 px-1.5 py-0.5 rounded">
                          Save ₹{savings}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#171717] mt-3 leading-snug line-clamp-2 min-h-11">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Net: {product.packSize}
                    </p>
                  </div>

                  {/* Price & CTA Action */}
                  <div className="pt-3 border-t border-neutral-100 mt-auto">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg sm:text-xl font-extrabold text-[#063B2A] tabular-nums">
                          ₹{product.price}
                        </span>
                        {product.mrp > product.price && (
                          <span className="text-xs text-neutral-400 line-through tabular-nums">
                            ₹{product.mrp}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-neutral-500 uppercase font-medium">
                        per {product.unit}
                      </span>
                    </div>

                    {/* Quantity Stepper or + ADD button */}
                    {qtyInCart > 0 ? (
                      <div className="flex items-center justify-between bg-[#063B2A] text-white rounded-xl p-1 shadow-xs">
                        <button
                          onClick={() => updateQuantity(product.id, qtyInCart - 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#0B5A38] active:scale-95 transition-all text-[#F4C400]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-bold tabular-nums px-2">
                          {qtyInCart} in Cart
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, qtyInCart + 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#0B5A38] active:scale-95 transition-all text-[#F4C400]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className={`w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer shadow-xs active:scale-95 ${
                          isJustAdded
                            ? 'bg-green-700 text-white'
                            : 'bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A]'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>ADDED!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>+ ADD</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Small Notice */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          Showing {filteredProducts.length} essentials · Prices subject to daily market rates · Need custom quantities? Contact on WhatsApp directly.
        </div>

      </div>
    </section>
  );
};
