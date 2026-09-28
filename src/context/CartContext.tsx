import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, STORE_INFO } from '../data/storeData';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  totalSavings: number;
  sendWhatsAppOrder: (customerNote?: string, deliveryAddress?: string) => void;
  lastAddedProduct: Product | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kirana_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('kirana_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setLastAddedProduct(product);
    setTimeout(() => {
      setLastAddedProduct((curr) => (curr?.id === product.id ? null : curr));
    }, 2500);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalMrp = cart.reduce(
    (sum, item) => sum + item.product.mrp * item.quantity,
    0
  );

  const totalSavings = Math.max(0, totalMrp - subtotal);

  const sendWhatsAppOrder = (customerNote?: string, deliveryAddress?: string) => {
    if (cart.length === 0) return;

    const itemList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name} (${item.product.packSize}) × ${item.quantity} = ₹${item.product.price * item.quantity}`
      )
      .join('\n');

    let message = `Hello *${STORE_INFO.name}* (${STORE_INFO.subName}),\n\nI would like to place an order from your online store:\n\n${itemList}\n\n*Estimated Total: ₹${subtotal}*\n(Estimated Savings: ₹${totalSavings})`;

    if (deliveryAddress && deliveryAddress.trim()) {
      message += `\n\n*Delivery Address / Village Landmark:*\n${deliveryAddress.trim()}`;
    }

    if (customerNote && customerNote.trim()) {
      message += `\n\n*Customer Note:*\n${customerNote.trim()}`;
    }

    message += `\n\nPlease confirm product availability and final bill amount.\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        totalSavings,
        sendWhatsAppOrder,
        lastAddedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
