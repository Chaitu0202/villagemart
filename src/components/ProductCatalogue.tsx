import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Plus, 
  Minus, 
  Check, 
  Sparkles, 
  Tag, 
  Flame, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product, STORE_INFO } from '../data/storeData';
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
  const { cart, addToCart, updateQuantity, lastAddedProduct, setIsCartOpen } = useCart();
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

  // Quick action to add the Featured Deal of the Day Combo (Atta + Oil + Salt)
  const handleAddDealOfTheDay = () => {
    const atta = PRODUCTS.find((p) => p.id === 'prod-1');
    const oil = PRODUCTS.find((p) => p.id === 'prod-3');
    const salt = PRODUCTS.find((p) => p.id === 'prod-2');

    if (atta) addToCart(atta, 1);
    if (oil) addToCart(oil, 1);
    if (salt) addToCart(salt, 1);

    setTimeout(() => {
      setIsCartOpen(true);
    }, 400);
  };

  return (
    <section id="products" className="py-14 sm:py-20 bg-[#F9F6ED] border-b-2 border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#063B2A] bg-[#F4C400] px-4 py-1.5 rounded-full shadow-xs border border-white/50 mb-3">
            <Flame className="w-3.5 h-3.5 fill-[#063B2A]" />
            <span>DAILY FRESH STOCK · FAIR VILLAGE PRICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#063B2A] tracking-tight font-display">
            YOUR EVERYDAY FAVOURITES
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Popular pantry staples and daily essentials from brands you already know and trust.
          </p>
        </div>

        {/* Featured Deal of the Day Spotlight Banner */}
        <div className="mb-10 bg-gradient-to-r from-[#063B2A] via-[#0B5A38] to-[#04261B] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#F4C400] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4C400] rounded-full blur-3xl opacity-15 pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="bg-[#F4C400] text-[#063B2A] text-xs font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  🔥 SPOTLIGHT DEAL OF THE DAY
                </span>
                <span className="text-xs text-[#F4C400] font-bold">
                  Village Kitchen Triple Saver
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                Aashirvaad Atta (5kg) + Fortune Sunflower Oil (1L) + Tata Salt (1kg)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200">
                Regular MRP: <span className="line-through text-neutral-400">₹460</span> · <strong className="text-[#F4C400] text-base">Store Combo Price: ₹411</strong> (Instant Village Savings of ₹49!)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleAddDealOfTheDay}
                className="px-6 py-3.5 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] font-black text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer gold-glow whitespace-nowrap"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>ADD COMBO TO CART</span>
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20want%20the%20Spotlight%20Atta%20%2B%20Oil%20%2B%20Salt%20Combo%20Deal!`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#0B5A38] hover:bg-[#07472c] text-white font-bold text-xs rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#F4C400] fill-current" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search Bar & Fast Query Chips */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative flex items-center shadow-sm rounded-2xl bg-white border-2 border-[#E8E2D2] focus-within:border-[#063B2A] focus-within:ring-2 focus-within:ring-[#F4C400]/40 transition-all">
            <Search className="w-5 h-5 text-neutral-400 ml-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for? (e.g. Rice, Atta, Oil, Biscuits...)"
              className="w-full py-4 pl-3 pr-10 text-sm sm:text-base bg-transparent focus:outline-none text-[#171717] placeholder:text-neutral-400 font-medium"
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
            <span className="text-neutral-500 font-bold whitespace-nowrap">Popular:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => setSearchQuery(kw)}
                className="px-3 py-1 bg-white hover:bg-[#F4C400] hover:text-[#063B2A] border border-[#E8E2D2] rounded-lg text-neutral-700 font-semibold whitespace-nowrap transition-colors shadow-2xs"
              >
                {kw}
              </button>
            ))}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#063B2A] font-bold underline hover:text-[#0B5A38] whitespace-nowrap ml-2"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Category & Segment Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b-2 border-[#E8E2D2] pb-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#063B2A] text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-[#E8E2D2] border border-[#E8E2D2]'
              }`}
            >
              All Items ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#063B2A] text-white shadow-md'
                    : 'bg-white text-neutral-700 hover:bg-[#E8E2D2] border border-[#E8E2D2]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick Filter toggle (All vs Popular vs Deals) */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E8E2D2] text-xs font-bold self-end sm:self-auto shrink-0 shadow-2xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterMode === 'all' ? 'bg-[#063B2A] text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('popular')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterMode === 'popular' ? 'bg-[#063B2A] text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Top Sellers
            </button>
            <button
              onClick={() => setFilterMode('offers')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterMode === 'offers' ? 'bg-[#063B2A] text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Hot Deals
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border-2 border-[#E8E2D2] p-12 text-center max-w-md mx-auto my-8 shadow-xs">
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
              className="px-6 py-2.5 bg-[#063B2A] text-white text-xs font-bold rounded-xl hover:bg-[#0B5A38]"
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
                  className="bg-white rounded-2xl border-2 border-[#E8E2D2] hover:border-[#F4C400] hover:shadow-xl transition-all duration-200 p-4 flex flex-col justify-between group text-left relative"
                >
                  {/* Card Badges */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0B5A38]">
                      {product.brand}
                    </span>
                    {product.isOffer ? (
                      <span className="text-[10px] font-black bg-[#F4C400] text-[#063B2A] px-2 py-0.5 rounded-full shadow-2xs">
                        {product.offerTag || 'Special'}
                      </span>
                    ) : product.isPopular ? (
                      <span className="text-[10px] font-bold bg-[#E8E2D2] text-[#063B2A] px-2 py-0.5 rounded-full">
                        ⭐ Top Seller
                      </span>
                    ) : null}
                  </div>

                  {/* Product Header / Visual Block */}
                  <div className="mb-3">
                    {/* Clean product visual container with Indian Kirana icon badge */}
                    <div className="w-full h-32 sm:h-36 rounded-xl bg-gradient-to-b from-[#FFFDF5] to-[#F7F3E8] border border-[#E8E2D2] flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:border-[#F4C400] transition-colors">
                      <div className="w-14 h-14 rounded-full bg-[#063B2A]/10 flex items-center justify-center text-[#063B2A] mb-2 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-7 h-7 text-[#0B5A38]" />
                      </div>
                      <span className="text-xs font-bold text-neutral-700 text-center line-clamp-1">
                        {product.packSize}
                      </span>
                      {savings > 0 && (
                        <span className="absolute bottom-2 left-2 text-[10px] font-black text-[#0B5A38] bg-green-100 border border-green-300 px-1.5 py-0.5 rounded-md">
                          SAVE ₹{savings}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-[#171717] mt-3 leading-snug line-clamp-2 min-h-11 group-hover:text-[#063B2A]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Pack Size: <span className="font-semibold text-neutral-700">{product.packSize}</span>
                    </p>
                  </div>

                  {/* Price & CTA Action */}
                  <div className="pt-3 border-t border-neutral-100 mt-auto">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg sm:text-2xl font-black text-[#063B2A] tabular-nums">
                          ₹{product.price}
                        </span>
                        {product.mrp > product.price && (
                          <span className="text-xs text-neutral-400 line-through tabular-nums font-semibold">
                            ₹{product.mrp}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-neutral-500 uppercase font-bold">
                        per {product.unit}
                      </span>
                    </div>

                    {/* Quantity Stepper or + ADD button */}
                    {qtyInCart > 0 ? (
                      <div className="flex items-center justify-between bg-[#063B2A] text-white rounded-xl p-1 shadow-xs border border-[#F4C400]">
                        <button
                          onClick={() => updateQuantity(product.id, qtyInCart - 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#0B5A38] active:scale-95 transition-all text-[#F4C400]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4 stroke-[3]" />
                        </button>
                        <span className="text-xs font-black tabular-nums px-2">
                          {qtyInCart} in Cart
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, qtyInCart + 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#0B5A38] active:scale-95 transition-all text-[#F4C400]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4 stroke-[3]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className={`w-full py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer shadow-md active:scale-95 ${
                          isJustAdded
                            ? 'bg-green-700 text-white'
                            : 'bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] hover:shadow-lg'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>ADDED!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 stroke-[3]" />
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
        <div className="mt-8 text-center text-xs text-neutral-500 font-medium">
          Showing {filteredProducts.length} essentials · Real village pricing · Send handwritten notes or voice messages via WhatsApp for items not listed!
        </div>

      </div>
    </section>
  );
};
