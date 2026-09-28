import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onSearchClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#04261B] text-[#FFFDF5] text-xs py-1.5 px-4 border-b border-[#063B2A]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#F4C400] font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{STORE_INFO.badgeText}</span>
            </span>
            <span className="hidden md:inline text-neutral-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>{STORE_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-200">
            <div className="hidden sm:flex items-center gap-2">
              <Phone className="w-3 h-3 text-[#F4C400]" />
              <span>{STORE_INFO.phone1.name}:</span>
              <a 
                href={`tel:${STORE_INFO.phone1.number}`} 
                className="hover:text-[#F4C400] transition-colors font-medium"
              >
                {STORE_INFO.phone1.display}
              </a>
            </div>
            <span className="hidden sm:inline text-neutral-500">·</span>
            <div className="hidden sm:flex items-center gap-2">
              <span>{STORE_INFO.phone2.name}:</span>
              <a 
                href={`tel:${STORE_INFO.phone2.number}`} 
                className="hover:text-[#F4C400] transition-colors font-medium"
              >
                {STORE_INFO.phone2.display}
              </a>
            </div>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F4C400] hover:underline font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Orders Available</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-200 bg-[#063B2A] text-white border-b border-[#0B5A38] ${
          isScrolled ? 'py-2.5 shadow-lg' : 'py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark / Identity */}
          <button 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            {/* Visual Cart / Leaf Emblem inspired by physical signboard */}
            <div className="w-10 h-10 rounded-lg bg-[#F4C400] text-[#063B2A] flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg md:text-xl font-bold tracking-tight text-white leading-none">
                  {STORE_INFO.name}
                </span>
              </div>
              <p className="text-[11px] font-semibold text-[#F4C400] tracking-wider uppercase mt-0.5">
                {STORE_INFO.subName}
              </p>
            </div>
          </button>

          {/* Zone 2: Primary Text Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-200">
            <button 
              onClick={() => handleLinkClick('hero')}
              className="hover:text-[#F4C400] transition-colors py-1 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleLinkClick('categories')}
              className="hover:text-[#F4C400] transition-colors py-1 cursor-pointer"
            >
              Categories
            </button>
            <button 
              onClick={() => handleLinkClick('products')}
              className="hover:text-[#F4C400] transition-colors py-1 cursor-pointer"
            >
              Shop
            </button>
            <button 
              onClick={() => handleLinkClick('offers')}
              className="hover:text-[#F4C400] transition-colors py-1 cursor-pointer"
            >
              Offers
            </button>
            <button 
              onClick={() => handleLinkClick('monthly-grocery')}
              className="hover:text-[#F4C400] transition-colors py-1 cursor-pointer"
            >
              Monthly List
            </button>
            <button 
              onClick={() => handleLinkClick('about')}
              className="hover:text-[#F4C400] transition-colors py-1 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleLinkClick('location')}
              className="hover:text-[#F4C400] transition-colors py-1 cursor-pointer"
            >
              Location
            </button>
          </div>

          {/* Zone 3: Actions (Search, WhatsApp Order, Cart) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onSearchClick}
              aria-label="Search products"
              className="p-2 text-neutral-200 hover:text-white hover:bg-[#0B5A38] rounded-lg transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp Quick Order */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20want%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0B5A38] hover:bg-[#08452a] rounded-lg border border-[#0d6e44] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#F4C400]" />
              <span>WhatsApp Order</span>
            </a>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Cart"
              className="relative flex items-center gap-2 px-3 py-1.5 bg-[#F4C400] hover:bg-[#e0b400] text-[#063B2A] rounded-lg font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="ml-0.5 bg-[#063B2A] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-5 text-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-neutral-200 hover:text-white hover:bg-[#0B5A38] rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#0B5A38] bg-[#063B2A] px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col gap-2 text-sm font-medium">
              <button
                onClick={() => handleLinkClick('hero')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('categories')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                Categories
              </button>
              <button
                onClick={() => handleLinkClick('products')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                Shop Products
              </button>
              <button
                onClick={() => handleLinkClick('offers')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                Offers & Combos
              </button>
              <button
                onClick={() => handleLinkClick('monthly-grocery')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                Monthly Grocery Checklist
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                About Our Store
              </button>
              <button
                onClick={() => handleLinkClick('location')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                Store Location & Timings
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="text-left py-2.5 px-3 rounded-md hover:bg-[#0B5A38] text-white"
              >
                Contact & Phone Numbers
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-[#0B5A38] flex flex-col gap-2">
              <div className="text-xs text-neutral-300">
                Call Store Owners:
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${STORE_INFO.phone1.number}`}
                  className="flex-1 text-center py-2 bg-[#0B5A38] text-white rounded-lg text-xs font-semibold"
                >
                  {STORE_INFO.phone1.name}
                </a>
                <a
                  href={`tel:${STORE_INFO.phone2.number}`}
                  className="flex-1 text-center py-2 bg-[#0B5A38] text-white rounded-lg text-xs font-semibold"
                >
                  {STORE_INFO.phone2.name}
                </a>
              </div>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20want%20to%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-[#F4C400] text-[#063B2A] rounded-lg text-xs font-bold flex items-center justify-center gap-2 mt-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Order</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
