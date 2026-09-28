import React from 'react';
import { ShoppingBag, IndianRupee, ShieldCheck, Smile } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShoppingBag,
      title: "Wide Range of Products",
      desc: "All daily essentials under one roof"
    },
    {
      icon: IndianRupee,
      title: "Best Prices Every Day",
      desc: "Fair, honest neighbourhood rates"
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      desc: "Fresh stock from certified brands"
    },
    {
      icon: Smile,
      title: "Friendly Local Service",
      desc: "Warm family service since day one"
    }
  ];

  return (
    <div className="bg-[#FFFDF5] border-b border-[#E8E2D2] py-5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-[#F9F6ED]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-[#063B2A] leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-[11px] text-neutral-600 mt-0.5 hidden sm:block">
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
