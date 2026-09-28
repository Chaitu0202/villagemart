import React from 'react';
import { Heart, MapPin, Phone, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { STORE_INFO, ASSET_PATHS } from '../data/storeData';

export const AboutStore: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Store Imagery & Physical Signage Reference */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-[#E8E2D2] shadow-xl bg-white group relative">
              <img
                src={ASSET_PATHS.storeInterior}
                alt="Kirana & General Stores neat shelves and provisions"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-[#F4C400] uppercase tracking-wider block">
                  Neighbourhood Grocery Destination
                </span>
                <p className="text-sm font-semibold mt-0.5 text-neutral-100">
                  Clean, well-stocked shelves with genuine FMCG stocks
                </p>
              </div>
            </div>

            {/* Note & Storefront Slot for Owner */}
            <div className="p-3.5 rounded-xl bg-[#F9F6ED] border border-[#E8E2D2] flex items-center justify-between text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0B5A38] shrink-0" />
                <span>Physical Signboard Branding Verified · {STORE_INFO.badgeText}</span>
              </div>
              <span className="font-bold text-[#063B2A]">{STORE_INFO.subName}</span>
            </div>
          </div>

          {/* Right Column: Emotional Local Story */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-[#F9F6ED] px-3.5 py-1 rounded-full border border-[#E8E2D2] mb-3">
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span>{STORE_INFO.badgeText}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
                YOUR TRUSTED STORE,<br />
                <span className="text-[#0B5A38]">NOW ONLINE.</span>
              </h2>

              <p className="text-base text-neutral-700 mt-4 leading-relaxed">
                For everyday groceries, household essentials and everything in between, we're here to make your shopping easier. What started as your regular neighbourhood general store has now stepped into the digital world—so you can order whenever you need, with the same familiar service.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E8E2D2]">
                <div className="w-8 h-8 rounded-lg bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#063B2A]">
                    Owned & Operated Locally by Ganesh & Suresh
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Call or message K. Ganesh ({STORE_INFO.phone1.display}) or S. Suresh ({STORE_INFO.phone2.display}) directly for all store inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E8E2D2]">
                <div className="w-8 h-8 rounded-lg bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#063B2A]">
                    "{STORE_INFO.signatureQuote}"
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    We take pride in transparent weighing, genuine batch dates, and honest neighbourhood rates for every village household.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${STORE_INFO.phone1.number}`}
                className="px-5 py-2.5 bg-[#063B2A] text-white hover:bg-[#0B5A38] text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#F4C400]" />
                <span>Call {STORE_INFO.phone1.name}</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone2.number}`}
                className="px-5 py-2.5 bg-[#063B2A] text-white hover:bg-[#0B5A38] text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#F4C400]" />
                <span>Call {STORE_INFO.phone2.name}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
