import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Plus, 
  Minus, 
  ShoppingCart, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Layers 
} from 'lucide-react';
import { MONTHLY_ESSENTIALS, STORE_INFO, ASSET_PATHS, PRODUCTS } from '../data/storeData';
import { useCart } from '../context/CartContext';

export const MonthlyEssentials: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();

  // Selected items state: item id -> boolean
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    MONTHLY_ESSENTIALS.forEach((item) => {
      initial[item.id] = true; // default all checked
    });
    return initial;
  });

  // Quantities state: item id -> number
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    MONTHLY_ESSENTIALS.forEach((item) => {
      initial[item.id] = item.defaultQty;
    });
    return initial;
  });

  const [hasAddedAll, setHasAddedAll] = useState(false);

  const toggleSelect = (id: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const selectAll = () => {
    const updated: Record<string, boolean> = {};
    MONTHLY_ESSENTIALS.forEach((item) => {
      updated[item.id] = true;
    });
    setSelectedItems(updated);
  };

  const deselectAll = () => {
    const updated: Record<string, boolean> = {};
    MONTHLY_ESSENTIALS.forEach((item) => {
      updated[item.id] = false;
    });
    setSelectedItems(updated);
  };

  // Selected items list & calculations
  const activeSelected = MONTHLY_ESSENTIALS.filter((item) => selectedItems[item.id]);
  const estimatedListTotal = activeSelected.reduce((sum, item) => {
    const unitPrice = item.estPrice / item.defaultQty;
    const qty = quantities[item.id] || 1;
    return sum + unitPrice * qty;
  }, 0);

  // Add all selected to Cart
  const handleAddAllToCart = () => {
    activeSelected.forEach((item) => {
      // Find matching product in catalog
      const matched = PRODUCTS.find((p) => p.name.toLowerCase().includes(item.name.toLowerCase())) || {
        id: item.id,
        name: `${item.name} (${item.defaultPack})`,
        brand: item.brand,
        category: 'groceries',
        packSize: item.defaultPack,
        price: item.estPrice / item.defaultQty,
        mrp: (item.estPrice / item.defaultQty) * 1.1,
        inStock: true,
        unit: 'pack'
      };
      addToCart(matched, quantities[item.id] || 1);
    });

    setHasAddedAll(true);
    setTimeout(() => {
      setHasAddedAll(false);
      setIsCartOpen(true);
    }, 800);
  };

  // Direct WhatsApp Quick Order for Monthly List
  const handleWhatsAppMonthlyOrder = () => {
    if (activeSelected.length === 0) return;

    const listText = activeSelected
      .map((item, idx) => {
        const qty = quantities[item.id] || 1;
        const lineTotal = (item.estPrice / item.defaultQty) * qty;
        return `${idx + 1}. ${item.name} (${item.brand}, ${item.defaultPack}) × ${qty} = ₹${lineTotal}`;
      })
      .join('\n');

    const message = `Hello *${STORE_INFO.name}*,\n\nI want to place my *Monthly Family Grocery List*:\n\n${listText}\n\n*Estimated Total: ₹${estimatedListTotal}*\n\nPlease pack and confirm the final bill. Thank you!`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="monthly-grocery" className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-[#F9F6ED] px-3 py-1 rounded-full border border-[#E8E2D2] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>Smart Family Feature</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
              YOUR MONTHLY GROCERY LIST.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl">
              Build your regular household order in just a few clicks. Select the staples your family needs, adjust packs, and order directly on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <button
              onClick={selectAll}
              className="text-[#063B2A] hover:underline cursor-pointer"
            >
              Select All
            </button>
            <span className="text-neutral-400">·</span>
            <button
              onClick={deselectAll}
              className="text-neutral-500 hover:text-black cursor-pointer"
            >
              Deselect All
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Checklist Left, Summary & Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Checklist Area (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E8E2D2] p-4 sm:p-6 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MONTHLY_ESSENTIALS.map((item) => {
                const isChecked = !!selectedItems[item.id];
                const qty = quantities[item.id] || 1;
                const unitPrice = item.estPrice / item.defaultQty;
                const itemTotal = unitPrice * qty;

                return (
                  <div
                    key={item.id}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 text-left ${
                      isChecked
                        ? 'bg-[#FFFDF5] border-[#0B5A38] shadow-2xs'
                        : 'bg-white border-[#E8E2D2] opacity-60'
                    }`}
                  >
                    <div 
                      onClick={() => toggleSelect(item.id)}
                      className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
                    >
                      <button 
                        type="button" 
                        aria-label={isChecked ? `Uncheck ${item.name}` : `Check ${item.name}`}
                        className="text-[#063B2A] focus:outline-none"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#0B5A38] fill-[#F4C400]" />
                        ) : (
                          <Square className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>

                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase text-[#0B5A38] tracking-wider block">
                          {item.brand}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#171717] truncate leading-tight">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-0.5">
                          <span>{item.defaultPack}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-semibold text-[#063B2A] tabular-nums">
                            ₹{itemTotal}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Stepper */}
                    {isChecked && (
                      <div className="flex items-center bg-white border border-[#E8E2D2] rounded-lg p-0.5 shrink-0">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:text-black rounded"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold tabular-nums px-1.5 min-w-5 text-center">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:text-black rounded"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sticky Summary & Conversion Box (4 cols) */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            
            {/* Summary Card */}
            <div className="bg-[#063B2A] text-white rounded-2xl p-6 border border-[#F4C400]/30 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#0B5A38]">
                <div>
                  <span className="text-xs font-bold text-[#F4C400] uppercase tracking-wider block">
                    Family Order Summary
                  </span>
                  <span className="text-sm text-neutral-200">
                    {activeSelected.length} essentials selected
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F4C400] text-[#063B2A] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="py-4 space-y-2 text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span>Selected items:</span>
                  <span className="font-semibold text-white">{activeSelected.length} items</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Estimated Total:</span>
                  <span className="text-xl font-extrabold text-[#F4C400] tabular-nums">
                    ₹{estimatedListTotal}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 pt-2 leading-relaxed">
                  Prices based on standard village store rates. Freshly packed by Suresh & Ganesh.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-3 border-t border-[#0B5A38]">
                <button
                  disabled={activeSelected.length === 0}
                  onClick={handleWhatsAppMonthlyOrder}
                  className="w-full py-3.5 px-4 bg-[#F4C400] hover:bg-[#e2b500] disabled:bg-neutral-600 disabled:text-neutral-400 text-[#063B2A] rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>ORDER LIST ON WHATSAPP</span>
                </button>

                <button
                  disabled={activeSelected.length === 0}
                  onClick={handleAddAllToCart}
                  className="w-full py-3 px-4 bg-[#0B5A38] hover:bg-[#08452a] disabled:opacity-50 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
                >
                  {hasAddedAll ? (
                    <>
                      <Check className="w-4 h-4 text-[#F4C400]" />
                      <span>ADDED TO CART!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 text-[#F4C400]" />
                      <span>ADD ALL TO CART ({activeSelected.length})</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Visual Photo Card */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E2D2] shadow-sm relative group bg-white">
              <img
                src={ASSET_PATHS.monthlyBasket}
                alt="Monthly grocery haul flatlay"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-white text-xs">
                <span className="font-bold text-[#063B2A] block">
                  Custom List via WhatsApp
                </span>
                <span className="text-neutral-500 text-[11px]">
                  Send handwritten photos or audio notes of your grocery list directly to 9703749569.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
