import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "@/hooks/use-toast";
import { useLanguage } from './LanguageContext';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  seller: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { t } = useLanguage();

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        toast({
          title: t({
            ur: "ٹوکری میں شامل",
            en: "Added to Cart",
            pa: "ٹوکری وچ شامل",
            sd: "ٽوڪري ۾ شامل",
            ps: "ټوکری ته اضافه شوه",
            bal: "ٹوکری ءَ شامل",
            shina: "ٹوکری می شامل"
          }),
          description: t({
            ur: `${item.name} کی مقدار بڑھا دی گئی`,
            en: `Increased quantity of ${item.name}`,
            pa: `${item.name} دی مقدار ودھا دتی`,
            sd: `${item.name} جي مقدار وڌائي وئي`,
            ps: `د ${item.name} مقدار زیات شو`,
            bal: `${item.name} ئی مقدار زیات بوتگ`,
            shina: `${item.name} جی مقدار زیات تھیلی`
          }),
        });
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast({
        title: t({
          ur: "ٹوکری میں شامل",
          en: "Added to Cart",
          pa: "ٹوکری وچ شامل",
          sd: "ٽوڪري ۾ شامل",
          ps: "ټوکری ته اضافه شوه",
          bal: "ٹوکری ءَ شامل",
          shina: "ٹوکری می شامل"
        }),
        description: t({
          ur: `${item.name} ٹوکری میں شامل کر دیا گیا`,
          en: `${item.name} added to cart`,
          pa: `${item.name} ٹوکری وچ شامل کر دتا گیا`,
          sd: `${item.name} ٽوڪري ۾ شامل ڪيو ويو`,
          ps: `${item.name} ټوکری ته اضافه شو`,
          bal: `${item.name} ٹوکری ءَ شامل بوتگ`,
          shina: `${item.name} ٹوکری می شامل تھیلی`
        }),
      });
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      totalItems,
      totalPrice 
    }}>
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
