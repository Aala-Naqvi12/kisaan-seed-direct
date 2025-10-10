import { Button } from "@/components/ui/button";
import { Sprout, Languages, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const { language, setLanguage, t, getLanguageName } = useLanguage();
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  
  const languages = ['ur', 'en', 'pa', 'sd', 'ps', 'bal', 'shina'] as const;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'hero', label: t({ ur: 'ہوم', en: 'Home', pa: 'ਘਰ', sd: 'گهر', ps: 'کور', bal: 'گھر', shina: 'گھر' }) },
    { id: 'marketplace', label: t({ ur: 'مارکیٹ پلیس', en: 'Marketplace', pa: 'ਬਾਜ਼ਾਰ', sd: 'بازار', ps: 'بازار', bal: 'بازار', shina: 'بازار' }) },
    { id: 'agristore', label: t({ ur: 'ایگری سٹور', en: 'Agri Store', pa: 'ਖੇਤੀ ਸਟੋਰ', sd: 'زرعي اسٽور', ps: 'کرنیز پلورنځی', bal: 'زرعی سٹور', shina: 'زرعی سٹور' }) },
    { id: 'nutrition', label: t({ ur: 'غذائیت منصوبہ', en: 'Nutrition Plan', pa: 'ਪੋਸ਼ਣ ਯੋਜਨਾ', sd: 'غذائيت منصوبو', ps: 'تغذیه پلان', bal: 'غذائیت منصوبہ', shina: 'غذائیت منصوبہ' }) },
    { id: 'how-it-works', label: t({ ur: 'کیسے کام کرتا ہے', en: 'How It Works', pa: 'ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ', sd: 'ڪيئن ڪم ڪري ٿو', ps: 'څنګه کار کوي', bal: 'کتیں کار کنت', shina: 'کیا کم کریلو' }) },
    { id: 'pricing', label: t({ ur: 'قیمتیں', en: 'Pricing', pa: 'ਕੀਮਤਾਂ', sd: 'قيمتون', ps: 'بیې', bal: 'قیمتاں', shina: 'قیمتیں' }) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-card via-primary/5 to-card backdrop-blur-md border-b border-primary/20 shadow-soft">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-primary/70 shadow-soft">
              <Sprout className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Kisaan Bazaar</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 min-w-[120px]"
              >
                <Languages className="h-4 w-4" />
                <span>{getLanguageName(language)}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={language === lang ? 'bg-primary/10' : ''}
                >
                  {getLanguageName(lang)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Cart */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>
                  {t({
                    ur: "خریداری کی ٹوکری",
                    en: "Shopping Cart",
                    pa: "خریداری دی ٹوکری",
                    sd: "خريداري جي ٽوڪري",
                    ps: "د پیرودلو ټوکری",
                    bal: "خریداری ئی ٹوکری",
                    shina: "خریداری جی ٹوکری"
                  })}
                </SheetTitle>
              </SheetHeader>
              
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
                  <ShoppingCart className="h-16 w-16 mb-4 opacity-50" />
                  <p>{t({
                    ur: "آپ کی ٹوکری خالی ہے",
                    en: "Your cart is empty",
                    pa: "تہاڈی ٹوکری خالی اے",
                    sd: "توهان جي ٽوڪري خالي آهي",
                    ps: "ستاسو ټوکری خالی دی",
                    bal: "شمی ٹوکری خالی انت",
                    shina: "تھے ٹوکری خالی چھے"
                  })}</p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto py-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 mb-4 p-4 border rounded-lg">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.seller}</p>
                          <p className="text-sm font-bold text-primary">PKR {item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-semibold w-8 text-center">{item.quantity}</span>
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="icon" 
                              variant="destructive" 
                              className="h-6 w-6 ml-auto"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>{t({
                        ur: "کل رقم",
                        en: "Total",
                        pa: "کل رقم",
                        sd: "ڪل رقم",
                        ps: "ټول رقم",
                        bal: "کل رقم",
                        shina: "کل رقم"
                      })}</span>
                      <span className="text-primary">PKR {totalPrice.toLocaleString()}</span>
                    </div>
                    <Button className="w-full" size="lg">
                      {t({
                        ur: "چیک آؤٹ",
                        en: "Checkout",
                        pa: "چیک آؤٹ",
                        sd: "چيڪ آئوٽ",
                        ps: "چک آوټ",
                        bal: "چیک آؤٹ",
                        shina: "چیک آؤٹ"
                      })}
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
