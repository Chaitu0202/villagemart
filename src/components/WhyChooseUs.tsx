import React from 'react';
import { ShoppingBag, IndianRupee, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: ShoppingBag,
      title: "EVERYDAY CONVENIENCE",
      desc: "Everything you need under one roof. From daily milk and eggs to 25kg rice bags and puja essentials, no need to visit multiple shops."
    },
    {
      icon: IndianRupee,
      title: "BEST PRICES EVERY DAY",
      desc: "Fair, competitive pricing with special discounts on family staple packs. Real village savings with zero hidden charges."
    },
    {
      icon: ShieldCheck,
      title: "QUALITY ASSURED",
      desc: "Fresh stock sourced directly from verified FMCG distributors: Tata, Aashirvaad, Fortune, Surf Excel, Colgate, and more."
    },
    {
      icon: HeartHandshake,
      title: "LOCAL NEIGHBOURHOOD SERVICE",
      desc: "Warm, respectful, family-friendly service. We know our village customers by name and treat every order with personal attention."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-[#F9F6ED] px-3.5 py-1 rounded-full border border-[#E8E2D2] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Built on Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
            WHY FAMILIES CHOOSE US
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Serving our local community with genuine honesty, fresh provisions, and everyday care.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E8E2D2] hover:border-[#0B5A38] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#063B2A] text-[#F4C400] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#063B2A] font-display mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-bold text-[#0B5A38]">
                  <span>Trusted Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
