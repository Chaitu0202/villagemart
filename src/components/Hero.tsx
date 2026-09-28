import React from 'react';
import { 
  ShoppingCart, 
  MessageCircle, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Flame 
} from 'lucide-react';
import { STORE_INFO, ASSET_PATHS } from '../data/storeData';

interface HeroProps {
  onShopClick: () => void;
  onWhatsAppClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onWhatsAppClick }) => {
  return (
    <section id="hero" className="relative bg-[#063B2A] text-white overflow-hidden py-12 md:py-20 lg:py-24 border-b border-[#0B5A38]">
      {/* High-Impact Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#0B5A38] rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-[400px] h-[400px] bg-[#F4C400] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] bg-[#0B5A38] rounded-full blur-[90px] opacity-40 pointer-events-none" />

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Story & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Highlight Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-[#F4C400] text-[#063B2A] shadow-md border border-white/40">
                <Sparkles className="w-3.5 h-3.5 fill-[#063B2A]" />
                <span>{STORE_INFO.name}</span>
                <span className="opacity-40">|</span>
                <span className="font-extrabold">{STORE_INFO.subName}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0B5A38]/90 text-[#F4C400] border border-[#F4C400]/40 backdrop-blur-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#F4C400] animate-pulse" />
                <span className="italic">"{STORE_INFO.signatureQuote}"</span>
              </div>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] max-w-2xl font-display">
              EVERYDAY NEEDS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C400] via-[#FFE57F] to-[#E5B000] drop-shadow-sm">
                UNDER ONE ROOF.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-200 max-w-xl leading-relaxed">
              Your trusted village destination for fresh daily groceries, Aashirvaad atta, Fortune oil, branded staples, dairy, snacks and household essentials at honest neighbourhood rates.
            </p>

            {/* 3 Highlight Metric Pills */}
            <div className="grid grid-cols-3 gap-2.5 w-full max-w-lg py-1">
              <div className="bg-[#04261B]/80 border border-[#F4C400]/30 rounded-xl p-2.5 text-center">
                <span className="block text-base sm:text-lg font-black text-[#F4C400] tabular-nums">
                  1,000+
                </span>
                <span className="text-[11px] text-neutral-300 font-medium">
                  Daily Products
                </span>
              </div>

              <div className="bg-[#04261B]/80 border border-[#F4C400]/30 rounded-xl p-2.5 text-center">
                <span className="block text-base sm:text-lg font-black text-[#F4C400] tabular-nums">
                  ₹0 Extra
                </span>
                <span className="text-[11px] text-neutral-300 font-medium">
                  Village Delivery
                </span>
              </div>

              <div className="bg-[#04261B]/80 border border-[#F4C400]/30 rounded-xl p-2.5 text-center">
                <span className="block text-base sm:text-lg font-black text-[#F4C400] tabular-nums">
                  15-30 Min
                </span>
                <span className="text-[11px] text-neutral-300 font-medium">
                  Quick Pack Time
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-[#F4C400]/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer gold-glow"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>SHOP PRODUCTS NOW</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onWhatsAppClick}
                className="w-full sm:w-auto px-7 py-4 bg-[#0B5A38] hover:bg-[#0d6942] text-white font-bold text-sm sm:text-base rounded-xl border-2 border-[#F4C400]/60 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer hover:border-[#F4C400]"
              >
                <MessageCircle className="w-5 h-5 text-[#F4C400] fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </button>
            </div>

            {/* Signboard Trust Highlights */}
            <div className="pt-4 border-t border-[#0B5A38] w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-200">
              <div className="flex items-center gap-2 bg-[#0B5A38]/40 px-2.5 py-1.5 rounded-lg border border-white/5">
                <CreditCard className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>UPI & Cards Accepted</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0B5A38]/40 px-2.5 py-1.5 rounded-lg border border-white/5">
                <MessageCircle className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>WhatsApp Fast Orders</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1 bg-[#0B5A38]/40 px-2.5 py-1.5 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>100% Genuine Stock</span>
              </div>
            </div>

          </div>

          {/* Right Column: Highlighted Grocery Visual with Dynamic Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-3 border-[#F4C400] bg-[#0B5A38] group gold-glow">
              <img
                src={ASSET_PATHS.heroGrocery}
                alt="Pantry groceries, staples, rice, atta, and cooking oil at Kirana & General Stores"
                className="w-full h-84 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Gradient scrim for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Top Banner Card */}
              <div className="absolute top-4 left-4 right-4 bg-[#04261B]/95 backdrop-blur-md border border-[#F4C400]/60 rounded-xl p-2.5 text-white shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F4C400] text-[#063B2A] flex items-center justify-center font-bold">
                    <Flame className="w-4 h-4 fill-[#063B2A]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#F4C400] block">
                      Today's Deal Highlight
                    </span>
                    <span className="text-xs font-bold text-white">
                      Atta + Sunflower Oil Combo Saver
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-extrabold bg-[#F4C400] text-[#063B2A] px-2 py-0.5 rounded">
                  Save ₹48
                </span>
              </div>

              {/* Floating Bottom Trust Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#063B2A]/95 backdrop-blur-md border border-[#F4C400]/50 rounded-xl p-3 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F4C400] block">
                      Trusted Neighbourhood Brands
                    </span>
                    <p className="text-xs text-neutral-200 mt-0.5 font-medium">
                      Tata · Aashirvaad · Fortune · Surf Excel · Colgate
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#F4C400] text-[#063B2A] px-2.5 py-1 rounded-lg text-xs font-black shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-[#063B2A] text-[#F4C400]" />
                    <span>Pure Stock</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Corner Quality Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-br from-[#F4C400] to-[#D9A900] text-[#063B2A] p-3 rounded-full shadow-2xl border-2 border-white items-center justify-center font-black text-[11px] uppercase tracking-wider text-center rotate-6 gold-glow">
              100%<br />Original
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
