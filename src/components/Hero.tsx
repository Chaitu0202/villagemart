import React from 'react';
import { ShoppingCart, MessageCircle, ShieldCheck, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { STORE_INFO, ASSET_PATHS } from '../data/storeData';

interface HeroProps {
  onShopClick: () => void;
  onWhatsAppClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onWhatsAppClick }) => {
  return (
    <section id="hero" className="relative bg-[#063B2A] text-white overflow-hidden py-12 md:py-20 lg:py-24 border-b border-[#0B5A38]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B5A38] rounded-full blur-3xl opacity-30 pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F4C400] rounded-full blur-3xl opacity-10 pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow and Tagline badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0B5A38] text-[#F4C400] border border-[#F4C400]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                {STORE_INFO.name} · {STORE_INFO.subName}
              </span>
              <span className="text-xs italic text-[#F4C400] font-medium tracking-wide">
                "{STORE_INFO.signatureQuote}"
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl font-display">
              EVERYDAY NEEDS.<br />
              <span className="text-[#F4C400]">UNDER ONE ROOF.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-200 max-w-xl leading-relaxed">
              Your trusted neighbourhood store for groceries, staples, household essentials, personal care, snacks, beverages and daily family needs.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] font-bold text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onWhatsAppClick}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#0B5A38] hover:bg-[#08452a] text-white font-bold text-sm sm:text-base rounded-xl border border-[#F4C400]/40 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#F4C400] fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </button>
            </div>

            {/* Trust highlights inspired by physical signboard */}
            <div className="pt-4 border-t border-[#0B5A38]/70 w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>UPI & Card Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>WhatsApp Fast Orders</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>Genuine Quality Stock</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Grocery Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F4C400]/30 bg-[#0B5A38] group">
              <img
                src={ASSET_PATHS.heroGrocery}
                alt="Pantry groceries, staples, rice, atta, and cooking oil at Kirana & General Stores"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container if local asset failed
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Gradient scrim for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

              {/* Floating trust card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#063B2A]/90 backdrop-blur-md border border-[#F4C400]/40 rounded-xl p-3.5 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C400] block">
                      Trusted Neighbourhood Quality
                    </span>
                    <p className="text-xs text-neutral-200 mt-0.5">
                      Tata, Aashirvaad, Fortune, Surf Excel & more
                    </p>
                  </div>
                  <span className="text-xs font-bold bg-[#F4C400] text-[#063B2A] px-2.5 py-1 rounded-md shrink-0">
                    Best Local Rates
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative stamp */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#F4C400] text-[#063B2A] p-2.5 rounded-full shadow-lg border-2 border-white items-center justify-center font-bold text-[11px] uppercase tracking-wider text-center rotate-6">
              100%<br />Authentic
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
