import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const StoreLocation: React.FC = () => {
  return (
    <section id="location" className="py-14 sm:py-20 bg-[#FFFDF5] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-[#F9F6ED] px-3.5 py-1 rounded-full border border-[#E8E2D2] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Store Location & Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
            COME VISIT US.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Located conveniently on Main Road. Walk in anytime from early morning to late night.
          </p>
        </div>

        {/* Card & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D2] shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#063B2A] font-display">
                    {STORE_INFO.name}
                  </h3>
                  <p className="text-xs font-bold uppercase text-[#0B5A38] tracking-wider mt-0.5">
                    {STORE_INFO.subName} · {STORE_INFO.badgeText}
                  </p>
                </div>
                <div className="bg-[#FFFDF5] text-[#063B2A] border border-[#E8E2D2] px-3 py-1 rounded-lg text-xs font-bold">
                  Open 7 Days
                </div>
              </div>

              {/* Specific info rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Store Address
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#171717] mt-1 leading-snug">
                      {STORE_INFO.address}
                    </p>
                    <span className="text-[11px] text-[#0B5A38] font-medium block mt-1">
                      Near Village Center & Panchayat
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Opening Hours
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#171717] mt-1 leading-snug">
                      {STORE_INFO.hours}
                    </p>
                    <span className="text-[11px] text-green-700 font-medium block mt-1">
                      • Open Early for Morning Milk & Bread
                    </span>
                  </div>
                </div>

                {/* Phone 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {STORE_INFO.phone1.name} (Direct)
                    </h4>
                    <a
                      href={`tel:${STORE_INFO.phone1.number}`}
                      className="text-xs sm:text-sm font-bold text-[#063B2A] hover:underline block mt-1"
                    >
                      {STORE_INFO.phone1.display}
                    </a>
                    <span className="text-[11px] text-neutral-500">
                      Orders & Store Inquiries
                    </span>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#063B2A] text-[#F4C400] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {STORE_INFO.phone2.name} (Direct)
                    </h4>
                    <a
                      href={`tel:${STORE_INFO.phone2.number}`}
                      className="text-xs sm:text-sm font-bold text-[#063B2A] hover:underline block mt-1"
                    >
                      {STORE_INFO.phone2.display}
                    </a>
                    <span className="text-[11px] text-neutral-500">
                      General Staples & Accounts
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-3">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#063B2A] hover:bg-[#0B5A38] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-[#F4C400]" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone1.number}`}
                className="py-3 px-5 bg-white hover:bg-neutral-50 text-[#063B2A] border border-[#E8E2D2] rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#063B2A]" />
                <span>CALL US</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20where%20is%20the%20store%20located%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Container (5 cols) */}
          <div className="lg:col-span-5 bg-[#063B2A] text-white rounded-2xl p-6 sm:p-8 border border-[#F4C400]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#F4C400] mb-2 tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Village Landmark Locator</span>
              </div>
              
              <h3 className="text-xl font-bold font-display text-white">
                Easy To Find on Main Road
              </h3>
              
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Just 2 minutes from the Village Temple Arch and Panchayat office. Ample 2-wheeler and auto parking space right in front of the store.
              </p>

              {/* Visual simulated map preview block */}
              <div className="my-6 h-48 rounded-xl bg-[#04261B] border border-[#0B5A38] relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                {/* Map grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B5A3815_1px,transparent_1px),linear-gradient(to_bottom,#0B5A3815_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#F4C400] text-[#063B2A] flex items-center justify-center mx-auto mb-2 shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <span className="text-xs font-extrabold text-white block">
                    {STORE_INFO.name}
                  </span>
                  <span className="text-[11px] text-[#F4C400]">
                    {STORE_INFO.subName}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#0B5A38] flex items-center justify-between text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F4C400]" />
                <span>Curb-side Pickup Available</span>
              </span>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4C400] font-bold hover:underline flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
