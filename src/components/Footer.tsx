import React from 'react';
import { ShoppingBag, Phone, MessageCircle, MapPin, Clock, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#04261B] text-white border-t border-[#063B2A] pt-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4C400] text-[#063B2A] flex items-center justify-center font-bold shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block leading-tight font-display">
                  {STORE_INFO.name}
                </span>
                <span className="text-xs font-bold text-[#F4C400] uppercase tracking-wider">
                  {STORE_INFO.subName} · {STORE_INFO.badgeText}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm leading-relaxed">
              "{STORE_INFO.tagline}" Your trusted neighbourhood grocery store serving our village community with fresh provisions, honest prices, and genuine care.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#F4C400]">
              <span className="font-semibold italic">"{STORE_INFO.signatureQuote}"</span>
            </div>
          </div>

          {/* Col 2: Shop Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4C400] mb-4">
              SHOP
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Categories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Popular Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('offers')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Family Offers & Combos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('monthly-grocery')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Monthly Grocery Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Store & About */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4C400] mb-4">
              OUR STORE
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('location')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Store Location & Map
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Phone Numbers
                </button>
              </li>
              <li>
                <a 
                  href={STORE_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Google Maps Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone Direct */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4C400] mb-4">
              DIRECT CONTACT
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F4C400] shrink-0" />
                <span>
                  {STORE_INFO.phone1.name}:{' '}
                  <a href={`tel:${STORE_INFO.phone1.number}`} className="font-bold text-white hover:underline">
                    {STORE_INFO.phone1.display}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F4C400] shrink-0" />
                <span>
                  {STORE_INFO.phone2.name}:{' '}
                  <a href={`tel:${STORE_INFO.phone2.number}`} className="font-bold text-white hover:underline">
                    {STORE_INFO.phone2.display}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#F4C400] shrink-0" />
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Kirana%20%26%20General%20Stores%2C%20I%20want%20to%20order.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-semibold"
                >
                  WhatsApp Ordering
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#F4C400] shrink-0" />
                <span>{STORE_INFO.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 {STORE_INFO.name} ({STORE_INFO.subName}). All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px] text-neutral-400">
            <span>Everyday Needs Under One Roof · UPI, Cards & Cash Accepted</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
