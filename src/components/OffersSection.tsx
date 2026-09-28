import React from 'react';
import { Tag, Sparkles, ArrowRight, CheckCircle2, Flame, Zap } from 'lucide-react';
import { OFFERS } from '../data/storeData';

interface OffersSectionProps {
  onOfferSelect: (category: string) => void;
  onChecklistClick: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ 
  onOfferSelect, 
  onChecklistClick 
}) => {
  return (
    <section id="offers" className="py-14 sm:py-20 bg-[#063B2A] text-white relative overflow-hidden border-b-2 border-[#0B5A38]">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0B5A38] rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4C400] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#063B2A] bg-[#F4C400] px-4 py-1.5 rounded-full shadow-md mb-3 border border-white/40 gold-glow">
            <Zap className="w-3.5 h-3.5 fill-[#063B2A]" />
            <span>HONEST VILLAGE SAVINGS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            GOOD PRICES. <span className="text-[#F4C400]">EVERY DAY.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-200 mt-2">
            No inflated retail prices. Genuine branded grocery value packs for your regular family requirements.
          </p>
        </div>

        {/* 4 Promotional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERS.map((offer, idx) => (
            <div
              key={offer.id}
              className="bg-gradient-to-b from-[#0B5A38] to-[#063B2A] rounded-2xl p-6 border-2 border-[#F4C400]/40 hover:border-[#F4C400] transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 hover:gold-glow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black uppercase tracking-wider bg-[#F4C400] text-[#063B2A] px-2.5 py-1 rounded-md shadow-xs">
                    {offer.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F4C400] group-hover:bg-[#F4C400] group-hover:text-[#063B2A] transition-colors">
                    <Flame className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white font-display leading-snug mb-2 group-hover:text-[#F4C400] transition-colors">
                  {offer.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {offer.subtitle}
                </p>

                <div className="flex items-start gap-2 text-xs text-[#F4C400] font-bold bg-[#04261B]/80 p-3 rounded-xl border border-[#F4C400]/20 mb-4">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#F4C400] mt-0.5" />
                  <span>{offer.savingsNote}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  if (idx === 0) {
                    onChecklistClick();
                  } else {
                    onOfferSelect(offer.applicableCategories[0] || 'all');
                  }
                }}
                className="w-full py-3 px-3 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{offer.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          ))}
        </div>

        {/* Banner note */}
        <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-[#0B5A38] via-[#08452a] to-[#0B5A38] border-2 border-[#F4C400]/40 text-center text-xs text-white font-semibold max-w-2xl mx-auto flex items-center justify-center gap-2 shadow-md">
          <Sparkles className="w-4 h-4 text-[#F4C400] shrink-0" />
          <span>Need bulk supplies for weddings, village pujas, or functions? Message Suresh or Ganesh on WhatsApp for personalized wholesale discounts!</span>
        </div>

      </div>
    </section>
  );
};
