import React from 'react';
import { Home, ShoppingBag, Search, MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/storeData';

interface MobileBottomNavProps {
  onNavigate: (sectionId: string) => void;
  onSearchClick: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  onNavigate, 
  onSearchClick 
}) => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#063B2A] border-t border-[#0B5A38] text-white shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-5 items-center py-2 px-1">
        
        {/* Home */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex flex-col items-center justify-center py-1 text-neutral-300 hover:text-[#F4C400] transition-colors focus:outline-none"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-1">Home</span>
        </button>

        {/* Shop */}
        <button
          onClick={() => onNavigate('products')}
          className="flex flex-col items-center justify-center py-1 text-neutral-300 hover:text-[#F4C400] transition-colors focus:outline-none"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-1">Shop</span>
        </button>

        {/* Search */}
        <button
          onClick={onSearchClick}
          className="flex flex-col items-center justify-center py-1 text-neutral-300 hover:text-[#F4C400] transition-colors focus:outline-none"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-1">Search</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center py-1 text-neutral-300 hover:text-[#F4C400] transition-colors relative focus:outline-none"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F4C400] text-[#063B2A] text-[9px] font-extrabold px-1.5 py-0.2 rounded-full min-w-4 text-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold mt-1">Cart</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20want%20to%20place%20an%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#F4C400] hover:text-white transition-colors focus:outline-none"
        >
          <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
            <MessageCircle className="w-4 h-4 fill-current text-white" />
          </div>
          <span className="text-[10px] font-bold mt-0.5 text-[#F4C400]">WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
