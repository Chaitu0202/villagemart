import React from 'react';
import { ShoppingBag, IndianRupee, ShieldCheck, Smile, Award } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShoppingBag,
      title: "Wide Range of Products",
      desc: "All daily essentials under one roof",
      badge: "1000+ Items"
    },
    {
      icon: IndianRupee,
      title: "Best Prices Every Day",
      desc: "Fair, honest neighbourhood rates",
      badge: "Real Village Savings"
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      desc: "Fresh stock from certified FMCG brands",
      badge: "100% Original"
    },
    {
      icon: Smile,
      title: "Friendly Local Service",
      desc: "Warm family service since day one",
      badge: "Suresh & Ganesh"
    }
  ];

  return (
    <div className="bg-[#FFFDF5] border-b-2 border-[#E8E2D2] py-6 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-2xl border-2 border-[#E8E2D2] hover:border-[#F4C400] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 group-hover:bg-[#F4C400] group-hover:text-[#063B2A] transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#F9F6ED] group-hover:bg-[#F4C400]/20 text-[#0B5A38] px-2 py-0.5 rounded-md border border-[#E8E2D2]">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#063B2A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
