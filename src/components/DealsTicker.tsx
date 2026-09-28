import React from 'react';
import { Zap, MessageCircle, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface DealsTickerProps {
  onDealClick: () => void;
}

export const DealsTicker: React.FC<DealsTickerProps> = ({ onDealClick }) => {
  const highlights = [
    "🔥 Aashirvaad Sharbati Atta 5kg at ₹245 (Save ₹30)",
    "⚡ Fortune Sunflower Oil 1L at ₹138 (Special Rate)",
    "🥛 Fresh Milk, Curd & Paneer Daily from 6:30 AM",
    "✨ Surf Excel 1kg + Vim Bar Combo Deal",
    "🛵 Fast Doorstep Delivery in Village Center",
    "📲 WhatsApp Your Handwritten List to 9703749569"
  ];

  return (
    <div className="bg-[#F4C400] text-[#063B2A] py-2.5 px-4 overflow-hidden border-y-2 border-[#D9A900] shadow-inner relative z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Pulsing Badge */}
        <div className="flex items-center gap-2 shrink-0 bg-[#063B2A] text-[#F4C400] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F4C400] animate-ping" />
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>TODAY'S HIGHLIGHTS</span>
        </div>

        {/* Scrolling text marquee */}
        <div className="overflow-hidden whitespace-nowrap flex-1 text-xs sm:text-sm font-extrabold tracking-wide flex items-center gap-8">
          <div className="flex items-center gap-8 animate-marquee">
            {highlights.map((text, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>{text}</span>
                <span className="text-[#063B2A]/40">·</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-8 animate-marquee" aria-hidden="true">
            {highlights.map((text, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-2">
                <span>{text}</span>
                <span className="text-[#063B2A]/40">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Quick Order Action */}
        <button
          onClick={onDealClick}
          className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-[#063B2A] hover:bg-[#0B5A38] text-white text-xs font-bold rounded-lg shrink-0 transition-transform active:scale-95 shadow-xs cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F4C400]" />
          <span>View Deals</span>
        </button>

      </div>
    </div>
  );
};
