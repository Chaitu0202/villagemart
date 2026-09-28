import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ShoppingBag, 
  ShieldCheck, 
  MapPin, 
  FileText, 
  ArrowRight 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/storeData';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    subtotal, 
    totalSavings, 
    totalItems,
    sendWhatsAppOrder 
  } = useCart();

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    sendWhatsAppOrder(customerNote, deliveryAddress);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF5] text-[#171717] shadow-2xl flex flex-col justify-between border-l border-[#E8E2D2]">
          
          {/* Drawer Header */}
          <div className="p-5 bg-[#063B2A] text-white flex items-center justify-between border-b border-[#0B5A38]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#F4C400] text-[#063B2A] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold uppercase tracking-wider font-display">
                  YOUR ORDER
                </h2>
                <p className="text-xs text-[#F4C400]">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} ready for WhatsApp checkout
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-[#0B5A38] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body: Cart Items or Empty State */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#E8E2D2] flex items-center justify-center text-[#063B2A]">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#063B2A] font-display">
                    Your cart is waiting.
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 max-w-xs leading-relaxed">
                    Add your everyday essentials and place your order directly through WhatsApp in one click.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#063B2A] text-white text-xs font-bold rounded-xl hover:bg-[#0B5A38] transition-all cursor-pointer shadow-sm"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-[#E8E2D2] text-xs">
                  <span className="font-semibold text-neutral-600">Selected Products</span>
                  <button
                    onClick={clearCart}
                    className="text-red-700 hover:text-red-900 font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-white rounded-xl border border-[#E8E2D2] flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-[10px] text-[#0B5A38] font-bold uppercase">
                          <span>{item.product.brand}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.product.packSize}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#171717] truncate leading-tight mt-0.5">
                          {item.product.name}
                        </h4>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-xs font-extrabold text-[#063B2A] tabular-nums">
                            ₹{item.product.price * item.quantity}
                          </span>
                          <span className="text-[10px] text-neutral-400">
                            (₹{item.product.price} each)
                          </span>
                        </div>
                      </div>

                      {/* Stepper & Delete */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="flex items-center bg-[#F9F6ED] border border-[#E8E2D2] rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:text-black rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold tabular-nums px-2 min-w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-neutral-600 hover:text-black rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 text-neutral-400 hover:text-red-600 rounded"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Delivery & Note Details */}
                <div className="pt-2 space-y-3">
                  <div className="bg-white p-3 rounded-xl border border-[#E8E2D2] space-y-2">
                    <label className="text-xs font-bold text-[#063B2A] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F4C400]" />
                      <span>Village Delivery Address / Landmark (Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="e.g. Near Ramalayam, House #2-44, Main Bazar"
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8E2D2] focus:border-[#063B2A] focus:outline-none bg-[#FFFDF5]"
                    />
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-[#E8E2D2] space-y-2">
                    <label className="text-xs font-bold text-[#063B2A] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#F4C400]" />
                      <span>Special Instructions for Suresh & Ganesh</span>
                    </label>
                    <input
                      type="text"
                      value={customerNote}
                      onChange={(e) => setCustomerNote(e.target.value)}
                      placeholder="e.g. Please bring change for ₹500, pack gently"
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8E2D2] focus:border-[#063B2A] focus:outline-none bg-[#FFFDF5]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer with Calculations & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E8E2D2] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Items Total ({totalItems})</span>
                  <span className="tabular-nums font-semibold">₹{subtotal + totalSavings}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-[#0B5A38] font-bold">
                    <span>Store Savings</span>
                    <span className="tabular-nums">- ₹{totalSavings}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-[#063B2A] pt-2 border-t border-dashed border-[#E8E2D2]">
                  <span>Estimated Total</span>
                  <span className="tabular-nums text-xl text-[#063B2A]">₹{subtotal}</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-tight">
                  Final bill verified on WhatsApp based on actual weight and stock.
                </p>
              </div>

              {/* Order on WhatsApp Primary CTA */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 bg-[#F4C400] hover:bg-[#e2b500] text-[#063B2A] rounded-xl font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>ORDER VIA WHATSAPP</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B5A38]" />
                <span>Direct message to {STORE_INFO.name} ({STORE_INFO.phone1.name})</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
