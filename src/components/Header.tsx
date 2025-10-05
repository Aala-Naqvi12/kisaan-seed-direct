import { Button } from "@/components/ui/button";
import { Sprout, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { language, setLanguage, t, getLanguageName } = useLanguage();
  
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Kisaan Bazaar</span>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
