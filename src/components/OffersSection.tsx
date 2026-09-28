import React from 'react';
import { Tag, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <section id="offers" className="py-14 sm:py-20 bg-[#063B2A] text-white relative overflow-hidden border-b border-[#0B5A38]">
      {/* Decorative subtle glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0B5A38] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F4C400] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4C400] bg-[#0B5A38] px-3.5 py-1 rounded-full border border-[#F4C400]/30 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Village Savings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            GOOD PRICES. EVERY DAY.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-2">
            No inflated retail prices. Genuine branded grocery value packs for your regular family requirements.
          </p>
        </div>

        {/* 4 Promotional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERS.map((offer, idx) => (
            <div
              key={offer.id}
              className="bg-[#0B5A38] rounded-2xl p-6 border border-[#F4C400]/30 hover:border-[#F4C400] transition-all duration-200 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#F4C400] text-[#063B2A] px-2.5 py-1 rounded-md">
                    {offer.badge}
                  </span>
                  <Tag className="w-4 h-4 text-[#F4C400]" />
                </div>

                <h3 className="text-lg font-bold text-white font-display leading-snug mb-2 group-hover:text-[#F4C400] transition-colors">
                  {offer.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {offer.subtitle}
                </p>

                <div className="flex items-start gap-2 text-xs text-[#F4C400] font-medium bg-[#063B2A]/60 p-2.5 rounded-xl border border-white/10 mb-4">
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
                className="w-full py-2.5 px-3 bg-[#063B2A] hover:bg-[#F4C400] text-neutral-100 hover:text-[#063B2A] font-bold text-xs rounded-xl border border-[#F4C400]/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{offer.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Banner note */}
        <div className="mt-10 p-4 rounded-2xl bg-[#0B5A38]/50 border border-white/10 text-center text-xs text-neutral-300 max-w-xl mx-auto flex items-center justify-center gap-2">
          <span>🔔 Special wedding, festival, or bulk wholesale orders? Contact Suresh or Ganesh on WhatsApp for personalized quotes.</span>
        </div>

      </div>
    </section>
  );
};
