import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCatalogue } from './components/ProductCatalogue';
import { OffersSection } from './components/OffersSection';
import { MonthlyEssentials } from './components/MonthlyEssentials';
import { LocalDelivery } from './components/LocalDelivery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutStore } from './components/AboutStore';
import { CustomerReviews } from './components/CustomerReviews';
import { StoreLocation } from './components/StoreLocation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { STORE_INFO } from './data/storeData';
import { MessageCircle, Check, ShoppingBag, ArrowUp } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { lastAddedProduct, setIsCartOpen, totalItems } = useCart();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    scrollToSection('products');
  };

  const handleSearchTrigger = () => {
    scrollToSection('products');
    // Focus search input
    setTimeout(() => {
      const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    }, 400);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ${STORE_INFO.name} (${STORE_INFO.subName}), I would like to place an order or inquire about daily groceries.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5] text-[#171717] selection:bg-[#F4C400] selection:text-[#063B2A] font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar 
        onSearchClick={handleSearchTrigger} 
        onNavigate={scrollToSection} 
      />

      {/* Main Storytelling Flow */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero 
          onShopClick={() => scrollToSection('products')} 
          onWhatsAppClick={handleWhatsAppDirect} 
        />

        {/* 2. Trust Strip */}
        <TrustBar />

        {/* 3. Category Grid */}
        <CategoryGrid 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleCategorySelect} 
        />

        {/* 4. Product Catalogue with Search */}
        <ProductCatalogue 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* 5. Offers Section */}
        <OffersSection 
          onOfferSelect={handleCategorySelect} 
          onChecklistClick={() => scrollToSection('monthly-grocery')} 
        />

        {/* 6. Monthly Grocery List Builder */}
        <MonthlyEssentials />

        {/* 7. Local Delivery Section */}
        <LocalDelivery onWhatsAppClick={handleWhatsAppDirect} />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Local Story & About Store */}
        <AboutStore />

        {/* 10. Customer Reviews */}
        <CustomerReviews />

        {/* 11. Store Location & Timings */}
        <StoreLocation />

        {/* 12. Contact Section */}
        <ContactSection />

      </main>

      {/* 13. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Sticky Mobile Bottom Navigation (Safe-area compliant) */}
      <MobileBottomNav 
        onNavigate={scrollToSection} 
        onSearchClick={handleSearchTrigger} 
      />

      {/* Floating Add-to-Cart Feedback Toast */}
      {lastAddedProduct && (
        <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-[#063B2A] text-white px-4 py-3 rounded-xl shadow-2xl border border-[#F4C400]/40 flex items-center gap-3 animate-fadeIn">
          <div className="w-8 h-8 rounded-lg bg-[#F4C400] text-[#063B2A] flex items-center justify-center font-bold shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <span className="font-bold text-white block line-clamp-1">
              Added: {lastAddedProduct.name}
            </span>
            <span className="text-[#F4C400] text-[11px]">
              ₹{lastAddedProduct.price} · Click Cart to view
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 px-2.5 py-1 bg-[#F4C400] text-[#063B2A] text-[11px] font-bold rounded-lg hover:bg-[#e2b500] cursor-pointer"
          >
            Cart ({totalItems})
          </button>
        </div>
      )}

      {/* Floating WhatsApp Quick Button (Desktop Only) */}
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20want%20to%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#063B2A] hover:bg-[#0B5A38] text-white rounded-full shadow-xl border-2 border-[#F4C400] transition-all duration-200 hover:scale-105 group"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left pr-1">
            <span className="text-[10px] font-bold uppercase text-[#F4C400] block tracking-wider leading-none">
              Fast Orders
            </span>
            <span className="text-xs font-bold text-white block mt-0.5">
              WhatsApp Us
            </span>
          </div>
        </a>
      </div>

    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
