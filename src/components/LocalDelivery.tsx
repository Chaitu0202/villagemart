import React from 'react';
import { MessageCircle, CheckCircle2, Truck, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';
import { ASSET_PATHS, STORE_INFO } from '../data/storeData';

interface LocalDeliveryProps {
  onWhatsAppClick: () => void;
}

export const LocalDelivery: React.FC<LocalDeliveryProps> = ({ onWhatsAppClick }) => {
  const steps = [
    {
      num: "01",
      title: "Choose Your Products",
      desc: "Select items from our catalogue or write down your regular family grocery list."
    },
    {
      num: "02",
      title: "Place Your Order",
      desc: "Send your list via WhatsApp directly to Suresh (9885651354) or Ganesh (9703749569)."
    },
    {
      num: "03",
      title: "We Pack It Fresh",
      desc: "We pick fresh stocks, verify weights, check expiries, and send your total bill."
    },
    {
      num: "04",
      title: "Get It Delivered",
      desc: "Prompt doorstep delivery to your home or keep it ready for quick curb-side pickup."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F9F6ED] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Delivery Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#E8E2D2] bg-white group">
              <img
                src={ASSET_PATHS.deliveryBag}
                alt="Kirana grocery delivery package at doorstep"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#E8E2D2] shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#0B5A38] tracking-wider block">
                    Local Neighbourhood Service
                  </span>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Fast & convenient for elderly & busy families
                  </p>
                </div>
                <Truck className="w-6 h-6 text-[#063B2A] shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Column: 4 Steps & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-white px-3 py-1 rounded-full border border-[#E8E2D2] mb-3">
                <Truck className="w-3.5 h-3.5 text-[#F4C400]" />
                <span>LOCAL DELIVERY</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
                YOUR GROCERIES.<br />
                <span className="text-[#0B5A38]">AT YOUR DOORSTEP.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 mt-3 max-w-xl leading-relaxed">
                Order your everyday essentials from the comfort of your home. We'll prepare your order and help get it to you locally with personal neighbourhood care.
              </p>
            </div>

            {/* 4 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {steps.map((step) => (
                <div 
                  key={step.num}
                  className="bg-white p-4 rounded-xl border border-[#E8E2D2] shadow-2xs hover:border-[#0B5A38] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-extrabold text-[#063B2A] bg-[#F4C400] px-2 py-0.5 rounded-md tabular-nums">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-bold text-[#063B2A]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Accepted Payments Strip */}
            <div className="w-full bg-white p-3.5 rounded-xl border border-[#E8E2D2] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-bold text-[#063B2A] flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#F4C400]" />
                <span>Payments Accepted:</span>
              </span>
              <div className="flex flex-wrap items-center gap-2 text-neutral-600 font-medium">
                {STORE_INFO.paymentModes.map((mode, i) => (
                  <span key={i} className="bg-[#FFFDF5] border border-[#E8E2D2] px-2.5 py-1 rounded-md text-[11px]">
                    {mode}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onWhatsAppClick}
              className="px-7 py-3.5 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>ORDER ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
