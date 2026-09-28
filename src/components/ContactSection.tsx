import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#F9F6ED] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-white px-3.5 py-1 rounded-full border border-[#E8E2D2] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Always Available</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
            NEED SOMETHING?<br />
            <span className="text-[#0B5A38]">JUST ASK.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Looking for a specific product? Have a question about an order? Contact us directly.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Call Us */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8E2D2] hover:border-[#063B2A] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#063B2A] text-[#F4C400] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#063B2A] font-display mb-1">
                CALL US DIRECTLY
              </h3>
              <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                Speak directly with the shop owners for fast answers about stock availability and bill estimates.
              </p>
              
              <div className="space-y-2 border-t border-neutral-100 pt-3 text-xs">
                <div>
                  <span className="text-neutral-500">{STORE_INFO.phone1.name}:</span>
                  <a href={`tel:${STORE_INFO.phone1.number}`} className="ml-1.5 font-bold text-[#063B2A] hover:underline">
                    {STORE_INFO.phone1.display}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500">{STORE_INFO.phone2.name}:</span>
                  <a href={`tel:${STORE_INFO.phone2.number}`} className="ml-1.5 font-bold text-[#063B2A] hover:underline">
                    {STORE_INFO.phone2.display}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`tel:${STORE_INFO.phone1.number}`}
                className="w-full py-2.5 px-4 bg-[#063B2A] hover:bg-[#0B5A38] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Call Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Us */}
          <div className="bg-[#063B2A] text-white rounded-2xl p-6 border border-[#F4C400]/40 transition-all flex flex-col justify-between shadow-lg group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F4C400] text-[#063B2A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform font-bold">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-white font-display">
                  WHATSAPP US
                </h3>
                <span className="text-[10px] bg-[#F4C400] text-[#063B2A] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Fastest
                </span>
              </div>
              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Send your grocery list, voice messages, photo of handwritten lists, or ask for product prices instantly.
              </p>

              <div className="bg-[#04261B] p-3 rounded-xl border border-[#0B5A38] text-xs space-y-1">
                <span className="text-neutral-400 block text-[11px]">Active WhatsApp Number:</span>
                <span className="text-[#F4C400] font-bold text-sm block">
                  +{STORE_INFO.whatsappNumber}
                </span>
                <span className="text-[11px] text-green-400 block">
                  • Online throughout store hours
                </span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Visit Store */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8E2D2] hover:border-[#063B2A] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#063B2A] text-[#F4C400] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#063B2A] font-display mb-1">
                VISIT THE STORE
              </h3>
              <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                Walk in to pick up daily staples, browse our shelves, or get your online WhatsApp order handed to you in seconds.
              </p>

              <div className="space-y-2 border-t border-neutral-100 pt-3 text-xs">
                <div className="flex items-center gap-1.5 text-neutral-700">
                  <Clock className="w-3.5 h-3.5 text-[#F4C400]" />
                  <span>{STORE_INFO.hours}</span>
                </div>
                <div className="flex items-start gap-1.5 text-neutral-600">
                  <MapPin className="w-3.5 h-3.5 text-[#0B5A38] shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{STORE_INFO.address}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-white hover:bg-neutral-50 text-[#063B2A] border border-[#E8E2D2] text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>View Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
